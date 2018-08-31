---
layout: post
title:  "Background"
date:   2018-07-08 01:00:00 -0800
categories: casdk
ghlink:
---

#### AIO-Code:

<span class="copy-msg"></span><span class="one-liner"><code><input  style="width: 115px;" type="text" id="bgcode" value="Frontsky" onclick="copyCode('#bgcode')" title="Click to Copy" readonly></code></span> <span class="w3-btn" onclick="$('#bgcode').click()" style="font-size:8px">Copy</span>


Change your background on the fly.  The first background will reset to your default.

![Background](/images/casdk/background.png)

**Controls:**

- Up / Down / Left / Right / Rotate: Select Background
- Select: Choose Background

##### Adding your own backgrounds:
1. Choose a image that is 800x480
2. Go into the folder `casdk/apps/app.background/background` and put the image in that folder with the others
3. In that same folder open the file "list.js" and add the name of the file to the list in quotes and comma after like the other list entries.  You can add it anywhere in the list.
4. Last step is to make a smaller copy of the image size 225x135 with the same filename and add it to `casdk/apps/app.background/icons`