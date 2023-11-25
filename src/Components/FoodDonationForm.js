import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { initializeApp, getApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import './don.css';
// Import your Firestore instance
import { db } from './PasswordLoginWithFirebase/Firestore';

const FoodDonationForm = () => {
  const form = useRef();
  const [foodItems, setFoodItems] = useState([{ name: '', quantity: '', expiryDate: '', type: '', dietaryInfo: '' }]);
  const [userDetails, setUserDetails] = useState({
    userName: '',
    userEmail: '',
    contactInfo: '',
  });

  useEffect(() => {
    // Check if Firebase app has already been initialized
    if (!getApp()) {
      // Initialize Firebase if it's not initialized already
      const firebaseConfig = {
        // Your Firebase configuration here
      };

      initializeApp(firebaseConfig);
    }
  }, []);

  const handleFoodItemChange = (index, field, value) => {
    const newFoodItems = [...foodItems];
    newFoodItems[index][field] = value;
    setFoodItems(newFoodItems);
  };

  const handleUserDetailsChange = (field, value) => {
    setUserDetails((prevUserDetails) => ({
      ...prevUserDetails,
      [field]: value,
    }));
  };

  const addFoodItem = () => {
    setFoodItems([...foodItems, { name: '', quantity: '', expiryDate: '', type: '', dietaryInfo: '' }]);
  };

  const removeFoodItem = (index) => {
    const newFoodItems = [...foodItems];
    newFoodItems.splice(index, 1);
    setFoodItems(newFoodItems);
  };

  const sendEmail = async (toEmails) => {
    try {
      const templateParams = {
        to_email: toEmails.join(','), // Join multiple emails with a comma
        user_name: userDetails.userName,
        user_email: userDetails.userEmail,
        contact_info: userDetails.contactInfo,
        foodItems: foodItems,
      };

      const result = await emailjs.send(
        'service_bukbh8d',
        'template_xqt0kus',
        templateParams,
        'BO4td_1C5uSzgjVef'
      );

      console.log(result.text);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  const storeDonationDetails = async () => {
    try {
      const donationData = {
        userName: userDetails.userName,
        userEmail: userDetails.userEmail,
        contactInfo: userDetails.contactInfo,
        foodItems: foodItems,
      };

      const donationsCollection = collection(db, 'donations');
      await addDoc(donationsCollection, donationData);

      console.log('Donation details stored successfully.');
    } catch (error) {
      console.error('Error storing donation details:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get recipient emails from Firestore
    const recipientsCollection = collection(db, 'emails');
    const querySnapshot = await getDocs(recipientsCollection);

    const recipientEmails = [];
    querySnapshot.forEach((doc) => {
      recipientEmails.push(doc.data().email);
    });

    // Send email to multiple recipients
    sendEmail(recipientEmails);

    // Store donation details in Firestore
    storeDonationDetails();
    alert('Submitted successfully!');

  };

  
  return (
    <form ref={form} onSubmit={handleSubmit} className="donation-form">
      <label className="form-label">User Name</label>
      <input
        type="text"
        name="user_name"
        value={userDetails.userName}
        onChange={(e) => handleUserDetailsChange('userName', e.target.value)}
        className="form-input"
      />

      <label className="form-label">Email</label>
      <input
        type="email"
        name="user_email"
        value={userDetails.userEmail}
        onChange={(e) => handleUserDetailsChange('userEmail', e.target.value)}
        className="form-input"
      />

      <label className="form-label">Contact Info</label>
      <input
        type="text"
        name="contact_info"
        value={userDetails.contactInfo}
        onChange={(e) => handleUserDetailsChange('contactInfo', e.target.value)}
        className="form-input"
      />

      <label className="form-label">Food Items</label>
      {foodItems.map((foodItem, index) => (
        <div key={index} className="food-item-container">
          <label className="form-label">Food Item Name</label>
          <input
            type="text"
            name={`food_name_${index}`}
            value={foodItem.name}
            onChange={(e) => handleFoodItemChange(index, 'name', e.target.value)}
            className="form-input"
          />

          <label className="form-label">Quantity</label>
          <input
            type="text"
            name={`food_quantity_${index}`}
            value={foodItem.quantity}
            onChange={(e) => handleFoodItemChange(index, 'quantity', e.target.value)}
            className="form-input"
          />

          {index > 0 && (
            <button type="button" onClick={() => removeFoodItem(index)} className="remove-button">
              Remove Food Item
            </button>
          )}
        </div>
      ))}

      <button type="button" onClick={addFoodItem} className="add-button">
        Add Food Item
      </button>

      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
};

export default FoodDonationForm;


