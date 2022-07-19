import {applyMiddleware, combineReducers,compose,createStore } from "redux";
import thunk from "redux-thunk";
import { songReducer } from "./reducers/songReducer";


export type RootState = ReturnType<typeof store.getState>
export type RootState1 = ReturnType<typeof songReducer>

 const myReducer=combineReducers({songReducer});
//  const myMiddleware=applyMiddleware(middlewareSongFunction)
const myMiddleware =applyMiddleware(thunk) ;
// const reducer=songReducer
const store=createStore(myReducer , myMiddleware);

export type AppDispatch = typeof store.dispatch

export default store;