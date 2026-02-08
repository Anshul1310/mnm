import React, { useState } from 'react';
import styles from './Login.module.css';
import NfGoldLogo from './nf_logo.png';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleAuthLogin = () => {
    setIsLoading(true);
    // Redirect to backend (change port/path if needed)
    window.location.href = 'http://localhost:3000/settings';
  };

  return (
    <div className={styles.appContainer}>
      <div className={styles.loginScreen}>
        <div className={styles.content}>
          {/* Logo */}
          <div className={`${styles.logoContainer} ${styles.animateEntry} ${styles.delay1}`}>
            <img
              src={NfGoldLogo}
              alt="NF Logo"
              className={styles.nfLogo}
            />
          </div>

          {/* Headlines */}
          <div className={`${styles.headlines} ${styles.animateEntry} ${styles.delay2}`}>
            <h1 className={styles.headline1}>
              <span className={styles.goldenText}>Feel</span> the Beat
            </h1>
            <h1 className={styles.headline2}>
              Join the <span className={styles.goldenText}>Fest</span>.
            </h1>
          </div>

          {/* Button */}
          <button
            className={`${styles.authButton} ${styles.animateEntry} ${styles.delay3}`}
            onClick={handleAuthLogin}
            disabled={isLoading}
          >
            {isLoading ? 'Redirecting...' : 'LOG IN WITH DAUTH'}
          </button>
        </div>

        {/* Footer */}
        <footer className={`${styles.credits} ${styles.animateEntry} ${styles.delay4}`}>
          Developed by Team NF WebOps
        </footer>
      </div>
    </div>
  );
};

export default Login;