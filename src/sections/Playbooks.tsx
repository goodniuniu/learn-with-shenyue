import { CheckCircle2, Hand, MessageCircleQuestion, OctagonAlert, XCircle } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const STEPS = [
  {
    key: '停',
    title: '情绪暂停卡',
    desc: '火往上冒时：深呼吸 4 秒，问自己"她 16 岁，我 49 岁，谁该先稳住？"；或物理离开现场——"我现在有点激动，怕说错话，我需要 20 分钟，之后我们再聊。"暂停 ≠ 冷战，必须承诺什么时候回来谈，并真的回来。',
  },
  {
    key: '听',
    title: '积极倾听',
    desc: '闭嘴听完，不打断、不反驳、不急着给建议（她吐槽时 80% 只是要情绪出口）。用"嗯""然后呢"回应，并用复述确认："你的意思是……对吗？"——被准确理解的感觉，是青少年最稀缺的东西。',
  },
  {
    key: '问',
    title: '好奇式提问',
    desc: '把陈述句换成问句："这次考试你自己觉得哪里发挥得好、哪里遗憾？"——评价会关闭对话，好奇会打开对话。',
  },
  {
    key: '应',
    title: '先接情绪，再接事情',
    desc: '"听起来你挺委屈的"永远在"那我们看看怎么办"之前。使用非暴力沟通四要素：观察 → 感受 → 需要 → 请求。',
  },
]

const NVC = [
  { k: '观察（不带评价的事实）', v: '"这周有三天，我晚上 11 点路过你房间，灯还亮着。"' },
  { k: '感受（我的情绪，不指责）', v: '"我有点担心，也有点着急。"' },
  { k: '需要（我珍视什么）', v: '"因为我希望你睡够觉，白天有精神，这是我的担心，不是定罪。"' },
  { k: '请求（具体、可执行、可拒绝）', v: '"你愿不愿意试试这周 12 点前关灯？做不到我们再调整。"' },
]

const SCRIPTS = [
  { scene: '她考砸了', bad: '早跟你说要好好复习。', good: '这次没考好，你自己现在是什么感觉？……想聊聊卷子吗？不想聊也没关系，我在这儿。' },
  { scene: '她在玩手机，不想学习', bad: '夺手机、讲道理、翻旧账。', good: '先观察状态："我看你挺累的，今天学校是不是很耗？" → "那你是想再歇 20 分钟，还是现在启动？"（"启动"比"学习"阻力小得多）' },
  { scene: '她顶嘴 / 语气冲', bad: '你跟谁说话呢！', good: '你这句话让我有点不舒服。不过我更好奇，是什么让你这么烦？（把冲突转成了解她的窗口）' },
  { scene: '我想给她讲学习方法', bad: '直接讲。', good: '先讲自己："我最近在学一个叫间隔复习的方法，用了一周觉得挺管用。要不要听听？不要也行。"——用分享代替指导。' },
]

const TABOOS = [
  '不当着外人（包括家人）批评她',
  '不拿她和任何"别人家的孩子"比较',
  '不翻旧账、不连坐（一件事就是一件事）',
  '不用"我都是为你好"开头',
  '不追问隐私细节（社交、情感话题她想说才听）',
  '不替她向老师/同学"解决问题"（除非她主动求助）',
  '每天批评的话 ≤ 1 句，夸奖/看见她的话 ≥ 3 句（哪怕夸的是小事）',
]

const METHODS = [
  { name: '反复阅读、划重点', level: 0, note: '最容易，最没用——"熟悉感"是幻觉' },
  { name: '做笔记', level: 1, note: '容易变成抄写' },
  { name: '交错练习（混合题型）', level: 2, note: '提升考场应变能力' },
  { name: '费曼技巧（讲给别人听）', level: 2, note: '讲不清楚 = 没真懂' },
  { name: '间隔重复（隔几天再复习）', level: 3, note: '对抗遗忘曲线' },
  { name: '检索练习（合上书自测/做题）', level: 3, note: '费力的回忆让记忆最深' },
]

