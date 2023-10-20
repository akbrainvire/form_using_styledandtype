import React, { useState } from "react";
import { FormParent } from "./styles/FormParent";
import Input from "./Input";
import { Label, Container, NameStyle } from "./styles/InputStyle";
import envelope from "./svg/envelope2.svg";
import telephone from "./svg/telephone.svg";
import calendar from "./svg/calendar.svg";
import Address from "./Address";
import CheckboxComponent from "./CheckBoxComponent";
import TermsAndCondition from "./TermsAndCondition";
import Error from "./Error";

const Form: React.FC = () => {
  const [data, setData] = useState({
    name: {
      firstname: "",
      secondname: "",
    },
    email: "",
    phone: "",
    dob: "",
    checkboxData: {},
    address: {
      country: "",
      state: "",
      city: "",
    },
  });

  const initialError = {
    name: {
      firstname: "",
      secondname: "",
    },
    email: "",
    phone: "",
    dob: "",
  };
  const [error, setError] = useState(initialError);

  const handleAddressData = (data: any) => {
    setData((prev) => {
      return {
        ...prev,
        address: {
          country: data.country,
          state: data.state,
          city: data.city,
        },
      };
    });
  };
  const validateFom = () => {
    let isValid = true;
    let newerror = { ...error };
    if (
      data.name.firstname.length < 4 ||
      !/^[A-Za-z]+$/.test(data.name.firstname)
    ) {
      isValid = false;
      newerror.name.firstname =
        "**Please enter a valid first name (only letters and at least 4 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      isValid = false;
      newerror.email = "**Please enter a valid email address.";
    }

    let phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(data.phone)) {
      isValid = false;
      newerror.phone = "**Please enter a valid mobile number (10 digits)";
    }

    if (data.dob.length < 1) {
      isValid = false;
      newerror.dob = "**Please enter date of birth";
    }

    setError(newerror);

    return isValid;
  };

  const onSubmitHandler = () => {
    const isValid = validateFom();

    if (isValid) {
      console.log("Form Submitted SuccessFully");
    }
  };

  // console.log(error);
  const handleCheckBoxData = (data: any) => {
    setData((prev) => {
      return {
        ...prev,
        checkboxData: data,
      };
    });
  };

  const onChangeHandler = (e: any, w: string) => {
    if (w === "fname") {
      let fname = e.target.value;
      setData((prev) => {
        return {
          ...prev,
          name: {
            ...prev.name,
            firstname: fname,
          },
        };
      });
    }
    if (w === "lname") {
      let lname = e.target.value;
      setData((prev) => {
        return {
          ...prev,
          name: {
            ...prev.name,
            secondname: lname,
          },
        };
      });
    } else {
      let value = e.target.value;
      setData((prev) => {
        return {
          ...prev,
          [w]: value,
        };
      });
    }
  };
  return (
    <FormParent>
      <h2>Registration Form</h2>
      <Container>
        <Label>1. Name*</Label>

        <NameStyle>
          <Input
            type="text"
            label="NAME *"
            placeholder="First Name"
            onChange={(e: any) => onChangeHandler(e, "fname")}
          />
          <Input
            type="text"
            placeholder="Last Name"
            onChange={(e: any) => onChangeHandler(e, "lname")}
          />
        </NameStyle>
        {error.name.firstname ? <Error message={error.name.firstname} /> : ""}
      </Container>

      <Container>
        <Label>2. Email*</Label>
        <Input
          type="email"
          icon={envelope}
          placeholder="Email"
          onChange={(e: any) => onChangeHandler(e, "email")}
        />
        {error.email ? <Error message={error.email} /> : ""}
      </Container>

      <Container>
        <Label>3. Telephone*</Label>
        <Input
          type="phone"
          icon={telephone}
          placeholder="10 digit mobile number"
          onChange={(e: any) => onChangeHandler(e, "phone")}
        />
        {error.phone ? <Error message={error.phone} /> : ""}
      </Container>

      <Container>
        <Address handleAddressData={handleAddressData} />
      </Container>

      <Container>
        <Label>5. Date of Birth*</Label>
        <Input
          type="date"
          icon={calendar}
          placeholder="DateofBirth"
          onChange={(e: any) => onChangeHandler(e, "dob")}
        />
        {error.dob ? <Error message={error.dob} /> : ""}
      </Container>

      <Container>
        <Label>6. Where did you hear about us?</Label>
        <CheckboxComponent handleCheckBoxData={handleCheckBoxData} />
      </Container>

      <Container>
        <TermsAndCondition onSubmitHandler={onSubmitHandler} />
      </Container>
    </FormParent>
  );
};

export default Form;
