import React from 'react';

export const Header = ({ logo }) => {
  return (
    <header className="flex justify-between p-4 bg-blue-600 text-white">
      <img src={logo.image.src} alt={logo.alt} width={logo.image.width} height={logo.image.height} />
    </header>
  );
};
