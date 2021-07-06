import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {onSub, onAdd, onAddInput, onChangeInput} from './actions'


const Counter = props => {

    const handleChange = (event) => {
        props.onChangeInput(event.target.value)
    }

    return (
            <div>
                <div style={{padding: 20, border: '1px solid #ccc', marginTop: 100}}>
                    <h1>Счетчик {props.counter} </h1>
                    <input onChange={(event) => props.onChangeInput(event.target.value)} value={props.input} type="text"/>
                    <button onClick={props.onAddInput}>Добавить число</button>
                    <button onClick={props.onAdd}>Добавить</button>
                    <button onClick={props.onSub}>Вычесть</button>
                </div>
            </div>
    );
};


const mapStateToProps = (state) => {
    return {
        counter: state.asd.counter,
        input: state.asd.input,

    }
}


Counter.propTypes = {};

export default connect(mapStateToProps, {onAdd, onSub, onAddInput, onChangeInput})(Counter);