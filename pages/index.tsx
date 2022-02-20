import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Twitter Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="m-w-[1500px] mx-auto flex h-[400] min-h-screen bg-black">
        <Sidebar />
        {/* Feed */}
        {/* Widgets */}
        {/* Modal */}
      </main>
    </div>
  )
}

export default Home
