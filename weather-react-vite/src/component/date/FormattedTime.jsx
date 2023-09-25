import React, { useState, useEffect } from "react";

function CurrentTime() {
  // We start by creating a "box" to store the current time.
  // This "box" is called 'currentTime', and we set it to an empty box for now.
  const [currentTime, setCurrentTime] = useState("");

  // Now, we have a special plan to update the time.
  // We want to update it when our clock (or computer) changes the time.
  useEffect(() => {
    // This is our plan for updating the time:
    const updateTime = () => {
      // First, we look at our clock (or computer) and find out what time it is right now.
      const currentDate = new Date();

      // We look at the clock and say, "What's the hour?"
      // For example, it might be 3 o'clock.
      const hours = currentDate.getHours();

      // We also look at the clock and ask, "What are the minutes?"
      // Maybe it's 15 minutes past 3.
      const minutes = currentDate.getMinutes();

      // We want to tell if it's morning (AM) or afternoon/evening (PM).
      // So, we check if the hour is 12 or more (noon or later).
      // If it is, we say "PM"; otherwise, we say "AM".
      const amOrPm = hours >= 12 ? "PM" : "AM";

      // Now, we want to make the hour look friendly.
      // Instead of saying 15:00 (which is 3 PM in military time), we say 3:00 PM.
      // To do that, we use '%' to get the remainder when we divide the hour by 12.
      // This gives us a number between 0 and 11.
      // We add 1 to it because we don't want to say "0 o'clock."
      // If it's 15, the remainder is 3, so we say 3 o'clock.
      const formattedHours = hours % 12 || 12;

      // We also want to make sure minutes look good.
      // Instead of saying 5 minutes past 3 as "3:5 PM," we say "3:05 PM."
      // We use 'padStart(2, "0")' to add a zero in front of the minutes if it's less than 10.
      const formattedMinutes = minutes.toString().padStart(2, "0");

      // Now, we put everything together to make a nice time display.
      const formattedTime = `${formattedHours}:${formattedMinutes} ${amOrPm}`;

      // We open our "box" called 'currentTime' and put the nice time inside.
      setCurrentTime(formattedTime);
    };

    // We want to start our plan right away when we show the time on the screen.
    updateTime();

    // Then, we want to keep updating the time every second.
    // So, we set a timer to call our plan (updateTime) every 1000 milliseconds (1 second).
    const intervalId = setInterval(updateTime, 1000);

    // But, when we're done showing the time and close the screen,
    // we don't want to keep checking the time forever.
    // So, we need to clean up the timer when we're done.
    // This line does that.
    return () => {
      clearInterval(intervalId);
    };
  }, []); // This '[]' means our plan runs only once when we first show the time.

  // Finally, we show the time on the screen.
  // We have a sign that says "Current Time" and then we show the nice time we made earlier.
  return (
    <div>
     {currentTime}
    </div>
  );
}

// We finish by saying that we're done making our special clock and we can use it in our app.
export default CurrentTime;
