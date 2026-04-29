"use client";

import { Me } from "./me";
import { Techs } from "./techs";


export function AboutMe() {
  return (
    <div>
      <section className="w-full flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/3">
          <Me />
        </div>
        <div className="w-full md:w-2/3">
          <Techs />
        </div>
      </section>
    </div>
  );
}
