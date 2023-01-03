import Header from "./Header";
import GlobalStyles from "./styles/GlobalStyles";
import styled from "styled-components";

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`;

export default function Page({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Header></Header>
      <InnerStyles>{children}</InnerStyles>
    </div>
  );
}
