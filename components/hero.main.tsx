import Image from "next/image";

const Hero = () => {
    return (
        <>
            <div className="border border-white/30 rounded-lg h-60 grid md:grid-cols-3 grid-cols-1">
                <div className="border border-neutral-600 h-full">
                    <Image src={"/hello"} alt="car image" height={100} width={100} />
                </div>
                <div className="border border-neutral-600 h-full">
                    <Image src={"/hello"} alt="car image" height={100} width={100} />
                </div>
                <div className="border border-neutral-600 h-full">
                    <Image src={"/hello"} alt="car image" height={100} width={100} />
                </div>
            </div>
            <div>
                <p className="text-center uppercase decoration-amber-100 underline-offset-2">
                    We offer premium cars &amp; trusted service
                </p>
            </div>
            <div className="flex justify-center w-full mt-2">
            <button className="px-2 text-sm hover:text-black hover:bg-white transition-all duration-200 cursor-pointer
              rounded-full border border-white">
                Book a test drive
            </button>
            </div>
        </>
    )
}
export default Hero;