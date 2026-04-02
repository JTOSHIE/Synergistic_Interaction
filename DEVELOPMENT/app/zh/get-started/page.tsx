// V7 §6: Mandarin get-started page
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '申请品类评估 — 协同互动',
  description: '联系协同互动，开始您的澳大利亚零售合规架构评估。我们将在一个工作日内回复，提供针对您品类的架构建议。',
};

export default function ZhGetStartedPage() {
  return (
    <main lang="zh-Hans" className="pt-28 min-h-screen">
      <div className="max-w-2xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-si-white mb-4" style={{ fontFamily: 'Noto Sans SC, PingFang SC, Microsoft YaHei, sans-serif' }}>
          申请品类评估
        </h1>
        <p className="text-si-white-muted mb-8 leading-relaxed" style={{ fontFamily: 'Noto Sans SC, PingFang SC, Microsoft YaHei, sans-serif' }}>
          请通过英文版表单提交评估申请。我们的团队会以您偏好的语言回复，提供针对您品类组合的具体合规架构建议。
        </p>
        <div className="p-6 rounded-2xl border border-si-teal/20 bg-si-teal/5 mb-8">
          <p className="text-si-teal text-sm font-medium mb-2" style={{ fontFamily: 'Noto Sans SC, PingFang SC, Microsoft YaHei, sans-serif' }}>
            如需中文咨询
          </p>
          <p className="text-si-white-muted text-sm leading-relaxed" style={{ fontFamily: 'Noto Sans SC, PingFang SC, Microsoft YaHei, sans-serif' }}>
            请在表单的"备注"栏注明"中文服务"，我们将安排普通话咨询。
          </p>
        </div>
        <Link
          href="/get-started"
          className="inline-flex items-center gap-2 px-8 py-4 bg-si-teal text-si-bg font-semibold rounded-xl hover:bg-si-teal-light transition-colors"
        >
          英文申请表单 →
        </Link>
      </div>
    </main>
  );
}
