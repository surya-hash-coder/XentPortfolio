import {
  LayoutDashboard,
  Users,
  CalendarCheck,
  Wallet,
  Settings,
  BarChart3,
  Database,
  UserCog,
  FileText,
} from "lucide-react";

type Props = {
  active: string;
  onNavigate?: (key: string) => void;
};

const groups = [
  { label: "Dashboard", icon: LayoutDashboard, key: "dashboard" },
  {
    label: "Employee",
    icon: Users,
    key: "employees",
    children: ["Employee Master", "Add Employee", "Employee Leave policy"],
  },
  {
    label: "Register Attendance",
    icon: CalendarCheck,
    key: "attendance",
    children: [
      "Today Attendance",
      "Monthly Attendance",
      "Leave Request",
      "Loss of pay",
    ],
  },
  {
    label: "Salary Attendance",
    icon: Wallet,
    key: "salary",
    children: ["Monthly Salary"],
  },
  {
    label: "Reports",
    icon: BarChart3,
    key: "reports",
    children: ["ESI/PF Report"],
  },
  { label: "Settings", icon: Settings, key: "settings" },
  {
    label: "Masters",
    icon: Database,
    key: "masters",
    children: ["Designation", "company", "Bank", "Office Location"],
  },
  { label: "User Management", icon: UserCog, key: "users" },
];

export default function Sidebar({ active, onNavigate }: Props) {
  return (
    <aside className="hidden md:flex flex-col w-[200px] lg:w-[220px] bg-[#1F2A44] text-white shrink-0">
      {/* Brand */}
      <div className="px-4 py-4 flex items-center gap-2 border-b border-white/10">
        <div className="w-8 h-8 rounded-md bg-[#0B6BCB] grid place-items-center">
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.4}
          >
            <path d="M4 4l16 16M20 4L4 20" strokeLinecap="round" />
          </svg>
        </div>
        <div className="flex items-baseline gap-0.5">
          <span className="text-[15px] font-bold tracking-tight">Xent</span>
          <span className="text-[15px] font-bold text-[#2E7ED0]">HR</span>
        </div>
        <span className="ml-auto text-[9px] font-bold text-amber-500">MEC</span>
      </div>

      <div className="px-4 pt-4 pb-2 text-[10px] font-semibold tracking-widest text-white/40">
        MENU
      </div>

      <nav className="flex-1 px-2 pb-4 overflow-hidden">
        {groups.map((g) => {
          const Icon = g.icon;
          const isActive = g.key === active;
          const clickable = onNavigate && ["dashboard", "employees", "attendance", "salary", "reports"].includes(g.key);
          return (
            <div key={g.key} className="mb-0.5">
              <button
                type="button"
                disabled={!clickable}
                onClick={() => clickable && onNavigate?.(g.key)}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-md text-[12.5px] font-medium transition text-left ${
                  isActive
                    ? "bg-white/10 text-white"
                    : clickable
                    ? "text-white/70 hover:bg-white/5 hover:text-white cursor-pointer"
                    : "text-white/40 cursor-default"
                }`}
              >
                <Icon className="w-[15px] h-[15px]" />
                <span className="flex-1 truncate">{g.label}</span>
                {g.children && (
                  <svg
                    viewBox="0 0 24 24"
                    className="w-3 h-3 opacity-60"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      d="M9 6l6 6-6 6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
              {isActive && g.children && (
                <div className="mt-0.5 mb-1.5 pl-2">
                  {g.children.map((c, i) => (
                    <div
                      key={c}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-[11.5px] ${
                        i === 0
                          ? "text-white bg-white/5"
                          : "text-white/55 hover:text-white/80"
                      }`}
                    >
                      <span className="w-1 h-1 rounded-full bg-current opacity-60" />
                      {c}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <div className="px-3 py-3 border-t border-white/10 flex items-center gap-2 text-[12px] text-white/60">
        <FileText className="w-4 h-4" />
        Logout
      </div>
    </aside>
  );
}