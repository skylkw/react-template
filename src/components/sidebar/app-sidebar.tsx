"use client";

import * as React from "react";
import {
  Bot,
  Frame,
  GalleryVerticalEnd,

  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/sidebar/nav-main";
import { NavProjects } from "@/components/sidebar/nav-projects";
import { NavUser } from "@/components/sidebar/nav-user";
import { TeamSwitcher } from "@/components/sidebar/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
  ],
  navMain: [
    {
      title: "Playground",
      url: "/settings/general",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "/settings/general",
        },
      ],
    },
    {
      title: "Models",
      url: "/settings/general",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "/settings/general",
        },
      ],
    },

    {
      title: "Settings",
      url: "/settings/general",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "/settings/general",
        },
        {
          title: "Team",
          url: "/settings/team",
        },
        {
          title: "Billing",
          url: "/settings/general",
        },
        {
          title: "Limits",
          url: "/settings/general",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "/settings/general",
      icon: Frame,
    },
  ],
};
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
