function Header() {
    return (
        <header className="header">
            <div className="search-box">
                <input type="text" placeholder="Search your notes" />
            </div>

            <div className="header-actions">
                <button className="notification">
                    🔔
                </button>
                <div className="profile">
                    <span>👩🏻</span>
                    <p>My Profile</p>
                </div>
            </div>
        </header>
    )
}

export default Header;