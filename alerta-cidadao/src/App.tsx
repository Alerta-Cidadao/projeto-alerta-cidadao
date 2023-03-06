import { ToastContainer } from "react-toastify";
import { Header } from "./Components/Header";
import { ListAllReports } from "./Components/ListAllReports";

function App() {
  return (
    <div>
      <Header />
      <ListAllReports />

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
