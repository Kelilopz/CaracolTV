import React from 'react';

export const Breadcrumbs = ({ items }) => {
  return (
    <nav className="text-sm text-gray-600">
      {items.map((item, index) => (
        <span key={index}>
          {index > 0 && ' > '}
          {item.href ? <a href={item.href} className="text-blue-500">{item.body}</a> : item.body}
        </span>
      ))}
    </nav>
  );
};