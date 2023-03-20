import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IReport } from "../../Context/@types";
import { ReportContext } from "../../Context/reportsContext";
import { baseURL } from "../../Services/fakeApi";
import { StyledReportCard } from "./style";
import TrashButton from "../../assets/TrashButton.svg";

export interface IReportProp {
    report: IReport;
}

export const ReportCard = ({ report }: IReportProp) => {

    const navigate = useNavigate();

    const goToReportPage = () => {
        navigate(`/report-page/${report.id}`);
    };

    return (
        <StyledReportCard onClick={() => goToReportPage()}>
            <h1> {report.title} </h1>
            <p> {report.name && report.name} </p>
            {report.city && (
                <p>
                    <span>{report.city} </span> / <span> {report.state}</span>
                </p>
            )}
            {report.img && (
                <img className="userImage" src={report.img} alt="" />
            )}
            <div className="report-description">{report.description}</div>
        </StyledReportCard>
    );
};
