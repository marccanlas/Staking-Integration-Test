import { useState } from "react";
import { ethers } from "ethers";
import { toast } from "react-toastify";

import BalanceCard from '../components/BalanceCard';
import InputForm from '../components/InputForm';
import FetchButton from '../components/FetchButton';
import stakingAbi from '../utils/staking.json';
import rocketAbi from '../utils/rocketToken.json'

const provider = new ethers.JsonRpcProvider(process.env.NEXT_PUBLIC_ETHEREUM_PROVIDER);

const staking_abi = stakingAbi.abi;
const staking_contract_address = process.env.NEXT_PUBLIC_STAKING_CONTRACT_ADDRESS!;
const staking_contract_router = new ethers.Contract(staking_contract_address, staking_abi, provider);

const rocket_abi = rocketAbi.abi;
const rocket_contract_address = process.env.NEXT_PUBLIC_ROCKET_POOL_TOKEN!;
const rocket_contract_router = new ethers.Contract(rocket_contract_address, rocket_abi, provider);

const Home: React.FC = () => {
  const [address, setAddress] = useState<string>("");
  const [stakingAmount, setStakingAmount] = useState<string | number>("");
  const [nativeBalance, setNativeBalance] = useState<string | number>("");
  const [tokenBalance, setTokenBalance] = useState<string | number>("");

  const fetchBalances = async () => {
    if (ethers.isAddress(address)) {
      const staking = Number(await staking_contract_router.getNodeRPLStake(address));
      const balance = Number(await provider.getBalance(address));
      const token = Number(await rocket_contract_router.balanceOf(address));

      setStakingAmount((staking / (10 ** 18)).toFixed(2));
      setNativeBalance((balance / (10 ** 18)).toFixed(2));
      setTokenBalance((token / (10 ** 18)).toFixed(2));
    } else {
      console.log("invalid wallet address")
      toast.warn("Invalid wallet address!", {
        position: "top-right",
        autoClose: 2000,
        closeOnClick: true,
        hideProgressBar: true,
      });
    }
  };

  return (
    <div className="container h-screen flex flex-col items-center justify-center mx-auto p-4">
      <InputForm label="Enter Address" value={address} onChange={setAddress} />
      <FetchButton onClick={fetchBalances} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <BalanceCard title="Staking Amount" balance={stakingAmount} />
        <BalanceCard title="Native Balance" balance={nativeBalance} />
        <BalanceCard title="Rocket Token Balance" balance={tokenBalance} />
      </div>
    </div>
  );
}

export default Home;
