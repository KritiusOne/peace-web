"use client"
import Link from "next/link"
import { 
  Sidebar, 
  SidebarContent, 
  SidebarFooter, 
  SidebarGroup, 
  SidebarGroupLabel, 
  SidebarHeader, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem, 
  SidebarProvider 
} from "../ui/sidebar"
import { HomeIcon, HeartFilledIcon } from "@radix-ui/react-icons" 

export const AppSidebar = () => {
  const items = [
    {
      label: "Home",
      Icon: <HomeIcon className="text-secondary-500" fill="true" />,
      route: "/"
    },
    {
      label: "Money",
      Icon: <HeartFilledIcon className="text-secondary-500" fill="true" />,
      route: "/money"
    }
  ]
  return (
    <SidebarProvider className="w-1/5 min-w-[200px] max-w-[300px] bg-neutral-1000">
      <Sidebar>
        <SidebarHeader />
        <SidebarContent className="px-2">
          <SidebarGroup />
            <SidebarGroupLabel className="text-lg font-bold text-neutral-100">Peace</SidebarGroupLabel>
            <SidebarMenu>
              {
                items.map(({label, Icon, route})=> {
                  return (
                    <SidebarMenuItem key={label}>
                      <SidebarMenuButton
                        asChild
                        isActive={false}
                        tooltip={label}
                      >
                        <Link href={route}>
                          {Icon}
                          <span className="text-lg text-neutral-100">{label}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                })
              }
            </SidebarMenu>
          <SidebarGroup />
        </SidebarContent>
        <SidebarFooter />
      </Sidebar>
    </SidebarProvider>
  )
}