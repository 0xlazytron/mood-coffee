import { AboutUs, CoffeeHero, CoffeeMenu, Contact, Footer, Navbar, Ourmenu, SalesOffer, StoreGallery, Testimonials } from '../../components'

const Home = () => {
  return (
    <div >
     <Navbar />
     <CoffeeHero />
     <SalesOffer />
     <CoffeeMenu />
     <Ourmenu />
     <div id='gallery'>
     <StoreGallery />
     </div>
     <div id='about'>
     <AboutUs />
     </div>
     <div id='contact'>
     <Contact />
     </div>
     <Testimonials />
     <Footer />
    </div>
  )
}

export default Home