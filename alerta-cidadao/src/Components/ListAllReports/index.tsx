import { useContext } from "react";
import { ReportContext } from "../../Context/reportsContext";
import { ReportCard } from "../ReportCard";
import { SearchForm } from "../SearchForm";
import { StyledListAllReports } from "./style";

export const ListAllReports = () => {
    const { filteredReports } = useContext(ReportContext);
    return (
        <StyledListAllReports>
            <SearchForm/>
           {filteredReports ?
                filteredReports.map((report) => (
                    <ReportCard key={report.id} report={report} />
                ))
            :
            <h1>  Não há reports </h1>
            }
           
        </StyledListAllReports>
    );
};
