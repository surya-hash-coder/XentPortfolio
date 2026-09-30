import { ReactNode } from "react";

/* ─────────── Page title row ─────────── */
export function PageTitle({
  title,
  subtitle,
  right,
}: {
  title: string;
  subtitle?: string;
  right?: ReactNode;
}) {
  return (
    <div className="flex items-start justify-between mb-3">
      <div>
        <h3 className="text-[15px] font-bold text-[#1E293B] leading-tight">{title}</h3>
        {subtitle && (
          <p className="text-[11px] text-[#94A3B8] mt-0.5">{subtitle}</p>
        )}
      </div>
      {right}
    </div>
  );
}

/* ─────────── Refresh button ─────────── */
export function RefreshButton({ label = "Refresh" }: { label?: string }) {
  return (
    <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#0B6BCB] text-white text-[11px] font-semibold shadow-sm">
      <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5}>
        <path d="M21 12a9 9 0 11-3-6.7M21 3v6h-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {label}
    </button>
  );
}

/* ─────────── Filter bar ─────────── */
export function FilterBar({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[#F8FAFC] border border-[#E8EBF0] rounded-lg p-3 mb-3">
      {children}
    </div>
  );
}

export function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] font-semibold text-[#64748B] mb-1">{label}</div>
      <div className="h-8 px-2.5 rounded-md border border-[#E2E8F0] bg-white flex items-center justify-between text-[11.5px] text-[#1E293B]">
        <span>{value}</span>
        <svg viewBox="0 0 24 24" className="w-3 h-3 text-[#94A3B8]" fill="none" stroke="currentColor" strokeWidth={2.5}>
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

/* ─────────── Stat card ─────────── */
export function StatCard({
  label,
  value,
  sub,
  tone = "blue",
  icon,
}: {
  label: string;
  value: string;
  sub?: string;
  tone?: "blue" | "green" | "red" | "amber" | "gray" | "cyan";
  icon?: ReactNode;
}) {
  const tones: Record<string, { bg: string; text: string }> = {
    blue: { bg: "bg-[#EFF6FF]", text: "text-[#0656A8]" },
    green: { bg: "bg-[#ECFDF5]", text: "text-[#059669]" },
    red: { bg: "bg-[#FEF2F2]", text: "text-[#DC2626]" },
    amber: { bg: "bg-[#FFFBEB]", text: "text-[#D97706]" },
    gray: { bg: "bg-[#F1F5F9]", text: "text-[#475569]" },
    cyan: { bg: "bg-[#ECFEFF]", text: "text-[#0891B2]" },
  };
  const t = tones[tone];

  return (
    <div className="bg-white border border-[#E8EBF0] rounded-lg p-3.5 flex items-start justify-between">
      <div>
        <div className="text-[10px] font-semibold text-[#94A3B8] uppercase tracking-wide">
          {label}
        </div>
        <div className="text-[22px] font-extrabold text-[#0F172A] mt-1 leading-none">
          {value}
        </div>
        {sub && <div className="text-[10.5px] text-[#94A3B8] mt-1.5">{sub}</div>}
      </div>
      {icon && (
        <div className={`w-9 h-9 rounded-full ${t.bg} ${t.text} grid place-items-center shrink-0`}>
          {icon}
        </div>
      )}
    </div>
  );
}

/* ─────────── Status pill ─────────── */
export function Pill({
  label,
  tone = "green",
}: {
  label: string;
  tone?: "green" | "red" | "amber" | "blue" | "gray" | "cyan" | "purple";
}) {
  const tones: Record<string, string> = {
    green: "bg-[#D1FAE5] text-[#065F46]",
    red: "bg-[#FEE2E2] text-[#991B1B]",
    amber: "bg-[#FEF3C7] text-[#92400E]",
    blue: "bg-[#DBEAFE] text-[#1E40AF]",
    gray: "bg-[#F1F5F9] text-[#475569]",
    cyan: "bg-[#CFFAFE] text-[#155E75]",
    purple: "bg-[#EDE9FE] text-[#5B21B6]",
  };
  return (
    <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold ${tones[tone]}`}>
      {label}
    </span>
  );
}

/* ─────────── Table ─────────── */
export function Table({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white border border-[#E8EBF0] rounded-lg overflow-hidden">
      <table className="w-full text-left">{children}</table>
    </div>
  );
}

export function Th({ children }: { children: ReactNode }) {
  return (
    <th className="px-3 py-2 bg-[#F8FAFC] text-[10.5px] font-bold text-[#475569] uppercase tracking-wide border-b border-[#E8EBF0] whitespace-nowrap">
      {children}
    </th>
  );
}

export function Td({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <td className={`px-3 py-2 text-[11.5px] text-[#1E293B] border-b border-[#F1F5F9] ${className}`}>
      {children}
    </td>
  );
}

/* ─────────── Avatar ─────────── */
export function Avatar({ name, tone = "blue" }: { name: string; tone?: "blue" | "green" | "purple" }) {
  const tones: Record<string, string> = {
    blue: "bg-[#DBEAFE] text-[#1E40AF]",
    green: "bg-[#D1FAE5] text-[#065F46]",
    purple: "bg-[#EDE9FE] text-[#5B21B6]",
  };
  return (
    <span
      className={`w-7 h-7 rounded-full ${tones[tone]} grid place-items-center text-[11px] font-bold shrink-0`}
    >
      {name.charAt(0)}
    </span>
  );
}

/* ─────────── Mini icon circle ─────────── */
export function IconCircle({
  children,
  tone = "blue",
}: {
  children: ReactNode;
  tone?: "blue" | "green" | "red" | "amber" | "cyan";
}) {
  const tones: Record<string, string> = {
    blue: "bg-[#EFF6FF] text-[#0656A8]",
    green: "bg-[#ECFDF5] text-[#059669]",
    red: "bg-[#FEF2F2] text-[#DC2626]",
    amber: "bg-[#FFFBEB] text-[#D97706]",
    cyan: "bg-[#ECFEFF] text-[#0891B2]",
  };
  return (
    <span className={`w-8 h-8 rounded-full ${tones[tone]} grid place-items-center shrink-0`}>
      {children}
    </span>
  );
}