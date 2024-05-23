const Hero = () => {
  return (
    <div>
      <div className="w-full md:w-4/5 mx-auto p-3 my-10 sm:my-20">
        <img src="/task.png" alt="" className="float-right" />
        <p className="text-2xl sm:text-5xl font-semibold">
          Manage Your Daily Tasks <br /> More Efficiently
        </p>
        <small className="block text-sm my-3 max-w-80">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          optio neque earum sapiente laboriosam, pariatur aperiam, eum explicabo
          at
        </small>
        <div className="flex items-center gap-3">
          <button className="px-3 py-1 rounded-full bg-zinc-400 text-white shadow-md">
            Learn More
          </button>
          <button className="px-3 py-1 rounded-full bg-cyan-400 text-white shadow-md">
            Get Started
          </button>
        </div>

        <div className="w-fit mt-6">
          <p>We are supported by over 1000+ companies</p>
          <div className="grid grid-cols-3 gap-2">
            <div className="flex items-center gap-1">
              <i className="fa-brands fa-xbox"></i>
              <p>XBOX</p>
            </div>
            <div className="flex items-center gap-1">
              <i className="fa-brands fa-linkedin-in"></i>
              <p>LinkedIn</p>
            </div>
            <div className="flex items-center gap-1">
              <i className="fa-brands fa-spotify"></i>
              <p>Spotify</p>
            </div>
            <div className="flex items-center gap-1">
              <i className="fa-brands fa-deezer"></i>
              <p>Deezer</p>
            </div>
            <div className="flex items-center gap-1">
              <i className="fa-brands fa-brave"></i>
              <p>Brave</p>
            </div>
            <div className="flex items-center gap-1">
              <i className="fa-brands fa-squarespace"></i>
              <p>Squarespace</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white text-zinc-600 p-4 flex items-center gap-4 flex-wrap justify-around">
        <div className="grid gap-2 place-content-center">
          <p className="text-xl text-center font-semibold">140K</p>
          <p className="text-xs">Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="grid gap-2">
          <p className="text-xl text-center font-semibold">92%</p>
          <p className="text-xs">Lorem ipsum, dolor sit amet</p>
        </div>
        <div className="grid gap-2">
          <p className="text-xl text-center font-semibold">140K</p>
          <p className="text-xs">Lorem ipsum dolor sit.</p>
        </div>
        <div className="grid gap-2">
          <p className="text-xl text-center font-semibold">100%</p>
          <p className="text-xs">Lorem, ipsum dolor.</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
