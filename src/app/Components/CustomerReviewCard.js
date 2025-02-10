import Image from "next/image"
import { star } from "../assets/icons"

const CustomerReviewCard = ({
    imgURL,customerName,rating,feedback
}) => {
    return(
        <div className="flex justify-center items-center flex-col">
            <Image src={imgURL} className="h-40 w-40 rounded-full" alt="customer"/>

           <p className="info-text text-center mt-6 max-w-sm">{feedback}</p>
             <div className="mt-3 flex justify-start items-center gap-2.5">
                            <Image src={star} alt="rating" className="h-8 w-8"/>
                            <p className="font-montserrat text-slate-gray ml-3 text-lg">({rating})</p>
                         </div>
           <h3 className="mt-1 font-palanquin text-center text-3xl font-bold" >{customerName}</h3>
        </div>
    )
}

export default CustomerReviewCard