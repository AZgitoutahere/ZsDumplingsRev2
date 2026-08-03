import { useState, useEffect } from 'react'
import heroBrand from '@/imports/ChatGPT_Image_Jul_30__2026__06_47_51_PM.png'
import imgSJB from '@/imports/Jul_30__2026__08_34_33_PM.png'
import imgXLB from '@/imports/ChatGPT_Image_Jul_30__2026__08_34_50_PM.png'
import imgPotstickers from '@/imports/ChatGPT_Image_Jul_30__2026__08_38_58_PM.png'
import imgChiliOil from '@/imports/ChatGPT_Image_Jul_30__2026__08_34_53_PM.png'
import imgChips from '@/imports/ChatGPT_Image_Jul_30__2026__09_00_31_PM.png'
import imgDrinks from '@/imports/ChatGPT_Image_Jul_30__2026__09_10_56_PM.png'
import imgTrailer from '@/imports/ChatGPT_Image_Aug_2__2026__02_19_12_PM.png'
import imgVegBao from '@/imports/ChatGPT_Image_Aug_2__2026__06_16_20_PM.png'
import imgKettleChips from '@/imports/kettle-chips.jpg'

const C = {
  bg: '#0d0d0d',
  bgFooter: '#080808',
  card: '#141414',
  imgPlaceholder: '#1e1e1e',
  red: '#c41818',
  redHover: '#a81212',
  redSubtle: 'rgba(196,24,24,0.10)',
  gold: '#d4a800',
  white: '#ffffff',
  white70: 'rgba(255,255,255,0.70)',
  white55: 'rgba(255,255,255,0.55)',
  white40: 'rgba(255,255,255,0.40)',
  white25: 'rgba(255,255,255,0.25)',
  white10: 'rgba(255,255,255,0.10)',
  white06: 'rgba(255,255,255,0.06)',
  white03: 'rgba(255,255,255,0.03)',
}

