//this file contains a simple smart contract that saves a value
//the value can be accessed using the set and get methods

pragma solidity ^0.5.8;

contract EthContract {
    string data = "Hello World!";

    function changeMessage(string memory x) public {
        data = x;
    }

    function sayHello() public view returns (string memory){
        return data;
    }
}
