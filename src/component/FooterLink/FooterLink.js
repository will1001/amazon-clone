import React from 'react'
//css
import styles from './FooterLink.module.css'

export default function FooterLink(props) {
    return (
        <div className={styles.container}>
            <a href={props.href} className={styles.link}>
                <span className={styles.title}>{props.title}</span>
                <span className={styles.subTitle}>{props.subTitle}</span>
            </a>
        </div>
    )
}
