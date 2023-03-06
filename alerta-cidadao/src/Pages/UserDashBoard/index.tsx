import React from "react";
import { UserReportList } from "../../Components/UserReportsList";
import { StyledUserDashBoard } from "./style";

export const UserDashBoardPage = () => {
  return (
    <StyledUserDashBoard>
      <UserReportList />
    </StyledUserDashBoard>
  );
};
