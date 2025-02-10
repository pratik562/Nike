import Image from "next/image";
import { arrowRight } from "../assets/icons";
import { Button, SecondaryButton } from "../Components";
import { offer } from "../assets/images";

// create a component
const SpecialOffers = () => {
  return (
    <section className="flex max-container max-xl:flex-col-reverse items-center">
        <div className="flex">
            <Image src={offer} alt="offer" className="object-contain" height={687}/>
        </div>
      <div className="flex flex-col justify-start gap-5 sm:mb-14">
        <h2 className="font-palanquin font-bold text-4xl max-sm:text-[72px] max-sm:leading-[82px]">
             <span className="text-coral-red">Special</span>
             Offer
        </h2>
        <p className="info-text text-lg mt-3 lg:max-w-lg ">
        Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.
        </p>
        <p className="text-lg mt-3 mb-5 lg:max-w-lg info-text">
        Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional
        </p>
        <div className="flex gap-4">
          <Button label={"Shop Now"} key={"Shop Now"} iconUrl={arrowRight}/>
          <SecondaryButton label={"Learn More"} key={"Learn More"}/>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
