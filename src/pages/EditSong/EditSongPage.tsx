import React, { useEffect, useRef, useState } from "react";
// import * as React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import { useDispatch } from "react-redux";
import { EditSong } from "../../redux/action";
import Song from "../../classcs/Song.class";
import Songs from "../../classcs/Songs";
import { eGener } from "../../classcs/eGener.enum";
import type {} from 'redux-thunk/extend-redux'
import { middlewareSongFunctionEditSongApi } from "../../Api/SongsApi";
import { Button } from "primereact/button";
import Select from "@mui/material/Select";
import { MenuItem } from "@mui/material";

const EditSongPage = (props:any) => {
  debugger;
  const params = useParams();
  const navigate = useNavigate();
  let songs = props.songs;
  let { id } = useParams();

  const dispatch = useDispatch();
  const [newSong, setNewSong] = useState<Song>(
    {title: "",
    artist: "",
    gener: eGener.CLASSICAL,
    length: 0,
    price: 0,
    }
  );
  const genreArr = ["POP", "ROCK", "CLASSICAL", "RAP"];

  function editSong(song: Song): void {
    debugger;
    dispatch(middlewareSongFunctionEditSongApi(song));
    console.log(newSong);
    navigate(`/`);
  }

  useEffect(() => {
    songs && setNewSong(songs.find((x: Song) => x.id == id));
  }, []);

  return (
    <>
      <h2>Edit Song</h2>
      <div className="card">
        <div className="grid p-fluid">
          <div className="field col-12 md:col-3">
            <label htmlFor="block">Title</label>
            <InputText
              id="block"
              keyfilter={/^[^<>*!]+$/}
              value={newSong.title}
              onChange={(e) => {
                setNewSong({ ...newSong, title: e.target.value });
              }}
            />
          </div>
          <div className="field col-12 md:col-3">
            <label htmlFor="alpha">Artist</label>
            <InputText
              id="block"
              keyfilter={/^[^<>*!]+$/}
              value={newSong.artist}
              onChange={(e) => {
                setNewSong({ ...newSong, artist: e.target.value });
              }}
            />
          </div>
          <br></br>
          <br></br>
          <br></br>
          <Select
            style={{ width: "10%", height: "10%", marginTop: "2%" }}
            labelId="demo-simple-select-filled-label"
            sx={{
              color: "rgb(206, 8, 58)",
              backgroundColor: "rgba(254, 254, 254, 0.877)",
              ":hover": { background: "rgba(254, 254, 254, 0.877)" },
            }}
            id="demo-simple-select-filled"
            defaultValue={params.gener}
            onChange={(e) => {
              setNewSong({
                ...newSong,
                gener: e.target.value as unknown as eGener,
              });
            }}
          >
            {genreArr.map((genre: string) => {
              return (
                <MenuItem key={genre} value={genre}>
                  {genre}
                </MenuItem>
              );
            })}
          </Select>
          <div className="field col-12 md:col-3">
            <label htmlFor="integer">Price</label>
            <InputText
              id="integer"
              keyfilter="int"
              value={String(newSong.price)}
              onChange={(e) => {
                setNewSong({ ...newSong, price: Number(e.target.value) });
              }}
            />
          </div>
          <div className="field col-12 md:col-3">
            <label htmlFor="integer">Length</label>
            <InputText
              id="integer"
              keyfilter="int"
              value={String(newSong.length)}
              onChange={(e) => {
                setNewSong({ ...newSong, length: Number(e.target.value) });
              }}
            />
          </div>



          <Button type="submit" onClick={() => {
            debugger
              dispatch(props.editSong(newSong));
            }}
          >
            save changes
          </Button>
        </div>
      </div>
    </>
  );
};

export default EditSongPage;
