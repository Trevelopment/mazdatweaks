
# MZD-AIO-TI PRO Tips
***
### WARNING: These are called 'Pro Tips' for a reason, I take no responsibility for the misuse of any of these instructions.  They are provided for informational purposes only,  if you are going to attempt making any modifications to your vehicle's Infotainment System you should have the proper knowledge and experience to recover if something were to go wrong.  
___
## SSH
**SSH ACCESS IS THE MOST IMPORTANT TOOL FOR DEVELOPMENT ON THE MZD INFOTAINMENT SYSTEM.**  
#### The are 3 main ways to gain SSH access:
- USB-Ethernet Adapter
- Wifi
- SSH over ADB (Android Debug Bridge)

In FW v56.00.5XX+ SSH access was disabled, It can be re-enabled with AIO or with [this script](http://trevelopment.win/SSHBringback)

After restoring SSH your root user/pass will be cmu/jci.  With AIO a second root user/pass is added: jci/jci
##### *Why?*
  > I wanted to make a definitive way that AIO could recognize that it had previously modified the passwd file.  Since we do not want to put any erroneous information into that file, a user in the Mazda3Revolution Forum suggested to rename the existing cmu (or root) user (with unknown password) to jci and add the new cmu user above that (making it the new root user).  That would work except the jci user would be useless since we don't know the password, solution: create a new jci/jci user/pass and add in place of the original giving us a unique user that can be easily checked programmatically and is usable for SSH access.

Any properly hashed user/pass combination can be added to the passwd file and used for SSH access, at the moment I have 4 root users: cmu, jci, root, and trez (all my passwords are jci for simplicity but you can make them anything).  If I was going to perform a firmware update I would remove the root user name and my other 3 root users would persist through the update.  There are many ways to create a hashed value including SHA-256, SHA-512, and crypt.  

How to make a user/pass using Ubuntu(16.04):

| :--- | :---: |
| Open the terminal and type the commands `sudo adduser usr` set password and you can skip the rest. Use the command: `sudo cat /etc/shadow` to print out the password file and the last line will be the usr you just added.  Copy up to the **2nd : (Second Colon)** [![adduser](/images/adduser2.jpg)](/images/adduser2.jpg)  In AIO choose SSH_Bringback with the option Force Update SSH.  Open _copy_to_usb or your USB drive and navigate to `config/ssh_bringback/` and open the file `passwd` with a text editor such as notepad++.  add the user and password copied from step 2 under the jci user and add `:0:0:root:/root:/bin/sh` to the end. **NOTE: Make sure your editor does not add a newline to the end of the file when saving or it may not work correctly. Also make sure line endings are Unix style (EOL = LF)** [![adduser](/images/adduser4.jpg)](/images/adduser4.jpg)  There are other commands such as `echo -n password | sha256sum | awk '{print $1}'` for an sha256 hash or you can substitute with `sha1sum` or `md5sum` for the corresponding hash. | [![adduser](/images/adduser1.jpg)](/images/adduser1.jpg) |
| You can reuse a password hash for multiple users so if you just want password 'jci' you can enter a username and copy the rest from either users "cmu" or "jci". Here you can see the hashes used for "cmu" ($5 means SHA-256 hash), The hash I used for "jci" ($6 means SHA-512 hash), the original "root" user (using the original Unix hash called 'crypt') and my new user trez reusing the cmu user's password hash.  In a computer system connected to the rest of the world reusing salt/hash values (and using the obsolete 'crypt' hashing method that was cracked by its creators in the 80s) is a huge security risk but since you have to be practically sitting inside the vehicle to connect, it isn't really an issue.| [![adduser](/images/adduser3.jpg)](/images/adduser3.jpg) |
| In AIO choose SSH_Bringback with the option Force Update SSH.  Open _copy_to_usb or your USB drive and navigate to `config/ssh_bringback/` and open the file `passwd` with a text editor such as notepad++.  add the user and password copied from step 2 under the jci user and add `:0:0:root:/root:/bin/sh` to the end. **NOTE: Make sure your editor does not add a newline to the end of the file when saving or it may not work correctly. Also make sure line endings are Unix style (EOL = LF)** |  |

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
