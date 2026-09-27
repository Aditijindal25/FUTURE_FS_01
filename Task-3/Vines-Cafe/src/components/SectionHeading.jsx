export default function SectionHeading({ eyebrow, title, align = 'left', className = '' }) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`max-w-2xl ${alignment} ${className}`}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#68705a]">{eyebrow}</p>
      <h2 className="font-serif text-3xl text-[#2b211c] sm:text-4xl md:text-5xl">{title}</h2>
    </div>
  )
}
