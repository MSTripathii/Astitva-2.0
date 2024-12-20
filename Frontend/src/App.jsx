
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import dog1 from './assets/dog1.png'
import dog2 from './assets/dog2.png'
import cat1 from './assets/cat1.png'
import Donate from './Components/Donate'
import Adopt from './Components/Adopt'
import AboutUs from './Components/AboutUs'
import Savings from './Components/Savings';
import Team from './Components/Team';
import Form from './Components/Form'
import Footer from './Components/Footer'
import { Analytics } from "@vercel/analytics/react"
import Shelters from './Components/Shelters'
import Login from './Authentication/Login'
import SignUp from './Authentication/SignUp'
import DefaultLayout from "./layouts/DefaultLayout";
import ProtectedLayout from "./layouts/ProtectedLayout";
import Chatbot from './Components/Chatbot'
import UserDashboard from './Components/Dashboard'
import Joincummunity from './Components/Joincummunity'
import Dashboardshelter from './Components/DashboardShelter'
import OwnerLogin from './Authentication/ownerlogin'
import OwnerSignup from './Authentication/ownersignup'
import AddShelterForm from './Components/Shelterform'

function App() {

  return (
    <>
  <Analytics />
  <Router>
    {/* Wrap everything in a flex container to push the footer to the bottom */}
    <div className="flex flex-col min-h-screen">
      
      {/* Navbar */}
      <Navbar />

      {/* Main content container, set it to flex-grow to take up available space */}
      <div className="md:my-10 flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/savings" element={<Savings />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/adopt" element={<Adopt />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/form" element={<Form />} />
          <Route path="/shelters" element={<Shelters />} />
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/dashboard' element={<UserDashboard/>}></Route>
          <Route path='/dashboardshelter' element={<Dashboardshelter/>}></Route>
          <Route path='/Joincummunity' element={<Joincummunity/>}></Route>
          <Route path="/ownerlogin" element={<OwnerLogin />} />
            <Route path="/ownersignup" element={<OwnerSignup />} />
            <Route path="/ShelterForm" element={<AddShelterForm />} />
          {/* Default Layout Routes */}
          <Route element={<DefaultLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>

          {/* <Route element={<ProtectedLayout />}>
            <Route path="/" element={<Home />} />
          </Route> */}
          
        </Routes>

        {/* Commented-out pages */}
        {/* <Home></Home>
        <Team></Team>
        <Savings></Savings>
        <Adopt></Adopt>
        <AboutUs></AboutUs> */}
      </div>
          <Chatbot></Chatbot>
      {/* Footer will stay at the bottom */}
      <Footer />
    </div>
  </Router>

  {/* Commented-out images */}
  {/* <img src={cat1} alt="cat1" className='lg:top-20 absolute hidden lg:inline-flex lg:ml-0 h-[300px] w-[300px]'/> */}
  {/* <img src={dog1} alt="dog1" className='bottom-0 -z-10 lg:right-20'/> */}
  {/* <img src={dog2} alt="dog2" className='lg:-left-32 lg:bottom-0 hidden lg:inline absolute -z-10'/> */}
  {/* <div className="hidden xl:inline-block rounded-full h-96 w-96 border border-teal-400 top-44 absolute left-[400px] -z-10"></div> */}
</>
  )
}

export default App
