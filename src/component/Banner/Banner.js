import React from 'react'

//Material ui component
import Grid from '@material-ui/core/Grid';

// css
import styles from './Banner.module.css';

//Component
import Card from '../Card/Card';

//images
import bannerImg from './img/bannerimg.jpg';
    
// icon
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


export default function Banner() {
    return (
        <div className={styles.banner}>
            <img className={styles.banner__slide__img} src={bannerImg} alt="banner-img" />
            <div className={styles.overlay__box}></div>
            <div className={styles.icon__container}>
                <ArrowBackIosIcon className={styles.icon__back} />
                <ArrowForwardIosIcon className={styles.icon__next}/>
            </div>
            <div className={styles.card__list__menu}>
                <Grid container>
                    <Card
                        title={'asdf'}
                        images={
                            [
                                {
                                    src: 'https://m.media-amazon.com/images/G/01/HUD/Dashboard/ProfileCard/orders._AC_SR120,80_.png',
                                    href: '#0',
                                    title: 'your Orders'
                                },
                                {
                                    src: 'https://m.media-amazon.com/images/G/01/HUD/Dashboard/ProfileCard/172282._AC_SR120,80_.png',
                                    href: '#0',
                                    title: 'electronics'
                                },
                                {
                                    src: 'https://m.media-amazon.com/images/G/01/HUD/Dashboard/ProfileCard/541966._AC_SR120,80_.png',
                                    href: '#0',
                                    title: 'Computers & Accessories'
                                },
                                {
                                    src: 'https://m.media-amazon.com/images/G/01/HUD/Dashboard/ProfileCard/2619525011._AC_SR120,80_.pn',
                                    href: '#0',
                                    title: 'Home & Kitchen'
                                }
                            ]
                        }
                    />
                    <Card
                        title={'Recently viewed'}
                        images={
                            [
                                {
                                    src: 'https://m.media-amazon.com/images/I/31jBnwWr91L._AC_SL260_.jpg',
                                    href: '#0',
                                }
                            ]
                        }
                        link={'See your browsing history'}
                    />
                    <Card 
                        title={'Deals & Promotions'} 
                        images={
                            [
                                {
                                    src: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Deals_1x._SY304_CB430401028_.jpg',
                                    href: '#0',
                                }
                            ]
                        }
                        link={'Shop now'}
                    />
                    <Card 
                        title={'Start on your holiday list early'} 
                        images={
                            [
                                {
                                    src: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg',
                                    href: '#0',
                                }
                            ]
                        }
                        link={'Shop now'}
                    />
                    <Card 
                        title={'AmazonBasics'}
                        images={
                            [
                                {
                                    src: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg',
                                    href: '#0',
                                }
                            ]
                        }
                        link={'See more'}
                     />
                    <Card 
                        title={'Shop by Category'} 
                        images={
                            [
                                {
                                    src: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/computer120x._SY85_CB468850970_.jpg',
                                    href: '#0',
                                    title: 'Computers & Accessories'
                                },
                                {
                                    src: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/August/DashboardCard/PS4_120X._SY85_CB438749318_.jpg',
                                    href: '#0',
                                    title: 'Video Games'
                                },
                                {
                                    src: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Baby120X._SY85_CB468850882_.jpg',
                                    href: '#0',
                                    title: 'Baby'
                                },
                                {
                                    src: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Toys120X._SY85_CB468851693_.jpg',
                                    href: '#0',
                                    title: 'Toys & Games'
                                }
                            ]
                        }
                        link = {'Shop now'}
                    />
                    <Card 
                        title={'Computers & Accessories'} 
                        images={
                            [
                                {
                                    src: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg',
                                    href: '#0',
                                }
                            ]
                        }
                        link={'Shop now'}
                    />
                    <Card 
                        title={'Electronics'} 
                        images={
                            [
                                {
                                    src: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg',
                                    href: '#0',
                                }
                            ]
                        }
                        link={'See more'}
                    />
                 </Grid>
            </div>
        </div>
    )
}
