
import { Switch } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import { Route } from 'react-router-dom'


function App() {
  

  return (
    <>
    <Switch>
      <Route exact path="/" component={LandingPage}/>
    </Switch>
    </>
  )
}

export default App
