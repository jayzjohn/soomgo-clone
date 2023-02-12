import React from 'react'
import styles from '@/styles/Home.module.css'

const Header = ():JSX.Element => {
  return (
    <div className={styles.header}>
        <div className={styles.header_content}>

            <div className={styles.title}>
                <div>
                    Trivia
                </div>
                
                <div>
                go
            </div>
            </div>
            
        </div>
        <div className={styles.header_content}>
            <div>
                <input type="text" />
            </div>
            <div></div>
            log
        </div>
    </div>
  )
}

export default Header
