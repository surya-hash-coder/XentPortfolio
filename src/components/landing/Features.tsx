import {
  Users,
  CalendarCheck,
  FileText,
  Wallet,
  Receipt,
  Building2,
  MapPin,
  LayoutDashboard,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Employee Management",
    desc: "Centralized employee information, records, designations and units.",
  },
  {
    icon: CalendarCheck,
    title: "Attendance Management",
    desc: "Track employee attendance and simplify daily HR operations.",
  },
  {
    icon: FileText,
    title: "Leave Management",
    desc: "Leave requests, leave types, policies and approval workflows.",
  },
  {
    icon: Wallet,
    title: "Payroll Management",
    desc: "Salary processing, payroll records and salary components.",
  },
  {
    icon: Receipt,
    title: "Payslips",
    desc: "Generate payslips and give employees easy digital access.",
  },
  {
    icon: Building2,
    title: "EPF & ESI",
    desc: "Manage statutory information and centralized records.",
  },
  {
    icon: MapPin,
    title: "Location Management",
    desc: "Manage employee locations and location assignments.",
  },
  {
    icon: LayoutDashboard,
    title: "HR Dashboard",
    desc: "Centralized HR overview with operational insights.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold text-xent-primary uppercase tracking-widest">
            Features
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
            Everything your HR team needs
          </h2>
          <p className="mt-4 text-ink-soft leading-relaxed">
            A connected set of tools that bring employee, attendance, leave and
            payroll data into one place.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group bg-white rounded-2xl border border-line p-6 hover:shadow-lift hover:-translate-y-0.5 transition-all duration-300"
            >
              <span className="w-11 h-11 rounded-xl bg-xent-subtle text-xent-primary grid place-items-center group-hover:bg-xent-primary group-hover:text-white transition">
                <Icon className="w-5 h-5" />
              </span>
              <h3 className="mt-5 text-base font-bold text-ink">{title}</h3>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}