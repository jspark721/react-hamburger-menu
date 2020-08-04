import React from 'react';
import { Link } from 'react-router-dom';

const Hamburger = () => {
  return (
    <div className='hamburger-menu'>
      <div className='menu-secondary-background-color'></div>
      <div className='menu-layer'>
        <div className='menu-city-background'></div>
        <div className='container'>
          <div className='wrapper'>
            <div className='menu-links'>
              <nav>
                <ul>
                  <li>
                    <Link to='/opportunities'>Opportunities</Link>
                  </li>
                  <li>
                    <Link to='/solutions'>Solutions</Link>
                  </li>
                  <li>
                    <Link to='/contact-us'>Contact Us</Link>
                  </li>
                </ul>
              </nav>
              <div className='info'>
                <h3>Our Promise</h3>
                <p>
                  Cupcake ipsum dolor. Sit amet marshmallow topping cheesecake
                  muffin. Halvah croissant candy canes bonbon candy. Apple pie
                  jelly beans topping carrot cake danish tart cake cheesecake.
                </p>
              </div>
              <div className='locations'>
                Locations:
                <span>Dallas</span>
                <span>Austin</span>
                <span>San Francisco</span>
                <span>New York</span>
                <span>Seattle</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
