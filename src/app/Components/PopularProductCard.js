import Image from "next/image"
import { star } from "../assets/icons"

const PopularProductCard = ({item}) => {

    return(
        <div className="flex flex-1 flex-col w-full max-sm:w-full">
            <Image
                src={item?.imgURL}
                className="w-[282px] h-[282px]"
            />
             <div className="mt-8 flex justify-start items-center gap-2.5">
                <Image src={star} className="h-8 w-8"/>
                <p className="font-montserrat text-slate-gray ml-3 text-lg">({item?.rating})</p>
             </div>
             <div>
             <p className="font-montserrat text-black mt-3 text-lg font-bold">{item?.name}</p>
             <p className="font-montserrat text-coral-red mt-3 text-lg">{item?.price}</p>
             </div>
        </div>
    )
}

export default PopularProductCard