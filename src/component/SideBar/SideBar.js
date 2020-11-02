import React,{ useState } from 'react'
//css
import styles from './SideBar.module.css'

//icon
import CloseIcon from '@material-ui/icons/Close';

export default function SideBar(props) {
    
    
    return (
        props.isOpen ? 
            <div className={styles.container}>
                <div className={styles.sideBar}>
                    <h1>SideBar</h1>
                </div>
                <div className={styles.overlay__layer}></div>
                <CloseIcon className={styles.close__icon} />        
            </div>
        
            :
            <div></div>
         )
        
}
