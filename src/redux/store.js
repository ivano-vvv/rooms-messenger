import { combineReducers, createStore, applyMiddleware } from "redux";
import { reducer as formReducers } from "redux-form";
import authReducer from "./reducers/authReducer";
import roomReducer from "./reducers/roomReducer";
import chatFieldReducer from "./reducers/chatFieldReducer";
import reduxThunk from "redux-thunk";

const reducers = combineReducers({
  auth: authReducer,
  room: roomReducer,
  chatField: chatFieldReducer,
  form: formReducers,
});

const store = createStore(reducers, applyMiddleware(reduxThunk));

export default store;
