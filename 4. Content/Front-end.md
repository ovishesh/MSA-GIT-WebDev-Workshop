# Front-end

Breif overview of HTML, JS, and CSS.

## Template

For this session we'll be downloading a template from http://startbootstrap.com/template-categories/all/ rather than creating a brand new site from scratch.

The template we'll be using can be found, if you've already cloned the repository, in '1. HTML Template'. If you havent cloned the repository do so now.

1. Navigate to '1. HTML Template'.

2. Open index.html in your browser and have a quick look around the website.

## HTML

1. Open up index.html in Visual Studio Code (or your preferred text editor).

You should see something like this:

![1-1](/4. Content/images/Front-end/HTML Overview.PNG)

You should see at the top your opening ```<html>``` tag. Within that tag you have two children elements, a ```<head>``` and a ```<body>``` tag.

Your ```<head>``` element is where you'll define your page title, reference your css style sheet and javascript files, and any other meta data pertaining to your page.

Inside your ```<body>``` tags is where you'll set out the structure of your page including titles, text paragraphs, tables, forms, images, etc.

## CSS

Notice at the top inside ```<head></head>``` on line 18 we have something that looks like this:

```<link href="css/business-frontpage.css" rel="stylesheet">```

What that line is doing is appling business-frontpage.css to our index.html.

1. If you navigate back to where you extracted the template, you should see a folder called 'css'. Double click on it and you should see 3 files. a 'bootstrap.css', 'bootstrap.min.css' and a 'business-frontpage.css'. Open 'business-frontpage.css' in Visual Studio Code.

You should see something like this:

![1-1](/4. Content/images/Front-end/CSS Overview.PNG)

This is where you can change how your website looks and feels. 

You may notice some sections have a '.' (like business-header) in front of them while others (like body) have none. In your webpage, if you only want to change the look of a particular ```<div>``` element for example, instead of changing the look of every ```<div>``` you can assign certain
```<div>``` a class and inside your css file to refer to that class you'd go '.myClass' with a full stop in front. You can also add an ID to your ```<div>``` element as well. To reference that ID you'd go '#myID' with a hashtag in front. If you want to change all ```<div>``` elements on your webpage you'd
simply go 'div' with no full stops or hashtags in front. 

The reason why we're putting all our styles into a seperate css file rather than defining our style inline is down to the D.R.Y. principle which stands for Don't Repeat Yourself.

Note: You can only use a particular ID once while class can be used as many times as you like.

## Javascript

Going back to index.html you'll noticed down at the bottom on lines 143 and 146 references to two javascript files. A 'jquery.js' and a 'bootstrap.min.js'. Jquery is used on the page to get reference to spacific elements so you can maniplate through logic based code. 'bootstrap.min.js' is used for making our website responsive meaning
no matter what device a user views our website on, our page will scale down nicely.