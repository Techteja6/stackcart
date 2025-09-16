import React from 'react';

const Footer = () => {
  return (
<footer className="bg-gray-900 text-gray-300 pt-12 pb-6 px-6 md:px-20">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
        <li>
            <a href="#about" className="hover:text-white cursor-pointer">About</a>
        </li>            
            <li>Blog</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Partners</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Solutions</h3>
          <ul className="space-y-2 text-sm">
            <li>Marketing</li>
            <li>Analytics</li>
            <li>Commerce</li>
            <li>Insights</li>
            <li>Support</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Documentation</h3>
          <ul className="space-y-2 text-sm">
            <li>Guides</li>
            <li>API Status</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>Claim</li>
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </div>
      </div>

      <div className="border-t pt-6 text-sm text-center text-gray-500">
        <p>© 2025 StackCart. All rights reserved.</p>
        <p className="mt-1">Made with ❤️ by Teja. Icons by Freepik from flaticon.com</p>
      </div>
    </footer>
  );
};

export default Footer;