myObj =  {"People":[ //This is a javascript object
    { 
        "Id": "1", 
        "FirstName":"Rob",
        "LastName":"Rey", 
        "Email":"robert.reyes@elma.com" 
    }, 
    {
        "Id": "2", 
        "FirstName":"Jonas",
        "LastName":"Smith", 
        "Email":"jonas.smith@elma.com" 
    },
    {
        "Id": "3", 
        "FirstName":"Gregg",
        "LastName":"Bishop", 
        "Email":"gregg.bishop@elma.com" 
    }
]}

console.log(myObj.People[1].LastName); //print:Smith