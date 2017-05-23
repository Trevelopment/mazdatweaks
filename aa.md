---
layout: default
permalink: /androidauto/
---

# How To Run **Android Auto** In An Ubuntu Virtual Machine

## [Windows 10](https://www.microsoft.com/software-download/windows10 "Download Windows 10"), [VirtualBox VM Manager](https://www.virtualbox.org/wiki/Downloads "Download VirtualBox"), [Ubuntu v16.04 64-bit](https://www.ubuntu.com/download "Ubuntu Downloads")

### **Required Knowledge:**
**To Run:** Ability to follow these instructions, create a Virtual Machine, use a command line interface, and basic understanding of git and bash shell scripting.   
**To Develop:** At least one or more of: C, C++, JavaScript, Linux/Bash Scripting, Android, gstreamer(0.10 & 1.0).   

### **Required Hardware:**
**Android Phone:** v5+ with Android Auto App installed and USB Debugging Enabled.   
**USB Bluetooth Receiver:** I could not figure out how to use a built in Bluetooth receiver in a Virtual Machine.

---   
## Part 1: Virtual Machine

##### If you already know how to do this or are already on Linux skip to [part 2](#part-2) These are instructions for Windows 10 and Ubuntu 16.04(64-bit) but any recent Mac OS and Linux distro should work just as well.

| --- | --- |
| - Create an Ubuntu (Linux) Virtual Machine and boot up Linux with a disk image from the link above | ![Virtual Machine](/images/AA/vm1.jpg "Set Up Virtual Machine") |
| - Give plenty of allowed RAM and Disk Space (you can use VDI Virtual Disk Image) and complete the installation | ![VDI](/images/AA/vm2.jpg "VDI") |
| - While the installation is running, you can set up your USB devices (phone and Bluetooth) to connect automatically in settings>USB.  When adding a device erase all entries except for name, Vendor ID, and Product ID (you can delete Product ID field too if your phone is having issues reconnecting). Then after they are set up disconnect them until the installation is finished and the system reboots. | ![USB Device Setup](/images/AA/vm3.jpg "USB Device Setup") |
| - When Ubuntu is finished installing, try connecting your USB devices.  In the menu under devices>USB there should be a check mark next to your Bluetooth receiver and phone.  If there isn't try to connect them, if you are getting an error you might need to fix your drivers like I did. I had to do this to get my USB devices to work [Method No. 2](http://www.cyberprogrammers.net/2015/04/how-to-fix-usb-device-is-busy-with.html "I had to use Method 2 to fix my issues") | ![Check USB Devices](/images/AA/vm4.jpg "Check USB Devices") |
| - By now you should have a fully functional Ubuntu Virtual Machine running with working USB drivers to use your devices. | ![Ubuntu](/images/AA/ubuntu.png "Ubuntu") |

---
## Part 2:  From 0 to AA
Once Ubuntu is all set up this is the complete set of commands to take you from 0 to Android Auto in about 30-60 minutes:
```sh
cd ~
sudo apt-get install git adb Bluetooth tlp blueman bluemon bluez npm nodejs protobuf-compiler libsdl2-dev libunwind-dev libusb-dev  libsdl2-2.0-0 libsdl2-ttf-2.0-0 libportaudio2 libpng12-0 gstreamer1.0-plugins-base-apps gstreamer1.0-plugins-bad gstreamer1.0-libav gstreamer1.0-alsa libssl-dev libusb-1.0-0-dev libgstreamer1.0-dev libgstreamer-plugins-base1.0-dev libsdl1.2-dev libgtk-3-dev libgstreamer-plugins-bad1.0-dev
adb start-server
git clone https://github.com/gartnera/headunit.git
cd ~/headunit/mazda
git clone https://github.com/lmagder/m3-toolchain.git
sudo cp -a ~/headunit/mazda/m3-toolchain/* /usr
make
sed -i 's/xvimagesink/ximagesink/g' ~/headunit/ubuntu/outputs.cpp
adb devices -l
cd ../ubuntu && make
sudo ./headunit
reboot
```
Now you have the Android Auto Ubuntu Emulator Installed, every time you want to open the emulator back up you just enter the command:  
```sh
sudo ~/headunit/ubuntu/headunit
```
I hope this will lead to more programmers who did not want to bother installing a new operating system or spend a lot of time figuring out how to set up the development environment and whatnot to contribute to the Android Auto project.  I tried to make these instructions as simple, clear, and straightforward as possible but if there are any ambiguities or you have an improvement or suggestion for this tutorial [shoot me an email](mailto:trez@mazdatweaks.com?subject=AA%20on%20Ubuntu%20Suggestion). To all my fellow HaXors out there Happy Hacking!   
**NOTES:** You may need to manually reconnect your phone if it is disconnected by AA.  You need to have your phone in MTP mode (you can try PTP as well) to make the adb connection properly.  if you are having trouble connecting you may be using an incompatible Bluetooth receiver.

![Terminal](/images/AA/terminal.jpg "Terminal")

AA Headunit app repository:
<https://github.com/gartnera/headunit.git>

These are the dependencies:
<https://github.com/gartnera/headunit/tree/master/ubuntu>  

{% include_relative AA.html %}

---
## **BONUS**

Now that you have Ubuntu set up and the Mazda arm toolchain installed you can also compile and run the CastScreen-Receiver:
```sh
cd ~
git clone https://github.com/JonesChi/CastScreen.git
cd CastScreen/receiver && make
sudo sh ./wait_adb.sh
reboot
```

To start again:  
```sh
cd ~/CastScreen/receiver
sudo sh ./wait_adb.sh
```
