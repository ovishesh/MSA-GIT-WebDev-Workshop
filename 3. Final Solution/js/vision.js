//apiKey: Replace this with your own Project Oxford Emotion API key, please do not use my key. I include it here so you can get up and running quickly but you can get your own key for free at https://www.projectoxford.ai/emotion 
var apiKey = "YOU API KEY HERE";

//apiUrl: The base URL for the API. Find out what this is for other APIs via the API documentation
var apiUrl = "https://api.projectoxford.ai/vision/v1.0/analyze?visualFeatures=Description,Tags";

$('#uploadbtn').click(function () {
    //file: The file that will be sent to the api
    var file = document.getElementById('filename').files[0];

    CallAPI(file, apiUrl, apiKey);
});

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

function ProcessResult(response) {
    var data = JSON.stringify(response);
    $("#response-description").text(response.description.captions[0].text);
    $("#response").text(data);
}

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