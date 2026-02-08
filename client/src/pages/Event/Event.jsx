import React, { useState } from 'react';
import styles from './Event.module.css';
import BackIcon from "./../../assets/back.png"; // Ensure this path is correct

const EventPage = () => {
  const [activeTab, setActiveTab] = useState('about');

  const teamMembers = [
    { name: "Sanjay Kumar", id: "103523096", dept: "CIVIL" },
    { name: "Sanjay Kumar", id: "103123096", dept: "CIVIL" },
    { name: "Sanjay Kumar", id: "103123096", dept: "CIVIL" },
    { name: "Sanjay Kumar", id: "103123096", dept: "CIVIL" },
  ];

  const rules = [
    "Participants must report 15 minutes before the event starts.",
    "ID cards are mandatory for entry.",
    "Any form of malpractice will lead to immediate disqualification.",
    "Decisions made by the judges will be final and binding."
  ];

  return (
    <div className={styles.container}>
      {/* Status Bar */}
      <div className={styles.statusBar}>
        <span>9:41</span>
        <div className={styles.statusIcons}>
           <i className="fas fa-signal"></i>
           <i className="fas fa-wifi"></i>
           <i className="fas fa-battery-full"></i>
        </div>
      </div>

      {/* Header */}
      <div className={styles.header}>
        <div className={styles.backIcon}>
            <img src={BackIcon} alt="Back" />
        </div>
        <div className={styles.pageTitle}>Midnight Madness</div>
      </div>

      {/* Hero Image with Scale Animation */}
      <div className={styles.heroImageContainer}>
        <img 
          src="https://res.cloudinary.com/dbxtgjwyv/image/upload/v1770543895/Frame_37_1_g0t6th.png" 
          alt="Game Night" 
          className={`${styles.heroImage} ${styles.scaleIn}`} 
        />
      </div>

      {/* Toggle Switch */}
      <div className={styles.toggleContainer}>
        {/* The Glider Background for smooth switching effect */}
        <div 
            className={styles.toggleGlider} 
            style={{ transform: activeTab === 'about' ? 'translateX(0%)' : 'translateX(100%)' }}
        />
        
        <div 
          className={`${styles.toggleBtn} ${activeTab === 'about' ? styles.activeText : ''}`}
          onClick={() => setActiveTab('about')}
        >
          About
        </div>
        <div 
          className={`${styles.toggleBtn} ${activeTab === 'rules' ? styles.activeText : ''}`}
          onClick={() => setActiveTab('rules')}
        >
          Rules
        </div>
      </div>

      {/* Dynamic Content Area with Key for Re-triggering Animation */}
      <div className={styles.contentFade} key={activeTab}>
        
        {activeTab === 'about' && (
          <>
          <div className={styles.datetime}>{"14 Feb, 18 A.M at BARN"}</div>
            {/* Team Card */}
            <div className={`${styles.teamCard} ${styles.slideUp}`}>
              <div className={styles.teamName}>TEAM YOLO</div>
              <div className={styles.teamIdPill}>MNM8057</div>
            </div>

            {/* Team Members List with Staggered Animation */}
            <h3 className={`${styles.sectionHeader} ${styles.fadeIn}`}>Team Members</h3>
            <div className={styles.memberList}>
              {teamMembers.map((member, index) => (
                <div 
                    key={index} 
                    className={`${styles.memberCard} ${styles.staggerItem}`}
                    style={{ animationDelay: `${index * 0.1}s` }} // 0.1s delay per item
                >
                  <div className={styles.memberInfo}>
                    <span className={styles.memberName}>{member.name}</span>
                    <span className={styles.memberId}>{member.id}</span>
                  </div>
                  <div className={styles.deptBadge}>{member.dept}</div>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === 'rules' && (
          <>
            <h3 className={`${styles.sectionHeader} ${styles.fadeIn}`}>Event Guidelines</h3>
            <div className={styles.rulesContainer}>
              {rules.map((rule, index) => (
                <div 
                    key={index} 
                    className={`${styles.ruleItem} ${styles.staggerItem}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className={styles.ruleNumber}>{index + 1}.</span>
                  <span className={styles.ruleText}>{rule}</span>
                </div>
              ))}
            </div>
          </>
        )}

      </div>
    </div>
  );
};

export default EventPage;