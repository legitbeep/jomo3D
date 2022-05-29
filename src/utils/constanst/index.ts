import { Contract } from "@ethersproject/contracts";
import { JsonRpcSigner } from "@ethersproject/providers";

import jomoAbi from './contract/jomo3d.abi.json';

export const jomoAddr = "0x5269ebDe04d202b1BAE24153692Af91fC28ff018";

export const getJomoContract = (signer: JsonRpcSigner) => {
    return new Contract(jomoAddr, jomoAbi, signer);
};