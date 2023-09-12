## Overview

As the intermediary between the [**Universal Router**](/docs/Architecture/UniversalRouter) and the [**Messenger**](/docs/Architecture/Messenger), the Child Router has the following functionalities:

### Establishing a Messenger

- After a Protocol registers event signals with the Universal Router, the Universal Router creates a dedicated Child Router for that Protocol. This Child Router establishes a Messenger #1, which can access all subscribers to this event. When a Protocol sends out a signal, the Messenger distributes the signal to these subscribers.

- Currently, there is no upper limit on the number of subscribers each Messenger can accommodate. However, to expedite message delivery to subscribers, Protocols can apply for an additional Messenger from the Universal Router to enhance efficiency.

### Providing Staking

Protocols and the general public can stake TON coins with the Child Router to ensure that the Protocol's signals reach every subscriber. Simultaneously, the Child Router extracts subscription fees from the Messenger as rewards for the stakers.

### User Subscription

When the Child Router receives a user's subscription message, it sends a `subscribe message` to the Messenger to ensure that the Messenger can send messages to the subscriber.

### User Unsubscription

When the Child Router receives a user's unsubscription message, it sends a `unsubscribe message` to the Messenger to ensure that the Messenger stops sending messages to the subscriber.

### Creating User Default Callback Contracts

The Child Router deploys a Default Callback Contract for subscribers to receive signals, using the template provided by the Protocol.
