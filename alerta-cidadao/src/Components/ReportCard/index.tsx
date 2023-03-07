import { useNavigate } from "react-router-dom";
import { IReport } from "../../Context/@types";
import { StyledReportCard } from "./style";

export interface IReportProp {
  report: IReport;
}

export const ReportCard = ({ report }:IReportProp) => {
  const navigate = useNavigate()

  const goToReportPage = () =>{
    navigate(`/report-page/${report.id}`)
  }
  
  return (
    <StyledReportCard onClick={()=>goToReportPage()}>
      <h1> {report.title} </h1>
      <span> {report.email && report.email} </span>
      <p> {report.description} </p>
    </StyledReportCard>
  );
};
