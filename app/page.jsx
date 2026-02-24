import Image from 'next/image'
import styles from './page.module.css'
import { Navbar } from '@/components/navbar'
import { Main } from '@/components/main'
import { About } from '@/components/about'
import { Services } from '@/components/service'
import { Gallery } from '@/components/gallery'
import { Carousel } from '@/components/testimonial'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import Script from 'next/script'

export default function Home() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Eco second hand ac sale purchase",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": " Shop no 1, near dairy farm, Pocket C, Sarita Vihar",
      "addressLocality": "New Delhi",
      "addressRegion": "DL",
      "postalCode": "110076"
    },
    // "image": storeFront.src,
    "email": "saritasecondhandac@gmail.com",
    "telePhone": "+919211487421",
    "openingHours": "Mo,Tu,We,Th,Fr,Sa,Su 09:00-21:00",
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "21:00"
    }],

  }

  return (
    <>
      <Script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <div className="container-fluid px-0" style={{ marginTop: "90px" }}>
        {/* main */}
        <main>
          <Main />
          <About />
          {/* <FixedButton /> */}
          <Services />
          <Gallery />
          <Carousel />
          <Contact />
        </main>
      </div>
      <Footer />
    </>
  )
}
