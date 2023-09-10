---
sidebar_position: 2
---

# What are our features?

## What is our goal?

我們的目標是讓使用者可以透過 TonPromiseEye 來訂閱任意事件的訊號，並且在事件發生時自動執行使用者自訂的操作。
所謂的訊號可以是鏈上的合約事件( Example: De-Fi protocol、Oracle 或是其他智能合約 )，也可以是鏈下的事件( 智能合約漏洞檢測 )。

### 使用情境

1. 使用者可以訂閱一個 Address，並且設定當 Address 發出交易操作的訊號時，TonPromiseEye 會自動幫使用者執行跟單、反手等等。

2. 使用者可以訂閱一個 De-Fi protocol，並且設定當 De-Fi protocol 發出特定訊號時，TonPromiseEye 會自動幫使用者領取 APY。

3. 使用者可以訂閱一個 Oracle，並且設定當 Oracle 發出 ETH 的價格為 1600USD 時，TonPromiseEye 會自動幫使用買入 ETH、賣出 ETH 等等。

4. 使用者可以訂閱一個智能合約，並且設定當智能合約發出特定訊號 ( Example: 發放空投、發放 NFT 等等 ) 時，TonPromiseEye 會自動幫使用者領取空投、領取 NFT 等等。

5. 使用者可以訂閱一個鏈下的外部訊號，當外部訊號送到 TonPromiseEye 時，TonPromiseEye 會自動幫使用者執行自訂的操作 ( Example: 標示警示地址、配置投資組合等等 )。

## What are our advantages?

1. TonPromiseEye 是一個開源的協議，任何人都可以透過 TonPromiseEye 來訂閱任意事件的訊號，並且在事件發生時自動執行自訂的操作。

2. TonPromiseEye 是一個去中心化的協議，所有的操作都是透過智能合約執行，不需要任何中心化的服務。

3. TonPromiseEye 的使用簡單易懂，即使是沒有任何程式設計經驗的使用者也可以輕鬆上手。

4. TonPromiseEye 的支援度非常高，不管是任何鏈上的合約事件，或是鏈下的事件，只要**在原有的程式碼上新增一個發送訊息的函數，並提供給我們訊號的 ABI**，就可以讓 TonPromiseEye 支援，**無須更改任何架構**。

## Our Architecture

TonPromiseEye 的架構如下圖所示：

<!-- ![TonPromiseEye Architecture](/img/tonpromiseeye-architecture.png) -->
