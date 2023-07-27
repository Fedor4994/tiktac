import { Link, Outlet } from "react-router-dom";
import * as Styled from "./Layout.styled";

const Layout = () => {
  return (
    <>
      {/* блок контент для того щоб прижати футер до низу сторінки */}
      <Styled.Content>
        <Styled.Header>
          <div>logo</div>
          <Styled.HeaderMenu>
            <Link to="/profile">My profile</Link>
          </Styled.HeaderMenu>
        </Styled.Header>

        {/* футер і хедер завжди однакові, а у мейн динамічно підставляются сторінки
        в залежності від маршруту */}
        <main>
          <Outlet />
        </main>
      </Styled.Content>

      <Styled.Footer>
        <Styled.FooterList>
          <li>
            <span>GitHub</span>
          </li>
          <li>
            <span>Something</span>
          </li>
        </Styled.FooterList>
      </Styled.Footer>
    </>
  );
};

export default Layout;
