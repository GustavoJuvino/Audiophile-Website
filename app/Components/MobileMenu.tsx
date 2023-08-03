import React from 'react';
import MobileCategories from "./Header/MobileCategories";

interface MobileMenuProps { active: boolean };

const MobileMenu: React.FC<MobileMenuProps> = ({ active }) => {

  if (active) {
    return (
      <div className={active ? `
            w-full
            sm:h-[340px]
            h-[683px]
            mt-[5.5rem]
            bg-white
            rounded-b-lg
            absolute
            left-0
            z-[100]
            duration-500
          ` : ""}
      >
        <MobileCategories />
      </div>
    )
  }
}

export default MobileMenu;