import React, {useEffect, useState} from 'react'
import Layout from '../hoc/Layout/Layout'
import {connect} from "react-redux";
import {createStore} from 'redux'
import CardNews from "../components/CardNews";
import './styles.sass'
import { JsonCall } from '../utils/apiCall'

const Home = (props) => {

    const [stateData, setData] = useState([])



    useEffect(async () => {
        const data = await JsonCall();
        setData(data.data)
        console.log('stateData', stateData)
    },[])



    console.log('stateDatastateDatastateData', stateData)

    return (
        <Layout>
            <div className={'container'}>
                <div className={'row'}>
                    <div className="col-4">
                        <h1 style={{marginTop: 100}}>Главная страница</h1>
                        <br/>
                        <h3>Счетчик: {props.counter}</h3>
                        <button onClick={props.onAdd}>add</button>
                        <button onClick={props.onSub}>sub</button>
                    </div>
                    <div className="col-8">
                        <div className={'NewsTitle'}>
                            <h3>News</h3>
                            <div className="row gx-3 gy-3">
                                {stateData.articles && stateData.articles.map((item, i) => {
                                    return (
                                        <div className="col-6">
                                            <CardNews
                                                title={item.title}
                                                text={item.text}
                                                date={item.date}
                                                author={item.author}/>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">

                    </div>
                    <div className="col-6"></div>
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

function mapDispatchToProps(dispatch) {
    return {
        onAdd: () => dispatch({type: 'ADD'}),
        onSub: () => dispatch({type: 'SUB'}),
        onNumber: (number) => dispatch({type: "ADD_NUMBER", value: number}),
    }
}

export default connect(makeStateGreatAgain, mapDispatchToProps)(Home)