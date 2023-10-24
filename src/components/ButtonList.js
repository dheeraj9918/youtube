import React from "react";
import Button from "./Button";


const ButtonList = () => {
  const Items = ["Music", "Hindi Music", "Mixes", "Gadgets", "T-Series", "live", "Arjit Singh", "Sports", "Games", "Computer Programing", "React Native", "Android", "India and Australia", "Music", "Hindi Music", "Mixes", "Gadgets",]
  return (
    <div className="truncate">
      <div >
        {Items.map((Item, index) => (<Button key={index} name={Item} />))}
      </div>
    </div>
  )
}

export default ButtonList;