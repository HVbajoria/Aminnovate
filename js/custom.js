// Format SatSchedule
class scheduleEvent {
    constructor(title, start, end, track) {
        this.title = title;
        this.startTime = start;
        
        if (track == undefined){
          this.end = null
          this.track = end;
        }
        else{
          this.endTime = end;
          this.track = track;
        }
        
    }

}

var friday = [];
var saturday = [];
var sunday = [];
var monday =[];
// track = {main, ws} where ws is workshop
friday.push(new scheduleEvent("Registration Ends", "20:00", "main"));
friday.push(new scheduleEvent("Acceptance mails released", "20:30", "main"));
friday.push(new scheduleEvent("Vouchers and links shared via mail", "23:45", "main"));
saturday.push(new scheduleEvent("Hacking Begins", "00:00", "main"));
saturday.push(new scheduleEvent("Opening Ceremony", "11:00", "main"));
saturday.push(new scheduleEvent("Mentoring Session", "14:00", "main"));
saturday.push(new scheduleEvent("Unleashing wonders of GitHub", "21:00", "22:00", "ws"));
saturday.push(new scheduleEvent("Fun Activity!", "23:00", "main"));
sunday.push(new scheduleEvent("Developing Interactive AR Apps for Mobile Devices", "11:00", "12:00" ,"ws"));
sunday.push(new scheduleEvent("Mentoring Session", "15:00", "main"));
sunday.push(new scheduleEvent("Neworking Session", "18:00", "19:00", "ws"));
sunday.push(new scheduleEvent("Soft Submission Deadline", "22:00", "main"));
sunday.push(new scheduleEvent("Hacking Ends", "23:59", "main"));
monday.push(new scheduleEvent("Top 10 team announcement", "03:00", "main"));
monday.push(new scheduleEvent("Pitching Session for top 10 teams", "11:30", "main"));
monday.push(new scheduleEvent("Closing Ceremony", "16:30", "main"));

friday.sort((a,b) => (a.startTime >= b.startTime) ? 1 : -1);
saturday.sort((a,b) => (a.startTime >= b.startTime) ? 1: -1);
sunday.sort((a,b) => (a.startTime >= b.startTime) ? 1 : -1 );
monday.sort((a,b) => (a.startTime >= b.startTime) ? 1 : -1 );

var str = '<tbody>';
str +=  '<tr><th></th><th>Main track</th><th></th><th>Workshops</th></tr>';
friday.forEach(function(ev, index){
  if (index ==0  || friday[index-1].startTime != ev.startTime){     
    str += '<tr>';
    if (ev.track == 'ws'){

        str += '<th></th>';
        str += '<td></td>';
    }

  str += '<th>';

  str += ev.startTime 
  if (ev.endTime){
    str+='<br />|<br />' + ev.endTime;
  }
  str += '</th>';
  str += '<td>';
  str += ev.title + '';
  str += '</td>';
  
  if (ev.track == 'main'){
      if(index != friday.length-1 && ev.startTime == friday[index+1].startTime){
        str += '<th>';
        str+=friday[index+1].startTime
        if(friday[index+1].endTime){
        str +=  '<br />|<br />' + friday[index+1].endTime;
      }
    
  str += '</th>';
  str += '<td>' + friday[index+1].title+ '</td>';
    }
  else{
  str +='<th></th>';
  str += '<td></td>';
  }}
  
  str += '</tr>';
  
  }

});
str += '</tbody>';
window.document.getElementById("fridayContainer").innerHTML = str;

var str = '<tbody>';
str +=  '<tr><th></th><th>Main track</th><th></th><th>Workshops</th></tr>';
saturday.forEach(function(ev, index){
  if (index ==0  || saturday[index-1].startTime != ev.startTime){     
    str += '<tr>';
    if (ev.track == 'ws'){

        str += '<th></th>';
        str += '<td></td>';
    }

  str += '<th>';

  str += ev.startTime 
  if (ev.endTime){
    str+='<br />|<br />' + ev.endTime;
  }
  str += '</th>';
  str += '<td>';
  str += ev.title + '';
  str += '</td>';
  
  if (ev.track == 'main'){
      if(index != saturday.length-1 && ev.startTime == saturday[index+1].startTime){
        str += '<th>';
        str+=saturday[index+1].startTime
        if(saturday[index+1].endTime){
        str +=  '<br />|<br />' + saturday[index+1].endTime;
      }
    
  str += '</th>';
  str += '<td>' + saturday[index+1].title+ '</td>';
    }
  else{
  str +='<th></th>';
  str += '<td></td>';
  }}
  
  str += '</tr>';
  
  }

});
str += '</tbody>';
window.document.getElementById("saturdayContainer").innerHTML = str;

var str = '<tbody>';
str +=  '<tr><th></th><th>Main track</th><th></th><th>Workshops</th></tr>';
sunday.forEach(function(ev, index){
  if (index ==0  || (sunday[index-1].startTime != ev.startTime || sunday[index-1].track == ev.track) ){     
    str += '<tr>';
    if (ev.track == 'ws'){

        str += '<th></th>';
        str += '<td></td>';
    }
    
    

  str += '<th>';

  str += ev.startTime 
  if (ev.endTime){
    str+='<br />|<br />' + ev.endTime;
  }
  str += '</th>';
  str += '<td>';
  str += ev.title + '';
  str += '</td>';
  
  if (ev.track == 'main'){
    if (index != sunday.length-1 && ev.startTime == sunday[index+1].startTime && ev.track != sunday[index+1].track){
        str += '<th>';
        str+=sunday[index+1].startTime
        if(sunday[index+1].endTime){
        str +=  '<br />|<br />' + sunday[index+1].endTime;
      }
    
  str += '</th>';
  str += '<td>' + sunday[index+1].title+ '</td>';
    
  }
  else{
  str +='<th></th>';
  str += '<td></td>';
  }}
  
  str += '</tr>';
  
  }

});
str += '</tbody>';
window.document.getElementById("sundayContainer").innerHTML = str;

str = '<tbody>';
str +=  '<tr><th></th><th>Main track</th><th></th><th>Workshops</th></tr>';
monday.forEach(function(ev, index){
  if (index ==0  || monday[index-1].startTime != ev.startTime){     
    str += '<tr>';
    if (ev.track == 'ws'){

        str += '<th></th>';
        str += '<td></td>';
    }

  str += '<th>';

  str += ev.startTime 
  if (ev.endTime){
    str+='<br />|<br />' + ev.endTime;
  }
  str += '</th>';
  str += '<td>';
  str += ev.title + '';
  str += '</td>';
  
  if (ev.track == 'main'){
      if(index != monday.length-1 && ev.startTime == monday[index+1].startTime){
        str += '<th>';
        str+=monday[index+1].startTime
        if(monday[index+1].endTime){
        str +=  '<br />|<br />' + monday[index+1].endTime;
      }
    
  str += '</th>';
  str += '<td>' + monday[index+1].title+ '</td>';
    }
  else{
  str +='<th></th>';
  str += '<td></td>';
  }}
  
  str += '</tr>';
  
  }

});
window.document.getElementById("mondayContainer").innerHTML = str;