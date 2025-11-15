import { useState, useMemo } from "react";

type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
  createdAt: string;
};

type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number; 
}

type Transaction = {
  id: number;
  user_id: number;
  amount: number;
  date: string;
  products: Product[];
};

type TableProps = {
  data: User[] | Transaction[];
  type: "users" | "transactions";
};

export default function Table({ data, type }: TableProps) {
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [page, setPage] = useState(1);
  const limit = 5;

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const processedData = useMemo(() => {
    let filtered = data;

    if (search.trim() !== "") {
      filtered = filtered.filter((item) =>
        JSON.stringify(item)
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    if (sortField) {
      filtered = [...filtered].sort((a, b) => {
        const fieldA = a[sortField as keyof typeof a];
        const fieldB = b[sortField as keyof typeof b];

        if (fieldA < fieldB) return sortOrder === "asc" ? -1 : 1;
        if (fieldA > fieldB) return sortOrder === "asc" ? 1 : -1;
        return 0;
      });

    }

    return filtered;
  }, [search, sortField, sortOrder, data]);

  const totalPages = Math.ceil(processedData.length / limit);
  const paginatedData = processedData.slice((page - 1) * limit, page * limit);

  return (
    <div>
      <input
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
        placeholder="Search..."
        className="mb-4 p-2 border rounded w-1/5 bg-white"
      />

      <table className="w-full bg-white rounded-md shadow">
        <thead>
          <tr className="bg-yellow-400 text-left text-white rounded-md">

            {type === "users" && (
              <>
                <th className="p-3 cursor-pointer" onClick={() => handleSort("id")}>
                  ID {sortField === "id" && (sortOrder === "asc" ? "↑" : "↓")}
                </th>

                <th className="p-3 cursor-pointer" onClick={() => handleSort("name")}>
                  Name {sortField === "name" && (sortOrder === "asc" ? "↑" : "↓")}
                </th>

                <th className="p-3 cursor-pointer" onClick={() => handleSort("email")}>
                  Email {sortField === "email" && (sortOrder === "asc" ? "↑" : "↓")}
                </th>

                <th className="p-3 cursor-pointer" onClick={() => handleSort("role")}>
                  Role {sortField === "role" && (sortOrder === "asc" ? "↑" : "↓")}
                </th>

                <th className="p-3 cursor-pointer" onClick={() => handleSort("createdAt")}>
                  CreatedAt {sortField === "createdAt" && (sortOrder === "asc" ? "↑" : "↓")}
                </th>
              </>
            )}

            {type === "transactions" && (
              <>
                <th className="p-3 cursor-pointer" onClick={() => handleSort("id")}>
                  ID {sortField === "id" && (sortOrder === "asc" ? "↑" : "↓")}
                </th>

                <th className="p-3 cursor-pointer" onClick={() => handleSort("user_id")}>
                  User ID {sortField === "user_id" && (sortOrder === "asc" ? "↑" : "↓")}
                </th>

                <th className="p-3 cursor-pointer" onClick={() => handleSort("product")}>
                  Products {sortField === "product" && (sortOrder === "asc" ? "↑" : "↓")}
                </th>

                <th className="p-3 cursor-pointer" onClick={() => handleSort("amount")}>
                  Amount {sortField === "amount" && (sortOrder === "asc" ? "↑" : "↓")}
                </th>

                <th className="p-3 cursor-pointer" onClick={() => handleSort("date")}>
                  Date {sortField === "date" && (sortOrder === "asc" ? "↑" : "↓")}
                </th>
              </>
            )}
          </tr>
        </thead>

        <tbody>
          {paginatedData.map((item: any) => (
            <tr key={item.id} className="border-t">
              {type === "users" && (
                <>
                  <td className="p-3">{item.id}</td>
                  <td className="p-3">{item.name}</td>
                  <td className="p-3">{item.email}</td>
                  <td className="p-3">{item.role}</td>
                  <td className="p-3">{item.createdAt}</td>
                </>
              )}

              {type === "transactions" && (
                <>
                  <td className="p-3">{item.id}</td>
                  <td className="p-3">{item.user_id}</td>
                  <td className="p-3">
                    <ul className="list-disc ml-4">
                      {(item as Transaction).products.map((p, index) => (
                        <li key={index}>
                          <div><strong>{p.name}</strong></div>
                          <div>Price: Rp {p.price.toLocaleString("id-ID")}</div>
                          <div>Quantity: {p.quantity}</div>
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="p-3">Rp {item.amount.toLocaleString("id-ID")}</td>
                  <td className="p-3">{item.date}</td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between mt-4">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-white cursor-pointer rounded disabled:opacity-50"
        >
          Prev
        </button>

        <span>
          Page {page} of {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-white cursor-pointer rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
