import { ListAllReports } from "../../Components/ListAllReports";
import { SearchForm } from "../../Components/SearchForm";
import { StyledHomePage } from "./style";

export const HomePage = () => {
    return (
        <StyledHomePage>
            <ListAllReports />
        </StyledHomePage>
    );
};
