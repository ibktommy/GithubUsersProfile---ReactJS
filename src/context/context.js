import React, { useState, useEffect, useCallback } from 'react';
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
  const [userFollowers, setUserFollowers] = useState(mockFollowers)
  const [requests, setRequests] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState({ show: false, msg: "" })

  // Function To Get UserData
  const searchUser = async (user) => {
    checkError()
    const response = await axios(`${rootUrl}/users/${user}`)
    .catch((error) => console.log(error.message))
    console.log(response)

    if (response) {
      setUserData(response.data)
    } else {
      checkError(true, 'the username does not exist, please try again')
    }
  }

  // Function To Check for Requests Limit
  const checkRequests = useCallback(
    () => {
      axios(`${rootUrl}/rate_limit`)
        .then(({ data }) => {
          let {
            rate: { remaining },
          } = data
          setRequests(remaining)

          if (remaining === 0) {
            checkError(true, 'sorry, you have exceeded your hourly rate limit!')
          }
        })
        .catch((error) => console.log(error.message))
    }, []
  )

  // Function to Set the Error Messages
  const checkError = (show = false, msg = '') => {
    setError({ show, msg })
  }

  // Setting Up UseEffect
  useEffect(() => {
    checkRequests()
  }, [checkRequests])

  return (
    <GithubContext.Provider value={{
      userData,
      userFollowers,
      userRepo,
      requests,
      error,
      searchUser,
      isLoading,
    }}>
      {children}
    </GithubContext.Provider>
  )
}

export { GithubContext, GithubProvider }
