// from data.js
var tableData = data;

// YOUR CODE HERE!

tbody = d3.select("tbody")

function AppenedData(data)
{ 
    tbody.text("")
    data.forEach(function(UFO)
    {UpdatedTr = tbody.append("tr");
        Object.entries(UFO).forEach(function([key, value])
        {
        UpdatedTd = UpdatedTr.append("td").text(value);
        })
    })
};

AppenedData(tableData) 