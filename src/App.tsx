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

      {/* Floating WhatsApp Button (Mobile/Tablet only) */}
      <a
        href="https://wa.me/918190064614"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#25D366',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
          zIndex: 1000,
          transition: 'transform 0.2s, background-color 0.2s',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.backgroundColor = '#128C7E';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.backgroundColor = '#25D366';
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="#ffffff">
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.982L2 22l5.176-1.358A9.897 9.897 0 0 0 12.01 22c5.506 0 9.99-4.478 9.99-9.985C22.002 6.507 17.518 2 12.012 2zm0 18.294a8.27 8.27 0 0 1-4.218-1.156l-.303-.18-3.136.822.837-3.056-.197-.314a8.276 8.276 0 0 1-1.27-4.473c0-4.57 3.72-8.29 8.29-8.29 4.566 0 8.287 3.718 8.288 8.288-.001 4.572-3.72 8.29-8.29 8.29zm4.55-6.2c-.25-.124-1.477-.727-1.705-.81-.228-.083-.393-.124-.558.124-.166.248-.641.81-.786.975-.145.166-.29.185-.54.062-.25-.125-1.05-.388-2.001-1.236-.74-.66-1.239-1.475-1.384-1.724-.145-.248-.015-.383.11-.507.112-.112.25-.29.375-.434.125-.145.166-.248.25-.414.083-.166.042-.31-.02-.434-.063-.124-.558-1.346-.764-1.845-.2-.487-.403-.42-.558-.428-.145-.007-.31-.008-.475-.008a.916.916 0 0 0-.663.31c-.228.248-.87.85-.87 2.07 0 1.222.89 2.401.99 2.535.1.135 1.75 2.674 4.24 3.748.592.256 1.055.408 1.415.523.595.19 1.137.163 1.564.1.477-.07 1.477-.604 1.684-1.189.207-.585.207-1.085.145-1.189-.062-.104-.228-.166-.477-.29z"/>
        </svg>
      </a>

      <style>{`
        @keyframes printCover {
          from { clip-path: inset(0 0 100% 0); }
          to   { clip-path: inset(0 0 0% 0); }
        }
        @keyframes printReveal {
          from { clip-path: inset(0% 0 0 0); }
          to   { clip-path: inset(100% 0 0 0); }
        }
        @media (min-width: 801px) {
          .whatsapp-float {
            display: none !important;
          }
        }
      `}</style>
    </div>
  )
}

