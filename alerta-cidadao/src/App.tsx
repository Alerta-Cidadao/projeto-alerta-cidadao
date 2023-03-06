import { ToastContainer } from "react-toastify";
import { Header } from "./Components/Header";
import { ReportCard } from "./Components/ReportCard";

function App() {
  const random = [1, 2, 3, 4, 5];
  return (
    <div>
      <Header />
      <ul>
        {random.map((random) => (
          <ReportCard />
        ))}
      </ul>

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
