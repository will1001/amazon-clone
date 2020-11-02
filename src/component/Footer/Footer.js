import React from 'react'

//css 
import styles from './Footer.module.css'

// component
import Button from '../Button/Button';
import FooterLink from '../FooterLink/FooterLink';

//icon
import LanguageIcon from '@material-ui/icons/Language';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';


export default function Footer() {
    return (
        <>
            <div className={styles.top__footer}>
                <div className={styles.top__container}>
                    <div className={styles.text__column}>
                        <h5>Get to Know Us</h5>
                        <ul>
                            <li>Careers</li>
                            <li>Blog</li>
                            <li>About Amazon</li>
                            <li>Investor Relations</li>
                            <li>Amazon Devices</li>
                            <li>Amazone Tours</li>
                        </ul>
                    </div>
                    <div className={styles.text__column}>
                        <h5>Make Money with Us</h5>
                        <ul>
                            <li>Careers</li>
                            <li>Blog</li>
                            <li>About Amazon</li>
                            <li>Investor Relations</li>
                            <li>Amazon Devices</li>
                            <li>Amazone Tours</li>
                        </ul>
                    </div>
                    <div className={styles.text__column}>
                        <h5>Get to Know Us</h5>
                        <ul>
                            <li>Careers</li>
                            <li>Blog</li>
                            <li>About Amazon</li>
                            <li>Investor Relations</li>
                            <li>Amazon Devices</li>
                            <li>Amazone Tours</li>
                        </ul>
                    </div>
                    <div className={styles.text__column}>
                        <h5>Get to Know Us</h5>
                        <ul>
                            <li>Careers</li>
                            <li>Blog</li>
                            <li>About Amazon</li>
                            <li>Investor Relations</li>
                            <li>Amazon Devices</li>
                            <li>Amazone Tours</li>
                        </ul>
                    </div>
                </div>
                <hr/>
                <div className={styles.bottom__container}>
                    <img src="https://onlinebusinessmanager.com/wp-content/uploads/2018/09/white-amazon-logo-png-6.png" alt="logo" />
                    <Button icon={LanguageIcon} title={'English'} dropDown={true}/>
                    <Button icon={AttachMoneyIcon} title={'USD - U.S. Dollar'}/>
                    <Button icon={AttachMoneyIcon} title={'United States'}/>
                    
                </div>
            </div>
            <div className={styles.bottom__footer}>
                <div className={styles.row}>
                    <FooterLink href={'#0'} title={'Amazon Music'} subTitle={'Stream millions of songs'} />
                    <FooterLink href={'#0'} title={'Amazon Music'} subTitle={'Stream millions of songs'} />
                    <FooterLink href={'#0'} title={'Amazon Music'} subTitle={'Stream millions of songs'} />
                    <FooterLink href={'#0'} title={'Amazon Music'} subTitle={'Stream millions of songs'} />
                    <FooterLink href={'#0'} title={'Amazon Music'} subTitle={'Stream millions of songs'} />
                    <FooterLink href={'#0'} title={'Amazon Music'} subTitle={'Stream millions of songs'} />
                    <FooterLink href={'#0'} title={'Amazon Music'} subTitle={'Stream millions of songs'} />
                </div>
                <div className={styles.row}>
                    <FooterLink href={'#0'} title={'Amazon Music'} subTitle={'Stream millions of songs'} />
                    <FooterLink href={'#0'} title={'Amazon Music'} subTitle={'Stream millions of songs'} />
                    <FooterLink href={'#0'} title={'Amazon Music'} subTitle={'Stream millions of songs'} />
                    <FooterLink href={'#0'} title={'Amazon Music'} subTitle={'Stream millions of songs'} />
                    <FooterLink href={'#0'} title={'Amazon Music'} subTitle={'Stream millions of songs'} />
                    <FooterLink href={'#0'} title={'Amazon Music'} subTitle={'Stream millions of songs'} />
                    <FooterLink href={'#0'} title={'Amazon Music'} subTitle={'Stream millions of songs'} />
                </div>
                <div className={styles.row}>
                    <FooterLink href={'#0'} title={'Amazon Music'} subTitle={'Stream millions of songs'} />
                    <FooterLink href={'#0'} title={'Amazon Music'} subTitle={'Stream millions of songs'} />
                    <FooterLink href={'#0'} title={'Amazon Music'} subTitle={'Stream millions of songs'} />
                    <FooterLink href={'#0'} title={'Amazon Music'} subTitle={'Stream millions of songs'} />
                    <FooterLink href={'#0'} title={'Amazon Music'} subTitle={'Stream millions of songs'} />
                    <FooterLink href={'#0'} title={'Amazon Music'} subTitle={'Stream millions of songs'} />
                    <FooterLink href={'#0'} title={'Amazon Music'} subTitle={'Stream millions of songs'} />
                </div>
                <div className={styles.row}>
                    <FooterLink href={'#0'} title={'Amazon Music'} subTitle={'Stream millions of songs'} />
                    <FooterLink href={'#0'} title={'Amazon Music'} subTitle={'Stream millions of songs'} />
                    <FooterLink href={'#0'} title={'Amazon Music'} subTitle={'Stream millions of songs'} />
                    <FooterLink href={'#0'} title={'Amazon Music'} subTitle={'Stream millions of songs'} />
                    <FooterLink href={'#0'} title={'Amazon Music'} subTitle={'Stream millions of songs'} />
                    <FooterLink href={'#0'} title={'Amazon Music'} subTitle={'Stream millions of songs'} />
                    <FooterLink href={'#0'} title={'Amazon Music'} subTitle={'Stream millions of songs'} />
                </div>
                <div className={styles.row}>
                    <FooterLink href={'#0'} title={'Amazon Music'} subTitle={'Stream millions of songs'} />
                    <FooterLink href={'#0'} title={'Amazon Music'} subTitle={'Stream millions of songs'} />
                    <FooterLink href={'#0'} title={'Amazon Music'} subTitle={'Stream millions of songs'} />
                    <FooterLink href={'#0'} title={'Amazon Music'} subTitle={'Stream millions of songs'} />
                    <FooterLink href={'#0'} title={'Amazon Music'} subTitle={'Stream millions of songs'} />
                    <FooterLink href={'#0'} title={'Amazon Music'} subTitle={'Stream millions of songs'} />
                    <FooterLink href={'#0'} title={'Amazon Music'} subTitle={'Stream millions of songs'} />
                </div>

                <div className={styles.footer__note}>
                    <a href="#0">Conditions of Use</a>
                    <a href="#0">Privacy Notice</a>
                    <a href="#0">Interest-Based Ads</a>
                    <span>© 1996-2020, Amazon.com, Inc. or its affiliates</span>
                </div>
            </div>
        </>
    )
}
