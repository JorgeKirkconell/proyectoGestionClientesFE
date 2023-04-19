import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
  Navigate
}
from 'react-router-dom';
import { Home } from "./pages/Home/Home";
import { Version } from "./pages/Version";
import { Empresas, EmpresaForm, EmpresaView } from "./pages/Empresas";
import PrivateRoute from "./components/PrivateRoute";
import ClientesView from './pages/clientes/viewClientes';
import App from './pages/clientes/deleteClientes';
import MyComponent from './pages/clientes/byIdentityView';
import Login from "./pages/Login";
import { ClienteForm, ClienteView, Clientes } from "./pages/Clientes1";

const Routes = ()=>{
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/version" element={<Version />} />
        <Route
          path="/empresas"
          element={
            <PrivateRoute>
              <Empresas />
            </PrivateRoute>
          }
        />
        <Route
          path="/empresas/new"
          element={
            <PrivateRoute>
              <EmpresaForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/empresas/:id"
          element={
            <PrivateRoute>
              <EmpresaView />
            </PrivateRoute>
          }
        />
        <Route
          path="/clientes/new"
          element={
            <PrivateRoute>
              <ClienteForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/clientes/upd/:id"
          element={
            <PrivateRoute>
              <ClienteForm />
            </PrivateRoute>
          }
        />
        <Route path="/clientes" element={<PrivateRoute><ClientesView /></PrivateRoute>} />
        <Route path="/clientes/delete" element={<PrivateRoute><App /></PrivateRoute>} />
        <Route path="/clientes/byId" element={<PrivateRoute><MyComponent /></PrivateRoute>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Switch>
    </Router>
  );
};

export default Routes;
