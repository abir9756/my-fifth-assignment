import { use, useState, type FC, type Dispatch, type SetStateAction } from 'react';
import RenderStack from './RenderStack';
import RemainStack from './RemainStack';
import { toast } from 'react-toastify';
import type { Technology } from '../types';

interface TechnologiesComponentProps {
  CardPromis: Promise<Technology[]>;
  StackTechnologies: Technology[];
  setStackTechnologies: Dispatch<SetStateAction<Technology[]>>;
}

const TechnologiesComponent: FC<TechnologiesComponentProps> = ({CardPromis, StackTechnologies, setStackTechnologies}) => {
  
    const [CountStack, setCountStack] = useState<Technology[]>([]);
    const technologies = use(CardPromis);
    console.log("CardPromis", technologies);

    const countStack = (alltech: Technology) => {
      
        const exist = CountStack.find(t => t.name === alltech.name);
         if(exist){
            const remainingStack = CountStack.filter(t => t.name !== alltech.name);
            setCountStack(remainingStack);
         }
         else{
            const newStack = [...CountStack, alltech];
            setCountStack(newStack);
         }

    }

      const removeAllTechnologies = () => {
        setStackTechnologies([]);
        setCountStack([]);
      
        toast.warning("Removed all from stack");
    }


    return (
<div>
        
    <div className='container mx-auto'>
        <div className='md:text-start flex justify-center md:justify-start items-center md:items-start gap-4 mb-2'>
                <p className='font-extrabold text-4xl'>Explore the </p>
                <p className='font-extrabold text-4xl bg-(image:--primary-gradient) bg-clip-text text-transparent'> Technologies</p>
        </div>

        <p className='text-[#475569] md:text-start flex justify-center md:justify-start items-center'>Pick one technology per category to build your ideal stack.</p>
        
        <div className='md:flex flex flex-col md:flex-row md:justify-between justify-center items-center md:items-start mt-6 gap-3 '>
            
         <div>
            <RemainStack technologies={technologies}   
            countStack={countStack} 
            StackTechnologies={StackTechnologies}
            setStackTechnologies={setStackTechnologies}
            ></RemainStack> 
       
       
        </div>
       

<div className="col-span-1 sticky top-17 z-10 card card-body bg-base-100 w-80 shadow-sm " >

    <div>
        {
            StackTechnologies.length===0? (
                <div>
                <h2 className='font-bold mb-1'>Your Stack</h2>
                <p className='text-[#475569] mb-1'> No technologies selected yet.</p>
                <p className='border-2 text-[#475569] border-gray-700 border-dotted overflow-hidden p-6 rounded-2xl flex justify-center items-center'>Your stack is empty.</p>
                </div>
            ):
            <div>
                <h2 className='font-bold'>Your Stack</h2>
                <p className='text-[#475569]'> {StackTechnologies.length} Technologies Selected </p>
                 <RenderStack StackTechnologies={StackTechnologies} setStackTechnologies={setStackTechnologies}></RenderStack> 

               <button
               onClick={()=>removeAllTechnologies()}
               className="btn btn-outline btn-error border rounded-md mt-10 w-full">Remove All</button>
            </div>
        }
      
     </div>
    </div>  
</div>

</div>
     <div className="divider my-17"></div>
</div>
    );
};

export default TechnologiesComponent;