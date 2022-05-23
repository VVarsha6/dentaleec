/**
*
* PublicHealthCenter
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { connect,useSelector,useDispatch } from 'react-redux';
import { compose } from 'redux';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import './publicHealthCenterStyle.scss';

export default function PublicHealthCenter() {
useInjectReducer({ key: 'publicHealthCenter', reducer });
const dispatch = useDispatch();
const data = useSelector(state => get(state, 'data'));

return (
<div className="publicHealthCenter">
</div>
);
}

PublicHealthCenter.propTypes = {
};
