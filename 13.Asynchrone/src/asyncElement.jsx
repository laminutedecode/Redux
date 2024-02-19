// Les actions asynchrones sont utilisées lorsque vous avez besoin d'effectuer des opérations qui prennent du temps, telles que des appels réseau (API), des lectures de fichiers, etc. Ces actions sont généralement implémentées à l'aide de middlewares comme Redux Thunk ou Redux Saga.

// Avec Redux Thunk, par exemple, vous pouvez définir des actions asynchrones qui retournent des fonctions plutôt que des objets. Ces fonctions peuvent avoir accès à dispatch et getState, ce qui permet d'effectuer des appels asynchrones et de dispatcher des actions synchrones en réponse aux résultats de ces appels.

import { createStore } from 'redux';

const initialState = {
  loading: false,
  users: [],
  erros: ","
}

const fetchUsersRequest  = ()=> {
  return {
    type: "FETCH_USERS_REQUEST"
  }
}

const fetUsersSuccess = (users) => {
  return {
    type: "FETCH_USERS_SUCCES",
    payload: users,
  }
}

const fetchUsersFailed = (erros) => {
  return {
    type: "FETCH_USERS_FAILED",
    payload: erros,
  }
}


const reducer = (state = initialState, action)=> {
  switch(action.type){
    case 'FETCH_USERS_REQUEST':
    return {...state, loading: true}
    case 'FETCH_USERS_SUCCES':
    return {...state, loading: false, users: action.payload, error: "" }
    case 'FETCH_USERS_FAILED':
      return {loading: false, users: [], error: action.payload }
    default:
      return state
  }
}

const store = createStore(reducer)