const INPUT = {
  width: '100%', boxSizing: 'border-box' as const,
  backgroundColor: '#1a1a1a', border: '1px solid rgba(255,255,255,0.12)',
  borderRadius: 2, padding: '14px 16px',
  fontSize: 14, color: '#ffffff', outline: 'none',
  fontFamily: "'Inter', system-ui, sans-serif",
  transition: 'border-color 0.2s',
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', purpose: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [field]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) return (
    <div style={{ textAlign: 'center', padding: '60px 24px', border: `1px solid rgba(255,255,255,0.08)`, borderRadius: 2 }}>
      <div style={{ fontSize: 40, marginBottom: 16 }}>🥟</div>
      <h3 style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: 32, letterSpacing: '0.06em', color: '#ffffff', marginBottom: 12 }}>Message Sent!</h3>
      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>Thanks for reaching out. We'll get back to you as soon as we can.</p>
    </div>
  )

  const focusStyle = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    (e.currentTarget.style.borderColor = '#c41818')
  const blurStyle = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <div>
          <label style={{ display: 'block', fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', marginBottom: 8 }}>Name *</label>
          <input required value={form.name} onChange={set('name')} placeholder="Your name" style={INPUT} onFocus={focusStyle} onBlur={blurStyle} />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', marginBottom: 8 }}>Email *</label>
          <input required type="email" value={form.email} onChange={set('email')} placeholder="your@email.com" style={INPUT} onFocus={focusStyle} onBlur={blurStyle} />
        </div>
      </div>

      <div>
        <label style={{ display: 'block', fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', marginBottom: 8 }}>Phone</label>
        <input type="tel" value={form.phone} onChange={set('phone')} placeholder="(555) 000-0000" style={INPUT} onFocus={focusStyle} onBlur={blurStyle} />
      </div>

      <div>
        <label style={{ display: 'block', fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', marginBottom: 8 }}>Purpose *</label>
        <select required value={form.purpose} onChange={set('purpose')} style={{ ...INPUT, color: form.purpose ? '#ffffff' : 'rgba(255,255,255,0.35)', appearance: 'none', cursor: 'pointer' }} onFocus={focusStyle} onBlur={blurStyle}>
          <option value="" disabled>What's this about?</option>
          <option value="catering">Catering — private event</option>
          <option value="corporate">Corporate catering</option>
          <option value="popup">Pop-up or collaboration</option>
          <option value="wedding">Wedding or celebration</option>
          <option value="wholesale">Wholesale inquiry</option>
          <option value="media">Press or media</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label style={{ display: 'block', fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', marginBottom: 8 }}>Tell us more</label>
        <textarea value={form.message} onChange={set('message')} placeholder="Describe your event, headcount, date, location, or anything else we should know..." rows={5} style={{ ...INPUT, resize: 'vertical', lineHeight: 1.6 }} onFocus={focusStyle} onBlur={blurStyle} />
      </div>

      <button type="submit" style={{
        fontFamily: "'Inter', system-ui, sans-serif",
        fontSize: 14, fontWeight: 700, letterSpacing: '0.08em',
        padding: '16px', borderRadius: 2, border: 'none', cursor: 'pointer',
        backgroundColor: '#c41818', color: '#ffffff',
        textTransform: 'uppercase', transition: 'background 0.2s, transform 0.15s',
        marginTop: 8,
      }}
        onMouseEnter={e => { e.currentTarget.style.background = '#a81212'; e.currentTarget.style.transform = 'translateY(-1px)' }}
        onMouseLeave={e => { e.currentTarget.style.background = '#c41818'; e.currentTarget.style.transform = 'translateY(0)' }}>
        Send Message
      </button>

      <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', textAlign: 'center' }}>
        We typically respond within 1–2 business days.
      </p>
    </form>
  )
}

const STORY_IMG = 'https://images.unsplash.com/photo-1570604127008-f644337cfb8b?w=900&h=1100&fit=crop&auto=format'

const MENU_ITEMS = [
  {
    name: "Crispy Pork Soup Bao",
    desc: "Four pan-fried sheng jian bao with seasoned pork filling. Crispy golden bottom, pillowy top, and a burst of savory broth in every bite.",
    price: "$12",
    tag: "Most Ordered",
    img: imgSJB,
  },
  {
    name: "Pork Soup Dumplings",
    desc: "Six delicate steamed pork xiao long bao soup dumplings filled with rich broth. Thin skin, maximum soup — handle with care.",
    price: "$12",
    tag: "",
    img: imgXLB,
  },
  {
    name: "Crispy Beef Pot Stickers",
    desc: "Eight hand-folded beef dumplings, pan-fried with a crispy skirt that adds a delicate crunch to every bite.",
    price: "$12",
    tag: "",
    img: imgPotstickers,
  },
  {
    name: "Beef Dumplings with Chili Oil",
    desc: "Eight boiled beef dumplings tossed in our house chili oil with garlic and sesame. Bold and unapologetic.",
    price: "$12",
    tag: "",
    img: imgChiliOil,
  },
  {
    name: "Vegetarian Bao",
    desc: "Three mushroom and vegetable steamed bao with delicate seasonings.",
    price: "$10",
    tag: "",
    img: imgVegBao,
  },
  {
    name: "Z's Wild Chips",
    desc: "Our house specialty spiced potato chips. The tingling heat could be addictive.",
    price: "$4",
    tag: "",
    img: imgChips,
  },
  {
    name: "Drinks",
    desc: "Refreshing drinks to complete your meal.",
    price: "",
    tag: "",
    img: imgDrinks,
  },
  {
    name: "Combo",
    desc: "Add chips and a drink to any dumpling order for $5.50.",
    price: "$5.50",
    tag: "",
    img: "https://images.unsplash.com/photo-1608651273724-cfee1bd12cf6?w=800&h=600&fit=crop&auto=format",
  },
]

const SCHEDULE = [
  {
    date: "Sat, Aug 1",
    label: "Kerrytown Market",
    address: "315 Detroit St, Ann Arbor, MI 48104",
    time: "10am – 3pm",
  },
  {
    date: "Sun, Aug 2",
    label: "Fuller Park",
    address: "525 W Stadium Blvd, Ann Arbor, MI 48103",
    time: "11am – 4pm",
  },
  {
    date: "Tue, Aug 4",
    label: "Ann Arbor Farmers Market",
    address: "407 N 5th Ave, Ann Arbor, MI 48104",
    time: "7am – 3pm",
  },
  {
    date: "Thu, Aug 6",
    label: "U of M Diag",
    address: "1100 N University Ave, Ann Arbor, MI 48109",
    time: "11am – 3pm",
  },
  {
    date: "Fri, Aug 7",
    label: "Main St & Liberty",
    address: "101 S Main St, Ann Arbor, MI 48104",
    time: "11am – 2pm",
  },
  {
    date: "Sat, Aug 8",
    label: "Ypsilanti Depot Town",
    address: "124 W Cross St, Ypsilanti, MI 48197",
    time: "10am – 3pm",
  },
]

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMobile = () => setMobileOpen(false)

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", backgroundColor: C.bg, color: C.white }}>

      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        transition: 'background 0.3s, backdrop-filter 0.3s',
        background: scrolled || mobileOpen ? 'rgba(13,13,13,0.97)' : 'transparent',
        backdropFilter: scrolled || mobileOpen ? 'blur(12px)' : 'none',
        borderBottom: scrolled || mobileOpen ? `1px solid ${C.white10}` : 'none',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          {/* Desktop links */}
          <div className="desktop-nav" style={{ display: 'flex', gap: 36, alignItems: 'center' }}>
            {[['#menu', 'MENU'], ['#story', 'OUR STORY'], ['#schedule', 'FIND US'], ['#contact', 'CONTACT']].map(([href, label]) => (
              <a key={label} href={href} style={{ fontSize: 14, fontWeight: 500, color: C.white70, textDecoration: 'none', letterSpacing: '0.04em', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = C.white)}
                onMouseLeave={e => (e.currentTarget.style.color = C.white70)}>
                {label}
              </a>
            ))}
            <a href="#schedule" style={{
              fontSize: 13, fontWeight: 600, letterSpacing: '0.06em',
              padding: '8px 20px', borderRadius: 2,
              backgroundColor: C.red, color: C.white,
              textDecoration: 'none', transition: 'background 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.background = C.redHover)}
              onMouseLeave={e => (e.currentTarget.style.background = C.red)}>
              ORDER NOW
            </a>
          </div>

          {/* Hamburger — mobile only */}
          <button
            className="hamburger"
            onClick={() => setMobileOpen(o => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, color: C.white, display: 'none' }}
          >
            {mobileOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div className="mobile-menu" style={{ borderTop: `1px solid ${C.white10}`, padding: '16px 24px 24px' }}>
            {[['#menu', 'Menu'], ['#story', 'Our Story'], ['#schedule', 'Find Us'], ['#contact', 'Contact']].map(([href, label]) => (
              <a key={label} href={href} onClick={closeMobile} style={{
                display: 'block', fontSize: 18, fontWeight: 500,
                color: C.white70, textDecoration: 'none',
                padding: '14px 0', borderBottom: `1px solid ${C.white10}`,
                letterSpacing: '0.03em', transition: 'color 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.color = C.white)}
                onMouseLeave={e => (e.currentTarget.style.color = C.white70)}>
                {label}
              </a>
            ))}
            <a href="#schedule" onClick={closeMobile} style={{
              display: 'block', marginTop: 20, textAlign: 'center',
              fontSize: 14, fontWeight: 600, letterSpacing: '0.06em',
              padding: '14px', borderRadius: 2,
              backgroundColor: C.red, color: C.white, textDecoration: 'none',
            }}>
              ORDER NOW
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section style={{ backgroundColor: C.bg }}>
        <div style={{ position: 'relative' }}>
          <img
            src={heroBrand}
            alt="Z's Dumplings — Made to be Craved. Brand hero with mascot and fresh sheng jian bao."
            style={{ width: '100%', display: 'block', maxHeight: '75vh', objectFit: 'cover', objectPosition: 'center' }}
          />
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 80, background: `linear-gradient(to bottom, transparent, ${C.bg})` }} />
        </div>

        {/* Location + CTA buttons below the image */}
        <p style={{ textAlign: 'center', fontSize: 11, fontWeight: 600, letterSpacing: '0.18em', color: C.gold, textTransform: 'uppercase', margin: '28px 24px 12px' }}>
          Ann Arbor, Michigan
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', padding: '0 24px 16px' }}>
          <a href="#schedule" style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: 14, fontWeight: 600, letterSpacing: '0.06em',
            padding: '14px 36px', borderRadius: 2,
            backgroundColor: C.red, color: C.white,
            textDecoration: 'none', transition: 'background 0.2s, transform 0.15s', display: 'inline-block',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = C.redHover; e.currentTarget.style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = C.red; e.currentTarget.style.transform = 'translateY(0)' }}>
            FIND THE TRAILER
          </a>
          <a href="#menu" style={{
            fontFamily: "'Inter', system-ui, sans-serif",
            fontSize: 14, fontWeight: 600, letterSpacing: '0.06em',
            padding: '14px 36px', borderRadius: 2,
            border: `1.5px solid ${C.white25}`, color: C.white,
            textDecoration: 'none', transition: 'border-color 0.2s, transform 0.15s', display: 'inline-block',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = C.white; e.currentTarget.style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = C.white25; e.currentTarget.style.transform = 'translateY(0)' }}>
            VIEW MENU
          </a>
        </div>
      </section>

      {/* SIGNATURE MENU */}
      <section id="menu" style={{ backgroundColor: C.bg, padding: '100px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>

          {/* Section eyebrow */}
          <div style={{ marginBottom: 40 }}>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.2em', color: C.red, textTransform: 'uppercase', marginBottom: 14 }}>
              What We Serve
            </p>
            <h2 style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 900, letterSpacing: '0.06em', lineHeight: 1, color: C.white }}>
              Our Menu
            </h2>
          </div>

          {/* Two-column layout */}
          <div className="menu-columns" style={{ display: 'flex', gap: 2, alignItems: 'stretch' }}>

            {/* ── LEFT: Dumpling selection ── */}
            <div className="menu-col-left" style={{ flex: '0 0 62%', minWidth: 0, display: 'flex', flexDirection: 'column' }}>

              {/* Step heading */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: 16,
                padding: '24px 28px', backgroundColor: C.card, marginBottom: 2,
              }}>
                <div style={{
                  width: 38, height: 38, borderRadius: '50%',
                  backgroundColor: C.red,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: 22, color: C.white,
                  flexShrink: 0,
                }}>1</div>
                <h3 style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: 'clamp(20px, 2.5vw, 28px)', letterSpacing: '0.06em', color: C.white, margin: 0, flex: 1, lineHeight: 1 }}>
                  Choose Your Dumpling
                </h3>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: 42, color: C.red, lineHeight: 1 }}>$11</div>
                  <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', color: C.white40, textTransform: 'uppercase', marginTop: 3 }}>per order</div>
                </div>
              </div>

              {/* Dumpling list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2, flex: 1 }}>
                {MENU_ITEMS.slice(0, 5).map((item, i) => (
                  <div
                    key={i}
                    className="dumpling-item"
                    style={{ display: 'flex', alignItems: 'stretch', backgroundColor: C.card, overflow: 'hidden', transition: 'background 0.2s', flex: 1 }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#1c1c1c')}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = C.card)}
                  >
                    {/* Image */}
                    <div className="dumpling-item-img" style={{ width: 140, flexShrink: 0, overflow: 'hidden', backgroundColor: C.imgPlaceholder }}>
                      <img
                        src={item.img}
                        alt={item.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', minHeight: 110 }}
                      />
                    </div>
                    {/* Text */}
                    <div style={{ flex: 1, padding: '20px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8, flexWrap: 'wrap' }}>
                        <h3 style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: 22, letterSpacing: '0.06em', color: C.white, margin: 0, lineHeight: 1 }}>
                          {item.name}
                        </h3>
                        {item.tag && (
                          <span style={{
                            fontSize: 10, fontWeight: 600, letterSpacing: '0.1em',
                            padding: '3px 8px', backgroundColor: C.gold, color: C.bg, borderRadius: 1, flexShrink: 0,
                          }}>
                            {item.tag}
                          </span>
                        )}
                      </div>
                      <p style={{ fontSize: 15, color: C.white55, lineHeight: 1.65, margin: 0 }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT: Combo, Chips, Drinks ── */}
            <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 2 }}>

              {/* COMBO */}
              <div style={{ backgroundColor: C.card, padding: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 22 }}>
                  <div style={{
                    width: 38, height: 38, borderRadius: '50%',
                    backgroundColor: C.red,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: 22, color: C.white,
                    flexShrink: 0,
                  }}>2</div>
                  <h3 style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: 'clamp(20px, 2.2vw, 28px)', letterSpacing: '0.06em', color: C.white, margin: 0, lineHeight: 1 }}>
                    Make It a Combo!
                  </h3>
                </div>

                {/* Equation */}
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
                  padding: '18px 0', borderTop: `1px solid ${C.white10}`, borderBottom: `1px solid ${C.white10}`,
                  marginBottom: 22,
                }}>
                  {[
                    { icon: '🥟', label: 'Any Dumpling' },
                    null,
                    { icon: '🍟', label: 'Chips' },
                    null,
                    { icon: '🥤', label: 'Drink' },
                  ].map((item, i) => item === null ? (
                    <span key={i} style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: 24, color: C.red, lineHeight: 1 }}>+</span>
                  ) : (
                    <div key={i} style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: 30, lineHeight: 1 }}>{item.icon}</div>
                      <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.09em', color: C.white40, textTransform: 'uppercase', marginTop: 6 }}>{item.label}</div>
                    </div>
                  ))}
                </div>

                {/* Price + description */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 18 }}>
                  <div style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: 58, color: C.red, lineHeight: 1, letterSpacing: '0.04em', flexShrink: 0 }}>
                    $16
                  </div>
                  <div style={{ paddingTop: 8 }}>
                    <p style={{ fontSize: 15, color: C.white55, lineHeight: 1.65, margin: 0 }}>
                      Includes one dumpling entrée, your choice of chips, and a drink.
                    </p>
                  </div>
                </div>
              </div>

              {/* CHIPS */}
              <div style={{ backgroundColor: C.card, padding: '24px 28px' }}>
                <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.18em', color: C.red, textTransform: 'uppercase', marginBottom: 18 }}>
                  Choose Your Chips
                </p>
                <div style={{ display: 'flex', gap: 2 }}>
                  {[
                    { name: "Z's Wild Chips", desc: "Our house specialty spiced potato chips. The tingling heat could be addictive.", img: imgChips },
                    { name: "Kettle Chips", desc: "Classic crunchy kettle chips, salted to perfection.", img: imgKettleChips },
                  ].map((chip, i) => (
                    <div key={i} style={{ flex: 1, backgroundColor: C.bg, overflow: 'hidden' }}>
                      <img src={chip.img} alt={chip.name} style={{ width: '100%', height: 90, objectFit: 'cover', display: 'block' }} />
                      <div style={{ padding: '12px 14px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 5 }}>
                          <div style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: 17, letterSpacing: '0.06em', color: C.white }}>{chip.name}</div>
                          <div style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: 17, color: C.red, letterSpacing: '0.06em', flexShrink: 0 }}>$3</div>
                        </div>
                        <p style={{ fontSize: 14, color: C.white55, lineHeight: 1.55, margin: 0 }}>{chip.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* DRINKS */}
              <div style={{ backgroundColor: C.card, padding: '24px 28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.18em', color: C.red, textTransform: 'uppercase', marginBottom: 18 }}>
                  Choose Your Drink
                </p>
                <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start', flex: 1 }}>
                  <img src={imgDrinks} alt="Drinks" style={{ width: 100, height: 100, objectFit: 'cover', flexShrink: 0, display: 'block' }} />
                  <div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 8 }}>
                      <p style={{ fontSize: 15, color: C.white55, lineHeight: 1.7, margin: 0 }}>
                        Refreshing drinks to complete your meal.
                      </p>
                      <span style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: 22, color: C.red, flexShrink: 0 }}>$4</span>
                    </div>
                    <p style={{ fontSize: 13, color: C.white40, letterSpacing: '0.02em', margin: 0, lineHeight: 1.6 }}>
                      Homemade Strawberry, Mango, Lychee, and Plain Lemonade
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <p style={{ marginTop: 32, fontSize: 13, color: C.white40, textAlign: 'center', letterSpacing: '0.02em' }}>
            Bao made fresh daily. Menu subject to availability. Follow us on Instagram for daily specials.
          </p>
          <p style={{ marginTop: 12, fontSize: 12, color: C.white25, textAlign: 'center', letterSpacing: '0.02em' }}>
            ⚠️ <strong style={{ color: C.white40 }}>Allergen info:</strong> Dumplings contain sesame oil and chili oil. Chips contain sesame and peanuts.
          </p>
        </div>
      </section>

      <div style={{ height: 1, backgroundColor: C.white10, margin: '0 24px' }} />

      {/* STORY */}
      <section id="story" className="section-pad" style={{ padding: '100px 24px', backgroundColor: C.bg }}>
        <div className="story-grid" style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            <div className="story-image" style={{ height: 580, overflow: 'hidden', backgroundColor: C.imgPlaceholder }}>
              <img
                src={STORY_IMG}
                alt="Chef folding dumplings by hand"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>

          <div>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.2em', color: C.red, textTransform: 'uppercase', marginBottom: 14 }}>
              Our Story
            </p>
            <h2 style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: 'clamp(36px, 4vw, 52px)', fontWeight: 900, letterSpacing: '0.06em', lineHeight: 1.05, color: C.white, marginBottom: 32 }}>
              Z's Dumplings began with a simple memory.
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: C.white55, marginBottom: 20 }}>
              Having spent time in Shanghai, some of life's happiest moments happened around a sizzling pan of sheng jian bao. When the lid was lifted, steam rushed into the air, the aroma filled the street, and everyone gathered to enjoy dumplings that were crispy on the bottom, juicy inside, and made fresh by hand.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: C.white55, marginBottom: 20 }}>
              Years later, after spending 15 years in corporate jobs, I knew it was time to return to the streets. The same attention to detail, problem-solving, and pursuit of quality that shaped a professional career became the foundation for recreating those unforgettable flavors.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: C.white55, marginBottom: 20 }}>
              Today, Z's Dumplings brings that Shanghai street-food tradition to Michigan — hand-folded dumplings, made with care, cooked fresh, and served with the same excitement that inspired them years ago.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: C.white55, marginBottom: 20 }}>
              Every sizzling pan is more than a meal. It's a taste of home, made to be shared.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: C.white70, marginBottom: 40, fontStyle: 'italic' }}>
              Z's Dumplings — Made to be craved.
            </p>
          </div>
        </div>
      </section>

      <div style={{ height: 1, backgroundColor: C.white10, margin: '0 24px' }} />

      {/* SCHEDULE */}
      <section id="schedule" className="section-pad" style={{ padding: '100px 24px', backgroundColor: C.bg }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="schedule-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>

            {/* Schedule content */}
            <div>
              <div style={{ marginBottom: 36 }}>
                <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.2em', color: C.red, textTransform: 'uppercase', marginBottom: 14 }}>
                  Find The Trailer
                </p>
                <h2 style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 900, letterSpacing: '0.06em', lineHeight: 1, color: C.white }}>
                  Upcoming Schedule
                </h2>
              </div>

              <div style={{ border: `1px solid ${C.white10}` }}>
                {SCHEDULE.map((row, i) => (
                  <div key={i} className="schedule-row" style={{
                    display: 'grid', gridTemplateColumns: '110px 1fr 90px',
                    alignItems: 'center', padding: '16px 20px',
                    borderBottom: i < SCHEDULE.length - 1 ? `1px solid ${C.white10}` : 'none',
                    transition: 'background 0.2s',
                  }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = C.white03)}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}>
                    <span style={{
                      fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: 15, fontWeight: 700,
                      color: C.white, letterSpacing: '0.06em',
                    }}>
                      {row.date}
                    </span>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(row.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: 13, color: C.white70, textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={e => (e.currentTarget.style.color = C.white)}
                      onMouseLeave={e => (e.currentTarget.style.color = C.white70)}
                    >
                      <span style={{ display: 'block', fontWeight: 500 }}>{row.label}</span>
                      <span className="schedule-address-detail" style={{ display: 'block', fontSize: 11, color: C.white40, marginTop: 2 }}>{row.address}</span>
                    </a>
                    <span style={{ fontSize: 12, fontWeight: 500, color: C.white55, letterSpacing: '0.02em', textAlign: 'right' }}>
                      {row.time}
                    </span>
                  </div>
                ))}
              </div>

              <p style={{ marginTop: 20, fontSize: 12, color: C.white40, letterSpacing: '0.02em' }}>
                Schedule may change. Follow <span style={{ color: C.white70 }}>@zs.dumplings</span> on Instagram for updates.
              </p>
            </div>

            {/* Trailer image */}
            <div className="schedule-img-col" style={{ overflow: 'hidden', borderRadius: 2 }}>
              <img
                src={imgTrailer}
                alt="Z's Dumplings food trailer open for service"
                style={{ width: '100%', display: 'block', objectFit: 'cover', borderRadius: 2 }}
              />
            </div>

          </div>
        </div>
      </section>

      <div style={{ height: 1, backgroundColor: C.white10, margin: '0 24px' }} />

      {/* CONTACT */}
      <section id="contact" className="section-pad" style={{ padding: '100px 24px', backgroundColor: C.bg }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <div style={{ marginBottom: 48 }}>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.2em', color: C.red, textTransform: 'uppercase', marginBottom: 14 }}>
              Get In Touch
            </p>
            <h2 style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 900, letterSpacing: '0.06em', lineHeight: 1, color: C.white, marginBottom: 16 }}>
              Contact Us
            </h2>
            <p style={{ fontSize: 15, color: C.white55, lineHeight: 1.7 }}>
              Interested in catering, a pop-up, or just want to say hello? Fill out the form and we'll get back to you soon.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: `1px solid ${C.white10}`, padding: '48px 24px', backgroundColor: C.bgFooter }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24 }}>
          <div>
            <div style={{ fontFamily: "'Bebas Neue', Impact, sans-serif", fontSize: 20, fontWeight: 900, letterSpacing: '0.06em', color: C.white, marginBottom: 6 }}>
              Z's Dumplings
            </div>
            <div style={{ fontSize: 13, color: C.white40 }}>Ann Arbor, MI · Est. 2026</div>
          </div>
          <a
            href="https://instagram.com/zs.dumplings/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', gap: 12,
              textDecoration: 'none', padding: '14px 28px',
              background: 'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
              borderRadius: 4,
              transition: 'opacity 0.2s, transform 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none"/>
            </svg>
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase', marginBottom: 1 }}>Follow us</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: C.white, letterSpacing: '0.01em' }}>@zs.dumplings</div>
            </div>
          </a>
          <div style={{ fontSize: 12, color: C.white25 }}>
            © 2026 Z's Dumplings. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
