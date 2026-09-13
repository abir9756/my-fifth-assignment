
import Banner from "../assets/banner-stack.png"   
const HeroSection = () => {


  

    return (<>
        
    <div className='container mx-auto my-24  flex justify-between items-center'>
            <div>
                <p className='font-extrabold text-6xl'> Build Your Ideal</p>
                <p className='pb-6  font-extrabold text-6xl bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent'>Development Stack</p>
                <p className='pb-10 text-[#475569]'>Explore frontend, backend, database, and tooling options,<br></br>
                compare them side by side, and put together the stack that fits your<br></br>
                next project.</p>
            <div className='pt-3 flex gap-4'>
                <button className="btn rounded-md text-white  bg-linear-to-r from-[#F97316] to-[#EC4899] ">Explore Technologies</button>
                <button className="btn rounded-md text-[#475569]">Learn More</button>
            </div>
            </div>
            <div>
                <img src={Banner} />
            </div>
            
    </div>
  
    </>
    );
};

export default HeroSection;