import React, { useEffect } from 'react';
import '../components/Page.css'; // Shared page styling

const Plan = () => {
    useEffect(() => {
      // Load all embeds on the page
      if (window.Tally) {
        window.Tally.loadEmbeds();
      }
    }, []);
      
  return (
    <div className="page">
      <h1>Let's understand your upcoming trip to India!</h1>
      <p>Once you have submitted all the details, I shall come back to you!</p>
      <iframe 
        data-tally-src="https://tally.so/embed/3xQ0dy?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
        loading="lazy" width="100%" height="1427" frameborder="0" marginheight="0" marginwidth="0" title="Okra Travel">
    </iframe>
    </div>
  );
};

export default Plan;