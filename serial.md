---
layout: default
title: Serial Connection
permalink: /serial/
---

# **CMU Serial Access**

**In FW v59.00.502 and higher the CMU is locked down and users cannot access to their own systems and can no longer install tweaks.**  Currently the only way to circumvent this is to make a serial connection and follow these instructions very carefully.  

### __*A huge Thank You to [Albuyeh](http://www.albuyeh.com/) for writing these detailed instructions.*__

## Parts/Equipment Needed:
- [USB to TTL Serial Adapter](https://www.amazon.com/gp/product/B06Y3V9BPL) - $14 (We will be using the CP2102 module) Driver can be found [Here](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers). I like this module because it has LEDs when you are receiving or transmitting data
- Single-Stranded/Solid-core insulated wire. I personally like [this](https://www.amazon.com/Elegoo-EL-CP-004-Multicolored-Breadboard-arduino/dp/B01EV70C78) because you can daisy-chain them together without needing to do any soldering.
- USB Flash Drive
- 10mm socket wrench with extender/ratchet
- [Putty](https://www.putty.org/) or [SecureCRT](https://www.vandyke.com/products/securecrt/)
- [Mazda AIO Tweaks](https://madatweaks.com)

## Preparation:

1. USB Flash Drive
- Format drive to FAT32
- Create folder called ‘XX’
- Add contents of [this archive](http://albuyeh.com/files/autorun.v3.zip) to folder ‘XX’
- Use AIO app to also install selected tweaks on the same flash drive.

## Process:

##### Accessing the CMU ([Watch this video](https://youtu.be/zFKr4L414dM) to see how its done)

<iframe width="560" height="315" src="https://www.youtube.com/embed/zFKr4L414dM?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>


1. Open glove box
- Pull the trim. You will need to use more force than you expect. The front fan area is attached to the trim and will come off as well.
- Disconnect the hazard light connector cable
- Use the 10mm socket wrench to remove the bolt ![The Bolt](/images/thebolt.jpg)
- The headunit will slide out towards you

#### Wiring the CMU
1. You will need to have 3 wires connected to the CMU: Transmit (TX), Receive (RX), and Ground (GND)
- Here is a picture of the back of the CMU. We are going to be adding our cables to the ‘power&more’ connector. Here is a more detailed picture of where the RX and TX cables go.
![Back of the CMU](/images/cmu-back.jpg) ![Back of the CMU](/images/cmu-rx-tx.jpg) 
- Be sure that the cable is going into the port. It must go in about an inch. The GND cable can go anywhere so long as it is touching the CMU. I recommend slightly unscrewing one of the Philips head screws and wedging the cable in there.
- Connect the other end of the wires to the CP2102 module in its corresponding port.

#### Serial Console App
1. Windows will auto-assign a COM Port to the CP2102 module once its plugged in. Go to Device Manager > Ports (COM & LPT) to see what the COM Port # is
-For SecureCRT, under Options > Connection > Serial, set Port = COM#, Baud = 115200, Data Bits = 8, Parity = None, Stop Bits = 1
-For Putty, you just need to select ‘Serial’ and then enter the COM Port # and set Baud to 115200
- You should start see text scroll by even if the car is off
- Plug in flash drive
- Turn the car to ACC mode by just pressing the On button without putting your foot on brake to fully turn car on
- Now you are really going to be seeing text fly by.
- Press Enter in terminal and CMU will respond with ‘login’. For the next several steps make sure you do not make any spelling mistakes. It is probably best to copy and paste the commands (to paste you just need to right click in the terminal window). It will seem like your commands are not being sent to the Mazda but don’t worry they are (provided your wiring is right)
- Input `user` and push Enter
- Input `jci` and push Enter
- (Optional) Test if serial commands work by running `reboot`.
- Run `cp -r /tmp/mnt/sd*/XX/* /tmp/mnt/data_persist/dev/bin/`
- Run `chmod +x /tmp/mnt/data_persist/dev/bin/autorun`
- (Optional) To test if the files have been moved to the folder, run `ls /tmp/mnt/data_persist/dev/bin`. The files/folders should be colored in green/blue since they are folders/executable. You may have to run this a few times to see the Serial Console output.
- Remove flash drive, turn off car, insert flash drive that has AIO tweaks installed, turn car on back in ACC mode
- After a few minutes, you should see a screen like this to indicate the mods are being installed. This process may take a bit of time. I would recommend doing a JCI Backup first (option under AIO Tweaks App) just in case you mess something up.

#### Finishing Up
1. Now that everything is installed you can put everything back together
- Remove the TX, RX, GND wires
- Slide CMU back in
- Attach bolt using 10mm socket wrench
- Connect hazard light connector cable to trim
- Push trim back in
- You're Done!

##### If you have questions or need help visit [this thread](http://mazda3revolution.com/forums/2014-2017-mazda-3-skyactiv-audio-electronics/200450-aio-tweaks-firmware-ver-502-read.html) for more information.

If you love us so much you need to donate you can [Buy Albuyeh a Hot Chocolate](https://www.paypal.me/Albuyeh) and/or you can [Buy Trez Some Weed :D](https://www.paypal.me/Trevelopment).  Good Luck!
 <style>
 .main-content img{
 max-width:49.899%;
 }
 </style>