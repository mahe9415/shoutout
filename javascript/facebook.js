//facebook integeration code 
window.fbAsyncInit = function() {
    FB.init({
      appId      : '1658117677535742',
      xfbml      : true,
      version    : 'v2.9'
    });


var userId = "";

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.9&appId=757602914413607";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

    FB.getLoginStatus(function(response) {
      if(response.status === 'connected') {
            alert('we are connected.');
      } else if(response.status === 'not authorized') {
       //   document.getElementById('status').innerHTML = 'we are not login.';
        } else{
        //  document.getElementById('status').innerHTML = 'you are not connected with facebook....';
        }

      });
  };
(function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

//login code
  function login() {
     FB.login(function(response) {
       if (response.status === 'connected') {
       alert("Succesfully Connected With Facebook.");
		 getMe();
		 }
        else if (response.status === 'not authorized') {
         alert("we are not login.");
         } else {
        alert("you are not connected with Facebook...");
         }

     },{scope: 'email,read_custom_friendlists,user_friends', return_scopes: true});

   };

   function getMe() {
	FB.api('me', {fields: 'id,name'}, function(response) {
	if(response){
	userId = response.id;
getFriend();
	//console.log(userId);
	}
	});
	}


//logout code

function logOut() {
    FB.getLoginStatus(function(response) {
        if (response && response.status === 'connected') {
 alert("Succesfully Logout Facebook.");
            FB.logout(function(response) {
                document.location.reload();

            });
        }
    });
}

function getFriend() {

  FB.api(userId+'/friends', {fields: 'id,name'}, function(response) {
    console.log(JSON.stringify(response));
      if(response && !response.error) {
        console.log(response);


        /*$.each(response.data,function(index,friendlists)
                  alert(friendlists.id);*/
              }
            });
          }
//share code
// document.getElementById('share').onclick = function(response) {
//   FB.ui({
//   method: 'share',
//     display: 'popup',
//     href: 'http://dev.shoutouthub.org/',

//   }, function(response){});

//        }
