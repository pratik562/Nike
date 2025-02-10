import Image from "next/image";

const Button = ({ label = "Click Me", iconUrl = null,fullwidth }) => {
  return (
    <button
      className={`flex items-center justify-center px-7 py-4 rounded-full 
      bg-coral-red text-white font-montserrat leading-normal 
      border border-coral-red transition-all duration-300 hover:opacity-80 ${fullwidth && "w-full"}`}
    >
      {label}
      {iconUrl && (
        <Image
          src={iconUrl}
          alt="icon"
          height={20}
          width={20}
          className="ml-2 rounded-full"
        />
      )}
    </button>
  );
};

export default Button;
