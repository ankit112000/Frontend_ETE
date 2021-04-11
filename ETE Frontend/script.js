function showData()
{
    event.preventDefault();
    var country=document.getElementById("countryname").value;
    var startDate=document.getElementById("startdate").value;
    var endDate=document.getElementById("endDate").value;

    var confirmed=document.getElementById("confirmed");
    var active=document.getElementById("active");
    var deaths=document.getElementById("deaths");

    console.log(startDate);

    if(country=='' || startDate=='' || endDate=='')
    alert("enter the required field");

    else
    {
        var url="https://api.covid19api.com/country/"+country+"?from="+startDate+"T00:00:00Z&to="+endDate+"T00:00:00Z";

        fetch(url)
        .then((abc) => abc.json())
        .then((abc) => {
            console.log(abc);
            var length=abc.length;
            var index=length-1;

            var c=abc[index].Confirmed;
            var a=abc[index].Active;
            var d=abc[index].Deaths;

            confirmed.innerHTML=c;
            active.innerHTML=a;
            deaths.innerHTML=d;

            document.getElementById("abc").style.display="block";
            
        })
    }
}