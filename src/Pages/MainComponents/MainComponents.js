import React from "react";
import LeftComponents from "./LeftComponents";
import RightComponents from "./RightComponents";

const MainComponents = () => {
  return (
    <>
      <div class="flex px-10 ...">
        <div class="grow pr-4   ...">
          {/* This Left components */}

          <LeftComponents />
        </div>
        <div class="grow-0 sm:w-64 2xl:w-[30rem]  ...">
          {/* This right componrts  */}
          <RightComponents />
        </div>
      </div>
    </>
  );
};

export default MainComponents;
