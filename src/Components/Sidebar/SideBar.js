import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import LogoEdit from './ImgsSidebar/edit.svg'
import FolderIcon from './ImgsSidebar/folder.svg'
import Tools from './ImgsSidebar/settings.svg'
import Menu from './ImgsSidebar/menu.svg' 
import './Sidebar.css'
import SideNotes from '../SideNotes/SideNotes'

function SideBar() {

    const [checkWidth, setCheckWidth] = useState(window.innerWidth)

    const checkWidthFunc = () => {
        console.log(window.innerWidth)
        setCheckWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', checkWidthFunc)

        return () => {
            window.addEventListener('resize', checkWidthFunc)
        }
    },[])

    const [toggleNav, setToggleNav] = useState(false)

    const toggleNavFunc = () => {
        setToggleNav(!toggleNav)
    }

    return (
    <>
        {checkWidth < 900 && (
        <button onClick={toggleNavFunc} className="toggle-nav-btn">
            <img src={Menu} alt="menu-icon" />
        </button>
        )}
        <nav className={toggleNav ? "container-sidebar visible-nav"
            : 'container-sidebar'
        }>
            <div className="sidebar">
            
                <div className="three-dots">
                    <div className="dot-nav d-red"></div>
                    <div className="dot-nav d-yellow"></div>
                    <div className="dot-nav d-green"></div>
                </div>
                <ul>
                    <Link to="/">
                        <li>
                            <img src={FolderIcon} alt="logo-folder" />
                        </li>
                    </Link>
                    <Link to="/edit">
                        <li>
                            <img src={LogoEdit} alt="logo-edit" />
                        </li>
                    </Link>
                    <Link to="/">
                        <li>
                            <img src={Tools} alt="logo-tools" />
                        </li>
                    </Link>
                </ul>
            </div>

            <SideNotes/>
        </nav>
    </>
    )
}

export default SideBar
