import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
      When buying <a href="https://www.sandblast.in/"> Sand Blasting Machine </a>, make sure you know the advantages and disadvantages
of each. The machine must be able to perform all tasks effectively. A good machine should be
easy to clean. It should be easy to move parts and is designed to be mobile. A good
sandblasting machine should be able to move heavy parts. In addition, it should be easy to use
for the operator. It should be lightweight, durable, and easy to maneuver.
Choose a machine that can perform multiple tasks. A sandblasting machine should be easy to
use and maintain. It should also be easy to transport. If you are going to use the machine for
industrial purposes, you must consider a machine with wheels. In this way, you will be able to
maneuver the machine easily. However, it is important to buy the right sandblasting machine for
your business. It will also help you save money.
        </p>
      </main>

      <Footer />
    </div>
  )
}
