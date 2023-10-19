import React from "react";
import { FormParent } from "./styles/FormParent";
import Input from "./Input";
import { Label, Container, NameStyle } from "./styles/InputStyle";
import envelope from "./svg/envelope2.svg";
import telephone from "./svg/telephone.svg";
import calendar from "./svg/calendar.svg";
import Address from "./Address";

const Form = () => {
  return (
    <FormParent>
      <h2>Registration Form</h2>
      <Container>
        <Label>1. Name*</Label>

        <NameStyle>
          <Input type="text" label="NAME *" placeholder="First Name" />
          <Input type="text" placeholder="Last Name" />
        </NameStyle>
      </Container>

      <Container>
        <Label>2. Email*</Label>
        <Input type="email" icon={envelope} placeholder="Email" />
      </Container>

      <Container>
        <Label>3. Telephone*</Label>
        <Input type="phone" icon={telephone} placeholder="Email" />
      </Container>

      <Container>
        <Address />
      </Container>

      <Container>
        <Label>5. Date of Birth*</Label>
        <Input type="date" icon={calendar} placeholder="Email" />
      </Container>
    </FormParent>
  );
};

export default Form;
