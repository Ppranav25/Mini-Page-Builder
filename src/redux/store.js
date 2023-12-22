import { createStore } from "redux";
import manageData from "./reducer";

const store= createStore(manageData);

export default store;