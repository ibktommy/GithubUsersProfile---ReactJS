import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser.json';
import mockRepos from './mockData.js/mockRepos.json';
import mockFollowers from './mockData.js/mockFollowers.json';
import axios from 'axios';

// Main API URL
const rootUrl = 'https://api.github.com';

// Create Context
const GithubContext = React.createContext()

// Create Component that returns the GithubContext.Provider
const GithubProvider = ({ children }) => {
  // Setting Global States
  const [userData, setUserData] = useState(mockUser)
  const [userRepo, setUserRepo] = useState(mockRepos)
  const [userFollowers, setUserFolowers] = useState(mockFollowers)

  return (
    <GithubContext.Provider value={{
      userData: userData,
      userFollowers: userFollowers,
      userRepo: userRepo
    }}>
      {children}
    </GithubContext.Provider>
  )
}

export { GithubContext, GithubProvider }
