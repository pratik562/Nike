import { ServiceCard } from "../Components";
import { services } from "../Constants";




// create a component
const Services = () => {
    return (
      <section className="flex max-container justify-center gap-9 flex-wrap">
        {services?.map((data)=>{
            return <ServiceCard
                key={data?.label} {...data}
            />
        })}
                
      </section>
    );
};


export default Services;
