import About from '@/components/About'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Project from '@/components/Project'
import Service from '@/components/Service'
import Skill from '@/components/Skill'
import Head from 'next/head'
import { motion } from "framer-motion"
import images from '../public/images'
import { useState, useRef, useEffect } from "react"

export default function Home() {
  const [width, setWidth] = useState(0)
  const carousel = useRef()

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])


  return (
    <main>
      <Head>
        <title>My Portofolio Website | Rifqi Ramdhani</title>
        <meta name="description" content="Halaman yang berisikan portofolio dan CV Moch Rifqi Ramdhani" />
        <meta name="keywords" content="portofolio rifqi, rifqi ramdhani porto, portofolio rifqi ramdhani, cv rifqi, cv rifqi ramdhani, rifqi ramdhani" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </Head>


      <motion.div  className="carousel">
        <motion.div ref={carousel} drag="x" dragConstraints={{ right: 0, left: -width }} className="inner-carousel" whileTap={{cursor: "grabbing" }}>
          {
            images.map((image, index) => {
              return (
                <motion.div className="item">
                  <img src={`${image.src}`} alt={`${index}`} />
                </motion.div>
              )
            })
          }
        </motion.div>   
      </motion.div>    


    </main>
  )
}
