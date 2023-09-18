import React, { createContext, useContext, useState } from 'react';
import data from "../data/dummy";

const TabContext = createContext();

export function TabProvider({ children }) {
  const [activeTab, setActiveTab] = useState(0);

  const value = {
    activeTab,
    setActiveTab,
    tabData: data[activeTab],
  };

  return (
    <TabContext.Provider value={value}>
      {children}
    </TabContext.Provider>
  );
}

export function useTab() {
  return useContext(TabContext);
}
