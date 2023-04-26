import About from '@/components/About'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Project from '@/components/Project'
import Service from '@/components/Service'
import Skill from '@/components/Skill'
import Head from 'next/head'

export default function Home() {
  return (
    <main>
      <Head>
        <title>My Portofolio Website | Rifqi Ramdhani</title>
        <meta name="description" content="Halaman yang berisikan portofolio dan CV Moch Rifqi Ramdhani" />
        <meta name="keywords" content="portofolio rifqi, rifqi ramdhani porto, portofolio rifqi ramdhani, cv rifqi, cv rifqi ramdhani, rifqi ramdhani" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </Head>


      {/* Header */}
      <Header />
      {/* </Header */}

      {/* About me */}
      <About />
      {/* </About me */}

      {/* Skill */}
      <Skill />
      {/* </Skill */}


      {/* Project */}
      <Project />
      {/* </Project */}


      {/* Service */}
      <Service />
      {/* </Service */}

      {/* Footer */}
      <Footer />
      {/* </Footer */}


    </main>
  )
}
