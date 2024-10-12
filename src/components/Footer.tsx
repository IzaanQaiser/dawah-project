import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-100">About Our Website</h3>
            <p>
              Our website is dedicated to exploring various faiths, philosophies, and ideologies. We aim to provide comprehensive and unbiased information to help our readers understand different belief systems and worldviews.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-gray-100">Disclaimer</h3>
            <p>
              The content provided on this website is for informational purposes only. We strive for accuracy but encourage readers to verify information and consult primary sources. Views expressed in articles do not necessarily reflect the opinions of the website owners or contributors.
            </p>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2024 Your Website Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;