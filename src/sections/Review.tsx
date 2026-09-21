import { CalendarDays, ClipboardList, ListChecks } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const DAILY = ['我学习 25min', '夸 / 看见女儿', '手机公约', '情绪平稳', '一句话日记']

const WEEKLY = [
  { q: '本周事实', hint: '计划完成率 ___%，打卡天数 ___/7' },
  { q: '最有成就感的一件事', hint: '' },
  { q: '最失控 / 最遗憾的一件事', hint: '用 NVC 四要素描述，不评判' },
  { q: '女儿的三个信号', hint: '她这周透露的情绪 / 需求 / 变化，哪怕细微' },
  { q: '我的一个模式', hint: '本周反复出现的行为 / 情绪模式' },
  { q: '下周只改一件事', hint: '具体到时间、地点、动作' },
]

const MONTHLY = [
  '汇总 4 次周复盘，找出重复出现的模式',
  '更新家庭氛围自评表（发火次数、她主动找我聊天的次数等）',
  '通读所有沟通记录，统计均分与高频场景',
  '检查项目章程的 90 天目标进度',
  '把手册中验证有效的方法标 ⭐，无效的删除或改写',
  '把本月最重要的 3 条感悟追加到对应手册末尾',
]

export default function Review() {
  return (
    <section id="review" className="scroll-mt-20 bg-secondary/40 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-sm font-medium tracking-widest text-primary">REVIEW LOOP</p>
        <h2 className="mt-2 font-serif-sc text-3xl font-black sm:text-4xl">计划 · 打卡 · 复盘</h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          完整的可填写模板在项目文件夹的 05-计划复盘目录中。这里是它的骨架——每天 1 分钟打勾，周日 30 分钟回答 6 个问题。
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-serif-sc">
                <ListChecks className="h-5 w-5 text-primary" />
                每日打卡（随手打勾）
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {['周一', '周二', '周三', '周四', '周五', '周六', '周日'].map((d) => (
                  <div key={d} className="flex items-center gap-2">
                    <span className="w-10 font-serif-sc text-sm font-bold text-muted-foreground">{d}</span>
                    {DAILY.map((item) => (
                      <span
                        key={item}
                        title={item}
                        className="h-5 flex-1 rounded border border-dashed border-primary/30 bg-background"
                      />
                    ))}
                  </div>
                ))}
              </div>
              <div className="mt-3 flex gap-2">
                {DAILY.map((item) => (
                  <span key={item} className="flex-1 text-center text-[10px] leading-tight text-muted-foreground">
                    {item}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-serif-sc">
                <ClipboardList className="h-5 w-5 text-primary" />
                周复盘六问（周日晚）
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {WEEKLY.map((w, i) => (
                <div key={w.q} className="rounded-md border bg-background p-3">
                  <p className="font-serif-sc text-sm font-bold">
                    {i + 1}. {w.q}
                  </p>
                  {w.hint && <p className="mt-1 text-xs text-muted-foreground">{w.hint}</p>}
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-serif-sc">
                <CalendarDays className="h-5 w-5 text-primary" />
                月度复盘清单
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {MONTHLY.map((m) => (
                  <li key={m} className="flex items-start gap-3 text-sm leading-relaxed">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-primary/40 text-xs text-primary">
                      ✓
                    </span>
                    <span className="text-muted-foreground">{m}</span>
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
