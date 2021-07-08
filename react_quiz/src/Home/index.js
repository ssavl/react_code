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
        console.log(data.data)
    },[])




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
                                <div className="col-6">
                                    <CardNews
                                        title={'Найденный на спутнике Сатурна Энцеладе метан может быть признаком жизни'}
                                        text={"На спутнике Сатурна Энцеладе обнаружили скопления метана. Это значит, что здесь может обитать жизнь. Астрономы обнаружили метановые скопления при помощи зонда Кассини-Гюйгенс."}
                                        date={'30.04.2021'}/>
                                </div>
                                <div className="col-6">
                                    <CardNews
                                        title={'В Китае создали квантовый компьютер на 56 кубитов мощнее, чем у Google'}
                                        text={'Группа китайских исследователей из университета науки и технологий создала программируемый квантовый компьютер, в основе которого лежат сверхпроводящие кубиты.'}
                                        date={'21.12.2020'}/>
                                </div>
                                <div className="col-6">
                                    <CardNews
                                        title={'Инженеры университета в Беркли создали робота в виде таракана, которого нельзя раздавить'}
                                        text={'В американском университете в Бёркли учеными-инженерами создан робот, напоминающий обычного таракана и с его же способностями, публикует Science Robotics.'}
                                        date={'13.04.2021'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        {stateData.map((item, i) => {
                            return (
                                <div>
                                    {item.title}
                                </div>
                            )
                        })}
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