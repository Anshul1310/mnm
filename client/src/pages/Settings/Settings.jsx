import React from 'react';
import { 
  ChevronRight, 
  RotateCcw, 
  Lock, 
  Phone, 
  Bell, 
  Headphones, 
  HelpCircle 
} from 'lucide-react';
import './Settings.module.css'; // Optional: for component specific styles if needed
import LockIcon from "./../../../src/assets/lock-1.png"
import RotationLock from "./../../../src/assets/rotation-lock.png"
import FAQIcon from "./../../../src/assets/faq.png"
import NotificationIcon from "./../../../src/assets/notification.png"

import Helpdesk from "./../../../src/assets/helpdesk.png"

import PhoneIcon from "./../../../src/assets/phone.png"


const Settings = () => {
  return (
    <div style={{ padding: 'var(--spacing-lg)' }}>
      {/* Header */}
      <header style={{ marginBottom: 'var(--spacing-lg)', marginTop: 'var(--spacing-md)' }}>
        <h1 style={{ color: 'var(--color-accent)', fontSize: '1.8rem', fontWeight: '600' }}>
          Settings
        </h1>
      </header>

      {/* User ID Card */}
      <div style={styles.idCard}>
        {/* Decorative Gold Lines (Simulated) */}
        <div style={styles.goldSlash1}></div>
        <div style={styles.goldSlash2}></div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', zIndex: 2 }}>
          {/* Badge Icon Placeholder */}
          <div style={styles.badgeContainer}>
             {/* Replace with actual image/svg */}
            <span style={{fontSize: '2rem'}}>⚜️</span>
          </div>

          <div>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Ranjana R</h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>101124045</p>
          </div>
          
          {/* Right Side Logo Placeholder */}
          <div style={{ marginLeft: 'auto' }}>
            <h2 style={{color: 'var(--color-accent)', fontWeight: '900', fontSize: '2rem', lineHeight: '1'}}>NF</h2>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem', zIndex: 2, fontSize: '0.7rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
          <span style={{ color: 'var(--color-text-secondary)' }}>Architecture</span>
          <span style={{ color: '#fff' }}>Webops</span>
        </div>
      </div>

      {/* Profile Section */}
      <Section title="Profile">
        <SettingsItem 
          imgSrc={RotationLock} 
          label="Reset Your Password" 
        />
       <SettingsItem 
          imgSrc={LockIcon} 
          label="Reset Your PIN" 
        />
       <SettingsItem 
          imgSrc={PhoneIcon} 
          label="Change you Mobile Number" 
        />
      </Section>

      {/* System Section */}
      <Section title="System">
        <SettingsItem 
          imgSrc={Helpdesk} 
          label="Notification Settings" 
        />
         <SettingsItem 
          imgSrc={Helpdesk} 
          label="Help and Support" 
        />
         <SettingsItem 
          imgSrc={FAQIcon} 
          label="FAQ" 
        />
      </Section>

      {/* Footer */}
      <footer style={{ textAlign: 'center', marginTop: '3rem', marginBottom: '2rem' }}>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.8rem' }}>
          Developed By Team NF WebOps
        </p>
      </footer>
    </div>
  );
};

// --- Reusable Components for clean code ---

const Section = ({ title, children }) => (
  <div style={{ marginBottom: '2rem' }}>
    <h3 style={{ 
      color: 'var(--color-text-secondary)', 
      fontSize: '1rem', 
      marginBottom: '1rem',
      fontWeight: 'normal' 
    }}>
      {title}
    </h3>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {children}
    </div>
  </div>
);

const SettingsItem = ({ imgSrc, label }) => (
  <div style={styles.itemContainer}>
    <div style={styles.iconCircle}>
      {/* Render the image instead of the Icon component */}
      <img 
        src={imgSrc} 
        alt={label} 
        style={{ width: '24px', height: '24px', objectFit: 'contain' }} 
      />
    </div>
    <span style={{ flex: 1, fontSize: '1rem', color: '#fff', fontWeight: '500' }}>{label}</span>
    <ChevronRight color="var(--color-accent)" size={20} />
  </div>
);

// --- Inline Styles for Specific Complex Elements ---
const styles = {
  idCard: {
    position: 'relative',
    background: 'linear-gradient(135deg, #2c2c2e 0%, #1c1c1e 100%)',
    borderRadius: '16px',
    padding: '1.5rem',
    marginBottom: '2rem',
    overflow: 'hidden',
    boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
    border: '1px solid #333'
  },
  goldSlash1: {
    position: 'absolute',
    height: '150%',
    width: '2px',
    background: 'var(--color-accent)',
    top: '-20%',
    right: '35%',
    transform: 'rotate(25deg)',
    opacity: 0.5
  },
  goldSlash2: {
    position: 'absolute',
    height: '150%',
    width: '2px',
    background: 'var(--color-accent)',
    top: '-20%',
    right: '32%',
    transform: 'rotate(25deg)',
    opacity: 0.3
  },
  badgeContainer: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    // background: 'var(--color-accent)', // Fallback if image fails
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    cursor: 'pointer',
    padding: '0.5rem 0'
  },
  iconCircle: {
    width: '45px',
    height: '45px',
    borderRadius: '50%',
    backgroundColor: 'var(--color-bg-secondary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #333'
  }
};

export default Settings;