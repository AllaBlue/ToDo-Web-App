import { ReactNode } from "react";

type MainContainerProps = {
  children: ReactNode;
};

const MainContainer = ({ children }: MainContainerProps) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px",
          backgroundColor: "#2196f3",
          color: "white",
        }}
      >
        {children}
      </div>
    </>
  );
};

export default MainContainer;
