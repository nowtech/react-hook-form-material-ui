import { Button, Paper, Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { FormInputText } from "./form-components/FormInputText";
import { FormInputMultiCheckbox } from "./form-components/FormInputMultiCheckbox";
import { FormInputDropdown } from "./form-components/FormInputDropdown";
import { FormInputDate } from "./form-components/FormInputDate";
// import { FormInputSlider } from "./form-components/FormInputSlider";
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
  checkboxValue: ["mountain"],
  dateValue: new Date(),
  dropdownValue: "",
  sliderValue: 80,
};
export const FormDemo = () => {
  const methods = useForm<IFormInput>({ defaultValues: defaultValues });
  const { handleSubmit, reset, control, setValue } = methods; // watch
  const onSubmit = (data: IFormInput) => console.log(data);

  // const data:any = defaultValues; //TODO define type
  // const watchdata = watch(data, defaultValues);

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
      <FormInputDate name="dateValue" control={control} label="Date Input" />
      <FormInputMultiCheckbox
        control={control}
        setValue={setValue}
        name={"checkboxValue"}
        label={"Checkbox Input"}
      />
      {/* <FormInputSlider
        name={"sliderValue"}
        control={control}
        // setValue={setValue}
        label={"Slider Input"}
      /> */}

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
