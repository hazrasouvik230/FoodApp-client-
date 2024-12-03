import React from "react";

const Delivery = () => {
    return (
        <div className="info-card">
          <div className="info-section">
            <h2><img src="./Tracking.png" alt="" /><span>Delivery information</span></h2>
            <ul>
              <li>
                <strong>Monday:</strong> 12:00 AM–3:00 AM, 8:00 AM–3:00 AM
              </li>
              <li>
                <strong>Tuesday:</strong> 8:00 AM–3:00 AM
              </li>
              <li>
                <strong>Wednesday:</strong> 8:00 AM–3:00 AM
              </li>
              <li>
                <strong>Thursday:</strong> 8:00 AM–3:00 AM
              </li>
              <li>
                <strong>Friday:</strong> 8:00 AM–3:00 AM
              </li>
              <li>
                <strong>Saturday:</strong> 8:00 AM–3:00 AM
              </li>
              <li>
                <strong>Sunday:</strong> 8:00 AM–12:00 AM
              </li>
            </ul>
            <p>
              <strong className="estTime">Estimated time until delivery:</strong> 20 min
            </p>
          </div>
    
          <div className="info-section">
            <h2><img src="./ID Verified.png" alt="" /><span>Contact information</span></h2>
            <ul>
              <li>If you have allergies or other dietary</li>
              <li>restrictions, please contact the restaurant. The </li> 
              <li>restaurant will provide food-specific</li> 
              <li>information upon request.</li>
              <li><strong>Phone number:</strong></li> 
              <li className="number">+934443-43</li>
              <li><strong>Website:</strong></li>
              <li className="website">http://mcdonalds.uk/</li>
            </ul>
          </div>
    
          <div className="info-section dark">
            <h2><img src="./Clock.png" alt="" /><span>Operational Times</span></h2>
            <ul>
              <li>
                <strong>Monday:</strong> 8:00 AM–3:00 AM
              </li>
              <li>
                <strong>Tuesday:</strong> 8:00 AM–3:00 AM
              </li>
              <li>
                <strong>Wednesday:</strong> 8:00 AM–3:00 AM
              </li>
              <li>
                <strong>Thursday:</strong> 8:00 AM–3:00 AM
              </li>
              <li>
                <strong>Friday:</strong> 8:00 AM–3:00 AM
              </li>
              <li>
                <strong>Saturday:</strong> 8:00 AM–3:00 AM
              </li>
              <li>
                <strong>Sunday:</strong> 8:00 AM–3:00 AM
              </li>
            </ul>
          </div>
        </div>
      );
    };

export default Delivery;
