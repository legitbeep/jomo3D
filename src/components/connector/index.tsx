import React from 'react';
import { useWeb3React } from "@web3-react/core"
import { Button } from '@chakra-ui/react';
import { AbstractConnector } from '@web3-react/abstract-connector';

import { injected } from 'utils/connectors';
// import { useEagerConnect, useInactiveListener } from "hooks"
import { parseAccount } from "utils";

export default function({...rest}) {
    
  const { connector, library, chainId, account, activate, deactivate, active, error } = useWeb3React();

  // // handle logic to recognize the connector currently being activated
  // const [activatingConnector, setActivatingConnector] = React.useState<any>()
  // React.useEffect(() => {
  //   if (activatingConnector && activatingConnector === connector) {
  //     setActivatingConnector(undefined)
  //   }
  // }, [activatingConnector, connector])

  // // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  // const triedEager = useEagerConnect()

  // // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  // useInactiveListener(!triedEager || !!activatingConnector)

  const handleConnect = () => {
    activate(injected);
  }

  return (
    <Button disabled={active} onClick={handleConnect} {...rest}>
      { active ? parseAccount(account ?? "") : "Connect"}
    </Button>
  )

}