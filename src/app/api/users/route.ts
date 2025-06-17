import { NextResponse } from 'next/server';

export const runtime = 'edge';
export const revalidate = 60;

export async function GET() {
  return NextResponse.json([]);
}

export async function POST() {
  return NextResponse.json({});
}
