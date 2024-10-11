
import './App.css'
import Greet from './assets/Components/Greet'
import Greeting from './assets/DynamicContent/Greeting'
import ProductionInfo from './assets/DynamicContent/ProductionInfo'
import { WelcomeMessage } from './assets/JSX/WelcomeMessage'
import JSXRules from './assets/JSXRules/JSXRules'
import ProductList from './assets/ListofData/ProductList'
import UserList from './assets/ListofData/UserList'
import Footer from './assets/MultipleLines/Footer'
import Header from './assets/MultipleLines/Header'
import MainContent from './assets/MultipleLines/MainContent'
//import GreetComponents from './assets/1.Components/GreetComponents'

function App() {
  

  return (
    <>
     <Greet/>
     <WelcomeMessage/>
     <JSXRules/>
     <Footer/>
     <Header/>
     <MainContent/>
     <Greeting/>
     <ProductionInfo/>
     <ProductList/>
     <UserList/>

    </>
  )
}

export default App
