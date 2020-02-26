import React, { FC } from 'react'
import { Checkbox } from 'vtex.styleguide'
import { UseCheckboxReturnType, useCheckbox } from 'react-hook-form-jsonschema'

import { BaseInputProps } from '../typings/InputProps'

export const CheckboxInput: FC<BaseInputProps> = props => {
  const checkboxObject = useCheckbox(props.pointer)
  return (
    <CheckboxRenderer checkboxObject={checkboxObject} label={props.label} />
  )
}

export const CheckboxRenderer: FC<{
  checkboxObject: UseCheckboxReturnType
  label?: string
}> = props => {
  const checkboxObject = props.checkboxObject
  const subSchema = checkboxObject.getObject()
  const label = props.label ?? subSchema.title ?? checkboxObject.name

  if (checkboxObject.isSingle) {
    const checked = checkboxObject.formContext.watch(checkboxObject.pointer)

    return (
      <>
        <Checkbox
          {...checkboxObject.getItemInputProps(0)}
          label={label}
          required={checkboxObject.isRequired}
          value="true"
          {...(checked ? { checked: true } : { checked: false })}
          onChange={() => {
            const pointer = checkboxObject.pointer

            checkboxObject.formContext.setValue(pointer, !checked)
          }}
          checked={Boolean(checked)}
        />
      </>
    )
  }

  return (
    <>
      {checkboxObject.getItems().map((value, index) => {
        const checked = checkboxObject.formContext.watch(
          `${checkboxObject.pointer}[${index}]`
        )
        return (
          <Checkbox
            {...checkboxObject.getItemInputProps(index)}
            key={`${value}${index}`}
            label={label}
            required={checkboxObject.isRequired}
            value={value}
            {...(checked ? { checked: true } : { checked: false })}
            onChange={() => {
              const pointer = checkboxObject.pointer

              checkboxObject.formContext.setValue(pointer, !checked)
            }}
            checked={Boolean(checked)}
          />
        )
      })}
    </>
  )
}
