import React from 'react'
import Layout from '../hoc/Layout/Layout'
import {connect} from "react-redux";


const Home = () => {
    // console.log('Home', this.props)

    return(
        <Layout>
            <div style={{display:'flex', justifyContent: 'center', alignItems:'center'}}>
                <div>
                    <h1 style={{marginTop:100}}>Главная страница</h1>
                    <br/>
                    <h3>Счетчик: {_ => _}</h3>

                </div>
            </div>
        </Layout>
    )
}

function makeStateGreatAgain(state) {
    return {
        counter: state.counter,
    }
}


export default connect(makeStateGreatAgain)(Home)