import { Clock3, MapPin, MessageCircle, Phone } from 'lucide-react'
import Button from '../components/Button'
import { businessInfo } from '../data/siteData'

export default function ContactPage() {
  return (
    <section className="page-shell contact-page">
      <div className="contact-hero">
        <p className="eyebrow">Come find us</p>
        <h1>
          COME FIND
          <span>US.</span>
        </h1>
        <p>
          A warm neighbourhood cafe in Jagruti Vihar, Meerut, serving Italian, Chinese and vegetarian favourites in a relaxed setting.
        </p>
      </div>

      <div className="contact-layout">
        <div className="contact-card details-card">
          <div className="detail-row">
            <MapPin size={18} />
            <p>{businessInfo.fullAddress}</p>
          </div>

          <div className="detail-row">
            <Phone size={18} />
            <a href={businessInfo.phoneHref}>{businessInfo.phone}</a>
          </div>

          <div className="detail-row">
            <Clock3 size={18} />
            <div>
              {businessInfo.hours.map((hour) => (
                <p key={hour}>{hour}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="contact-card action-card">
          <h3>Plan your visit</h3>
          <p>
            Conveniently located near Nexa showroom, opposite Bajaj bike showroom, on Garh Road in Jagriti Vihar.
          </p>
          <div className="action-stack">
            <Button href={businessInfo.googleMapsHref} target="_blank" rel="noreferrer" className="full-width-button">Get Directions</Button>
            <Button href={businessInfo.phoneHref} variant="secondary" className="full-width-button">Call the Cafe</Button>
            <Button href={businessInfo.whatsappHref} variant="secondary" className="full-width-button" target="_blank" rel="noreferrer">
              <MessageCircle size={16} /> Message Us
            </Button>
          </div>
        </div>
      </div>

    </section>
  )
}
