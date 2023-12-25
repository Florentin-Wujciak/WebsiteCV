import Image from 'next/image'
import styles from  './ui/home.module.css'


export default function Home() {
  return (
    <body className={styles.body}>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <div className={styles.background}>
          <div className={styles.content}>
            
            <Image src="/pp.png" alt="Photo de profil" width={150} height={150}  style={{position: 'absolute',
              left: '50%',
              bottom: '0%',
              top: '0%',
              transform: 'translate(-50%, -50%)',
              border: '1px solid transparent',
              borderRadius: '50%',
              boxShadow: 'inset 0 0 0 15px black',
              zIndex: '3',}}>
            </Image>
            
            <h1 className={styles.title}>Wujciak Florentin</h1>
            <h2 className={styles.subtitle}>Junior App Developer</h2>
            
            <div className={styles.dividerHorizontal}></div>
            
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
                <a target="_blank" title="Look at my projects on GitHub" href="https://github.com/Florentin-Wujciak?tab=repositories" className={styles.iconLink}>My Github repositories</a>
              </div>
            </div>

            <div className={styles.dividerHorizontal}></div>

            <div className={styles.dividerVertical}>
              <div className={styles.leftPart}>

                <div className={styles.groupTitle}>
                  <div className={styles.aboutMeIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" style={{marginLeft: "11px"}} height="16" width="14" viewBox="0 0 448 512"><path fill="#ffffff" d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg>
                  </div>
                  <h3>About Me</h3>
                </div>

                <br></br>

                <div className={styles.aboutMeText}>
                  <p>Passionate about IT, I am currently in the third year of BUT Informatique, and am currently looking for an internship. I have skills in Java, Python, PHP, and I am currently self-taught in C#. I would like to start my own company later, when I have gained enough experience as a developer.</p>
                </div>

                <div className={styles.dividerHorizontal}></div>

                <div className={styles.groupTitle}>
                  <div className={styles.aboutMeIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" style={{marginLeft: "8px"}} height="16" width="20" viewBox="0 0 640 512"><path fill="#ffffff" d="M337.8 5.4C327-1.8 313-1.8 302.2 5.4L166.3 96H48C21.5 96 0 117.5 0 144V464c0 26.5 21.5 48 48 48H256V416c0-35.3 28.7-64 64-64s64 28.7 64 64v96H592c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48H473.7L337.8 5.4zM96 192h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V208c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H512c-8.8 0-16-7.2-16-16V208zM96 320h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H512c-8.8 0-16-7.2-16-16V336zM232 176a88 88 0 1 1 176 0 88 88 0 1 1 -176 0zm88-48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H336V144c0-8.8-7.2-16-16-16z"/></svg>
                  </div>
                  <h3>Education</h3>
                </div>

                <br></br>

                <ul className={styles.list}>
                  <li className={styles.listTitle}>Three-Year university degree in IT | 2021 - Now</li>
                  <p className={styles.listInformation}>IUT de Lens, Université d&apos;Artois, 62300, France</p>
                  <br></br>
                  <li className={styles.listTitle}>High school diploma | 2018 - 2021</li>
                  <p className={styles.listInformation}>Speciality Mathematics, Expert mathematics option, Lycée Saint-Jean Douai, 59500, France</p>
                </ul>

                <div className={styles.dividerHorizontal}></div>

                <div className={styles.groupTitle}>
                  <div className={styles.aboutMeIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" style={{marginLeft: "9px"}} height="16" width="16" viewBox="0 0 512 512"><path fill="#ffffff" d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"/></svg>
                  </div>
                  <h3>Work experiences</h3>
                </div>

                <br></br>

                <ul className={styles.list}>
                  <li className={styles.listTitle}>Learning and testing situation</li>
                  <br></br>
                  <p className={styles.listInformationWork}>The learning and testing situations are companies project simulations during which I was able to carry out :</p>
                  <br></br>
                  <ul className={styles.listWork}>
                    <li>Creation of a matching site in Spring and React (in progress)</li>
                    <li>Development of a website in PHP within 48 hours in collaboration with a team of graphic designers</li>
                    <li>Development in group of a java application with the build automation Graddle</li>
                    <li>Creation in group of a database with PostgreSQL</li>
                    <li>Creation in group of a static website with HTML/CSS</li>
                  </ul>
                  <br></br>
                  <li className={styles.listTitle}>Internship</li>
                  <br></br>
                  <ul className={styles.listWork}>
                    <li>Research project on deep learning carried out in Japan over a period of 3 months</li>
                  </ul>
                </ul>

                <div className={styles.dividerHorizontal}></div>

              </div>

              <div className={styles.middlePart}></div>

              <div className={styles.rightPart}>

                <div className={styles.groupTitle}>
                    <div className={styles.aboutMeIcon}>
                      <svg xmlns="http://www.w3.org/2000/svg" style={{marginLeft: "8px"}} height="16" width="20" viewBox="0 0 640 512"><path fill="#ffffff" d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>
                    </div>
                    
                    <h3>Skills</h3>
                </div>

                  <br></br>

                  <div className={styles.skills}>
                    <div className={styles.skillsItem}>
                      <div className={styles.skillsPic}>
                        <Image src="/java.jpg" alt="Java" width={30} height={30}></Image>
                        <p className={styles.skillsName}>Java</p>
                      </div>
                      <div className="dot">
                        <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512" style={{marginTop: "9px", marginLeft: "30px"}}><path fill="#ffffff" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512" style={{marginTop: "9px", marginLeft: "5px"}}><path fill="#ffffff" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512" style={{marginTop: "9px", marginLeft: "5px"}}><path fill="#ffffff" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512" style={{marginTop: "9px", marginLeft: "5px"}}><path fill="#ffffff" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512" style={{marginTop: "9px", marginLeft: "5px"}}><path fill="#444" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                      </div>
                    </div>
                    <div className={styles.skillsItem}>
                      <div className={styles.skillsPic}>
                        <Image src="/python.jpg" alt="Python" width={30} height={30}></Image>
                        <p className={styles.skillsName}>Python</p>
                      </div>
                      <div className="dot">
                        <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512" style={{marginTop: "9px", marginLeft: "30px"}}><path fill="#ffffff" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512" style={{marginTop: "9px", marginLeft: "5px"}}><path fill="#ffffff" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512" style={{marginTop: "9px", marginLeft: "5px"}}><path fill="#ffffff" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512" style={{marginTop: "9px", marginLeft: "5px"}}><path fill="#ffffff" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512" style={{marginTop: "9px", marginLeft: "5px"}}><path fill="#444" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                      </div>
                    </div>
                    <div className={styles.skillsItem}>
                      <div className={styles.skillsPic}>
                        <Image src="/sql.jpg" alt="SQL" width={55} height={30}></Image>
                        <p className={styles.skillsName}>SQL</p>
                      </div>
                      <div className="dot">
                        <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512" style={{marginTop: "9px", marginLeft: "30px"}}><path fill="#ffffff" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512" style={{marginTop: "9px", marginLeft: "5px"}}><path fill="#ffffff" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512" style={{marginTop: "9px", marginLeft: "5px"}}><path fill="#ffffff" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512" style={{marginTop: "9px", marginLeft: "5px"}}><path fill="#444" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512" style={{marginTop: "9px", marginLeft: "5px"}}><path fill="#444" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                      </div>
                    </div>
                    <div className={styles.skillsItem}>
                      <div className={styles.skillsPic}>
                        <Image src="/php.jpg" alt="PHP" width={55} height={30}></Image>
                        <p className={styles.skillsName}>PHP</p>
                      </div>
                      <div className="dot">
                        <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512" style={{marginTop: "9px", marginLeft: "30px"}}><path fill="#ffffff" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512" style={{marginTop: "9px", marginLeft: "5px"}}><path fill="#ffffff" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512" style={{marginTop: "9px", marginLeft: "5px"}}><path fill="#ffffff" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512" style={{marginTop: "9px", marginLeft: "5px"}}><path fill="#444" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512" style={{marginTop: "9px", marginLeft: "5px"}}><path fill="#444" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                      </div>
                    </div>
                    <div className={styles.skillsItem}>
                      <div className={styles.skillsPic}>
                        <Image src="/typescript.jpg" alt="Typescript" width={30} height={30}></Image>
                        <p className={styles.skillsName}>Typecript</p>
                      </div>
                      <div className="dot">
                        <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512" style={{marginTop: "9px", marginLeft: "30px"}}><path fill="#ffffff" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512" style={{marginTop: "9px", marginLeft: "5px"}}><path fill="#ffffff" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512" style={{marginTop: "9px", marginLeft: "5px"}}><path fill="#ffffff" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512" style={{marginTop: "9px", marginLeft: "5px"}}><path fill="#444" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512" style={{marginTop: "9px", marginLeft: "5px"}}><path fill="#444" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                      </div>
                    </div>
                  </div>

                  <div className={styles.dividerHorizontal}></div>

                  <div className={styles.groupTitle}>
                    <div className={styles.aboutMeIcon}>
                      <svg xmlns="http://www.w3.org/2000/svg" style={{marginLeft: "10px"}} height="16" width="16" viewBox="0 0 512 512"><path fill="#ffffff" d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/></svg>
                    </div>
                    <h3>Tools</h3>
                  </div>

                  <br></br>

                  <div className={styles.skills}>
                    <div className={styles.skillsItem}>
                      <div className={styles.skillsPic}>
                        <Image src="/eclipse.jpg" alt="Eclipse" width={30} height={30}></Image>
                        <p className={styles.skillsName}>Eclipse</p>
                      </div>
                      <div className="dot">
                        <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512" style={{marginTop: "9px", marginLeft: "30px"}}><path fill="#ffffff" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512" style={{marginTop: "9px", marginLeft: "5px"}}><path fill="#ffffff" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512" style={{marginTop: "9px", marginLeft: "5px"}}><path fill="#ffffff" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512" style={{marginTop: "9px", marginLeft: "5px"}}><path fill="#ffffff" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512" style={{marginTop: "9px", marginLeft: "5px"}}><path fill="#444" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                      </div>
                    </div>
                    <div className={styles.skillsItem}>
                      <div className={styles.skillsPic}>
                        <Image src="/vscode.jpg" alt="Visual Studio Code" width={30} height={30}></Image>
                        <p className={styles.skillsName}>VS Code</p>
                      </div>
                      <div className="dot">
                        <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512" style={{marginTop: "9px", marginLeft: "30px"}}><path fill="#ffffff" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512" style={{marginTop: "9px", marginLeft: "5px"}}><path fill="#ffffff" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512" style={{marginTop: "9px", marginLeft: "5px"}}><path fill="#ffffff" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512" style={{marginTop: "9px", marginLeft: "5px"}}><path fill="#ffffff" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512" style={{marginTop: "9px", marginLeft: "5px"}}><path fill="#444" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                      </div>
                    </div>
                    <div className={styles.skillsItem}>
                      <div className={styles.skillsPic}>
                        <Image src="/docker.jpg" alt="Docker" width={40} height={30}></Image>
                        <p className={styles.skillsName}>Docker</p>
                      </div>
                      <div className="dot">
                        <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512" style={{marginTop: "9px", marginLeft: "30px"}}><path fill="#ffffff" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512" style={{marginTop: "9px", marginLeft: "5px"}}><path fill="#ffffff" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512" style={{marginTop: "9px", marginLeft: "5px"}}><path fill="#ffffff" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512" style={{marginTop: "9px", marginLeft: "5px"}}><path fill="#444" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512" style={{marginTop: "9px", marginLeft: "5px"}}><path fill="#444" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                      </div>
                    </div>
                    <div className={styles.skillsItem}>
                      <div className={styles.skillsPic}>
                        <Image src="/git.jpg" alt="Git" width={60} height={30}></Image>
                        <p className={styles.skillsName}>Git</p>
                      </div>
                      <div className="dot">
                        <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512" style={{marginTop: "9px", marginLeft: "30px"}}><path fill="#ffffff" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512" style={{marginTop: "9px", marginLeft: "5px"}}><path fill="#ffffff" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512" style={{marginTop: "9px", marginLeft: "5px"}}><path fill="#ffffff" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512" style={{marginTop: "9px", marginLeft: "5px"}}><path fill="#444" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" height="13" width="13" viewBox="0 0 512 512" style={{marginTop: "9px", marginLeft: "5px"}}><path fill="#444" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
                      </div>
                    </div>
                    <br></br>
                  </div>
                </div>  
              </div>
          </div>
      </div>
    </body>
  )
}
