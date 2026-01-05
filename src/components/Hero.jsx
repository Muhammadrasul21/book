import hero from "../assets/hero.jpg"
const Hero = () => {
  return (
    <div>
      <div className="container mx-auto max-w-[1140px] p-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-philosopher font-bold text-[48px] w-[555px] leading-tight">
              Making time a good time by making food the good food.
            </h2>
            <p className="w-[555px] my-12">
              There are many things are needed to start the Fast Food Business.
              You need not only Just Food Stalls with Persons but also
              specialized equipment,
            </p>
            <div className="flex gap-8">
              <button className="w-[158px] h-11 cursor-pointer border border-[#DC780B] rounded-md text-[#DC780B] hover:bg-[#DC780B] hover:text-white transition-all duration-300 ease-in-out">
                Button Text
              </button>
              <button className="w-[158px] h-11 cursor-pointer border border-[#DC780B] rounded-md text-[#DC780B] hover:bg-[#DC780B] hover:text-white transition-all duration-300 ease-in-out">
                Food Details
              </button>
            </div>
          </div>
          <div>
            <img src={hero} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
