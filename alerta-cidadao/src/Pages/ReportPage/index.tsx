import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { CommentForm } from "../../Components/CommentForm";
import { ReportCard } from "../../Components/ReportCard";
import { IComment, ICommentFormData, IReport } from "../../Context/@types";
import { baseURL } from "../../Services/fakeApi";
import { StyledReportPage, CommentUl } from "./style";

export const ReportPage = () => {
    const [report, setReport] = useState({} as IReport);
    const [comments, setComments] = useState([] as IComment[]);
    const { reportId } = useParams();

    const getReportData = async () => {
        try {
            const response = await baseURL.get(`/reports/${reportId}`);
            setReport(response.data);
        } catch (error) {
            toast.error("error");
        }
    };

    const getCommentsOfSpecificReport = async () => {
        try {
            const response = await baseURL.get(`/reports/${reportId}/comments`);
            setComments(response.data);
        } catch (error) {
            toast.error("error");
        }
    };

    useEffect(() => {
        getReportData();
        getCommentsOfSpecificReport();
    }, []);

    const handleSubmitComment = async (formData: ICommentFormData) => {
        const token = localStorage.getItem("@USERTOKEN");

        const toastNewReport = toast.loading("Efetuando comentário");
        try {
            const response = await baseURL.post("/comments", formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            toast.update(toastNewReport, {
                render: "Comentário registrado!",
                type: "success",
                isLoading: false,
                autoClose: 3000,
                closeOnClick: true,
            });
          
            setComments([...comments, response.data]);
        } catch (error) {
            toast.update(toastNewReport, {
                render: "Erro ao efetuar o comentário, aguarde e tente novamente.",
                type: "error",
                isLoading: false,
                autoClose: 3000,
                closeOnClick: true,
            });
        }
    };

    return (
        <StyledReportPage>
            {report && <ReportCard report={report} />}
            {comments &&
                comments.map((comment: IComment) => (
                    <CommentUl>
                        <li>
                        <p key={comment.id}> {comment.body} </p>
                        </li>
                    </CommentUl>
                    
                ))}

            <CommentForm
                handleSubmitComment={handleSubmitComment}
                idReport={reportId}
            />
        </StyledReportPage>
    );
};
