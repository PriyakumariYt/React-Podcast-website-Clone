import logo from "./logo.svg";
import React from "react";
// import "./App.css";
//  import CardApp from "./CardApp";
//import Card from "./Card";
import Header from "./Folder/Component/Header";

import Main from "./Folder/Component/main";
import "./Folder/CssFolder/Header.css";
import "./Folder/CssFolder/main.css";
import HeaderContent from "./Folder/Component/HeaderContent";
import "./Folder/CssFolder/HeaderContent.css";
import Footer from "./Folder/Component/footer";
import "./Folder/CssFolder/Footer.css";
import Content from "./Folder/Component/Content";
import "./Folder/CssFolder/content.css";
import PodcastContent from "./Folder/Component/podcastContent";
import "./Folder/CssFolder/podcastContent.css";
import PodcastArea from "./Folder/Component/PodcastArea";
import "./Folder/CssFolder/PodcastArea.css";

import Availableweb from "./Folder/Component/Availableweb";
import "./Folder/CssFolder/Availableweb.css";
import NewEpisode from "./Folder/Component/NewEpisode";
import "./Folder/CssFolder/NewEpisode.css";

function App() {
  return (
    // <CardApp />

    <>
      <Header />
      <HeaderContent />
      <PodcastContent />
      <Content />
      <Main />
      <PodcastArea />
      <Availableweb />
    <NewEpisode/>
      <Footer />
    </>
  );
}

export default App;

// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>
