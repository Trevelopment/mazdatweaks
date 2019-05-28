---
layout: default
title: ID7 Recovery v2
permalink: /id7/
---

# **DO NOT UPDATE TO V70.00.335+ OR YOU WILL BE LOCKED OUT**

### If you want to install this go ahead, it is safe and works exactly like the old version but to keep access in v70.00.335+ follow the instructions below when updating.

[ID7 Recovery v2](http://trevelopment.win/id7_v2)

# **WARNING THIS IS HIGHLY EXPERIMENTAL AND IS PROVIDED FOR EDUCATIONAL PURPOSES ONLY**

## To regain access with v70.00.335+ you must make a [serial connection](/serial/#process) **before updating.**

#### **You will need: the "update.up" file, [ID7_Recovery_XX](http://trevelopment.win/xx)**, Computer connected via serial connection,  [Putty](https://www.putty.org/) or [SecureCRT](https://www.vandyke.com/products/securecrt/).
- Copy the "XX" folder onto the USB drive along with the update file.
- Make sure your serial connection and console are working properly and start the update with the console running.  Do not type anything while the update is running.
- When the update is finished the text will stop completely.  After the update is complete, copy & paste this command: <span class="copy-msg"></span>
	-   <pre><code><input type="text" id="code2copy" value="cp -r /mnt/sd*/XX/* /mnt/data_persist/dev/bin/; chmod +x /mnt/data_persist/dev/bin/autorun; /mnt/data_persist/dev/bin/autorun" readonly>
    </code> <button class="w3-btn" onclick="copyCode('#code2copy')">Copy</button> </pre>
- Wait about 1 minute and Reboot the system, keep serial console running
- Press Enter, type: **`cmu`**, Press Enter, type: **`jci`**, Press Enter.
- Copy & paste: <span class="copy-msg"></span><span class="one-liner"><code><input type="text" id="codecopy" style="width:450px" value="/mnt/data_persist/dev/bin/autorun && sleep 60 && reboot" onclick="copyCode('#codecopy')" title="Click to Copy" readonly></code></span><span class="w3-btn" onclick="$('#codecopy').click()" style="font-size:8px">Copy</span>  and Press Enter
- Make a tweaks installer with AIO and test.  If it works then you are done with the serial connection and can [clean up](/serial/#finishing-up)
- If it does not work, keep the serial console open and run `ls -R /mnt/data_persist/dev/bin`, copy the output and email it to me @ <a href="mailto:trez@mazdatweaks.com?Subject=ID7_V2%20Recovery" class="dl-link" target="_top">Trez@mazdatweaks.com</a>
