import { MyPage } from "components/common/types";
import React from "react";

const HomePage: MyPage = () => {
  return (
    <div className="container">
      <div className="grid place-content-center min-h-screen">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl my-8">
            Welcome to NextJS Multiple Layouts Tutorial
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

HomePage.Layout = "Main";
