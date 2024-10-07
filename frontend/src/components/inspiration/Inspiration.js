import React, {useState} from 'react'
import "./Inspiration.css";
const Inspiration = () => {
  const [activeTab, setActiveTab] = useState('Lake');

    // Function to handle tab click
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    // Tab content based on the active tab
    const tabContent = {
        Lake: (
            <>
                <span className="b1-1">Adirondack</span>
                <span className="p1-1">New York</span>
                <span className="b1-2">Balsam Lake</span>
                <span className="p1-2">Wisconsin</span>
                <span className="b1-3">Buckhorn</span>
                <span className="p1-3">Ontario</span>
            </>
        ),
        Mountain: (
            <>
                <span className="b2-1">Algonquin</span>
                <span className="p2-1">Ontario</span>
                <span className="b2-2">Bancroft</span>
                <span className="p2-2">Ontario</span>
                <span className="b2-3">Clear Lake</span>
                <span className="p2-3">Ontario</span>
            </>
        ),
        Coastal: (
            <>
                <span className="b3-1">Austin</span>
                <span className="p3-1">Texas</span>
                <span className="b3-2">Banff</span>
                <span className="p3-2">Alberta</span>
                <span className="b3-3">Cultus Lake</span>
                <span className="p3-3">British Columbia</span>
                
            </>
            
        ),
        Island: (
            <>
                <span className="b4-1">Bala</span>
                <span className="p4-1">Ontario</span>
                <span className="b4-2">Bracebridge</span>
                <span className="p4-2">Ontario</span>
                <span>Show more</span>
            </>
        ),
        Outdoor: <span>Outdoor Destinations content...</span>,
        Other: <span>Other Popular Destinations content...</span>,
    };
  return (
    <div>
       <div className="home-section">
      <div className="inspiration">
            <b className="inspiration-title">Inspiration for future getaways</b>
            <div className="inspiration-headers-container">
                <div className="inspiration-headers">
                    <button 
                        className={`inspiration-headers-item ${activeTab === 'Lake' ? 'inspiration-headers-active' : ''}`}
                        onClick={() => handleTabClick('Lake')}
                    >
                        Lake Destinations
                    </button>
                    <button 
                        className={`inspiration-headers-item ${activeTab === 'Mountain' ? 'inspiration-headers-active' : ''}`}
                        onClick={() => handleTabClick('Mountain')}
                    >
                        Mountain Destinations
                    </button>
                    <button 
                        className={`inspiration-headers-item ${activeTab === 'Coastal' ? 'inspiration-headers-active' : ''}`}
                        onClick={() => handleTabClick('Coastal')}
                    >
                        Coastal Destinations
                    </button>
                    <button 
                        className={`inspiration-headers-item ${activeTab === 'Island' ? 'inspiration-headers-active' : ''}`}
                        onClick={() => handleTabClick('Island')}
                    >
                        Island Destinations
                    </button>
                    <button 
                        className={`inspiration-headers-item ${activeTab === 'Outdoor' ? 'inspiration-headers-active' : ''}`}
                        onClick={() => handleTabClick('Outdoor')}
                    >
                        Outdoor Destinations
                    </button>
                    <button 
                        className={`inspiration-headers-item ${activeTab === 'Other' ? 'inspiration-headers-active' : ''}`}
                        onClick={() => handleTabClick('Other')}
                    >
                        Other Popular Destinations
                    </button>
                </div>
            </div>
            <div className="inspiration-line"></div>
            <div className="inspiration-column">
                <div className="inspiration-column-item">
                    {tabContent[activeTab]}
                </div>
            </div>
      </div>
    </div>
    </div>
  )
}

export default Inspiration