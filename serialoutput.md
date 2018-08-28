---
layout: default
permalink: /serial/output/
---

## Serial Output:
```
IBC embedded bootloader 1.68.8
(c) 2012 XS Embedded GmbH
Uncompressing Linux... done, booting the kernel.
00:00:01.000 lvds_service: Speed Restriction: Enabled
00:00:01.000 lvds_service: (Defaulting) Visteon Display.
00:00:01.000 lvds_service: Disabling HDCP initially.
00:00:01.000 lvds_service: Enable DECERR Auto reset done.
00:00:01.000 lvds_service: Main is done
00:00:01.000 lvds_service: LINE FAULT(S) cleared
00:00:01.000 lvds_service: Write to ACC_Sense Edge Success
00:00:01.000 lvds_service: lvds_monitor_thread
00:00:01.000 lvds_service: (Defaulting) Visteon Display.
00:00:01.000 lvds_service: LVDS Reset HDCP:-> PASSED !!
00:00:01.000 lvds_service: VSync Found after 5 tries.
00:00:01.000 lvds_service: Encryption enable failed.
00:00:01.000 lvds_service: LVDS Reset HDCP:-> PASSED !!
00:00:01.000 lvds_service: VSync Found after 5 tries.
00:00:01.000 lvds_service: Tuning values: 0, 0, 1, 1.

FGSN: 28440171096819506
cmu login: 00:00:09.419 kernel[] Note (: ) [    0.000000] Linux version 3.0.35 (bsp@jci) (gcc version 4.5.2 20101026 (prerelease) (GCC) ) #1 SMP PREEMPT Sun Mar 15 10:12:10 IST 2015
00:00:09.419 kernel[] Info (: ) [    0.000000] CPU identified as i.MX6Q, silicon rev 1.2
00:00:09.419 kernel[] Info (: ) [    0.000000] PERCPU: Embedded 7 pages/cpu @8c008000 s4736 r8192 d15744 u32768
00:00:09.419 kernel[] Note (: ) [    0.000000] Kernel command line: console=ttymxc1,115200 lpj=8495104 ldb=sin0 loglevel=3 usbcore.authorized_default=0 panic=23 mxc_vpu_mempool.max_instances=3 ibc=1.68.8 ibs=1.68.8 BOOTSEL=1 ibcinfo=0x00928000
00:00:09.419 kernel[] Info (: ) [    0.000000] PID hash table entries: 4096 (order: 2, 16384 bytes)
00:00:09.419 kernel[] Info (: ) [    0.000000] Dentry cache hash table entries: 131072 (order: 7, 524288 bytes)
00:00:09.419 kernel[] Info (: ) [    0.000000] Inode-cache hash table entries: 65536 (order: 6, 262144 bytes)
00:00:09.419 kernel[] Info (: ) [    0.000000] Memory: 512MB 256MB = 768MB total
00:00:09.419 kernel[] Note (: ) [    0.000000] Memory: 770704k/770704k available, 277872k reserved, 0K highmem
00:00:09.419 kernel[] Note (: ) [    0.000000] Virtual kernel memory layout:
00:00:09.419 Std[] Info (: ) Creating universally unique ID...
00:00:09.419 Std[] Info (: ) HMI Starting D-Bus daemon
00:00:09.419 Std[] Info (: ) Starting Service D-Bus daemon
00:00:09.419 Std[] Info (: ) JCI_SERVICE_BUS=unix:path=/tmp/dbus_service_socket
00:00:09.419 Std[] Info (: ) JCI_HMI_BUS=unix:path=/tmp/dbus_hmi_socket
00:00:09.419 Std[] Info (: ) Surface LOOPLOGO_SURFACE registered
00:00:09.419 Std[] Info (: ) V4L_ADDRESS=unix:path=/tmp/dbus_hmi_socket
00:00:09.419 Std[] Info (: ) NATIVEGUICTRL: Video Signal changed to 2
00:00:09.419 Std[] Info (: ) NATIVEGUICTRL: Reverse changed to 1
00:00:09.419 Std[] Info (: ) NATIVEGUICTRL: Hiding camera
00:00:09.419 VIDEOCTRL[270] Info (vctrl_sm_interface.c:93 ServiceInit) Initializing VIDEOCTRL Service
00:00:09.419 VIDEOCTRL[270] Info (vctrl_gpio.c:150 DayNightSensor_th) Display Day/Night is not on AUTO. No action taken
00:00:09.419 NATIVEGUI[287] Info (natgui.c:609 ServiceInit) SM Initilizing Service Native GUI.
00:00:09.419 NATIVEGUI[287] Info (natgui.c:771 NatG_Initialize) Success in initializing queue for NATGUI
00:00:09.419 NATIVEGUI[287] Info (natgui_settings_mgr.c:110 NatG_Settings_Init) NVRAM_Block_getValue return the currentLanguage = 0
00:00:09.419 NATIVEGUI[287] Info (natgui.c:780 NatG_Initialize) Success in initializing settings
00:00:09.419 NATIVEGUI[287] Info (natgui.c:789 NatG_Initialize) Success in initializing wayland window wrapper
00:00:09.419 NATIVEGUI[287] Info (natgui_surface_mgr.c:590 NatG_Redraw_Widget_Handler) NatG_Redraw_Widget_Handler
00:00:09.419 NATIVEGUI[287] Info (natgui.c:1187 NatG_GetImageDetails) Image = IMG_BANNER (78), [/jci/nativegui/images/SafetyText_US_English.png : (0, 433)], Language = 0
00:00:09.419 NATIVEGUI[287] Info (natgui.c:798 NatG_Initialize) Success in initializing HMI Dbus Connection
00:00:09.419 NATIVEGUI[287] Info (natgui.c:803 NatG_Initialize) Starting the SM client for BLM Setting language status
00:00:09.419 NATIVEGUI[287] Info (natgui.c:857 natg_Init_SM_Client) SM Client connection waiting for getting connected...
00:00:09.419 VIDEOCTRL[270] Info (vctrl_xml.c:506 VCTRL_XML_Open) XML file loaded successfully
00:00:09.419 VIDEOCTRL[270] Info (vctrl_xml.c:92 vctrl_loadSettingsData) Number of devices = 3
00:00:09.419 NATIVEGUI[287] Info (natgui.c:1011 natg_smcl_connectCommand_cb) natg_smcl_connectCommand_cb
00:00:09.419 SM[213] Info (sm.cpp:811 sm_ActionsForStoppedService) Svc audio_start[278] stopped!
00:00:09.419 VIDEOCTRL[270] Info (vctrl_xml.c:135 vctrl_extractDeviceSettings) Device = buc -- device ID = 0, device input = 0
00:00:09.419 com.jci.cpp.settings[289] Note (RegistryFactory.cpp:123 createRegistry) Startup time: 00:00:00.579363000
00:00:09.419 NATIVEGUI[287] Info (natgui.c:1014 natg_smcl_connectCommand_cb) Received connect call back. posting smaphore (sem_post)
00:00:09.419 SM[213] Warn (sm.cpp:896 sm_ActionsForStoppedService) Unlinking file ptr->ready_flag /var/run/audio_start
00:00:09.419 VIDEOCTRL[270] Info (vctrl_xml.c:135 vctrl_extractDeviceSettings) Device = dvd -- device ID = 1, device input = 1
00:00:09.419 VIDEOCTRL[270] Info (vctrl_xml.c:135 vctrl_extractDeviceSettings) Device = tv -- device ID = 2, device input = 1
00:00:09.419 VIDEOCTRL[270] Info (vctrl_xml.c:48 VCTRL_XML_ReadSettingsXML) Successfully loaded and parsed video_settings.xml!
00:00:09.419 NATIVEGUI[287] Info (natgui.c:860 natg_Init_SM_Client) SM Clinet connection semaphore relased.
00:00:09.419 NATIVEGUI[287] Info (natgui.c:913 natG_smcl_SM_SubscribeSettings) Registering for SM Client subscription.
00:00:09.419 NATIVEGUI[287] Info (natgui.c:810 NatG_Initialize) Success in subscribing to SM for BLM Settings
00:00:09.419 NATIVEGUI[287] Info (natgui.c:982 natg_smcl_GetSMServiceList) natg_smcl_GetSMServiceList
00:00:09.419 NATIVEGUI[287] Info (natgui.c:615 ServiceInit) Success in initilizing the Service Native GUI.
00:00:09.419 NATIVEGUI[287] Info (natgui.c:633 ServiceRun) Running Native GUI
00:00:09.419 NATIVEGUI[287] Info (natgui.c:1049 natg_smcl_getServices_cb) natg_smcl_getServices_cb with services_count=9
00:00:09.290 syslog-ng[273] Note (: ) syslog-ng starting up; version='3.3.5'
00:00:09.419 syslog-ng[273] Warn (: ) WARNING: you are using the pipe driver, underlying file is not a FIFO, it should be used by file(); filename='/dev/console'
00:00:09.525 kernel[] Note (: ) [    0.000000]     vector  : 0xffff0000 - 0xffff1000   (   4 kB)
00:00:09.525 kernel[] Note (: ) [    0.000000]     fixmap  : 0xfff00000 - 0xfffe0000   ( 896 kB)
00:00:09.525 kernel[] Note (: ) [    0.000000]     DMA     : 0xf4600000 - 0xffe00000   ( 184 MB)
00:00:09.525 kernel[] Note (: ) [    0.000000]     vmalloc : 0xc0800000 - 0xf2000000   ( 792 MB)
00:00:09.525 kernel[] Note (: ) [    0.000000]     lowmem  : 0x80000000 - 0xc0000000   (1024 MB)
00:00:09.525 kernel[] Note (: ) [    0.000000]     modules : 0x7f000000 - 0x80000000   (  16 MB)
00:00:09.525 kernel[] Note (: ) [    0.000000]       .init : 0x80008000 - 0x80040000   ( 224 kB)
00:00:09.525 kernel[] Note (: ) [    0.000000]       .text : 0x80040000 - 0x80440000   (4096 kB)
00:00:09.525 kernel[] Note (: ) [    0.000000]       .data : 0x80440000 - 0x8046a1a0   ( 169 kB)
00:00:09.525 kernel[] Note (: ) [    0.000000]        .bss : 0x8046a1c4 - 0x80500080   ( 600 kB)
00:00:09.525 Std[] Info (: ) TDE_TRIG_NORMAL_BOOT
00:00:09.525 Std[] Info (: ) Starting SM with /jci/sm/sm.conf .
00:00:09.525 Std[] Info (: ) jci
00:00:09.525 Std[] Info (: ) NATIVEGUICTRL: Successfully connected to DBus!
00:00:09.525 Std[] Info (: ) NNG configuration file found, no changed required.
00:00:09.525 Std[] Info (: ) Setting HDCP mode to 'enable'
00:00:09.525 Std[] Info (: ) =============== MAZ_CMU-150_55.00.753A  Flavor cmu150_NA ===============
00:00:09.525 Std[] Info (: )
Every 2s: /data_persist/dev/bin/00-start-adb/ssh-over-adb.sh1970-01-01 00:00:06
00:00:09.525 Std[] Info (: ) ALSA configuration file found. No config required.
00:00:09.525 Std[] Info (: ) DSP configuration file found.
00:00:09.525 SM[213] Warn (sm_spawner.cpp:234 SM_so_spawn) User root not available in the board
00:00:09.525 VIDEOCTRL[270] Info (vctrl_v4lcapture.c:843 dbus_connect)  (843) CDBusClientBase::connect - address: unix:path=/tmp/dbus_hmi_socket
00:00:09.525 VIDEOCTRL[270] Info (vctrl_service_core.cpp:66 VCTRL_CORE_InitializeConstSettings) Setting Constant settings for device 0
00:00:09.562 kernel[] Info (: ) [    0.000000] SLUB: Genslabs=13, HWalign=32, Order=0-3, MinObjects=0, CPUs=2, Nodes=1
00:00:09.562 kernel[] Info (: ) [    0.000000] Preemptible hierarchical RCU implementation.
00:00:09.562 kernel[] Info (: ) [    0.000000]  Verbose stalled-CPUs detection is disabled.
00:00:09.562 kernel[] Info (: ) [    0.000000] NR_IRQS:496 nr_irqs:496 496
00:00:09.562 kernel[] Info (: ) [    0.000000] MXC GPIO hardware
00:00:09.562 kernel[] Info (: ) [    0.000000] Init and register the timer to the framework with an 603561000 ns offset.
00:00:09.562 kernel[] Info (: ) [    0.000000] sched_clock: 32 bits at 3000kHz, resolution 333ns, wraps every 1431655ms
00:00:09.562 kernel[] Info (: ) [    0.000000] arm_max_freq=2
00:00:09.562 kernel[] Info (: ) [    0.000000] MXC_Early serial console at MMIO 0x21e8000 (options '115200')
00:00:09.562 kernel[] Info (: ) [    0.000000] bootconsole [ttymxc1] enabled
00:00:09.562 Std[] Info (: ) Surface NATGUI_SURFACE registered
00:00:09.562 Std[] Info (: ) Log started.
00:00:09.570 kernel[] Info (: ) [    0.000000] Console: colour dummy device 80x30
00:00:09.570 kernel[] Info (: ) [    0.603970] Calibrating delay loop (skipped) preset value.. 1699.02 BogoMIPS (lpj=8495104)
00:00:09.570 kernel[] Info (: ) [    0.604000] pid_max: default: 32768 minimum: 301
00:00:09.570 kernel[] Info (: ) [    0.604386] Mount-cache hash table entries: 512
00:00:09.570 kernel[] Info (: ) [    0.605383] CPU: Testing write buffer coherency: ok
00:00:09.570 kernel[] Info (: ) [    0.605453] ftrace: allocating 13083 entries in 39 pages
00:00:09.570 kernel[] Info (: ) [    0.713074] Brought up 2 CPUs
00:00:09.570 kernel[] Info (: ) [    0.713094] SMP: Total of 2 processors activated (3398.04 BogoMIPS).
00:00:09.570 kernel[] Info (: ) [    0.713674] devtmpfs: initialized
00:00:09.570 kernel[] Info (: ) [    0.740965] print_constraints: dummy:
00:00:09.571 kernel[] Info (: ) [    0.741352] NET: Registered protocol family 16
00:00:09.571 kernel[] Info (: ) [    0.743368] print_constraints: vddpu: 725 <--> 1300 mV at 1225 mV fast normal
00:00:09.571 kernel[] Info (: ) [    0.743652] print_constraints: vddcore: 725 <--> 1300 mV at 1225 mV fast normal
00:00:09.571 kernel[] Info (: ) [    0.743910] print_constraints: vddsoc: 725 <--> 1300 mV at 1225 mV fast normal
00:00:09.571 kernel[] Info (: ) [    0.744210] print_constraints: vdd2p5: 2000 <--> 2775 mV at 2400 mV fast normal
00:00:09.571 kernel[] Info (: ) [    0.744478] print_constraints: vdd1p1: 800 <--> 1400 mV at 1100 mV fast normal
00:00:09.571 kernel[] Info (: ) [    0.744758] print_constraints: vdd3p0: 2625 <--> 3400 mV at 3000 mV fast normal
00:00:09.571 kernel[] Info (: ) [    0.745971] SET_GPIO4_28 to 1
00:00:09.571 kernel[] Info (: ) [    0.746415] cpu regulator init ldo=0
00:00:09.571 kernel[] Info (: ) [    0.746993] am335xevm: shared transport platform init
00:00:09.580 kernel[] Info (: ) [    0.753548] SET_GPIO4_28 to 0
00:00:09.580 kernel[] Info (: ) [    0.753584] L310 cache controller enabled
00:00:09.580 kernel[] Info (: ) [    0.753600] l2x0: 16 ways, CACHE_ID 0x410000c7, AUX_CTRL 0x02070000, Cache size: 1048576 B
00:00:09.580 kernel[] Info (: ) [    0.758194] bio: create slab <bio-0> at 0
00:00:09.580 kernel[] Info (: ) [    0.760567] mxs-dma mxs-dma-apbh: initialized
00:00:09.580 kernel[] Note (: ) [    0.761181] SCSI subsystem initialized
00:00:09.580 kernel[] Info (: ) [    0.761588] spi_imx imx6q-ecspi.0: probed
00:00:09.580 kernel[] Info (: ) [    0.761956] spi_imx imx6q-ecspi.1: probed
00:00:09.580 kernel[] Info (: ) [    0.762290] spi_imx imx6q-ecspi.3: probed
00:00:09.580 kernel[] Info (: ) [    0.762699] usbcore: registered new interface driver usbfs
00:00:09.582 kernel[] Info (: ) [    0.762783] usbcore: registered new interface driver hub
00:00:09.582 kernel[] Info (: ) [    0.762913] usbcore: registered new device driver usb
00:00:09.582 kernel[] Info (: ) [    0.762928] Freescale USB OTG Driver loaded, $Revision: 1.55 $
00:00:09.582 kernel[] Info (: ) [    0.782501] imx-ipuv3 imx-ipuv3.0: IPU DMFC NORMAL mode: 1(0~1), 5B(4,5), 5F(6,7)
00:00:09.582 kernel[] Info (: ) [    0.802481] imx-ipuv3 imx-ipuv3.1: IPU DMFC NORMAL mode: 1(0~1), 5B(4,5), 5F(6,7)
00:00:09.582 kernel[] Info (: ) [    0.802844] Advanced Linux Sound Architecture Driver Version 1.0.24.
00:00:09.582 kernel[] Info (: ) [    0.884644] Switching to clocksource mxc_timer1
00:00:09.582 kernel[] Info (: ) [    0.907928] NET: Registered protocol family 2
00:00:09.582 kernel[] Info (: ) [    0.908355] IP route cache hash table entries: 32768 (order: 5, 131072 bytes)
00:00:09.582 kernel[] Info (: ) [    0.909831] TCP established hash table entries: 131072 (order: 8, 1048576 bytes)
00:00:09.613 kernel[] Info (: ) [    0.911693] TCP bind hash table entries: 65536 (order: 7, 786432 bytes)
00:00:09.613 kernel[] Info (: ) [    0.912777] TCP: Hash tables configured (established 131072 bind 65536)
00:00:09.613 kernel[] Info (: ) [    0.912791] TCP reno registered
00:00:09.613 kernel[] Info (: ) [    0.912810] UDP hash table entries: 512 (order: 2, 16384 bytes)
00:00:09.613 kernel[] Info (: ) [    0.912849] UDP-Lite hash table entries: 512 (order: 2, 16384 bytes)
00:00:09.613 kernel[] Info (: ) [    0.913413] NET: Registered protocol family 1
00:00:09.613 kernel[] Info (: ) [    0.913763] Unpacking initramfs...
00:00:09.613 kernel[] Info (: ) [    1.036079] Freeing initrd memory: 1528K
00:00:09.613 kernel[] Info (: ) [    1.036820] Static Power Management for Freescale i.MX6
00:00:09.613 kernel[] Info (: ) [    1.036833] wait mode is enabled for i.MX6
00:00:09.630 kernel[] Info (: ) [    1.036954] cpaddr = c0880000 suspend_iram_base=c08e8000
00:00:09.630 kernel[] Info (: ) [    1.037053] PM driver module loaded
00:00:09.630 kernel[] Info (: ) [    1.037266] IMX usb wakeup probe
00:00:09.630 kernel[] Info (: ) [    1.037802] add wake up source irq 75
00:00:09.630 kernel[] Info (: ) [    1.041197] cpu regulator init ldo=0
00:00:09.630 kernel[] Info (: ) [    1.041269] i.MXC CPU frequency driver
00:00:09.630 kernel[] Info (: ) [    1.061665] msgmni has been set to 1508
00:00:09.630 kernel[] Info (: ) [    1.064807] io scheduler noop registered (default)
00:00:09.630 kernel[] Info (: ) [    1.065197] mxc_sdc_fb mxc_sdc_fb.0: register mxc display driver ldb
00:00:09.630 kernel[] Info (: ) [    1.094919] imx-sdma imx-sdma: loaded firmware 1.1
00:00:09.630 com.jci.cpp.net[289] Info (ServerSocket.cpp:128 bind) Here
00:00:09.630 com.jci.cpp.net[289] Info (ServerSocket.cpp:145 bind) Here
00:00:09.630 com.jci.cpp.net[289] Info (ServerSocket.cpp:254 getSocketImpl) Here
00:00:09.630 com.jci.cpp.net[289] Info (ServerSocket.cpp:261 getSocketImpl) Here
00:00:09.630 com.jci.cpp.net[289] Info (ServerSocket.cpp:265 getSocketImpl) Here
00:00:09.630 com.jci.cpp.net[289] Info (ServerSocket.cpp:280 getSocketImpl) Here
00:00:09.630 com.jci.cpp.net[289] Info (DefaultSocketImpl.cpp:176 socketBind) Binding: 127.0.0.1:5000
00:00:09.630 com.jci.cpp.net[289] Info (ServerSocket.cpp:149 bind) Here
00:00:09.630 com.jci.cpp.net[289] Info (ServerSocket.cpp:254 getSocketImpl) Here
00:00:09.630 com.jci.cpp.net[289] Info (ServerSocket.cpp:261 getSocketImpl) Here
00:00:09.630 com.jci.cpp.net[289] Info (ServerSocket.cpp:280 getSocketImpl) Here
00:00:09.630 com.jci.cpp.net[289] Info (ServerSocket.cpp:254 getSocketImpl) Here
00:00:09.630 com.jci.cpp.net[289] Info (ServerSocket.cpp:261 getSocketImpl) Here
00:00:09.630 com.jci.cpp.net[289] Info (ServerSocket.cpp:280 getSocketImpl) Here
00:00:09.630 com.jci.cpp.net[289] Info (ServerSocket.cpp:254 getSocketImpl) Here
00:00:09.630 com.jci.cpp.net[289] Info (ServerSocket.cpp:261 getSocketImpl) Here
00:00:09.630 com.jci.cpp.net[289] Info (ServerSocket.cpp:280 getSocketImpl) Here
00:00:09.630 com.jci.cpp.net[289] Info (AbstractSocketImpl.cpp:304 setBlocking) Setting the non-blocking flag
00:00:09.642 kernel[] Info (: ) [    1.098504] imx-sdma imx-sdma: initialized
00:00:09.642 kernel[] Info (: ) [    1.098851] Serial: IMX driver
00:00:09.642 kernel[] Note (: ) [    1.098956] imx-uart imx-uart.0: Enable IRTS and CTSC
00:00:09.642 kernel[] Info (: ) [    1.098982] imx-uart.0: ttymxc0 at MMIO 0x2020000 (irq = 58) is a IMX
00:00:09.642 kernel[] Note (: ) [    1.099197] imx-uart imx-uart.1: Enable IRTS and CTSC
00:00:09.642 kernel[] Info (: ) [    1.099221] imx-uart.1: ttymxc1 at MMIO 0x21e8000 (irq = 59) is a IMX
00:00:09.642 kernel[] Info (: ) [    1.099262] console [ttymxc1] enabled, bootconsole disabled
00:00:09.642 kernel[] Note (: ) [    1.099477] imx-uart imx-uart.2: Enable IRTS and CTSC
00:00:09.642 kernel[] Info (: ) [    1.099498] imx-uart.2: ttymxc2 at MMIO 0x21ec000 (irq = 60) is a IMX
00:00:09.642 kernel[] Note (: ) [    1.099713] imx-uart imx-uart.3: CTS Trigger Level: 24
00:00:09.657 kernel[] Note (: ) [    1.099730] imx-uart imx-uart.3: RX Trigger Level: 16
00:00:09.657 kernel[] Info (: ) [    1.099749] imx-uart.3: ttymxc3 at MMIO 0x21f0000 (irq = 61) is a IMX
00:00:09.657 kernel[] Note (: ) [    1.099963] imx-uart imx-uart.4: Enable IRTS and CTSC
00:00:09.657 kernel[] Info (: ) [    1.099984] imx-uart.4: ttymxc4 at MMIO 0x21f4000 (irq = 62) is a IMX
00:00:09.657 kernel[] Warn (: ) [    1.103602] m25p80 spi0.0: found mx25l6405d, expected s25fl064p
00:00:09.657 kernel[] Info (: ) [    1.103622] m25p80 spi0.0: mx25l6405d (8192 Kbytes)
00:00:09.657 kernel[] Note (: ) [    1.103638] Creating 9 MTD partitions on "m25p80":
00:00:09.657 kernel[] Note (: ) [    1.103656] 0x000000000000-0x000000010000 : "bootstrap"
00:00:09.657 kernel[] Note (: ) [    1.104615] 0x000000010000-0x000000020000 : "boot-select"
00:00:09.657 kernel[] Note (: ) [    1.105487] 0x000000020000-0x000000040000 : "ibc1"
00:00:09.657 SM[213] Warn (sm_spawner.cpp:234 SM_so_spawn) User root not available in the board
00:00:09.662 kernel[] Note (: ) [    1.106397] 0x000000040000-0x000000060000 : "ibc2"
00:00:09.662 kernel[] Note (: ) [    1.107307] 0x000000060000-0x000000070000 : "nv-config"
00:00:09.662 kernel[] Note (: ) [    1.108213] 0x000000070000-0x0000000d0000 : "config"
00:00:09.662 kernel[] Note (: ) [    1.109152] 0x0000000d0000-0x0000000e0000 : "jci-boot-diag"
00:00:09.662 kernel[] Note (: ) [    1.110066] 0x0000000e0000-0x0000007e0000 : "fail-safe"
00:00:09.662 kernel[] Note (: ) [    1.111002] 0x0000007e0000-0x000000800000 : "update"
00:00:09.662 kernel[] Info (: ) [    1.112416] Fixed MDIO Bus: probed
00:00:09.662 kernel[] Info (: ) [    1.112440] Initializing USB Mass Storage driver...
00:00:09.662 kernel[] Info (: ) [    1.112536] usbcore: registered new interface driver usb-storage
00:00:09.662 kernel[] Info (: ) [    1.112550] USB Mass Storage support registered.
00:00:09.662 SM[213] Warn (sm_spawner.cpp:234 SM_so_spawn) User root not available in the board
00:00:09.679 kernel[] Info (: ) [    1.112561] i2c /dev entries driver
00:00:09.679 kernel[] Info (: ) [    1.113074] Linux video capture interface: v2.00
00:00:09.679 kernel[] Info (: ) [    1.144599] mxc_v4l2_output mxc_v4l2_output.0: V4L2 device registered as video16
00:00:09.679 kernel[] Info (: ) [    1.144761] mxc_v4l2_output mxc_v4l2_output.0: V4L2 device registered as video17
00:00:09.679 kernel[] Info (: ) [    1.145686] VPU initialized
00:00:09.679 kernel[] Info (: ) [    1.145761] vpu_mempool_init: Configuring buffers for 3 instances
00:00:09.679 kernel[] Info (: ) [    1.228175] ALSA device list:
00:00:09.679 kernel[] Info (: ) [    1.228187]   No soundcards found.
00:00:09.679 kernel[] Info (: ) [    1.229763] TCP cubic registered
00:00:09.679 kernel[] Info (: ) [    1.229778] NET: Registered protocol family 17
00:00:09.690 kernel[] Note (: ) [    1.229815] Registering the dns_resolver key type
00:00:09.690 kernel[] Info (: ) [    1.229890] VFP support v0.3: implementor 41 architecture 3 part 30 variant 9 rev 4
00:00:09.690 kernel[] Info (: ) [    1.230032] Bus freq driver module loaded
00:00:09.690 kernel[] Info (: ) [    1.230043] Bus freq driver Enabled
00:00:09.690 kernel[] Info (: ) [    1.230103] mxc_dvfs_core_probe
00:00:09.690 kernel[] Info (: ) [    1.230255] DVFS driver module loaded
00:00:09.690 kernel[] Info (: ) [    1.230685] registered taskstats version 1
00:00:09.690 kernel[] Note (: ) 6>[    1.248602]
00:00:09.690 kernel[] Info (: ) [    1.248606] Device Registered: lvds_cdrv
00:00:09.690 kernel[] Info (: ) [    1.248619] Major number = 250, Minor number = 0
00:00:09.706 kernel[] Info (: ) [    1.248861] input: LVDS TouchScreen as /devices/virtual/input/input0
00:00:09.706 kernel[] Info (: ) [    1.249401] Running do_deferred_initcalls()
00:00:09.706 kernel[] Info (: ) [    1.249583] IMX usb wakeup probe
00:00:09.706 kernel[] Info (: ) [    1.250114] squashfs: version 4.0 (2009/01/31) Phillip Lougher
00:00:09.706 kernel[] Info (: ) [    1.250129] ehci_hcd: USB 2.0 'Enhanced' Host Controller (EHCI) Driver
00:00:09.706 kernel[] Info (: ) [    1.250384] fsl-ehci fsl-ehci.0: Freescale On-Chip EHCI Host Controller
00:00:09.706 kernel[] Info (: ) [    1.250422] fsl-ehci fsl-ehci.0: new USB bus registered, assigned bus number 1
00:00:09.706 kernel[] Info (: ) [    1.262142] Number of times open() was called: 1
00:00:09.706 kernel[] Info (: ) [    1.262158] MAJOR number = 250, MINOR number = 0
00:00:09.706 kernel[] Info (: ) [    1.262169] Process id of the current process: 61
00:00:09.706 VIDEOCTRL[270] Info (vctrl_service_core.cpp:110 VCTRL_CORE_GetDayNightMode) Value read from NVRAM day for node 'lvds_bright_mode'
00:00:09.706 VIDEOCTRL[270] Info (vctrl_settings.c:237 BLM_VCTRL_OnChange_DayNight_Callback) DayNight Changed - value: DAY
00:00:09.712 kernel[] Info (: ) [    1.262179] ref=1
00:00:09.712 kernel[] Info (: ) [    1.271241] fsl-ehci fsl-ehci.0: irq 75, io base 0x02184000
00:00:09.712 kernel[] Info (: ) [    1.284134] [U] [        1.243882003] - xsg v4lcapture - starting up
00:00:09.712 kernel[] Info (: ) [    1.284166] [U] [        1.272706670] - xsg v4lcapture - streaming on
00:00:09.712 kernel[] Info (: ) [    1.291171] fsl-ehci fsl-ehci.0: USB 2.0 started, EHCI 1.00
00:00:09.712 kernel[] Info (: ) [    1.291460] usb usb1: New USB device found, idVendor=1d6b, idProduct=0002
00:00:09.712 kernel[] Info (: ) [    1.291479] usb usb1: New USB device strings: Mfr=3, Product=2, SerialNumber=1
00:00:09.712 kernel[] Info (: ) [    1.291493] usb usb1: Product: Freescale On-Chip EHCI Host Controller
00:00:09.712 kernel[] Info (: ) [    1.291505] usb usb1: Manufacturer: Linux 3.0.35 ehci_hcd
00:00:09.712 kernel[] Info (: ) [    1.291516] usb usb1: SerialNumber: fsl-ehci.0
00:00:09.730 kernel[] Info (: ) [    1.292193] hub 1-0:1.0: USB hub found
00:00:09.730 kernel[] Info (: ) [    1.292227] hub 1-0:1.0: 1 port detected
00:00:09.730 kernel[] Info (: ) [    1.292625] add wake up source irq 72
00:00:09.730 kernel[] Info (: ) [    1.292693] fsl-ehci fsl-ehci.1: Freescale On-Chip EHCI Host Controller
00:00:09.730 kernel[] Info (: ) [    1.292729] fsl-ehci fsl-ehci.1: new USB bus registered, assigned bus number 2
00:00:09.730 kernel[] Info (: ) [    1.321188] fsl-ehci fsl-ehci.1: irq 72, io base 0x02184200
00:00:09.730 kernel[] Info (: ) [    1.341164] fsl-ehci fsl-ehci.1: USB 2.0 started, EHCI 1.00
00:00:09.730 kernel[] Info (: ) [    1.341325] usb usb2: New USB device found, idVendor=1d6b, idProduct=0002
00:00:09.730 kernel[] Info (: ) [    1.341341] usb usb2: New USB device strings: Mfr=3, Product=2, SerialNumber=1
00:00:09.730 kernel[] Info (: ) [    1.341357] usb usb2: Product: Freescale On-Chip EHCI Host Controller
00:00:09.732 kernel[] Info (: ) [    1.341369] usb usb2: Manufacturer: Linux 3.0.35 ehci_hcd
00:00:09.732 kernel[] Info (: ) [    1.341381] usb usb2: SerialNumber: fsl-ehci.1
00:00:09.732 kernel[] Info (: ) [    1.341961] hub 2-0:1.0: USB hub found
00:00:09.732 kernel[] Info (: ) [    1.341993] hub 2-0:1.0: 1 port detected
00:00:09.732 kernel[] Info (: ) [    1.342432] Thermal calibration data is 0x5644c57d
00:00:09.732 kernel[] Info (: ) [    1.342445] Thermal sensor with ratio = 177
00:00:09.732 kernel[] Info (: ) [    1.361168] Anatop Thermal registered as thermal_zone0
00:00:09.732 kernel[] Info (: ) [    1.361371] anatop_thermal_probe: default cooling device is cpufreq!
00:00:09.732 kernel[] Info (: ) [    1.483346] caam caam.0: device ID = 0x0a16010000000000
00:00:09.732 kernel[] Info (: ) [    1.483369] caam caam.0: job rings = 2, qi = 0
00:00:09.743 kernel[] Info (: ) [    1.483789] caam caam.0: authenc-hmac-md5-cbc-aes-caam
00:00:09.743 kernel[] Info (: ) [    1.484004] caam caam.0: authenc-hmac-sha1-cbc-aes-caam
00:00:09.743 kernel[] Info (: ) [    1.484161] caam caam.0: authenc-hmac-sha224-cbc-aes-caam
00:00:09.743 kernel[] Info (: ) [    1.484328] caam caam.0: authenc-hmac-sha256-cbc-aes-caam
00:00:09.743 kernel[] Info (: ) [    1.484523] caam caam.0: authenc-hmac-md5-cbc-des3_ede-caam
00:00:09.743 kernel[] Info (: ) [    1.484687] caam caam.0: authenc-hmac-sha1-cbc-des3_ede-caam
00:00:09.743 kernel[] Info (: ) [    1.484830] caam caam.0: authenc-hmac-sha224-cbc-des3_ede-caam
00:00:09.743 kernel[] Info (: ) [    1.485031] caam caam.0: authenc-hmac-sha256-cbc-des3_ede-caam
00:00:09.743 kernel[] Info (: ) [    1.485173] caam caam.0: authenc-hmac-md5-cbc-des-caam
00:00:09.743 kernel[] Info (: ) [    1.485373] caam caam.0: authenc-hmac-sha1-cbc-des-caam
00:00:09.749 kernel[] Info (: ) [    1.485519] caam caam.0: authenc-hmac-sha224-cbc-des-caam
00:00:09.749 kernel[] Info (: ) [    1.485703] caam caam.0: authenc-hmac-sha256-cbc-des-caam
00:00:09.749 kernel[] Info (: ) [    1.485864] caam caam.0: cbc-aes-caam
00:00:09.749 kernel[] Info (: ) [    1.486039] caam caam.0: cbc-3des-caam
00:00:09.749 kernel[] Info (: ) [    1.486241] caam caam.0: cbc-des-caam
00:00:09.749 kernel[] Info (: ) [    1.491921] platform caam_jr.0: registering rng-caam
00:00:09.749 kernel[] Info (: ) [    1.494558] Datalight FlashFX Tera v2.1.1 Build 2128DF OS Services
00:00:09.749 kernel[] Info (: ) [    1.494571] Linux kernel 2.6 Edition for arm -- Compiled Sep  6 2013 at 15:31:42
00:00:09.749 kernel[] Info (: ) [    1.494583] Copyright (c) 1993-2012 Datalight, Inc.  All Rights Reserved Worldwide.
00:00:09.749 kernel[] Info (: ) [    1.494595] All rights and obligations of GPL v2 apply.
00:00:09.763 kernel[] Warn (: ) [    1.495758] flashfx: module license 'Copyright (c) 1993-2012 Datalight, Inc.  All Rights Reserved Worldwide.' taints kernel.
00:00:09.763 kernel[] Warn (: ) [    1.495803] Disabling lock debugging due to kernel taint
00:00:09.763 kernel[] Info (: ) [    1.505505] Datalight FlashFX Tera v2.1.1 Build 2128DF Block Device Driver
00:00:09.763 kernel[] Info (: ) [    1.505521] Linux kernel 2.6 Edition for arm -- Compiled Sep  6 2013 at 15:31:39
00:00:09.763 kernel[] Info (: ) [    1.505533] Copyright (c) 1993-2012 Datalight, Inc.  All Rights Reserved Worldwide.
00:00:09.763 kernel[] Info (: ) [    1.505545] All rights and obligations of GPL v2 apply.
00:00:09.763 kernel[] Info (: ) [    1.505764] Datalight FlashFX Tera v2.1.1 Build 2128DF
00:00:09.763 kernel[] Info (: ) [    1.505771] Copyright (c) 1993-2012 Datalight, Inc.  All Rights Reserved Worldwide.
00:00:09.763 kernel[] Info (: ) [    1.505778] Patents:  US#5860082, US#6260156.
00:00:09.763 kernel[] Info (: ) [    1.505783] Linux kernel 2.6 Edition for arm -- Compiled Sep  6 2013 at 15:31:50
00:00:09.769 kernel[] Info (: ) [    1.507402] ################################################
00:00:09.769 kernel[] Info (: ) [    1.507417] ##       ##
00:00:09.769 kernel[] Info (: ) [    1.507434] ##   FlashFX Tera SDK License ID: 1438932757  ##
00:00:09.769 kernel[] Info (: ) [    1.507446] ##       ##
00:00:09.769 kernel[] Info (: ) [    1.507457] ################################################
00:00:09.769 kernel[] Info (: ) [    1.563467]  ffx00: unknown partition table
00:00:09.769 kernel[] Info (: ) [    1.604966]  ffx01: p1 p2 p3 p4
00:00:09.769 kernel[] Info (: ) [    1.607706] Datalight Reliance Nitro v2.7.1 Build 2175BA OS Services
00:00:09.769 kernel[] Info (: ) [    1.607722] Linux Kernel Edition for arm -- Compiled Sep  6 2013 at 15:33:13
00:00:09.769 kernel[] Info (: ) [    1.607734] Copyright (c) 2003-2013 Datalight, Inc.  All Rights Reserved Worldwide.
00:00:09.786 kernel[] Info (: ) [    1.607745] All rights and obligations of GPL v2 apply.
00:00:09.786 kernel[] Info (: ) [    1.631596] Datalight Reliance Nitro v2.7.1 Build 2175BA File System Driver
00:00:09.786 kernel[] Info (: ) [    1.631612] Linux Kernel Edition for arm -- Compiled Sep  6 2013 at 15:32:11
00:00:09.786 kernel[] Info (: ) [    1.631625] Copyright (c) 2003-2013 Datalight, Inc.  All Rights Reserved Worldwide.
00:00:09.786 kernel[] Info (: ) [    1.631636] All rights and obligations of GPL v2 apply.
00:00:09.786 kernel[] Info (: ) [    1.631662] Datalight Reliance Nitro v2.7.1 Build 2175BA
00:00:09.786 kernel[] Info (: ) [    1.631676] Linux Kernel Edition for arm -- Compiled Sep  6 2013 at 15:32:19
00:00:09.786 kernel[] Info (: ) [    1.631690] Copyright (c) 2003-2013 Datalight, Inc.  All Rights Reserved Worldwide.
00:00:09.786 kernel[] Info (: ) [    1.631704] Patents:  US#7284101.
00:00:09.786 kernel[] Info (: ) [    1.631708]
00:00:09.793 kernel[] Info (: ) [    1.631955] Datalight Reliance Nitro v2.7.1 Build 2175BA driver initialization completed successfully
00:00:09.793 kernel[] Info (: ) [    1.632192] WARNING: A volume is defined as using Block Device "/dev/ffx01p1", but
00:00:09.793 kernel[] Info (: ) [    1.632210]          no definition was found in relconf.h.  Using the default settings.
00:00:09.793 kernel[] Info (: ) [    1.632322] block device supports flush.
00:00:09.793 kernel[] Info (: ) [    1.653610] ###########################################
00:00:09.793 kernel[] Info (: ) [    1.653652] ##  ##
00:00:09.793 kernel[] Info (: ) [    1.653692] ##   Reliance SDK License ID 7114895F    ##
00:00:09.793 kernel[] Info (: ) [    1.653730] ##  ##
00:00:09.793 kernel[] Info (: ) [    1.653754] ###########################################
00:00:09.793 kernel[] Info (: ) [    1.681264] usb 2-1: new high speed USB device number 2 using fsl-ehci
00:00:09.814 kernel[] Info (: ) [    1.726385] DclOsBlockDev:Ioctl() Old BlkSize=4096 Count=   122352 SecBlk=0 BlkShift=12
00:00:09.814 kernel[] Info (: ) [    1.726404]                       New BlkSize=4096 Count=   122352 SecBlk=0 BlkShift=12
00:00:09.814 kernel[] Info (: ) [    1.726571] VOL0 mounted in 90 milliseconds
00:00:09.814 kernel[] Info (: ) [    1.841753] usb 2-1: New USB device found, idVendor=0424, idProduct=2640
00:00:09.814 kernel[] Info (: ) [    1.841773] usb 2-1: New USB device strings: Mfr=0, Product=0, SerialNumber=0
00:00:09.814 kernel[] Error (: ) [    1.842158] usb 2-1: Device is not authorized for usage
00:00:09.814 kernel[] Info (: ) [    2.236484] warning: process `init' used the deprecated sysctl system call with 2.5.
00:00:09.814 kernel[] Info (: ) [    2.236630] warning: process `init' used the deprecated sysctl system call with 2.16.
00:00:09.814 kernel[] Info (: ) [    2.419618] usbcore: registered new interface driver dsrc_acm
00:00:09.814 kernel[] Info (: ) [    2.419633] dsrc_acm: v0.26:USB Abstract Control Model driver for USB modems and ISDN adapters
00:00:09.814 BUCPSA[326] Info (bucpsa_main.c:61 ServiceInit) Initializing BUCPSA Servicec
00:00:09.814 BUCPSA[326] Info (bucpsa_settings.c:153 Bucpsa_Settings_NVRAM_Init_S32) NVRAM key bucpsa_hi_cam_installed = 0
00:00:09.814 BUCPSA[326] Info (bucpsa_settings.c:153 Bucpsa_Settings_NVRAM_Init_S32) NVRAM key bucpsa_psm_variation = -1
00:00:09.814 BUCPSA[326] Info (bucpsa_settings.c:153 Bucpsa_Settings_NVRAM_Init_S32) NVRAM key veh_parking_sensor = 1
00:00:09.814 BUCPSA[326] Info (bucpsa_settings.c:153 Bucpsa_Settings_NVRAM_Init_S32) NVRAM key bucpsa_rcta_installed = 0
00:00:09.814 BUCPSA[326] Info (bucpsa_interface.c:392 BUCPSA_SendPsmInstalledStatus) Sending PSM installed status (0) in dbus
00:00:09.814 BUCPSA[326] Info (bucpsa_steng.c:295 bucpsa_Default_EventHandler) Entering Default_State state
00:00:09.814 BUCPSA[326] Info (bucpsa_steng.c:1169 bucpsa_updateImages) RCTA is disabled for this vehicle type.
00:00:09.838 kernel[] Info (: ) [    2.521773] WARNING: A volume is defined as using Block Device "/dev/ffx01p4", but
00:00:09.838 kernel[] Info (: ) [    2.521796]          no definition was found in relconf.h.  Using the default settings.
00:00:09.838 kernel[] Info (: ) [    2.522167] block device supports flush.
00:00:09.838 kernel[] Info (: ) [    2.691466] sdhci: Secure Digital Host Controller Interface driver
00:00:09.838 kernel[] Info (: ) [    2.691481] sdhci: Copyright(c) Pierre Ossman
00:00:09.838 kernel[] Info (: ) [    2.694526] DclOsBlockDev:Ioctl() Old BlkSize=4096 Count=    78624 SecBlk=0 BlkShift=12
00:00:09.838 kernel[] Info (: ) [    2.694543]                       New BlkSize=4096 Count=    78624 SecBlk=0 BlkShift=12
00:00:09.838 kernel[] Info (: ) [    2.703017] VOL1 mounted in 180 milliseconds
00:00:09.838 kernel[] Info (: ) [    2.735053] mmc0: no vmmc regulator found
00:00:09.838 kernel[] Info (: ) [    2.737752] Powering on wl12xx
00:00:09.838 NATIVEGUI[287] Info (natgui.c:1257 NatG_Process_Inputs) NatG_Process_Inputs::: NatG_Ip_SetDisplay (imageCount=1)
00:00:09.838 NATIVEGUI[287] Info (natgui_surface_mgr.c:590 NatG_Redraw_Widget_Handler) NatG_Redraw_Widget_Handler
00:00:09.838 NATIVEGUI[287] Info (natgui.c:1187 NatG_GetImageDetails) Image = IMG_BANNER (78), [/jci/nativegui/images/SafetyText_US_English.png : (0, 433)], Language = 0
00:00:09.838 BUCPSA[326] Info (bucpsa_steng.c:214 BUCPSA_StengPostMessage) Posting event 'BUCPSA_REVERSE_EVT' into state 'Default_State'
00:00:09.838 BUCPSA[326] Info (bucpsa_steng.c:214 BUCPSA_StengPostMessage) Posting event 'BUCPSA_ACC_EVT' into state 'Default_State'
00:00:09.838 BUCPSA[326] Info (bucpsa_steng.c:309 bucpsa_Default_EventHandler) Received gearStatus = 1
00:00:09.838 BUCPSA[326] Info (bucpsa_steng.c:364 bucpsa_Default_EventHandler) Received ACC Status = 2
00:00:09.838 VIDEOCTRL[270] Info (vctrl_settings.c:95 VCTRL2BLM_SETTINGS_UpdateIsNight) LOADED NEW VIDEO SETTINGS
00:00:09.838 VIDEOCTRL[270] Info (vctrl_service_core.cpp:89 VCTRL_CORE_UpdateAllOtherSettings) Updating settings for device dvd
00:00:09.838 VIDEOCTRL[270] Info (vctrl_service_core.cpp:89 VCTRL_CORE_UpdateAllOtherSettings) Updating settings for device tv
00:00:09.838 VIDEOCTRL[270] Info (vctrl_settings.c:102 VCTRL2BLM_SETTINGS_UpdateIsNight) Sent new video settings to MMUI
00:00:09.838 BUCPSA[326] Info (bucpsa_main.c:203 bucpsa_initSM_Client) SM Clinet connection semaphore relased.
00:00:09.838 BUCPSA[326] Warn (bucpsa_interface.c:992 bucpsa_BCM_Information_cb) Error in receiving BCM Information for RCTA.
00:00:09.893 kernel[] Info (: ) [    2.737801] mmc0: SDHCI controller on platform [sdhci-esdhc-imx.1] using DMA
00:00:09.893 kernel[] Info (: ) [    2.739304] mmc1: no vmmc regulator found
00:00:09.893 kernel[] Info (: ) [    2.745545] mmc1: SDHCI controller on platform [sdhci-esdhc-imx.2] using DMA
00:00:09.893 kernel[] Warn (: ) [    2.796652] mmc0: card claims to support voltages below the defined range. These will bem ignored.
00:00:09.893 kernel[] Warn (: ) [    2.840006] mmc0: queuing unknown CIS tuple 0x91 (3 bytes)
00:00:09.893 kernel[] Info (: ) [    2.842574] mmc0: new high speed SDIO card at address 0001
00:00:09.893 kernel[] Info (: ) [    2.842927] Powering off wl12xx
00:00:09.893 kernel[] Note (: ) [    2.965706] mmc1: Inserting CMD4 for drive strength of $02000000
00:00:09.893 kernel[] Info (: ) [    3.004542] mmc1: new high speed DDR MMC card at address 0001
00:00:09.893 kernel[] Info (: ) [    3.011291] mmcblk0: mmc1:0001 MMC04G 3.66 GiB
00:00:09.893 SYSTEM[275] Info (state_machine.cpp:771 system_smm_StateEnter) top
00:00:09.893 BUCPSA[326] Info (bucpsa_steng.c:214 BUCPSA_StengPostMessage) Posting event 'BUCPSA_VIDEO_EVT' into state 'Default_State'
00:00:09.893 BUCPSA[326] Info (bucpsa_steng.c:350 bucpsa_Default_EventHandler) Received videoSignalStatus = 0
00:00:09.893 SYSTEM[275] Info (state_machine.cpp:771 system_smm_StateEnter) SYSTEM_InitState
00:00:09.923 kernel[] Info (: ) [    3.017998] mmcblk0boot0: mmc1:0001 MMC04G partition 1 1.00 MiB
00:00:09.923 kernel[] Info (: ) [    3.021259] mmcblk0boot1: mmc1:0001 MMC04G partition 2 1.00 MiB
00:00:09.923 kernel[] Info (: ) [    3.023386]  mmcblk0: p1 p2
00:00:09.923 kernel[] Info (: ) [    3.024514] WARNING: A volume is defined as using Block Device "/dev/mmcblk0p2", but
00:00:09.923 kernel[] Info (: ) [    3.024532]          no definition was found in relconf.h.  Using the default settings.
00:00:09.923 kernel[] Info (: ) [    3.026071]  mmcblk0boot1: unknown partition table
00:00:09.923 kernel[] Info (: ) [    3.027349] block device supports flush.
00:00:09.923 kernel[] Info (: ) [    3.028967]  mmcblk0boot0: unknown partition table
00:00:09.923 kernel[] Info (: ) [    3.059916] DclOsBlockDev:Ioctl() Old BlkSize= 512 Count=  1171952 SecBlk=0 BlkShift=9
00:00:09.923 kernel[] Info (: ) [    3.059936]                       New BlkSize= 512 Count=  1171952 SecBlk=0 BlkShift=9
00:00:09.923 SYSTEM[275] Info (state_machine.cpp:744 system_smm_LogVbsEventInfo) Ignition on with ACC OFF!
00:00:09.923 VIDEOCTRL[270] Info (vctrl_service_core.cpp:333 VIDEOCTRL_SetDeviceInstalled_svc) Device 0 is set to not installed
00:00:09.923 VIDEOCTRL[270] Info (vctrl_v4lcapture.c:586 VCTRL2V4LCAPTURE_SetCameraInstalled) Starting Low Grade Camera detection...
00:00:09.923 SYSTEM[275] Info (smclient_module.cpp:853 SYSTEM_SMCM_SetShutdownAcknowledgeTimeout) SYSTEM_SMCM_SetShutdownAcknowledgeTimeout(0) has set 500 milliseconds
00:00:09.923 VIDEOCTRL[270] Info (vctrl_campwr.c:107 VCTRL_CAMPWR_WaitForCamPwr) Camera power is ON! Didn't need to wait
00:00:09.923 SYSTEM[275] Info (hardware_signal_io.cpp:1229 system_hsrm_StartPollingTemperature) Starting temperature polling with 5000 ms interval...
00:00:09.923 SYSTEM[275] Info (state_machine.cpp:1114 system_smm_PrepareTransition) Preparing for SYSTEM_NormalState!
00:00:09.923 SYSTEM[275] Info (state_machine.cpp:876 system_smm_ExpectTauConnected) Waiting for TAU connected...
00:00:09.923 SYSTEM[275] Info (state_machine.cpp:822 system_smm_ExpectDisplayNormal) Waiting for display normal...
00:00:09.923 SYSTEM[275] Info (state_machine.cpp:872 system_smm_ExpectTauConnected) Still waiting for TAU connected...
00:00:09.923 SYSTEM[275] Info (state_machine.cpp:818 system_smm_ExpectDisplayNormal) Still waiting for display normal...
00:00:09.923 SYSTEM[275] Info (DisplayStateManager.cpp:496 handleInitDisplayStateRequest) Getting display status...
00:00:09.923 LVDS[61] Info (lvds_dbus.c:1757 LVDS_SystemACCMonitoring_svc) System ACC Monitoring has started, safe to stop monitoring ACC internally
00:00:09.923 LVDS[61] Info (lvds_dbus.c:1912 LVDS_GetDisplayStatus_svc) Get display status request.
00:00:09.923 LVDS[61] Info (lvds_dbus.c:1915 LVDS_GetDisplayStatus_svc) Display status request added to queue.
00:00:09.980 kernel[] Info (: ) [    3.071223] VOL2 mounted in 50 milliseconds
00:00:09.980 kernel[] Info (: ) [    4.539712] NET: Registered protocol family 10
00:00:09.980 kernel[] Info (: ) [    6.039735] /proc/kmsg created
00:00:09.980 kernel[] Info (: ) [    6.039755] kmsg-filter loaded with loglevel=6
00:00:09.980 kernel[] Info (: ) [    6.113510] usb 2-1.3:u New USB device found, idVendor=0951, idProduct=1666
00:00:09.980 kernel[] Info (: ) [    6.113529] usb 2-1.3: New USB device strings: Mfr=1, Product=2, SerialNumber=3
00:00:09.980 kernel[] Info (: ) [    6.113543] usb 2-1.3: Product: DataTraveler 3.0
00:00:09.980 kernel[] Info (: ) [    6.113554] usb 2-1.3: Manufacturer: Kingston
00:00:09.980 kernel[] Info (: ) [    6.113565] usb 2-1.3: SerialNumber: 08606E6D401FF1806702CADB
00:00:09.980 kernel[] Error (: ) [    6.114004] usb 2-1.3: Device is not authorized for usage
00:00:09.982 kernel[] Info (: ) [    6.129500] scsi0 : usb-storage 2-1.3:1.0
00:00:09.982 kernel[] Info (: ) [    6.130208] usb 2-1.3: authorized to connect
00:00:09.982 kernel[] Info (: ) [    6.870196] rfkill: Bluetooth RF turn on
00:00:09.982 kernel[] Info (: ) [    6.881806] mx6_bt_rfkill driver successful loaded!
00:00:09.982 kernel[] Note (: ) [    7.122502] scsi 0:0:0:0: Direct-Access     Kingston DataTraveler 3.0      PQ: 0 ANSI: 6
00:00:09.982 kernel[] Note (: ) [    7.124034] sd 0:0:0:0: [sda] 30218842 512-byte logical blocks: (15.4 GB/14.4 GiB)
00:00:09.982 kernel[] Note (: ) [    7.124527] sd 0:0:0:0: [sda] Write Protect is off
00:00:09.982 kernel[] Note (: ) [    7.125164] sd 0:0:0:0: [sda] Write cache: disabled, read cache: enabled, doesn't support DPO or FUA
00:00:09.982 kernel[] Info (: ) [    7.167727]  sda: sda1
00:00:09.982 kernel[] Note (: ) [    7.170774] sd 0:0:0:0: [sda] Attached SCSI removable disk
00:00:09.994 kernel[] Info (: ) [    9.046787] aic310x: Setting hardware rate to 48000
00:00:09.994 kernel[] Info (: ) [    9.046801] aic310x: Setting hardware format to 2
00:00:09.997 LVDS[61] Error (lvds_dbus.c:545 LVDS_Signal_DisplayStatus) Display Status Resp = PASSED with value 0
00:00:09.997 SYSTEM[275] Info (VideoProxy.cpp:613 display_status_confirmed_cb) Display state NORMAL detected!
00:00:09.997 SYSTEM[275] Info (DisplayStateManager.cpp:293 onDisplayStatus) Display state is NORMAL!
00:00:09.997 SYSTEM[275] Info (state_machine.cpp:615 system_smm_LogDisplayEventInfo) Display normal mode!
00:00:09.997 SYSTEM[275] Info (state_machine.cpp:872 system_smm_ExpectTauConnected) Still waiting for TAU connected...
00:00:09.997 SYSTEM[275] Info (state_machine.cpp:615 system_smm_LogDisplayEventInfo) Display normal mode!
00:00:09.997 SYSTEM[275] Info (state_machine.cpp:872 system_smm_ExpectTauConnected) Still waiting for TAU connected...
00:00:10.056 com.jci.cpp.settings.socket[335] Info (SocketRegistry.cpp:1101 openSpecific) Connected to proxy: tcpip://
00:00:10.063 com.jci.cpp.settings[335] Note (RegistryFactory.cpp:123 createRegistry) Startup time: 00:00:00.008804333
00:00:10.101 VBS[336] Info (vbs_conf.c:1661 VBS_CONF_ProcessConfiguration) XML Configuration loaded successfully.
00:00:10.262 com.jci.cpp.devices[335] Note (Service.cpp:405 Service) Composite: false
00:00:10.268 LVDS[61] Info (lvds_main.c:805 lvds_ACC_thread) Exit ACC Thread
00:00:10.272 kernel[] Info (: ) [   10.273199] input: filtered-keyboard-0x0000000263A5956E as /devices/virtual/input/input3
00:00:10.272 kernel[] Info (: ) [   10.275151] input: filtered-mouse-0x0000000263C4CB03 as /devices/virtual/input/input4
00:00:10.272 kernel[] Info (: ) [   10.277144] input: filtered-touchscreen-0x0000000263E2FD7B as /devices/virtual/input/input5
00:00:10.286 SM[213] Warn (sm_spawner.cpp:234 SM_so_spawn) User root not available in the board
00:00:10.576 Std[] Info (: ) * daemon not running. starting it now on port 5037 *
00:00:10.576 Std[] Info (: ) * daemon started successfully *
00:00:10.577 Std[] Info (: ) wait adb device
00:00:10.998 VIDEOCTRL[270] Info (CDevice.cpp:144 enable) Video Capturing is enabled
00:00:11.005 BLM_SETTINGS[386] Info (settings_svc.cpp:173 ServiceInit) enter
00:00:11.019 com.jci.cpp.settings.socket[386] Info (SocketRegistry.cpp:1101 openSpecific) Connected to proxy: tcpip://
00:00:11.034 com.jci.cpp.settings[386] Note (RegistryFactory.cpp:123 createRegistry) Startup time: 00:00:00.018187667
00:00:11.035 BLM_SETTINGS[386] Info (settings_service_funs.cpp:652 SETTINGS_Additional_CPP_Interface_Open) blm_settings_started
00:00:11.036 BLM_SETTINGS[386] Info (settings_service_funs.cpp:653 SETTINGS_Additional_CPP_Interface_Open) BLM_SETTINGS_01.07.001
00:00:11.080 kernel[] Info (: ) [   11.084256] UYVY
00:00:11.097 BLM_SETTINGS[386] Error (settings_vbs_interface.cpp:14425 BLM_SETTINGS_Get_VBS_VehicleGroup_VehIdNumber_cb) VIN data from VBS is NULL
00:00:11.108 BLM_SETTINGS[386] Info (settings_cpp_devices_interface.cpp:57 Open_CPP_Devices_Interface) Opening the device display from CPP_DEVICES 0x6463c, mutex 0x2b6bdb14
00:00:11.110 kernel[] Warn (: ) [   11.111854] imx-ipuv3 imx-ipuv3.1: IPU Warning - IPU_INT_STAT_10 = 0x00000001
00:00:11.140 VBS[336] Info (vbs_loader.c:393 VBS_LOAD_LoadModules) All modules loaded!
00:00:11.140 kernel[] Info (: ) [   11.144081] UYVY
00:00:11.169 VBS_BUS_VDT[336] Info (mod_vdt.c:310 VBS_VDT_Initialize) Function VDT Module Initialization SUCCESS!
00:00:11.170 kernel[] Warn (: ) [   11.178589] imx-ipuv3 imx-ipuv3.1: IPU Warning - IPU_INT_STAT_10 = 0x00000001
00:00:11.226 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "PAD_LVLCnt_FR" ignored.
00:00:11.227 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "PAD_LVLCnt_FL" ignored.
00:00:11.228 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "PAD_LVLCnt_RR" ignored.
00:00:11.229 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "PAD_LVLCnt_RL" ignored.
00:00:11.230 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_BrakeStatic" ignored.
00:00:11.234 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_BattStatic1" ignored.
00:00:11.235 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_BattStatic2" ignored.
00:00:11.236 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_BattStatic3" ignored.
00:00:11.239 BLM_SETTINGS[386] Info (settings_blm_system_interface.cpp:84 Open_BLM_System_Interface) opening BLM_SYSTEM 1
00:00:11.241 kernel[] Info (: ) [   11.246827] Attention: Writing register 0x0E, this register will be used internally.
00:00:11.241 kernel[] Info (: ) [   11.247726] Attention: Writing register 0x0E, this register will be used internally.
00:00:11.241 kernel[] Info (: ) [   11.248189] Attention: Writing register 0x4D, this register will be used internally.
00:00:11.241 kernel[] Info (: ) [   11.248637] Attention: Writing register 0x50, this register will be used internally.
00:00:11.241 kernel[] Info (: ) [   11.249530] Attention: Writing register 0xE1, this register will be used internally.
00:00:11.241 kernel[] Info (: ) [   11.249986] Attention: Writing register 0xE2, this register will be used internally.
00:00:11.241 kernel[] Info (: ) [   11.250466] Attention: Writing register 0x02, this register will be used internally.
00:00:11.241 kernel[] Info (: ) [   11.250918] Attention: Writing register 0xE3, this register will be used internally.
00:00:11.241 kernel[] Info (: ) [   11.251399] Attention: Writing register 0xE4, this register will be used internally.
00:00:11.244 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_BattStatic4" ignored.
00:00:11.247 BLM_SETTINGS[386] Info (settings_blm_system_interface.cpp:69 Open_BLM_System_Interface_cb) open BLM_SYSTEM callback 100
00:00:11.248 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_BattStatic5" ignored.
00:00:11.248 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_BattStatic6" ignored.
00:00:11.248 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_BattStatic7" ignored.
00:00:11.248 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic1" ignored.
00:00:11.248 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic2" ignored.
00:00:11.248 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic3" ignored.
00:00:11.248 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic4" ignored.
00:00:11.248 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic5" ignored.
00:00:11.248 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic6" ignored.
00:00:11.248 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic7" ignored.
00:00:11.248 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic8" ignored.
00:00:11.248 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic9" ignored.
00:00:11.248 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic10" ignored.
00:00:11.248 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic11" ignored.
00:00:11.248 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic12" ignored.
00:00:11.248 VDM[336] Info (vdm_smdb.c:83 VDM_SMDB_Open) VDM SMDB opened successfully!
00:00:11.248 VDM[336] Info (vdm_vdt_current_calc.c:534 VDM_VDT_Current_SMDB_Open) VDM SMDB opened successfully!
00:00:11.248 VDM[336] Info (vdm_main.c:290 VDM_VDT_Current_Initialize) VDM Current (CVD) Opened!
00:00:11.278 BLM_SETTINGS[386] Info (settings_lvds_interface.cpp:270 BLM_SETTINGS_Set_LVDS_S16_DisplayBrightness) Setting brightness to CPP_LVDS
00:00:11.278 BLM_SETTINGS[386] Info (settings_cpp_devices_interface.cpp:146 SetContrast_U8) Setting contrast from CPP_DEVICES
00:00:11.278 LVDS[61] Info (lvds_dbus.c:772 LVDS_SetBrightness_svc) Brightness Request Level = 5000
00:00:11.282 LVDS[61] Info (lvds_dbus.c:488 LVDS_Signal_brightNessLevelResp) Brightness Level Resp = 5000
00:00:11.293 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "CrntVehMillege" ignored.
00:00:11.293 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "Crnt_YMDHM_ByGPS" ignored.
00:00:11.293 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "Drv1DrvTm" ignored.
00:00:11.293 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "CumulativeVehicleRunningDistance" ignored.
00:00:11.293 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "Drv1IstopTm" ignored.
00:00:11.301 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotalCumulativeDrivingTime" ignored.
00:00:11.301 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotalCumulativeIdleStopTime" ignored.
00:00:11.301 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotalCumulativeMotorRunningTime" ignored.
00:00:11.301 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "Drv1IdlDrvTm" ignored.
00:00
Password: :11.301 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotalCumulativeStoppingTime" ignored.
00:00:11.301 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "CumulativeAvarageFuelConsumption" ignored.
00:00:11.301 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "BestAvarageFuelConsumption" ignored.
00:00:11.301 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "Drv1MotActvTm" ignored.
00:00:11.301 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "Drv1AmntFuelCurr" ignored.
00:00:11.301 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "FulePulsePrev" ignored.
00:00:11.301 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "CumulativeFuelConsumption" ignored.
00:00:11.304 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "CumulativeMotorRunningDistance" ignored.
00:00:11.306 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DriveChart_Menu" ignored.
00:00:11.306 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "IDMJudgementResult" ignored.
00:00:11.306 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "AC_CompressureControl" ignored.
00:00:11.306 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "Shift_Clutch_Info" ignored.
00:00:11.306 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "WiperControl" ignored.
00:00:11.306 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "HeadlightControl" ignored.
00:00:11.306 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "Heater_Control" ignored.
00:00:11.306 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DriverInformation" ignored.
00:00:11.306 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "HEV_EnergyFlow" ignored.
00:00:11.306 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DriveChart_DetailAnalysis" ignored.
00:00:11.306 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DrvHisClr_Req" ignored.
00:00:11.306 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "PCM_Warning_status2" ignored.
00:00:11.306 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_Oil_deterioriate_Level" ignored.
00:00:11.306 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_BlowTm" ignored.
00:00:11.306 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_BlowTm2" ignored.
00:00:11.306 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_BlowTm3" ignored.
00:00:11.306 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "ACPrs_His" ignored.
00:00:11.328 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "ACCumulativeTime_for_PrsRpm" ignored.
00:00:11.328 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "PAD_LVLCnt" ignored.
00:00:11.328 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "SSU_CustermizeData" ignored.
00:00:11.328 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "FSC_CustermizeData" ignored.
00:00:11.328 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "FSC_CustermizeData2" ignored.
00:00:11.328 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "RBCM_CustermizeData" ignored.
00:00:11.328 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "PCS_CustermizeData" ignored.
00:00:11.328 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "HEC_CustermizeData" ignored.
00:00:11.328 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "PSM_CustermizeData" ignored.
00:00:11.328 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "BSM_CustermizeData" ignored.
00:00:11.328 VDM[336] Info (vdm_smdb.c:83 VDM_SMDB_Open) VDM SMDB opened successfully!
00:00:11.328 VDM[336] Info (vdm_vdt_pid_calc.c:302 VDM_VDT_Parameter_SMDB_Open) VDM PID SMDB opened successfully!
00:00:11.339 VDM[336] Info (vdm_main.c:399 VDM_VDT_Parameter_Initialize) VDM Parameter (PID) Opened!
00:00:11.345 BLM_SETTINGS[386] Info (settings_service_funs.cpp:873 SETTINGS_Additional_CPP_Interface_Open) Initial keyboard language string is "US English;ABC US English;CA French;ABC CA French;NA Spanish;ABC NA Spanish"(max:3 current:1)
00:00:11.345 BLM_SETTINGS[386] Info (settings_service_funs.cpp:882 SETTINGS_Additional_CPP_Interface_Open) ABC keyboard  support OK
00:00:11.345 BLM_SETTINGS[386] Info (settings_svc.cpp:192 ServiceInit) exit
00:00:11.345 NATIVEGUI[287] Info (natgui.c:1070 natG_smcl_sm_settingStarted_cb) natG_smcl_sm_settingStarted_cb notify_attr->evt_type=2
00:00:11.345 NATIVEGUI[287] Info (natgui.c:1073 natG_smcl_sm_settingStarted_cb) BLM settings started running. Get the language info
00:00:11.345 NATIVEGUI[287] Info (natgui_interface.c:408 NatG_If_BlmSettings_Connect) Using interface com.jci.settings.nativegui_287_1
00:00:11.351 VIDEOCTRL[270] Info (vctrl_sm_interface.c:232 OnBLM_SETTINGSIsAvailable) BLM SETTINGS is available. Connecting...
00:00:11.354 BLM_SETTINGS[386] Info (settings_blocking_queue.cpp:65 ServiceProcessBlockingQueue) thread id for ProcessBlockingQueue is 433
00:00:11.358 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "CrntVehMillege" ignored.
00:00:11.358 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotDrvTm" ignored.
00:00:11.358 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotDrv0Tm" ignored.
00:00:11.358 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotDrv1Tm" ignored.
00:00:11.358 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotDrv2Tm" ignored.
00:00:11.358 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotDrv3Tm" ignored.
00:00:11.358 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotDrv4Tm" ignored.
00:00:11.358 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotDrv5Tm" ignored.
00:00:11.358 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotIstpTm" ignored.
00:00:11.358 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotIstp0Tm" ignored.
00:00:11.358 BLM_SETTINGS[287] Info (settings_client_funs.cpp:759 BLM_SETTINGS_Client_ExtConnect) com.jci.settings.nativegui_287_1
00:00:11.358 BLM_SETTINGS[326] Info (settings_client_funs.cpp:759 BLM_SETTINGS_Client_ExtConnect) com.jci.settings.backupcam_326_1
00:00:11.358 BLM_SETTINGS[270] Info (settings_client_funs.cpp:759 BLM_SETTINGS_Client_ExtConnect) com.jci.settings.videoctrl_270_1
00:00:11.358 SM[213] Warn (sm.cpp:3189 SM_StartNeededService) User root not available in the board
00:00:11.358 BLM_SETTINGS[386] Info (settings_service_funs.cpp:1269 SETTINGS_Connect_svc) connecting client:com.jci.settings.backupcam_326_1
00:00:11.358 BLM_SETTINGS[386] Info (settings_service_funs.cpp:1269 SETTINGS_Connect_svc) connecting client:com.jci.settings.nativegui_287_1
00:00:11.358 BLM_SETTINGS[386] Info (settings_service_funs.cpp:1269 SETTINGS_Connect_svc) connecting client:com.jci.settings.videoctrl_270_1
00:00:11.358 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotIstp1Tm" ignored.
00:00:11.358 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotIstp2Tm" ignored.
00:00:11.358 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotIstp3Tm" ignored.
00:00:11.358 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotIstp4Tm" ignored.
00:00:11.391 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotIstp5Tm" ignored.
00:00:11.391 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotMotActvTm" ignored.
00:00:11.391 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotMotActv0Tm" ignored.
00:00:11.391 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotMotActv1Tm" ignored.
00:00:11.391 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotMotActv2Tm" ignored.
00:00:11.391 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotMotActv3Tm" ignored.
00:00:11.391 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotMotActv4Tm" ignored.
00:00:11.391 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotMotActv5Tm" ignored.
00:00:11.391 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotIdlDrvTm" ignored.
00:00:11.391 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotIdlDrv0Tm" ignored.
00:00:11.391 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotIdlDrv1Tm" ignored.
00:00:11.391 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotIdlDrv2Tm" ignored.
00:00:11.391 BLM_SETTINGS[326] Info (settings_client_funs.cpp:422 BLM_SEETINGS_Connect_cb) Client Name [com.jci.settings.backupcam_326_1]
00:00:11.391 BLM_SETTINGS[287] Info (settings_client_funs.cpp:422 BLM_SEETINGS_Connect_cb) Client Name [com.jci.settings.nativegui_287_1]
00:00:11.391 BLM_SETTINGS[287] Info (settings_client_funs.cpp:1559 SETTINGS_Client_ExtGet_S16) client [com.jci.settings.nativegui_287_1] com/jci/blm/settings/SystemSettings/LanguageDisplay
00:00:11.391 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotIdlDrv3Tm" ignored.
00:00:11.391 BLM_SETTINGS[326] Info (settings_client_funs.cpp:3034 SETTINGS_Client_ExtOnChange_S16) client [com.jci.settings.backupcam_326_1] com/jci/blm/settings/Vehicle/ParkingSensor
00:00:11.391 SM[213] Warn (sm_spawner.cpp:234 SM_so_spawn) User root not available in the board
00:00:11.391 BLM_SETTINGS[386] Info (settings_service_funs.cpp:5921 SETTINGS_Get_Settings_S16_svc) key path : /2/com/jci/blm/settings/SystemSettings/LanguageDisplay
00:00:11.391 BLM_SETTINGS[270] Info (settings_client_funs.cpp:422 BLM_SEETINGS_Connect_cb) Client Name [com.jci.settings.videoctrl_270_1]
00:00:11.391 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotIdlDrv4Tm" ignored.
00:00:11.391 BLM_SETTINGS[326] Info (settings_client_funs.cpp:1559 SETTINGS_Client_ExtGet_S16) client [com.jci.settings.backupcam_326_1] com/jci/blm/settings/Vehicle/ParkingSensor
00:00:11.391 BLM_SETTINGS[386] Info (settings_service_funs.cpp:6677 SETTINGS_OnChange_Settings_S16_svc) client:com.jci.settings.backupcam_326_1 key path : /2/com/jci/blm/settings/Vehicle/ParkingSensor
00:00:11.391 VIDEOCTRL[270] Info (vctrl_settings.c:120 BLM_VCTRL_Connect_Callback) Registering for DisplayDayNight signal
00:00:11.391 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotIdlDrv5Tm" ignored.
00:00:11.391 BLM_SETTINGS[326] Info (settings_client_funs.cpp:3034 SETTINGS_Client_ExtOnChange_S16) client [com.jci.settings.backupcam_326_1] com/jci/blm/settings/Vehicle/VehicleModelType
00:00:11.391 SM[213] Warn (sm_spawner.cpp:234 SM_so_spawn) User root not available in the board
00:00:11.391 BLM_SETTINGS[326] Info (settings_client_funs.cpp:1559 SETTINGS_Client_ExtGet_S16) client [com.jci.settings.backupcam_326_1] com/jci/blm/settings/Vehicle/VehicleModelType
00:00:11.391 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "EngineOilFile" ignored.
00:00:11.391 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "PTDriveFile" ignored.
00:00:11.391 BLM_SETTINGS[326] Info (settings_client_funs.cpp:2907 SETTINGS_Client_OnChange_S16_cb) SETTINGS_Client_OnChange_S16_cb
00:00:11.391 BLM_SETTINGS[386] Info (settings_service_funs.cpp:5921 SETTINGS_Get_Settings_S16_svc) key path : /2/com/jci/blm/settings/Vehicle/ParkingSensor
00:00:11.391 BLM_SETTINGS[287] Info (settings_client_funs.cpp:1458 SETTINGS_Client_Get_S16_cb) SETTINGS_Client_Get_S16_cb
00:00:11.391 BLM_SETTINGS[326] Info (settings_client_funs.cpp:2937 SETTINGS_Client_OnChange_S16_cb) Client Name [com.jci.settings.backupcam_326_1]
00:00:11.391 BLM_SETTINGS[270] Info (settings_client_funs.cpp:3034 SETTINGS_Client_ExtOnChange_S16) client [com.jci.settings.videoctrl_270_1] com/jci/blm/settings/Display/DisplayDayNight
00:00:11.391 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "CustomizeDataFile" ignored.
00:00:11.391 BLM_SETTINGS[386] Info (settings_service_funs.cpp:6677 SETTINGS_OnChange_Settings_S16_svc) client:com.jci.settings.backupcam_326_1 key path : /2/com/jci/blm/settings/Vehicle/VehicleModelType
00:00:11.391 SM[213] Warn (sm_spawner.cpp:234 SM_so_spawn) User root not available in the board
00:00:11.391 BLM_SETTINGS[287] Info (settings_client_funs.cpp:1487 SETTINGS_Client_Get_S16_cb) Client Name [com.jci.settings.nativegui_287_1], returned value 0 for setting ID 59
00:00:11.391 BLM_SETTINGS[270] Info (settings_client_funs.cpp:1559 SETTINGS_Client_ExtGet_S16) client [com.jci.settings.videoctrl_270_1] com/jci/blm/settings/Display/DisplayDayNight
00:00:11.391 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "HVD_Ind_Lamp_100_Records" ignored.
00:00:11.391 NATIVEGUI[287] Info (natgui_interface.c:507 NatG_if_BlmSettingsCurLanguage_cb) NatG_if_BlmSettingsCurLanguage_cb. curLang=0
00:00:11.391 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_BattStatic1" ignored.
00:00:11.391 BLM_SETTINGS[386] Info (settings_service_funs.cpp:5921 SETTINGS_Get_Settings_S16_svc) key path : /2/com/jci/blm/settings/Vehicle/VehicleModelType
00:00:11.391 BLM_SETTINGS[326] Info (settings_client_funs.cpp:1458 SETTINGS_Client_Get_S16_cb) SETTINGS_Client_Get_S16_cb
00:00:11.391 BLM_SETTINGS[326] Info (settings_client_funs.cpp:1487 SETTINGS_Client_Get_S16_cb) Client Name [com.jci.settings.backupcam_326_1], returned value 1 for setting ID 144
00:00:11.391 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_BattStatic2" ignored.
00:00:11.391 BLM_SETTINGS[386] Info (settings_service_funs.cpp:6677 SETTINGS_OnChange_Settings_S16_svc) client:com.jci.settings.videoctrl_270_1 key path : /2/com/jci/blm/settings/Display/DisplayDayNight
00:00:11.391 BUCPSA[326] Info (bucpsa_steng.c:214 BUCPSA_StengPostMessage) Posting event 'BUCPSA_PSA_REFRESH_EVT' into state 'Default_State'
00:00:11.391 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_BattStatic3" ignored.
00:00:11.391 BLM_SETTINGS[326] Info (settings_client_funs.cpp:2907 SETTINGS_Client_OnChange_S16_cb) SETTINGS_Client_OnChange_S16_cb
00:00:11.391 BLM_SETTINGS[326] Info (settings_client_funs.cpp:2937 SETTINGS_Client_OnChange_S16_cb) Client Name [com.jci.settings.backupcam_326_1]
00:00:11.391 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_BattStatic4" ignored.
00:00:11.391 NATIVEGUI[287] Info (natgui_settings_mgr.c:192 NatG_Settings_Set_Language) Updating current language (0) in NVRAM using NVRAM_Block_setValue
00:00:11.391 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_BattStatic5" ignored.
00:00:11.391 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_BattStatic6" ignored.
00:00:11.391 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_BattStatic7" ignored.
00:00:11.391 BUCPSA[326] Info (bucpsa_steng.c:381 bucpsa_Default_EventHandler) PSM System Status = Off (0)
00:00:11.391 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic1" ignored.
00:00:11.391 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic2" ignored.
00:00:11.391 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic3" ignored.
00:00:11.391 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic4" ignored.
00:00:11.391 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic5" ignored.
00:00:11.391 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic6" ignored.
00:00:11.391 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic7" ignored.
00:00:11.391 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic8" ignored.
00:00:11.391 SM[213] Info (sm.cpp:811 sm_ActionsForStoppedService) Svc stage_2[436] stopped!
00:00:11.391 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic9" ignored.
00:00:11.391 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic10" ignored.
00:00:11.391 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic11" ignored.
00:00:11.391 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic12" ignored.
00:00:11.391 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "PAD_LVLCnt_FR" ignored.
00:00:11.391 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "PAD_LVLCnt_FL" ignored.
00:00:11.391 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "PAD_LVLCnt_RR" ignored.
00:00:11.391 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "PAD_LVLCnt_RL" ignored.
00:00:11.391 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_BrakeStatic" ignored.
00:00:11.391 VIDEOCTRL[270] Info (vctrl_v4lcapture.c:1052 endCallGetStatus) Video Status = 31
00:00:11.391 VIDEOCTRL[270] Info (vctrl_service_core.cpp:621 VCTRL_SERVICE_signal_VideoStatusChanged) Sending VideoSignalChanged with status = 2, device = 0
00:00:11.391 VIDEOCTRL[270] Info (vctrl_vbs.c:153 VCTRL2CPP_VBS_DTChandler) Clear fault  DTC id = 15
00:00:11.391 BUCPSA[326] Info (bucpsa_steng.c:214 BUCPSA_StengPostMessage) Posting event 'BUCPSA_VIDEO_EVT' into state 'Default_State'
00:00:11.391 NATGUICTRL[129] Info (nativeguictrl_dbus_service_interface.c:138 ngc_videoSignal_cb) Video Signal callback with value 2
00:00:11.391 BUCPSA[326] Info (bucpsa_steng.c:350 bucpsa_Default_EventHandler) Received videoSignalStatus = 2
00:00:11.560 VIDEOCTRL[270] Info (vctrl_v4lcapture.c:809 vctrl2v4lcapture_registerToV4L) Registering to v4lcapture for video status
00:00:11.581 BLM_SETTINGS[386] Info (settings_vbs_interface.cpp:11697 UpdateSymLinkForDSPConfiguration) Set DSP symlink to /jci/dsp/dsp_J36A-NoBose.xml, index in table 7
00:00:11.581 BLM_SETTINGS[386] Info (settings_symlink.hpp:228 _int_Set) symlink file /data/dsp.xml and its conatins "/jci/dsp/dsp_J36A-NoBose.xml" are OK
00:00:11.581 BLM_SETTINGS[326] Info (settings_client_funs.cpp:1458 SETTINGS_Client_Get_S16_cb) SETTINGS_Client_Get_S16_cb
00:00:11.581 BLM_SETTINGS[386] Info (settings_service_funs.cpp:5921 SETTINGS_Get_Settings_S16_svc) key path : /2/com/jci/blm/settings/Display/DisplayDayNight
00:00:11.581 BLM_SETTINGS[326] Info (settings_client_funs.cpp:1487 SETTINGS_Client_Get_S16_cb) Client Name [com.jci.settings.backupcam_326_1], returned value 1 for setting ID 140
00:00:11.581 BUCPSA[326] Info (bucpsa_interface.c:649 bucpsa_VehicleModelType_cb) Vehicle Model Type = J36 (1)
00:00:11.581 BUCPSA[326] Info (bucpsa_steng.c:214 BUCPSA_StengPostMessage) Posting event 'BUCPSA_PSA_REFRESH_EVT' into state 'Default_State'
00:00:11.581 BUCPSA[326] Info (bucpsa_steng.c:214 BUCPSA_StengPostMessage) Posting event 'BUCPSA_RCTA_REFRESH_EVT' into state 'Default_State'
00:00:11.581 BUCPSA[326] Info (bucpsa_steng.c:381 bucpsa_Default_EventHandler) PSM System Status = Off (0)
00:00:11.581 BLM_SETTINGS[270] Info (settings_client_funs.cpp:2907 SETTINGS_Client_OnChange_S16_cb) SETTINGS_Client_OnChange_S16_cb
00:00:11.581 BLM_SETTINGS[270] Info (settings_client_funs.cpp:2937 SETTINGS_Client_OnChange_S16_cb) Client Name [com.jci.settings.videoctrl_270_1]
00:00:11.581 BLM_SETTINGS[270] Info (settings_client_funs.cpp:1458 SETTINGS_Client_Get_S16_cb) SETTINGS_Client_Get_S16_cb
00:00:11.581 BLM_SETTINGS[270] Info (settings_client_funs.cpp:1487 SETTINGS_Client_Get_S16_cb) Client Name [com.jci.settings.videoctrl_270_1], returned value 2 for setting ID 0
00:00:11.581 VIDEOCTRL[270] Info (vctrl_settings.c:237 BLM_VCTRL_OnChange_DayNight_Callback) DayNight Changed - value: DAY
00:00:11.608 VDM[336] Info (vdm_smdb.c:83 VDM_SMDB_Open) VDM SMDB opened successfully!
00:00:11.608 VDM[336] Info (vdm_vdt_history_calc.c:210 VDM_VDT_History_SMDB_Open) VDM History SMDB opened successfully!
00:00:11.608 VDM[336] Info (vdm_main.c:344 VDM_VDT_History_Initialize) VDM History (HVD) Opened!
00:00:11.608 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DID8E" ignored.
00:00:11.608 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DID8F" ignored.
00:00:11.608 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DID90" ignored.
00:00:11.608 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DID91" ignored.
00:00:11.608 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DIDB3" ignored.
00:00:11.608 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DIDB5" ignored.
00:00:11.608 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DIDB6" ignored.
00:00:11.608 SMDB[336] Info (smdb_shmem.c:813 shmem_loadData) Loaded default data for DB vdm_vdt_odr_data.
00:00:11.608 VDM[336] Info (vdm_smdb.c:83 VDM_SMDB_Open) VDM SMDB opened successfully!
00:00:11.608 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "cvd_ig_on_timer" ignored.
00:00:11.608 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "cvd_out_car_temperature" ignored.
00:00:11.608 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "cvd_ymdhm_by_gps" ignored.
00:00:11.608 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "cvd_initialDiagRecord" ignored.
00:00:11.608 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "cvd_warninglamprecord" ignored.
00:00:11.608 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "cvd_initial_trigger" ignored.
00:00:11.608 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "cvd_vdt_initialze_status" ignored.
00:00:11.608 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "cvd_groupbdata" ignored.
00:00:11.608 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "cvd_indicatorlamprecord" ignored.
00:00:11.608 SMDB[336] Info (smdb_shmem.c:813 shmem_loadData) Loaded default data for DB vdm_vdt_warninglamp_data.
00:00:11.608 VDM[336] Info (vdm_smdb.c:83 VDM_SMDB_Open) VDM SMDB opened successfully!
00:00:11.608 VDM[336] Info (vdm_vdt_pid_calc.c:912 VDM_VDT_WarningLamp_SMDB_Open) VDM SMDB opened successfully!
00:00:11.608 VDM[336] Info (vdm_main.c:672 VDM_VDT_WarningLamp_Initialize) VDM WarningLamp Opened = 0!
00:00:11.608 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "WrngLampAct" ignored.
00:00:11.608 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "hvd_total_distance" ignored.
00:00:11.608 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "hvd_record_number" ignored.
00:00:11.608 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "hvd_total_records" ignored.
00:00:11.654 VDM[336] Info (vdm_smdb.c:83 VDM_SMDB_Open) VDM SMDB opened successfully!
00:00:11.654 VDM[336] Info (vdm_vdt_pid_calc.c:790 VDM_VDT_WarningLampHistory_SMDB_Open) VDM History SMDB opened successfully!
00:00:11.654 VDM[336] Info (vdm_main.c:617 VDM_VDT_WarningLampHistory_Initialize) VDM WarningLampHistory Opened!
00:00:11.654 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "YMDHM_ByGPS" ignored.
00:00:11.654 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "Vehicle_Identification_Number" ignored.
00:00:11.671 VDM[336] Info (vdm_smdb.c:83 VDM_SMDB_Open) VDM SMDB opened successfully!
00:00:11.671 VDM[336] Info (vdm_vdt_settings.c:121 VDM_VDT_SETTINGS_SMDB_Open) VDM UI_MD SMDB opened successfully!
00:00:11.676 com.jci.cpp.settings.socket[336] Info (SocketRegistry.cpp:1101 openSpecific) Connected to proxy: tcpip://
00:00:11.709 com.jci.cpp.settings[336] Note (RegistryFactory.cpp:123 createRegistry) Startup time: 00:00:00.050504667
00:00:11.719 VBS_BUS_VDT[336] Info (mod_vdt.c:2160 VBS_VDT_InitSettings) Value of gs_fuel_type_CPPSettingsvalue = 1
00:00:11.721 VBS_BUS_VDT[336] Error (mod_vdt.c:391 VBS_VDT_SM_Connect) SM Connect Called
00:00:11.738 VBS_BUS_VDT[336] Info (mod_vdt_sm_client_subscribe.c:137 VBS_SM_CLIENT_Subscribe) enter
00:00:11.740 VBS_BUS_VDT[336] Info (mod_vdt_sm_client_subscribe.c:233 VBS_SM_CLIENT_Subscribe) S
M_GetServices Success.
00:00:11.740 VBS_BUS_VDT[336] Info (mod_vdt_ind_lamp.c:1431 VBS_VDT_InitializeValues_IndicatorLamp) VBS_VDT_InitializeValues_IndicatorLamp
00:00:11.746 VBS_BUS_VDT[336] Info (mod_vdt_sm_client_subscribe.c:439 VBS_sm_client_get_services_cb) services_info[0].service_name: jciTime
00:00:11.747 VBS_BUS_VDT[336] Info (mod_vdt_sm_client_subscribe.c:443 VBS_sm_client_get_services_cb) Found jciTime in services_info.
00:00:11.752 VBS_BUS_VDT[336] Info (mod_vdt_sm_client_subscribe.c:459 VBS_sm_client_get_services_cb) jciTime is stopped. Calling disconnect function pointer from userData.
00:00:11.753 VBS_BUS_VDT[336] Error (mod_vdt.c:386 VBS_VDT_CPP_Time_Disconnect_cb) CPP TIME IS NOT CONNECTED
00:00:11.785 VBS_BUS_DIAG[336] Info (mod_diag_manage_svc.c:3344 initializeSemaphore) Semaphore Initialistaion is success
00:00:11.785 VBS_BUS_DIAG[336] Info (mod_diag_manage_svc.c:311 moddiag_createThread) Periodic thread created successfully
00:00:11.803 VBS_BUS_DIAG[336] Info (mod_diag_manage_svc.c:329 moddiag_PeriodicThread_Handler) Bus Diag Thread
00:00:11.825 com.jci.cpp.settings.socket[336] Info (SocketRegistry.cpp:1101 openSpecific) Connected to proxy: tcpip://
00:00:11.851 com.jci.cpp.settings[336] Note (RegistryFactory.cpp:123 createRegistry) Startup time: 00:00:00.026908333
00:00:11.853 VBS_BUS_NAVI[336] Info (mod_navigation.c:148 VBS_NAVI_ReadFuelTypeFromRegistry) VBS NAVI Handle to Settings Registry: 0x8b348, Open Stat: 0
00:00:11.860 VBS_BUS_NAVI[336] Info (mod_navigation.c:155 VBS_NAVI_ReadFuelTypeFromRegistry) VBS NAVI Handle to Settings Registry:successful :: gs_fuel_type = 1
00:00:11.872 VBS_BUS_EEM[336] Info (mod_eem.c:391 VBS_MOD_EEM_Initialize) Function EEM Module Initialization SUCCESS!
00:00:11.876 NATGUICTRL[129] Info (nativeguictrl_dbus_service_interface.c:157 ngc_videoSignal_cb) Setting camera installed = TRUE from VideoCtrl
00:00:11.876 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "Drv1AvlFuelE_T_line" ignored.
00:00:11.877 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "Drv1AvlFuelE_T_bar" ignored.
00:00:11.877 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "Drv1AvlEnergy_T_bar" ignored.
00:00:11.878 VDM[336] Info (vdm_smdb.c:83 VDM_SMDB_Open) VDM SMDB opened successfully!
00:00:11.879 VDM[336] Info (vdm_eem_calc.c:200 VDM_EEM_SMDB_Open) VDM SMDB opened successfully!
00:00:11.880 VDM[336] Info (vdm_main.c:71 VDM_EEM_Initialize) VDM Opened!
00:00:11.886 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "CumAvgFuelEff" ignored.
00:00:11.975 VDM[336] Info (vdm_smdb.c:83 VDM_SMDB_Open) VDM SMDB opened successfully!
00:00:11.975 VDM[336] Info (vdm_eem_calc.c:331 VDM_EEM_History_SMDB_Open) VDM History SMDB opened successfully!
00:00:11.975 VDM[336] Info (vdm_eem_calc.c:349 VDM_EEM_History_SMDB_Open)  l_totsvd_fuel_prev_str 0
00:00:11.975 VDM[336] Info (vdm_main.c:126 VDM_EEM_History_Initialize) VDM History Opened!
00:00:11.979 com.jci.cpp.settings.socket[336] Info (SocketRegistry.cpp:1101 openSpecific) Connected to proxy: tcpip://
00:00:11.986 com.jci.cpp.settings[336] Note (RegistryFactory.cpp:123 createRegistry) Startup time: 00:00:00.008847333
00:00:11.994 VBS_BUS_EEM[336] Info (mod_eem.c:456 VBS_MOD_EEM_RegisterSendHandler) Setting Tx Handler
00:00:11.994 VBS_BUS_EEM[336] Info (mod_eem.c:461 VBS_MOD_EEM_RegisterSendHandler) Tx Handler is NOT NULL
00:00:12.009 VBS_BUS_DRVIDIDM[336] Info (mod_drvididm.c:174 VBS_MOD_DRVIDIDM_Initialize) Function DRVIDIDM Module Initialization initiated!
00:00:12.015 VBS_BUS_DRVIDIDM[336] Info (mod_drvididm.c:183 VBS_MOD_DRVIDIDM_Initialize) Function DRVIDIDM Module Initialization SUCCESS!
00:00:12.019 VDM[336] Info (vdm_eem_calc.c:1457 VDM_Updatejci
/tmp/root # CVD_SvdFuelRate) new fuleRate = 27500
00:00:12.049 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "BriskAssessPoint" ignored.
00:00:12.053 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "SmoothAssessPoint" ignored.
00:00:12.053 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "CluchAssessPoint" ignored.
00:00:12.053 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "ScoreTransGrph" ignored.
00:00:12.053 VDM[336] Info (vdm_smdb.c:83 VDM_SMDB_Open) VDM SMDB opened successfully!
00:00:12.053 VDM[336] Info (vdm_main.c:837 VDM_IDM_Initialize) VDM Opened!
00:00:12.053 VBS_BUS_DRVIDIDM[336] Info (mod_drvididm.c:190 VBS_MOD_DRVIDIDM_Initialize) VDM initialized successfully
00:00:12.064 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "HVD_BriskUpper" ignored.
00:00:12.069 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "HVD_BriskLower" ignored.
00:00:12.069 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "HVD_SmoothUpper" ignored.
00:00:12.069 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "HVD_SmoothLower" ignored.
00:00:12.069 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "HVD_CluchUpper" ignored.
00:00:12.069 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "HVD_CluchLower" ignored.
00:00:12.069 SMDB[336] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "HVD_InitialScore" ignored.
00:00:12.157 VDM[336] Info (vdm_smdb.c:83 VDM_SMDB_Open) VDM SMDB opened successfully!
00:00:12.157 VDM[336] Info (vdm_idm_calc.c:344 VDM_IDM_History_SMDB_Open) VDM History SMDB opened successfully!
00:00:12.157 VBS_BUS_DRVIDIDM[336] Info (mod_drvididm.c:201 VBS_MOD_DRVIDIDM_Initialize) VDM for HVD initialized successfully
00:00:12.157 VBS_BUS_DRVIDIDM[336] Info (mod_drvididm.c:254 VBS_MOD_DRVIDIDM_RegisterSendHandler) Setting Tx Handler
00:00:12.157 VBS_BUS_DRVIDIDM[336] Info (mod_drvididm.c:259 VBS_MOD_DRVIDIDM_RegisterSendHandler) Tx Handler is NOT NULL
00:00:12.187 CPP_TIME[450] Info (time_dbus_sm.cpp:220 ServiceInit)    current monotonic time : 1970.01.01 00:00:12
00:00:12.188 CPP_TIME[450] Info (time_dbus_sm.cpp:220 ServiceInit)  current system real-time : 1970.01.01 00:00:12
00:00:12.198 VBS_BUS_VWM[336] Info (mod_vwm.c:176 Initialize) Function vwm Module Initialization!
00:00:12.214 com.jci.cpp.settings.socket[336] Info (SocketRegistry.cpp:1101 openSpecific) Connected to proxy: tcpip://
00:00:12.228 com.jci.cpp.settings[336] Note (RegistryFactory.cpp:123 createRegistry) Startup time: 00:00:00.016361333
00:00:12.243 CPP_TIME[450] Info (time_dbus_service_funs.cpp:370 InitServiceSpecificsOpen) [ok] - CPP_TIME started
00:00:12.243 VBS_BUS_VDT[336] Info (mod_vdt_sm_client_subscribe.c:509 VBS_sm_client_event_handler_cb) SM_EVENT_SERVICE_STARTED CB RCVD for jciTime. Calling function from userData.
00:00:12.250 VBS_BUS_VWM[336] Info (mod_vwm.c:926 VBS_VWM_InitSettings) Value of gs_fuel_type_CPPSettingsvalue = 1
00:00:12.270 SM[213] Warn (sm_spawner.cpp:234 SM_so_spawn) User root not available in the board
00:00:12.280 com.jci.cpp.settings.socket[336] Info (SocketRegistry.cpp:1101 openSpecific) Connected to proxy: tcpip://
00:00:12.284 CPP_TIME[336] Info (time_dbus_client_funs.cpp:2304 TIME_Client_Connect) will send connect request: conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:12.287 VBS_BUS_VDT[336] Info (mod_vdt.c:620 VBS_VDT_CPPTimeConnect) VDT Connected to CPP TIME
00:00:12.288 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_Connect_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:12.290 CPP_TIME[450] Info (time_dbus_service_funs.cpp:96 HeartBeatIncrementTimerHandler) enter
00:00:12.291 CPP_TIME[450] Info (time__cpp_Timer.cpp:244 TimerProcessingFunctionHandler) enter
00:00:12.300 CPP_TIME[336] Warn (time__gen_DataMutex.hpp:785 DataLock) mx locked, WILL wait until unlocked for 0xbb728
00:00:12.301 CPP_TIME[336] Warn (time_stack_backtrace.cpp:83 __int_ShowStackBackTraceByLevel) __int_ShowStackBackTraceByLevel(TIME_debug_level_e)
00:00:12.304 CPP_TIME[336] Warn (time_stack_backtrace.cpp:83 __int_ShowStackBackTraceByLevel) com::jci::time::DataMutex::DataLock()
00:00:12.305 CPP_TIME[336] Warn (time_stack_backtrace.cpp:83 __int_ShowStackBackTraceByLevel) /jci/lib/libjcitime_client.so(+0x3b6f8)
00:00:12.308 com.jci.cpp.settings[336] Note (RegistryFactory.cpp:123 createRegistry) Startup time: 00:00:00.031449333
00:00:12.327 VBS_BUS_CAN[336] Info (mod_can.c:2529 VBS_BUS_CAN_VIM_Data_Received_Cb) Sending VIM ready notification
00:00:12.327 VBS_BUS_AM[336] Info (mod_am_manage_svc.c:1993 VBS_AM_GetVolumeStatusVolMgr) Received Request : GetVolumeStatusVolMgr
00:00:12.327 VBS_BUS_BCM[336] Info (mod_bcm_manage_svc.c:594 VBS_BCM_GetPublicCANStatus_Request) On boot up, Sending Public CAN status request to Powermon
00:00:12.327 VBS_BUS_CAN[336] Info (mod_can.c:3301 VBS_BUS_CAN_GetAccCurrentStatus_cb) ACC = ON
00:00:12.327 VBS_BUS_CDVDTV[336] Info (mod_cd.c:1110 VBS_CD_ReceiveHandler) !!! Got ACC ON !!!. Start Timer
00:00:12.327 VBS_BUS_CDVDTV[336] Info (mod_cd_manage_svc.c:5219 VBS_CD_Start_Timer) Timer gs_tmrRetryCnt = 10
00:00:12.327 VBS_BUS_CDVDTV[336] Info (mod_cd_manage_svc.c:5437 VBS_CD_Send_DVD_Config_status_Req) Posting DVD Config Status Request to VIP
00:00:12.327 VBS_BUS_CDVDTV[336] Info (mod_cd_manage_svc.c:5370 VBS_CD_Send_CD_ReadyReq) Posting CDVDTV Ready Status Request to VIP
00:00:12.327 VBS_BUS_CDVDTV[336] Info (mod_cd_manage_svc.c:5773 VBS_CD_Send_DTV_StatusReq) Posting DTV Status Request to VIP
00:00:12.327 VBS_BUS_CDVDTV[336] Info (mod_cd_manage_svc.c:5841 VBS_CD_Send_DTV_RoutineTestReq) Posting DTV RoutineTest Status Request to VIP
00:00:12.327 VBS_BUS_AM[336] Info (mod_am.c:862 VBS_AM_ReceiveHandler) Response: TAU Source Change response [SourceOn = 1, SourceOff = 1]
00:00:12.337 VBS_BUS_AM[336] Info (mod_am.c:1218 VBS_AM_ReceiveHandler) Value Received for BTHF = 400, RingTone = 480, Navi = 480
00:00:12.337 VBS_BUS_BCM[336] Info (mod_bcm_manage_svc.c:1019 VBS_BCM_Send_FuelCutOff) Received Fuel CutOff with value = 6
00:00:12.337 VBS_BUS_CAN[336] Info (mod_can_public.c:2246 VBS_BUS_CAN_Engine_Throttle_Response) Value of Speed Restriction = 0
00:00:12.337 VBS_BUS_CAN[336] Info (mod_can_public.c:2323 VBS_BUS_CAN_Engine_Throttle_Response) Value of Status Flag(>=1 km/hr)= 0
00:00:12.337 VBS_BUS_BCM[336] Info (mod_bcm.c:666 VBS_BCM_getSpeedRestconfigNVRAM) Speed Restriction: Enabled
00:00:12.337 VBS_BUS_BCM[336] Info (mod_bcm.c:513 VBS_BCM_ReceiveHandler) The value received for speed restriction at VBS BCM Plugin = 0 for destination = 0
00:00:12.337 VBS_BUS_BCM[336] Info (mod_bcm_manage_svc.c:1517 VBS_BCM_Send_NoSpeedRestrict_TouchDisplay) Speed Restrict successfully posted on HMI DBus for Touch screen with restrict = 0
00:00:12.337 VBS_BUS_BCM[336] Info (mod_bcm_manage_svc.c:1529 VBS_BCM_Send_NoSpeedRestrict_TouchDisplay) Speed Restrict successfully posted on Service DBus for Touch screen with restrict = 0
00:00:12.337 VBS_BUS_BCM[336] Info (mod_bcm_manage_svc.c:1152 VBS_BCM_Send_PublicCanStatus) Sending Public CAN Status on Service DBus with value = 1
00:00:12.337 SYSTEM[275] Info (state_machine.cpp:729 system_smm_LogVbsEventInfo) CAN is active!
00:00:12.337 VDM[336] Warn (vdm_vdt_current_calc.c:8909 VDM_UpdateCVD_CstmzStat_KylssWal_OnOff) Invalid value for CVD.CstmzStat_KylssWal_OnOff!
00:00:12.337 SYSTEM[275] Info (state_machine.cpp:1959 system_smm_TopStateHandler) VBS service started!
00:00:12.337 SYSTEM[275] Info (state_machine.cpp:1440 system_smm_TryInitializeAudio) Still waiting for audio manager start!
00:00:12.337 SYSTEM[275] Info (state_machine.cpp:744 system_smm_LogVbsEventInfo) Ignition on with ACC ON!
00:00:12.337 VBS_BUS_BCM[336] Info (mod_bcm_manage_svc.c:528 VBS_BCM_GetPublicCanStatus_svc) Get Public CAN Status returned with value = 1
00:00:12.337 SYSTEM[275] Info (state_machine.cpp:729 system_smm_LogVbsEventInfo) CAN is active!
00:00:12.355 VIDEOCTRL[270] Info (vctrl_vbs.c:212 VCTRL2CPP_VBS_ChangeDTC) Clear Fault
00:00:12.355 VBS_BUS_DIAG[336] Info (mod_diag_manage_svc.c:966 VBS_DIAG_ClearFaults_Request_svc) Number of Faults passed to ClearFaultsRequest  : 1
00:00:12.355 VBS_BUS_DIAG[336] Info (mod_diag_manage_svc.c:979 VBS_DIAG_ClearFaults_Request_svc) Fault 1 is 15  - REAR_CAMERA_PWR_SOURCE
00:00:12.355 VBS_BUS_DIAG[336] Info (mod_diag_manage_svc.c:2172 VBS_SendSignal_ClearDTCResp) Current page : 0, Total page : 0  and Response Length is 4
00:00:12.355 VBS_BUS_DIAG[336] Info (mod_diag_manage_svc.c:2282 VBS_SendSignal_ClearDTCResp) Fault ID is 15 - REAR_CAMERA_PWR_SOURCE and fault status is 1
00:00:12.361 SM[213] Warn (sm_spawner.cpp:234 SM_so_spawn) User root not available in the board
00:00:12.389 VBS_BUS_CAN[336] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:00:12.389 VBS_BUS_CAN[336] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:00:12.389 VBS_BUS_CAN[336] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:00:12.389 VBS_BUS_CAN[336] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:00:12.389 SM[213] Warn (sm_spawner.cpp:234 SM_so_spawn) User root not available in the board
00:00:12.389 RADIO_DB[336] Info (radiodb_interface.c:375 RADIO_DB_Open)    File exists in flash
00:00:12.389 RADIO_DB[336] Info (radiodb_core.c:674 db_copy_file) Copy: src: /data/radio/radio_database, dest: /tmp
00:00:12.389 SM[213] Warn (sm.cpp:3189 SM_StartNeededService) User root not available in the board
00:00:12.455 SM[213] Warn (sm.cpp:3189 SM_StartNeededService) User root not available in the board
00:00:12.467 VBS_BUS_CDVDTV[336] Info (mod_cd_manage_svc.c:5293 VBS_CD_Start_Timer) Timer Started : [CDTimerRetryCnt in decrement order = 10]
00:00:12.480 Std[] Error (: )  Compiled with SSL support, not using it
00:00:12.513 VBS_BUS_SETTINGS[336] Info (mod_settings_manage_svc.c:10562 VBS_SETTINGS_reqForHUDTiltLvlReqVal) Sending request for HUD Tilt Lvl Req value
00:00:12.513 VBS_BUS_RADIO[336] Info (mod_radio_manage_svc.c:11554 vbs_radio_Start_TAU_Status_Timer) TAU Status Timer is already running
00:00:12.513 VBS_BUS_RADIO[336] Info (mod_radio_manage_svc.c:8323 VBS_RADIO_UpdateTAUConnectStandbyStat) Value of TAU connect Standy status is 1
00:00:12.513 VBS_BUS_RADIO[336] Info (mod_radio_manage_svc.c:8376 VBS_RADIO_UpdateTAUConnectStandbyStat) g_tauConnectedFileExists=0, Sending actual received TAU status to BLM.
00:00:12.513 SYSTEM[275] Info (state_machine.cpp:704 system_smm_LogVbsRadioEventInfo) Tau is connected!
00:00:12.513 SYSTEM[275] Info (state_machine.cpp:2015 system_smm_TopStateHandler) Still waiting for audio manager to get running...
00:00:12.513 BLM_SETTINGS[386] Info (settings_vbs_interface.cpp:2553 BLM_SETTINGS_SSU_Status_Notification_cb) SSU Status notification received type - 0 value - 0
00:00:12.513 BLM_SETTINGS[386] Info (settings_vbs_interface.cpp:2558 BLM_SETTINGS_SSU_Status_Notification_cb) SSU Status notification received type - 1 value - 3
00:00:12.513 BUCPSA[326] Info (bucpsa_psm_handler.c:84 BUCPSA_InjectSensorData) PSM Update: Status=OFF, SystemError=FALSE, Sensors=[0,0,0,0,0,0], Variation=0, DisplayRequest=OFF
00:00:12.513 BUCPSA[326] Info (bucpsa_steng.c:214 BUCPSA_StengPostMessage) Posting event 'BUCPSA_PSA_EVT' into state 'Default_State'
00:00:12.513 BUCPSA[326] Info (bucpsa_steng.c:381 bucpsa_Default_EventHandler) PSM System Status = Off (0)
00:00:12.513 VBS_BUS_CAN[336] Info (mod_can_public.c:2246 VBS_BUS_CAN_Engine_Throttle_Response) Value of Speed Restriction = 0
00:00:12.513 VBS_BUS_DRVIDIDM[336] Info (mod_drvididm_timers.c:65 VBS_DRVIDIDM_Initialize_Timer) checked for gs_firstboot_tmr false condition
00:00:12.513 VDM[336] Info (vdm_eem_calc.c:3865 VDM_UpdateTotal_Distance) Total_Distance value saved as <967092>!
00:00:12.513 VBS_BUS_BCM[336] Info (mod_bcm_manage_svc.c:1443 VBS_BCM_Send_IgnitionControl_Status) Sending Ignition Control Status on Service and HMI DBus with value = 4
00:00:12.513 VBS_BUS_BCM[336] Info (mod_bcm.c:666 VBS_BCM_getSpeedRestconfigNVRAM) Speed Restriction: Enabled
00:00:12.513 VBS_BUS_BCM[336] Info (mod_bcm.c:513 VBS_BCM_ReceiveHandler) The value received for speed restriction at VBS BCM Plugin = 0 for destination = 0
00:00:12.513 VDM[336] Info (vdm_eem_calc.c:3152 VDM_ClearEEMData)  CLEARING DATA....
00:00:12.513 VBS_BUS_VDT[336] Info (mod_vdt.c:2110 vbs_vdt_StartDataLogging) Filtered signals updation complete. Starting normal operation
00:00:12.513 VBS_BUS_RADIO[336] Info (mod_radio_manage_svc.c:11601 vbs_radio_Stop_TAU_Status_Timer) TAU request timer stopped
00:00:12.513 VBS_BUS_CAN[336] Info (mod_can_public.c:2323 VBS_BUS_CAN_Engine_Throttle_Response) Value of Status Flag(>=1 km/hr)= 0
00:00:12.513 VBS_BUS_BCM[336] Info (mod_bcm_manage_svc.c:1517 VBS_BCM_Send_NoSpeedRestrict_TouchDisplay) Speed Restrict successfully posted on HMI DBus for Touch screen with restrict = 0
00:00:12.513 VBS_BUS_BCM[336] Info (mod_bcm_manage_svc.c:1529 VBS_BCM_Send_NoSpeedRestrict_TouchDisplay) Speed Restrict successfully posted on Service DBus for Touch screen with restrict = 0
00:00:12.513 VBS_BUS_VWM[336] Error (mod_vwm.c:982 VBS_VWM_Write_Fuel_Type) Fuel Type already updated in this Cycle until Factory reset
00:00:12.513 VBS_BUS_EEM[336] Error (mod_eem.c:2043 VBS_EEM_Write_Fuel_Type) Fuel Type already updated in this Cycle untill Factory reset
00:00:12.513 VBS_BUS_NAVI[336] Info (mod_navi_manage_svc.c:286 VBS_NAVI_SendSignal_FuelType) Sending the Fuel Type response signal on dbus with value = 1
00:00:12.513 BUCPSA[326] Info (bucpsa_psm_handler.c:84 BUCPSA_InjectSensorData) PSM Update: Status=OFF, SystemError=FALSE, Sensors=[0,0,0,0,0,0], Variation=0, DisplayRequest=OFF
00:00:12.513 BUCPSA[326] Info (bucpsa_steng.c:214 BUCPSA_StengPostMessage) Posting event 'BUCPSA_PSA_EVT' into state 'Default_State'
00:00:12.513 BUCPSA[326] Info (bucpsa_steng.c:381 bucpsa_Default_EventHandler) PSM System Status = Off (0)
00:00:12.513 VBS_BUS_VDT[336] Info (mod_vdt_ind_lamp_timer.c:223 VBS_VDT_Initialize_100MS_Timer) VBS_VDT_Initialize_100MS_Timer
00:00:12.513 VBS_BUS_DRVIDIDM[336] Info (mod_drvididm_timers.c:77 VBS_DRVIDIDM_Initialize_Timer) Timer started Successfully
00:00:12.513 VDM[336] Info (vdm_idm_calc.c:4688 VDM_Update_All_CVD_Data2zero) Entered VDM_Update_All_CVD_Data2zero************
00:00:12.513 VDM[336] Info (vdm_idm_calc.c:5631 VDM_Update_CurrSCR_CVDs_as_ZERO) Entered VDM_Update_CurrSCR_CVDs_as_ZERO************
00:00:12.585 Std[] Error (: )  Compiled with SSL support, not using it
00:00:12.664 VBS_BUS_VDT[336] Error (mod_vdt.c:2211 VBS_VDT_Write_Fuel_Type) Fuel Type already updated in this Cycle until Factory reset
00:00:12.664 BLM_SETTINGS[386] Warn (settings_service_funs.cpp:8589 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:00:12.664 BLM_SETTINGS[386] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/Keyless/WalkawayLock <!> Value is not in range
00:00:12.690 SM[213] Warn (sm.cpp:3189 SM_StartNeededService) User root not available in the board
00:00:12.690 VBS_BUS_SETTINGS[336] Info (mod_settings_manage_svc.c:7771 VBS_SETTINGS_HECIllumination_Status) Posting Parking Brake Signal with value = 1 on Service DBus
00:00:12.690 VBS_BUS_SETTINGS[336] Info (mod_settings_manage_svc.c:7797 VBS_SETTINGS_HECIllumination_Status) Posting Dimmer Cancel Signal with value = 1 on Service DBus
00:00:12.690 VBS_BUS_SETTINGS[336] Info (mod_settings_manage_svc.c:7823 VBS_SETTINGS_HECIllumination_Status) Posting Panel Brightness Level Signal with value = 100 on Service DBus
00:00:12.713 SM[213] Warn (sm.cpp:3189 SM_StartNeededService) User root not available in the board
00:00:12.730 VBS_BUS_SETTINGS[336] Info (mod_settings_manage_svc.c:7856 VBS_SETTINGS_HECIllumination_Status) Posting Low Speed CMB /SCBS Signal with value = 1 on Service DBus
00:00:12.730 RADIO_DB[336] Error (radiodb_interface.c:1423 RADIO_DB_FM_UpdateMetadata) radio handle is null
00:00:12.730 VBS_BUS_RADIO[336] Error (mod_radio_manage_svc.c:12022 vbs_radio_clearTextData) Sending the Text_Notification response signal on dbus resulted an error.
00:00:12.730 RADIO_DB[336] Error (radiodb_interface.c:1572 RADIO_DB_FM_ClearMetadata) radio handle null
00:00:12.730 VBS_BUS_RADIO[336] Error (mod_radio_manage_svc.c:4191 VBS_RADIO_SendSignal_RadioControl) Failed to Clear FM Metadata Error Status 1
00:00:12.730 RADIO_DB[336] Error (radiodb_interface.c:1972 RADIO_DB_AM_ClearMetadata) radio handle null
00:00:12.730 VBS_BUS_RADIO[336] Error (mod_radio_manage_svc.c:4198 VBS_RADIO_SendSignal_RadioControl) Failed to Clear AM Metadata Error Status 1
00:00:12.730 VBS_BUS_SETTINGS[336] Info (mod_settings_manage_svc.c:10504 VBS_SETTINGS_SendHUDTiltLvlReqVal) Successfully posted on service DBus for TiltLvlReqVal = 14
00:00:12.730 VBS_BUS_SETTINGS[336] Info (mod_settings.c:1327 VBS_SETTINGS_ReceiveHandler) Received HUD Intens CNT Response with Value = 2
00:00:12.766 VBS_BUS_SETTINGS[336] Info (mod_settings.c:1335 VBS_SETTINGS_ReceiveHandler) Received HUD Auto Int Con On/Off Response with Value = 0
00:00:12.766 VBS_BUS_SETTINGS[336] Info (mod_settings.c:1351 VBS_SETTINGS_ReceiveHandler) Received HUD ManInt Cnt Level Response at MOD_SETTINGS = 20 = 0
00:00:12.809 Std[] Error (: )  Listening on port 2800
00:00:12.824 VBS_BUS_DIAG[336] Info (mod_diag.c:375 ReceiveHandler) Received GCC Config Management at MOD_DIAG: CMU TYPES  is: 2 driveChart_Log_Distance:0 destination_1 :0 destination_2:0 driveChart_Display:0 driveChart_DataTrans:0 myDoctor_Display:0 driverIdentification:0 stDis_IDM_Req:0 endDis_IDM_Req:0 stDis_Eco_Req:1 endDis_Eco_Req:1 custmzDisp_SW:2
00:00:12.824 VBS_BUS_DIAG[336] Info (mod_diag_manage_svc.c:2847 VBS_SendSignal_GCC_ConfigMgmtResp) Received GCC Config Management at MOD_DIAG:Destination is:0  CMU TYPES  is: 2 driveChart_Log_Distance:0 destination_1 :0 destination_2:0 driveChart_Display:0 driveChart_DataTrans:0 myDoctor_Display:0 driverIdentification:0 stDis_IDM_Req:0 endDis_IDM_Req:0 stDis_Eco_Req:1 endDis_Eco_Req:1 custmzDisp_SW:2
00:00:12.824 VBS_BUS_DRVIDIDM[336] Warn (mod_drvididm.c:335 VBS_MOD_DRVIDIDM_ReceiveHandler) Transmission of signal VBS_DRVIDIDM_Send_StDis_IDM_Req failed
00:00:12.824 VBS_BUS_DRVIDIDM[336] Warn (mod_drvididm.c:342 VBS_MOD_DRVIDIDM_ReceiveHandler) Transmission of signal VBS_DRVIDIDM_Send_EndDis_IDM_Req failed
00:00:12.824 VBS_BUS_DRVIDIDM[336] Info (mod_drvididm_manage_svc.c:356 VBS_DRVIDIDM_Send_DriverIdentification)   ***** DriverID BLM is not yet started....!!!!
00:00:12.824 VBS_BUS_DRVIDIDM[336] Warn (mod_drvididm.c:351 VBS_MOD_DRVIDIDM_ReceiveHandler) Transmission of signal VBS_DRVIDIDM_Send_DriverIdentification failed
00:00:12.824 VBS_BUS_SETTINGS[336] Info (mod_settings_manage_svc.c:6520 VBS_SETTINGS_GCC_ConfigMgtm_BlockBF11) Sending GCC Config Management with DSP_mic = 0
00:00:12.824 BUCPSA[326] Info (bucpsa_interface.c:913 bucpsa_ProcessGCCNotification) Received HiCamera = 0
00:00:12.838 Std[] Error (: )  Listening on port 2766
00:00:12.845 BLM_SETTINGS[386] Info (settings_vbs_interface.cpp:2563 BLM_SETTINGS_SSU_Status_Notification_cb) SSU Status notification received type - 2 value - 1
00:00:12.845 BLM_SETTINGS[386] Info (settings_vbs_interface.cpp:2568 BLM_SETTINGS_SSU_Status_Notification_cb) SSU Status notification received type - 3 value - 0
00:00:12.845 BLM_SETTINGS[386] Info (settings_vbs_interface.cpp:2262 BLM_SETTINGS_RBCM_Status_Notification_cb) RBCM Status notification received type - 0 value - 1
00:00:12.845 BLM_SETTINGS[386] Info (settings_vbs_interface.cpp:2292 BLM_SETTINGS_RBCM_Status_Notification_cb) RBCM Status notification received type - 1 value - 1
00:00:12.845 BLM_SETTINGS[386] Info (settings_vbs_interface.cpp:2297 BLM_SETTINGS_RBCM_Status_Notification_cb) RBCM Status notification received type - 2 value - 3
00:00:12.845 BLM_SETTINGS[386] Info (settings_vbs_interface.cpp:2302 BLM_SETTINGS_RBCM_Status_Notification_cb) RBCM Status notification received type - 3 value - 2
00:00:12.845 BLM_SETTINGS[386] Info (settings_vbs_interface.cpp:2307 BLM_SETTINGS_RBCM_Status_Notification_cb) RBCM Status notification received type - 4 value - 2
00:00:12.845 BLM_SETTINGS[386] Info (settings_vbs_interface.cpp:2312 BLM_SETTINGS_RBCM_Status_Notification_cb) RBCM Status notification received type - 5 value - 0
00:00:12.845 BLM_SETTINGS[386] Info (settings_vbs_interface.cpp:2322 BLM_SETTINGS_RBCM_Status_Notification_cb) RBCM Status notification received type - 6 value - 0
00:00:12.845 BLM_SETTINGS[386] Info (settings_vbs_interface.cpp:2317 BLM_SETTINGS_RBCM_Status_Notification_cb) RBCM Status notification received type - 7 value - 0
00:00:12.845 BLM_SETTINGS[386] Info (settings_vbs_interface.cpp:2277 BLM_SETTINGS_RBCM_Status_Notification_cb) RBCM Status notification received type - 8 value - 0
00:00:12.850 BLM_SETTINGS[386] Info (settings_vbs_interface.cpp:2328 BLM_SETTINGS_RBCM_Status_Notification_cb) RBCM Status notification received type - 10 value - 0
00:00:12.850 BLM_SETTINGS[386] Info (settings_vbs_interface.cpp:2333 BLM_SETTINGS_RBCM_Status_Notification_cb) RBCM Status notification received type - 11 value - 0
00:00:12.850 BLM_SETTINGS[386] Info (settings_vbs_interface.cpp:2338 BLM_SETTINGS_RBCM_Status_Notification_cb) RBCM Status notification received type - 12 value - 0
00:00:12.850 BLM_SETTINGS[386] Info (settings_vbs_interface.cpp:2824 BLM_SETTINGS_CMU_Status_Notification_cb) CMU Control Status notification received type - 0 value - 4
00:00:12.850 BLM_SETTINGS[386] Info (settings_vbs_interface.cpp:2829 BLM_SETTINGS_CMU_Status_Notification_cb) CMU Control Status notification received type - 1 value - 2
00:00:12.850 BLM_SETTINGS[386] Info (settings_vbs_interface.cpp:2834 BLM_SETTINGS_CMU_Status_Notification_cb) CMU Control Status notification received type - 3 value - 2
00:00:12.894 DBAPI[448] Info (dbapi_plugins.c:777 addPluginForProcessing) pluginsForProcessing size insufficient. Increasing from 0 to 5.
00:00:12.896 DBAPI[448] Info (dbapi_plugins.c:794 addPluginForProcessing) Reallocation successful. pluginsForProcessingStart = 0; pluginsForProcessingSize = 5.
00:00:12.915 DBAPI[448] Info (dbapi_plugins.c:1129 pluginManager) Plugin manager thread started.
00:00:12.926 DBAPI[448] Info (dbapi_plugins.c:1225 pluginManager) connect to Service manager
00:00:12.926 DBAPI[448] Info (dbapi_plugins.c:1250 pluginManager) Connecting to SM.
00:00:12.946 RADIO_DB[336] Info (radiodb_interface.c:380 RADIO_DB_Open) Database from flash is loaded to RAM
00:00:12.961 RADIO_DB[336] Error (radiodb_interface.c:3633 radio_DB_GetAllTables) Error executing the query "SELECT name FROM sqlite_master WHERE type='table'": file is encrypted or is not a database !
00:00:12.990 DBAPI[448] Info (dbapi_plugins.c:1277 pluginManager) subscribe to sm to receive dependency service started event
00:00:12.992 DBAPI[448] Info (dbapi_plugins.c:1327 pluginManager) Subscribing to SM for events.
00:00:12.994 DBAPI[448] Info (dbapi_plugins.c:1357 pluginManager) check if dependency are already running
00:00:12.994 DBAPI[448] Info (dbapi_plugins.c:1396 pluginManager) Asking SM for currently running dependencies.
00:00:12.994 DBAPI[448] Info (dbapi_plugins.c:1425 pluginManager) start processing plugins
00:00:12.994 DBAPI[448] Info (dbapi_plugins.c:919 getNextPluginForProcessing) Returning element with index 0
00:00:12.994 DBAPI[448] Info (dbapi_plugins.c:1443 pluginManager) subscribed for wdm
00:00:12.997 DBAPI[448] Info (dbapi_plugins.c:1451 pluginManager) initialize plugin
00:00:12.997 DBAPI[448] Warn (dbapi_plugins.c:1555 pluginManager) pb is not initialized.
00:00:12.997 DBAPI[448] Info (dbapi_plugins.c:1425 pluginManager) start processing plugins
00:00:12.997 DBAPI[448] Info (dbapi_plugins.c:919 getNextPluginForProcessing) Returning element with index 1
00:00:12.997 DBAPI[448] Info (dbapi_plugins.c:1443 pluginManager) subscribed for wdm
00:00:12.997 DBAPI[448] Info (dbapi_plugins.c:1451 pluginManager) initialize plugin
00:00:12.997 DBAPI[448] Info (dbapi_plugins.c:1484 pluginManager) if no dependency initialize plugin actually here
00:00:12.997 DBAPI[448] Info (dbapi_plugins.c:594 loadAndInitPlugin) Loading plugin radio.
00:00:12.997 DBAPI[448] Info (dbapi_plugins.c:636 loadAndInitPlugin) callig dlopen
00:00:13.056 VBS_BUS_RADIO[336] Info (mod_radio_manage_svc.c:5353 VBS_RADIO_SendSignal_RDS_Message) VBS_NewDataReceived_Status = 1, VBS_RDS_Message = 1
00:00:13.070 VBS_BUS_AM[336] Info (mod_am.c:897 VBS_AM_ReceiveHandler) Response: EventMute_Off UnMute Status [Mute Type = 2]
00:00:13.070 VBS_BUS_SETTINGS[336] Info (mod_settings_manage_svc.c:7958 VBS_SETTINGS_BoseConnectionStatus) Posting Bose Connect Status signal on dbus with Bose Status = 0
00:00:13.070 VBS_BUS_AM[336] Info (mod_am.c:924 VBS_AM_ReceiveHandler) Response: SoftMute_On Mute Status [Mute Type = 1]
00:00:13.070 VBS_BUS_AM[336] Info (mod_am.c:976 VBS_AM_ReceiveHandler) Response: SysMute_Off UnMute Status [Mute Type = 3]
00:00:13.070 VBS_BUS_AM[336] Info (mod_am.c:655 VBS_AM_ReceiveHandler) Received: VOLUME ID Step Value = 28
00:00:13.070 VBS_BUS_AM[336] Info (mod_am.c:672 VBS_AM_ReceiveHandler) Response: VOLUME ID Volume Status [VolumeValue = 448]
00:00:13.070 VBS_BUS_AM[336] Info (mod_am.c:1004 VBS_AM_ReceiveHandler) Response: AUTOPILOT Audio Profile Status [Profile Value = 0]
00:00:13.070 VBS_BUS_AM[336] Info (mod_am.c:1026 VBS_AM_ReceiveHandler) Response: CENTERPOINT Audio Profile Status [Profile Value = 0]
00:00:13.070 VBS_BUS_AM[336] Info (mod_am.c:1042 VBS_AM_ReceiveHandler) Value received for AMP TYPES - 0
00:00:13.070 VBS_BUS_AM[336] Info (mod_am.c:691 VBS_AM_ReceiveHandler) Received: BASS Step Value = -3
00:00:13.070 VBS_BUS_AM[336] Info (mod_am.c:709 VBS_AM_ReceiveHandler) Response: BASS Audio Profile Status [Profile Value = -255]
00:00:13.070 VBS_BUS_AM[336] Info (mod_am.c:728 VBS_AM_ReceiveHandler) Received: TREBLE Step Value = 2
00:00:13.070 VBS_BUS_AM[336] Info (mod_am.c:745 VBS_AM_ReceiveHandler) Response: TREBLE Audio Profile Status [Profile Value = 170]
00:00:13.070 VBS_BUS_AM[336] Info (mod_am.c:763 VBS_AM_ReceiveHandler) Received: BALANCE Step Value = 0
00:00:13.070 VBS_BUS_AM[336] Info (mod_am.c:779 VBS_AM_ReceiveHandler) Response: BALANCE Audio Profile Status [Profile Value = 0]
00:00:13.070 VBS_BUS_AM[336] Info (mod_am.c:797 VBS_AM_ReceiveHandler) Received: FADER Step Value = 0
00:00:13.070 VBS_BUS_AM[336] Info (mod_am.c:813 VBS_AM_ReceiveHandler) Response: FADER Audio Profile Status [Profile Value = 0]
00:00:13.070 VBS_BUS_AM[336] Info (mod_am.c:830 VBS_AM_ReceiveHandler) Received: ASL Step Value = 4
00:00:13.070 VBS_BUS_AM[336] Info (mod_am.c:837 VBS_AM_ReceiveHandler) Response: ASL Audio Profile Status [Profile Value = 584]
00:00:13.070 VBS_BUS_AM[336] Info (mod_am.c:1105 VBS_AM_ReceiveHandler) Response: Source Select[SourceIndex = FM, InterruptIndex = NONE
00:00:13.120 BLM_SETTINGS[386] Info (settings_vbs_interface.cpp:3082 BLM_SETTINGS_Vehicle_VIN_Notification) Vehicle VIN notification received [JM1BM1T79G1319820][19]
00:00:13.127 DBAPI[448] Info (dbapi_plugins.c:653 loadAndInitPlugin) calling dlsym
00:00:13.133 BLM_SETTINGS[386] Info (settings_vbs_interface.cpp:14763 BLM_SETTINGS_PrioritizeAndSetDestination) Valid destination 2 found in table.
00:00:13.133 BLM_SETTINGS[386] Info (settings_vbs_interface.cpp:14773 BLM_SETTINGS_PrioritizeAndSetDestination) No change of destination is needed, it will remain 2
00:00:13.133 BLM_SETTINGS[386] Info (settings_vbs_interface.cpp:2391 BLM_SETTINGS_HEC_Status_Notification_cb) HEC Status notification received type - 1 value - 2
00:00:13.133 BLM_SETTINGS[386] Info (settings_vbs_interface.cpp:2396 BLM_SETTINGS_HEC_Status_Notification_cb) HEC Status notification received type - 2 value - 1
00:00:13.133 BLM_SETTINGS[386] Info (settings_vbs_interface.cpp:2401 BLM_SETTINGS_HEC_Status_Notification_cb) HEC Status notification received type - 3 value - 1
00:00:13.133 BLM_SETTINGS[386] Info (settings_vbs_interface.cpp:2406 BLM_SETTINGS_HEC_Status_Notification_cb) HEC Status notification received type - 4 value - 2
00:00:13.133 BLM_SETTINGS[386] Info (settings_vbs_interface.cpp:2411 BLM_SETTINGS_HEC_Status_Notification_cb) HEC Status notification received type - 5 value - 3
00:00:13.133 BLM_SETTINGS[386] Info (settings_vbs_interface.cpp:2416 BLM_SETTINGS_HEC_Status_Notification_cb) HEC Status notification received type - 6 value - 3
00:00:13.133 BLM_SETTINGS[386] Info (settings_vbs_interface.cpp:2421 BLM_SETTINGS_HEC_Status_Notification_cb) HEC Status notification received type - 7 value - 3
00:00:13.133 BLM_SETTINGS[386] Info (settings_vbs_interface.cpp:2426 BLM_SETTINGS_HEC_Status_Notification_cb) HEC Status notification received type - 8 value - 3
00:00:13.133 BLM_SETTINGS[386] Info (settings_vbs_interface.cpp:2431 BLM_SETTINGS_HEC_Status_Notification_cb) HEC Status notification received type - 13 value - 0
00:00:13.133 BLM_SETTINGS[386] Info (settings_vbs_interface.cpp:2751 BLM_SETTINGS_PSM_Status_Notification_cb) PSM Status notification received type - 2 value - 0
00:00:13.133 BLM_SETTINGS[386] Info (settings_vbs_interface.cpp:2901 BLM_SETTINGS_HECIllumination_Status_Notification_cb) HEC Illumination Status notification received type - 12 value - 1
00:00:13.133 VBS_BUS_SETTINGS[336] Info (mod_settings_manage_svc.c:2469 VBS_SETTINGS_SetCMUControlReq_svc) Posting CMU Control Request for SCBS with Type = 13 and Value = 1
00:00:13.133 BLM_SETTINGS[386] Warn (settings_vbs_interface.cpp:10344 BLM_SETTINGS_Set_VBS_Vehicle_cb) UserData is 0
00:00:13.156 DBAPI[448] Info (dbapi_plugins.c:679 loadAndInitPlugin)  calling real plugin method
00:00:13.156 DBAPI[448] Info (dbapi_plugins.c:699 loadAndInitPlugin) Plugin radio (/jci/dbapi/plugins/libdbapiradio.so) loaded and initialized.
00:00:13.156 DBAPI[448] Info (dbapi_plugins.c:1500 pluginManager) got initialized so its running
00:00:13.156 DBAPI[448] Info (dbapi_plugins.c:1506 pluginManager) tickle wdm
00:00:13.156 DBAPI[448] Info (dbapi_plugins.c:1425 pluginManager) start processing plugins
00:00:13.156 DBAPI[448] Info (dbapi_plugins.c:914 getNextPluginForProcessing) Plugin queue is empty.
00:00:13.221 VBS_BUS_SETTINGS[336] Info (mod_settings_manage_svc.c:5836 VBS_SETTINGS_GCC_ConfigMgtm_BlockC103) Received GCC Config Management with Vehicle Type = 54
00:00:13.221 VBS_BUS_SETTINGS[336] Info (mod_settings_manage_svc.c:5870 VBS_SETTINGS_GCC_ConfigMgtm_BlockC103) Received GCC Config Management with Brand = 7
00:00:13.276 BLM_SETTINGS[386] Warn (settings_service_funs.cpp:8631 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:00:13.276 BLM_SETTINGS[386] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/Keyless/BuzzerAnswerVolume <!> Value is not in range
00:00:13.342 BLM_SETTINGS[386] Warn (settings_service_funs.cpp:8631 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:00:13.342 BLM_SETTINGS[386] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/SafetyConvenience/AutoDoorLockChimeVolume <!> Value is not in range
00:00:13.390 VBS_BUS_CDVDTV[336] Info (mod_cd_manage_svc.c:5219 VBS_CD_Start_Timer) Timer gs_tmrRetryCnt = 9
00:00:13.390 VBS_BUS_CDVDTV[336] Info (mod_cd_manage_svc.c:5437 VBS_CD_Send_DVD_Config_status_Req) Posting DVD Config Status Request to VIP
00:00:13.390 VBS_BUS_CDVDTV[336] Info (mod_cd_manage_svc.c:5370 VBS_CD_Send_CD_ReadyReq) Posting CDVDTV Ready Status Request to VIP
00:00:13.390 VBS_BUS_CDVDTV[336] Info (mod_cd_manage_svc.c:5841 VBS_CD_Send_DTV_RoutineTestReq) Posting DTV RoutineTest Status Request to VIP
00:00:13.390 VBS_BUS_CDVDTV[336] Info (mod_cd_manage_svc.c:5773 VBS_CD_Send_DTV_StatusReq) Posting DTV Status Request to VIP
00:00:13.429 VBS_BUS_CDVDTV[336] Info (mod_cd_manage_svc.c:5293 VBS_CD_Start_Timer) Timer Started : [CDTimerRetryCnt in decrement order = 9]
00:00:13.498 CPP_APPSDK[446] Info (appsdk_net.c:380 APPSDK_SendDataToGUI) APPSDK NET: Sending 410 bytes to GUI: "{"msgType":"JSPlugInLoadList","pluginList":[{"plugInName":"msg","serviceId":1,"JSLibName":"libjcipluginmsg.js"},{"plugInName":"fav","serviceId":2,"JSLibName":"libjcipluginfav.js"},{"plugInName":"usbm","serviceId":3,"JSLibName":"libjcipluginusbm.js"},{"plugInName":"navifav","serviceId":4,"JSLibName":"libjcipluginnavifav.js"},{"plugInName":"cd","serviceId":5,"JSLibName":"libjcipluginncd.js"}],"plugInCount":5}"
00:00:13.519 SM[213] Warn (sm.cpp:3189 SM_StartNeededService) User root not available in the board
00:00:13.720 VBS_BUS_DIAG[336] Info (mod_diag.c:331 ReceiveHandler) Received GCC Config Management at MOD_DIAG: destination is: 2
00:00:13.720 VBS_BUS_DIAG[336] Info (mod_diag_manage_svc.c:2847 VBS_SendSignal_GCC_ConfigMgmtResp) Received GCC Config Management at MOD_DIAG:Destination is:2  CMU TYPES  is: 2 driveChart_Log_Distance:0 destination_1 :0 destination_2:0 driveChart_Display:0 driveChart_DataTrans:0 myDoctor_Display:0 driverIdentification:0 stDis_IDM_Req:0 endDis_IDM_Req:0 stDis_Eco_Req:1 endDis_Eco_Req:1 custmzDisp_SW:2
00:00:13.720 VBS_BUS_BCM[336] Info (mod_bcm_manage_svc.c:951 VBS_BCM_Send_CarSpeedThreshold) Speed Restrict successfully posted on HMI DBus for NA/Japan with restrict = 0
00:00:13.720 VBS_BUS_BCM[336] Info (mod_bcm_manage_svc.c:962 VBS_BCM_Send_CarSpeedThreshold) Speed Restrict successfully posted on Service DBus for NA/Japan with restrict = 0
00:00:13.752 USBDTC[534] Info (usbdtc_main.cpp:96 ServiceInit) Args:[pwr]; USE_USBVBUSPOWER_RECOVERY=[1]
00:00:13.759 BLM_SETTINGS[386] Warn (settings_service_funs.cpp:8589 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:00:13.762 BLM_SETTINGS[386] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/SafetyConvenience/AutoWiper <!> Value is not in range
00:00:13.773 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:13.778 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:13.795 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:13.795 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:13.858 BLM_SETTINGS[386] Warn (settings_service_funs.cpp:8631 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:00:13.858 BLM_SETTINGS[386] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/Headlights/HBC_AutoSensitivity <!> Value is not in range
00:00:13.871 BLM_SETTINGS[534] Info (settings_client_funs.cpp:712 BLM_SETTINGS_Client_Connect) com.jci.settings_client_usbdtc
00:00:13.883 BLM_SETTINGS[386] Info (settings_service_funs.cpp:1269 SETTINGS_Connect_svc) connecting client:com.jci.settings_client_usbdtc
00:00:13.899 BLM_SETTINGS[534] Info (settings_client_funs.cpp:422 BLM_SEETINGS_Connect_cb) Client Name [com.jci.settings_client_usbdtc]
00:00:13.900 BLM_SETTINGS[534] Warn (settings_client_funs.cpp:479 BLM_SEETINGS_Connect_cb) Connection call-back pointer is null -  no call-back!
00:00:13.905 BLM_SETTINGS[534] Info (settings_client_funs.cpp:1530 SETTINGS_Client_Get_S16) com/jci/maz/cmu/Region
00:00:13.906 BLM_SETTINGS[534] Info (settings_client_funs.cpp:1559 SETTINGS_Client_ExtGet_S16) client [com.jci.settings_client_usbdtc] com/jci/maz/cmu/Region
00:00:13.908 BLM_SETTINGS[386] Info (settings_service_funs.cpp:5921 SETTINGS_Get_Settings_S16_svc) key path : /1/com/jci/maz/cmu/Region
00:00:13.911 BLM_SETTINGS[386] Warn (settings_service_funs.cpp:8589 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:00:13.911 BLM_SETTINGS[386] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/Headlights/DRL <!> Value is not in range
00:00:13.958 BLM_SETTINGS[386] Warn (settings_service_funs.cpp:8631 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:00:13.958 BLM_SETTINGS[386] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/SafetyConvenience/AutoDoorLockMT <!> Value is not in range
00:00:13.997 CPP_TIME[521] Info (time_dbus_client_funs.cpp:2304 TIME_Client_Connect) will send connect request: conn 0x4af38 : dbus 0x4dc20 : name com.jci.BLM_TIME_TO_CPP_TIME
00:00:14.006 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_Connect_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:14.022 CPP_TIME[521] Info (time_dbus_client_funs.cpp:3443 TIME_Client_RegisterForDatetimeChangeEvent) request to cpp_time : conn 0x4af38 : dbus 0x4dc20 : name com.jci.BLM_TIME_TO_CPP_TIME
00:00:14.027 BLM_SETTINGS[386] Warn (settings_service_funs.cpp:8631 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:00:14.027 BLM_SETTINGS[386] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/Headlights/HBC_ComingHomeLightsTimer <!> Value is not in range
00:00:14.033 CPP_TIME[450] Info (time_dbus_service_funs.cpp:2914 TIME_RegisterForDatetimeChangeEvent_svc) registering for event : 32767.127.127 127:127:00 client : com.jci.BLM_TIME_TO_CPP_TIME
00:00:14.033 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_RegisterForDatetimeChangeEvent_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:14.033 CPP_TIME[450] Warn (time_common.cpp:772 TIME_convertStructuredTimeToTime) mktime - bad parameter :32767.127.127 127:127:00
00:00:14.033 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) time_RegisterForDatetimeChangeEvent_resp_cb|(event) 60 1970.01.01 00:01:00|-1|0|0|0|ARMED|RUN|keep|2|2|0|com.jci.BLM_TIME_TO_CPP_TIME|occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:32767.127.127 127:127:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|com.jci.BLM_TIME_TO_CPP_TIME
00:00:14.033 CPP_TIME[450] Warn (time_dbus_service_funs.cpp:1439 time_RegisterForDatetimeChangeEvent_resp_cb) already existing and will be deleted|(event) 60 1970.01.01 00:01:00|-1|0|0|0|ARMED|RUN|keep|2|2|0|com.jci.BLM_TIME_TO_CPP_TIME|occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:32767.127.127 127:127:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|com.jci.BLM_TIME_TO_CPP_TIME
00:00:14.033 CPP_TIME[450] Info (time_dbus_service_funs.cpp:1446 time_RegisterForDatetimeChangeEvent_resp_cb) adding event
00:00:14.047 BLM_SETTINGS[521] Info (settings_client_funs.cpp:759 BLM_SETTINGS_Client_ExtConnect) com.jci.BLM_TIME_TO_BLM_SETTINGS
00:00:14.064 CPP_TIME[521] Warn (time__gen_DataMutex.hpp:785 DataLock) mx locked, WILL wait until unlocked for 0x47058
00:00:14.066 CPP_TIME[521] Warn (time_stack_backtrace.cpp:83 __int_ShowStackBackTraceByLevel) __int_ShowStackBackTraceByLevel(TIME_debug_level_e)
00:00:14.069 CPP_TIME[521] Warn (time_stack_backtrace.cpp:83 __int_ShowStackBackTraceByLevel) com::jci::time::DataMutex::DataLock()
00:00:14.074 CPP_TIME[521] Warn (time_stack_backtrace.cpp:83 __int_ShowStackBackTraceByLevel) /jci/lib/libjcitime_client.so(+0x3b6f8)
00:00:14.086 BLM_SETTINGS[386] Warn (settings_service_funs.cpp:8631 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:00:14.086 BLM_SETTINGS[386] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/Headlights/HBC_LeavingHomeLights <!> Value is not in range
00:00:14.093 BLM_SETTINGS[386] Info (settings_service_funs.cpp:1269 SETTINGS_Connect_svc) connecting client:com.jci.BLM_TIME_TO_BLM_SETTINGS
00:00:14.114 BLM_SETTINGS[521] Info (settings_client_funs.cpp:422 BLM_SEETINGS_Connect_cb) Client Name [com.jci.BLM_TIME_TO_BLM_SETTINGS]
00:00:14.118 BLM_SETTINGS[521] Info (settings_client_funs.cpp:2760 SETTINGS_Client_ExtOnChange_U8) client [com.jci.BLM_TIME_TO_BLM_SETTINGS] com/jci/blm/settings/Time/TimeZone
00:00:14.126 BLM_SETTINGS[386] Info (settings_service_funs.cpp:6617 SETTINGS_OnChange_Settings_U8_svc) client:com.jci.BLM_TIME_TO_BLM_SETTINGS key path : /2/com/jci/blm/settings/Time/TimeZone
00:00:14.139 BLM_SETTINGS[386] Warn (settings_service_funs.cpp:8631 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:00:14.139 BLM_SETTINGS[386] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/SafetyConvenience/DoorLockModeAT6 <!> Value is not in range
00:00:14.172 BLM_SETTINGS[386] Info (settings_vbs_interface.cpp:11697 UpdateSymLinkForDSPConfiguration) Set DSP symlink to /jci/dsp/dsp_J36A-NoBose.xml, index in table 7
00:00:14.172 BLM_SETTINGS[386] Info (settings_symlink.hpp:228 _int_Set) symlink file /data/dsp.xml and its conatins "/jci/dsp/dsp_J36A-NoBose.xml" are OK
00:00:14.172 BLM_SETTINGS[386] Info (settings_vbs_interface.cpp:3030 BLM_SETTINGS_Vehicle_VIN_Notification_cb) Vehicle VIN notification received [JM1BM1T79G1319820]
00:00:14.172 BLM_SETTINGS[386] Info (settings_vbs_interface.cpp:3037 BLM_SETTINGS_Vehicle_VIN_Notification_cb) Vehicle VIN notification received [JM1BM1T79G1319820]
00:00:14.241 DIAG[532] Info (testdiag_main.c:171 GetServiceInterfaces) GetServiceInterfaces
00:00:14.252 DIAG[532] Info (testdiag_statemachine.c:637 TESTDIAG_initializeStateMachine) Starting the state machine
00:00:14.253 DIAG[532] Info (testdiag_statemachine.c:718 TESTDIAG_startStateMachine) Testdiag Application thread created with thread id = 302232
00:00:14.254 DIAG[532] Info (testdiag_statemachine.c:936 testdiag_TopState_EventHandler) BLM_TESTDIAG entering TOP state
00:00:14.255 DIAG[532] Info (testdiag_statemachine.c:942 testdiag_TopState_EventHandler) Entered Top State
00:00:14.262 com.jci.cpp.settings.socket[532] Info (SocketRegistry.cpp:1101 openSpecific) Connected to proxy: tcpip://
00:00:14.289 com.jci.cpp.settings[532] Note (RegistryFactory.cpp:123 createRegistry) Startup time: 00:00:00.032829333
00:00:14.295 DIAG[532] Info (testdiag_statemachine.c:18638 TESTDIAG_Get_RegionInfo) The region received from registry setting is 2
00:00:14.304 com.jci.cpp.settings.socket[532] Info (Channel.cpp:95 close) Closing descriptor: 17
00:00:14.311 com.jci.cpp.settings.socket[289] Info (SocketProxy.cpp:2405 run) End of file reached
00:00:14.311 com.jci.cpp.settings.socket[289] Info (Channel.cpp:95 close) Closing descriptor: 19
00:00:14.317 BUCPSA[326] Info (bucpsa_settings.c:290 BUCPSA_Settings_Set_RctaStatus) Updating RCTA Status = 0 in NVRAM
00:00:14.318 BUCPSA[326] Info (bucpsa_steng.c:214 BUCPSA_StengPostMessage) Posting event 'BUCPSA_RCTA_REFRESH_EVT' into state 'Default_State'
00:00:14.318 BUCPSA[326] Info (bucpsa_steng.c:421 bucpsa_Default_EventHandler) Received RCTA Equipped = False
00:00:14.321 com.jci.cpp.settings.socket[532] Info (SocketRegistry.cpp:971 run) The socket closed
00:00:14.323 com.jci.cpp.settings.socket[532] Note (SocketRegistry.cpp:1030 ~SocketRegistry) Destroyed: "tcpip://"
00:00:14.325 BLM_SETTINGS[532] Info (settings_client_funs.cpp:759 BLM_SETTINGS_Client_ExtConnect) com.jci.settings.testdiag
00:00:14.345 DIAG[532] Info (testdiag_statemachine.c:18846 TESTDIAG_getVehicleType) BLM_SETTINGS_Client_ExtConnect Successful
00:00:14.348 DIAG[532] Info (testdiag_statemachine.c:1340 testdiag_NotReadyState_EventHandler) TestDiag entering Not Ready state
00:00:14.349 DIAG[532] Info (testdiag_statemachine.c:1345 testdiag_NotReadyState_EventHandler) Entered TestDiag_NotReady_State
00:00:14.349 DIAG[532] Info (testdiag_main.c:245 ServiceInit) Successfully started TESTDIAG statemachine
00:00:14.389 VBS_BUS_SETTINGS[336] Info (mod_settings_manage_svc.c:9351 VBS_SETTINGS_Send_StatusReady) Status Ready Signals : [1][1][1][1][1][1][1][1][1][1][1][1][1][1][1][1][0][0][0][1][0][1][1][1][1][0][0][0][0][0][1][1][1][1][1][1][1][1][1][1][1][1][1][1][1][1][1][1][1][1][1][1][1][0][0][0][1][1][1][1][1][1]
00:00:14.404 BLM_SETTINGS[386] Info (settings_vbs_interface.cpp:4178 BLM_SETTINGS_ReadyFlag_Notification) Ready flag notification received
00:00:14.418 DIAG[532] Info (testdiag_blmsystem_interface.c:292 TESTDIAG_System_ACC_Change_handler_cb) ACC Status is 0
00:00:14.419 DIAG[532] Info (testdiag_statemachine.c:1352 testdiag_NotReadyState_EventHandler) Received ACCON event
00:00:14.422 DIAG[532] Info (testdiag_statemachine.c:789 TESTDIAG_postMessageToStateMachine) Posting TESTDIAG_ACC_ON_EVT (17) event to state machine in state: NotReady
00:00:14.428 VBS_BUS_CDVDTV[336] Info (mod_cd_manage_svc.c:5219 VBS_CD_Start_Timer) Timer gs_tmrRetryCnt = 8
00:00:14.428 VBS_BUS_CDVDTV[336] Info (mod_cd_manage_svc.c:5437 VBS_CD_Send_DVD_Config_status_Req) Posting DVD Config Status Request to VIP
00:00:14.428 VBS_BUS_CDVDTV[336] Info (mod_cd_manage_svc.c:5370 VBS_CD_Send_CD_ReadyReq) Posting CDVDTV Ready Status Request to VIP
00:00:14.428 VBS_BUS_CDVDTV[336] Info (mod_cd_manage_svc.c:5841 VBS_CD_Send_DTV_RoutineTestReq) Posting DTV RoutineTest Status Request to VIP
00:00:14.428 VBS_BUS_CDVDTV[336] Info (mod_cd_manage_svc.c:5773 VBS_CD_Send_DTV_StatusReq) Posting DTV Status Request to VIP
00:00:14.448 VBS_BUS_CDVDTV[336] Info (mod_cd_manage_svc.c:5293 VBS_CD_Start_Timer) Timer Started : [CDTimerRetryCnt in decrement order = 8]
00:00:14.477 Std[] Info (: ) Surface JCI_OPERA_PRIMARY registered
00:00:14.515 DIAG[532] Info (testdiag_statemachine.c:1367 testdiag_NotReadyState_EventHandler) Received Initialized event
00:00:14.515 DIAG[532] Info (testdiag_vbs_interface.c:4479 TESTDIAG_getVehicleInfoData) Sen request to BUS_DIAG for getting vehicle info data after TESTDIAG loads
00:00:14.515 DIAG[532] Info (testdiag_statemachine.c:1382 testdiag_NotReadyState_EventHandler) TESTDIAG_NotReady_State exit
00:00:14.515 DIAG[532] Info (testdiag_statemachine.c:1453 testdiag_ReadyState_EventHandler) TestDiag entering Ready state
00:00:14.515 DIAG[532] Info (testdiag_statemachine.c:1549 testdiag_DefaultState_EventHandler) TestDiag entering Default state
00:00:14.515 DIAG[532] Info (testdiag_statemachine.c:1554 testdiag_DefaultState_EventHandler) Entered TestDiag_Default_State
00:00:14.515 DIAG[532] Info (testdiag_vbs_interface.c:4177 TESTDIAG_get4ARegionInfo) VBS_RADIO_Get4ARegionInfo returned Success
00:00:14.515 DIAG[532] Info (testdiag_lvds_interface.c:145 TESTDIAG_GetTFTSWVersion) Sent TFT Sw version Request
00:00:14.515 DIAG[532] Info (testdiag_lvds_interface.c:185 TESTDIAG_GetTPSWVersion) Sent Touch Panel Sw version Request
00:00:14.521 LVDS[61] Info (lvds_dbus.c:920 LVDS_GetSoftwareDispVersion_svc) Get Disp Version Request
00:00:14.521 LVDS[61] Info (lvds_dbus.c:845 LVDS_GetSoftwareTPVersion_svc) Get TP Version Request
00:00:14.521 DIAG[532] Warn (testdiag_lvds_interface.c:264 lvds_GetTFTVersioncallback) CPP LVDS API Get TFT Sw Version returned NULL
00:00:14.521 DIAG[532] Warn (testdiag_lvds_interface.c:299 lvds_GetTPVersioncallback) CPP LVDS API Get TP Sw Version returned NULL
00:00:14.528 VBS_BUS_DIAG[336] Info (mod_diag_manage_svc.c:1724 VBS_DIAG_BLM_Ready_Vehicle_Info_Data_Request_svc) BLM Ready, Vehicle Info data requested
00:00:14.530 LVDS[61] Info (lvds_dbus.c:509 LVDS_Signal_displayVersionResp) Display Version Resp ID = 3, Version = BHP1_A_0009
00:00:14.530 DIAG[532] Info (testdiag_lvds_interface.c:380 testdiag_lvds_displayVersion_cb) TESTDIAG:Display version size is 11 and data is BHP1_A_0009
00:00:14.530 DIAG[532] Info (testdiag_statemachine.c:789 TESTDIAG_postMessageToStateMachine) Posting TESTDIAG_LVDS_TFTSWVERSION_RESPONSE_EVT (21) event to state machine in state: Default
00:00:14.530 VBS_BUS_RADIO[336] Info (mod_radio_manage_svc.c:11497 VBS_RADIO_Get4ARegionInfo_svc) Get 4A Region Info returned with value = 0
00:00:14.530 DIAG[532] Info (testdiag_vbs_interface.c:1073 TESTDIAG_VehicleInfoData_Response_cb) TESTDIAG:Received Vehicle Info data:-- Destination: 2, CMU Type: 2 driveChart_Log_Distance:0 destination_1:0 destination_2:0 driveChart_Display:0 driveChart_DataTrans:0 myDoctor_Display:0 ,driverIdentification:0 stDis_IDM_Req:0 endDis_IDM_Req:0 stDis_Eco_Req:1 endDis_Eco_Req:1 custmzDisp_SW:2
00:00:14.536 DIAG[532] Info (testdiag_vbs_interface.c:4309 testdiag_vbs_radio_get4ARegionInfo_cb)  4A Region is 0
00:00:14.536 DIAG[532] Info (testdiag_statemachine.c:789 TESTDIAG_postMessageToStateMachine) Posting TESTDIAG_4AREGION_RESPONSE_EVT (77) event to state machine in state: Default
00:00:14.554 DIAG[532] Info (testdiag_statemachine.c:789 TESTDIAG_postMessageToStateMachine) Posting TESTDIAG_INITIALIZED_EVT (19) event to state machine in state: Default
00:00:14.554 DIAG[532] Info (testdiag_vbs_interface.c:1553 TESTDIAG_GGDSDataResponse) Sending GGDS Data Response to mod_diag , data ID is 15 and data is MAZ_CMU-150_55.00.753
00:00:14.554 DIAG[532] Info (testdiag_statemachine.c:17146 testdiag_sendBootUpData) Cmu Sw version is MAZ_CMU-150_55.00.753
00:00:14.554 DIAG[532] Info (testdiag_statemachine.c:14683 TESTDIAG_GetCMUSerialNumber) File Read Successfully - 284401710968195
00:00:14.554 DIAG[532] Info (testdiag_vbs_interface.c:1553 TESTDIAG_GGDSDataResponse) Sending GGDS Data Response to mod_diag , data ID is 20 and data is 284401710968195
00:00:14.554 DIAG[532] Info (testdiag_statemachine.c:17150 testdiag_sendBootUpData) Cmu Serial Number is 284401710968195
00:00:14.554 DIAG[532] Info (testdiag_statemachine.c:14757 TESTDIAG_GetCMUPartNumber) Read from file: /config-mfg/mfg-version.ini!
00:00:14.554 DIAG[532] Info (testdiag_statemachine.c:14806 TESTDIAG_GetCMUPartNumber) CMU part number is : BHP1-669C0-M
00:00:14.554 DIAG[532] Info (testdiag_vbs_interface.c:1553 TESTDIAG_GGDSDataResponse) Sending GGDS Data Response to mod_diag , data ID is 21 and data is BHP1-669C0-M
00:00:14.554 DIAG[532] Info (testdiag_statemachine.c:17154 testdiag_sendBootUpData) Cmu Part Number is BHP1-669C0-M
00:00:14.554 DIAG[532] Info (testdiag_vbs_interface.c:1329 testdiag_ReadDataRequest) Sent the Data request to mod diag with data ID = 24
00:00:14.554 AUDIO_MGR[532] Info (audio_am_if.c:43 myDbusSend) Request:: methodName: enableStatus, arguments: {}
00:00:14.554 LVDS[61] Info (lvds_dbus.c:467 LVDS_Signal_TPVersionResp) TP Version Resp ID = 2, Version = 1.0008
00:00:14.554 VBS_BUS_DIAG[336] Info (mod_diag_manage_svc.c:1300 VBS_DIAG_Data_Request_svc) Data ID received is 24
00:00:14.554 DIAG[532] Info (testdiag_lvds_interface.c:441 testdiag_lvds_TPVersion_cb) TESTDIAG:TP version size is 6 and data is 1.0008
00:00:14.554 DIAG[532] Info (testdiag_statemachine.c:789 TESTDIAG_postMessageToStateMachine) Posting TESTDIAG_LVDS_TPSWVERSION_RESPONSE_EVT (22) event to state machine in state: Default
00:00:14.554 VBS_BUS_DIAG[336] Info (mod_diag_manage_svc.c:3173 VBS_SendSignal_SessionNotification) MOD_DIAG: VBS_SendSignal_SessionNotification
00:00:14.554 AUDIO_MGR[532] Error (audio_am_client_bind.c:302 AUDIO_AMSERVICE_Request) AUDIO_AMSERVICE_Request: The name com.xsembedded.service.AudioManagement was not provided by any .service files
00:00:14.554 VBS_BUS_DIAG[336] Info (mod_diag_manage_svc.c:3175 VBS_SendSignal_SessionNotification) MOD_DIAG:Received session ID is: 2
00:00:14.554 AUDIO_MGR[532] Info (audio_am_if.c:46 myDbusSend) Response:: methodName: enableStatus, arguments: {}, result: The name com.xsembedded.service.AudioManagement was not provided by any .service files
00:00:14.554 VBS_BUS_DIAG[336] Info (mod_diag_manage_svc.c:3177 VBS_SendSignal_SessionNotification) MOD_DIAG:Message sent to service dbus with value 0
00:00:14.554 DIAG[532] Info (testdiag_statemachine.c:789 TESTDIAG_postMessageToStateMachine) Posting TESTDIAG_AUDIO_OFF_EVT (7) event to state machine in state: Default
00:00:14.554 DIAG[532] Info (testdiag_bca_interface.c:209 TESTDIAG_BCA_ReadBTSettings_cb) BLM TESTDIAG_BCA_ReadBTSettings_cb called with  value 0
00:00:14.554 DIAG[532] Info (testdiag_statemachine.c:1235 testdiag_TopState_EventHandler) Data Response received: BHP1_A_0009
00:00:14.554 DIAG[532] Info (testdiag_vbs_interface.c:1553 TESTDIAG_GGDSDataResponse) Sending GGDS Data Response to mod_diag , data ID is 4 and data is BHP1_A_0009
00:00:14.554 DIAG[532] Info (testdiag_vbs_interface.c:3612 TESTDIAG_Session_Notification_cb) Received Session Notification
00:00:14.554 DIAG[532] Info (testdiag_statemachine.c:789 TESTDIAG_postMessageToStateMachine) Posting TESTDIAG_DEFAULT_SESSION_EVT (59) event to state machine in state: Default
00:00:14.554 DIAG[532] Info (testdiag_statemachine.c:1263 testdiag_TopState_EventHandler) Received TESTDIAG_4AREGION_RESPONSE_EVT with 4A subregion as 0
00:00:14.554 DIAG[532] Info (testdiag_statemachine.c:1228 testdiag_TopState_EventHandler) Data Response received: 1.0008
00:00:14.554 DIAG[532] Info (testdiag_vbs_interface.c:1553 TESTDIAG_GGDSDataResponse) Sending GGDS Data Response to mod_diag , data ID is 5 and data is 1.0008
00:00:14.554 DIAG[532] Info (testdiag_main.c:344 ServiceRun) Running TESTDIAG Service
00:00:14.554 DIAG[532] Info (testdiag_statemachine.c:789 TESTDIAG_postMessageToStateMachine) Posting TESTDIAG_SM_CLIENT_CONNECTION_SUCCESS_EVT (68) event to state machine in state: Default
00:00:14.554 DIAG[532] Info (testdiag_main.c:1435 testdiag_subscribe_services_sm_cb) SM_SubscribeForEvents cb called
00:00:14.554 DIAG[532] Info (testdiag_statemachine.c:789 TESTDIAG_postMessageToStateMachine) Posting TESTDIAG_SM_SUBSCRIPTION_SUCCESS_EVT (70) event to state machine in state: Default
00:00:14.723 BLM_SETTINGS[386] Warn (settings_service_funs.cpp:8631 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:00:14.723 BLM_SETTINGS[386] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/Headlights/AFS <!> Value is not in range
00:00:14.731 BLM_SETTINGS[386] Warn (settings_service_funs.cpp:8631 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:00:14.731 BLM_SETTINGS[386] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/ForwardDetection/DriverAlert <!> Value is not in range
00:00:14.792 BLM_SETTINGS[386] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
00:00:14.884 xse>AP>[] Debug (: ) : Received TAU status:1
00:00:14.893 BLM_SETTINGS[386] Info (settings_vbs_interface.cpp:11697 UpdateSymLinkForDSPConfiguration) Set DSP symlink to /jci/dsp/dsp_J36A-NoBose.xml, index in table 7
00:00:14.893 BLM_SETTINGS[386] Info (settings_symlink.hpp:228 _int_Set) symlink file /data/dsp.xml and its conatins "/jci/dsp/dsp_J36A-NoBose.xml" are OK
00:00:14.893 BLM_SETTINGS[386] Info (settings_symlink.hpp:228 _int_Set) symlink file /data/asound.conf and its conatins "/etc/asound.conf.LHD" are OK
00:00:14.896 xse>AP>[] Info (: ) : Could not get the initial enable status from Audio Manager: org.freedesktop.DBus.Error.ServiceUnknown : The name com.xsembedded.service.AudioManagement was not provided by any .service files
00:00:14.941 SM[213] Warn (sm.cpp:3189 SM_StartNeededService) User root not available in the board
00:00:14.998 BLM_SETTINGS[386] Info (settings_vbs_interface.cpp:14763 BLM_SETTINGS_PrioritizeAndSetDestination) Valid destination 2 found in table.
00:00:14.998 BLM_SETTINGS[386] Info (settings_vbs_interface.cpp:14773 BLM_SETTINGS_PrioritizeAndSetDestination) No change of destination is needed, it will remain 2
00:00:15.004 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:15.009 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:15.029 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:15.029 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 D
/tmp/root # ump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:15.068 BLM_SETTINGS[386] Info (settings_service_funs.cpp:1269 SETTINGS_Connect_svc) connecting client:com.jci.settings.testdiag
00:00:15.068 BLM_SETTINGS[534] Info (settings_client_funs.cpp:1458 SETTINGS_Client_Get_S16_cb) SETTINGS_Client_Get_S16_cb
00:00:15.068 BLM_SETTINGS[534] Info (settings_client_funs.cpp:1487 SETTINGS_Client_Get_S16_cb) Client Name [com.jci.settings_client_usbdtc], returned value 2 for setting ID 74
00:00:15.068 VBS_BUS_SETTINGS[336] Info (mod_settings_manage_svc.c:10040 VBS_SETTINGS_GetSSUCustomizeStatus2_svc) Sending Customized status for Auto re-lock timer setting with Value = 3, Type = 1
00:00:15.068 VBS_BUS_SETTINGS[336] Info (mod_settings_manage_svc.c:10040 VBS_SETTINGS_GetSSUCustomizeStatus2_svc) Sending Customized status for Auto re-lock timer setting with Value = 3, Type = 1
00:00:15.068 VBS_BUS_SETTINGS[336] Info (mod_settings_manage_svc.c:10052 VBS_SETTINGS_GetSSUCustomizeStatus2_svc) Sending Customized status for Buzzer Answer Back Volume with Value = 0, Type = 3
00:00:15.068 VBS_BUS_SETTINGS[336] Info (mod_settings_manage_svc.c:10052 VBS_SETTINGS_GetSSUCustomizeStatus2_svc) Sending Customized status for Buzzer Answer Back Volume with Value = 0, Type = 3
00:00:15.068 VBS_BUS_SETTINGS[336] Info (mod_settings_manage_svc.c:10046 VBS_SETTINGS_GetSSUCustomizeStatus2_svc) Sending Customized status for Un-Lock Mode with Value = 1, Type = 2
00:00:15.068 USBDTC[534] Info (usbdtcudev.cpp:184 CFaultUDEVMonitor) Monitored device is present in the system!'/sys/devices/platform/fsl-ehci.1/usb2/2-1' devnum: 2
00:00:15.068 USBDTC[534] Info (usbdtcvbuspwrctrl.cpp:698 GetVINData_cb) VIN data 'JM1BM1T79G1319820' length=17
00:00:15.068 VBS_BUS_SETTINGS[336] Info (mod_settings_manage_svc.c:10034 VBS_SETTINGS_GetSSUCustomizeStatus2_svc) Sending Customized status for Walk away lock function On/Off with Value = 0, Type = 0
00:00:15.068 VBS_BUS_SETTINGS[336] Info (mod_settings_manage_svc.c:9925 VBS_SETTINGS_GetRBCMCustomizeStatus2_svc) Sending Customized status for Auo Door Lock Mode MT with Value = 0, Type = 8
00:00:15.092 xse>AP>[] Critical (: ) :  ----------------------------------------------
00:00:15.097 USBDTC[534] Info (usbdtcgpio.cpp:172 UpdateMonitorStatus) 'HOST Port OC':Act/Pin/Assert <1><0><0>
00:00:15.097 USBDTC[534] Info (usbdtcapp.cpp:364 StatusChange) Status changed DTC ID = 13, isAsserted = 0
00:00:15.097 VBS_BUS_DIAG[336] Info (mod_diag_manage_svc.c:966 VBS_DIAG_ClearFaults_Request_svc) Number of Faults passed to ClearFaultsRequest  : 1
00:00:15.097 VBS_BUS_DIAG[336] Info (mod_diag_manage_svc.c:979 VBS_DIAG_ClearFaults_Request_svc) Fault 1 is 13  - USB_PRT_HUB2_CURNT_RANGE_ISSUE
00:00:15.097 USBDTC[534] Info (usbdtcreporter.cpp:226 ReporterRoutine) VBS ClearFault successful! FaultID = 13
00:00:15.097 VBS_BUS_DIAG[336] Info (mod_diag_manage_svc.c:2172 VBS_SendSignal_ClearDTCResp) Current page : 0, Total page : 0  and Response Length is 4
00:00:15.097 VBS_BUS_DIAG[336] Info (mod_diag_manage_svc.c:2282 VBS_SendSignal_ClearDTCResp) Fault ID is 13 - USB_PRT_HUB2_CURNT_RANGE_ISSUE and fault status is 1
00:00:15.097 USBDTC[534] Info (usbdtcgpio.cpp:172 UpdateMonitorStatus) 'ACC Status':Act/Pin/Assert <0><1><0>
00:00:15.097 BLM_SETTINGS[532] Info (settings_client_funs.cpp:422 BLM_SEETINGS_Connect_cb) Client Name [com.jci.settings.testdiag]
00:00:15.097 DIAG[532] Info (testdiag_statemachine.c:18872 TESTDIAG_Settings_Connect_Request) TESTDIAG_Settings_Connect_Request Successful
00:00:15.097 BLM_SETTINGS[532] Info (settings_client_funs.cpp:1559 SETTINGS_Client_ExtGet_S16) client [com.jci.settings.testdiag] com/jci/blm/settings/Vehicle/VehicleModelType
00:00:15.097 BLM_SETTINGS[386] Info (settings_service_funs.cpp:5921 SETTINGS_Get_Settings_S16_svc) key path : /2/com/jci/blm/settings/Vehicle/VehicleModelType
00:00:15.129 USBDTC[534] Info (usbdtcudev.cpp:405 UpdateMonitorStatus) Monitored device is present in the system! /sys/devices/platform/fsl-ehci.1/usb2/2-1 devnum: 2
00:00:15.135 xse>AP>[] Critical (: ) : Verification Results:
00:00:15.135 xse>AP>[] Critical (: ) : ERRORS:0
00:00:15.135 xse>AP>[] Critical (: ) : Definitions Assumed User Defined Variables: 0
00:00:15.135 xse>AP>[] Critical (: ) : ----------------------------------------------
00:00:15.135 xse>AP>[] Critical (: ) : INFO: Control logic syntax validation complete (0/0)
00:00:15.135 VBS_BUS_AM[336] Info (mod_am_manage_svc.c:1673 VBS_AM_GetAudioProfileStatus_svc) Received Request : GetAudioProfileStatus [profileType = 5]
00:00:15.164 VBS_BUS_AM[336] Info (mod_am_manage_svc.c:1270 VBS_AM_GetVolumeStatus_svc) Received Request : GetVolumeStatus [volSrcGrp = AUX]
00:00:15.172 VBS_BUS_AM[336] Info (mod_am_manage_svc.c:1673 VBS_AM_GetAudioProfileStatus_svc) Received Request : GetAudioProfileStatus [profileType = 1]
00:00:15.176 VBS_BUS_AM[336] Info (mod_am_manage_svc.c:1673 VBS_AM_GetAudioProfileStatus_svc) Received Request : GetAudioProfileStatus [profileType = 0]
00:00:15.193 VBS_BUS_AM[336] Info (mod_am_manage_svc.c:1673 VBS_AM_GetAudioProfileStatus_svc) Received Request : GetAudioProfileStatus [profileType = 6]
00:00:15.196 VBS_BUS_AM[336] Info (mod_am_manage_svc.c:1270 VBS_AM_GetVolumeStatus_svc) Received Request : GetVolumeStatus [volSrcGrp = NAVI]
00:00:15.206 VBS_BUS_AM[336] Info (mod_am_manage_svc.c:1270 VBS_AM_GetVolumeStatus_svc) Received Request : GetVolumeStatus [volSrcGrp = TA]
00:00:15.218 VBS_BUS_AM[336] Info (mod_am_manage_svc.c:1270 VBS_AM_GetVolumeStatus_svc) Received Request : GetVolumeStatus [volSrcGrp = VOLUME]
00:00:15.226 VBS_BUS_AM[336] Info (mod_am_manage_svc.c:1673 VBS_AM_GetAudioProfileStatus_svc) Received Request : GetAudioProfileStatus [profileType = 3]
00:00:15.241 VBS_BUS_SETTINGS[336] Info (mod_settings_manage_svc.c:9877 VBS_SETTINGS_GetRBCMCustomizeStatus2_svc) Sending Customized status for Auto Door Lock Mode with Value = 1, Type = 0
00:00:15.241 VBS_BUS_SETTINGS[336] Info (mod_settings_manage_svc.c:9895 VBS_SETTINGS_GetRBCMCustomizeStatus2_svc) Sending Customized status for Headlight Off Timer with Value = 2, Type = 3
00:00:15.244 VBS_BUS_SETTINGS[336] Info (mod_settings_manage_svc.c:9907 VBS_SETTINGS_GetRBCMCustomizeStatus2_svc) Sending Customized status for Auto Wiper On/Off with Value = 0, Type = 5
00:00:15.244 VBS_BUS_SETTINGS[336] Info (mod_settings_manage_svc.c:9913 VBS_SETTINGS_GetRBCMCustomizeStatus2_svc) Sending Customized status for Auto Light Sensitivity 1 with Value = 0, Type = 6
00:00:15.244 VBS_BUS_SETTINGS[336] Info (mod_settings_manage_svc.c:9883 VBS_SETTINGS_GetRBCMCustomizeStatus2_svc) Sending Customized status for Int Light Timout - Door Close with Value = 1, Type = 1
00:00:15.244 VBS_BUS_SETTINGS[336] Info (mod_settings_manage_svc.c:9889 VBS_SETTINGS_GetRBCMCustomizeStatus2_svc) Sending Customized status for Int Light Timout - Door Open with Value = 3, Type = 2
00:00:15.249 VBS_BUS_SETTINGS[336] Info (mod_settings_manage_svc.c:9919 VBS_SETTINGS_GetRBCMCustomizeStatus2_svc) Sending Customized status for DRL On/Off with Value = 0, Type = 7
00:00:15.255 VBS_BUS_AM[336] Info (mod_am_manage_svc.c:1270 VBS_AM_GetVolumeStatus_svc) Received Request : GetVolumeStatus [volSrcGrp = DVD]
00:00:15.268 VBS_BUS_AM[336] Info (mod_am_manage_svc.c:1270 VBS_AM_GetVolumeStatus_svc) Received Request : GetVolumeStatus [volSrcGrp = BTHF]
00:00:15.273 VBS_BUS_AM[336] Info (mod_am_manage_svc.c:1673 VBS_AM_GetAudioProfileStatus_svc) Received Request : GetAudioProfileStatus [profileType = 4]
00:00:15.289 VBS_BUS_AM[336] Info (mod_am_manage_svc.c:1270 VBS_AM_GetVolumeStatus_svc) Received Request : GetVolumeStatus [volSrcGrp = TV]
00:00:15.294 VBS_BUS_AM[336] Info (mod_am_manage_svc.c:1673 VBS_AM_GetAudioProfileStatus_svc) Received Request : GetAudioProfileStatus [profileType = 2]
00:00:15.300 VBS_BUS_AM[336] Info (mod_am_manage_svc.c:1270 VBS_AM_GetVolumeStatus_svc) Received Request : GetVolumeStatus [volSrcGrp = RINGTONE]
00:00:15.330 xse>AP>[] Error (: ) : Ready...
00:00:15.361 VBS_BUS_SETTINGS[336] Info (mod_settings_manage_svc.c:10280 VBS_SETTINGS_GetHECCustomizeStatus2_svc) Sending Customized status for BSM Buzzer Volume with Value = 3, Type = 8
00:00:15.365 VBS_BUS_SETTINGS[336] Info (mod_settings_manage_svc.c:10274 VBS_SETTINGS_GetHECCustomizeStatus2_svc) Sending Customized status for LDW Volume with Value = 3, Type = 7
00:00:15.397 VBS_BUS_SETTINGS[336] Info (mod_settings_manage_svc.c:10274 VBS_SETTINGS_GetHECCustomizeStatus2_svc) Sending Customized status for LDW Volume with Value = 3, Type = 7
00:00:15.397 VBS_BUS_SETTINGS[336] Info (mod_settings_manage_svc.c:10250 VBS_SETTINGS_GetHECCustomizeStatus2_svc) Sending Customized status for LDW Buzzer Setting with Value = 1, Type = 3
00:00:15.397 VBS_BUS_SETTINGS[336] Info (mod_settings_manage_svc.c:10244 VBS_SETTINGS_GetHECCustomizeStatus2_svc) Sending Customized status for Headlight On Warning with Value = 1, Type = 2
00:00:15.397 VBS_BUS_SETTINGS[336] Info (mod_settings_manage_svc.c:10268 VBS_SETTINGS_GetHECCustomizeStatus2_svc) Sending Customized status for RVM Buzzer Volume with Value = 3, Type = 6
00:00:15.397 VBS_BUS_SETTINGS[336] Info (mod_settings_manage_svc.c:10262 VBS_SETTINGS_GetHECCustomizeStatus2_svc) Sending Customized status for BSM Warning Area with Value = 3, Type = 5
00:00:15.397 VBS_BUS_SETTINGS[336] Info (mod_settings_manage_svc.c:10238 VBS_SETTINGS_GetHECCustomizeStatus2_svc) Sending Customized status for Seatbelt Reminder Volume with Value = 2, Type = 1
00:00:15.397 VBS_BUS_SETTINGS[336] Info (mod_settings_manage_svc.c:9901 VBS_SETTINGS_GetRBCMCustomizeStatus2_svc) Sending Customized status forSmart Turn On/Off with Value = 2, Type = 4
00:00:15.397 VBS_BUS_SETTINGS[336] Info (mod_settings_manage_svc.c:10256 VBS_SETTINGS_GetHECCustomizeStatus2_svc) Sending Customized status for BSM Warning Indicator Intensity with Value = 2, Type = 4
00:00:15.397 VBS_BUS_SETTINGS[336] Info (mod_settings_manage_svc.c:10262 VBS_SETTINGS_GetHECCustomizeStatus2_svc) Sending Customized status for BSM Warning Area with Value = 3, Type = 5
00:00:15.397 VBS_BUS_SETTINGS[336] Info (mod_settings_manage_svc.c:4272 VBS_SETTINGS_GetGCCConfigMgmtID1_svc) Get GCC Config Management for Steering wheel location returned Value = 1, Type = 4
00:00:15.397 VBS_BUS_SETTINGS[336] Info (mod_settings_manage_svc.c:4296 VBS_SETTINGS_GetGCCConfigMgmtID1_svc) Get GCC Config Management for Mecu Voltage Type returned Value = 49, Type = 8
00:00:15.409 VBS_BUS_SETTINGS[336] Info (mod_settings_manage_svc.c:4026 VBS_SETTINGS_GetCMUControlReq_svc) Get CMU Control for Display Character returned Value = 4, Type = 0
00:00:15.411 VBS_BUS_SETTINGS[336] Info (mod_settings_manage_svc.c:4044 VBS_SETTINGS_GetCMUControlReq_svc) Get CMU Control for Temperature Unit returned Value = 2, Type = 3
00:00:15.413 VBS_BUS_SETTINGS[336] Info (mod_settings_manage_svc.c:4032 VBS_SETTINGS_GetCMUControlReq_svc) Get CMU Control for  Distance Unit returned Value = 2, Type = 1
00:00:15.414 VBS_BUS_SETTINGS[336] Info (mod_settings_manage_svc.c:3101 VBS_SETTINGS_GetHECIlluminationStatus_svc) Get HEC Illumination Status for Low Speed CMB On Off returned Value = 1, Type = 12
00:00:15.423 VBS_BUS_SETTINGS[336] Info (mod_settings_manage_svc.c:524 VBS_SETTINlGS_GetBoseDetectStatus_svc) The return value of the Bose Detect Status = 0
00:00:15.449 VBS_BUS_CDVDTV[336] Info (mod_cd_manage_svc.c:5219 VBS_CD_Start_Timer) Timer gs_tmrRetryCnt = 7
00:00:15.449 VBS_BUS_CDVDTV[336] Info (mod_cd_manage_svc.c:5437 VBS_CD_Send_DVD_Config_status_Req) Posting DVD Config Status Request to VIP
00:00:15.449 VBS_BUS_CDVDTV[336] Info (mod_cd_manage_svc.c:5370 VBS_CD_Send_CD_ReadyReq) Posting CDVDTV Ready Status Request to VIP
00:00:15.449 VBS_BUS_CDVDTV[336] Info (mod_cd_manage_svc.c:5841 VBS_CD_Send_DTV_RoutineTestReq) Posting DTV RoutineTest Status Request to VIP
00:00:15.449 VBS_BUS_CDVDTV[336] Info (mod_cd_manage_svc.c:5773 VBS_CD_Send_DTV_StatusReq) Posting DTV Status Request to VIP
00:00:15.456 VBS_BUS_CDVDTV[336] Info (mod_cd_manage_svc.c:5293 VBS_CD_Start_Timer) Timer Started : [CDTimerRetryCnt in decrement order = 7]
00:00:15.510 BLM_SETTINGS[386] Info (settings_symlink.hpp:228 _int_Set) symlink file /data/asound.conf and its conatins "/etc/asound.conf.LHD" are OK
00:00:15.625 BLM_SETTINGS[386] Info (settings_vbs_interface.cpp:11697 UpdateSymLinkForDSPConfiguration) Set DSP symlink to /jci/dsp/dsp_J36A-NoBose.xml, index in table 7
00:00:15.625 BLM_SETTINGS[386] Info (settings_symlink.hpp:228 _int_Set) symlink file /data/dsp.xml and its conatins "/jci/dsp/dsp_J36A-NoBose.xml" are OK
00:00:15.639 VBS_BUS_SETTINGS[336] Info (mod_settings_manage_svc.c:4158 VBS_SETTINGS_GetCMUControlReq_svc) Get CMU Control for HEC CTRL DESTINATION_CANADA returned Value = 0, Type = 23
00:00:15.639 VBS_BUS_SETTINGS[336] Info (mod_settings_manage_svc.c:4248 VBS_SETTINGS_GetGCCConfigMgmtID1_svc) Get GCC Config Management for destination returned Value = 2, Type = 0
00:00:15.639 VBS_BUS_SETTINGS[336] Info (mod_settings_manage_svc.c:4302 VBS_SETTINGS_GetGCCConfigMgmtID1_svc) Get GCC Config Management for destination_1 returned Value = 0, Type = 9
00:00:15.639 VBS_BUS_SETTINGS[336] Info (mod_settings_manage_svc.c:4308 VBS_SETTINGS_GetGCCConfigMgmtID1_svc) Get GCC Config Management for destination_2 returned Value = 0, Type = 10
00:00:15.639 VBS_BUS_SETTINGS[336] Info (mod_settings_manage_svc.c:4158 VBS_SETTINGS_GetCMUControlReq_svc) Get CMU Control for HEC CTRL DESTINATION_CANADA returned Value = 0, Type = 23
00:00:15.639 VBS_BUS_SETTINGS[336] Info (mod_settings_manage_svc.c:10630 VBS_SETTINGS_GetVehicleType_svc) Returning Vehicle type with value = 54
00:00:15.639 VBS_BUS_SETTINGS[336] Info (mod_settings_manage_svc.c:4314 VBS_SETTINGS_GetGCCConfigMgmtID1_svc) Get GCC Config Management for vehiclePic returned Value = 0, Type = 12
00:00:15.639 VBS_BUS_SETTINGS[336] Info (mod_settings_manage_svc.c:4326 VBS_SETTINGS_GetGCCConfigMgmtID1_svc) Get GCC Config Management for Brand returned Value = 7, Type = 14
00:00:15.639 VBS_BUS_SETTINGS[336] Info (mod_settings_manage_svc.c:10310 VBS_SETTINGS_GetHECCustomizeStatus2_svc) Sending Customized status for Idm_Max with Value = 0, Type = 13
00:00:15.639 VBS_BUS_SETTINGS[336] Info (mod_settings_manage_svc.c:9938 VBS_SETTINGS_GetRBCMCustomizeStatus2_svc) Sending Customized status for CHL_T with Value = 0, Type = 10
00:00:15.639 VBS_BUS_SETTINGS[336] Info (mod_settings_manage_svc.c:9944 VBS_SETTINGS_GetRBCMCustomizeStatus2_svc) Sending Customized status for LHL_ONOFF with Value = 0, Type = 11
00:00:15.655 VBS_BUS_SETTINGS[336] Info (mod_settings_manage_svc.c:9950 VBS_SETTINGS_GetRBCMCustomizeStatus2_svc) Sending Customized status for Auto Door Lock Mode with Value = 0, Type = 12
00:00:15.655 VBS_BUS_SETTINGS[336] Info (mod_settings_manage_svc.c:9699 VBS_SETTINGS_GetPSMCustomizeStatus2_svc) Sending Customized status for Drive Alt ON/OFF Status with Value = 0, Type = 2
00:00:15.692 VBS_BUS_SETTINGS[336] Info (mod_settings_manage_svc.c:4332 VBS_SETTINGS_GetGCCConfigMgmtID1_svc) Get GCC Config Management for DSP_MIC returned Value = 0, Type = 15
00:00:15.824 BLM_SETTINGS[386] Info (settings_vbs_interface.cpp:11697 UpdateSymLinkForDSPConfiguration) Set DSP symlink to /jci/dsp/dsp_J36A-NoBose.xml, index in table 7
00:00:15.824 BLM_SETTINGS[386] Info (settings_symlink.hpp:228 _int_Set) symlink file /data/dsp.xml and its conatins "/jci/dsp/dsp_J36A-NoBose.xml" are OK
00:00:15.869 xse>AP>[] Debug (: ) : Received TAU status:1
00:00:15.938 xse>AM>[] Critical (: ) :  ----------------------------------------------
00:00:15.944 xse>AM>[] Critical (: ) : Verification Results:
00:00:15.947 xse>AM>[] Critical (: ) : ERRORS:0
00:00:15.948 xse>AM>[] Critical (: ) : Definitions Assumed User Defined Variables: 0
00:00:15.950 xse>AM>[] Critical (: ) : ----------------------------------------------
00:00:15.951 xse>AM>[] Critical (: ) : INFO: Control logic syntax validation complete (0/0)
00:00:15.953 xse>AM>[] Error (: ) : Ready...
00:00:15.961 xse>AM>[] Debug (: ) : Received TAU status:1
00:00:15.987 BLM_SETTINGS[386] Info (settings_vbs_interface.cpp:11697 UpdateSymLinkForDSPConfiguration) Set DSP symlink to /jci/dsp/dsp_J36A-NoBose.xml, index in table 7
00:00:15.987 BLM_SETTINGS[386] Info (settings_symlink.hpp:228 _int_Set) symlink file /data/dsp.xml and its conatins "/jci/dsp/dsp_J36A-NoBose.xml" are OK
00:00:15.987 BLM_SETTINGS[521] Info (settings_client_funs.cpp:2638 SETTINGS_Client_OnChange_U8_cb) SETTINGS_Client_OnChange_U8_cb
00:00:15.987 BLM_SETTINGS[521] Info (settings_client_funs.cpp:2668 SETTINGS_Client_OnChange_U8_cb) Client Name [com.jci.BLM_TIME_TO_BLM_SETTINGS]
00:00:15.987 BLM_SETTINGS[521] Info (settings_client_funs.cpp:3034 SETTINGS_Client_ExtOnChange_S16) client [com.jci.BLM_TIME_TO_BLM_SETTINGS] com/jci/blm/settings/Time/TimeDST
00:00:15.987 SYSTEM[275] Info (state_machine.cpp:1971 system_smm_TopStateHandler) Audio manager service started!
00:00:15.987 SYSTEM[275] Info (state_machine.cpp:1446 system_smm_TryInitializeAudio) All preconditions are met, trying to initialize audio!
00:00:15.987 SM[213] Warn (sm_spawner.cpp:234 SM_so_spawn) User root not available in the board
00:00:15.987 SYSTEM[275] Info (state_machine.cpp:704 system_smm_LogVbsRadioEventInfo) Tau is connected!
00:00:15.987 SYSTEM[275] Info (state_machine.cpp:2037 system_smm_TopStateHandler) Setting audio on!
00:00:15.987 AUDIO_MGR[275] Info (audio_am_if.c:43 myDbusSend) Request:: methodName: enableStatus, arguments: {}
00:00:15.987 BLM_SETTINGS[386] Info (settings_service_funs.cpp:6677 SETTINGS_OnChange_Settings_S16_svc) client:com.jci.BLM_TIME_TO_BLM_SETTINGS key path : /2/com/jci/blm/settings/Time/TimeDST
00:00:15.987 xse>AP>[] Debug (: ) : Received TAU status:1
00:00:16.006 SM[213] Warn (sm_spawner.cpp:234 SM_so_spawn) User root not available in the board
00:00:16.021 SM[213] Warn (sm_spawner.cpp:234 SM_so_spawn) User root not available in the board
00:00:16.032 AUDIO_MGR[275] Info (audio_am_if.c:46 myDbusSend) Response:: methodName: enableStatus, arguments: {}, result: {"enable":false}
00:00:16.032 AUDIO_MGR[275] Info (audio_am_if.c:43 myDbusSend) Request:: methodName: enable, arguments: {"enable":true}
00:00:16.032 SM[213] Warn (sm_spawner.cpp:234 SM_so_spawn) User root not available in the board
00:00:16.055 xse>AM>[] Debug (: ) : Received TAU status:1
00:00:16.055 BLM_SETTINGS[386] Warn (settings_service_funs.cpp:8631 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:00:16.055 BLM_SETTINGS[386] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/SafetyConvenience/AutoDoorLockChimeVolume <!> Value is not in range
00:00:16.082 BLM_SETTINGS[386] Warn (settings_service_funs.cpp:8631 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:00:16.082 BLM_SETTINGS[386] Warn (settings_vbss_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/Keyless/BuzzerAnswerVolume <!> Value is not in range
00:00:16.087 AUDIO_MGR[275] Info (audio_am_if.c:46 myDbusSend) Response:: methodName: enable, arguments: {"enable":true}, result: {}
00:00:16.102 VBS_BUS_AM[336] Info (mod_am_manage_svc.c:1732 VBS_AM_GetMuteStatus_svc) Received Request : GetMuteStatus [muteType = 2]
00:00:16.108 xse>AM>[] Debug (: ) : syncVbsMuteState: "false"
00:00:16.119 BLM_SETTINGS[386] Warn (settings_service_funs.cpp:8589 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:00:16.119 BLM_SETTINGS[386] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/Keyless/WalkawayLock <!> Value is not in range
00:00:16.155 xse>AP>[] Debug (: ) : audioManagerEnableEventHandler:AudioEnabled: true and onSource: NONE
00:00:16.168 DIAG[532] Info (testdiag_am_interface.c:240 testdiag_cbSignalNotify) Audio Turned ON
00:00:16.168 DIAG[532] Info (testdiag_statemachine.c:789 TESTDIAG_postMessageToStateMachine) Posting TESTDIAG_AUDIO_ON_EVT (6) event to state machine in state: Default
00:00:16.168 DIAG[532] Info (testdiag_statemachine.c:952 testdiag_TopState_EventHandler) Received Audio ON event
00:00:16.168 SYSTEM[275] Info (state_machine.cpp:671 system_smm_LogAudioEventInfo) Audio is on!
00:00:16.168 SYSTEM[275] Info (state_machine.cpp:934 system_smm_ExpectBootupFinished) Still waiting for bootup to finish...
00:00:16.187 BLM_SETTINGS[386] Warn (settings_service_funs.cpp:8631 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:00:16.187 BLM_SETTINGS[386] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/SafetyConvenience/AutoDoorLockMT <!> Value is not in range
00:00:16.222 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:16.226 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:16.248 BLM_SETTINGS[386] Warn (settings_service_funs.cpp:8589 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:00:16.248 BLM_SETTINGS[386] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/SafetyConvenience/AutoWiper <!> Value is not in range
00:00:16.254 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:16.254 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:16.322 BLM_SETTINGS[386] Warn (settings_service_funs.cpp:8631 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:00:16.322 BLM_SETTINGS[386] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/Headlights/HBC_AutoSensitivity <!> Value is not in range
00:00:16.368 BLM_SETTINGS[386] Warn (settings_service_funs.cpp:8589 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:00:16.368 BLM_SETTINGS[386] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/Headlights/DRL <!> Value is not in range
00:00:16.457 VBS_BUS_CDVDTV[336] Info (mod_cd_manage _svc.c:5219 VBS_CD_Start_Timer) Timer gs_tmrRetryCnt = 6
00:00:16.457 VBS_BUS_CDVDTV[336] Info (mod_cd_manage_svc.c:5437 VBS_CD_Send_DVD_Config_status_Req) Posting DVD Config Status Request to VIP
00:00:16.457 VBS_BUS_CDVDTV[336] Info (mod_cd_manage_svc.c:5370 VBS_CD_Send_CD_ReadyReq) Posting CDVDTV Ready Status Request to VIP
00:00:16.457 VBS_BUS_CDVDTV[336] Info (mod_cd_manage_svc.c:5841 VBS_CD_Send_DTV_RoutineTestReq) Posting DTV RoutineTest Status Request to VIP
00:00:16.457 VBS_BUS_CDVDTV[336] Info (mod_cd_manage_svc.c:5773 VBS_CD_Send_DTV_StatusReq) Posting DTV Status Request to VIP
00:00:16.475 VBS_BUS_CDVDTV[336] Info (mod_cd_manage_svc.c:5293 VBS_CD_Start_Timer) Timer Started : [CDTimerRetryCnt in decrement order = 6]
00:00:16.486 login[196] Info (: ) root login on 'console'
00:00:16.727 BLM_SETTINGS[386] Info (settings_vbs_interface.cpp:14763 BLM_SETTINGS_PrioritizeAndSetDestination) Valid destination 2 found in table.
00:00:16.727 BLM_SETTINGS[386] Info (settings_vbs_interface.cpp:14773 BLM_SETTINGS_PrioritizeAndSetDestination) No change of destination is needed, it will remain 2
00:00:16.778 BLM_SETTINGS[386] Info (settings_vbs_interface.cpp:14763 BLM_SETTINGS_PrioritizeAndSetDestination) Valid destination 2 found in table.
00:00:16.783 BLM_SETTINGS[386] Info (settings_vbs_interface.cpp:14773 BLM_SETTINGS_PrioritizeAndSetDestination) No change of destination is needed, it will remain 2
00:00:16.813 BLM_SETTINGS[386] Info (settings_vbs_interface.cpp:14763 BLM_SETTINGS_PrioritizeAndSetDestination) Valid destination 2 found in table.
00:00:16.813 BLM_SETTINGS[386] Info (settings_vbs_interface.cpp:14773 BLM_SETTINGS_PrioritizeAndSetDestination) No change of destination is needed, it will remain 2
00:00:16.849 BLM_SETTINGS[386] Info (settings_vbs_interface.cpp:11697 UpdateSymLinkForDSPConfiguration) Set DSP symlink to /jci/dsp/dsp_J36A-NoBose.xml, index in table 7
00:00:16.849 BLM_SETTINGS[386] Info (settings_symlink.hpp:228 _int_Set) symlink file /data/dsp.xml and its conatins "/jci/dsp/dsp_J36A-NoBose.xml" are OK
00:00:16.895 BLM_SETTINGS[386] Info (settings_vbs_interface.cpp:11697 UpdateSymLinkForDSPConfiguration) Set DSP symlink to /jci/dsp/dsp_J36A-NoBose.xml, index in table 7
00:00:16.895 BLM_SETTINGS[386] Info (settings_symlink.hpp:228 _int_Set) symlink file /data/dsp.xml and its conatins "/jci/dsp/dsp_J36A-NoBose.xml" are OK
00:00:16.948 AUXIN[921] Info (auxin_main.c:84 GetServiceInterfaces) FUNCTION:GetServiceInterfaces
00:00:16.966 AUXIN[921] Info (auxin_main.c:96 ServiceInit) Initalizing AUXIN Service
00:00:17.026 AUXIN[921] Info (auxin_am_interface.c:478 AUXIN_AM_InitAudioManager) AUX_InitAudioManager.
00:00:17.029 AUXIN[921] Info (auxin_am_interface.c:415 auxin_initAMClient) Initializing AM clinet
00:00:17.030 AUXIN[921] Info (auxin_am_interface.c:550 AUXIN_AM_Register_Signal) AUXIN_AM_CLIENT: Successfully initialized audio management library.
00:00:17.038 AUDIO_MGR[921] Info (audio_am_if.c:46 myDbusSend) Response:: methodName: openSession, arguments: {"busName":"com.jci.auxin","objectPath":"/com/jci/auxin"}, result: {"sessionId":1}
00:00:17.041 AUXIN[921] Info (auxin_am_interface.c:557 AUXIN_AM_Register_Signal) AUXIN_AM_CLIENT:  Open session successful with AUXIN Session id  =1
00:00:17.045 AUDIO_MGR[921] Info (audio_am_if.c:46 myDbusSend) Response:: methodName: registerAudioStream, arguments: {"sessionId":1,"streamName":"AUX","streamModeName":"AUX","streamType":"Media","focusType":"permanent"}, result: {}
00:00:17.047 AUXIN[921] Info (auxin_am_interface.c:569 AUXIN_AM_Register_Signal) Register AUX stream success
00:00:17.048 AUXIN[921] Info (auxin_steng.c:144 AUXIN_InitializeStateMachine)  Initialising state machine
00:00:17.049 AUXIN[921] Info (auxin_steng.c:369 auxin_TopState_EventHandler) AUX_TOP_STATE: Received Event 2
00:00:17.051 AUXIN[921] Info/ (auxin_steng.c:374 auxin_TopState_EventHandler) Aux entering TOP state
00:00:17.054 AUXIN[921] Info (auxin_steng.c:369 auxin_TopState_EventHandler) AUX_TOP_STATE: Received Event 1
00:00:17.055 AUXIN[921] Info (auxin_steng.c:451 auxin_Disconnectedstate_EventHandler) AUX_DISCONNECTED_STATE: Received Event 2
00:00:17.056 AUXIN[921] Info (auxin_steng.c:457 auxin_Disconnectedstate_EventHandler) Aux entering DISCONNECTED state
00:00:17.056 AUXIN[921] Info (auxin_steng.c:451 auxin_Disconnectedstate_EventHandler) AUX_DISCONNECTED_STATE: Received Event 1
00:00:17.057 AUXIN[921] Info (auxin_hmi_interface.c:320 AUXIN_Send_AuxinStatus) Posting AUXIN status to HMI D_BUs Status from VBS : 0
00:00:17.064 AUXIN[921] Info (auxin_vbs_interface.c:226 AUXIN_VBS_DeviceStatus_Request) <======= Sending AUXIN Device Status Request to VBS =====>
00:00:17.068 VBS_BUS_RADIO[336] Info (mod_radio_manage_svc.c:3418 VBS_RADIO_AUX_GetConnStatus_svc) Get AUX Connection Status returned with value = 0
00:00:17.079 AUXIN[921] Info (auxin_main.c:130 ServiceRun) Running AUXIN Service
00:00:17.079 AUXIN[921] Info (auxin_steng.c:451 auxin_Disconnectedstate_EventHandler) AUX_DISCONNECTED_STATE: Received Event 6
00:00:17.079 AUXIN[921] Info (auxin_hmi_interface.c:320 AUXIN_Send_AuxinStatus) Posting AUXIN status to HMI D_BUs Status from VBS : 0
00:00:17.083 AUXIN[921] Info (auxin_steng.c:304 AUXIN_postMessageToStateMachine) Mutex Unlocked Successfully
00:00:17.089 AUXIN[921] Info (auxin_vbs_interface.c:310 VBS_AUXIN_Status_Response_cb) Successfully posted AUXIN connection status to state machine ::0
00:00:17.089 AUXIN[921] Info (auxin_vbs_interface.c:178 auxin_vbs_callback) Auxin request callback is invoked with value 100
00:00:17.109 BLM_SETTINGS[386] Info (settings_vbs_interface.cpp:11697 UpdateSymLinkForDSPConfiguration) Set DSP symlink to /jci/dsp/dsp_J36A-NoBose.xml, index in table 7
00:00:17.109 BLM_SETTINGS[386] Info (settings_symlink.hpp:228 _int_Set) symlink file /data/dsp.xml and its conatins "/jci/dsp/dsp_J36A-NoBose.xml" are OK
00:00:17.115 BLM_CD[928] Info (cd_init.cpp:133 ServiceInit) Entered ServiceInit() for BLM CD Application from thread id = <716698624>, version BLM_CD-MAZ140.10.09.000
00:00:17.119 BLM_CD[928] Info (cd_statemachine.cpp:211 CD_InitStateMachine) Successfully initialization of Event Queue for the CD state machine
00:00:17.150 BLM_SETTINGS[386] Warn (settings_service_funs.cpp:8631 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:00:17.150 BLM_SETTINGS[386] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/Headlights/AFS <!> Value is not in range
00:00:17.191 AUDIO_MGR[928] Info (audio_am_if.c:46 myDbusSend) Response:: methodName: openSession, arguments: {"busName":"com.jci.CD","objectPath":"/com/jci/CD"}, result: {"sessionId":2}
00:00:17.195 BLM_SETTINGS[386] Warn (settings_service_funs.cpp:8631 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:00:17.195 BLM_SETTINGS[386] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/Headlights/HBC_ComingHomeLightsTimer <!> Value is not in range
00:00:17.201 AUDIO_MGR[928] Info (audio_am_if.c:46 myDbusSend) Response:: methodName: registerAudioStream, arguments: {"sessionId":2,"streamName":"CD","streamModeName":"CD","streamType":"Media","focusType":"permanent"}, result: {}
00:00:17.203 BLM_CD[928] Info (cd_settings.cpp:44 CD_Settings_connect) Connecting to BLM_SETTINGS.
00:00:17.205 BLM_SETTINGS[928] Info (settings_client_funs.cpp:759 BLM_SETTINGS_Client_ExtConnect) com.jci.settings.BLM_CD
00:00:17.232 BLM_SETTINGS[386] Warn (settings_service_funs.cpp:8631 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:00:17.232 BLM_SETTINGS[386] Warn (settings_vbs_interface.cpp:10112 BLM_SE
2                       etc                     resources
bin                     home                    root
bootchart               jci                     sbin
config                  lib                     sys
config-mfg              media                   tmp
data                    mnt                     usr
data_persist            paa                     var
dev                     proc                    wayland-screenshot.png
/tmp/root # TTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/Headlights/HBC_LeavingHomeLights <!> Value is not in range
00:00:17.244 BLM_SETTINGS[928] Info (settings_client_funs.cpp:1559 SETTINGS_Client_ExtGet_S16) client [com.jci.settings.BLM_CD] com/jci/maz/cmu/Region
00:00:17.245 BLM_CD[928] Info (cd_init.cpp:154 ServiceInit) (STATUS_SUCCESS == CD_StartZones()) && (STATUS_SUCCESS == CreateConnectionPoll())
00:00:17.249 BLM_CD[928] Info (cd_init.cpp:171 ServiceRun) Running CD Service, from thread id = <716698624>.
00:00:17.262 BLM_CD[928] Info (cd_statemachine.cpp:1314 cd_TopState_EventHandler) CD STATE START to StartUp for CD State Machine
00:00:17.264 BLM_CD[928] Info (cd_vbs_interface.cpp:1740 VBS_CD_GetConfigStatusRequest) Calling VBS method VBS_CD_GetDVDConfigStatus.
00:00:17.268 BLM_CD[928] Info (cd_vbs_interface.cpp:1678 VBS_CD_GetReadyStatusRequest) Calling VBS method VBS_CD_DVD_GetStatus.
00:00:17.269 BLM_CD[928] Info (cd_vbs_interface.cpp:1696 CD_VBS_GetConfigStatus_cb) Received configuration status from VBS: DEVICE_NOT_CONNECTED
00:00:17.278 BLM_CD[928] Info (cd_statemachine.cpp:1414 cd_StartUpState_EventHandler) Handling Event CD_ENTRY_EVENT.
00:00:17.281 BLM_CD[928] Info (cd_vbs_interface.cpp:1511 VBS_CD_DVD_GetReadyStatusCallback) CD Ready Status is 0
00:00:17.283 VBS_BUS_CAN[336] Info (mod_can_public.c:5908 VBS_BUS_CAN_IgnitionStatus_5Sec_Status) Value of VWM_IGNITION_STATUS_5_PID --- 4
00:00:17.285 BLM_CD[928] Info (cd_vbs_interface.cpp:1521 VBS_CD_DVD_GetReadyStatusCallback) Updating CD Ready status value to CD_NOT_READY.
00:00:17.286 AUDIO_MGR[928] Info (audio_am_if.c:43 myDbusSend) Request:: methodName: abandonAudioFocus, arguments: {"sessionId":2}
00:00:17.296 xse>AM>[] Debug (: ) : OUT: abandonAudioFocus(session=2): Unexpected, NOP
00:00:17.299 BLM_SETTINGS[386] Warn (settings_service_funs.cpp:8631 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:00:17.299 BLM_SETTINGS[386] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/SafetyConvenience/DoorLockModeAT6 <!> Value is not in range
00:00:17.302 AUDIO_MGR[928] Info (audio_am_if.c:46 myDbusSend) Response:: methodName: abandonAudioFocus, arguments: {"sessionId":2}, result: {}
00:00:17.303 BLM_CD[928] Info (cd_fscache.cpp:33 Clear) Clear queue
00:00:17.308 BLM_CD[928] Info (cd_statemachine.cpp:1414 cd_StartUpState_EventHandler) Handling Event CD_START_EVENT.
00:00:17.310 BLM_CD[928] Info (cd_statemachine.cpp:1414 cd_StartUpState_EventHandler) Handling Event CD_CONFIG_STATUS_CALLBACK_EVENT.
00:00:17.310 BLM_CD[928] Info (cd_hmi_interface.cpp:852 CD_SendConfigStatus) Sending Configuration Status = CD_NotAvailable, to HMI.
00:00:17.312 BLM_CD[928] Info (cd_statemachine.cpp:1414 cd_StartUpState_EventHandler) Handling Event CD_READY_CALLBACK_EVENT.
00:00:17.326 BLM_SETTINGS[386] Warn (settings_service_funs.cpp:8631 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:00:17.326 BLM_SETTINGS[386] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/ForwardDetection/DriverAlert <!> Value is not in range
00:00:17.340 DAB[930] Info (dab_main.c:103 ServiceInit) Initalizing DAB Service
00:00:17.397 BLM_SETTINGS[386] Info (settings_vbs_interface.cpp:11697 UpdateSymLinkForDSPConfiguration) Set DSP symlink to /jci/dsp/dsp_J36A-NoBose.xml, index in table 7
00:00:17.397 BLM_SETTINGS[386] Info (settings_symlink.hpp:228 _int_Set) symlink file /data/dsp.xml and its conatins "/jci/dsp/dsp_J36A-NoBose.xml" are OK
00:00:17.425 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:17.429 AUDIO_MGR[931] Info (audio_am_if.c:46 myDbusSend) Response:: methodName: openSession, arguments: {"busName":"com.jci.xm","objectPath":"/com/jci/xm"}, result: {"sessionId":3}
00:00:17.432 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:17.448 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:17.454 AUDIO_MGR[931] Info (audio_am_if.c:46 myDbusSend) Response:: methodName: registerAudioStream, arguments: {"sessionId":3,"streamName":"XM","streamModeName":"XM","streamType":"Media","focusType":"permanent"}, result: {}
00:00:17.456 XM_RADIO[931] Info (xm_am_interface.c:566 XM_AM_Register_Signal) Register AM stream success
00:00:17.459 com.jci.cpp.settings.socket[931] Info (SocketRegistry.cpp:1101 openSpecific) Connected to proxy: tcpip://
00:00:17.464 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:17.475 VBS_BUS_CDVDTV[336] Info (mod_cd_manage_svc.c:5219 VBS_CD_Start_Timer) Timer gs_tmrRetryCnt = 5
00:00:17.475 VBS_BUS_CDVDTV[336] Info (mod_cd_manage_svc.c:5437 VBS_CD_Send_DVD_Config_status_Req) Posting DVD Config Status Request to VIP
00:00:17.475 VBS_BUS_CDVDTV[336] Info (mod_cd_manage_svc.c:5370 VBS_CD_Send_CD_ReadyReq) Posting CDVDTV Ready Status Request to VIP
00:00:17.475 VBS_BUS_CDVDTV[336] Info (mod_cd_manage_svc.c:5841 VBS_CD_Send_DTV_RoutineTestReq) Posting DTV RoutineTest Status Request to VIP
00:00:17.475 VBS_BUS_CDVDTV[336] Info (mod_cd_manage_svc.c:5773 VBS_CD_Send_DTV_StatusReq) Posting DTV Status Request to VIP
00:00:17.494 AUDIO_MGR[930] Info (audio_am_if.c:46 myDbusSend) Response:: methodName: openSession, arguments: {"busName":"com.jci.dab","objectPath":"/com/jci/dab"}, result: {"sessionId":4}
00:00:17.501 VBS_BUS_CDVDTV[336] Info (mod_cd_manage_svc.c:5293 VBS_CD_Start_Timer) Timer Started : [CDTimerRetryCnt in decrement order = 5]
00:00:17.504 AUDIO_MGR[930] Info (audio_am_if.c:46 myDbusSend) Response:: methodName: registerAudioStream, arguments: {"sessionId":4,"streamName":"DAB","streamModeName":"DAB","streamType":"Media","focusType":"permanent"}, result: {}
00:00:17.506 BLM_SETTINGS[930] Info (settings_client_funs.cpp:759 BLM_SETTINGS_Client_ExtConnect) com.jci.settings.dabblm
00:00:17.527 BLM_SETTINGS[930] Info (settings_client_funs.cpp:1559 SETTINGS_Client_ExtGet_S16) client [com.jci.settings.dabblm] com/jci/maz/cmu/Region
00:00:17.529 DAB[930] Info (dab_steng.c:3131 dab_UserRequestTimerInit) DAB user request timer Initialized
00:00:17.530 DAB[930] Info (dab_steng.c:396 dab_TopState_EventHandler) DAB_TOP_STATE: Received Event 2
00:00:17.530 DAB[930] Info (dab_steng.c:401 dab_TopState_EventHandler) DAB entering TOP state
00:00:17.531 DAB[930] Info (dab_steng.c:396 dab_TopState_EventHandler) DAB_TOP_STATE: Received Event 1
00:00:17.533 DAB[930] Info (dab_steng.c:689 dab_IdleState_EventHandler) DAB_IDLE_STATE: Received Event 2
00:00:17.534 DAB[930] Info (dab_steng.c:693 dab_IdleState_EventHandler) DAB entering IDLE state
00:00:17.534 DAB[930] Info (dab_steng.c:689 dab_IdleState_EventHandler) DAB_IDLE_STATE: Received Event 1
00:00:17.541 xse>AM>[] Debug (: ) : Received TAU status:1
00:00:17.543 xse>AP>[] Debug (: ) : Received TAU status:1
00:00:17.547 com.jci.cpp.settings[931] Note (RegistryFactory.cpp:123 createRegistry) Startup time: 00:00:00.088383000
00:00:17.547 XM_RADIO[931] Info (xm_settings.c:109 XM_InitSettings)  XM_InitSettings %b XM Handle to Settings Registry: 0x4a8a0
00:00:17.555 DAB[930] Info (dab_main.c:218 ServiceRun) Running DAB Service
00:00:17.560 XM_RADIO[931] Info (xm_settings.c:160 XM_ReadSettings) <=================Parental Lock Status: 0 =================>
00:00:17.561 DAB[930] Info (dab_vbs_interface.c:2472 dab_vbs_BandSelectSetting_Status_cb) Received bandSelectSetting from VBS:: 0
00:00:17.561 DAB[930] Info (dab_steng.c:330 DAB_PostMessageToStateMachine) Posting event 30 to state machine
00:00:17.561 DAB[930] Info (dab_steng.c:689 dab_IdleState_EventHandler) DAB_IDLE_STATE: Received Event 30
00:00:17.571 XM_RADIO[931] Info (xm_settings.c:178 XM_ReadSettings) Parental Lock Pin           f f f f
00:00:17.573 DAB[930] Info (dab_vbs_interface.c:2305 dab_vbs_LinkSetting_Status_cb) DAB FMLinkSetting received form VBS:: 0
00:00:17.573 DAB[930] Info (dab_steng.c:330 DAB_PostMessageToStateMachine) Posting event 33 to state machine
00:00:17.573 DAB[930] Info (dab_steng.c:689 dab_IdleState_EventHandler) DAB_IDLE_STATE: Received Event 33
00:00:17.573 DAB[930] Info (dab_steng.c:396 dab_TopState_EventHandler) DAB_TOP_STATE: Received Event 33
00:00:17.573 DAB[930] Info (dab_steng.c:2038 dab_dab_LinkSettingStatus) dab_dab_LinkSettingStatus received = 0
00:00:17.573 DAB[930] Info (dab_vbs_interface.c:2222 dab_vbs_FMLinkSetting_Status_cb) DAB FMLinkSetting received form VBS:: 0
00:00:17.573 DAB[930] Info (dab_steng.c:330 DAB_PostMessageToStateMachine) Posting event 34 to state machine
00:00:17.578 XM_RADIO[931] Info (xm_settings.c:196 XM_ReadSettings) Default Parental Lock Pin           0 9 1 5
00:00:17.579 DAB[930] Info (dab_steng.c:689 dab_IdleState_EventHandler) DAB_IDLE_STATE: Received Event 34
00:00:17.579 DAB[930] Info (dab_steng.c:396 dab_TopState_EventHandler) DAB_TOP_STATE: Received Event 34
00:00:17.579 DAB[930] Info (dab_steng.c:2103 dab_fm_LinkSettingStatus) dab_fm_LinkSettingStatus received = 0
00:00:17.579 XM_RADIO[931] Info (xm_settings.c:226 xm_ReadChannelLockRegistry) Channel Lock Status Registry No. 1: 00
00:00:17.579 XM_RADIO[931] Info (xm_settings.c:226 xm_ReadChannelLockRegistry) Channel Lock Status Registry No. 2: 00
00:00:17.601 DAB[930] Info (dab_vbs_interface.c:2041 dab_vbs_Mode_Status_cb) DAB mode status received form VBS
00:00:17.601 DAB[930] Info (dab_steng.c:330 DAB_PostMessageToStateMachine) Posting event 36 to state machine
00:00:17.601 DAB[930] Info (dab_steng.c:689 dab_IdleState_EventHandler) DAB_IDLE_STATE: Received Event 36
00:00:17.601 DAB[930] Info (dab_steng.c:1756 dab_DabStatus)   Received error state=0 received Mode = 0
00:00:17.601 DAB[930] Info (dab_steng.c:1785 dab_DabStatus) Success: posting DAB_HMI_SendSignal_DAB_Mode_Status status signal with mode = 0
00:00:17.601 DAB[930] Info (dab_steng.c:330 DAB_PostMessageToStateMachine) Posting event 32 to state machine
00:00:17.601 DAB[930] Info (dab_steng.c:689 dab_IdleState_EventHandler) DAB_IDLE_STATE: Received Event 32
00:00:17.601 DAB[930] Info (dab_vbs_interface.c:2926 dab_vbs_ConnectionStatus_cb) TAU Status received from VBS with value::1
00:00:17.601 DAB[930] Info (dab_steng.c:330 DAB_PostMessageToStateMachine) Posting event 38 to state machine
00:00:17.601 DAB[930] Info (dab_steng.c:689 dab_IdleState_EventHandler) DAB_IDLE_STATE: Received Event 38
00:00:17.601 DAB[930] Info (dab_steng.c:396 dab_TopState_EventHandler) DAB_TOP_STATE: Received Event 38
00:00:17.601 BLM_SETTINGS[386] Info (settings_vbs_interface.cpp:11697 UpdateSymLinkForDSPConfiguration) Set DSP symlink to /jci/dsp/dsp_J36A-NoBose.xml, index in table 7
00:00:17.601 BLM_SETTINGS[386] Info (settings_symlink.hpp:228 _int_Set) symlink file /data/dsp.xml and its conatins "/jci/dsp/dsp_J36A-NoBose.xml" are OK
00:00:17.601 BLM_SETTINGS[386] Info (settings_service_funs.cpp:1269 SETTINGS_Connect_svc) connecting client:com.jci.settings.BLM_CD
00:00:17.601 BLM_SETTINGS[386] Info (settings_service_funs.cpp:5921 SETTINGS_Get_Settings_S16_svc) key path : /1/com/jci/maz/cmu/Region
00:00:17.601 BLM_SETTINGS[532] Info (settings_client_funs.cpp:1458 SETTINGS_Client_Get_S16_cb) SETTINGS_Client_Get_S16_cb
00:00:17.601 BLM_SETTINGS[521] Info (settings_client_funs.cpp:2907 SETTINGS_Client_OnChange_S16_cb) SETTINGS_Client_OnChange_S16_cb
00:00:17.601 BLM_SETTINGS[386] Info (settings_service_funs.cpp:1269 SETTINGS_Connect_svc) connecting client:com.jci.settings.dabblm
00:00:17.601 BLM_SETTINGS[386] Info (settings_service_funs.cpp:5921 SETTINGS_Get_Settings_S16_svc) key path : /1/com/jci/maz/cmu/Region
00:00:17.601 BLM_SETTINGS[532] Info (settings_client_funs.cpp:1487 SETTINGS_Client_Get_S16_cb) Client Name [com.jci.settings.testdiag], returned value 1 for setting ID 140
00:00:17.601 DIAG[532] Info (testdiag_statemachine.c:18924 TESTDIAG_Settings_GetVehicleType_cb) Vehicle Type is 1
00:00:17.601 BLM_SETTINGS[521] Info (settings_client_funs.cpp:2937 SETTINGS_Client_OnChange_S16_cb) Client Name [com.jci.BLM_TIME_TO_BLM_SETTINGS]
00:00:17.601 XM_RADIO[931] Info (xm_settings.c:226 xm_ReadChannelLockRegistry) Channel Lock Status Registry No. 3: 00
00:00:17.601 DAB[930] Info (dab_vbs_interface.c:2926 dab_vbs_ConnectionStatus_cb) TAU Status received from VBS with value::100
00:00:17.601 BLM_SETTINGS[928] Info (settings_client_funs.cpp:422 BLM_SEETINGS_Connect_cb) Client Name [com.jci.settings.BLM_CD]
00:00:17.601 BLM_SETTINGS[521] Info (settings_client_funs.cpp:2760 SETTINGS_Client_ExtOnChange_U8) client [com.jci.BLM_TIME_TO_BLM_SETTINGS] com/jci/blm/settings/Time/GPS_Sync
00:00:17.601 XM_RADIO[931] Info (xm_settings.c:226 xm_ReadChannelLockRegistry) Channel Lock Status Registry No. 4: 00
00:00:17.601 DAB[930] Warn (dab_vbs_interface.c:2942 dab_vbs_ConnectionStatus_cb) Invalid TAU status received from VBS
00:00:17.601 BLM_SETTINGS[928] Info (settings_client_funs.cpp:1458 SETTINGS_Client_Get_S16_cb) SETTINGS_Client_Get_S16_cb
00:00:17.601 BLM_SETTINGS[386] Info (settings_service_funs.cpp:6617 SETTINGS_OnChange_Settings_U8_svc) client:com.jci.BLM_TIME_TO_BLM_SETTINGS key path : /2/com/jci/blm/settings/Time/GPS_Sync
00:00:17.601 XM_RADIO[931] Info (xm_settings.c:139 xm_read_EnableXMFeatureRegistry) <=================Enable XM Status: 1 =================>
00:00:17.601 BLM_SETTINGS[930] Info (settings_client_funs.cpp:422 BLM_SEETINGS_Connect_cb) Client Name [com.jci.settings.dabblm]
00:00:17.601 BLM_SETTINGS[928] Info (settings_client_funs.cpp:1487 SETTINGS_Client_Get_S16_cb) Client Name [com.jci.settings.BLM_CD], returned value 2 for setting ID 74
00:00:17.601 XM_RADIO[931] Info (xm_steng.c:402 xm_TopState_EventHandler) XM_TOP_STATE: Received Event 2
00:00:17.601 DAB[930] Warn (dab_vbs_interface.c:2960 dab_vbs_ConnectionStatus_cb) TAU connection status not posted to state machine
00:00:17.601 BLM_CD[928] Info (cd_settings.cpp:107 SETTINGS_GetRegion_cb) Received region = CD_Region_NorthAmerica from BLM_SETTINGS.
00:00:17.601 XM_RADIO[931] Info (xm_steng.c:402 xm_TopState_EventHandler) XM_TOP_STATE: Received Event 1
00:00:17.601 DAB[930] Info (dab_vbs_interface.c:3127 dab_vbs_ConfigStatus_cb) DAB config Status received from VBS
00:00:17.601 XM_RADIO[931] Info (xm_steng.c:481 xm_DisconnectedState_EventHandler) XM_DISCONNECTED_STATE: Received Event 2
00:00:17.601 DAB[930] Info (dab_vbs_interface.c:3133 dab_vbs_ConfigStatus_cb) DAB config Status received from VBS with value::0,and DAB TAU destination code is ::1
00:00:17.601 XM_RADIO[931] Info (xm_steng.c:481 xm_DisconnectedState_EventHandler) XM_DISCONNECTED_STATE: Received Event 1
00:00:17.601 DAB[930] Info (dab_steng.c:330 DAB_PostMessageToStateMachine) Posting event 43 to state machine
00:00:17.601 XM_RADIO[931] Info (xm_hmi_interface.c:1723 XM_HMI_UpdateModeStatus) Posting XM Mode Status to HMI D-Bus: 1
00:00:17.601 BLM_SETTINGS[521] Info (settings_client_funs.cpp:2638 SETTINGS_Client_OnChange_U8_cb) SETTINGS_Client_OnChange_U8_cb
00:00:17.601 DAB[930] Info (dab_steng.c:689 dab_IdleState_EventHandler) DAB_IDLE_STATE: Received Event 43
00:00:17.601 XM_RADIO[931] Info (xm_steng.c:481 xm_DisconnectedState_EventHandler) XM_DISCONNECTED_STATE: Received Event 3
00:00:17.601 BLM_SETTINGS[521] Info (settings_client_funs.cpp:2668 SETTINGS_Client_OnChange_U8_cb) Client Name [com.jci.BLM_TIME_TO_BLM_SETTINGS]
00:00:17.601 DAB[930] Info (dab_steng.c:396 dab_TopState_EventHandler) DAB_TOP_STATE: Received Event 43
00:00:17.601 XM_RADIO[931] Info (xm_steng.c:402 xm_TopState_EventHandler) XM_TOP_STATE: Received Event 3
00:00:17.601 BLM_SETTINGS[521] Info (settings_client_funs.cpp:1400 SETTINGS_Client_ExtGet_U8) client [com.jci.BLM_TIME_TO_BLM_SETTINGS] com/jci/blm/settings/Time/TimeZone
00:00:17.601 DAB[930] Info (dab_steng.c:544 dab_TopState_EventHandler) Current region: 0
00:00:17.601 XM_RADIO[931] Info (xm_steng.c:402 xm_TopState_EventHandler) XM_TOP_STATE: Received Event 2
00:00:17.601 BLM_SETTINGS[386] Info (settings_service_funs.cpp:5856 SETTINGS_Get_Settings_U8_svc) key path : /2/com/jci/blm/settings/Time/TimeZone
00:00:17.601 DAB[930] Info (dab_steng.c:562 dab_TopState_EventHandler) Posting Install_Status signal:1
00:00:17.601 XM_RADIO[931] Info (xm_steng.c:568 xm_ConnectedState_EventHandler) XM_CONNECTED_STATE: Received Event 2
00:00:17.601 DAB[930] Info (dab_vbs_interface.c:2668 dab_vbs_SignalStrength_Status_cb) DAB SignalStrength received form VBS:: 0
00:00:17.601 XM_RADIO[931] Info (xm_steng.c:1077 xm_IdleState_EventHandler) XM_IDLE_STATE: Received Event 2
00:00:17.601 DAB[930] Info (dab_steng.c:330 DAB_PostMessageToStateMachine) Posting event 37 to state machine
00:00:17.601 XM_RADIO[931] Info (xm_steng.c:1077 xm_IdleState_EventHandler) XM_IDLE_STATE: Received Event 1
00:00:17.601 DAB[930] Info (dab_steng.c:689 dab_IdleState_EventHandler) DAB_IDLE_STATE: Received Event 37
00:00:17.601 XM_RADIO[931] Info (xm_hmi_interface.c:1276 XM_HMI_UpdateTuner_Status) Posting XM Tuner status to HMI D-Bus   Channel Index = 1 Ch = 0 SID = 0 Status = 0 Error = 0 Category = 0 Lock = 0 Name =
00:00:17.601 DAB[930] Info (dab_steng.c:396 dab_TopState_EventHandler) DAB_TOP_STATE: Received Event 37
00:00:17.601 BLM_SETTINGS[931] Info (settings_client_funs.cpp:759 BLM_SETTINGS_Client_ExtConnect) com.jci.settings.xmblm
00:00:17.601 DAB[930] Info (dab_vbs_interface.c:2388 dab_vbs_List_Status_cb) Received listUpdateReq from VBS:: 0
00:00:17.601 DAB[930] Info (dab_steng.c:330 DAB_PostMessageToStateMachine) Posting event 35 to state machine
00:00:17.601 DAB[930] Info (dab_steng.c:689 dab_IdleState_EventHandler) DAB_IDLE_STATE: Received Event 35
00:00:17.601 DAB[930] Info (dab_steng.c:396 dab_TopState_EventHandler) DAB_TOP_STATE: Received Event 35
00:00:17.601 DAB[930] Info (dab_steng.c:510 dab_TopState_EventHandler) DAB_LIST_STATUS value of **************************dab_state_msg.eventData.listStatus is 1 and dab_list_status is 1
00:00:17.601 DAB[930] Info (dab_steng.c:3508 dab_sendListUpdateStatus) dab_sendListUpdateStatus called
00:00:17.601 BLM_SETTINGS[930] Info (settings_client_funs.cpp:1458 SETTINGS_Client_Get_S16_cb) SETTINGS_Client_Get_S16_cb
00:00:17.601 BLM_SETTINGS[930] Info (settings_client_funs.cpp:1487 SETTINGS_Client_Get_S16_cb) Client Name [com.jci.settings.dabblm], returned value 2 for setting ID 74
00:00:17.601 BLM_SETTINGS[386] Info (settings_service_funs.cpp:1269 SETTINGS_Connect_svc) connecting client:com.jci.settings.xmblm
00:00:17.601 BLM_SETTINGS[931] Info (settings_client_funs.cpp:1559 SETTINGS_Client_ExtGet_S16) client [com.jci.settings.xmblm] com/jci/maz/cmu/Region
00:00:17.601 VBS_BUS_SETTINGS[336] Info (mod_settings_manage_svc.c:4302 VBS_SETTINGS_GetGCCConfigMgmtID1_svc) Get GCC Config Management for destination_1 returned Value = 0, Type = 9
00:00:17.601 XM_RADIO[931] Info (xm_main.c:146 ServiceRun) Running XM Service
00:00:17.601 DIAG[532] Info (testdiag_vbs_interface.c:1774 TESTDIAG_XMDiag_Response_cb) Received Operation Mode = 0
00:00:17.601 DIAG[532] Info (testdiag_statemachine.c:789 TESTDIAG_postMessageToStateMachine) Posting TESTDIAG_XM_DIAGMODE_RESPONSE_EVT (42) event to state machine in state: Default
00:00:17.601 BLM_SETTINGS[386] Info (settings_service_funs.cpp:5921 SETTINGS_Get_Settings_S16_svc) key path : /1/com/jci/maz/cmu/Region
00:00:17.601 AUXIN[921] Info (auxin_vbs_interface.c:324 VBS_AUXIN_TauStatus_cb) TAU Status received from VBS with value::1
00:00:17.601 BLM_SETTINGS[521] Info (settings_client_funs.cpp:1298 SETTINGS_Client_Get_U8_cb) SETTINGS_Client_Get_U8_cb
00:00:17.601 BLM_SETTINGS[521] Info (settings_client_funs.cpp:1328 SETTINGS_Client_Get_U8_cb) Client Name [com.jci.BLM_TIME_TO_BLM_SETTINGS], returned value 5 for setting ID 151
00:00:17.601 BLM_SETTINGS[521] Info (settings_client_funs.cpp:1400 SETTINGS_Client_ExtGet_U8) client [com.jci.BLM_TIME_TO_BLM_SETTINGS] com/jci/blm/settings/Time/GPS_Sync
00:00:17.601 BLM_SETTINGS[386] Info (settings_service_funs.cpp:5856 SETTINGS_Get_Settings_U8_svc) key path : /2/com/jci/blm/settings/Time/GPS_Sync
00:00:17.601 BLM_SETTINGS[931] Info (settings_client_funs.cpp:422 BLM_SEETINGS_Connect_cb) Client Name [com.jci.settings.xmblm]
00:00:17.718 BLM_SETTINGS[931] Info (settings_client_funs.cpp:1458 SETTINGS_Client_Get_S16_cb) SETTINGS_Client_Get_S16_cb
00:00:17.718 BLM_SETTINGS[931] Info (settings_client_funs.cpp:1487 SETTINGS_Client_Get_S16_cb) Client Name [com.jci.settings.xmblm], returned value 2 for setting ID 74
00:00:17.718 XM_RADIO[931] Info (xm_settings.c:564 xm_settings_Client_GetRegion_cb) <=======XM region: 2=========>
00:00:17.718 XM_RADIO[931] Info (xm_steng.c:1077 xm_IdleState_EventHandler) XM_IDLE_STATE: Received Event 15
00:00:17.718 XM_RADIO[931] Info (xm_steng.c:568 xm_ConnectedState_EventHandler) XM_CONNECTED_STATE: Received Event 15
00:00:17.718 XM_RADIO[931] Info (xm_steng.c:785 xm_ConnectedState_EventHandler) Vehicle data not yet recieved from VBS so not sending Install Status
00:00:17.718 XM_RADIO[931] Info (xm_hmi_interface.c:1782 XM_HMI_UpdateInstallStatus) Posting XM Install Status to HMI D-Bus: 0
00:00:17.738 BLM_SETTINGS[521] Info (settings_client_funs.cpp:1298 SETTINGS_Client_Get_U8_cb) SETTINGS_Client_Get_U8_cb
00:00:17.738 BLM_SETTINGS[521] Info (settings_client_funs.cpp:1328 SETTINGS_Client_Get_U8_cb) Client Name [com.jci.BLM_TIME_TO_BLM_SETTINGS], returned value 1 for setting ID 150
00:00:17.738 BLM_SETTINGS[521] Info (settings_client_funs.cpp:1559 SETTINGS_Client_ExtGet_S16) client [com.jci.BLM_TIME_TO_BLM_SETTINGS] com/jci/blm/settings/Time/TimeDST
00:00:17.738 BLM_SETTINGS[386] Info (settings_service_funs.cpp:5921 SETTINGS_Get_Settings_S16_svc) key path : /2/com/jci/blm/settings/Time/TimeDST
00:00:17.750 BLM_SETTINGS[521] Info (settings_client_funs.cpp:1458 SETTINGS_Client_Get_S16_cb) SETTINGS_Client_Get_S16_cb
00:00:17.750 BLM_SETTINGS[521] Info (settings_client_funs.cpp:1487 SETTINGS_Client_Get_S16_cb) Client Name [com.jci.BLM_TIME_TO_BLM_SETTINGS], returned value 60 for setting ID 154
00:00:17.750 BLM_SETTINGS[521] Info (settings_client_funs.cpp:3301 SETTINGS_Client_ExtOnChange_U32) client [com.jci.BLM_TIME_TO_BLM_SETTINGS] com/jci/blm/settings/Time/TimeStamp
00:00:17.750 BLM_SETTINGS[386] Info (settings_service_funs.cpp:6737 SETTINGS_OnChange_Settings_U32_svc) client:com.jci.BLM_TIME_TO_BLM_SETTINGS key path : /2/com/jci/blm/settings/Time/TimeStamp
00:00:17.750 BLM_SETTINGS[521] Info (settings_client_funs.cpp:3179 SETTINGS_Client_OnChange_U32_cb) SETTINGS_Client_OnChange_U32_cb
00:00:17.750 BLM_SETTINGS[521] Info (settings_client_funs.cpp:3209 SETTINGS_Client_OnChange_U32_cb) Client Name [com.jci.BLM_TIME_TO_BLM_SETTINGS]
00:00:17.750 BLM_SETTINGS[521] Info (settings_client_funs.cpp:1721 SETTINGS_Client_ExtGet_U32) client [com.jci.BLM_TIME_TO_BLM_SETTINGS] com/jci/blm/settings/Time/TimeStamp
00:00:17.750 BLM_SETTINGS[386] Info (settings_service_funs.cpp:6023 SETTINGS_Get_Settings_U32_svc) key path : /2/com/jci/blm/settings/Time/TimeStamp
00:00:17.766 BLM_SETTINGS[521] Info (settings_client_funs.cpp:1619 SETTINGS_Client_Get_U32_cb) SETTINGS_Client_Get_U32_cb
00:00:17.766 BLM_SETTINGS[521] Info (settings_client_funs.cpp:1649 SETTINGS_Client_Get_U32_cb) Client Name [com.jci.BLM_TIME_TO_BLM_SETTINGS], returned value 86400 for setting ID 153
00:00:17.766 BLM_TIME[521] Info (clock_settings.c:1272 blm_time_set_get_timestamp_cb) New Timestamp is : 86400 1970-01-02 00:00:00
00:00:17.766 BLM_TIME[521] Info (blm_time_logic.cpp:1649 blm_time_RtcToTime) Realtime is 1970-01-01 12:16:41
00:00:17.766 BLM_TIME[521] Info (blm_time_logic.cpp:2006 BLM_TIME_LGC_Initialize) possible battery disconnect detected - time sync needed
00:00:17.766 BLM_TIME[521] Info (blm_time_logic.cpp:2014 BLM_TIME_LGC_Initialize) timestamp 1970-01-02 00:00:00 86400
00:00:17.766 BLM_TIME[521] Info (blm_time_logic.cpp:2022 BLM_TIME_LGC_Initialize)      sRTC 1970-01-01 12:16:41 44201
00:00:17.766 BLM_TIME[521] Info (blm_time_logic.cpp:2030 BLM_TIME_LGC_Initialize)        TZ 1969-12-31 16:00:00 -28800
00:00:17.766 BLM_TIME[521] Info (blm_time_logic.cpp:2038 BLM_TIME_LGC_Initialize)       DST 1970-01-01 01:00:00 3600
00:00:17.766 BLM_TIME[521] Warn (blm_time_logic.cpp:2088 BLM_TIME_LGC_Initialize) UTC corrected with 24h 1970-01-02 12:16:41
00:00:17.766 BLM_TIME[521] Info (time_client.cpp:1348 BLM_TIME2CPP_TIME_SetCompositeTime) Set CPP_TIME clock to 1970-01-02 12:16:41  TZ h:-8 m:0  DST h:1 m:0
00:00:17.766 CPP_TIME[521] Info (time_dbus_client_funs.cpp:4129 TIME_Client_SetDatetimeComponents) time is sync'd by client com.jci.BLM_TIME_TO_CPP_TIME (1970.01.02 12:16:41 0000.00.00 -8:00:00 0000.00.00 01:00:00 0000.00.00 00:00:00)
00:00:17.781 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_SetDatetimeComponents_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:17.781 CPP_TIME[450] Error (time_common.cpp:2518 TIME_IsValid_New_UTC) UTC new:1970.01.02 12:16:41 current:1970.01.01 00:00:17 difference is 130584s (17 - 130601)
00:00:17.781 CPP_TIME[450] Warn (time_common.cpp:2573 TIME_IsValid_New_TZ) TZ changed from 0000.00.00 00:00:00 to 0000.00.00 -8:00:00 (0 to -28800)
00:00:17.781 CPP_TIME[450] Warn (time_common.cpp:2622 TIME_IsValid_New_DST) DST changed from 0000.00.00 00:00:00 to 0000.00.00 01:00:00 (0 to 3600)
00:00:17.781 CPP_TIME[450] Info (time_dbus_service_funs.cpp:2272 time_SetDatetimeComponents_resp_cb) OK status = 100
00:00:17.781 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) time_SetDatetimeComponents_resp_cb|(none)  105401 1970.01.02 05:16:41|130601|-28800|3600|0|ARMED|RUN|keep|0|1|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.02 12:16:41|0000.00.00 -8:00:00|0000.00.00 01:00:00|0000.00.00 00:00:00|
00:00:17.781 CPP_TIME[450] Info (time__cpp_Timer.cpp:707 Dump) TicksReal : 17 | TicksRealOffset : 105384 | TicksReal + TicksRealOffset = 105401 1970.01.02 05:16:41
00:00:17.781 CPP_TIME[450] Info (time__cpp_TimeEvents.cpp:535 Dump) -------------------------------------------------------
00:00:17.781 CPP_TIME[450] Info (time__cpp_TimeEvents.cpp:535 Dump) Total events : 2
00:00:17.781 CPP_TIME[450] Info (time__cpp_TimeEvents.cpp:535 Dump) -------------------------------------------------------
00:00:17.781 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) void com::jci::time::cppTimeEvents::Dump()|(event) 36 1970.01.01 00:00:36|-1|0|0|0|ARMED|RUN|keep|2|2|0|com.jci.tds2cpptime|occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:32767.127.127 127:127:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|com.jci.tds2cpptime
00:00:17.781 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) void com::jci::time::cppTimeEvents::Dump()|(event) 36 1970.01.01 00:00:36|-1|0|0|0|ARMED|RUN|keep|2|2|0|com.jci.BLM_TIME_TO_CPP_TIME|occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:32767.127.127 127:127:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|com.jci.BLM_TIME_TO_CPP_TIME
00:00:17.781 CPP_TIME[521] Info (time_dbus_client_funs.cpp:3233 TIME_Client_GetDatetimeComposite) request to cpp_time : conn 0x4af38 : dbus 0x4dc20 : name com.jci.BLM_TIME_TO_CPP_TIME
00:00:17.781 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|no pResponse|(sync)  0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|3|9|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:17.781 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetimeComposite_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:17.781 BLM_TIME[521] Info (dbusTIME_service.c:194 BLM_TIME_HDBUS_ClockChanged) broadcasting 1-min signal 05:16
00:00:17.781 BLM_TIME[521] Info (service_manager.cpp:127 ServiceInit) [ok] - BLM_TIME is running
00:00:17.781 SM[213] Warn (sm_spawner.cpp:234 SM_so_spawn) User root not available in the board
00:00:17.819 BLM_TIME[521] Info (blm_time_logic.cpp:299 blm_time_lgc_LogicThread) Enter logic thread
00:00:17.821 BLM_TIME[521] Info (blm_time_gps.cpp:216 blm_time_gpsSyncThread) Now will request NNG GetTime.
00:00:17.828 BLM_TIME[521] Warn (blm_time_gps.cpp:230 blm_time_gpsSyncThread) Unable to get time from NNG (The name com.NNG.Api was not provided by any .service files)
00:00:17.829 BLM_TIME[521] Info (blm_time_gps.cpp:251 blm_time_gpsSyncThread) Starting GPS sync loop
00:00:17.829 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:00:17.840 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:00:17.886 XM_RADIO[931] Info (xm_vbs_interface.c:699 xm_VBS_DestinationHandler) Recieved Destination value form MOD_SETTINGS = 0
00:00:17.886 XM_RADIO[931] Info (xm_steng.c:1077 xm_IdleState_EventHandler) XM_IDLE_STATE: Received Event 24
00:00:17.886 XM_RADIO[931] Info (xm_steng.c:568 xm_ConnectedState_EventHandler) XM_CONNECTED_STATE: Received Event 24
00:00:17.886 XM_RADIO[931] Info (xm_steng.c:697 xm_ConnectedState_EventHandler) Destination1 value 0
00:00:17.886 XM_RADIO[931] Info (xm_hmi_interface.c:1782 XM_HMI_UpdateInstallStatus) Posting XM Install Status to HMI D-Bus: 0
00:00:17.886 XM_RADIO[931] Info (xm_vbs_interface.c:806 xm_VBS_TunerStatusHandler) Tuner status received from VBS with Radio Status::0 Operation Mode::0 Error Status:: 0 Reciving Chanel:: 0 Category::0 SID::0
00:00:17.886 XM_RADIO[931] Info (xm_steng.c:1077 xm_IdleState_EventHandler) XM_IDLE_STATE: Received Event 16
00:00:17.886 XM_RADIO[931] Info (xm_steng.c:1077 xm_IdleState_EventHandler) XM_IDLE_STATE: Received Event 18
00:00:17.886 XM_RADIO[931] Info (xm_vbs_interface.c:242 xm_VBS_ResponseHandler) XM VBS request callback is invoked with value 100
00:00:18.018 CPUGAUGE[205] Error (jci_cpu_gauge.cpp:397 runCpuMonitor) CPU utilization is 100%
00:00:18.063 TDS[1141] Info (tds.c:129 ServiceInit) SM Initializing TDS.
00:00:18.064 TDS[1141] Info (tds_smdb.c:84 TDS_SMDB_Initialize) TDS_SMDB_Initialize
00:00:18.071 SMDB[1141] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TrafficMapId" ignored.
00:00:18.074 TDS[1141] Info (tds_smdb.c:94 TDS_SMDB_Initialize) Success in initializing the SMDB Handle
00:00:18.075 TDS[1141] Info (tds.c:245 tds_initialize) Success in initializing the TDS SMDB.
00:00:18.086 TDS[1141] Info (tds.c:255 tds_initialize) Success in initializing the TDS ServiceDbus.
00:00:18.105 CPP_TIME[1141] Info (time_dbus_client_funs.cpp:2304 TIME_Client_Connect) will send connect request: conn 0x49e80 : dbus 0x4a430 : name com.jci.tds2cpptime
00:00:18.109 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_Connect_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:18.117 TDS[1141] Info (tds_interface.c:210 TDS_If_DbusConnectionPoll_Init) TDS_If_DbusConnectionPoll_Init: creating connection poll
00:00:18.119 TDS[1141] Info (tds_lot.cpp:271 TDS_LOT_DestroyObjectMaps) LOT Object Map is empty, nothing to destroy
00:00:18.120 TDS[1141] Info (tds_lot.cpp:281 TDS_LOT_DestroyObjectMaps) STM Object Map is empty, nothing to destroy
00:00:18.123 TDS[1141] Info (tds_interface.c:1172 tds_time_connect_cb) Client is connected
00:00:18.123 CPP_TIME[1141] Info (time_dbus_client_funs.cpp:3443 TIME_Client_RegisterForDatetimeChangeEvent) request to cpp_time : conn 0x49e80 : dbus 0x4a430 : name com.jci.tds2cpptime
00:00:18.130 CPP_TIME[450] Info (time_dbus_service_funs.cpp:2914 TIME_RegisterForDatetimeChangeEvent_svc) registering for event : 32767.127.127 127:127:00 client : com.jci.tds2cpptime
00:00:18.130 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_RegisterForDatetimeChangeEvent_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:18.130 CPP_TIME[450] Warn (time_common.cpp:772 TIME_convertStructuredTimeToTime) mktime - bad parameter :32767.127.127 127:127:00
00:00:18.130 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) time_RegisterForDatetimeChangeEvent_resp_cb|(event) 36 1970.01.01 00:00:36|-1|0|0|0|ARMED|RUN|keep|2|2|0|com.jci.tds2cpptime|occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:32767.127.127 127:127:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|com.jci.tds2cpptime
00:00:18.130 CPP_TIME[450] Warn (time_dbus_service_funs.cpp:1439 time_RegisterForDatetimeChangeEvent_resp_cb) already existing and will be deleted|(event) 36 1970.01.01 00:00:36|-1|0|0|0|ARMED|RUN|keep|2|2|0|com.jci.tds2cpptime|occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:32767.127.127 127:127:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|com.jci.tds2cpptime
00:00:18.130 CPP_TIME[450] Info (time_dbus_service_funs.cpp:1446 time_RegisterForDatetimeChangeEvent_resp_cb) adding event
00:00:18.135 TDS[1141] Info (tds_interface.c:1329 tds_time_registerForDatetimeChangeEvent) Successfully registered for 1 minute events from CPP Time
00:00:18.137 TDS[1141] Info (tds_interface.c:1066 tds_jvmm_startConnection) Waiting for clients....
00:00:18.139 CPP_TIME[1141] Warn (time__gen_DataMutex.hpp:785 DataLock) mx locked, WILL wait until unlocked for 0x469d8
00:00:18.141 CPP_TIME[1141] Warn (time_stack_backtrace.cpp:83 __int_ShowStackBackTraceByLevel) __int_ShowStackBackTraceByLevel(TIME_debug_level_e)
00:00:18.142 CPP_TIME[1141] Warn (time_stack_backtrace.cpp:83 __int_ShowStackBackTraceByLevel) com::jci::time::DataMutex::DataLock()
00:00:18.142 CPP_TIME[1141] Warn (time_stack_backtrace.cpp:83 __int_ShowStackBackTraceByLevel) /jci/lib/libjcitime_client.so(+0x3b6f8)
00:00:18.181 TDS[1141] Info (tds_xml.c:441 TDS_XML_Open) XML file loaded successfully
00:00:18.182 TDS[1141] Info (tds_lot.cpp:2048 tds_lot_insertArtExpObject) Successfully added ArtExp LOT object (key = 6143485262) to ArtExp map!
00:00:18.183 TDS[1141] Info (tds_lot.cpp:2048 tds_lot_insertArtExpObject) Successfully added ArtExp LOT object (key = 6384003502) to ArtExp map!
00:00:18.184 TDS[1141] Info (tds_lot.cpp:2048 tds_lot_insertArtExpObject) Successfully added ArtExp LOT object (key = 6770141614) to ArtExp map!
00:00:18.185 TDS[1141] Info (tds_lot.cpp:2048 tds_lot_insertArtExpObject) Successfully added ArtExp LOT object (key = 12280211886) to ArtExp map!
00:00:18.186 TDS[1141] Info (tds_lot.cpp:2074 tds_lot_insertSTMObject) Successfully added STM LOT object (key = 441633614702) to STM map!
00:00:18.187 TDS[1141] Info (tds_lot.cpp:2074 tds_lot_insertSTMObject) Successfully added STM LOT object (key = 3572664773486) to STM map!
00:00:18.188 TDS[1141] Info (tds_lot.cpp:2074 tds_lot_insertSTMObject) Successfully added STM LOT object (key = 3576959740782) to STM map!
00:00:18.189 TDS[1141] Info (tds_lot.cpp:2074 tds_lot_insertSTMObject) Successfully added STM LOT object (key = 3581254708078) to STM map!
00:00:18.194 TDS[1141] Info (tds_lot.cpp:2074 tds_lot_insertSTMObject) Successfully added STM LOT object (key = 3585549675374) to STM map!
00:00:18.194 TDS[1141] Info (tds_lot.cpp:2074 tds_lot_insertSTMObject) Successfully added STM LOT object (key = 3589844642670) to STM map!
00:00:18.194 TDS[1141] Info (tds_lot.cpp:2074 tds_lot_insertSTMObject) Successfully added STM LOT object (key = 3594139609966) to STM map!
00:00:18.194 TDS[1141] Info (tds_lot.cpp:2074 tds_lot_insertSTMObject) Successfully added STM LOT object (key = 3598434577262) to STM map!
00:00:18.194 TDS[1141] Info (tds_lot.cpp:2074 tds_lot_insertSTMObject) Successfully added STM LOT object (key = 3602729544558) to STM map!
00:00:18.194 TDS[1141] Info (tds_lot.cpp:2074 tds_lot_insertSTMObject) Successfully added STM LOT object (key = 3607024511854) to STM map!
00:00:18.194 TDS[1141] Info (tds_lot.cpp:302 TDS_LOT_InitializeObjectMaps) LOT Object Maps initialization were successful!
00:00:18.501 VBS_BUS_CDVDTV[336] Info (mod_cd_manage_svc.c:5219 VBS_CD_Start_Timer) Timer gs_tmrRetryCnt = 4
00:00:18.501 VBS_BUS_CDVDTV[336] Info (mod_cd_manage_svc.c:5437 VBS_CD_Send_DVD_Config_status_Req) Posting DVD Config Status Request to VIP
00:00:18.501 VBS_BUS_CDVDTV[336] Info (mod_cd_manage_svc.c:5370 VBS_CD_Send_CD_ReadyReq) Posting CDVDTV Ready Status Request to VIP
00:00:18.501 VBS_BUS_CDVDTV[336] Info (mod_cd_manage_svc.c:5841 VBS_CD_Send_DTV_RoutineTestReq) Posting DTV RoutineTest Status Request to VIP
00:00:18.501 VBS_BUS_CDVDTV[336] Info (mod_cd_manage_svc.c:5773 VBS_CD_Send_DTV_StatusReq) Posting DTV Status Request to VIP
00:00:18.504 VBS_BUS_CDVDTV[336] Info (mod_cd_manage_svc.c:5293 VBS_CD_Start_Timer) Timer Started : [CDTimerRetryCnt in decrement order = 4]
00:00:18.545 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:18.550 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:18.569 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:18.569 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:18.841 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:18.842 GUI_FRAMEWORK[640] Info (Websockets.js:290 ) APPSDK websocket open
00:00:18.843 GUI_FRAMEWORK[640] Info (Websockets.js:359 ) DBAPI websocket open
00:00:19.504 VBS_BUS_CDVDTV[336] Info (mod_cd_manage_svc.c:5219 VBS_CD_Start_Timer) Timer gs_tmrRetryCnt = 3
00:00:19.504 VBS_BUS_CDVDTV[336] Info (mod_cd_manage_svc.c:5437 VBS_CD_Send_DVD_Config_status_Req) Posting DVD Config Status Request to VIP
00:00:19.504 VBS_BUS_CDVDTV[336] Info (mod_cd_manage_svc.c:5370 VBS_CD_Send_CD_ReadyReq) Posting CDVDTV Ready Status Request to VIP
00:00:19.504 VBS_BUS_CDVDTV[336] Info (mod_cd_manage_svc.c:5841 VBS_CD_Send_DTV_RoutineTestReq) Posting DTV RoutineTest Status Request to VIP
00:00:19.504 VBS_BUS_CDVDTV[336] Info (mod_cd_manage_svc.c:5773 VBS_CD_Send_DTV_StatusReq) Posting DTV Status Request to VIP
00:00:19.507 VBS_BUS_CDVDTV[336] Info (mod_cd_manage_svc.c:5293 VBS_CD_Start_Timer) Timer Started : [CDTimerRetryCnt in decrement order = 3]
00:00:19.548 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:19.584 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:19.584 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:19.602 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:19.602 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:20.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:00:20.001 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:00:20.052 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:20.107 USBDTC[534] Info (usbdtcgpio.cpp:202 TimerCbk) 'ACC Status':Pin val stable
00:00:20.107 USBDTC[534] Info (usbdtcudev.cpp:405 UpdateMonitorStatus) Monitored device is present in the system! /sys/devices/platform/fsl-ehci.1/usb2/2-1 devnum: 2
00:00:20.507 VBS_BUS_CDVDTV[336] Info (mod_cd_manage_svc.c:5219 VBS_CD_Start_Timer) Timer gs_tmrRetryCnt = 2
00:00:20.507 VBS_BUS_CDVDTV[336] Info (mod_cd_manage_svc.c:5437 VBS_CD_Send_DVD_Config_status_Req) Posting DVD Config Status Request to VIP
00:00:20.507 VBS_BUS_CDVDTV[336] Info (mod_cd_manage_svc.c:5370 VBS_CD_Send_CD_ReadyReq) Posting CDVDTV Ready Status Request to VIP
00:00:20.507 VBS_BUS_CDVDTV[336] Info (mod_cd_manage_svc.c:5841 VBS_CD_Send_DTV_RoutineTestReq) Posting DTV RoutineTest Status Request to VIP
00:00:20.507 VBS_BUS_CDVDTV[336] Info (mod_cd_manage_svc.c:5773 VBS_CD_Send_DTV_StatusReq) Posting DTV Status Request to VIP
00:00:20.509 VBS_BUS_CDVDTV[336] Info (mod_cd_manage_svc.c:5293 VBS_CD_Start_Timer) Timer Started : [CDTimerRetryCnt in decrement order = 2]
00:00:20.557 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:20.612 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:20.618 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:20.631 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:20.635 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:21.059 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:21.510 VBS_BUS_CDVDTV[336] Info (mod_cd_manage_svc.c:5219 VBS_CD_Start_Timer) Timer gs_tmrRetryCnt = 1
00:00:21.510 VBS_BUS_CDVDTV[336] Info (mod_cd_manage_svc.c:5437 VBS_CD_Send_DVD_Config_status_Req) Posting DVD Config Status Request to VIP
00:00:21.510 VBS_BUS_CDVDTV[336] Info (mod_cd_manage_svc.c:5370 VBS_CD_Send_CD_ReadyReq) Posting CDVDTV Ready Status Request to VIP
00:00:21.510 VBS_BUS_CDVDTV[336] Info (mod_cd_manage_svc.c:5841 VBS_CD_Send_DTV_RoutineTestReq) Posting DTV RoutineTest Status Request to VIP
00:00:21.510 VBS_BUS_CDVDTV[336] Info (mod_cd_manage_svc.c:5773 VBS_CD_Send_DTV_StatusReq) Posting DTV Status Request to VIP
00:00:21.512 VBS_BUS_CDVDTV[336] Info (mod_cd_manage_svc.c:5293 VBS_CD_Start_Timer) Timer Started : [CDTimerRetryCnt in decrement order = 1]
00:00:21.561 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:21.646 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:21.649 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:21.667 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:21.667 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:22.064 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:22.512 VBS_BUS_CDVDTV[336] Info (mod_cd_manage_svc.c:5219 VBS_CD_Start_Timer) Timer gs_tmrRetryCnt = 0
00:00:22.566 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:22.679 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:22.691 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:22.698 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:22.698 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:23.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:00:23.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:00:23.069 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:23.571 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:23.712 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:23.719 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:23.735 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:23.735 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:24.074 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:24.142 CPUGAUGE[205] Error (jci_cpu_gauge.cpp:445 runCpuMonitor) CPU utilization is reduced to 13%
00:00:24.576 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:24.746 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:24.751 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:24.765 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:24.765 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:25.078 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:25.582 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:25.775 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:25.778 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:25.794 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:25.794 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:26.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:00:26.001 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:00:26.086 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:26.590 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:26.810 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:26.810 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:26.830 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:26.830 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:27.093 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:27.595 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:27.841 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:27.843 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:27.858 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:27.858 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:28.098 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:28.600 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:28.869 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:28.872 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:28.886 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:28.886 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:29.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:00:29.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:00:29.103 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:29.606 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:29.908 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:29.911 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:29.927 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:29.927 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:30.109 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:30.611 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:30.939 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:30.942 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:30.958 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:30.958 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:31.114 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:31.618 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:31.970 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:31.973 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:31.989 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:31.994 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:32.001 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:00:32.001 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:00:32.123 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:32.625 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:33.009 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:33.009 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:33.027 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:33.027 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:33.128 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:33.631 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:34.040 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:34.040 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:34.053 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:34.053 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:34.133 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:34.636 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:35.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:00:35.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:00:35.074 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:35.074 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:35.086 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:35.086 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:35.138 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:35.640 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:36.104 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:36.114 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:36.129 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:36.129 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:36.143 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:36.235 CPP_TIME[450] Warn (time__gen_DataMutex.hpp:785 DataLock) mx locked, WILL wait until unlocked for 0x2b3461a4
00:00:36.235 CPP_TIME[450] Warn (time_stack_backtrace.cpp:83 __int_ShowStackBackTraceByLevel) __int_ShowStackBackTraceByLevel(TIME_debug_level_e)
00:00:36.235 CPP_TIME[450] Warn (time_stack_backtrace.cpp:83 __int_ShowStackBackTraceByLevel) com::jci::time::DataMutex::DataLock()
00:00:36.235 CPP_TIME[450] Warn (time_stack_backtrace.cpp:83 __int_ShowStackBackTraceByLevel) /jci/lib/libjcitime_client.so(TIME_convertTimeToStructuredTime+0x84)
00:00:36.235 CPP_TIME[450] Warn (time_stack_backtrace.cpp:83 __int_ShowStackBackTraceByLevel) com::jci::time::cppTimeEvent::DumpInString(std::string&, char*)
00:00:36.235 CPP_TIME[450] Warn (time_stack_backtrace.cpp:83 __int_ShowStackBackTraceByLevel) com::jci::time::cppTimeEvent::Dump(char*)
00:00:36.235 CPP_TIME[450] Warn (time_stack_backtrace.cpp:83 __int_ShowStackBackTraceByLevel) /jci/time/svcjcitime.so(+0x26268)
00:00:36.235 CPP_TIME[450] Warn (time__gen_DataMutex.hpp:935 DataUnlock) mx is unlocked 0x2b3461a4 (previously was locked)
00:00:36.235 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|no pResponse|(event) 96 1970.01.01 00:01:36|-1|0|0|0|ARMED|RUN|keep|2|2|0|com.jci.BLM_TIME_TO_CPP_TIME|occurrence:1970.01.02 05:17:00|deviation:0000.00.00 00:00:00|time:32767.127.127 127:127:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|com.jci.BLM_TIME_TO_CPP_TIME
00:00:36.235 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|no pResponse|(event) 96 1970.01.01 00:01:36|-1|0|0|0|ARMED|RUN|keep|2|2|0|com.jci.tds2cpptime|occurrence:1970.01.02 05:17:00|deviation:0000.00.00 00:00:00|time:32767.127.127 127:127:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|com.jci.tds2cpptime
00:00:36.241 BLM_TIME[521] Info (time_client.cpp:807 blm_time_EventNotification_cb) Time from CPP_TIME: 05:17
00:00:36.241 BLM_TIME[521] Info (blm_time_logic.cpp:347 blm_time_lgc_LogicThread) blm_time_event (1) (mae 1970.01.02 05:17:00) (ts 1970.01.02 05:17:00) (tz 33621938:4357) (gps_sync 33621938) (td 1970.01.02 05:17:00 0 0 0 0 0)
00:00:36.241 BLM_TIME[521] Info (dbusTIME_service.c:194 BLM_TIME_HDBUS_ClockChanged) broadcasting 1-min signal 05:17
00:00:36.645 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:37.144 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:37.152 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:37.152 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:37.164 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:37.164 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:37.651 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:38.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:00:38.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:00:38.156 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:38.173 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:38.179 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:38.189 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:38.192 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:38.657 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:39.160 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:39.204 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:39.204 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:39.223 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:39.223 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:39.663 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:40.166 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:40.236 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:40.239 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:40.252 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:40.252 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:40.668 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:41.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:00:41.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:00:41.170 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:41.264 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:41.272 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:41.280 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:41.280 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:41.673 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:42.175 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:42.297 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:42.301 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:42.319 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:42.319 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:42.677 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:43.180 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:43.330 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:43.338 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:43.351 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:43.351 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:43.683 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:44.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:00:44.003 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:00:44.186 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:44.364 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:44.368 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:44.379 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:44.379 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:44.689 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:45.192 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:45.391 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:45.396 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:45.406 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:45.406 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:45.694 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:46.196 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:46.423 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:46.426 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:46.438 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:46.438 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:46.699 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:47.002 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:00:47.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:00:47.201 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:47.448 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:47.457 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:47.466 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:47.466 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:47.704 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:48.207 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:48.478 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:48.481 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:48.494 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:48.494 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:48.709 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:49.212 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:49.509 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:49.509 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:49.526 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:49.526 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:49.714 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:50.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:00:50.000 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:00:50.218 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:50.540 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:50.549 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:50.561 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:50.561 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:50.721 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:51.224 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:51.570 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:51.578 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:51.586 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:51.589 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:51.726 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:52.229 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:52.593 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:52.599 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:52.611 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:52.611 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:52.731 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:53.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:00:53.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:00:53.234 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:53.627 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:53.630 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:53.641 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:53.641 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:53.736 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:54.238 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:54.653 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:54.660 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:54.670 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:54.670 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:54.741 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:55.244 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:55.679 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:55.682 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:55.695 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:55.695 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:55.747 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:56.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:00:56.001 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:00:56.251 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:56.711 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:56.718 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:56.731 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:56.731 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:56.755 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:57.257 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:57.741 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:57.748 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:57.761 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:57.761 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:57.761 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:58.263 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:58.765 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:58.777 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:58.777 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:58.792 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:58.792 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:59.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:00:59.003 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:00:59.267 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:59.770 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:59.809 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:59.809 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:59.827 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:00:59.827 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:00.272 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:01:00.774 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:01:00.840 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:00.840 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:00.852 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:00.852 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:01.277 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:01:01.779 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:01:01.866 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:01.869 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:01.879 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:01.881 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
h00:01:02.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:01:02.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
w00:01:02.282 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:01:02.787 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:01:02.898 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:02.903 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:02.916 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:02.916 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
c00:01:03.291 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
lo00:01:03.793 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:01:03.933 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:03.939 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:03.947 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:03.947 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
ck00:01:04.295 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:01:04.798 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:01:04.963 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:04.966 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:04.977 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:04.977 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:05.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:01:05.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.

Thu Jan  1 12:17:28 1970  0.000000 seconds
/tmp/root # 00:01:05.300 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:01:05.803 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:01:05.992 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:05.998 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:06.008 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:06.008 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:06.306 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:01:06.808 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:01:07.025 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:07.031 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:07.043 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:07.045 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:07.311 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:01:07.813 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:01:08.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:01:08.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:01:08.051 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:08.061 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:08.068 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:08.071 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:08.317 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:01:08.809 GUI_FRAMEWORK[640] Warn (Websockets.js:160 ) Websockets retry limit reached. Now testing offline.
00:01:08.810 GUI_FRAMEWORK[640] Info (GuiFramework.js:272 ) * * * * * GUI is ready.  Sending Global.GetStartupSettings event to MMUI. * * * * *
00:01:08.810 GUI_FRAMEWORK[640] Error (Websockets.js:557 ) Failed to send MMUI message because websocket is closed: {"msgType":"event","eventId":"Global.GetStartupSettings","uiaId":"common","params":"{}","fromVui":false,"currentUiaId":"","currentContextId":""}
00:01:08.820 GUI_FRAMEWORK[640] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:01:08.821 GUI_FRAMEWORK[640] Warn (Websockets.js:236 ) MMUI websocket closed or could not be opened.
00:01:08.821 GUI_FRAMEWORK[640] Warn (Websockets.js:237 )    e.wasClean: false
00:01:08.821 GUI_FRAMEWORK[640] Warn (Websockets.js:238 )    e.reason:
00:01:08.821 GUI_FRAMEWORK[640] Warn (Websockets.js:239 )    e.code: 1005
00:01:08.827 GUI_FRAMEWORK[640] Error (GuiFramework.js:2607 ) * * * * FATAL ERROR - RESTARTING CMU : MMUI websocket crash
00:01:08.827 GUI_MANAGER[640] Critical (guiManager.c:255 vp_forceExit) CALLING TERMINATE !
00:01:08.831 OPERA_MAIN[640] Error (OperaDBUSService.cpp:174 OPERA_IHU_TerminateOpera_svc) GUI or OPERA PLUGIN requested terminate! - Watchdog disabled - ignore the call
00:01:09.085 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:09.092 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:09.101 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:09.101 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
/tmp/root # hwclock
Thu Jan  1 12:17:33 1970  0.000000 seconds
/tmp/root # 00:01:10.113 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:10.123 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:10.131 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:10.131 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:11.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:01:11.003 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:01:11.144 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:11.147 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:11.161 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:11.161 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:12.173 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:12.176 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:12.190 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:12.190 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:12.233 CPP_TIME[450] Warn (time__gen_DataMutex.hpp:785 DataLock) mx locked, WILL wait until unlocked for 0x2b4a2e08
00:01:12.233 CPP_TIME[450] Warn (time_stack_backtrace.cpp:83 __int_ShowStackBackTraceByLevel) __int_ShowStackBackTraceByLevel(TIME_debug_level_e)
00:01:12.233 CPP_TIME[450] Warn (time_stack_backtrace.cpp:83 __int_ShowStackBackTraceByLevel) com::jci::time::DataMutex::DataLock()
00:01:12.233 CPP_TIME[450] Warn (time_stack_backtrace.cpp:83 __int_ShowStackBackTraceByLevel) com::jci::time::Heartbeat::BeatReset()
00:01:12.233 CPP_TIME[450] Warn (time_stack_backtrace.cpp:83 __int_ShowStackBackTraceByLevel) TimerProcessingFunctionHandler(void*)
00:01:12.234 CPP_TIME[450] Warn (time__gen_DataMutex.hpp:935 DataUnlock) mx is unlocked 0x2b4a2e08 (previously was locked)
00:01:13.201 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:13.211 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:13.224 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:13.224 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:14.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:01:14.000 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:01:14.104 VDM[336] Info (vdm_eem_calc.c:2242 VDM_UpdateBarCVD_Drv1AvlFuelE_60_T) curr_dist 0 old_dist 0 diff 0
00:01:14.104 VDM[336] Info (vdm_eem_calc.c:2243 VDM_UpdateBarCVD_Drv1AvlFuelE_60_T) curr_fuel_amt 0 old_fuel_amt 0 diff 0
00:01:14.104 VDM[336] Info (vdm_eem_calc.c:2313 VDM_UpdateBarCVD_Drv1AvlFuelE_60_T) Value added to 60 graph is 0, count = 1
00:01:14.104 VBS_BUS_EEM[336] Info (mod_eem_timers.c:466 VBS_EEM_Time_Out) VDM_UpdateBarCVD_Drv1AvlFuelE_60_T SUCCESS
00:01:14.104 VDM[336] Info (vdm_eem_calc.c:2964 VDM_UpdateTotRangeBstByIS) TotRangeBstByIS_prev 0
00:01:14.104 VDM[336] Info (vdm_eem_calc.c:2977 VDM_UpdateTotRangeBstByIS)  Drv1IstpTm_curr 0 Drv1IstpTm_prev 0 fuelRate 27500
00:01:14.104 VBS_BUS_EEM[336] Info (mod_eem_timers.c:533 VBS_EEM_Time_Out) Sending 1 min expiry to BLM
00:01:14.239 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:14.242 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:14.257 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:14.257 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:15.272 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:15.277 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:15.289 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:15.289 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:16.300 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:16.307 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:16.316 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:16.316 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:17.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:01:17.000 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:01:17.329 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:17.338 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:17.345 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:17.345 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:18.360 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:18.366 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:18.375 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:18.375 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:18.664 GUI_MANAGER[640] Critical (guiManager.c:391 OnHeartbeatMissed) GUI didn't send any heartbeat for 10 seconds. Closing Opera.
00:01:18.666 OPERA_MAIN[640] Error (OperaDBUSService.cpp:174 OPERA_IHU_TerminateOpera_svc) GUI or OPERA PLUGIN requested terminate! - Watchdog disabled - ignore the call
00:01:19.390 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:19.396 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:19.406 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:19.406 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:20.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:01:20.000 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:01:20.421 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:20.427 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:20.438 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:20.438 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:21.453 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:21.460 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:21.467 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:21.469 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:22.483 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:22.486 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:22.498 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:22.500 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:23.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:01:23.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:01:23.516 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:23.521 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:23.533 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:23.533 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:24.546 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:24.552 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:24.564 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:24.564 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:25.573 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:25.577 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:25.591 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:25.591 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:26.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:01:26.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:01:26.606 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:26.609 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:26.624 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:26.624 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:27.634 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:27.637 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:27.645 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:27.648 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:28.663 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:28.666 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:28.674 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:28.676 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:28.811 GUI_FRAMEWORK[640] Error (GuiFramework.js:282 ) SYS_SETTINGS app didn't set all required values before timeout. CPP_GUIFWK is issuing initGui with necessary default values.
00:01:28.811 GUI_FRAMEWORK[640] Warn (GuiFramework.js:288 ) SYS_SETTINGS app didn't set region, using Region_NorthAmerica
00:01:28.812 GUI_FRAMEWORK[640] Warn (GuiFramework.js:298 ) SYS_SETTINGS app didn't set keybaord language, using en_US
00:01:28.813 GUI_FRAMEWORK[640] Warn (GuiFramework.js:303 ) SYS_SETTINGS app didn't set time format, using 12hrs
00:01:28.814 GUI_FRAMEWORK[640] Warn (GuiFramework.js:308 ) SYS_SETTINGS app didn't set temperature unit, using Fahrenheit
00:01:28.814 GUI_FRAMEWORK[640] Warn (GuiFramework.js:313 ) SYS_SETTINGS app didn't set ditance unit, using Miles
00:01:28.814 GUI_FRAMEWORK[640] Warn (GuiFramework.js:318 ) SYS_SETTINGS app didn't set VehicleType, using J36
00:01:28.815 GUI_FRAMEWORK[640] Info (GuiFramework.js:331 ) * * * * * GUI Settings are received  Sending Global.InitGui event to MMUI. * * * * *
00:01:28.816 GUI_FRAMEWORK[640] Error (Websockets.js:557 ) Failed to send MMUI message because websocket is closed: {"msgType":"event","eventId":"Global.InitGui","uiaId":"common","params":"{}","fromVui":false,"currentUiaId":"","currentContextId":""}
00:01:28.816 GUI_FRAMEWORK[640] Info (Websockets.js:269 ) Websockets.initGui now flushing queue with 0 non-startup messages.
00:01:29.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:01:29.003 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:01:29.691 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:29.693 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:29.705 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:29.705 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:30.720 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:30.727 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:30.735 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:30.739 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:31.751 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:31.761 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:31.770 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:31.770 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:32.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:01:32.001 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:01:32.781 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:32.789 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:32.800 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:32.800 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:33.820 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:33.820 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:33.835 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:33.835 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:34.847 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:34.852 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:34.865 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:34.865 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:35.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:01:35.005 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:01:35.877 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:35.885 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:35.897 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:35.897 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:36.234 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|no pResponse|(event) 156 1970.01.01 00:02:36|-1|0|0|0|ARMED|RUN|keep|2|2|0|com.jci.BLM_TIME_TO_CPP_TIME|occurrence:1970.01.02 05:18:00|deviation:0000.00.00 00:00:00|time:32767.127.127 127:127:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|com.jci.BLM_TIME_TO_CPP_TIME
00:01:36.234 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|no pResponse|(event) 156 1970.01.01 00:02:36|-1|0|0|0|ARMED|RUN|keep|2|2|0|com.jci.tds2cpptime|occurrence:1970.01.02 05:18:00|deviation:0000.00.00 00:00:00|time:32767.127.127 127:127:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|com.jci.tds2cpptime
00:01:36.237 BLM_TIME[521] Info (time_client.cpp:807 blm_time_EventNotification_cb) Time from CPP_TIME: 05:18
00:01:36.237 BLM_TIME[521] Info (blm_time_logic.cpp:347 blm_time_lgc_LogicThread) blm_time_event (1) (mae 1970.01.02 05:18:00) (ts 1970.01.02 05:18:00) (tz 33621938:4613) (gps_sync 33621938) (td 1970.01.02 05:18:00 0 0 0 0 0)
00:01:36.237 BLM_TIME[521] Info (dbusTIME_service.c:194 BLM_TIME_HDBUS_ClockChanged) broadcasting 1-min signal 05:18
00:01:36.909 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:36.914 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:36.928 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:36.928 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:37.938 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:37.945 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:37.960 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:37.960 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:38.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:01:38.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:01:38.973 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:38.978 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:38.989 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:38.989 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:40.003 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:40.012 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:40.025 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:40.025 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:41.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:01:41.000 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:01:41.034 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:41.041 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:41.048 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:41.051 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:42.066 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:42.072 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:42.081 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:42.081 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:43.094 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:43.098 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:43.111 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:43.114 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:44.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:01:44.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:01:44.131 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:44.137 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:44.144 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:44.144 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:45.157 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:45.161 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:45.174 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:45.176 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:46.190 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:46.192 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:46.202 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:46.205 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:47.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:01:47.000 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:01:47.221 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:47.224 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:47.236 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:47.236 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:48.245 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:48.253 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:48.264 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:48.264 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:49.274 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:49.277 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:49.289 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:49.289 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:50.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:01:50.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:01:50.304 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:50.306 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:50.323 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:50.323 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:51.334 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:51.334 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:51.348 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:51.348 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:52.364 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:52.373 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:52.384 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:52.384 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:53.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:01:53.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:01:53.397 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:53.403 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:53.418 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:53.418 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:54.432 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:54.435 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:54.446 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:54.446 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:55.460 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:55.463 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:55.475 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:55.475 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:56.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:01:56.001 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:01:56.486 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:56.492 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:56.503 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:56.503 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:57.520 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:57.523 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:57.536 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:57.536 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:58.547 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:58.555 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:58.564 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:58.564 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:59.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:01:59.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:01:59.578 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:59.585 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:59.595 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:01:59.595 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:00.609 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:00.620 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:00.631 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:00.631 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:01.644 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:01.651 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:01.663 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:01.663 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:02.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:02:02.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:02:02.672 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:02.679 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:02.690 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:02.690 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:03.700 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:03.707 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:03.718 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:03.718 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:04.731 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:04.735 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:04.745 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:04.745 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:05.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:02:05.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:02:05.762 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:05.765 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:05.775 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:05.775 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:06.790 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:06.792 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:06.804 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:06.804 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:07.821 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:07.828 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:07.839 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:07.839 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:08.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:02:08.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:02:08.853 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:08.857 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:08.872 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:08.872 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:09.882 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:09.894 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:09.903 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:09.903 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:09.954 SYSTEM[275] Error (state_machine.cpp:590 system_smm_LogTransitionInfo) Timeout for transition ("SYSTEM_InitState" --> "SYSTEM_NormalState")!
00:02:09.954 SYSTEM[275] Info (state_machine.cpp:771 system_smm_StateEnter) SYSTEM_NormalState
00:02:10.917 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:10.925 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:10.936 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:10.936 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:11.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:02:11.001 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:02:11.946 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:11.953 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:11.966 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:11.966 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:12.976 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:12.982 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:12.992 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:12.992 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:14.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:02:14.001 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:02:14.004 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:14.007 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:14.023 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:14.023 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:15.033 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:15.036 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:15.048 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:15.048 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:15.052 VDM[336] Info (vdm_eem_calc.c:2242 VDM_UpdateBarCVD_Drv1AvlFuelE_60_T) curr_dist 0 old_dist 0 diff 0
00:02:15.052 VDM[336] Info (vdm_eem_calc.c:2243 VDM_UpdateBarCVD_Drv1AvlFuelE_60_T) curr_fuel_amt 0 old_fuel_amt 0 diff 0
00:02:15.052 VDM[336] Info (vdm_eem_calc.c:2313 VDM_UpdateBarCVD_Drv1AvlFuelE_60_T) Value added to 60 graph is 0, count = 2
00:02:15.052 VBS_BUS_EEM[336] Info (mod_eem_timers.c:466 VBS_EEM_Time_Out) VDM_UpdateBarCVD_Drv1AvlFuelE_60_T SUCCESS
00:02:15.052 VDM[336] Info (vdm_eem_calc.c:2964 VDM_UpdateTotRangeBstByIS) TotRangeBstByIS_prev 0
00:02:15.052 VDM[336] Info (vdm_eem_calc.c:2977 VDM_UpdateTotRangeBstByIS)  Drv1IstpTm_curr 0 Drv1IstpTm_prev 0 fuelRate 27500
00:02:15.052 VBS_BUS_EEM[336] Info (mod_eem_timers.c:533 VBS_EEM_Time_Out) Sending 1 min expiry to BLM
00:02:16.066 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:16.071 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:16.080 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:16.080 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:17.002 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:02:17.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:02:17.096 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:17.102 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:17.117 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:17.117 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:18.130 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:18.130 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:18.144 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:18.144 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:19.158 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:19.161 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:19.173 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:19.173 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:20.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:02:20.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:02:20.187 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:20.190 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:20.202 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:20.202 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:21.218 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:21.218 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:21.233 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:21.233 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:22.244 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:22.251 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:22.261 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:22.264 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:23.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:02:23.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:02:23.276 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:23.281 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:23.290 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:23.293 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:24.310 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:24.317 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:24.328 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:24.328 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:25.342 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:25.346 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:25.359 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:25.361 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:26.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:02:26.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:02:26.368 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:26.375 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:26.384 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:26.384 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:27.400 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:27.405 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:27.420 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:27.420 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:28.433 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:28.436 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:28.447 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:28.447 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:29.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:02:29.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:02:29.462 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:29.465 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:29.476 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:29.476 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:30.487 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:30.494 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:30.501 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:30.501 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:31.519 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:31.523 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:31.535 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:31.535 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:32.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:02:32.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:02:32.546 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:32.554 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:32.563 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:32.563 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:33.580 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:33.580 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:33.598 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:33.598 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:34.613 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:34.619 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:34.632 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:34.632 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:35.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:02:35.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:02:35.642 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:35.650 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:35.661 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:35.661 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:36.234 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|no pResponse|(event) 216 1970.01.01 00:03:36|-1|0|0|0|ARMED|RUN|keep|2|2|0|com.jci.BLM_TIME_TO_CPP_TIME|occurrence:1970.01.02 05:19:00|deviation:0000.00.00 00:00:00|time:32767.127.127 127:127:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|com.jci.BLM_TIME_TO_CPP_TIME
00:02:36.234 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|no pResponse|(event) 216 1970.01.01 00:03:36|-1|0|0|0|ARMED|RUN|keep|2|2|0|com.jci.tds2cpptime|occurrence:1970.01.02 05:19:00|deviation:0000.00.00 00:00:00|time:32767.127.127 127:127:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|com.jci.tds2cpptime
00:02:36.237 BLM_TIME[521] Info (time_client.cpp:807 blm_time_EventNotification_cb) Time from CPP_TIME: 05:19
00:02:36.237 BLM_TIME[521] Info (blm_time_logic.cpp:347 blm_time_lgc_LogicThread) blm_time_event (1) (mae 1970.01.02 05:19:00) (ts 1970.01.02 05:19:00) (tz 33621938:4869) (gps_sync 33621938) (td 1970.01.02 05:19:00 0 0 0 0 0)
00:02:36.237 BLM_TIME[521] Info (dbusTIME_service.c:194 BLM_TIME_HDBUS_ClockChanged) broadcasting 1-min signal 05:19
00:02:36.670 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:36.676 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:36.687 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:36.687 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:37.698 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:37.705 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:37.716 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:37.716 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:38.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:02:38.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:02:38.730 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:38.733 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:38.743 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:38.743 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:39.756 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:39.763 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:39.772 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:39.772 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:40.782 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:40.786 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:40.798 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:40.798 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:41.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:02:41.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:02:41.816 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:41.821 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:41.835 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:41.835 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:42.846 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:42.856 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:42.865 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:42.865 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:43.877 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:43.880 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:43.896 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:43.896 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:44.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:02:44.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:02:44.909 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:44.912 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:44.929 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:44.929 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:45.939 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:45.946 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:45.958 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:45.958 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:46.972 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:46.977 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:46.992 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:46.992 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:47.001 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:02:47.001 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:02:48.006 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:48.012 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:48.023 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:48.023 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:49.035 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:49.038 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:49.052 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:49.052 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:50.001 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:02:50.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:02:50.067 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:50.074 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:50.082 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:50.082 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:51.094 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:51.101 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:51.112 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:51.112 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:52.127 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:52.130 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:52.141 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:52.141 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:53.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:02:53.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:02:53.153 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:53.162 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:53.172 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:53.172 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:54.186 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:54.191 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:54.202 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:54.202 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:55.210 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:55.219 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:55.229 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:55.229 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:56.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:02:56.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:02:56.241 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:56.245 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:56.255 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:56.257 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:57.273 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:57.276 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:57.291 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:57.291 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:58.300 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:58.308 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:58.319 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:58.319 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:59.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:02:59.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:02:59.334 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:59.337 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:59.349 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:02:59.349 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:00.361 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:00.367 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:00.374 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:00.377 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:01.389 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:01.392 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:01.399 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:01.401 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:02.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:03:02.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:03:02.419 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:02.422 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:02.429 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:02.432 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:03.443 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:03.446 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:03.460 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:03.460 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:04.471 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:04.474 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:04.487 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:04.487 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:05.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:03:05.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:03:05.498 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:05.501 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:05.515 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:05.515 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:06.530 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:06.530 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:06.546 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:06.546 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:07.562 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:07.568 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:07.577 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:07.580 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:08.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:03:08.001 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:03:08.593 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:08.601 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:08.617 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:08.617 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:09.630 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:09.634 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:09.643 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:09.647 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:10.665 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:10.668 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:10.679 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:10.679 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:11.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:03:11.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:03:11.694 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:11.700 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:11.711 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:11.711 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:12.730 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:12.733 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:12.747 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:12.747 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:13.761 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:13.769 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:13.778 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:13.778 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:14.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:03:14.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:03:14.792 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:14.796 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:14.806 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:14.806 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:15.693 VDM[336] Info (vdm_eem_calc.c:2242 VDM_UpdateBarCVD_Drv1AvlFuelE_60_T) curr_dist 0 old_dist 0 diff 0
00:03:15.693 VDM[336] Info (vdm_eem_calc.c:2243 VDM_UpdateBarCVD_Drv1AvlFuelE_60_T) curr_fuel_amt 0 old_fuel_amt 0 diff 0
00:03:15.693 VDM[336] Info (vdm_eem_calc.c:2313 VDM_UpdateBarCVD_Drv1AvlFuelE_60_T) Value added to 60 graph is 0, count = 3
00:03:15.693 VBS_BUS_EEM[336] Info (mod_eem_timers.c:466 VBS_EEM_Time_Out) VDM_UpdateBarCVD_Drv1AvlFuelE_60_T SUCCESS
00:03:15.693 VDM[336] Info (vdm_eem_calc.c:2964 VDM_UpdateTotRangeBstByIS) TotRangeBstByIS_prev 0
00:03:15.693 VDM[336] Info (vdm_eem_calc.c:2977 VDM_UpdateTotRangeBstByIS)  Drv1IstpTm_curr 0 Drv1IstpTm_prev 0 fuelRate 27500
00:03:15.693 VBS_BUS_EEM[336] Info (mod_eem_timers.c:533 VBS_EEM_Time_Out) Sending 1 min expiry to BLM
00:03:15.819 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:15.828 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:15.838 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:15.838 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:16.846 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:16.851 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:16.864 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:16.864 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:17.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:03:17.001 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:03:17.874 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:17.881 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:17.893 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:17.893 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:18.907 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:18.910 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:18.925 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:18.925 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:19.936 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:19.943 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:19.956 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:19.956 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:20.001 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:03:20.001 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:03:20.972 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:20.974 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:20.992 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:20.992 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:22.002 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:22.011 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:22.023 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:22.023 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:23.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:03:23.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:03:23.037 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:23.040 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:23.054 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:23.054 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:24.066 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:24.072 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:24.079 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:24.079 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:25.091 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:25.098 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:25.109 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:25.109 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:26.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:03:26.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:03:26.123 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:26.131 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:26.140 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:26.140 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:27.152 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:27.156 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:27.166 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:27.166 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:28.180 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:28.184 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:28.200 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:28.200 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:29.001 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:03:29.001 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:03:29.214 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:29.214 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:29.231 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:29.231 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:30.243 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:30.249 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:30.258 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:30.260 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:31.265 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:31.272 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:31.283 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:31.283 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:32.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:03:32.000 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:03:32.295 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:32.298 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:32.311 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:32.311 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:33.326 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:33.329 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:33.341 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:33.341 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:34.354 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:34.359 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:34.369 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:34.369 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:35.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:03:35.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:03:35.381 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:35.385 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:35.396 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:35.396 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:36.234 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|no pResponse|(event) 276 1970.01.01 00:04:36|-1|0|0|0|ARMED|RUN|keep|2|2|0|com.jci.BLM_TIME_TO_CPP_TIME|occurrence:1970.01.02 05:20:00|deviation:0000.00.00 00:00:00|time:32767.127.127 127:127:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|com.jci.BLM_TIME_TO_CPP_TIME
00:03:36.234 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|no pResponse|(event) 276 1970.01.01 00:04:36|-1|0|0|0|ARMED|RUN|keep|2|2|0|com.jci.tds2cpptime|occurrence:1970.01.02 05:20:00|deviation:0000.00.00 00:00:00|time:32767.127.127 127:127:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|com.jci.tds2cpptime
00:03:36.237 BLM_TIME[521] Info (time_client.cpp:807 blm_time_EventNotification_cb) Time from CPP_TIME: 05:20
00:03:36.237 BLM_TIME[521] Info (blm_time_logic.cpp:347 blm_time_lgc_LogicThread) blm_time_event (1) (mae 1970.01.02 05:20:00) (ts 1970.01.02 05:20:00) (tz 33621938:5125) (gps_sync 33621938) (td 1970.01.02 05:20:00 0 0 0 0 0)
00:03:36.237 BLM_TIME[521] Info (dbusTIME_service.c:194 BLM_TIME_HDBUS_ClockChanged) broadcasting 1-min signal 05:20
00:03:36.411 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:36.413 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:36.434 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:36.434 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:37.445 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:37.455 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:37.463 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:37.463 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:38.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:03:38.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:03:38.473 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:38.480 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:38.490 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:38.490 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:39.501 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:39.508 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:39.519 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:39.519 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:40.533 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:40.538 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:40.545 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:40.550 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:41.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:03:41.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:03:41.562 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:41.569 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:41.577 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:41.577 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:42.590 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:42.592 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:42.604 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:42.604 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:43.621 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:43.624 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:43.635 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:43.635 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:44.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:03:44.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:03:44.650 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:44.650 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:44.667 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:44.667 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:45.683 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:45.686 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:45.700 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:45.700 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:46.712 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:46.725 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:46.733 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:46.733 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:47.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:03:47.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:03:47.744 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:47.753 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:47.765 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:47.765 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:48.774 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:48.786 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:48.796 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:48.796 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:49.809 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:49.813 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:49.830 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:49.830 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:50.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:03:50.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:03:50.842 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:50.845 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:50.859 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:50.859 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:51.871 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:51.875 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:51.883 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:51.888 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:52.901 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:52.906 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:52.927 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:52.927 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:53.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:03:53.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:03:53.938 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:53.944 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:53.956 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:53.956 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:54.971 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:54.974 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:54.986 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:54.986 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:56.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:03:56.005 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:56.005 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:03:56.005 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:56.020 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:56.020 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:57.031 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:57.039 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:57.048 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:57.048 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:58.064 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:58.067 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:58.076 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:58.076 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:59.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:03:59.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:03:59.090 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:59.094 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:59.104 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:03:59.107 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:00.123 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:00.126 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:00.137 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:00.137 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:01.156 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:01.165 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:01.175 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:01.175 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:02.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:04:02.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:04:02.189 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:02.194 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:02.202 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:02.202 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:03.220 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:03.226 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:03.236 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:03.236 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:04.248 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:04.251 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:04.263 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:04.263 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:05.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:04:05.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:04:05.275 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:05.282 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:05.292 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:05.292 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:06.303 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:06.306 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:06.321 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:06.321 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:07.332 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:07.335 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:07.347 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:07.347 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:08.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:04:08.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:04:08.363 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:08.366 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:08.379 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:08.379 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:09.392 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:09.396 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:09.410 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:09.410 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:10.424 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:10.432 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:10.442 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:10.442 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:11.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:04:11.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:04:11.455 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:11.457 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:11.467 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:11.467 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:12.480 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:12.487 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:12.498 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:12.498 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:13.517 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:13.521 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:13.533 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:13.533 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:14.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:04:14.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:04:14.546 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:14.553 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:14.563 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:14.563 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:15.576 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:15.579 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:15.594 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:15.594 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:16.412 VDM[336] Info (vdm_eem_calc.c:2242 VDM_UpdateBarCVD_Drv1AvlFuelE_60_T) curr_dist 0 old_dist 0 diff 0
00:04:16.412 VDM[336] Info (vdm_eem_calc.c:2243 VDM_UpdateBarCVD_Drv1AvlFuelE_60_T) curr_fuel_amt 0 old_fuel_amt 0 diff 0
00:04:16.412 VDM[336] Info (vdm_eem_calc.c:2313 VDM_UpdateBarCVD_Drv1AvlFuelE_60_T) Value added to 60 graph is 0, count = 4
00:04:16.412 VBS_BUS_EEM[336] Info (mod_eem_timers.c:466 VBS_EEM_Time_Out) VDM_UpdateBarCVD_Drv1AvlFuelE_60_T SUCCESS
00:04:16.412 VDM[336] Info (vdm_eem_calc.c:2964 VDM_UpdateTotRangeBstByIS) TotRangeBstByIS_prev 0
00:04:16.412 VDM[336] Info (vdm_eem_calc.c:2977 VDM_UpdateTotRangeBstByIS)  Drv1IstpTm_curr 0 Drv1IstpTm_prev 0 fuelRate 27500
00:04:16.415 VBS_BUS_EEM[336] Info (mod_eem_timers.c:533 VBS_EEM_Time_Out) Sending 1 min expiry to BLM
00:04:16.618 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:16.618 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:16.635 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:16.635 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:17.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:04:17.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:04:17.647 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:17.655 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:17.665 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:17.665 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:18.675 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:18.683 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:18.695 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:18.695 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:19.702 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:19.709 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:19.724 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:19.724 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:20.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:04:20.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:04:20.736 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:20.739 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:20.751 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:20.751 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:21.764 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:21.767 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:21.778 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:21.778 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:22.790 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:22.796 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:22.805 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:22.805 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:23.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:04:23.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:04:23.819 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:23.827 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:23.838 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:23.838 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:24.849 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:24.855 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:24.870 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:24.870 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:25.881 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:25.886 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:25.899 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:25.899 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:26.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:04:26.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:04:26.913 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:26.920 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:26.934 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:26.934 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:27.944 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:27.949 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:27.963 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:27.963 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:28.974 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:28.982 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:28.993 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:28.993 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:29.001 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:04:29.001 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:04:30.009 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:30.009 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:30.026 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:30.026 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:31.035 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:31.042 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:31.049 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:31.053 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:32.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:04:32.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:04:32.057 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:32.064 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:32.074 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:32.074 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:33.086 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:33.090 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:33.101 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:33.101 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:34.119 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:34.122 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:34.138 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:34.138 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:35.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:04:35.001 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:04:35.148 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:35.156 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:35.166 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:35.166 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:36.175 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:36.179 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:36.191 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:36.191 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:36.234 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|no pResponse|(event) 336 1970.01.01 00:05:36|-1|0|0|0|ARMED|RUN|keep|2|2|0|com.jci.BLM_TIME_TO_CPP_TIME|occurrence:1970.01.02 05:21:00|deviation:0000.00.00 00:00:00|time:32767.127.127 127:127:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|com.jci.BLM_TIME_TO_CPP_TIME
00:04:36.234 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|no pResponse|(event) 336 1970.01.01 00:05:36|-1|0|0|0|ARMED|RUN|keep|2|2|0|com.jci.tds2cpptime|occurrence:1970.01.02 05:21:00|deviation:0000.00.00 00:00:00|time:32767.127.127 127:127:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|com.jci.tds2cpptime
00:04:36.237 BLM_TIME[521] Info (time_client.cpp:807 blm_time_EventNotification_cb) Time from CPP_TIME: 05:21
00:04:36.237 BLM_TIME[521] Info (blm_time_logic.cpp:347 blm_time_lgc_LogicThread) blm_time_event (1) (mae 1970.01.02 05:21:00) (ts 1970.01.02 05:21:00) (tz 33621938:5381) (gps_sync 33621938) (td 1970.01.02 05:21:00 0 0 0 0 0)
00:04:36.237 BLM_TIME[521] Info (dbusTIME_service.c:194 BLM_TIME_HDBUS_ClockChanged) broadcasting 1-min signal 05:21
00:04:37.202 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:37.205 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:37.219 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:37.219 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:38.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:04:38.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:04:38.235 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:38.244 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:38.253 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:38.253 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:39.265 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:39.268 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:39.280 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:39.280 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:40.292 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:40.298 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:40.306 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:40.306 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:41.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:04:41.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:04:41.325 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:41.331 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:41.342 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:41.342 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:42.358 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:42.361 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:42.373 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:42.373 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:43.388 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:43.391 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:43.401 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:43.404 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:44.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:04:44.001 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:04:44.419 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:44.427 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:44.436 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:44.436 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:45.448 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:45.456 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:45.464 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:45.464 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:46.476 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:46.478 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:46.492 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:46.492 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:47.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:04:47.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:04:47.505 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:47.508 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:47.523 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:47.523 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:48.534 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:48.537 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:48.552 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:48.552 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:49.566 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:49.569 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:49.583 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:49.583 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:50.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:04:50.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:04:50.598 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:50.609 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:50.622 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:50.622 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:51.634 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:51.640 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:51.651 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:51.651 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:52.666 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:52.670 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:52.682 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:52.682 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:53.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:04:53.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:04:53.694 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:53.700 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:53.709 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:53.709 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:54.726 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:54.734 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:54.743 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:54.743 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:55.758 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:55.765 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:55.773 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:55.773 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:56.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:04:56.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:04:56.789 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:56.794 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:56.802 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:56.802 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:57.827 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:57.831 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:57.841 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:57.841 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:58.857 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:58.860 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:58.872 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:58.872 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:59.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:04:59.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:04:59.883 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:59.891 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:04:59.900 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:04:59.900 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:00.913 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:00.916 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:00.930 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:00.930 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:01.942 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:01.948 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:01.960 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:01.960 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:02.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:05:02.001 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:05:02.972 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:02.982 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:02.994 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:02.994 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:04.007 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:04.007 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:04.024 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:04.024 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:05.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:05:05.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:05:05.047 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:05.047 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:05.060 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:05.060 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:06.071 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:06.075 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:06.088 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:06.088 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:07.101 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:07.104 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:07.118 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:07.118 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:08.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:05:08.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:05:08.133 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:08.136 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:08.146 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:08.146 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:09.159 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:09.166 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:09.176 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:09.176 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:10.187 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:10.190 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:10.201 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:10.203 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:11.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:05:11.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:05:11.215 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:11.221 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:11.230 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:11.233 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:12.238 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:12.245 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:12.254 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:12.257 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:13.265 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:13.272 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:13.284 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:13.284 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:14.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:05:14.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:05:14.297 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:14.303 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:14.314 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:14.314 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:15.334 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:15.343 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:15.352 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:15.355 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:16.364 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:16.370 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:16.380 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:16.380 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:17.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:05:17.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:05:17.100 VDM[336] Info (vdm_eem_calc.c:2242 VDM_UpdateBarCVD_Drv1AvlFuelE_60_T) curr_dist 0 old_dist 0 diff 0
00:05:17.100 VDM[336] Info (vdm_eem_calc.c:2243 VDM_UpdateBarCVD_Drv1AvlFuelE_60_T) curr_fuel_amt 0 old_fuel_amt 0 diff 0
00:05:17.100 VDM[336] Info (vdm_eem_calc.c:2313 VDM_UpdateBarCVD_Drv1AvlFuelE_60_T) Value added to 60 graph is 0, count = 5
00:05:17.100 VBS_BUS_EEM[336] Info (mod_eem_timers.c:466 VBS_EEM_Time_Out) VDM_UpdateBarCVD_Drv1AvlFuelE_60_T SUCCESS
00:05:17.100 VDM[336] Info (vdm_eem_calc.c:2964 VDM_UpdateTotRangeBstByIS) TotRangeBstByIS_prev 0
00:05:17.100 VDM[336] Info (vdm_eem_calc.c:2977 VDM_UpdateTotRangeBstByIS)  Drv1IstpTm_curr 0 Drv1IstpTm_prev 0 fuelRate 27500
00:05:17.100 VBS_BUS_EEM[336] Info (mod_eem_timers.c:533 VBS_EEM_Time_Out) Sending 1 min expiry to BLM
00:05:17.394 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:17.399 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:17.409 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:17.409 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:18.422 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:18.429 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:18.437 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:18.437 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:19.449 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:19.453 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:19.465 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:19.465 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:20.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:05:20.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:05:20.475 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:20.482 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:20.492 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:20.492 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:21.503 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:21.513 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:21.525 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:21.525 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:22.535 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:22.542 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:22.557 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:22.557 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:23.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:05:23.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:05:23.571 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:23.577 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:23.589 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:23.589 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:24.599 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:24.603 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:24.621 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:24.621 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:25.633 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:25.636 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:25.647 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:25.647 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:26.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:05:26.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:05:26.663 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:26.668 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:26.676 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:26.676 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:27.692 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:27.695 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:27.710 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:27.710 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:28.728 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:28.733 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:28.743 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:28.743 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:29.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:05:29.003 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:05:29.756 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:29.763 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:29.771 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:29.771 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:30.790 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:30.793 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:30.807 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:30.807 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:31.824 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:31.832 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:31.840 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:31.840 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:32.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:05:32.001 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:05:32.854 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:32.862 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:32.871 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:32.871 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:33.883 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:33.888 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:33.900 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:33.900 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:34.910 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:34.918 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:34.932 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:34.932 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:35.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:05:35.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:05:35.943 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:35.946 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:35.956 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:35.958 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:36.234 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|no pResponse|(event) 396 1970.01.01 00:06:36|-1|0|0|0|ARMED|RUN|keep|2|2|0|com.jci.BLM_TIME_TO_CPP_TIME|occurrence:1970.01.02 05:22:00|deviation:0000.00.00 00:00:00|time:32767.127.127 127:127:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|com.jci.BLM_TIME_TO_CPP_TIME
00:05:36.234 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|no pResponse|(event) 396 1970.01.01 00:06:36|-1|0|0|0|ARMED|RUN|keep|2|2|0|com.jci.tds2cpptime|occurrence:1970.01.02 05:22:00|deviation:0000.00.00 00:00:00|time:32767.127.127 127:127:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|com.jci.tds2cpptime
00:05:36.237 BLM_TIME[521] Info (time_client.cpp:807 blm_time_EventNotification_cb) Time from CPP_TIME: 05:22
00:05:36.237 BLM_TIME[521] Info (blm_time_logic.cpp:347 blm_time_lgc_LogicThread) blm_time_event (1) (mae 1970.01.02 05:22:00) (ts 1970.01.02 05:22:00) (tz 33621938:5637) (gps_sync 33621938) (td 1970.01.02 05:22:00 0 0 0 0 0)
00:05:36.237 BLM_TIME[521] Info (dbusTIME_service.c:194 BLM_TIME_HDBUS_ClockChanged) broadcasting 1-min signal 05:22
00:05:36.971 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:36.975 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:36.988 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:36.988 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:37.999 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:38.004 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:05:38.004 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:38.004 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:05:38.021 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:38.021 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:39.036 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:39.039 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:39.059 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:39.059 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:40.071 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:40.078 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:40.087 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:40.087 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:41.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:05:41.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:05:41.099 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:41.105 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:41.116 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:41.121 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:42.134 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:42.139 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:42.148 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:42.148 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:43.163 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:43.166 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:43.178 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:43.178 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:44.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:05:44.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:05:44.194 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:44.197 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:44.209 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:44.209 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:45.226 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:45.229 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:45.241 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:45.241 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:46.255 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:46.262 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:46.272 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:46.272 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:47.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:05:47.000 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:05:47.288 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:47.296 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:47.305 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:47.305 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:48.323 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:48.328 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:48.336 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:48.336 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:49.351 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:49.357 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:49.367 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:49.367 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:50.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:05:50.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:05:50.380 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:50.387 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:50.397 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:50.397 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:51.407 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:51.411 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:51.429 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:51.429 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:52.442 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:52.445 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:52.460 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:52.460 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:53.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:05:53.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:05:53.470 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:53.477 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:53.487 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:53.487 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|

/tmp/root # 00:05:54.500 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:54.503 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:54.518 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:54.518 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:55.532 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:55.540 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:55.553 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:55.553 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:56.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:05:56.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:05:56.566 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:56.566 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:56.583 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:56.583 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:57.598 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:57.601 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:57.614 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:57.614 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:58.182 kernel[] Info (: ) [  358.188626] usb 2-1.3: USB disconnect, device number 3
00:05:58.632 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:58.638 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:58.646 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:58.646 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:59.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:05:59.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:05:59.663 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:59.668 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:05:59.677 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:05:59.677 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:00.691 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:00.697 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:00.708 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:00.708 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:01.726 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:01.732 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:01.741 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:01.741 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:02.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:06:02.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:06:02.752 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:02.752 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:02.772 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:02.772 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:03.786 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:03.794 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:03.800 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:03.802 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:04.817 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:04.817 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:04.832 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:04.834 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:05.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:06:05.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:06:05.846 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:05.849 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:05.859 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:05.862 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:06.876 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:06.878 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:06.893 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:06.893 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:07.904 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:07.910 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:07.922 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:07.925 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:08.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:06:08.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:06:08.937 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:08.940 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:08.952 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:08.952 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:09.966 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:09.972 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:09.981 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:09.981 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:10.996 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:10.998 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:11.003 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:06:11.003 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:06:11.012 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:11.012 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:12.032 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:12.032 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:12.044 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:12.047 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:13.052 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:13.059 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:13.067 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:13.069 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:14.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:06:14.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:06:14.081 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:14.081 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:14.087 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:14.090 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:15.096 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:15.102 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:15.111 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:15.114 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:16.120 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:16.126 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:16.134 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:16.137 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:17.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:06:17.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:06:17.141 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:17.148 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:17.162 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:17.162 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:17.972 VDM[336] Info (vdm_eem_calc.c:2242 VDM_UpdateBarCVD_Drv1AvlFuelE_60_T) curr_dist 0 old_dist 0 diff 0
00:06:17.972 VDM[336] Info (vdm_eem_calc.c:2243 VDM_UpdateBarCVD_Drv1AvlFuelE_60_T) curr_fuel_amt 0 old_fuel_amt 0 diff 0
00:06:17.972 VDM[336] Info (vdm_eem_calc.c:2313 VDM_UpdateBarCVD_Drv1AvlFuelE_60_T) Value added to 60 graph is 0, count = 6
00:06:17.972 VBS_BUS_EEM[336] Info (mod_eem_timers.c:466 VBS_EEM_Time_Out) VDM_UpdateBarCVD_Drv1AvlFuelE_60_T SUCCESS
00:06:17.972 VDM[336] Info (vdm_eem_calc.c:2964 VDM_UpdateTotRangeBstByIS) TotRangeBstByIS_prev 0
00:06:17.972 VDM[336] Info (vdm_eem_calc.c:2977 VDM_UpdateTotRangeBstByIS)  Drv1IstpTm_curr 0 Drv1IstpTm_prev 0 fuelRate 27500
00:06:17.972 VBS_BUS_EEM[336] Info (mod_eem_timers.c:533 VBS_EEM_Time_Out) Sending 1 min expiry to BLM
00:06:18.173 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:18.177 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:18.189 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:18.189 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:19.203 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:19.207 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:19.222 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:19.222 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:20.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:06:20.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:06:20.233 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:20.240 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:20.253 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:20.253 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:21.261 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:21.268 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:21.277 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:21.277 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:22.297 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:22.305 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:22.315 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:22.315 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:23.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:06:23.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:06:23.329 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:23.331 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:23.343 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:23.343 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:24.358 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:24.361 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:24.373 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:24.373 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:25.385 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:25.391 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:25.400 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:25.400 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:26.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:06:26.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:06:26.413 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:26.417 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:26.430 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:26.430 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:27.442 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:27.452 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:27.463 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:27.463 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:28.474 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:28.477 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:28.492 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:28.492 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:29.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:06:29.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:06:29.506 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:29.512 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:29.527 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:29.527 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:30.541 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:30.552 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:30.562 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:30.562 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:31.570 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:31.573 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:31.590 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:31.590 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:32.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:06:32.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:06:32.600 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:32.607 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:32.619 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:32.619 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:33.633 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:33.639 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:33.651 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:33.651 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:34.664 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:34.668 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:34.678 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:34.678 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:35.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:06:35.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:06:35.694 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:35.700 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:35.708 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:35.708 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:36.234 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|no pResponse|(event) 456 1970.01.01 00:07:36|-1|0|0|0|ARMED|RUN|keep|2|2|0|com.jci.BLM_TIME_TO_CPP_TIME|occurrence:1970.01.02 05:23:00|deviation:0000.00.00 00:00:00|time:32767.127.127 127:127:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|com.jci.BLM_TIME_TO_CPP_TIME
00:06:36.234 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|no pResponse|(event) 456 1970.01.01 00:07:36|-1|0|0|0|ARMED|RUN|keep|2|2|0|com.jci.tds2cpptime|occurrence:1970.01.02 05:23:00|deviation:0000.00.00 00:00:00|time:32767.127.127 127:127:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|com.jci.tds2cpptime
00:06:36.237 BLM_TIME[521] Info (time_client.cpp:807 blm_time_EventNotification_cb) Time from CPP_TIME: 05:23
00:06:36.237 BLM_TIME[521] Info (blm_time_logic.cpp:347 blm_time_lgc_LogicThread) blm_time_event (1) (mae 1970.01.02 05:23:00) (ts 1970.01.02 05:23:00) (tz 33621938:5893) (gps_sync 33621938) (td 1970.01.02 05:23:00 0 0 0 0 0)
00:06:36.237 BLM_TIME[521] Info (dbusTIME_service.c:194 BLM_TIME_HDBUS_ClockChanged) broadcasting 1-min signal 05:23
00:06:36.729 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:36.734 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:36.741 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:36.741 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:37.764 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:37.767 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:37.781 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:37.781 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:38.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:06:38.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:06:38.796 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:38.799 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:38.810 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:38.810 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:39.827 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:39.829 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:39.840 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:39.840 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:40.852 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:40.855 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:40.869 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:40.869 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:41.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:06:41.001 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:06:41.881 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:41.885 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:41.894 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:41.897 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:42.914 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:42.914 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:42.932 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:42.932 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:43.942 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:43.945 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:43.960 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:43.960 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:44.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:06:44.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:06:44.972 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:44.977 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:44.986 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:44.986 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:46.001 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:46.001 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:46.013 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:46.013 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:47.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:06:47.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:06:47.034 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:47.034 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:47.045 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:47.045 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:48.060 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:48.064 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:48.074 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:48.074 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:49.086 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:49.092 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:49.099 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:49.102 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:50.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:06:50.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:06:50.107 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:50.113 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:50.123 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:50.123 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:51.138 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:51.142 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:51.155 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:51.155 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:52.167 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:52.171 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:52.183 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:52.183 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:53.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:06:53.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:06:53.196 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:53.203 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:53.214 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:53.214 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:54.235 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:54.237 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:54.249 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:54.249 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:55.265 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:55.273 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:55.286 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:55.286 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:56.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:06:56.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:06:56.299 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:56.302 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:56.318 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:56.318 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:57.332 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:57.334 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:57.347 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:57.347 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:58.359 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:58.367 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:58.377 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:58.377 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:59.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:06:59.003 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:06:59.390 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:59.396 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:06:59.404 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:06:59.404 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:00.417 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:00.426 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:00.435 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:00.435 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:01.448 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:01.455 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:01.464 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:01.464 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:02.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:07:02.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:07:02.476 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:02.480 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:02.493 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:02.493 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:03.502 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:03.510 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:03.524 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:03.524 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:04.539 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:04.542 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:04.559 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:04.559 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:05.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:07:05.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:07:05.569 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:05.572 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:05.588 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:05.588 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:06.598 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:06.605 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:06.616 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:06.616 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:07.631 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:07.636 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:07.644 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:07.644 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:08.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:07:08.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:07:08.660 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:08.663 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:08.673 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:08.673 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:09.689 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:09.692 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:09.701 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:09.701 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:10.711 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:10.721 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:10.733 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:10.733 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:11.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:07:11.001 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:07:11.744 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:11.751 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:11.763 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:11.763 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:12.772 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:12.779 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:12.796 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:12.796 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:13.807 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:13.813 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:13.828 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:13.828 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:14.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:07:14.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:07:14.841 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:14.847 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:14.860 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:14.860 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:15.870 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:15.877 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:15.887 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:15.887 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:16.899 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:16.902 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:16.917 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:16.917 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:17.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:07:17.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:07:17.929 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:17.937 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:17.947 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:17.947 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:18.731 VDM[336] Info (vdm_eem_calc.c:2242 VDM_UpdateBarCVD_Drv1AvlFuelE_60_T) curr_dist 0 old_dist 0 diff 0
00:07:18.731 VDM[336] Info (vdm_eem_calc.c:2243 VDM_UpdateBarCVD_Drv1AvlFuelE_60_T) curr_fuel_amt 0 old_fuel_amt 0 diff 0
00:07:18.731 VDM[336] Info (vdm_eem_calc.c:2313 VDM_UpdateBarCVD_Drv1AvlFuelE_60_T) Value added to 60 graph is 0, count = 7
00:07:18.731 VBS_BUS_EEM[336] Info (mod_eem_timers.c:466 VBS_EEM_Time_Out) VDM_UpdateBarCVD_Drv1AvlFuelE_60_T SUCCESS
00:07:18.731 VDM[336] Info (vdm_eem_calc.c:2964 VDM_UpdateTotRangeBstByIS) TotRangeBstByIS_prev 0
00:07:18.731 VDM[336] Info (vdm_eem_calc.c:2977 VDM_UpdateTotRangeBstByIS)  Drv1IstpTm_curr 0 Drv1IstpTm_prev 0 fuelRate 27500
00:07:18.731 VBS_BUS_EEM[336] Info (mod_eem_timers.c:533 VBS_EEM_Time_Out) Sending 1 min expiry to BLM
00:07:18.961 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:18.964 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:18.975 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:18.975 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:19.987 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:19.990 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:20.004 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:20.004 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:07:20.004 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:07:20.004 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:21.024 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:21.030 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:21.043 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:21.043 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:22.055 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:22.061 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:22.072 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:22.072 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:23.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:07:23.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:07:23.084 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:23.087 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:23.098 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:23.098 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:24.111 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:24.119 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:24.129 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:24.129 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:25.140 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:25.143 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:25.156 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:25.156 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:26.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:07:26.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:07:26.165 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:26.172 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:26.181 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:26.181 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:27.191 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:27.198 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:27.209 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:27.209 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:28.223 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:28.225 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:28.237 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:28.237 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:29.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:07:29.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:07:29.249 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:29.252 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:29.263 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:29.265 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:30.281 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:30.289 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:30.299 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:30.299 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:31.322 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:31.329 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:31.337 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:31.337 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:32.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:07:32.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:07:32.352 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:32.355 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:32.365 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:32.365 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:33.377 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:33.382 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:33.393 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:33.393 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:34.406 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:34.415 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:34.429 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:34.429 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:35.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:07:35.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:07:35.441 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:35.445 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:35.458 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:35.458 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:36.234 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|no pResponse|(event) 516 1970.01.01 00:08:36|-1|0|0|0|ARMED|RUN|keep|2|2|0|com.jci.BLM_TIME_TO_CPP_TIME|occurrence:1970.01.02 05:24:00|deviation:0000.00.00 00:00:00|time:32767.127.127 127:127:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|com.jci.BLM_TIME_TO_CPP_TIME
00:07:36.234 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|no pResponse|(event) 516 1970.01.01 00:08:36|-1|0|0|0|ARMED|RUN|keep|2|2|0|com.jci.tds2cpptime|occurrence:1970.01.02 05:24:00|deviation:0000.00.00 00:00:00|time:32767.127.127 127:127:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|com.jci.tds2cpptime
00:07:36.237 BLM_TIME[521] Info (time_client.cpp:807 blm_time_EventNotification_cb) Time from CPP_TIME: 05:24
00:07:36.237 BLM_TIME[521] Info (blm_time_logic.cpp:347 blm_time_lgc_LogicThread) blm_time_event (1) (mae 1970.01.02 05:24:00) (ts 1970.01.02 05:24:00) (tz 33621938:6149) (gps_sync 33621938) (td 1970.01.02 05:24:00 0 0 0 0 0)
00:07:36.237 BLM_TIME[521] Info (dbusTIME_service.c:194 BLM_TIME_HDBUS_ClockChanged) broadcasting 1-min signal 05:24
00:07:36.468 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:36.475 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:36.484 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:36.487 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:37.492 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:37.497 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:37.507 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:37.507 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:38.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:07:38.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:07:38.527 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:38.530 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:38.543 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:38.543 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:39.558 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:39.563 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:39.572 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:39.572 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:40.586 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:40.588 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:40.600 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:40.600 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:41.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:07:41.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:07:41.612 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:41.618 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:41.632 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:41.632 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:42.642 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:42.645 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:42.661 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:42.661 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:43.677 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:43.681 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:43.694 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:43.694 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:44.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:07:44.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:07:44.705 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:44.709 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:44.727 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:44.727 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:45.739 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:45.742 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:45.761 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:45.761 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:46.772 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:46.776 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:46.792 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:46.792 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:47.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:07:47.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:07:47.806 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:47.809 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:47.825 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:47.825 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:48.836 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:48.842 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:48.854 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:48.854 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:49.866 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:49.869 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:49.881 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:49.881 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:50.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:07:50.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:07:50.894 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:50.899 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:50.906 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:50.906 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:51.921 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:51.928 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:51.937 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:51.937 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:52.947 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:52.952 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:52.964 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:52.964 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:53.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:07:53.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:07:53.975 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:53.982 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:53.994 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:53.994 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:55.007 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:55.010 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:55.030 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:55.030 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:56.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:07:56.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:07:56.044 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:56.044 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:56.058 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:56.058 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:57.070 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:57.073 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:57.086 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:57.086 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:58.099 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:58.099 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:58.116 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:58.116 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:59.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:07:59.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:07:59.131 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:59.134 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:07:59.144 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:07:59.144 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:00.161 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:00.164 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:00.175 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:00.175 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:01.187 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:01.194 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:01.202 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:01.202 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:02.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:08:02.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:08:02.219 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:02.225 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:02.234 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:02.234 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:03.255 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:03.258 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:03.274 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:03.274 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:04.285 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:04.293 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:04.301 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:04.301 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:05.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:08:05.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:08:05.314 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:05.318 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:05.328 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:05.328 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:06.340 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:06.343 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:06.356 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:06.356 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:07.368 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:07.371 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:07.382 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:07.385 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:08.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:08:08.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:08:08.400 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:08.404 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:08.419 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:08.419 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:09.430 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:09.435 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:09.444 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:09.447 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:10.462 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:10.468 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:10.476 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:10.476 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:11.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:08:11.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:08:11.492 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:11.499 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:11.511 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:11.511 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:12.528 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:12.530 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:12.541 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:12.541 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:13.557 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:13.560 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:13.571 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:13.571 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:14.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:08:14.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:08:14.585 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:14.591 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:14.600 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:14.600 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:15.612 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:15.622 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:15.632 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:15.632 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:16.645 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:16.651 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:16.664 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:16.664 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:17.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:08:17.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:08:17.676 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:17.679 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:17.695 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:17.695 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:18.709 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:18.713 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:18.733 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:18.733 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:19.446 VDM[336] Info (vdm_eem_calc.c:2242 VDM_UpdateBarCVD_Drv1AvlFuelE_60_T) curr_dist 0 old_dist 0 diff 0
00:08:19.446 VDM[336] Info (vdm_eem_calc.c:2243 VDM_UpdateBarCVD_Drv1AvlFuelE_60_T) curr_fuel_amt 0 old_fuel_amt 0 diff 0
00:08:19.446 VDM[336] Info (vdm_eem_calc.c:2313 VDM_UpdateBarCVD_Drv1AvlFuelE_60_T) Value added to 60 graph is 0, count = 8
00:08:19.446 VBS_BUS_EEM[336] Info (mod_eem_timers.c:466 VBS_EEM_Time_Out) VDM_UpdateBarCVD_Drv1AvlFuelE_60_T SUCCESS
00:08:19.446 VDM[336] Info (vdm_eem_calc.c:2964 VDM_UpdateTotRangeBstByIS) TotRangeBstByIS_prev 0
00:08:19.446 VDM[336] Info (vdm_eem_calc.c:2977 VDM_UpdateTotRangeBstByIS)  Drv1IstpTm_curr 0 Drv1IstpTm_prev 0 fuelRate 27500
00:08:19.446 VBS_BUS_EEM[336] Info (mod_eem_timers.c:533 VBS_EEM_Time_Out) Sending 1 min expiry to BLM
00:08:19.754 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:19.757 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:19.769 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:19.769 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:20.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:08:20.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:08:20.783 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:20.790 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:20.799 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:20.799 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:21.812 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:21.820 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:21.829 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:21.832 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:22.841 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:22.849 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:22.859 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:22.862 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:23.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:08:23.001 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:08:23.873 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:23.882 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:23.892 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:23.892 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:24.902 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:24.906 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:24.916 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:24.919 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:25.931 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:25.934 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:25.941 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:25.944 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:26.001 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:08:26.001 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:08:26.962 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:26.967 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:26.978 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:26.978 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:27.992 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:27.996 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:28.008 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:28.008 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:29.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:08:29.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:08:29.029 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:29.029 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:29.038 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:29.038 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:30.048 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:30.052 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:30.063 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:30.063 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:31.077 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:31.081 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:31.093 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:31.093 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:32.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:08:32.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:08:32.105 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:32.108 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:32.125 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:32.125 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:33.139 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:33.142 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:33.155 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:33.155 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:34.167 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:34.171 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:34.184 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:34.184 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:35.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:08:35.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:08:35.199 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:35.199 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:35.219 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:35.219 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:36.233 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:36.238 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:36.238 CPP_TIME[450] Warn (time__gen_DataMutex.hpp:785 DataLock) mx locked, WILL wait until unlocked for 0x2b4a2c48
00:08:36.243 CPP_TIME[450] Warn (time__cpp_TimeEvents.cpp:102 ProcessEvents) can't add event to output queue - will restore original event
00:08:36.243 CPP_TIME[450] Warn (time__gen_DataMutex.hpp:935 DataUnlock) mx is unlocked 0x2b4a2c48 (previously was locked)
00:08:36.243 CPP_TIME[450] Warn (time_stack_backtrace.cpp:83 __int_ShowStackBackTraceByLevel) __int_ShowStackBackTraceByLevel(TIME_debug_level_e)
00:08:36.243 CPP_TIME[450] Warn (time_stack_backtrace.cpp:83 __int_ShowStackBackTraceByLevel) com::jci::time::DataMutex::DataLock()
00:08:36.243 CPP_TIME[450] Warn (time_stack_backtrace.cpp:83 __int_ShowStackBackTraceByLevel) com::jci::time::cppTimer::GetTicksReal()
00:08:36.243 CPP_TIME[450] Warn (time_stack_backtrace.cpp:83 __int_ShowStackBackTraceByLevel) /jci/time/svcjcitime.so(+0x26c34)
00:08:36.243 CPP_TIME[450] Warn (time_stack_backtrace.cpp:83 __int_ShowStackBackTraceByLevel) CPP_TIME_SendCallBack(com::jci::time::cppTimeEvent*)
00:08:36.243 CPP_TIME[450] Warn (time_stack_backtrace.cpp:83 __int_ShowStackBackTraceByLevel) /jci/time/svcjcitime.so(+0x262c0)
00:08:36.243 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|no pResponse|(event) 576 1970.01.01 00:09:36|-1|0|0|0|ARMED|RUN|keep|2|2|0|com.jci.tds2cpptime|occurrence:1970.01.02 05:25:00|deviation:0000.00.00 00:00:00|time:32767.127.127 127:127:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|com.jci.tds2cpptime
00:08:36.258 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:36.258 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:37.233 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|no pResponse|(event) 576 1970.01.01 00:09:36|-1|0|0|0|ARMED|RUN|keep|2|2|0|com.jci.BLM_TIME_TO_CPP_TIME|occurrence:1970.01.02 05:25:01|deviation:0000.00.00 00:00:01|time:32767.127.127 127:127:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|com.jci.BLM_TIME_TO_CPP_TIME
00:08:37.236 CPP_TIME[521] Info (time_dbus_client_funs.cpp:620 TIME_Client_int_EventNotification_cb) deviation in received event : 1970.01.02 05:25:01 | deviation : 0000.00.00 00:00:01 client:com.jci.BLM_TIME_TO_CPP_TIME
00:08:37.236 BLM_TIME[521] Info (time_client.cpp:807 blm_time_EventNotification_cb) Time from CPP_TIME: 05:25
00:08:37.236 BLM_TIME[521] Info (time_client.cpp:733 blm_time_CheckTimeTransition) Deviation in event detected 1
00:08:37.236 BLM_TIME[521] Warn (time_client.cpp:782 blm_time_CheckTimeTransition) display time change from  1970-01-02 05:24:00 to 1970-01-02 05:25:01 (expected 1-minute change)
00:08:37.236 BLM_TIME[521] Info (blm_time_logic.cpp:347 blm_time_lgc_LogicThread) blm_time_event (1) (mae 1970.01.02 05:25:01) (ts 1970.01.02 05:25:01) (tz 33621938:71941) (gps_sync 33621938) (td 1970.01.02 05:25:01 0 0 0 0 0)
00:08:37.236 BLM_TIME[521] Info (dbusTIME_service.c:194 BLM_TIME_HDBUS_ClockChanged) broadcasting 1-min signal 05:25
00:08:37.276 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:37.276 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:37.287 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:37.287 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:38.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:08:38.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:08:38.298 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:38.302 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:38.312 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:38.312 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:39.331 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:39.334 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:39.345 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:39.345 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:40.358 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:40.364 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:40.373 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:40.376 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:41.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:08:41.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:08:41.383 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:41.389 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:41.395 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:41.398 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:42.402 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:42.407 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:42.422 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:42.425 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:43.428 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:43.433 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:43.441 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:43.446 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:44.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:08:44.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:08:44.460 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:44.463 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:44.477 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:44.477 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:45.494 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:45.494 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:45.510 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:45.510 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:46.524 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:46.532 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:46.540 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:46.540 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:47.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:08:47.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:08:47.557 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:47.559 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:47.570 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:47.570 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:48.583 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:48.587 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:48.597 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:48.597 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:49.607 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:49.612 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:49.627 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:49.627 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:50.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:08:50.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:08:50.639 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:50.642 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:50.657 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:50.657 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:51.667 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:51.674 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:51.684 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:51.684 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:52.697 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:52.702 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:52.713 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:52.713 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:53.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:08:53.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:08:53.734 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:53.741 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:53.756 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:53.756 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:54.768 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:54.771 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:54.783 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:54.783 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:55.795 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:55.803 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:55.811 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:55.811 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:56.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:08:56.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:08:56.827 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:56.834 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:56.843 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:56.843 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:57.859 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:57.865 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:57.875 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:57.875 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:58.887 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:58.894 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:58.905 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:58.905 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:59.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:08:59.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:08:59.917 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:59.922 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:08:59.934 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:08:59.934 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:09:00.947 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:09:00.951 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:09:00.964 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:09:00.964 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:09:01.976 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:09:01.982 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:09:01.993 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:09:01.993 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:09:02.001 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:09:02.001 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:09:03.011 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:09:03.011 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:09:03.029 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:09:03.029 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:09:04.040 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:09:04.043 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:09:04.056 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:09:04.056 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:09:05.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:09:05.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:09:05.068 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:09:05.074 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:09:05.084 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:09:05.084 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:09:06.094 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:09:06.098 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:09:06.109 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:09:06.109 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:09:07.123 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:09:07.123 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:09:07.137 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:09:07.137 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:09:08.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:09:08.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:09:08.148 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:09:08.155 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:09:08.165 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:09:08.165 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:09:09.176 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:09:09.180 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:09:09.188 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:09:09.191 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:09:10.208 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:09:10.215 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:09:10.230 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:09:10.230 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:09:11.000 BLM_TIME[521] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:09:11.002 BLM_TIME[521] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:09:11.242 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:09:11.245 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:09:11.258 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:09:11.258 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:09:12.268 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:09:12.275 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:09:12.285 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:09:12.285 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:09:13.296 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:09:13.300 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:09:13.312 CPP_TIME[336] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xbaf80 : dbus 0xbc348 : name com.jci.modvdt2cpptime
00:09:13.312 CPP_TIME[450] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
```
