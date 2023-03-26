import spaceship from "../assets/images/spaceship.png";
import bg from "../assets/images/freepik_bg.jpg";
import Navbar from '../components/navbar';
import "../styles.css";

function Header(): JSX.Element {
    return (
        <>
            <div id='home' style={{ backgroundImage: `url(${bg})` }} className=' bg-center bg-cover bg-no-repeat h-screen flex flex-col border-b-8 border-black'>
                <Navbar />
                <div className="wrapper flex justify-between items-center h-screen w-full px-20 lg:justify-center lg:px-6">
                    <div className="content lg:text-center">
                        <div className="btn py-3">
                            <button className=' border-2 border-[#b0aaaa] font-bold text-white bg-[linear-gradient(90deg,#bf00a3,#000dff)] p-4 rounded-2xl'>Welcome to my Portfolio</button>
                        </div>
                        <h1 className='text-white italic text-5xl font-bold'>I code all day, lift all night!</h1>
                    </div>
                    <div className="image banner-spaceship lg:hidden absolute w-[200px] flex ">
                        <img className='w-96 ast-img' src={spaceship} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
