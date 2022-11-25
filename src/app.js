import { Suspense } from "react";
import "./app.css";
import { Loader } from "./components/loader/loader";
import { Routes } from "./routes/router";

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes />
    </Suspense>
  );
};

export default App;
