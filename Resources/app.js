// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

//
// create base UI
//
var win = Titanium.UI.createWindow({  
    title:'My Topos Examples',
    backgroundColor:'#fff',
    navBarHidden: false
});


var data = [{title:"custom.html"},
			{title:"index.html"},
			{title:"android.html"},
			{title:"iphone.html"},
			{title:"iui.html"},
			{title:"iui+sqlite.html"},
			{title:"iui+watchposition.html"},
			{title:"markers.html"},
			{title:"multiple.html"},
			{title:"otm.html"},
			{title:"simple.html"},
			{title:"sqlite.html"}
			];
var tableview = Titanium.UI.createTableView({data:data});
win.add(tableview);


// create table view event listener
tableview.addEventListener('click', function(e)
{
	createwebview(e.row.title);
});


// add table view to the window
win.add(tableview);
win.open({animated:true});




///function to create webview
function createwebview(_url){
var w = Titanium.UI.createWindow({  
    title:'MyTopos',
    backgroundColor:'#fff',
    barColor:'#86A406',
    navBarHidden: false
});

var b = Titanium.UI.createButton({
			title:'Close',
			style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN
		});
		w.setLeftNavButton(b);
		
b.addEventListener('click', function() ///close btn
		{
			w.close();
		});


var webview = Titanium.UI.createWebView({
	url: _url
});
w.add(webview);
w.open({modal:true,animated:true});
		
};

