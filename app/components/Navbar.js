import React, {useState, useEffect} from 'react'
import styles from '../styles/Navbar.module.css'

export default function Navbar(){

  const [user, setUser] = useState(null);

  return (
      <div className={styles.navcontainer}>
      <h3> NFT Marketplace</h3>
      <p>Menu</p>
      <div>
        { user ? (
          <button>
            Logout
          </button>
        ): (
          <button>
            Login
          </button>
        )}
      </div>
    </div>
  )
}
    