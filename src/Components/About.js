import React from 'react'
import './about.css'
// import { Link } from 'react-router-dom'
const About = () => {
  return (
    // JSX with class names
<div className="about-container">
  <h2>About Us</h2>
  <br></br>
  <p>
    Welcome to CommunityTable, where we strive to make a positive impact by reducing food waste and ensuring that no one in our community goes hungry. Our platform connects generous donors with surplus food to individuals and organizations in need.
  </p>
  <p>
    At CommunityTable, we believe in the power of community and the positive change that can happen when we come together. Through our platform, individuals and businesses can easily donate excess food, contributing to a sustainable and compassionate community.
  </p>
  <p>
  <h3>Our Mission:</h3>
    
    To bridge the gap between surplus food and those facing food insecurity, fostering a sense of unity and care within our community.
  </p>
  <h3>Key Features:</h3>
  <ul>
    <li>Food Donation: Users can easily contribute surplus food by providing details about the items they wish to donate.</li>
    <li>NGO and Charitable Organizations: Non-profit organizations can subscribe to receive email notifications about available food donations, enabling them to coordinate pickups and distribute to those in need.</li>
    {/* Add more features as needed */}
  </ul>
  <p>
    <h3>Meet Our Team:</h3>
  </p>
  <ul>
    <li>Krishna - Founder</li>
    <li>Jane Smith - Developer</li>
    <li>Michael Johnson - Outreach</li>
    <li>John Doe</li>
  </ul>
  {/* Add more relevant content, images, or links */}
</div>


  )
}

export default About