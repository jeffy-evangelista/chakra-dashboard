import React, { FunctionComponent } from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
type CheckboxProps = {
  [key: string]: any;
  label: string;
  name: string;
  options: any[];
};

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  name,
  options,
  ...rest
}) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>

      <Field name={name} {...rest}>
        {({ field }: any) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type="checkbox"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextError as FunctionComponent} />
    </div>
  );
};
export default Checkbox;
