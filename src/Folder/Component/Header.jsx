import React from "react";
import ReactDOM from "react-dom/client";
//   import App from "./App";
// import Header from "./Folder/Header";

// import React, { useState } from "react";


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
            {/* <i className="bx bx-window-close" onclick="hideMenu()"></i> */}
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
          {/* <i className="bx bx-menu" onclick="showMenu()"></i> */}
        </nav>
      </section>

      {/* var navlinks = document.getElementById("navlinks");
      function showMenu() {
        navlinks.style.right = "0";
      }
      function hideMenu() {
        navlinks.style.right = "-200px";
      } */}

    </>
  );
}
export default Header;


// function Header() {
//   const [menuVisible, setMenuVisible] = useState(false);

//   function showMenu() {
//     setMenuVisible(true);
     
//   }

//   function hideMenu() {
//     setMenuVisible(false);
//   }

//   return (
//     <>
//       <section className="header">
//         <nav>
//           <a href="">
//             <img
//               src="https://static.vecteezy.com/system/resources/previews/015/658/526/original/podcast-microphone-icon-png.png"
//               alt=""
//             />
//           </a>
//           <div className={`nav-links ${menuVisible ? "active" : ""}`}>
//             <i className="bx bx-window-close" onClick={hideMenu}></i>
//             <ul>
//               <li>
//                 <a href="">HOME</a>
//               </li>
//               <li>
//                 <a href="">ABOUT</a>
//               </li>
//               <li>
//                 <a href="">SERVICE</a>
//               </li>
//               <li>
//                 <a href="">BLOG</a>
//               </li>
//               <li>
//                 <a href="">CONTACT</a>
//               </li>
//             </ul>
//           </div>
//           <i className="bx bx-menu" onClick={showMenu}></i>
//         </nav>
//       </section>
//     </>
//   );
// }

// export default Header;
