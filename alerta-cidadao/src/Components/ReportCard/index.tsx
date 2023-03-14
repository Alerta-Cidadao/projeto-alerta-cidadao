import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IReport } from "../../Context/@types";
import { ReportContext } from "../../Context/reportsContext";
import { baseURL } from "../../Services/fakeApi";
import TrashButton from "../../assets/TrashButton.svg"
import { StyledReportCard } from "./style";

export interface IReportProp {
    report: IReport;
}

export const ReportCard = ({ report }: IReportProp) => {
    const { reports, setReports } = useContext(ReportContext);

    const deleteReport = async (reportId: number) => {
        const token = localStorage.getItem("@USERTOKEN");

        const toastNewReport = toast.loading("Efetuando comentário");
        try {
            const response = await baseURL.delete(`/reports/${reportId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            toast.update(toastNewReport, {
                render: "Comentário deletado!",
                type: "success",
                isLoading: false,
                autoClose: 3000,
                closeOnClick: true,
            });

            setReports([...reports, response.data]);
        } catch (error) {
            toast.update(toastNewReport, {
                render: "Erro ao deletar o comentário",
                type: "error",
                isLoading: false,
                autoClose: 3000,
                closeOnClick: true,
            });
        }
    };

    const navigate = useNavigate();

    const goToReportPage = () => {
        navigate(`/report-page/${report.id}`);
    };

    return (
        <StyledReportCard>
            <div onClick={() => goToReportPage()}>
                <h1> {report.title} </h1>
                <p> {report.name && report.name} </p>
                {report.city && (
                    <p>
                        <span>{report.city} </span> /{" "}
                        <span> {report.state}</span>
                    </p>
                )}
                {report.img && <img className="userImage" src={report.img} alt="" />}
                <div className="report-description">{report.description}</div>
            </div>
            <img className="trashButton" src={TrashButton} onClick={() => deleteReport(report.id)} />
        </StyledReportCard>
    );
};
