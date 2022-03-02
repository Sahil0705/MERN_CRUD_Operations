var unirest = require("unirest");

var req = unirest("GET", "https://priaid-symptom-checker-v1.p.rapidapi.com?rapid_apikey=036fbc3b02msh0fa3b23ab1a5099p1a7791jsn5944953b878f/symptoms");

req.query({
	"language": "en-gb",
	"format": "json"
});

req.headers({
	"x-rapidapi-key": "036fbc3b02msh0fa3b23ab1a5099p1a7791jsn5944953b878f",
	"x-rapidapi-host": "priaid-symptom-checker-v1.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	// if (res.error) throw new Error(res.error);

	console.log(res.body);
});
