---
layout: page
title: FAQ
permalink: /faq/
order: 3
---

## AIO FAQ  -  2017-05-22


**How can I get these awesome tweaks on my Infotainment System?**


>  [Download the latest AIO version](http://dl.mazdatweaks.win),
> * Install Requirements:
>   * Windows 7 or Higher: [v2.7.2 exe](http://dl.mazdatweaks.win "MZD-AIO-TI")
>  * Mac Version (dmg): [v2.7.2 dmg](http://mac.mazdatweaks.win "MZD-AIO-MAC")
>  * Linux (deb): [v2.7.2 deb](http://deb.mazdatweaks.win "MZD-AIO-LINUX")
> * CMU Firmware Version 55 or Higher
>  
> Mark The Left, Green Box Next to each tweak to install
>  
> Mark Right, Red Box to uninstall
>  For color theme and background tweaks run the tweaks with default choices to revert
>  Click tweak names in right side options panel for specific help information

---

**Is AIO compatible with my FW version?**

>  Since Ver. 2.6 **AIO IS COMPATIBLE WITH ALL FW V55, V56, V58, AD V59 up to V59.00.502**
>  <a href="#" class="supported-fw-btn">All Compatible Firmware Versions Are Listed Here.</a>
>  AIO will read out your FW version at beginning of installation, if it's not compatible the installation will abort.
>
>  Since Ver 2.5 AIO will prompt to make a jci backup and give instructions on where to send it to test for compatibility if incompatible firmware version is detected.

---

**What FW versions are out there?**

>  These are the known Firmware versions:
* **55.00.650A/753A/760A / 56.00.521A-NA(NA N)**
* **56.00.100A/230A/240B/511A/512A/513C/514A-ADR(4A N)**
* **56.00.100A/210A/230A/511A/512A/513A/513B/513C-EU**
* **56.00.401A/403A-JP / 59.00.445A-JP / 56.00.100A-CHN**
* **58.00.250A-NA(NA N) / 58.00.251A-ADR(4A N)**
* **59.00.326A/330A/342A/442A/443C/449A/450A-ADR(4A N)**
* **59.00.330A/441A/443A/446A/450A-NA(N NA)**
* **59.00.330A/331A/443C/447A/449A-EU**

---

**Is there anything to note, if I use a MAC?**

>  If you are using a Mac or Mac formatted thumb drive make sure there are no hidden files on the drive.   
   The drive should be formatted Fat 32 on a PC if possible.   
   [Look here](https://www.reddit.com/r/mazda3/comments/3d5lvr/mazda_infotainment_update/ctls5ef)

---

**How long does it take till the installation starts?**

>  This can take from 30 seconds to 5 minutes.  Certain factors can delay the start so be patient.

---

**How long does the installation/uninstalling take?**

>  Up to 20 minutes if every tweak has been selected (especially custom colors and jci backup).   
>  If the 'zip jci backup' option is chosen it can take up to an 45 minutes.

---

**Do I have to uninstall a tweak before installing it again?**

>  No, you can install over old versions because during installation the tweak will be deleted and then reinstalled.   
   You can install every tweak over an older version of the same tweak, you never have to uninstall before.

---

**Do I have to use same AIO version for uninstalling the tweaks?**

>  No. You can use latest AIO version for that.

---

**Will all previously installed tweaks be automatically uninstalled, if I do not choose them with a new installer?**

>  No. Only tweaks you have chosen to uninstall will be removed.

---

**If something goes wrong, how can I help you to help me?**

>  During installation/uninstalling, a log file is created (AIO_log.txt) and some additional files will be copied on the USB drive.   
   Please make a ZIP file of them (complete root of USB drive) and send that to me or upload somewhere (e.g. Google drive or so) and send me the link.   
   You can download **[this tweak](//trevelopment.win/backup-script "jci backup")** to make a copy of your jci folder, zip and upload if we need to take a deeper look into your files to find the issue.

---

**Why does AIO reboot automatically at the end?**

>  Because some tweaks are applied on the next boot or during the system boot process.  Also, it puts the system back into read-only mode.

---

**If I want to go back to original state but I forgot the tweaks I've installed, what can I do?**

>  It doesn't matter if you choose tweaks for uninstalling that you haven't installed.  AIO is designed to discover and revert only the changes that have been made by AIO with a few necessary exceptions.  Uninstalling all tweaks (and choosing default color scheme and background) will revert your system back to the default state.  Any changes made outside of AIO are your own responsibility.
>
> **NOTE:** Since AIO Ver. 2.5 you can find a 'Full Restore' script by typing **fullrestore** (one word) into the tweak filter text area on the top right of the app or from the left side pop-out navigation menu.  This script is optimized to directly target all the files that AIO modifies and revert them with an option to also remove all backup files created by AIO.

---

**How do I reboot the system?**

>  Press NAV+MUTE+BACK for 20 seconds.

---

**Can I install AIO even from an SD card?**

>  No. SD card slot in the car is ONLY for satnav maps. You need to use USB port in the car, so either USB stick or USB-SD card reader with your card in it.   
>  This has changed but requires a little bit of DIY => [Autorun Script](//trevelopment.win/cmu-autorun)

---

**How can I enable Hotspot on MZD system:**

>  Try the following: (*Before v58 only)
   1. Open diagnostics menu (buttons Music + Favorites + Pwr / Mute and hold until menu appears)
   2. Hold down "DEL" until "JCI Test Mode Active" appear at right black box (15-20 sec.).
   3. Press "11" and then press "Enter."
   4. Select script WiFi AP Toggle   

>  **All FW Can Activate Via SSH** run the commands:
```sh
/jci/scripts/start_wifi.sh
/jci/scripts/jci-fw.sh stop
/jci/scripts/jci-wifiap.sh start
```    
   Then the access point of the car is running, you should see a WLAN "cmu ...". Simply log in and then access via IP 192.168.53.1 on the system.

---

**If I run the map updates on the Mazda Toolbox software will it overwrite any of the tweaks or cause issues?**

>  No. ~~But before you can use Mazda Toolbox you have to delete speedcam.txt/speedcam.spdb from SD-card (when you have installed speedcam-patch).~~   
   ~~After updating, you can copy the files again.~~

---

**What happened to the SpeedCam Patch Tweak?**

> A few of our developer friends in the Mazda Online community and I were served DMCA Takedown notices on our github repositories by NNG for navigation files that have been copyrighted by the company.  As a result all files that have to do with navigation are no longer available in AIO.

---

**Why did my compass stop working?**

>  Enable touchscreen while driving actually does 2 things. 1. enables use of touchscreen while driving and 2. enables list items (such as text messaging and enter address for navigation) that are normally disabled while driving.  The latter of these has a side effect, it disables the compass (and cluster compass if available).  To enable the compass and use of the touchscreen (with disabled list items while driving) choose the 'Fix Cluster Compass' under the enable touchscreen while driving tweak.

---

**I don't get GPS data after installing speedometer**

>  This happens with some newer FW versions (56.00.51x). Try this to get GPS data for these FW versions:
  * After opening the doors (or trunk) at least **wait 35 seconds**, then start the engines
  * Before starting the speedometer app, shortly start the NAVI app before (works too, if NAVI app was open if engine was stopped)
  * Unplug and re-plug the NAV SD card (**should be avoided**)

---

**When do I need the to use the SwapFile Tweak?**

>  **If you use a navigation SD card and/or use the Video Player app or Android Auto often,** you want to be using the swapfile.  The Mazda Navigation System occupies a HUGE portion of your active memory.  Those 2 apps require a pretty substantial chunk of memory for themselves to run smoothly, swap memory is the solution designed to solve this very issue.  
> When the system runs out of active memory and requires more in order to complete the current process, memory will swap (for empty memory space) an unused (or cached) part of itself with the swap memory to use as active memory until it is no longer needed or the swapped process is called, then it swaps back.  
> __TIP:__ Swap memory is mounted during the CMU's boot process and is also mounted when using the VideoPlayer app.  Some have found better performance by connecting the USB drive after boot is complete so the swapfile can be mounted by the videoplayer app.  
> __NOTE:__ **Memory swap management is not perfect** and performance issues can emerge in certain situations such as switching rapidly between many processes.

---

**I have a question/problem with speedometer.**

>  Please look at [**speedometer_readme.txt**](/speedo "speedometer_readme.txt") and [**speedometer_changelog.txt**](/speedo#changelog "speedometer_changelog.txt")

---

**What are the video specs for playing videos?**

>  Video: MP4, AVI, FLV, WMV; Audio: Stereo MPA  
>  A good format to use H264 video codec and MPEG-4 AAC audio codec in video files  
>  360p quality works best (and still looks great)

---

**I can't play videos. What can I do?**

> Check out the [VideoPlayer Page](/videoplayer "More Information About The VideoPlayer App")
>  Try the following:
   * **REMOVE NAV_SD CARD**  
   * Put all videos in "movies" folder at the USB drive root.
   * Unplug all other USB drives, especially one, with many MP3s on it.
   * Close the player and start again
   * Turn the car on without the USB drive plugged in
   * Copy only one mp3 on your video USB drive
   * Copy only a few videos on your stick (you don't have to delete, rename to *._mp4 is OK too, so that they will not found anymore)*
   * Try the SwapFile Tweak
   * Reboot your system and try to play a video right after that

---

**When I play a video with the VideoPlayer app I hear the radio??**

> You have to manually switch the audio channel to USB (or Bluetooth) and play a silent audio track or pause the audio to play the audio from the video by itself.  The VideoPlayer app uses a separate audio channel but shares the volume so the active Mazda audio channel needs to be paused or silent.

> __TIP:__ **If audio is playing on the USB channel already** When opening the Video Player from the app menu, quickly press the Audio button (left button next to home on the main button panel).  You have to hit it very quickly, like almost at the same time middle-button>audio-button, if you have done it correctly the music will be paused and you can press back and continue playing a video.  This is due to the fact that certain commands (ie. pause/play) can only be called from the proper context (ie. music player app) so there is no way (*yet that I have found) to pause the USB music (or switch audio channels) from the VideoPlayer app.  I put the command to pause audio right at the beginning of the video player app code so this way we can switch contexts quickly enough for the command to run as we switch. Entering the proper context as the command executes, the music is effectively paused, then press back and start a video. Executing the command in the wrong context does nothing which is why you have never noticed it before.

---

**In entertainment window, pause-on-mute works perfectly. But if you leave from the entartainment window, "mute" mutes sound but does not pause the song.**

>  This behavior is correct and as expected.  The pause command will not reach the player if you are in any other app/menu.

---

**I applied the Remove Message Reply tweak but I still get the message on my texts?**

>  In order to apply this tweak you have to do a factory reset of **ALL** settings.  Unfortunately this is the only way to apply that tweak but here is a tip when applying.  
<span id="order-audio-sources"></span>
> __TIP:__ Edit the values of the PresetMessages nodes under your language in file `config/message_replies/jci/settings/configurations/blm_msg-system.xml` to start with your own custom preset messages after the factory reset.
---

**I want to change the order of the audio sources. How can I do that?**

>  You have to edit  
   `/jci/gui/apps/system/js/systemApp.js`  
   around lines 624 - 637  
   **Be careful, the last line must NOT end with a comma or you run in to boot loop!**

---

**Why there is a tweak for backup the /jci folder, but no script to restore these files?**

>  This is just for anyone who would like to learn about the files within their CMU.  It is not necessarily for recovery because only about 1% of the files in the jci folder are modified so replacing the entire jci folder is overkill to say the least.  
> It is also for finding issues, if any exist they can usually be found in those files.

---

**CastScreen-Receiver Is Not Working?**

> [Troubleshooting CastScreen:](/castscreen "More Troubleshooting Techniques")  
- Make sure you have enabled USB debugging in developer options and that when prompted you gave the CMU debugging authorization.
- Make sure you have given the **App permissions on your phone to allow castscreen app to use usb storage** if the app never prompted for that reinstall it.
- Try disconnecting for at least 5 seconds and then reconnecting your phone.
- Try connecting the phone in different modes such as MTP or PTP.
- Using CastScreen together with AA installed can be tricky, a trick is to put your phone in PTP mode to disconnect from AA. Then do not disconnect your phone until you are finished screen casting or AA will launch and steal focus.
- Try connecting to SSH through USB through localhost:2222, if you cannot connect then something is wrong with the CastScreen installation. *If you get an error like: connection closed by foregn host or something like that try toggling wifi.*
- CastScreen-Receiver uses the same module as the video player to display and therefor can suffer similar performance issues if the nav_sd card is being used.  If you are experiencing issues, removing the nav card will improve screen casting performance.

---

**Why are there 2 versions of Android Auto?**

>  **Android Auto is an ongoing development** by many developers all around the world.  At a certain point in its development the code was refactored to allow a better connection between the phone and the CMU, as a result a bug emerged that would drop every incoming call so a fix was developed to reroute phone calls back to the phone, this is now the less severe 'Bluetooth-call bug' that exists in AA ver.1.02.  
> **Before this point calls could be made with the native Mazda Bluetooth calling interface** and once a call was connected AA would display the connected call (and often freeze), so the Android Auto calling interface was never in a fully working state.  AA v0.99 is the last version that AIO offered that allowed for calls to be made with the Mazda Bluetooth calling interface.  
> **Although AA v1.02 contains the 'Bluetooth-call bug' it is overall much more stable than AA v0.99.** In fact many bugs and issues were resolved more easily mostly due to the change that led to the bug being introduced in the first place.  Developers are continuing to work on fixing the bug and ask that users don't report issues and bugs from v0.99 as they have already been addressed.  
Also, before giving up on connecting AA v0.99 try 3 or 4 times because it takes an average or 3 tries to get it started.  
AA v1.02 will automatically start with no problem when a compatible phone with the Android Auto app installed is plugged in.  

**Hpow Can I contribute to Android Auto development?**
> Check this out: [How to Set up the Android Auto Headunit Development Environment and Emulator in an Ubuntu Virtual Machine running on Windows in under 1 Hour](/androidauto "Tutorial: Run Android Auto In An Ubuntu VM")

---

**Can you write this or that tweak for us?**

>  By now I have studied the inner workings of the Infotainment System so well I could probably go work for Johnson Controls or Visteon.  There are still things that are very tricky, dangerous and/or impossible to pull off but if you have an idea [Shoot me an email](mailto:trez@mazdatweaks.com?subject=Tweak%20Request) and I will give it a shot.

---
