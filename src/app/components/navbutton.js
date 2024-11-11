'use client'

import Link from 'next/link'

export function NavButton({text, href}) {
    return (
       <Link className='nav-btn' href={href}>
            <p>{text}</p>
        </Link>
    )
}