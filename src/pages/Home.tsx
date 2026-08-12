import type { Page } from '../App'

interface Props { navigate: (p: Page) => void }

const ACCENT = '#7F2394'
const ACCENT_DARK = '#5B1A6B'
const DEEP = '#2D0A3F'
const GRAD = `linear-gradient(135deg, ${ACCENT_DARK}, ${ACCENT})`

const IMGS = {
  hero: 'https://images.unsplash.com/photo-1503694978374-8a2fa686963a?w=1400&h=800&fit=crop&auto=format',
  stationery: 'https://images.unsplash.com/photo-1593499881934-2a652f450a85?w=900&h=600&fit=crop&auto=format',
  books: 'https://images.unsplash.com/photo-1572645098182-5e28a03f1b60?w=900&h=600&fit=crop&auto=format',
  brochures: 'https://images.unsplash.com/photo-1718670013939-954787e56385?w=900&h=600&fit=crop&auto=format',
  papers: 'https://images.unsplash.com/photo-1422036306541-00138cae4dbc?w=900&h=600&fit=crop&auto=format',
}


const industries = [
  { name: 'Manufacturing', icon: '⚙', desc: 'Forms, safety labels, inspection tags, and compliance documentation.' },
  { name: 'Automobile', icon: '◉', desc: 'Parts labels, service manuals, warranty cards, and dealer stationery.' },
  { name: 'Healthcare', icon: '✦', desc: 'Patient records, prescription pads, report folders, and lab labels.' },
  { name: 'Corporate Offices', icon: '⬠', desc: 'Letterheads, visiting cards, envelopes, and branded stationery suites.' },
  { name: 'Educational Institutions', icon: '◧', desc: 'Admit cards, certificates, registers, and academic documentation.' },
  { name: 'Retail', icon: '⬡', desc: 'Price tags, product labels, packaging inserts, and promotional prints.' },
]

const why = [
  { stat: '22+', label: 'Years Experience', desc: 'Two decades of trusted printing expertise in Chennai.' },
  { stat: '100%', label: 'Reliable Quality', desc: 'Consistent output across every batch, every order.' },
  { stat: 'Fast', label: 'Turnaround', desc: 'On-time delivery for urgent and scheduled orders alike.' },
  { stat: '∞', label: 'Custom Solutions', desc: 'Every specification accommodated, from 10 to 10,000 units.' },
]

