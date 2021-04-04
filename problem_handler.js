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
    var pn = document.createElement("P"); // Create a <p> node
    pn.className = "header";
    var tt = document.createTextNode(section);  // Create a text node
    pn.appendChild(tt);
    head.appendChild(pn);

    sessionStorage.setItem('data_' + section, lines.join("$"));
    
    var d = document.createElement("div");
    d.setAttribute('id', 'holder_' + section);
    d.className = "content";
    
    lines.forEach(function(item, index) {
        
        var curr = item.split("+");
        var name = item[0];
        var link = item[1];
        var difficulty = item[2];
        var author = item[3];
        var tags = item[4];

        var p = document.createElement("div");
        p.className = "problem";
        p.setAttribute('id', section + index.toString(10));
        var para = document.createElement("P"); // Create a <p> node
        var t = document.createTextNode(name);  // Create a text node
        para.appendChild(t);
        p.appendChild(para);
  
        d.appendChild(p);
   });

   parent.appendChild(head);
   parent.appendChild(d);
    
    
}

function loadAll() {
   loadProblems("problems/p_geometry.txt", "Geometry");
}


