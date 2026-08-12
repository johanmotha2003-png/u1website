import { useState } from 'react'
import type { Page } from '../App'

interface Props { navigate: (p: Page) => void }

const ACCENT = '#7F2394'
const ACCENT_DARK = '#5B1A6B'
const DEEP = '#2D0A3F'
const GRAD = `linear-gradient(135deg, ${ACCENT_DARK}, ${ACCENT})`
const font = { fontFamily: "'Manrope', sans-serif" }

export default function Contact({ navigate }: Props) {
  const [modalData, setModalData] = useState<{ isOpen: boolean; label: string; value: string }>({
    isOpen: false,
    label: '',
    value: '',
  })

  const copyTextToClipboard = async (text: string): Promise<boolean> => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(text)
        return true
      } catch (e) {
        console.warn("Clipboard API failed, trying fallback:", e)
      }
    }

    // Fallback
    try {
      const textArea = document.createElement("textarea")
      textArea.value = text
      textArea.style.top = "0"
      textArea.style.left = "0"
      textArea.style.position = "fixed"
      textArea.style.opacity = "0"
      document.body.appendChild(textArea)
      textArea.focus()
      textArea.select()
      const successful = document.execCommand("copy")
      document.body.removeChild(textArea)
      return successful
    } catch (err) {
      console.error("Fallback copy failed:", err)
      return false
    }
  }

  const handleCopy = async (label: string, value: string) => {
    const success = await copyTextToClipboard(value)
    if (success) {
      setModalData({ isOpen: true, label, value })
    }
  }

  return (
    <div style={{ background: '#fff', ...font }}>
      {/* Header */}
      <section style={{ background: DEEP, padding: '80px 24px 72px', position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, width: 4, height: '100%', background: ACCENT }} />
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: ACCENT, marginBottom: 12 }}>Get in Touch</p>
          <h1 style={{ fontWeight: 500, fontSize: 'clamp(32px, 5vw, 52px)', color: '#fff', lineHeight: 1.1, marginBottom: 16 }}>
            Contact A1 Prints & Forms
          </h1>
          <p style={{ fontWeight: 300, color: 'rgba(255,255,255,0.6)', fontSize: 15, lineHeight: 1.8 }}>
            Visit us at Padi, Chennai, call us, or send a WhatsApp message — we're available Monday to Saturday, 9AM to 8PM.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '72px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 64 }}>
          {/* Left — location */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: ACCENT, marginBottom: 12 }}>Our Location</p>
            <h2 style={{ fontWeight: 500, fontSize: 'clamp(20px, 2.5vw, 30px)', color: DEEP, marginBottom: 24 }}>Find Us in Padi, Chennai</h2>

            {/* Map */}
            <div style={{ background: '#E8D5ED', aspectRatio: '16/9', position: 'relative', overflow: 'hidden', marginBottom: 16 }}>
              <iframe
                title="A1 Prints & Forms Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.8!2d80.1823!3d13.1200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA3JzEyLjAiTiA4MMKwMTAnNTYuMyJF!5e0!3m2!1sen!2sin!4v1"
                width="100%" height="100%"
                style={{ border: 0, position: 'absolute', inset: 0 }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Open in Maps Button */}
            <div style={{ display: 'flex', gap: 12, marginBottom: 32 }}>
              <a
                href="https://maps.app.goo.gl/f9pdB7SxcVFkNSe16?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: '#fff',
                  border: `1px solid ${ACCENT}`,
                  color: ACCENT,
                  padding: '10px 20px',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: 12,
                  letterSpacing: '0.04em',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  transition: 'all 0.2s',
                  ...font
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = ACCENT
                  e.currentTarget.style.color = '#fff'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = '#fff'
                  e.currentTarget.style.color = ACCENT
                }}
              >
                <span>🗺️</span> Open in Maps
              </a>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                { icon: '◉', title: 'Address', lines: ['15/10, Behind Sivan Temple,', 'North Mada 3rd Street,', 'Padi, Chennai – 600050'] },
                { icon: '⬡', title: 'Working Hours', lines: ['Monday – Saturday', '9:00 AM – 8:00 PM'] },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 16 }}>
                  <div style={{ width: 36, height: 36, background: '#F8EDF9', border: '1px solid #E8D5ED', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ fontSize: 14, color: ACCENT }}>{item.icon}</span>
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 13, color: DEEP, marginBottom: 4 }}>{item.title}</div>
                    {item.lines.map((line, j) => <div key={j} style={{ fontWeight: 300, fontSize: 13, color: '#767676', lineHeight: 1.75 }}>{line}</div>)}
                    {item.title === 'Address' && (
                      <a
                        href="https://maps.app.goo.gl/f9pdB7SxcVFkNSe16?g_st=aw"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 4,
                          color: ACCENT,
                          textDecoration: 'none',
                          fontWeight: 600,
                          fontSize: 12,
                          marginTop: 8,
                          transition: 'color 0.2s'
                        }}
                        onMouseEnter={e => (e.currentTarget.style.color = ACCENT_DARK)}
                        onMouseLeave={e => (e.currentTarget.style.color = ACCENT)}
                      >
                        Open in Maps →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — contact actions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div>
              <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: ACCENT, marginBottom: 12 }}>Direct Contact</p>
              <h2 style={{ fontWeight: 500, fontSize: 'clamp(20px, 2.5vw, 30px)', color: DEEP, marginBottom: 24 }}>Reach Us Directly</h2>
            </div>

            {/* Contact cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2, background: '#E8D5ED' }}>
              {[
                {
                  emoji: '📞',
                  label: 'Phone',
                  value: '8190064614',
                  cta: 'Copy Number',
                  bg: DEEP,
                  isCopy: true,
                  onClick: () => handleCopy('Phone Number', '8190064614')
                },
                {
                  emoji: '💬',
                  label: 'WhatsApp',
                  value: 'Message us for quick quotes',
                  href: 'https://wa.me/918190064614',
                  cta: 'Open WhatsApp',
                  bg: '#25D366'
                },
                {
                  emoji: '✉',
                  label: 'Email',
                  value: 'a1print2003@gmail.com',
                  cta: 'Copy Email',
                  bg: ACCENT,
                  isCopy: true,
                  onClick: () => handleCopy('Email Address', 'a1print2003@gmail.com')
                },
              ].map((c, i) => (
                <div key={i} style={{ background: '#fff', padding: '20px', display: 'flex', alignItems: 'center', gap: 14, justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ width: 40, height: 40, background: '#F8EDF9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 18 }}>
                      {c.emoji}
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 13, color: DEEP, marginBottom: 2 }}>{c.label}</div>
                      <div style={{ fontWeight: 300, fontSize: 12, color: '#767676' }}>{c.value}</div>
                    </div>
                  </div>
                  {c.isCopy ? (
                    <button
                      onClick={c.onClick}
                      style={{
                        background: c.bg,
                        color: '#fff',
                        padding: '8px 16px',
                        border: 'none',
                        cursor: 'pointer',
                        fontWeight: 600,
                        fontSize: 11,
                        letterSpacing: '0.04em',
                        whiteSpace: 'nowrap',
                        ...font
                      }}
                    >
                      {c.cta}
                    </button>
                  ) : (
                    <a
                      href={c.href}
                      target={c.href?.startsWith('http') ? '_blank' : undefined}
                      rel={c.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                      style={{
                        background: c.bg,
                        color: '#fff',
                        padding: '8px 16px',
                        textDecoration: 'none',
                        fontWeight: 600,
                        fontSize: 11,
                        letterSpacing: '0.04em',
                        whiteSpace: 'nowrap',
                        ...font
                      }}
                    >
                      {c.cta}
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Payment */}
            <div style={{ background: '#F8EDF9', border: '1px solid #E8D5ED', padding: '24px 20px' }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: ACCENT, marginBottom: 12 }}>Payment Methods Accepted</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {['Cash', 'UPI', 'Bank Transfer', 'Cheque (B2B)'].map(pm => (
                  <div key={pm} style={{ background: '#fff', border: '1px solid #E8D5ED', padding: '6px 14px', fontWeight: 500, fontSize: 12, color: '#3A3A3A' }}>{pm}</div>
                ))}
              </div>
            </div>

            {/* Pickup */}
            <div style={{ background: DEEP, padding: '24px 20px', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <span style={{ fontSize: 18, color: ACCENT, flexShrink: 0 }}>⬡</span>
              <div>
                <div style={{ fontWeight: 600, fontSize: 14, color: '#fff', marginBottom: 6 }}>Pickup Available</div>
                <p style={{ fontWeight: 300, fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.65 }}>
                  Collect your order directly from our Padi location. Call ahead to confirm your order is ready.
                </p>
              </div>
            </div>

            {/* Quote CTA */}
            <div style={{ background: GRAD, padding: '28px 24px', textAlign: 'center' }}>
              <div style={{ fontWeight: 700, fontSize: 18, color: '#fff', marginBottom: 8 }}>Ready to Place an Order?</div>
              <p style={{ fontWeight: 300, fontSize: 13, color: 'rgba(255,255,255,0.8)', marginBottom: 18 }}>Fill in our quote form and we'll respond within hours.</p>
              <button onClick={() => navigate('quote')} style={{ background: '#fff', color: ACCENT, border: 'none', padding: '11px 26px', cursor: 'pointer', fontWeight: 700, fontSize: 13, transition: 'opacity 0.2s', ...font }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.9')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
                Get a Free Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Clipboard Modal Popup */}
      {modalData.isOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(10, 0, 16, 0.6)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          animation: 'fadeInBackdrop 0.2s ease-out'
        }}>
          <div style={{
            background: '#fff',
            border: `2px solid ${ACCENT}`,
            boxShadow: '0 24px 48px rgba(45, 10, 63, 0.25)',
            width: '90%',
            maxWidth: 380,
            padding: '32px 24px',
            textAlign: 'center',
            position: 'relative',
            animation: 'scaleUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
          }}>
            {/* Clipboard Graphic */}
            <div style={{
              width: 80,
              height: 80,
              background: '#F8EDF9',
              border: `2px dashed ${ACCENT}`,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              position: 'relative'
            }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1" fill="#E8D5ED" />
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>

            <h3 style={{ fontWeight: 600, fontSize: 18, color: DEEP, marginBottom: 8, ...font }}>
              Copied to Clipboard!
            </h3>
            <p style={{ fontWeight: 300, fontSize: 13, color: '#767676', marginBottom: 16 }}>
              The {modalData.label.toLowerCase()} has been copied.
            </p>

            <div style={{
              background: '#F8EDF9',
              border: '1px solid #E8D5ED',
              padding: '12px 16px',
              fontFamily: 'monospace',
              fontSize: 14,
              color: DEEP,
              fontWeight: 600,
              marginBottom: 24,
              wordBreak: 'break-all',
              userSelect: 'all'
            }}>
              {modalData.value}
            </div>

            <button
              onClick={() => setModalData(prev => ({ ...prev, isOpen: false }))}
              style={{
                background: GRAD,
                color: '#fff',
                border: 'none',
                width: '100%',
                padding: '12px 24px',
                cursor: 'pointer',
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                transition: 'opacity 0.2s',
                ...font
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.9')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              OK
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(8px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInBackdrop {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  )
}
