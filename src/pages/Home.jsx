import React from 'react';
import '../components/Page.css'; // Shared page styling
import '../components/Home.css'; // Specific styles for the Home component

const Home = () => {
  return (
    <div className="home">
      <div className="home-image">
        <img src="mysorepalace-ashimdsilva-unsplash.jpg" alt="Home office" />
        <p>Photo by <a href="https://unsplash.com/photos/turned-off-laptop-computer-with-near-wall-mY3_bvR74fI" target="_blank" rel="noopener noreferrer">Dillon Shook on Unsplash</a>
        </p>
      </div>
      <div className="page">
      <h1>Welcome to Okra Travels</h1>
        <p>
          Planning a trip to India has never been easier with Okra Travels, a personalized, home-based initiative dedicated to making your travel planning seamless and enjoyable. 
        </p>
        <h1>Our Services</h1>
        <p>
          <ul>
            <li>Flight Research: We find the best flights to suit your schedule and budget.</li>
            <li>Hotel Bookings: Assistance in selecting and booking the best accommodations.</li>
            <li>Airport Transfers: Arrangements for reliable and comfortable airport transfers.</li>
            <li>Travel Advice: General travel tips and advice to enhance your travel experience.</li>
          </ul>
        </p>
        
        <h1>How It Works</h1>
        <p>
        <ol>
            <li>Submit Trip Details: Provide us with the essential details of your upcoming trip.</li>
            <li>Receive Personalized Information: We will prepare the best possible information for you to make the bookings yourself.</li>
            <li>Airport Transfers: Arrangements for reliable and comfortable airport transfers.</li>
            <li>Donate If You Like: If you find our service helpful, you can choose to make a donation. If not, that's perfectly fine too!</li>
          </ol>
        </p>
      </div>
    </div>
  );
};

export default Home;
