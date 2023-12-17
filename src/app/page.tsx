import Image from 'next/image'
import styles from  './ui/home.module.css'


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
                <svg className={styles.iconGlobe} data-testid="geist-icon" fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
                <a target="_blank" title="Découvrir mes projets sur Github" href="https://github.com/Florentin-Wujciak?tab=repositories" className={styles.iconLink}>My Github repositories</a>
              </div>
            </div>

            <div className={styles.divider}></div>

            <div className={styles.aboutMe}>
              <div className={styles.aboutMeIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" style={{marginLeft: "11px"}} height="16" width="14" viewBox="0 0 448 512"><path fill="#ffffff" d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg>
              </div>
              <h3>About Me</h3>
            </div>
          
          </div>
      </div>
    </body>
  )
}
