import React, { useEffect, useState } from "react";
import "./Home.css";
import { useContext } from "react";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";

const Home = () => {

  const{allCoin, currency} = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState('');

  const inputHandler = (event)=>{
    setInput(event.target.value);
    if(event.target.value === ""){
      setDisplayCoin(allCoin);
    }

  }

  const searchHandler = async (event)=>{
    event.preventDefault();
     const coins = await allCoin.filter((item)=>{
       return item.name.toLowerCase().includes(input.toLowerCase())
    })
    setDisplayCoin(coins);
  }


  useEffect(()=>{
    console.log("allCoins from context:", allCoin);
    setDisplayCoin(allCoin);
  },[allCoin]);
  
 

  return (
    <div className="home">
      <div className="hero">
        <h1>
          Largest <br /> Crypto Marketplace
        </h1>
        <p>
          Welcome to the world's largest cryptocurrency Marketplace. Sign up 
          explore more about cryptos.
        </p>
        <form>
          <input onChange={inputHandler} list="coinlist" value={input} type="text" placeholder="Search crypto...." required></input>
          <datalist id="coinlist">
            {allCoin.map((coin , index) => (
              <option key={index} value={coin.name} />
            ))}
          </datalist>

          <button onClick={searchHandler} type="submit">search</button>
        </form>
      </div>
      <div className="crypto-table">
        <div className="table-layout">
            <p>#</p>
            <p>Coins</p>
            <p>Price</p>
            <p style={{textAlign:"center"}}>24H Change</p>
            <p className="market-cap">Market Cap</p>
        </div>
        {
          displayCoin.slice(0,15).map((coin,index) => (
            <Link to={`/Coin/${coin.id}`} className="table-layout" key={index}>
              <p>{coin.market_cap_rank}</p>
              <div>
                <img src={coin.image} alt={coin.name} />
                <p>{coin.name + " - " + coin.symbol}</p>
              </div>
              <p>{currency.symbol} {coin.current_price.toLocaleString()} </p>
              <p style={{color: coin.price_change_percentage_24h > 0 ? "green" : "red", textAlign:"center"}}>{ Math.floor(coin.price_change_percentage_24h*100)/100 }</p>
              <p className="market-cap">{currency.symbol} {coin.market_cap.toLocaleString()}</p>
            </Link>
          )
             
          )
        }


      </div>
    </div>
  );
};

export default Home;
