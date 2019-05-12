# Gilded Rose refactoring kata, in JS with Jasmine

Taken from Emily Bache's GitHub: <https://github.com/emilybache/GildedRose-Refactoring-Kata>

I've got a better solution to this kata [here](https://github.com/Hives/gilded-rose-csharp).

This is refactoring exercise where you're given a program with a very complex nested conditional procedure, which you have to refactor so that you can add a new feature as simply as possible. I got quite far along before I realised I hadn't been making any commits, so I decided to start again, and I thought if I was going to start again I might as well try doing it in the original C#. A more well-developed solution can be found in my [repo for that](https://github.com/Hives/gilded-rose-csharp).


## Tests

My first step was to write tests to cover the existing functionality. You can run my tests with coverage checking by:

1. Cloning the repo
2. `npm install`
3. `./node_modules/.bin/nyc npm test`

When I did the exercise in C# I realised that my tests here are not covering all of the edge cases! A reminder not to be overconfident in your tests, especially if you haven't TDD-ed them.
