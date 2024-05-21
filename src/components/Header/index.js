import { Link } from "react-router-dom";

import { RiHome4Fill } from "react-icons/ri";
import { MdOutlineExplore } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

import "./index.css"

const Header = () => (
    <div className="HeaderContainer">
        <Link to="/" className="link">
        <div className="HeaderItemContainer">
        <RiHome4Fill fontSize={26}/>
        <h1 className="home">Home</h1>
        </div>
        </Link>
        <Link to="/explore" className="link">
        <div className="HeaderItemContainer">
        <MdOutlineExplore  fontSize={26}/>
        <h1 className="home">Explore</h1>
        </div>
        </Link>
        <Link to="/bookmark" className="link">
        <div className="HeaderItemContainer">
        <FaRegBookmark fontSize={26}/>
        <h1 className="home">Bookmark</h1>
        </div>
        </Link>
        <Link to="/profile" className="link">
        <div className="HeaderItemContainer">
        <CgProfile fontSize={26}/>
        <h1 className="home">Profile</h1>
        </div>
        </Link>
    </div>
)

export default Header