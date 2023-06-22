import React, { useEffect, useState } from "react";
import MainLayout from "@/layouts/main/MainLayout";
import UiButton from "@/components/ui/button";
import { useRouter } from "next/router";

const dashboard = () => {
  const router = useRouter();
  const id = parseInt(router?.query?.id as string);
  const [teamInfo, setTeamInfo] = useState<any>({});
  useEffect(() => {
    let teams = JSON.parse(localStorage.getItem("teamsInfo") as any);
    let team = teams.find((item: any, key: number) => {
      if (key === id) return item;
    });
    console.log("team", team);
    setTeamInfo(team);
  }, [id]);
  return (
    <MainLayout>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="lg:text-3xl text-xl font-semibold mb-6">
            {teamInfo?.teamName}
          </h3>
          <div className="space-x-6">
            <UiButton label="Active member" disabled variant="outline" />
            <UiButton label="Pending" disabled variant="outline" />
          </div>
        </div>
        <div className="space-x-6">
          <UiButton label="Assign a group" variant="outline" />
          <UiButton label="Add members" />
        </div>
      </div>
    </MainLayout>
  );
};

export default dashboard;
