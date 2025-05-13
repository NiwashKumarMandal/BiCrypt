import { createContext, useState } from "react";


export const CoinContext = createContext();

const CoinContextProvider = (props)=>{
    const [allCoin, setAllCoin] = useState([]);
    const [currency, setCurrency] = useState({
        name: "USD",
        symbol: "$"
    });

    const contextvalue={

    }

    return (
        <CoinContext.Provider value={contextvalue}>
            {props.children}
        </CoinContext.Provider>
     )
}

export default CoinContextProvider;
