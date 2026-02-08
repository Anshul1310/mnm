import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css'; 
import ForwardLogo from "./../../assets/forward.png"; 

const Home = () => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/event'); 
  };

  return (
    <div className={styles.container}>
      {/* Header Section */}
      <div className={styles.header}>
        <span className={styles.time}>9:41</span>
        <div className={styles.statusBar}>
          <i className="fas fa-signal"></i>
          <i className="fas fa-wifi"></i>
          <i className="fas fa-battery-full"></i>
        </div>
      </div>

      {/* NEW: Welcome Row with Avatar */}
      <div className={styles.welcomeRow}>
        <div className={styles.avatar}>A</div>
        <h1 className={styles.title}>Welcome</h1>
      </div>

      {/* Animated & Clickable Event Card */}
      <div 
        className={styles.eventCard} 
        onClick={handleCardClick}
        role="button"
        tabIndex={0}
      >
        <div className={styles.imageContainer}>
          <img
            src="https://res.cloudinary.com/dbxtgjwyv/image/upload/v1770543895/Frame_37_1_g0t6th.png"
            alt="MidNight Madness"
            className={styles.eventImage}
          />
        </div>
        
        <div className={styles.eventDetails}>
          <div className={styles.textGroup}>
            <h2 className={styles.eventName}>MidNight Madness</h2>
            <p className={styles.eventDate}>13 Feb, 2026</p>
          </div>
          
          <div className={styles.slotsContainer}>
            <div className={styles.slotsPill}>18:49, BARN HALL</div>
            <img src={ForwardLogo} className={styles.arrowIcon} alt="Arrow" />
          </div>
        </div>
        
        <div className={styles.shine}></div>
      </div>
    </div>
  );
};

export default Home;