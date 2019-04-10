## Contract structure - with code examples
_you can paste each code example in the editor to try it out._

**State variable**
```js
pragma solidity >=0.4.0 <0.6.0;

contract SimpleStorage {
  uint storedData; // State variable
  // ...
}
```

**Functions**
```js
pragma solidity >=0.4.0 <0.6.0;

contract SimpleAuction {
  function bid() public payable { // Function
    // ...
  }
}
```

**Function modifiers**
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

**Events**
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

**Struct types**
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


**Enums**
```js
pragma solidity >=0.4.0 <0.6.0;

contract Purchase {
  enum State { Created, Locked, Inactive } // Enum
}
```
