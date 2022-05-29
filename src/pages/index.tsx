import { useEffect, useState } from "react";
import { Box, Button } from "@chakra-ui/react";
import { Contract } from "@ethersproject/contracts";

import { useEagerConnect, useInactiveListener } from "hooks";
import { getJomoContract } from "utils/constanst";
import { useWeb3React } from "@web3-react/core";
import { JsonRpcSigner } from "@ethersproject/providers";
import { getSigner } from "utils";

const Home = () => {

  const { library, account } = useWeb3React();
  const [signer, setSigner] = useState<JsonRpcSigner>();
  const [jomoContract, setJomoContract] = useState<Contract>();

  useEffect(() => {
    // const tried = useEagerConnect();
    //useInactiveListener(!tried);
    if ( account ) {
      const curSigner = getSigner(library, account ?? "");
      setSigner(curSigner);
      if (!jomoContract) setJomoContract(getJomoContract(curSigner));
    }
  },[account])

  const handleClick = () => {
    console.log(jomoContract!.kickStart())
  }
  return (
    <Box mb={8} w="full">
      <Button onClick={handleClick} >Click</Button>
    </Box>
  );
};

export default Home;
