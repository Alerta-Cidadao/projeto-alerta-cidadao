import { useContext } from 'react'
import { UserContext } from '../../Context/userContext'
import { ReportCard } from '../ReportCard'
import { StyledListAllReports } from './style'

export const ListAllReports = () => {
  const {reports} = useContext(UserContext)
  return (
    <StyledListAllReports>
        {reports.map((report) => (
          <ReportCard key={report.id} report={report}/>
        ))}
    </StyledListAllReports>
  )
}

