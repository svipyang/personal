// Projects 组件：项目展示区
// 功能：卡片式布局 + 封面截图/渐变占位 + 技术栈标签 + 状态徽章 + 链接按钮
// 动效：Framer Motion 滚动入场，卡片 hover 上浮 + 封面缩放

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../data/projects'

// 状态徽章颜色映射
const STATUS_COLORS: Record<string, string> = {
  '上线中': 'bg-green-500/20 text-green-400 border-green-500/30',
  '开发中': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  '已完成': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
}

// 状态徽章的小圆点颜色
const STATUS_DOT: Record<string, string> = {
  '上线中': 'bg-green-400',
  '开发中': 'bg-yellow-400',
  '已完成': 'bg-blue-400',
}

// 筛选标签
const FILTERS = ['全部', '上线中', '开发中', '已完成'] as const
type Filter = (typeof FILTERS)[number]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>('全部')

  // 根据筛选状态过滤项目列表
  const filtered =
    activeFilter === '全部'
      ? projects
      : projects.filter((p) => p.status === activeFilter)

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* ── 章节标题 ── */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            我的<span className="gradient-text">项目</span>
          </h2>
          <div className="w-16 h-1 gradient-bg mx-auto rounded-full mb-4" />
          <p className="text-white/50 text-sm md:text-base max-w-xl mx-auto">
            这里展示了我参与或独立开发的部分项目，涵盖全栈 Web、AI 工具等方向。
          </p>
        </motion.div>

        {/* ── 筛选标签栏 ── */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center gap-3 mb-12 flex-wrap"
        >
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                activeFilter === filter
                  ? 'gradient-bg border-transparent shadow-lg shadow-indigo-500/25'
                  : 'glass border-white/10 text-white/60 hover:text-white hover:border-white/20'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* ── 项目卡片列表 ── */}
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, index) => (
              <motion.article
                layout
                key={project.id}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="glass rounded-2xl overflow-hidden group hover:-translate-y-2 hover:border-white/25 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300"
              >
                {/* 封面区域 */}
                <div className="relative h-48 overflow-hidden">
                  {project.screenshot ? (
                    // 有截图时展示截图，hover 微缩放
                    <img
                      src={project.screenshot}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    // 无截图时用渐变色 + emoji 作为封面
                    <div
                      className={`w-full h-full bg-gradient-to-br ${project.coverGradient} flex items-center justify-center transition-transform duration-500 group-hover:scale-105`}
                    >
                      {/* 封面背景光晕效果 */}
                      <div className="absolute inset-0 opacity-30">
                        <div className="absolute top-4 left-4 w-20 h-20 rounded-full bg-white/30 blur-xl" />
                        <div className="absolute bottom-4 right-4 w-16 h-16 rounded-full bg-white/20 blur-xl" />
                      </div>
                      <span className="text-6xl relative z-10 drop-shadow-lg">
                        {project.coverEmoji}
                      </span>
                    </div>
                  )}

                  {/* 状态徽章：悬浮在封面右上角 */}
                  <span
                    className={`absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${STATUS_COLORS[project.status]}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${STATUS_DOT[project.status]}`} />
                    {project.status}
                  </span>
                </div>

                {/* 内容区 */}
                <div className="p-6">
                  {/* 项目标题 */}
                  <h3 className="text-lg font-bold mb-2 group-hover:gradient-text transition-all duration-300">
                    {project.name}
                  </h3>

                  {/* 项目描述：高度自适应，完整显示 */}
                  <p className="text-white/55 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* 技术栈标签 */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-full bg-white/8 border border-white/10 text-white/65 hover:text-white hover:border-white/20 transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* 行动链接 */}
                  <div className="flex gap-2 pt-2 border-t border-white/8">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center gradient-bg px-4 py-2 rounded-xl text-xs font-semibold hover:opacity-85 transition-opacity"
                    >
                      查看项目 →
                    </a>
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass px-4 py-2 rounded-xl text-xs font-semibold hover:bg-white/10 transition-colors"
                        aria-label={`${project.name} GitHub 仓库`}
                      >
                        {/* GitHub 图标 SVG */}
                        <svg
                          viewBox="0 0 24 24"
                          className="w-4 h-4 fill-current"
                          aria-hidden="true"
                        >
                          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* 无结果时的提示 */}
        {filtered.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-white/40 py-12"
          >
            该分类暂无项目
          </motion.p>
        )}
      </div>
    </section>
  )
}
