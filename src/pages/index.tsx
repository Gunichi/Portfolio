import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Discover from '@/components/Discover'
import AboutMe from '@/components/AboutMe'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import MyKnowledges from '@/components/MyKnowledges'
import Footer from '@/components/Footer'
import { Fade } from "react-awesome-reveal";
import { useEffect, useState } from 'react'
import LottieLoading from '@/animations/LottieLoading'
import { Flex } from '@chakra-ui/react'
import WithSubnavigation from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])
    
  return (
    <>
      <Head>
        <title>Gunichi - Portfólio</title>
        <meta name="description" content="This is my portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loading ? (
        <Flex justify="center" align="center" h="100vh" >
          <Image 
            src="/Gunichi.me.gif"
            alt="Gunichi Logo"
            width={500}
            height={500}
          />
        </Flex>
      ) : (
        <>
        <WithSubnavigation/>
          <Fade direction="left" cascade>
            <Discover />
          </Fade>
            <AboutMe />
            <MyKnowledges />
          <Fade direction="right" cascade>
            <Projects />
          </Fade>
          <Fade direction="left" cascade>
            <Contact />
          </Fade>
          <Footer />
        </>
      )}
    </>
  )
}
