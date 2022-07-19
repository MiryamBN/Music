import axios from "axios";
import { Middleware } from "redux";
import Song from "../classcs/Song.class";
import { AddSong, DeleteSong, EditSong, GetAllSongs, GetSongByArtist } from "../redux/action";

export const middlewareSongFunctionGetAllApi: any = () => {
  debugger;
  return async (dispatch: any) => {
    try {
      const allSongs = await axios.get(
        "http://localhost:8080/songs/GetAllSongs"
      );
      dispatch(GetAllSongs(allSongs.data));
    } catch (err) {
      return err;
    }
  };
};

export const middlewareSongFunctionDeleteSongApi: any = (id: string) => {
  debugger;
  return async (dispatch: any) => {
    try {
      await axios.delete(`http://localhost:8080/songs/DeleteById/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      dispatch(DeleteSong(id));
    } catch (err) {
      return err;
    }
  };
};

export const middlewareSongFunctionEditSongApi:any = (song: Song) => {
  debugger
  return async (dispatch: any) => {
    try {
      debugger;
     const res= await axios.put(`localhost:8080/songs/EditSong/${song.id}`,
     song, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      dispatch(EditSong(song));
    } catch (err) {
      return err;
    }
  };
};


export const middlewareSongFunctionGetByArtistApi:any = (nameOfArtist: string) => {
  debugger
    return async (dispatch: any) => {
      try {
        const res = await axios.get(
          `localhost:8080/songs/GetSongByArtist/${nameOfArtist}`
        );
        dispatch(GetAllSongs(res.data));
      } catch (err) {
        return err;
      }
    };
  };


export const middlewareSongFunctionAddSongApi = (newSong: Song) => {
  return async (dispatch: any) => {
      try {
          const song = await axios({ url: `http://localhost:8080/songs/AddSong`, method: 'POST', data: newSong });
          dispatch(AddSong(song.data));
      }
      catch (err) {
          console.log(err)
          return err;
      }
  }
}
