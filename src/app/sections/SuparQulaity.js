import Image from "next/image";
import { Button } from "../Components";
import { shoe8 } from "../assets/images";

// create a component
const SuperQulity = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between max-container max-sm:mt-12"
    >
      <div className="flex flex-col justify-start gap-5">
        <h2 className="font-palanquin font-bold text-4xl max-sm:text-[72px] max-sm:leading-[82px]">
          We Provide You <span className="text-coral-red">Super</span>
          <span className="text-coral-red"> Quality </span>
          Shoes
        </h2>
        <p className="info-text text-lg mt-3 lg:max-w-lg ">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="text-lg mt-3 mb-5 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div>
          <Button label={"View details"} key={"view details"} />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src={shoe8}
          alt="shoe8"
          width={570}
          height={570}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQulity;
