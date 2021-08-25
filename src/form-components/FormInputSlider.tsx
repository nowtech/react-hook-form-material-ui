import React, { useEffect } from "react";
import { FormLabel, Slider } from "@material-ui/core";
import { Controller } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";

export const FormInputSlider = ({
  name,
  control,
  // setValue,
  label,
}: FormInputProps) => {
  // state
  // const [sliderValue, setSliderValue] = React.useState<number>(20);

  // useEffect(() => {
  //   // console.log(sliderValue);
  //   if (sliderValue) setValue(name, sliderValue);
  // }, [sliderValue, name, setValue]);

  // const handleChange = (event: any, newValue: number | number[]) => {
  //   setSliderValue(newValue as number);
  // };

  return (
    <>
      <FormLabel component="legend">{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        render={() => ( // TODO field, fieldState, formState, or onChange, value 
          <Slider
            // value={value}
            // onChange={onChange}
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