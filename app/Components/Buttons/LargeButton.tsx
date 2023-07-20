import React from 'react'

const LargeButton: React.FC<ButtonProps> = ({
    value,
    click
}) => {
  return (
    <button 
        onClick={click}
        className="
            w-full
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

export default LargeButton