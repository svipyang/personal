// Hero 组件：首页核心展示区域（已根据简历填充真实信息）
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// 打字机效果文字列表（来自简历技能）
const ROLES = [
  'PHP 高级工程师',
  '全栈技术主管',
  '微信小程序开发者',
  'SaaS 平台架构师',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = ROLES[roleIndex]
    const speed = isDeleting ? 60 : 100

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(currentRole.slice(0, displayed.length + 1))
        if (displayed.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        setDisplayed(currentRole.slice(0, displayed.length - 1))
        if (displayed.length === 0) {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % ROLES.length)
        }
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [displayed, isDeleting, roleIndex])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden"
    >
      {/* ── 背景装饰层 ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-purple-600/15 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-indigo-600/15 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-violet-500/5 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* ── 主内容区 ── */}
      <div className="relative z-10 max-w-4xl mx-auto">

        {/* 头像 */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1, type: 'spring', stiffness: 120 }}
          className="mx-auto mb-8 relative w-28 h-28 md:w-36 md:h-36"
        >
          <div className="absolute inset-0 rounded-full gradient-bg opacity-80 blur-sm scale-110 animate-pulse" />
          <div className="relative w-full h-full rounded-full gradient-bg flex items-center justify-center text-5xl md:text-6xl shadow-2xl border-2 border-white/20">
            👨‍💻
          </div>
          {/* 在线状态绿点 */}
          <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-[#0a0a0a] shadow-lg shadow-green-400/50" />
        </motion.div>

        {/* 问候徽章 */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-sm text-white/70 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
          欢迎来到我的作品集 · 广州
        </motion.div>

        {/* 大标题：真实姓名 */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 leading-none"
        >
          你好，我是
          <br />
          <span className="gradient-text">杨永坚</span>
        </motion.h1>

        {/* 打字机角色 */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-2xl md:text-3xl font-medium text-white/50 mb-6 h-10 flex items-center justify-center"
        >
          <span className="gradient-text font-semibold">{displayed}</span>
          <span className="ml-0.5 inline-block w-0.5 h-7 gradient-bg animate-pulse" />
        </motion.div>

        {/* 个人简介：真实背景 */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="text-base md:text-lg text-white/55 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          10 年 PHP 全栈开发经验，曾主导百洋商城大型电商重构、SaaS+O2O 医药平台架构设计。
          <br className="hidden md:block" />
          热衷于高并发系统优化与带领团队攻克复杂技术难题。
        </motion.p>

        {/* CTA 按钮 */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#projects"
            className="gradient-bg px-8 py-3.5 rounded-full font-semibold text-sm hover:opacity-85 hover:scale-105 transition-all duration-200 shadow-lg shadow-indigo-500/25"
          >
            查看我的项目 →
          </a>
          <a
            href="#contact"
            className="glass px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-white/10 hover:scale-105 transition-all duration-200"
          >
            联系我
          </a>
        </motion.div>

        {/* 向下滚动提示 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-20 flex flex-col items-center gap-2 text-white/30"
        >
          <span className="text-xs tracking-widest uppercase">向下滚动</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
            className="text-lg"
          >
            ↓
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
