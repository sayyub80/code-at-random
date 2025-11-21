import { NextResponse } from 'next/server';
import { ROLE_STANDARDS } from '@/lib/constants';

export async function POST(request: Request) {
  const { role, skills } = await request.json();

  if (!role || !ROLE_STANDARDS[role]) {
    return NextResponse.json({ error: "Invalid Role" }, { status: 400 });
  }

  // Normalize inputs
  const standard = ROLE_STANDARDS[role];
  const userSkills = (Array.isArray(skills) ? skills : skills.split(','))
    .map((s: string) => s.trim().toLowerCase());
  
  const matched = standard.filter(s => userSkills.includes(s.toLowerCase()));
  const missing = standard.filter(s => !userSkills.includes(s.toLowerCase()));
  const score = Math.round((matched.length / standard.length) * 100);

  return NextResponse.json({ role, matched, missing, score });
}