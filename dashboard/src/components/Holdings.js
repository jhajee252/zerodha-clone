

import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
  axios
    .get("https://zerodha-clone-1-nnml.onrender.com/allHoldings")
    .then((res) => {
      setAllHoldings(res.data);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });
}, []);


  // Graph data
  const labels =
    allHoldings.length > 0
      ? allHoldings.map((item) => item.name)
      : [];

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data:
          allHoldings.length > 0
            ? allHoldings.map((stock) => Number(stock.price))
            : [],
        backgroundColor: "rgba(0, 150, 136, 0.6)",
      },
    ],
  };

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="order-table">
            <table>
              <thead>
                <tr>
                  <th>Instrument</th>
                  <th>Qty.</th>
                  <th>Avg. cost</th>
                  <th>LTP</th>
                  <th>Cur. val</th>
                  <th>P&L</th>
                  <th>Net chg.</th>
                  <th>Day chg.</th>
                </tr>
              </thead>

              <tbody>
                {allHoldings.map((stock, index) => {
                  const price = Number(stock.price);
                  const qty = Number(stock.qty);
                  const avg = Number(stock.avg);

                  const curValue = price * qty;
                  const investment = avg * qty;
                  const pnl = curValue - investment;

                  const isProfit = pnl >= 0;
                  const profClass = isProfit ? "profit" : "loss";
                  const dayClass = stock.isLoss ? "loss" : "profit";

                  return (
                    <tr key={index}>
                      <td>{stock.name}</td>
                      <td>{qty}</td>
                      <td>{avg.toFixed(2)}</td>
                      <td>{price.toFixed(2)}</td>
                      <td>{curValue.toFixed(2)}</td>
                      <td className={profClass}>{pnl.toFixed(2)}</td>
                      <td className={profClass}>{stock.net}</td>
                      <td className={dayClass}>{stock.day}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Graph */}
          {allHoldings.length > 0 && <VerticalGraph data={data} />}
        </>
      )}
    </>
  );
};

export default Holdings;