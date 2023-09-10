import '../App.css';
import '../input.css';
import logo from './../icons/user.png';
import facebook from './../icons/facebook.png';
import instagram from './../icons/instagram.png';
import github from './../icons/github.png';


const Navbar = () =>{
    return (
        <div className="flex justify-between items-center ">
            <img src={logo} alt="logo" width={30} className="cursor-pointer"></img>
            <ul className="hidden md:flex">
                <li className="px-2">
                    <a href='https://www.facebook.com/teetonlp' target="_blank">
                        <img src={facebook} alt="facebook" width={30}></img>
                    </a>
                </li>
                
                <li className="px-2">
                    <a href="https://www.instagram.com/teety.kkk" target="_blank">
                        <img src={instagram} alt="instagram" width={30}></img>
                    </a>
                </li>
                <li className="px-2">
                    <a href="https://www.github.com/teetyk" target="_blank">
                        <img src={github} alt="github" width={30}>
                        </img>
                    </a>
                </li>


            </ul>
        </div>
    );
}

export default Navbar;