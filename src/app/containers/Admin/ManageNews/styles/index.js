import { Layout, Form } from 'antd';
import styled from 'styled-components';

export const StyledLayout = styled(Layout)`
  height: 100%;
`;

export const StyledContent = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;

  button {
    display: flex !important;
    justify-content: center;
    align-items: center;
  }

  .add-button {
    margin-bottom: 15px;
    align-self: flex-end;
  }
`;

export const StyledThumbnail = styled.img`
  width: 350px;
`;

export const StyledForm = styled(Form)`
  .ant-form-item {
    &-label {
      text-align: left;
      label {
        &:after {
          content: none;
        }
      }
    }
  }
  .toolbar {
    border: 1px solid #d9d9d9;
  }
  .editor {
    height: 300px;
    border: 1px solid #d9d9d9;
  }
`;
