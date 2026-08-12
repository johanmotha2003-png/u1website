// Trigger HMR compilation to copy frame.jpeg
import type { Page } from '../App'
import foundersImage from '../imports/frame2.jpeg'

interface Props { navigate: (p: Page) => void }

const ACCENT = '#7F2394'
const ACCENT_DARK = '#5B1A6B'
const DEEP = '#2D0A3F'
const GRAD = `linear-gradient(135deg, ${ACCENT_DARK}, ${ACCENT})`

const machinery = [
  { name: 'Offset Printing Machine', desc: 'Multi-colour CMYK precision printing for high-volume jobs.' },
  { name: 'Cutting Machines', desc: 'Hydraulic paper cutting for clean, precise trimming.' },
  { name: 'Hydraulic Binding Machine', desc: 'Perfect binding for reports, manuals and catalogues.' },
  { name: 'Perforation Machine', desc: 'Tear-off perforations for forms, tickets and vouchers.' },
  { name: 'Ferrule Printing Machine', desc: 'Specialised cable marker and wire ferrule printing.' },
  { name: 'Book Binding Equipment', desc: 'Saddle-stitching, spiral, and comb binding rigs.' },
]

const values = [
  { title: 'Quality First', desc: 'Every print job undergoes quality checks before dispatch. We never compromise on output standards regardless of order size.' },
  { title: 'Customer Partnership', desc: 'We build long-term relationships, not transactional ones. Our clients trust us as an extension of their own procurement team.' },
  { title: 'Reliability', desc: 'Deadlines are commitments. Our 22-year track record of on-time delivery reflects a team that takes punctuality seriously.' },
  { title: 'Continuous Improvement', desc: 'From stationery supplier to full-service printing house — we invest in equipment, skills, and processes to stay ahead.' },
]

const font = { fontFamily: "'Manrope', sans-serif" }

