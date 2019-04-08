## Introduction to Solidity workshop

### Purchase contract source

```js
pragma solidity >=0.4.22 <0.6.0;

contract Purchase {
  address public seller;

  modifier onlySeller() { // Modifier
    require(
      msg.sender = seller,
      "Only seller can call this."
    );
    _;
  }

  function abort() public view onlySeller { // Modifier usage
    // ...
  }
}
```
