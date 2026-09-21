import { useEffect } from 'react'
import Nav from '@/sections/Nav'
import Hero from '@/sections/Hero'
import Charter from '@/sections/Charter'
import Pillars from '@/sections/Pillars'
import Rhythm from '@/sections/Rhythm'
import Playbooks from '@/sections/Playbooks'
import Prompts from '@/sections/Prompts'
import Review from '@/sections/Review'
import Deploy from '@/sections/Deploy'
import Footer from '@/sections/Footer'

export default function Home() {
  useEffect(() => {
    // React 渲染完成后跳转到地址栏锚点（支持分享直达链接）
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash)
      if (el) el.scrollIntoView({ behavior: 'instant' as ScrollBehavior })
    }
  }, [])

  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Charter />
        <Pillars />
        <Rhythm />
        <Playbooks />
        <Prompts />
        <Review />
        <Deploy />
      </main>
      <Footer />
    </div>
  )
}
