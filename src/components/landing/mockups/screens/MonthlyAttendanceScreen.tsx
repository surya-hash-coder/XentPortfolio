import Shell from "../chrome/Shell";

const legend = [
  { c: "bg-[#16A34A]", t: "9.0 Full Day" },
  { c: "bg-[#06B6D4]", t: "4.0 Half Day" },
  { c: "bg-[#F59E0B]", t: "⚠ IN No Out Time" },
  { c: "bg-[#DC2626]", t: "A Absent" },
  { c: "bg-[#0656A8]", t: "H Holiday" },
  { c: "bg-[#7C3AED]", t: "Sun Sunday" },
  { c: "bg-[#F97316]", t: "MT Manual Entry" },
  { c: "bg-[#10B981]", t: "9.0 OT Overtime" },
  { c: "bg-[#DC2626]", t: "LOP Loss of Pay" },
];

type Cell = { label: string; tone: string };
const days = 12;

const employees: { code: string; name: string; desig: string; cells: Cell[] }[] = [
  {
    code: "MIFTR015",
    name: "Absal Khan A",
    desig: "Junior Software Engineer",
    cells: [
      { label: "9.0 MT", tone: "bg-[#F97316] text-white" },
      { label: "9.0 MT", tone: "bg-[#F97316] text-white" },
      { label: "9.0 MT", tone: "bg-[#F97316] text-white" },
      { label: "9.0 MT", tone: "bg-[#F97316] text-white" },
      { label: "CL", tone: "bg-[#D1FAE5] text-[#065F46]" },
      { label: "Sun", tone: "bg-[#7C3AED] text-white" },
      { label: "9.3 MT", tone: "bg-[#F97316] text-white" },
      { label: "9.2", tone: "bg-[#16A34A] text-white" },
      { label: "9.0", tone: "bg-[#16A34A] text-white" },
      { label: "9.0", tone: "bg-[#16A34A] text-white" },
      { label: "9.0", tone: "bg-[#16A34A] text-white" },
      { label: "9.0", tone: "bg-[#16A34A] text-white" },
    ],
  },
  {
    code: "MIFTR002",
    name: "Avinash Kumar",
    desig: "Team Lead",
    cells: [
      { label: "9.0 MT", tone: "bg-[#F97316] text-white" },
      { label: "9.0 MT", tone: "bg-[#F97316] text-white" },
      { label: "9.0 MT", tone: "bg-[#F97316] text-white" },
      { label: "9.0 MT", tone: "bg-[#F97316] text-white" },
      { label: "9.0 MT", tone: "bg-[#F97316] text-white" },
      { label: "Sun", tone: "bg-[#7C3AED] text-white" },
      { label: "9.0 MT", tone: "bg-[#F97316] text-white" },
      { label: "1.2", tone: "bg-[#06B6D4] text-white" },
      { label: "9.2", tone: "bg-[#16A34A] text-white" },
      { label: "9.6", tone: "bg-[#16A34A] text-white" },
      { label: "9.0", tone: "bg-[#16A34A] text-white" },
      { label: "9.0", tone: "bg-[#16A34A] text-white" },
    ],
  },
  {
    code: "MIFTI005",
    name: "Ayesha Siddiqa H S",
    desig: "Intern",
    cells: Array(days).fill({ label: "A", tone: "bg-[#DC2626] text-white" }),
  },
  {
    code: "MIFTR003",
    name: "David Stephen S",
    desig: "Junior Full stack Developer",
    cells: [
      { label: "CL", tone: "bg-[#D1FAE5] text-[#065F46]" },
      { label: "CL", tone: "bg-[#D1FAE5] text-[#065F46]" },
      { label: "9.0", tone: "bg-[#16A34A] text-white" },
      { label: "9.0", tone: "bg-[#16A34A] text-white" },
      { label: "10.3 OT", tone: "bg-[#10B981] text-white" },
      { label: "Sun", tone: "bg-[#7C3AED] text-white" },
      { label: "5.9 MT", tone: "bg-[#F97316] text-white" },
      { label: "9.2", tone: "bg-[#16A34A] text-white" },
      { label: "10.6 OT", tone: "bg-[#10B981] text-white" },
      { label: "10.2 OT", tone: "bg-[#10B981] text-white" },
      { label: "10.0 OT", tone: "bg-[#10B981] text-white" },
      { label: "9.0", tone: "bg-[#16A34A] text-white" },
    ],
  },
];

