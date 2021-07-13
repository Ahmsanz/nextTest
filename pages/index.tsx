import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/footer'
import Navbar from '../comps/navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="ninjas"/>
    </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, earum nulla. Dolor cumque, fuga consequuntur, consequatur quo illo sequi doloremque tempora ipsum saepe sed dolorum nemo tempore itaque quos temporibus.</p>
      <Link href='/ninjas'>
        <a className={styles.btn}>See ninja listing</a>
      </Link>
    </div>
    </>
  )
}
