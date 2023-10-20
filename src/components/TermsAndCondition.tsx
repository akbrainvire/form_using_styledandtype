import React, { useState } from "react";
import {
  Button,
  CheckboxInput,
  CheckboxLabel,
  TandCondition,
} from "./styles/InputStyle";

interface ITandCond {
  onSubmitHandler: (data: any) => void;
}

const TermsAndCondition: React.FC<ITandCond> = (props: any) => {
  const [ischecked, setIsChecked] = useState<boolean>(false);

  const handleCheckboxChange = () => {
    setIsChecked((prev) => {
      return !prev;
    });
  };

  return (
    <TandCondition>
      <CheckboxLabel>
        <CheckboxInput
          type="checkbox"
          checked={ischecked}
          onChange={handleCheckboxChange}
        />
        I have read, understood, and accepted the PRIVACY POLICY for
        membership.Terms and Conditions
      </CheckboxLabel>

      <Button disabled={!ischecked} onClick={props.onSubmitHandler}>
        Submit
      </Button>
    </TandCondition>
  );
};

export default TermsAndCondition;
