import UiButton from "@/components/ui/button";
import MainLayout from "@/layouts/main/MainLayout";
import React from "react";

const dashboard = () => {
  return (
    <MainLayout>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="lg:text-3xl text-xl font-semibold mb-6">
            Team Creation management system
          </h3>
          <h4 className="lg:text-xl text-lg text-gray-500">Existing Team</h4>
        </div>
        <UiButton label="Create a team" variant="outline" />
      </div>
    </MainLayout>
  );
};

export default dashboard;
