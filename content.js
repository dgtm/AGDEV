$(document).ready(function(){
  $('#btn').click(function(e) {
      var value = document.querySelector('#val').value;
      url = "https://agrian.atlassian.net/browse/AGDEV-" + value
      chrome.runtime.sendMessage({"message": "open_new_tab", "url": url});
    });
    $('.pull_requests').click(function(e){
      var pr = e.target.id;
      url = "https://bitbucket.org/agrian/" + pr + "/pull-requests/"
      chrome.runtime.sendMessage({"message": "open_new_tab", "url": url});
    });

});
