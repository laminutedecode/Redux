import { connect } from 'react-redux';
import Stock from './components/Stock';
import './App.css'
// Le concept de "recharge" ou "restock" peut être ajouté à votre application en créant une action supplémentaire et en la traitant dans votre reducer. Voici comment vous pourriez l'implémenter dans votre exemple :

// Tout d'abord, vous pouvez définir une action pour le restock dans votre fichier actions.js 
function App() {


  return (
    <>
      <Stock />
    </>
  )
}

export default connect()(App);
