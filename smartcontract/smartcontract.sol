// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

//error RentDeposit__TooMuch();

/**@title Staking Rent Deposit
 * @author Stefan Löffler
 * @notice This contract is for creating a Rent Deposit Contract with the option to stake it later
 */
contract RentDeposit {
    
    //address private immutable i_landlord; //owner
    address[] private s_renter; //funders
    mapping(address => uint256) private s_addressToAmountDeposited;
   
    /*modifier onlyOwnDeposit() {
        if (msg.value > s_addressToAmountDeposited[msg.sender]) revert RentDeposit__TooMuch();
        _;
    }*/

    /*constructor(address) {
        i_landlord = msg.sender;
    }*/

    function fund() public payable {
        s_addressToAmountDeposited[msg.sender] += msg.value;
        s_renter.push(msg.sender);
    }

    function withdraw() public {
    // (bool success, ) = payable(msg.sender).call{value: s_addressToAmountDeposited(msg.sender)}("");
       // require(success);
        payable (msg.sender).transfer(s_addressToAmountDeposited[msg.sender]);
        s_addressToAmountDeposited[msg.sender] = 0;
       
    }

    function getAddressToAmountFunded(address RenterAddress)
        public
        view
        returns (uint256)
    {
        return s_addressToAmountDeposited[RenterAddress];
    }
     fallback() external payable {
        fund();
    }

    receive() external payable {
        fund();
    }


    
}