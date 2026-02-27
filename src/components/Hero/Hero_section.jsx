import { useState } from "react";

const initialData = [
  {
    id: "#SR-9421",
    name: "Aditi Sharma",
    email: "aditi.sharma@email.com",
    issue: "Delivery Delay",
    status: "Pending",
    datetime: "27-02-2024, 10:30 AM",
  },
  {
    id: "#SR-9420",
    name: "Rohan Mehra",
    email: "rohan.mehra@email.com",
    issue: "Payment Issue",
    status: "In Progress",
    datetime: "27-02-2024, 09:15 AM",
  },
  {
    id: "#SR-9418",
    name: "Sanya Gupta",
    email: "sanya.gupta@email.com",
    issue: "Refund Request",
    status: "Resolved",
    datetime: "26-02-2024, 04:45 PM",
  },
  {
    id: "#SR-9415",
    name: "Vikram Singh",
    email: "vikram.singh@email.com",
    issue: "Account Access",
    status: "Pending",
    datetime: "26-02-2024, 02:10 PM",
  },
  {
    id: "#SR-9412",
    name: "Ananya Roy",
    email: "ananya.roy@email.com",
    issue: "Quality Issue",
    status: "Resolved",
    datetime: "25-02-2024, 11:20 AM",
  },
];

const statusConfig = {
  Pending: {
    dot: "bg-yellow-400",
    bg: "bg-yellow-50",
    text: "text-yellow-700",
    border: "border-yellow-200",
  },
  "In Progress": {
    dot: "bg-blue-400",
    bg: "bg-blue-50",
    text: "text-blue-700",
    border: "border-blue-200",
  },
  Resolved: {
    dot: "bg-green-400",
    bg: "bg-green-50",
    text: "text-green-700",
    border: "border-green-200",
  },
};

const filters = ["All Requests", "Pending", "In Progress", "Resolved"];

function StatusBadge({ status }) {
  const s = statusConfig[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${s.bg} ${s.text} ${s.border}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
      {status}
    </span>
  );
}

// Mobile / SM card
function MobileCard({ row }) {
  return (
    <div className="p-4 border-b border-gray-100 last:border-none hover:bg-gray-50 transition">
      <div className="flex items-start justify-between gap-2 mb-2">
        <span className="font-mono text-xs font-semibold text-gray-900">
          {row.id}
        </span>
        <StatusBadge status={row.status} />
      </div>
      <p className="text-sm font-medium text-gray-800">{row.name}</p>
      <p className="text-xs text-blue-500 mt-0.5 truncate">{row.email}</p>
      <div className="flex flex-wrap items-center justify-between mt-2.5 gap-2">
        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-md">
          {row.issue}
        </span>
        <span className="text-xs text-gray-400">{row.datetime}</span>
      </div>
    </div>
  );
}

