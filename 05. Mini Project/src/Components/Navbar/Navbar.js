import React from "react";

const Navbar = () => {
  return (
    <div className="row">
      <div className="col navigation">
        <nav>
          <ul className="main-nav">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Categories</a>
            </li>
            <li>
              <a href="https://www.reuters.com/news/lifestyle" target="_blank">
                Lifestyle
              </a>
            </li>
            <li>
              <a href="#">Posts</a>
            </li>
            <li>
              <a href="#">Video</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Get in touch</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
