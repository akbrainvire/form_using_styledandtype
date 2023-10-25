import { useEffect, useState } from "react";
import { CheckboxInput, CheckboxLabel } from "./styles/InputStyle";
import Input from "./Input";

interface CheckBoxOption {
  friendOrColleague: boolean;
  google: boolean;
  articleNews: boolean;
  blogPost: boolean;
  other: boolean;
}

interface ICheckBox {
  handleCheckBoxData: (data: any) => void;
}

const CheckboxComponent: React.FC<ICheckBox> = (props) => {
  const [options, setOptions] = useState<CheckBoxOption>({
    friendOrColleague: false,
    google: false,
    articleNews: false,
    blogPost: false,
    other: false,
  });

  const [otherData, setOtherData] = useState<string>("");

  useEffect(() => {
    props.handleCheckBoxData(options);
  }, [options]);

  const handleCheckboxChange = (option: boolean, opt: string) => {
    // console.log(options);
    setOptions({
      ...options,
      [opt]: option,
    });
  };

  const handleOtherInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtherData(e.target.value);
  };

  return (
    <>
      <CheckboxLabel>
        <CheckboxInput
          type="checkbox"
          checked={options.friendOrColleague}
          onChange={() =>
            handleCheckboxChange(
              !options["friendOrColleague"],
              "friendOrColleague"
            )
          }
        />
        A Friend or Colleague
      </CheckboxLabel>

      <CheckboxLabel>
        <CheckboxInput
          type="checkbox"
          checked={options.google}
          onChange={() => handleCheckboxChange(!options["google"], "google")}
        />
        Google
      </CheckboxLabel>

      <CheckboxLabel>
        <CheckboxInput
          type="checkbox"
          checked={options.articleNews}
          onChange={() =>
            handleCheckboxChange(!options["articleNews"], "articleNews")
          }
        />
        Article News
      </CheckboxLabel>

      <CheckboxLabel>
        <CheckboxInput
          type="checkbox"
          checked={options.blogPost}
          onChange={() =>
            handleCheckboxChange(!options["blogPost"], "blogPost")
          }
        />
        Blog Post
      </CheckboxLabel>

      <CheckboxLabel>
        <CheckboxInput
          type="checkbox"
          checked={options.other}
          onChange={() => handleCheckboxChange(!options["other"], otherData)}
        />
        Other
      </CheckboxLabel>

      {options.other && (
        <Input
          type="text"
          placeholder="Please specify"
          value={otherData}
          onChange={handleOtherInputChange}
        />
      )}
    </>
  );
};

export default CheckboxComponent;