const S: Record<string, React.CSSProperties> = {
  section: { maxWidth: 1200, margin: '0 auto', padding: '0 24px' },
  label: { fontFamily: "'Manrope', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase' as const, color: ACCENT, marginBottom: 12 },
  h2: { fontFamily: "'Manrope', sans-serif", fontWeight: 500, fontSize: 'clamp(28px, 4vw, 44px)', color: DEEP, lineHeight: 1.15 },
  body: { fontFamily: "'Manrope', sans-serif", fontWeight: 300, color: '#767676', fontSize: 15, lineHeight: 1.8 },
  btn: {
    display: 'inline-block', background: GRAD, color: '#fff',
    padding: '13px 28px', border: 'none', cursor: 'pointer',
    fontFamily: "'Manrope', sans-serif", fontWeight: 600, fontSize: 14,
    letterSpacing: '0.02em', textDecoration: 'none', transition: 'opacity 0.2s',
  },
  btnOutline: {
    display: 'inline-block', background: 'transparent', color: ACCENT,
    padding: '12px 28px', border: `1.5px solid ${ACCENT}`, cursor: 'pointer',
    fontFamily: "'Manrope', sans-serif", fontWeight: 600, fontSize: 14,
    letterSpacing: '0.02em', textDecoration: 'none', transition: 'all 0.2s',
  },
}

export default function Home({ navigate }: Props) {
  return (
    <div style={{ background: '#fff' }}>

      {/* ── Hero ── */}
      <section style={{ position: 'relative', minHeight: '90vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: '#1a0526' }}>
        <img src={IMGS.hero} alt="Offset printing press machine in operation" style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center', opacity: 0.55,
        }} />
        {/* Subtle left-side overlay so text is legible but machine remains visible */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(31,10,46,0.82) 0%, rgba(31,10,46,0.35) 55%, rgba(31,10,46,0.1) 100%)' }} />
        <div style={{ position: 'absolute', left: 0, top: 0, width: 4, height: '100%', background: ACCENT }} />

        <div style={{ position: 'relative', ...S.section, paddingTop: 80, paddingBottom: 80 }}>
          <div style={{ maxWidth: 640 }}>
            <h1 style={{
              fontFamily: "'Manrope', sans-serif", fontWeight: 700,
              fontSize: 'clamp(30px, 5.5vw, 60px)', color: '#fff', lineHeight: 1.1, marginBottom: 24,
            }}>
              Printing Solutions Built on Quality, Trusted Since 2003.
            </h1>
            <p style={{ ...S.body, color: 'rgba(255,255,255,0.72)', fontSize: 16, maxWidth: 500, marginBottom: 40 }}>
              A complete printing solutions provider serving manufacturing, corporate, and retail clients across Chennai with precision, speed, and consistency.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <button onClick={() => navigate('quote')} style={{ ...S.btn, fontSize: 15, padding: '15px 34px' }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
                Get a Quote
              </button>
              <button onClick={() => navigate('services')} style={{ ...S.btnOutline, fontSize: 15, padding: '14px 34px', color: '#fff', borderColor: 'rgba(255,255,255,0.35)' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = '#fff' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)' }}>
                View Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <section style={{ background: '#F8EDF9', borderTop: '1px solid #E8D5ED', borderBottom: '1px solid #E8D5ED' }}>
        <div style={{ ...S.section, padding: '0 24px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'stretch' }}>
            {[
              ['Established 2003', '22+ Years in Business'],
              ['Fast Turnaround', 'Urgent Orders Welcome'],
              ['Pickup Available', 'Padi, Chennai'],
              ['10 Services', 'End-to-End Printing'],
            ].map(([title, sub], i, arr) => (
              <div key={i} style={{
                padding: '20px 24px', display: 'flex', alignItems: 'center', gap: 10, flex: 1, minWidth: 160,
                borderRight: i < arr.length - 1 ? '1px solid #E8D5ED' : 'none',
              }}>
                <div style={{ width: 6, height: 6, background: ACCENT, flexShrink: 0 }} />
                <div>
                  <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 600, fontSize: 13, color: DEEP }}>{title}</div>
                  <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 300, fontSize: 11, color: '#9B6BAE', marginTop: 1 }}>{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>




      {/* ── Craftsmanship ── */}
      <section style={{ padding: '96px 0', background: '#1F0A2E', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, width: 4, height: '100%', background: ACCENT }} />
        <div style={S.section}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p style={{ ...S.label }}>Our Craft</p>
            <h2 style={{ ...S.h2, color: '#fff', marginBottom: 12 }}>Printed with Precision</h2>
            <p style={{ ...S.body, color: 'rgba(255,255,255,0.55)', maxWidth: 480, margin: '0 auto' }}>
              22 years of refined craft — every project handled with the attention it deserves.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 3 }}>
            {[IMGS.papers, IMGS.books, IMGS.brochures, IMGS.stationery].map((src, i) => (
              <div key={i} style={{ position: 'relative', aspectRatio: '4/3', background: '#2D1040', overflow: 'hidden' }}>
                <img src={src} alt="Print work sample" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.75, transition: 'opacity 0.3s, transform 0.4s' }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLImageElement; el.style.opacity = '1'; el.style.transform = 'scale(1.05)' }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLImageElement; el.style.opacity = '0.75'; el.style.transform = 'scale(1)' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries ── */}
      <section style={{ padding: '96px 0', background: '#F8EDF9', borderTop: '1px solid #E8D5ED', borderBottom: '1px solid #E8D5ED' }}>
        <div style={S.section}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 64, alignItems: 'center' }}>
            <div>
              <p style={S.label}>Sectors We Serve</p>
              <h2 style={{ ...S.h2, marginBottom: 20 }}>Printing for Every Industry</h2>
              <p style={{ ...S.body, marginBottom: 0 }}>
                Different industries, different specifications — from heavy manufacturing to healthcare, each requiring different substrates and durability standards.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {industries.map((ind, i) => (
                <div key={i} style={{ background: '#fff', padding: '24px 20px', borderRadius: 2, boxShadow: '0 1px 4px rgba(127,35,148,0.07)', borderTop: `2px solid ${ACCENT}` }}>
                  <div style={{ fontSize: 18, color: ACCENT, marginBottom: 10 }}>{ind.icon}</div>
                  <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 500, fontSize: 14, color: DEEP, marginBottom: 6 }}>{ind.name}</div>
                  <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 300, fontSize: 12, color: '#767676', lineHeight: 1.6 }}>{ind.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section style={{ padding: '96px 0', background: '#fff' }}>
        <div style={S.section}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p style={S.label}>Why A1 Prints</p>
            <h2 style={S.h2}>Built on a Foundation of Trust</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 2, background: '#E8D5ED' }}>
            {why.map((w, i) => (
              <div key={i} style={{ background: '#fff', padding: '40px 32px' }}>
                <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 800, fontSize: 52, lineHeight: 1, marginBottom: 12, background: GRAD, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{w.stat}</div>
                <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 500, fontSize: 16, color: DEEP, marginBottom: 10 }}>{w.label}</div>
                <div style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 300, fontSize: 14, color: '#767676', lineHeight: 1.65 }}>{w.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Clients ── */}
      <section style={{ padding: '96px 0', background: '#F8EDF9' }}>
        <div style={S.section}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <h2 style={{ ...S.h2, marginBottom: 0 }}>Companies We Are Proud to Serve</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 2, background: '#E8D5ED' }}>
            {[
              'Minda Corporation Ltd.',
              'BSA Corporation Ltd.',
              'HTL Ltd.',
              'Sundaram Fasteners Ltd.',
              'Toshniwal Hyvac Pvt Ltd.',
              'Toshniwal Instruments Madras Pvt Ltd.',
              'Primee Silicones Chennai Pvt Ltd.',
              'Sri Nagavalliamman Marketing',
              'Yeshoda Engineering Services',
              'Sona Components Pvt Ltd.',
              'Auto Electric Connective Systems',
              'Shree Lakshmi Industries',
            ].map((c, i) => (
              <div key={i} style={{ background: '#fff', padding: '22px 20px', display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 6, height: 6, background: ACCENT, flexShrink: 0 }} />
                <span style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 500, fontSize: 13, color: DEEP }}>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '96px 0', background: DEEP, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: -100, top: -100, width: 500, height: 500, borderRadius: '50%', border: `1px solid rgba(127,35,148,0.2)` }} />
        <div style={{ position: 'absolute', right: -30, top: -30, width: 300, height: 300, borderRadius: '50%', border: `1px solid rgba(127,35,148,0.15)` }} />
        <div style={{ ...S.section, textAlign: 'center', position: 'relative' }}>
          <p style={S.label}>Ready to Print?</p>
          <h2 style={{ ...S.h2, color: '#fff', marginBottom: 16 }}>Request a Quote Today</h2>
          <p style={{ ...S.body, color: 'rgba(255,255,255,0.6)', maxWidth: 460, margin: '0 auto 40px' }}>
            Tell us your requirement — quantity, size, material, deadline — and we'll get back to you with a competitive quote within hours.
          </p>
          <button onClick={() => navigate('quote')} style={{ ...S.btn, fontSize: 15, padding: '15px 44px' }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
            Get a Free Quote
          </button>
        </div>
      </section>
    </div>
  )
}
