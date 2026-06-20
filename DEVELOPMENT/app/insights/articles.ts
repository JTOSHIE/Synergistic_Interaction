// Insights article content. One source of truth for the article pages under
// app/insights/[slug] and the cards on the Insights index. Australian English,
// no em dashes.

export interface ArticleBlock {
  type: 'p' | 'h2';
  text: string;
}

export interface Article {
  slug: string;
  category: string;
  title: string;
  description: string;
  blocks: ArticleBlock[];
}

export const articles: Article[] = [
  {
    slug: 'human-in-the-loop',
    category: 'Method',
    title: 'Why the smartest AI rule is to keep a human in the loop',
    description:
      'The one rule that decides whether AI actually works inside a real business: a person stays accountable for anything that matters.',
    blocks: [
      {
        type: 'p',
        text: 'There is a great deal of noise about how capable AI has become. Far less is said about the one rule that decides whether it actually works inside a real business. The rule is simple. A person stays accountable for anything that matters. AI produces the work, and a human reviews it, corrects it, and approves it before it goes anywhere. We call it build, review, approve, and it sits at the centre of everything we set up.',
      },
      {
        type: 'p',
        text: 'It sounds almost too obvious to state. The reason it needs stating is that the temptation to skip it grows exactly as the tools get better.',
      },
      { type: 'h2', text: 'Better output is more convincing, not more correct.' },
      {
        type: 'p',
        text: 'When AI output was clumsy, nobody was tempted to send it straight to a client. It plainly needed a human. The danger now is the opposite. The work comes back polished, confident and well formatted, and it reads as though it has already been checked. Most of the time it is right. Occasionally it is confidently wrong, a figure transposed, a clause invented, a source that does not exist. The more convincing the output, the easier it is to wave through, and the more expensive the one that slips past becomes.',
      },
      {
        type: 'p',
        text: 'So the discipline matters more as the technology improves, not less. The check is not a sign that you distrust the tool. It is the thing that lets you use a fast tool on work where being wrong has a real cost.',
      },
      { type: 'h2', text: 'The person keeps the judgement. The AI keeps the volume.' },
      {
        type: 'p',
        text: 'Build, review, approve is not about slowing your people down. It is about moving their time to where it is worth most. The machine carries the volume, the drafting, the formatting, the first pass at research, the repetitive production that used to eat the day. Your specialist spends their time on the part only they can do, reviewing, correcting and signing off. You get the speed of automation without handing over the steering wheel.',
      },
      {
        type: 'p',
        text: 'In practice it looks like this. A report is produced to the standard you would expect of the finished piece. The person accountable reads it, fixes what needs fixing, and approves it, or sends it back. Only approved work goes downstream. Nothing important ever runs unsupervised.',
      },
      { type: 'h2', text: 'It is also the standard Australia is setting.' },
      {
        type: 'p',
        text: "This is not only good practice, it is the direction of policy. Human oversight is one of the core principles of Australia's national AI ethics framework, and the updated Privacy Act expects businesses to be transparent about decisions made by automated systems. A business that builds a human checkpoint into its AI from the start is not bolting compliance on later. It is already working to the standard.",
      },
      {
        type: 'p',
        text: 'The smartest rule in AI is not a clever prompt or the newest model. It is keeping a person in charge of the things that carry your name. Get that right, and everything else AI can do becomes an asset rather than a risk.',
      },
    ],
  },
  {
    slug: 'right-ai-not-the-best-ai',
    category: 'Tools',
    title: 'You do not need the best AI. You need the right one.',
    description:
      'You do not need the most powerful model, you need the one that fits your tools, your budget, your data and your work.',
    blocks: [
      {
        type: 'p',
        text: 'Every few weeks a new model launches and another headline calls it the most powerful yet. It is easy to feel you should be on whatever is newest, and that anything older is leaving value on the table. For almost every business, that instinct is wrong. The best model is not the point. The right model for your work is.',
      },
      { type: 'h2', text: 'What actually decides the right tool.' },
      { type: 'p', text: 'Four things matter far more than the leaderboard.' },
      {
        type: 'p',
        text: 'The first is what you already run. If your business lives in Microsoft 365, Copilot sits inside the tools your people use all day, and that proximity is worth more than a marginally cleverer model they have to switch to. If you are on Google Workspace, the same logic points to Gemini.',
      },
      {
        type: 'p',
        text: 'The second is your budget. Models vary enormously in cost. Running the most expensive one on routine work is like couriering every letter. The sensible pattern is a mix, the cheaper models for high-volume routine work, and the stronger ones kept for the hard reasoning where they earn their cost.',
      },
      {
        type: 'p',
        text: 'The third is where your data is allowed to live. For many Australian businesses, particularly in health, legal and government-adjacent work, data residency and confidentiality are not negotiable. The right tool is the one that respects those limits, whatever it scores on a benchmark.',
      },
      {
        type: 'p',
        text: 'The fourth is the task itself. Heavy document and reasoning work suits one model. Quick drafting and summarising suits another. Voice and audio is a different tool again. Matching the tool to the job beats forcing one model to do everything.',
      },
      { type: 'h2', text: 'Platform-aware, not platform-loyal.' },
      {
        type: 'p',
        text: 'We do not sell a single platform, so we are free to choose the one that fits you. Usually the answer is not one tool at all, but a sensible combination, chosen around your systems, your budget and your rules. The newest release occasionally changes that answer. Most of the time it does not.',
      },
      { type: 'h2', text: 'The release treadmill is a distraction.' },
      {
        type: 'p',
        text: 'Chasing every launch is a cost in itself. It is time spent evaluating, retraining and reintegrating, for a gain your business may never feel. The model is rarely the thing holding you back. What holds most businesses back is that no tool has been configured around how they actually work, and no one has shown their people how to use it well. Fix that, and a perfectly ordinary model will outperform the newest one running with no setup behind it.',
      },
      {
        type: 'p',
        text: 'You do not need the best AI on the market. You need the one that fits your tools, your budget, your data and your work, set up properly and used well. That is a choice, not a chase.',
      },
    ],
  },
  {
    slug: 'fix-ai-fatigue',
    category: 'Adoption',
    title: 'AI fatigue is real, and here is how to fix it',
    description:
      'AI fatigue is real, and it is almost never the fault of the technology, it is a setup problem, and it is fixable.',
    blocks: [
      {
        type: 'p',
        text: 'A couple of years ago the worry was missing out. Everyone was talking about AI, and businesses felt they had to move or be left behind. The mood now is different. A lot of owners are quietly tired of it. They have tried the tools, paid for a few licences, sat through the hype, and the promised transformation has not arrived. That is AI fatigue, and it is real.',
      },
      { type: 'h2', text: 'What it looks like.' },
      {
        type: 'p',
        text: 'You can usually spot it. There is a Copilot or similar licence on the books that almost nobody uses. A few staff quietly paste work into a chatbot and hope for the best. A tool was bought, it did not deliver, and now there is a quiet scepticism about the whole thing. The energy that was there at the start has gone flat.',
      },
      { type: 'h2', text: 'Why it happens.' },
      {
        type: 'p',
        text: 'Here is the part that matters. The fatigue is almost never the fault of the technology. The tools genuinely work. What has usually gone wrong is that nothing was set up around how the business actually runs, and no one showed the team how to use it well. AI was handed over as a blank box and everyone was left to figure it out. A blank box, used without guidance, produces ordinary results and quiet frustration. That is not a technology failure. It is a setup failure.',
      },
      { type: 'h2', text: 'The fix is not more tools.' },
      {
        type: 'p',
        text: 'The instinct, when AI is not delivering, is to go shopping for a better one. That is the wrong move, and an expensive one. The fix is rarely another licence. It is configuration and training. The same model, configured to your business, your language, your standards and your workflows, and put in the hands of people who have been shown how to use it, produces something else entirely. That is the difference between staff dabbling and a business genuinely running on AI.',
      },
      { type: 'h2', text: 'Start with a clear, honest look.' },
      {
        type: 'p',
        text: 'The way out of fatigue is not a bigger leap, it is a smaller and clearer first step. Work out where AI will actually help your business, set that up properly, train the handful of people who will use it, and let one real result rebuild the confidence. That is exactly what a fixed-price readiness assessment is for. It replaces the vague pressure to do something with a plain plan for the few things worth doing.',
      },
      {
        type: 'p',
        text: 'If AI has gone flat in your business, you are not behind and you have not failed. You have most likely just been handed the tools without the setup. That is a fixable problem, and the fix is simpler, and cheaper, than buying more of what is already not working.',
      },
    ],
  },
  {
    slug: 'ai-governance-small-business',
    category: 'Governance',
    title: 'What AI governance actually means for a small business',
    description:
      'Strip away the jargon and AI governance is a set of sensible answers to fair questions about your data, your oversight and your accountability.',
    blocks: [
      {
        type: 'p',
        text: 'Governance is a word that sounds like it belongs to big corporations with compliance departments. It puts a lot of small business owners off before the conversation even starts. But strip away the jargon and AI governance is just a set of sensible answers to fair questions. Where does our data go. Who is responsible for what the AI produces. How do we know it is right. Every business using AI needs those answers, whatever its size.',
      },
      { type: 'h2', text: 'The four questions in plain terms.' },
      {
        type: 'p',
        text: 'Privacy. When your people use an AI tool, information goes into it. Governance is simply knowing what goes in, where it is held, and whether that is allowed for the kind of data you handle. For client records, health information or anything confidential, this is the first question, not an afterthought.',
      },
      {
        type: 'p',
        text: 'Oversight. Who checks the work. For anything that matters, the answer should always be a person. A human reviews and approves output before it is used. This is the build, review, approve discipline, and it is governance in its most practical form.',
      },
      {
        type: 'p',
        text: 'Accountability. When a piece of work goes out, someone is responsible for it, the person who reviewed and approved it, not the tool. The tool does not carry accountability. A named person does. Keeping that clear is most of governance.',
      },
      {
        type: 'p',
        text: 'Transparency. Being honest, with clients and staff, about where AI is used in your work, and being able to explain a decision rather than pointing at a black box.',
      },
      { type: 'h2', text: 'What Australia now expects.' },
      {
        type: 'p',
        text: 'This is no longer just good manners. The updated Australian Privacy Act expects businesses to be transparent about decisions made by automated systems. The national AI ethics framework sets human oversight, fairness, accountability and transparency as the standard for responsible AI. The direction is clear, and it points straight at the discipline described above.',
      },
      { type: 'h2', text: 'You do not need a compliance department.' },
      {
        type: 'p',
        text: 'The good news for a smaller business is that none of this requires a policy team or a pile of paperwork. It requires sensible rules built in from the start. Know where your data goes. Keep a person in charge of anything that matters. Be clear about who is accountable. Be honest about where AI is used. Build a system that respects those four things from day one, and you are governed, without ever bolting compliance on after the fact.',
      },
      {
        type: 'p',
        text: 'Governance is not the part of AI that slows you down. It is the part that lets you use AI on real work, with confidence, and sleep at night.',
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}
