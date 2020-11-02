import React from 'react'
//css
import styles from './Button.module.css';

//icon
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export default function Button(props) {
    return (
        <div className={styles.button__container}>
            <props.icon className={styles.front__icon} />
            <span>{props.title}</span>
            {props.dropDown ?
                <div className={styles.dropdown_button}>
                    {/* <ArrowDropUpIcon className={styles.iconUp} /> */}
                    <ArrowDropDownIcon className={styles.iconDown} />
                 </div>
            : ''}
        </div>
    )
}
