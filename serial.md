---
layout: default
title: Serial Connection
permalink: /serial/
---

# **CMU Serial Access**

**In FW v59.00.502 and higher the CMU is locked down and users cannot access to their own systems and can no longer install tweaks.**  Currently the only way to circumvent this is to make a serial connection and follow these instructions very carefully. This process will allow you to run tweaks from USB.

### **_A huge Thank You to [Albuyeh](http://www.albuyeh.com/) for writing these detailed instructions._**

## Parts/Equipment Needed:

-   [USB to TTL Serial Adapter](https://www.amazon.com/Qunqi-CP2102-Module-Download-Converter/dp/B014PBYER4) - $6 (Any other CP2102 module should work. Other USB-TTL Adapters might work too.) Driver can be found [Here](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers). I like this module because it has LEDs when you are receiving or transmitting data
-   Single-Stranded/Solid-core insulated wire. I personally like [this](https://www.amazon.com/Elegoo-EL-CP-004-Multicolored-Breadboard-arduino/dp/B01EV70C78) because you can daisy-chain them together without needing to do any soldering.
-   USB Flash Drive
-   10mm socket wrench with extender/ratchet
-   [Putty](https://www.putty.org/) or [SecureCRT](https://www.vandyke.com/products/securecrt/)
-   [Mazda AIO Tweaks](http://dl.mazdatweaks.win)

## Preparation:

### USB Flash Drive:

#### MZD AIO Method:
1.  Format drive to FAT32
2.  Using MZD-AIO v2.7.9+: Run "Autorun & Recovery" with "Recovery Via Serial Connection" & "Install ID_7 Recovery Scripts Pack" options checked
3.  AIO will create the 'XX' Folder and neccessary files in "\_copy_to_usb" folder
4.  AIO will offer to copy files directly to the connected USB Drive

or

#### Manual Method:

1.  Format drive to FAT32
2.  Create folder called ‘XX’
3.  Add contents of [this archive](http://albuyeh.com/files/autorun.v3.zip) to folder ‘XX’
4.  If you want to have the car create its own Wifi Access Point, configure the `XX/00-start-wifiAP/wifiAP.config`file. Otherwise, delete the 00-start-wifiAP folder. If you are trying to remove Wifi AP after you have installed it, copy contents of <a href='https://dl.bintray.com/aio/aio/wifi-ap_uninstall.zip'>Wifi Uninstall Script</a> to flash drive and connect to CMU.

-   (Optional) Use AIO to also install some selected tweaks on the same USB flash drive to run after completed.

## Process:

### Accessing the CMU: ([Watch this video](https://youtu.be/zFKr4L414dM) to see how its done)

<iframe width="560" height="315" src="https://www.youtube.com/embed/zFKr4L414dM?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

#### [Another Great Video](https://youtu.be/DhbI25T3w3Q): 

<iframe width="560" height="315" src="https://www.youtube.com/embed/DhbI25T3w3Q?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

1.  Open glove box
2.  Pull the trim. You will need to use more force than you expect. The front fan area is attached to the trim and will come off as well.
3.  Disconnect the hazard light connector cable
4.  Use the 10mm socket wrench to remove the bolt
	-   ![The Bolt](/images/thebolt.jpg)
5.  The headunit will slide out towards you

### Wiring the CMU:

**Do not modify any of the below commands** If the commands do not work, then you have done something wrong (i.e. you're not logged in, or RX/TX wires are not properly wired) 

1.  You will need to have 3 wires connected to the CMU: Transmit (TX), Receive (RX), and Ground (GND)
2.  Here is a picture of the back of the CMU. We are going to be adding our cables to the ‘power&more’ connector. Here is a more detailed picture of where the RX and TX cables go.
    -   ![Back of the CMU](/images/cmu-back.jpg) ![Back of the CMU](/images/cmu-rx-tx.jpg)
3.  Be sure that the cable is going into the port. It must go in about an inch. The GND cable can go anywhere so long as it is touching the CMU. I recommend slightly unscrewing one of the Philips head screws and wedging the cable in there.
4.  Connect the other end of the wires to the CP2102 module in its corresponding port.

### Serial Console App:

-   Make sure you know what the paste command is for your Serial Console application. In Putty, you right click inside the terminal window and it will paste whatever command you had copied. For SecureCRT, you push Ctrl+Shift+V to paste. 
   
1.  Windows will auto-assign a COM Port to the CP2102 module once its plugged in. Go to Device Manager > Ports (COM & LPT) to see what the COM Port # is
	-   For SecureCRT, under Options > Connection > Serial, set Port = COM#, Baud = 115200, Data Bits = 8, Parity = None, Stop Bits = 1
	-   For Putty, you just need to select ‘Serial’ and then enter the COM Port # and set Baud to 115200
2.  You should start see text scroll by even if the car is off
3.  Plug in flash drive
4.  Turn the car to ACC mode by just pressing the On button without putting your foot on brake to fully turn car on
5.  Now you are really going to be seeing text fly by, **remember that the commands are working even though you cannot see what you are typing because of the text flying by.**
6.  Press Enter in terminal and CMU will respond with ‘login’. For the next several steps make sure you do not make any spelling mistakes. It is probably **best to copy and paste the commands** (to paste you just need to right click in the terminal window). 
    - **If text is flying by so fast it seems like you can't type you are doing everything correctly, copy and paste each command and press enter!  It will seem like your commands are not being sent to the Mazda but don’t worry they are** (_provided your wiring is right. If you got a module with LEDs you can check **TX is Transmit/RX is Receive**_)
7.  Reboot Mazda CMU by holding the Nav + Mute button for 10+ seconds.
8.  Input <span class="copy-msg"></span><span class="one-liner"><code><input type="text" id="usercopy" value="user" onclick="copyCode('#usercopy')" title="Click to Copy" readonly></code></span> and push Enter <span class="w3-btn" onclick="$('#usercopy').click()" style="font-size:8px">Copy</span>
9.  Input <span class="copy-msg"></span><span class="one-liner"><code><input type="text" id="jcicopy" value="jci" onclick="copyCode('#jcicopy')" title="Click to Copy" readonly></code></span> and push Enter <span class="w3-btn" onclick="$('#jcicopy').click()" style="font-size:8px">Copy</span>
10. Run <span class="copy-msg"></span>
	-   <pre><code><input type="text" id="code2copy" value="cp -r /tmp/mnt/sd*/XX/* /tmp/mnt/data_persist/dev/bin/; chmod +x /tmp/mnt/data_persist/dev/bin/autorun" readonly>
    </code> <button class="w3-btn" onclick="copyCode('#code2copy')">Copy</button> </pre>
11. (Optional) To test if the files have been moved to the folder, run <span class="copy-msg"></span>
	-   <pre><code><input type="text" id="code2copy2" value="ls -l /tmp/mnt/data_persist/dev/bin" readonly> </code> <button class="w3-btn" onclick="copyCode('#code2copy2')">Copy</button> </pre>
	-   The files/folders should be colored in green/blue since they are folders/executable. You may have to run this a few times to see the Serial Console output.
	-   ![Output](/images/ls-l_output.png "This is what the output should look like")

12. Remove flash drive, turn off car, insert flash drive that has AIO tweaks installed, turn car on back in ACC mode
13. After a few minutes, you should see a message that indicates the mods are being installed. This process may take approximately 2 - 20 minutes.

### Finishing Up

1.  Now that everything is installed you can put everything back together
2.  Remove the TX, RX, GND wires
3.  Slide CMU back in
4.  Attach bolt using 10mm socket wrench
5.  Connect hazard light connector cable to trim
6.  Push trim back in
7.  From here on out, you can just use a flashdrive to install tweaks

## You're Done!

##### If you have questions or need help visit [this thread](http://mazda3revolution.com/forums/2014-2017-mazda-3-skyactiv-audio-electronics/200450-aio-tweaks-firmware-ver-502-read.html) for more information.

If you love us so much you need to donate you can [Buy Albuyeh a Hot Chocolate](https://www.paypal.me/Albuyeh) and/or you can [Buy Trez Some Weed :D](https://www.paypal.me/Trevelopment).  Good Luck!
