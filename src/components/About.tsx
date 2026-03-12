// About 组件：关于我（已根据简历填充真实内容）
// 包含：自我介绍、工作经历时间线、技能列表
import { motion } from 'framer-motion'
import { skills } from '../data/skills'

// 工作经历数据（来自简历）
const EXPERIENCES = [
  {
    period: '2019.03 — 至今',
    company: '广州市小明科技有限公司',
    role: '技术主管',
    highlight: true,
  },
  {
    period: '2017.06 — 2019.02',
    company: '广州市粮将电子商务有限公司',
    role: 'PHP 开发（电商）',
    highlight: false,
  },
  {
    period: '2016.04 — 2017.06',
    company: '青岛百洋医药',
    role: 'PHP 开发（电商）',
    highlight: false,
  },
  {
    period: '2014.02 — 2016.03',
    company: '广州市东海网络科技有限公司',
    role: 'PHP 开发（微商城）',
    highlight: false,
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* 章节标题 */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            关于<span className="gradient-text">我</span>
          </h2>
          <div className="w-16 h-1 gradient-bg mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* 左列：个人介绍 + 工作经历 */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* 自我介绍 */}
            <h3 className="text-2xl font-semibold mb-4">个人简介</h3>
            <p className="text-white/65 leading-relaxed mb-3">
              拥有 <span className="text-white font-medium">10 年 PHP 全栈开发经验</span>，
              曾参与百洋商城大型电商系统重构、SaaS+O2O 医药平台从零搭建，
              具备丰富的团队管理与项目架构经验。
            </p>
            <p className="text-white/65 leading-relaxed mb-8">
              熟练掌握高并发系统设计（负载均衡、读写分离、分表优化），
              热衷于微信生态开发与 AI 工具探索，持续推动技术与业务的深度融合。
            </p>

            {/* 工作经历时间线 */}
            <h3 className="text-2xl font-semibold mb-5">工作经历</h3>
            <div className="space-y-4">
              {EXPERIENCES.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  className={`relative pl-5 border-l-2 ${
                    exp.highlight ? 'border-indigo-500' : 'border-white/15'
                  }`}
                >
                  {/* 时间线节点 */}
                  <span
                    className={`absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full ${
                      exp.highlight ? 'gradient-bg' : 'bg-white/25'
                    }`}
                  />
                  <p className="text-xs text-white/40 mb-0.5">{exp.period}</p>
                  <p className={`font-semibold text-sm ${exp.highlight ? 'gradient-text' : 'text-white/85'}`}>
                    {exp.role}
                  </p>
                  <p className="text-xs text-white/50">{exp.company}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 右列：技能列表 */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-6">技能栈</h3>
            <div className="space-y-6">
              {skills.map((group, i) => (
                <motion.div
                  key={group.category}
                  initial={{ y: 15, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                >
                  <p className="text-xs text-white/40 mb-2.5 uppercase tracking-widest">
                    {group.category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="glass px-3 py-1.5 rounded-full text-xs text-white/75 hover:text-white hover:border-white/25 transition-colors cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
