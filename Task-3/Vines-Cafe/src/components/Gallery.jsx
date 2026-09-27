import { galleryImages } from '../data/siteData'
import SectionHeading from './SectionHeading'

export default function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-6xl px-4 pb-20 pt-28 sm:px-6 sm:pt-32 lg:px-8">
      <SectionHeading
        eyebrow="Gallery"
        title="A warm, premium setting for coffee, meals and memorable moments."
        align="center"
        className="mb-12"
      />

      <div className="grid items-start gap-6 md:grid-cols-2">
        {galleryImages.map((image, index) => (
          <div
            key={image.src}
            className="w-full overflow-hidden rounded-[28px] border border-[#d6c7b5] bg-[#fff9f1] shadow-[0_18px_35px_rgba(46,30,23,0.06)]"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="block h-auto w-full"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
