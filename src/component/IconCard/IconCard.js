import React from 'react'

// css
import styles from './IconCard.module.css';


export default function IconCard(props) {
    return (
        <div className={styles.container}>
            <img src={props.src} alt="icon" />
            {/* <span>{props.title}</span> */}
        </div>
    )
}
