// 主应用入口组件：整合所有页面组件
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* 固定导航栏 */}
      <Header />

      {/* 主要内容区域 */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      {/* 页脚 */}
      <Footer />
    </div>
  )
}

export default App
