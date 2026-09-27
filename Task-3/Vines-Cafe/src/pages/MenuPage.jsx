import { ArrowLeft, ArrowRight, Search, X } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { menuData } from '../data/menuData'

const sectionLayout = [
  {
    id: 'small-bites-a',
    title: 'Small Bites',
    sectionLabel: '01',
    categories: ['Burgers', 'Fries'],
    trigger: 'quick bite',
  },
  {
    id: 'small-bites-b',
    title: 'Small Bites',
    sectionLabel: '02',
    categories: ['Sandwiches', 'Wraps'],
    trigger: 'quick bite',
  },
  {
    id: 'main-plates',
    title: 'Main Plates',
    sectionLabel: '03',
    categories: ['Pizza', 'Pasta', 'Chinese'],
    trigger: 'filling',
  },
  {
    id: 'sweet-finish-and-drinks',
    title: 'Sweet Finish & Drinks',
    sectionLabel: '04',
    categories: ['Desserts', 'Shakes & Beverages'],
    trigger: 'sweet',
  },
]

const cravingMap = {
  cheesy: ['Burgers', 'Pizza'],
  spicy: ['Chinese', 'Momos'],
  'quick bite': ['Burgers', 'Fries', 'Wraps', 'Momos'],
  filling: ['Pizza', 'Pasta', 'Chinese'],
  sweet: ['Desserts'],
  drink: ['Shakes & Beverages'],
}

const categoryToSection = sectionLayout.reduce((acc, section) => {
  section.categories.forEach((category) => {
    acc[category] = section.id
  })
  return acc
}, {})

const getPrice = (item) => {
  if (typeof item.price === 'string') return item.price
  if (item.prices) {
    return item.prices.M || item.prices.L || item.prices.S || '—'
  }
  return '—'
}

const getSectionInfo = (categoryName) => {
  const section = sectionLayout.find((entry) => entry.categories.includes(categoryName))
  return section || sectionLayout[0]
}

