import React, { useContext } from 'react';
import { Info, Repos, User, Search, Navbar } from '../components';
import loadingImage from '../images/preloader.gif';
import { GithubContext } from '../context/context';

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
      <Info />
      <User />
      <Repos />
    </main>
  );
};

export default Dashboard;
