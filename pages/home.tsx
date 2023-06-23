import UiButton from "@/components/ui/button";
import UiInput from "@/components/ui/input";
import UiModal from "@/components/ui/modal";
import MainLayout from "@/layouts/main/MainLayout";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const HomePage = () => {
  const router = useRouter();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [allTeams, setAllTeams] = useState<object[]>([]);
  const [pendingLists, setPendingLists] = useState<object[]>([]);
  const [loginInfo, setLoginInfo] = useState<any>({});
  const [isInvited, setIsInvited] = useState<boolean>(false);
  const [form, setForm] = useState<any>({
    teamName: "",
    category: "",
    admin: "",
  });
  const handleForm = (e: any) => {
    const { name, value } = e.target;
    setForm((prevState: any) => ({
      ...prevState,
      [name]: value,
      admin: loginInfo.email,
    }));
  };
  const handleTeamCreate = async (e: any) => {
    e.preventDefault();
    const teams = JSON.parse(localStorage.getItem("teamsInfo") as any);
    if (teams) {
      let filtered = teams.find((item: any) => item.teamName === form.teamName);
      if (!filtered) {
        teams.push(form);
        await localStorage.setItem("teamsInfo", JSON.stringify(teams));
        router.push(`/dashboard/${form?.teamName}`);
      } else {
        alert("Team name should be different. Please try with different name");
        setOpenModal(false);
      }
    } else {
      const info = [];
      info.push(form);
      await localStorage.setItem("teamsInfo", JSON.stringify(info));
      router.push(`/dashboard/${form?.teamName}`);
    }
  };

  const handleInvite = (type: string) => {
    if (type === "accept") {
      let active = JSON.parse(localStorage.getItem("activeList") as any);
      let updateList: any = pendingLists?.find(
        (item: any) => item.email === loginInfo.email
      );
      if (!active) {
        let update = [];
        update.push(updateList);
        localStorage.setItem("activeList", JSON.stringify(update));
      } else {
        active.push(updateList);
        localStorage.setItem("activeList", JSON.stringify(active));
        router.push(`/dashboard/${updateList?.team}`);
      }
    } else {
      router.push("/");
      setIsInvited(false);
    }
    let list = pendingLists?.filter(
      (item: any) => item.email !== loginInfo.email
    );
    localStorage.setItem("pendingList", JSON.stringify(list));
  };

  useEffect(() => {
    let teamsInfo = JSON.parse(localStorage.getItem("teamsInfo") as any);
    let pending = JSON.parse(localStorage.getItem("pendingList") as any);
    let loginInfo = JSON.parse(localStorage.getItem("loginInfo") as any);
    setPendingLists(pending);
    setAllTeams(teamsInfo);
    setLoginInfo(loginInfo);
    pending?.map((item: any) => {
      if (item?.email === loginInfo.email) {
        setIsInvited(true);
      }
    });
  }, []);
  return (
    <MainLayout>
      <div className="flex lg:flex-row flex-col justify-between lg:items-center lg:space-y-0 space-y-6">
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
      <UiModal
        openModal={isInvited}
        setOpenModal={setIsInvited}
        title="You have received a team invitation from the Agile3 Team"
      >
        <div className="flex lg:flex-row flex-col lg:justify-center lg:mt-4 mt-6 lg:space-x-6 lg:space-y-0 space-y-4">
          <UiButton
            onClick={() => handleInvite("reject")}
            label="Reject"
            variant="outline"
            className="rounded-full"
          />
          <UiButton
            onClick={() => handleInvite("accept")}
            label="Accept"
            className="rounded-full"
          />
        </div>
      </UiModal>
      {allTeams && allTeams.length ? (
        <div className="grid grid-flow-row lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 my-10">
          {allTeams?.map((team: any, key: string | number) => (
            <Link href={`/dashboard/${team?.teamName}`} key={key}>
              <div className="border border-primary-1 rounded-lg px-6 py-10 cursor-pointer">
                <h2 className="lg:text-2xl text-xl font-medium mb-2">
                  {team?.teamName}
                </h2>
                <h4 className="lg:text-xl text-lg mb-5">{team?.category}</h4>
                <p className="text-base mb-4">
                  Grow Your Team with Ease: <br /> Effortlessly Add Members for
                  Increased Performance and Achievement
                </p>
              </div>
            </Link>
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
          <div className="flex lg:flex-row flex-col lg:justify-center lg:mt-4 mt-6 lg:space-x-6 lg:space-y-0 space-y-4">
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

export default HomePage;
