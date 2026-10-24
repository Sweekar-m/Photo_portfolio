import React, { useEffect, useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, Camera, Menu, X } from 'lucide-react'
import './styles.css'

const photos = [
  {
    id: 1,
    title: 'Above the Sea of Clouds',
    category: 'Landscapes',
    ratio: 'tall',
    src: '/IMG_20261011_063951.jpg',
  },
  {
    id: 2,
    title: 'Twilight Over the Canopy',
    category: 'Landscapes',
    ratio: 'wide',
    src: '/IMG_20250514_184426.jpg',
  },
  {
    id: 3,
    title: 'The Cable and the Night',
    category: 'Roads',
    ratio: 'tall',
    src: '/IMG_20251024_233910.jpg',
  },
  {
    id: 4,
    title: 'Midnight Transit',
    category: 'Roads',
    ratio: 'wide',
    src: '/IMG_20261002_001126_1.jpg',
  },
  {
    id: 5,
    title: 'Geometry of Sunlight',
    category: 'Details',
    ratio: 'square',
    src: '/IMG_20260916_175303.jpg',
  },
  {
    id: 6,
    title: 'Crescent in the Amber Sky',
    category: 'Details',
    ratio: 'tall',
    src: '/IMG_20251010_180045.jpg',
  },
  {
    id: 7,
    title: 'Gilded Chaandbaali',
    category: 'Details',
    ratio: 'tall',
    src: '/IMG_20260829_175534.jpg',
  },
  {
    id: 8,
    title: 'The Thunderhead Rises',
    category: 'Landscapes',
    ratio: 'wide',
    src: '/IMG_20251019_161637.jpg',
  },
  {
    id: 9,
    title: 'Cascades of the Western Ghats',
    category: 'Roads',
    ratio: 'tall',
    src: '/IMG_20251024_144754.jpg',
  },
  {
    id: 10,
    title: 'Dusk Across the Ridges',
    category: 'Landscapes',
    ratio: 'wide',
    src: '/IMG_20261016_174211.jpg',
  },
  {
    id: 11,
    title: 'Veil of Starlight',
    category: 'Details',
    ratio: 'tall',
    src: '/IMG_20261014_184905.jpg',
  },
  {
    id: 12,
    title: 'The Open Horizon',
    category: 'Roads',
    ratio: 'tall',
    src: '/IMG_20260829_183519.jpg',
  },
  {
    id: 13,
    title: 'Orbits in the Dark',
    category: 'Details',
    ratio: 'wide',
    src: '/IMG_20220922_212926_1.jpg',
  },
  {
    id: 14,
    title: 'The Milky Way Dust Lane',
    category: 'Landscapes',
    ratio: 'wide',
    src: '/IMG_20220929_194537.jpg',
  },
  {
    id: 15,
    title: 'Flame and Ash',
    category: 'Details',
    ratio: 'wide',
    src: '/IMG_20221005_192225_1.jpg',
  },
  {
    id: 16,
    title: 'Solitary Spark',
    category: 'Details',
    ratio: 'tall',
    src: '/IMG_20221209_222522.jpg',
  },
  {
    id: 17,
    title: 'Breath of Fire',
    category: 'Details',
    ratio: 'wide',
    src: '/IMG_20221211_004824_1.jpg',
  },
  {
    id: 18,
    title: 'Constellations in Deep Night',
    category: 'Landscapes',
    ratio: 'tall',
    src: '/IMG_20230312_200732.jpg',
  },
  {
    id: 19,
    title: 'Courtyard Under the Full Moon',
    category: 'Landscapes',
    ratio: 'tall',
    src: '/IMG_20230504_191200_1.jpg',
  },
  {
    id: 20,
    title: "The Stargazer's Solitude",
    category: 'Landscapes',
    ratio: 'tall',
    src: '/IMG_20230520_225530.jpg',
  },
  {
    id: 21,
    title: 'Pilgrim of the Cascades',
    category: 'Roads',
    ratio: 'tall',
    src: '/IMG_20251024_130311.jpg',
  },
  {
    id: 22,
    title: 'Velocity Through the City',
    category: 'Roads',
    ratio: 'tall',
    src: '/IMG_20251207_190400.jpg',
  },
  {
    id: 23,
    title: 'Shadows in the Courtyard',
    category: 'Details',
    ratio: 'tall',
    src: '/IMG_20260131_124055.jpg',
  },
  {
    id: 24,
    title: 'Midnight Bougainvillea',
    category: 'Details',
    ratio: 'tall',
    src: '/IMG_20260206_010436.jpg',
  },
  {
    id: 25,
    title: 'Golden Hour Silhouette',
    category: 'Details',
    ratio: 'tall',
    src: '/IMG_20260829_175703.jpg',
  },
  {
    id: 26,
    title: 'Resting the Engine',
    category: 'Roads',
    ratio: 'wide',
    src: '/IMG_20260829_182939.jpg',
  },
  {
    id: 27,
    title: 'The Cockpit and the Fire',
    category: 'Roads',
    ratio: 'tall',
    src: '/IMG_20260829_183212.jpg',
  },
  {
    id: 28,
    title: 'Warm Woven Light',
    category: 'Details',
    ratio: 'tall',
    src: '/IMG_20260914_002321.jpg',
  },
  {
    id: 29,
    title: 'The Solar Portal',
    category: 'Details',
    ratio: 'tall',
    src: '/IMG_20260916_180940.jpg',
  },
  {
    id: 30,
    title: 'Towers in the Golden Rift',
    category: 'Landscapes',
    ratio: 'tall',
    src: '/IMG_20260922_174704.jpg',
  },
  {
    id: 31,
    title: 'Rays of Divine Light',
    category: 'Roads',
    ratio: 'tall',
    src: '/IMG_20260927_170453.jpg',
  },
  {
    id: 32,
    title: 'Solstice Between the Towers',
    category: 'Landscapes',
    ratio: 'tall',
    src: '/IMG_20260927_171410.jpg',
  },
  {
    id: 33,
    title: 'Pillars of the Atrium',
    category: 'Details',
    ratio: 'tall',
    src: '/IMG_20260929_152744.jpg',
  },
  {
    id: 34,
    title: 'Rooftop Horizon',
    category: 'Landscapes',
    ratio: 'tall',
    src: '/IMG_20260930_180621.jpg',
  },
  {
    id: 35,
    title: 'The Midnight Expressway',
    category: 'Roads',
    ratio: 'wide',
    src: '/IMG_20261002_000908.jpg',
  },
  {
    id: 36,
    title: 'Signals on the Highway',
    category: 'Roads',
    ratio: 'tall',
    src: '/IMG_20261002_000933.jpg',
  },
  {
    id: 37,
    title: 'The Last Station',
    category: 'Roads',
    ratio: 'tall',
    src: '/IMG_20261005_181920.jpg',
  },
  {
    id: 38,
    title: 'Waiting by the Lantern',
    category: 'Roads',
    ratio: 'tall',
    src: '/IMG_20261005_182422.jpg',
  },
  {
    id: 39,
    title: 'Ascent into the Fog',
    category: 'Roads',
    ratio: 'tall',
    src: '/IMG_20261011_024233.jpg',
  },
  {
    id: 40,
    title: 'Sanctuary at First Light',
    category: 'Landscapes',
    ratio: 'wide',
    src: '/IMG_20261011_070241.jpg',
  },
  {
    id: 41,
    title: 'Whisper of Twilight',
    category: 'Details',
    ratio: 'tall',
    src: '/IMG_20261014_191459.jpg',
  },
]

