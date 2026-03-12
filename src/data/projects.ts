// 项目数据（来源：简历实际项目经验）
export interface Project {
  id: number
  name: string
  description: string
  screenshot: string
  coverGradient: string
  coverEmoji: string
  techStack: string[]
  link: string
  githubLink?: string
  status: '上线中' | '开发中' | '已完成'
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'SaaS + O2O 医药电商平台',
    description:
      '支撑大数据的 SaaS 医药电商小程序，具备配送、秒杀、砍价、拼团、抽奖、处方、分销、医保支付等功能。负载均衡 + 读写分离架构，四千万条数据分表优化，对接美团配送、微信服务商支付及分账。',
    screenshot: '',
    coverGradient: 'from-indigo-500 via-purple-500 to-pink-500',
    coverEmoji: '💊',
    techStack: ['YII2', 'PHP7', 'Redis', 'Swoole', 'MySQL', '微信小程序', '读写分离'],
    link: '#',
    status: '上线中',
  },
  {
    id: 2,
    name: '智淘助手（淘宝返利分销平台）',
    description:
      '类淘宝返利网分销系统，实时采集淘宝客商品、优惠券、订单佣金，支持商品转链、微信支付提现、小程序及公众号全流程对接，是一个智能省钱共享平台。',
    screenshot: '',
    coverGradient: 'from-orange-500 via-rose-500 to-pink-500',
    coverEmoji: '🛒',
    techStack: ['ThinkPHP5', 'PHP7', 'Redis', 'MySQL', '微信小程序', '淘宝客 API'],
    link: '#',
    status: '上线中',
  },
  {
    id: 3,
    name: '百洋商城（跨境电商重构）',
    description:
      'B2C 商城跨境电商系统（PC / WAP / APP 三端重构），统一后台数据模块化和接口管理。负责商品多品规表设计、易票联支付对接、跨境订单推送杭州保税区、乐视云 API 对接等核心模块。',
    screenshot: '',
    coverGradient: 'from-cyan-500 via-blue-500 to-indigo-500',
    coverEmoji: '🌐',
    techStack: ['Phalcon', 'PHP7', 'Redis', 'MongoDB', 'hprose', 'MySQL'],
    link: 'http://www.baiyangwang.com',
    status: '已完成',
  },
  {
    id: 4,
    name: '粮将餐饮微信商城',
    description:
      'B2C 微信公众号电商系统，基于 JSON-RPC 接口协议和 CI 框架开发。担任项目组长，负责粮票中心（优惠券）、微信支付、订单统计、转盘抽奖等核心功能，并完成服务器部署与优化。',
    screenshot: '',
    coverGradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    coverEmoji: '🍜',
    techStack: ['CI 框架', 'PHP', 'JSON-RPC', 'MySQL', '微信公众号', 'LNMP'],
    link: '#',
    status: '已完成',
  },
  {
    id: 5,
    name: '设计群建筑交易平台',
    description:
      '建筑设计方案生产交易平台，包含竞赛、任务撮合、论坛、培训、圈子等模块。使用 Swoole 开发实时网页聊天，MySQL 索引优化竞赛投票，Redis 缓存防重复投票，接入暴风云 API 数据同步。',
    screenshot: '',
    coverGradient: 'from-violet-500 via-purple-500 to-indigo-500',
    coverEmoji: '🏛️',
    techStack: ['PHP', 'Swoole', 'jQuery', 'Redis', 'MySQL', '微信支付'],
    link: 'http://www.shejiqun.com',
    status: '已完成',
  },
]
