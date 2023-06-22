import UiButton from "@/components/ui/button";
import MainLayout from "@/layouts/main/MainLayout";
import React from "react";

const dashboard = () => {
  const teams = [
    {
      title: "Coodian",
      category: "Digital Marketing",
      details:
        "Grow Your Team with Ease: <br /> Effortlessly Add Members for Increased Performance and Achievement",
    },
    {
      title: "Coodian",
      category: "Digital Marketing",
      details:
        "Grow Your Team with Ease: <br /> Effortlessly Add Members for Increased Performance and Achievement",
    },
    {
      title: "Coodian",
      category: "Digital Marketing",
      details:
        "Grow Your Team with Ease: <br /> Effortlessly Add Members for Increased Performance and Achievement",
    },
    {
      title: "Coodian",
      category: "Digital Marketing",
      details:
        "Grow Your Team with Ease: <br /> Effortlessly Add Members for Increased Performance and Achievement",
    },
  ];
  return (
    <MainLayout>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="lg:text-3xl text-xl font-semibold mb-6">
            Team Creation management system
          </h3>
          <h4 className="lg:text-xl text-lg text-gray-500">Existing Team</h4>
        </div>
        <UiButton label="+ Create a team" variant="outline" />
      </div>
      <div className="grid grid-flow-row grid-cols-4 gap-6 my-10">
        {teams.map((team, key) => (
          <div
            key={key}
            className="border border-primary-1 rounded-lg px-6 py-10 cursor-pointer"
          >
            <h2 className="lg:text-2xl text-xl font-medium mb-2">
              {team?.title}
            </h2>
            <h4 className="lg:text-xl text-lg mb-5">{team?.category}</h4>
            <p className="text-base mb-4">{team?.details}</p>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default dashboard;
