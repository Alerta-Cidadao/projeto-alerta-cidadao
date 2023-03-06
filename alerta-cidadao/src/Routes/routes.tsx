import { Routes, Route } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import { LoggedRoutes } from "../Pages/LoggedRoutes";
import { LoginPage } from "../Pages/LoginPage";
import { RegisterPage } from "../Pages/RegisterPage";
import { ReportPage } from "../Pages/ReportPage";
import { UnloggedRoutes } from "../Pages/UnloggedRoutes";
import { UserDashBoardPage } from "../Pages/UserDashBoard";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<UnloggedRoutes />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/report-page/:reportId" element={<ReportPage />} />
      </Route>

      <Route path="/" element={<LoggedRoutes />}>
        <Route index element={<HomePage />} />
        <Route path="/dashboard/:userId" element={<UserDashBoardPage />}/>
        <Route path="/report-page/:reportId" element={<ReportPage />} />
      </Route>

    </Routes>
  );
};
