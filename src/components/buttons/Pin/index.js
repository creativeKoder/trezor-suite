import React from 'react';

import { FONT_SIZE, FONT_WEIGHT } from 'config/variables';

import PropTypes from 'prop-types';
import colors from 'config/colors';
import styled from 'styled-components';

const Wrapper = styled.button`
    width: 80px;
    height: 80px;
    margin-top: 15px;
    margin-left: 10px;
    font-size: ${FONT_SIZE.BIGGER};
    font-weight: ${FONT_WEIGHT.SEMIBOLD};
    color: ${colors.TEXT_PRIMARY};
    border: 1px solid ${colors.DIVIDER};
    background: ${colors.WHITE};
    transition: all 0.3s;

    &:first-child {
        margin-left: 0px;
    }

    &:hover {
        color: ${colors.TEXT_PRIMARY};
        background-color: ${colors.WHITE};
        border-color: ${colors.TEXT_SECONDARY};
    }

    &:active {
        color: ${colors.TEXT_PRIMARY};
        background: ${colors.DIVIDER};
        border-color: ${colors.DIVIDER};
    }
`;

const ButtonPin = ({ children, onClick }) => (
    <Wrapper onClick={onClick}>
        { children }
    </Wrapper>
);

ButtonPin.propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

export default ButtonPin;