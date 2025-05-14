import { createContext, useEffect, useState } from "react";

export const CoinContext = createContext();

const CoinContextProvider = (props) => {
  const [allCoin, setAllCoin] = useState([]);
  const [currency, setCurrency] = useState({
    name: "usd",
    symbol: "$",
  });

  const fetchAllCoins = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-tMLrddjjNXhj187kwkRRjRcV",
      },
    };

    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`,
        options
      );
      const data = await response.json();
      console.log(data);
      setAllCoin(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchAllCoins();
  }, [currency]);

  const contextvalue = {
    allCoin,
    currency,
    setCurrency ,
  };

  return (
    <CoinContext.Provider value={contextvalue}>
      {props.children}
    </CoinContext.Provider>
  );
};

export default CoinContextProvider;
