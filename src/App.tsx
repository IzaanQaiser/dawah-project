import React from 'react';
import Header from './components/Header';
import LeftSidebar from './components/LeftSidebar';
import MainContent from './components/MainContent';
import RightSidebar from './components/RightSidebar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <Header />
      <div className="flex-grow flex justify-center px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl w-full flex">
          <LeftSidebar />
          <MainContent />
          <RightSidebar />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;