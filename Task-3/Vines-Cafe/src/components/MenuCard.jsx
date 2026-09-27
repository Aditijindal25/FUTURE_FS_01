export default function MenuCard({ title, items, number, featured = true }) {
  const isBurgerCategory = title === 'Burgers'

  return (
    <article className={`h-fit overflow-hidden rounded-[26px] border border-[#d6c7b5] p-4 shadow-[0_20px_38px_rgba(47,31,25,0.04)] ${featured ? 'bg-[#68705a]' : 'bg-[#e8dccb]'}`}>
      <div className="mb-4 flex items-end justify-between border-b border-[#d6c7b5] pb-2">
        <h3 className={`font-serif text-3xl ${featured ? 'text-[#fff9f2]' : 'text-[#241914]'}`}>{title}</h3>
        <span className="font-serif text-4xl leading-none text-[#b85c3e]/70">{number}</span>
      </div>
      <div className="space-y-3">
        {items.map((item, index) => {
          const hasPriceMap = item.prices && typeof item.prices === 'object'

          return (
            <div key={`${item.name}-${index}`} className="rounded-[18px] bg-[#4f5545] p-3">
              <div className="font-medium text-[#fff9f2]">{item.name}</div>
              {hasPriceMap ? (
                <div className="mt-2 flex flex-wrap gap-2 text-xs text-[#f5ebdd]">
                  {Object.entries(item.prices).map(([size, value]) => (
                    <span key={`${item.name}-${size}`} className={isBurgerCategory ? 'px-0.5 text-[#fff9f2]' : 'rounded-full bg-[#b85c3e] px-2 py-0.5 text-[#fff9f2]'}>
                      {size} — {value}
                    </span>
                  ))}
                </div>
              ) : (
                <div className="mt-2 text-sm text-[#f5ebdd]">{item.price || 'Please confirm availability'}</div>
              )}
            </div>
          )
        })}
      </div>
    </article>
  )
}
