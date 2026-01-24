import Image from "next/image";

const Hero = () => {
    return (
        <>
        <div className="border border-white/30 rounded-lg grid md:grid-cols-3 grid-cols-1">
  <div className="relative border border-neutral-600 h-60">
    <Image
      src="/fronx.png"
      alt="car image"
      fill
      className="object-cover"
      sizes="(min-width: 768px) 33vw, 100vw"
    />
  </div>

  <div className="relative border border-neutral-600 h-60">
    <Image
      src="/fronx.png"
      alt="car image"
      fill
      className="object-cover"
      sizes="(min-width: 768px) 33vw, 100vw"
    />
  </div>

  <div className="relative border border-neutral-600 h-60">
    <Image
      src="/fronx.png"
      alt="car image"
      fill
      className="object-cover"
      sizes="(min-width: 768px) 33vw, 100vw"
    />
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