import { RefreshCw, Download } from "lucide-react";
import Shell from "../chrome/Shell";

const rows = [
  { no: 1, code: "MECLR001", name: "Sathishkumar Mahalingam", offer: "Offer TH: ₹45,000 Basic: ₹22,500 Site: ₹5,000", paid: "0.0", paidOf: "of 26", lop: "—", extra: "—", per: "₹865.38", basic: "₹0.00" },
  { no: 2, code: "MECLR002", name: "Thiyagarajan Muniyandi", offer: "Offer TH: ₹30,000 Basic: ₹15,000", paid: "10.0", paidOf: "of 26", lop: "—", extra: "—", per: "₹576.92", basic: "₹5,769.23" },
  { no: 3, code: "MECLR003", name: "Glorybaby", offer: "Offer TH: ₹10,000 Basic: ₹5,000", paid: "0.0", paidOf: "of 26", lop: "—", extra: "—", per: "₹192.31", basic: "₹0.00" },
];

export default function MonthlySalaryScreen({
  onNavigate,
}: {
  onNavigate?: (key: string) => void;
}) {
  return (
    <Shell
      activeKey="salary"
      crumbs={["Salary Attendance", "Monthly Salary"]}
      onNavigate={onNavigate}
    >
      <div className="bg-white border border-[#E8EBF0] rounded-lg p-3.5 mb-3">
        <div className="flex items-start justify-between mb-3">
          <div>
            <div className="text-[14px] font-bold text-[#1E293B]">Monthly Salary</div>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-[#22D3EE] text-white">30 Payslips</span>
              <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-[#DBEAFE] text-[#1E40AF]">23 Sept 2026, 07:29 pm</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#FB923C] text-white text-[11px] font-semibold shadow-sm">
              <RefreshCw className="w-3 h-3" />
              Regenerate
            </button>
            <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#10B981] text-white text-[11px] font-semibold shadow-sm">
              <Download className="w-3 h-3" />
              Export Excel
            </button>
            <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#0B6BCB] text-white text-[11px] font-semibold shadow-sm">
              <RefreshCw className="w-3 h-3" />
              Refresh
            </button>
          </div>
        </div>

        <div className="bg-[#F8FAFC] border border-[#E8EBF0] rounded-lg p-3 grid grid-cols-5 gap-3">
          {[
            { l: "Month", v: "September ▾" },
            { l: "Year", v: "2026 ▾" },
            { l: "Designation", v: "All Designations ▾" },
            { l: "Company", v: "All Companies ▾" },
          ].map((f) => (
            <div key={f.l}>
              <div className="text-[10px] font-semibold text-[#64748B] mb-1">{f.l}</div>
              <div className="h-8 px-2.5 rounded-md border border-[#E2E8F0] bg-white flex items-center text-[11.5px] text-[#1E293B]">
                {f.v}
              </div>
            </div>
          ))}
          <div className="flex items-end justify-end gap-2">
            <button className="text-[11px] font-semibold text-[#64748B]">Clear</button>
            <button className="px-4 py-1.5 rounded-md bg-[#7C3AED] text-white text-[11px] font-semibold">Apply</button>
          </div>
        </div>
      </div>

      <div className="mb-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-t-md bg-[#F8FAFC] border border-[#E8EBF0] border-b-0 text-[11.5px] font-semibold text-[#1E293B]">
          <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2}>
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M8 2v4M16 2v4M3 10h18" strokeLinecap="round" />
          </svg>
          General
        </div>
      </div>

      <div className="bg-white border border-[#E8EBF0] rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr>
              <th className="px-3 py-2.5 bg-[#F8FAFC] text-[10.5px] font-bold text-[#475569] uppercase border-b border-[#E8EBF0] text-left w-8">#</th>
              <th className="px-3 py-2.5 bg-[#F8FAFC] text-[10.5px] font-bold text-[#475569] uppercase border-b border-[#E8EBF0] text-left">Emp Code</th>
              <th className="px-3 py-2.5 bg-[#F8FAFC] text-[10.5px] font-bold text-[#475569] uppercase border-b border-[#E8EBF0] text-left">Employee</th>
              <th colSpan={5} className="px-3 py-2.5 bg-[#1E293B] text-[10.5px] font-bold text-white uppercase border-b border-[#E8EBF0] text-center">
                Attendance
              </th>
            </tr>
            <tr>
              <th colSpan={3} className="border-b border-[#E8EBF0]" />
              {["Paid Days", "LOP", "Extra Days", "Per Day", "Basic"].map((h) => (
                <th key={h} className="px-3 py-1.5 bg-[#F8FAFC] text-[10px] font-bold text-[#475569] uppercase border-b border-[#E8EBF0] text-right">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.code} className="hover:bg-[#F8FAFC]">
                <td className="px-3 py-2.5 text-[11.5px] border-b border-[#F1F5F9]">{r.no}</td>
                <td className="px-3 py-2.5 border-b border-[#F1F5F9]">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#7C3AED] text-white text-[10px] font-semibold">
                    {r.code}
                    <svg viewBox="0 0 24 24" className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth={3}>
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" />
                    </svg>
                  </span>
                </td>
                <td className="px-3 py-2.5 border-b border-[#F1F5F9]">
                  <div className="text-[11.5px] font-semibold text-[#1E293B] whitespace-nowrap">{r.name}</div>
                  <div className="text-[10px] text-[#94A3B8] whitespace-nowrap">{r.offer}</div>
                </td>
                <td className="px-3 py-2.5 border-b border-[#F1F5F9] text-right">
                  <div className="text-[12px] font-bold text-[#0B6BCB]">{r.paid}</div>
                  <div className="text-[9.5px] text-[#94A3B8]">{r.paidOf}</div>
                </td>
                <td className="px-3 py-2.5 border-b border-[#F1F5F9] text-right text-[11px] text-[#94A3B8]">{r.lop}</td>
                <td className="px-3 py-2.5 border-b border-[#F1F5F9] text-right text-[11px] text-[#94A3B8]">{r.extra}</td>
                <td className="px-3 py-2.5 border-b border-[#F1F5F9] text-right text-[11px] text-[#1E293B]">{r.per}</td>
                <td className="px-3 py-2.5 border-b border-[#F1F5F9] text-right text-[11.5px] font-bold text-[#1E293B]">{r.basic}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Shell>
  );
}