## Overview

Universal Router offers the following functionalities for use by Protocols and users:

### Protocol Registration

- Protocols need only inherit from Alterable to register with Eventon, enabling user subscriptions to this event.
- After receiving the registration message from Protocol, Eventon will forward this message to the [Child Router](/docs/Architecture/ChildRouter#establishing-a-messenger) to complete the registration

### User Create Default Callback Contract

- For users who do not write signal-receiving program logic, they can create one using the templates provided by the Protocol.
- Universal Router will send a create message to [Child router](/docs/Architecture/ChildRouter#creating-user-default-callback-contracts)

### User Subscription

- Users can subscribe to their favorite events when they have either written their callback contract or are using the default callback contract provided by the Protocol.
- After sending User Subscription message to Universal Router, user subscription message will send to [Child Router](/docs/Architecture/ChildRouter#user-subscription) to finish the process.

### User Unsubscription

- Users can cancel their subscription to a specific event by sending relevant unsubscription information to the Universal Router.
- After sending User unsubscription message to Universal Router, user unsubscription message will send to [Child Router](/docs/Architecture/ChildRouter#user-unsubscription) to finish the process.
