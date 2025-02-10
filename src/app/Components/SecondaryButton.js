import Image from "next/image";

const SecondaryButton = ({ label = "Click Me", iconUrl = null }) => {
  return (
    <button
      className="flex items-center justify-center px-7 py-4 rounded-full 
       text-slate-gray font-montserrat leading-normal 
      border border-slate-gray transition-all duration-300 hover:opacity-80 hover:bg-slate-100"
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

export default SecondaryButton;
