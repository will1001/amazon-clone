import React, { useState,useEffect } from 'react';

// css
import styles from './RowGridContent.module.css';

// icon
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default function RowGridContent(props) {
    const [mode2, setMode2] = useState(false);
    
      useEffect(() => {
            // Update the document title using the browser API
            props.link.length === 0 ? setMode2(true) : setMode2(false);
        }, [props.link.length]);

    return (
        <div className={styles.row__container} style={ mode2 ? { margin: 0 } : { margin:'20px 20px' } }>
            {mode2 ? <hr/> : ''}
            <span className={mode2 ? styles.title__center : styles.title} >{props.title}</span>
            <a className={styles.link} href="#0">{mode2 ? '' : props.link}</a>
            <div className={styles.icon__container}>
                <ArrowBackIosIcon className={styles.icon__back} />
                <ArrowForwardIosIcon className={styles.icon__next}/>
            </div>
            <div className={styles.content}>
                {props.children}
            </div>
        </div>
    )
}
