import React from "react";
import logo from "./logo.svg";
import {  Route, Routes } from "react-router-dom";
import SongsLandingPage from "./pages/SongLandingPage/SongsLandingPage";
import EditSong from "./pages/EditSong/EditSongPage";
import AddSong from "./pages/AddSong/AddSong";
import Init from "./pages/Init";
import AddSongPage from "./pages/AddSong/AddSong";

function App() {
  return (
    <div className="App">
      <h1>hello word</h1>
      <Init></Init>
      <Routes>
        {/* <Route path="/" element={<SongsLandingPage />} />
        <Route path="/mySongsLandingPage" element={<SongsLandingPage />} />
        <Route path="/myAddSongPage" element={<AddSongPage />} />
        <Route path="/myEditSong/:id/:artist/:title/:gener/:length/:price" element={<EditSong />} /> */}
      </Routes>
    </div>
  );
}

export default App;
// "@mui/styles": "^5.8.6",
