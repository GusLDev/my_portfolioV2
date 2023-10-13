"use client"
import React, { useEffect, useState } from 'react';
import styles from '../styles/Header.module.css';
import Link from 'next/link'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }, []);

    return (
        <header>

            <nav className={styles.nav}>
                <div className={styles.top}>
                    <Link href='#home'>
                        <p className={styles.logo}>Gustavo;</p>
                    </Link>
                    <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} className={styles.icon} onClick={toggleMenu} />
                </div>
                <ul className={`${styles.list} ${menuOpen && styles.open}`}>
                    <li className={styles.item}>
                        <Link href='#home'>Inicio</Link>
                    </li>
                    <li className={styles.item}>
                        <Link href='#about'> Acerca de mi</Link>
                    </li>
                    <li className={styles.item}>
                        <Link href='#skills'> Habilidades</Link>
                    </li>
                    <li className={styles.item}>
                        <Link href='#projects'> Proyectos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link href='#testimonials'> Testimonios</Link>
                    </li>
                    <li className={styles.item}>
                        <Link href='#contact'> Contacto</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header