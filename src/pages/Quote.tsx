import { useState } from 'react'

const ACCENT = '#7F2394'
const ACCENT_DARK = '#5B1A6B'
const DEEP = '#2D0A3F'
const GRAD = `linear-gradient(135deg, ${ACCENT_DARK}, ${ACCENT})`

const services = [
  'Offset Printing', 'Digital Printing', 'Screen Printing',
  'Industrial Stickers', 'Corporate Stationery', 'Book Binding',
  'Ferrule Printing', 'Graphic Designing', 'Barcode Labels', 'Custom Printing',
]

const font = { fontFamily: "'Manrope', sans-serif" }

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '12px 14px',
  border: '1px solid #E8D5ED', background: '#fff',
  fontFamily: "'Manrope', sans-serif", fontWeight: 300,
  fontSize: 14, color: '#3A3A3A', outline: 'none',
  transition: 'border-color 0.2s',
}

const visuallyHiddenStyle: React.CSSProperties = {
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: 0,
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  border: 0,
}

export default function Quote() {
  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '', service: '', quantity: '', size: '', deadline: '', notes: '', botcheck: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null)

  const update = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }))
  const focus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => (e.target.style.borderColor = ACCENT)
  const blur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => (e.target.style.borderColor = '#E8D5ED')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "7c8cf01e-150f-4fa9-9eff-4b276ad9c1e9",
          subject: `New Quote Request from ${form.name}`,
          from_name: form.name,
          ...form
        })
      })

      const data = await response.json()
      if (response.ok && data.success) {
        setSent(true)
        setStatus({ type: 'success', message: "Success! Your quote request has been sent." })
        setForm({ name: '', company: '', phone: '', email: '', service: '', quantity: '', size: '', deadline: '', notes: '', botcheck: '' })
      } else {
        setStatus({ type: 'error', message: data.message || "Failed to submit quote request. Please try again." })
      }
    } catch (error) {
      setStatus({ type: 'error', message: "Network error. Please check your connection and try again." })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ background: '#fff', ...font }}>
      {/* Header */}
      <section style={{ background: DEEP, padding: '80px 24px 72px', position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, width: 4, height: '100%', background: ACCENT }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 48, alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: ACCENT, marginBottom: 12 }}>Request a Quote</p>
            <h1 style={{ fontWeight: 500, fontSize: 'clamp(30px, 5vw, 52px)', color: '#fff', lineHeight: 1.1, marginBottom: 16 }}>
              Tell Us What You Need
            </h1>
            <p style={{ fontWeight: 300, color: 'rgba(255,255,255,0.6)', fontSize: 15, lineHeight: 1.8 }}>
              Fill in the details below and we'll respond with a quote within a few hours during working hours — Monday to Saturday, 9AM to 8PM.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              ['⬡', 'No Minimum Order Quantity'],
              ['◉', 'Fast Turnaround on Urgent Orders'],
              ['✦', 'Pickup Available — Padi, Chennai'],
              ['⬠', 'Competitive Pricing for Bulk Orders'],
            ].map(([icon, text], i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 32, height: 32, background: 'rgba(127,35,148,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: 14, color: ACCENT }}>{icon}</span>
                </div>
                <span style={{ fontWeight: 300, fontSize: 13, color: 'rgba(255,255,255,0.65)' }}>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 900, margin: '0 auto', padding: '72px 24px' }}>
        {sent ? (
          <div style={{ textAlign: 'center', padding: '80px 24px', background: '#F8EDF9', border: '1px solid #E8D5ED' }}>
            <div style={{ width: 64, height: 64, background: GRAD, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
              <span style={{ color: '#fff', fontSize: 28 }}>✓</span>
            </div>
            <h2 style={{ fontWeight: 500, fontSize: 26, color: DEEP, marginBottom: 12 }}>Quote Request Sent</h2>
            <p style={{ fontWeight: 300, fontSize: 15, color: '#767676', maxWidth: 400, margin: '0 auto 28px', lineHeight: 1.75 }}>
              Thank you for reaching out. We'll review your requirements and respond shortly. For urgent needs, call or WhatsApp us directly.
            </p>
            <button onClick={() => setSent(false)} style={{ background: GRAD, color: '#fff', border: 'none', padding: '12px 28px', cursor: 'pointer', fontWeight: 600, fontSize: 13, ...font }}>
              Send Another Request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {/* Row 1 */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
              <div>
                <label style={{ fontWeight: 600, fontSize: 12, color: DEEP, letterSpacing: '0.05em', display: 'block', marginBottom: 6 }}>Full Name *</label>
                <input required disabled={loading} style={inputStyle} placeholder="Your name" value={form.name} onChange={e => update('name', e.target.value)} onFocus={focus} onBlur={blur} />
              </div>
              <div>
                <label style={{ fontWeight: 600, fontSize: 12, color: DEEP, letterSpacing: '0.05em', display: 'block', marginBottom: 6 }}>Company / Organisation</label>
                <input disabled={loading} style={inputStyle} placeholder="Company name (if applicable)" value={form.company} onChange={e => update('company', e.target.value)} onFocus={focus} onBlur={blur} />
              </div>
            </div>

            {/* Row 2 */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
              <div>
                <label style={{ fontWeight: 600, fontSize: 12, color: DEEP, letterSpacing: '0.05em', display: 'block', marginBottom: 6 }}>Phone Number *</label>
                <input required type="tel" disabled={loading} style={inputStyle} placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={e => update('phone', e.target.value)} onFocus={focus} onBlur={blur} />
              </div>
              <div>
                <label style={{ fontWeight: 600, fontSize: 12, color: DEEP, letterSpacing: '0.05em', display: 'block', marginBottom: 6 }}>Email Address</label>
                <input type="email" disabled={loading} style={inputStyle} placeholder="email@company.com" value={form.email} onChange={e => update('email', e.target.value)} onFocus={focus} onBlur={blur} />
              </div>
            </div>

            {/* Service */}
            <div>
              <label style={{ fontWeight: 600, fontSize: 12, color: DEEP, letterSpacing: '0.05em', display: 'block', marginBottom: 6 }}>Service Required *</label>
              <select required disabled={loading} style={{ ...inputStyle, cursor: loading ? 'not-allowed' : 'pointer' }} value={form.service} onChange={e => update('service', e.target.value)} onFocus={focus} onBlur={blur}>
                <option value="">Select a service</option>
                {services.map(s => <option key={s} value={s}>{s}</option>)}
                <option value="Other">Other / Not Sure</option>
              </select>
            </div>

            {/* Row 3 */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16 }}>
              <div>
                <label style={{ fontWeight: 600, fontSize: 12, color: DEEP, letterSpacing: '0.05em', display: 'block', marginBottom: 6 }}>Quantity</label>
                <input disabled={loading} style={inputStyle} placeholder="e.g. 500 copies" value={form.quantity} onChange={e => update('quantity', e.target.value)} onFocus={focus} onBlur={blur} />
              </div>
              <div>
                <label style={{ fontWeight: 600, fontSize: 12, color: DEEP, letterSpacing: '0.05em', display: 'block', marginBottom: 6 }}>Size / Format</label>
                <input disabled={loading} style={inputStyle} placeholder="e.g. A4, A5, custom" value={form.size} onChange={e => update('size', e.target.value)} onFocus={focus} onBlur={blur} />
              </div>
              <div>
                <label style={{ fontWeight: 600, fontSize: 12, color: DEEP, letterSpacing: '0.05em', display: 'block', marginBottom: 6 }}>Deadline</label>
                <input type="date" disabled={loading} style={inputStyle} value={form.deadline} onChange={e => update('deadline', e.target.value)} onFocus={focus} onBlur={blur} />
              </div>
            </div>

            {/* Notes */}
            <div>
              <label style={{ fontWeight: 600, fontSize: 12, color: DEEP, letterSpacing: '0.05em', display: 'block', marginBottom: 6 }}>Additional Notes / Specifications</label>
              <textarea disabled={loading} style={{ ...inputStyle, minHeight: 120, resize: 'vertical' } as React.CSSProperties} placeholder="Paper type, colour requirements, special finishes, artwork available or design required, etc." value={form.notes} onChange={e => update('notes', e.target.value)} onFocus={focus} onBlur={blur} />
            </div>

            {/* Honeypot field for Web3Forms spam prevention */}
            <input
              type="text"
              name="botcheck"
              tabIndex={-1}
              style={visuallyHiddenStyle}
              value={form.botcheck}
              onChange={e => update('botcheck', e.target.value)}
            />

            {status && status.type === 'error' && (
              <div style={{
                padding: '12px 16px',
                background: '#FFF0F2',
                border: '1px solid #F5C6CB',
                color: '#D80027',
                fontSize: 13,
                fontWeight: 500,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                alignSelf: 'flex-start',
                fontFamily: "'Manrope', sans-serif"
              }}>
                <span>⚠️</span>
                <span>{status.message}</span>
              </div>
            )}

            <button type="submit" disabled={loading} style={{ background: GRAD, color: '#fff', padding: '15px 40px', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', fontWeight: 600, fontSize: 15, alignSelf: 'flex-start', transition: 'opacity 0.2s', opacity: loading ? 0.6 : 1, ...font }}
              onMouseEnter={e => { if (!loading) e.currentTarget.style.opacity = '0.85' }}
              onMouseLeave={e => { if (!loading) e.currentTarget.style.opacity = '1' }}>
              {loading ? 'Sending...' : 'Submit Quote Request'}
            </button>
          </form>
        )}

        {/* Info strip */}
        <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 2, background: '#E8D5ED', borderTop: `3px solid ${ACCENT}` }}>
          {[
            { label: 'Phone / WhatsApp', value: 'Call or message us', sub: 'Mon–Sat, 9AM–8PM' },
            { label: 'Pickup', value: 'Padi, Chennai', sub: '39/104, Moorthy Nagar Main Rd' },
            { label: 'Payment', value: 'Cash · UPI · Bank Transfer', sub: 'Cheque accepted for B2B' },
          ].map((item, i) => (
            <div key={i} style={{ background: '#fff', padding: '24px 20px' }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: ACCENT, marginBottom: 6 }}>{item.label}</div>
              <div style={{ fontWeight: 600, fontSize: 14, color: DEEP, marginBottom: 4 }}>{item.value}</div>
              <div style={{ fontWeight: 300, fontSize: 12, color: '#767676' }}>{item.sub}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
