import { styled } from "styled-components";

export const InputStyles = styled.input<{ icon: string }>`
  border: 1px solid black;
  padding: 15px;
  outline: none;
  margin: 1vw;

  background: ${(props) => (props?.icon ? `url(${props.icon})` : "none")};
  background-position: 10px center; /* Position the SVG on the left side */
  background-repeat: no-repeat;
  background-size: 27px 30px; /* Set the size of the SVG */

  padding-left: 45px;
`;

export const NameStyle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;

  & > input {
    width: 40%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  color: #313131;
  font-size: 18px;
`;

export const StyledSelect = styled.select`
  padding: 13px;
  border: 1px solid black;
  margin: 1vw;
  background-color: transparent;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

export const AddressContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;

  & > input {
    width: 40%;
  }
`;
