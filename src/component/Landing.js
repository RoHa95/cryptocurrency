import React, { useEffect, useState } from 'react';

//API
import { getCoin } from '../services/api';

//component
import Loader from './Loader';
import Coin from './Coin';

//style
import styles from './Landing.module.css';


const Landing = () => {

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");

    useEffect (()=>{ 
        const fetchAPI = async () =>{
            const data = await getCoin();
            console.log(data)
            setCoins(data)
        }
        fetchAPI();
    }, [])
    const searchHandeler = event =>{
        setSearch(event.target.value)
    }
    const searchCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))
    return (
        <>
        
            <input className={styles.input} type='text' placeholder='Search' value={search}  onChange={searchHandeler}/>
            {
                coins.length ?
                <div className={styles.coinContainer}>
                {
                    searchCoins.map(coin => <Coin key={coin.id}
                        name={coin.name}
                        image={coin.image}
                        symbol={coin.symbol}
                        price={coin.current_price}
                        marketCap={coin.market_cap}
                        priceChange={coin.price_change_percentage_24h.toFixed(2)}
                         />)
                }
            </div> :
                <Loader />
            }
            
        </>
    );
};

export default Landing;