import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Demo of bad behavior with random</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Demo of bad random behavior</h1>

        <p>If you go to the /broken page by following this link, the behavior is correct.</p>
        <p>But, if you load /broken directly, or refresh it after following the link, it is broken.</p>
        <Link href="/broken">
          <a>Go to demo</a>
        </Link>
      </main>
    </div>
  )
}

export default Home
