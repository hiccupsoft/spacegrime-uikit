import React from "react";
import Button from "../../components/Button/Button";
import { useWalletModal } from "../WalletModal";
import { Login } from "../WalletModal/types";

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
}

const UserBlock: React.FC<Props> = ({ account, login, logout }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
  return (
    <div>
      {account ? (
        <Button
          size="md"
          variant="tertiary"
          onClick={() => {
            onPresentAccountModal();
          }}
          style={{padding: '20px'}}
        >
          {accountEllipsis}
        </Button>
      ) : (
        <Button
          size="md"
          onClick={() => {
            onPresentConnectModal();
          }}
          style={{padding: '20px'}}
        >
          Connect To a Wallet
        </Button>
      )}
    </div>
  );
};

export default UserBlock;
