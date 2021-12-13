import React, {useEffect, useState} from 'react';
import styles from '../styles/Card.module.css'


export default function Marketplace(props){
    return (
        <div className={styles.cardcontainer}>
            <p>{props.tittle}</p>
            <img
            width= "200vw"
            height="200vw"
            src={props.image} alt=""/>
            <p>{props.desc} </p>
            <h2>{props.price} euros</h2>
            <button>
                Acheter
            </button>
        </div>
    )
}