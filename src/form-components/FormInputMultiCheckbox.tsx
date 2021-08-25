import React, { useEffect, useState } from "react";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "@material-ui/core";
import { Controller } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";

const options = [
  {
    label: "Mountain",
    value: "mountain",
  },
  {
    label: "Lake",
    value: "lake",
  },
  {
    label: "Park",
    value: "park",
  },
  {
    label: "Other",
    value: "other",
  },
];

export const FormInputMultiCheckbox: React.FC<FormInputProps> = ({
  name,
  control,
  setValue,
  label,
}) => {
  //state
  const [selectedItems, setSelectedItems] = useState<any>(["local"]); // TODO set default from form default

  // handlers
  const handleSelect = (value: any) => {
    const isPresent = selectedItems.indexOf(value);
    if (isPresent !== -1) {
      const remaining = selectedItems.filter((item: any) => item !== value);
      setSelectedItems(remaining);
    } else {
      setSelectedItems((prevItems: any) => [...prevItems, value]);
    }
  };

  // set value
  useEffect(() => {
    console.log('checkbox effect', name, selectedItems);
    setValue(name, selectedItems);
  }, [selectedItems, name, setValue]);


  return (
    <FormControl size={"small"} variant={"outlined"}>
      <FormLabel component="legend">{label}</FormLabel>

      <div>
        {options.map((option: any) => {
          return (
            <FormControlLabel
              control={
                <Controller
                  name={name}
                  render={() => {
                    return (
                      <Checkbox
                        checked={selectedItems.includes(option.value)}
                        onChange={() => handleSelect(option.value)}
                      />
                    );
                  }}
                  control={control}
                />
              }
              label={option.label}
              key={option.value}
            />
          );
        })}
      </div>
    </FormControl>
  );
};
