import React from "react";
import ReactDOM from "react-dom/client";
//   import App from "./App";
// import Header from "./Folder/Header";

function Header() {
  return (
    <>
      <section className="header">
        <nav>
          <a href="">
            <img
              src="https://static.vecteezy.com/system/resources/previews/015/658/526/original/podcast-microphone-icon-png.png"
              alt=""
            />
          </a>
          <div className="nav-links" id="navlinks">
       
            <ul>
              <li>
                <a href="">HOME</a>
              </li>
              <li>
                <a href="">ABOUT</a>
              </li>
              <li>
                <a href="">SERVICE</a>
              </li>
              <li>
                <a href="">BLOG</a>
              </li>
              <li>
                <a href="">CONTACT</a>
              </li>
            </ul>
          </div>
          <i id="menu-bar" className="fas fa-bars" onClick={showMenu}></i>
        
        </nav>
      </section>
    </>
  );
}

function showMenu() {
  let menu = document.querySelector("#menu-bar");
  let navlink = document.querySelector("#navlinks");
  menu.classList.toggle("fa-times");
  navlink.classList.toggle("active");
}

export { Header, showMenu };
