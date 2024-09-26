import { IInputs } from "@/src/types"
import { Select, SelectItem } from "@nextui-org/select"
import { useFormContext } from "react-hook-form";


interface ISelectProps extends IInputs {
    options: {
        key: string;
        label: string;
    }[]
}

const FxSelect = ({ options, name, label, className, disabled }: ISelectProps) => {

    const { register, formState: { errors } } = useFormContext()
    return (
        <Select {...register(name)}
            label={label}
            placeholder="Select an animal"
            className={className}
            isDisabled={disabled}>
            {
                options?.map((option) => (
                    <SelectItem key={option.key}>{option.label}</SelectItem>
                ))
            }
        </Select>
    )
}

export default FxSelect