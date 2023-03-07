import { Routes, Route } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import { LoggedRoutes } from "../Pages/LoggedRoutes";
import { LoginPage } from "../Pages/LoginPage";
import { NewReportPage } from "../Pages/NewReportPage";
import { RegisterPage } from "../Pages/RegisterPage";
import { ReportPage } from "../Pages/ReportPage";
import { UnloggedRoutes } from "../Pages/UnloggedRoutes";
import { UserDashBoardPage } from "../Pages/UserDashBoard";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/report-page/:reportId" element={<ReportPage />} />
      <Route path="/new-report" element={<NewReportPage  />} />

      <Route element={<UnloggedRoutes />}>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>

      <Route element={<LoggedRoutes />}>
        <Route path="/dashboard/:userId" element={<UserDashBoardPage />} />
      </Route>
    </Routes>
  );
};
