"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function QuoteGenerator({ quotesData }: { quotesData: any[] }) {
  const [topic, setTopic] = useState("");
  const [results, setResults] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const foundTopic = quotesData.find(
      (item) => item.topic.toLowerCase() === topic.toLowerCase()
    );
    setResults(foundTopic ? foundTopic.quotes : ["No quotes found for this topic."]);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">✨ Motivational Quote Generator</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Enter topic (e.g. success, motivation)"
            className="py-6 text-lg"
          />
          <Button type="submit" className="w-full py-6">Get Quotes</Button>
        </form>
        {results.length > 0 && (
          <div className="mt-8 space-y-4">
            <h2 className="text-xl font-semibold">Your Quotes:</h2>
            {results.map((quote, index) => (
              <Card key={index} className="bg-white shadow-md">
                <CardContent className="p-4">
                  <p className="text-gray-700">"{quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
