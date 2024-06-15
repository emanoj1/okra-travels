import React from 'react';
import '../components/Page.css'; // Shared page styling
import '../components/Books.css';

const books = [
    {
      title: "India by Lonely Planet",
      image: "lonelyplanet-bookcover-india.jpg",
      link: "https://amzn.to/4cidVdi",
      description: "Over 200 maps. Covers Delhi, Rajasthan, Punjab, Kashmir, Himachal Pradesh, Agra, Uttar Pradesh, Kolkata, West Bengal, Sikkim, Northeast States, Gujarat, Odisha, Mumbai, Goa, Karnataka, Andhra Pradesh, Kerala and Tamil Nadu"
    },
    {
      title: "DK Eyewitness - India ",
      image: "DKeyewitness-bookcover-india.jpg",
      link: "https://amzn.to/3yVTRPu",
      description: "pick of India's must-sees, top experiences and hidden gems, the best spots to eat, drink, shop and stay, detailed maps and walks which make navigating the country easy, easy-to-follow itineraries, expert advice- get ready, get around and stay safe, colour-coded chapters to every part of India, from Rajasthan to Assam and the Northeast, Ladakh to Kerala, a lightweight format, so you can take it with you wherever you go!"
    },
    {
        title: "Teamwork & Indian Culture: A Practical Guide for Working with Indians",
        image: "teamwork_bookcover-india.jpg",
        link: "https://amzn.to/3Xo0YdS",
        description: (
        <>
        <p>This book is about Indian Culture at workplace. This book acts as a cross-cultural trainer for non-Indians. This book addresses common issues such as:</p>
        <br></br>
        <ul>
          <li>Meeting deadlines at the last minute, in spite of the team working for long hours</li>
          <li>Yes Sir / Yes Madam culture</li>
          <li>Lack of respect for punctuality</li>
          <li>The penchant for competing at the expense of Cooperation</li>
          <li>The "Indian Crab" syndrome</li>
          <li>Prevalent Communication problems</li>
          <li>Lack of dignity of work</li>
          <li>Resistance to using the tools</li>
          <li>Not sharing the knowledge</li>
          <li>The "Chalta-hai" attitude, etc.</li>
        </ul>
        </>
        )
      },
      {
        title: "Blue Guide - India",
        image: "blueguide-bookcover-india.jpg",
        link: "https://amzn.to/3XoWa7T",
        description: "The first Blue Guide to cover the entire Indian subcontintent, from Assam to Tamil Nadu. Elegantly written by a long-standing India expert, former BBC Delhi correspondent Sam Miller, who now heads the India arm of the BBC World Service Trust."
      },
      {
        title: "India - Culture Smart!: The Essential Guide to Customs & Culture",
        image: "culturesmart-bookcover-india.jpg",
        link: "https://amzn.to/4b22OUY",
        description: "Culture Smart! India will make you aware of essential values and behavioral norms, as well as show you how to navigate often profound cultural differences and build relationships."
      },
      {
        title: "The Rough Guide to India",
        image: "roughguide-bookcover-india.jpg",
        link: "hhttps://amzn.to/4elUFgS",
        description: (
            <>
            <p>This India guide book is packed full of details on how to get there and around, pre-departure information and top time-saving tips, including a visual list of things not to miss.</p>
            <br></br>
            <p>Covers: Delhi, Rajasthan, Uttar Pradesh, Uttarakhand, Madhya Pradesh and Chhattisgarh, Himachal Pradesh, Jammu and Kashmir, Punjab and Haryana, Gujarat, Mumbai, Maharashtra, Goa, Kolkata and West Bengal, Bihar and Jharkhand, Sikkim, the Northeast, Odisha, Andhra Pradesh and Telangana, the Andaman Islands, Tamil Nadu, Kerala, and Karnataka.</p>
            <br></br>
            <p>Inside this India travel guide you'll find:</p>
            <ul>
              <li>Practical travel tips</li>
              <li>Time-saving itineraries</li>
              <li>Regional coverage</li>
              <li>Getting around like a local</li>
              <li>Highlights of things not to miss</li>
              <li>Independent reviews</li>
              <li>Color photos</li>
              <li>Color-coded maps</li>
            </ul>
            </>
            )
    },
      {
        title: "Fodor's Essential India",
        image: "fodors-bookcover-india.jpg",
        link: "https://amzn.to/3VrYCIp",
        description: "Written by locals, Fodor's Essential India is the perfect guidebook for those looking for insider tips to make the most out their visit to Delhi, Mumbai, and beyond. COVERS: Delhi, Agra, Jaipur, Udaipur, Mumbai, Goa, Kerala, Kolkata, The Taj Mahal, Rajastan, Beaches, and more."
      },      
      {
        title: "India Travel Survival Guide For Women",
        image: "womentravel-bookcover-india.jpg",
        link: "https://amzn.to/4b26rKr",
        description: "The book has been designed taking the solo female traveller to India into consideration and the problems they face and how to overcome them; some of which include rape, verbal, sexual, physical assault and/or harassment, groping and other issues faced by foreign women in India. The book also gives an insight on how ‘white women’ are viewed by Indian me."
      },   
      {
        title: "India Adventure Map - 3011",
        image: "natgeomap-bookcover-india.jpg",
        link: "https://amzn.to/3VlFBat",
        description: "National Geographic's India Adventure Map is designed to meet the unique needs of adventure travelers with its durability and accurate information. This folded map provides global travelers with the perfect combination of detail and perspective, highlighting hundreds of points of interest and the diverse and unique destinations within the country. The map includes the locations of cities and towns with a user-friendly index, plus a clearly marked road network complete with distances and designations for major highways, main roads, and tracks and trails for those seeking to explore more remote regions."
      },   
      // Add more books as needed
  ];
  
  const Books = () => {
    return (
      <div className="books-page">
        <div className="intro-text">
          <h1>Recommended Books and Guides</h1>
          <p>Here are some of the most helpful books and guides that can aid you in your journey.</p> 
          <p>Click on the book covers to find them on Amazon and read more about each one.</p>
        </div>
        <div className="books-container">
          {books.map((book, index) => (
            <div key={index} className="book-item">
              <a href={book.link} target="_blank" rel="noopener noreferrer">
                <img src={book.image} alt={book.title} className="book-cover" />
              </a>
              <div className="book-description">
                <h3>{book.title}</h3>
                <p>{book.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="disclaimers">
            <h2>Affiliate Disclaimer</h2>
            <p>This website contains affiliate links to online book shops. This means if you purchase a book after clicking the links or buttons on the website, the site owner receives a little bit of commission from the sale of that book.</p>
            <h2>Copyright</h2>
            <p>Respective photo images, book cover images, book descriptions, click-through links etc belong to Amazon.com, Goodreads.com, Wikipedia & to the author.</p>
        </div>
    </div>
  );
};
  
  export default Books;