import React from "react";

interface Props {
  children: React.ReactNode;
  title: string;
}

const AuthLayout = ({children, title}: Props) => {
  return (
    <div className="container mx-auto flex justify-center items-center font-sans min-h-screen">
      <div className="flex flex-col gap-y-4 p-4 rounded-lg sm:drop-shadow-md bg-white h-full w-[441px]">
        <h1 className="font-bold text-xl">{title}</h1>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
