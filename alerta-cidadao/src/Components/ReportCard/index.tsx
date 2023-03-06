import React from 'react'
import { IReport } from '../../Context/@types'
import { StyledReportCard } from './style'

export const ReportCard = ({report}:IReport) => {
  return (
    <StyledReportCard>
        <h1> {report.title} </h1>
        <span> {report.email && report.email} </span>
        <p> {report.description} </p>
        
    </StyledReportCard>
  )
}

