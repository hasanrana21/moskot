import UiButton from "@/components/ui/button";
import UiInput from "@/components/ui/input";
import UiModal from "@/components/ui/modal";
import MainLayout from "@/layouts/main/MainLayout";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const home = () => {
  const router = useRouter();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [allTeams, setAllTeams] = useState<object[]>([]);
  const [form, setForm] = useState<object>({
    teamName: "",
    category: "",
  });
  const handleForm = (e: any) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleTeamCreate = (e: any) => {
    e.preventDefault();
    const teams = JSON.parse(localStorage.getItem("teamsInfo") as any);
    if (teams) {
      teams.map((item: any) => {
        if (item?.teamName !== form?.teamName) {
          teams.push(form);
          localStorage.setItem("teamsInfo", JSON.stringify(teams));
          router.push("/dashboard");
        } else {
          setOpenModal(false);
          alert("Team name should be different");
        }
      });
    } else {
      const info = [];
      info.push(form);
      localStorage.setItem("teamsInfo", JSON.stringify(info));
      router.push("/dashboard");
    }
  };

  useEffect(() => {
    let teamsInfo = JSON.parse(localStorage.getItem("teamsInfo") as any);
    setAllTeams(teamsInfo);
  }, []);
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
        <UiButton
          onClick={() => setOpenModal(true)}
          label="+ Create a team"
          variant="outline"
        />
      </div>
      {allTeams && allTeams.length ? (
        <div className="grid grid-flow-row grid-cols-4 gap-6 my-10">
          {allTeams?.map((team: any, key: string | number) => (
            <div
              key={key}
              className="border border-primary-1 rounded-lg px-6 py-10 cursor-pointer"
            >
              <h2 className="lg:text-2xl text-xl font-medium mb-2">
                {team?.teamName}
              </h2>
              <h4 className="lg:text-xl text-lg mb-5">{team?.category}</h4>
              <p className="text-base mb-4">
                Grow Your Team with Ease: <br /> Effortlessly Add Members for
                Increased Performance and Achievement
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="lg:text-2xl text-xl h-44 flex justify-center items-center text-gray-500">
          No Data Found
        </div>
      )}

      <UiModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        title="Create new team"
      >
        <form onSubmit={handleTeamCreate}>
          <UiInput
            id="team_name"
            name="teamName"
            label="Team name"
            placeholder="Write team name"
            onChange={handleForm}
          />
          <UiInput
            id="team_title"
            name="category"
            label="Team title"
            placeholder="Write team title"
            onChange={handleForm}
          />
          <div className="text-center mt-4 space-x-6">
            <UiButton
              label="Cancel"
              variant="outline"
              className="rounded-full"
              onClick={() => setOpenModal(false)}
            />
            <UiButton label="Continue" type="submit" className="rounded-full" />
          </div>
        </form>
      </UiModal>
    </MainLayout>
  );
};

export default home;
