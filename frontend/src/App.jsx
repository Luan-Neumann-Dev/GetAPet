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
import Profile from './components/pages/User/Profile'
import MyPets from './components/pages/Pet/MyPets'
import AddPet from './components/pages/Pet/AddPet'
import EditPet from './components/pages/Pet/EditPet'
import PetDetails from './components/pages/Pet/PetDetails'
import MyAdoptions from './components/pages/Pet/MyAdoptions'

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
              <Route path='/user/profile' element={<Profile />} />
              <Route path='/pet/mypets' element={<MyPets />} />
              <Route path='/pet/add' element={<AddPet />} />
              <Route path='/pet/:id' element={<PetDetails />} />
              <Route path='/pet/edit/:id' element={<EditPet />} />
              <Route path='/pet/myadoptions' element={<MyAdoptions />} />
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
