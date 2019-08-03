---
layout: page
permalink: /changelog/
order: 2
---

## AIO Changelog:
[Changelog for Version 2.0+](/changelog2)
### V1.50 - 2016-07-22
_**CHANGES/NEWS:**_


- Tried to integrate an automatic update function (hope it works on every Windows version out there)

  * i use aria2 ( //aria2.github.io ) for that, so if your firewall complains aria2c.exe, you have to allow it

  * how does this work: file 'AIO_update.txt' will be downloaded from google drive, evaluated and if there is an update, a zip file with changes will be downlaoded and unzipped automatically

  * i hope, this will work for version 1.51 ...

- After select 'individual background image' you now can choose from one of 80 images in choose \more_background-images folder

  * simply double-click on the file-name of the image and it will be used, if you just close the window, the original background will be used

  * if you want to use your own background images, just copy into the folder choose\more_background-images

  * unfortunately I can't show thumbnails of the images, so an explorer window showing the thumbnails for folder 'more_background-images' will be opened automatically

- Added color-themes for AIO: set colortheme=1 (old theme) or 2 or 3 (actually set) in line 18 of choose.cmd or change to values by yourself

- Seperated changelogs (now CHANGELOG.txt) from AIO_README (now README.txt), *.md files will be renamed to *.txt at first start of AIO

- Language popup window will now be shown only at first start of AIO (and after an update)

- Background Rotator should work now

  * try this to make your own backgrounds very easy: http://old.photojoiner.net/

- Added new FW 58.00.250A- NA (from new CX-9) for all tweaks (thanks to houset from mazda3revolution.com for the necessary files)

  * modified installer/uninstaller for speedcam-patch (thanks to Modfreakz), pause_on_mute, no_more_disclaimer, list_loop and order_of_audio_source_list, all other files are the same

- Update to speedometer 4.4:

  * added language French (thanks to drean179 and Regg001 from mazda3revolution.com)

  * optional show the vehicle speed instead of the gps speed in the small speedometer (thanks to vic_bam85)

  * added numeric output of top engine speed in right table

  * changed statusbar speedometer toggling of gps altitude/direction only active if full size app is closed

- Updated all tools by Modfreakz in folder choose\tools\JCI_NNG_Tool

- Added Croatian for safety-warning-reverse-camera

- Fixed speedcam-patch installer for 56.00.100A-ADR, 56.00.230A-ADR and 56.00.401A-JP, data.zip wasn't modified correctly, jci-linux_imx6_volans-release wasn't copied correctly

- Fixed speedcam-patch uninstaller for 56.00.513C-ADR, I hope the NAV app will start again after uninstalling, please report back

- Added 58.00.250A-AN for speedcam-patch (thanks to GrilloA from mazda3revolution.com for the files), please report, if it works

- Position of AIO window corrected for two monitor systems, should now be just left of center.

- Added speedcam.txt for Turkey (thanks to volcano2K from mazda3revolution.com)

- Update for Turkish language (thanks to volcano2K from mazda3revolution.com)

- Update 2.5 for videoplayer from vic_bam85. Look into the README at 'List of tweaks' - 'Video player v2' - 'Changes by vic_bam85'
- Fixed installer for 'change order of the audio source list', wrong marker was set, so disclaimer was removed too.

---

### V1.49 - 2016-07-02
_**CHANGES/NEWS:**_

- Bug for app uninstaller found (AA, speedo, video): problem, if more than one app entry of same app is available (due to bug in old installer), now all entrys should be deleted.

- Modified installer for speedometer, AA and videoplayer. The app menu entries will now be added hopefully, if installed with many other tweaks together too.

- Fixed installer for swap file. Entries in stage_wify.sh should now be correct. Please uninstall / install again to correct the entries.

- Added "Background Rotator" tweak that makes a small change to common.css to rotate through 10 different backgrounds (thanks to TREZDOG44):

  * By changing config/BackgroundRotator/background.png rotate through 10 backgrounds, 1 per minute. (10 backgrounds in a row total: 8000px X 480px)

  * Rate of change can be changed by editing the value of "animation" (Line:25) in config/BackgroundRotator/common.css

  * Enter the total time, each background will show for [total time / 10] (Example: 600s/10 Backgrounds = 60 seconds per background)

- Update to speedometer 4.3:

  * Fixed statusbar speedo overlapping with message icon if 4 icons are visible (BT,WIFI,BATTERY,MESSAGE)

  * Added percentage display of both idle times

  * Added semi transparent background for value table

  * Removed speedometer background image (you'll see your own background)

- Modified installer for speedcam- patch:

  * Added again ready patched data.zip files for FW versions 56.00.513B- EU and 55.00.760A- NA, because data.zip and jci- linux_imx6_volans- release.org must match

  * data.zip will only be patched directly for FW versions 56.00.100A- ADR, 56.00.230A- ADR and 56.00.401A- JP

- Added additional popup window before installation begins if previously unknown or yet untested FW version is detected

- Fixed bug for bigger- album- art uninstaller (thanks to SvePar)

- Fixed uninstaller for FuelConsumptionTweak, I hope there is no crash anymore, if opening FuelConsumption page3 (thanks to lory323)

  * It seems, that during installation sometimes the backup files (.org) were copied with 0 byte. Now I check for filesize too before renaming back *.org files.

  * Added this to some other uninstallers too.

- Second versions of FuelConsumptionTweak: new with MPG (miles per gallon):

  * You have to rename \choose\config_all\FuelConsumptionTweak\jci\gui\apps\ecoenergy\controls\FuelConsumption\js\FuelConsumptionCtrl.MPG.js to FuelConsumptionCtrl.js

- I started to put together a FAQ. Look at AIO_FAQ.txt (suggestions for content are welcome)

- Many code optimizations and cleaning (not visible for you), i.e. outsourced most of the help text files in one file

- Enabled WIFI for NA FW versions again, I think it was/is not the problem of bricked CMUs after doing a factory reset (still think it must be AA).

- INFO: AA not working anymore with newest google play services V9.2.56, if you have a fully up to date phone, it probably won't let you use AA.

  * Use 9.0.83 instead: http://www.apkmirror.com/apk/google-inc/google-play-services/google-play-services-9-0-83-release/

  * Or: enable developer option by going to Setting/About Phone/Build number (tap 7 times) and now you're a developer.

  * You will have to downgrade your google play services, simply go to Setting/App, and then look for Google Play Services and then select Uninstall for all users on the top right corner (there should be a setting indicator with 3 dots on it).

  * It seems, that this only works with rooted phones.

---

### V1.48 - 2016-06-16
_**CHANGES/NEWS:**_

- IT SEEMS, THAT DOING A FACTORY RESET AFTER INSTALLING AA LEADS THE SYSTEM TO STAY AT MAZDA BOOT LOGO!!!
  SO AVOID A FACTORY RESET OR UNINSTALL ALL TWEAKS, AT LEAST AA BEFORE THAT (STILL NOT SURE IF THAT IS SUFFICIENT)

- Update of "Android Auto" Headunit App to V0.92B (2016- 06- 13), but temporarily not visible for installation mode, because of serious factory reset problems.

  * You can still choose AA with "r", but an installation is currently not recommended!

  * By pressing '8' (select most of the tweaks), Android Auto is first also no longer selected

  * Added popup message with warning text after choosing AA if you do so nevertheless

  * Deactivated enabling of WIFI for US FW versions in this context for safety too.

  * This is done since version 1.47 and could also be the reason for the problems after doing a factory reset (but I don't think so).

- Because of the problems after doing a factory reset (stays at Mazda logo) I changed the installer for SSH_bringback again, will now be installed for all .51x FW versions (now for "ADR" versions too)

- Small update for speedometer 4.2 (problems with new trip distance to 20 meter accuracy, only worked for first 10 km)

- Changed uninstaller for all tweaks, so that no confirmation is needed anymore and reboot will done automatically at the end

- Removed umount / mount for 56.00.51x FW versions during installation of speedometer, since it was not working anyway
  Try this to get GPS data for these FW versions too:

  * After opening the doors (or trunk) at least wait 35 seconds, then start the engines (thanks @drletai for this hint)

  * Unplug and replug the NAV SD card

  * Before starting the speedometer app, shortly start the NAVI app before (works too, if NAVI app was open if engine was stopped)

- Small update of Frensh translation by user salegosse from mazda3revolution board

- Fixed small bug for bigger album art tweak (installer and uninstaller)

- Bug for speedcam- patch installer fixed, speedcam.txt was not copied to SD card (only faulty for V1.47)

- Modified installer/uninstaller for speedometer, speedcam- patch, videoplayer, swap file and some other tweaks, I don't know anymore.

  * I hope installation of speedcam- patch works now always right the first time

  * I hope tweaks that appear in app menu will now always entered correctly in every combination of installation / uninstallation

- Added more log information to root of USB drive (AIO_log.txt and some files). If you have problems, I need them.

_**TODO**_:

- Waiting for speedcam- patch for 56.00.511A/512A- ADR (56.00.230A/240B/513C- ADR is already there)

- Waiting for media order patch / FLAC support for 56.00.401- JP, 56.00.230A/511A/512A (56.00.240B/513C- ADR is already there)

- Want some more translations? Look at \choose\lang\How_to_translate.txt if you want to help.

---

### V1.47 - 2016-06-02
_**CHANGES/NEWS:**_

- Add Spanish/Mexican translation thanks to user epadillac from mazda3revolution board (thank you very much!)

- Add Slovak translation thanks to user sedrik7 from mazda3revolution board (thank you very much!)

- Add Turkish translation thanks to user volcano2k and mozsert from mazda3revolution board (thank you very much!)

- Add Frensh translation thanks to user salegosse from mazda3revolution board (thank you very much!)

- Update to Speedometer 4.2

  * added Slovak and Turkish language

  * added tachometer for engine speed

  * added second idle time if engine is running but car has no speed (opposite to iStop time)

  * changed trip distance to 20 meter accuracy (0.02 km)

  * added 'Speedometer_readme.txt' to root folder of AIO. Please read, if you have problems / questions wir speedometer, before asking!

- Fixed tweak for enabling WIFI for NA FW versions, should work now.

- Update of "Android Auto" Headunit App to V0.91b

- Fixed uninstaller for swap file. Too many entries have been deleted from stage_wifi.sh.

- Made some small changes to installer/uninstaller of speedo, AA and video player

- Small update of video player by vic_bam85

- Fixed language detection, should work now

- Fixed version detection for some tweaks (pause_on_mute, media order patch, speedcam- patch), because there are FW versions out there with same numbering:

  * e.g. 56.00.230A- EU and 56.00.230A- ADR, etc.

- Changed installer for speedcam- patch

  * data.zip will now be modified directly, deleted original files too, because they are available als data.zip.org on MZD system - could save 185 MB of space!

  * Additional md5 check in order to prevent the problem of sometimes not working speedcam- patch after first installation (I hope it works)

  * FW 56.00.230A/240B/513C- ADR is now supported too (thanks @modfreakz for updating JCI_NNG_Tool_CMD tool)

- Changed installer for SSH_bringback (version detection), will only be installed for .511A/512A/513B- EU versions, not .51xA- ADR (not shure, if it's compatible)

  * If someone with 56.00.51xA/513C- ADR version can confirm, that SSH_bringback worked with ADR version too, I will change that again.

---

### V1.46 - 2016-05-05
_**BUGFIXES:**_

- Again small bugfix for SSH installer, 56.00.512 was not detected correctly (thanks to pongo)

- Fixed bug for media order patch and FLAC Support installer, was not installed for 56.00.51x (thanks to KERNEL59)

- Problem with installing red scheme fixed (thanks to petom0)

- Modified installation code for tweaks which appear in app menu, installation/uninstallation should work now (only one app could be installed)

_**CHANGES/NEWS:**_

- Speedcam- patch will be installed now for 56.00.401- JP too (thanks @modfreakz for updating JCI_NNG Tool)

- Pause_on_mute will be installed now for 56.00.401- JP too

- New version of videoplayer (2.4) by vic_bam85

---

### V1.45b - 2016-05-02
_**BUGFIXES:**_

- Small bugfix for speedometer installer because of problems with detecting utf- 8 chars (thanks to Ghs)

- Bug for speedcam- patch installer for FW 56.00.513 fixed, speedcam.txt wasn't copied to SD card (Sorry!)

- Bug with SSH installer fixed, was not installed for 56.00.513 (thanks to derlehmann)

---

### V1.45 - 2016-04-30
_**BUGFIXES:**_

- Help window was allways fixed in front (if readme was opened, it was allways fixed behind help window). Changed that.

- Text for 'no background behind buttons' tweak wasn't translated to other languages (was only german)

- Speedcam.txt will no longer be copied to NAV SD card, if no compatible FW is detected (NAV App could not be started after that)

_**CHANGES/NEWS:**_

- Modified version of 'bigger album art tweak' by epadillac added (moved picture some pixels to the left)

- Add Polish translation thanks to user sauron2003 from mazda3revolution board (thank you very much!)

- Seperated speedometer and videoplayer (videoplayer now selectable with "4"):

  * Now all 3 tweaks that are available in app menu (speedometer, videoplayer and Android Auto) can be installed / deinstalled individually

- Updated Video player v2 with changes from vic_bam85 (thanks for that)

  * Now can play mp4, avi, wmv, flv

- New version of speedometer 4.1 (now spanish and polish (new) is selectable)

  * Changed umount / mount times for 56.00.511/512/513 (now 55 / 25 sec.), please test, if speedometer works now with this FW versions

- Media- order / FLAC support will be installed now for 56.00.513B- EU and 55.00.760A- NA too

- Pause_on_mute will be installed now for 56.00.513B- EU and 55.00.760A- NA too

- SSH_bringback will be installed now for 56.00.513B- EU too (should work, but could not be tested!)

- Speedcam- patch will be installed now for 56.00.513B- EU and 55.00.760A- NA too (thanks @modfreakz for updating JCI_NNG Tool)

- For speedcam- patch now only newest version from 56.00.513B- EU will be used for 56.00.230A/511A/512A- EU too and from 55.00.760A- NA for 55.00.753A- NA too.

  * I tested this with .230, and files from .513 are working too, I hope this is the same with NA FW. So users with older FW versions can benefit from newest NAV App changes.

- Added blue color scheme for NAV App (thanks to JinZ, who gave us nng content from his Toyota Scion iA)

  * Will be automatically installed/uninstalled, if blue color scheme and/or speedcam- patch is or will be installed/uninstalled.

  * Look here:

  * http://mazda3revolution.com/forums/2014-2016-mazda-3-skyactiv-audio-electronics/122458-aio-all-one-tweaks-55.html#post1696530

  * http://mazda3revolution.com/forums/2014-2016-mazda-3-skyactiv-audio-electronics/122458-aio-all-one-tweaks-56.html#post1697626

- Modified 'blank- album- art- frame tweak', now with picture of a radio, if no album art is found (thanks to craigh for this hint)

  * This works not for DAB (Digital Audio Broadcasting) mode, only for FM mode and for USB mode if there is no cover within MP3 tag

- Added SafetyText_UK_English for removing the safety warning label from the reverse camera

- Added new tweak FuelConsumptionTweak (add fuel efficiency unit KM/L), selectable with "5" (by edyvsr from mazdateammexico.com)

  * Therefore changed 'ready to copy' from '5' to '0' (only '6' left ...)

- Combined 'bigger album art tweak' with mods from 'blank- album- art- frame', otherwise there's a black frame inside the bigger album art cover (thanks to cynric for this hint)

  * You can still install 'blank- album- art- frame' individually, but if you uninstall it, if 'bigger album art tweak' is still installed, the black frame will return. In this case, install 'bigger album art tweak' again.

---

### V1.44 - 2016-04-13
_**BUGFIXES:**_

- Fixed uninstaller for custom color schemes. Color of speedometer was not change to red too

- Problem with manual switching language fixed

- Problem with rare non- functional USB ports seems to have been due to faulty files of libmc_user.so while installing/uninstalling media order /FLAC support patch

  * Therefore rewrote installer/uninstaller with additional md5 check in order to prevent the problem for the future (hopefully). Apologies to all who had unfortunately made it! :(

- Problem with main_menu_loop installer fixed, had deleted the MainMenuCtrl.js file by mistake (thanks to jdurrego).

_**CHANGES/NEWS:**_

- New Speedometer 4.0, now available in app menu! (thank you Diginix)

  * Speedometer and Videoplayer will be installed only together, no more selection atm

  * Automatic umount / mount for NAV SD card if FW .511 / .512 is installed, but it seems not to be working

- Update of "Android Auto" Headunit App to V0.83

- New scheme 'carOS' by epadillac (thank you)

- Red color scheme (original) is now available in installation mode too

- Bigger album art tweak by epadillac (thank you)

- No buttons background graphics tweak by epadillac (thank you)

- Enable Wifi for NA FW- versions

- Since I am running again out of letters: changed 'ready to copy' from 'Z' to '5'

  * No more letters left - no more new tweaks! :(

---

### V1.43 - 2016-03-24
_**BUGFIXES:**_

- Problem with installation of SSH_bringback for 56.00.512A- EU fixed

- Order of installation of background image changed, so that an own image not will be overwritten again, if installed together with custom infotainment color tweak

- Fixed uninstaller for Android Auto: an importand file was deleted too (/usr/lib/gstreamer- 0.10/libgstalsa.so), so playing files from USB drive wasn't working anymore.

- Fixed speedcam- patch installer, FW 55.00.753 was not recognized, so this tweak was not installed.

- Fixed media- order/FLAC support tweak installer, FW 55.00.753 was not recognized, so this tweak not installed.

- Fixed pause_on_mute installer, FW 55.00.753 was not recognized, so this tweak was not installed.

_**CHANGES/NEWS:**_

- Could save some space, because patch of file 'jci- linux_imx6_volans- release' for speedcam- patch is now done directly with JCI_NNG_Tool tool (thankz to Modfreakz for that!)

- You can now choose, if you want to copy a speedcam.txt file during installation of speedcam- patch, or not.

  * this could be useful, if you only want to update the speedcam- patch, but not change your existing speedcam.txt, or want to copy your own one.

- Now CID of SD card is read automatically and stored to root of USB drive and SD- card as 'SD_CID.txt' if SD card is present (thanks to Modfreakz for this).

- Update of "Android Auto" Headunit App to V0.81

_**TODO**_:

- Sill waiting for speedometer and media player v2 to be in native app menu (I don't give up ;) )

---

### V1.42 - 2016-03-20  *  again, a lot! :)
_**BUGFIXES:**_

- Problem with installation of blank- album- art- frame finally fixed now (thanks to Falko). The graphic files were overwritten again by installation of custom color schemes.

- If custom color scheme and background image both were selected, the background image was overwritten from the one from color scheme. This is now corrected. (thanks to Intruder)

_**CHANGES/NEWS:**_

- New Speedomter V 3.7 with media player v2 (if used with small speedo date_to_statusbar mod V2.2 will be selected automatically too!)

  * Only for 56.00.100 ADR, 56.00.230A EU and 55.00.753A NA, with 56.00.511A/512A EU there are no GPS data anymore! :(

- New date_to_statusbar mod v2.2 with numeric date, increase icon size (Wifi, Bluetooth...), disabled red border of system messages and smaller font size for all statusbar texts

  * You can choose from v1.0, v2.1 and new v2.2

- Update of "Android Auto" Headunit App to V0.7

- New tweak to remove message reply text "Sent from my Mazda Quick Text System" for all languages.

- Media- order / FLAC support now for 56.00.100 ADR and 56.00.753 NA (same files as .230) and 56.00.511/.512 EU (same files) available too (thanks to diorcety for patching)

- Pause_on_mute will be installed now for 56.00.100 ADR and 55.00.753 NA (same files as .230) and 56.00.511/.512 EU (same files) too.

- Speedcam- patch will be installed now for 56.00.100 ADR and 55.00.753 NA (same files as .230) and 56.00.511/.512 EU (same files) too (thanks Diginix for patching all new files)

- Make swapfile on USB drive for media player v2. You have to do this on your USB drive that contains music and/or movies which remains in car!

- New version of castscreen- receiver 2016- 03- 08

- Added "peep" when copying of selected tweaks is finished and if copying to USB drive is finished.

- Now Screenshots are available for a few tweaks, open help menu (press '9') and click on "open screenshot" below the tweak text in help menu window.

- JCI test console (diagnostic menu) can now be installed/removed as individual tweak (was done automatically with AIO 1.41)

- By pressing '8', the most tweaks will be selected for installation mode, for deinstallation mode all, except backup and swapfile.

  * Remember: by pressing '1' or '2' to switch to installation / deinstallation mode, all the markers are cleared and you can start over.

- New tweak for disable/enable the boot animation to red button menu

- Since I run out of letters: changed help from 'X' to '9' and switching language from 'Y' to '7'

---

### V1.41 - 2016-02-27
_**BUGFIXES:**_

- Found bug if switching (back) to installation mode by pressing "1", some variables were not set, so no config folder was created. Sorry!

- It seems, that the mount point for USB drives isn't allways for example /mnt/sda1/, but /mnt/sda/ only too. So changed dataRetrieval_config.txt to /mnt/sd*/.

_**CHANGES:**_

- Installation now also possible with 56.00.511 with automatic detection during installation, right version for speedcam- patch and pause_on_mute is used.

- Date_to_statusbar mod now with selectable older version v1.0 and new v2.1

_**NEWS:**_

- Added SSH_bringback for 56.00.511, but will be only installed, if .511 is detected and not already installed. No Deinstaller available!

- Speecam- patch now for 56.00.511 too (only .230 and .511, will be detected automatically during installation)

- Pause_on_mute now for 56.00.511 too (only .230 and .511, will be detected automatically during installation)

- FLAC support (together with media order patch)

- "Android Auto" Headunit App V0.3 (successfully tested with my own LG G4 and Samsung S4)

- JCI test console (diagnostic menu) can now be opened by pressing the clock in the upper right corner of display settings menu for one second (tweak from mzd3- k (Sumire Racing))

---

### V1.40 - 2016-02-20  *  It has taken some time, but there has done a lot, so jump from 1.36 to 1.40 ;)

_**BUGFIXES:**_

- Repaired incorrect 'speedcam_Deutschland_ohneMobileBlitzer.txt' (used semicolon as delimiter instead of a comma), so it could not be imported

- Fixed problem with speedcam uninstaller: speedcam.txt and speedcam.spdb were not automatically deleted from NAV SD card.

  * maybe the reason, why NAV App could not be started after removing tweak, speedcam.txt and speedcam.spdb may no longer be present without the patch.

_**CHANGES:**_

- New installation routine for "no- more- disclaimer" and "change order of the audio source list".
  Everything can now be installed seperately without even removing the other tweak.

  * this though works only if both were installed once each with the new AIO V1.37 and higher (a file marker for detection of installation is set)!

- New installation routine for custom- infotainment- colors and speedometer. Both can now be installed individually, but the color is adjusted anyway:

  * If speedometer was already installed, then color will adjusted anyway, if custom- infotainment- colors will be installed without speedometer again.

  * If custom- infotainment- colors was already installed (with >= 1.37), then color of speedometer will adjusted anyway, if speedometer will be installed without custom- infotainment- colors.

  * this though works only if the installation of custom- infotainment- colors is done with AIO V1.37 and higher (a file marker for detection of installation will set)!

- New installation routine for "list_loop_mod", can now be installed with or without additional shorter_delay_mod (which generates frequent beeps!)

- Each speed in all speedcam files increased by 5 kmh (you should be annoyed less now)

- Changed the language detection a little. I hope it works now. If not, send me first and possibly second line of Window (i.e. Detected CountryCode is xx, which is unknown).

- Every command is logged to AIO_log.txt for troubleshooting (look at root of USB drive after applying / removing of tweaks).

- In the beginning it is tested whether mount point of USB drive really works (try to copy a file from MZD to USB drive). If not, system will reboot automatically.

- Popup window of detected MZD version before start of installation / removing, with the possibility to still manually cancel at this point (you have to press "OK" to start).

- Every selected tweak generates a popup window on MZD System now during installing / removing, so you know exactly at what point it is and how long it takes.
- To get AIO working in simulation, the language folder "01" for english is renamed to "1" and code in choose.cmd was adjusted accordingly, so it should work now.

_**NEWS:**_

- New Speedometer 3.6 with permanent speed + direction in the status bar

  * Support for 'no nav SD' is missing in V3.6, the compass fix needs some changes to fits to 3.6 code, so it's coming again for V4.0

- Added 8 more images for removing the safety warning label from the reverse camera (french, czech, danish, italian, spanish, dutch, polish, russian)

- Translation for Spanish created (with google translator, so sorry to the native Spanish speaking people!) for testing the new manual language switching.

- Added help- system (press 'x' to open), only german and english at this time. Text suggestions welcome! :)

- AND FINALLY: rewrote choose.cmd from scratch. No more interview (but also no more funny answers),

  * only one page to select all tweaks for installation and deinstallation and manual switching the language (if you want and if already translated).
  * Please only start locally, is very slow from a network connection!

_**TODO**_:

- "Android Auto" Headunit App installer get to running

- Waiting for Speedometer 4.0 with integration in native app menu (hopefully coming soon, thanks to Herko- ter- Horst!).
- Prepare for additional installation with 56.00.511A (adjustments necessary only for speecam- patch, media- order_patching and pause_on_mute), perhaps then with automatic detection during installation.

---

### V1.36 - 2016-02-07

- Added additional popup window at beginning of installation / deinstallation
- Added automatic reboot at end of scripts (you are asked for it)
- Problem with position 3 "Installer with full backup" fixed - code for full backup was not copied to tweaks.sh - sorry!
- Changed text colors to something slightly lighter for better reading
- Added some more new background images to \choose\more_background- images (thanks to grandiotk!)
- Added new tweak "castscreen- receiver" (thanks to trookam for USB script!)
- Forgot CountryCode "43" for Austria

---

### V1.35 - 2016-02-05

- "- a" added to most copy commands, seems to be importand if overwriting files (file rights are maintained)
- Color of speedometer graphics will be changed to red again too, if color scheme uninstaller is used
- First line (shebang) changed from "#! /bin/sh" (with space) to "#!/bin/sh" (without space), don't really know, if it's necessary, I think both works
- Changed mount point für USB drive from "/mnt/sd*/" or "/mnt/sd?1/" to for- next loop for detection of correct mount- point for USB drive
- Every CountryCode > 50 will get english language (better than no text :) )

---

### V1.34 - 2016-01-31

- Problem with color scheme uninstaller fixed, should go back to red now
- Problem with uninstaller for semi- transparent parking sensor graphics fixed, should work now
- Problem with uninstaller for restore_audio_order_and_disclaimer fixed, should work now
- New folder "_copy_content_to_root_of_fat32_usb_stick" for easier manual copying to USB drive (thanks for tip to remizik!)
- Prepared for more languages, english and german strings outsourced in files, more languages now possible!

---

### V1.33 - 2016-01-29

- Copy only selected tweaks to config (for installation) or config_org (for deinstallation) folder, copying to SD Card should be much faster now depending on what you've selected
- Additional question whether a full backup of MZD System will be copied to USB drive before applying the tweaks
- Problem of sometimes not deleted fps.js fixed (FPS was counter shown in the corner)
- Problem of date- to- statusbar uninstaller fixed, should work now
- Automatic detection of correct compass installation (if no valid NAV SD Card is inserted during installation of speedometer, it will change necessary file)
- Copy of files to USB drive can be done after selection of tweaks

---

### V1.32 - 2016-01-27

- Problem with color scheme installer fixed, should work now
- After only hitting return (enter), now the shown tweak will not be installed (same like "n", before it was like "y")
- A summary of the selected tweaks will be displayed after selection for installation and uninstallation part
- Both languages were displayed for english uninstaller - fixed now

---

### V1.31 - 2016-01-26

- New version of "Date_to_statusbar_mod_by_diginix_v2.1"
- New version of "Speedo- Compass- Video_Tweak_v3.5"

---

### V1.3 - 2016-01-25

- Too many bugfixes :(
- Text output in german language too with automatic language detection for german, otherwise english
- README_All- in- one_tweaks.txt updated with german descriptions too
- Officially released

---

### V1.2x - 2016-01-20

- Create 'choose.cmd' to generate individual tweaks.sh file
- Bugfixes after testing by some daring users! ;)

---

### V1.1x - 2016-01

- Some own testing and bugfixes
- Create README_All- in- one_tweaks.txt

---

### V1.0 - 2016-01

- Only put together all tweaks in one folder to copy at once for myself
