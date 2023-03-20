import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./rootReducer";
// redux devtools extension


const store = createStore(rootReducer,composeWithDevTools());

export default store;