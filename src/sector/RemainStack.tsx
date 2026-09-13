import TechnologiesCard from './TechnologiesCard';

const RemainStack = ({technologies,countStack,StackTechnologies,setStackTechnologies}) => {
    return (
        <div>
            <div className=' grid grid-cols-3  gap-5  mt-6'>
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