$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/CucumberTest.feature");
formatter.feature({
  "name": "To Login in the GMAIL",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "To validate the gmail adress and password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user login a Gmail for Browser and Windows Maximize",
  "keyword": "Given "
});
formatter.step({
  "name": "to get the Website Url in gmail address",
  "keyword": "When "
});
formatter.step({
  "name": "User Login in a Valid\"\u003cGmail Address\u003e\" Gmail address",
  "keyword": "And "
});
formatter.step({
  "name": "User Login in a Valid \"\u003cGmail PassWord\u003e\"Gmail PassWord",
  "keyword": "And "
});
formatter.step({
  "name": "To User Click The Gmail Login Btn",
  "keyword": "And "
});
formatter.step({
  "name": "Close The Browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Gmail Address",
        "Gmail PassWord"
      ]
    },
    {
      "cells": [
        "creationsmp3338@gmail.com",
        "12345678"
      ]
    },
    {
      "cells": [
        "maruthump@gmail.com",
        "maruthu@66"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To validate the gmail adress and password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user login a Gmail for Browser and Windows Maximize",
  "keyword": "Given "
});
formatter.match({
  "location": "FbLogin.user_login_a_Gmail_for_Browser_and_Windows_Maximize()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "to get the Website Url in gmail address",
  "keyword": "When "
});
formatter.match({
  "location": "FbLogin.to_get_the_Website_Url_in_gmail_address()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Login in a Valid\"creationsmp3338@gmail.com\" Gmail address",
  "keyword": "And "
});
formatter.match({
  "location": "FbLogin.user_Login_in_a_Valid_Gmail_address(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Login in a Valid \"12345678\"Gmail PassWord",
  "keyword": "And "
});
formatter.match({
  "location": "FbLogin.user_Login_in_a_Valid_Gmail_PassWord(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To User Click The Gmail Login Btn",
  "keyword": "And "
});
formatter.match({
  "location": "FbLogin.to_User_Click_The_Gmail_Login_Btn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close The Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FbLogin.close_The_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the gmail adress and password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user login a Gmail for Browser and Windows Maximize",
  "keyword": "Given "
});
formatter.match({
  "location": "FbLogin.user_login_a_Gmail_for_Browser_and_Windows_Maximize()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "to get the Website Url in gmail address",
  "keyword": "When "
});
formatter.match({
  "location": "FbLogin.to_get_the_Website_Url_in_gmail_address()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Login in a Valid\"maruthump@gmail.com\" Gmail address",
  "keyword": "And "
});
formatter.match({
  "location": "FbLogin.user_Login_in_a_Valid_Gmail_address(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Login in a Valid \"maruthu@66\"Gmail PassWord",
  "keyword": "And "
});
formatter.match({
  "location": "FbLogin.user_Login_in_a_Valid_Gmail_PassWord(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To User Click The Gmail Login Btn",
  "keyword": "And "
});
formatter.match({
  "location": "FbLogin.to_User_Click_The_Gmail_Login_Btn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close The Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FbLogin.close_The_Browser()"
});
formatter.result({
  "status": "passed"
});
});