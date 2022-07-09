# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mhener/lotide`

**Require it:**

`const _ = require('@mhener/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* assertArraysEqual: Asserts whether two arrays are equal

* assertEqual: Asserts whether two primitive values are equal

* asserObjectEqual: Asserts whether two objects are equal

* countLetters: Takes in a sentence (as a string) and then return a count of each of the letters in that sentence

* countOnly: Takes in a collection of items and return counts for a specific subset of those items

* eqArrays: Compares two arrays to check if they are equal to each other

* eqObjects: Compares two objects to check if they are equal to each other

* findKey: Takes an object and a callback and returns the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.

* findKeyByValue: Takes an object and a value and returns the first key which contains the given value. If no key with that given value is found, it returns undefined.

* head: Returns the first item in the array

* letterPositions: Returns all the indices (zero-based positions) in the string where each character is found.

* map: Returns a new array based on the results of the callback function

* middle: Returns an array with only the middle element(s) of the provided array

* tail: Returns the "tail" end of an array, only not including the head

* takeUntil: Returns a "slice of the array with elements taken from the beginning." It should keep going until the callback returns a truthy value

* without: Takes in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array