import React from 'react'
import styles from '../styles/Skills.module.css'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FrontEndSkills } from '../data/FrontEndSkills'
import { BackEndSkills } from '../data/BackEndSkills'
console.log(FrontEndSkills);
const Skills = () => {
    return (
        <section className={styles.skills} id='skills'>
            <h2 className={styles.title}>Habilidades</h2>
            <h3 className={styles.subtitle}><FontAwesomeIcon icon={faCaretRight} className={styles.icon} />FrontEnd</h3>
            <div className={styles.skillcards}>
                {
                    FrontEndSkills.map(skill => (

                        <div className={styles.skillcard}>
                            <Image className={styles.image}
                                src={skill.image}
                                width={100}
                                height={100}
                                alt="Picture of the author"
                            />
                            <span className={styles.tech}><span className={styles.techName}>{skill.nombre}</span></span>
                        </div>
                    ))
                }
            </div>

            <h3 className={styles.subtitle}><FontAwesomeIcon icon={faCaretRight} className={styles.icon} />BackEnd</h3>

            <div className={styles.skillcards}>
                {
                    BackEndSkills.map(skill => (

                        <div className={styles.skillcard}>
                            <Image className={styles.image}
                                src={skill.image}
                                width={100}
                                height={100}
                                alt="Picture of the author"
                            />
                            <span className={styles.tech}><span className={styles.techName}>{skill.nombre}</span></span>
                        </div>
                    ))
                }
            </div>


        </section>
    )
}

export default Skills