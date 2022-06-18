import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Reddit</title>
        <link rel="icon" href="/reddit-1.svg" />
      </Head>

      <Header />
    </div>
  )
}

export default Home
