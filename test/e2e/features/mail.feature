@all
Feature: Send 

  @mail
  Scenario: Send letter
    When I open "https://www.mail.ru/" url
    Then Page title should be "Mail.ru: почта, поиск в интернете, новости, игры"

    When I enter the email with login "testaccountforstudy" and password "A147B258C369"
     And I wait "6" seconds
    Then Page title should be "Входящие - Почта Mail.ru"

    When I write new mail
      And I save this mail
      And I close this mail
      And I open link "drafts" email
      And I wait "3" seconds
    Then Address and subject of last should be "testaccountforme@yandex.ru" and "test"

    When I open last mail
      And I send this mail
      And I open link "sent" email
      And I wait "3" seconds
    Then Address and subject of last should be "testaccountforme@yandex.ru" and "test"
 
 When I log out mail
    Then Page title should be "Mail.ru: почта, поиск в интернете, новости, игры"




