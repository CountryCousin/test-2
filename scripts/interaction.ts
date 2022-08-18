import { ethers } from "hardhat";

const main = async () => {

    const Staking = await ethers.getContractFactory("Staking");
    const staking = Staking.attach("0xAb4155dad989DFa948cC1ea25438e6b9e3C2A6E7");

  const stakeTxne = await staking.stake(1, { value: ethers.utils.parseEther("0.1")});
  const stakeTxnReciept = await stakeTxne.wait();
  console.log("Stake: ", stakeTxnReciept);

    const stakeBalanceTxn = await staking.checkContractBalance();
    console.log("Stake: ", stakeBalanceTxn);

 const stakeWithdrawTxn = await staking.withdraw();
 const stakeWithdrawTxnReciept = await stakeWithdrawTxn.wait();
 console.log("Stake: ", stakeWithdrawTxnReciept);
  

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
