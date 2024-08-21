import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './Context/Usercontextprovider'

function App() {
  

  return (
    <UserContextProvider>
     <h1> Piyush chirote</h1>
     <Login />
     <Profile />
    </UserContextProvider>
  )
}

export default App
