import { Users, CalendarCheck, Wallet, FileText, Receipt, Building2 } from "lucide-react";

const items = [
  { label: "Employee Management", icon: Users },
  { label: "Attendance", icon: CalendarCheck },
  { label: "Payroll", icon: Wallet },
  { label: "Leave Management", icon: FileText },
  { label: "Payslips", icon: Receipt },
  { label: "EPF / ESI", icon: Building2 },
];

export default function PlatformHighlights() {
  return (
    <section className="py-10 border-y border-line bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-ink-muted">
          One platform for every HR operation
        </p>
        <div className="mt-7 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {items.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center gap-2 py-4 rounded-xl hover:bg-xent-subtle transition"
            >
              <span className="w-10 h-10 rounded-lg bg-xent-subtle text-xent-primary grid place-items-center">
                <Icon className="w-5 h-5" />
              </span>
              <span className="text-xs sm:text-sm font-semibold text-ink-soft">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}