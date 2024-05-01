import { Form, Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  name: string;
  label?: string;
  type?: string;
  size?: "small" | "medium";
  fullWidth?: boolean;
  placeholder?: string;
  required?: boolean;
};
const DIYInput = ({
  name,
  label,
  type,
  size = "small",
  fullWidth,
  placeholder,
  required,
}: TInputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item
          label={label}
          validateStatus={error ? "error" : ""}
          help={error ? error.message : ""}
          required={required}
        >
          <Input {...field} type={type} placeholder={placeholder || name} />
        </Form.Item>
      )}
    />
  );
};

export default DIYInput;
