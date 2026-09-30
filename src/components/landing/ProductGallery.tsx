"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  CalendarCheck,
  FileText,
  Wallet,
  BarChart3,
} from "lucide-react";
import FadeIn from "./ui/FadeIn";
import DashboardScreen from "./mockups/screens/DashboardScreen";
import EmployeeMasterScreen from "./mockups/screens/EmployeeMasterScreen";
import MonthlyAttendanceScreen from "./mockups/screens/MonthlyAttendanceScreen";
import LeaveRequestScreen from "./mockups/screens/LeaveRequestScreen";
import MonthlySalaryScreen from "./mockups/screens/MonthlySalaryScreen";
import EpfEsiScreen from "./mockups/screens/EpfEsiScreen";

const tabs = [
  {
    id: "dashboard",
    label: "Dashboard",
    caption:
      "Company-wide overview — headcount, present/absent, and 7-day attendance trend.",
    icon: LayoutDashboard,
    Component: DashboardScreen,
  },
  {
    id: "employees",
    label: "Employee Master",
    caption:
      "Centralized employee records with salary, PF/ESI status, and bulk import.",
    icon: Users,
    Component: EmployeeMasterScreen,
  },
  {
    id: "attendance",
    label: "Monthly Attendance",
    caption:
      "Full-month grid with color-coded days — full day, half day, absent, OT, and more.",
    icon: CalendarCheck,
    Component: MonthlyAttendanceScreen,
  },
  {
    id: "leave",
    label: "Leave Requests",
    caption:
      "Approve or reject requests with a clear view of leave type, dates, and status.",
    icon: FileText,
    Component: LeaveRequestScreen,
  },
  {
    id: "salary",
    label: "Monthly Salary",
    caption:
      "Run payroll with LOP, extra days, and per-day breakdown per employee.",
    icon: Wallet,
    Component: MonthlySalaryScreen,
  },
  {
    id: "epf",
    label: "EPF & ESI",
    caption:
      "Statutory reports with auto-calculated PF/ESI contributions and ceilings.",
    icon: BarChart3,
    Component: EpfEsiScreen,
  },
];

// Map sidebar keys → gallery tab indices
const navKeyToTabIndex: Record<string, number> = {
  dashboard: 0,
  employees: 1,
  attendance: 2,
  salary: 4,
  reports: 5,
};

export default function ProductGallery() {
  const [active, setActive] = useState(0);
  const ActiveComponent = tabs[active].Component;

  const handleNavigate = (key: string) => {
    const idx = navKeyToTabIndex[key];
    if (typeof idx === "number") setActive(idx);
  };

  return (
    <section id="solutions" className="py-20 sm:py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <FadeIn className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-semibold text-xent-primary uppercase tracking-widest">
            Product Tour
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-ink">
            See Xent HR in action
          </h2>
          <p className="mt-4 text-ink-soft leading-relaxed">
            Explore the modules your HR team uses every day. Click any tab — or
            the sidebar inside the preview.
          </p>
        </FadeIn>

        <div className="mt-12">
          {/* Top tabs */}
          <div className="overflow-x-auto -mx-5 px-5 sm:mx-0 sm:px-0">
            <div className="flex gap-2 min-w-max sm:min-w-0 sm:flex-wrap sm:justify-center">
              {tabs.map((t, i) => {
                const Icon = t.icon;
                const isActive = i === active;
                return (
                  <button
                    key={t.id}
                    onClick={() => setActive(i)}
                    className={`group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 border ${
                      isActive
                        ? "bg-xent-primary text-white border-xent-primary shadow-xent"
                        : "bg-white text-ink-soft border-line hover:border-xent-light hover:text-xent-primary"
                    }`}
                  >
                    <Icon
                      className={`w-4 h-4 transition-transform ${
                        isActive ? "scale-110" : "group-hover:scale-110"
                      }`}
                    />
                    {t.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Preview */}
          <div className="mt-8">
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-tr from-xent-primary/5 via-transparent to-xent-light/10 rounded-3xl blur-2xl pointer-events-none" />
              <div
                key={active}
                className="relative rounded-2xl border border-line shadow-lift overflow-hidden bg-white animate-fade-in"
              >
                <ActiveComponent onNavigate={handleNavigate} />
              </div>
            </div>

            <div
              key={`caption-${active}`}
              className="mt-5 text-center text-sm text-ink-soft animate-fade-in"
            >
              {tabs[active].caption}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}