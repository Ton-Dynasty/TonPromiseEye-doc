## Overview

As the intermediary between the Universal Router and the Messenger, the Child Router has the following functionalities:

### Establishing a Messenger

- After a Protocol registers event signals with the Universal Router, the Universal Router creates a dedicated Child Router for that Protocol. This Child Router establishes a Messenger #1, which can access all subscribers to this event. When a Protocol sends out a signal, the Messenger distributes the signal to these subscribers.

- Currently, there is no upper limit on the number of subscribers each Messenger can accommodate. However, to expedite message delivery to subscribers, Protocols can apply for an additional Messenger from the Universal Router to enhance efficiency.

### Providing Staking

Protocols and the general public can stake TON coins with the Child Router to ensure that the Protocol's signals reach every subscriber. Simultaneously, the Child Router extracts subscription fees from the Messenger as rewards for the stakers.

### User Subscription

Users can subscribe to their favorite events when they have either written their callback contract or are using the default callback contract provided by the Protocol.

### Creating User Default Callback Contracts

The Child Router deploys a Default Callback Contract for subscribers to receive signals, using the template provided by the Protocol.
