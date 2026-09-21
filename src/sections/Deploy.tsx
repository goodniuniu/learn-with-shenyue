import { Github, Rocket, Terminal } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const STEPS = [
  {
    title: '把项目推送到 GitHub',
    desc: '在 site/ 目录（即仓库根）初始化 git 仓库并推送。首次提交已就绪，执行下方命令即可。',
    code: 'cd site\ngit remote add origin git@github.com:goodniuniu/learn-with-shenyue.git\ngit push -u origin main',
  },
  {
    title: '开启 GitHub Pages',
    desc: '打开仓库 Settings → Pages → Source 选择 "GitHub Actions"。仓库需为 Public（或 Pro 用户的 Private 仓库）。',
    code: '',
  },
  {
    title: '推送即自动部署',
    desc: '仓库已包含 .github/workflows/deploy.yml。之后每次 push 到 main 分支都会自动构建并发布，约 1~2 分钟后可通过地址访问。',
    code: 'git add .\ngit commit -m "update content"\ngit push   # → Actions 自动构建部署',
  },
]

const WORKFLOW = `name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
          cache-dependency-path: package-lock.json
      - name: Install & Build
        run: |
          npm ci
          npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4`

export default function Deploy() {
  return (
    <section id="deploy" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
      <p className="text-sm font-medium tracking-widest text-primary">DEPLOY</p>
      <h2 className="mt-2 font-serif-sc text-3xl font-black sm:text-4xl">发布到 GitHub Pages</h2>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        本项目已按 GitHub Pages 配置：Vite base 为相对路径（<code className="rounded bg-secondary px-1">base: './'</code>），并附带自动部署工作流。仓库根目录即网站项目本身，发布后地址为
        <code className="mx-1 rounded bg-secondary px-1">https://goodniuniu.github.io/learn-with-shenyue/</code>。
      </p>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {STEPS.map((s, i) => (
          <Card key={s.title}>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-serif-sc font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <p className="font-serif-sc text-lg font-bold">{s.title}</p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              {s.code && (
                <pre className="mt-4 overflow-auto whitespace-pre-wrap rounded-md border bg-secondary/60 p-3 font-mono text-xs leading-relaxed">
                  {s.code}
                </pre>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-6">
        <CardContent className="pt-6">
          <p className="flex items-center gap-2 font-serif-sc font-bold">
            <Github className="h-5 w-5" />
            已随项目附带的工作流（site/.github/workflows/deploy.yml）
          </p>
          <pre className="mt-4 max-h-80 overflow-auto rounded-md border bg-secondary/60 p-4 font-mono text-xs leading-relaxed">
            {WORKFLOW}
          </pre>
        </CardContent>
      </Card>

      <Card className="mt-6 border-primary/30 bg-primary/[0.03]">
        <CardContent className="flex gap-4 pt-6">
          <Terminal className="h-6 w-6 shrink-0 text-primary" />
          <div className="text-sm leading-relaxed">
            <p className="font-serif-sc font-bold">本地预览与构建</p>
            <p className="mt-1 text-muted-foreground">
              开发预览：<code className="rounded bg-secondary px-1">npm run dev</code>　·　生产构建：
              <code className="rounded bg-secondary px-1">npm run build</code>（输出到
              <code className="rounded bg-secondary px-1">dist/</code>）　·　本地验证构建产物：
              <code className="rounded bg-secondary px-1">npm run preview</code>
            </p>
            <p className="mt-2 flex items-center gap-2 text-muted-foreground">
              <Rocket className="h-4 w-4 text-primary" />
              内容更新流程：修改 src/ 下的文件 → push 到 main → Actions 自动发布，无需手动操作。
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
