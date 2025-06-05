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

export default function Home() {
  return (
    <>
      <Navbar  />
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
