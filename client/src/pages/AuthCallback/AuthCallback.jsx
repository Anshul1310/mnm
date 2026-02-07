import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Loader2 } from 'lucide-react'; // Using Lucide icon for spinner
import classes from './AuthCallback.module.css';

const AuthCallback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    // 1. Capture the data from URL
    const name = searchParams.get('name');
    const roll = searchParams.get('roll');
    const email = searchParams.get('email');

    if (name && roll) {
      // 2. Prepare user object
      const userData = {
        name: name,
        roll: roll,
        email: email,
        dept: 'Architecture', // You can fetch/map this later if needed
        role: 'Webops'
      };

      // 3. Save to Local Storage
      localStorage.setItem('user_data', JSON.stringify(userData));

      // 4. Redirect to Settings after a short delay (for effect)
      setTimeout(() => {
        navigate('/settings', { replace: true });
      }, 1500); // 1.5 second delay to show the "Verifying" animation
    } else {
      // Handle failure
      navigate('/login?error=verification_failed');
    }
  }, [searchParams, navigate]);

  return (
    <div className={classes.callbackContainer}>
      <Loader2 size={64} className={classes.loader} />
      <div className={classes.text}>Verifying Identity...</div>
      <div className={classes.subText}>Securely connecting to Delta Force</div>
    </div>
  );
};

export default AuthCallback;