import { Clock3, Coffee, Phone, Sparkles, UtensilsCrossed } from 'lucide-react'
import { businessInfo } from '../data/siteData'

const storyBlocks = [
  {
    title: 'The space',
    text: 'A warm, easygoing place designed for coffee, conversation and casual meals in a neighbourhood setting.',
    image: '/images/image-2.jpg',
  },
  {
    title: 'The food',
    text: 'From pizza and pasta to noodles, burgers, momos and indulgent sweets, the menu stays familiar, satisfying and welcoming.',
    image: '/images/food-1.jpg',
  },
  {
    title: 'The moments',
    text: 'The café atmosphere is best suited to slow catches-up, laid-back lunches and small everyday treats.',
    image: '/images/image-4.jpg',
  },
]

export default function AboutPage() {
  return (
    <section className="page-shell about-page">
      <header className="story-header">
        <div className="story-intro">
          <p className="eyebrow">The place</p>
          <h1>
            THE PLACE
            <span>BEHIND THE MOMENTS.</span>
          </h1>
        </div>
      </header>

      <div className="about-spotlight">
        <div className="spotlight-copy">
          <p className="eyebrow">Why VINES?</p>
          <h2>Comfort that feels like a habit.</h2>
          <p>
            The VINES CAFE is a neighbourhood café in Meerut built around easy dining, pleasant company and fresh food choices.
          </p>
          <p>
            Public listings describe the spot as serving Italian, Chinese and vegetarian favourites, making it a casual destination for quick meals, coffee breaks and shared plates.
          </p>
        </div>

        <div className="spotlight-card">
          <p className="eyebrow">At a glance</p>
          <ul>
            <li><Coffee size={18} /> Italian • Chinese • Vegetarian</li>
            <li><Phone size={18} /> {businessInfo.phone}</li>
            <li><Clock3 size={18} /> {businessInfo.hours[0]}</li>
          </ul>
        </div>
      </div>

      <div className="story-grid">
        {storyBlocks.map(({ title, text, image }) => (
          <article key={title} className="story-block">
            <img src={image} alt={title} loading="lazy" />
            <div>
              <p className="eyebrow">{title}</p>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="feature-bars">
        <div className="feature-bar">
          <Sparkles size={18} />
          <span>Comfortable ambience</span>
        </div>
        <div className="feature-bar">
          <UtensilsCrossed size={18} />
          <span>Familiar favourites</span>
        </div>
        <div className="feature-bar">
          <Coffee size={18} />
          <span>Modern, relaxed feel</span>
        </div>
      </div>
    </section>
  )
}
