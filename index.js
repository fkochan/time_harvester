import { ethers } from "ethers";
import cauldron_abi from "./abis/cauldron_abra.json"
import memo_abi from "./abis/memo_abi.json"
import wMemo_abi from "./abis/wmemo_abi.json"
import time_abi from "./abis/time_abi.json"
import time_staking from "./abis/time_staking_abi.json"


const provider = new ethers.providers.Web3Provider(window.ethereum)
const signer = provider.getSigner()

const timeAddress = "0xb54f16fb19478766a268f172c9480f8da1a7c9c3"
const cauldronAddress = "0xc568a699c5B43A0F1aE40D3254ee641CB86559F4"
const memoAddress = "0x136acd46c134e8269052c62a67042d6bdedde3c9"
const wMemoAddress = "0x0da67235dd5787d67955420c84ca1cecd4e5bb3b"
const timeStakingAddress = "0x4456B87Af11e87E329AB7d7C7A246ed1aC2168B9"

const timeAbi = JSON.stringify(time_abi)
const cauldronAbi = JSON.stringify(cauldron_abi)
const memoAbi = JSON.stringify(memo_abi)
const wMemoAbi = JSON.stringify(wMemo_abi)
const timeStakingAbi = JSON.stringify(time_staking)

const timeContract = new ethers.Contract(timeAddress, timeAbi, provider);
const cauldronContract = new ethers.Contract(cauldronAddress, cauldronAbi, provider)
const memoContract = new ethers.Contract(memoAddress, memoAbi, provider)
const wMemoContract = new ethers.Contract(wMemoAddress, wMemoAbi, provider)
const timeStakingContract = new ethers.Contract(timeStakingAddress, timeStakingAbi, provider)


/* FIRST STEP - WITHDRAW FROM ABRA CAULDRON */ 

/* Cook 
payableAmount(avax)
actions (uint8[])
values (uint256[])
datas (bytes[])
*/


let rawTxn = await cauldronContract.populateTransaction.cook(



/* SECOND STEP - Unwrap wMEMO */ 

/* unwrap
_amount (uint256)
*/



/* THIRD STEP - Unstake wMEMO */ 

/* unstake
_amount (uint256)
_trigger (bool)
*/



/* FOURTH STEP - Swap (swapExactTokensForTokens) */

/* 
amountIn (uint256)
amountOutMin (uint256)
path (address[])
to (address)
deadline (uint256)
*/
