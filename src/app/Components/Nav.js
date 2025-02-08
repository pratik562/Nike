import Image from "next/image";
import { headerLogo } from "../assets/images";
import { navLinks } from "../Constants";
import { hamburger } from "../assets/icons";


// create a component
const Nav = () => {
    return (
        <header className="padding-x absolute z-10 w-full py-8">
            <nav className="flex justify-between items-center max-container"> 
                <a href="/">
                    <Image 
                    src={headerLogo}
                    alt="Logo"
                    width={130}
                    height={29} 
                    />
                </a>
                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                    {navLinks.map((item)=>{
                        return(
                            <li key={item?.label}>
                                <a href={item?.label}
                                className="font-montserrat leading-normal text-lg text-slate-gray"
                                >
                                    {item?.label}
                                </a>
                            </li>
                        )
                    })}
                </ul>

                <div className="hidden max-lg:block">
                    <Image
                        src={hamburger}
                        alt="hamburger"
                        height={25}
                        width={25}
                    />
                </div>
            </nav>
        </header>
    );
};


export default Nav;
