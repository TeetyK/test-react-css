import student from './icons/student.png';
import { useNavigate } from 'react-router-dom';
function LandingPage()
{
    const navigate = useNavigate();
    const handleToDetail = () =>{
        navigate("/details");
    };
    return (
        <div className="text-center">
            <p className="font-mono text-5xl font-bold uppercase">
            About me
            </p>
            <div className="flex justify-center">
            <img src={student} className="w-[20%] bg-white rounded-full p-6"/>
            </div>
            <p className="text-md mt-2 font-bold text-white md:mx-36">
            Hello , My full name is Phunyapat Panithiporn.lorem ipsum dolor sit amet lorem107 et ipsum
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia libero asperiores minima distinctio 
            ipsam non atque delectus at, corporis, aliquam laboriosam nam exercitationem veniam reprehenderit. Officia deserunt,
            repellendus eveniet minima dolorem iure incidunt quae ad illo voluptate, delectus recusandae minus maiores voluptatum 
            laboriosam ipsam optio ex iste nostrum! Dolore reprehenderit ducimus asperiores libero eius commodi, necessitatibus eligendi
             repudiandae quibusdam a iusto totam alias accusantium. Ipsum perspiciatis, tempora beatae quisquam officiis quod velit fuga 
             provident quidem veritatis, qui ducimus consectetur dicta libero omnis totam nulla alias optio amet. Dolores sapiente error 
             culpa atque quae, deserunt at quaerat consectetur vero harum! Beatae. <br/>
            </p> <bt/>
            <button className="text-[#f5f5dc] underline underline-offset-8 text-md font-bold" onClick={handleToDetail}>Next</button>
        </div>
    );
}

export default LandingPage;