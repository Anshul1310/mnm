import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import QRCode from 'react-qr-code';
import classes from './Settings.module.css';

// Assets
import PhoneIcon from '../../../src/assets/notification.png';           
import HeadsetIcon from '../../../src/assets/helpdesk.png';     
import PurpleIcon from '../../../src/assets/purple_icon.png';     // Your custom left icon
import NFLogo from '../../../src/assets/nf_logo.png';

const Settings = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: 'Guest User',
    roll: '000000000',
    dept: 'NITT',
    role: 'Student',
  });

  const [notificationsEnabled, setNotificationsEnabled] = useState(() => {
    const saved = localStorage.getItem('notifications_enabled');
    return saved !== null ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    localStorage.setItem('notifications_enabled', JSON.stringify(notificationsEnabled));
  }, [notificationsEnabled]);

  useEffect(() => {
    const nameParam = searchParams.get('name');
    const rollParam = searchParams.get('roll');

    if (nameParam) {
      const newUser = {
        name: nameParam,
        roll: rollParam || 'Unknown',
        dept: 'NITT',
        role: 'Student',
      };
      localStorage.setItem('user_data', JSON.stringify(newUser));
      setUser(newUser);
      navigate('/settings', { replace: true });
    } else {
      const stored = localStorage.getItem('user_data');
      if (stored) setUser(JSON.parse(stored));
    }
  }, [searchParams, navigate]);

  const handleCardClick = () => setIsFlipped((prev) => !prev);

  const openSupportEmail = () => {
    window.location.href = 'mailto:developer@nittfest.in?subject=Nittfest%20Support%20Query';
  };

  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <h1>Settings</h1>
      </header>

      {/* ID Card - flippable */}
      <div className={classes.cardScene} onClick={handleCardClick}>
        <div className={`${classes.cardInner} ${isFlipped ? classes.isFlipped : ''}`}>
          {/* Front */}
          <div className={`${classes.card} ${classes.cardFront}`}>
            <div className={classes.goldSlash} style={{ right: '35%' }} />
            <div className={classes.goldSlash} style={{ right: '32%', opacity: 0.3 }} />

            <div className={classes.cardHeader}>
              {/* Custom left icon */}
              <img
                src={PurpleIcon}
                alt="Brand Icon"
                className={classes.brandIcon}
              />

              <div className={classes.userInfo}>
                <h2>{user.name}</h2>
                <p>{user.roll}</p>
              </div>

              {/* Custom NF logo */}
              
            </div>

            <div className={classes.cardFooter}>
              <span>{user.dept}</span>
              <span>{user.role}</span>
            </div>
          </div>

          {/* Back */}
          <div className={`${classes.card} ${classes.cardBack}`}>
            <div className={classes.diagonalLine} />
            <div className={classes.backLeft}>
                <img
                  src={NFLogo}
                  alt="NF Logo"
                  className={classes.backNFLogo}
                />
                <div className={classes.scanText}>SCAN ME</div>
              </div>
            <div className={classes.backRight}>
              <div className={classes.qrWrapper}>
                <QRCode
                  value={user.roll}
                  size={256}
                  style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
                  viewBox="0 0 256 256"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* System Section */}
      <div className={`${classes.sectionWrapper} ${classes.delay2}`}>
        <h3 className={classes.sectionTitle}>SYSTEM</h3>
        <div className={classes.sectionContent}>
          <div className={classes.settingsItem}>
            <div className={classes.itemLeft}>
              <img src={PhoneIcon} alt="" className={classes.itemIcon} />
              <span>Notification Settings</span>
            </div>
            <label className={classes.toggle}>
              <input
                type="checkbox"
                checked={notificationsEnabled}
                onChange={(e) => setNotificationsEnabled(e.target.checked)}
              />
              <span className={classes.slider} />
            </label>
          </div>
        </div>
      </div>

      {/* Support Card */}
      <div className={`${classes.sectionWrapper} ${classes.delay3}`}>
        <div className={classes.supportCard}>
          <img src={HeadsetIcon} alt="Support" className={classes.supportIcon} />
          <h3 className={classes.supportTitle}>We're here to help</h3>
          <p className={classes.supportText}>
            Get in touch with us for any queries or assistance regarding Nittfest.
          </p>
          <button className={classes.emailButton} onClick={openSupportEmail}>
            Email Support
          </button>
        </div>
      </div>

      <footer className={`${classes.footer} ${classes.delay4}`}>
        <p>Developed By Team NF WebOps</p>
      </footer>
    </div>
  );
};

export default Settings;