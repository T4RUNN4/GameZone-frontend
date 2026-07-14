interface InputFieldLabelProps {
    text: string;
    required?: boolean;
}

export default function InputFieldLabel({ text, required }: InputFieldLabelProps) {
    return (
        <label className="text-xl font-bold">
            {text} {required && <span className="text-red-500 font-normal">*</span>}
        </label>
    )
}