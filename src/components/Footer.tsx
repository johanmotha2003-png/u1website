import type { Page } from '../App'

interface FooterProps { navigate: (p: Page) => void }

const ACCENT = '#7F2394'
const pages: { label: string; page: Page }[] = [
  { label: 'Home', page: 'home' },
  { label: 'About', page: 'about' },
  { label: 'Services', page: 'services' },
  { label: 'Industries', page: 'industries' },
  { label: 'Get a Quote', page: 'quote' },
  { label: 'Contact', page: 'contact' },
]

export default function Footer({ navigate }: FooterProps) {
  return (
    <footer style={{ background: '#1F0A2E', color: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 24px 0' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 48, paddingBottom: 48,
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 38, height: 38, background: `linear-gradient(135deg, #5B1A6B, ${ACCENT})`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#fff', fontFamily: "'Manrope', sans-serif", fontWeight: 800, fontSize: 10, letterSpacing: '0.05em' }}>A-1</span>
              </div>
              <span style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 15, color: '#fff' }}>
                A-1 Prints & Forms
              </span>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.75, color: 'rgba(255,255,255,0.55)', maxWidth: 240, fontWeight: 300 }}>
              Complete printing solutions provider serving businesses and individuals since 2003. Based in Padi, Chennai.
            </p>
            <a href="https://wa.me/918190064614" style={{
              display: 'inline-block', marginTop: 20,
              background: '#25D366', color: '#fff', padding: '8px 16px',
              fontSize: 12, fontWeight: 600, textDecoration: 'none',
              fontFamily: "'Manrope', sans-serif", letterSpacing: '0.03em',
            }}>
              WhatsApp Us
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600, fontSize: 11, color: ACCENT, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 20 }}>
              Navigation
            </h4>
            {pages.map(p => (
              <button key={p.page} onClick={() => navigate(p.page)} style={{
                display: 'block', background: 'none', border: 'none', cursor: 'pointer',
                color: 'rgba(255,255,255,0.55)', fontSize: 13, fontWeight: 300,
                padding: '5px 0', fontFamily: "'Manrope', sans-serif", textAlign: 'left',
                transition: 'color 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.color = ACCENT)}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}>
                {p.label}
              </button>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600, fontSize: 11, color: ACCENT, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 20 }}>
              Services
            </h4>
            {['Offset Printing', 'Digital Printing', 'Screen Printing', 'Industrial Stickers', 'Corporate Stationery', 'Book Binding', 'Ferrule Printing', 'Barcode Labels'].map(s => (
              <button key={s} onClick={() => navigate('services')} style={{
                display: 'block', background: 'none', border: 'none', cursor: 'pointer',
                color: 'rgba(255,255,255,0.55)', fontSize: 13, fontWeight: 300,
                padding: '4px 0', fontFamily: "'Manrope', sans-serif", textAlign: 'left',
                transition: 'color 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.color = ACCENT)}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}>
                {s}
              </button>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600, fontSize: 11, color: ACCENT, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 20 }}>
              Visit Us
            </h4>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.85, fontWeight: 300 }}>
              <p style={{ marginBottom: 12 }}>
                15/10, Behind Sivan Temple,<br />
                North Mada 3rd Street,<br />
                Padi, Chennai – 600050
              </p>
              <p>Mon–Sat: 9:00 AM – 8:00 PM</p>
            </div>
          </div>
        </div>

        <div style={{ padding: '24px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', fontWeight: 300 }}>
            © 2024 A1 Prints & Forms. All rights reserved.
          </p>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', fontWeight: 300 }}>
            Established 2003 · Padi, Chennai
          </p>
        </div>
      </div>
    </footer>
  )
}
