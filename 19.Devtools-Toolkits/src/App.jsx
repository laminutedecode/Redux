//https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=fr&pli=1
import Counter from './components/Counter'
import './App.css'

function App() {


  return (
    <>
      <Counter />
    </>
  )
}

export default App

// Redux DevTools Extension est une extension de navigateur très utile qui vous permet de visualiser et de déboguer l'état de votre application Redux, ainsi que de suivre les actions qui ont été dispatchées. Redux Toolkit est conçu pour fonctionner de manière transparente avec Redux DevTools Extension, ce qui facilite grandement le processus de débogage des applications Redux.

// Lorsque vous utilisez Redux Toolkit avec Redux DevTools Extension, vous pouvez :

// Visualiser l'état Redux en temps réel : L'extension affiche l'état actuel de votre magasin Redux, vous permettant de voir comment il évolue au fil du temps.

// Suivre les actions dispatchées : Vous pouvez suivre chaque action qui est dispatchée dans votre application, y compris les données associées à chaque action.

// Rejouer les actions : L'extension vous permet de rejouer séquentiellement les actions dispatchées, ce qui peut être très utile pour comprendre comment votre application est arrivée à un certain état.

// Effectuer des contrôles avancés : Vous pouvez effectuer des contrôles avancés, tels que le filtrage des actions, la comparaison des états, l'enregistrement des sessions, etc.

// Pour utiliser Redux DevTools Extension avec Redux Toolkit, il vous suffit généralement d'installer l'extension dans votre navigateur. Une fois installée, Redux DevTools Extension détectera automatiquement lorsque votre application utilise Redux et commencera à suivre l'état de votre magasin Redux. 

// Lorsque vous utilisez Redux Toolkit, vous pouvez également activer Redux DevTools Extension en passant l'option devTools lors de la configuration de votre magasin : aller dans store