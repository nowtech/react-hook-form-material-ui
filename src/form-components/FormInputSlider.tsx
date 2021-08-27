// import React from "react";
import { FormLabel, Slider } from "@material-ui/core";
import { Controller } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";

export const FormInputSlider = ({
  name,
  control,
  setValue,
  label,
}: FormInputProps) => {
  // state
  // const [sliderValue, setSliderValue] = React.useState<number>(20);

  // useEffect(() => {
  //   // console.log(sliderValue);
  //   if (sliderValue) setValue(name, sliderValue);
  // }, [sliderValue, name, setValue]);

  const handleChange = (event: any, newValue: number | number[]) => {
    setValue(name, newValue as number);
  };

  

  return (
    <>
      <FormLabel component="legend">{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        render={({
          field: { onChange, value },
          fieldState,
          formState,
        }) => ( 
          <Slider
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            min={0}
            max={100}
            step={1}
          />
        )}
      />
    </>
  );
};

// render={({
//   field: { onChange, value },
//   fieldState: { error },
//   formState,
// }) => (
//   <RadioGroup value={value} onChange={onChange}>
//     {generateRadioOptions()}
//   </RadioGroup>
// )}