import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const Hero = props => (
  <header className={styles.component}>
    <h2 className={styles.title}>{ReactHtmlParser(props.titleText)}</h2>
    <img className={styles.image} src={props.image} alt="space"></img>
  </header>
);

Hero.propTypes = {
  titleText: PropTypes.node.isRequired, // definicja typu Propsa (node) z zaznaczeniem że jest on wymagany (ten komponent MUSI otrzymać daną wartość)
  titleImgUrl: PropTypes.string,
}

export default Hero;