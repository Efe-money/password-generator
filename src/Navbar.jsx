import React from 'react';

const Navbar = () => {
  const navStyle = {
    backgroundColor: '#333', // Background color
    padding: '10px', // Add padding to the navbar
  };

  const ulStyle = {
    display: 'flex', // Display the list items horizontally
    listStyle: 'none',
    padding: 0, // Remove default padding
  };

  const liStyle = {
    margin: '0 10px', // Add margin between list items
    color: '#fff', // Text color
  };

  return (
    <div>
      <nav style={navStyle}>
        <ul style={ulStyle}>
          <li style={liStyle}>Home</li>
          <li style={liStyle}>About</li>
          <li style={liStyle}>Services</li>
          <li style={liStyle}>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
