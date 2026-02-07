import React, { useState } from 'react';
import styles from './Login.module.css'; 
import NfGoldLogo from './nf-gold-logo.png';


const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleAuthLogin = () => {
    setIsLoading(true);
    // Redirect to backend
    window.location.href = 'http://localhost:3000/settings'; 
  };

  return (
    <div className={styles.appContainer}>
      <div className={styles.backgroundLayer} />

      <div className={styles.loginScreen}>
        <div className={styles.content}>
          
          {/* Logo Section - Enters First */}
          <div className={`${styles.logoContainer} ${styles.animateEntry} ${styles.delay1}`}>
            <img 
              src={NfGoldLogo} 
              alt="NF Logo" 
              className={styles.nfLogo} 
            />
          </div>

          {/* Headlines - Enters Second */}
          <div className={`${styles.headlines} ${styles.animateEntry} ${styles.delay2}`}>
            <h1 className={styles.headline1}>
              Feel the Beat
            </h1>
            <h1 className={styles.headline2}>
              Join the Fest.
            </h1>
          </div>

          {/* Login Button - Enters Third */}
          <button
            className={`${styles.authButton} ${styles.animateEntry} ${styles.delay3}`}
            onClick={handleAuthLogin}
            disabled={isLoading}
          >
            {isLoading ? 'Redirecting...' : 'LOG IN WITH DAUTH'}
          </button>
        </div>

        {/* Footer - Enters Last */}
        <footer className={`${styles.credits} ${styles.animateEntry} ${styles.delay4}`}>
          Developed by Team NF WebOps
        </footer>
      </div>
    </div>
  );
};

export default Login;