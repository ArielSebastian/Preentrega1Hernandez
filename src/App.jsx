import Banner from "./components/Banner"
import './App.css'
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer"

function App() {

  return (
  <div>
    <NavBar/>
    <ItemListContainer saludo = "BIENVENIDO A MI E-COMMERCE"/>
    <Banner />
  </div>
  )
}

export default App
