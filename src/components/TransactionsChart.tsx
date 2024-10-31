import { Line } from "react-chartjs-2";
import styled from "styled-components";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type Transaction = {
  date: string;
  totalValue: number;
};

type TransactionChartProps = {
  transactions: Transaction[];
};

const TransactionChart = ({ transactions }: TransactionChartProps) => {
  const sortedTransactions = [...transactions].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  const data = {
    labels: sortedTransactions.map((tx) => tx.date),
    datasets: [
      {
        label: "Total Value",
        data: sortedTransactions.map((tx) => tx.totalValue),
        fill: true,
        backgroundColor: "rgba(74, 144, 226, 0.2)",
        borderColor: "#7D8CC4",
        pointBackgroundColor: "rgba(74, 144, 226, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(74, 144, 226, 1)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
        labels: {
          color: "#333",
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            return `$${context.raw.toFixed(2)}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
          color: "#666",
          font: {
            size: 12,
          },
        },
        ticks: {
          color: "#666",
        },
      },
      y: {
        title: {
          display: true,
          text: "Total Value ($)",
          color: "#666",
          font: {
            size: 12,
          },
        },
        ticks: {
          color: "#666",
          callback: function (value: any) {
            return `$${value}`;
          },
        },
      },
    },
  };

  return (
    <StyledChartContainer>
      <Line data={data} options={options} />
    </StyledChartContainer>
  );
};

export default TransactionChart;

const StyledChartContainer = styled.div`
  max-width: 1000px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);

  canvas {
    max-height: 400px;
  }
`;
