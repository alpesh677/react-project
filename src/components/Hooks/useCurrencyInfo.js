import { useEffect, useState } from "react";

function useCurrencyInfo(currnecy){
    const [data, setData] = useState({});

    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currnecy}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currnecy]))
    },[currnecy])
    console.log(data);
    return data;
}

export default useCurrencyInfo;