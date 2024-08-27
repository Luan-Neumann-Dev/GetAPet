import { BrowserRouter, Routes, Route } from 'react-router-dom'

//COMPONENTS
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Container from './components/layout/Container'
import Message from './components/layout/Message'

//PAGES
import Home from './components/pages/Home'
import Register from './components/pages/Auth/Register'
import Login from './components/pages/Auth/Login'

//CONTEXT
import { UserProvider } from './context/UserContext'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider>
          <Navbar />
          <Message />
          <Container >
            <Routes>
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/' element={<Home />} />
            </Routes>
          </Container>
          <Footer />
        </UserProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
