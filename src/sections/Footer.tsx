import { BookOpenText } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <BookOpenText className="h-4 w-4" />
            </span>
            <div>
              <p className="font-serif-sc font-bold">申悦学习 · AI 指导我同步学习</p>
              <p className="text-xs text-muted-foreground">项目创建于 2026-09-21 · 用学习带动女儿</p>
            </div>
          </div>
          <p className="font-serif-sc text-sm leading-relaxed text-muted-foreground">
            "我只对'我有没有比上周做得好一点'负责。"
          </p>
        </div>
      </div>
    </footer>
  )
}
