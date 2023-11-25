import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import React, { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';

import { db } from '../PasswordLoginWithFirebase/Firestore'; // Import your Firebase configuration

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const colRef = collection(db, 'food');

    onSnapshot(colRef, (snapshot) => {
      const mealsData = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setMeals(mealsData);
    });
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.title}
      price={parseFloat(meal.price)} // Ensure that price is parsed as a float
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
