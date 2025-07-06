"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
interface Quote {
  _id: string;
  content: string;
  author: string;
  tags: string[];
}
export default function QuoteGenerator() {
  const [topic, setTopic] = useState("");
  const [category, setCategory] = useState("");
  const [results, setResults] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [favorites, setFavorites] = useState<Quote[]>([]);
  const [categories, setCategories] = useState<string[]>([
    "inspirational",
    "success",
    "life",
    "love",
    "wisdom",
    "happiness",
    "motivational",
  ]);
  // Load favorites from localStorage
  useEffect(() => {
    const favs = localStorage.getItem("favoriteQuotes");
    if (favs) setFavorites(JSON.parse(favs));
  }, []);
  // Save favorites to localStorage
  useEffect(() => {
    localStorage.setItem("favoriteQuotes", JSON.stringify(favorites));
  }, [favorites]);
  // Basic keyword similarity function
  function keywordSimilarity(a: string, b: string) {
    const aWords = a.toLowerCase().split(/\W+/);
    const bWords = b.toLowerCase().split(/\W+/);
    const setA = new Set(aWords);
    let score = 0;
    for (const word of bWords) {
      if (setA.has(word)) score++;
    }
    return score;
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResults([]);
    try {
      // ZenQuotes API: https://zenquotes.io/api/quotes or /api/quotes/[category]
      let url = "/api/quotes";
      if (category) url += `?category=${encodeURIComponent(category)}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch quotes");
      const data = await res.json();
      // ZenQuotes returns array of {q: string, a: string, c: string, h: string}
      let quotes = Array.isArray(data) ? data : [];
      // Filter/rank by topic if provided
      if (topic) {
        quotes = quotes
          .map((q: any) => ({ ...q, _score: keywordSimilarity(topic, q.q) }))
          .filter((q: any) => q._score > 0)
          .sort((a: any, b: any) => b._score - a._score)
          .slice(0, 10);
      } else {
        quotes = quotes.slice(0, 10);
      }
      if (quotes.length > 0) {
        // Map ZenQuotes format to Quote type
        setResults(
          quotes.map((q: any, i: number) => ({
            _id: q.id || q.h || String(i),
            content: q.q,
            author: q.a,
            tags: category ? [category] : [],
          }))
        );
      } else {
        setResults([]);
        setError("No relevant quotes found for this topic.");
      }
    } catch (err: any) {
      setError(err.message || "Error fetching quotes");
    } finally {
      setLoading(false);
    }
  };

  function handleFavorite(quote: Quote) {
    if (favorites.find((q) => q._id === quote._id)) return;
    setFavorites([...favorites, quote]);
  }

  function handleRemoveFavorite(id: string) {
    setFavorites(favorites.filter((q) => q._id !== id));
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-purple-200 to-pink-100 py-12 px-4 flex flex-col items-center">
      <div className="max-w-md w-full mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          ✨ Motivational Quote Generator
        </h1>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white/70 rounded-xl shadow-lg p-6"
        >
          <div>
            <label htmlFor="category-select" className="block mb-2 font-medium">
              Select Category
            </label>
            <select
              id="category-select"
              className="w-full p-2 rounded border"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">All</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </option>
              ))}
            </select>
          </div>
          {}
          <Button type="submit" className="w-full py-6" disabled={loading}>
            {loading ? "Loading..." : "Get Quotes"}
          </Button>
        </form>
        {error && <div className="text-red-500 mt-4 text-center">{error}</div>}
        {results.length > 0 && (
          <div className="mt-8 space-y-4">
            <h2 className="text-xl font-semibold">Your Quotes:</h2>
            {results.map((quote) => (
              <div
                key={quote._id}
                className="relative rounded-xl overflow-hidden shadow-lg bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://source.unsplash.com/600x300/?nature,landscape,sky,motivation)",
                }}
              >
                <div className="bg-white/80 p-4">
                  <p className="text-gray-700 text-lg font-medium">
                    "{quote.content}"
                  </p>
                  <p className="text-right text-sm text-gray-500 mt-2">
                    - {quote.author}
                  </p>
                  <Button
                    className="absolute top-2 right-2 text-xs px-2 py-1"
                    variant="secondary"
                    onClick={() => handleFavorite(quote)}
                  >
                    {favorites.find((q) => q._id === quote._id) ? "★" : "☆"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
        {favorites.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-semibold mb-4">⭐ Favorite Quotes</h2>
            <div className="space-y-4">
              {favorites.map((quote) => (
                <div
                  key={quote._id}
                  className="relative rounded-xl overflow-hidden shadow bg-gradient-to-r from-yellow-100 to-pink-100"
                >
                  <div className="p-4">
                    <p className="text-gray-800 text-lg font-medium">
                      "{quote.content}"
                    </p>
                    <p className="text-right text-sm text-gray-500 mt-2">
                      - {quote.author}
                    </p>
                    <Button
                      className="absolute top-2 right-2 text-xs px-2 py-1"
                      variant="destructive"
                      onClick={() => handleRemoveFavorite(quote._id)}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
