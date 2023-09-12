# Subscriber

## Introduction

Subscribers within the Eventon Protocol have the flexibility to choose from a variety of event subscriptions. Whether they are technical programmers or non-technical users, Eventon caters to both groups by offering multiple options for handling and responding to event signals.

### Non-Technical Subscribers

Non-technical subscribers can easily participate in the Eventon Protocol and receive event signals without the need for extensive programming knowledge. They can leverage pre-defined templates provided by event providers to receive signals and execute actions related to these signals.

![Subscriber Workflow](./img/subscriber.jpg)

### Technical Subscribers

Technical subscribers, on the other hand, have the expertise to create their custom callback contracts and fine-tune their signal-handling logic for more advanced and specialized use cases.

![Advanced Subscriber Workflow](./img/advandedsub.png)

## Functionality

### Create a User Default Callback Contract

For non-technical subscribers who may lack programming skills, Eventon offers a straightforward way to register a default callback contract using templates provided by the Protocol. This user default callback contract simplifies the process of signal reception and executing actions upon receiving event signals.

To create a User Default Callback Contract, subscribers need to provide the following information:

- `walletAddress`: The subscriber's wallet address.
- `deadline`: Specifies the maximum acceptable delay that the callback contract can tolerate when processing event signals sent by the Protocol.
- `eventId`: Identifies the subscribed Protocol signal event (0: Oracle signals, 1: Smart Contract Vulnerability Detection).
- `parameter`: Relevant parameters required by the callback contract.

### Custom Callback Contract for Advanced Users

Technical subscribers with programming capabilities have the option to craft their custom callback contracts. These contracts enable more advanced and tailored handling of event signals, making them suitable for specialized use cases.

### Subscribe to Events on Eventon

Once subscribers have their User Default Callback Contract or custom callback contract in place, they can subscribe to events on Eventon by providing the following essential information:

- `walletAddress`: The subscriber's wallet address.
- `deadline`: Specifies the maximum delay that the callback contract can accept for processing event signals sent by the Protocol.
- `eventId`: Identifies the subscribed Protocol signal event (0: Oracle signals, 1: Smart Contract Vulnerability Detection).
- `callback` contract address: This address points to the contract responsible for receiving event signals. Subscribers can choose between the Default Callback Contract address or their custom callback contract address, depending on their preference and technical capabilities.

### Message Structure (for Technical Subscribers)

Developers with the ability to write their own code can craft their program logic using the following message template. Eventon will then send the `EventSignal` to the developer's callback contract address for further handling and processing.

```typescript
message EventSignal {
    eventId: Int; // A Protocol-defined event identifier, allowing the callback contract to handle events based on their unique IDs.
    payload: Cell; // Optional information that the message sender can include to provide additional context or data to subscribers who have subscribed to the event.
}
```

The Eventon Protocol offers a flexible and user-friendly environment for subscribers, accommodating both technical and non-technical participants and providing the tools they need to engage with events and signals effectively.
