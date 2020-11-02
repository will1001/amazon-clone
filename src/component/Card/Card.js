import React from 'react'

//Material ui component
import Grid from '@material-ui/core/Grid';

// css
import styles from './Card.module.css';

export default function Card(props) {
    return (
        <Grid item md={3}>
            <div className={styles.card__container}>
                <h1>{props.title}</h1>
                <div className={styles.card__group__container}>
                    {props.images.length > 1 ?
                    <Grid container>
                            {props.images.map((img, i) => (
                                <Grid item md={6} key={i}>
                                    <div className={styles.card__image__4box}>
                                        <a href={img.href}>
                                            <img src={img.src} alt="card" />
                                            <span>{img.title}</span>
                                        </a>
                                    </div>
                                </Grid>
                            ))}
                    </Grid>
                        :
                    <div className={styles.card__image}>
                        <a href={props.images[0].href}>
                            <img src={props.images[0].src} alt="card"/>
                        </a>
                    </div>
                    }
                </div>
                

                <a className={styles.link} href="#0">{props.link}</a>
            </div>
        </Grid>
    )
}
