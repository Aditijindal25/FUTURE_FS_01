import SectionHeading from './SectionHeading'
import MenuCard from './MenuCard'
import { menuCategories } from '../data/siteData'

export default function MenuSection() {
  return (
    <section id="menu" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Menu"
        title="Popular choices for every craving."
        align="center"
        className="mb-12"
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {menuCategories.map((category) => (
          <MenuCard key={category.category} title={category.category} items={category.items} />
        ))}
      </div>
    </section>
  )
}
