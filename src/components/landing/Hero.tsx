import Link from "next/link";
import { ArrowRight, Users, CalendarCheck, FileText, Wallet } from "lucide-react";

const stats = [
  { label: "Employees", value: "248", icon: Users, tone: "text-xent-primary bg-xent-subtle" },
  { label: "Attendance", value: "96.8%", icon: CalendarCheck, tone: "text-success bg-green-50" },
  { label: "Leave Requests", value: "18", icon: FileText, tone: "text-info bg-cyan-50" },
  { label: "Payroll", value: "₹12.4L", icon: Wallet, tone: "text-warning bg-amber-50" },
];

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* soft background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-xent-subtle blur-3xl opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 lg:gap-10 items-center">
        {/* Left */}
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-xent-primary bg-xent-subtle border border-blue-100 px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-xent-primary animate-pulse" />
            HR Management Platform
          </span>

          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-ink leading-[1.05]">
            Modern HR Management,
            <br />
            <span className="text-xent-primary">Made Simple.</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-ink-soft max-w-xl leading-relaxed">
            Manage employees, attendance, leave, payroll and payslips from one
            centralized HR platform built for growing teams.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/login"
              className="inline-flex items-center gap-2 bg-xent-primary hover:bg-xent-dark text-white font-semibold text-sm px-6 py-3 rounded-lg shadow-xent transition"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#features"
              className="inline-flex items-center gap-2 bg-white hover:bg-xent-subtle text-ink font-semibold text-sm px-6 py-3 rounded-lg border border-line transition"
            >
              Explore Features
            </Link>
          </div>

          <p className="mt-5 text-xs text-ink-muted">
            Demo dashboard preview — illustrative data
          </p>
        </div>

        {/* Right — dashboard mock */}
        <div className="animate-fade-in">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-xent-primary/10 via-transparent to-xent-light/20 rounded-3xl blur-2xl" />

            <div className="relative bg-white rounded-2xl shadow-lift border border-line p-5">
              {/* fake window bar */}
              <div className="flex items-center gap-1.5 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <span className="ml-3 text-[11px] text-ink-muted">xent-hr · dashboard</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {stats.map((s) => {
                  const Icon = s.icon;
                  return (
                    <div
                      key={s.label}
                      className="rounded-xl border border-line p-4 hover:shadow-card transition"
                    >
                      <div className={`w-9 h-9 rounded-lg grid place-items-center ${s.tone}`}>
                        <Icon className="w-4.5 h-4.5" style={{ width: 18, height: 18 }} />
                      </div>
                      <div className="mt-3 text-2xl font-extrabold text-ink">{s.value}</div>
                      <div className="text-xs text-ink-muted mt-0.5">{s.label}</div>
                    </div>
                  );
                })}
              </div>

              {/* fake chart */}
              <div className="mt-4 rounded-xl border border-line p-4">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-semibold text-ink">Attendance trend</div>
                  <div className="text-[10px] text-ink-muted">Last 7 days</div>
                </div>
                <div className="mt-3 flex items-end gap-1.5 h-20">
                  {[40, 65, 52, 78, 60, 88, 72].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-md bg-gradient-to-t from-xent-primary to-xent-light"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}