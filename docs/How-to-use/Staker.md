# Staker

## Introduction

Any user can stake their TONs to earn rewards. The staking process is simple and straightforward. Users can stake any amount of TONs and withdraw them after the staking period ends.

As for how much you can earn, it depends on the proportion of your TONs to the total. For example, if your TONs make up 10% of the total TONs in this child router, you will be able to share 10% of the earnings.

> However, to ensure the revenue of the signal source, when creating a child router, the signal source will set the maximum stake amount for other users. Therefore, the total stake amount from all stakers combined will not exceed the maximum stake amount set by the signal source.

## Why Staker?

Why do we need the role of a staker? This is because in our architecture, each signal source corresponds to a child router, and each child router requires TONs to operate. Therefore, each child router has its own stake. These stakes are jointly provided by the signal source and staker. The subscription fee revenue from users subscribing to this signal source will be shared between the staker and the signal source.

## Workflow

![Staker workflow](/img/eventon-add-stake-for-earn-workflow.png)

## Functionality

### Add stake

To add stake, the following details are required:

- `beneficiary`: The address of the stake beneficiary
- `value`: The amount of stake to be added

```typescript
send(SendParameters{to: childRouterAddress,
    value: value,
    mode: SendRemainingValue,
    bounce: false,
    body: AddStakeFor{
        beneficiary: Address; // Beneficiary address
    }.toCell(),
}
```

### Withdraw stake

To withdraw stake, the following details are required:

- `receiver`: The address of the stake receiver
- `amount`: The amount of stake to be removed

```typescript
send(SendParameters{to: childRouterAddress,
    value: 0,
    mode: SendRemainingValue,
    bounce: false,
    body: RemoveStake{
        receiver: Address; // Receiver address
        amount: uint128; // Amount to be removed
    }.toCell(),
}
```
