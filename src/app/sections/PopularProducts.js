import { PopularProductCard } from "../Components";
import { products } from "../Constants";

// create a component
const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="font-palanquin font-bold text-4xl max-sm:text-[72px] max-sm:leading-[82px]">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="font-montserrat text-lg leading-8 mt-3 mb-16 lg:max-w-lg text-slate-gray">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>

        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
          {products?.map((item) => {
            return <PopularProductCard
             item={item}
            />
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
