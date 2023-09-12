# Universal Router

The UniversalRouter contract serves as the central hub for the Eventon protocol, enabling protocols to register themselves, and allowing users to seamlessly manage their subscriptions. This contract streamlines the interaction between users and various protocol events, ensuring an efficient flow of information.

## Introduction

As a pivotal component of the Eventon protocol, the UniversalRouter offers a variety of services, from protocol registration to event management. Here are some of its noteworthy features:

- **Protocol Registration:** UniversalRouter offers protocols the ability to register themselves, subsequently creating a unique child router for each of them.
- **Default Callback Contracts:** Recognizing that not all users are adept at crafting their own signal-receiving logic, UniversalRouter provides the capability to generate default callback contracts, utilizing predefined templates.

- **Subscription Management:** Users can subscribe to a myriad of events using either the default callback contracts or their own creations.

- **Event Signal Propagation:** Protocols can broadcast their event signals which are then efficiently disseminated to all relevant subscribers.

## Contract Details

The UniversalRouter contract is equipped with a set of state variables and functionalities essential for its operations:

- `owner`: The address of the contract's owner.
- `eventCount`: A counter that tracks the number of events, e.g., Oracle has ID 0, Chainlink has ID 1, etc.
- `protocolToRouter`: A mapping connecting protocol addresses to their respective child router addresses.
- `eventIdToProtocol`: A mapping that correlates event IDs to the corresponding protocol addresses.
- `protocolToEventId`: A mapping that associates protocol addresses with their event IDs.
- `minimumStake`: The minimum stake required for each protocol.

## Contract Initialization

Upon deploying the UniversalRouter, it initializes with the following key parameters:

- `owner`: The address of the owner.

```solidity
init(owner: Address) {
    // Initialize contract state variables
}
```

## Interactions

The UniversalRouter supports a broad spectrum of interactions:

- **Protocol Registration:** Enables the registration of a new protocol and the creation of an associated child router.
- **Creation of Default Callback Contracts:** Allows users to generate a default callback contract based on predefined templates.

- **User Subscription Management:** Provides functionalities for users to subscribe or unsubscribe from events.

## More Interactions

The UniversalRouter continues to support a plethora of interactions for efficient protocol and event management:

- **Event Signal Propagation:** Protocols can push their event signals, ensuring that the relevant subscribers receive these signals.

- **Add Messenger:** Protocols can extend their reach by adding a new messenger to the child router, enhancing the distribution of signals.

## State Variables and Functions

To enhance the flexibility and utility of the UniversalRouter, the contract incorporates a suite of state variables and helper functions:

- `protocolEventTd(protocolAddress: Address): Int?`: This function fetches the event ID linked to a specific protocol address.

- `childRouterAddress(sourceAddress: Address): Address`: Using this function, one can retrieve the address of a child router based on the provided source address.

- `getChildRouterInit(sourceAddress: Address): StateInit`: Aimed at initialization, this function obtains the initial state configuration for the child router.

- `eventId(): Int`: This getter function returns the current count of event IDs, reflecting the number of events registered.

- `getMapChildRouterAddress(sourceAddress: Address): Address`: By entering a protocol's source address, this function will return the associated child router's address.

- `getProtocolAddress(eventId: Int): Address`: Based on a given event ID, this function will fetch the protocol address associated with it.

- `getBalace(): Int`: A simple utility function, it returns the current balance of the UniversalRouter contract.
