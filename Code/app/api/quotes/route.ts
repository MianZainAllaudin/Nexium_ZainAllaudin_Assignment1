import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  let url = 'https://zenquotes.io/api/quotes';
  if (category) url = `https://zenquotes.io/api/quotes/${encodeURIComponent(category)}`;
  const res = await fetch(url);
  const data = await res.json();
  return NextResponse.json(data);
}
