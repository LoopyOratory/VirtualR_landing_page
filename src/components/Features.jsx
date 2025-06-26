import { features } from "../constants";

export const Features = () => {
  return (
    <div className="relative border-b border-neutral-800 min-h-[800px] mt-20">
      <div className="text-center">
        <span className="rounded-full bg-neutral-900 text-orange-500 h-6 text-sm font-medium uppercase px-2 py-1">
          Features
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide ">
          Easily build{" "}
          <span className="text-transparent bg-gradient-to-r from-orange-500 to-orange-900 bg-clip-text">
            your code
          </span>{" "}
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full lg:w-1/3 sm:w-1/2">
            <div className="flex">
              <div className="flex h-10 mx-6 w-10 p-2 text-orange-700 bg-neutral-900 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl ">{feature.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
