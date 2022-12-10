import { useContext } from 'react'
import { ContextGlobal } from './utils/global.context';
import styles from "./stylesheets/Footer.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";


const Footer = () => {
  const { theme } = useContext(ContextGlobal)
  const isDarkMode = theme === "dark" || false
  const scrollToTop = () => { window.scrollTo(0, 0) }

  const social = [
    { id: 1, href: "https://es-la.facebook.com/", icon: <FacebookIcon/> },
    { id: 2, href: "https://www.instagram.com/", icon: <InstagramIcon/> },
    { id: 3, href: "https://web.whatsapp.com/", icon: <WhatsAppIcon/> },
  ];

  
  return (
    <footer>
      <div className={styles.footerWrapper}>
        <button className={styles.top} onClick={scrollToTop}>Volver al inicio</button>
        <div className={`${isDarkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"} ${styles.footer}`}>
          <div className="container">
            <div className='row'>
              <div className="col-sm-12 col-lg-6">
                <a target="_blank" href={"https://www.digitalhouse.com/ar"} rel="noreferrer">
                  <img className={`${isDarkMode ? styles.iconsDark : ''} ${styles.dhLogo}`} src="/images/DH.png" alt="DH-logo" />
                </a>
              </div>
              <div className={`col-sm-12 col-lg-6 ${isDarkMode ? styles.iconsDark : ''} ${styles.icons}`}>
                {social.map(social => (
                  <a key={social.id} target="_blank" href={social.href} rel="noreferrer">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer >
  )
}

export default Footer