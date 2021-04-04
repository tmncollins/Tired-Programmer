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
	
    sessionStorage.setItem('data_' + section, lines.join("$"));
    
    var d = document.createElement("div");
    d.setAttribute('id', 'holder_' + section);
    
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
        var t = document.createTextNode(text);  // Create a text node
        para.appendChild(t);
        p.appendChild(para);
  
        d.appendChild(p);
});
    
    
}

