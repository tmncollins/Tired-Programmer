function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    var allText = "";
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                allText = rawFile.responseText;
              
            }
        }
    }
    rawFile.send(null);
    return allText;
}

function loadProblems(file, section) {
    if (file.indexOf(".txt") > -1) {
        var text = readTextFile(file);
    } else {
        var text = file;
    }
    
    var lines = text.split("\n");
    
    lines.pop();
	
    var parent = document.getElementById('library');

    var head = document.createElement("button");
    head.className = "collapsible";
    head.type = "button";
    var pn = document.createElement("P"); // Create a <p> node
    pn.innerHTML = section + '<span style="float:right;">+</span>';
    pn.className = "header";
    head.appendChild(pn);

    sessionStorage.setItem('data_' + section, lines.join("$"));
    
    var d = document.createElement("div");
    d.setAttribute('id', 'holder_' + section);
    d.className = "content";
	
    var difficulty_data = ['<span style="color:green; float:right">EASY</span>', 
			   '<span style="color:orange; float:right">MEDIUM</span>', 
			   '<span style="color:red; float:right">HARD</span>',
			   '<span style="color:purple; float:right">FIENDISH</span>'];
    
    lines.forEach(function(item, index) {
        
        var curr = item.split("+");
        var name = curr[0];
        var link = curr[1];
        var difficulty = curr[2];
        var author = curr[3];
        var tags = curr[4];

        var p = document.createElement("div");
        p.className = "problem";
        p.setAttribute('id', section + index.toString(10));
        var para = document.createElement("a"); // Create a <p> node
	para.innerHTML = name + difficulty_data[difficulty-1];
	para.href = link;

	para.appendChild(t);
        p.appendChild(para);
        d.appendChild(p);
   });

   parent.appendChild(head);
   parent.appendChild(d);
    
   head.addEventListener("click", function() {
   	this.classList.toggle("active");
   	var content = this.nextElementSibling;
	if (content.style.display === "block") {
      	    content.style.display = "none";
    	} else {
      	    content.style.display = "block";
    	}
   });
 
}

function loadAll() {
   loadProblems("problems/p_geometry.txt", "Geometry");
}


