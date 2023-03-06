import { IReport } from "../../Context/@types";
import { StyledReportCard } from "./style";

export interface IReportProp {
  report: IReport;
}

export const ReportCard = ({ report }:IReportProp) => {
  return (
    <StyledReportCard>
      <h1> {report.title} </h1>
      <span> {report.email && report.email} </span>
      <p> {report.description} </p>
    </StyledReportCard>
  );
};
