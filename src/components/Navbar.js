'use client'

import Image from "next/image";
import { NavButton } from "./NavButton";
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { BsList } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";


export function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const router = useRouter()


    const isHomePage = usePathname() === "/"


    const [menuVars, setMenuVars] = useState({});
  
    useEffect(() => {
      setMenuVars({
        initial: { y: -window.innerHeight },
        animate: {
          y: 0,
          transition: { duration: 0.7 },
        },
        exit: {
          y: -window.innerHeight,
          transition: { duration: 0.9 },
        },
      });
    }, []);
    
    
      const handleClick = () => {
        setIsOpen(!isOpen)
      }



    return (
        <div className={isHomePage ? "app-navbar-home" : "app-navbar"}>

        <AnimatePresence>
            {isOpen && (
            <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className='nav-cont-adap'
            >

            <div className='adap-list'>
                <Link href="/" onClick={() => handleClick()} className='nav-btn-adap' style={{ textDecoration: 'none'}} >
                    <p>Home</p>
                </Link>
                <Link href="/about" onClick={() => handleClick()} className='nav-btn-adap' style={{ textDecoration: 'none'}} >
                    <p>Über uns</p>
                </Link>
            </div>


            </motion.div>
        )}
      </AnimatePresence>


            <div className='logo' onClick={() => router.push('/')}>
                <Image
                  alt="logo"
                  src='/logo4.png'
                  priority
                  width={125.8}
                  height={106}
                  draggable="false"
                  quality={100}
                  unoptimized
                  
                />
            </div>
            <div className="nav-container">
                <NavButton text='Home' href="/" />
                <NavButton text='Über uns' href="/about" />
            </div> 



            {!isOpen ? (
                <BsList className={isHomePage ? 'nav-list' : 'nav-list-black'} size={40} onClick={() => handleClick()} /> 
            ) : (
                <MdOutlineClose className={isHomePage ? 'nav-list' : 'nav-list-black'} size={40} onClick={() => handleClick()}/>
            )} 

        </div>
    )
}

