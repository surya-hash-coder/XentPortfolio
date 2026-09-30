const steps = [
  { n: "01", title: "Add Employees", desc: "Create employee records with designations and units." },
  { n: "02", title: "Track Attendance", desc: "Monitor daily attendance across your organization." },
  { n: "03", title: "Manage Leave", desc: "Handle requests, types and approval workflows." },
  { n: "04", title: "Process Payroll", desc: "Run salary processing with structured components." },
  { n: "05", title: "Generate Payslips", desc: "Deliver digital payslips employees can access." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-white border-y border-line">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-semibold text-xent-primary uppercase tracking-widest">
            How It Works
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
            A clear HR workflow
          </h2>
          <p className="mt-4 text-ink-soft leading-relaxed">
            From onboarding to payslips — one connected path for your HR team.
          </p>
        </div>

        <div className="mt-14 relative">
          {/* connector line */}
          <div className="hidden lg:block absolute top-[38px] left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-xent-subtle via-xent-light/50 to-xent-subtle" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((s) => (
              <div key={s.n} className="relative text-center lg:text-left">
                <div className="mx-auto lg:mx-0 w-[76px] h-[76px] rounded-2xl bg-white border-2 border-xent-subtle grid place-items-center relative z-10 shadow-soft">
                  <span className="text-xl font-extrabold text-xent-primary">
                    {s.n}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-bold text-ink">{s.title}</h3>
                <p className="mt-1.5 text-sm text-ink-soft leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}