var api_key = "441113673237338";
var api_secret = "g8faWunGg1qcG9NgG_RMwEQiRfo";
var base_url = "https://api.cloudinary.com/v1_1/torishere124";
var list_image = "/resources/image";

function renderGallery(html) {
   	// generate the html for the question
   	/*var html = '<li style="border-bottom: #c4c3c3 1px dotted" id="Question' + question.QuestionID + '">';
   	html += '<a id="question_' + question.QuestionID + '" href="#">';
   	html += question.QuestionText;
   	html += '</a>';
   	html += '<div style="filter: ; zoom: 1; display: block">';
   	html += '<div class="answerText">';
   	html += question.Answer;
   	html += '</div></div></li>';
*/
/*
   	var html = `<div> 
   					<a href="images/fulls/01.jpg">
   	 					<img src="images/thumbs/01.jpg" alt="" />
   	 					<h3>Lorem ipsum dolor sit amet</h3>
   	 				</a>
					<a href="images/fulls/02.jpg">
						<img src="images/thumbs/02.jpg" alt="" />
						<h3>Lorem ipsum dolor sit amet</h3>
					</a>
				</div>`
*/
	var node = document.getElementById("gallery");
   	node.innerHTML += html;
}

$(document).ready(function(){
/*
	$.getJSON({
    	url : "https://api.cloudinary.com/v1_1/torishere124/resources/image",
    	xhrFields: {
        	withCredentials: true
    	},
    	beforeSend : function(xhr) {
        	xhr.setRequestHeader("Authorization", "Basic " + btoa(api_key + ":" + api_secret));
        },
    	success : function(result) {
        	alert('done');
    	}
    });
*/

	var apiKey = 'fcbff2b5e838ff02529c8f30e7becd7a';
    var userId = '143499569@N02';
    var tag = '';
    var perPage = '25';
    var showOnPage = '6';
    $.getJSON('https://api.flickr.com/services/rest/?format=json&method='+
        'flickr.photos.search&api_key=' + apiKey + '&user_id=' + userId + 
        '&tags=' + tag + '&per_page=' + perPage + '&jsoncallback=?', 
    function(data){
        var classShown = 'class="lightbox"';
        var classHidden = 'class="lightbox hidden"';
        var length = data.photos.photo.length;
        var column1Length = Math.round(length / 3);
        var column3Length = Math.round((length - column1Length) / 2);
        var column2Length = length - (column1Length + column3Length);

        var html = ""
        $.each(data.photos.photo, function(i, rPhoto){
          var basePhotoURL = 'http://farm' + rPhoto.farm + '.static.flickr.com/'
            + rPhoto.server + '/' + rPhoto.id + '_' + rPhoto.secret;            
            
            var thumbPhotoURL = basePhotoURL + '_s.jpg';
            var mediumPhotoURL = basePhotoURL + '.jpg';
            console.log(rPhoto);

            if (i == 0 || i == column1Length || i == column1Length + column2Length) {
            	var div = "<div>";
            } else {
				var div = "";
            }
            html += div +
   					`<a href="` + mediumPhotoURL +`">
   	 					<img src="` + mediumPhotoURL +`" alt="" />
   	 					<h3>` + rPhoto.title + `</h3>
   	 				</a>`;
   	 		if (i == column1Length - 1 || i == (column2Length + column1Length - 1) || i == (column3Length + column2Length + column1Length - 1)) {
   	 			html += "</div>";
   	 		}
        });

        renderGallery(html);
    });

	/*
    $.ajax({
        type: "GET",
  		url: "https://api.cloudinary.com/v1_1/torishere124/resources/image",
  		xhrFields: {
        	withCredentials: true
    	},
        contentType: "application/json; charset=utf-8",
    	beforeSend : function(xhr) {
        	xhr.setRequestHeader("Authorization", "Basic " + btoa(api_key + ":" + api_secret));
        },
  		success: function(result) {
        	alert('done');
    	},
    	error: function (request, ajaxOptions, thrownError) {
    		console.log(request.getResponseHeader('some_header'));
        }
	});*/
});