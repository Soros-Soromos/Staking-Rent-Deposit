// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SecurityDeposit {
    //mapping(address => uint256) public addressToAmountFunded;
   /* uint deposit;
    bool paid;
    address landlord = msg.sender;
    address renter;

    constructor {
        
    }*/
    uint256 deposit;
    mapping(address => uint256) public addressToDeposit;
    function askDeposit (uint256 _deposit) public {
        deposit = _deposit;
        addressToDeposit[msg.sender] += deposit;
        //funders.push(msg.sender);
    }
    function payDeposit (address _landlord) payable public {
        require(msg.value >= addressToDeposit[_landlord], "You must pay the whole Security Deposit!");
    }

// fn: Create new property, Kaution festlegen
    


// fn: Send deposit (by renter)



// fn: Send deposit back

// fn: Landlord gets deposit (if both parties agree)

// fn: stake deposit?
}
