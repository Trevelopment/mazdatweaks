---
layout: default
title: Android Auto
side_menu: true
top_menu: true
permalink: /androidauto/
---

# MZD Headunit App for Android Auto

#### Download links:
[Latest AA Release](http://aa.mazdatweaks.win)<br>
[Latest AA W/ Beta Features](http://aabeta.mazdatweaks.win) (if there is one)
##### Old Versions
_Beta releases will have 1 or more features from the next version but official releases will have more stable code._<br>
#### Sorry these are broken links
[v1.04](/aa104)<br>
[v1.05](/aa105)<br>
[v1.06](/aa106)<br>
[v1.06b](/aa106b)(Car GPS disabled)<br>
[v1.07](/aa107)<br>
[Mirror for v1.05b, v1.06 & v1.06b](/aa-mirror105b)<br>
[Another Mirror for v1.06](/aa-megamirror106)<br>
[Mirror for v1.07](/aamirror107)<br>
[v1.09](/aa109)<br>
[v1.10+](/aa110) (Without HUD because feature was unstable)<br>
[v1.12](/AA-v1.12.zip)<br>
[v1.13](/AA-v1.13.zip)<br>
[v1.14b by Radarwild](https://www.mazda3revolution.com/threads/aa-v1-14b-tru_go-fw55-59-fw70-abarth124-spider-sound-touch-usb-s-beta.239375/)

For more information visit the [Headunit Repository](http://github.com/gartnera/headunit/)

---
## Instructions for Android Auto Wireless Support (v1.09+):

### Initial wireless connection
1. <b>PHONE</b>:  Enable Developer Settings on Android Auto
2. <b>CAR</b> : Start car
3. <b>PHONE</b>: Create a personal hotspot
4. <b>CAR</b> : Connect Wifi to personal hotspot

### Run headunit-wireless
5. <b>PHONE</b>: Open Android Auto app and go to "about". Open the menu and tap "Start Head unit Server"
6. <b>CAR</b>: Android Auto Headunit will start automatically

### Stop
1. <b>CAR</b>: Exit Headunit
2. <b>PHONE</b>: Stop Head unit Server. Disable developer mode (options).
3. <b>CAR</b>: Disconnect personal hotspot
4. <b>PHONE</b>: disable personal hotspot

#### Changelog since v1.0:
- v1.03:
  - Bluetooth calling issue resolved with patch to sound config files
  - Audio streams adjusted
  - Video focus is lost at beginning and end of a Bluetooth call
- v1.04
  - Bluetooth calling issue completely resolved (no patch needed)
  - MZD multicontroller buttons mapped:
    - Nav - AA home
    - FAV (<span class="icon-star"></span>) - Regain video focus
    - Call - AA Phone context or Answer calls
    - Call End - End Call
  - Tap textarea on credits screen to view headunit.log
- v1.05
  - Video Focus on Bluetooth calls issue resolved
- v1.06
  - AA Log scrollable (credits screen)
  - Some Audio volume/quality issues resolved
- v1.07
  - GPS code rewritten to be more stable and work in parallel with MZD Navigation
  - AA Media registered on its own separate stream (resolves multiple audio focus issues)
  - Remapped FAV (<span class="icon-star"></span>) Button - Switch audio focus to MZD Entertainment
  - Control USB audio with prev/next buttons (when it has audio focus)
---

# How To Run **Android Auto** In Ubuntu (Virtual Machine)

## [Windows 10](//www.microsoft.com/software-download/windows10 "Download Windows 10"), [VirtualBox VM Manager](//www.virtualbox.org/wiki/Downloads "Download VirtualBox"), [Ubuntu v16.04 64-bit](//www.ubuntu.com/download "Ubuntu Downloads")

## OR just Ubuntu [Ubuntu v16.04 64-bit](//www.ubuntu.com/download "Ubuntu Downloads") as the main OS.

### **Required Knowledge:**
**To Run:** Ability to follow these instructions, create a Virtual Machine, use a command line interface, and basic understanding of git and bash shell scripting.   
**To Develop:** At least one or more of: C, C++, JavaScript, Linux/Bash Scripting, Android, gstreamer(0.10 & 1.0).   

### **Required Hardware:**
**Android Phone:** v5+ with Android Auto App installed and USB Debugging Enabled.   
**USB Bluetooth Receiver:** or built in Bluetooth receiver.

---   
## Part 1: Virtual Machine

##### If you already know how to do this or are already on Ubuntu/Linux skip to [part 2](#part-2) These are instructions for Windows 10 and Ubuntu 16.04(64-bit) but any recent Mac OS and Linux distro should work just as well.

| --- | --- |
| - Create an Ubuntu (Linux) Virtual Machine and boot up Linux with a disk image from the link above | ![Virtual Machine](/images/AA/vm1.jpg "Set Up Virtual Machine") |
| - Give plenty of allowed RAM and Disk Space (you can use VDI Virtual Disk Image) and complete the installation | ![VDI](/images/AA/vm2.jpg "VDI") |
| - While the installation is running, you can set up your USB devices (phone and Bluetooth) to connect automatically in settings>USB.  When adding a device erase all entries except for name, Vendor ID, and Product ID (you can delete Product ID field too if your phone is having issues reconnecting). Then after they are set up disconnect them until the installation is finished and the system reboots. | ![USB Device Setup](/images/AA/vm3.jpg "USB Device Setup") |
| - When Ubuntu is finished installing, try connecting your USB devices.  In the menu under devices>USB there should be a check mark next to your Bluetooth receiver and phone.  If there isn't try to connect them, if you are getting an error you might need to fix your drivers like I did. I had to do this to get my USB devices to work [Method No. 2](http://www.cyberprogrammers.net/2015/04/how-to-fix-usb-device-is-busy-with.html "I had to use Method 2 to fix my issues") | ![Check USB Devices](/images/AA/vm4.jpg "Check USB Devices") |
| - By now you should have a fully functional Ubuntu Virtual Machine running with working USB drivers to use your devices. | ![Ubuntu](/images/AA/ubuntu.png "Ubuntu") |

---
<a name="part-2"></a>
## Part 2:  From 0 to AA
Once Ubuntu is all set up this is the complete set of commands to take you from 0 to Android Auto in about 30-60 minutes:
```sh
cd ~
sudo apt-get install git adb bluetooth libbluetooth-dev tlp blueman bluemon bluez libsdl2-2.0-0 libsdl2-ttf-2.0-0 libportaudio2 gstreamer1.0-plugins-base-apps gstreamer1.0-plugins-bad gstreamer1.0-libav gstreamer1.0-alsa
sudo apt-get install libssl-dev libusb-1.0-0-dev libgstreamer1.0-dev libgstreamer-plugins-base1.0-dev libsdl1.2-dev libgtk-3-dev libudev-dev libunwind-dev libsdl2-dev libgstreamer-plugins-bad1.0-dev protobuf-compiler libdbusxx
git clone --recursive //github.com/gartnera/headunit.git
sed -i 's/xvimagesink/ximagesink/g' ~/headunit/ubuntu/outputs.cpp # ONLY NEEDED if running on a virtual machine
cd ~/headunit/ubuntu
make clean && make
sudo ./headunit
```
Now you have the Android Auto Ubuntu Emulator Installed, every time you want to open the emulator back up you just enter the command:  
```sh
sudo ~/headunit/ubuntu/headunit
```

To compile a headunit binary for use in the car run:
```sh
cd ~/headunit/mazda && make clean && make
```

I hope this will lead to more programmers who did not want to bother installing a new operating system or spend a lot of time figuring out how to set up the development environment and whatnot to contribute to the Android Auto project.  I tried to make these instructions as simple, clear, and straightforward as possible but if there are any ambiguities or you have an improvement or suggestion for this tutorial [shoot me an email](mailto:trez@mazdatweaks.com?subject=AA%20on%20Ubuntu%20Suggestion). To all my fellow HaXors out there Happy Hacking!   
**NOTES:** You may need to manually reconnect your phone if it is disconnected by AA.  You need to have your phone in MTP mode (you can try PTP as well) to make the adb connection properly.  if you are having trouble connecting you may be using an incompatible Bluetooth receiver.

![Terminal](/images/AA/terminal.jpg "Terminal")

AA Headunit app repository:
<//github.com/gartnera/headunit.git>

These are the dependencies:
<//github.com/gartnera/headunit/tree/master/ubuntu>  

{% include_relative AA.html %}

---
## **BONUS**

Now that you have Ubuntu set up and the Mazda arm toolchain installed you can also compile and run the CastScreen-Receiver:
```sh
cd ~
git clone //github.com/JonesChi/CastScreen.git
cd CastScreen/receiver && make
sudo sh ./wait_adb.sh
reboot
```

To start again:  
```sh
cd ~/CastScreen/receiver
sudo sh ./wait_adb.sh
```

<style>
#updated- img{max-width:500px;}
</style>
