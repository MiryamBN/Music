import { title } from "process";
import * as React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Song from "../../classcs/Song.class";
import { DeleteSong, EditSong, GetAllSongs, GetSongByArtist } from "../../redux/action";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { stat } from "fs";
import axios from "axios";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store";
import Songs from "../../classcs/Songs";
import SingleSong from "./SingleSong";
import { middlewareSongFunctionDeleteSongApi } from "../../Api/SongsApi";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

function SongLandingPage(props: any) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [artist,setArtist]=useState("")
  let listSong = props.songs;

  function deleteSong(id: string): void {
    dispatch(middlewareSongFunctionDeleteSongApi(id));
    debugger;
  }             

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>SongsLandingPage</h1>
        <h3>🎙🎤!!!!רשימת השירים שלנו</h3>
        <div className="col-12 md:col-4">
          <div className="p-inputgroup">

            <InputText placeholder="search by artist" onChange={(e) => {setArtist(e.target.value)}} />
            <Button icon="pi pi-search" className="p-button-warning" onClick={()=>{props.byArtist(artist)}}/>
          </div>
        </div>
        <Button
          onClick={() => {
            navigate(`/myAddSongPage`);
          }}
        >
          add song
        </Button>
        <br></br>
        <br></br>
       
        

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="captions table">
            <TableHead>
              <TableRow>
                <TableCell align="right">
                  <b>title</b>
                </TableCell>
                <TableCell align="right">
                  <b>artist</b>
                </TableCell>
                <TableCell align="right">
                  <b>gener</b>
                </TableCell>
                <TableCell align="right">
                  <b>length</b>
                </TableCell>
                <TableCell align="right">
                  <b>price</b>
                </TableCell>
                <TableCell align="right">
                  <b></b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listSong.map((itemSong: Song, index: number) => {
                return (
                  <>
                    <SingleSong
                      song={itemSong}
                      index={index}
                      deleteSong={props.deleteSong}
                      editSong={props.editSong}
                    ></SingleSong>
                  </>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
export default SongLandingPage;
