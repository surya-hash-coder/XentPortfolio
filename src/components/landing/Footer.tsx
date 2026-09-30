import Link from "next/link";

const cols = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Product Tour", href: "#solutions" },
      { label: "Employee Management", href: "#features" },
      { label: "Attendance", href: "#features" },
      { label: "Payroll", href: "#features" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help", href: "#contact" },
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-line">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <span className="w-9 h-9 rounded-xl bg-xent-primary text-white grid place-items-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.4}>
                  <path d="M4 4l16 16M20 4L4 20" strokeLinecap="round" />
                </svg>
              </span>
              <span className="font-bold text-lg text-ink">
                Xent<span className="text-xent-primary"> HR</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-ink-soft max-w-xs leading-relaxed">
              Employee and payroll management, simplified.
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-sm font-bold text-ink">{c.title}</div>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-ink-soft hover:text-xent-primary transition"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-ink-muted">
            © {year} Xent HR. All rights reserved.
          </p>
          <p className="text-xs text-ink-muted">
            Design &amp; Developed by{" "}
            <span className="font-semibold text-xent-primary">Intelixtent IT Solution</span>
          </p>
        </div>
      </div>
    </footer>
  );
}