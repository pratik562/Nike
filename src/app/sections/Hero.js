"use client";

// create a component
import { Button, ItemCard } from "../Components";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../Constants";
import Image from "next/image";
import { bigShoe1 } from "../assets/images";
import { useState } from "react";

const Hero = () => {

    const [bigItmImg,setBigItemImg] = useState(bigShoe1)


  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
        <p className="text-xl text-coral-red font-montserrat">
          Our summer collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white relative z-10 pr-10 xl:whitespace-nowrap">
            The new Arrival
          </span>{" "}
          <br /> <span className="text-coral-red inline-block mt-3">Nike</span>
          Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-16 sm:max-w-sm">
          Discover stylish Nike arrivals, quality <br /> comfort, and innovation
          for your active life.
        </p>

        <Button lable={"Shop Now"} iconUrl={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((value, index) => {
            return (
              <div key={value?.label} className="font-montserrat ">
                <p className="text-4xl font-palanquin font-bold">
                  {value?.value}
                </p>
                <p className="leading-7 text-1xl text-slate-gray">
                  {value?.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
            <Image
                src={bigItmImg}
                alt='shoe colletion'
                width={610}
                height={502}
                className='object-contain relative z-10'
            />

            <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
                    {shoes.map((item)=>{
                        return(
                            <div
                            key={item}
                            >
                                <ItemCard
                                    imageUrl={item}
                                    chnageItemImage={(i)=>{
                                        console.log(i)
                                        setBigItemImg(i)
                                    }}
                                    bigItemImg={bigItmImg}
                                />
                            </div>
                        )
                    })}
            </div>
        </div>
    </section>
  );
};

export default Hero;
