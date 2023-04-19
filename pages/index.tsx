import Header from '@/components/Header'
import { Inter } from 'next/font/google'
import Head from 'next/head'

export default function Home() {
  return (
    <main>
      <Head>
        <title>My Portofolio Website | Rifqi Ramdhani</title>
        <meta name="description" content="Halaman yang berisikan portofolio dan cv Moch Rifqi Ramdhani" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </Head>

      <Header />
    </main>
  )
}
