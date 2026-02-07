import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom'; // Import hooks
import QRCode from "react-qr-code";
import { ChevronRight } from 'lucide-react';
import classes from './Settings.module.css'; 

// Assets (Keep your existing imports)
import LockIcon from "./../../../src/assets/lock-1.png"
import RotationLock from "./../../../src/assets/rotation-lock.png"
import FAQIcon from "./../../../src/assets/faq.png"
import Helpdesk from "./../../../src/assets/helpdesk.png"
import PhoneIcon from "./../../../src/assets/phone.png"

const Settings = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Default User State
  const [user, setUser] = useState({
    name: 'Guest User',
    roll: '000000000',
    dept: 'NITT',
    role: 'Student'
  });

  useEffect(() => {
    // 1. Check if data came from Backend via URL
    const nameParam = searchParams.get('name');
    const rollParam = searchParams.get('roll');

    if (nameParam) {
      const newUser = {
        name: nameParam,
        roll: rollParam || 'Unknown',
        dept: 'Architecture', // You might need to fetch this or infer it
        role: 'Webops'
      };
      
      // Save to LocalStorage for persistence
      localStorage.setItem('user_data', JSON.stringify(newUser));
      setUser(newUser);

      // Clean the URL
      navigate('/settings', { replace: true });
    } else {
      // 2. Load from LocalStorage if available
      const storedUser = localStorage.getItem('user_data');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
  }, [searchParams, navigate]);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div style={{ padding: 'var(--spacing-lg)', maxWidth: '600px', margin: '0 auto' }}>
      <header className={classes['animate-entry']} style={{ marginBottom: 'var(--spacing-lg)', marginTop: 'var(--spacing-md)' }}>
        <h1 style={{ color: 'var(--color-accent)', fontSize: '1.8rem', fontWeight: '600' }}>
          Settings
        </h1>
      </header>

      {/* 3D Flip Card Scene */}
      <div className={classes['card-scene']} onClick={handleCardClick}>
        <div className={`${classes['card-inner']} ${isFlipped ? classes['is-flipped'] : ''}`}>
          
          {/* --- FRONT FACE --- */}
          <div className={`${classes['card-face']} ${classes['card-face-front']}`}>
            <div className={classes['gold-slash']} style={{ right: '35%' }}></div>
            <div className={classes['gold-slash']} style={{ right: '32%', opacity: 0.3 }}></div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', zIndex: 2 }}>
              <div style={styles.badgeContainer}>
                <span style={{fontSize: '2rem'}}>⚜️</span>
              </div>

              <div>
                {/* Dynamic Name and Roll Number */}
                <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#fff', margin: 0 }}>
                  {user.name}
                </h2>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', margin: 0 }}>
                  {user.roll}
                </p>
              </div>
              
              <div style={{ marginLeft: 'auto' }}>
                <h2 style={{color: 'var(--color-accent)', fontWeight: '900', fontSize: '2rem', lineHeight: '1', margin: 0}}>NF</h2>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 'auto', zIndex: 2, fontSize: '0.7rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
              <span style={{ color: 'var(--color-text-secondary)' }}>{user.dept}</span>
              <span style={{ color: '#fff' }}>{user.role}</span>
            </div>
          </div>

          {/* --- BACK FACE --- */}
          <div className={`${classes['card-face']} ${classes['card-face-back']}`}>
            <div className={classes['diagonal-line']}></div>
            
            <div className={classes['back-left']}>
               <div className={classes['back-logo-text']}>NF</div>
               <div className={classes['back-subtitle']}>SCAN ME</div>
            </div>

            <div className={classes['back-right']}>
              <div style={{ 
                background: '#fff', 
                padding: '8px', 
                borderRadius: '12px',
                width: '110px',
                height: '110px',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center'
              }}>
                <QRCode
                    size={256}
                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                    value={user.roll} // QR Code now stores the Roll Number
                    viewBox={`0 0 256 256`}
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ... (Rest of your Sections and Footer remain unchanged) ... */}
      
      {/* Profile Section */}
      <div className={`${classes['animate-entry']} ${classes['delay-1']}`}>
        <Section title="Profile">
          <SettingsItem imgSrc={RotationLock} label="Reset Your Password" />
          <SettingsItem imgSrc={LockIcon} label="Reset Your PIN" />
          <SettingsItem imgSrc={PhoneIcon} label="Change your Mobile Number" />
        </Section>
      </div>

       {/* System Section */}
       <div className={`${classes['animate-entry']} ${classes['delay-2']}`}>
        <Section title="System">
          <SettingsItem imgSrc={Helpdesk} label="Notification Settings" />
          <SettingsItem imgSrc={Helpdesk} label="Help and Support" />
          <SettingsItem imgSrc={FAQIcon} label="FAQ" />
        </Section>
      </div>
       
       <footer className={`${classes['animate-entry']} ${classes['delay-3']}`} style={{ textAlign: 'center', marginTop: '3rem', marginBottom: '2rem' }}>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.8rem' }}>
          Developed By Team NF WebOps
        </p>
      </footer>
    </div>
  );
};

// ... (Reusable Components and Styles remain the same) ...
const Section = ({ title, children }) => (
  <div style={{ marginBottom: '2rem' }}>
    <h3 style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: '0.8rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px', paddingLeft: '0.5rem' }}>
      {title}
    </h3>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      {children}
    </div>
  </div>
);

const SettingsItem = ({ imgSrc, label }) => (
  <div className={classes['settings-item']} style={styles.itemContainer}>
    <div style={styles.iconCircle}>
      <img src={imgSrc} alt={label} style={{ width: '22px', height: '22px', objectFit: 'contain' }} />
    </div>
    <span style={{ flex: 1, fontSize: '0.95rem', color: '#e5e7eb', fontWeight: '500' }}>{label}</span>
    <ChevronRight color="var(--color-accent)" size={18} style={{ opacity: 0.8 }} />
  </div>
);

const styles = {
  badgeContainer: { width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  itemContainer: { display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer' },
  iconCircle: { width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255, 255, 255, 0.1)' }
};

export default Settings;