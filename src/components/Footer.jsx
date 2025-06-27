import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center mt-20">
      <p className="text-sm">&copy; {new Date().getFullYear()} Mithil Arasu | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;