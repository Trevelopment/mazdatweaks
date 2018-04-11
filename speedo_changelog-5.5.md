## Speedometer Changelog (Since v5.5 before that it was 2 different speedometers)

#### v5.5

-   Analog, Modded and Bar Speedometers are now All In One
-   All options are available and will be applied to the proper Speedometer
-   Choose which speedometer to start with by default (if starting with Bar Speedometer other options will still determine the starting state of the Classic Speedometer)
-   The speedometer-config.js file now has all the options, set a variable to determine if override values are used or installed options.
-   Invalid Values Show "---" Such As Gear Position/Lever for Manual Transmissions
-   Toggles will Show The Action In A Statusbar Notification
-   Hold "Up" on multicontroller to switch between Classic and Bar Speedometer Mode
-   Hold "Down" in Classic mode to switch between Basic and Modded Speedometer (Basic is only analog with no toggles except long holds to change to Modded or Bar Speedometer)
-   Modded Speedometer (in Classic mode):
    -   Single click "Up" to increase size of values
    -   Multicontroller "Select" toggles between Digital and Analog speed
    -   Single click "Down" to show alternate values
-   Bar Speedometer:
    -   Configure The Amount of Bottom Rows in "speedometer-config.js" (Default 4)
    -   Hold "Down" to show/hide speed bar
    -   **TAP Any 2 Values To Swap Their Positions!**
        -   Any Values Can Be Swapped Even The Main
        -   When The Main Value Is Swapped An SBN Will Show With The Value Name
        -   Tap Below The Bottom Row To Swap Hidden Values In Other Rows
        -   Tap Selected Value Again To Cancel

#### v5.6

-   Bar Speedometer layout changes are remembered until shutdown
    -   Exiting or changing speedometers no longer resets layout to default
    -   Hold "Select" on the multicontroller to reset to your default layout
    -   Change Between 5 Configurable Color Themes (hold.left)
-   Remap Multicontroller Functions [speedometer-controls.js](config/speedometer-controls.js)
    -   All controls are able to be customized in speedometer-controls.js
-   Custom themes for bar speedometer with CSS (mostly colors but other CSS tweaks can be applied)
    -   Set Colors In [barThemes.css](config/barThemes.css)
