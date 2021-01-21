import { memo } from 'react';
import { Header } from './Header';
import { StyledLayout, StyledMain, StyledContent } from './styles';
export const AdminLayout = ({ children, ...props }) => {
  return (
    <StyledLayout>
      <StyledMain>
        <Header />
        <StyledContent>
          <div className="content">{children}</div>
        </StyledContent>
      </StyledMain>
    </StyledLayout>
  );
};
export default memo(AdminLayout);
