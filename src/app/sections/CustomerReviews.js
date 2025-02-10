
import { CustomerReviewCard } from "../Components";
import { reviews } from "../Constants";

const CustomerReviews = () => {
  return (
    <section className="flex justify-center items-center flex-col">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="font-palanquin font-bold text-4xl max-sm:text-[72px] max-sm:leading-[82px]">
          What Our <span className="text-coral-red">Customers </span>
          Say?
        </h2>
        <p className="info-text m-auto mt-4 max-w-lg text-center">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
      </div>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14 ">
            {reviews?.map((data)=>{
                return <CustomerReviewCard key={data?.customerName} {...data}/>
            })}
      </div>
    </section>
  );
};

export default CustomerReviews;
