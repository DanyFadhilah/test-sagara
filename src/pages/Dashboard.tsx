import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Card from "../components/Card";
import DataTable from "../components/DataTable"
import Chart from "../components/Chart";

import user from "../data/users.json"
import transactions from "../data/transactions.json"
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
    const totalUsers = user.length;
    const totalTransactions = transactions.length;
    const totalRevenue = transactions.reduce((sum, trx) => sum + trx.amount, 0);
    const [activeTab, setActiveTab] = useState<"users" | "transactions">("users");
  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-60 w-full">
        <Header />

        <main className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <Link to="/users"><Card title="Total User" value={totalUsers} /></Link>
                <Link to="/transactions"><Card title="Total Transaksi" value={totalTransactions} /></Link>
                <Card
                title="Total Pendapatan"
                value={`Rp ${totalRevenue.toLocaleString("id-ID")}`}
                />
            </div>

            <div className="flex space-x-4 mb-6">
                <button onClick={() => setActiveTab("users")} className={`cursor-pointer px-4 py-2 rounded ${ activeTab === "users" ? "bg-yellow-400 text-white" : "bg-gray-200"} hover:bg-yellow-400 hover:text-white`}>
                    Users
                </button>

                <button onClick={() => setActiveTab("transactions")} className={`cursor-pointer px-4 py-2 rounded ${ activeTab === "transactions" ? "bg-yellow-400 text-white" : "bg-gray-200"} hover:bg-yellow-400 hover:text-white`}>
                    Transactions
                </button>
            </div>

            {activeTab === "users" && <DataTable data={user} type="users" />}
            {activeTab === "transactions" && ( <DataTable data={transactions} type="transactions" /> )}

            <div className="mt-10">
                <Chart transactions={transactions} />
            </div>
        </main>
      </div>
    </div>
  );
}
