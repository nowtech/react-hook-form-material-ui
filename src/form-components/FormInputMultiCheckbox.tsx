import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  FormGroup,
} from "@material-ui/core";
// import { useEffect } from "react";
import { Controller } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";

const options = [
  {
    key: 1,
    label: "Mountain",
    value: "mountain",
  },
  {
    key: 2,
    label: "Lake",
    value: "lake",
  },
  {
    key: 3,
    label: "Park",
    value: "park",
  },
  {
    key: 4,
    label: "Other",
    value: "other",
  },
];

export const FormInputMultiCheckbox: React.FC<FormInputProps> = ({
  name,
  control,
  setValue,
  getValues,
  label,
}) => {
  
  // handlers
  const handleSelect = (value: any) => {
    const selectedItems = getValues(name);
    const isPresent = selectedItems.indexOf(value);
    if (isPresent !== -1) {
      const remaining = selectedItems.filter((item: any) => item !== value);
      setValue(name, remaining, { shouldDirty: true });
    } else {
      setValue(name, [...selectedItems, value], { shouldDirty: true });
    }
  };

  // useEffect(() => {
  //   const selectedItems = getValues(name);
  //   console.log('effect', selectedItems);
  //   setValue(name, selectedItems, { shouldDirty: true })
  // }, [name, setValue, getValues])

  return (
    <FormControl size={"small"} variant={"outlined"}>
      <FormLabel component="legend">{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        render={({
          field: { onChange: cbsetOnChange, value: fieldValue },
          fieldState,
          formState,
        }) => {
         // console.log('in render', fieldState, fieldValue, formState);
          return (
            <div>
              checkbox {fieldValue.length}
              <FormGroup row>
                {options.map((option) => {
                  // console.log(option)
                  return (
                    <FormControlLabel
                      label={option.label}
                      value={option.value}
                      key={option.key}
                      control={<Checkbox
                        checked={fieldValue.includes(option.value)}
                        onChange={(e) => {
                          // console.log("props", props, e);
                          handleSelect(option.value);
                        }}
                      />
                        
                      }
                    />
                  );
                })}
              </FormGroup>
            </div>
          );
        }}
      />
    </FormControl>
  );
};