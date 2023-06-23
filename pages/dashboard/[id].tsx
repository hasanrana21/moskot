import React, { useEffect, useState } from "react";
import MainLayout from "@/layouts/main/MainLayout";
import UiButton from "@/components/ui/button";
import { useRouter } from "next/router";
import UiModal from "@/components/ui/modal";
import UiInput from "@/components/ui/input";
import { Tab } from "@headlessui/react";
import { log } from "console";
const dashboard = () => {
  const router = useRouter();
  const id = parseInt(router?.query?.id as string);
  const [teamInfo, setTeamInfo] = useState<any>({});
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [step, setStep] = useState<number>(0);
  const [form, setForm] = useState<object>({
    email: "",
    pending: true,
  });
  const [pendingList, setPendingList] = useState<string[]>([]);
  useEffect(() => {
    let teams = JSON.parse(localStorage.getItem("teamsInfo") as any);
    let team = teams?.find((item: any, key: number) => {
      if (key === id) return item;
    });
    setTeamInfo(team);
  }, [id]);
  const handleStep = () => {
    setStep(step + 1);
    if (step >= 2) {
      setStep(0);
    }
  };
  const handleForm = (e: any) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let pending = JSON.parse(localStorage.getItem("pendingList") as any);
    if (!pending) {
      let list = [];
      list.push(form);
      await localStorage.setItem("pendingList", JSON.stringify(list));
    } else {
      pending.push(form);
      await localStorage.setItem("pendingList", JSON.stringify(pending));
    }
    await setPending();
    setStep(0);
    setOpenModal(false);
  };
  const setPending = () => {
    let pendingLists = JSON.parse(localStorage.getItem("pendingList") as any);
    if (!pendingLists) return;
    setPendingList(pendingLists);
  };
  useEffect(() => {
    setPending();
  }, []);

  return (
    <MainLayout>
      <Tab.Group>
        <div className="flex justify-between items-center">
          <div>
            <h3 className="lg:text-3xl text-xl font-semibold mb-6">
              {teamInfo?.teamName}
            </h3>
            <Tab.List className="space-x-6">
              <Tab className="focus:outline-none">
                {/* <UiButton label="Active member" disabled variant="outline" /> */}
                <span className="border-2 border-primary-1 lg:text-xl text-lg px-6 py-2 font-medium text-primary-1 rounded">
                  Active member
                </span>
              </Tab>
              <Tab className="focus:outline-none">
                {/* <UiButton label="Pending" disabled variant="outline" /> */}
                <span className="border-2 border-primary-1 lg:text-xl text-lg px-6 py-2 font-medium text-primary-1 rounded">
                  Pending ({pendingList ? pendingList.length : 0})
                </span>
              </Tab>
            </Tab.List>
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
                      name="email"
                      type="email"
                      label="Team title"
                      placeholder="Write team title"
                      onChange={handleForm}
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
        <Tab.Panels>
          <Tab.Panel>
            <div className="my-10">asdfasdf</div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="h-screen my-10">
              {pendingList && pendingList.length ? (
                <div>
                  {pendingList?.map((item: any, key: number) => (
                    <ul key={key}>
                      <li className="flex justify-between items-center border-2 border-primary-1 rounded-xl py-3 px-6 lg:text-xl text-lg my-4">
                        <span>{item?.email}</span>
                        <span className="cursor-pointer text-2xl">X</span>
                      </li>
                    </ul>
                  ))}
                </div>
              ) : (
                <img
                  src="/dashboard_background.png"
                  alt="bg-dashboard"
                  className="w-full object-cover"
                />
              )}
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </MainLayout>
  );
};

export default dashboard;
