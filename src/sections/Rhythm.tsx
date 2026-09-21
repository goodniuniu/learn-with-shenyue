import { Moon, Timer, Users } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const SCHEDULE = [
  { time: '周一早晨', action: '制定本周计划（本周只聚焦 1~2 件事）', duration: '10 分钟' },
  { time: '每天', action: '情绪暂停卡自检 + 晚安前 10 分钟陪伴', duration: '碎片化' },
  { time: '周五', action: '女儿学习情况轻交流（不批评，只了解）', duration: '15 分钟' },
  { time: '周日晚', action: '周复盘 + 下周计划（贴给 AI 复盘教练）', duration: '30 分钟' },
  { time: '月底', action: '月度复盘，更新知识库手册', duration: '1 小时' },
]

const RITUALS = [
  {
    icon: Users,
    title: '共同学习时段（核心仪式）',
    desc: '每天固定 30~60 分钟，全家各自学习，互不打扰。不串门、不送水果、不检查她在干什么。结束时各用一句话分享今天学了什么（自愿原则）。',
  },
  {
    icon: Timer,
    title: '每周一次"爸爸时间"',
    desc: '一起做饭、散步、逛书店或开车兜风，不谈成绩，只聊她感兴趣的事。频率比时长重要——肩并肩比面对面更容易让她开口。',
  },
  {
    icon: Moon,
    title: '睡前 10 分钟',
    desc: '进她房间说句晚安，不检查、不唠叨，只说温暖的话。这个低成本动作积累的是安全感。',
  },
]

export default function Rhythm() {
  return (
    <section id="rhythm" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
      <p className="text-sm font-medium tracking-widest text-primary">WEEKLY RHYTHM</p>
      <h2 className="mt-2 font-serif-sc text-3xl font-black sm:text-4xl">每周节奏</h2>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        改变不靠意志力，靠节律。这张表是项目的"心跳"——建议把"周日晚复盘提醒"设为固定的每周定时任务。
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-5">
        <Card className="lg:col-span-3">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-28 font-serif-sc">时间</TableHead>
                <TableHead className="font-serif-sc">动作</TableHead>
                <TableHead className="w-24 text-right font-serif-sc">用时</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {SCHEDULE.map((s) => (
                <TableRow key={s.time}>
                  <TableCell className="font-serif-sc font-bold text-primary">{s.time}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">{s.action}</TableCell>
                  <TableCell className="text-right text-sm text-muted-foreground">{s.duration}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
        <div className="space-y-4 lg:col-span-2">
          {RITUALS.map((r) => (
            <Card key={r.title}>
              <CardContent className="flex gap-4 pt-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <r.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-serif-sc font-bold">{r.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
