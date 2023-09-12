# Messenger

The Messenger contract is responsible for sending event signals to its subscribers. Subscribers can subscribe or unsubscribe from these event signals, and fees are collected from subscribers for the services provided.

## Introduction

The Messenger contract serves as a critical component of the Eventon protocol, facilitating the distribution of event signals to subscribed users. Here are some key functionalities and features of the Messenger contract:

- **Protocol Registration:** Messenger allows protocols to register event signals, enabling users to subscribe to specific events.

- **User Create Default Callback Contracts:** For users who are not familiar with writing signal-receiving program logic, Messenger provides the ability to create default callback contracts using templates provided by the protocol.

- **User Subscription:** Users can subscribe to events of interest, whether using their own written callback contracts or default callback contracts provided by the protocol.

- **Providing Staking:** Protocols and the general public can stake TON tokens with the Messenger to ensure that protocol signals reach every subscriber. Simultaneously, Messenger extracts subscription fees from subscribers as rewards for the stakers.

## Contract Details

The Messenger contract features key state variables and functions:

- `owner`: Address of the router (owner of the Messenger).
- `sourceAddress`: Address of the protocol source.
- `messengerId`: Unique identifier for this Messenger.
- `nextSubscriberId`: ID for the next subscriber.
- `idToSubscriber`: Mapping of subscriber ID to its address.
- `hashToSubscriber`: Mapping of hash (address and event ID) to subscription status.
- `hashToSubscribeFee`: Mapping of hash (address and event ID) to subscription fee.
- `subscriberCount`: Total number of subscribers.
- `subscribeFeePerTick`: Fee per tick for subscription.

## Contract Initialization

The Messenger contract is initialized with the following parameters:

- `owner`: Address of the router.
- `sourceAddress`: Address of the protocol source.
- `messengerId`: Unique identifier for the Messenger.

```solidity
init(owner: Address, sourceAddress: Address, messengerId: Int) {
    // Initialize contract state variables
}
```

## Interactions

The Messenger contract supports the following interactions:

- **Build Messenger:** Allows the owner to build the Messenger, setting parameters such as the subscription fee.

- **Event Signal:** Sends event signals to all subscribed users.

- **Create Message Subscriber:** Allows a subscriber to be added to the Messenger.

- **Delete Subscriber:** Removes a subscriber from the Messenger.

## State Variables and Functions

The Messenger contract's state variables and some commonly used functions include:

- `idToSubscriber(id: Int): Address?`: Retrieves the subscriber's address based on the subscriber ID.

- `getsubId(): Int`: Gets the next subscriber's ID.

- `getSubCount(): Int`: Gets the total subscriber count.

## Usage Example

Here is a simple usage example of the Messenger contract:

```typescript
// Create a new Messenger
let messenger = new Messenger(ownerAddress, sourceAddress, messengerId);

// Set the subscription fee
let subscribeFee = ton(1);
let buildMessage = BuildMessenger{
    sourceAddress: sourceAddress,
    subscribeFeePerTick: subscribeFee,
    // Other parameters...
};

// Invoke the contract to build the Messenger
messenger.buildMessenger(buildMessage);

// Subscribe to an event
let subscriberAddress = userAddress;
let createSubscriberMessage = CreateMsgSubscriber{
    callbackAddress: subscriberAddress,
    eventId: eventId,
    // Other parameters...
};

// Invoke the contract to create a subscriber
messenger.createMsgSubscriber(createSubscriberMessage);

// Send an event signal
let eventSignalMessage = EventSignal{
    eventId: eventId,
    payload: "Event data...",
    // Other parameters...
};

// Invoke the contract to send an event signal
messenger.sendEventSignal(eventSignalMessage);

// Delete a subscriber
let deleteSubscriberMessage = DeleteSubscriber{
    callbackAddress: subscriberAddress,
    eventId: eventId,
    // Other parameters...
};

// Invoke the contract to delete a subscriber
messenger.deleteSubscriber(deleteSubscriberMessage);
```
