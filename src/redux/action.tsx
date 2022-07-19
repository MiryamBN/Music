import Song from "../classcs/Song.class";
import React from 'react';
import Songs from "../classcs/Songs";

export function GetAllSongs(song:Song[]) {
  return { type: "GET_ALL_SONGS", payload:song };
}
export function DeleteSong(id: string ) {
  debugger;
  return { type: "DELETE_SONG", payload: id };
}
export function EditSong(song:Song ) {
  debugger;
  return { type: "EDIT_SONG", payload:song };
}

export function AddSong(song:Song ) {
  debugger;
  return { type: "ADD_SONG", payload:song };
}
export function GetSongByArtist(nameOfArtist:string ) {
  debugger;
  return { type: "GET_BY_ARTIST", payload:nameOfArtist };
}
