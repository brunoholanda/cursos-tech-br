import React from "react";
import RoutesApp from "./routes";
import { AuthProvider } from "./contexts/auth";

const App = () => (
  <AuthProvider>
    <RoutesApp />
  </AuthProvider>
);

export default App;