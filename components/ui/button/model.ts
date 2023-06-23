export interface UiButtonProps {
    label: string;
    className?: string;
    type?: "button" | "reset" | "submit";
    href?: string;
    variant?: string;
    onClick?: (e:any) => void;
    disabled?: boolean;
    id?: string;
}