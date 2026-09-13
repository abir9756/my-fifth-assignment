
import { useState } from 'react';

import Star from '../assets/Symbol.png'
import { Bounce, toast, ToastContainer } from 'react-toastify';
import { GiCheckMark } from 'react-icons/gi';




const TechnologiesCard = ({technologie,countStack,StackTechnologies,setStackTechnologies}) => {



    const [Added , setAdded] = useState(false)
            
        
    const HandleStak =() =>{
        if(Added){
            console.log(Added)
            toast.error("Already Added")
            return
        }
        
    countStack(technologie);
   
   setAdded(!Added)
    
   setStackTechnologies([...StackTechnologies, technologie]);

toast.success('Added to Stack', {
position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
});
    }

    
    
    
    return (<>


      
            <div className={`card bg-base-100 w-96 shadow-sm  ${Added?"border border-blue-700":""}`}>
          
                <div className="card-body">
                    <figure className=' relative  h-10 flex justify-between items-center  '>
                        <img
                            src={technologie.icon}
                            alt={technologie.name}
                            className="h-10 w-10  object-contain "/>
    
    
                        <div className="badge badge-soft badge-secondary  py-2 ">{technologie.badge}</div>
                    </figure>

                    <h2 className="card-title">{technologie.name}</h2>
                    <p>{technologie.description}</p>

                        
                    <div className="divider my-2"></div>

                    <div className='flex justify-between items-center '>

                        <span className=' rounded-2xl w-auto mr-10  bg-slate-100 text-[#4D4769]'>{technologie.category}</span>
                  
                        <p>{technologie.difficulty}</p>

                        <div className='flex items-center'>
                            <img className='w-2.5 h-2.5' src={Star} alt='' />
                            <p>{technologie.rating}</p>
                        </div>
                    </div>

                    <div className={`card-actions  justify-end `}>
                        <button
                        onClick={()=>HandleStak()}
                        // disabled={Added}
                        className={`btn border rounded-md                           
                         ${Added? "border-blue-700":""}
                        ${Added? "bg-blue-100":"bg-black"} 
                        ${Added? "text-blue-600 ":"text-white "}  w-full
                        `}>{Added?  (<span className="flex items-center justify-center gap-2"><GiCheckMark />Added to  Stack</span>):("Add to Stack")}</button>
                        
                    </div>
                </div>
            </div>      
  </>    
    );
};

export default TechnologiesCard;