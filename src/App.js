import Header from "./components/Header";
import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import MainPage from "./Pages/MainPage";
function App() {
  return (
    <>
      <div className="flex overflow-hidden">
        <Sidebar />

        <MainPage  />
      </div>
    </>
  );
}
export default App;
