# Staker

## Introduction

In the Eventon ecosystem, any user has the opportunity to become a Staker by staking their TON tokens to earn rewards. The process of staking is user-friendly and straightforward, allowing users to lock in their TON tokens for a defined period and subsequently withdraw them, along with any earned rewards, when the staking period concludes.

The rewards earned by a Staker are directly proportional to the amount of TON tokens they have staked in relation to the total staked in the corresponding child router. For example, if a Staker's TON tokens make up 10% of the total TON tokens staked in a particular child router, they will be entitled to receive 10% of the earnings generated from that router.

It's important to note that to ensure the revenue of the signal source, when creating a child router, the signal source sets a maximum stake amount for other users. Consequently, the combined total stake amount contributed by all Stakers will not exceed the maximum stake amount defined by the signal source.

## The Role of a Staker

You might be wondering why we need the role of a Staker in the Eventon ecosystem. The reason is that in our architecture, each signal source corresponds to a child router, and these child routers require a reserve of TON tokens to operate effectively. This reserve of tokens is provided through a combination of contributions from the signal source and Stakers. The subscription fee revenue generated from users subscribing to signals within this child router will be distributed proportionally between the Staker and the signal source.

## Workflow

To better understand the role and actions of a Staker, let's take a look at the Staker's workflow within the Eventon ecosystem.

![Staker Workflow](/img/eventon-add-stake-for-earn-workflow.png)

## Functionality

### Adding Stake

Stakers have the ability to add stake to a child router. This action involves specifying the following details:

- `beneficiary`: The address of the stake beneficiary, which is the account that will benefit from the staking rewards.
- `value`: The amount of TON tokens to be added as stake.

To add stake, Stakers can initiate a transaction with the child router using the following code snippet:

```typescript
send(SendParameters{
    to: childRouterAddress, // Address of the child router
    value: value, // Amount of TON tokens to stake
    mode: SendRemainingValue,
    bounce: false,
    body: AddStakeFor{
        beneficiary: Address; // Beneficiary address
    }.toCell(),
})
```

### Withdrawing Stake

Stakers also have the option to withdraw their staked tokens. This action involves specifying the following details:

- `receiver`: The address of the receiver who will obtain the withdrawn stake.
- `amount`: The amount of staked TON tokens to be removed.

To withdraw stake, Stakers can initiate a transaction with the child router using the following code snippet:

```typescript
send(SendParameters{
    to: childRouterAddress, // Address of the child router
    value: 0,
    mode: SendRemainingValue,
    bounce: false,
    body: RemoveStake{
        receiver: Address; // Receiver address
        amount: uint128; // Amount to be removed
    }.toCell(),
})
```

Stakers play a vital role in supporting the Eventon ecosystem by contributing their TON tokens to child routers, thereby enabling the signal source to provide valuable services. In return, Stakers have the opportunity to earn rewards based on their stake proportion and actively participate in the Eventon ecosystem.
