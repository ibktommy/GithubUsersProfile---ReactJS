import React, { useContext } from 'react';
import loadingImage from '../images/preloader.gif';
import { GithubContext } from '../context/context';

import Navbar from "../components/Navbar"
import Search from "../components/Search"
import UserInfo from "../components/UserInfo"
import User from "../components/User"
import Repos from "../components/Repos"

const Dashboard = () => {
  // Accessing Global Context-state from App Context
  const { isLoading } = useContext(GithubContext)

  // Condition to render pages based on the isLoading-state
  if (isLoading) {
    return (
      <main>
        <Navbar />
        <Search />
        <img src={loadingImage} alt="app-loader" className='loading-img' />
      </main>
    )
  }
  
  return (
    <main>
      <Navbar />
      <Search />
      <UserInfo />
      <User />
      <Repos />
    </main>
  );
};

export default Dashboard;
