import { Link } from "react-router-dom";


export function HomePage(){
    return (
        <>
         <div>
            <Link to="/classic">Classic Mode</Link>
            <Link to="/freeplay">Freeplay</Link>
            <Link to="/skinbook">Skinbook</Link>
         </div>
        </>
      )
}