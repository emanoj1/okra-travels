import React from 'react';
import '../components/Page.css'; // Shared page styling
import '../components/Home.css'; // Specific styles for the Home component
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <div className="home-image">
        <img src="mysorepalace-ashimdsilva-unsplash.jpg" alt="Home office" className="image" />
        <p>Photo by <a href="https://unsplash.com/photos/turned-off-laptop-computer-with-near-wall-mY3_bvR74fI" target="_blank" rel="noopener noreferrer">Dillon Shook on Unsplash</a>
        </p>
      </div>
      <div className="page">
      <h1>Welcome to Okra Travels! 🙏 </h1>
        <p>
          Planning a trip to India has never been easier with Okra Travels, a personalized initiative dedicated to making your travel planning seamless and enjoyable. 
        </p>
        <h1>Our Services</h1>
        <p>
          <ul className="spaced-list">
            <li><strong>Flight Research</strong>: Shortlisting best flights to suit your schedule and budget ✈️ </li>
            <li><strong>Hotel Bookings</strong>: Assistance in booking the best accommodations 🛌 </li>
            <li><strong>Airport Transfers</strong>: Arrangements for reliable airport transfers 🚖 </li>
            <li><strong>Travel Advice</strong>: General travel tips to enhance your travel experience 📢 </li>
          </ul>
        </p>
        
        <h1>How it Works</h1>
        <p>
          <ol className="spaced-list">
            <li><strong>Submit Trip Details</strong>: Provide essential details of your upcoming trip.</li>
            <li><strong>Receive Personalized Information</strong>: Receive the best possible information for you to make the bookings yourself.</li>
            <li><strong>Donate If You Like</strong>: If you find the service helpful, you can choose to make a donation. If can't, that's perfectly fine too!</li>
          </ol>
        </p>
        <Link to="/contact" className="plan-button">Let's plan!</Link>
      </div>
    </div>
  );
};

export default Home;
