import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext, useState } from "react";
import CartContext from "../../../Store/cart-context";
import { updateDoc, doc } from 'firebase/firestore';
import { db } from '../../PasswordLoginWithFirebase/Firestore';

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const [quantityAvailable, setQuantityAvailable] = useState(props.quantityAvailable);

  const priceInRupees = typeof props.price === 'number'
    ? `₹${props.price.toFixed(2)}`
    : 'N/A';

  const addToCartHandler = (amount) => {
    if (quantityAvailable - amount < 0) {
      // Quantity not available
      // Display an "Out of Stock" message or handle it as needed
      alert("Out of Stock");
      return;
    }

    // Update quantityAvailable in the database
    const foodDocRef = doc(db, 'food', props.id);
    updateDoc(foodDocRef, { quantityAvailable: quantityAvailable - amount });

    // Update quantityAvailable in the state
    setQuantityAvailable((prevQuantity) => prevQuantity - amount);

    // Add to cart
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.price}>{priceInRupees}</div>
        <div className={classes.quantityAvailable}>Quantity Available: {quantityAvailable}</div>
      </div>

      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
