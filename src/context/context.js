import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser.json';
import mockRepos from './mockData.js/mockRepos.json';
import mockFollowers from './mockData.js/mockFollowers.json';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

// Create Context
const GithubContext = React.createContext()

// Create Component that returns the GithubContext.Provider
const GithubProvider = ({ children }) => {
  return (
    <GithubContext.Provider value={"context"}>
      {children}
    </GithubContext.Provider>
  )
}

export { GithubContext, GithubProvider }
