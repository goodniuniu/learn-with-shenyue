import { CalendarCheck, HeartHandshake, Home, RefreshCcw, Sprout } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const PILLARS = [
  {
    icon: HeartHandshake,
    title: '亲子沟通',
    file: '01-亲子沟通 / 沟通手册',
    points: [
      '黄金四步：停 → 听 → 问 → 应',
      '非暴力沟通四要素：观察·感受·需要·请求',
      '5 个高频场景的具体话术卡',
      '父亲的禁忌清单（每周复盘对照）',
      '沟通记录模板：把冲突变成可分析的数据',
    ],
  },
  {
    icon: CalendarCheck,
    title: '学习方法',
    file: '02-学习方法 / 学习方法手册',
    points: [
      '大脑真相：合上书能提取出来，才是真学会',
      '检索练习 · 间隔重复 · 交错练习 · 费曼技巧',
      '如何不说教地引导女儿（先用"我"开头）',
      '49 岁开始学习的四条自用法则',
      '各科目元方法（她问时才展开）',
    ],
  },
  {
    icon: Sprout,
    title: '个人成长',
    file: '03-个人成长 / 自律手册',
    points: [
      '精力管理是自律的地基（睡眠·运动·固定流程）',
      '习惯设计四原则：执行意图·两分钟启动·习惯堆叠·环境',
      '三条微习惯起点，坚持 30 天再加',
      '情绪命名与"修复 > 不犯错"',
      '发火后 24 小时内的修复话术',
    ],
  },
  {
    icon: Home,
    title: '氛围打造',
    file: '04-氛围打造 / 家庭氛围手册',
    points: [
      '物理环境：家庭学习角 · 手机停机坪 · 便签墙',
      '每天固定的"共同学习时段"（核心仪式）',
      '每周一次不谈成绩的"爸爸时间"',
      '睡前 10 分钟：只说温暖的话',
      '冲突后的修复三句话与"重启仪式"',
    ],
  },
  {
    icon: RefreshCcw,
    title: '计划执行复盘',
    file: '05-计划复盘 / 周计划与复盘模板',
    points: [
      '周一 10 分钟定计划：本周只聚焦 1~2 件事',
      '每日打卡：学习 25 分钟 · 看见女儿 · 情绪平稳',
      '周日 30 分钟复盘：事实 → 模式 → 下周只改一件事',
      '月度复盘：模式分析 + 手册修订 + 章程进度检查',
      '把复盘记录贴给 AI 的"复盘教练"指令',
    ],
  },
]

export default function Pillars() {
  return (
    <section id="pillars" className="scroll-mt-20 bg-secondary/40 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-sm font-medium tracking-widest text-primary">FIVE PILLARS</p>
        <h2 className="mt-2 font-serif-sc text-3xl font-black sm:text-4xl">五大支柱</h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          项目内容按五个方向组织，每个方向有一本手册 + 可填写模板。手册不是读完就完的——遇到新方法、新感悟，直接编辑对应文件，让它长成你自己的书。
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p) => (
            <Card key={p.title} className="group transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <p.icon className="h-5 w-5" />
                </div>
                <CardTitle className="font-serif-sc">{p.title}</CardTitle>
                <p className="text-xs text-muted-foreground">{p.file}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/60" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
          <Card className="flex flex-col items-center justify-center border-dashed bg-transparent p-6 text-center">
            <p className="font-serif-sc text-lg font-bold text-muted-foreground">每周一个小循环</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              周一计划 → 每日打卡 → 周日复盘 → AI 分析。每月一个大循环：模式分析 + 手册修订。
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
