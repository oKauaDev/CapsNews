interface InputJsonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: React.HTMLInputTypeAttribute;
  regexp?: RegExp;
  placeholder?: string;
  label?: string;
  errormessage?: string;
  valueinput?: string;
}

interface ButtonJsonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export type setErrosProps = React.Dispatch<React.SetStateAction<string[]>>;

export interface FormProps {
  inputs: InputJsonProps[];
  button: ButtonJsonProps;
  onSend?: (
    event: React.FormEvent,
    inputs: FormInputValuesProps,
    setErrosInputs: setErrosProps
  ) => unknown;
}

export interface FormInputValuesProps {
  [key: number]: string | number;
}
