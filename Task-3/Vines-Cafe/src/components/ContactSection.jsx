import { Clock3, MapPin, Phone, MessageCircle } from 'lucide-react'
import Button from './Button'
import { businessInfo } from '../data/siteData'

export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="rounded-[32px] border border-[#d6c7b5] bg-[#e8dccb] p-6 shadow-[0_30px_60px_rgba(41,23,17,0.06)] sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#68705a]">Visit us</p>
            <h2 className="font-serif text-4xl text-[#2b211c] sm:text-5xl">Plan your next food break at The VINES CAFE.</h2>
            <div className="mt-8 space-y-5 text-[#42574d]">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 shrink-0 text-[#68705a]" size={18} />
                <p>{businessInfo.fullAddress}</p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="shrink-0 text-[#68705a]" size={18} />
                <a href={businessInfo.phoneHref} className="transition-colors hover:text-[#2b211c]">{businessInfo.phone}</a>
              </div>

              <div className="flex items-start gap-3">
                <Clock3 className="mt-1 shrink-0 text-[#68705a]" size={18} />
                <div>
                  {businessInfo.hours.map((hour) => (
                    <p key={hour}>{hour}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-[#d6c7b5] bg-[#fff9f1] p-6 shadow-[0_20px_40px_rgba(47,31,25,0.05)]">
            <h3 className="font-serif text-3xl text-[#2b211c]">Find us easily</h3>
            <p className="mt-3 text-base leading-7 text-[#6f6258]">
              Conveniently located near Nexa Showroom and opposite Bajaj bike showroom in Jagriti Vihar, Garh Road.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <Button href={businessInfo.googleMapsHref} target="_blank" rel="noreferrer" className="w-full">
                Get Directions
              </Button>
              <Button href={businessInfo.phoneHref} variant="secondary" className="w-full">
                Call Now
              </Button>
              <Button href={businessInfo.whatsappHref} variant="secondary" className="w-full gap-2" target="_blank" rel="noreferrer">
                <MessageCircle size={16} /> WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
