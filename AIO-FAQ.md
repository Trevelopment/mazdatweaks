---
layout: page
title: FAQ
side_menu: true
top_menu: true
permalink: /faq/
order: 3
---

## AIO FAQ  -  2018-08-01

**How can I get these awesome tweaks on my Infotainment System?**

>  [Download the latest AIO version](http://dl.mazdatweaks.win),
>
> -   Install Requirements:
>     -   Windows 7 or Higher: [v{{site.version}} exe](http://dl.mazdatweaks.win "MZD-AIO-TI")
> -   Mac Version (dmg): [v{{site.version}} dmg](http://mac.mazdatweaks.win "MZD-AIO-MAC")
> -   Linux (deb): [v{{site.version}} deb](http://deb.mazdatweaks.win "MZD-AIO-LINUX")
> -   CMU Firmware Version 55 or Higher
>
> Mark The Left, Green Box Next to each tweak to install
>
> Mark Right, Red Box to uninstall
>  For color theme and background tweaks run the tweaks with default choices to revert
>  Click tweak names in right side options panel for specific help information

* * *

**Is AIO compatible with my FW version?**

>  **AIO IS COMPATIBLE WITH ALL FW V55, V56, V58, AND V59**
>
> **AIO is also compatible with version 59.00.502+ ONLY IF YOU HAVE DONE THE NECESSARY STEPS TO ENABLE TWEAKS INSTALLATION ([Read This Thread For More Info](https://trevelopment.win/im-super-serial))**
>
>  **This can be done by installing autorun & recovery scripts before updating**
>
>  **If you never had an earlier FW then the only way to gain access right now is to [via serial connection](https://trevelopment.win/im-super-serial)**
>
>  <a href="#" class="supported-fw-btn">All Compatible Firmware Versions Are Listed Here.</a>
>  AIO will read out your FW version at beginning of installation, if it's not compatible the installation will abort.

* * *

**Is there anything to note, if I use a MAC?**

>  If you are using a Mac or Mac formatted thumb drive make sure there are no hidden files on the drive.  
>    The drive should be formatted Fat 32 on a PC if possible.  
>    [Look here](//www.reddit.com/r/mazda3/comments/3d5lvr/mazda_infotainment_update/ctls5ef)

* * *

**How long does it take till the installation starts?**

>  This can take **from 30 seconds to 20 minutes**.  Certain factors can delay the start so be patient.

* * *

**How long does the installation take?**

>  Up to 20 minutes if every tweak has been selected (especially custom colors and jci backup).  
>  If the 'zip jci backup' option is chosen it can take up to an 45 minutes.

* * *

**Do I have to uninstall a tweak before installing it again?**

>  No, you can always install every tweak over an older version of the same tweak, you never have to uninstall before.

* * *

**Do I have to use same AIO version for uninstalling the tweaks?**

>  No. You can use latest AIO version for that.

* * *

**Will all previously installed tweaks be automatically uninstalled, if I do not choose them with a new installer?**

>  No. Only tweaks you have chosen to uninstall will be removed.

* * *

**What is "autorun & recovery?"**

> Autorun & recovery are a set of scripts that will automatically regain SSH access and allow for tweaks to be installed when updating to firmware v59.00.502+ or [after gaining serial access](https://trevelopment.win/im-super-serial).  The recovery script lies dormant until it detects it is needed then runs automatically in the background without you even noticing that it is fixing the issue.  

* * *

**Is it one time installation or needs do be done every time before firmware upgrade?  Does it need to be installed separately or can be done with other tweaks at the same time?**

> They only need to be installed once separately from tweaks then you can forget about it and it will do its magic when the time comes.  You don't even need to reinstall the scripts after updating, they will persist through firmware updates and will automatically run and repair your system after the update is complete.

* * *

**What are the other options under autorun? Do I need them?**

> There are a few extras you can install with the autorun script Auto WiFi AP, Auto ADB, and Dryrun. You don't need any of these for the recovery scripts to work these are just additional ways to test/access your system.
>
> -   _Dryrun:_ is only for testing the installation is successful, you only need it the first time you install then you can delete it.
> -   _Auto WiFi AP:_ Starts a WiFi AP (Access Point) coming from your CMU.  You have to set the SSID and Password used to connect just like you would a router.  If you dont set them it will not work.
> -   _Auto ADB:_ This one is my favorite, on boot it starts an adb reverse port from 2222 to port 22 that can be used by any android device (with developer mode activated) to connect directly to the CMU via
>     -   `SSH --host=localhost --port=2222`

* * *

**Can tweaks be installed after running the recovery scripts?**

>  You can do everything normally after installing the autorun & recovery scripts.  You will not even notice them, you can just forget about them and rest easy, they will be ready when you need them.

* * *

**If something goes wrong, how can I help you to help me?**

>  During installation/uninstalling, a log file is created (AIO_log.txt) and some additional files will be copied on the USB drive.  
>    Please make a ZIP file of them (complete root of USB drive) and send that to me or upload somewhere (e.g. Google drive or so) and send me the link.  
>   Run "Backup JCI Folder" tweak to make a copy of your jci folder, zip and upload if we need to take a deeper look into your files to find the issue.

* * *

**Why does AIO reboot automatically at the end?**

>  Because some tweaks are applied on the next boot or during the system boot process.  Also, it puts the system back into read-only mode.

* * *

**If I want to go back to original state but I forgot the tweaks I've installed, what can I do?**

>  It doesn't matter if you choose tweaks for uninstalling that you haven't installed.  AIO is designed to discover and revert only the changes that have been made by AIO with a few necessary exceptions.  Uninstalling all tweaks (and choosing default color scheme and background) will revert your system back to the default state.  Any changes made outside of AIO are your own responsibility.
>  There is also a "Full Restore" tweak that can be accessed through the dropdown nest to the Start Compilation button or the side menu.  You can use the to safely revert your system to "stock."
> A third option is in the AIO Tweaks App.  Choose the "System Restore" option and your system will be restored EXCEPT for the default Red color theme file, that you mush revert with AIO by selecting the "Custom Infotainment Colors" Tweak and Red (Default) Option.

* * *

**How do I reboot the system?**

>  Press NAV+MUTE+BACK for 20 seconds.

* * *

**Can I install AIO from an SD card?**

>  You can but it requires a little bit of DIY => [Autorun Script](//trevelopment.win/cmu-autorun)

* * *

**How can I enable Hotspot on MZD system:**

>  Try the following: (\*Before v58 only)
>    1. Open diagnostics menu (buttons Music + Favorites + Pwr / Mute and hold until menu appears)
>    2. Hold down "DEL" until "JCI Test Mode Active" appear at right black box (15-20 sec.).
>    3. Press "11" and then press "Enter."
>    4. Select script WiFi AP Toggle   
>
>  **All FW Can Activate Via SSH** run the commands:
>
> ```sh
> /jci/scripts/start_wifi.sh
> /jci/scripts/jci-fw.sh stop
> /jci/scripts/jci-wifiap.sh start
> ```
>
>    Then the access point of the car is running, you should see a WLAN "cmu ...". Simply log in and then access via IP 192.168.53.1 on the system.
>
> **The AIO Tweaks App also had a Start Wifi AP button, this is the easiest way to start it.**

**Why did my compass stop working?**

>  Enable touchscreen while driving actually does 2 things. 1. enables use of touchscreen while driving and 2. enables list items (such as text messaging and enter address for navigation) that are normally disabled while driving.  The latter of these has a side effect, it disables the compass (and cluster compass if available).  To enable the compass and use of the touchscreen (with disabled list items while driving) choose the 'Fix Cluster Compass' under the enable touchscreen while driving tweak.

* * *

**I don't get GPS data after installing speedometer**

>  This happens with some FW versions (56.00.51x). Try this to get GPS data for these FW versions:
>
> -   After opening the doors (or trunk) at least **wait 35 seconds**, then start the engines
> -   Before starting the speedometer app, shortly start the NAVI app before (works too, if NAVI app was open if engine was stopped)
> -   Unplug and re-plug the NAV SD card (**should be avoided**)

* * *

**When do I need the to use the SwapFile Tweak?**

>  **If you use a navigation SD card and/or use the Video Player app or Android Auto often,** you may want to be use the swapfile if you are hiving memory issues.  The Mazda Navigation System occupies a HUGE portion of your active memory.  Those 2 apps require a pretty substantial chunk of memory for themselves to run smoothly, swap memory is the solution designed to solve this very issue.  
> When the system runs out of active memory and requires more in order to complete the current process, memory will swap (for empty memory space) an unused (or cached) part of itself with the swap memory to use as active memory until it is no longer needed or the swapped process is called, then it swaps back.  
> **TIP:** Swap memory is mounted during the CMU's boot process and is also mounted when using the VideoPlayer app.  Some have found better performance by connecting the USB drive after boot is complete so the swapfile can be mounted by the videoplayer app.  
> **NOTE:** **Memory swap management is not perfect** and performance issues can emerge in certain situations such as switching rapidly between many processes.

* * *

**What are the video specs for playing videos?**

>  Video: MP4, AVI, FLV, WMV; Audio: Stereo MPA  
>  A good format to use H264 video codec and MPEG-4 AAC audio codec in video files  
>  360p quality works best (and still looks great)

* * *

**I can't play videos. What can I do?**

> Check out the [VideoPlayer Page](/videoplayer "More Information About The VideoPlayer App")
>  Try the following:
>
> -   **REMOVE NAV_SD CARD**  
> -   Put all videos in "movies" folder at the USB drive root.
> -   Unplug all other USB drives, especially one, with many MP3s on it.
> -   Close the player and start again
> -   Turn the car on without the USB drive plugged in
> -   Copy only one mp3 on your video USB drive
> -   Copy only a few videos on your stick (you don't have to delete, rename to _.\_mp4 is OK too, so that they will not found anymore)_
> -   Try the SwapFile Tweak
> -   Reboot your system and try to play a video right after that

* * *

**When I play a video with the VideoPlayer app I hear the radio??**

> You have to manually switch the audio channel to USB (or Bluetooth) and play a silent audio track or pause the audio to play the audio from the video by itself.  The VideoPlayer app uses a separate audio channel but shares the volume so the active Mazda audio channel needs to be paused or silent.
>
> **TIP:** **If audio is playing on the USB channel already** When opening the Video Player from the app menu, press the Entertainment (Audio) button to pause the music player.  This will only work once before playing the first video then the button will function normally.

* * *

**In entertainment window, pause-on-mute works perfectly. But if you leave from the entertainment window, "mute" mutes sound but does not pause the song.**

>  This behavior is correct and as expected.  The pause command will not reach the player if you are in any other app/menu.

* * *

**I applied the Remove Message Reply tweak but I still get the message on my texts?**

>  In order to apply this tweak you have to do a factory reset of **ALL** settings.  Unfortunately this is the only way to apply that tweak but here is a tip when applying.  
> <span id="order-audio-sources"></span>
> **TIP:** Edit the values of the PresetMessages nodes under your language in file `config/message_replies/jci/settings/configurations/blm_msg-system.xml` to start with your own custom preset messages after the factory reset.

* * *

**Why there is a tweak for backup the /jci folder, but no script to restore these files?**

>  This is just for anyone who would like to learn about the files within their CMU.  It is not necessarily for recovery because only about 1% of the files in the jci folder are modified so replacing the entire jci folder is overkill to say the least.  
> It is also for finding issues, if any exist they can usually be found in those files.

* * *

**What is CASDK?**

> The Custom Application SDK for Mazda Infotainment System is a micro framework that allows developers to write and deploy custom applications which integrate natively into the existing JCI framework without hassle.

* * *

**Can I install AIO & CASDK apps together?**

>  YES! AIO + CASDK has integrated native app support into the framework.

* * *

**Where can I find more CASDK apps?**

> The codes to unlock the CASDK apps included in AIO will be posted here: <https://mazdatweaks.com/casdk/> A new code will be released every few days until they are all posted (There are 12 apps total!)

* * *

**How can I develop/run my own CASDK app?**

> Developing CASDK apps is very easy and since it is all open source you can use an already made app as a starting point or use the casdk npm package to create a new, blank app template with the command `casdk create myapp`.  
> To run your app use the 'RUN CASDK APPS FROM SD CARD' option and copy your app folder to the `apps/` folder on the root of the SD Card. Also, add the name of the app to `/apps/apps.js`.

* * *

**When 'RUN CASDK APPS FROM SD CARD' option is checked do I need to manually copy apps to my SD card?**

> You can but you don't have to, AIO will install the selected CASDK apps directly onto the connected SD card if available.  If there is no SD card connected a message will show asking if you would like to install CASDK apps to the system disk or manually install them to the SD card.

* * *

**CastScreen-Receiver Is Not Working?**

> [Troubleshooting CastScreen:](/castscreen "More Troubleshooting Techniques")  
>
> -   Make sure you have enabled USB debugging in developer options and that when prompted you gave the CMU debugging authorization.
> -   Make sure you have given the **App permissions on your phone to allow castscreen app to use usb storage** if the app never prompted for that reinstall it.
> -   Try disconnecting for at least 5 seconds and then reconnecting your phone.
> -   Try connecting the phone in different modes such as MTP or PTP.
> -   Using CastScreen together with AA installed can be tricky, a trick is to put your phone in PTP mode to disconnect from AA. Then do not disconnect your phone until you are finished screen casting or AA will launch and steal focus.
> -   Try connecting to SSH through USB through localhost:2222, if you cannot connect then something is wrong with the CastScreen installation. _If you get an error like: connection closed by foregn host or something like that try toggling wifi._
> -   CastScreen-Receiver uses the same module as the video player to display and therefor can suffer similar performance issues if the nav_sd card is being used.  If you are experiencing issues, removing the nav card will improve screen casting performance.

* * *

**Whats Up With Android Auto Headunit App?**

>  **Android Auto Headunit App for MZD is an ongoing development** by many developers all around the world.  The project was forked from a fully reverse engineered AA headunit app by the late great Mike Reid and ported to the MZD infotainment system where it underwent development by some extremely talented developers.  The Mazda community waited for an official version to come out but was met with empty promises, driving a few determined hackers to create a fully working version first. As of now [Android Auto Headunit App ver.1.09](http://aa.mazdatweaks.win) is free of major bugs and works as it should well before an official version was released... if that ever even happens.

* * *

**How Can I contribute to Android Auto development?**

> Visit the [headunit repository on Github](https://trevelopment.win/aarepo "Android Auto Headunit Repository")
> Check this out: [How to Set up the Android Auto Headunit Development Environment and Emulator in an Ubuntu Virtual Machine running on Windows in under 1 Hour](/androidauto "Tutorial: Run Android Auto In An Ubuntu VM")

* * *

**What about Apple Car Play?**

> As far as I know there are no community projects involving Car Play, the official version may be out soon but will require both a software and hardware upgrade.

* * *

**Can you write this or that tweak for us?**

>  By now I have studied the inner workings of the Infotainment System so well I could probably go work for Johnson Controls or Visteon.  There are still things that are very tricky, dangerous and/or impossible to pull off but if you have an idea [Shoot me an email](mailto:trez@mazdatweaks.com?subject=Tweak%20Request) and I will give it a shot (Except Car Play)

* * *
