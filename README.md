# RSS Reader Assignment

It is an assignment to implement a simple RSS reader.

[DEMO](http://supersubwoofer.github.io/myblog/rssreader)

Please check the demo. For checking the app in local machine, please start the app by "npm install && npm start".
Browser security may block the app accessing cookie if directly open the index.html file without running a web server.


## Requirements

### Functional Requirements
Assignment:
Using the provided end-point, display the news items in a user-friendly way with some effort put into layout, visual design, accessibility and responsive behaviour. Build the ability for users to "favourite" items such that they are added to a dynamic list, which displays separately from the main list. In addition, users can remove items from the favourite list. The content of the favourite list should be persistent by relying on cookies. It is up to you how you position and style both lists.

### Technology Requirements
  * Bootstrap
  * JQuery
  * HTML5
  * CSS3

### Technology details
  * Application Shell layout, styles and behaviour - ( Bootstrap, JQuery, HTML5, CSS )
  * Language - ES5
  * App Library - Mithril.js
  * Package management - npm
  * Bundler - Webpack
  * Accessibility and performance audition - Google Ligthhouse
	

## Project Structure
The Application shell is defined in index.html. Bootstrap and JQuery are used only in app shell layout and behaviour. The app entry point is index.js. A router is defined in index.js to route to FeedList.js and FavouriteList.js views. The views use models to fetch data from end-point and browser cookies.

## Getting started

  copy or clone this [repository](https://github.com/supersubwoofer/assignment-rss-reader-mithril.git)

### Install

```
npm install
```

### Build

```
npm run build
```

### Dev

```
npm start
```
