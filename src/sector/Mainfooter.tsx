
import Logo from '../assets/logo-text.png'
const Mainfooter = () => {
    return (
        <div className="container mx-auto mt-16 mb-12 ">
                <div className='md:flex-row flex flex-col text-center md:text-start justify-center items-center md:justify-between   gap-10 mb-14'>
                
                    <div>
                        <img src={Logo} className=' mb-3 mx-auto md:mx-0 '/>
                        <p className='text-[#6B7280]'>Curated tools, technologies, and resources for developers building <br></br> modern software.</p>
                        <ul className='flex justify-center md:flex md:justify-start  gap-4 mt-3'>
                            <li className='text-[#6B7280]'><a href="https://github.com/">GitHub</a></li>
                            <li className='list-disc mx-2 md:mx-0 md:list-none text-[#6B7280]' ><a href="https://x.com/">Twitter</a></li>                        
                            <li className='list-disc mx-2 md:mx-0 md:list-none text-[#6B7280]' ><a href="https://bd.linkedin.com/">LinkedIn</a></li>
                        </ul>
                    </div>

                    <div className='hidden md:inline'>
                        <h1 className='font-bold '>PRODUCT</h1>
                      <div className='text-[#64748B] my-4.5'>
                        <p><a href="">Home</a></p>
                        <p><a href="">Technologies</a></p>
                        <p><a href="">Projects</a></p>
                      </div>
                    </div>

                    <div className='hidden md:inline'>
                        <h1 className='font-bold '>COMPANY</h1>
                      <div className='text-[#64748B] my-4.5'>
                        <p><a href="">About</a></p>
                        <p><a href="">Contact</a></p>
                        <p><a href="">Careers</a></p>
                      </div>
                    </div>

                    <div className='hidden md:inline'>
                        <h1 className='font-bold '>LEGAL</h1>
                      <div className='text-[#64748B] my-4.5'>
                        <p><a href="">Privacy Policy</a></p>
                        <p><a href="">Terms of Service</a></p>
                      </div>
                    </div>

                </div>

                  <div className='divider'></div>

                    <div className='p-8 text-[#94A3B8] flex justify-between '>
                      <p >© 2026 Dev Stack. All rights reserved.</p>
                      <div className='flex gap-2'>
                      <p><a href="">Terms</a></p>
                      <p><a href="">Privacy</a></p>
                   </div>
              </div>

        </div>
    );
};

export default Mainfooter;