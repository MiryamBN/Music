import axios from "axios";
import { Middleware } from "redux";
import Song from "../../classcs/Song.class";
import { AddSong, DeleteSong, EditSong, GetAllSongs } from "../action";

// export const middlewareSongFunction:Middleware=({dispatch,getState})=>next=>action=>{
//     if(action.type==='GET_ALL_SONGS'){
//         debugger
//         const GetAll=async()=>{
//             debugger
//             const allSongs=await axios.get('http://localhost:8080/songs/GetAllSongs')
//             debugger
//             action.paylaod=allSongs.data
//             console.log(allSongs.data , "vbnm")
//             return next(action)
//         }
//         GetAll()
//         return next(action)

//     }
//     return next(action)
// }
// export const middlewareSongFunctionGetAll:any = () => {
//     return async (dispatch: any) => {
//         try {
//             const allSongs = await axios.get('http://localhost:8080/songs/GetAllSongs');
//             dispatch(GetAllSongs(allSongs.data));
//         }
//         catch (err) {
//             return err;
//         }
//     }
    
// }

// export const middlewareSongFunctionDeleteSong:any = (id:string) => {
//     debugger
//     return async (dispatch: any) => {
//         try {
//             await axios.delete(`http://localhost:8080/songs/DeleteById/${id}`, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     Accept: 'application/json',
//                 },
//             });
//             dispatch(DeleteSong(id));
//         }
//         catch (err) {
//             return err;
//         }
//     }
    
// }

// export const middlewareSongFunctionEditSong = (song: Song) => {
//     return async (dispatch: any) => {
//         try {
//             debugger
//             await axios.put(`localhost:8080/songs/EditSong/${song.id}`,{
//                 headers: {
//                     'Content-Type': 'application/json',
//                     Accept: 'application/json',
//                 },
//             });
//             dispatch(EditSong(song));
//         }
//         catch (err) {
//             return err;
//         }
//     }
// }

// export const middlewareSongFunctionAddSong = (song: Song) => {
//     debugger
//     return async (dispatch: any) => {
//         try {
         
//             const res = await axios.post('localhost:8080/songs/AddSong', song, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     Accept: 'application/json',
//                 },
//             });
//             dispatch(AddSong(res.data));
//         }
//         catch (err) {
//             return err;
//         }
//     }
// }