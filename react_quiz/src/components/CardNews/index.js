import React from 'react';
import PropTypes from 'prop-types';
import './styles.sass'

const CardNews = ({title, text, date}) => {
    return (
        <div className={'CardNews'}>
            <div className="row gy-3">
                <div className="col-12"><div className={'CardNews__title'}>{title}</div></div>
                <div className="col-12"><div className={'CardNews__text'}>{text}</div></div>
                <div className="col-12"><div className={"CardNews__date"}>{date}</div></div>
                <button className={'btn btn-dark'}>Подробнее</button>
            </div>
        </div>
    );
};

CardNews.propTypes = {

};

export default CardNews;