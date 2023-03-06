import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "./Components/Header";
import { ListAllReports } from "./Components/ListAllReports";
import { AppRoutes } from "./Routes/routes";

function App() {
  return (
    <div>
      <Header />
      <ListAllReports />

      <AppRoutes />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
