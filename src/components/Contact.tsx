// Contact 组件：联系方式（来自简历真实信息）
import { motion } from 'framer-motion'

// 联系方式（真实数据来自简历）
const contacts = [
  {
    label: '邮箱',
    value: 'phpxiaoyang@qq.com',
    href: 'mailto:phpxiaoyang@qq.com',
    icon: '✉️',
    action: '发送邮件',
  },
  {
    label: '手机 / 微信',
    value: '15218214841',
    href: 'tel:15218214841',
    icon: '📱',
    action: '拨打电话',
  },
  {
    label: '所在城市',
    value: '广东省广州市',
    href: '#',
    icon: '📍',
    action: '查看地图',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">

        {/* 章节标题 */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            联系<span className="gradient-text">我</span>
          </h2>
          <div className="w-16 h-1 gradient-bg mx-auto rounded-full mb-6" />
          <p className="text-white/55 text-base md:text-lg max-w-md mx-auto">
            目前求职意向为<span className="text-white font-medium">技术主管 · PHP 高级工程师</span>，
            欢迎随时联系洽谈！
          </p>
        </motion.div>

        {/* 联系方式卡片 */}
        <div className="grid sm:grid-cols-3 gap-5 mb-10">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 hover:border-white/25 hover:-translate-y-1.5 transition-all duration-300 block group"
            >
              <div className="text-3xl mb-3">{c.icon}</div>
              <p className="text-xs text-white/40 mb-1 uppercase tracking-wider">{c.label}</p>
              <p className="font-medium text-sm text-white/90 group-hover:text-white transition-colors break-all">
                {c.value}
              </p>
            </motion.a>
          ))}
        </div>

        {/* 简历/求职意向说明 */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="glass rounded-2xl p-6 text-left"
        >
          <h4 className="font-semibold text-white/80 mb-3 text-sm uppercase tracking-wider">
            求职意向
          </h4>
          <div className="flex flex-wrap gap-3">
            {['技术主管', 'PHP 高级工程师', '全栈团队 Lead', '广州 / 远程均可'].map((tag) => (
              <span
                key={tag}
                className="gradient-bg px-4 py-1.5 rounded-full text-xs font-semibold opacity-90"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
