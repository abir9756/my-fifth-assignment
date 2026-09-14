
import { ToastContainer } from 'react-toastify'
import Nav from './sector/Nav'
import HeroSection from './sector/HeroSection'
import { Suspense, useState } from 'react'
import TechnologiesComponent from './sector/TechnologiesComponent'
import Mainfooter from './sector/Mainfooter'





const CardPromis = async() =>{
    const res = await fetch("../public/jData.json");
    const data = await res.json();
    return data;
}



function App() {

    const [StackTechnologies, setStackTechnologies] = useState([])
    
  return (
    <>
    <Nav></Nav>
    <HeroSection></HeroSection>  
    <ToastContainer />

    <Suspense fallback={<h1 className='container mx-auto font-bold'> Loading Technologies....</h1>}>
  
    <TechnologiesComponent 
    CardPromis={CardPromis()}
     StackTechnologies={StackTechnologies}
      setStackTechnologies={setStackTechnologies}
    ></TechnologiesComponent>
    </Suspense>
      <Mainfooter></Mainfooter>
    </>
  )
}

export default App
