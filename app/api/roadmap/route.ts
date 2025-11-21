import { NextResponse } from 'next/server';
import { MOCK_ROADMAPS } from '@/lib/constants';

export async function POST(request: Request) {
  const { role } = await request.json();
  
  const roadmap = MOCK_ROADMAPS[role] || [
    { time: "Phase 1", title: "Basics", items: ["Core Concepts", "Syntax", "Tools"] },
    { time: "Phase 2", title: "Intermediate", items: ["Frameworks", "Databases", "APIs"] },
    { time: "Phase 3", title: "Advanced", items: ["System Design", "Security", "Scaling"] }
  ];

  return NextResponse.json({ roadmap });
}