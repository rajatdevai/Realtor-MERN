import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './Components/Header.jsx'
import './App.css'
import Home from './pages/Home.jsx'
import SignIn from './pages/SignIn.jsx'
// import SignOut from './pages/SignOut'
import SignUp from './pages/SignUp.jsx'
import Profile from './pages/Profile.jsx'
import About from './pages/About.jsx'

function App() {
  

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/sign-in" element={<SignIn/>}/>
      <Route path="/sign-up" element={<SignUp/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
