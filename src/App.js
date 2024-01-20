import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginScreen from "./components/LoginScreen";
import MainApp from "./components/MainApp";
import PrivateRoute from "./components/PrivateRoute";
import BankTable from "./tables/MasterTables/BankTable";
import CategoryTable from "./tables/MasterTables/CategoryTable";
import CustomerTable from "./tables/MasterTables/CustomerTable";
import ItemTable from "./tables/MasterTables/ItemTable";
import LedgerTable from "./tables/MasterTables/LedgerTable";
import SupplierTable from "./tables/MasterTables/SupplierTable";
import UnitTable from "./tables/MasterTables/UnitTable";
import QuotationTable from "./tables/TransactionTables/QuotationTable";
import SalesTable from "./tables/TransactionTables/SalesTable";
import QuotationNoWiseTable from "./tables/ReportTables/QuotationNoWiseTable";
import QuotationItemWiseTable from "./tables/ReportTables/QuotationItemWiseTable";
import SalesBillNoWiseTable from "./tables/ReportTables/SalesBillNoWiseTable";
import SalesItemWiseTable from "./tables/ReportTables/SalesItemWiseTable";
import Dashboard from "./components/Dashboard";
import SalesForm from "./Forms/SalesForm";
import QuotationForm from "./Forms/QuotationForm";
import "./App.css";
import "./styles/Modals.css";

function App() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const toggleSidebar = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="" element={<Navigate to="dashboard" />} />

          <Route path="" element={<PrivateRoute />}>
            <Route
              path=""
              element={<MainApp toggleSidebar={toggleSidebar} open={open} />}
            >
              <Route path="dashboard" element={<Dashboard />} />

              <Route
                path="sales_form"
                element={
                  <SalesForm
                    show={show}
                    handleShow={handleShow}
                    handleClose={handleClose}
                  />
                }
              />

              <Route
                path="quotation_form"
                element={
                  <QuotationForm
                    show={show}
                    handleShow={handleShow}
                    handleClose={handleClose}
                  />
                }
              />

              <Route
                path="bank"
                element={
                  <BankTable
                    show={show}
                    handleShow={handleShow}
                    handleClose={handleClose}
                  />
                }
              />
              <Route
                path="category"
                element={
                  <CategoryTable
                    show={show}
                    handleShow={handleShow}
                    handleClose={handleClose}
                  />
                }
              />
              <Route
                path="customer"
                element={
                  <CustomerTable
                    show={show}
                    handleShow={handleShow}
                    handleClose={handleClose}
                  />
                }
              />
              <Route
                path="unit"
                element={
                  <UnitTable
                    show={show}
                    handleShow={handleShow}
                    handleClose={handleClose}
                  />
                }
              />
              <Route
                path="item"
                element={
                  <ItemTable
                    show={show}
                    handleShow={handleShow}
                    handleClose={handleClose}
                  />
                }
              />
              <Route
                path="ledger"
                element={
                  <LedgerTable
                    show={show}
                    handleShow={handleShow}
                    handleClose={handleClose}
                  />
                }
              />
              <Route
                path="supplier"
                element={
                  <SupplierTable
                    show={show}
                    handleShow={handleShow}
                    handleClose={handleClose}
                  />
                }
              />
              <Route
                path="quotation"
                element={
                  <QuotationTable
                    show={show}
                    handleShow={handleShow}
                    handleClose={handleClose}
                  />
                }
              />
              <Route
                path="sales"
                element={
                  <SalesTable
                    show={show}
                    handleShow={handleShow}
                    handleClose={handleClose}
                  />
                }
              />
              <Route
                path="quotation_noReports"
                element={
                  <QuotationNoWiseTable
                    show={show}
                    handleShow={handleShow}
                    handleClose={handleClose}
                  />
                }
              />
              <Route
                path="quotation_itemwise_reports"
                element={
                  <QuotationItemWiseTable
                    show={show}
                    handleShow={handleShow}
                    handleClose={handleClose}
                  />
                }
              />
              <Route
                path="sales_billnowise_reports"
                element={
                  <SalesBillNoWiseTable
                    show={show}
                    handleShow={handleShow}
                    handleClose={handleClose}
                  />
                }
              />
              <Route
                path="sales_itemwise_reports"
                element={
                  <SalesItemWiseTable
                    show={show}
                    handleShow={handleShow}
                    handleClose={handleClose}
                  />
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
