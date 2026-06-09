"use client";

import { Me } from "./me";
import { Techs } from "./techs";


export function AboutMe() {
  return (
    <section className="w-full mx-auto md:w-[60%] flex flex-col md:flex-row justify-between items-center">
      <div className="w-full md:w-1/3">
        <Me />
      </div>
      <div className="w-full md:w-2/3">
        <Techs />
      </div>
    </section>
  );
}
