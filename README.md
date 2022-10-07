# News Summary Challenge

## Component Hierarchy
### Headlines page

```
- Green: newsGallery
- Red: EachHeadline(Pictures, Headline)
```

![Headlines page mockup](/images/news-summary-project-headlines-page-mockup.png)


### Article summary page

```
- Green: newsArticle
- Red: EachArticle(Picture, Headline, Article)
```

![Article page mockup](/images/news-summary-project-article-page-mockup.png)

## Standard

```
As a busy politician
So I know what the big stories of the day are
I can see all of today's headlines in one place
```
```
As a busy politician
So that I have something nice to look at
I can see a relevant picture to illustrate each news article when I browse headlines
```
### Standard Criteria Explanation
```
In App function, useEffect calls async method *getData* to fetch data(headlines & images) from Guardian API by using axios.get request to get json data. news is the State which is being set each time we get data from API. Then that news is passed to Route from App function which goes to *NewsGallery* component as props. Axios request also return error so catch have used to get error and display it.

In *NewsGallery* component, *map* method is used on array (news) (which was passed in component as props) which iterates on each Object of array and gets image, headline, body and date from each Object and pass them to *EachHeadline* component which render them on screen.
```

## Extended

```
As a busy politician
So that I can get an in depth understanding of a very important story
I can click a news headline to see a summary and a photo of the news article
```

```
As a busy politician
So I can get a few more details about an important story
I can see click a news article summary title which links to the original article
```

```
As a busy politician
Just in case my laptop breaks
I can read the site comfortably on my phone
```

```
As a busy politician
To make my news reading more fun
I can see whizzy animations in the app
```
### Extended Criteria Explanation
```
In *EachHeadline* component, newsHeadline tag have a router component(Link) which links this headline to a specified id in our case id is webPublicationDate for each individual news. That link refer to Route from App function which goes on *NewsArticle* component taking news(array data fetched from API) as props.

In *NewsArticle* component Params is used to access the individual object whose headline was clicked to get the article for that specific news(object). After getting individual object id through params, *map* method is used on array to iterate through the array and access individual object whose id is used in ternary to check if the webPublicationDate(used as id) is same as the object clicked, if they match then *EachArticle* component is called, passing image, headline, bodyText and webUrl for that specific newsObject *EachArticle* component render them on screen.

In *EachArticle* component,in articleHeadline tag reference is used which goes on Guardian link for actual news page of the same article.

In *AnimationLoader* component have imported and used contentLoader to get content loader from package. Inside App return turnery have used to check if data have been loaded inside news otherwise will go on *AnimationLoader* to load animations.
```
## Testing
### EachArticle Tests
```
First Test - checks if the *EachArticle* component renders same headline which is passed in as props, mockHeadline is passed for testing

Second Test - checks if the *EachArticle* component renders same image which is passed in as props, mockImage is passed for testing

Third Test - checks if *EachArticle* component renders same bodyText which is passed in as props, mockBodyText is passed for testing
```
### EachHeadline Tests
```
First Test - checks if the *EachHeadline* component renders same headline which is passed in as props, mockHeadline is passed in for testing

Second Test - checks if the *EachHeadline* component renders same image passed in as props, mockImage is passed in for testing
```

