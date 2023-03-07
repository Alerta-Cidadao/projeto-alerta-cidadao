import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { IComment, IReport } from '../../Context/@types'
import { baseURL } from '../../Services/fakeApi'
import { StyledReportPage } from './style'

export const ReportPage = () => {
  const [report, setReport] = useState({} as IReport)
  const [comments, setComments] = useState({} as IComment)
  const {reportId} = useParams()

  useEffect(() => {
    const getReportData = async () => {
      try {
        const response = await baseURL.get(`/reports/${reportId}`);
        setReport(response.data);
      } catch (error) {
        toast.error("error");
      }
    };
    getReportData();
  }, []);

  useEffect(() => {
    const getCommentsOfSpecificReport = async () => {
      try {
        const response = await baseURL.get(`/reports/${reportId}/comments`);
        setComments(response.data);
      } catch (error) {
        toast.error("error");
      }
    };
    getCommentsOfSpecificReport();
  }, []);

  console.log(comments)
  return (
    <StyledReportPage>
        {
        report && 
        <h1>{report.title}</h1>
        } 
        {
          comments && 
          comments.map((comment:IComment) => (
            <p key={comment.id}> {comment.body} </p>
          ))
        }
        
    </StyledReportPage>
  )
}

