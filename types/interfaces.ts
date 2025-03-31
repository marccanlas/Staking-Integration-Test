export interface BalanceCardProps {
    title: string;
    balance: string | number;
}

export interface InputFormProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
}

export interface FetchButtonProps {
    onClick: () => void;
}
