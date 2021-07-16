import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Modal from "../components/Modal";
import { closeModal } from '../action/auth'
import { connect } from "react-redux";

const CreateUserModalContainer = ({auth, closeModal}) => {

    // const [modalIsOpen, setModal] = useState(false)
    //
    // const testHandler = () => {
    //     console.log('Консоль лог')
    // }

    return (
        <>
            {/*<Modal onClose={modalIsOpen}*/}
            {/*       title={'Тестовая модалка'}*/}
            {/*       children={'Тестовый текст'}*/}
            {/*       confirmBtn={'Вывести в консоль лог'}*/}
            {/*       onConfirm={() => testHandler}*/}
            {/*/>*/}
        </>
    );
};

CreateUserModalContainer.propTypes = {

};

const mapStateToProps = (state) => ({
    auth: state.authReducer
})

export default connect(mapStateToProps, {
    closeModal,
})(CreateUserModalContainer);