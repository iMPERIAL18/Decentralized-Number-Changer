// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract ModuleTwo {
    int a = 0;

    function increment() public {
        a += 1;
    }

    function decrement() public {
        a -= 1;
    }

    function reset() public {
        a = 0;
    }

    function getNumber() public view returns (int) {
        return a;
    }
}
