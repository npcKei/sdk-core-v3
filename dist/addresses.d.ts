import { SupportedChainsType } from './chains';
declare type AddressMap = {
    [chainId: number]: string;
};
declare type ChainAddresses = {
    v3CoreFactoryAddress: string;
    multicallAddress: string;
    quoterAddress: string;
    v3MigratorAddress?: string;
    nonfungiblePositionManagerAddress?: string;
    tickLensAddress?: string;
    swapRouter02Address?: string;
    mixedRouteQuoterV1Address?: string;
};
export declare const UNI_ADDRESSES: AddressMap;
export declare const UNISWAP_NFT_AIRDROP_CLAIM_ADDRESS = "0x8B799381ac40b838BBA4131ffB26197C432AFe78";
/**
 * @deprecated use V2_FACTORY_ADDRESSES instead
 */
export declare const V2_FACTORY_ADDRESS = "0xfd8D39298478F7b88FD7687F4B470d095bb8c7Bd";
export declare const V2_FACTORY_ADDRESSES: AddressMap;
/**
 * @deprecated use V2_ROUTER_ADDRESSES instead
 */
export declare const V2_ROUTER_ADDRESS = "0xAaF04917032161dD6BA5020241eeF79F87a85DC6";
export declare const V2_ROUTER_ADDRESSES: AddressMap;
export declare const CHAIN_TO_ADDRESSES_MAP: Record<SupportedChainsType, ChainAddresses>;
export declare const V3_CORE_FACTORY_ADDRESSES: AddressMap;
export declare const V3_MIGRATOR_ADDRESSES: AddressMap;
export declare const MULTICALL_ADDRESSES: AddressMap;
/**
 * The oldest V0 governance address
 */
export declare const GOVERNANCE_ALPHA_V0_ADDRESSES: AddressMap;
/**
 * The older V1 governance address
 */
export declare const GOVERNANCE_ALPHA_V1_ADDRESSES: AddressMap;
/**
 * The latest governor bravo that is currently admin of timelock
 */
export declare const GOVERNANCE_BRAVO_ADDRESSES: AddressMap;
export declare const TIMELOCK_ADDRESSES: AddressMap;
export declare const MERKLE_DISTRIBUTOR_ADDRESS: AddressMap;
export declare const ARGENT_WALLET_DETECTOR_ADDRESS: AddressMap;
export declare const QUOTER_ADDRESSES: AddressMap;
export declare const NONFUNGIBLE_POSITION_MANAGER_ADDRESSES: AddressMap;
export declare const ENS_REGISTRAR_ADDRESSES: AddressMap;
export declare const SOCKS_CONTROLLER_ADDRESSES: AddressMap;
export declare const TICK_LENS_ADDRESSES: AddressMap;
export declare const MIXED_ROUTE_QUOTER_V1_ADDRESSES: AddressMap;
export declare const SWAP_ROUTER_02_ADDRESSES: (chainId: number) => string;
export {};