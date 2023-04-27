import React from 'react';
import { colorModeContext,useMode } from "./theme";
import { CssBaseline,ThemeProvider } from "@mui/material";
import {Route,Routes} from "react-router-dom";
import TopBar from "./scence/global/topBar";
import Sidebar from "./scence/global/sideBar";
import Dashboard from "./scence/Dashboard";

import AddUser from "./scence/AddUser";
import CollectionReport from "./scence/CollectionReport";
import CollectedReport from "./scence/CollectedReport";
import PendingReport from "./scence/PendingReport";
import AllUsers from "./scence/AllUsers";
// import Transactions from "./scence/Trasactions";
import AddStaff from "./scence/AddStaffs";
import  Form  from './scence/form';
// import Payment from "./scence/Payment";



function App() {

  const[theme,colorMode]= useMode()
  return (
   <colorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
    <div className="app">
      <Sidebar/>
    <main className="content">
      <TopBar/>
      <Routes>
        <Route path="/" element={<Dashboard></Dashboard>}/>
         <Route path="/adduser" element={<AddUser></AddUser>}/>
        <Route path="/collectionReport" element={<CollectionReport></CollectionReport>}/>
        <Route path="/collectedReport" element={<CollectedReport></CollectedReport>}/>
        <Route path="/pendingReport" element={<PendingReport></PendingReport>}/>
        <Route path="/allUsers" element={<AllUsers></AllUsers>}/>
        <Route path="/addStaff" element={<AddStaff></AddStaff>}/>
        <Route path="/form" element={<Form/>}/>

        {/* <Route path="/transactoins" element={<Transactions></Transactions>}/> */} 
      </Routes>
    
    
    </main>
    </div>
    </ThemeProvider>

   </colorModeContext.Provider>
  );
}

export default App;
