// V7 §6: Mandarin home page — transcreated per §6.3 guidelines
// NOT literal translation — compliance framed as competitive advantage, not regulatory burden
// V7 §6.2: SSR required for Baidu crawler compatibility
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '品类管理顾问 | 澳大利亚 — 协同互动',
  description: '专业澳大利亚零售合规架构顾问。九组件合规体系，符合ISO 37301:2021国际标准。助力零售商建立竞争优势，实现无上限规模扩张。',
  alternates: {
    canonical: 'https://synergisticinteraction.com.au/zh',
    languages: {
      'en': 'https://synergisticinteraction.com.au',
      'zh-Hans': 'https://synergisticinteraction.com.au/zh',
    },
  },
};

const components = [
  { num: '01', zh: '产品合规验证', en: 'Product Compliance Verification' },
  { num: '02', zh: '供应链合规审计', en: 'Supply Chain Compliance Auditing' },
  { num: '03', zh: '品类专项合规映射', en: 'Category-Specific Compliance Mapping' },
  { num: '04', zh: '监管风险评估', en: 'Regulatory Risk Assessment' },
  { num: '05', zh: '合规文件管理', en: 'Compliance Documentation Management' },
  { num: '06', zh: '实时合规监控', en: 'Real-Time Compliance Monitoring' },
  { num: '07', zh: '第三方检测报告要求', en: 'Third-Party Test Report Requirements' },
  { num: '08', zh: '进口商记录验证', en: 'Importer-of-Record Verification' },
  { num: '09', zh: '合规文化与持续改进', en: 'Compliance Culture & Continuous Improvement' },
];

export default function ZhHomePage() {
  return (
    <main lang="zh-Hans">
      {/* Hero */}
      <section className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-si-gradient" aria-hidden="true" />
        <div
          className="absolute inset-0 opacity-20"
          style={{ background: 'radial-gradient(ellipse at 60% 30%, rgba(0,201,167,0.15) 0%, transparent 60%)' }}
          aria-hidden="true"
        />
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-si-teal/10 border border-si-teal/20 text-si-teal text-xs font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-si-teal" />
            ISO 37301:2021 国际标准对齐 · 九组件合规体系
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-si-white mb-6 leading-tight" style={{ fontFamily: 'Noto Sans SC, PingFang SC, Microsoft YaHei, sans-serif' }}>
            {/* V7 §6.3: Transcreated — compliance as competitive foundation, not regulatory burden */}
            合规架构，是您{' '}
            <span className="text-si-teal">无限扩张的竞争基础</span>
          </h1>

          <p className="text-xl text-si-white-muted mb-8 leading-relaxed max-w-2xl" style={{ fontFamily: 'Noto Sans SC, PingFang SC, Microsoft YaHei, sans-serif' }}>
            {/* V7 §6.3: Transcreated — enable aggressive scaling, not avoid government penalties */}
            在澳大利亚零售市场，专业合规架构（合规架构）不是监管负担，而是实现快速规模扩张的竞争基础。
            拥有完善合规体系的零售商，能够更快引入供应商、更自信地进入新品类、抢占竞争对手因合规问题无法触达的市场份额。
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/zh/get-started"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-si-teal text-si-bg font-semibold rounded-xl hover:bg-si-teal-light transition-colors"
              style={{ fontFamily: 'Noto Sans SC, PingFang SC, Microsoft YaHei, sans-serif' }}
            >
              申请品类评估
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-white/20 text-si-white rounded-xl hover:border-si-teal hover:text-si-teal transition-colors text-sm"
            >
              English Version
            </Link>
          </div>
        </div>
      </section>

      {/* Nine Components — Mandarin */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-si-white mb-2" style={{ fontFamily: 'Noto Sans SC, PingFang SC, Microsoft YaHei, sans-serif' }}>
            九组件合规架构
          </h2>
          <p className="text-si-white-muted mb-10 text-sm" style={{ fontFamily: 'Noto Sans SC, PingFang SC, Microsoft YaHei, sans-serif' }}>
            符合ISO 37301:2021国际标准。每个组件均经过澳大利亚消费品法规环境验证。
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            {components.map((c) => (
              <div key={c.num} className="p-4 rounded-xl border border-white/10 bg-white/5">
                <span className="text-xs font-mono text-si-teal mb-2 block">{c.num}</span>
                <p className="text-si-white font-medium text-sm mb-1" style={{ fontFamily: 'Noto Sans SC, PingFang SC, Microsoft YaHei, sans-serif' }}>
                  {c.zh}
                </p>
                <p className="text-si-white-dim text-xs">{c.en}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section — transcreated framing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-si-bg-secondary border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-si-white mb-6" style={{ fontFamily: 'Noto Sans SC, PingFang SC, Microsoft YaHei, sans-serif' }}>
            {/* V7 §6.3: Frame as protected competitive position, not government threat */}
            未管理的合规风险 = 可规避的竞争劣势
          </h2>
          <p className="text-si-white-muted leading-relaxed mb-8 max-w-2xl" style={{ fontFamily: 'Noto Sans SC, PingFang SC, Microsoft YaHei, sans-serif' }}>
            {/* V7 §6.3 approved transcreation */}
            在澳大利亚零售市场，未经管理的产品合规风险在财务上可能是毁灭性的——每项违规的财务敞口可达5000万澳元或以上。
            专业合规架构将这一敞口转化为受保护的竞争优势。
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { value: '5000万澳元+', label: '单项违规最高处罚', sub: '澳大利亚消费者法 s.224 条' },
              { value: '1,736×', label: '最低合规投资回报率', sub: '咨询投资 vs 法律风险敞口' },
              { value: '25年', label: '零售合规方法论积累', sub: '澳大利亚、美国、英国零售经验' },
            ].map((item) => (
              <div key={item.value} className="text-center p-6 rounded-xl border border-white/10 bg-white/5">
                <p className="text-3xl font-bold text-si-teal mb-2">{item.value}</p>
                <p className="text-si-white text-sm font-medium mb-1" style={{ fontFamily: 'Noto Sans SC, PingFang SC, Microsoft YaHei, sans-serif' }}>
                  {item.label}
                </p>
                <p className="text-si-white-dim text-xs" style={{ fontFamily: 'Noto Sans SC, PingFang SC, Microsoft YaHei, sans-serif' }}>
                  {item.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-si-white mb-4" style={{ fontFamily: 'Noto Sans SC, PingFang SC, Microsoft YaHei, sans-serif' }}>
            开始品类合规评估
          </h2>
          <p className="text-si-white-muted mb-8 text-sm" style={{ fontFamily: 'Noto Sans SC, PingFang SC, Microsoft YaHei, sans-serif' }}>
            合规架构投资根据您的品类组合和合规风险敞口量身定制。初次咨询将针对您的具体情况进行架构映射。
          </p>
          <Link
            href="/zh/get-started"
            className="inline-flex items-center gap-2 px-8 py-4 bg-si-teal text-si-bg font-semibold rounded-xl hover:bg-si-teal-light transition-colors"
            style={{ fontFamily: 'Noto Sans SC, PingFang SC, Microsoft YaHei, sans-serif' }}
          >
            申请评估
          </Link>
        </div>
      </section>
    </main>
  );
}
