import React from 'react';

export const HeroSection = ({ headline, subHeadline, image }) => {
  return (
    <section className="text-center p-6">
      <img src={image.src} alt={image.alt} className="w-full h-auto rounded-lg" />
      <h1 className="text-2xl font-bold mt-4">{headline}</h1>
      <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: subHeadline }}></p>
    </section>
  );
};