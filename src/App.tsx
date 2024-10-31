import React from "react";
import ReceivingHistory from "./components/ReceivingHistory";
import TransactionChart from "./components/TransactionsChart";

const App: React.FC = () => {

  const transactionHistory = [
    {
      id: 1,
      date: "2023-10-01",
      stockSymbol: "NVDA",
      shares: 5,
      pricePerShare: 145.32,
      recipient: "Sergey",
      totalValue: 726.6,
    },
    {
      id: 2,
      date: "2023-08-01",
      stockSymbol: "HOOD",
      shares: 5,
      pricePerShare: 145.32,
      recipient: "Samanvi",
      totalValue: 726.6,
    },
    {
      id: 3,
      date: "2023-10-01",
      stockSymbol: "BRKA",
      shares: 15,
      pricePerShare: 145.32,
      recipient: "Maneesha",
      totalValue: 2179.8,
    },
    {
      id: 4,
      date: "2023-09-15",
      stockSymbol: "AAPL",
      shares: 10,
      pricePerShare: 150.0,
      recipient: "John",
      totalValue: 1500.0,
    },
    {
      id: 5,
      date: "2023-07-10",
      stockSymbol: "GOOGL",
      shares: 3,
      pricePerShare: 2750.0,
      recipient: "Alice",
      totalValue: 8250.0,
    },
    {
      id: 6,
      date: "2023-06-01",
      stockSymbol: "AMZN",
      shares: 4,
      pricePerShare: 3200.0,
      recipient: "Jake",
      totalValue: 12800.0,
    },
    {
      id: 7,
      date: "2023-05-12",
      stockSymbol: "TSLA",
      shares: 6,
      pricePerShare: 680.0,
      recipient: "Nina",
      totalValue: 4080.0,
    },
    {
      id: 8,
      date: "2023-04-22",
      stockSymbol: "MSFT",
      shares: 8,
      pricePerShare: 295.0,
      recipient: "Rahul",
      totalValue: 2360.0,
    },
    {
      id: 9,
      date: "2023-03-05",
      stockSymbol: "META",
      shares: 5,
      pricePerShare: 325.0,
      recipient: "Sophia",
      totalValue: 1625.0,
    },
    {
      id: 10,
      date: "2023-01-10",
      stockSymbol: "NFLX",
      shares: 2,
      pricePerShare: 540.0,
      recipient: "Leo",
      totalValue: 1080.0,
    },
  ];

  return (
    <div>
      <TransactionChart transactions={transactionHistory} />
      <ReceivingHistory transactions={transactionHistory} />
    </div>
  );
};

export default App;
