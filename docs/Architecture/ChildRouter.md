# ChildRouter

The `ChildRouter` contract is a crucial component of the Eventon protocol, responsible for handling various functionalities related to protocol registration, stake management, and interaction with messenger contracts. This documentation provides an in-depth overview of the `ChildRouter` contract, including its key features, functions, and usage examples.

As the intermediary between the [**Universal Router**](/docs/Architecture/UniversalRouter) and the [**Messenger**](/docs/Architecture/Messenger), the Child Router has the following functionalities:

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

## Message Types

### EventTrigger

- **Purpose**: Sending an event trigger to notify subscribers of an event.
- **Fields**:
  - `value: Int`: The value associated with the event.
  - `address: Address`: The address associated with the event.
  - `info: EventSignal`: Additional information about the event.

### BuildMessenger

- **Purpose**: Building a messenger contract for event distribution.
- **Fields**:
  - `sourceAddress: Address`: The protocol's address.
  - `eventId: Int`: The event ID to subscribe to.
  - `maxUserStakeAmount: Int as coins`: Maximum stake per user.
  - `subscribeFeePerTick: Int as coins`: Subscription fee per tick.
  - `template: Cell`: Callback contract for subscribers.
  - `sourceName: String`: Protocol's name.

### BuildChildRouter

- **Purpose**: Building a Child Router contract.
- **Fields**:
  - `sourceAddress: Address`: The protocol's address.
  - `eventId: Int`: The event ID to subscribe to.
  - `maxUserStakeAmount: Int as coins`: Maximum stake per user.
  - `subscribeFeePerTick: Int as coins`: Subscription fee per tick.
  - `template: Cell`: Callback contract for subscribers.
  - `sourceName: String`: Protocol's name.

### CreateBody

- **Purpose**: Creating a callback contract for a user.
- **Fields**:
  - `walletAddress: Address`: Owner address of the callback contract.
  - `deadline: Int`: Deadline for the message.
  - `eventId: Int`: The event ID to subscribe to.
  - `parameter: Cell`: Callback contract parameter.

### SubscribeBody

- **Purpose**: Subscribing to an event using a callback contract.
- **Fields**:
  - `walletAddress: Address`: Owner address of the callback contract.
  - `deadline: Int`: Deadline for the message.
  - `eventId: Int`: The event ID to subscribe to.
  - `callbackAddress: Address`: Callback contract address written by the user.

### ProtcolRegister

- **Purpose**: Registering a protocol for event distribution.
- **Fields**:
  - `sourceAddress: Address`: Protocol's address.
  - `template: Cell`: Callback contract for subscribers.
  - `maxUserStakeAmount: Int as coins`: Maximum stake per user.
  - `subscribeFeePerTick: Int as coins`: Subscription fee per tick.
  - `sourceName: String`: Protocol's name.

### ProtcolRegisterSuccess

- **Purpose**: Notifying a successful protocol registration.
- **Fields**:
  - `sourceAddress: Address`: Protocol's address.
  - `eventId: Int`: The event ID to subscribe to.
  - `maxUserStakeAmount: Int as coins`: Maximum stake per user.
  - `subscribeFeePerTick: Int as coins`: Subscription fee per tick.
  - `template: Cell`: Callback contract for subscribers.
  - `sourceName: String`: Protocol's name.

### CreateMsgSubscriber

- **Purpose**: Creating a message subscriber.
- **Fields**:
  - `walletAddress: Address`: Owner address of the callback contract.
  - `callbackAddress: Address`: UDC address.
  - `eventId: Int`: The event ID to subscribe to.

### CreateMsgSubscriberSuccess

- **Purpose**: Notifying a successful message subscriber creation.
- **Fields**:
  - `callbackAddress: Address`: Owner address of the callback contract.

### CreateUdcSuccess

- **Purpose**: Notifying a successful User Default Callback (UDC) contract creation.
- **Fields**:
  - `walletAddress: Address`: Owner address of the callback contract.
  - `callbackAddress: Address`: UDC address.

### DeleteSubscriber

- **Purpose**: Deleting a subscriber from a messenger contract.
- **Fields**:
  - `walletAddress: Address`: Owner address of the callback contract.
  - `callbackAddress: Address`: UDC address.
  - `eventId: Int`: The event ID to subscribe to.

### DestroyMessenger

- **Purpose**: Destroying a messenger contract.
- **Fields**:
  - `messengerId: Int`: Messenger ID to destroy.

### AddMessenger

- **Purpose**: Adding a messenger contract for a protocol.
- **Fields**:
  - `protocolAddress: Address`: Protocol's address.

### AddStakeFor

- **Purpose**: Adding stake for a beneficiary.
- **Fields**:
  - `beneficiary: Address`: Beneficiary address.
  - `amount: Int as coins`: Amount of stake to add.

### RemoveStake

- **Purpose**: Removing stake.
- **Fields**:
  - `receiver: Address`: Receiver address.
  - `amount: Int as coins`: Amount of stake to remove.

### CollectFee

- **Purpose**: Collecting fees from subscribers.
- **Fields**:
  - `messengerId: Int

`: Messenger ID.

- `fee: Int as coins`: Amount of fee to collect.

### BuildUDC

- **Purpose**: Building a User Default Callback (UDC) contract.
- **Fields**:
  - `owner: Address`: Owner address of the UDC.

### ExtMessage

- **Purpose**: Sending an extended message with various parameters.
- **Fields**:
  - `seqno: Int as uint32`: Sequence number of the event.
  - `valid_until: Int as uint32`: Deadline of the message.
  - `signature: Slice as bytes64`: Signature of the message.
  - `message_parameters: SendParameters`: Message payload.

### OffchainEventSignal

- **Purpose**: Sending an off-chain event signal.
- **Fields**:
  - `eventId: Int`: Protocol-defined event identifier.
  - `payload: Cell`: Optional information for subscribers.

### Staked

- **Purpose**: Notifying a stake action.
- **Fields**:
  - `amount: Int as coins`: Amount of stake.
  - `staker: Address`: Address of the staker.
  - `beneficiary: Address`: Beneficiary address.

### Withdrawn

- **Purpose**: Notifying a stake withdrawal.
- **Fields**:
  - `amount: Int as coins`: Amount of withdrawn stake.
  - `receiver: Address`: Receiver address.

### ClaimReward

- **Purpose**: Notifying a reward claim.
- **Fields**:
  - `amount: Int as coins`: Amount of claimed reward.
  - `receiver: Address`: Receiver address.

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
