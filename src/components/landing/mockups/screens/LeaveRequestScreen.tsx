import { Search, Filter, RefreshCw } from "lucide-react";
import Shell from "../chrome/Shell";
import { Avatar, Pill, Td } from "../chrome/Primitives";

const rows = [
  { no: 1, name: "Shiyam Immanuvel T", code: "MIFTR010", type: "Casual Leave (CL)", from: "15 Sep 2026", to: "15 Sep 2026", days: "1", full: "Full Day", date: "28 Sep 2026", status: "Approved" },
  { no: 2, name: "Mohamed Khan A", code: "MIFTR016", type: "Casual Leave (CL)", from: "05 Sep 2026", to: "05 Sep 2026", days: "1", full: "Full Day", date: "28 Sep 2026", status: "Approved" },
  { no: 3, name: "David Stephen S", code: "MIFTR003", type: "Casual Leave (CL)", from: "23 Sep 2026", to: "23 Sep 2026", days: "1", full: "Full Day", date: "28 Sep 2026", status: "Approved" },
];

export default function LeaveRequestScreen({
  onNavigate,
}: {
  onNavigate?: (key: string) => void;
}) {
  return (
    <Shell
      activeKey="attendance"
      crumbs={["Leave Management", "Leave Request Master"]}
      onNavigate={onNavigate}
    >
      <div className="bg-white border border-[#E8EBF0] rounded-lg p-3.5 mb-3">
        <div className="flex items-center justify-between mb-3">
          <div className="text-[13px] font-bold text-[#1E293B]">Leave Requests</div>
          <div className="flex items-center gap-2">
            <div className="h-8 px-2.5 rounded-md border border-[#E2E8F0] bg-white flex items-center gap-2 text-[11.5px] text-[#94A3B8]">
              <Search className="w-3.5 h-3.5" />
              Search employee...
            </div>
            <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[#E2E8F0] bg-white text-[#0B6BCB] text-[11px] font-semibold">
              <Filter className="w-3 h-3" />
              Filters
              <span className="ml-0.5 w-3.5 h-3.5 rounded-full bg-[#7C3AED] text-white text-[8px] font-bold grid place-items-center">1</span>
            </button>
            <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#0B6BCB] text-white text-[11px] font-semibold shadow-sm">
              <RefreshCw className="w-3 h-3" />
              Refresh
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-3">
          {[
            { l: "Total Requests", v: "25", bg: "bg-[#F1F5F9]", c: "text-[#1E293B]" },
            { l: "Pending", v: "1", bg: "bg-[#FEF3C7]", c: "text-[#92400E]" },
            { l: "Approved", v: "23", bg: "bg-[#D1FAE5]", c: "text-[#065F46]" },
            { l: "Rejected", v: "0", bg: "bg-[#FEE2E2]", c: "text-[#991B1B]" },
          ].map((s) => (
            <div key={s.l} className={`${s.bg} rounded-lg p-3`}>
              <div className="text-[10px] font-semibold text-[#64748B]">{s.l}</div>
              <div className={`text-[22px] font-extrabold mt-1 leading-none ${s.c}`}>{s.v}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2 mb-2 text-[11.5px] text-[#475569]">
        Show
        <span className="px-2 py-1 border border-[#E2E8F0] rounded bg-white text-[#1E293B]">10 ▾</span>
        entries
      </div>

      <div className="bg-white border border-[#E8EBF0] rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr>
              {["Sl.No", "Employee", "Leave Type", "Dates", "Days", "Status", "Requested", "Actions"].map((h) => (
                <th key={h} className="px-3 py-2.5 bg-[#F8FAFC] text-[10.5px] font-bold text-[#475569] uppercase tracking-wide border-b border-[#E8EBF0] text-left whitespace-nowrap">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.no} className="hover:bg-[#F8FAFC]">
                <Td>{r.no}</Td>
                <Td>
                  <div className="flex items-center gap-2">
                    <Avatar name={r.name} tone="blue" />
                    <div>
                      <div className="text-[11.5px] font-semibold text-[#1E293B] whitespace-nowrap">{r.name}</div>
                      <div className="text-[10px] text-[#94A3B8]">{r.code}</div>
                    </div>
                  </div>
                </Td>
                <Td>
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#D1FAE5] text-[#065F46] text-[10px] font-bold whitespace-nowrap">
                    <span className="w-1 h-1 rounded-full bg-[#16A34A]" />
                    {r.type}
                  </span>
                </Td>
                <Td>
                  <div className="text-[11px] whitespace-nowrap">
                    <div>{r.from}</div>
                    <div className="text-[#94A3B8]">→ {r.to}</div>
                    <div className="text-[10px] text-[#94A3B8]">{r.days} day(s) · {r.full}</div>
                  </div>
                </Td>
                <Td>
                  <span className="w-5 h-5 rounded-full bg-[#7C3AED] text-white grid place-items-center text-[10px] font-bold">
                    {r.days}
                  </span>
                </Td>
                <Td>
                  <Pill label={`✓ ${r.status}`} tone="green" />
                </Td>
                <Td>
                  <div className="text-[10.5px] whitespace-nowrap">
                    <div>{r.date}</div>
                    <div className="text-[#94A3B8]">2 days ago</div>
                  </div>
                </Td>
                <Td>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#0B6BCB] text-white text-[10px] font-semibold">
                    Action ▾
                  </span>
                </Td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Shell>
  );
}