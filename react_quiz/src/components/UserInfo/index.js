import React, {useState} from 'react';
import PropTypes from 'prop-types';


// Icons
import {ReactComponent as IconArrowDown} from '../../img/icon-arrow-down.svg';
import {ReactComponent as IconPerson} from '../../img/icon-person.svg';

import './styles.sass';
import Collapsible from "react-collapsible";


const UserInfo = ({user = false, onClick}) => {

    const [isOpenInfo, setUserInfo] = useState(false)

    const classCollapse = ['UserInfo__name']
    if (isOpenInfo) {
        classCollapse.push('UserInfo__name-is-open')
    }

    return (
        <>
            {user ? (
                <>
                    <div className={'UserInfo__wrapper'}>
                        <div className={'UserInfo UserInfo__auth'}>
                            <div className='UserInfo__base'>
                                <div className='UserInfo__left'>
                                    <button className='UserInfo__btn-collapse' onClick={() => setUserInfo(!isOpenInfo)}>
                                        <IconArrowDown/>
                                    </button>
                                    <div className={classCollapse.join(" ")}>
                                        {`${
                                            user.first_name
                                        } ${user.last_name.charAt(0)}.`}
                                    </div>
                                </div>
                                <div className='UserInfo__avatar'>
                                    <IconPerson/>
                                </div>
                            </div>
                            <div className='UserInfo__collapse'>
                                <Collapsible open={isOpenInfo} transitionTime={200}>
                                    <p>
                                        This is the collapsible content. It can be any element or React
                                        component you like.
                                    </p>
                                    <p>
                                        It can even be another Collapsible component. Check out the next
                                        section!
                                    </p>
                                </Collapsible>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <button className='UserInfo__login' onClick={onClick}>
                    Войти
                </button>
            )}
        </>
    );
};

UserInfo.propTypes = {};

export default UserInfo;