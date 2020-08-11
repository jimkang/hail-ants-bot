hail-ants-bot
=============

Posts news about the inexorable threat to humanity that is ants.

Installation
------------

Clone this repo.

Then, create a `your-behavior.js` file that contains [Twitter API keys](https://gist.github.com/jimkang/34d16247b40097d8cace) and paths to the modules it should use. Example:

    module.exports = {
      twitter: {
        consumer_key: 'asdfkljqwerjasdfalpsdfjas',
        consumer_secret: 'asdfasdjfbkjqwhbefubvskjhfbgasdjfhgaksjdhfgaksdxvc',
        access_token: '9999999999-zxcvkljhpoiuqwerkjhmnb,mnzxcvasdklfhwer',
        access_token_secret: 'opoijkljsadfbzxcnvkmokwertlknfgmoskdfgossodrh'
      },
      modulePaths: {
        transformHeadlines: './antify-headlines',
        rateHeadlines: './rate-headlines',
        createTopicGetter: './topic-getter'
      }
    };


`transformHeadlines` should export a function that takes an array of headlines and a callback, and calls the callback with any error and the transformed headlines. (See `antify-headlines` for an example.)

`rateHeadlines` should export a function that takes an array of headlines and a callback, and calls the callback with any error and an array of objects, each with the headline and a `rating` integer. Higher is usually better. (See `rate-headlines` for an example.)

`createTopicGetter` should export a function that takes an `opts` object and returns a function that will pick a topic to retrieve headlines for. The only property of `opts` that is set so far is `seed`, which createTopicGetter can use to seed randomizers. (See `topic-getter` for an example.)

Usage
-----

    make run

Or:

    BEHAVIOR=<the relative path to your behavior file> node post-ant-tweet.js

You can also pass a `--dry` switch to make it just print whatever it would have tweeted without actually tweeting it.

Tests
-----

Run tests with `make test`.

License
-------

The MIT License (MIT)

Copyright (c) 2015 Jim Kang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
