import { Address, BigInt, dataSource } from '@graphprotocol/graph-ts';

export const ZERO = BigInt.fromI32(0);
export const ONE = BigInt.fromI32(1);
export const ZERO_BD = ZERO.toBigDecimal();
export const ONE_BD = ZERO.toBigDecimal();

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
export class AddressByNetwork {
  public mainnet: string;
  public goerli: string;
}

let network: string = dataSource.network();

let controllerAddressByNetwork: AddressByNetwork = {
  mainnet: '`0xBF9b6174960DF88510eBEcB07ECCC2d6571Ee78B`',
  goerli: '`0xBF9b6174960DF88510eBEcB07ECCC2d6571Ee78B`',
};

function forNetwork(
  addressByNetwork: AddressByNetwork,
  network: string,
): Address {
  if (network == 'mainnet') {
    return Address.fromString(addressByNetwork.mainnet);
  }
  return Address.fromString(addressByNetwork.goerli);
}

export const CONTROLLER_ADDRESS = Address.fromString(
  '0x31eCA9385Fa44e0f8D83322F79937943216Df7c5',
);
export const VAULT_ADDRESS = Address.fromString(
  '0x6985436a0E5247A3E1dc29cdA9e1D89C5b59e26b',
);

export const ARBITRUM_ROOT_GAUGE_FACTORY = Address.fromString(
  '0xad901309d9e9DbC5Df19c84f729f429F0189a633',
);
export const OPTIMISM_ROOT_GAUGE_FACTORY = Address.fromString(
  '0x3083A1C455ff38d39e58Dbac5040f465cF73C5c8',
);
export const POLYGON_ROOT_GAUGE_FACTORY = Address.fromString(
  '0x4C4287b07d293E361281bCeEe8715c8CDeB64E34',
);

export const MAINNET_GAUGE_V2_FACTORY = Address.fromString(
  '0x80C296469a1ffFfB6547A8570927864708b86303',
);
export const ARBITRUM_ROOT_GAUGE_V2_FACTORY = Address.fromString(
  '0x1c99324EDC771c82A0DCCB780CC7DDA0045E50e7',
);
export const GNOSIS_ROOT_GAUGE_V2_FACTORY = Address.fromString(
  '0x2a18B396829bc29F66a1E59fAdd7a0269A6605E8',
);
export const OPTIMISM_ROOT_GAUGE_V2_FACTORY = Address.fromString(
  '0x866D4B65694c66fbFD15Dd6fa933D0A6b3940A36',
);
export const POLYGON_ROOT_GAUGE_V2_FACTORY = Address.fromString(
  '0xa98Bce70c92aD2ef3288dbcd659bC0d6b62f8F13',
);

export const TELOS_ROOT_GAUGE_V2_FACTORY = Address.fromString(
  '0x15A6B1177a18Ad973B9dfdb1f9E761458d46bE6f',
);

export function isArbitrumFactory(factory: Address): boolean {
  return [ARBITRUM_ROOT_GAUGE_FACTORY, ARBITRUM_ROOT_GAUGE_V2_FACTORY].includes(
    factory,
  );
}

export function isOptimismFactory(factory: Address): boolean {
  return [OPTIMISM_ROOT_GAUGE_FACTORY, OPTIMISM_ROOT_GAUGE_V2_FACTORY].includes(
    factory,
  );
}

export function isPolygonFactory(factory: Address): boolean {
  return [POLYGON_ROOT_GAUGE_FACTORY, POLYGON_ROOT_GAUGE_V2_FACTORY].includes(
    factory,
  );
}

export function isGnosisFactory(factory: Address): boolean {
  return factory == GNOSIS_ROOT_GAUGE_V2_FACTORY;
}

export function isTelosFactory(factory: Address): boolean {
  return factory == TELOS_ROOT_GAUGE_V2_FACTORY;
}
