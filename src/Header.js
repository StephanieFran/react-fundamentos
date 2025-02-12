import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { ThemeContext } from './ThemeContext';

import styles  from './Header.scss';

export default function Header(props) {
    const { onToggleTheme } = useContext(ThemeContext);

    return (
        <>
            <h1 className={styles.title}>{ props.title }</h1>
            <Button onClick={onToggleTheme}>
                Mudar tema
            </Button>
            { props.children }
            <hr/>
        </>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
};

Header.defaultProps = {
    title: `Cecília's Blog`,
};