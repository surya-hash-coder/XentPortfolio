import { LayoutDashboard, Users, CalendarCheck, FileText, Wallet, Settings, Bell } from "lucide-react";

export default function DashboardPreview() {
  return (
    <section id="solutions" className="py-20 sm:py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-semibold text-xent-primary uppercase tracking-widest">
            Product Preview
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
            Your HR operations, in one place.
          </h2>
          <p className="mt-4 text-ink-soft leading-relaxed">
            A unified view of employees, attendance, payroll and leave activity.
          </p>
        </div>

        <div className="mt-12 max-w-6xl mx-auto">
          <div className="rounded-2xl bg-white border border-line shadow-lift overflow-hidden">
            <div className="flex">
              {/* Sidebar */}
              <aside className="hidden md:flex flex-col w-56 bg-xent-dark text-white p-4 gap-1">
                <div className="flex items-center gap-2 px-2 py-3 mb-2">
                  <span className="w-7 h-7 rounded-lg bg-white/15 grid place-items-center">
                    <LayoutDashboard className="w-4 h-4" />
                  </span>
                  <span className="font-bold text-sm">Xent HR</span>
                </div>
                {[
                  { label: "Dashboard", icon: LayoutDashboard, active: true },
                  { label: "Employees", icon: Users },
                  { label: "Attendance", icon: CalendarCheck },
                  { label: "Leave", icon: FileText },
                  { label: "Payroll", icon: Wallet },
                  { label: "Settings", icon: Settings },
                ].map(({ label, icon: Icon, active }) => (
                  <div
                    key={label}
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm ${
                      active ? "bg-white/15 font-semibold" : "text-white/75 hover:bg-white/10"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </div>
                ))}
              </aside>

              {/* Main */}
              <div className="flex-1 p-5 sm:p-6 bg-[#FAFBFC]">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-base font-bold text-ink">Dashboard</div>
                    <div className="text-xs text-ink-muted mt-0.5">
                      Overview of your organization
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg border border-line bg-white grid place-items-center text-ink-soft">
                      <Bell className="w-4 h-4" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-xent-primary text-white grid place-items-center text-xs font-bold">
                      HR
                    </div>
                  </div>
                </div>

                {/* Stat cards */}
                <div className="mt-5 grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {[
                    { label: "Total Employees", value: "248", change: "+4 this month" },
                    { label: "Attendance", value: "96.8%", change: "This week" },
                    { label: "Leave Requests", value: "18", change: "5 pending" },
                    { label: "Monthly Payroll", value: "₹12.4L", change: "Sep 2026" },
                  ].map((c) => (
                    <div key={c.label} className="bg-white rounded-xl border border-line p-4">
                      <div className="text-[11px] font-semibold text-ink-muted">{c.label}</div>
                      <div className="mt-1.5 text-xl font-extrabold text-ink">{c.value}</div>
                      <div className="mt-1 text-[11px] text-xent-primary font-medium">
                        {c.change}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Two columns */}
                <div className="mt-4 grid lg:grid-cols-3 gap-3">
                  {/* Chart */}
                  <div className="lg:col-span-2 bg-white rounded-xl border border-line p-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-bold text-ink">Attendance Trend</div>
                      <div className="text-[11px] text-ink-muted">Last 7 days</div>
                    </div>
                    <div className="mt-4 flex items-end gap-2 h-28">
                      {[55, 70, 48, 82, 66, 92, 76].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
                          <div
                            className="w-full rounded-t-md bg-gradient-to-t from-xent-primary to-xent-light"
                            style={{ height: `${h}%` }}
                          />
                          <span className="text-[10px] text-ink-muted">
                            {["M", "T", "W", "T", "F", "S", "S"][i]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Activity */}
                  <div className="bg-white rounded-xl border border-line p-4">
                    <div className="text-sm font-bold text-ink">Recent Activity</div>
                    <ul className="mt-3 space-y-3">
                      {[
                        { text: "Leave request approved", time: "2h ago", tone: "bg-green-500" },
                        { text: "Payroll processed", time: "5h ago", tone: "bg-xent-primary" },
                        { text: "New employee added", time: "1d ago", tone: "bg-info" },
                        { text: "Attendance updated", time: "1d ago", tone: "bg-warning" },
                      ].map((a, i) => (
                        <li key={i} className="flex gap-2.5">
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${a.tone}`} />
                          <div className="flex-1">
                            <div className="text-xs font-medium text-ink">{a.text}</div>
                            <div className="text-[10px] text-ink-muted">{a.time}</div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Table */}
                <div className="mt-4 bg-white rounded-xl border border-line p-4">
                  <div className="text-sm font-bold text-ink">Employees</div>
                  <div className="mt-3 divide-y divide-line">
                    {[
                      { name: "Aarav Sharma", role: "Software Engineer", status: "Active" },
                      { name: "Priya Nair", role: "HR Executive", status: "Active" },
                      { name: "Rahul Verma", role: "Accountant", status: "On Leave" },
                    ].map((e) => (
                      <div key={e.name} className="flex items-center justify-between py-2.5">
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-full bg-xent-subtle text-xent-primary grid place-items-center text-xs font-bold">
                            {e.name.charAt(0)}
                          </span>
                          <div>
                            <div className="text-xs font-semibold text-ink">{e.name}</div>
                            <div className="text-[10px] text-ink-muted">{e.role}</div>
                          </div>
                        </div>
                        <span
                          className={`text-[10px] font-semibold px-2 py-1 rounded-md ${
                            e.status === "Active"
                              ? "text-success bg-green-50"
                              : "text-warning bg-amber-50"
                          }`}
                        >
                          {e.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-ink-muted">
            Illustrative product UI
          </p>
        </div>
      </div>
    </section>
  );
}