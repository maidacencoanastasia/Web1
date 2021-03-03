const weekDays = {
	"Luni": "Mo",
	"Marti": "Tu",
	"Miercuri": "We",
	"Joi": "Th",
	"Vineri": "Fr",
	"Simbata": "Sa",
	"Duminica": "Su"
}
  function swap(obj) {
    const res = {};
  
    Object.keys(obj).forEach(function(value) {
      var key = obj[value];
      res[key] = value;
    });
    return res;
  };
  
  console.log(swap(weekDays));