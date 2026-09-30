import { Users, UserCheck, UserX } from "lucide-react";
import Shell from "../chrome/Shell";
import {
  PageTitle,
  RefreshButton,
  StatCard,
  Table,
  Th,
  Td,
  Pill,
} from "../chrome/Primitives";

export default function DashboardScreen({
  onNavigate,
}: {
  onNavigate?: (key: string) => void;
}) {
  const days = ["24 Sep", "25 Sep", "26 Sep", "27 Sep", "28 Sep", "29 Sep", "30 Sep"];

  return (
    <Shell
      activeKey="dashboard"
      crumbs={["Dashboard", "Home", "Dashboard"]}
      onNavigate={onNavigate}
    >
      <PageTitle title="Dashboard" right={<RefreshButton />} />

      {/* Stat cards */}
      <div className="grid grid-cols-3 gap-3 mb-3">
        <StatCard
          label="Total Employees"
          value="30"
          sub="30 active"
          tone="blue"
          icon={<Users className="w-4 h-4" />}
        />
        <StatCard
          label="Present Today"
          value="1"
          sub="of 30 employees"
          tone="green"
          icon={<UserCheck className="w-4 h-4" />}
        />
        <StatCard
          label="Absent Today"
          value="29"
          sub="of 30 employees"
          tone="red"
          icon={<UserX className="w-4 h-4" />}
        />
      </div>

      {/* Chart + donut */}
      <div className="grid grid-cols-3 gap-3 mb-3">
        <div className="col-span-2 bg-white border border-[#E8EBF0] rounded-lg p-3.5">
          <div className="flex items-center justify-between mb-2">
            <div className="text-[12px] font-bold text-[#1E293B]">
              Attendance Trend (Last 7 Days)
            </div>
            <div className="flex items-center gap-3 text-[10px]">
              <span className="flex items-center gap-1.5 text-[#1E293B]">
                <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
                Present
              </span>
              <span className="flex items-center gap-1.5 text-[#1E293B]">
                <span className="w-2 h-2 rounded-full bg-[#DC2626]" />
                Absent
              </span>
            </div>
          </div>

          <div className="h-[140px] relative">
            <svg viewBox="0 0 400 140" className="w-full h-full" preserveAspectRatio="none">
              {[0, 35, 70, 105, 140].map((y) => (
                <line key={y} x1="30" y1={y} x2="400" y2={y} stroke="#F1F5F9" strokeWidth="1" />
              ))}
              {[
                { y: 4, v: "30" },
                { y: 39, v: "20" },
                { y: 74, v: "10" },
                { y: 109, v: "5" },
                { y: 138, v: "0" },
              ].map((l) => (
                <text key={l.v} x="20" y={l.y} textAnchor="end" fontSize="8" fill="#94A3B8">
                  {l.v}
                </text>
              ))}
              <polyline
                points="55,45 110,78 165,110 220,35 275,120 330,10 385,15"
                fill="none"
                stroke="#DC2626"
                strokeWidth="2"
              />
              <polyline
                points="55,35 110,42 165,50 220,130 275,40 330,132 385,128"
                fill="none"
                stroke="#16A34A"
                strokeWidth="2"
              />
              {days.map((d, i) => (
                <text
                  key={d}
                  x={55 + i * 55}
                  y="136"
                  textAnchor="middle"
                  fontSize="8"
                  fill="#94A3B8"
                >
                  {d}
                </text>
              ))}
            </svg>
          </div>
        </div>

        <div className="bg-white border border-[#E8EBF0] rounded-lg p-3.5">
          <div className="text-[12px] font-bold text-[#1E293B] mb-2">
            Department Distribution
          </div>
          <div className="flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-[100px] h-[100px]">
              <circle cx="50" cy="50" r="35" fill="none" stroke="#F1F5F9" strokeWidth="14" />
              <circle cx="50" cy="50" r="35" fill="none" stroke="#0656A8" strokeWidth="14"
                strokeDasharray="70 220" transform="rotate(-90 50 50)" />
              <circle cx="50" cy="50" r="35" fill="none" stroke="#16A34A" strokeWidth="14"
                strokeDasharray="55 220" strokeDashoffset="-70" transform="rotate(-90 50 50)" />
              <circle cx="50" cy="50" r="35" fill="none" stroke="#F59E0B" strokeWidth="14"
                strokeDasharray="40 220" strokeDashoffset="-125" transform="rotate(-90 50 50)" />
              <circle cx="50" cy="50" r="35" fill="none" stroke="#DC2626" strokeWidth="14"
                strokeDasharray="35 220" strokeDashoffset="-165" transform="rotate(-90 50 50)" />
              <circle cx="50" cy="50" r="35" fill="none" stroke="#7C3AED" strokeWidth="14"
                strokeDasharray="20 220" strokeDashoffset="-200" transform="rotate(-90 50 50)" />
            </svg>
          </div>
          <div className="mt-2 space-y-1">
            {[
              { c: "#0656A8", l: "Administrative Manager" },
              { c: "#16A34A", l: "Software Developer" },
              { c: "#F59E0B", l: "Senior Software Developer" },
            ].map((s) => (
              <div key={s.l} className="flex items-center gap-1.5 text-[9.5px] text-[#475569]">
                <span className="w-2 h-2 rounded-full" style={{ background: s.c }} />
                <span className="truncate">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Attendance tables */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <div className="flex items-center gap-2 mb-2 px-1">
            <span className="w-4 h-4 rounded-full bg-[#D1FAE5] text-[#059669] grid place-items-center text-[9px] font-bold">✓</span>
            <span className="text-[12px] font-bold text-[#1E293B]">Present Employees</span>
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#D1FAE5] text-[#059669]">1</span>
          </div>
          <Table>
            <thead>
              <tr>
                <Th>#</Th>
                <Th>Name</Th>
                <Th>Code</Th>
                <Th>Check In</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td>1</Td>
                <Td className="font-medium">Sathishkumar Mahalingam</Td>
                <Td className="text-[#94A3B8]">MECLR001</Td>
                <Td>
                  <Pill label="12:10 PM" tone="green" />
                </Td>
              </tr>
            </tbody>
          </Table>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2 px-1">
            <span className="w-4 h-4 rounded-full bg-[#FEE2E2] text-[#DC2626] grid place-items-center text-[9px] font-bold">✕</span>
            <span className="text-[12px] font-bold text-[#1E293B]">Absent Employees</span>
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#FEE2E2] text-[#DC2626]">29</span>
          </div>
          <Table>
            <thead>
              <tr>
                <Th>#</Th>
                <Th>Name</Th>
                <Th>Code</Th>
                <Th>Designation</Th>
              </tr>
            </thead>
            <tbody>
              {[
                { n: "Absal Khan A", c: "MIFTR015", d: "Junior Software Engineer" },
                { n: "Avinash Kumar", c: "MIFTR002", d: "Team Lead" },
                { n: "Ayesha Siddiqa H S", c: "MIFTI005", d: "Intern" },
                { n: "David Stephen S", c: "MIFTR003", d: "Junior Full stack Developer" },
              ].map((r, i) => (
                <tr key={r.c}>
                  <Td>{i + 1}</Td>
                  <Td className="font-medium whitespace-nowrap">{r.n}</Td>
                  <Td className="text-[#94A3B8] whitespace-nowrap">{r.c}</Td>
                  <Td className="text-[#64748B] whitespace-nowrap">{r.d}</Td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </Shell>
  );
}