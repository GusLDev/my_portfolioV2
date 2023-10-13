import React from 'react'
import styles from '../styles/AboutMe.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad, faCode, faMusic, faDumbbell } from '@fortawesome/free-solid-svg-icons'
const AboutMe = () => {
    return (
        <section className={styles.aboutMe} id='about'>
            <div className={styles.info}>
                <h2 className={styles.title}>Acerca de mi</h2>
                <p className={styles.presentation}>Soy un apasionado desarrollador web con un firme compromiso con la creación de soluciones tecnológicas innovadoras.
                    Mi objetivo es contribuir al éxito de proyectos desafiantes, aprovechando mis habilidades en programación.</p>
                <div className={styles.subInfo}>
                    <div className={styles.personalData}>
                        <p className={styles.subTitles}>Datos Personales</p>
                        <p className={styles.infoText}><spam className={styles.infoDecoration}>Edad: </spam >23 Años</p>
                        <p className={styles.infoText}><span className={styles.infoDecoration}>Correo:</span> gustavoml2097@hotmail.com</p>
                        <p className={styles.infoText}><span className={styles.infoDecoration}>Lugar de residencia:</span> Tepic / Nayarit - México</p>
                        <p className={styles.infoText}><span className={styles.infoDecoration}>Rol:</span> FrontEnd / BackEnd</p>
                    </div>
                    <div>
                        <div className={styles.hobbies}>
                            <p className={styles.subTitles}>Pasatiempos</p>
                            <div className={styles.cardsContainer}>
                                <div className={styles.hobbieCard}>
                                    <FontAwesomeIcon icon={faGamepad} className={styles.hobbieIcon} />
                                    <p>Juegos</p>
                                </div>
                                <div className={styles.hobbieCard}>
                                    <FontAwesomeIcon icon={faCode} className={styles.hobbieIcon} />
                                    <p>Programar</p>
                                </div>
                                <div className={styles.hobbieCard}>
                                    <FontAwesomeIcon icon={faMusic} className={styles.hobbieIcon} />
                                    <p>Musica</p>
                                </div>
                                <div className={styles.hobbieCard}>
                                    <FontAwesomeIcon icon={faDumbbell} className={styles.hobbieIcon} />
                                    <p>Gimnasio</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe