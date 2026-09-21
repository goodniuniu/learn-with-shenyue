import { ArrowDown, CalendarCheck, Copy, HeartHandshake } from 'lucide-react'
import { Button } from '@/components/ui/button'

const STATS = [
  { value: '49', unit: '岁', label: '正在自我更新的父亲' },
  { value: '16', unit: '岁', label: '正在长大独立的女儿' },
  { value: '5', unit: '大支柱', label: '沟通 · 方法 · 自律 · 氛围 · 复盘' },
  { value: '30', unit: '分钟', label: '每周日晚的固定复盘' },
]

export default function Hero() {
  return (
    <section id="top" className="paper-texture relative overflow-hidden">
      <div className="pointer-events-none absolute -right-24 top-10 hidden select-none lg:block">
        <div className="vertical-text font-serif-sc text-7xl font-black text-primary/10">同行</div>
      </div>
      <div className="mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-center px-4 pb-16 pt-28 sm:px-6">
        <p className="mb-4 flex items-center gap-2 text-sm font-medium tracking-widest text-primary">
          <span className="inline-block h-px w-10 bg-primary" />
          一个父亲的成长与陪伴项目
        </p>
        <h1 className="font-serif-sc text-5xl font-black leading-tight tracking-wide sm:text-6xl lg:text-7xl">
          申悦学习
        </h1>
        <p className="mt-3 font-serif-sc text-2xl font-medium text-primary sm:text-3xl">
          AI 指导我同步学习
        </p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          在 AI 辅导女儿学习的过程中我发现：真正需要被辅导的，首先是我自己。
          我用学习带动女儿——做好亲子沟通、掌握科学的学习方法、保持自己的自律、
          营造家庭氛围，并用每周的复盘让改变真正发生。
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg" className="font-serif-sc">
            <a href="#playbooks">
              <HeartHandshake className="mr-2 h-4 w-4" />
              查看方法锦囊
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="font-serif-sc">
            <a href="#prompts">
              <Copy className="mr-2 h-4 w-4" />
              复制 AI 指令
            </a>
          </Button>
          <Button asChild size="lg" variant="ghost" className="font-serif-sc">
            <a href="#rhythm">
              <CalendarCheck className="mr-2 h-4 w-4" />
              本周节奏
            </a>
          </Button>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-lg border bg-card/80 p-4 shadow-sm backdrop-blur-sm"
            >
              <div className="font-serif-sc text-3xl font-bold text-primary">
                {s.value}
                <span className="ml-1 text-sm font-medium text-muted-foreground">{s.unit}</span>
              </div>
              <div className="mt-1 text-xs leading-relaxed text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>

        <a
          href="#charter"
          className="mt-12 flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
        >
          <ArrowDown className="h-4 w-4 animate-bounce" />
          从项目章程开始读
        </a>
      </div>
    </section>
  )
}
