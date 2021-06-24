import React from 'react'
import './SideBar.css'

const Sidebar = (props) => {
    

    return (
        <div className={props.SidebarStyle.join(' ')}>
            <div className="barInside">
                <button className="btn" onClick={props.closeSidebar}>Закрыть</button>
            </div>
        </div>
    )
}

export default Sidebar