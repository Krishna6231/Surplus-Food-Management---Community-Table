import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from './PasswordLoginWithFirebase/Firestore'; // Adjust the path accordingly
import styles from './NewsletterSignup.module.css';
const NewsletterSignup = () => {
    const [email, setEmail] = useState('');
    const handleSubscribe = async () => {
        try {
            if(!email){
                alert('please enter a valid email address');
                return;
            }
            const emailsCollection = collection(db, 'emails');
            await addDoc(emailsCollection, {
                email:email,
                timestamp: new Date(),
            });
            alert('Succesfully Subscribed!');
            setEmail('');

        } catch(error){
            console.error('Subscription Failed:',error);
            alert('Subscription failed. Please try again later.');
        }
    };
    return (
        <div className={styles.newsletterContainer}>
      <h2 className={styles.newsletterHeading}>Subscribe to Our Newsletter</h2>
      <p className={styles.newsletterDescription}>
        Stay informed about our latest updates! NGOs and charitable organizations can
        subscribe to receive notifications about available food items on our website.
      </p>
      <label className={styles.emailLabel}>
        Email:
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.emailInput}
        />
      </label>
      <button onClick={handleSubscribe} className={styles.subscribeButton}>
        Subscribe
      </button>
    </div>
  );
};

export default NewsletterSignup;