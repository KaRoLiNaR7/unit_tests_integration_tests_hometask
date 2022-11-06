# unit_tests_integration_tests_hometask
Instruction for users.

#### Instalation and tests run
- Clone this repository to your workstation.
- Run 'yarn install' to install all dependencies.
- Run 'yarn test' to check test command output.

The console output will show you the result. Expected output:
yarn run v1.22.19
$ jest
  console.log
    The perimeter of a rectangle is 8 and the area is 4

      at log (js/rectangle.js:12:20)

  console.log                                                                                                                                                                    
    The perimeter of a rectangle is 8 and the area is 4                                                                                                                          

      at Object.log (tests/rectangle.test.js:15:31)

 PASS  tests/rectangle.test.js
  √ should properly output rectangle area (2 ms)                                                                                                                                 
  √ should properly output rectangle perimeter (1 ms)                                                                                                                            
  √ should properly output rectangle info (43 ms)                                                                                                                                
                                                                                                                                                                                 
Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        0.947 s, estimated 1 s
Ran all test suites.
Done in 1.89s.