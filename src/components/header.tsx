import spaceship from "../assets/images/spaceship.png";
import bg from "../assets/images/freepik_bg.jpg";
import Navbar from '../components/navbar';
import "../styles.css";

function Header(): JSX.Element {
    return (
        <>
            <div id='home' style={{ backgroundImage: `url(${bg})` }} className=' bg-center bg-cover bg-no-repeat h-screen flex flex-col border-b-4 border-black'>
                <Navbar />
                <div className="wrapper flex justify-between items-center h-screen w-full px-20 
                    xl:mb-20 xl:px-8 
                    lg:mb-20 lg:px-8 lg:justify-center
                    md:mb-20 md:px-8 md:justify-center
                    sm:mb-20 sm:px-8 sm:justify-center
                    xs:mb-20 xs:px-8 xs:justify-center">
                    <div className="content 
                    lg:flex lg:flex-col lg:items-center
                    md:flex md:flex-col md:items-center
                    sm:flex sm:flex-col sm:items-center 
                    xs:flex xs:flex-col xs:items-center">
                        <div className="btn py-3 w-80 xs:w-60">
                            <button disabled className='text-2xl border-2 border-[#FFFFFF] font-bold text-white bg-[linear-gradient(90deg,#bf00a3,#000dff)] p-4 rounded-xl xs:text-base'>
                                Welcome to my Portfolio
                            </button>
                        </div>
                        <h1 className='text-white italic text-5xl font-bold
                        lg:text-black 
                        md:text-black
                        sm:text-4xl sm:text-black
                        xs:text-xl xs:text-black'>
                            I code all day, lift all night!
                        </h1>
                    </div>
                    <div className="image banner-spaceship absolute w-[200px] flex ">
                        <img className='w-96 ast-img' src={spaceship} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
