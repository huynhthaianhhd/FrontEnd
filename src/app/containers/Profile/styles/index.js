import EditIcon from 'app/components/EditIcon';
import styled from 'styled-components';

export const StyledProfile = styled.div`
  display: flex;
  justify-content: center;
  .profile-form {
    margin-top: 60px;
    max-width: 800px;
    .group-info {
      justify-content: center;
      display: flex;
      flex-direction: column;
      > h5 {
        margin: 0;
        opacity: 0.7;
        font-weight: normal;
      }
    }
  }
`;

export const StyledEditIcon = styled(EditIcon)`
  display: inline-table;
  position: absolute;
  bottom: 7px;
  right: 0;
`;

export const StyledAvatar = styled.div`
  display: inline-flex;
  position: relative;
`;
