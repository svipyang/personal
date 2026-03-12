// Footer 组件：页脚（真实姓名）
export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-8 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-white/35 text-sm">
          © {year} 杨永坚. 用 ❤️ 构建 · 广州
        </p>
      </div>
    </footer>
  )
}
