
import Image from "next/image";

const ItemCard = ({ imageUrl, bigItemImg, chnageItemImage }) => {

    const handleClick = () => {
        if (imageUrl?.bigShoe && bigItemImg !== imageUrl.bigShoe) {
          chnageItemImage(imageUrl.bigShoe);
        }
      };
     
  return (
    <div
      className={`border-2 rounded-xl ${
        bigItemImg === imageUrl?.bigShoe ? "border-coral-red" : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick} 
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <Image
          src={imageUrl.thumbnail}
          alt="shoe colletion"
          width={127}
          height={103.34}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ItemCard;
