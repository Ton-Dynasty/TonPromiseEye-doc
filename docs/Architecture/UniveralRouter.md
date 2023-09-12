## Overview

Universal Router offers the following functionalities for use by Protocols and users:

### Protocol Registration

Protocols need only inherit from Alterable to register with Eventon, enabling user subscriptions to this event.

### Protocol Staking and Public Staking

In addition to providing basic signal sources, Protocols need to stake on the Child Router to ensure successful message delivery to subscribers.

### User Create Default Callback Contract

For users who do not write signal-receiving program logic, they can create one using the templates provided by the Protocol.

### User Subscription

Users can subscribe to their favorite events when they have either written their callback contract or are using the default callback contract provided by the Protocol.

### User Unsubscription

Users can cancel their subscription to a specific event by sending relevant subscription information to the Universal Router.