export default function MonthlyAttendanceScreen({
  onNavigate,
}: {
  onNavigate?: (key: string) => void;
}) {
  return (
    <Shell
      activeKey="attendance"
      crumbs={["Attendance", "Attendance"]}
      onNavigate={onNavigate}
    >
      <div className="bg-white border border-[#E8EBF0] rounded-lg p-3.5 mb-3">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-start gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#0656A8] grid place-items-center">
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2}>
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" />
              </svg>
            </span>
            <div>
              <div className="text-[14px] font-bold text-[#1E293B]">Monthly Attendance</div>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[11px] text-[#64748B]">September 2026</span>
                <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-[#22D3EE] text-white">30 Employees</span>
              </div>
            </div>
          </div>
          <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#0B6BCB] text-white text-[11px] font-semibold shadow-sm">
            <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path d="M21 12a9 9 0 11-3-6.7M21 3v6h-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Refresh
          </button>
        </div>

        <div className="bg-[#F8FAFC] border border-[#E8EBF0] rounded-lg p-3 grid grid-cols-4 gap-3">
          {[
            { l: "Month", v: "September ▾" },
            { l: "Year", v: "2026 ▾" },
            { l: "Designation", v: "All Designations ▾" },
          ].map((f) => (
            <div key={f.l}>
              <div className="text-[10px] font-semibold text-[#64748B] mb-1">{f.l}</div>
              <div className="h-8 px-2.5 rounded-md border border-[#E2E8F0] bg-white flex items-center justify-between text-[11.5px] text-[#1E293B]">
                {f.v}
              </div>
            </div>
          ))}
          <div className="flex items-end gap-2">
            <button className="text-[11px] font-semibold text-[#64748B] px-2 py-1.5">Clear</button>
            <button className="px-4 py-1.5 rounded-md bg-[#7C3AED] text-white text-[11px] font-semibold">
              Apply
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 mb-3">
        {legend.map((l) => (
          <span
            key={l.t}
            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold ${l.c} text-white`}
          >
            {l.t}
          </span>
        ))}
        <button className="ml-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#10B981] text-white text-[11px] font-semibold shadow-sm">
          <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5}>
            <path d="M12 21V8m0 0l-5 5m5-5l5 5M5 3h14" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Export Excel
        </button>
      </div>

      <div className="bg-white border border-[#E8EBF0] rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="px-2 py-2 bg-[#F8FAFC] text-[10px] font-bold text-[#475569] border-b border-r border-[#E8EBF0] text-left w-8">#</th>
                <th className="px-2 py-2 bg-[#F8FAFC] text-[10px] font-bold text-[#475569] border-b border-r border-[#E8EBF0] text-left w-16">Code</th>
                <th className="px-2 py-2 bg-[#F8FAFC] text-[10px] font-bold text-[#475569] border-b border-r border-[#E8EBF0] text-left w-32">Employee</th>
                {Array.from({ length: 12 }, (_, i) => (
                  <th key={i} className="px-1 py-2 bg-[#F8FAFC] text-[10px] font-bold text-[#475569] border-b border-r border-[#E8EBF0] text-center w-10">
                    {i + 1}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {employees.map((e, idx) => (
                <tr key={e.code} className="hover:bg-[#F8FAFC]">
                  <td className="px-2 py-1.5 text-[11px] text-[#1E293B] border-b border-r border-[#F1F5F9]">{idx + 1}</td>
                  <td className="px-2 py-1.5 text-[10px] text-[#64748B] border-b border-r border-[#F1F5F9]">{e.code}</td>
                  <td className="px-2 py-1.5 border-b border-r border-[#F1F5F9]">
                    <div className="text-[11px] font-semibold text-[#1E293B] whitespace-nowrap">{e.name}</div>
                    <div className="text-[9.5px] text-[#94A3B8] whitespace-nowrap">{e.desig}</div>
                  </td>
                  {e.cells.map((c, i) => (
                    <td key={i} className="px-1 py-1 border-b border-r border-[#F1F5F9] text-center">
                      <span className={`inline-block px-1.5 py-0.5 rounded text-[9.5px] font-bold ${c.tone} whitespace-nowrap`}>
                        {c.label}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Shell>
  );
}