---
layout: default
permalink: /castscreen/
---

# CastScreen-Receiver Troubleshooting

---  
To troubleshoot CastScreen-Receiver via SSH you just need to use the following commands.
```sh
# Check if CastScreen Process is running
ps | grep cs_receiver_arm

# Kill CastScreen process
killall cs_receiver_arm

# Go to scripts folder
cd /jci/scripts

# Start Castscreen process (from scripts folder)
./cs_receiver_arm mfw_v4lsink &
```

What you need to do is connect via SSH, kill the CastScreen process, go to scripts folder, run the CastScreen process, switch to CastScreen app on your phone and hit start, then switch back to terminal and note the output with a screenshot or whatever.
When I was running this to get screenshots for this tutorial it actually failed on me the first time. I got it going on the second try after unplugging the phone for 5 seconds then reconnecting to phone and SSH. Then it was running smooth.  
**Troubleshoot CastScreen via SSH:**  

| --- | --- |
| - Check if the CastScreen process is running. Kill the process if it is running. | ![KILL](/images/ssh/SSH1.png) |
| - Run the process in your terminal the switch to the CastScreen app and press start. | ![RUN](/images/ssh/SSH2.png) |
| - Switch back to your terminal and note the output.  In this image the CastScreen hit an error and failed. | ![ERR](/images/ssh/SSH3.png)  |
| - These are similar to the error messages thrown by the VideoPlayer.  At this point I disconnect my phone for about 5-10 seconds, reconnect phone, and reconnect to SSH | ![ERR2](/images/ssh/SSH4.png)  |
| - Run the commands to kill, and launch CastScreen process and start casting with CastScreen App | ![REKILL](/images/ssh/SSH5.png) |
| - Hopefully by now it works for you, if not repeat disconnecting, reconnection, killing and relaunching the process.  You can also try: Rebooting phone, rebooting Infotainment System, removing other USB devices, removing Navigation SD Card, and reinstalling the CastScreen-Receiver in the car. | ![PASS](/images/ssh/SSH8.png)  |

---
If you are having issues with connecting to adb debugging mode.  
**Troubleshoot adb:**

```sh
adb kill-server
# disconnect your phone
adb start-server
# connect your phone try regular mode first then mtp then ptp if they don't work
adb devices -l
# you should get the authorization message and your phone serial number as the output, if it says unauthorized, run adb kill-server again
```
If you still can't get it to connect then Revoke USB Debugging Authorizations in developer options on your phone and reboot your phone and the Infotainment system and try again.

---
<style>
@media(min-width:800px){
  td:last-child {
    width: 400px;
  }
}
</style>
