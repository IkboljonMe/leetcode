# MY [LEETCODE](https://leetcode.com/ikboljonme/) SOLUTIONS

This repo contains my solutions to various LeetCode problems, along with explanations and test cases in JavaScript and Python.

## Problem Solutions

For each problem, you can find a JavaScript file containing my solution and a link to an explanation of the code. I have tried to write clear and concise code that is easy to understand, and I have provided explanations to help you understand my thought process and approach to the problem.

# JavaScript:

## Jest Testcases

To ensure the correctness of my solutions in Javascript, I have included Jest test cases for each problem. These tests cover various edge cases and input scenarios to help verify that my solution is working correctly.

## Usage

Before running the tests, make sure to you are in leetcode/JavaScript path. You can do this with following command:

```
cd JavaScript
```

Then download all the required packages by running **npm install** command in the terminal.

```
npm install
```

To run all the Jest test cases, simply run **npm test** in the terminal. This will execute all the tests in the repository.

```
npm test
```

If you want to run tests for a specific problem, you can specify the file path of the test using the --PATH option. For example, to run tests for a problem located in the problems/foo.js file, **run npm test -- problems/foo.test.js**.

```
npm test -- problems/foo.test.js
```

## Links

- [Javascript](https://github.com/IkboljonMe/leetcode/tree/main/JavaScript)
  - [30_day_Marathon](https://github.com/IkboljonMe/leetcode/tree/main/JavaScript/30days_marathon)

# Python:

## Pytest Testcases

To ensure the correctness of my solutions in Python, I have included `pytest` test cases for each problem in Python. These tests cover various edge cases to help verify that my solution is working correctly.

## Usage

Before running the tests, make sure to in directory `leetcode/Python`. You can do thi by following command:

```
cd Python
```

Then download all the required packages by running the following command in the terminal:

```
pip install -r requirements.txt
```

This will install all the required packages listed in the `requirements.txt` file.

To run all the `pytest` test cases, simply run the following command in the terminal. This will execute all the tests in the repository.

```
pytest
```

If you want to run tests for a specific problem, you can specify the file path of the test using the `-k` option followed by the file name. For example, to run tests for a problem located in the `problems/foo.py` file, run the following command:

```
pytest -k "foo"
```

This will run all the tests that match the string "foo" in the file name.

Note that you should be in the root directory of your project where the `pytest.ini` and `requirements.txt` files are located before running these commands.

## Links

- [Python](https://github.com/IkboljonMe/leetcode/tree/main/Python)
  - [20_day_Marathon](https://github.com/IkboljonMe/leetcode/tree/main/Python/20days_marathon)

## License

This project is licensed under the terms of the MIT license. See the [LICENSE](https://github.com/IkboljonMe/leetcode/blob/main/LICENSE.txt) file for details.

## Conclusion

I hope that these solutions and explanations will be helpful to you in your own algorithmic problem-solving journey. Please feel free to leave any feedback or suggestions for improvement.
