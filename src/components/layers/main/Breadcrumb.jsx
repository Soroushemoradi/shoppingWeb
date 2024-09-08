import { Link } from "react-router-dom";

function Crumb() {
    const navs=[
        {
            text:"chairs",
            link:"/chairs"
        },
        {
            text:"decors",
            link:"/decors"
        },
        {
            text:"tables",
            link:"/tables"
        },
        {
            text:"lights",
            link:"/lights"
        },

    ]
  return (
    <>
    <div className="crumbDiv">
    <nav className='w-100 '>
        <ul className="nav justify-content-center">
{
    navs.map(({text,link})=><><li className="nav-item bread"><Link to={link} className="nav-link text-muted ">{text}<span className="ms-3">/</span></Link></li></>)
}
        </ul>
    </nav>
    </div>
    </>
  );
}
export default Crumb
