myObj =  {"People":
[
    { 
        "Id": 1, 
        "FirstName":"Rob",
        "LastName":"Rey", 
        "Email":"robert.reyes@elma.com", 
        "Active": true
    }, 
    {
        "Id": 2, 
        "FirstName":["Jonas", "Smith"],
        "LastName":"Smith", 
        "Email":"jonas.smith@elma.com",
        "Active": false     
    },
    {
        "Id": 3, 
        "FirstName":"Gregg",
        "LastName":"Bishop", 
        "Email":"gregg.bishop@elma.com",
        "Active": true
    }
]
}

console.log(myObj[1].FirstName);