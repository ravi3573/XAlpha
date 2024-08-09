import Image from "next/image";
import img2 from "../../public/xalpha_img.png"
export default function MainSection(){
    return (
      <div className="flex flex-col justify-center items-center text-center ">
        <div className="mt-12 md:mt-0">
            <p className=" font-semibold text-white   text-centere text-4xl py-8 md:py-16 md:text-5xl   leading-[50px] md:text-left md:leading-[30px] 2xl:text-5xl 2xl:leading-[70px]">
                <span className="my-4 leading-[60px]  flex justify-center text-center bg-gradient-to-r from-[#2c6dfd] to-[#73dffc] text-transparent bg-clip-text">
                Simply Use XAlpha
                </span>
                Your Shortcut To Market Success
            </p>  
        </div>
        <p className="text-base md:text-xl text-[#BCC9E4] my-12 md:my-4">Find the Trends, Be Early and Get Profit</p>
        <div className="mt-24 md:mt-12 ">
            <Image className=" w-650 h-450 transparent" src={img2} alt="Logo" />
        </div>
      </div>
    );
  };