const GUIDE = [
  '先做给她看：自己用间隔重复背东西、用费曼技巧讲你学的内容，让她看到效果',
  '她求方法时再给，一次只给一个，用她自己的科目举例',
  '用提问代替传授："你觉得是多看两遍书管用，还是合上书做题管用？要不要打个小赌试试？"',
  '错题本不是抄题本，而是记录"错因"的本子（看错条件/概念不清/计算失误/时间不够）',
]

const SELF_RULES = [
  { t: '小块启动', d: '每天固定 25 分钟（一个番茄钟），状态好再延长。启动比时长重要。' },
  { t: '一个输入一个输出', d: '每学一个内容，逼自己写三句话总结或说给家人听。无输出 = 白学。' },
  { t: '间隔复习节奏', d: '学完后第 1 天、第 3 天、第 7 天各花 5 分钟回看笔记（只看标题，尝试回忆）。' },
  { t: '学习和陪伴绑定', d: '我学习的时段，恰好也是她的学习时段——各自安静，互为见证。' },
]

const HABITS = [
  { t: '执行意图', d: '不说"我要多学习"，要说"晚饭后 19:30，我坐在书桌前，打开学习资料 25 分钟"。' },
  { t: '两分钟启动', d: '不想学时只要求自己"打开书看两分钟"。开始是最难的，一旦开始通常会继续。' },
  { t: '习惯堆叠', d: '把新习惯挂在老习惯后面——"刷完牙后，我就写一句当日总结。"' },
  { t: '环境 > 意志力', d: '想读书，书放在沙发显眼处；想少刷手机，把充电器移到客厅。' },
]

const MICRO = [
  '每天学习 ≥ 25 分钟（和女儿的学习时段同步）',
  '每天夸女儿或看见她一件具体的事（不是"你真棒"，而是"你今天整理书桌挺利索"）',
  '每天写一句话日记（情绪 / 感悟 / 明天最重要的一件事）',
]

const REPAIR = [
  { t: '承认我的部分', d: '"昨天我声音太大了，那是我的情绪没处理好，对不起。"——主动道歉不会损害权威，只会赢得尊重。' },
  { t: '重申关系', d: '"我很在乎你，这点从来没变。"' },
  { t: '重新约定', d: '"下次我们都试试先停 20 分钟。"' },
]

const levelLabel = ['❌ 最低', '⚠️ 一般', '✅ 强', '✅✅✅ 最强']
const levelColor = [
  'bg-muted text-muted-foreground',
  'bg-yellow-100 text-yellow-800',
  'bg-green-100 text-green-800',
  'bg-primary/10 text-primary font-bold',
]

