import QuoteGenerator from "./QuoteGenerator";
import quotesData from "./data/quotes.json";

export default function Page() {
  return <QuoteGenerator quotesData={quotesData} />;
}
