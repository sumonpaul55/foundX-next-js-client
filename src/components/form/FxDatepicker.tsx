import { IInputs } from "@/src/types"
import { DatePicker } from "@nextui-org/date-picker"
import { Controller } from "react-hook-form"


interface TInputProps extends IInputs { }
const FxDatepicker = ({ variant = "bordered", size = "md", required = true, name, label, className }: TInputProps) => {

    return (
        <Controller name={name} render={({ field: { value, ...fields } }) => {
            return <DatePicker label={label}  {...fields} variant={variant} size={size} isRequired={required} />
        }} />
    )
}

export default FxDatepicker