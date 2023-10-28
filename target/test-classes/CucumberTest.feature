Feature: To Login in the GMAIL
Scenario Outline: To validate the gmail adress and password 
Given user login a Gmail for Browser and Windows Maximize
When to get the Website Url in gmail address
And User Login in a Valid"<Gmail Address>" Gmail address 
And User Login in a Valid "<Gmail PassWord>"Gmail PassWord
And To User Click The Gmail Login Btn
Then Close The Browser

Examples:
|Gmail Address             |Gmail PassWord|
|creationsmp3338@gmail.com |12345678      |
|maruthump@gmail.com       |maruthu@66    |
