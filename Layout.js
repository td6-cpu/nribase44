import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { FileText, TrendingUp, Target, DollarSign, Users } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const navigationItems = [
  {
    title: "Business Plan",
    url: createPageUrl("BusinessPlan"),
    icon: FileText,
  },
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();

  return (
    <SidebarProvider>
      <style>
        {`
          :root {
            --primary: 217 91% 25%;
            --primary-foreground: 210 40% 98%;
            --secondary: 45 93% 47%;
            --accent: 217 91% 35%;
            --muted: 217 20% 95%;
          }
          
          .gradient-bg {
            background: linear-gradient(135deg, #0f2847 0%, #1a4068 100%);
          }
          
          .gold-accent {
            color: #f59e0b;
          }
          
          .navy-card {
            background: linear-gradient(to bottom right, #0f2847, #1a3a5c);
          }
        `}
      </style>
      <div className="min-h-screen flex w-full bg-slate-50">
        <Sidebar className="border-r border-slate-200 bg-white">
          <SidebarHeader className="border-b border-slate-200 p-6 gradient-bg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="font-bold text-white text-lg">nri.my</h2>
                <p className="text-xs text-slate-300">Strategic Business Plan</p>
              </div>
            </div>
          </SidebarHeader>
          
          <SidebarContent className="p-3">
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navigationItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton 
                        asChild 
                        className={`hover:bg-slate-100 transition-colors duration-200 rounded-lg ${
                          location.pathname === item.url ? 'bg-slate-100' : ''
                        }`}
                      >
                        <Link to={item.url} className="flex items-center gap-3 px-3 py-2.5">
                          <item.icon className="w-5 h-5 text-slate-600" />
                          <span className="font-medium text-slate-700">{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <main className="flex-1 flex flex-col">
          <header className="bg-white border-b border-slate-200 px-6 py-4 md:hidden">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="hover:bg-slate-100 p-2 rounded-lg" />
              <h1 className="text-xl font-semibold text-slate-900">nri.my Business Plan</h1>
            </div>
          </header>

          <div className="flex-1 overflow-auto">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
