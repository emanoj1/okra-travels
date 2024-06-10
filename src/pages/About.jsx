import React from 'react';
import '../components/Page.css'; // Shared page styling
import '../components/About.css'; // Specific styles for the About component

const About = () => {
  return (
    <div className="about">
      <div className="page">
        <h1>Hello!</h1>
        <p>
          👋 My name is Manoj Kumar, and I am based in Sydney, Australia 🦘
        </p>
        <div className='about-image'>
          <img src="manoj_polaroid_photo.png" alt="Namaste" />
          <p></p>
        </div>

        <h1>Who am I</h1>
        <p>
        I work full-time in digital advertising technology while also studying to become a full stack web developer. 
        Additionally, I am an indie author in the making, having published my first children’s picture book, <a href="https://chesterthedino.com" target="_blank" rel="noopener noreferrer">Chester, the Dino</a> in 2024.
        </p>
        
        <h1>Why this</h1>
        <p>
        For both work and leisure, I have traveled extensively to most of India's major cities over the past few decades. 
        During this time, I've assisted my family and colleagues with their travel plans, and their delight and positive feedback have been incredibly rewarding. 
        Motivated by my passion for sharing my knowledge of traveling in India, I officially launched Okra Travels online on Monday, June 10, 2024.
        </p>

        <h1>How do you run this</h1>
        <p>
        I run Okra Travels as a solo, home-based side hustle, balancing it around my daily schedule of work, hobbies, family, and fitness. As the sole manager, 
        I'm free from corporate constraints, allowing me to develop my services quickly and creatively, always with your needs in mind. 
        I personally address every issue that arises and read and respond to every email, question, idea, and feedback.
        I hope you find value in my services and knowledge, and enjoy supporting indie makers, side hustlers, and bootstrapped entrepreneurs. 
        Your support inspires me to keep dreaming big and creating unique products. Thank you so much!
        </p>

        <h1>Why OKRA</h1>
        <p>
        Well, apart from being a staple in my favorite curries, Okra (also known as Lady's Finger and Bhindi in Hindi) is a vegetable used 
        extensively across India's diverse cuisines. Its raw form is admittedly slimy and sticky with a rather distinct aroma, but once cooked with the right spices, oils, and 
        other ingredients, it transforms into a truly delicious dish. To me, this transformation mirrors the experience of traveling in India. 
        Just as Okra undergoes a magical change, travel in India can transform the unfamiliar into something wonderfully memorable. Plus, Okra is universal and diverse, 
        just like Indian culture.
        And let's be honest, Okra just sounds great!
        While we are on the subject of food, check out my cooking at <a href="https://unrecipes.net" target="_blank" rel="noopener noreferrer">Unrecipes.net</a>
        </p>
        <div className='about-image'>
        <img src="okra-sandipkalal-unsplash.jpg" alt="Namaste" className="image" />
        <p>Photo by <a href="https://unsplash.com/photos/a-metal-bowl-filled-with-green-beans-on-top-of-a-wooden-table-YxJcb7QpsV0" target="_blank" rel="noopener noreferrer">Sandip Kalal on Unsplash</a>
        </p>
      </div>

      </div>

    </div>
  );
};

export default About;
