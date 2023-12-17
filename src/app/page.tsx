import Image from 'next/image'
import styles from  './ui/home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <body className={styles.body}>
      <div className={styles.background}>
          <div className={styles.content}>
            
            <Image src="/pp.png" alt="Photo de profil" width={150} height={150}  style={{position: 'absolute',
              left: '50%',
              bottom: '0%',
              top: '0%',
              transform: 'translate(-50%, -50%)',
              zIndex: '3',}}>
            
            </Image>
            
            <h1 className={styles.title}>Wujciak Florentin</h1>
            <h2 className={styles.subtitle}>Junior App Developer</h2>
            
            <div className={styles.divider}></div>
            
            <div className={styles.iconBox}>
              <div className={styles.iconItem}>
                <span className={styles.icon}>&#9990;</span>
                <p className={styles.iconText}> +33641327100</p>
              </div>
              <div className={styles.iconItem}>
                <span className={styles.icon}>&#9993;</span>
                <p className={styles.iconText}> wujciak.florentin.pro@gmail.com</p>
              </div>
              <div className={styles.iconItem}>
                <svg className={styles.iconGlobe} data-testid="geist-icon" fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
                <a target="_blank" title="Découvrir mes projets sur Github" href="https://github.com/Florentin-Wujciak?tab=repositories" className={styles.iconLink}>My Github repositories</a>
              </div>
            </div>
          
          </div>
      </div>
    </body>
  )
}
