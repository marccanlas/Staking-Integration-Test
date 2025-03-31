import { InputFormProps } from '../types/interfaces';

const InputForm: React.FC<InputFormProps> = ({ label, value, onChange }) => {
    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">{label}</label>
            <input
                className="mt-1 p-2 w-[400px] text-center border rounded-md"
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}

export default InputForm;
