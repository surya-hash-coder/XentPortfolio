import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

type Props = {
  activeKey: string;
  crumbs: string[];
  children: ReactNode;
  onNavigate?: (key: string) => void;
};

export default function Shell({
  activeKey,
  crumbs,
  children,
  onNavigate,
}: Props) {
  return (
    <div
      className="w-full bg-[#F5F7FA] flex overflow-hidden"
      style={{ aspectRatio: "16/10" }}
    >
      <Sidebar active={activeKey} onNavigate={onNavigate} />
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar crumbs={crumbs} />
        <div className="flex-1 overflow-hidden bg-[#F5F7FA] p-4">{children}</div>
      </div>
    </div>
  );
}