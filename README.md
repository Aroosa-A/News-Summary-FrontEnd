News Summary Challenge
=====================

About the Project:
------------

- This project is a front end project
- Used Guardian Api to get data
- This was first front end project in Digital Futures training

Build With:
---------

### IDE
- Visual Studio Code

### Framework/Libraries
- React.js

### Packages
- Axios
- React Router dom

### Language
- JavaScript
- CSS

Getting started:
-----------

Steps to follow in order to run this project locally on your machine

1. Clone the repo

    You can copy project link from *green* button named as **Code**, link should be like this
    ```
    git clone http://github.com/your-username/Project-name.git
    ```
2. Install dependencies

    You can install them by writing this command in terminal or by right clicking on **Package.json** file and selecting *Install dependencies*
    ```
    npm install
    ```
3. Run servers

    Open integrated terminal **Package.json** file and apply command
    ```
    npm start
    ```
5. Test

    You can run tests by opening integrated terminal from **Package.json** file and running this command in terminal
    ```
    npm test
    ```
Problem Statements:
-------------

### Problem
  ```
  Write a single page application in React that send requests to the Guardian API to get Headline and Article data.
  ```

### Component Hierarchy
1. Headlines page

```
- Green: newsGallery
- Red: EachHeadline(Pictures, Headline)
```

![Headlines page mockup](/images/news-summary-project-headlines-page-mockup.png)


2. Article summary page

```
- Green: newsArticle
- Red: EachArticle(Picture, Headline, Article)
```

![Article page mockup](/images/news-summary-project-article-page-mockup.png)

### User Stories

1.
```
As a busy politician
So I know what the big stories of the day are
I can see all of today's headlines in one place
```
Explanation
```
In App function, useEffect calls async method *getData* to fetch data(headlines & images) from Guardian API by using axios.get request to get json data. news is the State which is being set each time we get data from API. Then that news is passed to Route from App function which goes to *NewsGallery* component as props. Axios request also return error so catch have used to get error and display it.
```

2.
```
As a busy politician
So that I have something nice to look at
I can see a relevant picture to illustrate each news article when I browse headlines
```
Explanation
```
In *NewsGallery* component, *map* method is used on array (news) (which was passed in component as props) which iterates on each Object of array and gets image, headline, body and date from each Object and pass them to *EachHeadline* component which render them on screen.
```

3.
```
As a busy politician
So that I can get an in depth understanding of a very important story
I can click a news headline to see a summary and a photo of the news article
```
Explanation
```
In *EachHeadline* component, newsHeadline tag have a router component(Link) which links this headline to a specified id in our case id is webPublicationDate for each individual news. That link refer to Route from App function which goes on *NewsArticle* component taking news(array data fetched from API) as props.
```

4.
```
As a busy politician
So I can get a few more details about an important story
I can see click a news article summary title which links to the original article
```
Explanation
```
In *NewsArticle* component Params is used to access the individual object whose headline was clicked to get the article for that specific news(object). After getting individual object id through params, *map* method is used on array to iterate through the array and access individual object whose id is used in ternary to check if the webPublicationDate(used as id) is same as the object clicked, if they match then *EachArticle* component is called, passing image, headline, bodyText and webUrl for that specific newsObject *EachArticle* component render them on screen.
```

5.
```
As a busy politician
Just in case my laptop breaks
I can read the site comfortably on my phone
```

Explanation
```
In *EachArticle* component,in articleHeadline tag reference is used which goes on Guardian link for actual news page of the same article.
```
### Testing
EachArticle Tests
```
First Test - checks if the *EachArticle* component renders same headline which is passed in as props, mockHeadline is passed for testing

Second Test - checks if the *EachArticle* component renders same image which is passed in as props, mockImage is passed for testing

Third Test - checks if *EachArticle* component renders same bodyText which is passed in as props, mockBodyText is passed for testing
```
EachHeadline Tests
```
First Test - checks if the *EachHeadline* component renders same headline which is passed in as props, mockHeadline is passed in for testing

Second Test - checks if the *EachHeadline* component renders same image passed in as props, mockImage is passed in for testing
```

Project Review:
-----------

- Learned and implemented Thinking in react methodology
- Enjoyed the process of recognising state and putting it on suitable place in component hierarchy
- Could have tested more of the functionality