export default function About({ navigate }: Props) {
  return (
    <div style={{ background: '#fff', ...font }}>
      {/* Header */}
      <section style={{ background: DEEP, padding: '80px 24px 72px', position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, width: 4, height: '100%', background: ACCENT }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 48, alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: ACCENT, marginBottom: 12 }}>About Us</p>
            <h1 style={{ fontWeight: 500, fontSize: 'clamp(30px, 5vw, 52px)', color: '#fff', lineHeight: 1.1, marginBottom: 16, ...font }}>
              Two Decades of Printing Excellence
            </h1>
            <p style={{ fontWeight: 300, color: 'rgba(255,255,255,0.6)', fontSize: 15, lineHeight: 1.8 }}>
              A1 Prints & Forms has grown from a humble stationery supplier in Padi, Chennai into one of the area's most trusted complete printing solutions providers.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, background: 'rgba(255,255,255,0.06)' }}>
            {[
              ['2003', 'Year Established', true],
              ['22+', 'Years Experience', false],
              ['45+', 'Companies Served', false],
              ['5', 'Services Offered', false],
            ].map(([stat, label, accent], idx) => (
              <div key={idx} style={{ background: accent ? ACCENT : 'rgba(255,255,255,0.05)', padding: '28px 24px' }}>
                <div style={{ fontWeight: 800, fontSize: 36, color: '#fff', lineHeight: 1 }}>{stat}</div>
                <div style={{ fontWeight: 300, fontSize: 12, color: 'rgba(255,255,255,0.55)', marginTop: 6 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: ACCENT, marginBottom: 12 }}>Our Story</p>            <h2 style={{ fontWeight: 500, fontSize: 'clamp(22px, 3vw, 36px)', color: DEEP, lineHeight: 1.2, marginBottom: 24, ...font }}>From Stationery Supplier to Complete Printing Partner</h2>
            {[
              'What began as a humble office stationery supply business soon evolved into something bigger. Later that year, they made the decision to transition completely into a dedicated printing press, laying the foundation for the company that exists today.',
              'With a focus on quality and long-term relationships, the business steadily expanded alongside the needs of its customers. The first major investments included an AB Dick offset printing machine, a 26-inch cutting machine, a perforation machine for binding, and a hard press machine. Over the years, new technologies and equipment were added, enabling A1 Prints & Forms to serve a wider range of industries with greater precision and efficiency.',
              'Today, A1 Prints & Forms is a trusted printing solutions provider serving manufacturing plants, automobile companies, healthcare institutions, corporate offices, educational institutions, and businesses across Chennai. From a single visiting card to high-volume industrial labels, every order is handled with the same commitment to quality, reliability, and attention to detail.'
            ].map((p, i) => (
              <p key={i} style={{ fontWeight: 300, fontSize: 14, color: '#767676', lineHeight: 1.85, marginBottom: 16 }}>{p}</p>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <img src="https://images.unsplash.com/photo-1581508512961-0e3b9524db40?w=700&h=400&fit=crop&auto=format" alt="A1 Prints facility" style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', background: '#E8D5ED', display: 'block' }} />
            <img src="https://images.unsplash.com/photo-1503694978374-8a2fa686963a?w=700&h=400&fit=crop&auto=format" alt="Offset printing press" style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', background: '#E8D5ED', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* About the Owner */}
      <section style={{ background: '#F8EDF9', padding: '80px 24px', borderTop: '1px solid #E8D5ED' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: ACCENT, marginBottom: 12 }}>People Behind It</p>
          <h2 style={{ fontWeight: 500, fontSize: 'clamp(22px, 3vw, 36px)', color: DEEP, marginBottom: 48, ...font }}>Meet the Founders</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'center' }}>
            {/* Founders photo placeholder */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, position: 'relative', width: '100%' }}>
              <div style={{ width: '100%', aspectRatio: '3/4', visibility: 'hidden' }} />
              <div style={{
                position: 'absolute', inset: 0,
                background: '#E8D5ED',
                overflow: 'hidden'
              }}>
                <img
                  src={foundersImage}
                  alt="Anandan and Nithyakalyani - Founders of A1 Prints"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }}
                />
              </div>
            </div>

            {/* Founders bio */}
            <div>
              <h3 style={{ fontWeight: 600, fontSize: 26, color: DEEP, marginBottom: 4, ...font }}>Anandan <span style={{ fontWeight: 300, color: ACCENT, fontSize: 18 }}>- Founder</span></h3>
              <h3 style={{ fontWeight: 600, fontSize: 26, color: DEEP, marginBottom: 0, ...font }}>Nithya Kalyani <span style={{ fontWeight: 300, color: ACCENT, fontSize: 18 }}>- Director</span></h3>
              <div style={{ width: 40, height: 2, background: ACCENT, marginBottom: 28, marginTop: 16 }} />
              <p style={{ fontWeight: 300, fontSize: 15, color: '#555', lineHeight: 1.9, marginBottom: 20 }}>
                Founded in 2003 by Anandan and his wife, A1 Prints & Forms began as a small family-owned business in Padi, Chennai. Built on hard work, honesty, and a commitment to quality, what started as an office stationery business soon evolved into a dedicated printing press later that same year.
              </p>
              <p style={{ fontWeight: 300, fontSize: 15, color: '#555', lineHeight: 1.9, marginBottom: 20 }}>
                Over the years, their hands-on approach and focus on building lasting customer relationships helped the business grow into a trusted printing partner for companies across Chennai.
              </p>
              <p style={{ fontWeight: 300, fontSize: 15, color: '#555', lineHeight: 1.9 }}>
                Today, A1 Prints & Forms serves businesses of all sizes while staying true to the values it was founded on — reliable quality, personal service, and attention to every detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: ACCENT, marginBottom: 12 }}>What We Stand For</p>
            <h2 style={{ fontWeight: 500, fontSize: 'clamp(22px, 3vw, 36px)', color: DEEP, ...font }}>Our Values</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 2, background: '#E8D5ED' }}>
            {values.map((v, i) => (
              <div key={i} style={{ background: '#fff', padding: '32px 28px', borderTop: `3px solid ${ACCENT}` }}>
                <h3 style={{ fontWeight: 600, fontSize: 16, color: DEEP, marginBottom: 12, ...font }}>{v.title}</h3>
                <p style={{ fontWeight: 300, fontSize: 13, color: '#767676', lineHeight: 1.75 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section style={{ background: DEEP, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ marginBottom: 48 }}>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: ACCENT, marginBottom: 12 }}>Our Infrastructure</p>
            <h2 style={{ fontWeight: 500, fontSize: 'clamp(22px, 3vw, 36px)', color: '#fff', ...font }}>Machinery & Equipment</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 2 }}>
            {machinery.map((m, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.04)', padding: '28px 24px', borderLeft: `2px solid ${ACCENT}` }}>
                <h3 style={{ fontWeight: 600, fontSize: 15, color: '#fff', marginBottom: 8, ...font }}>{m.name}</h3>
                <p style={{ fontWeight: 300, fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Info */}
      <section style={{ background: '#F8EDF9', padding: '64px 24px', borderTop: '1px solid #E8D5ED' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 2, background: '#E8D5ED' }}>
          {[
            { label: 'Established', value: '2003' },
            { label: 'Experience', value: '22+ Years' },
            { label: 'Companies Served', value: '45+' },
            { label: 'Location', value: 'Padi, Chennai – 600050' },
            { label: 'Working Hours', value: 'Mon–Sat, 9AM–8PM' },
          ].map((item, i) => (
            <div key={i} style={{ background: '#fff', padding: '28px 24px' }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: ACCENT, marginBottom: 6 }}>{item.label}</div>
              <div style={{ fontWeight: 600, fontSize: 18, color: DEEP, ...font }}>{item.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '72px 24px', background: '#fff', textAlign: 'center' }}>
        <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: ACCENT, marginBottom: 12 }}>Work With Us</p>
        <h2 style={{ fontWeight: 500, fontSize: 'clamp(24px, 3.5vw, 38px)', color: DEEP, marginBottom: 16, ...font }}>Let's Print Something Great Together</h2>
        <p style={{ fontWeight: 300, fontSize: 15, color: '#767676', maxWidth: 440, margin: '0 auto 32px', lineHeight: 1.8 }}>22 years of experience, a capable team, and the equipment to handle your requirements — get in touch today.</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => navigate('quote')} style={{ background: GRAD, color: '#fff', padding: '12px 32px', border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: 13, transition: 'opacity 0.2s', ...font }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
            Get a Quote
          </button>
          <button onClick={() => navigate('contact')} style={{ background: 'transparent', color: ACCENT, border: `1.5px solid ${ACCENT}`, padding: '11px 32px', cursor: 'pointer', fontWeight: 600, fontSize: 13, transition: 'all 0.2s', ...font }}
            onMouseEnter={e => { e.currentTarget.style.background = ACCENT; e.currentTarget.style.color = '#fff' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = ACCENT }}>
            Contact Us
          </button>
        </div>
      </section>
    </div>
  )
}
