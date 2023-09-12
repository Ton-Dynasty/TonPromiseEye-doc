# Away from Blacklist

## Introduction

Eventon introduces an innovative system that serves a crucial purpose in the realm of security and blockchain interactions. This document explores the profound utility of the Blacklist functionality within Eventon, detailing how professional entities can harness its capabilities to transmit off-chain signals that signify updates to a blacklist.

## Workflow

![Blacklist Workflow](./img/blacklist.png)

### Workflow Steps

1. **Security Organization Signals Blacklist Update**:

   - A security organization, equipped with insights and expertise, initiates a signal to convey the addition of a specific address to the blacklist.
   - This signal serves as an alert, indicating the need to exercise caution or apply restrictions to the blacklisted entity.

2. **Eventon Facilitates Signal Transmission**:

   - Eventon, as the intermediary platform designed for seamless signal management, receives the signal denoting the blacklisted address.
   - It plays a pivotal role in transmitting this signal to the relevant parties, ensuring swift and efficient communication.

3. **Wallet Takes Preventive Action**:
   - The Wallet component, responsible for managing user interactions with blockchain entities, collects incoming blacklisted addresses.
   - It promptly enforces preventive measures to shield users from undesirable interactions with these addresses.

## Details

### Event Signal

The core of this functionality lies in the transmission of event signals. When a professional entity determines the addition of an address to the blacklist based on its internal criteria, it initiates a signal from an off-chain source. This signal encompasses vital information about the blacklisted entity:

- `Message`: The primary piece of information or alert that signifies the addition to the blacklist.
- `Info`: Supplementary details that may include an explanation of the rationale behind the blacklist decision and the category to which it belongs.

### Subscription

Users who recognize the significance of these blacklist events can subscribe to them via Eventon. The platform offers robust customization options, allowing users to define their specific interaction logic upon receiving such signals.

### Interaction Logic

Upon detecting a signal indicating a blacklisted address, users have the flexibility to configure their interaction logic. This can involve implementing preventive measures such as:

- Refusing funds or transactions originating from the blacklisted address.
- Rejecting interactions with potentially malicious smart contracts.

These actions ensure that users maintain a proactive and resilient stance against potential threats or undesirable interactions on the blockchain.

## Conclusion

The Blacklist functionality, powered by Eventon on the TON blockchain, represents the harmonious fusion of security, adaptability, and automation. By harnessing the capabilities of signals, users can establish a dynamic and responsive defense mechanism against threats, safeguarding their blockchain transactions and interactions with unwavering security.
