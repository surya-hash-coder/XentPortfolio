import { Smartphone, Wifi, LayoutGrid, Zap } from "lucide-react";

const points = [
  { icon: Smartphone, label: "Mobile-friendly" },
  { icon: Wifi, label: "PWA experience" },
  { icon: Zap, label: "Easy access" },
  { icon: LayoutGrid, label: "Responsive interface" },
];

export default function MobileSection() {
  return (
    <section className="py-20 sm:py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
        {/* Phone mockup */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-xent-primary/15 to-xent-light/20 rounded-full blur-3xl" />
            <div className="relative w-[260px] h-[520px] rounded-[2.5rem] bg-ink p-2.5 shadow-lift">
              <div className="w-full h-full rounded-[2rem] bg-[#FAFBFC] overflow-hidden">
                <div className="h-6 bg-ink flex items-center justify-center">
                  <div className="w-16 h-1.5 rounded-full bg-white/30" />
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-bold text-ink">Xent HR</div>
                    <div className="w-7 h-7 rounded-full bg-xent-primary text-white grid place-items-center text-[10px] font-bold">
                      A
                    </div>
                  </div>

                  <div className="mt-4 rounded-xl bg-xent-primary text-white p-4 shadow-xent">
                    <div className="text-[10px] text-white/80">Good morning</div>
                    <div className="text-sm font-bold">Aarav Sharma</div>
                    <div className="mt-3 grid grid-cols-2 gap-2 text-[10px]">
                      <div className="bg-white/15 rounded-lg p-2">
                        <div className="text-white/75">Attendance</div>
                        <div className="font-bold text-sm">96.8%</div>
                      </div>
                      <div className="bg-white/15 rounded-lg p-2">
                        <div className="text-white/75">Leave Left</div>
                        <div className="font-bold text-sm">12</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    {["Payslips", "Attendance", "Leave Request", "Profile"].map((t) => (
                      <div
                        key={t}
                        className="flex items-center justify-between bg-white rounded-lg border border-line px-3 py-2.5"
                      >
                        <span className="text-xs font-semibold text-ink">{t}</span>
                        <span className="text-ink-muted text-xs">›</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copy */}
        <div>
          <span className="text-xs font-semibold text-xent-primary uppercase tracking-widest">
            Mobile · PWA
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
            HR access, wherever work happens.
          </h2>
          <p className="mt-4 text-ink-soft leading-relaxed">
            Xent HR works through a responsive, installable PWA experience — so
            employees and HR teams can stay connected on any device.
          </p>

          <ul className="mt-8 grid grid-cols-2 gap-3">
            {points.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 bg-white rounded-xl border border-line px-4 py-3"
              >
                <span className="w-9 h-9 rounded-lg bg-xent-subtle text-xent-primary grid place-items-center">
                  <Icon className="w-4 h-4" />
                </span>
                <span className="text-sm font-semibold text-ink">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}