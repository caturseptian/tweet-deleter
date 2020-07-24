function deleteTweet()   
{  
	console.log('deleteTweet');
	
	confirmDelete();
	
	if (clickDeleteButton()) {
		setTimeout(function(){  
			confirmDelete();
		}, 2000);
	}
	
	if (openMore()) {
		setTimeout(function(){  
			if (clickDeleteButton()) {
				setTimeout(function(){  
					confirmDelete();
				}, 3000);
			}
		}, 2000);
	}
}

function undoRetweet()
{
	console.log('undoRetweet');
	
    var undoBtn = document.querySelector('div.retweeted button.ProfileTweet-actionButtonUndo.js-actionButton.js-actionRetweet');
    if (undoBtn) {
        undoBtn.click();
    }
}

function undoLike()
{
	console.log('undoLike');
	
    var undoBtn = document.querySelector('div.favorited button.ProfileTweet-actionButtonUndo.js-actionButton.js-actionFavorite');
    if (undoBtn) {
        undoBtn.click();
    }
}

function deleteAndUndo() {
	console.log('deleteAndUndo');
	
    deleteTweet();
    undoRetweet();
    undoLike();
}

function openMore()
{
	console.log('openMore');
	
	setTimeout(function(){
		// find the delete option in context menu
		var openMore = document.getElementsByClassName('r-11cpok1');
		if (openMore && openMore.length > 0) {
			// click the button
			openMore[0].click();
			return true;
		}
		return false;
	}, 1000);
}

function clickDeleteButton()
{
	console.log('clickDeleteButton');
	
    // find the delete option in context menu
    // var deleteButtons = document.getElementsByClassName('js-actionDelete');
	setTimeout(function(){
		var deleteButtons = document.getElementsByClassName('css-1dbjc4n r-1777fci');
		if (deleteButtons && deleteButtons.length > 0) {
			// click the button
			deleteButtons[0].click();
			return true;
		}
		return false;
	}, 2000);
}

function confirmDelete()
{
	console.log('confirmDelete');
	
    // wait for confirmation dialog to open  
    setTimeout(function(){  
        // confirm that we want to delete   
        // var deleteBtn = document.querySelector('div#delete-tweet-dialog button.delete-action');
		var deleteBtn = document.getElementsByClassName('r-1ucxkr8');
        if (deleteBtn && deleteBtn.length > 0) {
            deleteBtn[0].click();
        }
    }, 3000);
}

// delete a tweet every 10 seconds  
var deletor = setInterval(deleteAndUndo, 3000);

