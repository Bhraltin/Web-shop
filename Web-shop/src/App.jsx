
import { Switch } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import { Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'


function App() {
  

  return (
    <>
    <Switch>
      <Route exact path="/" component={LandingPage}/>
      <Route path="/login" component={LoginPage}/>
      <Route path="/register" component={RegisterPage}/>
    </Switch>
    </>
  )
}

export default App
