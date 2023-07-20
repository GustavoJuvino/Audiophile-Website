import React from 'react';

const DefaultButton: React.FC<ButtonProps> = ({
    value,
    click
}) => {
  return (
    <button 
        onClick={click}
        className="
            w-40
            h-12
            text-subTitle
            uppercase
            duration-300
            bg-raw-sienna
            text-white
            hover:bg-light-raw-sienna
        "
    >
        {value}
    </button>
  )
}

export default DefaultButton;