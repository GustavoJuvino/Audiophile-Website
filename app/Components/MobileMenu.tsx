import React from 'react';

interface MobileMenuProps { active: boolean };

const MobileMenu:React.FC<MobileMenuProps> = ({active}) => {
  return (
    <section className="md:hidden">
      <div className={active ? `
          w-full
          h-[340px]
          mt-[5.5rem]
          bg-white
          absolute
          left-0
          z-[100]
          duration-500
        ` : ""}
      >
      </div>

      {/* Background */}
      {/* <div
        className={active ? `
          absolute
          top-[5.5rem]
          left-0
          w-full
          h-auto
          bg-black
          opacity-50
          z-[90]
        ` : ""}
      /> */}
    </section>
  )
}

export default MobileMenu;