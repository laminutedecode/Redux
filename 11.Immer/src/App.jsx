import { connect } from 'react-redux';
import Stock from './components/Stock';
import './App.css'


//Créer stateNested
function App() {


  return (
    <>
      <Stock />


   
    </>
  )
}

export default connect()(App);
