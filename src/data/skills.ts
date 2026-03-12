// 技能数据（来源：简历实际技能）
export interface Skill {
  category: string
  items: string[]
}

export const skills: Skill[] = [
  {
    category: '后端开发',
    items: ['PHP', 'YII2', 'ThinkPHP 5', 'Laravel', 'CI', 'Phalcon', 'Swoole', 'Java'],
  },
  {
    category: '前端开发',
    items: ['Vue.js', 'JavaScript', 'jQuery', 'Ajax', 'HTML5', 'CSS3', 'DIV+CSS'],
  },
  {
    category: '数据库 & 缓存',
    items: ['MySQL', 'Redis', 'MongoDB', 'Memcache', 'Elasticsearch', 'RabbitMQ'],
  },
  {
    category: '微信生态',
    items: ['微信小程序', '微信公众号', '微信支付', '微信服务商分账', '微信视频号', '支付宝小程序'],
  },
  {
    category: '运维 & 工具',
    items: ['Linux', 'LNMP', 'LAMP', 'Docker', 'Nginx', 'Git', 'SVN', 'Composer', 'hprose'],
  },
]
