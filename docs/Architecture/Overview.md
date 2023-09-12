## Architecture

The architecture of Eventon is illustrated in the following diagram:
![Alt text](/img/architecture_image.png)

### Signal

**Protocols** in Eventon's Protocol can send events through a `send signal` mechanism. These events are then routed through the [**Universal Router**](/docs/Architecture/UniversalRouter), which further sends them through the [**Child Router**](/docs/Architecture/ChildRouter) to the [**Messenger**](/docs/Architecture/Messenger). Finally, the **Messenger** forwards these events to **subscribers** who have subscribed to them.

### Money

**Protocols** can ensure subscribers receive signals by **staking**. Subscribers' subscription fees serve as staking rewards. In addition to Protocols, the public can also participate in staking for this event and receive rewards.

### Registration

**Protocols** can register an event with the [**Universal Router**](/docs/Architecture/UniversalRouter#protocol-registration). After registration and staking, the event becomes available for the public to subscribe to. Protocols can also provide templates for users who do not write code but wish to receive event signals. However, developers with the ability to write their own program logic can do so for handling event signals.

### Subscription

**Users** can subscribe to the event signals they want to receive. For developers, they can write their own program logic to receive signals based on the signal templates provided by Eventon. For non-developer users, they can create their own setup with the [**Universal Router**](/docs/Architecture/UniversalRouter#user-create-default-callback-contract) and utilize the signal templates provided by **Protocol** to receive signals.
