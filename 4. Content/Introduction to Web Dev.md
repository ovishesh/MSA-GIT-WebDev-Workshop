# Intro to Web Development
# Part 1
## 1. HTML Structure.

First, let's create an empty HTML page. It will contain the head and the body.
```
<!DOCTYPE html>

<head>

</head>

<body>

</body>

</html>
```
## 2. Setting the title of the page
Inside the head tags, we will type in the page title. 

If you run index.html in a browser, you will see that it's title is now "Page Title".
```
<head>
    <title>Page Title</title>
</head>
```
## 3. Adding a comment

Inside the body,we will type in a comment. This will not be displayed on the web page.

Comments may be useful for developers reading the code.
```
<body>

    <!--This is a comment-->

</body>
```
## 4. Adding a Heading.
Below the comment, we will add the heading "My First Heading".

h1 is the most important heading. We can also use other headings like h2, h3, h4, h5, and h6, with h6 having the least importance.
```
    <!--This is a comment-->
    <h1>My First Heading</h1>
```
## 5. Adding a Paragraph

Below the heading, write the following paragraphs: 
```
    <p>My first paragraph</p>
    
    <p>This is <br> a para<br>graph with line breaks</p>
```

The first paragraph is displayed as one paragraph. The sencond paragraph contains line breaks because "br" tells the browser to start on a new line.

## 6. Whitespace is ignored.
Add the following below the paragraphs:
```
    This
    Is
    All
    Displayed
    On
    One
    Line
```
The text are all displayed on one line since HTML ignores whitespace.

## 7. Making a Hyperlink.

Add a link to microsoft.com below the set of text.

```
"<a href="http://www.microsoft.com">This is a link to Microsoft</a>"
```

The href attribute tells the browser where to go. In this instance, the link takes you to microsoft.com. The text in between the a tags are the displayed text in the browser.

## 8. Ordered lists

In order to use an ordered list, we need to type in the ol tags.

Inside those tags, we need to add a li for each element of that list.

The text inside the li tags is displayed as the text for each list element.

Since this is an ordered list, the list elements are automatically formatted with numbers.

Below the hyperlink add the following:
```    
    <h2>Ordered List</h2>
    
    <ol>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ol>
```
## 9. Unordered Lists
Unordered lists are look like ordered lists and are coded like ordered lists as well.

The difference is that instead of formatting the list with numbers to show order, the list is formatted using bullet points by default.

In terms of coding, we use ul instead of ol. The rest of the code remains the same.

Below the ordered list, add the following:
```
    <h2>Unordered List</h2>
    
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
```
## 10. Adding an image

Below the unordered list, add the following:
```    
<img src="http://www.w3schools.com/images/w3schools_green.jpg" alt="W3Schools.com">
```
The src attribute tells the browser which image to use. The alt attribute tells the browser what text to display in case the image isn't found. 

## 11. Create an external stylesheet

In the same folder as your index.html file, create a new file called "styles.css". 

To do this, right click on an empty space, click New > Text Document. Then name it "styles.css".

## 12. Add an external stylesheet.

Inside the head tags of index.html, add the following line.
```
<link rel="stylesheet" href="styles.css">
```
The rel attribute specifies the relationship between the HTML page and the CSS page.
The href contains the location of the CSS file. In this case, it is stored locally, in the same folder as index.html, and is named "styles.css".

There will be no noticeable change seen in the HTML file, since we have not yet added any styles to "styles.css".

#Part 2

## 13. Add styles to the CSS file.

Open styles.css in your text editor. Then add the following line:
```
h1 {
	color: yellow;
	font-size: 60px;
}
```
Refresh your site. The h1 heading at the very top should now have a font color of yellow and a font size of 60px.

## 14. Create an external JavaScript

In the same folder as your index.html file, create a new file called "test.js". 

To do this, right click on an empty space, click New > Text Document. Then name it "test.js".

## 15. Add an external JavaScript File.

Inside the head tags, write:
```
<script type="text/javascript" src="test.js"></script>
```
The src contains the location of the JavaScript file. In this case, it is stored locally, in the same folder as index.html, and is named "test.js".

There will be no noticeable behaviour seen since the JavaScript file is empty.

## 16. Add a behaviour to the JavaScript File

Inside the JavaScript file, write:
```
alert(“Hello World”)

```
If you refresh the page, the alert Hello World gets displayed automatically