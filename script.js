
      // set the date we are counting down to
      var countDown = new Date("oct 23, 2023 00:00:00").getTime();
     
      //update the count down in every 1 second
      var update = setInterval(function () {
     
         // get the today's date and time
         var now = new Date().getTime();
       
         //find the difference b/w countDown and now
         var diff = countDown - now;
       
         //now we are calculating time in days, hrs, minutes, and seconds.
         var days = Math.floor(diff / (1000 * 60 * 60 * 24));
         var hrs = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000* 60));
         var seconds = Math.floor((diff % (1000 * 60)) / 1000);
       
         //now output the result in an element with id ="time"
         document.getElementById("time").innerHTML = 
         days +"D  "  + hrs +"H " + minutes + "M " + seconds + 
          "S ";
         if (diff < 0) {
            clearInterval(update);
            document.getElementById("time").innerHTML = " HAPPY BIRTHDAY LOVE ";
         }
      }, 1000);
