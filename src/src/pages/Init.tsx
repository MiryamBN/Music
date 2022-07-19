import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import {
  middlewareSongFunctionAddSongApi,
  middlewareSongFunctionDeleteSongApi,
  middlewareSongFunctionEditSongApi,
  middlewareSongFunctionGetAllApi,
  middlewareSongFunctionGetByArtistApi,
} from "../Api/SongsApi";
import Song from "../classcs/Song.class";
import { RootState } from "../redux/store";
import AddSongPage from "./AddSong/AddSong";
import EditSongPage from "./EditSong/EditSongPage";
import SongLandingPage from "./SongLandingPage/SongsLandingPage";

function Init() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    debugger;
    dispatch(middlewareSongFunctionGetAllApi());
  }, []);

  const listSong = useSelector(
    (state: RootState) => state.songReducer.songsList
  );
  debugger;

  const addSong = (song: Song) => {
    debugger;
    dispatch(middlewareSongFunctionAddSongApi(song));
  };
  const editSong = (song: Song) => {
    debugger
    dispatch(middlewareSongFunctionEditSongApi(song));
  };
  const deleteSong = (id: String) => {
    dispatch(middlewareSongFunctionDeleteSongApi(id));
  };
  const searchByArtist = (nameOfArtist: string)=>{
    debugger
    dispatch(middlewareSongFunctionGetByArtistApi(nameOfArtist));
  }

  return (
    <>
      <Routes>
        <Route path="/">
          <Route
            path="/"
            element={
              <SongLandingPage
                songs={listSong}
                deleteSong={deleteSong}
                editS={editSong}
                byArtist={searchByArtist}
              ></SongLandingPage>
            }
          />
          <Route path="/myAddSongPage" element={<AddSongPage songs={listSong} addSong={addSong} ></AddSongPage>}/>

          <Route
            path="/myEditSong/:id"
            element={
              <EditSongPage editS={editSong} songs={listSong}></EditSongPage>
            }
          />
        </Route>
      </Routes>
      
    </>
  );
}
export default Init;
