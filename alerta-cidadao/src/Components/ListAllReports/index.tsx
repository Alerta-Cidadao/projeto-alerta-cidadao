import { useContext } from "react";
import { ReportContext } from "../../Context/reportsContext";
import { ReportCard } from "../ReportCard";
import { StyledListAllReports } from "./style";

export const ListAllReports = () => {
    const { filteredReports } = useContext(ReportContext);
    return (
        <StyledListAllReports>
            {filteredReports &&
                filteredReports.map((report) => (
                    <ReportCard key={report.id} report={report} />
                ))}
        </StyledListAllReports>
    );
};