export default function MenuPage() {
  const [spreadIndex, setSpreadIndex] = useState(0)
  const [search, setSearch] = useState('')
  const [selectedItem, setSelectedItem] = useState(null)
  const [flippedCards, setFlippedCards] = useState({})
  const [isMobile, setIsMobile] = useState(() => (typeof window !== 'undefined' ? window.innerWidth < 768 : false))
  const dragStartRef = useRef(null)

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        setSpreadIndex((current) => Math.min(current + 1, sectionLayout.length - 1))
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        setSpreadIndex((current) => Math.max(current - 1, 0))
      }
      if (event.key === 'Escape') {
        setSelectedItem(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const allItems = useMemo(
    () =>
      menuData.flatMap((category) =>
        category.items.map((item) => ({
          ...item,
          category: category.category,
          sectionId: categoryToSection[category.category] || 'small-bites',
        })),
      ),
    [],
  )

  const searchResults = useMemo(() => {
    const value = search.trim().toLowerCase()
    if (!value) return []

    return allItems.filter((item) => {
      const itemName = item.name.toLowerCase()
      const categoryName = item.category.toLowerCase()
      return itemName.includes(value) || categoryName.includes(value)
    })
  }, [allItems, search])

  const currentSection = sectionLayout[spreadIndex]
  const visibleCategoryNames = currentSection.categories

  const jumpToSection = (sectionId) => {
    const targetIndex = sectionLayout.findIndex((section) => section.id === sectionId)
    setSpreadIndex(targetIndex >= 0 ? targetIndex : 0)
  }

  const nextPage = () => setSpreadIndex((current) => Math.min(current + 1, sectionLayout.length - 1))
  const prevPage = () => setSpreadIndex((current) => Math.max(current - 1, 0))

  const handlePointerDown = (event) => {
    if (isMobile) return
    dragStartRef.current = event.clientX
  }

  const handlePointerMove = (event) => {
    if (isMobile || dragStartRef.current === null) return
    const delta = event.clientX - dragStartRef.current
    if (Math.abs(delta) > 20) {
      event.preventDefault()
    }
  }

  const handlePointerUp = (event) => {
    if (isMobile || dragStartRef.current === null) return
    const delta = event.clientX - dragStartRef.current
    if (delta <= -80) {
      nextPage()
    } else if (delta >= 80) {
      prevPage()
    }
    dragStartRef.current = null
  }

  const renderCategoryList = (categoryName) => {
    const category = menuData.find((entry) => entry.category === categoryName)
    if (!category) return null

    return (
      <div className="book-category" key={category.category}>
        <h4>{category.category}</h4>
        <div className="category-items">
          {category.items.map((item) => (
            <button
              key={`${category.category}-${item.name}`}
              type="button"
              className="menu-item-row"
              onClick={() => setSelectedItem({ ...item, category: category.category, sectionId: getSectionInfo(category.category).id })}
              aria-label={`View details for ${item.name}`}
            >
              <span className="menu-item-main">
                <span className="item-name">{item.name}</span>
                {item.price || item.prices ? <span className="item-price">{getPrice(item)}</span> : null}
              </span>
              {item.description ? <span className="item-description">{item.description}</span> : null}
            </button>
          ))}
        </div>
      </div>
    )
  }

  const toggleCardFlip = (categoryName) => {
    setFlippedCards((current) => ({
      ...current,
      [categoryName]: !current[categoryName],
    }))
  }

  const categoryImageStyles = {
    Burgers: { objectPosition: 'center 58%' },
    Fries: { objectPosition: 'center 52%' },
    Sandwiches: { objectPosition: 'center 44%' },
    Wraps: { objectPosition: 'center 28%' },
    Pasta: { objectPosition: 'center 42%' },
    Pizza: { objectPosition: 'center 42%' },
    Chinese: { objectPosition: 'center 42%' },
    Momos: { objectPosition: 'center 38%' },
    'Shakes & Beverages': { objectPosition: 'center 32%' },
    Desserts: { objectPosition: 'center 38%' },
  }

  return (
    <section className="page-shell menu-page-shell">
      <div className="menu-editorial-shell">
        <div className="menu-editorial-header">
          <div>
            <p className="eyebrow">The Vines Cafe</p>
            <h2>Menu</h2>
          </div>
        </div>

        <div className="book-toolbar">
          <label className="search-box" aria-label="Search menu items">
            <Search size={18} />
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="WHAT ARE YOU CRAVING?"
              aria-label="Search menu"
            />
          </label>

          <div className="craving-prompt" aria-label="Menu cravings shortcuts">
            {Object.entries(cravingMap).map(([key, value]) => (
              <button key={key} type="button" onClick={() => jumpToSection(getSectionInfo(value[0]).id)} className="craving-chip">
                {key.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {search.trim() && (
          <div className="search-results" aria-live="polite">
            {searchResults.length > 0 ? (
              searchResults.map((item) => (
                <button
                  key={`${item.category}-${item.name}`}
                  type="button"
                  className="search-result"
                  onClick={() => {
                    setSearch('')
                    setSelectedItem(item)
                    jumpToSection(item.sectionId)
                  }}
                >
                  <span>{item.name}</span>
                  <small>
                    {getSectionInfo(item.category).title.toUpperCase()} → {item.category.toUpperCase()}
                  </small>
                </button>
              ))
            ) : (
              <span className="empty-search">No matching dishes found.</span>
            )}
          </div>
        )}

        <div className="editorial-grid">
          {menuData.map((category, index) => {
            const isFlipped = !!flippedCards[category.category]

            return (
              <article key={category.category} className={`menu-section-card category-flip-card ${isFlipped ? 'is-flipped' : ''}`}>
                <button
                  type="button"
                  className="category-flip-button"
                  onClick={() => toggleCardFlip(category.category)}
                  aria-label={`${isFlipped ? 'Flip back' : 'Flip'} ${category.category} card`}
                  aria-pressed={isFlipped}
                >
                  <div className="category-card-inner">
                    <div className="category-card-face category-card-front">
                      <div className="menu-image-frame">
                        <img
                          src={category.items[0]?.image || '/images/MAIN.jpg'}
                          alt={category.category}
                          style={categoryImageStyles[category.category] || { objectPosition: 'center' }}
                        />
                      </div>

                      <div className="menu-card-meta">
                        <span>{String(index + 1).padStart(2, '0')}</span>
                        <h3>{category.category.toUpperCase()}</h3>
                      </div>
                    </div>

                    <div className="category-card-face category-card-back">
                      <div className="category-back-header">
                        <h3>{category.category.toUpperCase()}</h3>
                      </div>

                      <ul className="category-item-list">
                        {category.items.map((item) => (
                          <li key={`${category.category}-${item.name}`}>
                            <span>{item.name}</span>
                            <strong>{getPrice(item)}</strong>
                          </li>
                        ))}
                      </ul>

                      <div className="flip-hint">↻ FLIP BACK</div>
                    </div>
                  </div>
                </button>
              </article>
            )
          })}
        </div>
      </div>

      {selectedItem && (
        <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label={`Menu item details for ${selectedItem.name}`} onClick={() => setSelectedItem(null)}>
          <div className="item-modal" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="close-modal" onClick={() => setSelectedItem(null)} aria-label="Close menu item details">
              <X size={16} />
            </button>
            <img src={selectedItem.image || '/images/MAIN.jpg'} alt={selectedItem.name} />
            <div className="modal-copy">
              <p className="eyebrow">{selectedItem.category}</p>
              <h3>{selectedItem.name}</h3>
              <p>{selectedItem.description || 'Freshly prepared favourites from the café menu.'}</p>
              <div className="modal-meta">
                <span>Price</span>
                <strong>{getPrice(selectedItem)}</strong>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
