import React from "react";
import { LoaderFive, LoaderThree } from "../components/ui/loader";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-transparent">
      <LoaderFive text={"loading"} />
    </div>
  );
};

export default Loading;
