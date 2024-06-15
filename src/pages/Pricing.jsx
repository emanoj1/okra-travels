import React from 'react';
import '../components/Page.css'; // Shared page styling
import '../components/Home.css'; // Specific styles for the Home component

const Pricing = () => {
  return (
    <div className="home">
      <div className="home-image">
        <img src="namaste-morshaniV-unsplash.jpg" alt="Namaste" className="image" />
        <p>Photo by <a href="https://unsplash.com/photos/persons-hands-V-BNenqS1ow" target="_blank" rel="noopener noreferrer">Mor Shani on Unsplash</a>
        </p>
      </div>
      <div className="page">
      <h1>Pay-What-You-Can 🙏 </h1>
      <br></br>
        <p>
        Pay what you can (PWYC) is a business model where prices are not fixed; instead, customers are encouraged to pay an amount they believe reflects the value of the product or service. 
        PWYC operates on principles similar to gift economies and cross-subsidization, relying on reciprocity and trust to thrive. 
        </p>
    
        <p>
          <ul className="spaced-list">
            <li>Only if you are happy with the services provided</li>
            <li>Only if you can!</li>
            <li>Rather than focusing on what to give, let's focus on connecting and planning first!</li>
          </ul>
        </p>
        
        <p>You can make your payment via the below button:</p>
        <div className='donation-button'>
            <a href="https://buymeacoffee.com/emanoj" target="_blank" rel="noopener noreferrer">
                <img src="bmac-greeen-button.png" alt="Buy Me a Coffee button" />
            </a>
        </div>
        <p></p>
        <p>Or via the little cup widget you see on the bottom of every page!</p>
        <p>
            <p></p>
            <h3>Your transaction is safe with Buy Me a Coffee!</h3>
          <ol className="spaced-list">
            <li><strong>Over 1 million creators & supporters use it!</strong>: YouTubers, musicians, podcasters, writers, programmers, nonprofits, cosplayers, and more!</li>
            <li><strong>Use your card</strong>: All major Credit Cards, Apple Pay, Google Pay are accepted.</li>
            <li><strong>Security</strong>: At Buy Me A Coffee, security is paramount. They ensure your peace of mind by not storing credit card data—payment processing is securely managed by Stripe, adhering to PCI Compliance Level 1 standards. Operating on Amazon’s resilient infrastructure, bolstered by Cloudflare for added security, they enforce SSL encryption platform-wide. Additionally, their proactive approach includes a bug bounty program to promptly address any reported security issues, prioritizing the safety of their users. </li>
          </ol>
        </p>
      </div>
    </div>
  );
};

export default Pricing;

