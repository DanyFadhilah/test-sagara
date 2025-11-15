import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import DataTable from "../components/DataTable"

import transaction from "../data/transactions.json"

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-60 w-full">
        <Header />

        <main className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-2xl font-bold mb-4">Transactions</h2>

            <DataTable data={transaction} type="transactions" />
        </main>
      </div>
    </div>
  );
}
