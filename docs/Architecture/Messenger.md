# Messenger

This documentation provides a detailed overview of the Messenger contract, explaining its purpose, state variables, constructor, message types, and essential functions.

## Introduction

The Messenger contract plays a crucial role in the Eventon protocol, serving as a means to send event signals to subscribers. Subscribers can subscribe or unsubscribe from events, and fees are collected from subscribers for the services provided. The Messenger contract is an integral part of the Eventon ecosystem, ensuring efficient event distribution.

## Contract Details

### State Variables

The Messenger contract includes several important state variables:

- `owner`: Address of the router (Owner of the messenger).
- `sourceAddress`: Address of the protocol source.
- `messengerId`: Unique identifier for this messenger.
- `nextSubscriberId`: ID for the next subscriber.
- `idToSubscriber`: Mapping of Subscriber ID to its address.
- `hashToSubscriber`: Mapping of Hash (address & event ID) to subscription status.
- `hashToSubscribeFee`: Mapping of Hash (address & event ID) to subscription fee.
- `subscriberCount`: Total number of subscribers.
- `subscribeFeePerTick`: Fee per tick for subscription.

### Constructor

The Messenger contract is initialized with the following parameters:

```solidity
init(owner: Address, sourceAddress: Address, messengerId: Int) {
    // Initialize contract state variables
}
```

## Message Types

### BuildMessenger

- **Purpose**: This message type allows the owner to build the messenger for event distribution.
- **Fields**:
  - `sourceAddress: Address`: The protocol's address.
  - `eventId: Int`: The event ID to subscribe to.
  - `maxUserStakeAmount: Int as coins`: Maximum stake per user.
  - `subscribeFeePerTick: Int as coins`: Subscription fee per tick.
  - `template: Cell`: Callback contract for subscribers.
  - `sourceName: String`: The protocol's name.

### EventSignal

- **Purpose**: This message type sends an event signal to all subscribed users.
- **Fields**:
  - `eventId: Int`: Protocol-defined event identifier.
  - `payload: Cell`: Optional information for subscribers.

### CreateMsgSubscriber

- **Purpose**: This message type allows a subscriber to be added to the messenger.
- **Fields**:
  - `walletAddress: Address`: Owner address of the callback contract.
  - `callbackAddress: Address`: UDC address.
  - `eventId: Int`: The event ID to subscribe to.

### DeleteSubscriber

- **Purpose**: This message type removes a subscriber from the messenger.
- **Fields**:
  - `walletAddress: Address`: Owner address of the callback contract.
  - `callbackAddress: Address`: UDC address.
  - `eventId: Int`: The event ID to subscribe to.

### CreateMsgSubscriberSuccess

- **Purpose**: Notifies the successful creation of a message subscriber.
- **Fields**:
  - `callbackAddress: Address`: Owner address of the callback contract.

### CollectFee

- **Purpose**: This message type collects fees from subscribers.
- **Fields**:
  - `messengerId: Int`: Messenger ID.
  - `fee: Int as coins`: Amount of fee from subscribers to be collected.

## State Variables and Functions

The `Messenger` contract contains essential state variables and functions, enabling its operation within the Eventon protocol:

### State Variables

- `owner: Address`: Represents the address of the router, signifying the owner of the messenger contract.

- `sourceAddress: Address`: Denotes the address of the protocol source, indicating the source associated with this messenger contract.

- `messengerId: Int`: A unique identifier assigned to this messenger contract, facilitating its distinction within the protocol.

- `nextSubscriberId: Int`: An integer representing the ID for the next subscriber to the messenger contract.

- `idToSubscriber: map<Int, Address>`: A mapping associating Subscriber IDs with their respective addresses, allowing for efficient subscriber management.

- `hashToSubscriber: map<Int, Int>`: A mapping associating a unique hash (generated from the combination of an address and event ID) with subscription status, enabling tracking of subscriber statuses.

- `hashToSubscribeFee: map<Int, Int>`: A mapping associating a unique hash (generated from the combination of an address and event ID) with subscription fees, facilitating fee collection from subscribers.

- `subscriberCount: Int`: Represents the total number of subscribers currently registered with the messenger contract.

- `subscribeFeePerTick: Int`: Specifies the fee per tick for subscription, indicating the cost subscribers must pay for the services provided.

### Functions

- `init(owner: Address, sourceAddress: Address, messengerId: Int)`: Constructor function that initializes the messenger contract with essential parameters, including the owner's address, source address, and a unique messenger ID.

- `receive()`: A function to receive funds, allowing the contract to accept incoming transactions.

- `idToSubscriber(id: Int): Address?`: A getter function that retrieves the address of a subscriber based on their associated Subscriber ID. Returns `null` if the ID is invalid.

- `getsubId(): Int`: A getter function that fetches the next available Subscriber ID, aiding in subscriber management.

- `getSubCount(): Int`: A getter function that retrieves the total number of subscribers registered with the messenger contract.

These state variables and functions collectively enable the `Messenger` contract to send event signals to subscribers, manage subscriptions, and collect fees for its services within the Eventon protocol.
