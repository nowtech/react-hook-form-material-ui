import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { Controller } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";
const DATE_FORMAT = "dd-MMM-yy";

export const FormInputDate = ({ name, control, label }: FormInputProps) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Controller
        name={name}
        control={control}
        render={({
          field: { onChange, value },
          fieldState,
          formState,
        }) => (
          <KeyboardDatePicker
            fullWidth
            variant="inline"
            id={`date-${Math.random()}`}
            label={label}
            rifmFormatter={(val) => val.replace(/[^[a-zA-Z0-9-]*$]+/gi, "")}
            refuse={/[^[a-zA-Z0-9-]*$]+/gi}
            autoOk
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
            format={DATE_FORMAT}
            value={value}
            onChange={onChange}
          />
        )}
      />
    </MuiPickersUtilsProvider>
  );
};
