import { NavLink } from "@/lib/types";
import { FilePlus, LayoutDashboard, ShieldCheck } from "lucide-react";

export const NAV_LINKS_FOR_USERS: NavLink[] = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/verify", label: "Verify", icon: ShieldCheck },
];

export const NAV_LINKS_FOR_ADMIN: NavLink[] = [
  {
    href: "/authorize-institution",
    label: "Authorize Institution",
    icon: ShieldCheck,
  },
  { href: "/verify", label: "Verify", icon: ShieldCheck },
];

export const NAV_LINKS_FOR_AUTHORIZED_INSTITUTIONS: NavLink[] = [
  { href: "/dashboard/issue-certificate", label: "Issue", icon: FilePlus },
  { href: "/verify", label: "Verify", icon: ShieldCheck },
];