import React, {Component} from 'react'
import  './Layout.sass'
import Navbar from '../../components/Navbar'
import SideBar from '../../components/SideBar'

class Layout extends Component {

    state = {
        SidebarStyle: ['Sidebar'],
        status: null,
      }
    
    
    pushStyle = () => {
    const isOpenSidebar = ['Sidebar', 'open']

    this.setState({
        SidebarStyle: isOpenSidebar,
    })
    }

    closeSidebar = () => {
    console.log('closeSidebar')
    const isCloseSidebar = ['Sidebar']

    this.setState({
        SidebarStyle: isCloseSidebar,
    })
    }
    

    render() {
        return (
            <div className="Layout">
                <Navbar   
                    pushStyle={this.pushStyle}
                    SidebarStyle={this.state.SidebarStyle}
                    closeSidebar={this.closeSidebar}/>
                <SideBar 
                    SidebarStyle={this.state.SidebarStyle}
                    closeSidebar={this.closeSidebar}/>
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout