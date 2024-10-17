'use client';

import { usePathname } from 'next/navigation';
import logo from '../assets/logo.svg';

export default function TopNavigation() {
    const pathname = usePathname();

    return (
        <header className={'topnavgiation'}>
            <nav className={'nav'}>
                <ul className=''>
                    <li><img src={logo.src} alt="logo" /></li>
                    <li>
                        <a href="/Home" className={pathname === "/Home" ? "active" : ""}>Home</a>
                    </li>
                    <li><a href="/Blogs" className={pathname === "/Blogs" ? "active" : ""}>Blogs</a></li>
                </ul>
            </nav>
            <button className={'button'}>Sign in</button>
        </header>
    );
}
