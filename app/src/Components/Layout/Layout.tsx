import {AppShell} from "@mantine/core";
// import { AppFooter } from "./Footer";
import { ReactNode } from "react";
import { AppHeader } from "./Header/Header.tsx";

interface LayoutProps {
    children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <AppShell
            header={{ height: 80 }}
            footer={{ height: 60 }}
            padding="md"
        >
            <AppShell.Header>
                <AppHeader />
            </AppShell.Header>
            <AppShell.Main>{ children }</AppShell.Main>
            {/*<AppShell.Footer>*/}
            {/*    <AppFooter />*/}
            {/*</AppShell.Footer>*/}
        </AppShell>
    );
}
