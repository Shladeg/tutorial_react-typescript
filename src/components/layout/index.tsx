import { FC, PropsWithChildren } from "react";

import Container from "components/common/container";

import Header from "./header";

const Layout: FC<PropsWithChildren<{}>> = ({ children }) => (
  <>
    <Header />

    <Container>{children}</Container>
  </>
);

export default Layout;
