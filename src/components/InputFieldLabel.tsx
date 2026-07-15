interface InputFieldLabelProps {
    text: string;
    required?: boolean;
}

export default function InputFieldLabel(props: InputFieldLabelProps) {
    return (
        <label className="text-xl font-bold">
            {props.text} {props.required && <span className="text-red-500 font-normal">*</span>}
        </label>
    )
}