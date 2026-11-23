import { NavLink } from "react-router";

function Sidebar() {
    return (
        <aside className="sidebar">
            <h2 className="logo">MY NOTES</h2>
            <div className="sidebar-menu">
                <h4>MAIN MENU</h4>
                
                <ul>
                    <li>
                        <NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>Dashboard</NavLink>
                    </li>
                    <li>All Notes</li>
                    <li>Favorites</li>
                    <li>Archived</li>
                </ul>
                <h4>OTHERS</h4>

                <ul>
                    <li>Trash</li>
                    <li>Settings</li>
                    <li>
                        <NavLink to="/about" className={({isActive}) => isActive ? "active" : ""}>About</NavLink>
                    </li>
                </ul>
            </div>
        </aside>
    );
}

export default Sidebar;