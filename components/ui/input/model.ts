export interface UiInputProps {
    label?: string;
    id: string;
    type: string;
    name: string;
    placeholder: string;
    onChange: (value: any) => void;

}