import "@mantine/core/styles.css";
import {Box, MantineProvider} from "@mantine/core";
import { theme } from "./theme";
import {BrowserRouter} from "react-router-dom";
import {AppRoutes} from "./AppRoutes.tsx";
import {Layout} from "./Components/Layout/Layout.tsx";

export default function App() {
  return (
      <MantineProvider theme={theme}>
          <Box bg="gray.2" style={{ minHeight: "100vh", overflowX: "scroll" }}>
              <BrowserRouter>
                  <Layout>
                      <AppRoutes />
                  </Layout>
              </BrowserRouter>
          </Box>
      </MantineProvider>
  );
}