export default function SupportRequests() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All Requests");
  const [currentPage, setCurrentPage] = useState(1);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const filtered = initialData.filter((row) => {
    const q = search.toLowerCase();
    const matchesSearch =
      row.id.toLowerCase().includes(q) ||
      row.name.toLowerCase().includes(q) ||
      row.email.toLowerCase().includes(q) ||
      row.issue.toLowerCase().includes(q);
    const matchesFilter =
      activeFilter === "All Requests" || row.status === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-100 px-3 py-6 sm:px-6 sm:py-8 md:px-8 lg:px-12 xl:px-16 2xl:px-24 2xl:py-12">
      {/* ── Page Header ── */}
      <div className="mb-5 sm:mb-7 xl:mb-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gray-900 tracking-tight">
          Support Requests
        </h1>
        <p className="text-gray-500 mt-1 text-xs sm:text-sm xl:text-base">
          Manage and respond to customer inquiries
        </p>
      </div>

      {/* ── Main Card ── */}
      <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        {/* ── Toolbar ── */}
        <div className="px-4 py-4 sm:px-5 sm:py-4 md:px-6 md:py-5 border-b border-gray-100 space-y-3 sm:space-y-0">
          {/* Top row: search + filter controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search input */}
            <div className="relative flex-1 sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-3.5 h-3.5 sm:w-4 sm:h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by ID, name, or issue type..."
                className="w-full pl-9 sm:pl-10 pr-4 py-2 sm:py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-xs sm:text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:bg-white transition"
              />
            </div>

            {/* xs/sm: hamburger filter toggle */}
            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="sm:hidden flex items-center gap-1.5 px-3 py-2 rounded-xl border border-gray-200 text-xs font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 transition shrink-0">
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24">
                <path d="M3 6h18M7 12h10M11 18h2" />
              </svg>
              {activeFilter === "All Requests" ? "Filter" : activeFilter}
            </button>

            {/* sm and up: inline filter tabs */}
            <div className="hidden sm:flex gap-1 ml-auto flex-wrap justify-end">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-3 py-1.5 md:px-4 md:py-2 rounded-xl text-xs md:text-sm font-medium transition cursor-pointer whitespace-nowrap ${
                    activeFilter === f
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                  }`}>
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* xs/sm: collapsible filter chips */}
          {mobileFilterOpen && (
            <div className="flex flex-wrap gap-2 sm:hidden pt-1">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => {
                    setActiveFilter(f);
                    setMobileFilterOpen(false);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium transition cursor-pointer ${
                    activeFilter === f
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}>
                  {f}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ── Mobile Card List (xs + sm) ── */}
        <div className="block md:hidden divide-y divide-gray-50">
          {filtered.length > 0 ? (
            filtered.map((row) => <MobileCard key={row.id} row={row} />)
          ) : (
            <p className="px-6 py-12 text-center text-sm text-gray-400">
              No requests found.
            </p>
          )}
        </div>

        {/* ── Table (md and above) ── */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">
                <th className="px-4 lg:px-6 py-3.5 text-left text-xs font-semibold text-gray-400 uppercase tracking-widest whitespace-nowrap">
                  Request ID
                </th>
                <th className="px-4 lg:px-6 py-3.5 text-left text-xs font-semibold text-gray-400 uppercase tracking-widest whitespace-nowrap">
                  Customer Name
                </th>
                {/* Email: shown from lg */}
                <th className="hidden lg:table-cell px-4 lg:px-6 py-3.5 text-left text-xs font-semibold text-gray-400 uppercase tracking-widest whitespace-nowrap">
                  Email
                </th>
                <th className="px-4 lg:px-6 py-3.5 text-left text-xs font-semibold text-gray-400 uppercase tracking-widest whitespace-nowrap">
                  Issue Type
                </th>
                <th className="px-4 lg:px-6 py-3.5 text-left text-xs font-semibold text-gray-400 uppercase tracking-widest whitespace-nowrap">
                  Status
                </th>
                {/* Date: shown from xl */}
                <th className="hidden xl:table-cell px-4 lg:px-6 py-3.5 text-left text-xs font-semibold text-gray-400 uppercase tracking-widest whitespace-nowrap">
                  Date/Time
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((row, i) => (
                <tr
                  key={row.id}
                  className={`hover:bg-gray-50 transition ${i < filtered.length - 1 ? "border-b border-gray-50" : ""}`}>
                  <td className="px-4 lg:px-6 py-4 lg:py-5 font-mono text-xs lg:text-sm font-semibold text-gray-900 whitespace-nowrap">
                    {row.id}
                  </td>
                  <td className="px-4 lg:px-6 py-4 lg:py-5 text-xs lg:text-sm font-medium text-gray-800 whitespace-nowrap">
                    {row.name}
                  </td>
                  <td className="hidden lg:table-cell px-4 lg:px-6 py-4 lg:py-5 text-xs lg:text-sm text-blue-500 hover:underline cursor-pointer max-w-[200px] xl:max-w-xs 2xl:max-w-none truncate">
                    {row.email}
                  </td>
                  <td className="px-4 lg:px-6 py-4 lg:py-5 text-xs lg:text-sm text-gray-600 whitespace-nowrap">
                    {row.issue}
                  </td>
                  <td className="px-4 lg:px-6 py-4 lg:py-5">
                    <StatusBadge status={row.status} />
                  </td>
                  <td className="hidden xl:table-cell px-4 lg:px-6 py-4 lg:py-5 text-xs lg:text-sm text-gray-500 whitespace-nowrap">
                    {row.datetime}
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    className="px-6 py-12 text-center text-sm text-gray-400">
                    No requests found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* ── Pagination ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-4 sm:px-6 py-4 border-t border-gray-100">
          <p className="text-xs sm:text-sm text-gray-400 order-2 sm:order-1">
            Showing 1 to 5 of 48 requests
          </p>
          <div className="flex items-center gap-1 order-1 sm:order-2">
            <button className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50 transition cursor-pointer">
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            {[1, 2, 3].map((p) => (
              <button
                key={p}
                onClick={() => setCurrentPage(p)}
                className={`w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg text-xs sm:text-sm font-medium transition cursor-pointer ${
                  currentPage === p
                    ? "border-2 border-blue-600 text-blue-600 font-semibold"
                    : "border border-gray-200 text-gray-500 hover:bg-gray-50"
                }`}>
                {p}
              </button>
            ))}
            <button className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50 transition cursor-pointer">
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
