import { useState } from 'react'
import type { Page } from '../App'

interface Props { navigate: (p: Page) => void }

const categories = ['All', 'Offset Printing', 'Digital Printing', 'Stickers & Labels', 'Book Binding', 'Stationery', 'Custom']

const placeholders = [
  { cat: 'Offset Printing', title: 'Multi-part NCR Order Books', client: 'Manufacturing client', img: 'https://images.unsplash.com/photo-1503694978374-8a2fa686963a?w=600&h=450&fit=crop&auto=format' },
  { cat: 'Stationery', title: 'Corporate Letterhead Suite', client: 'Engineering firm', img: 'https://images.unsplash.com/photo-1593499881934-2a652f450a85?w=600&h=450&fit=crop&auto=format' },
  { cat: 'Book Binding', title: 'Product Catalogue Binding', client: 'Industrial supplier', img: 'https://images.unsplash.com/photo-1572645098182-5e28a03f1b60?w=600&h=450&fit=crop&auto=format' },
  { cat: 'Stickers & Labels', title: 'Industrial Equipment Labels', client: 'Automobile OEM supplier', img: 'https://images.unsplash.com/photo-1617909517054-64d4958be1c9?w=600&h=450&fit=crop&auto=format' },
  { cat: 'Digital Printing', title: 'Training Manual Print Run', client: 'Healthcare company', img: 'https://images.unsplash.com/photo-1718670014130-ee9ee053598d?w=600&h=450&fit=crop&auto=format' },
  { cat: 'Offset Printing', title: 'Company Brochures', client: 'Engineering services firm', img: 'https://images.unsplash.com/photo-1718670013939-954787e56385?w=600&h=450&fit=crop&auto=format' },
  { cat: 'Stickers & Labels', title: 'Barcode Inventory Labels', client: 'Warehousing client', img: 'https://images.unsplash.com/photo-1580481072645-022f9a6dbf27?w=600&h=450&fit=crop&auto=format' },
  { cat: 'Stationery', title: 'Executive Business Cards', client: 'Corporate office', img: 'https://images.unsplash.com/photo-1422036306541-00138cae4dbc?w=600&h=450&fit=crop&auto=format' },
  { cat: 'Custom', title: 'Ferrule Wire Markers', client: 'Electrical panel manufacturer', img: 'https://images.unsplash.com/photo-1625820104062-387167dd655b?w=600&h=450&fit=crop&auto=format' },
]

const S: Record<string, React.CSSProperties> = {
  label: { fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: '#7C5CFC', marginBottom: 10 },
}

export default function Portfolio({ navigate }: Props) {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? placeholders : placeholders.filter(p => p.cat === active)

  return (
    <div style={{ background: '#fff' }}>
      <section style={{ background: '#2E1F5E', padding: '80px 24px 72px', position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, width: '4px', height: '100%', background: '#7C5CFC' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p style={{ ...S.label, color: '#7C5CFC' }}>Our Work</p>
          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 'clamp(32px, 5vw, 54px)', color: '#fff', lineHeight: 1.1, marginBottom: 16 }}>
            Portfolio
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.65)', fontSize: 15, maxWidth: 500 }}>
            A selection of print work across industries. Client material is confidential — all images shown are representative samples.
          </p>
        </div>
      </section>

      {/* Filter bar */}
      <section style={{ borderBottom: '1px solid #E5E5E5', position: 'sticky', top: 68, background: '#fff', zIndex: 10 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', gap: 2, overflowX: 'auto', scrollbarWidth: 'none' }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActive(cat)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '16px 18px',
              fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 12,
              letterSpacing: '0.06em', textTransform: 'uppercase',
              color: active === cat ? '#7C5CFC' : '#767676',
              borderBottom: active === cat ? '2px solid #7C5CFC' : '2px solid transparent',
              whiteSpace: 'nowrap', transition: 'color 0.2s',
            }}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 3, background: '#E5E5E5' }}>
          {filtered.map((item, i) => (
            <div key={i} style={{ background: '#fff', overflow: 'hidden', cursor: 'pointer' }}
              onMouseEnter={e => { const img = e.currentTarget.querySelector('img') as HTMLImageElement; if (img) { img.style.transform = 'scale(1.05)'; img.style.opacity = '0.85' } }}
              onMouseLeave={e => { const img = e.currentTarget.querySelector('img') as HTMLImageElement; if (img) { img.style.transform = 'scale(1)'; img.style.opacity = '1' } }}>
              <div style={{ position: 'relative', overflow: 'hidden', background: '#E5E5E5' }}>
                <img src={item.img} alt={item.title} style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block', transition: 'transform 0.4s, opacity 0.3s' }} />
                <div style={{ position: 'absolute', top: 12, left: 12, background: '#7C5CFC', padding: '4px 10px' }}>
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 10, color: '#fff', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{item.cat}</span>
                </div>
              </div>
              <div style={{ padding: '20px 20px 24px' }}>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 15, color: '#2E1F5E', marginBottom: 6 }}>{item.title}</h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: '#767676' }}>{item.client}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Upload notice */}
        <div style={{ marginTop: 56, background: '#F7F5FC', border: '1px solid #E5E5E5', padding: '32px 36px', display: 'flex', alignItems: 'center', gap: 24 }}>
          <div style={{ width: 48, height: 48, background: '#7C5CFC', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <span style={{ fontSize: 20, color: '#fff' }}>⬡</span>
          </div>
          <div>
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 16, color: '#2E1F5E', marginBottom: 6 }}>
              Portfolio continuously updated
            </h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: '#767676', maxWidth: 540 }}>
              We regularly add new work. Representative samples are shown here — actual client work is treated confidentially. Contact us to discuss your specific project type and we can share relevant samples.
            </p>
          </div>
          <button onClick={() => navigate('contact')} style={{ background: '#7C5CFC', color: '#fff', border: 'none', padding: '10px 22px', cursor: 'pointer', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 13, whiteSpace: 'nowrap', flexShrink: 0, marginLeft: 'auto' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#6344e0')}
            onMouseLeave={e => (e.currentTarget.style.background = '#7C5CFC')}>
            Request Samples
          </button>
        </div>
      </section>
    </div>
  )
}
