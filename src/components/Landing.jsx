import { FaArrowUpLong } from "react-icons/fa6";
const Landing = () => {
  return (
    <div className="w-full h-screen bg-[#f1f1f1] py-1">
        <div className="heading mt-52">
            {["We create", "EYE-OPENING","presentations"].map((item,index)=>(
                 <div key={index} className="masker px-20">
                 <h1  className='text-9xl uppercase font-semibold leading-[7rem] tracking-tighter'>{item}</h1>
             </div>
            ))}
        </div>
        <div className='border-t-[1px] border-zinc-500 mt-36 flex justify-between py-5 px-20 '>
           {["For public and private companies","From the first pitch to IPO"].map((item,index)=>{
            return(
                <div key={index}>
                    <p className='font-normal text-xl capitalize '>{item}</p>
                </div>
            )
           })}
           <div className="start flex gap-3 items-center">
            <div className="button uppercase border-[1px] border-zinc-900 py-2 px-3 rounded-full tracking-wide font-semibold">Start the project</div>
            <div className="arrow border-[1px] border-zinc-900 flex items-center justify-center h-10 w-10 rounded-[50%]">
                <span className="rotate-[45deg]">
                <FaArrowUpLong/>
                </span>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Landing