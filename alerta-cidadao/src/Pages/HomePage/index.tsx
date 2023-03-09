import { useContext } from "react";
import { Input } from "../../Components/Input";
import { ListAllReports } from "../../Components/ListAllReports";
import { UserContext } from "../../Context/userContext";
import { StyledHomePage } from "./style";
import { FaSearch } from "react-icons/fa";

export const HomePage = () => {

    const { setFilterReports } = useContext(UserContext)
   
    const handleFilterSubmit = (event:any) =>{
        event.preventDefault()
        setFilterReports(event.currentTarget.value)
    }
    return (
        <StyledHomePage>
            <form action="" onSubmit={(event)=>handleFilterSubmit(event)}>
                <Input
                    label="Barra de pesquisa"
                    type="text"
                    placeholder="Cidade, estado ou titulo"
                    onChange={(event:any)=>setFilterReports(event.currentTarget.value)}
                />
                
                <button type="submit"> <FaSearch color="#FFF" size={30}/> </button>
            </form>
            <ListAllReports />
        </StyledHomePage>
    );
};
