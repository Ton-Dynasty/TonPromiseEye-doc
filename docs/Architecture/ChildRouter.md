# ChildRouter

The `ChildRouter` contract is a crucial component of the Eventon protocol, responsible for handling various functionalities related to protocol registration, stake management, and interaction with messenger contracts. This documentation provides an in-depth overview of the `ChildRouter` contract, including its key features, functions, and usage examples.

## Introduction

The `ChildRouter` contract serves as an intermediary between the Universal Router and Messenger contracts in the Eventon protocol. It offers a range of functionalities for protocols and users, allowing them to manage event subscriptions, stake TON coins, and interact with messenger contracts. Here are some key aspects of the `ChildRouter` contract:

- **Protocol Registration:** Protocols can register event signals with the `ChildRouter`, enabling users to subscribe to specific events.

- **Stake Management:** Users and protocols can stake TON coins with the `ChildRouter` to ensure that event signals are efficiently delivered to subscribers.

- **Messenger Interaction:** The `ChildRouter` facilitates the creation and interaction with messenger contracts, which distribute event signals to subscribers.

## Contract Details

### State Variables

- `owner`: Address of the Universal Router.
- `sourceAddress`: Address of the protocol associated with this `ChildRouter`.
- `messengerId`: Unique identifier for the messenger.
- `minimumStake`: Minimum required stake amount for users and protocols.
- `stakes`: Mapping of user or protocol addresses to their respective stake amounts.
- `stakeShares`: Mapping of user or protocol addresses to their total stake shares.
- `totalStakeAmount`: Total stake amount across all users and protocols.
- `maxUserStakeAmount`: Maximum total stake amount allowed for users.
- `totalShares`: Total shares representing stake ownership.
- `messengerState`: Mapping of messenger IDs to their current state.
- `eventId`: The event ID associated with this `ChildRouter` (default: -1).

### Constructor

The `ChildRouter` contract is initialized with the following parameters:

- `owner`: The address of the Universal Router.
- `sourceAddress`: The address of the protocol.
- `minimumStake`: The minimum required stake amount.

```solidity
init(owner: Address, sourceAddress: Address, minimumStake: Int) {
    // Initialize contract state variables
}
```

## Interactions

The `ChildRouter` contract supports various interactions, each serving a specific purpose:

- **BuildChildRouter:** Allows the owner to build the `ChildRouter` and configure its parameters, including the maximum user stake amount and event ID.

- **ProtcolRegisterSuccess:** Notifies the contract of a successful protocol registration.

- **CreateBody:** Enables the creation of a User Default Callback (UDC) contract for users who do not write signal-receiving program logic.

- **SubscribeBody:** Allows users to subscribe to specific events through the `ChildRouter`.

- **DeleteSubscriber:** Enables the removal of a subscriber from the associated messenger contract.

- **DestroyMessenger:** Removes a messenger contract associated with a specific messenger ID.

- **EventSignal:** Sends event signals to subscribed users via messenger contracts.

- **AddMessenger:** Allows the addition of messenger contracts for protocols.

- **AddStakeFor:** Enables users or protocols to stake TON coins with the `ChildRouter`.

- **RemoveStake:** Allows users to remove their stakes partially or completely.

- **CollectFee:** Handles the collection of fees, adding them to the total stake amount.

## State Variables and Functions

The `ChildRouter` contract includes several state variables and functions that are essential for its operation:

- `calculateReward(addr: Address): Int`: Calculates the reward for a specific user or protocol based on their stake and shares.

- `messengerAddress(sourceAddress: Address, messengerId: Int): Address`: Retrieves the address of the messenger contract associated with a specific protocol and messenger ID.

- `messengerInit(sourceAddress: Address, messengerId: Int): StateInit`: Gets the initialization data for a messenger contract.

- `udcAddress(owner: Address, parameter: Cell): Address`: Retrieves the address of a User Default Callback (UDC) contract associated with a specific owner and parameter.

- `udcInit(owner: Address, parameter: Cell): StateInit`: Gets the initialization data for a User Default Callback (UDC) contract.

- `messengerId(): Int`: Gets the current messenger ID associated with the `ChildRouter`.

- `getMessengerState(messengerId: Int): Int?`: Retrieves the state of a specific messenger based on its ID.

- `getBalance(): Int`: Gets the balance of the `ChildRouter` contract.
