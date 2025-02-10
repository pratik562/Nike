import Image from "next/image"
import { star } from "../assets/icons"

const PopularProductCard = ({imgURL,rating,name,price}) => {

    return(
        <div className="flex flex-1 flex-col w-full max-sm:w-full">
            <Image
                src={imgURL}
                alt={name}
                className="w-[282px] h-[282px]"
            />
             <div className="mt-8 flex justify-start items-center gap-2.5">
                <Image src={star} alt="rating" className="h-8 w-8"/>
                <p className="font-montserrat text-slate-gray ml-3 text-lg">({rating})</p>
             </div>
             <div>
             <p className="font-montserrat text-black mt-3 text-lg font-bold">{name}</p>
             <p className="font-montserrat text-coral-red mt-3 text-lg">{price}</p>
             </div>
        </div>
    )
}

export default PopularProductCard