import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className='footerWrapper'>
        <div className='siteInfo'>
          &copy; {new Date().getFullYear()} Jaydan Urwin
        </div>
      </div>
    </footer>
  );
}
