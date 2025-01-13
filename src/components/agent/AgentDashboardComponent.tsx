import React from "react";
import { Card, CardHeader } from "@/components/ui/card";
import AgentDashboardSidebarComponents from "./AgentDashboardSidebarComponent";
import { AgentDashboardRecentActivity } from "./AgentDashboardRecentActivity";
import AgentDashboardHeader from "./AgentDashboardHeader";

const AgentDashboardComponent: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-row">
      {/* Sidebar */}
      <AgentDashboardSidebarComponents />

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Admin dashboard header */}
        <AgentDashboardHeader />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <Card>
            <CardHeader>Users</CardHeader>
            <div className="p-4">
              <p className="text-xl font-bold">12k</p>
            </div>
          </Card>

          <Card>
            <CardHeader>Packages</CardHeader>
            <div className="p-4">
              <p className="text-xl font-bold">132k</p>
            </div>
          </Card>

          <Card>
            <CardHeader>Orders</CardHeader>
            <div className="p-4">
              <p className="text-xl font-bold">567k</p>
            </div>
          </Card>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">Recent Activities</h3>
          <div className=" bg-white p-6">
            <AgentDashboardRecentActivity />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AgentDashboardComponent;
