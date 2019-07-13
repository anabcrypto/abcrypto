---
title: What is Solidity?
date: 2019-01-17
---

The first thing that you want to define is the solidity compiler version.
The main building block in Solidity is the `contract`. 

```solidity

pragma solidity ^0.4.25

contract {
    uint Ciao = 4;
}

```

To start you will type variables, like state variables for instance. State variables are stored permanently in the blockchain.
In this specific example we are using the `uint` variable which is equivalent to a `uint256`, a 256 bit unsigned integer. there are also other types like `uint8`, `uint16`, etc.

# Math operations

You can do operations like these:

Addition: x + y = z, for example 5 + 2 = 7
Subtraction: x - y = z, for example 5 - 2 = 3
Multiplication: x * y = z, for example 5 * 2 = 10
Division: x / y = z, for example 6 / 2 = 3
Modulus: x % y = z, for example 5 % 2 = 1

You can also use the exponential operator like this -> x ** y = z like 5 ** 2 = 25 because 5^2 = 25

# Structs

It allows you to create multiple data sets with more properties.
By the way in the example you can see `string` which is just like int but with letters and words.

# Arrays

An array is a collection of something. There are two types -> fixed arrays like `uint[5] yousee;` with five fixed elements and dynamic arrays like `string[] alright;`.
You can also make an array public like `string[] public alright;` so other contracts can read it but not write to it or an array of struct `Person[] people;`

# Functions

it's convention to use _ before the name to differentiate the global variables from local variables.

# Working With Structs and Arrays

arrayName + . + push(structName( _firstFunctionParameter, _secondFunctionParameter)); that's compact

# Private / Public Functions

By default functions are public, to make them private you need to specify that and conventionally your functions name will start with a `_`.
By making a function private, you will be able to call this function just from inside the specific contract.

# More on Functions

You can return a value from a function by inserting in the title `returns (choosenType)`. 
If the functions doesn't change any values or writes anything you can add `view` before `returns`, so that it just views the data.
Instead if you want a function that's not intented to access any data, but have its own, you can do that too, by swapping `view` with `pure`

# Keccak256 and Typecasting

keccak256 allows you to get a semi-random `uint` - Typecasting







This page is still under development
---

