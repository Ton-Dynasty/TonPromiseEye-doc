# Protocol

## Introduction

The **Protocol** is a central component within our system, serving as the primary source of signals. It plays a pivotal role in enabling communication between various entities in our ecosystem.

![Protocol type](./img/image.png)

Based on the provided explanation, we can categorize protocols into two main types:

- **On-chain Protocol**: These protocols predominantly encompass DeFi protocols that offer on-chain services like lending, trading, insurance, and more. They facilitate on-chain executions of various financial operations.

- **Off-chain Protocol**: These protocols specialize in handling data from off-chain sources, such as oracles. Computations and interactions related to these data points occur off-chain, making them ideal for scenarios where real-world data is involved.

## Preparation: Implementing `Alertable`

To enable a contract to send signals, it needs to implement the `Alertable` interface, which includes the following components:

```typescript
trait Alertable with Ownable {
    owner: Address;
    protocolName: String; // The name of the protocol
    eventonAddress: Address; // The address of the Eventon contract
    ...
    receive(msg: ProtocolRegister) { ... }
}
```

To register a protocol, the contract should implement the `receive` function to handle the `ProtocolRegister` message:

```typescript
receive(msg: ProtocolRegister) {
    self.requireOwner();
    send(SendParameters{
        to: self.eventonAddress,
        value: 0,
        bounce: false,
        mode: SendRemainingValue,
        body: ProtocolRegister{
            sourceAddress: myAddress(), // The address of the protocol
            template: msg.template, // The callback contract template for subscribers
            maxUserStakeAmount: msg.maxUserStakeAmount, // The maximum amount a user can stake for the protocol
            subscribeFeePerTick: msg.subscribeFeePerTick // The fee that subscribers must pay for each tick
        }.toCell()
    });
}
```

## Functionality

### Registering an Event

To register an event for signal provision, the following details are required:

- `template`: This represents the default contract initialization code, which serves as a template for subscribers to receive signals.

- `maxUserStakeAmount`: Specifies the maximum amount that a subscriber can stake when participating in the protocol.

- `subscribeFeePerTick`: Defines the fee that subscribers need to pay for each tick or signal they receive.

### Sending Signals

For a registered event, signals can be dispatched. The required details for sending signals include:

- `eventId`: A unique identifier associated with the event. This identifier helps distinguish between different events within the protocol.

- `payload`: The content or data of the signal being sent. It could contain essential information relevant to the event.

### Collecting Subscription Fees

The protocol has the capability to withdraw earnings from the profit pool. This operation involves the following parameters:

- `amount`: Specifies the total sum of accumulated subscription earnings to be withdrawn from the profit pool.

- `receiver`: Identifies the intended recipient or destination for the withdrawn earnings.

This mechanism allows the protocol to manage and distribute subscription fees among participants effectively.

Please feel free to reach out if you have any further questions or need additional clarification regarding any aspect of the protocol.
