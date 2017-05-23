# MZD-AIO-TI PRO Tips
***
### WARNING: These are called 'Pro Tips' for a reason.  I take no responsibility for the missuse of any of these instructions.  If you are going to attempt anything on your car system you should have the proper knowlege and experience to recover if something were to go wrong.  
___
## SSH
**SSH ACCESS IS THE MOST IMPORTANT TOOL FOR DEVELOPMENT ON THE MZD INFOTAINMENT SYSTEM.**  
#### The are 3 main ways to gain SSH access:
- USB-Ethernet Adapter
- Wifi
- SSH over ADB (Android Phone)

In FW v56.00.5XX+ SSH access was disabled, It can be re-enabled with AIO or with [this script](http://trevelopment.win/SSHBringback)

After restoring SSH you root user/pass will be cmu/jci.  With AIO a second root user/pass is added: jci/jci
##### *Why?*
  I wanted to make a definitive way that AIO could recognize that it had previously modified the passwd file.  Since we do not want to put any erroneous information into that file a user in the Mazda3Revolution Forum suggested to rename the existing cmu (or root) user (with unknown password) to jci and add the new cmu user above that (making it the new root user).  That would work except the jci user would be useless since we don't know the password, solution: create a new jci/jci user/pass and add in place of the original giving us a unique user that can be easily checked programmatically and is usable for SSH access.

I will post a tutorial on how to add any user/pass combination to the passwd file to be used for SSH access, at the moment I have 4 root users: cmu, jci, root, and trez (all my passwords are jci for simplicity but you can make them anything).  I would remove the root user name if I was going to perform a firmware update and my other 3 root users would persist through the update.
THIS IS NOT THE ONLY WAY, THE EASIEST WAY, OR EVEN THE BEST WAY TO DO THIS.  IT IS JUST A WAY TO DO IT.
Using Ubuntu(16.04):

| Open the terminal and type the commands `sudo adduser usr` set password to jci and you can skip the rest.  Note that you can set the username and password to anything you want. | [![adduser](/images/adduser1.jpg)](/images/adduser1.jpg) |
| :--- | :---: |
| Command: `sudo cat /etc/shadow` will print out the password file and the last line will be the user you just added.  Copy up to the **2nd : (Second Colon)** | [![adduser](/images/adduser2.jpg)](/images/adduser2.jpg)  |
| In AIO choose SSH_Bringback with the option Force Update SSH | [![adduser](/images/adduser3.jpg)](/images/adduser3.jpg) |
| Open _copy_to_usb or your USB drive and navigate to `config/ssh_bringback/` and open the file `passwd` with a text editor such as notepad++.  add the user and password copied from step 2 under the jci user and add `:0:0:root:/root:/bin/sh` to the end. **NOTE: Make sure your editor does not add a newline to the end of the file when saving or it may not work correctly. Also make sure line endings are Unix style (EOL = LF)** | [![adduser](/images/adduser4.jpg)](/images/adduser4.jpg) |

[![adduser](/images/adduser5.jpg)](/images/adduser5.jpg)

___
***
## Next Time: How to run Android Auto in a Ubuntu virtual machine
{% include_relative AA.html %}

[Electron]: (http://electron.atom.io/)
[AngularJS]: (https://angularjs.org/)    
[MazdaTweaks.com]:(http://mazdatweaks.com/)
[NodeJS]: (https://nodejs.org/)
[Chromium]: (https://www.chromium.org/)
[1]: (https://github.com/Siutsch/AIO---All-in-one-tweaks)
