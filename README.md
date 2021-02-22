# Random Question API [![Build Status](https://travis-ci.com/lizkavalski/random-question-backend.svg?branch=master)](https://travis-ci.com/lizkavalski/random-question-backend)

## Summary:
An API that retrieves a random interview based question from a server. This API was design to be part of the back-end for another project.

__Language used__:
JavaScript, Node,

__Tools used__:
Express, Heroku, Jest, and JSON.

__Deployed server__:
To get all the question use `https://random-interview.herokuapp.com/question`<br>
To get a random question use `https://random-interview.herokuapp.com/question/random`<br>
To get a random question use `https://random-interview.herokuapp.com/question/random/:type`

## Problem Domain
This project is part of [another project](https://github.com/lizkavalski/random-interview-questions) that allows people to practice behavioral interview based questions.

## Solution
Create an server that has all the interview-based question in a JSON file. Then with some middleware ‘get’ a random question from the JSON file to send back to the user.

Currently their are three routes: /questions, /random, and /question/random/:type.

The /question route will retrieve all the questions in server. While /question/random will only grab one of the questions at random. The /question/random/:type will grab a random question based on the type question.

The type of questions are :

  * Self-perception: questions relate to how the interviewee see themselves like” what is a strength/weakness of yours?”
  * Self-expression: relate more on creative thinking.
  * Interpersonal" look as how well the interviewee work with other people.
  * Decision-making: relate to questions how the interviewee decides
  * Stress-management: relate to question about dealing with stress.
  * Motivators: looks at what motivate them.
  * General question: are the topical question such as educational background, or how the person hear of the company.

There is currently three middleware: the 404 error page, server error, and the part that pulls a random question.

The 404 and server error would appear if their was error with route, or server crashed. There are two function that help pull a random question :  randomQuestions, and questionByType. The randomQuestions goes through the whole data and randomly select one. While the questionByType, filter the data to find the question that have same type as the input. Then out of the filter questions, select a random questions.


