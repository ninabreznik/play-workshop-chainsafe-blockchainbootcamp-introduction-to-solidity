## Introduction to Solidity workshop

### Ballot contract source

```js
pragma solidity >=0.4.0 <0.6.0;

contract Ballot {
  struct Voter { // Struct
    uint weight;
    bool voted;
    address delegate;
    uint vote;
  }
}
```
