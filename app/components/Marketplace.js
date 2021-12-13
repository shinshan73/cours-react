import React, {useState, useEffect} from 'react'
import styles from '../styles/Marketplace.module.css'
import Card from '../components/Card';

export default function Marketplace () {
    const [user, setUser] = useState(null);

    return (
        <div className={styles.tittle}> <h1>Marketplace</h1>
        <div className={styles.marketcontainer}>
            <Card tittle="CARD 1" desc="Amoug Us" price="990" image="https://monandroid.fr/wp-content/uploads/2021/01/amoung-us-933.jpg"/>
            <Card tittle="CARD 1" desc="Amoug Us" price="990" image="https://monandroid.fr/wp-content/uploads/2021/01/amoung-us-933.jpg"/>
            <Card tittle="CARD 1" desc="Amoug Us" price="990" image="https://monandroid.fr/wp-content/uploads/2021/01/amoung-us-933.jpg"/>
            <Card tittle="CARD 1" desc="Amoug Us" price="990" image="https://monandroid.fr/wp-content/uploads/2021/01/amoung-us-933.jpg"/>        
        </div>
    </div>    
    )
}