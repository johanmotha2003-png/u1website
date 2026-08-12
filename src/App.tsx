import { useState, useEffect, useCallback, useRef } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Quote from './pages/Quote'
import Contact from './pages/Contact'

export type Page = 'home' | 'about' | 'services' | 'quote' | 'contact'

type SweepPhase = 'idle' | 'cover' | 'reveal'

export default function App() {
  const [page, setPage] = useState<Page>('home')
  const [sweepPhase, setSweepPhase] = useState<SweepPhase>('idle')
  const pendingPage = useRef<Page | null>(null)

  const navigate = useCallback((p: Page) => {
    if (p === page) return
    pendingPage.current = p
    setSweepPhase('cover')
  }, [page])

  // When cover animation ends → swap page → begin reveal
  const onSweepEnd = () => {
    if (sweepPhase === 'cover') {
      if (pendingPage.current) {
        setPage(pendingPage.current)
        pendingPage.current = null
        window.scrollTo(0, 0)
      }
      setSweepPhase('reveal')
    } else if (sweepPhase === 'reveal') {
      setSweepPhase('idle')
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [page])

  return (
    <div style={{ fontFamily: "'Manrope', sans-serif", minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Nav current={page} navigate={navigate} />
      <main style={{ flex: 1, position: 'relative' }}>
        {page === 'home' && <Home navigate={navigate} />}
        {page === 'about' && <About navigate={navigate} />}
        {page === 'services' && <Services navigate={navigate} />}
        {page === 'quote' && <Quote />}
        {page === 'contact' && <Contact navigate={navigate} />}

        {/* ── Print sweep transition overlay ── */}
        {sweepPhase !== 'idle' && (
          <div
            key={sweepPhase}
            onAnimationEnd={onSweepEnd}
            style={{
              position: 'fixed', inset: 0, zIndex: 200,
              pointerEvents: 'none',
              animation: sweepPhase === 'cover'
                ? 'printCover 0.42s cubic-bezier(0.6,0,0.4,1) forwards'
                : 'printReveal 0.38s cubic-bezier(0.6,0,0.4,1) forwards',
            }}
          >
            {/* Main sweep panel */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(180deg, #0A0010 0%, #1F0A2E 50%, #0A0010 100%)',
            }} />
            {/* Leading edge glow — the "print head" */}
            <div style={{
              position: 'absolute', left: 0, right: 0,
              height: 4,
              background: 'linear-gradient(90deg, transparent 0%, #7F2394 20%, #bf5cef 50%, #7F2394 80%, transparent 100%)',
              boxShadow: '0 0 16px #7F2394, 0 0 48px #7F239480',
              bottom: sweepPhase === 'cover' ? 0 : 'auto',
              top: sweepPhase === 'reveal' ? 0 : 'auto',
            }} />
            {/* Ink trace lines */}
            {[15, 35, 55, 72, 88].map((left, i) => (
              <div key={i} style={{
                position: 'absolute', left: `${left}%`, width: 1,
                top: 0, bottom: 0,
                background: 'rgba(127,35,148,0.15)',
              }} />
            ))}
          </div>
        )}
      </main>
      <Footer navigate={navigate} />

      <style>{`
        @keyframes printCover {
          from { clip-path: inset(0 0 100% 0); }
          to   { clip-path: inset(0 0 0% 0); }
        }
        @keyframes printReveal {
          from { clip-path: inset(0% 0 0 0); }
          to   { clip-path: inset(100% 0 0 0); }
        }
      `}</style>
    </div>
  )
}
