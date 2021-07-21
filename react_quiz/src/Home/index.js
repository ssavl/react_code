import React, {useEffect, useState} from 'react'
import Layout from '../hoc/Layout/Layout'
import {connect} from "react-redux";
import Collapsible from "react-collapsible";

// Actions
import { setNews } from '../action/news'

// Components
import CardNews from "../components/CardNews";

import './styles.sass'

// Utils
import { JsonCall } from '../util/apiCall'
import Button from "../components/Button";

const Home = ({news, setNews, counter}) => {

    const [openCollapse, setCollapse] = useState(false)

    const newsApi = JsonCall()

    const getNews = () => {
        newsApi.then(data => {
            console.log(data)
            setNews(data.data)
        })
    }

    useEffect(() => {
        getNews()
    },[])


    return (
        <Layout>
            <div className={'container'}>
                <div className={'row'}>
                    <div className="col-4">
                        <h1 style={{marginTop: 100}}>Главная страница</h1>
                        <br/>
                        <h3>Счетчик: {counter}</h3>
                        <Button label={"Add"} onClick={_=>_} />
                        <br/>
                        <Button label={"Sub"} onClick={_=>_} />
                    </div>
                    <div className="col-8">
                        <div className={'NewsTitle'}>
                            <h3>Новости</h3>
                            {news && news.articles ? (
                                <div className="row gx-3 gy-3">
                                    {news && news.articles && news.articles.map((item, i) => {
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
                            ) : <div>Новости недоступны</div>}
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

const mapStateToProps = (state) => ({
    news: state.newsReducer.news,
})


// function makeStateGreatAgain(state) ({
//         counter: state.counter,
//         news: state.newsReducer.news,
//     }
// )

// function mapDispatchToProps(dispatch) {
//     return {
//         onAdd: () => dispatch({type: 'ADD'}),
//         onSub: () => dispatch({type: 'SUB'}),
//         onNumber: (number) => dispatch({type: "ADD_NUMBER", value: number}),
//     }
// }

export default connect(mapStateToProps, {setNews})(Home)