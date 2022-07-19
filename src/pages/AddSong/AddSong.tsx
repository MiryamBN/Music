import React, { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import Song from "../../classcs/Song.class";
import { eGener } from "../../classcs/eGener.enum";
import { useDispatch } from "react-redux";
import { AddSong } from "../../redux/action";
import { MenuItem, Select } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { middlewareSongFunctionAddSongApi } from "../../Api/SongsApi";

const AddSongPage = (props: any) => {
  const [newSong, setNewSong] = useState(new Song("", "", eGener.POP, 0, 0));
  const dispatch = useDispatch();
  const [boll, setBool] = useState(false);
  const genreArr = ["POP", "ROCK", "CLASSICAL", "RAP"];
  const navigate = useNavigate();

  const addNewSong = () => {
    debugger;
    dispatch(props.addSong(newSong));
    debugger;
    console.log(newSong);
    debugger;
    navigate(`/`);
  };

  return (
    <>
      <h2>Add Song</h2>

      <div className="card">
        <div className="grid p-fluid">
          <div className="field col-12 md:col-3">
            <label htmlFor="block">Title</label>
            <InputText
              id="block"
              keyfilter={/^[^<>*!]+$/}
              onChange={(e) => {
                setNewSong({ ...newSong, title: e.target.value });
              }}
            />
          </div>
          <div className="field col-12 md:col-3">
            <label htmlFor="block">Artist</label>
            <InputText
              id="block"
              keyfilter={/^[^<>*!]+$/}
              onChange={(e) => {
                setNewSong({ ...newSong, artist: e.target.value });
              }}
            />
          </div>

          <br></br>
          <br></br>
          <br></br>
          <Select
            style={{ width: "10%", height: "5%", marginTop: "2%" }}
            labelId="demo-simple-select-filled-label"
            sx={{
              color: "rgb(206, 8, 58)",
              backgroundColor: "rgba(254, 254, 254, 0.877)",
              ":hover": { background: "rgba(254, 254, 254, 0.877)" },
            }}
            id="demo-simple-select-filled"
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
              onChange={(e) => {
                setNewSong({ ...newSong, length: Number(e.target.value) });
              }}
            />
          </div>
          <Button
            type="submit"
            onClick={() => {
              addNewSong();
            }}
          >
            add the song
          </Button>
        </div>
      </div>
    </>
  );
};
export default AddSongPage;
