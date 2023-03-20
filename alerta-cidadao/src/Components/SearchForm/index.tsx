import { useContext } from "react";
import { Input } from "../../Components/Input";
import { FaSearch } from "react-icons/fa";
import { ReportContext } from "../../Context/reportsContext";
import { StyledSearchForm } from "./style";
import { useNavigate } from "react-router-dom";

export const SearchForm = () => {
    const { setFilterReports } = useContext(ReportContext);
    const navigate = useNavigate()
    const handleFilterSubmit = (event: any) => {
        event.preventDefault();
        navigate('/')
    };

    return (
        <StyledSearchForm
            action=""
            onSubmit={(event) =>
                handleFilterSubmit(event)
            }
        >
            <Input
                label="Barra de pesquisa"
                type="text"
                placeholder="Cidade, estado ou titulo"
                onChange={(event: any) =>
                     setFilterReports(event.currentTarget.value)
                }
            />
            <button type="submit">
                <FaSearch color="#FFF" size={30} />
            </button>
        </StyledSearchForm>
    );
};
