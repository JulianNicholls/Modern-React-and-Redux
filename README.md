# Modern-React-and-Redux

Code from the Modern React and Redux course by Stephen Grider at
[Udemy](https://www.udemy.com/course/react-redux)

## Progress

  307 - Beginning section 24 - Replacing Redux with Context

## Differences from Stephen

* My components are all functional components with hooks, from lecture 74 onwards.

* My components are all in a `src/components` directory. Stephen starts to do 
  this after a while too.

* I usually destructure props, e.g. `const SeasonDisplay = ({ lat }) => ...`
  vs `const SeasonDisplay = (props) => ...`

* My pics application is split into two version directories: `PicsV1` and `PicsV2`.

* I rarely, if ever, use the name `payload` for the data contained in a Redux action.
  The exception to this is when using `redux-promise` which requires that 
  the promised data name has to be `payload`.

* I always create a set of 'types' for the action creators, this avoids any 
  possibility of typos between action creators and reducers, e.g.

``` 
dispatch({ type: 'LOAD_POSTS', posts });
...

const postsReducer = (posts, action) => {
  switch (action.type) {
    case 'LAOD_POSTS':    // Oops, should be 'LOAD_POSTS'
      ...
```
  Stephen highlights this in lecture 221.

* I always use the terms 'log in' and 'log out', to make a contrast with 'sign up'.
  There is no signup here, but I have continued to do this.

* My `fetchStream` and `fetchStreams` are called `getStream` and `loadStreams`
  respectively. Much less confusing, n'est ce pas? :-)

* I have split my Translate app into two from sections 23 & 24.

## Section 23 - Context

Judging from this section, Stephen doesn't seem to have the slightest clue 
how to use context properly, it's no wonder he thinks it's confusing.

Context should be storing the value(s) themselves and the provider should 
be under the control of the Context, not another component. Much more like 
Redux, but perhaps with separate contexts rather than a monolithic 
multi-section store.

## Pens

[Redux Insurance Example](https://codepen.io/juliannicholls/pen/dyyjVyJ)

### Git client

I have used Git at the command-line for imore than 10 years. Over that time, I have tried
many different graphical shells for Git, without finding one that was easier
and nicer to use than the command-line (in my view).

I have now found that [GitKraken](https://www.gitkraken.com) is an excellent
Git shell and would advise using it to everyone.

### Questions

If you have any questions about this repository, or any others of mine, please
don't hesitate to contact me.
