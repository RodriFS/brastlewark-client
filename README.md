# Welcome to brastlewark-client

Our team here at AXA is playing a fantasy role-playing game and every time the
heroes they play arrive at a town, they have the issue they don't know the local
population and what they can do to help them on their adventures.

This is one of these times, our heroes just arrived at a Gnome town called
Brastlewark. To facilitate trade with the local population they need an easy way to
browse all the inhabitants details. We've found a server providing all the census data
of Brastlewark at the following address:
https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json

Gnomes in this town are not really social because they have too much work to do.
That's the reason they can have more than one job and might have few or even no
friends at all. They also appreciate their privacy so they've used some random
images from internet, not specifically optimized for mobile devices, for their profile.
(They are very modern in some aspects and they have smartphones and access to
internet for instance).

## Getting started

1. Clone the repo and enter gnome-app
2. install the dependencies `npm i`
3. run the app! `npm start`
4. run the tests `npm test`

## Tech Stack

[Redux](https://redux.js.org/): Redux is a predictable state container for JavaScript apps. I used to hold a single source of truth in the entire app.

[React](http://reactjs.org): React is a library that makes it painless to create interactive UIs.

[React LazyLoad](https://www.npmjs.com/package/react-lazyload): Lazyload your Components, Images or anything matters the performance. I replaced the images to load with a placeholder image until the load was finished.
