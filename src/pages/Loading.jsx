import React, { useEffect } from "react";
import { LoaderFive, LoaderThree } from "../components/ui/loader";
import { useNavigate, useParams } from "react-router-dom";

const Loading = () => {
  const { nextUrl } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (nextUrl) {
      setTimeout(() => {
        navigate("/" + nextUrl);
      }, 6000);
    }
  }, []);
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-transparent">
      <LoaderFive text={"loading"} />
    </div>
  );
};

export default Loading;
