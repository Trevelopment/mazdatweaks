---
layout: default
title: ID7 Recovery v2
permalink: /id7/
---
# **WARNING UPDATING TO V70.00.335+ REQUIRES A [SERIAL CONNECTION](/serial/#process) DURING THE UPDATE TO MAINTAIN ROOT ACCESS**

#### **You will need: the "update.up" file, [ID7_Recovery_XX](http://trevelopment.win/xx)**, Computer connected via serial connection,  [Putty](https://www.putty.org/) or [SecureCRT](https://www.vandyke.com/products/securecrt/).
- Copy the "XX" folder onto the USB drive along with the update file.
- Make sure your serial console is working properly and start the update. You can leave the console running during the update.
- When the update is finished the text will stop completely.  After the update is complete, copy & paste this command: <span class="copy-msg"></span>
	-   <pre><code><input type="text" id="code2copy" value="cp -r /mnt/sd*/XX/* /mnt/data_persist/dev/bin/; chmod +x /mnt/data_persist/dev/bin/autorun; /mnt/data_persist/dev/bin/autorun" readonly>
    </code> <button class="w3-btn" onclick="copyCode('#code2copy')">Copy</button> </pre>
- Don't worry about the error messages and after a minute turn ACC off and on again. (Optinal: keep serial console running in case something went wrong)
- Make a tweaks installer with AIO and test.  If it works then you are done with the serial connection and can [clean up](/serial/#finishing-up)
- If it does not work, keep the serial console open and try to login with **cmu/jci** and run `sh /mnt/data_persist/dev/bin/autorun`.  

<video alt="FSF 30 video" style="width: 100%;" controls="controls" poster="//static.fsf.org/nosvn/FSF30-video/fsf30-poster.png" crossorigin="anonymous">
    <source src="//static.fsf.org/nosvn/FSF30-video/FSF_30_720p.webm" type="video/webm"></video>