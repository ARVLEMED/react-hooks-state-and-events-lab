import React,{useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
const [isToggle,setIsToggle]= useState(false);
 function HandleChange() {
  setIsToggle((prevState)=>!prevState);
 }
 const appClass = isToggle? "App dark" : "App light";
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={HandleChange}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
