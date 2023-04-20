import React, { FC } from "react";
import Input from "./FormInputs/Input";
import TextArea from "./FormInputs/TextArea";
import Select from "./FormInputs/Select";
import RadioButton from "./FormInputs/RadioButton";
import Checkbox from "./FormInputs/Checkbox";
import DatePicker from "./FormInputs/DatePicker";
interface FormikControlProps {
  control: string;
  [key: string]: any; //* for accepting any additional props
}

const FormikControl: FC<FormikControlProps> = ({ control, ...rest }) => {
  switch (control) {
    case "input":
      return (
        <Input label={""} name={""} placeholder={""} type={""} {...rest} />
      );
    case "textarea":
      return <TextArea label={""} name={""} placeholder={""} {...rest} />;
    case "select":
      return (
        <Select label={""} name={""} placeholder={""} options={[]} {...rest} />
      );
    case "radio":
      return <RadioButton label={""} name={""} options={[]} {...rest} />;
    case "checkbox":
      return <Checkbox label={""} name={""} options={[]} {...rest} />;
    case "date":
      return <DatePicker label={""} name={""} {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
