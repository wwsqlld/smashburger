'use client'

import Image from "next/image";
import { NavButton } from "./navbutton";
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
      // Устанавливаем значения `x`, когда доступен `window`
      setMenuVars({
        initial: { x: window.innerWidth },
        animate: {
          x: 0,
          transition: { duration: 1.1 },
        },
        exit: {
          x: window.innerWidth,
          transition: { duration: 0.7 },
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
                <BsList className='nav-list' size={40} onClick={() => handleClick()} /> 
            ) : (
                <MdOutlineClose className='nav-list' size={40} onClick={() => handleClick()}/>
            )} 

        </div>
    )
}

