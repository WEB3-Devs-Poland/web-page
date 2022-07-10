import { useTranslation } from 'react-i18next';
import { useAccount, useConnect, useContract, useSigner } from 'wagmi';

import ErrorMessage from 'components/ErrorMessage';
import WalletConnectBtn from 'components/WalletConnectBtn';

import SampleNFTAbi from './EarlyAdoptersNFT.json';
import * as S from './MintPage.styles';
import { useEffect, useState } from 'react';

/*
 * @todo Add correct contarct address
 */
const contractAddress = '0xc23e9bb6972fE8163AF94F4Ff27fBc87B5b0C49a';

const MintPage = () => {
  const [error, setError] = useState<Error | undefined>(undefined)
  const { error: connectError } = useConnect();
  const { t } = useTranslation();
  const { address, isConnected } = useAccount();
  const { data: signer } = useSigner();
  const contract = useContract({
    addressOrName: contractAddress,
    contractInterface: SampleNFTAbi,
    signerOrProvider: signer,
  });

  useEffect(() => {
    if (connectError) {
      setError(connectError);
    }
  }, [connectError])

  async function handleMint() {
    try {
      /*
       * @todo Create proper logic for final contract
       */
      // await contract.mint(address, 'QmPbxeGcXhYQQNgsC6a36dDyYUcHgMLnGKnF8pVFmGsvqi');
      throw new Error('custom error message')
    } catch (error) {
      if (error instanceof Error) {
        setError(error)
      }
    }
  }

  return (
    <S.Content>
      <h1>{t('mintPage.heading')}</h1>
      <S.StyledConnectionStatus address={address} isConnected={isConnected} />
      {!isConnected && (
        <>
          <p>{t('mintPage.connectRemark')}</p>
          <WalletConnectBtn />
        </>
      )}
      {isConnected && (
        <>
          <p>{t('mintPage.instruction')}</p>
          {/* @todo Add some click spamming protection */}
          <S.Button onClick={handleMint}>{t('mintPage.mintButton')}</S.Button>
        </>
      )}
      {error && <ErrorMessage message={error.message} />}
    </S.Content>
  );
};

export default MintPage;
