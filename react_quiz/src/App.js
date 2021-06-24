import React, {Component} from 'react'
import Layout from './hoc/Layout/Layout'
import Quiz from './containers/Quiz/Quiz'
import Navbar from './components/Navbar'
import Sidebar from './components/SideBar'

export default class App extends Component {
  
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
    <div className="App">
      <Navbar 
      pushStyle={this.pushStyle}/>
      <Sidebar 
      SidebarStyle={this.state.SidebarStyle}
      closeSidebar={this.closeSidebar}/>
      <Layout >
        <Quiz />
      </Layout>
    </div>
  );
  }
}

