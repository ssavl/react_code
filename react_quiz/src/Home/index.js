import React from 'react'
import Layout from '../hoc/Layout/Layout'

const Home = () => {
    return(
        <Layout>
            <div style={{display:'flex', justifyContent: 'center', alignItems:'center'}}>
                <div>
                    <h1 style={{marginTop:100}}>Главная страница</h1>
                </div>
            </div>
        </Layout>
    )
}

export default Home