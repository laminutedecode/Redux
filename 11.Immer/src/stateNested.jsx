import { createStore } from 'redux';
import produce from 'immer'

export const initialState = {
  name: 'Jonathan',
  address: {
    street: '123 rue de Paris',
    city: 'Paris',
    state: 'FR',
  }
}

// Utilisation d'immer pour mettre à jour un élément de todos
const newState = produce(state, draftState => {
  draftState.todos[0].completed = true;
});

// Action creator pour mettre à jour la ville
export const updateCity = (city) => {
  return {
    type: 'UPDATE_CITY',
    payload: city,
  };
}

// Reducer pour traiter l'action de mise à jour de la ville
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_CITY':
      // return { ...state, address: {...state.address, city: action.payload}};
      return produce(state, (draft)=> {
          draft.adress.city = action.payload
      })
    default:
      return state;
  }
}

// Création du store Redux
export const store = createStore(reducer); 

// Abonnement au store pour observer les changements d'état
export const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// Dispatch de l'action pour mettre à jour la ville
store.dispatch(updateCity('Grenoble'));

// Désabonnement du store après le dispatch de l'action
unsubscribe();


//installer immer npm i immer

// immer est une bibliothèque JavaScript qui permet de travailler de manière immuable avec les structures de données en JavaScript. Elle offre une manière élégante et simplifiée de produire des copies modifiées d'objets ou de tableaux sans modifier l'original.