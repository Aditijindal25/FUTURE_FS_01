import { Coffee, Sparkles, UtensilsCrossed } from 'lucide-react'

const highlights = [
  {
    icon: Coffee,
    title: 'Comfortable vibe',
    text: 'A calm cafe setting designed for catching up, unwinding, and enjoying a good meal in Meerut.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Favourite foods',
    text: 'Popular picks include pizza, pasta, garlic bread, momos, burgers, sandwiches and noodles.',
  },
  {
    icon: Sparkles,
    title: 'Neighbourhood appeal',
    text: 'Ideal for casual meetups, family outings and a quick bite that feels welcoming and easy.',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="overflow-hidden rounded-[30px] border border-[#d6c7b5] bg-[#fff9f1] p-3 shadow-[0_28px_60px_rgba(41,23,17,0.08)]">
          <img
            src="/images/image-2.jpg"
            alt="Cafe interior and seating at The VINES CAFE"
            className="w-full rounded-[24px]"
            style={{ height: 'auto', objectFit: 'cover' }}
          />
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#68705a]">About us</p>
          <h2 className="font-serif text-4xl text-[#2b211c] sm:text-5xl">
            A welcoming stop for good food, casual conversation and everyday comfort.
          </h2>

          <p className="mt-6 text-base leading-8 text-[#52645d]">
            The VINES CAFE brings together a relaxed dining experience with familiar favourites and a well-loved local setting. It is a cafe and restaurant concept that caters to both quick visits and slower evenings with food that feels comforting and approachable.
          </p>

          <p className="mt-4 text-base leading-8 text-[#52645d]">
            Public listings highlight Italian, Chinese and vegetarian offerings, making it a flexible choice for pizza, pasta, sandwiches, burgers, noodles and more. The atmosphere aims to feel modern, warm and easy for regular neighbourhood dining.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {highlights.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-[24px] border border-[#d6c7b5] bg-[#fff9f1] p-4 shadow-[0_18px_35px_rgba(46,30,23,0.04)]">
                <div className="mb-3 inline-flex rounded-full bg-[#dde2d4] p-2 text-[#68705a]">
                  <Icon size={18} />
                </div>
                <h3 className="mb-2 font-serif text-2xl text-[#2b211c]">{title}</h3>
                <p className="text-sm leading-6 text-[#52645d]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
