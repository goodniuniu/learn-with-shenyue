import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { PROMPTS } from '@/data/prompts'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Prompts() {
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const copy = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = text
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
    }
    setCopiedId(id)
    window.setTimeout(() => setCopiedId((v) => (v === id ? null : v)), 2000)
  }

  return (
    <section id="prompts" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
      <p className="text-sm font-medium tracking-widest text-primary">AI PROMPTS</p>
      <h2 className="mt-2 font-serif-sc text-3xl font-black sm:text-4xl">AI 协作指令库</h2>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        五种固定指令，复制即用的"外挂教练"。使用纪律：一次对话只用一个指令；AI 的建议先试一周再评价；每次有价值的对话结论，用一句话追加到对应手册的实战记录区。
      </p>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {PROMPTS.map((p) => (
          <Card key={p.id} className="flex flex-col">
            <CardHeader>
              <div className="flex items-center justify-between gap-2">
                <CardTitle className="font-serif-sc">{p.name}</CardTitle>
                <Badge variant="secondary">{p.tag}</Badge>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{p.scene}</p>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col">
              <pre className="max-h-64 flex-1 overflow-auto whitespace-pre-wrap rounded-md border bg-secondary/50 p-4 font-mono text-xs leading-relaxed text-muted-foreground">
                {p.text}
              </pre>
              <Button
                variant={copiedId === p.id ? 'default' : 'outline'}
                size="sm"
                className="mt-4 self-end font-serif-sc"
                onClick={() => copy(p.id, p.text)}
              >
                {copiedId === p.id ? (
                  <>
                    <Check className="mr-2 h-4 w-4" /> 已复制
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 h-4 w-4" /> 复制指令
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
