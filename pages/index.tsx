import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/footer'
import Navbar from '../comps/navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, earum nulla. Dolor cumque, fuga consequuntur, consequatur quo illo sequi doloremque tempora ipsum saepe sed dolorum nemo tempore itaque quos temporibus.</p>
      <Link href='/ninjas'>
        <a>See ninja listing</a>
      </Link>
    </div>
  )
}