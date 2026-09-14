import type { FC, Dispatch, SetStateAction } from 'react';
import TechnologiesCard from './TechnologiesCard';
import type { Technology } from '../types';

interface RemainStackProps {
  technologies: Technology[];
  countStack: (alltech: Technology) => void;
  StackTechnologies: Technology[];
  setStackTechnologies: Dispatch<SetStateAction<Technology[]>>;
}

const RemainStack: FC<RemainStackProps> = ({
  technologies,
  countStack,
  StackTechnologies,
  setStackTechnologies,
}) => {
    return (
        <div>
            <div className=' grid grid-cols-  md:grid-cols-3 gap-5  mt-6'>
                {
                technologies.map(technologie=>
                
                <TechnologiesCard 
                key={technologie.id} 
                technologie={technologie} 
                countStack={countStack} 
                 StackTechnologies={StackTechnologies}
                setStackTechnologies={setStackTechnologies}
                 ></TechnologiesCard>)
                
                }
                
                
            </div>
        </div>
    );
};

export default RemainStack;