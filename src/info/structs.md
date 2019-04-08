## Introduction to Solidity workshop

### Funder and Campaign Structs

```js
struct Funder {
  address addr;
  uint amount;
}

struct Campaign {
  address payable beneficiary;
  uint fundingGoal;
  uint numFunders;
  uint amount;
  mapping (uint => Funder) funders;
}
```
