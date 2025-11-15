import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type Transaction = {
  id: number;
  user_id: number;
  amount: number;
  date: string;
  products: Product[];
};

type ChartProps = {
  transactions: Transaction[];
};

export default function TransactionChart({ transactions }: ChartProps) {
  const counts: Record<string, number> = {};
  transactions.forEach(t => {
    if (!counts[t.date]) counts[t.date] = 0;
    counts[t.date] += 1;
  });

  const data = {
    labels: Object.keys(counts),
    datasets: [
      {
        label: "Jumlah Transaksi",
        data: Object.values(counts),
        borderColor: "rgba(250, 204, 21, 1)",
        backgroundColor: "rgba(250, 204, 21, 0.3)",
        fill: true,
        tension: 0.3
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      title: { display: true, text: "Jumlah Transaksi per Tanggal" }
    }
  };

  return <Line data={data} options={options} />;
}
