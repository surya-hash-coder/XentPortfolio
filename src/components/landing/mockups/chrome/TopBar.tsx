import { Menu, Maximize2, Bell, Moon, ChevronRight } from "lucide-react";

type Props = {
  crumbs: string[];
  userName?: string;
  role?: string;
};

export default function TopBar({
  crumbs,
  userName = "admin",
  role = "Admin",
}: Props) {
  return (
    <div className="bg-white border-b border-[#E8EBF0]">
      {/* Row 1 — icons */}
      <div className="h-12 px-4 flex items-center justify-between">
        <button className="w-8 h-8 rounded-md hover:bg-[#F1F5F9] grid place-items-center text-[#475569]">
          <Menu className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-1.5">
          <button className="w-8 h-8 rounded-md hover:bg-[#F1F5F9] grid place-items-center text-[#475569]">
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
          <button className="w-8 h-8 rounded-md hover:bg-[#F1F5F9] grid place-items-center text-[#475569] relative">
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-3.5 h-3.5 rounded-full bg-red-500 text-white text-[8px] font-bold grid place-items-center ring-2 ring-white">
              1
            </span>
          </button>
          <button className="w-8 h-8 rounded-md hover:bg-[#F1F5F9] grid place-items-center text-[#475569]">
            <Moon className="w-4 h-4" />
          </button>
          <div className="ml-2 flex items-center gap-2 pl-3 border-l border-[#E8EBF0]">
            <div className="w-8 h-8 rounded-full bg-[#EFF6FF] grid place-items-center text-[#0656A8]">
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                <path d="M12 12a4 4 0 100-8 4 4 0 000 8zm0 2c-3.3 0-8 1.6-8 5v1h16v-1c0-3.4-4.7-5-8-5z" />
              </svg>
            </div>
            <div className="leading-tight">
              <div className="text-[11.5px] font-semibold text-[#1E293B]">
                {userName}
              </div>
              <div className="text-[10px] text-[#94A3B8]">({role})</div>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2 — breadcrumb bar */}
      <div className="h-9 px-4 flex items-center gap-2 bg-[#F8FAFC] border-t border-[#E8EBF0]">
        {crumbs.map((c, i) => (
          <div key={i} className="flex items-center gap-2">
            <span
              className={`text-[11.5px] ${
                i === crumbs.length - 1
                  ? "text-[#64748B]"
                  : "text-[#1E293B] font-semibold"
              }`}
            >
              {c}
            </span>
            {i < crumbs.length - 1 && (
              <ChevronRight className="w-3 h-3 text-[#CBD5E1]" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}