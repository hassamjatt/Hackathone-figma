 import Link from 'next/link';
 import Image from 'next/image';
 import { FaUser } from "react-icons/fa";
 import { CiSearch } from "react-icons/ci";
import { GrFavorite } from "react-icons/gr";
 import { BsCart2 } from "react-icons/bs";



 const Navbar = () => {
   return (

     <div className='flex justify-center items-center gap-20 bg-orange-300 h-10'>
       <div className='flex'>
         <Image
           src="/logo.png"
           alt="LOGO"
           width="50"
           height="32"

         >

         </Image>


         <Image
           src="/text.png"
           alt="TEXT"
           width="130"
           height="41"

         >

         </Image>
       </div>
       <div>
         <ul className='flex justify-center gap-16'>
           <li>
             <Link href="/">Home</Link>          </li>
           <li>
             <Link href="/Shop">Shop</Link>
           </li>
           <li>
             <Link href="/Blog ">Blog</Link>
           </li>
           <li>
             <Link href="/Contact"> Contact</Link>
           </li>
           <li>
           <Link href="/Cart"> Cart</Link>
           </li>
           <li>
           <Link href="/Asgard-sofaa">product </Link>

           </li>
           <li>
           <Link href="/Checkout"> Checkout </Link>

           </li>        
           <li>
           <Link href="/Prouduct"> information</Link>

           </li>           

         </ul>
       </div>
       <div className='flex gap-16'>
       
         <FaUser />
         <CiSearch />
         <GrFavorite />
         <BsCart2/>
         

       </div>
     

    </div>
    
    
  );
 };

 export default Navbar;


