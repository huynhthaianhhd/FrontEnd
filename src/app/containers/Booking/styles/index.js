import Button from 'app/components/Button';
import styled from 'styled-components';

export const StyledBooking = styled.div``;

export const Price = styled.h1`
  color: #44c020;
  font-size: 40px;
  font-weight: 500;
  text-align: center;
`;

export const Border = styled.div`
  width: 100%;
  border-bottom: 1px dashed #d4d4d4;
  margin: 20px 0;
`;

export const PickedSeats = styled.div`
  display: flex;
  justify-content: space-between;
  h4 {
    font-size: 16px;
    font-weight: 500;
    color: #44c020;
  }
  h3 {
    font-size: 17px;
    font-weight: 550;
  }
`;

export const Payments = styled.div`
  h3 {
    font-size: 17px;
    font-weight: 550;
  }
  .ant-radio-wrapper {
    padding-left: 20px;
    font-size: 15px;
    font-weight: 500;
  }
`;

export const BookingButton = styled(Button)`
  transition: none;
  font-size: 20px;
  background-image: linear-gradient(223deg, #b4ec51 0, #429321 100%);
  height: 60px;
  color: white;
  border: none;

  &:hover {
    background-image: linear-gradient(223deg, #b4ec51 0, #429321 100%);
    color: white;
    opacity: 0.8;
  }

  &:focus {
    background-image: linear-gradient(223deg, #b4ec51 0, #429321 100%);
    color: white;
    opacity: 0.8;
  }

  &.ant-btn[disabled] {
    color: white;
    opacity: 1;
    background-color: #afafaf;
    &:hover {
      opacity: 1;
    }
  }
`;

export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  height: calc(100vh - 64px);
  .content {
    padding: 40px;
  }
`;

export const MovieName = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;

export const MovieInfo = styled.div`
  display: flex;
  align-items: center;
  img {
    display: inline-block;
    width: 70px;
    margin-right: 15px;
  }
`;

export const VerticalRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HorizontalRow = styled.div`
  display: flex;
  align-items: center;
  p {
    margin: 0;
    font-size: 15px;
    line-height: 28px;
  }
`;
