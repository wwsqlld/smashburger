'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation';

export function NavButton({text, href}) {

    const isHomePage = usePathname() === "/"

    return (
       <Link className={isHomePage ? 'nav-btn nav-btn-white' : 'nav-btn nav-btn-black'} href={href}>
            <p>{text}</p>
        </Link>
    )
}