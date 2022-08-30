import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
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
  const [requests, setRequests] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  // Function To Check for Requests Limit
  const checkRequests = () => {
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        console.log(data)
        let {
          rate: { remaining },
        } = data
        setRequests(0)
      })
      .catch((error) => console.log(error.message))
  }

  // Setting Up UseEffect
  useEffect(() => {
    checkRequests()
  }, [])

  return (
    <GithubContext.Provider value={{
      userData,
      userFollowers,
      userRepo,
      requests,
    }}>
      {children}
    </GithubContext.Provider>
  )
}

export { GithubContext, GithubProvider }
