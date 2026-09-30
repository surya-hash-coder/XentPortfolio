import { Download, RefreshCw, Users, TrendingUp, Briefcase, ArrowUp } from "lucide-react";
import Shell from "../chrome/Shell";

export default function EpfEsiScreen({
  onNavigate,
}: {
  onNavigate?: (key: string) => void;
}) {
  return (
    <Shell
      activeKey="reports"
      crumbs={["Reports", "EPF & ESI Report"]}
      onNavigate={onNavigate}
    >
      <div className="bg-white border border-[#E8EBF0] rounded-lg p-3.5 mb-3">
        <div className="flex items-start justify-between mb-3">
          <div>
            <div className="text-[14px] font-bold text-[#1E293B]">EPF & ESI Report</div>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-[10px] text-[#64748B]">September 2026</span>
              <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-[#22D3EE] text-white">30 Employees</span>
              <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-[#F97316] text-white">PF: 18</span>
              <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-[#F97316] text-white">ESI: 17</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
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

        <div className="bg-[#F8FAFC] border border-[#E8EBF0] rounded-lg p-3 grid grid-cols-5 gap-3 mb-3">
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

        <div className="bg-[#F8FAFC] border border-[#E8EBF0] rounded-lg p-3 grid grid-cols-6 gap-3 mb-3">
          {[
            { l: "PF Employee %", v: "12%" },
            { l: "PF Employer %", v: "12%" },
            { l: "ESI Employee %", v: "0.75%" },
            { l: "ESI Employer %", v: "3.25%" },
            { l: "EPF Ceiling", v: "₹15,000.00" },
            { l: "ESI Ceiling", v: "₹21,000.00" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="text-[10px] text-[#64748B]">{s.l}</div>
              <div className="text-[14px] font-extrabold text-[#1E293B] mt-1">{s.v}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-4 gap-3">
          {[
            { l: "TOTAL EMPLOYEES", v: "30", sub: "PF Eligible: 18 · ESI Eligible: 17", icon: <Users className="w-4 h-4" />, tone: "blue" },
            { l: "TOTAL EARNED GROSS", v: "₹1,50,365.39", icon: <TrendingUp className="w-4 h-4" />, tone: "cyan" },
            { l: "TOTAL PF (EMP + EMPR)", v: "₹18,044.00", sub: "Employee: ₹9,022.00 · Employer: ₹9,022.00", icon: <Briefcase className="w-4 h-4" />, tone: "cyan" },
            { l: "TOTAL ESI (EMP + EMPR)", v: "₹5,107.00", sub: "Employee: ₹961.00 · Employer: ₹4,146.00", icon: <ArrowUp className="w-4 h-4" />, tone: "amber" },
          ].map((c) => {
            const tones: Record<string, string> = {
              blue: "bg-[#EFF6FF] text-[#0656A8]",
              cyan: "bg-[#ECFEFF] text-[#0891B2]",
              amber: "bg-[#FFFBEB] text-[#D97706]",
            };
            return (
              <div key={c.l} className="bg-white border border-[#E8EBF0] rounded-lg p-3.5">
                <div className="flex items-start justify-between">
                  <div className="text-[10px] font-semibold text-[#94A3B8] uppercase tracking-wide leading-tight">
                    {c.l}
                  </div>
                  <div className={`w-8 h-8 rounded-full ${tones[c.tone]} grid place-items-center shrink-0`}>
                    {c.icon}
                  </div>
                </div>
                <div className="text-[20px] font-extrabold text-[#0F172A] mt-2 leading-none">{c.v}</div>
                {c.sub && (
                  <div className="text-[10px] text-[#94A3B8] mt-1.5 leading-tight">{c.sub}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Shell>
  );
}