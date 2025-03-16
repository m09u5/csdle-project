import { Link } from "react-router-dom";
import '../assets/styles.css'
export function HomePage(){
    return (
        <>
         <div class= "homepagelinks">
            <img src="src/assets/noimage.png" alt="" />
            <Link to="/classic">Classic Mode</Link>
         </div>
         <div class= "homepagelinks">
            <img src="src/assets/noimage.png" alt="" />
            <Link to="/freeplay">Freeplay</Link>
         </div>
         <div class= "homepagelinks">
            <img src="src/assets/noimage.png" alt="" />
            <Link to="/skinbook">Skinbook</Link>
         </div>
        </>
      )
}