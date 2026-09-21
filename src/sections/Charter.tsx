import { Ban, Compass, Quote, Target } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const PRINCIPLES = [
  {
    title: '关系先于教育',
    desc: '沟通的所有方法都有一个前提——先连接，后纠正。关系紧张时，任何学习方法都推不动。',
  },
  {
    title: '稳定大于完美',
    desc: '计划执行允许 70 分，绝不允许破罐破摔。中断一天就当天恢复，不复盘自责。',
  },
  {
    title: '改变自己，不改造女儿',
    desc: '本项目的对象是我自己。女儿是否改变是长期结果，不是我的直接 KPI。',
  },
  {
    title: '小步快跑',
    desc: '每周只聚焦 1~2 个微改变，不贪多。',
  },
  {
    title: '写下来才算数',
    desc: '所有复盘、感悟、冲突记录必须落到文件里，只靠记忆等于没做。',
  },
]

const BOUNDARIES = [
  '不监控女儿的学习数据、不查手机、不搞突然袭击',
  '不代替女儿做学习计划——她的计划她做主，我只提供资源和陪伴',
  '不在情绪上头时做教育决策——先执行"情绪暂停卡"',
  '不把 AI 的建议当圣旨——任何方法先试一周，有效再保留',
]

const GOALS_90 = [
  '四本手册完成初读，沟通手册积累至少 10 条实战记录',
  '每周日晚 30 分钟复盘的习惯，连续执行 ≥ 10 周',
  '与女儿建立至少 1 个固定的共同学习 / 交流时段',
  '情绪暂停卡在冲突中实际使用 ≥ 5 次',
]

export default function Charter() {
  return (
    <section id="charter" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
      <p className="text-sm font-medium tracking-widest text-primary">CHARTER · 先读这个</p>
      <h2 className="mt-2 font-serif-sc text-3xl font-black sm:text-4xl">项目章程</h2>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-serif-sc">
                <Compass className="h-5 w-5 text-primary" />
                为什么启动这个项目
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm leading-relaxed text-muted-foreground">
              <p>
                在 AI 辅导女儿学习的过程中，我意识到两个事实：辅导内容之外的问题更影响结果——怎么开口、怎么回应冲突、怎么保持自己的稳定，往往决定了辅导有没有效果；身教大于言传——16 岁的孩子对"被要求做什么"高度敏感，但对"父母自己怎么做"会默默观察。
              </p>
              <p className="font-medium text-foreground">总目标（12 个月）：成为女儿眼中"稳定、可对话、在学习上自己也有追求"的父亲。</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-serif-sc">
                <Target className="h-5 w-5 text-primary" />
                90 天阶段目标
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {GOALS_90.map((g) => (
                  <li key={g} className="flex items-start gap-3 text-sm leading-relaxed">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                      ✓
                    </span>
                    <span>{g}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/30 bg-primary/[0.03]">
            <CardContent className="pt-6">
              <Quote className="mb-3 h-5 w-5 text-primary" />
              <blockquote className="font-serif-sc text-base leading-loose">
                我 49 岁，改变自己几十年的说话和思维习惯，不可能一帆风顺。一次失控的吼叫不等于项目失败，它只是一条需要记录和分析的数据。女儿的冷淡可能恰恰说明她在长大、在试探边界，这不是我做错了什么。我只对"我有没有比上周做得好一点"负责。
              </blockquote>
              <p className="mt-3 text-xs text-muted-foreground">—— 遇到挫折时重读这段话（每次月度复盘检查章程是否需要修订）</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-serif-sc">五条核心原则</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-4">
                {PRINCIPLES.map((p, i) => (
                  <li key={p.title} className="flex gap-4">
                    <span className="font-serif-sc text-2xl font-black text-primary/25">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <p className="font-serif-sc font-bold">{p.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-serif-sc">
                <Ban className="h-5 w-5 text-destructive" />
                边界：本项目不做什么
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {BOUNDARIES.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm leading-relaxed">
                    <Badge variant="outline" className="mt-0.5 shrink-0 border-destructive/40 text-destructive">
                      不做
                    </Badge>
                    <span className="text-muted-foreground">{b}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
