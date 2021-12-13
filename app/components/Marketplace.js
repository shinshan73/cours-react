import React, {useState, useEffect} from 'react'
import styles from '../styles/Marketplace.module.css'
import Card from '../components/Card';

export default function Marketplace () {
    const [user, setUser] = useState(null);

    return (
        <div className={styles.tittle}> <h1>Marketplace</h1>
        <div className={styles.marketcontainer}>
            <Card tittle="CARD 1" desc="Spiderman in the space" price="99" image="https://i.redd.it/7nk7p8gl90371.jpg"/>
            <Card tittle="CARD 2" desc="Logo Spiderman" price="150" image="https://r1.ilikewallpaper.net/iphone-x-wallpapers/download/100006/spider-man-miles-morales-logo-4k-iphone-x-wallpaper-ilikewallpaper_com.jpg"/>
            <Card tittle="CARD 3" desc="Animer double épées" price="300" image="http://m.gettywallpapers.com/wp-content/uploads/2020/09/Anime-Wallpaper.jpg"/>
            <Card tittle="CARD 1" desc="Spiderman in the space" price="990" image="https://i.redd.it/7nk7p8gl90371.jpg"/>        
        </div>
    </div>    
    )
}