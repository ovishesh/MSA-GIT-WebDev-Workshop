# Back-end

Step-by-step guide for handling our REST calls to Cognitive Services.

## Creating a new Javascript file and Referring to it

1. Inside Visual Studio Code, click 'File' -> 'New File' and you should be taken to a new blank screen.

2. Go ahead and click 'File' -> 'Save As...', call it 'vision.js' and save it to your 'js' folder in the root of your website.

3. Now go back to your index.html, scroll to the bottom and right after ```<script src="js/bootstrap.min.js"></script>``` on line 146 add ```<script src="js/vision.js"></script>```

You should have something that looks like this:

![3-1](/4. Content/images/Back-end/Index with Vision.PNG)

## Vision.js

Now that we have created our vision.js and have added reference to it in our index.html, now what we want to do is add our logic, code that will take whatever image a user decides to use, pass it to Cognitive Services, and display the results to the user.

First thing you want to do is create a new variable that will hold our API key we retrived when subscribing to the vision API in Cognitive Services. So add the following line to the top of vision.js

```var apiKey = "YOUR API KEY";```

Next we want to create another variable that will hold the URL we'll be using to make a REST request to.

```var apiUrl = "https://api.projectoxford.ai/vision/v1.0/analyze?visualFeatures=Description,Tags";```

Going back to index.html, what we now want to do is add a image selection button so the user can pick an image from their computer and a upload button to send that image off to Cognitive Services. On line 80, remove the clidren elements inside ```<div class="row">``` and add the following code.

```
	<div class="col-sm-8">
		<h2>Upload Your Photo</h2>
		<p>This example shows how to post an image to the Microsoft Cognitive Services' Computer Vision API using file upload</p>
		<p>
			<input type="file" id="filename" name="filename" onchange="readURL(this);" />
			<img style="visibility: hidden;" id="uploadimg" src="#" alt="your image" />
		</p>
		<p>
			<a class="btn btn-default btn-lg" id="uploadbtn" href="#">Upload &raquo;</a>
		</p>
	</div>
	<div class="col-sm-4">
		<h2>Description</h2>
		<p id="response-description"></p>
	</div>
```

You should have something like this:

![3-1](/4. Content/images/Back-end/Form.PNG)

What ```<input>``` is allowing the user to input ```type="file"``` and the ```onchange="readURL(this);"``` tag is doing is passing the file the user selected to a function called 'readURL' defined in our vision.js (next step). The remaining elements are there so we can add information to them later after making our call.

Now that we have our index.html setup to take the user's image and display the results from our call, what we want to do now is setup vision.js to take those inputs and make our request. So, go into vision.js and right underneath  ```apiUrl``` we're going to add the function 'readURL'.

```
	function readURL(input) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();

			reader.onload = function (e) {
				$('#uploadimg')
					.attr('src', e.target.result)
					.width(150)
					.height(200);
			};

			reader.readAsDataURL(input.files[0]);
			document.getElementById("uploadimg").style.visibility = "visible";
		}
	}
```

What this function is doing is it's taking the image the user selected and displaying it back to the user into the element in our index.html with an ID of 'uploadimg' and setting its visibility to variable.

Now that the user has selected their image, what we want to do now is add code to handle when the user clicks the 'upload' button. Right underneath 'readURL' add the following code

```
	$('#uploadbtn').click(function () {
		//file: The file that will be sent to the api
		var file = document.getElementById('filename').files[0];

		CallAPI(file, apiUrl, apiKey);
	});
```

Using jQuery we're selecting the element in our index.html with an ID of 'uploadbtn' and when the user clicks on it, we're getting the image the user picked and passing it to another function called 'CallAPI' along with our apiUrl and apiKey we defined earlier (next step).

Now that you've got those two set up you should have something like this:

![5-1](/4. Content/images/Back-end/Vision File Handler.PNG)

So we've called 'CallAPI' but we haven't actually defined that function yet. So, add the following code.

```
	function CallAPI(file, apiUrl, apiKey) {
		$.ajax({
			url: apiUrl,
			beforeSend: function (xhrObj) {
				xhrObj.setRequestHeader("Content-Type", "application/octet-stream");
				xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", apiKey);
			},
			type: "POST",
			data: file,
			processData: false
		})
			.done(function (response) {
				ProcessResult(response);
			})
			.fail(function (error) {
				$("#response").text(error.getAllResponseHeaders());
			});
	}
```

What this function is doing is it's using ajax to construct our call, setting the URL, defining the content type and setting passing the apiKey in the header of our request, setting the REST type to POST and passing it the user's image.
Ajax is asynchronous meaning it makes the request in the background. But how do we know when the request is finish? When the call is made the rest of the function continues and stops when it gets to the end. What we need is a Promise. Think of a Promise like a call back. There are a few different Promise functions but what we want to know is when it call finishes and whether it was successful or not.
That's what ```.done(function...``` and ```.fail(function...``` are. When the call is done and was successful the ```.done()``` Promise is called and what that's doing is it's taking the result from our call and passing it to a function called 'Pronext step).
```.fail()``` is called when the call was unsuccessful and what that Promis is doing is taking the result and adding it to the element in our index.html with an ID of 'response'.

So now that we have our result from our API call, we now want to create the 'ProcessResult' function.

```
	function ProcessResult(response) {
		$("#response-description").text(response.description.captions[0].text);
	}
```

So what this function is doing is it's taking the response passed to it, grabing the first array element inside response.description.captions, getting the text, and adding that to the element in our index.html with an ID of 'response-description'.

Final Step. Open index.html in your browser, select an image, click upload and wait for a response to show up.