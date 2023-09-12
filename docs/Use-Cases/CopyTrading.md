# Copy Trading

## Introduction

Eventon's online copy trading subscription system is designed to bridge the gap between experienced traders (signal providers) and investors (subscribers). At its core, the system enables subscribers to replicate the trading strategies of signal providers, allowing them to benefit from the expertise and successful trading decisions of experienced professionals.

## Workflow

![CopyTrading Workflow](./img/copytrading.png)

Let's delve into the key steps and components of the copy trading system:

1. **Trader Subscribes to Oracle Events**:

   - Traders initiate their journey by subscribing to one or more Oracle events that provide real-time market prices and information.
   - The Oracle regularly dispatches these price signals to the trader's smart contract.
   - A snippet of code used by traders to process price event signals:

   ```typescript
   receive(msg: EventSignal) {
       let ctx: Context = context();
       if(ctx.sender != self.messenger) {
           throw(009); // Only the messenger can send signals;
       }
       let payload: Cell = msg.payload;
       let parser: Slice = payload.beginParse();
       let price: Int = parser.loadInt(32); // The price sent by the Oracle event

       // Trader's trading logic code...
   }
   ```

2. **Signal Provider Registration**:

   - Traders aspiring to become signal providers must register with Eventon, providing essential details and agreeing to adhere to Eventon's terms and conditions.
   - Once registered, signal providers can broadcast their trading signals to their followers.
   - An example of how traders send their trading messages to followers:

   ```typescript
   send(SendParameters{
       to: self.dex,
       value: value,
       mode: SendPayGasSeparately,
       bounce: true,
       body: Trade {
           orderAction: self.orderAction,
           assets: self.assets,
           positionSize: self.positionSize
       }.toCell()
   });
   ```

3. **Subscriber Subscribes to Signals**:

   - Investors have the flexibility to explore various signal providers on the Eventon platform, reviewing their past performance and trading strategies.
   - Subscribers can easily subscribe to their preferred signal providers, gaining access to real-time trading signals.

4. **Trade Execution**:

   - When a signal provider executes buy or sell trades, the system captures detailed information and validates these trades.
   - Relevant trade information is then disseminated to all subscribers who have subscribed to that signal provider.
   - This allows subscribers to replicate the signal provider's trades in real-time.
   - A simplified representation of the trading message received by subscribers:

   ```typescript
   message Trade {
       orderAction: Int;
       assets: self.assets
       positionSize: Int;
   }
   ```

## Details

### Event Signal

The system efficiently detects signal events initiated by signal providers. These signal events encompass critical information such as:

- **Order Action**: Indicates whether it's a buy or sell order.
- **Asset**: Specifies the asset or instrument involved in the trade.
- **Position Size**: The margin allocated for opening the position.

### Subscriber Signal Replication

Subscribers have the flexibility to tailor signal replication to their preferences. They can customize various parameters, including:

- **Signal Delay**: Subscribers can introduce a delay in signal replication to align with their trading strategies.
- **Risk Management**: Defining risk tolerance levels and position sizes based on received signals empowers subscribers to manage their investments prudently.
- **Auto-Execution**: For subscribers preferring automated trading, the system can execute trades directly on their behalf, guided by the received signals.

## Conclusion

- Eventon's copy trading system facilitates a seamless exchange of trading strategies between traders and investors.
- By providing real-time market data, transparent trading histories, and replication capabilities, this system contributes to a fairer and more transparent financial ecosystem.
- The success of copy trading hinges on effective risk management and informed investment decisions, empowering all participants to pursue their financial goals with confidence.
