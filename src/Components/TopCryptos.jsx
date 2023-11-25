import React, { useState, useEffect } from 'react';

const TopCryptos = () => {
 const [data, setData] = useState([]);

 useEffect(() => {
    fetchData();
 }, []);

 const fetchData = async () => {
    const result = await fetch('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD');
    const data = await result.json();
    setData(data.Data);
 };

 return (
    <div className="top-cryptos">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Change (24h)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.CoinInfo.Name}</td>
              <td>${item.DISPLAY.USD.PRICE}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
 );
};

export default TopCryptos;