const weekDays = {
	"Mo": "Понедельник",
	"Tu": "Вторник",
	"We": "Среда",
	"Th": "Четверг",
	"Fr": "Пятница",
	"Sa": "Суббота",
	"Su": "Воскресенье",
}
let days = ["Luni", "Marti","Miercuri","Joi","Vineri","Sambata","Duminica"]
let day;
let i=0;
for(day in weekDays){
    weekDays[day] = days[i];
    i++;
}
console.log(weekDays)