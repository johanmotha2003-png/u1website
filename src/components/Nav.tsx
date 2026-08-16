import { useState } from 'react'
import type { Page } from '../App'
import headerImage from '../imports/ezzz.png'

interface NavProps {
  current: Page
  navigate: (p: Page) => void
}

const links: { label: string; page: Page }[] = [
  { label: 'Home', page: 'home' },
  { label: 'About', page: 'about' },
  { label: 'Services', page: 'services' },
  { label: 'Contact', page: 'contact' },
]

const ACCENT = '#7F2394'

export default function Nav({ current, navigate }: NavProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [aspectRatio, setAspectRatio] = useState<number | null>(null)

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget
    if (img.naturalWidth && img.naturalHeight) {
      setAspectRatio(img.naturalWidth / img.naturalHeight)
    }
  }

  return (
    <>
      <header style={{ fontFamily: "'Manrope', sans-serif" }}>
        {/* ── Header image banner ── */}
        <div
          className="header-img-container"
          style={{
            width: '100%',
            background: ACCENT,
            cursor: 'pointer',
            lineHeight: 0,
          }}
          onClick={() => navigate('home')}
        >
          <img
            className="header-img"
            src={headerImage}
            onLoad={handleImageLoad}
            alt="A1 Prints & Forms — industrial print carriage"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              objectFit: 'cover',
              maxHeight: 180,
              objectPosition: 'center center',
              ...({ '--aspect-ratio': aspectRatio } as React.CSSProperties),
            }}
          />
        </div>

        {/* ── Nav bar ── */}
        <nav style={{
          background: '#ffffff',
          borderTop: '1px solid #e8e8e8',
          borderBottom: '2px solid #e0e0e0',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        }}>
          {/* Desktop nav */}
          <div
            className="desktop-nav"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 0,
              padding: '0 32px',
            }}
          >
            {links.map((l, i) => (
              <div key={l.page} style={{ display: 'flex', alignItems: 'center' }}>
                <button
                  onClick={() => navigate(l.page)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '14px 24px',
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: 13,
                    fontWeight: current === l.page ? 600 : 400,
                    letterSpacing: '0.04em',
                    color: current === l.page ? ACCENT : '#333333',
                    position: 'relative',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = ACCENT)}
                  onMouseLeave={e => (e.currentTarget.style.color = current === l.page ? ACCENT : '#333333')}
                >
                  {current === l.page && (
                    <span style={{
                      position: 'absolute',
                      bottom: 0,
                      left: '20%',
                      right: '20%',
                      height: 2,
                      background: ACCENT,
                    }} />
                  )}
                  {l.label}
                </button>
                {/* Pipe separator */}
                {i < links.length - 1 && (
                  <span style={{ color: '#cccccc', fontSize: 16, userSelect: 'none' }}>|</span>
                )}
              </div>
            ))}

            {/* Pipe before CTA */}
            <span style={{ color: '#cccccc', fontSize: 16, userSelect: 'none' }}>|</span>

            {/* Get a Quote — same style as other nav items */}
            <button
              onClick={() => navigate('quote')}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '14px 24px',
                fontFamily: "'Manrope', sans-serif",
                fontSize: 13,
                fontWeight: current === 'quote' ? 600 : 400,
                letterSpacing: '0.04em',
                color: current === 'quote' ? ACCENT : '#333333',
                position: 'relative',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = ACCENT)}
              onMouseLeave={e => (e.currentTarget.style.color = current === 'quote' ? ACCENT : '#333333')}
            >
              {current === 'quote' && (
                <span style={{
                  position: 'absolute',
                  bottom: 0,
                  left: '20%',
                  right: '20%',
                  height: 2,
                  background: ACCENT,
                }} />
              )}
              Get a Quote
            </button>
          </div>

          {/* Mobile nav */}
          <div
            className="mobile-nav"
            style={{
              display: 'none',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 20px',
            }}
          >
            <button
              onClick={() => navigate('home')}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: "'Manrope', sans-serif",
                fontWeight: 600, fontSize: 13,
                color: ACCENT, letterSpacing: '0.04em',
                padding: '14px 0',
              }}
            >
              A1 Prints &amp; Forms
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, display: 'flex', flexDirection: 'column', gap: 5 }}
              aria-label="Toggle menu"
            >
              {[0, 1, 2].map(i => (
                <span key={i} style={{
                  display: 'block', width: 22, height: 2,
                  background: '#333',
                  transform: mobileOpen && i === 0 ? 'rotate(45deg) translate(5px,5px)' :
                    mobileOpen && i === 1 ? 'opacity:0' :
                    mobileOpen && i === 2 ? 'rotate(-45deg) translate(5px,-5px)' : 'none',
                  opacity: mobileOpen && i === 1 ? 0 : 1,
                  transition: 'transform 0.2s, opacity 0.2s',
                }} />
              ))}
            </button>
          </div>
        </nav>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div style={{
            background: '#fff',
            borderBottom: '2px solid #e0e0e0',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          }}>
            {links.map(l => (
              <button key={l.page} onClick={() => { navigate(l.page); setMobileOpen(false) }} style={{
                display: 'block', width: '100%', textAlign: 'left',
                background: 'none', border: 'none', cursor: 'pointer',
                padding: '13px 24px',
                borderBottom: '1px solid #f0f0f0',
                fontFamily: "'Manrope', sans-serif",
                fontSize: 13, fontWeight: current === l.page ? 600 : 400,
                color: current === l.page ? ACCENT : '#333',
              }}>
                {l.label}
              </button>
            ))}
            <button onClick={() => { navigate('quote'); setMobileOpen(false) }} style={{
              display: 'block', width: '100%',
              background: `linear-gradient(135deg, #5B1A6B, ${ACCENT})`,
              color: '#fff', border: 'none', padding: '14px 24px', cursor: 'pointer',
              fontFamily: "'Manrope', sans-serif", fontWeight: 700,
              fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase',
              textAlign: 'left',
            }}>
              Get a Quote
            </button>
          </div>
        )}
      </header>

      <style>{`
        @media (max-width: 800px) {
          .desktop-nav { display: none !important; }
          .mobile-nav { display: flex !important; }
          
          .header-img-container {
            overflow: hidden !important;
          }
          .header-img {
            margin-bottom: calc(-20% / var(--aspect-ratio, 2.5)) !important;
          }
        }
      `}</style>
    </>
  )
}
