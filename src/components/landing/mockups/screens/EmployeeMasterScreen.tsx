import { Td, Pill } from "../chrome/Primitives";
import Shell from "../chrome/Shell";

const rows = [
  { no: 1, code: "MECLR001", name: "Sathishkumar Mahalingam", desig: "Project Manager", unit: "Project Site", basic: "₹22,500", pf: "Yes" },
  { no: 2, code: "MECLR002", name: "Thiyagarajan Muniyandi", desig: "Administrative Manager", unit: "Head Office", basic: "₹15,000", pf: "Yes" },
  { no: 3, code: "MECLR003", name: "Glorybaby", desig: "House Keeping", unit: "Head Office", basic: "₹5,000", pf: "Yes" },
  { no: 4, code: "MIFTR001", name: "Havaraj H", desig: "General Manager", unit: "Head Office", basic: "₹30,000", pf: "Yes" },
];

export default function EmployeeMasterScreen({
  onNavigate,
}: {
  onNavigate?: (key: string) => void;
}) {
  return (
    <Shell
      activeKey="employees"
      crumbs={["Employees", "Employee Master"]}
      onNavigate={onNavigate}
    >
      <div className="bg-white border border-[#E8EBF0] rounded-lg p-3 mb-3 flex items-center justify-between">
        <div className="text-[12.5px] font-bold text-[#1E293B]">Filter Options</div>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#22B8CF] text-white text-[11px] font-semibold shadow-sm">
            <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path d="M12 3v13m0 0l-5-5m5 5l5-5M5 21h14" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Pull Users
          </button>
          <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#10B981] text-white text-[11px] font-semibold shadow-sm">
            <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path d="M12 21V8m0 0l-5 5m5-5l5 5M5 3h14" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Upload Excel
          </button>
          <button className="px-3 py-1.5 rounded-md bg-[#F1F5F9] text-[#475569] text-[11px] font-semibold">
            Clear Filters
          </button>
          <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#7C3AED] text-white text-[11px] font-semibold shadow-sm">
            <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path d="M3 5h18M6 12h12M10 19h4" strokeLinecap="round" />
            </svg>
            Show Filters
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between mb-2 px-1">
        <div className="text-[13px] font-bold text-[#1E293B]">Employee List</div>
        <div className="text-[11px] text-[#64748B]">
          Total: <span className="font-bold text-[#1E293B]">30</span> employees
        </div>
      </div>

      <div className="flex items-center gap-2 mb-2 px-1 text-[11.5px] text-[#475569]">
        Show
        <span className="px-2 py-1 border border-[#E2E8F0] rounded bg-white text-[#1E293B]">10 ▾</span>
        entries
      </div>

      <div className="bg-white border border-[#E8EBF0] rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr>
              {[
                "Sl.No",
                "Employee Code",
                "Name",
                "Designation",
                "Unit",
                "Basic Salary",
                "PF & ESI",
                "Status",
              ].map((h) => (
                <th
                  key={h}
                  className="px-3 py-2.5 bg-[#F8FAFC] text-[10.5px] font-bold text-[#475569] uppercase tracking-wide border-b border-[#E8EBF0] text-left"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.code} className="hover:bg-[#F8FAFC]">
                <Td>{r.no}</Td>
                <Td>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#7C3AED] text-white text-[10px] font-semibold">
                    {r.code}
                    <svg viewBox="0 0 24 24" className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth={3}>
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" />
                    </svg>
                  </span>
                </Td>
                <Td className="font-medium">{r.name}</Td>
                <Td className="text-[#64748B]">{r.desig}</Td>
                <Td className="text-[#64748B]">{r.unit}</Td>
                <Td>{r.basic}</Td>
                <Td className="text-[#64748B]">{r.pf}</Td>
                <Td>
                  <Pill label="Active" tone="green" />
                </Td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Shell>
  );
}