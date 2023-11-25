// FoodComponent.js
import React, { useState, useEffect } from 'react';
import { getDocs, collection, addDoc, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import { db } from './Firestore'; // Adjust the path accordingly
import './foodcomp.css'; // Import the CSS file

const FoodComponent = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetchData();

    const colRef = collection(db, 'food');
    const unsubscribe = onSnapshot(colRef, (snapshot) => {
      const foodsData = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setFoods(foodsData);
    });

    return () => unsubscribe();
  }, []);

  const fetchData = () => {
    const colRef = collection(db, 'food');
    getDocs(colRef)
      .then(snapshot => {
        const foodsData = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        setFoods(foodsData);
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  const handleAddFood = (e) => {
    e.preventDefault();

    const colRef = collection(db, 'food');

    addDoc(colRef, {
      title: e.target.title.value,
      price: e.target.price.value,
      quantity: e.target.quantity.value, // Add this line for quantity
    })
      .then(() => {
        e.target.reset();
        fetchData();
      });
  };

  const handleDeleteFood = (e) => {
    e.preventDefault();

    const docRef = doc(db, 'food', e.target.id.value);

    deleteDoc(docRef)
      .then(() => {
        e.target.reset();
        fetchData();
      });
  };

  return (
    <div className="food-container">
      <h1 className="food-heading">Food Menu</h1>
      <ul className="food-list">
        {foods.map(food => (
          <li key={food.id} className="food-item">
            {food.title} - ${food.price} - Quantity: {food.quantity}
            <form onSubmit={handleDeleteFood} className="delete-form">
              <input type="hidden" name="id" value={food.id} />
              <button type="submit" className="delete-button">Delete</button>
            </form>
          </li>
        ))}
      </ul>

      <form onSubmit={handleAddFood} className="add-form">
        <label className="form-label">Title: <input type="text" name="title" className="form-input" /></label>
        <label className="form-label">Price: <input type="text" name="price" className="form-input" /></label>
        <label className="form-label">Quantity: <input type="number" name="quantity" className="form-input" /></label>
        <button type="submit" className="add-button">Add Food</button>
      </form>
    </div>
  );
};

export default FoodComponent;
