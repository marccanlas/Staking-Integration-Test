import { BalanceCardProps } from '../types/interfaces';

const BalanceCard: React.FC<BalanceCardProps> = ({ title, balance }) => {
    return (
        <div className="bg-white py-4 px-10 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">{title}</h2>
            <p className="text-2xl">{balance}</p>
        </div>
    );
}

export default BalanceCard;
