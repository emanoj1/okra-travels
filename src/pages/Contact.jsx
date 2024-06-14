import React from 'react';
import '../components/Page.css'; // Shared page styling

const Contact = () => {
  return (
    <div className="home">
      <div className="home-image">
        <img src="auto_rickshaw.png" alt="Home office" className="image" />
      </div>
      <div className="page">
        <h1>Contact me </h1>
        <h4>If you wish to write to me, please send me an email to:</h4>
        <br></br>
        <p>
          manoj@okratravels.com.au 
        </p>
        <p>
          I shall get back to you as early as possible. If you want to plan your trip with me, may I suggest you 
          <a href="https://okratravels.com.au/plan" target="_blank" rel="noopener noreferrer"> fill out the PLAN form</a> first. All the details you put on there, will help me prepare myself better when I reply.
          Everything else, use the above email to connect with me. Thanks in advance and I look forward to working with you!
        </p>
      </div>
    </div>
  );
};


export default Contact;