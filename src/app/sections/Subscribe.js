import { Button } from "../Components";

// create a component
const Subscribe = () => {
  return (
    <section
      id="subscribe"
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
    >
      <div className="flex flex-col justify-start">
            <h2 className="font-palanquin font-bold text-4xl max-sm:text-[72px] max-sm:leading-[82px]">
            Sign Up for <span className="text-coral-red">Updates</span> <br/>
            & Newsletter
            </h2>
      </div>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
            <input type="text" placeholder="subscribe@nike.com" className="input mr-3 font-palanquin text-[18px] py-3"/>
            <div className="flex max-sm:justify-end max-sm:w-full items-center">
            <Button label="subscribe" key={'subscribe'} fullwidth/>
            </div>
      </div>
    </section>
  );
};

export default Subscribe;
