(function(){
	'use strict';
angular.module('Data').
angular.service("weekDaysService",WeekDaysService)
.constant('D_E',["monday","tuesday","wenesday","thursday","friday","saturday","sunday"])
.constant('hours',["00:00","00:30","01:00","01:30","02:00","02:30","03:00","03:30","04:00","04:30","05:00","05:30","04:00","04:30","05:00","05:30","06:00","06:30","07:00","07:30"])


WeekDaysService.$Inject=["D_E","hours"]
function WeekDaysService(D_E,hours)
{
	var service=this;
	this.daysOfWeek=D_E;
	this.hours=hours;
	service.getDays=function()
	{
		return service.daysOfWeek;
	};

	service.getDays=function()
	{
		return service.hours;
	};

	service.getblocksOn=function()
	{
		//dummie
		var blockOn=[];
		blockOn.day=0;
		blockOn.hour=0;
		blocks=[];
		blocks.push(blockOn);
		return  blocks;

	}

	service.getInfoByBlockDay(pos,hour)
	{
		//dummie
		var info={

			'Last Update':"2017-03-01",
			'User Last Update':"Syzo"

		}

		return info;
	}
}
}



