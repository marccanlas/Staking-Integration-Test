import { FetchButtonProps } from '../types/interfaces';

const FetchButton: React.FC<FetchButtonProps> = ({ onClick }) => {
    return (
        <button
            className="bg-blue-500 text-white py-2 px-10 rounded"
            onClick={onClick}
        >
            Fetch Balances
        </button>
    );
}

export default FetchButton;
