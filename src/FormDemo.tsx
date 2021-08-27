import { Button, Paper, Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { FormInputText } from "./form-components/FormInputText";
import { FormInputMultiCheckbox } from "./form-components/FormInputMultiCheckbox";
import { FormInputDropdown } from "./form-components/FormInputDropdown";
import { FormInputDate } from "./form-components/FormInputDate";
import { FormInputSlider } from "./form-components/FormInputSlider";
import { FormInputRadio } from "./form-components/FormInputRadio";

interface IFormInput {
  textValue: string;
  radioValue: string;
  checkboxValue: string[];
  dateValue: Date;
  dropdownValue: string;
  sliderValue: number;
}

const defaultValues = {
  textValue: "",
  radioValue: "",
  checkboxValue: [],
  dateValue: new Date(),
  dropdownValue: "",
  sliderValue: 0,
};
export const FormDemo = () => {
  const methods = useForm<IFormInput>({ defaultValues: defaultValues });
  const { handleSubmit, reset, control, setValue, getValues } = methods;

  const onSubmit = (data: IFormInput) =>
    console.log(">>>> ", data);

  return (
    <Paper
      style={{
        display: "grid",
        gridRowGap: "20px",
        padding: "20px",
        margin: "10px 300px",
      }}
    >
      <Typography variant="h6"> Form Demo</Typography>

      <FormInputText name="textValue" control={control} label="Text Input" />
      <FormInputRadio
        name={"radioValue"}
        control={control}
        label={"Radio Input"}
      />
      <FormInputDropdown
        name="dropdownValue"
        control={control}
        label="Dropdown Input"
      />
      <FormInputMultiCheckbox
        control={control}
        setValue={setValue}
        getValues={getValues}
        name={"checkboxValue"}
        label={"Checkbox Cluster"}
      />
      <FormInputSlider
        name={"sliderValue"}
        control={control}
        setValue={setValue}
        getValues={getValues}
        label={"Slider Input"}
      />

      <FormInputDate name="dateValue" control={control} label="Date Input" />

      <Button onClick={handleSubmit(onSubmit)} variant={"contained"}>
        {" "}
        Submit{" "}
      </Button>
      <Button onClick={() => reset()} variant={"outlined"}>
        {" "}
        Reset{" "}
      </Button>
    </Paper>
  );
};