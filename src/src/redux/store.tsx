import {applyMiddleware, combineReducers,createStore } from "redux";
import thunk from "redux-thunk";
import { songReducer } from "./reducers/songReducer";


export type RootState = ReturnType<typeof store.getState>
 const myReducer=combineReducers({songReducer});
const myMiddleware =applyMiddleware(thunk) ;
const store=createStore(myReducer , myMiddleware);

export type AppDispatch = typeof store.dispatch

export default store;