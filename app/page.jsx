import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import Companies from '@/components/Companies'
import Contacto from '@/components/Contacto'
import Equipo from '@/components/Equipo'
import Servicios from '@/components/Servicios'
// import Footer from '@/components/Footer copy'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Companies />
      <Servicios />
      <Equipo />
      <Contacto />
      <Footer />
    </>
  )
}