const categories = ['All frames', 'Landscapes', 'Roads', 'Details']

function App() {
  const [filter, setFilter] = useState('All frames')
  const [active, setActive] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)

  const visiblePhotos = useMemo(
    () => (filter === 'All frames' ? photos : photos.filter((photo) => photo.category === filter)),
    [filter]
  )

  const stepPhoto = (direction) => {
    if (!active) return
    const currentList = visiblePhotos.length > 0 ? visiblePhotos : photos
    const currentIndex = currentList.findIndex((photo) => photo.id === active.id)
    if (currentIndex === -1) {
      setActive(currentList[0])
      return
    }
    setActive(currentList[(currentIndex + direction + currentList.length) % currentList.length])
  }

  useEffect(() => {
    if (!active) return
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setActive(null)
      if (event.key === 'ArrowRight') stepPhoto(1)
      if (event.key === 'ArrowLeft') stepPhoto(-1)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [active, visiblePhotos])

  return (
    <main>
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="Sweekar home">
          SM<span>®</span>
        </a>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          <a href="#work" onClick={() => setMenuOpen(false)}>
            Selected work
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#services" onClick={() => setMenuOpen(false)}>
            What I do
          </a>
          <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>
            Let’s talk <ArrowUpRight size={14} />
          </a>
        </nav>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-dot" /> INDEPENDENT TRAVEL & ADVENTURE PHOTOGRAPHER
          </p>
          <h1>
            Chasing places.<br />
            <em>Keeping feelings.</em>
          </h1>
          <div className="hero-bottom">
            <p>Frames from the long way around. Landscapes, roads and small details that make a journey stay with you.</p>
            <a href="#work" className="round-link" aria-label="Explore selected work">
              <ArrowDownRight size={23} />
            </a>
          </div>
        </div>
        <div className="hero-image-wrap">
          <img
            className="hero-image"
            src="/IMG_20261011_070241.jpg"
            alt="Sunrise breaking through tree branches beside an ancient hilltop stone sanctuary"
          />
          <div className="hero-image-shade" />
          <span className="image-index">01 / FIRST LIGHT</span>
          <span className="image-side-note">
            DAWN OVER THE SUMMIT<br />
            VISUAL JOURNAL
          </span>
        </div>
        <div className="hero-meta">
          <span>CURATED VISUAL ARCHIVE</span>
          <span>
            AVAILABLE FOR SELECT ASSIGNMENTS <span className="meta-arrow">↗</span>
          </span>
        </div>
      </section>

      <section className="work-section section-shell" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A FEW THINGS I’VE SEEN</p>
            <h2>
              Selected <em>frames.</em>
            </h2>
          </div>
          <p className="section-intro">
            A visual journal of the landscapes, quiet roads and fleeting moments worth pausing for.
          </p>
        </div>
        <div className="gallery-toolbar">
          <div className="gallery-count">
            <span>{String(visiblePhotos.length).padStart(2, '0')}</span> FRAMES IN VIEW
          </div>
          <div className="filter-list" role="group" aria-label="Filter photos">
            {categories.map((category) => (
              <button
                key={category}
                className={filter === category ? 'filter active' : 'filter'}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="photo-grid">
          {visiblePhotos.map((photo, index) => (
            <button
              className={'photo-card ' + photo.ratio + ' card-' + index}
              key={photo.id}
              onClick={() => setActive(photo)}
              aria-label={'Open photograph: ' + photo.title}
            >
              <div className="photo-image-wrap">
                <img src={photo.src} alt={photo.title} loading="lazy" />
                <span className="photo-open">
                  <ArrowUpRight size={19} />
                </span>
                <span className="photo-number">{String(photo.id).padStart(2, '0')}</span>
              </div>
              <div className="photo-caption">
                <h3>{photo.title}</h3>
                <span>{photo.category}</span>
              </div>
            </button>
          ))}
        </div>
        <p className="gallery-footnote">Every frame holds a story. More roads still waiting.</p>
      </section>

      <section className="statement-section" id="about">
        <div className="statement-image">
          <img
            src="/IMG_20251024_130311.jpg"
            alt="Sweekar on his motorcycle facing a roaring mountain waterfall"
            loading="lazy"
          />
          <span className="statement-stamp">
            <Camera size={18} />
            <span>
              ON THE<br />
              ROAD
            </span>
          </span>
        </div>
        <div className="statement-copy">
          <p className="eyebrow">A NOTE FROM BEHIND THE LENS</p>
          <h2>
            Not just where<br />
            I went. <em>How it felt.</em>
          </h2>
          <p className="body-copy">
            I’m Sweekar — a traveller, a rider, and someone who always looks twice at the light. Photography is my way of holding on to a moment long after the ride home.
          </p>
          <p className="body-copy">
            I’m drawn to raw horizons, quiet winding roads, changing weather and the subtle details that carry the deeper story.
          </p>
          <a className="text-link" href="#contact">
            A little more about me <ArrowUpRight size={16} />
          </a>
          <span className="signature">Sweekar M.</span>
        </div>
      </section>

      <section className="services-section section-shell" id="services">
        <div className="section-heading">
          <div>
            <p className="eyebrow">GOOD STORIES, MADE TOGETHER</p>
            <h2>
              Out there, <em>for a reason.</em>
            </h2>
          </div>
          <p className="section-intro">
            Available for travel-led assignments, visual storytelling and collaborations with people who care about the stories they share.
          </p>
        </div>
        <div className="service-list">
          <div className="service-row">
            <span className="service-num">01</span>
            <h3>Destination stories</h3>
            <p>Photography for stays, journeys and travel experiences with authentic atmosphere.</p>
            <ArrowUpRight />
          </div>
          <div className="service-row">
            <span className="service-num">02</span>
            <h3>Road & adventure</h3>
            <p>Ride narratives, outdoor journeys and honest frames from the open road.</p>
            <ArrowUpRight />
          </div>
          <div className="service-row">
            <span className="service-num">03</span>
            <h3>Brand collaborations</h3>
            <p>Visual content for outdoor, travel and motorcycle brands that fit the journey.</p>
            <ArrowUpRight />
          </div>
        </div>
        <p className="service-caveat">Project scope, travel details and usage rights are discussed per assignment.</p>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-top">
          <p className="eyebrow">
            <span className="eyebrow-dot" /> HAVE A PROJECT IN MIND?
          </p>
          <span>LET’S MAKE SOMETHING THAT LASTS.</span>
        </div>
        <h2>
          Send me <em>somewhere.</em>
        </h2>
        <p className="contact-copy">
          A destination to tell, a road to document, or a project that needs a fresh perspective. Let’s start there.
        </p>
        <a className="contact-email" href="mailto:sweekar.m.work@gmail.com">
          sweekar.m.work@gmail.com <ArrowUpRight size={20} />
        </a>
        <div className="contact-bottom">
          <span>VISUAL STORYTELLER · OPEN TO TRAVEL</span>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <span className="instagram-mark" aria-hidden="true">
              IG
            </span>{' '}
            INSTAGRAM <ArrowUpRight size={13} />
          </a>
        </div>
      </section>

      <footer className="footer">
        <a className="wordmark" href="#top">
          SM<span>®</span>
        </a>
        <span>MADE SLOWLY, SEEN OUT THERE.</span>
        <a href="#top">BACK TO TOP ↑</a>
        <span>© {new Date().getFullYear()} SWEEKAR M.</span>
      </footer>

      {active && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Photograph viewer"
          onClick={() => setActive(null)}
        >
          <button className="lightbox-close" aria-label="Close photograph" onClick={() => setActive(null)}>
            <X />
          </button>
          <button
            className="lightbox-arrow left"
            aria-label="Previous photograph"
            onClick={(event) => {
              event.stopPropagation()
              stepPhoto(-1)
            }}
          >
            <ArrowLeft />
          </button>
          <div className="lightbox-content" onClick={(event) => event.stopPropagation()}>
            <img src={active.src} alt={active.title} />
            <div className="lightbox-caption">
              <div>
                <p>{active.category}</p>
                <h3>{active.title}</h3>
              </div>
              <span>
                {String(
                  (visiblePhotos.findIndex((photo) => photo.id === active.id) !== -1
                    ? visiblePhotos.findIndex((photo) => photo.id === active.id)
                    : photos.findIndex((photo) => photo.id === active.id)) + 1
                ).padStart(2, '0')}{' '}
                /{' '}
                {String(
                  visiblePhotos.findIndex((photo) => photo.id === active.id) !== -1
                    ? visiblePhotos.length
                    : photos.length
                ).padStart(2, '0')}
              </span>
            </div>
          </div>
          <button
            className="lightbox-arrow right"
            aria-label="Next photograph"
            onClick={(event) => {
              event.stopPropagation()
              stepPhoto(1)
            }}
          >
            <ArrowRight />
          </button>
        </div>
      )}
    </main>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
