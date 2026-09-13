
import {  RxCross1 } from 'react-icons/rx';

const RenderStack = ({ StackTechnologies, setStackTechnologies }) => {


    const removeTechnologies =(tech) =>{
         const restTech = StackTechnologies.filter(Tech=>Tech.name!==tech.name)
         setStackTechnologies(restTech)
    }

    return (
        <div>
            {
                StackTechnologies.map(tech =>{
                    return (
                    <div key={tech.id}>
                        <div className='border-2 p-2.5 border-[#E2E8F0] overflow-hidden rounded-xl flex justify-between items-center'>
                            <div className='flex gap-2'>
                                <div className='h-10 w-10  object-contain '>
                               
                                    <img src={tech.icon} alt={tech.name} />
                                   
                                </div>
                                <div>
                                    <h3 className='font-bold'>{tech.name}</h3>
                                    <h5 className='text-[#94A3B8] font-bold'>{tech.category}</h5>
                                </div>
                            </div>
                                <div>
                                    <span 
                                    onClick={()=>removeTechnologies(tech)}
                                    className=' text-[#94A3B8] text-2xl '>
                                    <RxCross1 />
                                    </span>
                                </div>
                        </div>
                      

                                
                    </div>
                          
                    )
                })
                
}    
        </div>
    );
};

export default RenderStack;