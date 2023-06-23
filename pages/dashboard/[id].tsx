import React, { useEffect, useState } from "react";
import MainLayout from "@/layouts/main/MainLayout";
import UiButton from "@/components/ui/button";
import { useRouter } from "next/router";
import UiModal from "@/components/ui/modal";
import UiInput from "@/components/ui/input";
const dashboard = () => {
  const router = useRouter();
  const id = parseInt(router?.query?.id as string);
  const [teamInfo, setTeamInfo] = useState<any>({});
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [step, setStep] = useState<number>(0);
  const [email, setEmail] = useState<string>("");
  useEffect(() => {
    let teams = JSON.parse(localStorage.getItem("teamsInfo") as any);
    let team = teams.find((item: any, key: number) => {
      if (key === id) return item;
    });
    setTeamInfo(team);
  }, [id]);
  const handleStep = () => {
    // let stepfoot = 0;
    // stepfoot++;
    setStep(step + 1);
    if (step >= 2) {
      setStep(0);
    }
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    let pending = JSON.parse(localStorage.getItem("pendingList") as any);
    if (!pending) {
      let list = [];
      list.push(email);
      localStorage.setItem("pendingList", JSON.stringify(list));
    } else {
      pending.push(email);
      localStorage.setItem("pendingList", JSON.stringify(pending));
    }
    setOpenModal(false);
  };
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
          <UiButton label="Add members" onClick={() => setOpenModal(true)} />
          <UiModal
            title="Assign new member"
            openModal={openModal}
            setOpenModal={setOpenModal}
          >
            <form onSubmit={handleSubmit}>
              {step < 1 ? (
                <div>
                  <h5 className="text-gray-500 mb-2">Group member can</h5>
                  <ul className="list-decimal list-inside">
                    <li>Identify skills needed.</li>
                    <li>Define clear roles.</li>
                    <li>Assign a leader.</li>
                    <li>Set clear goals.</li>
                  </ul>
                </div>
              ) : (
                <div>
                  <UiInput
                    id="team_title"
                    name="category"
                    type="email"
                    label="Team title"
                    placeholder="Write team title"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              )}

              <div className="text-center mt-4 space-x-6">
                <UiButton
                  label="Cancel"
                  variant="outline"
                  className="rounded-full"
                  onClick={() => setOpenModal(false)}
                />
                <UiButton
                  label="Continue"
                  className="rounded-full"
                  type={step == 2 ? "submit" : "button"}
                  onClick={handleStep}
                />
              </div>
            </form>
          </UiModal>
        </div>
      </div>
      <div className="h-screen my-10">
        <img
          src="/dashboard_background.png"
          alt="bg-dashboard"
          className="w-full object-cover"
        />
      </div>
    </MainLayout>
  );
};

export default dashboard;
