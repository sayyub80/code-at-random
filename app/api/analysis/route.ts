import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Analysis from '../../../model/Analysis';

// GET: Fetch a specific analysis by ID (passed via query param ?id=...)
export async function GET(request: Request) {
  await connectDB();
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 });

  try {
    const analysis = await Analysis.findById(id);
    return NextResponse.json(analysis);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
}

// POST: Save a new analysis
export async function POST(request: Request) {
  await connectDB();
  const body = await request.json();
  
  try {
    const newAnalysis = await Analysis.create(body);
    return NextResponse.json(newAnalysis, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Failed to save' }, { status: 500 });
  }
}