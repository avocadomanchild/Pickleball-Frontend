import React, { useState } from 'react';
import './Navbar_profile.css';

const Navbar1 = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className = 'div_navbar_profile'>
      <ul className='ul_navbar_profile'>
        <li className={activeTab === 0 ? 'active' : ''} onClick={() => handleTabClick(0)}>
          Tab 1
        </li>
        <li className={activeTab === 1 ? 'active' : ''} onClick={() => handleTabClick(1)}>
          Tab 2
        </li>
        <li className={activeTab === 2 ? 'active' : ''} onClick={() => handleTabClick(2)}>
          Tab 3
        </li>
        <li className={activeTab === 3 ? 'active' : ''} onClick={() => handleTabClick(3)}>
          Tab 4
        </li>
      </ul>
      <div className = 'tab-content'>
        {activeTab === 0 && <div>Content for Tab 1</div>}
        {activeTab === 1 && <div>Content for Tab 2</div>}
        {activeTab === 2 && <div>Content for Tab 3</div>}
        {activeTab === 3 && <div>Content for Tab 4</div>}
      </div>
    </div>
  );
};

export default Navbar1;
