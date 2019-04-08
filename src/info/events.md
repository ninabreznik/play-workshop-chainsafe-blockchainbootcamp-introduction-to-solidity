## Introduction to Solidity workshop

### SimpleAuction contract source

```js
pragma solidity >=0.4.21 <0.6.0;

contract SimpleAuction {
  event HighestBidIncreased(address bidder, uint amount); // Event

  function bid() public payable {
    // ...
    emit HighestBidIncreased(msg.sender, msg.value); // Triggering event
  }
}
```
