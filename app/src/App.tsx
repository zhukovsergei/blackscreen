import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import {BrowserRouter} from "react-router-dom";
import {AppRoutes} from "./AppRoutes.tsx";
import {Layout} from "./Components/Layout/Layout.tsx";

export default function App() {
  return (
      <MantineProvider theme={theme}>
          <BrowserRouter>
              <Layout>
                  <AppRoutes />
              </Layout>
          </BrowserRouter>
      </MantineProvider>
  );
}
