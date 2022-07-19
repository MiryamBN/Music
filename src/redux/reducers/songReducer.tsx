import { useNavigate } from "react-router-dom";
import { eGener } from "../../classcs/eGener.enum";
import Song from "../../classcs/Song.class";
import Songs from "../../classcs/Songs";


const initialState:Songs = {
  songsList: [], 
}
type Action = 
  | { type: "GET_ALL_SONGS"; payload:Song[]  }
  | { type: "ADD_SONG"; payload: Song }
  | { type: "EDIT_SONG"; payload: Song }
  | { type: "DELETE_SONG"; payload: string }
  | { type: "SAVE_CHANGES"; payload: string };


export const songReducer = (state = initialState, action: {type: string,payload:any}) => {
  debugger;
  switch (action.type) {
    case "GET_ALL_SONGS":
      return { ...state, songsList: [...action.payload] }
      break;
    case "SAVE_CHANGES":
      return { ...state, songsList: action.payload };
      break;
    case "DELETE_SONG":
      debugger;
      return {
        songsList: state.songsList.filter((song) => song.id != action.payload)
      };
      break;
      case "EDIT_SONG":
        debugger;
      return {
       ...state, songsList:[...state.songsList.map((song:Song) =>{return( song.id === action.payload.id ?  action.payload:song);})],
      };

      break;
      case "ADD_SONG":
        debugger;
       return {...state, listSong: [...state.songsList, action.payload]}
      break;
      case "GET_BY_ARTIST":
      debugger;
      return {
        songsList: state.songsList.filter((song) => song.id == action.payload)
      };
      break;
      debugger

    default:
      return { ...state };
  }
};
