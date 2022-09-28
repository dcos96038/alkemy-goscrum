import {useState} from "react";

import FilterForm from "../../components/GoScrum/FilterForm";
import Header from "../../components/GoScrum/Header";
import NewTaskForm from "../../components/GoScrum/NewTaskForm";

const GoScrumApp = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col sm:flex-row full-height">
        <NewTaskForm />
        <div className="container items-center drop-shadow-lg rounded-lg bg-[#FAFAFA] m-5 w-full p-3">
          <h2 className="font-semibold text-[16px]">Mis tareas</h2>
          <FilterForm />
        </div>
      </div>
    </>
  );
};

export default GoScrumApp;
