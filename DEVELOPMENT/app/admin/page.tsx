// V7 §4.4: Human-in-the-loop validation dashboard — Principal reviews and approves AI-triaged items
// Protected by ADMIN_SECRET environment variable
// Access via: /admin?secret=YOUR_SECRET
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Feed Validation Dashboard — Synergistic Interaction',
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return (
    <main className="pt-20 min-h-screen px-4">
      <div className="max-w-4xl mx-auto py-12">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-si-white mb-2">Regulatory Feed Validation</h1>
          <p className="text-si-white-muted text-sm">
            V7 §4.4 Human-in-the-Loop Stage. Review AI-triaged regulatory items before they go live.
            Weekly maintenance target: 2 minutes.
          </p>
        </div>
        <AdminDashboardClient />
      </div>
    </main>
  );
}

function AdminDashboardClient() {
  return (
    <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
      <p className="text-si-white-muted text-sm leading-relaxed">
        <strong className="text-si-white">Setup required:</strong> This dashboard requires Vercel KV to store
        pending items and the regulatory intelligence pipeline to be fully operational.
      </p>
      <div className="mt-4 space-y-2 text-xs text-si-white-dim">
        <p>1. Provision Vercel KV in your project dashboard (Storage → KV)</p>
        <p>2. Add KV_REST_API_URL and KV_REST_API_TOKEN to environment variables</p>
        <p>3. Add OPENAI_API_KEY to environment variables</p>
        <p>4. Add CRON_SECRET to environment variables</p>
        <p>5. Trigger the first cron run manually: GET /api/regulatory-feed/ingest</p>
        <p>6. Pending items will appear here for approval</p>
      </div>
      <div className="mt-6 p-4 rounded-xl bg-si-teal/5 border border-si-teal/10">
        <p className="text-si-teal text-xs font-medium mb-1">Weekly workflow (target: 2 minutes)</p>
        <p className="text-si-white-dim text-xs leading-relaxed">
          The Vercel Cron job runs daily at 6:00 AM AEST, ingests RSS feeds from ACCC/CAV/TGA/ESV/Legislation,
          uses GPT-4o-mini to triage for retail relevance, and stages approved items here. You review the AI summary,
          source link, and risk tier — then click Approve, Edit, or Reject. Approved items deploy instantly.
        </p>
      </div>
    </div>
  );
}
