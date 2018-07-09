---
layout: default
permalink: /casdk/
category: casdk
---

<header id="header" style="" class="w3-center w3-header">
  <h1 id="mzd-title" class="mazda"> MZD-AIO+CASDK</h1>
</header>
<h5>CASDK Written By: Flyandi  <span class="icon icon-github"></span> [Github](https://github.com/flyandi/mazda-custom-application-sdk) | [casdk npm package](https://www.npmjs.com/package/casdk)</h5>

<h5>Integration Into AIO By: Trezdog44 <span class="icon icon-github"></span> [Github](https://github.com/Trevelopment/MZD-AIO)</h5>
<div class="w3-container">
<div class="w3-center">
<h2>CASDK</h2>Is a very exciting addition to AIO and opens the door to many possibilities. Developers can use the npm package "casdk" to create a ready-to-go app template in seconds. Using JavaScript and CSS, developers can easily build amazing apps on
the CASDK framework.
</div>

<div class="blog-text w3-container">
<p>The Custom Application SDK for Mazda Infotainment System is a micro framework that allows you to write and deploy custom applications which integrate natively into the existing JCI framework without hassle. This version of CASDK is integrated with AIO
to create a unique framework with endless app possibilities.</p>


<div class="w3-container">
<h5>CASDK comes with:</h5>
- **CASDK Proxy** - Proxy registers both CASDK and AIO apps and replaces "additionalApps.js".
- **Custom Application Runtime** - A microframework that handles the custom applications during runtime. 
- **Data Readers** - Poll vehicle data an certain intervals (1s, 60s, & 300s) 
- **JS logging** - JavaScript (and CSS) console log is written to /tmp/root/casdk-error.log 
- **LocalStorage** - Moves the save location of localStorage to /tmp/mnt/data_persist/storage/ 
- **NodeJS** - Powerful Server-side JavaScript.
- **ADB** - Android Debug Bridge for Android devices.
- **Custom Applications** - Apps that run on the CASDK framework
- **With AIO + CASDK The Framework and Apps are installed internally to the `/resources/` partition by default, optionally CASDK apps can be run from an SD Card.**
 Native apps such as those installed with AIO will run on the CASDK framework although apps are installed differently with CASDK. The AIO Tweak installer will detect if CASDK is installed when running tweaks and adjust the installation accordingly but
older app installers will not work while CASDK is installed.

<div class="w3-panel">The CASDK framework was originally designed to be run entirely from an SD card. With AIO the framework and apps are installed onto system disk so that apps will be able to run without an SD Card connected. CASDK apps can still be run from an SD card by
  selecting the option below. If the SD card is connected during installation, AIO will offer to install the apps directly to the SD card. Apps can also be installed by copying the app folder to "/apps" on the root of the SD Card. Also, the name of the
  app folder needs to be added to "/apps/apps.js." Using this method any CASDK app can be used even one you have developed yourself!

### AIO Codes for CASDK Apps:

<p>Eventually all the codes will be here so that you can pick CASDK apps are available in AIO.</p>
  
{% for post in site.categories[page.category]  %}
<article><h1><a href="{{ post.url }}">{{ post.title }}</a></h1>
  <div class="post-content">{{ post.content }}</div></article>
{% endfor %}
