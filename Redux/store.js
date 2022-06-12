import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import { createWrapper } from "next-redux-wrapper"
import rootReducer from "./Reducers/rootReducer"
import { composeWithDevTools } from "redux-devtools-extension"

const middleware = [thunk]

const makeStore = () => createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))
// const store = createStore(rootReducer, compose(applyMiddleware(...middleware)))

export const wrapper = createWrapper(makeStore)