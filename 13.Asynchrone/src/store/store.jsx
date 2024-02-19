
// applyMiddleware permet d'appliquer différents middlewares en fonction des besoins de l'application. En plus de logger, vous pouvez utiliser d'autres middlewares pour gérer des tâches telles que la gestion des effets secondaires avec Redux Thunk ou Redux Saga, la validation des actions, etc. Cela offre une grande flexibilité pour étendre les fonctionnalités de Redux selon les besoins spécifiques de l'application.

// Le middleware logger enregistre chaque action ainsi que l'état avant et après son exécution. Cela offre une visibilité en temps réel sur les actions qui sont dispatchées dans l'application et sur la manière dont elles affectent l'état global. C'est extrêmement utile pour le développement et le débogage, car cela permet de comprendre le flux de données dans l'application.

// Détection d'erreurs : La journalisation fournie par logger peut aider à détecter les erreurs potentielles dans le flux d'actions ou dans les réducteurs. Si une action ne produit pas les résultats attendus ou si l'état de l'application est incorrect après son exécution, la journalisation peut aider à identifier la source du problème.
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
//
import rootReducer from '../reducers/rootReducer';

const store = createStore(rootReducer, applyMiddleware(logger)); 

//Regarder dans le log


export default store;


