import React, { useEffect, useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, Camera, Instagram, Menu, X } from 'lucide-react'
import './styles.css'

const photographs = [
  { id: 1, title: 'Where the road disappears', place: 'Western Ghats, India', category: 'Roads', ratio: 'tall', src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1100&q=85' },
  { id: 2, title: 'The quiet in between', place: 'Mountain country', category: 'Landscapes', ratio: 'wide', src: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=85' },
  { id: 3, title: 'Last light, long ride', place: 'Open road', category: 'Roads', ratio: 'square', src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=85' },
  { id: 4, title: 'A world above the clouds', place: 'Highlands', category: 'Landscapes', ratio: 'tall', src: 'https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1100&q=85' },
  { id: 5, title: 'Details of the journey', place: 'On the way', category: 'Details', ratio: 'square', src: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1000&q=85' },
  { id: 6, title: 'Into the blue', place: 'Coastal roads', category: 'Landscapes', ratio: 'wide', src: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1200&q=85' },
]
const categories = ['All frames', 'Landscapes', 'Roads', 'Details']

function App() {
  const [filter, setFilter] = useState('All frames')
  const [active, setActive] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [showNote, setShowNote] = useState(true)
  const visiblePhotos = useMemo(() => filter === 'All frames' ? photographs : photographs.filter((photo) => photo.category === filter), [filter])

  useEffect(() => {
    if (!active) return
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setActive(null)
      if (event.key === 'ArrowRight') setActive((current) => current ? photographs[(photographs.findIndex((photo) => photo.id === current.id) + 1) % photographs.length] : current)
      if (event.key === 'ArrowLeft') setActive((current) => current ? photographs[(photographs.findIndex((photo) => photo.id === current.id) - 1 + photographs.length) % photographs.length] : current)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKeyDown) }
  }, [active])

  const stepPhoto = (direction) => {
    if (!active) return
    const currentIndex = photographs.findIndex((photo) => photo.id === active.id)
    setActive(photographs[(currentIndex + direction + photographs.length) % photographs.length])
  }

  return (
    <main>
      {showNote && <div className="demo-note"><span>Portfolio preview</span><p>Sample photographs are placeholders — replace them with your own work before sharing with clients.</p><button aria-label="Dismiss preview note" onClick={() => setShowNote(false)}><X size={15}/></button></div>}
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Sweekar home">SM<span>®</span></a>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          <a href="#work" onClick={() => setMenuOpen(false)}>Selected work</a><a href="#about" onClick={() => setMenuOpen(false)}>About</a><a href="#services" onClick={() => setMenuOpen(false)}>What I do</a><a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Let’s talk <ArrowUpRight size={14}/></a>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>{menuOpen ? <X/> : <Menu/>}</button>
      </header>
      <section className="hero" id="top">
        <div className="hero-copy"><p className="eyebrow"><span className="eyebrow-dot"/> INDEPENDENT TRAVEL & ADVENTURE PHOTOGRAPHER</p><h1>Chasing places.<br/><em>Keeping feelings.</em></h1><div className="hero-bottom"><p>Frames from the long way around. Landscapes, roads and small details that make a journey stay with you.</p><a href="#work" className="round-link" aria-label="Explore selected work"><ArrowDownRight size={23}/></a></div></div>
        <div className="hero-image-wrap"><img className="hero-image" src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=2200&q=90" alt="Sunlight spilling across a mountain valley"/><div className="hero-image-shade"/><span className="image-index">01 / THE OUTDOORS, ALWAYS</span><span className="image-side-note">A LITTLE FARTHER<br/>IS A LITTLE CLOSER.</span></div>
        <div className="hero-meta"><span>BASED IN KARNATAKA, INDIA</span><span>AVAILABLE FOR SELECT ASSIGNMENTS <span className="meta-arrow">↗</span></span></div>
      </section>
      <section className="work-section section-shell" id="work">
        <div className="section-heading"><div><p className="eyebrow">A FEW THINGS I’VE SEEN</p><h2>Selected <em>frames.</em></h2></div><p className="section-intro">A visual journal of the places, roads and fleeting moments worth pausing for.</p></div>
        <div className="gallery-toolbar"><div className="gallery-count"><span>0{visiblePhotos.length}</span> FRAMES IN VIEW</div><div className="filter-list" role="group" aria-label="Filter photographs">{categories.map((category) => <button key={category} className={filter === category ? 'filter active' : 'filter'} onClick={() => setFilter(category)}>{category}</button>)}</div></div>
        <div className="photo-grid">{visiblePhotos.map((photo, index) => <button className={'photo-card ' + photo.ratio + ' card-' + index} key={photo.id} onClick={() => setActive(photo)} aria-label={'Open photograph: ' + photo.title}><div className="photo-image-wrap"><img src={photo.src} alt={photo.title} loading="lazy"/><span className="photo-open"><ArrowUpRight size={19}/></span><span className="photo-number">{String(photo.id).padStart(2, '0')}</span></div><div className="photo-caption"><div><h3>{photo.title}</h3><p>{photo.place}</p></div><span>{photo.category}</span></div></button>)}</div>
        <p className="gallery-footnote">A small selection. More roads still waiting.</p>
      </section>
      <section className="statement-section" id="about">
        <div className="statement-image"><img src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1300&q=85" alt="A lone traveller looking into a wide open landscape" loading="lazy"/><span className="statement-stamp"><Camera size={18}/><span>LOOK<br/>CLOSER</span></span></div>
        <div className="statement-copy"><p className="eyebrow">A NOTE FROM BEHIND THE LENS</p><h2>Not just where<br/>I went. <em>How it felt.</em></h2><p className="body-copy">I’m Sweekar — a traveller, a rider, and someone who always looks twice at the light. Photography is my way of holding on to a place long after the ride home.</p><p className="body-copy">I’m drawn to raw landscapes, quiet roads, changing weather and the little things that tell the bigger story.</p><a className="text-link" href="#contact">A little more about me <ArrowUpRight size={16}/></a><span className="signature">Sweekar M.</span></div>
      </section>
      <section className="services-section section-shell" id="services">
        <div className="section-heading"><div><p className="eyebrow">GOOD STORIES, MADE TOGETHER</p><h2>Out there, <em>for a reason.</em></h2></div><p className="section-intro">Available for travel-led assignments, visual storytelling and collaborations with people who care about the places they share.</p></div>
        <div className="service-list"><div className="service-row"><span className="service-num">01</span><h3>Destination stories</h3><p>Photography for stays, places and travel experiences with a sense of place.</p><ArrowUpRight/></div><div className="service-row"><span className="service-num">02</span><h3>Road & adventure</h3><p>Ride narratives, outdoor journeys and honest frames from the road.</p><ArrowUpRight/></div><div className="service-row"><span className="service-num">03</span><h3>Brand collaborations</h3><p>Visual content for outdoor, travel and motorcycle brands that fit the journey.</p><ArrowUpRight/></div></div><p className="service-caveat">Project scope, travel expenses and usage rights are discussed per assignment.</p>
      </section>
      <section className="contact-section" id="contact"><div className="contact-top"><p className="eyebrow"><span className="eyebrow-dot"/> HAVE A PLACE IN MIND?</p><span>LET’S MAKE SOMETHING THAT LASTS.</span></div><h2>Send me <em>somewhere.</em></h2><p className="contact-copy">A destination to tell, a road to document, or a project that needs a fresh perspective. Let’s start there.</p><a className="contact-email" href="mailto:YOUR_EMAIL@example.com">YOUR_EMAIL@example.com <ArrowUpRight size={20}/></a><div className="contact-bottom"><span>KARNATAKA, INDIA · OPEN TO TRAVEL</span><a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><Instagram size={16}/> INSTAGRAM <ArrowUpRight size={13}/></a></div></section>
      <footer className="footer"><a className="wordmark" href="#top">SM<span>®</span></a><span>MADE SLOWLY, SEEN OUT THERE.</span><a href="#top">BACK TO TOP ↑</a><span>© {new Date().getFullYear()} SWEEKAR M.</span></footer>
      {active && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photograph viewer" onClick={() => setActive(null)}><button className="lightbox-close" aria-label="Close photograph" onClick={() => setActive(null)}><X/></button><button className="lightbox-arrow left" aria-label="Previous photograph" onClick={(event) => {event.stopPropagation(); stepPhoto(-1)}}><ArrowLeft/></button><div className="lightbox-content" onClick={(event) => event.stopPropagation()}><img src={active.src.replace(/w=\d+/, 'w=1800')} alt={active.title}/><div className="lightbox-caption"><div><p>{active.place} / {active.category}</p><h3>{active.title}</h3></div><span>{String(photographs.findIndex((photo) => photo.id === active.id) + 1).padStart(2, '0')} / {String(photographs.length).padStart(2, '0')}</span></div></div><button className="lightbox-arrow right" aria-label="Next photograph" onClick={(event) => {event.stopPropagation(); stepPhoto(1)}}><ArrowRight/></button></div>}
    </main>
  )
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>)
