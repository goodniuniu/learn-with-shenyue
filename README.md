# learn-with-shenyue · 申悦学习网站

"申悦学习 · AI 指导我同步学习"项目的静态网站，基于 React + TypeScript + Vite + Tailwind CSS + shadcn/ui 构建，部署于 GitHub Pages。

**仓库即网站**：本仓库（`learn-with-shenyue`）的根目录就是网站项目本身。发布后地址：
`https://goodniuniu.github.io/learn-with-shenyue/`

## 本地开发

```bash
npm install
npm run dev        # 开发预览 http://localhost:3000
npm run build      # 生产构建 → dist/
npm run preview    # 本地验证构建产物
```

> 本机 npm 不在 PATH 时，可用上级目录 `.tools/` 下的 npm 包装脚本（Git Bash）：
> `export PATH="..\.tools:$PATH"`

## 部署（首次三步）

工作流已就位（`.github/workflows/deploy.yml`），每次 push 到 `main` 自动构建发布。

```bash
# 1. 初始化并首次提交（如已完成可跳过）
git init
git add .
git commit -m "init: 申悦学习 site"

# 2. 关联远程仓库
git remote add origin git@github.com:goodniuniu/learn-with-shenyue.git
git branch -M main

# 3. 推送
git push -u origin main
```

然后到仓库 **Settings → Pages → Source 选择 "GitHub Actions"**（仓库需 Public，或为 Pro 用户的 Private 仓库）。约 1~2 分钟构建完成后即可访问。

## 已完成的 Pages 适配

- `vite.config.ts` 中 `base: './'`（相对路径，兼容项目页面子路径）
- 单页应用、纯静态构建、无服务端依赖；支持 `#锚点` 直达链接
- GitHub Actions 工作流（ubuntu + Node 20 + npm ci + Pages 发布）

## 内容更新

所有文案在 `src/sections/` 下的各区块组件中；AI 指令全文在 `src/data/prompts.ts`。修改后 `git push` 即自动发布。
