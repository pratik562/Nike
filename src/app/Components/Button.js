import Image from "next/image";

const Button = ({ lable, iconUrl }) => {
  return (
    <button className="flex bg-coral-red 
    justify-center 
    px-7 
    py-4 
    rounded-full 
    text-white 
    font-montserrat 
    leading-normal
    border
    border-coral-red
    "
    >
      {lable}

      <Image
        src={iconUrl}
        alt="arrow right icon"
        height={20}
        width={20}
        className="ml-2 rounded-full"
      />
    </button>
  );
};

export default Button;
