import type { Page } from '../App'

interface Props { navigate: (p: Page) => void }

const ACCENT = '#7F2394'
const ACCENT_DARK = '#5B1A6B'
const DEEP = '#2D0A3F'
const GRAD = `linear-gradient(135deg, ${ACCENT_DARK}, ${ACCENT})`

const services = [
  {
    title: 'Screen Printing',
    img: 'https://images.unsplash.com/photo-1581508512961-0e3b9524db40?w=900&h=620&fit=crop&auto=format',
    desc: 'Durable, high-opacity screen printing for industrial and promotional applications across metals, plastics, and specialty surfaces.',
    applications: [
      'Fuse box printing (Automobiles)',
      'Stickers & transparent stickers',
      'Adhesive for customised gumming',
      'Polymer and synthetic labels',
      'Letterheads and visiting cards',
      'Pen printing',
      'Customised screen printing',
    ],
  },
  {
    title: 'Digital Printing',
    img: 'https://images.unsplash.com/photo-1739146051825-0a1e54e6f1c6?w=900&h=620&fit=crop&auto=format',
    desc: 'Fast, high-quality digital printing for short runs and personalised materials with sharp detail and vibrant colour accuracy.',
    applications: [
      'Letterheads',
      'ID cards with yoyo clips and customised pre-printed ropes',
      'Visiting cards',
      'Stickers & labels',
      'Pamphlets, danglers & handbills',
      'Posters',
      'Invitations',
      'Institution certificates',
    ],
  },
  {
    title: 'Offset Printing',
    img: 'https://images.unsplash.com/photo-1503694978374-8a2fa686963a?w=900&h=620&fit=crop&auto=format',
    desc: 'Precision CMYK offset printing for high-volume jobs — consistent quality across every sheet, from forms and registers to books and menus.',
    applications: [
      'Bill books & delivery challans',
      'All kinds of book bindings',
      'All kinds of registers',
      'Leave forms',
      'Production / HR / Operation reports and records',
      'Letterheads & prescriptions',
      'Catering menu cards',
      'Invitation / Notices / Handbill notices',
      'Packing slips & quality reports',
      'Memo pads & all kinds of tags',
    ],
  },
  {
    title: 'Advertisement & Display Board Printing',
    img: 'https://images.unsplash.com/photo-1718670013939-954787e56385?w=900&h=620&fit=crop&auto=format',
    desc: 'Bold, weather-resistant signage and display printing for businesses — from small name boards to large flex banners with full framework installation.',
    applications: [
      'Sign boards & name boards',
      'Foam board vinyl printing',
      'Acrylic board with vinyl printing',
      'Flex banner printing',
      'Flex banner framework and pasting',
    ],
  },
  {
    title: 'Ferrule Printing',
    img: 'https://images.unsplash.com/photo-1625820104062-387167dd655b?w=900&h=620&fit=crop&auto=format',
    desc: 'Precision ferrule printing for wire and cable identification in automobile and industrial electrical control panels.',
    applications: [
      'Ferrule printing for automobile control panels',
      'Ferrule printing for electrical control panels',
    ],
  },
]

export default function Services({ navigate }: Props) {
  return (
    <div style={{ background: '#fff', fontFamily: "'Manrope', sans-serif" }}>
      {/* Header */}
      <section style={{ background: DEEP, padding: '80px 24px 72px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, width: 4, height: '100%', background: ACCENT }} />
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: ACCENT, marginBottom: 12 }}>What We Offer</p>
          <h1 style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 500, fontSize: 'clamp(32px, 5vw, 54px)', color: '#fff', lineHeight: 1.1, marginBottom: 16, maxWidth: 600 }}>
            Complete Printing Services
          </h1>
          <p style={{ fontWeight: 300, color: 'rgba(255,255,255,0.6)', maxWidth: 520, fontSize: 15, lineHeight: 1.8 }}>
            Five specialised services under one roof — each executed with the same precision that has defined A1 Prints & Forms for over 22 years.
          </p>
        </div>
      </section>

      {/* Alternating service rows */}
      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 0' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {services.map((svc, i) => {
            const imageLeft = i % 2 === 0
            return (
              <div key={i} style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                minHeight: 460,
                borderBottom: '1px solid #F0E8F5',
              }}>
                {/* Image side */}
                <div style={{
                  position: 'relative',
                  overflow: 'hidden',
                  background: '#E8D5ED',
                  order: imageLeft ? 0 : 1,
                  minHeight: 320,
                }}>
                  <img
                    src={svc.img}
                    alt={svc.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0, display: 'block' }}
                  />
                  {/* Slanting gradient fade from image into text */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: imageLeft
                      ? 'linear-gradient(105deg, transparent 40%, #ffffff 90%)'
                      : 'linear-gradient(255deg, transparent 40%, #ffffff 90%)',
                  }} />
                </div>

                {/* Text side */}
                <div style={{
                  padding: '52px 52px 52px 48px',
                  display: 'flex', flexDirection: 'column', justifyContent: 'center',
                  order: imageLeft ? 1 : 0,
                  background: '#fff',
                }}>
                  <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: ACCENT, marginBottom: 10 }}>
                    Service {String(i + 1).padStart(2, '0')}
                  </p>
                  <h2 style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 500, fontSize: 'clamp(22px, 2.5vw, 32px)', color: DEEP, marginBottom: 14, lineHeight: 1.2 }}>{svc.title}</h2>
                  <p style={{ fontWeight: 300, fontSize: 14, color: '#767676', lineHeight: 1.8, marginBottom: 28 }}>{svc.desc}</p>
                  <div style={{ marginBottom: 32 }}>
                    <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: DEEP, marginBottom: 14 }}>Applications</p>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {svc.applications.map((a, j) => (
                        <li key={j} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, fontWeight: 400, color: '#3A3A3A' }}>
                          <div style={{ width: 5, height: 5, background: ACCENT, flexShrink: 0 }} />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#F8EDF9', padding: '72px 24px', borderTop: '1px solid #E8D5ED' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: ACCENT, marginBottom: 12 }}>Get Started</p>
          <h2 style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 500, fontSize: 'clamp(24px, 3.5vw, 38px)', color: DEEP, marginBottom: 16 }}>Not Sure Which Service You Need?</h2>
          <p style={{ fontWeight: 300, fontSize: 15, color: '#767676', marginBottom: 32, lineHeight: 1.75 }}>Describe your requirement and we'll recommend the right printing process, substrate, and finish for your project.</p>
          <button onClick={() => navigate('quote')} style={{
            background: GRAD, color: '#fff', padding: '14px 40px', border: 'none', cursor: 'pointer',
            fontFamily: "'Manrope', sans-serif", fontWeight: 600, fontSize: 14, transition: 'opacity 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
            Request a Quote
          </button>
        </div>
      </section>
    </div>
  )
}