export default function Playbooks() {
  return (
    <section id="playbooks" className="scroll-mt-20 bg-secondary/40 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-sm font-medium tracking-widest text-primary">PLAYBOOKS</p>
        <h2 className="mt-2 font-serif-sc text-3xl font-black sm:text-4xl">方法锦囊</h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          三本手册的核心内容速查。遇到具体问题时回到这里，对应的完整手册在项目文件夹中。
        </p>

        <Tabs defaultValue="talk" className="mt-10">
          <TabsList className="grid w-full grid-cols-3 sm:w-auto">
            <TabsTrigger value="talk" className="font-serif-sc">亲子沟通</TabsTrigger>
            <TabsTrigger value="learn" className="font-serif-sc">学习方法</TabsTrigger>
            <TabsTrigger value="self" className="font-serif-sc">自律与氛围</TabsTrigger>
          </TabsList>

          {/* 亲子沟通 */}
          <TabsContent value="talk" className="mt-8 space-y-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((s, i) => (
                <Card key={s.key} className="relative overflow-hidden">
                  <CardHeader className="pb-2">
                    <span className="font-serif-sc text-4xl font-black text-primary/15">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <CardTitle className="font-serif-sc text-lg">
                      <span className="mr-2 inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                        {s.key}
                      </span>
                      {s.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm leading-relaxed text-muted-foreground">{s.desc}</CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="font-serif-sc">非暴力沟通（NVC）四要素 · 实例</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3 md:grid-cols-4">
                {NVC.map((n, i) => (
                  <div key={n.k} className="rounded-lg border bg-background p-4">
                    <Badge variant="secondary" className="font-serif-sc">
                      {i + 1}. {n.k}
                    </Badge>
                    <p className="mt-3 font-serif-sc text-sm leading-relaxed">{n.v}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-serif-sc">
                  <MessageCircleQuestion className="h-5 w-5 text-primary" />
                  高频场景话术对比
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {SCRIPTS.map((s) => (
                  <div key={s.scene} className="grid gap-3 md:grid-cols-[10rem_1fr_1.4fr]">
                    <div className="font-serif-sc font-bold text-primary">{s.scene}</div>
                    <div className="flex items-start gap-2 rounded-md bg-destructive/[0.06] p-3 text-sm text-muted-foreground">
                      <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                      {s.bad}
                    </div>
                    <div className="flex items-start gap-2 rounded-md bg-primary/[0.06] p-3 text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {s.good}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-primary/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-serif-sc">
                  <OctagonAlert className="h-5 w-5 text-primary" />
                  父亲的禁忌清单（每周复盘对照）
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-2 sm:grid-cols-2">
                {TABOOS.map((t) => (
                  <div key={t} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive/70" />
                    {t}
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* 学习方法 */}
          <TabsContent value="learn" className="mt-8 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif-sc">最重要的认知</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-serif-sc text-lg leading-loose">
                  看书、划线、听讲带来的"熟悉感"是幻觉；<span className="text-primary">合上书能提取出来，才是真学会。</span>
                </p>
                <div className="mt-6 space-y-2">
                  {METHODS.map((m) => (
                    <div key={m.name} className="flex flex-wrap items-center gap-3 rounded-md border bg-background p-3">
                      <span className="w-44 font-serif-sc font-bold">{m.name}</span>
                      <Badge className={`${levelColor[m.level]} border-0`}>{levelLabel[m.level]}</Badge>
                      <span className="text-sm text-muted-foreground">{m.note}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif-sc">给女儿的引导原则</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {GUIDE.map((g, i) => (
                      <li key={g} className="flex items-start gap-3 text-sm leading-relaxed">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                          {i + 1}
                        </span>
                        {g}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif-sc">给我自己：49 岁开始学习</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {SELF_RULES.map((r) => (
                    <div key={r.t} className="border-l-2 border-primary/50 pl-4">
                      <p className="font-serif-sc font-bold">{r.t}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{r.d}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* 自律与氛围 */}
          <TabsContent value="self" className="mt-8 space-y-8">
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif-sc">习惯设计四原则</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {HABITS.map((h) => (
                    <div key={h.t} className="border-l-2 border-primary/50 pl-4">
                      <p className="font-serif-sc font-bold">{h.t}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{h.d}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-serif-sc">微习惯清单（30 天后再加新条目）</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {MICRO.map((m) => (
                      <div key={m} className="flex items-start gap-3 text-sm leading-relaxed">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {m}
                      </div>
                    ))}
                  </CardContent>
                </Card>
                <Card className="border-primary/30 bg-primary/[0.03]">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 font-serif-sc">
                      <Hand className="h-5 w-5 text-primary" />
                      冲突后的修复三句话
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {REPAIR.map((r, i) => (
                      <div key={r.t} className="flex items-start gap-3 text-sm">
                        <Badge variant="secondary" className="mt-0.5 shrink-0 font-serif-sc">
                          {i + 1}. {r.t}
                        </Badge>
                        <span className="leading-relaxed text-muted-foreground">{r.d}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
