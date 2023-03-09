import { useContext } from "react";
import { UserContext } from "../../Context/userContext";
import { ReportCard } from "../ReportCard";
import { StyledListAllReports } from "./style";

export const ListAllReports = () => {
    const { filteredReports } = useContext(UserContext);
    return (
        <StyledListAllReports>
            {filteredReports &&
                filteredReports.map((report) => (
                    <ReportCard key={report.id} report={report} />
                ))}
        </StyledListAllReports>
    );
};
