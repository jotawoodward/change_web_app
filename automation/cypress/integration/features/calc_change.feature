Feature: Access

  Scenario: Error
    Given I go to the route page
    When I submit an amount "3" and a price "5" 
    Then I see "Please enter an amount greater than price."
    
  Scenario: Success
    Given I go to the route page
    When I submit an amount "549.23" and a price "2.99" 
    Then I find the following results:
        | £50 | x 10 |
        | £20 |  x 2 |
        | £5  |  x 1 |
        | £1  |  x 1 |
        | 20p |  x 1 |
        | 2p  |  x 2 |

  Scenario: Example given
    Given I go to the route page
    When I submit an amount "20" and a price "5.5" 
    Then I find the following results:
        | £10 | x 1 |
        | £2  | x 2 |
        | 50p | x 1 |
    
