import React from 'react'

const ProductButton: React.FC<ButtonProps> = ({
    type,
    value,
    click,
}) => {
  return (
    <button
        onClick={click}
        className={`
            w-40
            h-12
            text-subTitle
            uppercase
            duration-300
            ${type === 2 ? 
                "text-white bg-black hover:bg-[#4C4C4C]"
                : "border-[1px] border-black text-black hover:bg-black hover:text-white"
            }
        `}
    >
        {value}
    </button>
  )
}

export default ProductButton