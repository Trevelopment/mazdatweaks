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
00:00:01.000 lvds_service: Enable DECERR Auto reset failed.
00:00:01.000 lvds_service: Main is done
00:00:01.000 lvds_service: LINE FAULT(S) cleared
00:00:01.000 lvds_service: Write to ACC_Sense Edge Success
00:00:01.000 lvds_service: lvds_monitor_thread
00:00:01.000 lvds_service: Encryption disable failed.
00:00:01.000 lvds_service: Get Display Type failed.

FGSN: 28440171096819506
cmu login: root
Password:
00:00:08.951 kernel[] Note (: ) [    0.000000] Linux version 3.0.35 (bsp@jci) (gcc version 4.5.2 20101026 (prerelease) (GCC) ) #1 SMP PREEMPT Sun Mar 15 10:12:10 IST 2015
00:00:08.951 kernel[] Info (: ) [    0.000000] CPU identified as i.MX6Q, silicon rev 1.2
00:00:08.951 kernel[] Info (: ) [    0.000000] PERCPU: Embedded 7 pages/cpu @8c008000 s4736 r8192 d15744 u32768
00:00:08.951 kernel[] Note (: ) [    0.000000] Kernel command line: console=ttymxc1,115200 lpj=8495104 ldb=sin0 loglevel=3 usbcore.authorized_default=0 panic=23 mxc_vpu_mempool.max_instances=3 ibc=1.68.8 ibs=1.68.8 BOOTSEL=1 ibcinfo=0x00928000
00:00:08.951 kernel[] Info (: ) [    0.000000] PID hash table entries: 4096 (order: 2, 16384 bytes)
00:00:08.951 kernel[] Info (: ) [    0.000000] Dentry cache hash table entries: 131072 (order: 7, 524288 bytes)
00:00:08.951 kernel[] Info (: ) [    0.000000] Inode-cache hash table entries: 65536 (order: 6, 262144 bytes)
00:00:08.951 kernel[] Info (: ) [    0.000000] Memory: 512MB 256MB = 768MB total
00:00:08.951 kernel[] Note (: ) [    0.000000] Memory: 770704k/770704k available, 277872k reserved, 0K highmem
00:00:08.951 kernel[] Note (: ) [    0.000000] Virtual kernel memory layout:
00:00:08.951 Std[] Info (: ) Creating universally unique ID...
00:00:08.951 Std[] Info (: ) HMI Starting D-Bus daemon
00:00:08.951 Std[] Info (: ) Starting Service D-Bus daemon
00:00:08.951 Std[] Info (: ) JCI_SERVICE_BUS=unix:path=/tmp/dbus_service_socket
00:00:08.951 Std[] Info (: ) JCI_HMI_BUS=unix:path=/tmp/dbus_hmi_socket
00:00:08.951 Std[] Info (: ) Surface LOOPLOGO_SURFACE registered
00:00:08.951 Std[] Info (: ) NATIVEGUICTRL: Video Signal changed to 2
00:00:08.951 Std[] Info (: ) NATIVEGUICTRL: Reverse changed to 1
00:00:08.951 Std[] Info (: ) NATIVEGUICTRL: Hiding camera
00:00:08.951 Std[] Info (: ) V4L_ADDRESS=unix:path=/tmp/dbus_hmi_socket
00:00:08.951 NATIVEGUI[265] Info (natgui_settings_mgr.c:110 NatG_Settings_Init) NVRAM_Block_getValue return the currentLanguage = 0
00:00:08.951 NATIVEGUI[265] Info (natgui.c:780 NatG_Initialize) Success in initializing settings
00:00:08.951 NATIVEGUI[265] Info (natgui.c:789 NatG_Initialize) Success in initializing wayland window wrapper
00:00:08.951 NATIVEGUI[265] Info (natgui_surface_mgr.c:590 NatG_Redraw_Widget_Handler) NatG_Redraw_Widget_Handler
00:00:08.951 NATIVEGUI[265] Info (natgui.c:1187 NatG_GetImageDetails) Image = IMG_BANNER (78), [/jci/nativegui/images/SafetyText_US_English.png : (0, 433)], Language = 0
00:00:08.951 NATIVEGUI[265] Info (natgui.c:798 NatG_Initialize) Success in initializing HMI Dbus Connection
00:00:08.951 NATIVEGUI[265] Info (natgui.c:803 NatG_Initialize) Starting the SM client for BLM Setting language status
00:00:08.951 NATIVEGUI[265] Info (natgui.c:857 natg_Init_SM_Client) SM Client connection waiting for getting connected...
00:00:08.951 VIDEOCTRL[257] Info (vctrl_v4lcapture.c:843 dbus_connect)  (843) CDBusClientBase::connect - address: unix:path=/tmp/dbus_hmi_socket
00:00:08.951 NATIVEGUI[265] Info (natgui.c:1011 natg_smcl_connectCommand_cb) natg_smcl_connectCommand_cb
00:00:08.951 NATIVEGUI[265] Info (natgui.c:860 natg_Init_SM_Client) SM Clinet connection semaphore relased.
00:00:08.951 NATIVEGUI[265] Info (natgui.c:913 natG_smcl_SM_SubscribeSettings) Registering for SM Client subscription.
00:00:08.951 SYSTEM[262] Info (state_machine.cpp:771 system_smm_StateEnter) top
00:00:08.951 NATIVEGUI[265] Info (natgui.c:810 NatG_Initialize) Success in subscribing to SM for BLM Settings
00:00:08.951 VBS[302] Info (vbs_conf.c:1661 VBS_CONF_ProcessConfiguration) XML Configuration loaded successfully.
00:00:08.951 NATIVEGUI[265] Info (natgui.c:982 natg_smcl_GetSMServiceList) natg_smcl_GetSMServiceList
00:00:08.951 SYSTEM[262] Info (state_machine.cpp:771 system_smm_StateEnter) SYSTEM_InitState
00:00:08.951 VIDEOCTRL[257] Info (vctrl_service_core.cpp:66 VCTRL_CORE_InitializeConstSettings) Setting Constant settings for device 0
00:00:08.951 SYSTEM[262] Error (system_block_queue.cpp:159 SYSTEM_QUEUE_AddMessage) Bad input parameters!
00:00:08.951 NATIVEGUI[265] Info (natgui.c:615 ServiceInit) Success in initilizing the Service Native GUI.
00:00:08.951 SYSTEM[262] Error (state_machine.cpp:3419 system_smm_VbsEventsCb) Posting message to the queue failed!
00:00:08.951 NATIVEGUI[265] Info (natgui.c:633 ServiceRun) Running Native GUI
00:00:08.951 NATIVEGUI[265] Info (natgui.c:1049 natg_smcl_getServices_cb) natg_smcl_getServices_cb with services_count=10
00:00:08.951 NATIVEGUI[265] Info (natgui.c:1014 natg_smcl_connectCommand_cb) Received connect call back. posting smaphore (sem_post)
00:00:08.882 syslog-ng[285] Note (: ) syslog-ng starting up; version='3.3.5'
00:00:08.951 syslog-ng[285] Warn (: ) WARNING: you are using the pipe driver, underlying file is not a FIFO, it should be used by file(); filename='/dev/console'
00:00:09.310 kernel[] Note (: ) [    0.000000]     vector  : 0xffff0000 - 0xffff1000   (   4 kB)
00:00:09.310 kernel[] Note (: ) [    0.000000]     fixmap  : 0xfff00000 - 0xfffe0000   ( 896 kB)
00:00:09.310 kernel[] Note (: ) [    0.000000]     DMA     : 0xf4600000 - 0xffe00000   ( 184 MB)
00:00:09.310 kernel[] Note (: ) [    0.000000]     vmalloc : 0xc0800000 - 0xf2000000   ( 792 MB)
00:00:09.310 kernel[] Note (: ) [    0.000000]     lowmem  : 0x80000000 - 0xc0000000   (1024 MB)
00:00:09.310 kernel[] Note (: ) [    0.000000]     modules : 0x7f000000 - 0x80000000   (  16 MB)
00:00:09.310 kernel[] Note (: ) [    0.000000]       .init : 0x80008000 - 0x80040000   ( 224 kB)
00:00:09.310 kernel[] Note (: ) [    0.000000]       .text : 0x80040000 - 0x80440000   (4096 kB)
00:00:09.310 kernel[] Note (: ) [    0.000000]       .data : 0x80440000 - 0x8046a1a0   ( 169 kB)
00:00:09.310 kernel[] Note (: ) [    0.000000]        .bss : 0x8046a1c4 - 0x80500080   ( 600 kB)
00:00:09.310 Std[] Info (: ) TDE_TRIG_NORMAL_BOOT
00:00:09.310 Std[] Info (: ) Starting SM with /jci/sm/sm.conf .
00:00:09.310 Std[] Info (: ) jci
00:00:09.310 Std[] Info (: ) NATIVEGUICTRL: Successfully connected to DBus!
00:00:09.310 Std[] Info (: ) NNG configuration file found, no changed required.
00:00:09.310 Std[] Info (: ) Setting HDCP mode to 'enable'
00:00:09.310 Std[] Info (: ) =============== MAZ_CMU-150_55.00.753A  Flavor cmu150_NA ===============
00:00:09.310 Std[] Info (: ) Every 2s: /data_persist/dev/bin/00-start-adb/ssh-over-adb.sh1970-01-01 00:00:06
00:00:09.310 Std[] Info (: ) ALSA configuration file found. No config required.
00:00:09.310 Std[] Info (: ) DSP configuration file found.
00:00:09.354 kernel[] Info (: ) [    0.000000] SLUB: Genslabs=13, HWalign=32, Order=0-3, MinObjects=0, CPUs=2, Nodes=1
00:00:09.354 kernel[] Info (: ) [    0.000000] Preemptible hierarchical RCU implementation.
00:00:09.354 kernel[] Info (: ) [    0.000000] 	Verbose stalled-CPUs detection is disabled.
00:00:09.354 kernel[] Info (: ) [    0.000000] NR_IRQS:496 nr_irqs:496 496
00:00:09.354 kernel[] Info (: ) [    0.000000] MXC GPIO hardware
00:00:09.354 kernel[] Info (: ) [    0.000000] Init and register the timer to the framework with an 602602000 ns offset.
00:00:09.354 kernel[] Info (: ) [    0.000000] sched_clock: 32 bits at 3000kHz, resolution 333ns, wraps every 1431655ms
00:00:09.354 kernel[] Info (: ) [    0.000000] arm_max_freq=2
00:00:09.354 kernel[] Info (: ) [    0.000000] MXC_Early serial console at MMIO 0x21e8000 (options '115200')
00:00:09.354 kernel[] Info (: ) [    0.000000] bootconsole [ttymxc1] enabled
00:00:09.354 Std[] Info (: ) Surface NATGUI_SURFACE registered
00:00:09.354 Std[] Info (: ) Log started.
00:00:09.354 SYSTEM[262] Info (smclient_module.cpp:853 SYSTEM_SMCM_SetShutdownAcknowledgeTimeout) SYSTEM_SMCM_SetShutdownAcknowledgeTimeout(0) has set 500 milliseconds
00:00:09.354 SYSTEM[262] Info (hardware_signal_io.cpp:1229 system_hsrm_StartPollingTemperature) Starting temperature polling with 5000 ms interval...
00:00:09.354 SYSTEM[262] Info (state_machine.cpp:1114 system_smm_PrepareTransition) Preparing for SYSTEM_StandbyState!
00:00:09.354 SYSTEM[262] Info (state_machine.cpp:921 system_smm_ExpectAudioOff) Waiting for audio off...
00:00:09.354 SYSTEM[262] Info (state_machine.cpp:804 system_smm_ExpectDisplayAccOff) Waiting for display acc off...
00:00:09.354 SYSTEM[262] Info (state_machine.cpp:921 system_smm_ExpectAudioOff) Waiting for audio off...
00:00:09.354 SYSTEM[262] Info (state_machine.cpp:800 system_smm_ExpectDisplayAccOff) Still waiting for display acc off...
00:00:09.354 SYSTEM[262] Info (state_machine.cpp:934 system_smm_ExpectBootupFinished) Still waiting for bootup to finish...
00:00:09.354 SYSTEM[262] Info (DisplayStateManager.cpp:496 handleInitDisplayStateRequest) Getting display status...
00:00:09.354 LVDS[61] Info (lvds_dbus.c:1757 LVDS_SystemACCMonitoring_svc) System ACC Monitoring has started, safe to stop monitoring ACC internally
00:00:09.354 LVDS[61] Info (lvds_dbus.c:1912 LVDS_GetDisplayStatus_svc) Get display status request.
00:00:09.354 LVDS[61] Error (lvds_dbus.c:545 LVDS_Signal_DisplayStatus) Display Status Resp = PASSED with value 0
00:00:09.354 SYSTEM[262] Info (VideoProxy.cpp:607 display_status_confirmed_cb) Display state SLEEP detected!
00:00:09.354 LVDS[61] Info (lvds_dbus.c:1921 LVDS_GetDisplayStatus_svc) Sending fake display sleep status.
00:00:09.354 SYSTEM[262] Info (DisplayStateManager.cpp:310 onDisplayStatus) Display state is SLEEP!
00:00:09.354 SYSTEM[262] Info (state_machine.cpp:1937 system_smm_TopStateHandler) Reporting ACC OFF to clients...
00:00:09.354 SYSTEM[262] Info (state_machine.cpp:605 system_smm_LogDisplayEventInfo) Display is sleeping!
00:00:09.354 SYSTEM[262] Info (state_machine.cpp:921 system_smm_ExpectAudioOff) Waiting for audio off...
00:00:09.354 SYSTEM[262] Info (state_machine.cpp:934 system_smm_ExpectBootupFinished) Still waiting for bootup to finish...
00:00:09.354 SYSTEM[262] Info (state_machine.cpp:605 system_smm_LogDisplayEventInfo) Display is sleeping!
00:00:09.354 SYSTEM[262] Info (state_machine.cpp:921 system_smm_ExpectAudioOff) Waiting for audio off...
00:00:09.354 SYSTEM[262] Info (state_machine.cpp:934 system_smm_ExpectBootupFinished) Still waiting for bootup to finish...
00:00:09.375 kernel[] Info (: ) [    0.000000] Console: colour dummy device 80x30
00:00:09.375 kernel[] Info (: ) [    0.603015] Calibrating delay loop (skipped) preset value.. 1699.02 BogoMIPS (lpj=8495104)
00:00:09.375 kernel[] Info (: ) [    0.603045] pid_max: default: 32768 minimum: 301
00:00:09.375 kernel[] Info (: ) [    0.603433] Mount-cache hash table entries: 512
00:00:09.375 kernel[] Info (: ) [    0.604433] CPU: Testing write buffer coherency: ok
00:00:09.375 kernel[] Info (: ) [    0.604497] ftrace: allocating 13083 entries in 39 pages
00:00:09.375 kernel[] Info (: ) [    0.712130] Brought up 2 CPUs
00:00:09.375 kernel[] Info (: ) [    0.712150] SMP: Total of 2 processors activated (3398.04 BogoMIPS).
00:00:09.375 kernel[] Info (: ) [    0.712735] devtmpfs: initialized
00:00:09.375 kernel[] Info (: ) [    0.740081] print_constraints: dummy:
00:00:09.392 kernel[] Info (: ) [    0.740471] NET: Registered protocol family 16
00:00:09.392 kernel[] Info (: ) [    0.742491] print_constraints: vddpu: 725 <--> 1300 mV at 1225 mV fast normal
00:00:09.392 kernel[] Info (: ) [    0.742773] print_constraints: vddcore: 725 <--> 1300 mV at 1225 mV fast normal
00:00:09.392 kernel[] Info (: ) [    0.743033] print_constraints: vddsoc: 725 <--> 1300 mV at 1225 mV fast normal
00:00:09.392 kernel[] Info (: ) [    0.743326] print_constraints: vdd2p5: 2000 <--> 2775 mV at 2400 mV fast normal
00:00:09.392 kernel[] Info (: ) [    0.743593] print_constraints: vdd1p1: 800 <--> 1400 mV at 1100 mV fast normal
00:00:09.392 kernel[] Info (: ) [    0.743872] print_constraints: vdd3p0: 2625 <--> 3400 mV at 3000 mV fast normal
jci
/tmp/root #
00:00:09.392 kernel[] Info (: ) [    0.745086] SET_GPIO4_28 to 1
00:00:09.392 kernel[] Info (: ) [    0.745534] cpu regulator init ldo=0
00:00:09.392 kernel[] Info (: ) [    0.746099] am335xevm: shared transport platform init
00:00:09.395 kernel[] Info (: ) [    0.752634] SET_GPIO4_28 to 0
00:00:09.395 kernel[] Info (: ) [    0.752669] L310 cache controller enabled
00:00:09.395 kernel[] Info (: ) [    0.752685] l2x0: 16 ways, CACHE_ID 0x410000c7, AUX_CTRL 0x02070000, Cache size: 1048576 B
00:00:09.395 kernel[] Info (: ) [    0.757268] bio: create slab <bio-0> at 0
00:00:09.395 kernel[] Info (: ) [    0.759638] mxs-dma mxs-dma-apbh: initialized
00:00:09.395 kernel[] Note (: ) [    0.760254] SCSI subsystem initialized
00:00:09.395 kernel[] Info (: ) [    0.760674] spi_imx imx6q-ecspi.0: probed
00:00:09.395 kernel[] Info (: ) [    0.761038] spi_imx imx6q-ecspi.1: probed
00:00:09.395 kernel[] Info (: ) [    0.761374] spi_imx imx6q-ecspi.3: probed
00:00:09.395 kernel[] Info (: ) [    0.761785] usbcore: registered new interface driver usbfs
00:00:09.407 kernel[] Info (: ) [    0.761869] usbcore: registered new interface driver hub
00:00:09.407 kernel[] Info (: ) [    0.762000] usbcore: registered new device driver usb
00:00:09.407 kernel[] Info (: ) [    0.762014] Freescale USB OTG Driver loaded, $Revision: 1.55 $
00:00:09.407 kernel[] Info (: ) [    0.781555] imx-ipuv3 imx-ipuv3.0: IPU DMFC NORMAL mode: 1(0~1), 5B(4,5), 5F(6,7)
00:00:09.407 kernel[] Info (: ) [    0.801537] imx-ipuv3 imx-ipuv3.1: IPU DMFC NORMAL mode: 1(0~1), 5B(4,5), 5F(6,7)
00:00:09.407 kernel[] Info (: ) [    0.801899] Advanced Linux Sound Architecture Driver Version 1.0.24.
00:00:09.407 kernel[] Info (: ) [    0.883711] Switching to clocksource mxc_timer1
00:00:09.407 kernel[] Info (: ) [    0.906942] NET: Registered protocol family 2
00:00:09.407 kernel[] Info (: ) [    0.907361] IP route cache hash table entries: 32768 (order: 5, 131072 bytes)
00:00:09.407 kernel[] Info (: ) [    0.908874] TCP established hash table entries: 131072 (order: 8, 1048576 bytes)
00:00:09.409 kernel[] Info (: ) [    0.910699] TCP bind hash table entries: 65536 (order: 7, 786432 bytes)
00:00:09.409 kernel[] Info (: ) [    0.911784] TCP: Hash tables configured (established 131072 bind 65536)
00:00:09.409 kernel[] Info (: ) [    0.911800] TCP reno registered
00:00:09.409 kernel[] Info (: ) [    0.911823] UDP hash table entries: 512 (order: 2, 16384 bytes)
00:00:09.409 kernel[] Info (: ) [    0.911865] UDP-Lite hash table entries: 512 (order: 2, 16384 bytes)
00:00:09.409 kernel[] Info (: ) [    0.912433] NET: Registered protocol family 1
00:00:09.409 kernel[] Info (: ) [    0.912786] Unpacking initramfs...
00:00:09.409 kernel[] Info (: ) [    1.035066] Freeing initrd memory: 1528K
00:00:09.409 kernel[] Info (: ) [    1.035804] Static Power Management for Freescale i.MX6
00:00:09.409 kernel[] Info (: ) [    1.035817] wait mode is enabled for i.MX6
00:00:09.422 kernel[] Info (: ) [    1.035939] cpaddr = c0880000 suspend_iram_base=c08e8000
00:00:09.422 kernel[] Info (: ) [    1.036039] PM driver module loaded
00:00:09.422 kernel[] Info (: ) [    1.036248] IMX usb wakeup probe
00:00:09.422 kernel[] Info (: ) [    1.036792] add wake up source irq 75
00:00:09.422 kernel[] Info (: ) [    1.040147] cpu regulator init ldo=0
00:00:09.422 kernel[] Info (: ) [    1.040221] i.MXC CPU frequency driver
00:00:09.422 kernel[] Info (: ) [    1.060627] msgmni has been set to 1508
00:00:09.422 kernel[] Info (: ) [    1.063773] io scheduler noop registered (default)
00:00:09.422 kernel[] Info (: ) [    1.064166] mxc_sdc_fb mxc_sdc_fb.0: register mxc display driver ldb
00:00:09.422 kernel[] Info (: ) [    1.094949] imx-sdma imx-sdma: loaded firmware 1.1
00:00:09.423 kernel[] Info (: ) [    1.098527] imx-sdma imx-sdma: initialized
00:00:09.423 kernel[] Info (: ) [    1.098869] Serial: IMX driver
00:00:09.423 kernel[] Note (: ) [    1.098975] imx-uart imx-uart.0: Enable IRTS and CTSC
00:00:09.423 kernel[] Info (: ) [    1.098999] imx-uart.0: ttymxc0 at MMIO 0x2020000 (irq = 58) is a IMX
00:00:09.423 kernel[] Note (: ) [    1.099217] imx-uart imx-uart.1: Enable IRTS and CTSC
00:00:09.423 kernel[] Info (: ) [    1.099240] imx-uart.1: ttymxc1 at MMIO 0x21e8000 (irq = 59) is a IMX
00:00:09.423 kernel[] Info (: ) [    1.099281] console [ttymxc1] enabled, bootconsole disabled
00:00:09.423 kernel[] Note (: ) [    1.099494] imx-uart imx-uart.2: Enable IRTS and CTSC
00:00:09.423 kernel[] Info (: ) [    1.099515] imx-uart.2: ttymxc2 at MMIO 0x21ec000 (irq = 60) is a IMX
00:00:09.423 kernel[] Note (: ) [    1.099729] imx-uart imx-uart.3: CTS Trigger Level: 24
00:00:09.432 kernel[] Note (: ) [    1.099745] imx-uart imx-uart.3: RX Trigger Level: 16
00:00:09.432 kernel[] Info (: ) [    1.099765] imx-uart.3: ttymxc3 at MMIO 0x21f0000 (irq = 61) is a IMX
00:00:09.432 kernel[] Note (: ) [    1.099976] imx-uart imx-uart.4: Enable IRTS and CTSC
00:00:09.432 kernel[] Info (: ) [    1.099998] imx-uart.4: ttymxc4 at MMIO 0x21f4000 (irq = 62) is a IMX
00:00:09.432 kernel[] Warn (: ) [    1.103622] m25p80 spi0.0: found mx25l6405d, expected s25fl064p
00:00:09.432 kernel[] Info (: ) [    1.103643] m25p80 spi0.0: mx25l6405d (8192 Kbytes)
00:00:09.432 kernel[] Note (: ) [    1.103659] Creating 9 MTD partitions on "m25p80":
00:00:09.432 kernel[] Note (: ) [    1.103677] 0x000000000000-0x000000010000 : "bootstrap"
00:00:09.432 kernel[] Note (: ) [    1.104639] 0x000000010000-0x000000020000 : "boot-select"
00:00:09.432 kernel[] Note (: ) [    1.105513] 0x000000020000-0x000000040000 : "ibc1"
00:00:09.439 kernel[] Note (: ) [    1.106432] 0x000000040000-0x000000060000 : "ibc2"
00:00:09.439 kernel[] Note (: ) [    1.107346] 0x000000060000-0x000000070000 : "nv-config"
00:00:09.439 kernel[] Note (: ) [    1.108266] 0x000000070000-0x0000000d0000 : "config"
00:00:09.439 kernel[] Note (: ) [    1.109192] 0x0000000d0000-0x0000000e0000 : "jci-boot-diag"
00:00:09.439 kernel[] Note (: ) [    1.110108] 0x0000000e0000-0x0000007e0000 : "fail-safe"
00:00:09.439 kernel[] Note (: ) [    1.111056] 0x0000007e0000-0x000000800000 : "update"
00:00:09.439 kernel[] Info (: ) [    1.112468] Fixed MDIO Bus: probed
00:00:09.439 kernel[] Info (: ) [    1.112494] Initializing USB Mass Storage driver...
00:00:09.439 kernel[] Info (: ) [    1.112589] usbcore: registered new interface driver usb-storage
00:00:09.439 kernel[] Info (: ) [    1.112602] USB Mass Storage support registered.
00:00:09.448 kernel[] Info (: ) [    1.112612] i2c /dev entries driver
00:00:09.448 kernel[] Info (: ) [    1.113122] Linux video capture interface: v2.00
00:00:09.448 kernel[] Info (: ) [    1.144754] mxc_v4l2_output mxc_v4l2_output.0: V4L2 device registered as video16
00:00:09.448 kernel[] Info (: ) [    1.144918] mxc_v4l2_output mxc_v4l2_output.0: V4L2 device registered as video17
00:00:09.448 kernel[] Info (: ) [    1.145840] VPU initialized
00:00:09.448 kernel[] Info (: ) [    1.145916] vpu_mempool_init: Configuring buffers for 3 instances
00:00:09.448 kernel[] Info (: ) [    1.228354] ALSA device list:
00:00:09.448 kernel[] Info (: ) [    1.228366]   No soundcards found.
00:00:09.448 kernel[] Info (: ) [    1.229938] TCP cubic registered
00:00:09.448 kernel[] Info (: ) [    1.229953] NET: Registered protocol family 17
00:00:09.448 VIDEOCTRL[257] Info (vctrl_service_core.cpp:110 VCTRL_CORE_GetDayNightMode) Value read from NVRAM day for node 'lvds_bright_mode'
00:00:09.448 VIDEOCTRL[257] Info (vctrl_settings.c:237 BLM_VCTRL_OnChange_DayNight_Callback) DayNight Changed - value: DAY
00:00:09.454 kernel[] Note (: ) [    1.229989] Registering the dns_resolver key type
00:00:09.454 kernel[] Info (: ) [    1.230056] VFP support v0.3: implementor 41 architecture 3 part 30 variant 9 rev 4
00:00:09.454 kernel[] Info (: ) [    1.230196] Bus freq driver module loaded
00:00:09.454 kernel[] Info (: ) [    1.230208] Bus freq driver Enabled
00:00:09.454 kernel[] Info (: ) [    1.230269] mxc_dvfs_core_probe
00:00:09.454 kernel[] Info (: ) [    1.230422] DVFS driver module loaded
00:00:09.454 kernel[] Info (: ) [    1.230847] registered taskstats version 1
00:00:09.454 kernel[] Note (: ) 6>[    1.248711]
00:00:09.454 kernel[] Info (: ) [    1.248716] Device Registered: lvds_cdrv
00:00:09.454 kernel[] Info (: ) [    1.248729] Major number = 250, Minor number = 0
00:00:09.461 kernel[] Info (: ) [    1.248971] input: LVDS TouchScreen as /devices/virtual/input/input0
00:00:09.461 kernel[] Info (: ) [    1.249513] Running do_deferred_initcalls()
00:00:09.461 kernel[] Info (: ) [    1.249694] IMX usb wakeup probe
00:00:09.461 kernel[] Info (: ) [    1.250236] squashfs: version 4.0 (2009/01/31) Phillip Lougher
00:00:09.461 kernel[] Info (: ) [    1.250253] ehci_hcd: USB 2.0 'Enhanced' Host Controller (EHCI) Driver
00:00:09.461 kernel[] Info (: ) [    1.250501] fsl-ehci fsl-ehci.0: Freescale On-Chip EHCI Host Controller
00:00:09.461 kernel[] Info (: ) [    1.250539] fsl-ehci fsl-ehci.0: new USB bus registered, assigned bus number 1
00:00:09.461 kernel[] Info (: ) [    1.268768] Number of times open() was called: 1
00:00:09.461 kernel[] Info (: ) [    1.268784] MAJOR number = 250, MINOR number = 0
00:00:09.461 kernel[] Info (: ) [    1.268795] Process id of the current process: 61
00:00:09.464 kernel[] Info (: ) [    1.268806] ref=1
00:00:09.464 kernel[] Info (: ) [    1.271245] fsl-ehci fsl-ehci.0: irq 75, io base 0x02184000
00:00:09.464 kernel[] Info (: ) [    1.285299] [U] [        1.243966669] - xsg v4lcapture - starting up
00:00:09.464 kernel[] Info (: ) [    1.285331] [U] [        1.273834336] - xsg v4lcapture - streaming on
00:00:09.464 kernel[] Info (: ) [    1.291208] fsl-ehci fsl-ehci.0: USB 2.0 started, EHCI 1.00
00:00:09.464 kernel[] Info (: ) [    1.291490] usb usb1: New USB device found, idVendor=1d6b, idProduct=0002
00:00:09.464 kernel[] Info (: ) [    1.291508] usb usb1: New USB device strings: Mfr=3, Product=2, SerialNumber=1
00:00:09.464 kernel[] Info (: ) [    1.291523] usb usb1: Product: Freescale On-Chip EHCI Host Controller
00:00:09.464 kernel[] Info (: ) [    1.291535] usb usb1: Manufacturer: Linux 3.0.35 ehci_hcd
00:00:09.464 kernel[] Info (: ) [    1.291547] usb usb1: SerialNumber: fsl-ehci.0
00:00:09.473 kernel[] Info (: ) [    1.292236] hub 1-0:1.0: USB hub found
00:00:09.473 kernel[] Info (: ) [    1.292268] hub 1-0:1.0: 1 port detected
00:00:09.473 kernel[] Info (: ) [    1.292693] add wake up source irq 72
00:00:09.473 kernel[] Info (: ) [    1.292777] fsl-ehci fsl-ehci.1: Freescale On-Chip EHCI Host Controller
00:00:09.473 kernel[] Info (: ) [    1.292814] fsl-ehci fsl-ehci.1: new USB bus registered, assigned bus number 2
00:00:09.473 kernel[] Info (: ) [    1.321213] fsl-ehci fsl-ehci.1: irq 72, io base 0x02184200
00:00:09.473 kernel[] Info (: ) [    1.341197] fsl-ehci fsl-ehci.1: USB 2.0 started, EHCI 1.00
00:00:09.473 kernel[] Info (: ) [    1.341337] usb usb2: New USB device found, idVendor=1d6b, idProduct=0002
00:00:09.473 kernel[] Info (: ) [    1.341354] usb usb2: New USB device strings: Mfr=3, Product=2, SerialNumber=1
00:00:09.473 kernel[] Info (: ) [    1.341369] usb usb2: Product: Freescale On-Chip EHCI Host Controller
00:00:09.473 com.jci.cpp.settings.socket[301] Info (SocketRegistry.cpp:1101 openSpecific) Connected to proxy: tcpip://
00:00:09.475 kernel[] Info (: ) [    1.341382] usb usb2: Manufacturer: Linux 3.0.35 ehci_hcd
00:00:09.475 kernel[] Info (: ) [    1.341394] usb usb2: SerialNumber: fsl-ehci.1
00:00:09.475 kernel[] Info (: ) [    1.341965] hub 2-0:1.0: USB hub found
00:00:09.475 kernel[] Info (: ) [    1.341996] hub 2-0:1.0: 1 port detected
00:00:09.475 kernel[] Info (: ) [    1.342433] Thermal calibration data is 0x5644c57d
00:00:09.475 kernel[] Info (: ) [    1.342448] Thermal sensor with ratio = 177
00:00:09.475 kernel[] Info (: ) [    1.361192] Anatop Thermal registered as thermal_zone0
00:00:09.475 kernel[] Info (: ) [    1.361395] anatop_thermal_probe: default cooling device is cpufreq!
00:00:09.475 kernel[] Info (: ) [    1.481944] caam caam.0: device ID = 0x0a16010000000000
00:00:09.475 kernel[] Info (: ) [    1.481961] caam caam.0: job rings = 2, qi = 0
00:00:09.487 kernel[] Info (: ) [    1.482350] caam caam.0: authenc-hmac-md5-cbc-aes-caam
00:00:09.487 kernel[] Info (: ) [    1.482477] caam caam.0: authenc-hmac-sha1-cbc-aes-caam
00:00:09.487 kernel[] Info (: ) [    1.482607] caam caam.0: authenc-hmac-sha224-cbc-aes-caam
00:00:09.487 kernel[] Info (: ) [    1.482737] caam caam.0: authenc-hmac-sha256-cbc-aes-caam
00:00:09.487 kernel[] Info (: ) [    1.482877] caam caam.0: authenc-hmac-md5-cbc-des3_ede-caam
00:00:09.487 kernel[] Info (: ) [    1.483007] caam caam.0: authenc-hmac-sha1-cbc-des3_ede-caam
00:00:09.487 kernel[] Info (: ) [    1.483138] caam caam.0: authenc-hmac-sha224-cbc-des3_ede-caam
00:00:09.487 kernel[] Info (: ) [    1.483266] caam caam.0: authenc-hmac-sha256-cbc-des3_ede-caam
00:00:09.487 kernel[] Info (: ) [    1.483398] caam caam.0: authenc-hmac-md5-cbc-des-caam
00:00:09.487 kernel[] Info (: ) [    1.483536] caam caam.0: authenc-hmac-sha1-cbc-des-caam
00:00:09.487 com.jci.cpp.settings[301] Note (RegistryFactory.cpp:123 createRegistry) Startup time: 00:00:00.010677000
00:00:09.490 kernel[] Info (: ) [    1.483668] caam caam.0: authenc-hmac-sha224-cbc-des-caam
00:00:09.490 kernel[] Info (: ) [    1.483797] caam caam.0: authenc-hmac-sha256-cbc-des-caam
00:00:09.490 kernel[] Info (: ) [    1.483930] caam caam.0: cbc-aes-caam
00:00:09.490 kernel[] Info (: ) [    1.484059] caam caam.0: cbc-3des-caam
00:00:09.490 kernel[] Info (: ) [    1.484183] caam caam.0: cbc-des-caam
00:00:09.490 kernel[] Info (: ) [    1.489581] platform caam_jr.0: registering rng-caam
00:00:09.490 kernel[] Info (: ) [    1.491958] Datalight FlashFX Tera v2.1.1 Build 2128DF OS Services
00:00:09.490 kernel[] Info (: ) [    1.491973] Linux kernel 2.6 Edition for arm -- Compiled Sep  6 2013 at 15:31:42
00:00:09.490 kernel[] Info (: ) [    1.491985] Copyright (c) 1993-2012 Datalight, Inc.  All Rights Reserved Worldwide.
00:00:09.490 kernel[] Info (: ) [    1.491998] All rights and obligations of GPL v2 apply.
00:00:09.496 kernel[] Warn (: ) [    1.492942] flashfx: module license 'Copyright (c) 1993-2012 Datalight, Inc.  All Rights Reserved Worldwide.' taints kernel.
00:00:09.496 kernel[] Warn (: ) [    1.492963] Disabling lock debugging due to kernel taint
00:00:09.496 kernel[] Info (: ) [    1.501635] Datalight FlashFX Tera v2.1.1 Build 2128DF Block Device Driver
00:00:09.496 kernel[] Info (: ) [    1.501651] Linux kernel 2.6 Edition for arm -- Compiled Sep  6 2013 at 15:31:39
00:00:09.496 kernel[] Info (: ) [    1.501663] Copyright (c) 1993-2012 Datalight, Inc.  All Rights Reserved Worldwide.
00:00:09.496 kernel[] Info (: ) [    1.501676] All rights and obligations of GPL v2 apply.
00:00:09.496 kernel[] Info (: ) [    1.501894] Datalight FlashFX Tera v2.1.1 Build 2128DF
00:00:09.496 kernel[] Info (: ) [    1.501900] Copyright (c) 1993-2012 Datalight, Inc.  All Rights Reserved Worldwide.
00:00:09.496 kernel[] Info (: ) [    1.501907] Patents:  US#5860082, US#6260156.
00:00:09.496 kernel[] Info (: ) [    1.501912] Linux kernel 2.6 Edition for arm -- Compiled Sep  6 2013 at 15:31:50
00:00:09.510 kernel[] Info (: ) [    1.503534] ################################################
00:00:09.510 kernel[] Info (: ) [    1.503549] ##                                            ##
00:00:09.510 kernel[] Info (: ) [    1.503568] ##   FlashFX Tera SDK License ID: 1438932757  ##
00:00:09.510 kernel[] Info (: ) [    1.503581] ##                                            ##
00:00:09.510 kernel[] Info (: ) [    1.503592] ################################################
00:00:09.510 kernel[] Info (: ) [    1.556041]  ffx00: unknown partition table
00:00:09.510 kernel[] Info (: ) [    1.594890]  ffx01: p1 p2 p3 p4
00:00:09.510 kernel[] Info (: ) [    1.597592] Datalight Reliance Nitro v2.7.1 Build 2175BA OS Services
00:00:09.510 kernel[] Info (: ) [    1.597606] Linux Kernel Edition for arm -- Compiled Sep  6 2013 at 15:33:13
00:00:09.510 kernel[] Info (: ) [    1.597617] Copyright (c) 2003-2013 Datalight, Inc.  All Rights Reserved Worldwide.
00:00:09.519 kernel[] Info (: ) [    1.597629] All rights and obligations of GPL v2 apply.
00:00:09.519 kernel[] Info (: ) [    1.621099] Datalight Reliance Nitro v2.7.1 Build 2175BA File System Driver
00:00:09.519 kernel[] Info (: ) [    1.621117] Linux Kernel Edition for arm -- Compiled Sep  6 2013 at 15:32:11
00:00:09.519 kernel[] Info (: ) [    1.621129] Copyright (c) 2003-2013 Datalight, Inc.  All Rights Reserved Worldwide.
00:00:09.519 kernel[] Info (: ) [    1.621178] All rights and obligations of GPL v2 apply.
00:00:09.519 kernel[] Info (: ) [    1.621208] Datalight Reliance Nitro v2.7.1 Build 2175BA
00:00:09.519 kernel[] Info (: ) [    1.621221] Linux Kernel Edition for arm -- Compiled Sep  6 2013 at 15:32:19
00:00:09.519 kernel[] Info (: ) [    1.621235] Copyright (c) 2003-2013 Datalight, Inc.  All Rights Reserved Worldwide.
00:00:09.519 kernel[] Info (: ) [    1.621248] Patents:  US#7284101.
00:00:09.519 kernel[] Info (: ) [    1.621253]
00:00:09.521 kernel[] Info (: ) [    1.621505] Datalight Reliance Nitro v2.7.1 Build 2175BA driver initialization completed successfully
00:00:09.521 kernel[] Info (: ) [    1.621743] WARNING: A volume is defined as using Block Device "/dev/ffx01p1", but
00:00:09.521 kernel[] Info (: ) [    1.621760]          no definition was found in relconf.h.  Using the default settings.
00:00:09.521 kernel[] Info (: ) [    1.621871] block device supports flush.
00:00:09.521 kernel[] Info (: ) [    1.632695] ###########################################
00:00:09.521 kernel[] Info (: ) [    1.632712] ##                                       ##
00:00:09.521 kernel[] Info (: ) [    1.632726] ##   Reliance SDK License ID 7114895F    ##
00:00:09.521 kernel[] Info (: ) [    1.632738] ##                                       ##
00:00:09.521 kernel[] Info (: ) [    1.632749] ###########################################
00:00:09.521 kernel[] Info (: ) [    1.702427] DclOsBlockDev:Ioctl() Old BlkSize=4096 Count=   122352 SecBlk=0 BlkShift=12
00:00:09.528 kernel[] Info (: ) [    1.702446]                       New BlkSize=4096 Count=   122352 SecBlk=0 BlkShift=12
00:00:09.528 kernel[] Info (: ) [    1.702630] VOL0 mounted in 80 milliseconds
00:00:09.528 kernel[] Info (: ) [    2.190648] warning: process `init' used the deprecated sysctl system call with 2.5.
00:00:09.528 kernel[] Info (: ) [    2.190800] warning: process `init' used the deprecated sysctl system call with 2.16.
00:00:09.528 kernel[] Info (: ) [    2.355760] usbcore: registered new interface driver dsrc_acm
00:00:09.528 kernel[] Info (: ) [    2.355774] dsrc_acm: v0.26:USB Abstract Control Model driver for USB modems and ISDN adapters
00:00:09.528 kernel[] Info (: ) [    2.441947] WARNING: A volume is defined as using Block Device "/dev/ffx01p4", but
00:00:09.528 kernel[] Info (: ) [    2.441966]          no definition was found in relconf.h.  Using the default settings.
00:00:09.528 kernel[] Info (: ) [    2.489575] block device supports flush.
00:00:09.528 kernel[] Info (: ) [    2.687534] sdhci: Secure Digital Host Controller Interface driver
00:00:09.531 kernel[] Info (: ) [    2.687549] sdhci: Copyright(c) Pierre Ossman
00:00:09.531 kernel[] Info (: ) [    2.695979] DclOsBlockDev:Ioctl() Old BlkSize=4096 Count=    78624 SecBlk=0 BlkShift=12
00:00:09.531 kernel[] Info (: ) [    2.695997]                       New BlkSize=4096 Count=    78624 SecBlk=0 BlkShift=12
00:00:09.531 kernel[] Info (: ) [    2.709968] VOL1 mounted in 220 milliseconds
00:00:09.531 kernel[] Info (: ) [    2.735680] mmc0: no vmmc regulator found
00:00:09.531 kernel[] Info (: ) [    2.738104] Powering on wl12xx
00:00:09.531 kernel[] Info (: ) [    2.738457] mmc0: SDHCI controller on platform [sdhci-esdhc-imx.1] using DMA
00:00:09.531 kernel[] Info (: ) [    2.739696] mmc1: no vmmc regulator found
00:00:09.531 kernel[] Info (: ) [    2.744113] mmc1: SDHCI controller on platform [sdhci-esdhc-imx.2] using DMA
00:00:09.531 kernel[] Warn (: ) [    2.798281] mmc0: card claims to support voltages below the defined range. These will be ignored.
00:00:09.539 kernel[] Warn (: ) [    2.846322] mmc0: queuing unknown CIS tuple 0x91 (3 bytes)
00:00:09.539 kernel[] Info (: ) [    2.850948] mmc0: new high speed SDIO card at address 0001
00:00:09.539 kernel[] Info (: ) [    2.851248] Powering off wl12xx
00:00:09.539 kernel[] Note (: ) [    2.985725] mmc1: Inserting CMD4 for drive strength of $02000000
00:00:09.539 kernel[] Info (: ) [    3.039967] mmc1: new high speed DDR MMC card at address 0001
00:00:09.539 kernel[] Info (: ) [    3.051542] mmcblk0: mmc1:0001 MMC04G 3.66 GiB
00:00:09.539 kernel[] Info (: ) [    3.056664] mmcblk0boot0: mmc1:0001 MMC04G partition 1 1.00 MiB
00:00:09.539 kernel[] Info (: ) [    3.056902] mmcblk0boot1: mmc1:0001 MMC04G partition 2 1.00 MiB
00:00:09.539 kernel[] Info (: ) [    3.059359]  mmcblk0: p1 p2
00:00:09.539 kernel[] Info (: ) [    3.061760] WARNING: A volume is defined as using Block Device "/dev/mmcblk0p2", but
00:00:09.543 kernel[] Info (: ) [    3.061789]          no definition was found in relconf.h.  Using the default settings.
00:00:09.543 kernel[] Info (: ) [    3.065520]  mmcblk0boot1: unknown partition table
00:00:09.543 kernel[] Info (: ) [    3.067339] block device supports flush.
00:00:09.543 kernel[] Info (: ) [    3.068985]  mmcblk0boot0: unknown partition table
00:00:09.543 kernel[] Info (: ) [    3.100068] DclOsBlockDev:Ioctl() Old BlkSize= 512 Count=  1171952 SecBlk=0 BlkShift=9
00:00:09.543 kernel[] Info (: ) [    3.100089]                       New BlkSize= 512 Count=  1171952 SecBlk=0 BlkShift=9
00:00:09.543 kernel[] Info (: ) [    3.100306] VOL2 mounted in 30 milliseconds
00:00:09.543 kernel[] Info (: ) [    4.396121] NET: Registered protocol family 10
00:00:09.543 kernel[] Info (: ) [    5.052959] asoc: aic310x <-> imx-ssi.0 mapping ok
00:00:09.543 kernel[] Info (: ) [    5.122725] asoc: wl1285q-bt <-> imx-ssi.1 mapping ok
00:00:09.550 kernel[] Info (: ) [    5.137774] [U] splashplayer vpu_Init done
00:00:09.550 kernel[] Info (: ) [    5.405128] [U] splashplayer init Wayland+EGL
00:00:09.550 kernel[] Info (: ) [    5.491263] input: Virtual Keyboard as /devices/virtual/input/input1
00:00:09.550 kernel[] Info (: ) [    5.507664] input: Virtual Mouse as /devices/virtual/input/input2
00:00:09.550 kernel[] Info (: ) [    5.510162] cmu_io_ioctl: Pid : 109, gpio:42
00:00:09.550 kernel[] Info (: ) [    5.671747] [U] splashplayer init Wayland+EGL done
00:00:09.550 kernel[] Info (: ) [    5.676135] [U] splashplayer show first frame
00:00:09.550 kernel[] Info (: ) [    5.681141] [U] splashplayer show first frame done
00:00:09.550 kernel[] Info (: ) [    5.721651] snvs_rtc snvs_rtc.0: rtc core: registered snvs_rtc as rtc0
00:00:09.550 kernel[] Info (: ) [    5.903100] /proc/kmsg created
00:00:09.552 kernel[] Info (: ) [    5.903119] kmsg-filter loaded with loglevel=6
00:00:09.552 kernel[] Info (: ) [    6.496699] mx6_bt_rfkill driver successful loaded!
00:00:09.552 kernel[] Info (: ) [    6.498273] rfkill: Bluetooth RF turn on
00:00:09.552 kernel[] Info (: ) [    8.257082] aic310x: Setting hardware rate to 48000
00:00:09.552 kernel[] Info (: ) [    8.257097] aic310x: Setting hardware format to 2
00:00:09.612 VIDEOCTRL[257] Info (vctrl_settings.c:95 VCTRL2BLM_SETTINGS_UpdateIsNight) LOADED NEW VIDEO SETTINGS
00:00:09.612 VIDEOCTRL[257] Info (vctrl_service_core.cpp:89 VCTRL_CORE_UpdateAllOtherSettings) Updating settings for device dvd
00:00:09.612 VIDEOCTRL[257] Info (vctrl_service_core.cpp:89 VCTRL_CORE_UpdateAllOtherSettings) Updating settings for device tv
00:00:09.612 VIDEOCTRL[257] Info (vctrl_settings.c:102 VCTRL2BLM_SETTINGS_UpdateIsNight) Sent new video settings to MMUI
00:00:09.647 BUCPSA[342] Info (bucpsa_main.c:61 ServiceInit) Initializing BUCPSA Service
00:00:09.650 BUCPSA[342] Info (bucpsa_settings.c:153 Bucpsa_Settings_NVRAM_Init_S32) NVRAM key bucpsa_hi_cam_installed = 0
00:00:09.650 BUCPSA[342] Info (bucpsa_settings.c:153 Bucpsa_Settings_NVRAM_Init_S32) NVRAM key bucpsa_psm_variation = -1
00:00:09.650 BUCPSA[342] Info (bucpsa_settings.c:153 Bucpsa_Settings_NVRAM_Init_S32) NVRAM key veh_parking_sensor = 1
00:00:09.650 BUCPSA[342] Info (bucpsa_settings.c:153 Bucpsa_Settings_NVRAM_Init_S32) NVRAM key bucpsa_rcta_installed = 0
00:00:09.658 BUCPSA[342] Info (bucpsa_interface.c:392 BUCPSA_SendPsmInstalledStatus) Sending PSM installed status (0) in dbus
00:00:09.658 BUCPSA[342] Info (bucpsa_steng.c:295 bucpsa_Default_EventHandler) Entering Default_State state
00:00:09.658 BUCPSA[342] Info (bucpsa_steng.c:1169 bucpsa_updateImages) RCTA is disabled for this vehicle type.
00:00:09.660 BUCPSA[342] Info (bucpsa_steng.c:214 BUCPSA_StengPostMessage) Posting event 'BUCPSA_REVERSE_EVT' into state 'Default_State'
00:00:09.660 NATIVEGUI[265] Info (natgui.c:1257 NatG_Process_Inputs) NatG_Process_Inputs::: NatG_Ip_SetDisplay (imageCount=1)
00:00:09.661 NATIVEGUI[265] Info (natgui_surface_mgr.c:590 NatG_Redraw_Widget_Handler) NatG_Redraw_Widget_Handler
00:00:09.661 NATIVEGUI[265] Info (natgui.c:1187 NatG_GetImageDetails) Image = IMG_BANNER (78), [/jci/nativegui/images/SafetyText_US_English.png : (0, 433)], Language = 0
00:00:09.678 com.jci.cpp.devices[301] Note (Service.cpp:405 Service) Composite: false
00:00:09.682 kernel[] Info (: ) [    9.689627] input: filtered-keyboard-0x0000000240DD3B1B as /devices/virtual/input/input3
00:00:09.682 kernel[] Info (: ) [    9.692064] input: filtered-mouse-0x00000002410317D1 as /devices/virtual/input/input4
00:00:09.690 BUCPSA[342] Info (bucpsa_steng.c:214 BUCPSA_StengPostMessage) Posting event 'BUCPSA_ACC_EVT' into state 'Default_State'
00:00:09.690 BUCPSA[342] Info (bucpsa_steng.c:309 bucpsa_Default_EventHandler) Received gearStatus = 1
00:00:09.690 BUCPSA[342] Info (bucpsa_steng.c:364 bucpsa_Default_EventHandler) Received ACC Status = 1
00:00:09.691 kernel[] Info (: ) [    9.697935] input: filtered-touchscreen-0x00000002415C36EB as /devices/virtual/input/input5
00:00:09.705 BUCPSA[342] Info (bucpsa_main.c:203 bucpsa_initSM_Client) SM Clinet connection semaphore relased.
00:00:09.705 BUCPSA[342] Info (bucpsa_steng.c:214 BUCPSA_StengPostMessage) Posting event 'BUCPSA_VIDEO_EVT' into state 'Default_State'
00:00:09.706 BUCPSA[342] Warn (bucpsa_interface.c:992 bucpsa_BCM_Information_cb) Error in receiving BCM Information for RCTA.
00:00:09.708 BUCPSA[342] Info (bucpsa_steng.c:350 bucpsa_Default_EventHandler) Received videoSignalStatus = 0
00:00:09.710 VIDEOCTRL[257] Info (vctrl_service_core.cpp:333 VIDEOCTRL_SetDeviceInstalled_svc) Device 0 is set to not installed
00:00:09.710 VIDEOCTRL[257] Info (vctrl_v4lcapture.c:586 VCTRL2V4LCAPTURE_SetCameraInstalled) Starting Low Grade Camera detection...
00:00:09.721 VIDEOCTRL[257] Info (vctrl_campwr.c:107 VCTRL_CAMPWR_WaitForCamPwr) Camera power is ON! Didn't need to wait
00:00:10.129 Std[] Info (: ) * daemon not running. starting it now on port 5037 *
00:00:10.129 Std[] Info (: ) * daemon started successfully *
00:00:10.132 Std[] Info (: ) wait adb device
00:00:10.218 login[185] Info (: ) root login on 'console'
00:00:10.315 LVDS[61] Info (lvds_main.c:805 lvds_ACC_thread) Exit ACC Thread
00:00:10.380 BLM_SETTINGS[374] Info (settings_svc.cpp:173 ServiceInit) enter
00:00:10.388 com.jci.cpp.settings.socket[374] Info (SocketRegistry.cpp:1101 openSpecific) Connected to proxy: tcpip://
00:00:10.402 com.jci.cpp.settings[374] Note (RegistryFactory.cpp:123 createRegistry) Startup time: 00:00:00.014478334
00:00:10.403 BLM_SETTINGS[374] Info (settings_service_funs.cpp:652 SETTINGS_Additional_CPP_Interface_Open) blm_settings_started
00:00:10.405 BLM_SETTINGS[374] Info (settings_service_funs.cpp:653 SETTINGS_Additional_CPP_Interface_Open) BLM_SETTINGS_01.07.001
00:00:10.464 BLM_SETTINGS[374] Error (settings_vbs_interface.cpp:14425 BLM_SETTINGS_Get_VBS_VehicleGroup_VehIdNumber_cb) VIN data from VBS is NULL
00:00:10.472 BLM_SETTINGS[374] Info (settings_cpp_devices_interface.cpp:57 Open_CPP_Devices_Interface) Opening the device display from CPP_DEVICES 0x6463c, mutex 0x2b556b14
00:00:10.502 VBS[302] Info (vbs_loader.c:393 VBS_LOAD_LoadModules) All modules loaded!
00:00:10.518 VBS_BUS_VDT[302] Info (mod_vdt.c:310 VBS_VDT_Initialize) Function VDT Module Initialization SUCCESS!
00:00:10.547 BLM_SETTINGS[374] Info (settings_blm_system_interface.cpp:84 Open_BLM_System_Interface) opening BLM_SYSTEM 1
00:00:10.552 BLM_SETTINGS[374] Info (settings_blm_system_interface.cpp:69 Open_BLM_System_Interface_cb) open BLM_SYSTEM callback 100
00:00:10.559 BLM_SETTINGS[374] Info (settings_lvds_interface.cpp:270 BLM_SETTINGS_Set_LVDS_S16_DisplayBrightness) Setting brightness to CPP_LVDS
00:00:10.559 BLM_SETTINGS[374] Info (settings_cpp_devices_interface.cpp:146 SetContrast_U8) Setting contrast from CPP_DEVICES
00:00:10.573 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "PAD_LVLCnt_FR" ignored.
00:00:10.576 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "PAD_LVLCnt_FL" ignored.
00:00:10.577 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "PAD_LVLCnt_RR" ignored.
00:00:10.577 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "PAD_LVLCnt_RL" ignored.
00:00:10.578 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_BrakeStatic" ignored.
00:00:10.580 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_BattStatic1" ignored.
00:00:10.580 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_BattStatic2" ignored.
00:00:10.581 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_BattStatic3" ignored.
00:00:10.582 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_BattStatic4" ignored.
00:00:10.583 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_BattStatic5" ignored.
00:00:10.583 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_BattStatic6" ignored.
00:00:10.584 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_BattStatic7" ignored.
00:00:10.584 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic1" ignored.
00:00:10.585 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic2" ignored.
00:00:10.587 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic3" ignored.
00:00:10.587 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic4" ignored.
00:00:10.588 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic5" ignored.
00:00:10.588 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic6" ignored.
00:00:10.591 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic7" ignored.
00:00:10.591 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic8" ignored.
00:00:10.592 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic9" ignored.
00:00:10.593 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic10" ignored.
00:00:10.593 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic11" ignored.
00:00:10.597 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic12" ignored.
00:00:10.597 VDM[302] Info (vdm_smdb.c:83 VDM_SMDB_Open) VDM SMDB opened successfully!
00:00:10.597 VDM[302] Info (vdm_vdt_current_calc.c:534 VDM_VDT_Current_SMDB_Open) VDM SMDB opened successfully!
00:00:10.597 VDM[302] Info (vdm_main.c:290 VDM_VDT_Current_Initialize) VDM Current (CVD) Opened!
00:00:10.607 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "CrntVehMillege" ignored.
00:00:10.607 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "Crnt_YMDHM_ByGPS" ignored.
00:00:10.608 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "Drv1DrvTm" ignored.
00:00:10.608 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "CumulativeVehicleRunningDistance" ignored.
00:00:10.610 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "Drv1IstopTm" ignored.
00:00:10.611 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotalCumulativeDrivingTime" ignored.
00:00:10.612 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotalCumulativeIdleStopTime" ignored.
00:00:10.612 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotalCumulativeMotorRunningTime" ignored.
00:00:10.613 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "Drv1IdlDrvTm" ignored.
00:00:10.613 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotalCumulativeStoppingTime" ignored.
00:00:10.614 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "CumulativeAvarageFuelConsumption" ignored.
00:00:10.615 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "BestAvarageFuelConsumption" ignored.
00:00:10.615 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "Drv1MotActvTm" ignored.
00:00:10.616 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "Drv1AmntFuelCurr" ignored.
00:00:10.616 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "FulePulsePrev" ignored.
00:00:10.617 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "CumulativeFuelConsumption" ignored.
00:00:10.617 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "CumulativeMotorRunningDistance" ignored.
00:00:10.619 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DriveChart_Menu" ignored.
00:00:10.619 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "IDMJudgementResult" ignored.
00:00:10.619 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "AC_CompressureControl" ignored.
00:00:10.619 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "Shift_Clutch_Info" ignored.
00:00:10.619 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "WiperControl" ignored.
00:00:10.619 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "HeadlightControl" ignored.
00:00:10.619 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "Heater_Control" ignored.
00:00:10.619 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DriverInformation" ignored.
00:00:10.619 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "HEV_EnergyFlow" ignored.
00:00:10.619 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DriveChart_DetailAnalysis" ignored.
00:00:10.619 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DrvHisClr_Req" ignored.
00:00:10.623 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "PCM_Warning_status2" ignored.
00:00:10.623 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_Oil_deterioriate_Level" ignored.
00:00:10.623 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_BlowTm" ignored.
00:00:10.623 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_BlowTm2" ignored.
00:00:10.623 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_BlowTm3" ignored.
00:00:10.623 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "ACPrs_His" ignored.
00:00:10.623 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "ACCumulativeTime_for_PrsRpm" ignored.
00:00:10.623 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "PAD_LVLCnt" ignored.
00:00:10.623 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "SSU_CustermizeData" ignored.
00:00:10.623 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "FSC_CustermizeData" ignored.
00:00:10.631 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "FSC_CustermizeData2" ignored.
00:00:10.631 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "RBCM_CustermizeData" ignored.
00:00:10.631 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "PCS_CustermizeData" ignored.
00:00:10.631 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "HEC_CustermizeData" ignored.
00:00:10.631 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "PSM_CustermizeData" ignored.
00:00:10.631 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "BSM_CustermizeData" ignored.
00:00:10.631 VDM[302] Info (vdm_smdb.c:83 VDM_SMDB_Open) VDM SMDB opened successfully!
00:00:10.631 VDM[302] Info (vdm_vdt_pid_calc.c:302 VDM_VDT_Parameter_SMDB_Open) VDM PID SMDB opened successfully!
00:00:10.631 VDM[302] Info (vdm_main.c:399 VDM_VDT_Parameter_Initialize) VDM Parameter (PID) Opened!
00:00:10.631 BLM_SETTINGS[374] Info (settings_service_funs.cpp:873 SETTINGS_Additional_CPP_Interface_Open) Initial keyboard language string is "US English;ABC US English;CA French;ABC CA French;NA Spanish;ABC NA Spanish"(max:3 current:1)
00:00:10.631 BLM_SETTINGS[374] Info (settings_service_funs.cpp:882 SETTINGS_Additional_CPP_Interface_Open) ABC keyboard  support OK
00:00:10.631 BLM_SETTINGS[374] Info (settings_svc.cpp:192 ServiceInit) exit
00:00:10.631 NATIVEGUI[265] Info (natgui.c:1070 natG_smcl_sm_settingStarted_cb) natG_smcl_sm_settingStarted_cb notify_attr->evt_type=2
00:00:10.631 NATIVEGUI[265] Info (natgui.c:1073 natG_smcl_sm_settingStarted_cb) BLM settings started running. Get the language info
00:00:10.631 NATIVEGUI[265] Info (natgui_interface.c:408 NatG_If_BlmSettings_Connect) Using interface com.jci.settings.nativegui_265_1
00:00:10.645 VIDEOCTRL[257] Info (vctrl_sm_interface.c:232 OnBLM_SETTINGSIsAvailable) BLM SETTINGS is available. Connecting...
00:00:10.646 BLM_SETTINGS[374] Info (settings_blocking_queue.cpp:65 ServiceProcessBlockingQueue) thread id for ProcessBlockingQueue is 417
00:00:10.650 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "CrntVehMillege" ignored.
00:00:10.651 BLM_SETTINGS[257] Info (settings_client_funs.cpp:759 BLM_SETTINGS_Client_ExtConnect) com.jci.settings.videoctrl_257_1
00:00:10.652 BLM_SETTINGS[342] Info (settings_client_funs.cpp:759 BLM_SETTINGS_Client_ExtConnect) com.jci.settings.backupcam_342_1
00:00:10.652 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotDrvTm" ignored.
00:00:10.652 BLM_SETTINGS[265] Info (settings_client_funs.cpp:759 BLM_SETTINGS_Client_ExtConnect) com.jci.settings.nativegui_265_1
00:00:10.664 BLM_SETTINGS[374] Info (settings_service_funs.cpp:1269 SETTINGS_Connect_svc) connecting client:com.jci.settings.backupcam_342_1
00:00:10.665 BLM_SETTINGS[374] Info (settings_service_funs.cpp:1269 SETTINGS_Connect_svc) connecting client:com.jci.settings.nativegui_265_1
00:00:10.667 BLM_SETTINGS[374] Info (settings_service_funs.cpp:1269 SETTINGS_Connect_svc) connecting client:com.jci.settings.videoctrl_257_1
00:00:10.668 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotDrv0Tm" ignored.
00:00:10.668 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotDrv1Tm" ignored.
00:00:10.668 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotDrv2Tm" ignored.
00:00:10.668 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotDrv3Tm" ignored.
00:00:10.668 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotDrv4Tm" ignored.
00:00:10.668 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotDrv5Tm" ignored.
00:00:10.668 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotIstpTm" ignored.
00:00:10.668 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotIstp0Tm" ignored.
00:00:10.668 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotIstp1Tm" ignored.
00:00:10.668 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotIstp2Tm" ignored.
00:00:10.668 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotIstp3Tm" ignored.
00:00:10.678 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotIstp4Tm" ignored.
00:00:10.678 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotIstp5Tm" ignored.
00:00:10.678 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotMotActvTm" ignored.
00:00:10.678 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotMotActv0Tm" ignored.
00:00:10.678 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotMotActv1Tm" ignored.
00:00:10.678 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotMotActv2Tm" ignored.
00:00:10.678 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotMotActv3Tm" ignored.
00:00:10.678 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotMotActv4Tm" ignored.
00:00:10.678 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotMotActv5Tm" ignored.
00:00:10.678 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotIdlDrvTm" ignored.
00:00:10.678 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotIdlDrv0Tm" ignored.
00:00:10.690 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotIdlDrv1Tm" ignored.
00:00:10.690 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotIdlDrv2Tm" ignored.
00:00:10.690 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotIdlDrv3Tm" ignored.
00:00:10.690 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotIdlDrv4Tm" ignored.
00:00:10.690 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotIdlDrv5Tm" ignored.
00:00:10.690 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "EngineOilFile" ignored.
00:00:10.690 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "PTDriveFile" ignored.
00:00:10.690 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "CustomizeDataFile" ignored.
00:00:10.690 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "HVD_Ind_Lamp_100_Records" ignored.
00:00:10.690 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_BattStatic1" ignored.
00:00:10.690 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_BattStatic2" ignored.
00:00:10.690 BLM_SETTINGS[342] Info (settings_client_funs.cpp:422 BLM_SEETINGS_Connect_cb) Client Name [com.jci.settings.backupcam_342_1]
00:00:10.690 BLM_SETTINGS[265] Info (settings_client_funs.cpp:422 BLM_SEETINGS_Connect_cb) Client Name [com.jci.settings.nativegui_265_1]
00:00:10.690 BLM_SETTINGS[265] Info (settings_client_funs.cpp:1559 SETTINGS_Client_ExtGet_S16) client [com.jci.settings.nativegui_265_1] com/jci/blm/settings/SystemSettings/LanguageDisplay
00:00:10.690 BLM_SETTINGS[257] Info (settings_client_funs.cpp:422 BLM_SEETINGS_Connect_cb) Client Name [com.jci.settings.videoctrl_257_1]
00:00:10.690 VIDEOCTRL[257] Info (vctrl_settings.c:120 BLM_VCTRL_Connect_Callback) Registering for DisplayDayNight signal
00:00:10.690 BLM_SETTINGS[257] Info (settings_client_funs.cpp:3034 SETTINGS_Client_ExtOnChange_S16) client [com.jci.settings.videoctrl_257_1] com/jci/blm/settings/Display/DisplayDayNight
00:00:10.690 BLM_SETTINGS[257] Info (settings_client_funs.cpp:1559 SETTINGS_Client_ExtGet_S16) client [com.jci.settings.videoctrl_257_1] com/jci/blm/settings/Display/DisplayDayNight
00:00:10.690 BLM_SETTINGS[342] Info (settings_client_funs.cpp:3034 SETTINGS_Client_ExtOnChange_S16) client [com.jci.settings.backupcam_342_1] com/jci/blm/settings/Vehicle/ParkingSensor
00:00:10.721 BLM_SETTINGS[342] Info (settings_client_funs.cpp:1559 SETTINGS_Client_ExtGet_S16) client [com.jci.settings.backupcam_342_1] com/jci/blm/settings/Vehicle/ParkingSensor
00:00:10.721 BLM_SETTINGS[342] Info (settings_client_funs.cpp:3034 SETTINGS_Client_ExtOnChange_S16) client [com.jci.settings.backupcam_342_1] com/jci/blm/settings/Vehicle/VehicleModelType
00:00:10.721 BLM_SETTINGS[374] Info (settings_service_funs.cpp:5921 SETTINGS_Get_Settings_S16_svc) key path : /2/com/jci/blm/settings/SystemSettings/LanguageDisplay
00:00:10.721 BLM_SETTINGS[342] Info (settings_client_funs.cpp:1559 SETTINGS_Client_ExtGet_S16) client [com.jci.settings.backupcam_342_1] com/jci/blm/settings/Vehicle/VehicleModelType
00:00:10.721 BLM_SETTINGS[374] Info (settings_service_funs.cpp:6677 SETTINGS_OnChange_Settings_S16_svc) client:com.jci.settings.videoctrl_257_1 key path : /2/com/jci/blm/settings/Display/DisplayDayNight
00:00:10.721 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_BattStatic3" ignored.
00:00:10.721 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_BattStatic4" ignored.
00:00:10.721 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_BattStatic5" ignored.
00:00:10.721 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_BattStatic6" ignored.
00:00:10.721 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_BattStatic7" ignored.
00:00:10.721 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic1" ignored.
00:00:10.721 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic2" ignored.
00:00:10.721 BLM_SETTINGS[374] Info (settings_service_funs.cpp:5921 SETTINGS_Get_Settings_S16_svc) key path : /2/com/jci/blm/settings/Display/DisplayDayNight
00:00:10.721 BLM_SETTINGS[265] Info (settings_client_funs.cpp:1458 SETTINGS_Client_Get_S16_cb) SETTINGS_Client_Get_S16_cb
00:00:10.721 BLM_SETTINGS[265] Info (settings_client_funs.cpp:1487 SETTINGS_Client_Get_S16_cb) Client Name [com.jci.settings.nativegui_265_1], returned value 0 for setting ID 59
00:00:10.721 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic3" ignored.
00:00:10.721 BLM_SETTINGS[374] Info (settings_service_funs.cpp:6677 SETTINGS_OnChange_Settings_S16_svc) client:com.jci.settings.backupcam_342_1 key path : /2/com/jci/blm/settings/Vehicle/ParkingSensor
00:00:10.721 BLM_SETTINGS[342] Info (settings_client_funs.cpp:2907 SETTINGS_Client_OnChange_S16_cb) SETTINGS_Client_OnChange_S16_cb
00:00:10.721 BLM_SETTINGS[342] Info (settings_client_funs.cpp:2937 SETTINGS_Client_OnChange_S16_cb) Client Name [com.jci.settings.backupcam_342_1]
00:00:10.721 BLM_SETTINGS[257] Info (settings_client_funs.cpp:2907 SETTINGS_Client_OnChange_S16_cb) SETTINGS_Client_OnChange_S16_cb
00:00:10.721 BLM_SETTINGS[374] Info (settings_service_funs.cpp:5921 SETTINGS_Get_Settings_S16_svc) key path : /2/com/jci/blm/settings/Vehicle/ParkingSensor
00:00:10.721 NATIVEGUI[265] Info (natgui_interface.c:507 NatG_if_BlmSettingsCurLanguage_cb) NatG_if_BlmSettingsCurLanguage_cb. curLang=0
00:00:10.721 NATIVEGUI[265] Info (natgui_settings_mgr.c:192 NatG_Settings_Set_Language) Updating current language (0) in NVRAM using NVRAM_Block_setValue
00:00:10.721 BLM_SETTINGS[257] Info (settings_client_funs.cpp:2937 SETTINGS_Client_OnChange_S16_cb) Client Name [com.jci.settings.videoctrl_257_1]
00:00:10.721 BLM_SETTINGS[374] Info (settings_service_funs.cpp:6677 SETTINGS_OnChange_Settings_S16_svc) client:com.jci.settings.backupcam_342_1 key path : /2/com/jci/blm/settings/Vehicle/VehicleModelType
00:00:10.721 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic4" ignored.
00:00:10.721 SM[206] Info (sm.cpp:811 sm_ActionsForStoppedService) Svc stage_2[418] stopped!
00:00:10.721 BLM_SETTINGS[257] Info (settings_client_funs.cpp:1458 SETTINGS_Client_Get_S16_cb) SETTINGS_Client_Get_S16_cb
00:00:10.721 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic5" ignored.
00:00:10.721 BLM_SETTINGS[257] Info (settings_client_funs.cpp:1487 SETTINGS_Client_Get_S16_cb) Client Name [com.jci.settings.videoctrl_257_1], returned value 2 for setting ID 0
00:00:10.721 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic6" ignored.
00:00:10.721 VIDEOCTRL[257] Info (vctrl_settings.c:237 BLM_VCTRL_OnChange_DayNight_Callback) DayNight Changed - value: DAY
00:00:10.721 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic7" ignored.
00:00:10.721 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic8" ignored.
00:00:10.721 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic9" ignored.
00:00:10.721 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic10" ignored.
00:00:10.721 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic11" ignored.
00:00:10.721 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic12" ignored.
00:00:10.721 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "PAD_LVLCnt_FR" ignored.
00:00:10.721 BLM_SETTINGS[374] Info (settings_service_funs.cpp:5921 SETTINGS_Get_Settings_S16_svc) key path : /2/com/jci/blm/settings/Vehicle/VehicleModelType
00:00:10.721 BLM_SETTINGS[342] Info (settings_client_funs.cpp:1458 SETTINGS_Client_Get_S16_cb) SETTINGS_Client_Get_S16_cb
00:00:10.721 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "PAD_LVLCnt_FL" ignored.
00:00:10.721 BLM_SETTINGS[342] Info (settings_client_funs.cpp:1487 SETTINGS_Client_Get_S16_cb) Client Name [com.jci.settings.backupcam_342_1], returned value 1 for setting ID 144
00:00:10.721 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "PAD_LVLCnt_RR" ignored.
00:00:10.721 BUCPSA[342] Info (bucpsa_steng.c:214 BUCPSA_StengPostMessage) Posting event 'BUCPSA_PSA_REFRESH_EVT' into state 'Default_State'
00:00:10.721 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "PAD_LVLCnt_RL" ignored.
00:00:10.721 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_BrakeStatic" ignored.
00:00:10.721 BLM_SETTINGS[342] Info (settings_client_funs.cpp:2907 SETTINGS_Client_OnChange_S16_cb) SETTINGS_Client_OnChange_S16_cb
00:00:10.721 BLM_SETTINGS[342] Info (settings_client_funs.cpp:2937 SETTINGS_Client_OnChange_S16_cb) Client Name [com.jci.settings.backupcam_342_1]
00:00:10.721 BUCPSA[342] Info (bucpsa_steng.c:381 bucpsa_Default_EventHandler) PSM System Status = Off (0)
00:00:10.810 VIDEOCTRL[257] Info (CDevice.cpp:144 enable) Video Capturing is enabled
00:00:10.850 kernel[] Info (: ) [   10.854344] UYVY
00:00:10.873 BLM_SETTINGS[374] Info (settings_vbs_interface.cpp:11697 UpdateSymLinkForDSPConfiguration) Set DSP symlink to /jci/dsp/dsp_J36A-NoBose.xml, index in table 7
00:00:10.873 BLM_SETTINGS[374] Info (settings_symlink.hpp:228 _int_Set) symlink file /data/dsp.xml and its conatins "/jci/dsp/dsp_J36A-NoBose.xml" are OK
00:00:10.874 BLM_SETTINGS[342] Info (settings_client_funs.cpp:1458 SETTINGS_Client_Get_S16_cb) SETTINGS_Client_Get_S16_cb
00:00:10.874 BLM_SETTINGS[342] Info (settings_client_funs.cpp:1487 SETTINGS_Client_Get_S16_cb) Client Name [com.jci.settings.backupcam_342_1], returned value 1 for setting ID 140
00:00:10.874 BUCPSA[342] Info (bucpsa_interface.c:649 bucpsa_VehicleModelType_cb) Vehicle Model Type = J36 (1)
00:00:10.874 BUCPSA[342] Info (bucpsa_steng.c:214 BUCPSA_StengPostMessage) Posting event 'BUCPSA_PSA_REFRESH_EVT' into state 'Default_State'
00:00:10.874 BUCPSA[342] Info (bucpsa_steng.c:214 BUCPSA_StengPostMessage) Posting event 'BUCPSA_RCTA_REFRESH_EVT' into state 'Default_State'
00:00:10.874 BUCPSA[342] Info (bucpsa_steng.c:381 bucpsa_Default_EventHandler) PSM System Status = Off (0)
00:00:10.878 VDM[302] Info (vdm_smdb.c:83 VDM_SMDB_Open) VDM SMDB opened successfully!
00:00:10.878 VDM[302] Info (vdm_vdt_history_calc.c:210 VDM_VDT_History_SMDB_Open) VDM History SMDB opened successfully!
00:00:10.878 VDM[302] Info (vdm_main.c:344 VDM_VDT_History_Initialize) VDM History (HVD) Opened!
00:00:10.880 kernel[] Warn (: ) [   10.887489] imx-ipuv3 imx-ipuv3.1: IPU Warning - IPU_INT_STAT_10 = 0x00000001
00:00:10.883 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DID8E" ignored.
00:00:10.883 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DID8F" ignored.
00:00:10.883 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DID90" ignored.
00:00:10.883 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DID91" ignored.
00:00:10.883 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DIDB3" ignored.
00:00:10.883 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DIDB5" ignored.
00:00:10.883 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DIDB6" ignored.
00:00:10.883 SMDB[302] Info (smdb_shmem.c:813 shmem_loadData) Loaded default data for DB vdm_vdt_odr_data.
00:00:10.883 VDM[302] Info (vdm_smdb.c:83 VDM_SMDB_Open) VDM SMDB opened successfully!
00:00:10.887 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "cvd_ig_on_timer" ignored.
00:00:10.887 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "cvd_out_car_temperature" ignored.
00:00:10.887 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "cvd_ymdhm_by_gps" ignored.
00:00:10.887 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "cvd_initialDiagRecord" ignored.
00:00:10.887 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "cvd_warninglamprecord" ignored.
00:00:10.887 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "cvd_initial_trigger" ignored.
00:00:10.887 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "cvd_vdt_initialze_status" ignored.
00:00:10.887 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "cvd_groupbdata" ignored.
00:00:10.887 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "cvd_indicatorlamprecord" ignored.
00:00:10.887 SMDB[302] Info (smdb_shmem.c:813 shmem_loadData) Loaded default data for DB vdm_vdt_warninglamp_data.
00:00:10.887 VDM[302] Info (vdm_smdb.c:83 VDM_SMDB_Open) VDM SMDB opened successfully!
00:00:10.900 VDM[302] Info (vdm_vdt_pid_calc.c:912 VDM_VDT_WarningLamp_SMDB_Open) VDM SMDB opened successfully!
00:00:10.900 VDM[302] Info (vdm_main.c:672 VDM_VDT_WarningLamp_Initialize) VDM WarningLamp Opened = 0!
00:00:10.902 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "WrngLampAct" ignored.
00:00:10.902 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "hvd_total_distance" ignored.
00:00:10.902 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "hvd_record_number" ignored.
00:00:10.902 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "hvd_total_records" ignored.
00:00:10.906 VDM[302] Info (vdm_smdb.c:83 VDM_SMDB_Open) VDM SMDB opened successfully!
00:00:10.907 VDM[302] Info (vdm_vdt_pid_calc.c:790 VDM_VDT_WarningLampHistory_SMDB_Open) VDM History SMDB opened successfully!
00:00:10.909 VDM[302] Info (vdm_main.c:617 VDM_VDT_WarningLampHistory_Initialize) VDM WarningLampHistory Opened!
00:00:10.910 kernel[] Info (: ) [   10.919731] UYVY
00:00:10.912 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "YMDHM_ByGPS" ignored.
00:00:10.912 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "Vehicle_Identification_Number" ignored.
00:00:10.914 VDM[302] Info (vdm_smdb.c:83 VDM_SMDB_Open) VDM SMDB opened successfully!
00:00:10.914 VDM[302] Info (vdm_vdt_settings.c:121 VDM_VDT_SETTINGS_SMDB_Open) VDM UI_MD SMDB opened successfully!
00:00:10.919 com.jci.cpp.settings.socket[302] Info (SocketRegistry.cpp:1101 openSpecific) Connected to proxy: tcpip://
00:00:10.950 kernel[] Warn (: ) [   10.954225] imx-ipuv3 imx-ipuv3.1: IPU Warning - IPU_INT_STAT_10 = 0x00000001
00:00:10.959 com.jci.cpp.settings[302] Note (RegistryFactory.cpp:123 createRegistry) Startup time: 00:00:00.045829666
00:00:10.963 VBS_BUS_VDT[302] Info (mod_vdt.c:2160 VBS_VDT_InitSettings) Value of gs_fuel_type_CPPSettingsvalue = 1
00:00:10.963 VBS_BUS_VDT[302] Error (mod_vdt.c:391 VBS_VDT_SM_Connect) SM Connect Called
00:00:10.977 VBS_BUS_VDT[302] Info (mod_vdt_sm_client_subscribe.c:137 VBS_SM_CLIENT_Subscribe) enter
00:00:10.980 VBS_BUS_VDT[302] Info (mod_vdt_sm_client_subscribe.c:233 VBS_SM_CLIENT_Subscribe) SM_GetServices Success.
00:00:10.980 VBS_BUS_VDT[302] Info (mod_vdt_ind_lamp.c:1431 VBS_VDT_InitializeValues_IndicatorLamp) VBS_VDT_InitializeValues_IndicatorLamp
00:00:10.985 VBS_BUS_VDT[302] Info (mod_vdt_sm_client_subscribe.c:439 VBS_sm_client_get_services_cb) services_info[0].service_name: jciTime
00:00:10.985 VBS_BUS_VDT[302] Info (mod_vdt_sm_client_subscribe.c:443 VBS_sm_client_get_services_cb) Found jciTime in services_info.
00:00:10.986 VBS_BUS_VDT[302] Info (mod_vdt_sm_client_subscribe.c:459 VBS_sm_client_get_services_cb) jciTime is stopped. Calling disconnect function pointer from userData.
00:00:10.986 VBS_BUS_VDT[302] Error (mod_vdt.c:386 VBS_VDT_CPP_Time_Disconnect_cb) CPP TIME IS NOT CONNECTED
00:00:11.011 VBS_BUS_DIAG[302] Info (mod_diag_manage_svc.c:3344 initializeSemaphore) Semaphore Initialistaion is success
00:00:11.012 VBS_BUS_DIAG[302] Info (mod_diag_manage_svc.c:311 moddiag_createThread) Periodic thread created successfully
00:00:11.021 kernel[] Info (: ) [   11.022476] Attention: Writing register 0x0E, this register will be used internally.
00:00:11.021 kernel[] Info (: ) [   11.023392] Attention: Writing register 0x0E, this register will be used internally.
00:00:11.021 kernel[] Info (: ) [   11.023847] Attention: Writing register 0x4D, this register will be used internally.
00:00:11.021 kernel[] Info (: ) [   11.024302] Attention: Writing register 0x50, this register will be used internally.
00:00:11.021 kernel[] Info (: ) [   11.025195] Attention: Writing register 0xE1, this register will be used internally.
00:00:11.021 kernel[] Info (: ) [   11.025644] Attention: Writing register 0xE2, this register will be used internally.
00:00:11.021 kernel[] Info (: ) [   11.026092] Attention: Writing register 0x02, this register will be used internally.
00:00:11.021 kernel[] Info (: ) [   11.026569] Attention: Writing register 0xE3, this register will be used internally.
00:00:11.021 kernel[] Info (: ) [   11.027033] Attention: Writing register 0xE4, this register will be used internally.
00:00:11.037 VBS_BUS_DIAG[302] Info (mod_diag_manage_svc.c:329 moddiag_PeriodicThread_Handler) Bus Diag Thread
00:00:11.052 com.jci.cpp.settings.socket[302] Info (SocketRegistry.cpp:1101 openSpecific) Connected to proxy: tcpip://
00:00:11.074 com.jci.cpp.settings[302] Note (RegistryFactory.cpp:123 createRegistry) Startup time: 00:00:00.023531666
00:00:11.075 VBS_BUS_NAVI[302] Info (mod_navigation.c:148 VBS_NAVI_ReadFuelTypeFromRegistry) VBS NAVI Handle to Settings Registry: 0x8b548, Open Stat: 0
00:00:11.079 VBS_BUS_NAVI[302] Info (mod_navigation.c:155 VBS_NAVI_ReadFuelTypeFromRegistry) VBS NAVI Handle to Settings Registry:successful :: gs_fuel_type = 1
00:00:11.090 VBS_BUS_EEM[302] Info (mod_eem.c:391 VBS_MOD_EEM_Initialize) Function EEM Module Initialization SUCCESS!
00:00:11.181 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "Drv1AvlFuelE_T_line" ignored.
00:00:11.181 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "Drv1AvlFuelE_T_bar" ignored.
00:00:11.181 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "Drv1AvlEnergy_T_bar" ignored.
00:00:11.181 VDM[302] Info (vdm_smdb.c:83 VDM_SMDB_Open) VDM SMDB opened successfully!
00:00:11.181 VDM[302] Info (vdm_eem_calc.c:200 VDM_EEM_SMDB_Open) VDM SMDB opened successfully!
00:00:11.181 VDM[302] Info (vdm_main.c:71 VDM_EEM_Initialize) VDM Opened!
00:00:11.239 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "CumAvgFuelEff" ignored.
00:00:11.290 VDM[302] Info (vdm_smdb.c:83 VDM_SMDB_Open) VDM SMDB opened successfully!
00:00:11.290 VDM[302] Info (vdm_eem_calc.c:331 VDM_EEM_History_SMDB_Open) VDM History SMDB opened successfully!
00:00:11.290 VDM[302] Info (vdm_eem_calc.c:349 VDM_EEM_History_SMDB_Open)  l_totsvd_fuel_prev_str 0
00:00:11.290 VDM[302] Info (vdm_main.c:126 VDM_EEM_History_Initialize) VDM History Opened!
00:00:11.295 com.jci.cpp.settings.socket[302] Info (SocketRegistry.cpp:1101 openSpecific) Connected to proxy: tcpip://
00:00:11.299 com.jci.cpp.settings[302] Note (RegistryFactory.cpp:123 createRegistry) Startup time: 00:00:00.008187333
00:00:11.312 VIDEOCTRL[257] Info (vctrl_v4lcapture.c:1052 endCallGetStatus) Video Status = 31
00:00:11.312 VIDEOCTRL[257] Info (vctrl_service_core.cpp:621 VCTRL_SERVICE_signal_VideoStatusChanged) Sending VideoSignalChanged with status = 2, device = 0
00:00:11.312 VIDEOCTRL[257] Info (vctrl_vbs.c:153 VCTRL2CPP_VBS_DTChandler) Clear fault  DTC id = 15
00:00:11.314 BUCPSA[342] Info (bucpsa_steng.c:214 BUCPSA_StengPostMessage) Posting event 'BUCPSA_VIDEO_EVT' into state 'Default_State'
00:00:11.314 NATGUICTRL[122] Info (nativeguictrl_dbus_service_interface.c:138 ngc_videoSignal_cb) Video Signal callback with value 2
00:00:11.314 BUCPSA[342] Info (bucpsa_steng.c:350 bucpsa_Default_EventHandler) Received videoSignalStatus = 2
00:00:11.325 VBS_BUS_EEM[302] Info (mod_eem.c:456 VBS_MOD_EEM_RegisterSendHandler) Setting Tx Handler
00:00:11.325 VBS_BUS_EEM[302] Info (mod_eem.c:461 VBS_MOD_EEM_RegisterSendHandler) Tx Handler is NOT NULL
00:00:11.329 CPP_TIME[432] Info (time_dbus_sm.cpp:220 ServiceInit)    current monotonic time : 1970.01.01 00:00:11
00:00:11.331 CPP_TIME[432] Info (time_dbus_sm.cpp:220 ServiceInit)  current system real-time : 1970.01.01 00:00:11
00:00:11.344 VBS_BUS_DRVIDIDM[302] Info (mod_drvididm.c:174 VBS_MOD_DRVIDIDM_Initialize) Function DRVIDIDM Module Initialization initiated!
00:00:11.346 VIDEOCTRL[257] Info (vctrl_v4lcapture.c:809 vctrl2v4lcapture_registerToV4L) Registering to v4lcapture for video status
00:00:11.351 VBS_BUS_DRVIDIDM[302] Info (mod_drvididm.c:183 VBS_MOD_DRVIDIDM_Initialize) Function DRVIDIDM Module Initialization SUCCESS!
00:00:11.357 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "BriskAssessPoint" ignored.
00:00:11.357 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "SmoothAssessPoint" ignored.
00:00:11.357 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "CluchAssessPoint" ignored.
00:00:11.357 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "ScoreTransGrph" ignored.
00:00:11.357 VDM[302] Info (vdm_smdb.c:83 VDM_SMDB_Open) VDM SMDB opened successfully!
00:00:11.357 VDM[302] Info (vdm_main.c:837 VDM_IDM_Initialize) VDM Opened!
00:00:11.357 VBS_BUS_DRVIDIDM[302] Info (mod_drvididm.c:190 VBS_MOD_DRVIDIDM_Initialize) VDM initialized successfully
00:00:11.366 CPP_TIME[432] Info (time_dbus_service_funs.cpp:370 InitServiceSpecificsOpen) [ok] - CPP_TIME started
00:00:11.366 VBS_BUS_VDT[302] Info (mod_vdt_sm_client_subscribe.c:509 VBS_sm_client_event_handler_cb) SM_EVENT_SERVICE_STARTED CB RCVD for jciTime. Calling function from userData.
00:00:11.374 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "HVD_BriskUpper" ignored.
00:00:11.374 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "HVD_BriskLower" ignored.
00:00:11.374 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "HVD_SmoothUpper" ignored.
00:00:11.374 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "HVD_SmoothLower" ignored.
00:00:11.374 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "HVD_CluchUpper" ignored.
00:00:11.374 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "HVD_CluchLower" ignored.
00:00:11.374 SMDB[302] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "HVD_InitialScore" ignored.
00:00:11.379 VDM[302] Info (vdm_smdb.c:83 VDM_SMDB_Open) VDM SMDB opened successfully!
00:00:11.379 VDM[302] Info (vdm_idm_calc.c:344 VDM_IDM_History_SMDB_Open) VDM History SMDB opened successfully!
00:00:11.379 VBS_BUS_DRVIDIDM[302] Info (mod_drvididm.c:201 VBS_MOD_DRVIDIDM_Initialize) VDM for HVD initialized successfully
00:00:11.379 VBS_BUS_DRVIDIDM[302] Info (mod_drvididm.c:254 VBS_MOD_DRVIDIDM_RegisterSendHandler) Setting Tx Handler
00:00:11.379 VBS_BUS_DRVIDIDM[302] Info (mod_drvididm.c:259 VBS_MOD_DRVIDIDM_RegisterSendHandler) Tx Handler is NOT NULL
00:00:11.400 CPP_TIME[432] Info (time_dbus_service_funs.cpp:96 HeartBeatIncrementTimerHandler) enter
00:00:11.406 CPP_TIME[302] Info (time_dbus_client_funs.cpp:2304 TIME_Client_Connect) will send connect request: conn 0xa5460 : dbus 0xa5ba8 : name com.jci.modvdt2cpptime
00:00:11.406 VBS_BUS_VDT[302] Info (mod_vdt.c:620 VBS_VDT_CPPTimeConnect) VDT Connected to CPP TIME
00:00:11.408 CPP_TIME[432] Info (time__cpp_Timer.cpp:244 TimerProcessingFunctionHandler) enter
00:00:11.412 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_Connect_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:11.415 VBS_BUS_VWM[302] Info (mod_vwm.c:176 Initialize) Function vwm Module Initialization!
00:00:11.422 CPP_TIME[302] Warn (time__gen_DataMutex.hpp:785 DataLock) mx locked, WILL wait until unlocked for 0xa5390
00:00:11.422 CPP_TIME[302] Warn (time_stack_backtrace.cpp:83 __int_ShowStackBackTraceByLevel) __int_ShowStackBackTraceByLevel(TIME_debug_level_e)
00:00:11.422 CPP_TIME[302] Warn (time_stack_backtrace.cpp:83 __int_ShowStackBackTraceByLevel) com::jci::time::DataMutex::DataLock()
00:00:11.422 CPP_TIME[302] Warn (time_stack_backtrace.cpp:83 __int_ShowStackBackTraceByLevel) /jci/lib/libjcitime_client.so(+0x3b6f8)
00:00:11.432 com.jci.cpp.settings.socket[302] Info (SocketRegistry.cpp:1101 openSpecific) Connected to proxy: tcpip://
00:00:11.470 com.jci.cpp.settings[302] Note (RegistryFactory.cpp:123 createRegistry) Startup time: 00:00:00.039397666
00:00:11.474 VBS_BUS_VWM[302] Info (mod_vwm.c:926 VBS_VWM_InitSettings) Value of gs_fuel_type_CPPSettingsvalue = 1
00:00:11.491 com.jci.cpp.settings.socket[302] Info (SocketRegistry.cpp:1101 openSpecific) Connected to proxy: tcpip://
00:00:11.519 Std[] Error (: )  Compiled with SSL support, not using it
00:00:11.520 com.jci.cpp.settings[302] Note (RegistryFactory.cpp:123 createRegistry) Startup time: 00:00:00.030078000
00:00:11.537 VBS_BUS_CAN[302] Info (mod_can.c:2529 VBS_BUS_CAN_VIM_Data_Received_Cb) Sending VIM ready notification
00:00:11.537 VBS_BUS_AM[302] Info (mod_am_manage_svc.c:1993 VBS_AM_GetVolumeStatusVolMgr) Received Request : GetVolumeStatusVolMgr
00:00:11.544 VBS_BUS_BCM[302] Info (mod_bcm_manage_svc.c:594 VBS_BCM_GetPublicCANStatus_Request) On boot up, Sending Public CAN status request to Powermon
00:00:11.544 VBS_BUS_CAN[302] Info (mod_can.c:3308 VBS_BUS_CAN_GetAccCurrentStatus_cb) ACC = OFF, (acc_state : 1) --> Send TAU status as 0:STANDBY
00:00:11.544 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5497 VBS_CD_Stop_Timer) Entry of VBS_CD_Stop_Timer
00:00:11.544 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5512 VBS_CD_Stop_Timer) No timer running on ACC OFF
00:00:11.544 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5515 VBS_CD_Stop_Timer) Exit of VBS_CD_Stop_Timer
00:00:11.544 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:2846 VBS_CD_SendSignal_CDVD_Status) Response : CDVD Status [Ready_Status = 0]
00:00:11.544 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:2782 VBS_CD_SendSignal_CDVD_Status) Response : CDVD Status [Operation_Status = 0, DVDMainMenuPlaying = 0, TitleMenuPlayingStat = 0]
00:00:11.544 VBS_BUS_AM[302] Info (mod_am.c:1218 VBS_AM_ReceiveHandler) Value Received for BTHF = 400, RingTone = 480, Navi = 480
00:00:11.544 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:2797 VBS_CD_SendSignal_CDVD_Status) Response : CDVD Status [Disc type = 0]
00:00:11.544 VBS_BUS_BCM[302] Info (mod_bcm_manage_svc.c:1152 VBS_BCM_Send_PublicCanStatus) Sending Public CAN Status on Service DBus with value = 1
00:00:11.544 SYSTEM[262] Info (state_machine.cpp:729 system_smm_LogVbsEventInfo) CAN is active!
00:00:11.551 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:2789 VBS_CD_SendSignal_CDVD_Status) Response : CDVD Status [Operation_Errors = 0]
00:00:11.551 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:2806 VBS_CD_SendSignal_CDVD_Status) Response : CDVD Status [Repeat_Setting_Status = 0]
00:00:11.551 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:2814 VBS_CD_SendSignal_CDVD_Status) Response : CDVD Status [Random_Setting_Status = 0]
00:00:11.551 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:2822 VBS_CD_SendSignal_CDVD_Status) Response : CDVD Status [Track_List_Status = 0]
00:00:11.551 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:2830 VBS_CD_SendSignal_CDVD_Status) Response : CDVD Status [Folder_List_Status = 0]
00:00:11.551 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:2838 VBS_CD_SendSignal_CDVD_Status) Response : CDVD Status [Disc_Update_Status = 0]
00:00:11.551 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:2855 VBS_CD_SendSignal_CDVD_Status) Response : CDVD Status [DVD_Subtitle_Status = 0]
00:00:11.551 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:2863 VBS_CD_SendSignal_CDVD_Status) Response : CDVD Status [CD_DVD_Source = 0]
00:00:11.551 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:2871 VBS_CD_SendSignal_CDVD_Status) Response : CDVD Status [Multi_Angles_Available = 0]
00:00:11.551 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:2879 VBS_CD_SendSignal_CDVD_Status) Response : CDVD Status [Parental_Control_Status = 0]
00:00:11.551 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:2887 VBS_CD_SendSignal_CDVD_Status) Response : CDVD Status [Aspect_Ratio_Status = 0]
00:00:11.551 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:2921 VBS_CD_SendSignal_CDVD_Status) Response : CDVD Status [Metadata Availability : Track = 0 Album = 0 Artist = 0 Genre = 0 Foldername = 0 DiscTitle = 0]
00:00:11.551 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:3769 VBS_CD_SendSignal_CDTV_StatusResp) Response : CDTV Status [TV Display status = 0]
00:00:11.551 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:3775 VBS_CD_SendSignal_CDTV_StatusResp) Response : CDTV Status [Video Settings pressed = 0]
00:00:11.551 SYSTEM[262] Info (state_machine.cpp:1959 system_smm_TopStateHandler) VBS service started!
00:00:11.551 SYSTEM[262] Info (state_machine.cpp:1440 system_smm_TryInitializeAudio) Still waiting for audio manager start!
00:00:11.551 SYSTEM[262] Info (state_machine.cpp:754 system_smm_LogVbsEventInfo) Ignition off with ACC OFF!
00:00:11.568 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:3781 VBS_CD_SendSignal_CDTV_StatusResp) Response : CDTV Status [Sound Settings pressed = 0]
00:00:11.568 VBS_BUS_BCM[302] Info (mod_bcm_manage_svc.c:528 VBS_BCM_GetPublicCanStatus_svc) Get Public CAN Status returned with value = 1
00:00:11.568 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:3787 VBS_CD_SendSignal_CDTV_StatusResp) Response : CDTV Status [TV Ready = 0]
00:00:11.568 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:3797 VBS_CD_SendSignal_CDTV_StatusResp) Response : CDTV Status [TV Mode = 0]
00:00:11.568 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:3803 VBS_CD_SendSignal_CDTV_StatusResp) Response : CDTV Status [Taskbar Display Request = 0]
00:00:11.568 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:3809 VBS_CD_SendSignal_CDTV_StatusResp) Response : CDTV Status [EWS Display = 0]
00:00:11.568 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:3815 VBS_CD_SendSignal_CDTV_StatusResp) Response : CDTV Status [TV SW Version Stat = 0]
00:00:11.568 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:3821 VBS_CD_SendSignal_CDTV_StatusResp) Response : CDTV Status [Entertainment Button Pressed = 0]
00:00:11.568 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:3827 VBS_CD_SendSignal_CDTV_StatusResp) Response : CDTV Status [TV EWS View Stat = 0]
00:00:11.568 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:3833 VBS_CD_SendSignal_CDTV_StatusResp) Response : CDTV Status [TV Speed Restriction Stat = 0]
00:00:11.568 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:3839 VBS_CD_SendSignal_CDTV_StatusResp) Response : CDTV Status [Return To TV Image Comp Ack = 0]
00:00:11.568 SYSTEM[262] Info (state_machine.cpp:729 system_smm_LogVbsEventInfo) CAN is active!
00:00:11.568 VIDEOCTRL[257] Info (vctrl_vbs.c:212 VCTRL2CPP_VBS_ChangeDTC) Clear Fault
00:00:11.568 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:3845 VBS_CD_SendSignal_CDTV_StatusResp) Response : CDTV Status [Tool Tip Status = 0]
00:00:11.568 VBS_BUS_RADIO[302] Info (mod_radio_manage_svc.c:8323 VBS_RADIO_UpdateTAUConnectStandbyStat) Value of TAU connect Standy status is 0
00:00:11.568 VBS_BUS_DIAG[302] Info (mod_diag_manage_svc.c:966 VBS_DIAG_ClearFaults_Request_svc) Number of Faults passed to ClearFaultsRequest  : 1
00:00:11.568 VBS_BUS_DIAG[302] Info (mod_diag_manage_svc.c:979 VBS_DIAG_ClearFaults_Request_svc) Fault 1 is 15  - REAR_CAMERA_PWR_SOURCE
00:00:11.568 VBS_BUS_RADIO[302] Info (mod_radio_manage_svc.c:8376 VBS_RADIO_UpdateTAUConnectStandbyStat) g_tauConnectedFileExists=0, Sending actual received TAU status to BLM.
00:00:11.568 VBS_BUS_RADIO[302] Info (mod_radio_manage_svc.c:11611 vbs_radio_Stop_TAU_Status_Timer) No timer is running
00:00:11.568 SYSTEM[262] Info (state_machine.cpp:714 system_smm_LogVbsRadioEventInfo) Tau is disconnected!
00:00:11.568 SYSTEM[262] Info (state_machine.cpp:2015 system_smm_TopStateHandler) Still waiting for audio manager to get running...
00:00:11.568 VBS_BUS_DIAG[302] Info (mod_diag_manage_svc.c:2172 VBS_SendSignal_ClearDTCResp) Current page : 0, Total page : 0  and Response Length is 4
00:00:11.568 VBS_BUS_DIAG[302] Info (mod_diag_manage_svc.c:2282 VBS_SendSignal_ClearDTCResp) Fault ID is 15 - REAR_CAMERA_PWR_SOURCE and fault status is 1
00:00:11.568 VDM[302] Warn (vdm_vdt_current_calc.c:8909 VDM_UpdateCVD_CstmzStat_KylssWal_OnOff) Invalid value for CVD.CstmzStat_KylssWal_OnOff!
00:00:11.568 VBS_BUS_SETTINGS[302] Info (mod_settings_manage_svc.c:10562 VBS_SETTINGS_reqForHUDTiltLvlReqVal) Sending request for HUD Tilt Lvl Req value
00:00:11.568 VBS_BUS_SETTINGS[302] Info (mod_settings_manage_svc.c:7797 VBS_SETTINGS_HECIllumination_Status) Posting Dimmer Cancel Signal with value = 1 on Service DBus
00:00:11.568 BLM_SETTINGS[374] Info (settings_vbs_interface.cpp:2553 BLM_SETTINGS_SSU_Status_Notification_cb) SSU Status notification received type - 0 value - 0
00:00:11.568 VBS_BUS_DRVIDIDM[302] Info (mod_drvididm.c:389 VBS_MOD_DRVIDIDM_ReceiveHandler) *** Igntiion is off ***!!!!
00:00:11.568 BLM_SETTINGS[374] Info (settings_vbs_interface.cpp:2558 BLM_SETTINGS_SSU_Status_Notification_cb) SSU Status notification received type - 1 value - 3
00:00:11.568 VDM[302] Info (vdm_idm_calc.c:3524 VDM_Update_HVD_ALLDriveStars) average score is 0
00:00:11.568 BLM_SETTINGS[374] Info (settings_vbs_interface.cpp:2563 BLM_SETTINGS_SSU_Status_Notification_cb) SSU Status notification received type - 2 value - 1
00:00:11.568 VDM[302] Info (vdm_idm_calc.c:3525 VDM_Update_HVD_ALLDriveStars) Current driver is 0
00:00:11.568 BLM_SETTINGS[374] Info (settings_vbs_interface.cpp:2568 BLM_SETTINGS_SSU_Status_Notification_cb) SSU Status notification received type - 3 value - 0
00:00:11.568 VDM[302] Info (vdm_idm_calc.c:3526 VDM_Update_HVD_ALLDriveStars) stage number is 1
00:00:11.568 VDM[302] Info (vdm_idm_calc.c:3527 VDM_Update_HVD_ALLDriveStars) stage achieved is 1
00:00:11.568 VDM[302] Info (vdm_idm_calc.c:3528 VDM_Update_HVD_ALLDriveStars) gs_CurrentScore achieved is 0
00:00:11.568 VDM[302] Info (vdm_idm_calc.c:3530 VDM_Update_HVD_ALLDriveStars) previous drive 0 star is 0
00:00:11.568 VDM[302] Info (vdm_idm_calc.c:3531 VDM_Update_HVD_ALLDriveStars) previous drive 1 star is 0
00:00:11.568 VDM[302] Info (vdm_idm_calc.c:3532 VDM_Update_HVD_ALLDriveStars) previous drive 2 star is 0
00:00:11.568 VDM[302] Info (vdm_idm_calc.c:3533 VDM_Update_HVD_ALLDriveStars) previous drive 3 star is 0
00:00:11.568 VDM[302] Info (vdm_idm_calc.c:3534 VDM_Update_HVD_ALLDriveStars) previous drive 4 star is 0
00:00:11.568 VDM[302] Info (vdm_idm_calc.c:3535 VDM_Update_HVD_ALLDriveStars) previous drive 5 star is 0
00:00:11.568 VDM[302] Info (vdm_idm_calc.c:3640 VDM_Update_HVD_ALLDriveStars) Drive0_star is 0
00:00:11.568 VDM[302] Info (vdm_idm_calc.c:3641 VDM_Update_HVD_ALLDriveStars) Drive1_star is 0
00:00:11.568 VDM[302] Info (vdm_idm_calc.c:3642 VDM_Update_HVD_ALLDriveStars) Drive2_star is 0
00:00:11.568 VDM[302] Info (vdm_idm_calc.c:3643 VDM_Update_HVD_ALLDriveStars) Drive3_star is 0
00:00:11.568 VDM[302] Info (vdm_idm_calc.c:3644 VDM_Update_HVD_ALLDriveStars) Drive4_star is 0
00:00:11.568 VDM[302] Info (vdm_idm_calc.c:3645 VDM_Update_HVD_ALLDriveStars) Drive5_star is 0
00:00:11.568 VDM[302] Info (vdm_idm_calc.c:3975 VDM_Update_CVD_HighScoreCounter) VDM_Read_CVDStageAchieved is 1
00:00:11.568 VDM[302] Info (vdm_idm_calc.c:3976 VDM_Update_CVD_HighScoreCounter) VDM_Read_CVD_StageNumber is 1
00:00:11.568 VBS_BUS_DRVIDIDM[302] Info (mod_drvididm_timers.c:154 DRV_TMR_Stop) failed to stop timer for ignition off
00:00:11.568 VDM[302] Info (vdm_idm_calc.c:5177 VDM_ResetTheCounter)  VDM's Counter got Reset - 0
00:00:11.568 RADIO_DB[302] Info (radiodb_interface.c:375 RADIO_DB_Open)    File exists in flash
00:00:11.568 RADIO_DB[302] Info (radiodb_core.c:674 db_copy_file) Copy: src: /data/radio/radio_database, dest: /tmp
00:00:11.568 VDM[302] Info (vdm_eem_calc.c:3297 VDM_EEM_StoreDataAtIgnOff)  l_totsvd_fuel_prev_str 0
00:00:11.568 BLM_SETTINGS[374] Warn (settings_service_funs.cpp:8589 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:00:11.568 VBS_BUS_SETTINGS[302] Info (mod_settings_manage_svc.c:7823 VBS_SETTINGS_HECIllumination_Status) Posting Panel Brightness Level Signal with value = 100 on Service DBus
00:00:11.568 BLM_SETTINGS[374] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/Keyless/WalkawayLock <!> Value is not in range
00:00:11.568 VBS_BUS_SETTINGS[302] Info (mod_settings_manage_svc.c:7856 VBS_SETTINGS_HECIllumination_Status) Posting Low Speed CMB /SCBS Signal with value = 1 on Service DBus
00:00:11.568 NATGUICTRL[122] Info (nativeguictrl_dbus_service_interface.c:157 ngc_videoSignal_cb) Setting camera installed = TRUE from VideoCtrl
00:00:11.568 VBS_BUS_VDT[302] Warn (mod_vdt_manage_svc.c:14123 VBS_VDT_WarnLamp_Timer_Stop) VDT Warning Lamp Timer has not stopped
00:00:11.568 TIMER[302] Error (timer.c:415 TMR_InUse) Invalid input parameter 'tmrPtr' = NULL!
00:00:11.568 VBS_BUS_VDT[302] Info (mod_vdt_ind_lamp_timer.c:216 VBS_VDT_100MS_Timer_Stop) VDT Indicator 100MS Timer has not yet started or already stopped!!
00:00:11.742 Std[] Error (: )  Compiled with SSL support, not using it
00:00:11.807 VBS_BUS_SETTINGS[302] Info (mod_settings_manage_svc.c:10504 VBS_SETTINGS_SendHUDTiltLvlReqVal) Successfully posted on service DBus for TiltLvlReqVal = 14
00:00:11.807 VBS_BUS_DIAG[302] Info (mod_diag.c:375 ReceiveHandler) Received GCC Config Management at MOD_DIAG: CMU TYPES  is: 2 driveChart_Log_Distance:0 destination_1 :0 destination_2:0 driveChart_Display:0 driveChart_DataTrans:0 myDoctor_Display:0 driverIdentification:0 stDis_IDM_Req:0 endDis_IDM_Req:0 stDis_Eco_Req:1 endDis_Eco_Req:1 custmzDisp_SW:2
00:00:11.807 VBS_BUS_DIAG[302] Info (mod_diag_manage_svc.c:2847 VBS_SendSignal_GCC_ConfigMgmtResp) Received GCC Config Management at MOD_DIAG:Destination is:0  CMU TYPES  is: 2 driveChart_Log_Distance:0 destination_1 :0 destination_2:0 driveChart_Display:0 driveChart_DataTrans:0 myDoctor_Display:0 driverIdentification:0 stDis_IDM_Req:0 endDis_IDM_Req:0 stDis_Eco_Req:1 endDis_Eco_Req:1 custmzDisp_SW:2
00:00:11.807 VBS_BUS_DRVIDIDM[302] Warn (mod_drvididm.c:335 VBS_MOD_DRVIDIDM_ReceiveHandler) Transmission of signal VBS_DRVIDIDM_Send_StDis_IDM_Req failed
00:00:11.807 VBS_BUS_DRVIDIDM[302] Warn (mod_drvididm.c:342 VBS_MOD_DRVIDIDM_ReceiveHandler) Transmission of signal VBS_DRVIDIDM_Send_EndDis_IDM_Req failed
00:00:11.807 VBS_BUS_DRVIDIDM[302] Info (mod_drvididm_manage_svc.c:356 VBS_DRVIDIDM_Send_DriverIdentification)   ***** DriverID BLM is not yet started....!!!!
00:00:11.807 VBS_BUS_DRVIDIDM[302] Warn (mod_drvididm.c:351 VBS_MOD_DRVIDIDM_ReceiveHandler) Transmission of signal VBS_DRVIDIDM_Send_DriverIdentification failed
00:00:11.807 VBS_BUS_BCM[302] Info (mod_bcm_manage_svc.c:1443 VBS_BCM_Send_IgnitionControl_Status) Sending Ignition Control Status on Service and HMI DBus with value = 1
00:00:11.807 VBS_BUS_SETTINGS[302] Info (mod_settings.c:1327 VBS_SETTINGS_ReceiveHandler) Received HUD Intens CNT Response with Value = 2
00:00:11.807 VBS_BUS_SETTINGS[302] Info (mod_settings.c:1335 VBS_SETTINGS_ReceiveHandler) Received HUD Auto Int Con On/Off Response with Value = 0
00:00:11.807 VBS_BUS_SETTINGS[302] Info (mod_settings.c:1351 VBS_SETTINGS_ReceiveHandler) Received HUD ManInt Cnt Level Response at MOD_SETTINGS = 20 = 0
00:00:11.807 BUCPSA[342] Info (bucpsa_interface.c:913 bucpsa_ProcessGCCNotification) Received HiCamera = 0
00:00:11.807 VBS_BUS_SETTINGS[302] Info (mod_settings_manage_svc.c:6520 VBS_SETTINGS_GCC_ConfigMgtm_BlockBF11) Sending GCC Config Management with DSP_mic = 0
00:00:11.807 Std[] Error (: )  Listening on port 2800
00:00:11.807 Std[] Error (: )  Listening on port 2766
00:00:11.865 DBAPI[430] Info (dbapi_plugins.c:777 addPluginForProcessing) pluginsForProcessing size insufficient. Increasing from 0 to 5.
00:00:11.865 DBAPI[430] Info (dbapi_plugins.c:794 addPluginForProcessing) Reallocation successful. pluginsForProcessingStart = 0; pluginsForProcessingSize = 5.
00:00:11.883 DBAPI[430] Info (dbapi_plugins.c:1129 pluginManager) Plugin manager thread started.
00:00:11.883 DBAPI[430] Info (dbapi_plugins.c:1225 pluginManager) connect to Service manager
00:00:11.891 DBAPI[430] Info (dbapi_plugins.c:1250 pluginManager) Connecting to SM.
00:00:11.918 DBAPI[430] Info (dbapi_plugins.c:1277 pluginManager) subscribe to sm to receive dependency service started event
00:00:11.919 DBAPI[430] Info (dbapi_plugins.c:1327 pluginManager) Subscribing to SM for events.
00:00:11.923 DBAPI[430] Info (dbapi_plugins.c:1357 pluginManager) check if dependency are already running
00:00:11.923 DBAPI[430] Info (dbapi_plugins.c:1396 pluginManager) Asking SM for currently running dependencies.
00:00:11.923 DBAPI[430] Info (dbapi_plugins.c:1425 pluginManager) start processing plugins
00:00:11.923 DBAPI[430] Info (dbapi_plugins.c:919 getNextPluginForProcessing) Returning element with index 0
00:00:11.923 DBAPI[430] Info (dbapi_plugins.c:1443 pluginManager) subscribed for wdm
00:00:11.923 DBAPI[430] Info (dbapi_plugins.c:1451 pluginManager) initialize plugin
00:00:11.923 DBAPI[430] Warn (dbapi_plugins.c:1555 pluginManager) pb is not initialized.
00:00:11.923 DBAPI[430] Info (dbapi_plugins.c:1425 pluginManager) start processing plugins
00:00:11.923 DBAPI[430] Info (dbapi_plugins.c:919 getNextPluginForProcessing) Returning element with index 1
00:00:11.923 DBAPI[430] Info (dbapi_plugins.c:1443 pluginManager) subscribed for wdm
00:00:11.923 DBAPI[430] Info (dbapi_plugins.c:1451 pluginManager) initialize plugin
00:00:11.928 DBAPI[430] Info (dbapi_plugins.c:1484 pluginManager) if no dependency initialize plugin actually here
00:00:11.928 DBAPI[430] Info (dbapi_plugins.c:594 loadAndInitPlugin) Loading plugin radio.
00:00:11.928 DBAPI[430] Info (dbapi_plugins.c:636 loadAndInitPlugin) callig dlopen
00:00:11.998 DBAPI[430] Info (dbapi_plugins.c:653 loadAndInitPlugin) calling dlsym
00:00:12.018 DBAPI[430] Info (dbapi_plugins.c:679 loadAndInitPlugin)  calling real plugin method
00:00:12.025 DBAPI[430] Info (dbapi_plugins.c:699 loadAndInitPlugin) Plugin radio (/jci/dbapi/plugins/libdbapiradio.so) loaded and initialized.
00:00:12.025 DBAPI[430] Info (dbapi_plugins.c:1500 pluginManager) got initialized so its running
00:00:12.026 DBAPI[430] Info (dbapi_plugins.c:1506 pluginManager) tickle wdm
00:00:12.027 DBAPI[430] Info (dbapi_plugins.c:1425 pluginManager) start processing plugins
00:00:12.029 DBAPI[430] Info (dbapi_plugins.c:914 getNextPluginForProcessing) Plugin queue is empty.
00:00:12.038 BLM_SETTINGS[374] Warn (settings_service_funs.cpp:8631 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:00:12.038 BLM_SETTINGS[374] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/Keyless/BuzzerAnswerVolume <!> Value is not in range
00:00:12.056 RADIO_DB[302] Info (radiodb_interface.c:380 RADIO_DB_Open) Database from flash is loaded to RAM
00:00:12.072 RADIO_DB[302] Error (radiodb_interface.c:3633 radio_DB_GetAllTables) Error executing the query "SELECT name FROM sqlite_master WHERE type='table'": file is encrypted or is not a database !
00:00:12.106 BLM_SETTINGS[374] Warn (settings_service_funs.cpp:8631 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:00:12.106 BLM_SETTINGS[374] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/SafetyConvenience/AutoDoorLockChimeVolume <!> Value is not in range
00:00:12.106 BLM_SETTINGS[374] Info (settings_vbs_interface.cpp:2901 BLM_SETTINGS_HECIllumination_Status_Notification_cb) HEC Illumination Status notification received type - 12 value - 1
00:00:12.106 BLM_SETTINGS[374] Info (settings_vbs_interface.cpp:2824 BLM_SETTINGS_CMU_Status_Notification_cb) CMU Control Status notification received type - 0 value - 4
00:00:12.106 BLM_SETTINGS[374] Info (settings_vbs_interface.cpp:2829 BLM_SETTINGS_CMU_Status_Notification_cb) CMU Control Status notification received type - 1 value - 2
00:00:12.106 BLM_SETTINGS[374] Info (settings_vbs_interface.cpp:2834 BLM_SETTINGS_CMU_Status_Notification_cb) CMU Control Status notification received type - 3 value - 2
00:00:12.106 VBS_BUS_SETTINGS[302] Info (mod_settings_manage_svc.c:2469 VBS_SETTINGS_SetCMUControlReq_svc) Posting CMU Control Request for SCBS with Type = 13 and Value = 1
00:00:12.106 BLM_SETTINGS[374] Warn (settings_vbs_interface.cpp:10344 BLM_SETTINGS_Set_VBS_Vehicle_cb) UserData is 0
00:00:12.268 BLM_SETTINGS[374] Info (settings_vbs_interface.cpp:14763 BLM_SETTINGS_PrioritizeAndSetDestination) Valid destination 2 found in table.
00:00:12.268 BLM_SETTINGS[374] Info (settings_vbs_interface.cpp:14773 BLM_SETTINGS_PrioritizeAndSetDestination) No change of destination is needed, it will remain 2
00:00:12.340 BLM_SETTINGS[374] Info (settings_vbs_interface.cpp:3082 BLM_SETTINGS_Vehicle_VIN_Notification) Vehicle VIN notification received [JM1BM1T79G1319820][19]
00:00:12.357 CPP_APPSDK[425] Info (appsdk_net.c:380 APPSDK_SendDataToGUI) APPSDK NET: Sending 410 bytes to GUI: "{"msgType":"JSPlugInLoadList","pluginList":[{"plugInName":"msg","serviceId":1,"JSLibName":"libjcipluginmsg.js"},{"plugInName":"fav","serviceId":2,"JSLibName":"libjcipluginfav.js"},{"plugInName":"usbm","serviceId":3,"JSLibName":"libjcipluginusbm.js"},{"plugInName":"navifav","serviceId":4,"JSLibName":"libjcipluginnavifav.js"},{"plugInName":"cd","serviceId":5,"JSLibName":"libjcipluginncd.js"}],"plugInCount":5}"
00:00:12.407 BLM_SETTINGS[374] Info (settings_vbs_interface.cpp:11697 UpdateSymLinkForDSPConfiguration) Set DSP symlink to /jci/dsp/dsp_J36A-NoBose.xml, index in table 7
00:00:12.407 BLM_SETTINGS[374] Info (settings_symlink.hpp:228 _int_Set) symlink file /data/dsp.xml and its conatins "/jci/dsp/dsp_J36A-NoBose.xml" are OK
00:00:12.441 VBS_BUS_SETTINGS[302] Info (mod_settings_manage_svc.c:5836 VBS_SETTINGS_GCC_ConfigMgtm_BlockC103) Received GCC Config Management with Vehicle Type = 54
00:00:12.441 VBS_BUS_SETTINGS[302] Info (mod_settings_manage_svc.c:5870 VBS_SETTINGS_GCC_ConfigMgtm_BlockC103) Received GCC Config Management with Brand = 7
00:00:12.495 BLM_SETTINGS[374] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
00:00:12.495 BLM_SETTINGS[374] Info (settings_vbs_interface.cpp:3030 BLM_SETTINGS_Vehicle_VIN_Notification_cb) Vehicle VIN notification received [JM1BM1T79G1319820]
00:00:12.495 BLM_SETTINGS[374] Info (settings_vbs_interface.cpp:3037 BLM_SETTINGS_Vehicle_VIN_Notification_cb) Vehicle VIN notification received [JM1BM1T79G1319820]
00:00:12.507 BLM_SETTINGS[374] Info (settings_symlink.hpp:228 _int_Set) symlink file /data/asound.conf and its conatins "/etc/asound.conf.LHD" are OK
00:00:12.535 BUCPSA[342] Info (bucpsa_psm_handler.c:84 BUCPSA_InjectSensorData) PSM Update: Status=OFF, SystemError=FALSE, Sensors=[0,0,0,0,0,0], Variation=0, DisplayRequest=OFF
00:00:12.535 BUCPSA[342] Info (bucpsa_steng.c:214 BUCPSA_StengPostMessage) Posting event 'BUCPSA_PSA_EVT' into state 'Default_State'
00:00:12.535 BUCPSA[342] Info (bucpsa_steng.c:381 bucpsa_Default_EventHandler) PSM System Status = Off (0)
00:00:12.577 CPP_TIME[499] Info (time_dbus_client_funs.cpp:2304 TIME_Client_Connect) will send connect request: conn 0x4af38 : dbus 0x4dc20 : name com.jci.BLM_TIME_TO_CPP_TIME
00:00:12.581 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_Connect_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:12.586 CPP_TIME[499] Info (time_dbus_client_funs.cpp:3443 TIME_Client_RegisterForDatetimeChangeEvent) request to cpp_time : conn 0x4af38 : dbus 0x4dc20 : name com.jci.BLM_TIME_TO_CPP_TIME
00:00:12.597 CPP_TIME[432] Info (time_dbus_service_funs.cpp:2914 TIME_RegisterForDatetimeChangeEvent_svc) registering for event : 32767.127.127 127:127:00 client : com.jci.BLM_TIME_TO_CPP_TIME
00:00:12.597 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_RegisterForDatetimeChangeEvent_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:12.597 CPP_TIME[432] Warn (time_common.cpp:772 TIME_convertStructuredTimeToTime) mktime - bad parameter :32767.127.127 127:127:00
00:00:12.597 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) time_RegisterForDatetimeChangeEvent_resp_cb|(event) 60 1970.01.01 00:01:00|-1|0|0|0|ARMED|RUN|keep|2|2|0|com.jci.BLM_TIME_TO_CPP_TIME|occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:32767.127.127 127:127:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|com.jci.BLM_TIME_TO_CPP_TIME
00:00:12.597 CPP_TIME[432] Warn (time_dbus_service_funs.cpp:1439 time_RegisterForDatetimeChangeEvent_resp_cb) already existing and will be deleted|(event) 60 1970.01.01 00:01:00|-1|0|0|0|ARMED|RUN|keep|2|2|0|com.jci.BLM_TIME_TO_CPP_TIME|occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:32767.127.127 127:127:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|com.jci.BLM_TIME_TO_CPP_TIME
00:00:12.597 CPP_TIME[432] Info (time_dbus_service_funs.cpp:1446 time_RegisterForDatetimeChangeEvent_resp_cb) adding event
00:00:12.607 BLM_SETTINGS[499] Info (settings_client_funs.cpp:759 BLM_SETTINGS_Client_ExtConnect) com.jci.BLM_TIME_TO_BLM_SETTINGS
00:00:12.616 CPP_TIME[499] Warn (time__gen_DataMutex.hpp:785 DataLock) mx locked, WILL wait until unlocked for 0x47058
00:00:12.623 CPP_TIME[499] Warn (time_stack_backtrace.cpp:83 __int_ShowStackBackTraceByLevel) __int_ShowStackBackTraceByLevel(TIME_debug_level_e)
00:00:12.624 CPP_TIME[499] Warn (time_stack_backtrace.cpp:83 __int_ShowStackBackTraceByLevel) com::jci::time::DataMutex::DataLock()
00:00:12.625 CPP_TIME[499] Warn (time_stack_backtrace.cpp:83 __int_ShowStackBackTraceByLevel) /jci/lib/libjcitime_client.so(+0x3b6f8)
00:00:12.640 VBS_BUS_DIAG[302] Info (mod_diag.c:331 ReceiveHandler) Received GCC Config Management at MOD_DIAG: destination is: 2
00:00:12.640 VBS_BUS_DIAG[302] Info (mod_diag_manage_svc.c:2847 VBS_SendSignal_GCC_ConfigMgmtResp) Received GCC Config Management at MOD_DIAG:Destination is:2  CMU TYPES  is: 2 driveChart_Log_Distance:0 destination_1 :0 destination_2:0 driveChart_Display:0 driveChart_DataTrans:0 myDoctor_Display:0 driverIdentification:0 stDis_IDM_Req:0 endDis_IDM_Req:0 stDis_Eco_Req:1 endDis_Eco_Req:1 custmzDisp_SW:2
00:00:12.640 VBS_BUS_BCM[302] Info (mod_bcm.c:468 VBS_BCM_ReceiveHandler) Speed Restriction Signal not received at BCM Plugin
00:00:12.645 BLM_SETTINGS[374] Info (settings_service_funs.cpp:1269 SETTINGS_Connect_svc) connecting client:com.jci.BLM_TIME_TO_BLM_SETTINGS
00:00:12.654 USBDTC[523] Info (usbdtc_main.cpp:96 ServiceInit) Args:[pwr]; USE_USBVBUSPOWER_RECOVERY=[1]
00:00:12.667 BLM_SETTINGS[499] Info (settings_client_funs.cpp:422 BLM_SEETINGS_Connect_cb) Client Name [com.jci.BLM_TIME_TO_BLM_SETTINGS]
00:00:12.669 BLM_SETTINGS[499] Info (settings_client_funs.cpp:2760 SETTINGS_Client_ExtOnChange_U8) client [com.jci.BLM_TIME_TO_BLM_SETTINGS] com/jci/blm/settings/Time/TimeZone
00:00:12.672 BLM_SETTINGS[374] Info (settings_service_funs.cpp:6617 SETTINGS_OnChange_Settings_U8_svc) client:com.jci.BLM_TIME_TO_BLM_SETTINGS key path : /2/com/jci/blm/settings/Time/TimeZone
00:00:12.685 BLM_SETTINGS[523] Info (settings_client_funs.cpp:712 BLM_SETTINGS_Client_Connect) com.jci.settings_client_usbdtc
00:00:12.711 BLM_SETTINGS[374] Info (settings_service_funs.cpp:1269 SETTINGS_Connect_svc) connecting client:com.jci.settings_client_usbdtc
00:00:12.721 BLM_SETTINGS[523] Info (settings_client_funs.cpp:422 BLM_SEETINGS_Connect_cb) Client Name [com.jci.settings_client_usbdtc]
00:00:12.722 BLM_SETTINGS[523] Warn (settings_client_funs.cpp:479 BLM_SEETINGS_Connect_cb) Connection call-back pointer is null -  no call-back!
00:00:12.729 BLM_SETTINGS[523] Info (settings_client_funs.cpp:1530 SETTINGS_Client_Get_S16) com/jci/maz/cmu/Region
00:00:12.732 BLM_SETTINGS[523] Info (settings_client_funs.cpp:1559 SETTINGS_Client_ExtGet_S16) client [com.jci.settings_client_usbdtc] com/jci/maz/cmu/Region
00:00:12.732 BLM_SETTINGS[374] Info (settings_service_funs.cpp:5921 SETTINGS_Get_Settings_S16_svc) key path : /1/com/jci/maz/cmu/Region
00:00:12.763 BLM_SETTINGS[374] Info (settings_vbs_interface.cpp:11697 UpdateSymLinkForDSPConfiguration) Set DSP symlink to /jci/dsp/dsp_J36A-NoBose.xml, index in table 7
00:00:12.763 BLM_SETTINGS[374] Info (settings_symlink.hpp:228 _int_Set) symlink file /data/dsp.xml and its conatins "/jci/dsp/dsp_J36A-NoBose.xml" are OK
00:00:12.905 BLM_SETTINGS[374] Info (settings_vbs_interface.cpp:11697 UpdateSymLinkForDSPConfiguration) Set DSP symlink to /jci/dsp/dsp_J36A-NoBose.xml, index in table 7
00:00:12.905 BLM_SETTINGS[374] Info (settings_symlink.hpp:228 _int_Set) symlink file /data/dsp.xml and its conatins "/jci/dsp/dsp_J36A-NoBose.xml" are OK
00:00:12.978 BLM_SETTINGS[374] Info (settings_vbs_interface.cpp:14763 BLM_SETTINGS_PrioritizeAndSetDestination) Valid destination 2 found in table.
00:00:12.978 BLM_SETTINGS[374] Info (settings_vbs_interface.cpp:14773 BLM_SETTINGS_PrioritizeAndSetDestination) No change of destination is needed, it will remain 2
00:00:12.986 BLM_SETTINGS[499] Info (settings_client_funs.cpp:2638 SETTINGS_Client_OnChange_U8_cb) SETTINGS_Client_OnChange_U8_cb
00:00:12.986 BLM_SETTINGS[499] Info (settings_client_funs.cpp:2668 SETTINGS_Client_OnChange_U8_cb) Client Name [com.jci.BLM_TIME_TO_BLM_SETTINGS]
00:00:12.986 BLM_SETTINGS[499] Info (settings_client_funs.cpp:3034 SETTINGS_Client_ExtOnChange_S16) client [com.jci.BLM_TIME_TO_BLM_SETTINGS] com/jci/blm/settings/Time/TimeDST
00:00:12.989 BLM_SETTINGS[374] Info (settings_service_funs.cpp:6677 SETTINGS_OnChange_Settings_S16_svc) client:com.jci.BLM_TIME_TO_BLM_SETTINGS key path : /2/com/jci/blm/settings/Time/TimeDST
00:00:12.995 BLM_SETTINGS[523] Info (settings_client_funs.cpp:1458 SETTINGS_Client_Get_S16_cb) SETTINGS_Client_Get_S16_cb
00:00:12.995 BLM_SETTINGS[523] Info (settings_client_funs.cpp:1487 SETTINGS_Client_Get_S16_cb) Client Name [com.jci.settings_client_usbdtc], returned value 2 for setting ID 74
00:00:13.002 BLM_SETTINGS[499] Info (settings_client_funs.cpp:2907 SETTINGS_Client_OnChange_S16_cb) SETTINGS_Client_OnChange_S16_cb
00:00:13.002 BLM_SETTINGS[499] Info (settings_client_funs.cpp:2937 SETTINGS_Client_OnChange_S16_cb) Client Name [com.jci.BLM_TIME_TO_BLM_SETTINGS]
00:00:13.002 BLM_SETTINGS[499] Info (settings_client_funs.cpp:2760 SETTINGS_Client_ExtOnChange_U8) client [com.jci.BLM_TIME_TO_BLM_SETTINGS] com/jci/blm/settings/Time/GPS_Sync
00:00:13.002 BLM_SETTINGS[374] Info (settings_service_funs.cpp:6617 SETTINGS_OnChange_Settings_U8_svc) client:com.jci.BLM_TIME_TO_BLM_SETTINGS key path : /2/com/jci/blm/settings/Time/GPS_Sync
00:00:13.010 USBDTC[523] Info (usbdtcvbuspwrctrl.cpp:698 GetVINData_cb) VIN data 'JM1BM1T79G1319820' length=17
00:00:13.010 BLM_SETTINGS[499] Info (settings_client_funs.cpp:2638 SETTINGS_Client_OnChange_U8_cb) SETTINGS_Client_OnChange_U8_cb
00:00:13.010 BLM_SETTINGS[499] Info (settings_client_funs.cpp:2668 SETTINGS_Client_OnChange_U8_cb) Client Name [com.jci.BLM_TIME_TO_BLM_SETTINGS]
00:00:13.010 BLM_SETTINGS[499] Info (settings_client_funs.cpp:1400 SETTINGS_Client_ExtGet_U8) client [com.jci.BLM_TIME_TO_BLM_SETTINGS] com/jci/blm/settings/Time/TimeZone
00:00:13.010 BLM_SETTINGS[374] Info (settings_service_funs.cpp:5856 SETTINGS_Get_Settings_U8_svc) key path : /2/com/jci/blm/settings/Time/TimeZone
00:00:13.015 USBDTC[523] Warn (usbdtcudev.cpp:147 CFaultUDEVMonitor) No devices match the filter!.
00:00:13.019 USBDTC[523] Info (usbdtcgpio.cpp:172 UpdateMonitorStatus) 'ACC Status':Act/Pin/Assert <0><0><1>
00:00:13.020 USBDTC[523] Info (usbdtcgpio.cpp:172 UpdateMonitorStatus) 'HOST Port OC':Act/Pin/Assert <1><0><0>
00:00:13.021 USBDTC[523] Info (usbdtcapp.cpp:364 StatusChange) Status changed DTC ID = 13, isAsserted = 0
00:00:13.030 VBS_BUS_DIAG[302] Info (mod_diag_manage_svc.c:966 VBS_DIAG_ClearFaults_Request_svc) Number of Faults passed to ClearFaultsRequest  : 1
00:00:13.030 VBS_BUS_DIAG[302] Info (mod_diag_manage_svc.c:979 VBS_DIAG_ClearFaults_Request_svc) Fault 1 is 13  - USB_PRT_HUB2_CURNT_RANGE_ISSUE
00:00:13.030 USBDTC[523] Info (usbdtcreporter.cpp:226 ReporterRoutine) VBS ClearFault successful! FaultID = 13
00:00:13.030 VBS_BUS_DIAG[302] Info (mod_diag_manage_svc.c:2172 VBS_SendSignal_ClearDTCResp) Current page : 0, Total page : 0  and Response Length is 4
00:00:13.030 VBS_BUS_DIAG[302] Info (mod_diag_manage_svc.c:2282 VBS_SendSignal_ClearDTCResp) Fault ID is 13 - USB_PRT_HUB2_CURNT_RANGE_ISSUE and fault status is 1
00:00:13.030 DIAG[521] Info (testdiag_main.c:171 GetServiceInterfaces) GetServiceInterfaces
00:00:13.044 USBDTC[523] Warn (usbdtcudev.cpp:366 UpdateMonitorStatus) No devices match the filter!.
00:00:13.051 BLM_SETTINGS[499] Info (settings_client_funs.cpp:1298 SETTINGS_Client_Get_U8_cb) SETTINGS_Client_Get_U8_cb
00:00:13.051 BLM_SETTINGS[499] Info (settings_client_funs.cpp:1328 SETTINGS_Client_Get_U8_cb) Client Name [com.jci.BLM_TIME_TO_BLM_SETTINGS], returned value 5 for setting ID 151
00:00:13.051 BLM_SETTINGS[499] Info (settings_client_funs.cpp:1400 SETTINGS_Client_ExtGet_U8) client [com.jci.BLM_TIME_TO_BLM_SETTINGS] com/jci/blm/settings/Time/GPS_Sync
00:00:13.051 BLM_SETTINGS[374] Info (settings_service_funs.cpp:5856 SETTINGS_Get_Settings_U8_svc) key path : /2/com/jci/blm/settings/Time/GPS_Sync
00:00:13.060 DIAG[521] Info (testdiag_statemachine.c:637 TESTDIAG_initializeStateMachine) Starting the state machine
00:00:13.060 DIAG[521] Info (testdiag_statemachine.c:718 TESTDIAG_startStateMachine) Testdiag Application thread created with thread id = 302232
00:00:13.060 DIAG[521] Info (testdiag_statemachine.c:936 testdiag_TopState_EventHandler) BLM_TESTDIAG entering TOP state
00:00:13.060 DIAG[521] Info (testdiag_statemachine.c:942 testdiag_TopState_EventHandler) Entered Top State
00:00:13.069 BLM_SETTINGS[499] Info (settings_client_funs.cpp:1298 SETTINGS_Client_Get_U8_cb) SETTINGS_Client_Get_U8_cb
00:00:13.069 BLM_SETTINGS[499] Info (settings_client_funs.cpp:1328 SETTINGS_Client_Get_U8_cb) Client Name [com.jci.BLM_TIME_TO_BLM_SETTINGS], returned value 1 for setting ID 150
00:00:13.069 BLM_SETTINGS[499] Info (settings_client_funs.cpp:1559 SETTINGS_Client_ExtGet_S16) client [com.jci.BLM_TIME_TO_BLM_SETTINGS] com/jci/blm/settings/Time/TimeDST
00:00:13.069 BLM_SETTINGS[374] Info (settings_service_funs.cpp:5921 SETTINGS_Get_Settings_S16_svc) key path : /2/com/jci/blm/settings/Time/TimeDST
00:00:13.072 com.jci.cpp.settings.socket[521] Info (SocketRegistry.cpp:1101 openSpecific) Connected to proxy: tcpip://
00:00:13.094 BLM_SETTINGS[499] Info (settings_client_funs.cpp:1458 SETTINGS_Client_Get_S16_cb) SETTINGS_Client_Get_S16_cb
00:00:13.094 BLM_SETTINGS[499] Info (settings_client_funs.cpp:1487 SETTINGS_Client_Get_S16_cb) Client Name [com.jci.BLM_TIME_TO_BLM_SETTINGS], returned value 60 for setting ID 154
00:00:13.094 BLM_SETTINGS[499] Info (settings_client_funs.cpp:3301 SETTINGS_Client_ExtOnChange_U32) client [com.jci.BLM_TIME_TO_BLM_SETTINGS] com/jci/blm/settings/Time/TimeStamp
00:00:13.094 BLM_SETTINGS[374] Info (settings_service_funs.cpp:6737 SETTINGS_OnChange_Settings_U32_svc) client:com.jci.BLM_TIME_TO_BLM_SETTINGS key path : /2/com/jci/blm/settings/Time/TimeStamp
00:00:13.094 BLM_SETTINGS[499] Info (settings_client_funs.cpp:3179 SETTINGS_Client_OnChange_U32_cb) SETTINGS_Client_OnChange_U32_cb
00:00:13.094 BLM_SETTINGS[499] Info (settings_client_funs.cpp:3209 SETTINGS_Client_OnChange_U32_cb) Client Name [com.jci.BLM_TIME_TO_BLM_SETTINGS]
00:00:13.094 BLM_SETTINGS[499] Info (settings_client_funs.cpp:1721 SETTINGS_Client_ExtGet_U32) client [com.jci.BLM_TIME_TO_BLM_SETTINGS] com/jci/blm/settings/Time/TimeStamp
00:00:13.094 BLM_SETTINGS[374] Info (settings_service_funs.cpp:6023 SETTINGS_Get_Settings_U32_svc) key path : /2/com/jci/blm/settings/Time/TimeStamp
00:00:13.107 BLM_SETTINGS[499] Info (settings_client_funs.cpp:1619 SETTINGS_Client_Get_U32_cb) SETTINGS_Client_Get_U32_cb
00:00:13.107 BLM_SETTINGS[499] Info (settings_client_funs.cpp:1649 SETTINGS_Client_Get_U32_cb) Client Name [com.jci.BLM_TIME_TO_BLM_SETTINGS], returned value 86400 for setting ID 153
00:00:13.107 BLM_TIME[499] Info (clock_settings.c:1272 blm_time_set_get_timestamp_cb) New Timestamp is : 86400 1970-01-02 00:00:00
00:00:13.107 BLM_TIME[499] Info (blm_time_logic.cpp:1649 blm_time_RtcToTime) Realtime is 1970-01-01 10:10:14
00:00:13.107 BLM_TIME[499] Info (blm_time_logic.cpp:2006 BLM_TIME_LGC_Initialize) possible battery disconnect detected - time sync needed
00:00:13.107 BLM_TIME[499] Info (blm_time_logic.cpp:2014 BLM_TIME_LGC_Initialize) timestamp 1970-01-02 00:00:00 86400
00:00:13.107 BLM_TIME[499] Info (blm_time_logic.cpp:2022 BLM_TIME_LGC_Initialize)      sRTC 1970-01-01 10:10:14 36614
00:00:13.107 BLM_TIME[499] Info (blm_time_logic.cpp:2030 BLM_TIME_LGC_Initialize)        TZ 1969-12-31 16:00:00 -28800
00:00:13.107 BLM_TIME[499] Info (blm_time_logic.cpp:2038 BLM_TIME_LGC_Initialize)       DST 1970-01-01 01:00:00 3600
00:00:13.107 BLM_TIME[499] Warn (blm_time_logic.cpp:2088 BLM_TIME_LGC_Initialize) UTC corrected with 24h 1970-01-02 10:10:14
00:00:13.107 BLM_TIME[499] Info (time_client.cpp:1348 BLM_TIME2CPP_TIME_SetCompositeTime) Set CPP_TIME clock to 1970-01-02 10:10:14  TZ h:-8 m:0  DST h:1 m:0
00:00:13.107 CPP_TIME[499] Info (time_dbus_client_funs.cpp:4129 TIME_Client_SetDatetimeComponents) time is sync'd by client com.jci.BLM_TIME_TO_CPP_TIME (1970.01.02 10:10:14 0000.00.00 -8:00:00 0000.00.00 01:00:00 0000.00.00 00:00:00)
00:00:13.107 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_SetDatetimeComponents_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:13.107 CPP_TIME[432] Error (time_common.cpp:2518 TIME_IsValid_New_UTC) UTC new:1970.01.02 10:10:14 current:1970.01.01 00:00:12 difference is 123002s (12 - 123014)
00:00:13.107 CPP_TIME[432] Warn (time_common.cpp:2573 TIME_IsValid_New_TZ) TZ changed from 0000.00.00 00:00:00 to 0000.00.00 -8:00:00 (0 to -28800)
00:00:13.107 CPP_TIME[432] Warn (time_common.cpp:2622 TIME_IsValid_New_DST) DST changed from 0000.00.00 00:00:00 to 0000.00.00 01:00:00 (0 to 3600)
00:00:13.107 CPP_TIME[432] Info (time_dbus_service_funs.cpp:2272 time_SetDatetimeComponents_resp_cb) OK status = 100
00:00:13.107 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) time_SetDatetimeComponents_resp_cb|(none)  97814 1970.01.02 03:10:14|123014|-28800|3600|0|ARMED|RUN|keep|0|1|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.02 10:10:14|0000.00.00 -8:00:00|0000.00.00 01:00:00|0000.00.00 00:00:00|
00:00:13.107 CPP_TIME[432] Info (time__cpp_Timer.cpp:707 Dump) TicksReal : 12 | TicksRealOffset : 97802 | TicksReal + TicksRealOffset = 97814 1970.01.02 03:10:14
00:00:13.107 CPP_TIME[432] Info (time__cpp_TimeEvents.cpp:535 Dump) -------------------------------------------------------
00:00:13.107 CPP_TIME[432] Info (time__cpp_TimeEvents.cpp:535 Dump) Total events : 2
00:00:13.107 CPP_TIME[432] Info (time__cpp_TimeEvents.cpp:535 Dump) -------------------------------------------------------
00:00:13.107 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) void com::jci::time::cppTimeEvents::Dump()|(event) 58 1970.01.01 00:00:58|-1|0|0|0|ARMED|RUN|keep|2|2|0|com.jci.tds2cpptime|occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:32767.127.127 127:127:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|com.jci.tds2cpptime
00:00:13.107 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) void com::jci::time::cppTimeEvents::Dump()|(event) 58 1970.01.01 00:00:58|-1|0|0|0|ARMED|RUN|keep|2|2|0|com.jci.BLM_TIME_TO_CPP_TIME|occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:32767.127.127 127:127:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|com.jci.BLM_TIME_TO_CPP_TIME
00:00:13.107 CPP_TIME[499] Info (time_dbus_client_funs.cpp:3233 TIME_Client_GetDatetimeComposite) request to cpp_time : conn 0x4af38 : dbus 0x4dc20 : name com.jci.BLM_TIME_TO_CPP_TIME
00:00:13.107 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|no pResponse|(sync)  0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|3|9|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:13.107 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetimeComposite_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:13.107 BLM_TIME[499] Info (dbusTIME_service.c:194 BLM_TIME_HDBUS_ClockChanged) broadcasting 1-min signal 03:10
00:00:13.107 BLM_TIME[499] Info (service_manager.cpp:127 ServiceInit) [ok] - BLM_TIME is running
00:00:13.168 BLM_TIME[499] Info (blm_time_logic.cpp:299 blm_time_lgc_LogicThread) Enter logic thread
00:00:13.168 com.jci.cpp.settings[521] Note (RegistryFactory.cpp:123 createRegistry) Startup time: 00:00:00.079977333
00:00:13.168 DIAG[521] Info (testdiag_statemachine.c:18638 TESTDIAG_Get_RegionInfo) The region received from registry setting is 2
00:00:13.168 com.jci.cpp.settings.socket[521] Info (Channel.cpp:95 close) Closing descriptor: 24
00:00:13.168 com.jci.cpp.settings.socket[267] Info (SocketProxy.cpp:2405 run) End of file reached
00:00:13.168 com.jci.cpp.settings.socket[267] Info (Channel.cpp:95 close) Closing descriptor: 17
00:00:13.168 com.jci.cpp.settings.socket[521] Info (SocketRegistry.cpp:971 run) The socket closed
00:00:13.178 com.jci.cpp.settings.socket[521] Note (SocketRegistry.cpp:1030 ~SocketRegistry) Destroyed: "tcpip://"
00:00:13.178 BLM_SETTINGS[521] Info (settings_client_funs.cpp:759 BLM_SETTINGS_Client_ExtConnect) com.jci.settings.testdiag
00:00:13.178 BLM_TIME[499] Info (blm_time_gps.cpp:216 blm_time_gpsSyncThread) Now will request NNG GetTime.
00:00:13.178 BLM_TIME[499] Warn (blm_time_gps.cpp:230 blm_time_gpsSyncThread) Unable to get time from NNG (The name com.NNG.Api was not provided by any .service files)
00:00:13.178 BLM_TIME[499] Info (blm_time_gps.cpp:251 blm_time_gpsSyncThread) Starting GPS sync loop
00:00:13.178 BLM_TIME[499] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:00:13.185 BLM_TIME[499] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:00:13.189 BLM_SETTINGS[374] Info (settings_service_funs.cpp:1269 SETTINGS_Connect_svc) connecting client:com.jci.settings.testdiag
00:00:13.192 DIAG[521] Info (testdiag_statemachine.c:18846 TESTDIAG_getVehicleType) BLM_SETTINGS_Client_ExtConnect Successful
00:00:13.192 DIAG[521] Info (testdiag_statemachine.c:1340 testdiag_NotReadyState_EventHandler) TestDiag entering Not Ready state
00:00:13.192 DIAG[521] Info (testdiag_statemachine.c:1345 testdiag_NotReadyState_EventHandler) Entered TestDiag_NotReady_State
00:00:13.192 DIAG[521] Info (testdiag_main.c:245 ServiceInit) Successfully started TESTDIAG statemachine
00:00:13.212 BLM_SETTINGS[521] Info (settings_client_funs.cpp:422 BLM_SEETINGS_Connect_cb) Client Name [com.jci.settings.testdiag]
00:00:13.212 DIAG[521] Info (testdiag_statemachine.c:18872 TESTDIAG_Settings_Connect_Request) TESTDIAG_Settings_Connect_Request Successful
00:00:13.212 BLM_SETTINGS[521] Info (settings_client_funs.cpp:1559 SETTINGS_Client_ExtGet_S16) client [com.jci.settings.testdiag] com/jci/blm/settings/Vehicle/VehicleModelType
00:00:13.217 BLM_SETTINGS[374] Info (settings_service_funs.cpp:5921 SETTINGS_Get_Settings_S16_svc) key path : /2/com/jci/blm/settings/Vehicle/VehicleModelType
00:00:13.249 DIAG[521] Info (testdiag_blmsystem_interface.c:292 TESTDIAG_System_ACC_Change_handler_cb) ACC Status is 1
00:00:13.251 DIAG[521] Info (testdiag_statemachine.c:998 testdiag_TopState_EventHandler) Received ACC OFF event
00:00:13.252 DIAG[521] Info (testdiag_statemachine.c:789 TESTDIAG_postMessageToStateMachine) Posting TESTDIAG_ACC_OFF_EVT (18) event to state machine in state: NotReady
00:00:13.313 DIAG[521] Info (testdiag_statemachine.c:1367 testdiag_NotReadyState_EventHandler) Received Initialized event
00:00:13.313 DIAG[521] Info (testdiag_vbs_interface.c:4479 TESTDIAG_getVehicleInfoData) Sen request to BUS_DIAG for getting vehicle info data after TESTDIAG loads
00:00:13.315 VBS_BUS_DIAG[302] Info (mod_diag_manage_svc.c:1724 VBS_DIAG_BLM_Ready_Vehicle_Info_Data_Request_svc) BLM Ready, Vehicle Info data requested
00:00:13.316 DIAG[521] Info (testdiag_vbs_interface.c:1073 TESTDIAG_VehicleInfoData_Response_cb) TESTDIAG:Received Vehicle Info data:-- Destination: 2, CMU Type: 2 driveChart_Log_Distance:0 destination_1:0 destination_2:0 driveChart_Display:0 driveChart_DataTrans:0 myDoctor_Display:0 ,driverIdentification:0 stDis_IDM_Req:0 endDis_IDM_Req:0 stDis_Eco_Req:1 endDis_Eco_Req:1 custmzDisp_SW:2
00:00:13.317 DIAG[521] Info (testdiag_statemachine.c:789 TESTDIAG_postMessageToStateMachine) Posting TESTDIAG_INITIALIZED_EVT (19) event to state machine in state: NotReady
00:00:13.341 BLM_SETTINGS[374] Info (settings_vbs_interface.cpp:11697 UpdateSymLinkForDSPConfiguration) Set DSP symlink to /jci/dsp/dsp_J36A-NoBose.xml, index in table 7
00:00:13.341 BLM_SETTINGS[374] Info (settings_symlink.hpp:228 _int_Set) symlink file /data/dsp.xml and its conatins "/jci/dsp/dsp_J36A-NoBose.xml" are OK
00:00:13.343 BLM_SETTINGS[521] Info (settings_client_funs.cpp:1458 SETTINGS_Client_Get_S16_cb) SETTINGS_Client_Get_S16_cb
00:00:13.343 BLM_SETTINGS[521] Info (settings_client_funs.cpp:1487 SETTINGS_Client_Get_S16_cb) Client Name [com.jci.settings.testdiag], returned value 1 for setting ID 140
00:00:13.343 DIAG[521] Info (testdiag_statemachine.c:18924 TESTDIAG_Settings_GetVehicleType_cb) Vehicle Type is 1
00:00:13.357 DIAG[521] Info (testdiag_main.c:344 ServiceRun) Running TESTDIAG Service
00:00:13.362 DIAG[521] Info (testdiag_statemachine.c:789 TESTDIAG_postMessageToStateMachine) Posting TESTDIAG_SM_CLIENT_CONNECTION_SUCCESS_EVT (68) event to state machine in state: NotReady
00:00:13.363 DIAG[521] Info (testdiag_main.c:1435 testdiag_subscribe_services_sm_cb) SM_SubscribeForEvents cb called
00:00:13.364 DIAG[521] Info (testdiag_statemachine.c:789 TESTDIAG_postMessageToStateMachine) Posting TESTDIAG_SM_SUBSCRIPTION_SUCCESS_EVT (70) event to state machine in state: NotReady
00:00:13.386 Std[] Info (: ) Surface JCI_OPERA_PRIMARY registered
00:00:13.544 BUCPSA[342] Info (bucpsa_settings.c:290 BUCPSA_Settings_Set_RctaStatus) Updating RCTA Status = 0 in NVRAM
00:00:13.544 BUCPSA[342] Info (bucpsa_steng.c:214 BUCPSA_StengPostMessage) Posting event 'BUCPSA_RCTA_REFRESH_EVT' into state 'Default_State'
00:00:13.545 BUCPSA[342] Info (bucpsa_steng.c:421 bucpsa_Default_EventHandler) Received RCTA Equipped = False
00:00:13.580 VBS_BUS_SETTINGS[302] Info (mod_settings_manage_svc.c:9351 VBS_SETTINGS_Send_StatusReady) Status Ready Signals : [0][0][0][0][0][0][0][0][0][0][0][0][1][1][1][1][0][0][0][0][0][1][0][0][0][0][0][0][0][0][0][1][1][1][1][1][1][1][1][1][1][1][1][1][0][1][1][0][1][0][0][0][0][0][0][0][1][1][1][1][1][1]
00:00:13.592 BLM_SETTINGS[374] Info (settings_vbs_interface.cpp:4178 BLM_SETTINGS_ReadyFlag_Notification) Ready flag notification received
00:00:13.612 VBS_BUS_SETTINGS[302] Info (mod_settings_manage_svc.c:10040 VBS_SETTINGS_GetSSUCustomizeStatus2_svc) Sending Customized status for Auto re-lock timer setting with Value = 3, Type = 1
00:00:13.620 VBS_BUS_SETTINGS[302] Info (mod_settings_manage_svc.c:10040 VBS_SETTINGS_GetSSUCustomizeStatus2_svc) Sending Customized status for Auto re-lock timer setting with Value = 3, Type = 1
00:00:13.620 VBS_BUS_SETTINGS[302] Info (mod_settings_manage_svc.c:10052 VBS_SETTINGS_GetSSUCustomizeStatus2_svc) Sending Customized status for Buzzer Answer Back Volume with Value = 0, Type = 3
00:00:13.620 VBS_BUS_SETTINGS[302] Info (mod_settings_manage_svc.c:10052 VBS_SETTINGS_GetSSUCustomizeStatus2_svc) Sending Customized status for Buzzer Answer Back Volume with Value = 0, Type = 3
00:00:13.620 VBS_BUS_SETTINGS[302] Info (mod_settings_manage_svc.c:10046 VBS_SETTINGS_GetSSUCustomizeStatus2_svc) Sending Customized status for Un-Lock Mode with Value = 1, Type = 2
00:00:13.620 VBS_BUS_SETTINGS[302] Info (mod_settings_manage_svc.c:10034 VBS_SETTINGS_GetSSUCustomizeStatus2_svc) Sending Customized status for Walk away lock function On/Off with Value = 0, Type = 0
00:00:13.620 VBS_BUS_SETTINGS[302] Info (mod_settings_manage_svc.c:4272 VBS_SETTINGS_GetGCCConfigMgmtID1_svc) Get GCC Config Management for Steering wheel location returned Value = 1, Type = 4
00:00:13.620 VBS_BUS_SETTINGS[302] Info (mod_settings_manage_svc.c:4296 VBS_SETTINGS_GetGCCConfigMgmtID1_svc) Get GCC Config Management for Mecu Voltage Type returned Value = 51, Type = 8
00:00:13.620 VBS_BUS_SETTINGS[302] Info (mod_settings_manage_svc.c:4026 VBS_SETTINGS_GetCMUControlReq_svc) Get CMU Control for Display Character returned Value = 4, Type = 0
00:00:13.620 VBS_BUS_SETTINGS[302] Info (mod_settings_manage_svc.c:4044 VBS_SETTINGS_GetCMUControlReq_svc) Get CMU Control for Temperature Unit returned Value = 2, Type = 3
00:00:13.620 VBS_BUS_SETTINGS[302] Info (mod_settings_manage_svc.c:4032 VBS_SETTINGS_GetCMUControlReq_svc) Get CMU Control for  Distance Unit returned Value = 2, Type = 1
00:00:13.657 VBS_BUS_SETTINGS[302] Info (mod_settings_manage_svc.c:3101 VBS_SETTINGS_GetHECIlluminationStatus_svc) Get HEC Illumination Status for Low Speed CMB On Off returned Value = 1, Type = 12
00:00:13.657 VBS_BUS_SETTINGS[302] Info (mod_settings_manage_svc.c:4158 VBS_SETTINGS_GetCMUControlReq_svc) Get CMU Control for HEC CTRL DESTINATION_CANADA returned Value = 0, Type = 23
00:00:13.657 VBS_BUS_SETTINGS[302] Info (mod_settings_manage_svc.c:4248 VBS_SETTINGS_GetGCCConfigMgmtID1_svc) Get GCC Config Management for destination returned Value = 2, Type = 0
00:00:13.657 VBS_BUS_SETTINGS[302] Info (mod_settings_manage_svc.c:4302 VBS_SETTINGS_GetGCCConfigMgmtID1_svc) Get GCC Config Management for destination_1 returned Value = 0, Type = 9
00:00:13.657 VBS_BUS_SETTINGS[302] Info (mod_settings_manage_svc.c:4308 VBS_SETTINGS_GetGCCConfigMgmtID1_svc) Get GCC Config Management for destination_2 returned Value = 0, Type = 10
00:00:13.657 VBS_BUS_SETTINGS[302] Info (mod_settings_manage_svc.c:4158 VBS_SETTINGS_GetCMUControlReq_svc) Get CMU Control for HEC CTRL DESTINATION_CANADA returned Value = 0, Type = 23
00:00:13.657 VBS_BUS_SETTINGS[302] Info (mod_settings_manage_svc.c:10630 VBS_SETTINGS_GetVehicleType_svc) Returning Vehicle type with value = 54
00:00:13.657 VBS_BUS_SETTINGS[302] Info (mod_settings_manage_svc.c:4314 VBS_SETTINGS_GetGCCConfigMgmtID1_svc) Get GCC Config Management for vehiclePic returned Value = 0, Type = 12
00:00:13.657 VBS_BUS_SETTINGS[302] Info (mod_settings_manage_svc.c:4326 VBS_SETTINGS_GetGCCConfigMgmtID1_svc) Get GCC Config Management for Brand returned Value = 7, Type = 14
00:00:13.657 VBS_BUS_SETTINGS[302] Info (mod_settings_manage_svc.c:4332 VBS_SETTINGS_GetGCCConfigMgmtID1_svc) Get GCC Config Management for DSP_MIC returned Value = 0, Type = 15
00:00:13.731 xse>AP>[] Debug (: ) : Received TAU status:0
00:00:13.742 xse>AP>[] Info (: ) : Could not get the initial enable status from Audio Manager: org.freedesktop.DBus.Error.ServiceUnknown : The name com.xsembedded.service.AudioManagement was not provided by any .service files
00:00:13.745 BLM_SETTINGS[374] Info (settings_symlink.hpp:228 _int_Set) symlink file /data/asound.conf and its conatins "/etc/asound.conf.LHD" are OK
00:00:13.848 TDS[669] Info (tds.c:129 ServiceInit) SM Initializing TDS.
00:00:13.849 TDS[669] Info (tds_smdb.c:84 TDS_SMDB_Initialize) TDS_SMDB_Initialize
00:00:13.875 SMDB[669] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TrafficMapId" ignored.
00:00:13.880 TDS[669] Info (tds_smdb.c:94 TDS_SMDB_Initialize) Success in initializing the SMDB Handle
00:00:13.881 TDS[669] Info (tds.c:245 tds_initialize) Success in initializing the TDS SMDB.
00:00:13.888 TDS[669] Info (tds.c:255 tds_initialize) Success in initializing the TDS ServiceDbus.
00:00:13.898 xse>AP>[] Critical (: ) :  ----------------------------------------------
00:00:13.902 xse>AP>[] Critical (: ) : Verification Results:
00:00:13.908 xse>AP>[] Critical (: ) : ERRORS:                                     0
00:00:13.911 xse>AP>[] Critical (: ) : Definitions Assumed User Defined Variables: 0
00:00:13.912 xse>AP>[] Critical (: ) : ----------------------------------------------
00:00:13.915 xse>AP>[] Critical (: ) : INFO: Control logic syntax validation complete (0/0)
00:00:13.918 BLM_SETTINGS[374] Warn (settings_service_funs.cpp:8631 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:00:13.918 BLM_SETTINGS[374] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/SafetyConvenience/AutoDoorLockChimeVolume <!> Value is not in range
00:00:13.925 VBS_BUS_AM[302] Info (mod_am_manage_svc.c:1673 VBS_AM_GetAudioProfileStatus_svc) Received Request : GetAudioProfileStatus [profileType = 5]
00:00:13.928 CPP_TIME[669] Info (time_dbus_client_funs.cpp:2304 TIME_Client_Connect) will send connect request: conn 0x49e80 : dbus 0x4a430 : name com.jci.tds2cpptime
00:00:13.931 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_Connect_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:13.933 TDS[669] Info (tds_interface.c:210 TDS_If_DbusConnectionPoll_Init) TDS_If_DbusConnectionPoll_Init: creating connection poll
00:00:13.934 TDS[669] Info (tds_lot.cpp:271 TDS_LOT_DestroyObjectMaps) LOT Object Map is empty, nothing to destroy
00:00:13.941 TDS[669] Info (tds_lot.cpp:281 TDS_LOT_DestroyObjectMaps) STM Object Map is empty, nothing to destroy
00:00:13.943 TDS[669] Info (tds_interface.c:1172 tds_time_connect_cb) Client is connected
00:00:13.953 CPP_TIME[669] Info (time_dbus_client_funs.cpp:3443 TIME_Client_RegisterForDatetimeChangeEvent) request to cpp_time : conn 0x49e80 : dbus 0x4a430 : name com.jci.tds2cpptime
00:00:13.953 CPP_TIME[432] Info (time_dbus_service_funs.cpp:2914 TIME_RegisterForDatetimeChangeEvent_svc) registering for event : 32767.127.127 127:127:00 client : com.jci.tds2cpptime
00:00:13.953 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_RegisterForDatetimeChangeEvent_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:13.953 CPP_TIME[432] Warn (time_common.cpp:772 TIME_convertStructuredTimeToTime) mktime - bad parameter :32767.127.127 127:127:00
00:00:13.953 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) time_RegisterForDatetimeChangeEvent_resp_cb|(event) 58 1970.01.01 00:00:58|-1|0|0|0|ARMED|RUN|keep|2|2|0|com.jci.tds2cpptime|occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:32767.127.127 127:127:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|com.jci.tds2cpptime
00:00:13.953 CPP_TIME[432] Warn (time_dbus_service_funs.cpp:1439 time_RegisterForDatetimeChangeEvent_resp_cb) already existing and will be deleted|(event) 58 1970.01.01 00:00:58|-1|0|0|0|ARMED|RUN|keep|2|2|0|com.jci.tds2cpptime|occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:32767.127.127 127:127:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|com.jci.tds2cpptime
00:00:13.953 CPP_TIME[432] Info (time_dbus_service_funs.cpp:1446 time_RegisterForDatetimeChangeEvent_resp_cb) adding event
00:00:13.957 TDS[669] Info (tds_interface.c:1329 tds_time_registerForDatetimeChangeEvent) Successfully registered for 1 minute events from CPP Time
00:00:13.967 CPP_TIME[669] Warn (time__gen_DataMutex.hpp:785 DataLock) mx locked, WILL wait until unlocked for 0x469d8
00:00:13.973 BLM_SETTINGS[374] Warn (settings_service_funs.cpp:8631 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:00:13.973 BLM_SETTINGS[374] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/Keyless/BuzzerAnswerVolume <!> Value is not in range
00:00:13.984 VBS_BUS_AM[302] Info (mod_am_manage_svc.c:1270 VBS_AM_GetVolumeStatus_svc) Received Request : GetVolumeStatus [volSrcGrp = AUX]
00:00:13.984 CPP_TIME[669] Warn (time_stack_backtrace.cpp:83 __int_ShowStackBackTraceByLevel) __int_ShowStackBackTraceByLevel(TIME_debug_level_e)
00:00:13.984 CPP_TIME[669] Warn (time_stack_backtrace.cpp:83 __int_ShowStackBackTraceByLevel) com::jci::time::DataMutex::DataLock()
00:00:13.984 CPP_TIME[669] Warn (time_stack_backtrace.cpp:83 __int_ShowStackBackTraceByLevel) /jci/lib/libjcitime_client.so(+0x3b6f8)
00:00:14.001 VBS_BUS_AM[302] Info (mod_am_manage_svc.c:1673 VBS_AM_GetAudioProfileStatus_svc) Received Request : GetAudioProfileStatus [profileType = 1]
00:00:14.001 VBS_BUS_AM[302] Info (mod_am_manage_svc.c:1673 VBS_AM_GetAudioProfileStatus_svc) Received Request : GetAudioProfileStatus [profileType = 0]
00:00:14.001 VBS_BUS_AM[302] Info (mod_am_manage_svc.c:1673 VBS_AM_GetAudioProfileStatus_svc) Received Request : GetAudioProfileStatus [profileType = 6]
00:00:14.001 TDS[669] Info (tds_interface.c:1066 tds_jvmm_startConnection) Waiting for clients....
00:00:14.013 VBS_BUS_AM[302] Info (mod_am_manage_svc.c:1270 VBS_AM_GetVolumeStatus_svc) Received Request : GetVolumeStatus [volSrcGrp = NAVI]
00:00:14.023 BLM_SETTINGS[374] Warn (settings_service_funs.cpp:8589 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:00:14.023 BLM_SETTINGS[374] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/Keyless/WalkawayLock <!> Value is not in range
00:00:14.030 VBS_BUS_AM[302] Info (mod_am_manage_svc.c:1270 VBS_AM_GetVolumeStatus_svc) Received Request : GetVolumeStatus [volSrcGrp = TA]
00:00:14.050 VBS_BUS_AM[302] Info (mod_am_manage_svc.c:1270 VBS_AM_GetVolumeStatus_svc) Received Request : GetVolumeStatus [volSrcGrp = VOLUME]
00:00:14.050 TDS[669] Info (tds_xml.c:441 TDS_XML_Open) XML file loaded successfully
00:00:14.050 TDS[669] Info (tds_lot.cpp:2048 tds_lot_insertArtExpObject) Successfully added ArtExp LOT object (key = 6143485262) to ArtExp map!
00:00:14.053 TDS[669] Info (tds_lot.cpp:2048 tds_lot_insertArtExpObject) Successfully added ArtExp LOT object (key = 6384003502) to ArtExp map!
00:00:14.053 TDS[669] Info (tds_lot.cpp:2048 tds_lot_insertArtExpObject) Successfully added ArtExp LOT object (key = 6770141614) to ArtExp map!
00:00:14.053 TDS[669] Info (tds_lot.cpp:2048 tds_lot_insertArtExpObject) Successfully added ArtExp LOT object (key = 12280211886) to ArtExp map!
00:00:14.053 TDS[669] Info (tds_lot.cpp:2074 tds_lot_insertSTMObject) Successfully added STM LOT object (key = 441633614702) to STM map!
00:00:14.053 TDS[669] Info (tds_lot.cpp:2074 tds_lot_insertSTMObject) Successfully added STM LOT object (key = 3572664773486) to STM map!
00:00:14.053 TDS[669] Info (tds_lot.cpp:2074 tds_lot_insertSTMObject) Successfully added STM LOT object (key = 3576959740782) to STM map!
00:00:14.058 VBS_BUS_AM[302] Info (mod_am_manage_svc.c:1673 VBS_AM_GetAudioProfileStatus_svc) Received Request : GetAudioProfileStatus [profileType = 3]
00:00:14.062 TDS[669] Info (tds_lot.cpp:2074 tds_lot_insertSTMObject) Successfully added STM LOT object (key = 3581254708078) to STM map!
00:00:14.062 TDS[669] Info (tds_lot.cpp:2074 tds_lot_insertSTMObject) Successfully added STM LOT object (key = 3585549675374) to STM map!
00:00:14.062 TDS[669] Info (tds_lot.cpp:2074 tds_lot_insertSTMObject) Successfully added STM LOT object (key = 3589844642670) to STM map!
00:00:14.062 TDS[669] Info (tds_lot.cpp:2074 tds_lot_insertSTMObject) Successfully added STM LOT object (key = 3594139609966) to STM map!
00:00:14.062 TDS[669] Info (tds_lot.cpp:2074 tds_lot_insertSTMObject) Successfully added STM LOT object (key = 3598434577262) to STM map!
00:00:14.062 TDS[669] Info (tds_lot.cpp:2074 tds_lot_insertSTMObject) Successfully added STM LOT object (key = 3602729544558) to STM map!
00:00:14.062 TDS[669] Info (tds_lot.cpp:2074 tds_lot_insertSTMObject) Successfully added STM LOT object (key = 3607024511854) to STM map!
00:00:14.062 TDS[669] Info (tds_lot.cpp:302 TDS_LOT_InitializeObjectMaps) LOT Object Maps initialization were successful!
00:00:14.071 VBS_BUS_AM[302] Info (mod_am_manage_svc.c:1270 VBS_AM_GetVolumeStatus_svc) Received Request : GetVolumeStatus [volSrcGrp = DVD]
00:00:14.083 VBS_BUS_AM[302] Info (mod_am_manage_svc.c:1270 VBS_AM_GetVolumeStatus_svc) Received Request : GetVolumeStatus [volSrcGrp = BTHF]
00:00:14.093 VBS_BUS_AM[302] Info (mod_am_manage_svc.c:1673 VBS_AM_GetAudioProfileStatus_svc) Received Request : GetAudioProfileStatus [profileType = 4]
00:00:14.093 VBS_BUS_AM[302] Info (mod_am_manage_svc.c:1270 VBS_AM_GetVolumeStatus_svc) Received Request : GetVolumeStatus [volSrcGrp = TV]
00:00:14.112 VBS_BUS_AM[302] Info (mod_am_manage_svc.c:1673 VBS_AM_GetAudioProfileStatus_svc) Received Request : GetAudioProfileStatus [profileType = 2]
00:00:14.121 VBS_BUS_AM[302] Info (mod_am_manage_svc.c:1270 VBS_AM_GetVolumeStatus_svc) Received Request : GetVolumeStatus [volSrcGrp = RINGTONE]
00:00:14.138 xse>AP>[] Error (: ) : Ready...
00:00:14.234 BLM_SETTINGS[374] Info (settings_vbs_interface.cpp:14763 BLM_SETTINGS_PrioritizeAndSetDestination) Valid destination 2 found in table.
00:00:14.234 BLM_SETTINGS[374] Info (settings_vbs_interface.cpp:14773 BLM_SETTINGS_PrioritizeAndSetDestination) No change of destination is needed, it will remain 2
00:00:14.287 BLM_SETTINGS[374] Info (settings_vbs_interface.cpp:14763 BLM_SETTINGS_PrioritizeAndSetDestination) Valid destination 2 found in table.
00:00:14.287 BLM_SETTINGS[374] Info (settings_vbs_interface.cpp:14773 BLM_SETTINGS_PrioritizeAndSetDestination) No change of destination is needed, it will remain 2
00:00:14.317 BLM_SETTINGS[374] Info (settings_vbs_interface.cpp:14763 BLM_SETTINGS_PrioritizeAndSetDestination) Valid destination 2 found in table.
00:00:14.317 BLM_SETTINGS[374] Info (settings_vbs_interface.cpp:14773 BLM_SETTINGS_PrioritizeAndSetDestination) No change of destination is needed, it will remain 2
00:00:14.372 xse>AP>[] Debug (: ) : Received TAU status:0
00:00:14.431 xse>AM>[] Critical (: ) :  ----------------------------------------------
00:00:14.438 BLM_SETTINGS[374] Info (settings_vbs_interface.cpp:11697 UpdateSymLinkForDSPConfiguration) Set DSP symlink to /jci/dsp/dsp_J36A-NoBose.xml, index in table 7
00:00:14.438 BLM_SETTINGS[374] Info (settings_symlink.hpp:228 _int_Set) symlink file /data/dsp.xml and its conatins "/jci/dsp/dsp_J36A-NoBose.xml" are OK
00:00:14.440 xse>AM>[] Critical (: ) : Verification Results:
00:00:14.443 xse>AM>[] Critical (: ) : ERRORS:                                     0
00:00:14.445 xse>AM>[] Critical (: ) : Definitions Assumed User Defined Variables: 0
00:00:14.448 xse>AM>[] Critical (: ) : ----------------------------------------------
00:00:14.451 xse>AM>[] Critical (: ) : INFO: Control logic syntax validation complete (0/0)
00:00:14.453 xse>AM>[] Error (: ) : Ready...
00:00:14.462 xse>AM>[] Debug (: ) : Received TAU status:0
00:00:14.476 SYSTEM[262] Info (state_machine.cpp:1971 system_smm_TopStateHandler) Audio manager service started!
00:00:14.476 SYSTEM[262] Info (state_machine.cpp:1446 system_smm_TryInitializeAudio) All preconditions are met, trying to initialize audio!
00:00:14.476 SYSTEM[262] Info (state_machine.cpp:714 system_smm_LogVbsRadioEventInfo) Tau is disconnected!
00:00:14.476 SYSTEM[262] Info (state_machine.cpp:2043 system_smm_TopStateHandler) Setting audio off!
00:00:14.476 AUDIO_MGR[262] Info (audio_am_if.c:43 myDbusSend) Request:: methodName: enableStatus, arguments: {}
00:00:14.476 xse>AP>[] Debug (: ) : Received TAU status:0
00:00:14.483 AUDIO_MGR[262] Info (audio_am_if.c:46 myDbusSend) Response:: methodName: enableStatus, arguments: {}, result: {"enable":false}
00:00:14.483 SYSTEM[262] Info (state_machine.cpp:681 system_smm_LogAudioEventInfo) Audio is off!
00:00:14.483 SYSTEM[262] Info (state_machine.cpp:934 system_smm_ExpectBootupFinished) Still waiting for bootup to finish...
00:00:14.511 xse>AM>[] Debug (: ) : Received TAU status:0
00:00:14.639 BLM_SETTINGS[374] Info (settings_vbs_interface.cpp:11697 UpdateSymLinkForDSPConfiguration) Set DSP symlink to /jci/dsp/dsp_J36A-NoBose.xml, index in table 7
00:00:14.639 BLM_SETTINGS[374] Info (settings_symlink.hpp:228 _int_Set) symlink file /data/dsp.xml and its conatins "/jci/dsp/dsp_J36A-NoBose.xml" are OK
00:00:14.784 BLM_SETTINGS[374] Info (settings_vbs_interface.cpp:11697 UpdateSymLinkForDSPConfiguration) Set DSP symlink to /jci/dsp/dsp_J36A-NoBose.xml, index in table 7
00:00:14.784 BLM_SETTINGS[374] Info (settings_symlink.hpp:228 _int_Set) symlink file /data/dsp.xml and its conatins "/jci/dsp/dsp_J36A-NoBose.xml" are OK
00:00:14.829 BLM_SETTINGS[374] Info (settings_vbs_interface.cpp:11697 UpdateSymLinkForDSPConfiguration) Set DSP symlink to /jci/dsp/dsp_J36A-NoBose.xml, index in table 7
00:00:14.829 BLM_SETTINGS[374] Info (settings_symlink.hpp:228 _int_Set) symlink file /data/dsp.xml and its conatins "/jci/dsp/dsp_J36A-NoBose.xml" are OK
00:00:15.092 AUXIN[790] Info (auxin_main.c:84 GetServiceInterfaces) FUNCTION:GetServiceInterfaces
00:00:15.096 AUXIN[790] Info (auxin_main.c:96 ServiceInit) Initalizing AUXIN Service
00:00:15.132 AUXIN[790] Info (auxin_am_interface.c:478 AUXIN_AM_InitAudioManager) AUX_InitAudioManager.
00:00:15.135 AUXIN[790] Info (auxin_am_interface.c:415 auxin_initAMClient) Initializing AM clinet
00:00:15.135 AUXIN[790] Info (auxin_am_interface.c:550 AUXIN_AM_Register_Signal) AUXIN_AM_CLIENT: Successfully initialized audio management library.
00:00:15.147 AUDIO_MGR[790] Info (audio_am_if.c:46 myDbusSend) Response:: methodName: openSession, arguments: {"busName":"com.jci.auxin","objectPath":"/com/jci/auxin"}, result: {"sessionId":1}
00:00:15.148 AUXIN[790] Info (auxin_am_interface.c:557 AUXIN_AM_Register_Signal) AUXIN_AM_CLIENT:  Open session successful with AUXIN Session id  =1
00:00:15.154 AUDIO_MGR[790] Info (audio_am_if.c:46 myDbusSend) Response:: methodName: registerAudioStream, arguments: {"sessionId":1,"streamName":"AUX","streamModeName":"AUX","streamType":"Media","focusType":"permanent"}, result: {}
00:00:15.155 AUXIN[790] Info (auxin_am_interface.c:569 AUXIN_AM_Register_Signal) Register AUX stream success
00:00:15.170 AUXIN[790] Info (auxin_steng.c:144 AUXIN_InitializeStateMachine)  Initialising state machine
00:00:15.172 AUXIN[790] Info (auxin_steng.c:369 auxin_TopState_EventHandler) AUX_TOP_STATE: Received Event 2
00:00:15.173 AUXIN[790] Info (auxin_steng.c:374 auxin_TopState_EventHandler) Aux entering TOP state
00:00:15.174 AUXIN[790] Info (auxin_steng.c:369 auxin_TopState_EventHandler) AUX_TOP_STATE: Received Event 1
00:00:15.174 AUXIN[790] Info (auxin_steng.c:451 auxin_Disconnectedstate_EventHandler) AUX_DISCONNECTED_STATE: Received Event 2
00:00:15.175 AUXIN[790] Info (auxin_steng.c:457 auxin_Disconnectedstate_EventHandler) Aux entering DISCONNECTED state
00:00:15.176 AUXIN[790] Info (auxin_steng.c:451 auxin_Disconnectedstate_EventHandler) AUX_DISCONNECTED_STATE: Received Event 1
00:00:15.177 AUXIN[790] Info (auxin_hmi_interface.c:320 AUXIN_Send_AuxinStatus) Posting AUXIN status to HMI D_BUs Status from VBS : 0
00:00:15.186 AUXIN[790] Info (auxin_vbs_interface.c:226 AUXIN_VBS_DeviceStatus_Request) <======= Sending AUXIN Device Status Request to VBS =====>
00:00:15.191 VBS_BUS_RADIO[302] Info (mod_radio_manage_svc.c:3418 VBS_RADIO_AUX_GetConnStatus_svc) Get AUX Connection Status returned with value = 0
00:00:15.196 AUXIN[790] Info (auxin_main.c:130 ServiceRun) Running AUXIN Service
00:00:15.196 AUXIN[790] Info (auxin_steng.c:451 auxin_Disconnectedstate_EventHandler) AUX_DISCONNECTED_STATE: Received Event 6
00:00:15.196 AUXIN[790] Info (auxin_hmi_interface.c:320 AUXIN_Send_AuxinStatus) Posting AUXIN status to HMI D_BUs Status from VBS : 0
00:00:15.198 AUXIN[790] Info (auxin_steng.c:304 AUXIN_postMessageToStateMachine) Mutex Unlocked Successfully
00:00:15.199 AUXIN[790] Info (auxin_vbs_interface.c:310 VBS_AUXIN_Status_Response_cb) Successfully posted AUXIN connection status to state machine ::0
00:00:15.199 AUXIN[790] Info (auxin_vbs_interface.c:178 auxin_vbs_callback) Auxin request callback is invoked with value 100
00:00:15.303 DAB[793] Info (dab_main.c:103 ServiceInit) Initalizing DAB Service
00:00:15.309 BLM_CD[791] Info (cd_init.cpp:133 ServiceInit) Entered ServiceInit() for BLM CD Application from thread id = <717132800>, version BLM_CD-MAZ140.10.09.000
00:00:15.315 BLM_CD[791] Info (cd_statemachine.cpp:211 CD_InitStateMachine) Successfully initialization of Event Queue for the CD state machine
00:00:15.399 AUDIO_MGR[793] Info (audio_am_if.c:46 myDbusSend) Response:: methodName: openSession, arguments: {"busName":"com.jci.dab","objectPath":"/com/jci/dab"}, result: {"sessionId":2}
00:00:15.407 AUDIO_MGR[796] Info (audio_am_if.c:46 myDbusSend) Response:: methodName: openSession, arguments: {"busName":"com.jci.xm","objectPath":"/com/jci/xm"}, result: {"sessionId":3}
00:00:15.414 AUDIO_MGR[791] Info (audio_am_if.c:46 myDbusSend) Response:: methodName: openSession, arguments: {"busName":"com.jci.CD","objectPath":"/com/jci/CD"}, result: {"sessionId":4}
00:00:15.422 AUDIO_MGR[793] Info (audio_am_if.c:46 myDbusSend) Response:: methodName: registerAudioStream, arguments: {"sessionId":2,"streamName":"DAB","streamModeName":"DAB","streamType":"Media","focusType":"permanent"}, result: {}
00:00:15.422 BLM_SETTINGS[793] Info (settings_client_funs.cpp:759 BLM_SETTINGS_Client_ExtConnect) com.jci.settings.dabblm
00:00:15.430 AUDIO_MGR[796] Info (audio_am_if.c:46 myDbusSend) Response:: methodName: registerAudioStream, arguments: {"sessionId":3,"streamName":"XM","streamModeName":"XM","streamType":"Media","focusType":"permanent"}, result: {}
00:00:15.430 XM_RADIO[796] Info (xm_am_interface.c:566 XM_AM_Register_Signal) Register AM stream success
00:00:15.430 com.jci.cpp.settings.socket[796] Info (SocketRegistry.cpp:1101 openSpecific) Connected to proxy: tcpip://
00:00:15.443 AUDIO_MGR[791] Info (audio_am_if.c:46 myDbusSend) Response:: methodName: registerAudioStream, arguments: {"sessionId":4,"streamName":"CD","streamModeName":"CD","streamType":"Media","focusType":"permanent"}, result: {}
00:00:15.443 BLM_CD[791] Info (cd_settings.cpp:44 CD_Settings_connect) Connecting to BLM_SETTINGS.
00:00:15.443 BLM_SETTINGS[791] Info (settings_client_funs.cpp:759 BLM_SETTINGS_Client_ExtConnect) com.jci.settings.BLM_CD
00:00:15.456 BLM_SETTINGS[374] Info (settings_service_funs.cpp:1269 SETTINGS_Connect_svc) connecting client:com.jci.settings.dabblm
00:00:15.463 BLM_SETTINGS[793] Info (settings_client_funs.cpp:1559 SETTINGS_Client_ExtGet_S16) client [com.jci.settings.dabblm] com/jci/maz/cmu/Region
00:00:15.463 DAB[793] Info (dab_steng.c:3131 dab_UserRequestTimerInit) DAB user request timer Initialized
00:00:15.463 DAB[793] Info (dab_steng.c:396 dab_TopState_EventHandler) DAB_TOP_STATE: Received Event 2
00:00:15.463 DAB[793] Info (dab_steng.c:401 dab_TopState_EventHandler) DAB entering TOP state
00:00:15.463 DAB[793] Info (dab_steng.c:396 dab_TopState_EventHandler) DAB_TOP_STATE: Received Event 1
00:00:15.463 DAB[793] Info (dab_steng.c:689 dab_IdleState_EventHandler) DAB_IDLE_STATE: Received Event 2
00:00:15.463 DAB[793] Info (dab_steng.c:693 dab_IdleState_EventHandler) DAB entering IDLE state
00:00:15.463 DAB[793] Info (dab_steng.c:689 dab_IdleState_EventHandler) DAB_IDLE_STATE: Received Event 1
00:00:15.470 BLM_SETTINGS[374] Info (settings_service_funs.cpp:5921 SETTINGS_Get_Settings_S16_svc) key path : /1/com/jci/maz/cmu/Region
00:00:15.479 xse>AM>[] Debug (: ) : Received TAU status:0
00:00:15.488 DAB[793] Info (dab_main.c:218 ServiceRun) Running DAB Service
00:00:15.488 DAB[793] Info (dab_vbs_interface.c:2472 dab_vbs_BandSelectSetting_Status_cb) Received bandSelectSetting from VBS:: 0
00:00:15.488 DAB[793] Info (dab_steng.c:330 DAB_PostMessageToStateMachine) Posting event 30 to state machine
00:00:15.488 DAB[793] Info (dab_steng.c:689 dab_IdleState_EventHandler) DAB_IDLE_STATE: Received Event 30
00:00:15.497 BLM_SETTINGS[791] Info (settings_client_funs.cpp:1559 SETTINGS_Client_ExtGet_S16) client [com.jci.settings.BLM_CD] com/jci/maz/cmu/Region
00:00:15.497 BLM_CD[791] Info (cd_init.cpp:154 ServiceInit) (STATUS_SUCCESS == CD_StartZones()) && (STATUS_SUCCESS == CreateConnectionPoll())
00:00:15.497 BLM_CD[791] Info (cd_init.cpp:171 ServiceRun) Running CD Service, from thread id = <717132800>.
00:00:15.514 BLM_SETTINGS[374] Info (settings_service_funs.cpp:1269 SETTINGS_Connect_svc) connecting client:com.jci.settings.BLM_CD
00:00:15.514 BLM_SETTINGS[374] Info (settings_service_funs.cpp:5921 SETTINGS_Get_Settings_S16_svc) key path : /1/com/jci/maz/cmu/Region
00:00:15.514 BLM_SETTINGS[793] Info (settings_client_funs.cpp:422 BLM_SEETINGS_Connect_cb) Client Name [com.jci.settings.dabblm]
00:00:15.514 xse>AP>[] Debug (: ) : Received TAU status:0
00:00:15.514 com.jci.cpp.settings[796] Note (RegistryFactory.cpp:123 createRegistry) Startup time: 00:00:00.081376333
00:00:15.514 XM_RADIO[796] Info (xm_settings.c:109 XM_InitSettings)  XM_InitSettings %b XM Handle to Settings Registry: 0x4a8a0
00:00:15.514 DAB[793] Info (dab_vbs_interface.c:2305 dab_vbs_LinkSetting_Status_cb) DAB FMLinkSetting received form VBS:: 0
00:00:15.514 DAB[793] Info (dab_steng.c:330 DAB_PostMessageToStateMachine) Posting event 33 to state machine
00:00:15.514 DAB[793] Info (dab_steng.c:689 dab_IdleState_EventHandler) DAB_IDLE_STATE: Received Event 33
00:00:15.514 DAB[793] Info (dab_steng.c:396 dab_TopState_EventHandler) DAB_TOP_STATE: Received Event 33
00:00:15.514 DAB[793] Info (dab_steng.c:2038 dab_dab_LinkSettingStatus) dab_dab_LinkSettingStatus received = 0
00:00:15.528 DAB[793] Info (dab_vbs_interface.c:2222 dab_vbs_FMLinkSetting_Status_cb) DAB FMLinkSetting received form VBS:: 0
00:00:15.528 DAB[793] Info (dab_steng.c:330 DAB_PostMessageToStateMachine) Posting event 34 to state machine
00:00:15.528 DAB[793] Info (dab_steng.c:689 dab_IdleState_EventHandler) DAB_IDLE_STATE: Received Event 34
00:00:15.528 DAB[793] Info (dab_steng.c:396 dab_TopState_EventHandler) DAB_TOP_STATE: Received Event 34
00:00:15.528 DAB[793] Info (dab_steng.c:2103 dab_fm_LinkSettingStatus) dab_fm_LinkSettingStatus received = 0
00:00:15.528 DAB[793] Info (dab_vbs_interface.c:2041 dab_vbs_Mode_Status_cb) DAB mode status received form VBS
00:00:15.528 DAB[793] Info (dab_steng.c:330 DAB_PostMessageToStateMachine) Posting event 36 to state machine
00:00:15.528 DAB[793] Info (dab_steng.c:689 dab_IdleState_EventHandler) DAB_IDLE_STATE: Received Event 36
00:00:15.528 DAB[793] Info (dab_steng.c:1756 dab_DabStatus)   Received error state=0 received Mode = 0
00:00:15.528 DAB[793] Info (dab_steng.c:1785 dab_DabStatus) Success: posting DAB_HMI_SendSignal_DAB_Mode_Status status signal with mode = 0
00:00:15.528 BLM_SETTINGS[793] Info (settings_client_funs.cpp:1458 SETTINGS_Client_Get_S16_cb) SETTINGS_Client_Get_S16_cb
00:00:15.528 BLM_SETTINGS[793] Info (settings_client_funs.cpp:1487 SETTINGS_Client_Get_S16_cb) Client Name [com.jci.settings.dabblm], returned value 2 for setting ID 74
00:00:15.528 BLM_CD[791] Info (cd_statemachine.cpp:1314 cd_TopState_EventHandler) CD STATE START to StartUp for CD State Machine
00:00:15.528 BLM_SETTINGS[791] Info (settings_client_funs.cpp:422 BLM_SEETINGS_Connect_cb) Client Name [com.jci.settings.BLM_CD]
00:00:15.528 BLM_SETTINGS[791] Info (settings_client_funs.cpp:1458 SETTINGS_Client_Get_S16_cb) SETTINGS_Client_Get_S16_cb
00:00:15.528 XM_RADIO[796] Info (xm_settings.c:160 XM_ReadSettings) <=================Parental Lock Status: 0 =================>
00:00:15.528 BLM_SETTINGS[791] Info (settings_client_funs.cpp:1487 SETTINGS_Client_Get_S16_cb) Client Name [com.jci.settings.BLM_CD], returned value 2 for setting ID 74
00:00:15.528 BLM_CD[791] Info (cd_settings.cpp:107 SETTINGS_GetRegion_cb) Received region = CD_Region_NorthAmerica from BLM_SETTINGS.
00:00:15.528 XM_RADIO[796] Info (xm_settings.c:178 XM_ReadSettings) Parental Lock Pin 		f f f f
00:00:15.528 BLM_CD[791] Info (cd_vbs_interface.cpp:1740 VBS_CD_GetConfigStatusRequest) Calling VBS method VBS_CD_GetDVDConfigStatus.
00:00:15.528 DAB[793] Info (dab_steng.c:330 DAB_PostMessageToStateMachine) Posting event 32 to state machine
00:00:15.528 XM_RADIO[796] Info (xm_settings.c:196 XM_ReadSettings) Default Parental Lock Pin 		0 9 1 5
00:00:15.528 BLM_CD[791] Info (cd_vbs_interface.cpp:1678 VBS_CD_GetReadyStatusRequest) Calling VBS method VBS_CD_DVD_GetStatus.
00:00:15.528 DAB[793] Info (dab_steng.c:689 dab_IdleState_EventHandler) DAB_IDLE_STATE: Received Event 32
00:00:15.528 BLM_CD[791] Info (cd_vbs_interface.cpp:1696 CD_VBS_GetConfigStatus_cb) Received configuration status from VBS: DEVICE_NOT_CONNECTED
00:00:15.528 BLM_CD[791] Info (cd_statemachine.cpp:1414 cd_StartUpState_EventHandler) Handling Event CD_ENTRY_EVENT.
00:00:15.528 DAB[793] Info (dab_vbs_interface.c:2926 dab_vbs_ConnectionStatus_cb) TAU Status received from VBS with value::0
00:00:15.528 AUDIO_MGR[791] Info (audio_am_if.c:43 myDbusSend) Request:: methodName: abandonAudioFocus, arguments: {"sessionId":4}
00:00:15.528 XM_RADIO[796] Info (xm_settings.c:226 xm_ReadChannelLockRegistry) Channel Lock Status Registry No. 1: 00
00:00:15.528 DAB[793] Info (dab_steng.c:330 DAB_PostMessageToStateMachine) Posting event 38 to state machine
00:00:15.528 BLM_CD[791] Info (cd_vbs_interface.cpp:1511 VBS_CD_DVD_GetReadyStatusCallback) CD Ready Status is 0
00:00:15.528 xse>AM>[] Debug (: ) : OUT: abandonAudioFocus(session=4): Unexpected, NOP
00:00:15.528 XM_RADIO[796] Info (xm_settings.c:226 xm_ReadChannelLockRegistry) Channel Lock Status Registry No. 2: 00
00:00:15.528 DAB[793] Info (dab_steng.c:689 dab_IdleState_EventHandler) DAB_IDLE_STATE: Received Event 38
00:00:15.528 BLM_CD[791] Info (cd_vbs_interface.cpp:1521 VBS_CD_DVD_GetReadyStatusCallback) Updating CD Ready status value to CD_NOT_READY.
00:00:15.528 XM_RADIO[796] Info (xm_settings.c:226 xm_ReadChannelLockRegistry) Channel Lock Status Registry No. 3: 00
00:00:15.528 DAB[793] Info (dab_steng.c:396 dab_TopState_EventHandler) DAB_TOP_STATE: Received Event 38
00:00:15.528 AUDIO_MGR[791] Info (audio_am_if.c:46 myDbusSend) Response:: methodName: abandonAudioFocus, arguments: {"sessionId":4}, result: {}
00:00:15.528 XM_RADIO[796] Info (xm_settings.c:226 xm_ReadChannelLockRegistry) Channel Lock Status Registry No. 4: 00
00:00:15.528 DAB[793] Info (dab_vbs_interface.c:2926 dab_vbs_ConnectionStatus_cb) TAU Status received from VBS with value::100
00:00:15.528 BLM_CD[791] Info (cd_fscache.cpp:33 Clear) Clear queue
00:00:15.528 XM_RADIO[796] Info (xm_settings.c:139 xm_read_EnableXMFeatureRegistry) <=================Enable XM Status: 1 =================>
00:00:15.528 DAB[793] Warn (dab_vbs_interface.c:2942 dab_vbs_ConnectionStatus_cb) Invalid TAU status received from VBS
00:00:15.528 BLM_CD[791] Info (cd_statemachine.cpp:1414 cd_StartUpState_EventHandler) Handling Event CD_START_EVENT.
00:00:15.528 XM_RADIO[796] Info (xm_steng.c:402 xm_TopState_EventHandler) XM_TOP_STATE: Received Event 2
00:00:15.528 DAB[793] Warn (dab_vbs_interface.c:2960 dab_vbs_ConnectionStatus_cb) TAU connection status not posted to state machine
00:00:15.528 BLM_CD[791] Info (cd_statemachine.cpp:1414 cd_StartUpState_EventHandler) Handling Event CD_CONFIG_STATUS_CALLBACK_EVENT.
00:00:15.528 XM_RADIO[796] Info (xm_steng.c:402 xm_TopState_EventHandler) XM_TOP_STATE: Received Event 1
00:00:15.528 DAB[793] Info (dab_vbs_interface.c:3127 dab_vbs_ConfigStatus_cb) DAB config Status received from VBS
00:00:15.528 BLM_CD[791] Info (cd_hmi_interface.cpp:852 CD_SendConfigStatus) Sending Configuration Status = CD_NotAvailable, to HMI.
00:00:15.528 XM_RADIO[796] Info (xm_steng.c:481 xm_DisconnectedState_EventHandler) XM_DISCONNECTED_STATE: Received Event 2
00:00:15.528 DAB[793] Info (dab_vbs_interface.c:3133 dab_vbs_ConfigStatus_cb) DAB config Status received from VBS with value::0,and DAB TAU destination code is ::0
00:00:15.528 BLM_CD[791] Info (cd_statemachine.cpp:1414 cd_StartUpState_EventHandler) Handling Event CD_READY_CALLBACK_EVENT.
00:00:15.528 XM_RADIO[796] Info (xm_steng.c:481 xm_DisconnectedState_EventHandler) XM_DISCONNECTED_STATE: Received Event 1
00:00:15.528 DAB[793] Info (dab_steng.c:330 DAB_PostMessageToStateMachine) Posting event 43 to state machine
00:00:15.528 XM_RADIO[796] Info (xm_hmi_interface.c:1723 XM_HMI_UpdateModeStatus) Posting XM Mode Status to HMI D-Bus: 1
00:00:15.528 DAB[793] Info (dab_steng.c:689 dab_IdleState_EventHandler) DAB_IDLE_STATE: Received Event 43
00:00:15.528 XM_RADIO[796] Info (xm_steng.c:481 xm_DisconnectedState_EventHandler) XM_DISCONNECTED_STATE: Received Event 3
00:00:15.528 DAB[793] Info (dab_steng.c:396 dab_TopState_EventHandler) DAB_TOP_STATE: Received Event 43
00:00:15.528 XM_RADIO[796] Info (xm_steng.c:402 xm_TopState_EventHandler) XM_TOP_STATE: Received Event 3
00:00:15.528 DAB[793] Info (dab_steng.c:544 dab_TopState_EventHandler) Current region: 2
00:00:15.528 XM_RADIO[796] Info (xm_steng.c:402 xm_TopState_EventHandler) XM_TOP_STATE: Received Event 2
00:00:15.528 DAB[793] Info (dab_steng.c:562 dab_TopState_EventHandler) Posting Install_Status signal:1
00:00:15.528 XM_RADIO[796] Info (xm_steng.c:568 xm_ConnectedState_EventHandler) XM_CONNECTED_STATE: Received Event 2
00:00:15.528 DAB[793] Info (dab_vbs_interface.c:2668 dab_vbs_SignalStrength_Status_cb) DAB SignalStrength received form VBS:: 0
00:00:15.528 XM_RADIO[796] Info (xm_steng.c:1077 xm_IdleState_EventHandler) XM_IDLE_STATE: Received Event 2
00:00:15.528 DAB[793] Info (dab_steng.c:330 DAB_PostMessageToStateMachine) Posting event 37 to state machine
00:00:15.528 XM_RADIO[796] Info (xm_steng.c:1077 xm_IdleState_EventHandler) XM_IDLE_STATE: Received Event 1
00:00:15.528 DAB[793] Info (dab_steng.c:689 dab_IdleState_EventHandler) DAB_IDLE_STATE: Received Event 37
00:00:15.528 XM_RADIO[796] Info (xm_hmi_interface.c:1276 XM_HMI_UpdateTuner_Status) Posting XM Tuner status to HMI D-Bus   Channel Index = 1 Ch = 0 SID = 0 Status = 0 Error = 0 Category = 0 Lock = 0 Name =
00:00:15.528 DAB[793] Info (dab_steng.c:396 dab_TopState_EventHandler) DAB_TOP_STATE: Received Event 37
00:00:15.528 BLM_SETTINGS[796] Info (settings_client_funs.cpp:759 BLM_SETTINGS_Client_ExtConnect) com.jci.settings.xmblm
00:00:15.528 DAB[793] Info (dab_vbs_interface.c:2388 dab_vbs_List_Status_cb) Received listUpdateReq from VBS:: 0
00:00:15.528 DAB[793] Info (dab_steng.c:330 DAB_PostMessageToStateMachine) Posting event 35 to state machine
00:00:15.528 DAB[793] Info (dab_steng.c:689 dab_IdleState_EventHandler) DAB_IDLE_STATE: Received Event 35
00:00:15.528 DAB[793] Info (dab_steng.c:396 dab_TopState_EventHandler) DAB_TOP_STATE: Received Event 35
00:00:15.528 DAB[793] Info (dab_steng.c:510 dab_TopState_EventHandler) DAB_LIST_STATUS value of **************************dab_state_msg.eventData.listStatus is 1 and dab_list_status is 1
00:00:15.528 DAB[793] Info (dab_steng.c:3508 dab_sendListUpdateStatus) dab_sendListUpdateStatus called
00:00:15.528 BLM_SETTINGS[374] Info (settings_service_funs.cpp:1269 SETTINGS_Connect_svc) connecting client:com.jci.settings.xmblm
00:00:15.528 AUXIN[790] Info (auxin_vbs_interface.c:324 VBS_AUXIN_TauStatus_cb) TAU Status received from VBS with value::0
00:00:15.528 BLM_SETTINGS[796] Info (settings_client_funs.cpp:1559 SETTINGS_Client_ExtGet_S16) client [com.jci.settings.xmblm] com/jci/maz/cmu/Region
00:00:15.528 VBS_BUS_SETTINGS[302] Info (mod_settings_manage_svc.c:4302 VBS_SETTINGS_GetGCCConfigMgmtID1_svc) Get GCC Config Management for destination_1 returned Value = 0, Type = 9
00:00:15.528 BLM_SETTINGS[374] Info (settings_service_funs.cpp:5921 SETTINGS_Get_Settings_S16_svc) key path : /1/com/jci/maz/cmu/Region
00:00:15.528 DIAG[521] Info (testdiag_vbs_interface.c:1774 TESTDIAG_XMDiag_Response_cb) Received Operation Mode = 0
00:00:15.528 DIAG[521] Info (testdiag_statemachine.c:789 TESTDIAG_postMessageToStateMachine) Posting TESTDIAG_XM_DIAGMODE_RESPONSE_EVT (42) event to state machine in state: NotReady
00:00:15.528 XM_RADIO[796] Info (xm_main.c:146 ServiceRun) Running XM Service
00:00:15.528 XM_RADIO[796] Info (xm_vbs_interface.c:699 xm_VBS_DestinationHandler) Recieved Destination value form MOD_SETTINGS = 0
00:00:15.528 XM_RADIO[796] Info (xm_steng.c:1077 xm_IdleState_EventHandler) XM_IDLE_STATE: Received Event 24
00:00:15.528 XM_RADIO[796] Info (xm_steng.c:568 xm_ConnectedState_EventHandler) XM_CONNECTED_STATE: Received Event 24
00:00:15.528 XM_RADIO[796] Info (xm_steng.c:697 xm_ConnectedState_EventHandler) Destination1 value 0
00:00:15.528 XM_RADIO[796] Info (xm_hmi_interface.c:1782 XM_HMI_UpdateInstallStatus) Posting XM Install Status to HMI D-Bus: 1
00:00:15.528 XM_RADIO[796] Info (xm_vbs_interface.c:806 xm_VBS_TunerStatusHandler) Tuner status received from VBS with Radio Status::0 Operation Mode::0 Error Status:: 0 Reciving Chanel:: 0 Category::0 SID::0
00:00:15.528 XM_RADIO[796] Info (xm_steng.c:1077 xm_IdleState_EventHandler) XM_IDLE_STATE: Received Event 16
00:00:15.528 XM_RADIO[796] Info (xm_steng.c:1077 xm_IdleState_EventHandler) XM_IDLE_STATE: Received Event 18
00:00:15.528 XM_RADIO[796] Info (xm_vbs_interface.c:242 xm_VBS_ResponseHandler) XM VBS request callback is invoked with value 100
00:00:15.644 BLM_SETTINGS[796] Info (settings_client_funs.cpp:1458 SETTINGS_Client_Get_S16_cb) SETTINGS_Client_Get_S16_cb
00:00:15.644 BLM_SETTINGS[796] Info (settings_client_funs.cpp:1487 SETTINGS_Client_Get_S16_cb) Client Name [com.jci.settings.xmblm], returned value 2 for setting ID 74
00:00:15.644 XM_RADIO[796] Info (xm_settings.c:564 xm_settings_Client_GetRegion_cb) <=======XM region: 2=========>
00:00:15.644 XM_RADIO[796] Info (xm_steng.c:1077 xm_IdleState_EventHandler) XM_IDLE_STATE: Received Event 15
00:00:15.644 XM_RADIO[796] Info (xm_steng.c:568 xm_ConnectedState_EventHandler) XM_CONNECTED_STATE: Received Event 15
00:00:15.644 XM_RADIO[796] Info (xm_hmi_interface.c:1782 XM_HMI_UpdateInstallStatus) Posting XM Install Status to HMI D-Bus: 0
00:00:15.644 BLM_SETTINGS[796] Info (settings_client_funs.cpp:422 BLM_SEETINGS_Connect_cb) Client Name [com.jci.settings.xmblm]
00:00:16.000 BLM_TIME[499] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:00:16.003 BLM_TIME[499] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:00:17.419 GUI_FRAMEWORK[593] Info (Websockets.js:290 ) APPSDK websocket open
00:00:17.458 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:17.459 GUI_FRAMEWORK[593] Info (Websockets.js:359 ) DBAPI websocket open
00:00:18.020 USBDTC[523] Info (usbdtcgpio.cpp:202 TimerCbk) 'ACC Status':Pin val stable
00:00:18.121 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:18.624 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:19.000 BLM_TIME[499] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:00:19.002 BLM_TIME[499] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:00:19.126 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:19.629 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:19.949 BLM_SETTINGS[374] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
00:00:20.131 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:20.635 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:21.138 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:21.641 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:22.000 BLM_TIME[499] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:00:22.002 BLM_TIME[499] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:00:22.143 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:22.646 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:23.148 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:23.651 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:23.952 BLM_SETTINGS[374] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
00:00:24.153 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:24.656 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:25.000 BLM_TIME[499] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:00:25.003 BLM_TIME[499] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:00:25.159 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:25.662 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:26.164 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:26.668 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:27.172 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:27.675 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:28.000 BLM_TIME[499] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:00:28.002 BLM_TIME[499] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:00:28.178 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:28.680 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:28.942 BLM_SETTINGS[374] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
00:00:29.183 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:29.685 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:30.188 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:30.691 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:30.943 BLM_SETTINGS[374] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
00:00:31.001 BLM_TIME[499] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:00:31.003 BLM_TIME[499] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:00:31.193 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:31.696 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:31.944 BLM_SETTINGS[374] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
00:00:32.200 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:32.704 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:33.208 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:33.710 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:34.000 BLM_TIME[499] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:00:34.003 BLM_TIME[499] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:00:34.212 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:34.715 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:35.217 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:35.719 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:36.222 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:36.724 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:37.000 BLM_TIME[499] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:00:37.003 BLM_TIME[499] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:00:37.226 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:37.729 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:38.232 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:38.736 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:39.240 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:39.743 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:40.000 BLM_TIME[499] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:00:40.002 BLM_TIME[499] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:00:40.245 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:40.748 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:41.250 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:41.753 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:42.255 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:42.757 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:43.000 BLM_TIME[499] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:00:43.002 BLM_TIME[499] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:00:43.260 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:43.762 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:44.265 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:44.769 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:45.272 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:45.775 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:46.000 BLM_TIME[499] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:00:46.002 BLM_TIME[499] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:00:46.278 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:46.781 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:47.011 VBS_BUS_VDT[302] Warn (mod_vdt_manage_svc.c:14123 VBS_VDT_WarnLamp_Timer_Stop) VDT Warning Lamp Timer has not stopped
00:00:47.011 TIMER[302] Error (timer.c:415 TMR_InUse) Invalid input parameter 'tmrPtr' = NULL!
00:00:47.011 VBS_BUS_VDT[302] Info (mod_vdt_ind_lamp_timer.c:216 VBS_VDT_100MS_Timer_Stop) VDT Indicator 100MS Timer has not yet started or already stopped!!
00:00:47.011 VBS_BUS_DRVIDIDM[302] Info (mod_drvididm.c:389 VBS_MOD_DRVIDIDM_ReceiveHandler) *** Igntiion is off ***!!!!
00:00:47.011 VBS_BUS_BCM[302] Info (mod_bcm_manage_svc.c:1443 VBS_BCM_Send_IgnitionControl_Status) Sending Ignition Control Status on Service and HMI DBus with value = 2
00:00:47.055 VBS_BUS_BCM[302] Info (mod_bcm_manage_svc.c:1216 VBS_BCM_Send_PrivateCanStatus) Sending Private CAN Status on Service DBus with value = 1
00:00:47.064 VBS_BUS_SETTINGS[302] Info (mod_settings.c:1327 VBS_SETTINGS_ReceiveHandler) Received HUD Intens CNT Response with Value = 2
00:00:47.064 USBDTC[523] Info (usbdtcgpio.cpp:118 GPIOMonitorRoutine) 'ACC Status':Act/Pin/Assert <0><1><0>
00:00:47.064 BUCPSA[342] Info (bucpsa_steng.c:214 BUCPSA_StengPostMessage) Posting event 'BUCPSA_ACC_EVT' into state 'Default_State'
00:00:47.064 NATGUICTRL[122] Info (nativeguictrl_state_machine.c:491 NGC_SetACCStatus) Setting ACC Status = 2 during phase 1 bootup
00:00:47.064 BUCPSA[342] Info (bucpsa_steng.c:364 bucpsa_Default_EventHandler) Received ACC Status = 2
00:00:47.064 SYSTEM[262] Info (state_machine.cpp:1114 system_smm_PrepareTransition) Preparing for SYSTEM_NormalState!
00:00:47.064 SYSTEM[262] Info (state_machine.cpp:1912 system_smm_TopStateHandler) Reporting ACC ON to clients...
00:00:47.064 DIAG[521] Info (testdiag_blmsystem_interface.c:292 TESTDIAG_System_ACC_Change_handler_cb) ACC Status is 0
00:00:47.064 DIAG[521] Info (testdiag_statemachine.c:789 TESTDIAG_postMessageToStateMachine) Posting TESTDIAG_ACC_ON_EVT (17) event to state machine in state: NotReady
00:00:47.064 DIAG[521] Info (testdiag_statemachine.c:1352 testdiag_NotReadyState_EventHandler) Received ACCON event
00:00:47.064 DIAG[521] Info (testdiag_statemachine.c:1382 testdiag_NotReadyState_EventHandler) TESTDIAG_NotReady_State exit
00:00:47.064 DIAG[521] Info (testdiag_statemachine.c:1453 testdiag_ReadyState_EventHandler) TestDiag entering Ready state
00:00:47.064 VBS_BUS_CDVDTV[302] Info (mod_cd.c:1110 VBS_CD_ReceiveHandler) !!! Got ACC ON !!!. Start Timer
00:00:47.064 DIAG[521] Info (testdiag_statemachine.c:1549 testdiag_DefaultState_EventHandler) TestDiag entering Default state
00:00:47.064 SYSTEM[262] Info (state_machine.cpp:876 system_smm_ExpectTauConnected) Waiting for TAU connected...
00:00:47.064 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5219 VBS_CD_Start_Timer) Timer gs_tmrRetryCnt = 10
00:00:47.064 DIAG[521] Info (testdiag_statemachine.c:1554 testdiag_DefaultState_EventHandler) Entered TestDiag_Default_State
00:00:47.064 SYSTEM[262] Info (state_machine.cpp:822 system_smm_ExpectDisplayNormal) Waiting for display normal...
00:00:47.064 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5437 VBS_CD_Send_DVD_Config_status_Req) Posting DVD Config Status Request to VIP
00:00:47.064 DIAG[521] Info (testdiag_vbs_interface.c:4177 TESTDIAG_get4ARegionInfo) VBS_RADIO_Get4ARegionInfo returned Success
00:00:47.064 LVDS[61] Info (lvds_nvram.c:122 LVDS_getDisplayTypeNVRAM) (Defaulting) Visteon Display.
00:00:47.064 SYSTEM[262] Info (state_machine.cpp:872 system_smm_ExpectTauConnected) Still waiting for TAU connected...
00:00:47.064 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5370 VBS_CD_Send_CD_ReadyReq) Posting CDVDTV Ready Status Request to VIP
00:00:47.064 DIAG[521] Info (testdiag_lvds_interface.c:145 TESTDIAG_GetTFTSWVersion) Sent TFT Sw version Request
00:00:47.064 LVDS[61] Info (lvds_dbus.c:1162 LVDS_SetNormalMode_svc) Set Normal Mode Request, Bright level 150, HDCP Configuration 1
00:00:47.064 SYSTEM[262] Info (state_machine.cpp:818 system_smm_ExpectDisplayNormal) Still waiting for display normal...
00:00:47.064 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5773 VBS_CD_Send_DTV_StatusReq) Posting DTV Status Request to VIP
00:00:47.064 DIAG[521] Info (testdiag_lvds_interface.c:185 TESTDIAG_GetTPSWVersion) Sent Touch Panel Sw version Request
00:00:47.064 LVDS[61] Info (lvds_dbus.c:920 LVDS_GetSoftwareDispVersion_svc) Get Disp Version Request
00:00:47.064 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5841 VBS_CD_Send_DTV_RoutineTestReq) Posting DTV RoutineTest Status Request to VIP
00:00:47.064 DIAG[521] Info (testdiag_vbs_interface.c:1553 TESTDIAG_GGDSDataResponse) Sending GGDS Data Response to mod_diag , data ID is 15 and data is MAZ_CMU-150_55.00.753
00:00:47.064 LVDS[61] Info (lvds_dbus.c:845 LVDS_GetSoftwareTPVersion_svc) Get TP Version Request
00:00:47.064 VBS_BUS_RADIO[302] Info (mod_radio_manage_svc.c:11497 VBS_RADIO_Get4ARegionInfo_svc) Get 4A Region Info returned with value = 0
00:00:47.064 DIAG[521] Info (testdiag_statemachine.c:17146 testdiag_sendBootUpData) Cmu Sw version is MAZ_CMU-150_55.00.753
00:00:47.064 VBS_BUS_SETTINGS[302] Info (mod_settings.c:1335 VBS_SETTINGS_ReceiveHandler) Received HUD Auto Int Con On/Off Response with Value = 0
00:00:47.064 DIAG[521] Info (testdiag_statemachine.c:14683 TESTDIAG_GetCMUSerialNumber) File Read Successfully - 284401710968195
00:00:47.064 VBS_BUS_SETTINGS[302] Info (mod_settings.c:1351 VBS_SETTINGS_ReceiveHandler) Received HUD ManInt Cnt Level Response at MOD_SETTINGS = 20 = 0
00:00:47.064 DIAG[521] Info (testdiag_vbs_interface.c:4309 testdiag_vbs_radio_get4ARegionInfo_cb)  4A Region is 0
00:00:47.064 VBS_BUS_SETTINGS[302] Info (mod_settings_manage_svc.c:10504 VBS_SETTINGS_SendHUDTiltLvlReqVal) Successfully posted on service DBus for TiltLvlReqVal = 14
00:00:47.064 DIAG[521] Info (testdiag_statemachine.c:789 TESTDIAG_postMessageToStateMachine) Posting TESTDIAG_4AREGION_RESPONSE_EVT (77) event to state machine in state: Default
00:00:47.064 VBS_BUS_RADIO[302] Info (mod_radio_manage_svc.c:11554 vbs_radio_Start_TAU_Status_Timer) TAU Status Timer is already running
00:00:47.064 DIAG[521] Info (testdiag_vbs_interface.c:1553 TESTDIAG_GGDSDataResponse) Sending GGDS Data Response to mod_diag , data ID is 20 and data is 284401710968195
00:00:47.064 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5293 VBS_CD_Start_Timer) Timer Started : [CDTimerRetryCnt in decrement order = 10]
00:00:47.064 DIAG[521] Warn (testdiag_lvds_interface.c:264 lvds_GetTFTVersioncallback) CPP LVDS API Get TFT Sw Version returned NULL
00:00:47.064 DIAG[521] Warn (testdiag_lvds_interface.c:299 lvds_GetTPVersioncallback) CPP LVDS API Get TP Sw Version returned NULL
00:00:47.064 DIAG[521] Info (testdiag_statemachine.c:17150 testdiag_sendBootUpData) Cmu Serial Number is 284401710968195
00:00:47.064 DIAG[521] Info (testdiag_statemachine.c:14757 TESTDIAG_GetCMUPartNumber) Read from file: /config-mfg/mfg-version.ini!
00:00:47.064 DIAG[521] Info (testdiag_statemachine.c:14806 TESTDIAG_GetCMUPartNumber) CMU part number is : BHP1-669C0-M
00:00:47.064 DIAG[521] Info (testdiag_vbs_interface.c:1553 TESTDIAG_GGDSDataResponse) Sending GGDS Data Response to mod_diag , data ID is 21 and data is BHP1-669C0-M
00:00:47.064 DIAG[521] Info (testdiag_statemachine.c:17154 testdiag_sendBootUpData) Cmu Part Number is BHP1-669C0-M
00:00:47.064 DIAG[521] Info (testdiag_vbs_interface.c:1329 testdiag_ReadDataRequest) Sent the Data request to mod diag with data ID = 24
00:00:47.064 VBS_BUS_DIAG[302] Info (mod_diag_manage_svc.c:1300 VBS_DIAG_Data_Request_svc) Data ID received is 24
00:00:47.064 AUDIO_MGR[521] Info (audio_am_if.c:43 myDbusSend) Request:: methodName: enableStatus, arguments: {}
00:00:47.064 VBS_BUS_DIAG[302] Info (mod_diag_manage_svc.c:3173 VBS_SendSignal_SessionNotification) MOD_DIAG: VBS_SendSignal_SessionNotification
00:00:47.064 AUDIO_MGR[521] Info (audio_am_if.c:46 myDbusSend) Response:: methodName: enableStatus, arguments: {}, result: {"enable":false}
00:00:47.064 VBS_BUS_DIAG[302] Info (mod_diag_manage_svc.c:3175 VBS_SendSignal_SessionNotification) MOD_DIAG:Received session ID is: 2
00:00:47.064 DIAG[521] Info (testdiag_statemachine.c:789 TESTDIAG_postMessageToStateMachine) Posting TESTDIAG_AUDIO_OFF_EVT (7) event to state machine in state: Default
00:00:47.064 VBS_BUS_DIAG[302] Info (mod_diag_manage_svc.c:3177 VBS_SendSignal_SessionNotification) MOD_DIAG:Message sent to service dbus with value 0
00:00:47.064 DIAG[521] Info (testdiag_statemachine.c:1263 testdiag_TopState_EventHandler) Received TESTDIAG_4AREGION_RESPONSE_EVT with 4A subregion as 0
00:00:47.064 DIAG[521] Info (testdiag_bca_interface.c:209 TESTDIAG_BCA_ReadBTSettings_cb) BLM TESTDIAG_BCA_ReadBTSettings_cb called with  value 0
00:00:47.064 DIAG[521] Info (testdiag_vbs_interface.c:3612 TESTDIAG_Session_Notification_cb) Received Session Notification
00:00:47.064 DIAG[521] Info (testdiag_statemachine.c:789 TESTDIAG_postMessageToStateMachine) Posting TESTDIAG_DEFAULT_SESSION_EVT (59) event to state machine in state: Default
00:00:47.164 LVDS[61] Info (lvds_dbus.c:286 LVDS_Signal_DispOffResp) Disp Off Resp = 1
00:00:47.265 VBS_BUS_CAN[302] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:00:47.265 VBS_BUS_CAN[302] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [0]
00:00:47.265 VBS_BUS_CAN[302] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:00:47.265 VBS_BUS_CAN[302] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:00:47.265 VBS_BUS_RADIO[302] Info (mod_radio_manage_svc.c:8323 VBS_RADIO_UpdateTAUConnectStandbyStat) Value of TAU connect Standy status is 0
00:00:47.265 LVDS[61] Info (lvds_hdcp.c:786 LVDS_hdcp_reset) LVDS Reset HDCP:-> PASSED !!
00:00:47.265 VBS_BUS_RADIO[302] Info (mod_radio_manage_svc.c:8376 VBS_RADIO_UpdateTAUConnectStandbyStat) g_tauConnectedFileExists=0, Sending actual received TAU status to BLM.
00:00:47.265 DAB[793] Info (dab_vbs_interface.c:2926 dab_vbs_ConnectionStatus_cb) TAU Status received from VBS with value::0
00:00:47.265 DAB[793] Info (dab_steng.c:330 DAB_PostMessageToStateMachine) Posting event 38 to state machine
00:00:47.265 DAB[793] Info (dab_steng.c:689 dab_IdleState_EventHandler) DAB_IDLE_STATE: Received Event 38
00:00:47.265 DAB[793] Info (dab_steng.c:396 dab_TopState_EventHandler) DAB_TOP_STATE: Received Event 38
00:00:47.265 DAB[793] Info (dab_vbs_interface.c:3127 dab_vbs_ConfigStatus_cb) DAB config Status received from VBS
00:00:47.265 DAB[793] Info (dab_vbs_interface.c:3133 dab_vbs_ConfigStatus_cb) DAB config Status received from VBS with value::0,and DAB TAU destination code is ::1
00:00:47.265 LVDS[61] Info (lvds_dbus.c:700 LVDS_Signal_HdcpModeStatus) Hdcp mode Status = 0
00:00:47.265 DAB[793] Info (dab_steng.c:330 DAB_PostMessageToStateMachine) Posting event 43 to state machine
00:00:47.265 DAB[793] Info (dab_steng.c:689 dab_IdleState_EventHandler) DAB_IDLE_STATE: Received Event 43
00:00:47.265 DAB[793] Info (dab_steng.c:396 dab_TopState_EventHandler) DAB_TOP_STATE: Received Event 43
00:00:47.265 DAB[793] Info (dab_steng.c:544 dab_TopState_EventHandler) Current region: 2
00:00:47.265 DAB[793] Info (dab_steng.c:562 dab_TopState_EventHandler) Posting Install_Status signal:1
00:00:47.265 xse>AP>[] Debug (: ) : Received TAU status:0
00:00:47.265 xse>AM>[] Debug (: ) : Received TAU status:0
00:00:47.288 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:47.311 VBS_BUS_AM[302] Info (mod_am.c:1105 VBS_AM_ReceiveHandler) Response: Source Select[SourceIndex = NONE, InterruptIndex = NONE
00:00:47.311 DIAG[521] Info (testdiag_vbs_interface.c:2999 TESTDIAG_Am_SourceChange_Response_cb) source On is NONE
00:00:47.311 DIAG[521] Info (testdiag_statemachine.c:789 TESTDIAG_postMessageToStateMachine) Posting TESTDIAG_SOURCE_CHANGE_RESPONSE_EVT (5) event to state machine in state: Default
00:00:47.311 DIAG[521] Info (testdiag_statemachine.c:1062 testdiag_TopState_EventHandler) Received Source Change Response : sourceOn : NONE and source off NONE
00:00:47.311 VBS_BUS_AM[302] Info (mod_am.c:897 VBS_AM_ReceiveHandler) Response: EventMute_Off UnMute Status [Mute Type = 2]
00:00:47.311 VBS_BUS_AM[302] Info (mod_am.c:936 VBS_AM_ReceiveHandler) Response: SoftMute_On UnMute Status [Mute Type = 1]
00:00:47.311 VBS_BUS_AM[302] Info (mod_am.c:976 VBS_AM_ReceiveHandler) Response: SysMute_Off UnMute Status [Mute Type = 3]
00:00:47.311 VBS_BUS_AM[302] Info (mod_am.c:655 VBS_AM_ReceiveHandler) Received: VOLUME ID Step Value = 0
00:00:47.311 VBS_BUS_AM[302] Info (mod_am.c:672 VBS_AM_ReceiveHandler) Response: VOLUME ID Volume Status [VolumeValue = 0]
00:00:47.311 VBS_BUS_SETTINGS[302] Info (mod_settings_manage_svc.c:7958 VBS_SETTINGS_BoseConnectionStatus) Posting Bose Connect Status signal on dbus with Bose Status = 0
00:00:47.311 VBS_BUS_AM[302] Info (mod_am.c:1004 VBS_AM_ReceiveHandler) Response: AUTOPILOT Audio Profile Status [Profile Value = 0]
00:00:47.311 VBS_BUS_AM[302] Info (mod_am.c:1026 VBS_AM_ReceiveHandler) Response: CENTERPOINT Audio Profile Status [Profile Value = 0]
00:00:47.311 DIAG[521] Info (testdiag_vbs_interface.c:3336 testdiag_UnMuteStatus_cb) Unmute Response Status Received, unmuteType = 2
00:00:47.311 xse>AM>[] Debug (: ) : Signal: SourceSelectResponse({"params":["NONE","NONE","NONE","NONE"]})
00:00:47.311 xse>AP>[] Debug (: ) : Signal: SourceSelectResponse({"params":["NONE","NONE","NONE","NONE"]})
00:00:47.311 VBS_BUS_AM[302] Info (mod_am.c:1042 VBS_AM_ReceiveHandler) Value received for AMP TYPES - 0
00:00:47.311 DIAG[521] Info (testdiag_vbs_interface.c:3341 testdiag_UnMuteStatus_cb) Unmute Type is 2
00:00:47.311 xse>AM>[] Debug (: ) : Signal: UnMuteStatus({"params":[2]})
00:00:47.311 xse>AP>[] Debug (: ) : Signal: UnMuteStatus({"params":[2]})
00:00:47.311 VBS_BUS_AM[302] Info (mod_am.c:691 VBS_AM_ReceiveHandler) Received: BASS Step Value = 0
00:00:47.311 DIAG[521] Info (testdiag_statemachine.c:789 TESTDIAG_postMessageToStateMachine) Posting TESTDIAG_AUDIO_UNMUTE_EVENT (40) event to state machine in state: Default
00:00:47.311 xse>AM>[] Debug (: ) : Signal: UnMuteStatus({"params":[1]})
00:00:47.311 xse>AP>[] Debug (: ) : Signal: UnMuteStatus({"params":[1]})
00:00:47.311 VBS_BUS_AM[302] Info (mod_am.c:709 VBS_AM_ReceiveHandler) Response: BASS Audio Profile Status [Profile Value = 0]
00:00:47.311 DIAG[521] Info (testdiag_vbs_interface.c:3336 testdiag_UnMuteStatus_cb) Unmute Response Status Received, unmuteType = 1
00:00:47.311 xse>AM>[] Debug (: ) : Signal: UnMuteStatus({"params":[3]})
00:00:47.311 xse>AP>[] Debug (: ) : Signal: UnMuteStatus({"params":[3]})
00:00:47.311 VBS_BUS_AM[302] Info (mod_am.c:728 VBS_AM_ReceiveHandler) Received: TREBLE Step Value = 0
00:00:47.311 DIAG[521] Info (testdiag_vbs_interface.c:3341 testdiag_UnMuteStatus_cb) Unmute Type is 1
00:00:47.311 xse>AM>[] Debug (: ) : Signal: VolumeStatus({"params":[1,"VOLUME",0]})
00:00:47.311 xse>AP>[] Debug (: ) : Signal: VolumeStatus({"params":[1,"VOLUME",0]})
00:00:47.311 VBS_BUS_AM[302] Info (mod_am.c:745 VBS_AM_ReceiveHandler) Response: TREBLE Audio Profile Status [Profile Value = 0]
00:00:47.311 DIAG[521] Info (testdiag_statemachine.c:789 TESTDIAG_postMessageToStateMachine) Posting TESTDIAG_AUDIO_UNMUTE_EVENT (40) event to state machine in state: Default
00:00:47.311 xse>AM>[] Debug (: ) : Signal: AudioProfileStatus({"params":[5,0]})
00:00:47.311 xse>AP>[] Info (: ) : serviceVolumeStatus: VolumeType 1, VolumeSrcGrp VOLUME, VolumeValue 0, onSource NONE
00:00:47.311 VBS_BUS_AM[302] Info (mod_am.c:763 VBS_AM_ReceiveHandler) Received: BALANCE Step Value = 0
00:00:47.311 DIAG[521] Info (testdiag_vbs_interface.c:3336 testdiag_UnMuteStatus_cb) Unmute Response Status Received, unmuteType = 3
00:00:47.311 xse>AM>[] Debug (: ) : Signal: AudioProfileStatus({"params":[6,0]})
00:00:47.311 xse>AP>[] Debug (: ) : Signal: AudioProfileStatus({"params":[5,0]})
00:00:47.311 VBS_BUS_AM[302] Info (mod_am.c:779 VBS_AM_ReceiveHandler) Response: BALANCE Audio Profile Status [Profile Value = 0]
00:00:47.311 DIAG[521] Info (testdiag_vbs_interface.c:3341 testdiag_UnMuteStatus_cb) Unmute Type is 3
00:00:47.311 xse>AM>[] Debug (: ) : Signal: AudioProfileStatus({"params":[0,0]})
00:00:47.311 xse>AP>[] Info (: ) : serviceAudioProfileStatus: AudioProfileType 5, AudioProfileValue 0
00:00:47.311 VBS_BUS_AM[302] Info (mod_am.c:797 VBS_AM_ReceiveHandler) Received: FADER Step Value = 0
00:00:47.311 DIAG[521] Info (testdiag_statemachine.c:789 TESTDIAG_postMessageToStateMachine) Posting TESTDIAG_AUDIO_UNMUTE_EVENT (40) event to state machine in state: Default
00:00:47.311 xse>AM>[] Debug (: ) : Signal: AudioProfileStatus({"params":[1,0]})
00:00:47.311 xse>AP>[] Debug (: ) : Signal: AudioProfileStatus({"params":[6,0]})
00:00:47.311 VBS_BUS_AM[302] Info (mod_am.c:813 VBS_AM_ReceiveHandler) Response: FADER Audio Profile Status [Profile Value = 0]
00:00:47.311 xse>AM>[] Debug (: ) : Signal: AudioProfileStatus({"params":[3,0]})
00:00:47.311 xse>AP>[] Info (: ) : serviceAudioProfileStatus: AudioProfileType 6, AudioProfileValue 0
00:00:47.311 VBS_BUS_AM[302] Info (mod_am.c:830 VBS_AM_ReceiveHandler) Received: ASL Step Value = 0
00:00:47.311 xse>AM>[] Debug (: ) : Signal: AudioProfileStatus({"params":[2,0]})
00:00:47.311 xse>AP>[] Debug (: ) : Signal: AudioProfileStatus({"params":[0,0]})
00:00:47.311 VBS_BUS_AM[302] Info (mod_am.c:837 VBS_AM_ReceiveHandler) Response: ASL Audio Profile Status [Profile Value = 0]
00:00:47.311 xse>AP>[] Info (: ) : serviceAudioProfileStatus: AudioProfileType 0, AudioProfileValue 0
00:00:47.311 xse>AM>[] Debug (: ) : Signal: AudioProfileStatus({"params":[4,0]})
00:00:47.311 xse>AP>[] Debug (: ) : Signal: AudioProfileStatus({"params":[1,0]})
00:00:47.311 xse>AP>[] Info (: ) : serviceAudioProfileStatus: AudioProfileType 1, AudioProfileValue 0
00:00:47.311 xse>AP>[] Debug (: ) : Signal: AudioProfileStatus({"params":[3,0]})
00:00:47.311 xse>AP>[] Info (: ) : serviceAudioProfileStatus: AudioProfileType 3, AudioProfileValue 0
00:00:47.311 xse>AP>[] Info (: ) : serviceAudioProfileStatus: Processed
00:00:47.311 xse>AP>[] Debug (: ) : Signal: AudioProfileStatus({"params":[2,0]})
00:00:47.311 xse>AP>[] Info (: ) : serviceAudioProfileStatus: AudioProfileType 2, AudioProfileValue 0
00:00:47.311 xse>AP>[] Info (: ) : serviceAudioProfileStatus: Processed
00:00:47.311 xse>AP>[] Debug (: ) : Signal: AudioProfileStatus({"params":[4,0]})
00:00:47.311 xse>AP>[] Info (: ) : serviceAudioProfileStatus: AudioProfileType 4, AudioProfileValue 0
00:00:47.311 xse>AP>[] Info (: ) : serviceAudioProfileStatus: Processed
00:00:47.311 xse>AP>[] Info (: ) : serviceAudioProfileStatus: Processed
00:00:47.311 xse>AP>[] Info (: ) : serviceAudioProfileStatus: Processed
00:00:47.311 xse>AP>[] Info (: ) : serviceAudioProfileStatus: Processed
00:00:47.311 xse>AP>[] Info (: ) : serviceAudioProfileStatus: Processed
00:00:47.376 BLM_SETTINGS[374] Info (settings_vbs_interface.cpp:11697 UpdateSymLinkForDSPConfiguration) Set DSP symlink to /jci/dsp/dsp_J36A-NoBose.xml, index in table 7
00:00:47.376 BLM_SETTINGS[374] Info (settings_symlink.hpp:228 _int_Set) symlink file /data/dsp.xml and its conatins "/jci/dsp/dsp_J36A-NoBose.xml" are OK
00:00:47.429 AUXIN[790] Info (auxin_vbs_interface.c:324 VBS_AUXIN_TauStatus_cb) TAU Status received from VBS with value::0
00:00:47.447 XM_RADIO[796] Info (xm_vbs_interface.c:1165 xm_VBS_ConfigStatusHandler) XM Configuration Status received form VBS ::0
00:00:47.447 XM_RADIO[796] Info (xm_steng.c:1077 xm_IdleState_EventHandler) XM_IDLE_STATE: Received Event 22
00:00:47.447 XM_RADIO[796] Info (xm_steng.c:568 xm_ConnectedState_EventHandler) XM_CONNECTED_STATE: Received Event 22
00:00:47.640 kernel[] Info (: ) [   47.641215] usb 2-1: new high speed USB device number 2 using fsl-ehci
00:00:47.788 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:47.788 USBDTC[523] Info (usbdtcudev.cpp:576 ProcessEvent) Monitored device has been connected! devnum:2
00:00:47.788 USBDTC[523] Info (usbdtcvbuspwrctrl.cpp:431 StopRecoveryCycles)  StopRecoveryCycles
00:00:47.788 USBDTC[523] Info (usbdtcapp.cpp:364 StatusChange) Status changed DTC ID = 14, isAsserted = 0
00:00:47.788 VBS_BUS_DIAG[302] Info (mod_diag_manage_svc.c:966 VBS_DIAG_ClearFaults_Request_svc) Number of Faults passed to ClearFaultsRequest  : 1
00:00:47.788 VBS_BUS_DIAG[302] Info (mod_diag_manage_svc.c:979 VBS_DIAG_ClearFaults_Request_svc) Fault 1 is 14  - USB_PORT_HUB2_MISSING_MSG
00:00:47.788 USBDTC[523] Info (usbdtcreporter.cpp:226 ReporterRoutine) VBS ClearFault successful! FaultID = 14
00:00:47.788 VBS_BUS_DIAG[302] Info (mod_diag_manage_svc.c:2172 VBS_SendSignal_ClearDTCResp) Current page : 0, Total page : 0  and Response Length is 4
00:00:47.788 VBS_BUS_DIAG[302] Info (mod_diag_manage_svc.c:2282 VBS_SendSignal_ClearDTCResp) Fault ID is 14 - USB_PORT_HUB2_MISSING_MSG and fault status is 1
00:00:47.796 kernel[] Info (: ) [   47.791814] usb 2-1: New USB device found, idVendor=0424, idProduct=2640
00:00:47.796 kernel[] Info (: ) [   47.791834] usb 2-1: New USB device strings: Mfr=0, Product=0, SerialNumber=0
00:00:47.796 kernel[] Error (: ) [   47.792389] usb 2-1: Device is not authorized for usage
00:00:47.796 kernel[] Info (: ) [   47.801703] hub 2-1:1.0: USB hub found
00:00:47.796 kernel[] Info (: ) [   47.803264] hub 2-1:1.0: 3 ports detected
00:00:47.796 kernel[] Info (: ) [   47.805551] usb 2-1: authorized to connect
00:00:47.804 LVDS[61] Info (lvds_nvram.c:122 LVDS_getDisplayTypeNVRAM) (Defaulting) Visteon Display.
00:00:47.804 LVDS[61] Info (lvds_dbus.c:404 LVDS_Signal_NormalModeResp) Normal Mode Resp = 1
00:00:47.804 DIAG[521] Info (testdiag_lvds_interface.c:547 testdiag_lvds_NormModeResp_cb) TESTDIAG:Received TFT Display Check Response, status is 1
00:00:47.804 DIAG[521] Info (testdiag_statemachine.c:789 TESTDIAG_postMessageToStateMachine) Posting TESTDIAG_TFT_ROUTINE_RESPONSE_EVT (32) event to state machine in state: Default
00:00:47.804 SYSTEM[262] Info (state_machine.cpp:615 system_smm_LogDisplayEventInfo) Display normal mode!
00:00:47.804 SYSTEM[262] Info (state_machine.cpp:872 system_smm_ExpectTauConnected) Still waiting for TAU connected...
00:00:47.822 LVDS[61] Info (lvds_dbus.c:488 LVDS_Signal_brightNessLevelResp) Brightness Level Resp = 5000
00:00:47.860 LVDS[61] Info (lvds_hdcp.c:786 LVDS_hdcp_reset) LVDS Reset HDCP:-> PASSED !!
00:00:47.899 VBS_BUS_AM[302] Info (mod_am.c:691 VBS_AM_ReceiveHandler) Received: BASS Step Value = -3
00:00:47.899 VBS_BUS_AM[302] Info (mod_am.c:709 VBS_AM_ReceiveHandler) Response: BASS Audio Profile Status [Profile Value = -255]
00:00:47.899 VBS_BUS_AM[302] Info (mod_am.c:728 VBS_AM_ReceiveHandler) Received: TREBLE Step Value = 2
00:00:47.899 VBS_BUS_AM[302] Info (mod_am.c:745 VBS_AM_ReceiveHandler) Response: TREBLE Audio Profile Status [Profile Value = 170]
00:00:47.899 VBS_BUS_AM[302] Info (mod_am.c:830 VBS_AM_ReceiveHandler) Received: ASL Step Value = 4
00:00:47.899 VBS_BUS_AM[302] Info (mod_am.c:837 VBS_AM_ReceiveHandler) Response: ASL Audio Profile Status [Profile Value = 584]
00:00:47.899 xse>AM>[] Debug (: ) : Signal: AudioProfileStatus({"params":[0,-255]})
00:00:47.899 xse>AP>[] Debug (: ) : Signal: AudioProfileStatus({"params":[0,-255]})
00:00:47.907 xse>AM>[] Debug (: ) : Signal: AudioProfileStatus({"params":[1,170]})
00:00:47.907 xse>AM>[] Debug (: ) : Signal: AudioProfileStatus({"params":[4,584]})
00:00:47.907 xse>AP>[] Info (: ) : serviceAudioProfileStatus: AudioProfileType 0, AudioProfileValue -255
00:00:47.907 xse>AP>[] Debug (: ) : Signal: AudioProfileStatus({"params":[1,170]})
00:00:47.907 xse>AP>[] Info (: ) : serviceAudioProfileStatus: AudioProfileType 1, AudioProfileValue 170
00:00:47.910 xse>AP>[] Debug (: ) : Signal: AudioProfileStatus({"params":[4,584]})
00:00:47.910 xse>AP>[] Info (: ) : serviceAudioProfileStatus: AudioProfileType 4, AudioProfileValue 584
00:00:47.912 xse>AP>[] Info (: ) : serviceAudioProfileStatus: Processed
00:00:47.912 xse>AP>[] Info (: ) : serviceAudioProfileStatus: Processed
00:00:47.912 xse>AP>[] Info (: ) : serviceAudioProfileStatus: Processed
00:00:47.939 LVDS[61] Info (lvds_hdcp.c:509 LVDS_VsyncDetect) VSync Found after 1 tries.
00:00:47.941 LVDS[61] Info (lvds_dbus.c:700 LVDS_Signal_HdcpModeStatus) Hdcp mode Status = 1
00:00:47.959 LVDS[61] Info (lvds_main.c:2207 LVDS_InitSetRegisters) Tuning values: 0, 0, 1, 1.
00:00:48.005 LVDS[61] Info (lvds_dbus.c:488 LVDS_Signal_brightNessLevelResp) Brightness Level Resp = 5000
00:00:48.028 DIAG[521] Info (testdiag_lvds_interface.c:380 testdiag_lvds_displayVersion_cb) TESTDIAG:Display version size is 11 and data is BHP1_A_0009
00:00:48.028 DIAG[521] Info (testdiag_statemachine.c:789 TESTDIAG_postMessageToStateMachine) Posting TESTDIAG_LVDS_TFTSWVERSION_RESPONSE_EVT (21) event to state machine in state: Default
00:00:48.028 DIAG[521] Info (testdiag_statemachine.c:1235 testdiag_TopState_EventHandler) Data Response received: BHP1_A_0009
00:00:48.028 DIAG[521] Info (testdiag_vbs_interface.c:1553 TESTDIAG_GGDSDataResponse) Sending GGDS Data Response to mod_diag , data ID is 4 and data is BHP1_A_0009
00:00:48.029 LVDS[61] Info (lvds_dbus.c:509 LVDS_Signal_displayVersionResp) Display Version Resp ID = 3, Version = BHP1_A_0009
00:00:48.053 VBS_BUS_VDT[302] Warn (mod_vdt.c:1664 VBS_VDT_ReceiveHandler) Invalid Group Received
00:00:48.090 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5219 VBS_CD_Start_Timer) Timer gs_tmrRetryCnt = 9
00:00:48.090 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5437 VBS_CD_Send_DVD_Config_status_Req) Posting DVD Config Status Request to VIP
00:00:48.090 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5370 VBS_CD_Send_CD_ReadyReq) Posting CDVDTV Ready Status Request to VIP
00:00:48.090 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5841 VBS_CD_Send_DTV_RoutineTestReq) Posting DTV RoutineTest Status Request to VIP
00:00:48.090 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5773 VBS_CD_Send_DTV_StatusReq) Posting DTV Status Request to VIP
00:00:48.092 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5293 VBS_CD_Start_Timer) Timer Started : [CDTimerRetryCnt in decrement order = 9]
00:00:48.288 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:48.429 VBS_BUS_DIAG[302] Info (mod_diag.c:375 ReceiveHandler) Received GCC Config Management at MOD_DIAG: CMU TYPES  is: 2 driveChart_Log_Distance:0 destination_1 :0 destination_2:0 driveChart_Display:0 driveChart_DataTrans:0 myDoctor_Display:0 driverIdentification:0 stDis_IDM_Req:0 endDis_IDM_Req:0 stDis_Eco_Req:1 endDis_Eco_Req:1 custmzDisp_SW:2
00:00:48.429 VBS_BUS_DIAG[302] Info (mod_diag_manage_svc.c:2847 VBS_SendSignal_GCC_ConfigMgmtResp) Received GCC Config Management at MOD_DIAG:Destination is:2  CMU TYPES  is: 2 driveChart_Log_Distance:0 destination_1 :0 destination_2:0 driveChart_Display:0 driveChart_DataTrans:0 myDoctor_Display:0 driverIdentification:0 stDis_IDM_Req:0 endDis_IDM_Req:0 stDis_Eco_Req:1 endDis_Eco_Req:1 custmzDisp_SW:2
00:00:48.429 VBS_BUS_DRVIDIDM[302] Warn (mod_drvididm.c:335 VBS_MOD_DRVIDIDM_ReceiveHandler) Transmission of signal VBS_DRVIDIDM_Send_StDis_IDM_Req failed
00:00:48.429 VBS_BUS_DRVIDIDM[302] Warn (mod_drvididm.c:342 VBS_MOD_DRVIDIDM_ReceiveHandler) Transmission of signal VBS_DRVIDIDM_Send_EndDis_IDM_Req failed
00:00:48.434 DIAG[521] Info (testdiag_vbs_interface.c:1073 TESTDIAG_VehicleInfoData_Response_cb) TESTDIAG:Received Vehicle Info data:-- Destination: 2, CMU Type: 2 driveChart_Log_Distance:0 destination_1:0 destination_2:0 driveChart_Display:0 driveChart_DataTrans:0 myDoctor_Display:0 ,driverIdentification:0 stDis_IDM_Req:0 endDis_IDM_Req:0 stDis_Eco_Req:1 endDis_Eco_Req:1 custmzDisp_SW:2
00:00:48.721 DIAG[521] Info (testdiag_vbs_interface.c:4655 TESTDIAG_NAVI_VINNumber_Response_cb) got VIN from signal: JM1BM1T79G1319820
00:00:48.721 USBDTC[523] Info (usbdtcvbuspwrctrl.cpp:723 VINDataUpdate_cb) VIN data 'JM1BM1T79G1319820' length=17
00:00:48.721 BLM_SETTINGS[374] Info (settings_vbs_interface.cpp:3082 BLM_SETTINGS_Vehicle_VIN_Notification) Vehicle VIN notification received [JM1BM1T79G1319820][19]
00:00:48.723 BLM_SETTINGS[374] Info (settings_vbs_interface.cpp:3030 BLM_SETTINGS_Vehicle_VIN_Notification_cb) Vehicle VIN notification received [JM1BM1T79G1319820]
00:00:48.723 BLM_SETTINGS[374] Info (settings_vbs_interface.cpp:3037 BLM_SETTINGS_Vehicle_VIN_Notification_cb) Vehicle VIN notification received [JM1BM1T79G1319820]
00:00:48.749 VBS_BUS_CAN[302] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:00:48.749 VBS_BUS_CAN[302] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:00:48.749 VBS_BUS_CAN[302] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:00:48.749 VBS_BUS_CAN[302] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:00:48.796 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:48.796 VBS_BUS_AM[302] Info (mod_am.c:885 VBS_AM_ReceiveHandler) Response: EventMute_On Mute Status [Mute Type = 2]
00:00:48.796 xse>AM>[] Debug (: ) : Signal: MuteStatus({"params":[2]})
00:00:48.796 DIAG[521] Info (testdiag_vbs_interface.c:3383 testdiag_MuteStatus_cb) Mute Response Status Received, muteType = 2
00:00:48.796 DIAG[521] Info (testdiag_vbs_interface.c:3388 testdiag_MuteStatus_cb) Unmute Type is 2
00:00:48.796 DIAG[521] Info (testdiag_statemachine.c:789 TESTDIAG_postMessageToStateMachine) Posting TESTDIAG_AUDIO_MUTE_EVENT (64) event to state machine in state: Default
00:00:48.796 xse>AP>[] Debug (: ) : Signal: MuteStatus({"params":[2]})
00:00:48.852 VBS_BUS_AM[302] Info (mod_am.c:1105 VBS_AM_ReceiveHandler) Response: Source Select[SourceIndex = FM, InterruptIndex = NONE
00:00:48.856 DIAG[521] Info (testdiag_vbs_interface.c:2999 TESTDIAG_Am_SourceChange_Response_cb) source On is FM
00:00:48.856 DIAG[521] Info (testdiag_statemachine.c:789 TESTDIAG_postMessageToStateMachine) Posting TESTDIAG_SOURCE_CHANGE_RESPONSE_EVT (5) event to state machine in state: Default
00:00:48.856 DIAG[521] Info (testdiag_statemachine.c:1062 testdiag_TopState_EventHandler) Received Source Change Response : sourceOn : FM and source off NONE
00:00:48.856 xse>AM>[] Debug (: ) : Signal: SourceSelectResponse({"params":["FM","NONE","NONE","NONE"]})
00:00:48.856 xse>AP>[] Debug (: ) : Signal: SourceSelectResponse({"params":["FM","NONE","NONE","NONE"]})
00:00:48.864 VBS_BUS_AM[302] Info (mod_am.c:655 VBS_AM_ReceiveHandler) Received: VOLUME ID Step Value = 14
00:00:48.864 VBS_BUS_AM[302] Info (mod_am.c:672 VBS_AM_ReceiveHandler) Response: VOLUME ID Volume Status [VolumeValue = 224]
00:00:48.864 xse>AM>[] Debug (: ) : Signal: VolumeStatus({"params":[1,"VOLUME",224]})
00:00:48.864 xse>AP>[] Debug (: ) : Signal: VolumeStatus({"params":[1,"VOLUME",224]})
00:00:48.864 xse>AP>[] Info (: ) : serviceVolumeStatus: VolumeType 1, VolumeSrcGrp VOLUME, VolumeValue 224, onSource FM
00:00:48.889 VBS_BUS_AM[302] Info (mod_am.c:897 VBS_AM_ReceiveHandler) Response: EventMute_Off UnMute Status [Mute Type = 2]
00:00:48.889 DIAG[521] Info (testdiag_vbs_interface.c:3336 testdiag_UnMuteStatus_cb) Unmute Response Status Received, unmuteType = 2
00:00:48.889 DIAG[521] Info (testdiag_vbs_interface.c:3341 testdiag_UnMuteStatus_cb) Unmute Type is 2
00:00:48.889 DIAG[521] Info (testdiag_statemachine.c:789 TESTDIAG_postMessageToStateMachine) Posting TESTDIAG_AUDIO_UNMUTE_EVENT (40) event to state machine in state: Default
00:00:48.889 xse>AM>[] Debug (: ) : Signal: UnMuteStatus({"params":[2]})
00:00:48.889 xse>AP>[] Debug (: ) : Signal: UnMuteStatus({"params":[2]})
00:00:49.001 BLM_TIME[499] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:00:49.001 BLM_TIME[499] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:00:49.056 VBS_BUS_VDT[302] Warn (mod_vdt.c:1608 VBS_VDT_ReceiveHandler) Invalid Group Received
00:00:49.059 VBS_BUS_VDT[302] Warn (mod_vdt.c:1608 VBS_VDT_ReceiveHandler) Invalid Group Received
00:00:49.062 VBS_BUS_VDT[302] Warn (mod_vdt.c:1608 VBS_VDT_ReceiveHandler) Invalid Group Received
00:00:49.064 VBS_BUS_VDT[302] Warn (mod_vdt.c:1608 VBS_VDT_ReceiveHandler) Invalid Group Received
00:00:49.066 VBS_BUS_VDT[302] Warn (mod_vdt.c:1608 VBS_VDT_ReceiveHandler) Invalid Group Received
00:00:49.068 VBS_BUS_EEM[302] Error (mod_eem_manage_svc.c:1438 VBS_EEM_SendSignal_CAN_Missing_Ind) invalid case
00:00:49.071 VBS_BUS_EEM[302] Error (mod_eem_manage_svc.c:1438 VBS_EEM_SendSignal_CAN_Missing_Ind) invalid case
00:00:49.092 VBS_BUS_CAN[302] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:00:49.092 VBS_BUS_CAN[302] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:00:49.092 VBS_BUS_CAN[302] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:00:49.092 VBS_BUS_CAN[302] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:00:49.094 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5219 VBS_CD_Start_Timer) Timer gs_tmrRetryCnt = 8
00:00:49.094 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5437 VBS_CD_Send_DVD_Config_status_Req) Posting DVD Config Status Request to VIP
00:00:49.094 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5370 VBS_CD_Send_CD_ReadyReq) Posting CDVDTV Ready Status Request to VIP
00:00:49.094 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5841 VBS_CD_Send_DTV_RoutineTestReq) Posting DTV RoutineTest Status Request to VIP
00:00:49.094 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5773 VBS_CD_Send_DTV_StatusReq) Posting DTV Status Request to VIP
00:00:49.095 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5293 VBS_CD_Start_Timer) Timer Started : [CDTimerRetryCnt in decrement order = 8]
00:00:49.292 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:49.322 VBS_BUS_DIAG[302] Info (mod_diag.c:331 ReceiveHandler) Received GCC Config Management at MOD_DIAG: destination is: 2
00:00:49.322 VBS_BUS_DIAG[302] Info (mod_diag_manage_svc.c:2847 VBS_SendSignal_GCC_ConfigMgmtResp) Received GCC Config Management at MOD_DIAG:Destination is:2  CMU TYPES  is: 2 driveChart_Log_Distance:0 destination_1 :0 destination_2:0 driveChart_Display:0 driveChart_DataTrans:0 myDoctor_Display:0 driverIdentification:0 stDis_IDM_Req:0 endDis_IDM_Req:0 stDis_Eco_Req:1 endDis_Eco_Req:1 custmzDisp_SW:2
00:00:49.322 VBS_BUS_BCM[302] Info (mod_bcm.c:468 VBS_BCM_ReceiveHandler) Speed Restriction Signal not received at BCM Plugin
00:00:49.324 DIAG[521] Info (testdiag_vbs_interface.c:1073 TESTDIAG_VehicleInfoData_Response_cb) TESTDIAG:Received Vehicle Info data:-- Destination: 2, CMU Type: 2 driveChart_Log_Distance:0 destination_1:0 destination_2:0 driveChart_Display:0 driveChart_DataTrans:0 myDoctor_Display:0 ,driverIdentification:0 stDis_IDM_Req:0 endDis_IDM_Req:0 stDis_Eco_Req:1 endDis_Eco_Req:1 custmzDisp_SW:2
00:00:49.795 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:50.095 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5219 VBS_CD_Start_Timer) Timer gs_tmrRetryCnt = 7
00:00:50.095 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5437 VBS_CD_Send_DVD_Config_status_Req) Posting DVD Config Status Request to VIP
00:00:50.095 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5370 VBS_CD_Send_CD_ReadyReq) Posting CDVDTV Ready Status Request to VIP
00:00:50.095 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5841 VBS_CD_Send_DTV_RoutineTestReq) Posting DTV RoutineTest Status Request to VIP
00:00:50.095 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5773 VBS_CD_Send_DTV_StatusReq) Posting DTV Status Request to VIP
00:00:50.097 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5293 VBS_CD_Start_Timer) Timer Started : [CDTimerRetryCnt in decrement order = 7]
00:00:50.297 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:50.801 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:51.092 VBS_BUS_CAN[302] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:00:51.092 VBS_BUS_CAN[302] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:00:51.092 VBS_BUS_CAN[302] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:00:51.092 VBS_BUS_CAN[302] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:00:51.098 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5219 VBS_CD_Start_Timer) Timer gs_tmrRetryCnt = 6
00:00:51.098 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5437 VBS_CD_Send_DVD_Config_status_Req) Posting DVD Config Status Request to VIP
00:00:51.098 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5370 VBS_CD_Send_CD_ReadyReq) Posting CDVDTV Ready Status Request to VIP
00:00:51.098 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5841 VBS_CD_Send_DTV_RoutineTestReq) Posting DTV RoutineTest Status Request to VIP
00:00:51.098 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5773 VBS_CD_Send_DTV_StatusReq) Posting DTV Status Request to VIP
00:00:51.099 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5293 VBS_CD_Start_Timer) Timer Started : [CDTimerRetryCnt in decrement order = 6]
00:00:51.304 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:51.807 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:52.000 BLM_TIME[499] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:00:52.002 BLM_TIME[499] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:00:52.061 USBDTC[523] Info (usbdtcgpio.cpp:202 TimerCbk) 'ACC Status':Pin val stable
00:00:52.063 USBDTC[523] Info (usbdtcudev.cpp:405 UpdateMonitorStatus) Monitored device is present in the system! /sys/devices/platform/fsl-ehci.1/usb2/2-1 devnum: 2
00:00:52.068 SYSTEM[262] Error (state_machine.cpp:709 system_smm_LogVbsRadioEventInfo) Tau connected timeout!
00:00:52.068 SYSTEM[262] Info (state_machine.cpp:934 system_smm_ExpectBootupFinished) Still waiting for bootup to finish...
00:00:52.100 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5219 VBS_CD_Start_Timer) Timer gs_tmrRetryCnt = 5
00:00:52.100 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5437 VBS_CD_Send_DVD_Config_status_Req) Posting DVD Config Status Request to VIP
00:00:52.100 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5370 VBS_CD_Send_CD_ReadyReq) Posting CDVDTV Ready Status Request to VIP
00:00:52.100 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5841 VBS_CD_Send_DTV_RoutineTestReq) Posting DTV RoutineTest Status Request to VIP
00:00:52.100 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5773 VBS_CD_Send_DTV_StatusReq) Posting DTV Status Request to VIP
00:00:52.102 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5293 VBS_CD_Start_Timer) Timer Started : [CDTimerRetryCnt in decrement order = 5]
00:00:52.107 VBS_BUS_CAN[302] Info (mod_can_private.c:2508 VBS_BUS_CAN_CDVDTV_Status) [CD Ready Stat = 0]
00:00:52.309 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:52.812 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:53.093 VBS_BUS_CAN[302] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:00:53.093 VBS_BUS_CAN[302] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:00:53.093 VBS_BUS_CAN[302] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:00:53.093 VBS_BUS_CAN[302] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:00:53.103 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5219 VBS_CD_Start_Timer) Timer gs_tmrRetryCnt = 4
00:00:53.103 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5437 VBS_CD_Send_DVD_Config_status_Req) Posting DVD Config Status Request to VIP
00:00:53.103 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5370 VBS_CD_Send_CD_ReadyReq) Posting CDVDTV Ready Status Request to VIP
00:00:53.103 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5841 VBS_CD_Send_DTV_RoutineTestReq) Posting DTV RoutineTest Status Request to VIP
00:00:53.103 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5773 VBS_CD_Send_DTV_StatusReq) Posting DTV Status Request to VIP
00:00:53.105 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5293 VBS_CD_Start_Timer) Timer Started : [CDTimerRetryCnt in decrement order = 4]
00:00:53.314 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:53.630 VBS_BUS_DIAG[302] Info (mod_diag_manage_svc.c:2916 VBS_SendSignal_ReadSystemFailureResp) MOD_DIAG:Received system Failure FaultId is 1 and Fault status is: 0
00:00:53.640 DIAG[521] Info (testdiag_vbs_interface.c:1133 TESTDIAG_General_System_Error_cb) Received System Error, fault id is 1 and the fault status is 0
00:00:53.640 DIAG[521] Info (testdiag_statemachine.c:1098 testdiag_TopState_EventHandler)  Fault ID recieved in statemachine is 1 and the fault status is 0
00:00:53.640 DIAG[521] Info (testdiag_statemachine.c:1115 testdiag_TopState_EventHandler) File doesnot Exist
00:00:53.640 VBS_BUS_DIAG[302] Info (mod_diag_manage_svc.c:2916 VBS_SendSignal_ReadSystemFailureResp) MOD_DIAG:Received system Failure FaultId is 2 and Fault status is: 0
00:00:53.640 DIAG[521] Info (testdiag_statemachine.c:1122 testdiag_TopState_EventHandler)  Fault ID sent to HMI is 2 and the fault status is 0
00:00:53.640 DIAG[521] Info (testdiag_vbs_interface.c:1133 TESTDIAG_General_System_Error_cb) Received System Error, fault id is 2 and the fault status is 0
00:00:53.640 VBS_BUS_DIAG[302] Info (mod_diag_manage_svc.c:2916 VBS_SendSignal_ReadSystemFailureResp) MOD_DIAG:Received system Failure FaultId is 4 and Fault status is: 0
00:00:53.640 VBS_BUS_DIAG[302] Info (mod_diag_manage_svc.c:2916 VBS_SendSignal_ReadSystemFailureResp) MOD_DIAG:Received system Failure FaultId is 5 and Fault status is: 0
00:00:53.640 VBS_BUS_DIAG[302] Info (mod_diag_manage_svc.c:2916 VBS_SendSignal_ReadSystemFailureResp) MOD_DIAG:Received system Failure FaultId is 6 and Fault status is: 0
00:00:53.640 DIAG[521] Info (testdiag_statemachine.c:1098 testdiag_TopState_EventHandler)  Fault ID recieved in statemachine is 2 and the fault status is 0
00:00:53.640 DIAG[521] Info (testdiag_statemachine.c:1115 testdiag_TopState_EventHandler) File doesnot Exist
00:00:53.640 DIAG[521] Info (testdiag_vbs_interface.c:1133 TESTDIAG_General_System_Error_cb) Received System Error, fault id is 4 and the fault status is 0
00:00:53.640 DIAG[521] Info (testdiag_statemachine.c:1122 testdiag_TopState_EventHandler)  Fault ID sent to HMI is 2 and the fault status is 0
00:00:53.650 VBS_BUS_DIAG[302] Info (mod_diag_manage_svc.c:2916 VBS_SendSignal_ReadSystemFailureResp) MOD_DIAG:Received system Failure FaultId is 7 and Fault status is: 0
00:00:53.650 VBS_BUS_DIAG[302] Info (mod_diag_manage_svc.c:2916 VBS_SendSignal_ReadSystemFailureResp) MOD_DIAG:Received system Failure FaultId is 23 and Fault status is: 0
00:00:53.650 VBS_BUS_DIAG[302] Info (mod_diag_manage_svc.c:2916 VBS_SendSignal_ReadSystemFailureResp) MOD_DIAG:Received system Failure FaultId is 44 and Fault status is: 0
00:00:53.650 DIAG[521] Info (testdiag_statemachine.c:1098 testdiag_TopState_EventHandler)  Fault ID recieved in statemachine is 4 and the fault status is 0
00:00:53.650 DIAG[521] Info (testdiag_statemachine.c:1115 testdiag_TopState_EventHandler) File doesnot Exist
00:00:53.650 DIAG[521] Info (testdiag_statemachine.c:1135 testdiag_TopState_EventHandler)  Fault ID sent to HMI is 3 and the fault status is 0
00:00:53.650 DIAG[521] Info (testdiag_vbs_interface.c:1133 TESTDIAG_General_System_Error_cb) Received System Error, fault id is 5 and the fault status is 0
00:00:53.650 DIAG[521] Info (testdiag_vbs_interface.c:1133 TESTDIAG_General_System_Error_cb) Received System Error, fault id is 6 and the fault status is 0
00:00:53.650 DIAG[521] Info (testdiag_vbs_interface.c:1133 TESTDIAG_General_System_Error_cb) Received System Error, fault id is 7 and the fault status is 0
00:00:53.650 DIAG[521] Info (testdiag_vbs_interface.c:1133 TESTDIAG_General_System_Error_cb) Received System Error, fault id is 23 and the fault status is 0
00:00:53.650 DIAG[521] Info (testdiag_vbs_interface.c:1133 TESTDIAG_General_System_Error_cb) Received System Error, fault id is 44 and the fault status is 0
00:00:53.650 DIAG[521] Info (testdiag_statemachine.c:1098 testdiag_TopState_EventHandler)  Fault ID recieved in statemachine is 5 and the fault status is 0
00:00:53.650 DIAG[521] Info (testdiag_statemachine.c:1115 testdiag_TopState_EventHandler) File doesnot Exist
00:00:53.650 DIAG[521] Info (testdiag_statemachine.c:1135 testdiag_TopState_EventHandler)  Fault ID sent to HMI is 3 and the fault status is 0
00:00:53.650 DIAG[521] Info (testdiag_statemachine.c:1098 testdiag_TopState_EventHandler)  Fault ID recieved in statemachine is 6 and the fault status is 0
00:00:53.650 DIAG[521] Info (testdiag_statemachine.c:1115 testdiag_TopState_EventHandler) File doesnot Exist
00:00:53.650 DIAG[521] Info (testdiag_statemachine.c:1142 testdiag_TopState_EventHandler)  Fault ID sent to HMI is 4 and the fault status is 0
00:00:53.650 DIAG[521] Info (testdiag_statemachine.c:1098 testdiag_TopState_EventHandler)  Fault ID recieved in statemachine is 7 and the fault status is 0
00:00:53.650 DIAG[521] Info (testdiag_statemachine.c:1115 testdiag_TopState_EventHandler) File doesnot Exist
00:00:53.650 DIAG[521] Info (testdiag_statemachine.c:1142 testdiag_TopState_EventHandler)  Fault ID sent to HMI is 4 and the fault status is 0
00:00:53.650 DIAG[521] Info (testdiag_statemachine.c:1098 testdiag_TopState_EventHandler)  Fault ID recieved in statemachine is 23 and the fault status is 0
00:00:53.650 DIAG[521] Info (testdiag_statemachine.c:1115 testdiag_TopState_EventHandler) File doesnot Exist
00:00:53.650 DIAG[521] Info (testdiag_statemachine.c:1122 testdiag_TopState_EventHandler)  Fault ID sent to HMI is 2 and the fault status is 0
00:00:53.650 DIAG[521] Info (testdiag_statemachine.c:1098 testdiag_TopState_EventHandler)  Fault ID recieved in statemachine is 44 and the fault status is 0
00:00:53.650 DIAG[521] Info (testdiag_statemachine.c:1115 testdiag_TopState_EventHandler) File doesnot Exist
00:00:53.650 DIAG[521] Info (testdiag_statemachine.c:1148 testdiag_TopState_EventHandler)  Fault ID sent to HMI is 0 and the fault status is 0
00:00:53.817 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:53.822 VBS_BUS_DIAG[302] Info (mod_diag_manage_svc.c:2916 VBS_SendSignal_ReadSystemFailureResp) MOD_DIAG:Received system Failure FaultId is 8 and Fault status is: 0
00:00:53.822 DIAG[521] Info (testdiag_vbs_interface.c:1133 TESTDIAG_General_System_Error_cb) Received System Error, fault id is 8 and the fault status is 0
00:00:53.822 DIAG[521] Info (testdiag_statemachine.c:1098 testdiag_TopState_EventHandler)  Fault ID recieved in statemachine is 8 and the fault status is 0
00:00:53.822 DIAG[521] Info (testdiag_statemachine.c:1115 testdiag_TopState_EventHandler) File doesnot Exist
00:00:53.822 DIAG[521] Info (testdiag_statemachine.c:1128 testdiag_TopState_EventHandler)  Fault ID sent to HMI is 1 and the fault status is 0
00:00:54.105 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5219 VBS_CD_Start_Timer) Timer gs_tmrRetryCnt = 3
00:00:54.105 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5437 VBS_CD_Send_DVD_Config_status_Req) Posting DVD Config Status Request to VIP
00:00:54.105 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5370 VBS_CD_Send_CD_ReadyReq) Posting CDVDTV Ready Status Request to VIP
00:00:54.105 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5841 VBS_CD_Send_DTV_RoutineTestReq) Posting DTV RoutineTest Status Request to VIP
00:00:54.105 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5773 VBS_CD_Send_DTV_StatusReq) Posting DTV Status Request to VIP
00:00:54.107 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5293 VBS_CD_Start_Timer) Timer Started : [CDTimerRetryCnt in decrement order = 3]
00:00:54.319 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:54.822 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:55.000 BLM_TIME[499] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:00:55.002 BLM_TIME[499] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:00:55.094 VBS_BUS_CAN[302] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:00:55.094 VBS_BUS_CAN[302] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:00:55.094 VBS_BUS_CAN[302] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:00:55.094 VBS_BUS_CAN[302] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:00:55.107 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5219 VBS_CD_Start_Timer) Timer gs_tmrRetryCnt = 2
00:00:55.107 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5437 VBS_CD_Send_DVD_Config_status_Req) Posting DVD Config Status Request to VIP
00:00:55.107 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5370 VBS_CD_Send_CD_ReadyReq) Posting CDVDTV Ready Status Request to VIP
00:00:55.107 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5841 VBS_CD_Send_DTV_RoutineTestReq) Posting DTV RoutineTest Status Request to VIP
00:00:55.107 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5773 VBS_CD_Send_DTV_StatusReq) Posting DTV Status Request to VIP
00:00:55.109 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5293 VBS_CD_Start_Timer) Timer Started : [CDTimerRetryCnt in decrement order = 2]
00:00:55.325 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:55.827 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:56.109 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5219 VBS_CD_Start_Timer) Timer gs_tmrRetryCnt = 1
00:00:56.109 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5437 VBS_CD_Send_DVD_Config_status_Req) Posting DVD Config Status Request to VIP
00:00:56.109 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5370 VBS_CD_Send_CD_ReadyReq) Posting CDVDTV Ready Status Request to VIP
00:00:56.109 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5841 VBS_CD_Send_DTV_RoutineTestReq) Posting DTV RoutineTest Status Request to VIP
00:00:56.109 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5773 VBS_CD_Send_DTV_StatusReq) Posting DTV Status Request to VIP
00:00:56.111 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5293 VBS_CD_Start_Timer) Timer Started : [CDTimerRetryCnt in decrement order = 1]
00:00:56.329 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:56.833 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:57.095 VBS_BUS_CAN[302] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:00:57.095 VBS_BUS_CAN[302] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:00:57.095 VBS_BUS_CAN[302] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:00:57.095 VBS_BUS_CAN[302] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:00:57.111 VBS_BUS_CDVDTV[302] Info (mod_cd_manage_svc.c:5219 VBS_CD_Start_Timer) Timer gs_tmrRetryCnt = 0
00:00:57.337 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:57.840 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:58.000 BLM_TIME[499] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:00:58.002 BLM_TIME[499] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:00:58.064 VBS_BUS_VDT[302] Warn (mod_vdt.c:1608 VBS_VDT_ReceiveHandler) Invalid Group Received
00:00:58.342 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:58.368 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|no pResponse|(event) 118 1970.01.01 00:01:58|-1|0|0|0|ARMED|RUN|keep|2|2|0|com.jci.BLM_TIME_TO_CPP_TIME|occurrence:1970.01.02 03:11:00|deviation:0000.00.00 00:00:00|time:32767.127.127 127:127:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|com.jci.BLM_TIME_TO_CPP_TIME
00:00:58.368 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|no pResponse|(event) 118 1970.01.01 00:01:58|-1|0|0|0|ARMED|RUN|keep|2|2|0|com.jci.tds2cpptime|occurrence:1970.01.02 03:11:00|deviation:0000.00.00 00:00:00|time:32767.127.127 127:127:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|com.jci.tds2cpptime
00:00:58.368 BLM_TIME[499] Info (time_client.cpp:807 blm_time_EventNotification_cb) Time from CPP_TIME: 03:11
00:00:58.368 BLM_TIME[499] Info (blm_time_logic.cpp:347 blm_time_lgc_LogicThread) blm_time_event (1) (mae 1970.01.02 03:11:00) (ts 1970.01.02 03:11:00) (tz 33621938:2819) (gps_sync 33621938) (td 1970.01.02 03:11:00 0 0 0 0 0)
00:00:58.368 BLM_TIME[499] Info (dbusTIME_service.c:194 BLM_TIME_HDBUS_ClockChanged) broadcasting 1-min signal 03:11
00:00:58.844 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:59.095 VBS_BUS_CAN[302] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:00:59.095 VBS_BUS_CAN[302] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:00:59.095 VBS_BUS_CAN[302] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:00:59.095 VBS_BUS_CAN[302] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:00:59.347 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:59.849 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:01:00.351 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:01:00.854 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:01:01.001 BLM_TIME[499] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:01:01.004 BLM_TIME[499] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:01:01.095 VBS_BUS_CAN[302] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:01:01.095 VBS_BUS_CAN[302] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:01:01.095 VBS_BUS_CAN[302] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:01:01.095 VBS_BUS_CAN[302] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:01:01.356 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:01:01.859 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:01:02.361 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:01:02.865 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:01:03.096 VBS_BUS_CAN[302] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:01:03.096 VBS_BUS_CAN[302] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:01:03.096 VBS_BUS_CAN[302] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:01:03.096 VBS_BUS_CAN[302] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:01:03.369 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:01:03.833 SYSTEM[262] Info (state_machine.cpp:744 system_smm_LogVbsEventInfo) Ignition on with ACC ON!
00:01:03.840 VBS_BUS_SETTINGS[302] Info (mod_settings.c:1327 VBS_SETTINGS_ReceiveHandler) Received HUD Intens CNT Response with Value = 2
00:01:03.847 VBS_BUS_SETTINGS[302] Info (mod_settings.c:1335 VBS_SETTINGS_ReceiveHandler) Received HUD Auto Int Con On/Off Response with Value = 0
00:01:03.847 VBS_BUS_SETTINGS[302] Info (mod_settings.c:1351 VBS_SETTINGS_ReceiveHandler) Received HUD ManInt Cnt Level Response at MOD_SETTINGS = 20 = 0
00:01:03.847 VBS_BUS_VDT[302] Info (mod_vdt.c:2110 vbs_vdt_StartDataLogging) Filtered signals updation complete. Starting normal operation
00:01:03.847 VBS_BUS_DRVIDIDM[302] Info (mod_drvididm_timers.c:65 VBS_DRVIDIDM_Initialize_Timer) checked for gs_firstboot_tmr false condition
00:01:03.847 VBS_BUS_BCM[302] Info (mod_bcm_manage_svc.c:1443 VBS_BCM_Send_IgnitionControl_Status) Sending Ignition Control Status on Service and HMI DBus with value = 4
00:01:03.847 VDM[302] Info (vdm_eem_calc.c:3865 VDM_UpdateTotal_Distance) Total_Distance value saved as <967092>!
00:01:03.847 VDM[302] Info (vdm_eem_calc.c:3152 VDM_ClearEEMData)  CLEARING DATA....
00:01:03.847 VBS_BUS_SETTINGS[302] Info (mod_settings_manage_svc.c:10504 VBS_SETTINGS_SendHUDTiltLvlReqVal) Successfully posted on service DBus for TiltLvlReqVal = 14
00:01:03.847 BLM_SETTINGS[374] Info (settings_vbs_interface.cpp:2391 BLM_SETTINGS_HEC_Status_Notification_cb) HEC Status notification received type - 1 value - 2
00:01:03.847 BLM_SETTINGS[374] Info (settings_vbs_interface.cpp:2396 BLM_SETTINGS_HEC_Status_Notification_cb) HEC Status notification received type - 2 value - 1
00:01:03.874 BUCPSA[342] Info (bucpsa_psm_handler.c:84 BUCPSA_InjectSensorData) PSM Update: Status=OFF, SystemError=FALSE, Sensors=[0,0,0,0,0,0], Variation=0, DisplayRequest=OFF
00:01:03.874 BUCPSA[342] Info (bucpsa_steng.c:214 BUCPSA_StengPostMessage) Posting event 'BUCPSA_PSA_EVT' into state 'Default_State'
00:01:03.874 BUCPSA[342] Info (bucpsa_steng.c:381 bucpsa_Default_EventHandler) PSM System Status = Off (0)
00:01:03.874 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:01:03.878 VBS_BUS_SETTINGS[302] Info (mod_settings_manage_svc.c:7771 VBS_SETTINGS_HECIllumination_Status) Posting Parking Brake Signal with value = 1 on Service DBus
00:01:03.881 VBS_BUS_DRVIDIDM[302] Info (mod_drvididm_timers.c:77 VBS_DRVIDIDM_Initialize_Timer) Timer started Successfully
00:01:03.881 VDM[302] Info (vdm_idm_calc.c:4688 VDM_Update_All_CVD_Data2zero) Entered VDM_Update_All_CVD_Data2zero************
00:01:03.881 VDM[302] Info (vdm_idm_calc.c:5631 VDM_Update_CurrSCR_CVDs_as_ZERO) Entered VDM_Update_CurrSCR_CVDs_as_ZERO************
00:01:03.882 VBS_BUS_VDT[302] Info (mod_vdt_ind_lamp_timer.c:223 VBS_VDT_Initialize_100MS_Timer) VBS_VDT_Initialize_100MS_Timer
00:01:03.906 BLM_SETTINGS[374] Info (settings_vbs_interface.cpp:2401 BLM_SETTINGS_HEC_Status_Notification_cb) HEC Status notification received type - 3 value - 1
00:01:03.906 BLM_SETTINGS[374] Info (settings_vbs_interface.cpp:2406 BLM_SETTINGS_HEC_Status_Notification_cb) HEC Status notification received type - 4 value - 2
00:01:03.906 BLM_SETTINGS[374] Info (settings_vbs_interface.cpp:2411 BLM_SETTINGS_HEC_Status_Notification_cb) HEC Status notification received type - 5 value - 3
00:01:03.906 BLM_SETTINGS[374] Info (settings_vbs_interface.cpp:2416 BLM_SETTINGS_HEC_Status_Notification_cb) HEC Status notification received type - 6 value - 3
00:01:03.906 BLM_SETTINGS[374] Info (settings_vbs_interface.cpp:2421 BLM_SETTINGS_HEC_Status_Notification_cb) HEC Status notification received type - 7 value - 3
00:01:03.906 BLM_SETTINGS[374] Info (settings_vbs_interface.cpp:2426 BLM_SETTINGS_HEC_Status_Notification_cb) HEC Status notification received type - 8 value - 3
00:01:03.906 BLM_SETTINGS[374] Info (settings_vbs_interface.cpp:2431 BLM_SETTINGS_HEC_Status_Notification_cb) HEC Status notification received type - 13 value - 0
00:01:03.906 BLM_SETTINGS[374] Info (settings_vbs_interface.cpp:2751 BLM_SETTINGS_PSM_Status_Notification_cb) PSM Status notification received type - 2 value - 0
00:01:03.973 VBS_BUS_BCM[302] Info (mod_bcm_manage_svc.c:1019 VBS_BCM_Send_FuelCutOff) Received Fuel CutOff with value = 6
00:01:03.995 VBS_BUS_NAVI[302] Info (mod_navi_manage_svc.c:286 VBS_NAVI_SendSignal_FuelType) Sending the Fuel Type response signal on dbus with value = 1
00:01:04.010 BLM_TIME[499] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:01:04.020 BLM_TIME[499] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:01:04.020 VBS_BUS_VDT[302] Error (mod_vdt.c:2211 VBS_VDT_Write_Fuel_Type) Fuel Type already updated in this Cycle until Factory reset
00:01:04.020 VBS_BUS_CAN[302] Info (mod_can_public.c:2246 VBS_BUS_CAN_Engine_Throttle_Response) Value of Speed Restriction = 0
00:01:04.020 VBS_BUS_CAN[302] Info (mod_can_public.c:2323 VBS_BUS_CAN_Engine_Throttle_Response) Value of Status Flag(>=1 km/hr)= 0
00:01:04.020 VBS_BUS_BCM[302] Info (mod_bcm.c:666 VBS_BCM_getSpeedRestconfigNVRAM) Speed Restriction: Enabled
00:01:04.020 VBS_BUS_BCM[302] Info (mod_bcm.c:513 VBS_BCM_ReceiveHandler) The value received for speed restriction at VBS BCM Plugin = 0 for destination = 2
00:01:04.020 VBS_BUS_BCM[302] Info (mod_bcm_manage_svc.c:1517 VBS_BCM_Send_NoSpeedRestrict_TouchDisplay) Speed Restrict successfully posted on HMI DBus for Touch screen with restrict = 0
00:01:04.020 VBS_BUS_BCM[302] Info (mod_bcm_manage_svc.c:1529 VBS_BCM_Send_NoSpeedRestrict_TouchDisplay) Speed Restrict successfully posted on Service DBus for Touch screen with restrict = 0
00:01:04.020 VBS_BUS_BCM[302] Info (mod_bcm_manage_svc.c:951 VBS_BCM_Send_CarSpeedThreshold) Speed Restrict successfully posted on HMI DBus for NA/Japan with restrict = 0
00:01:04.020 VBS_BUS_VWM[302] Error (mod_vwm.c:982 VBS_VWM_Write_Fuel_Type) Fuel Type already updated in this Cycle until Factory reset
00:01:04.020 VBS_BUS_BCM[302] Info (mod_bcm_manage_svc.c:962 VBS_BCM_Send_CarSpeedThreshold) Speed Restrict successfully posted on Service DBus for NA/Japan with restrict = 0
00:01:04.030 VBS_BUS_EEM[302] Error (mod_eem.c:2043 VBS_EEM_Write_Fuel_Type) Fuel Type already updated in this Cycle untill Factory reset
00:01:04.030 VDM[302] Info (vdm_eem_calc.c:1457 VDM_UpdateCVD_SvdFuelRate) new fuleRate = 27500
00:01:04.030 VDM[302] Info (vdm_eem_calc.c:1530 VDM_UpdateCVD_SvdFuelByIS) l_fuelRate 27500  * l_Drv1IstpTm 0 = l_CVDsvdFuelByIs  0
00:01:04.030 VDM[302] Info (vdm_eem_calc.c:1556 VDM_UpdateCVD_SvdFuelByIS) prevIGnCycle HVDSvdFuelByIs >>  0 l_HVDsvdFuelByIs >>  0
00:01:04.038 BLM_SETTINGS[374] Warn (settings_service_funs.cpp:8631 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:01:04.038 BLM_SETTINGS[374] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/Headlights/AFS <!> Value is not in range
00:01:04.046 BLM_SETTINGS[374] Warn (settings_service_funs.cpp:8631 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:01:04.046 BLM_SETTINGS[374] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/ForwardDetection/DriverAlert <!> Value is not in range
00:01:04.046 BLM_SETTINGS[374] Info (settings_vbs_interface.cpp:2262 BLM_SETTINGS_RBCM_Status_Notification_cb) RBCM Status notification received type - 0 value - 1
00:01:04.046 BLM_SETTINGS[374] Info (settings_vbs_interface.cpp:2292 BLM_SETTINGS_RBCM_Status_Notification_cb) RBCM Status notification received type - 1 value - 1
00:01:04.046 BLM_SETTINGS[374] Info (settings_vbs_interface.cpp:2297 BLM_SETTINGS_RBCM_Status_Notification_cb) RBCM Status notification received type - 2 value - 3
00:01:04.046 BLM_SETTINGS[374] Info (settings_vbs_interface.cpp:2302 BLM_SETTINGS_RBCM_Status_Notification_cb) RBCM Status notification received type - 3 value - 2
00:01:04.046 BLM_SETTINGS[374] Info (settings_vbs_interface.cpp:2307 BLM_SETTINGS_RBCM_Status_Notification_cb) RBCM Status notification received type - 4 value - 2
00:01:04.046 BLM_SETTINGS[374] Info (settings_vbs_interface.cpp:2312 BLM_SETTINGS_RBCM_Status_Notification_cb) RBCM Status notification received type - 5 value - 0
00:01:04.046 BLM_SETTINGS[374] Info (settings_vbs_interface.cpp:2322 BLM_SETTINGS_RBCM_Status_Notification_cb) RBCM Status notification received type - 6 value - 0
00:01:04.046 BLM_SETTINGS[374] Info (settings_vbs_interface.cpp:2317 BLM_SETTINGS_RBCM_Status_Notification_cb) RBCM Status notification received type - 7 value - 0
00:01:04.046 BLM_SETTINGS[374] Info (settings_vbs_interface.cpp:2277 BLM_SETTINGS_RBCM_Status_Notification_cb) RBCM Status notification received type - 8 value - 0
00:01:04.049 BLM_SETTINGS[374] Info (settings_vbs_interface.cpp:2328 BLM_SETTINGS_RBCM_Status_Notification_cb) RBCM Status notification received type - 10 value - 0
00:01:04.049 BLM_SETTINGS[374] Info (settings_vbs_interface.cpp:2333 BLM_SETTINGS_RBCM_Status_Notification_cb) RBCM Status notification received type - 11 value - 0
00:01:04.049 BLM_SETTINGS[374] Info (settings_vbs_interface.cpp:2338 BLM_SETTINGS_RBCM_Status_Notification_cb) RBCM Status notification received type - 12 value - 0
00:01:04.082 VBS_BUS_VDT[302] Warn (mod_vdt.c:1664 VBS_VDT_ReceiveHandler) Invalid Group Received
00:01:04.083 VBS_BUS_VDT[302] Warn (mod_vdt.c:1664 VBS_VDT_ReceiveHandler) Invalid Group Received
00:01:04.084 VBS_BUS_VDT[302] Warn (mod_vdt.c:1664 VBS_VDT_ReceiveHandler) Invalid Group Received
00:01:04.086 VDM[302] Info (vdm_idm_calc.c:5907 VDM_Update_Can_missing_10s) CAN MISSING 10 SEC = 0
00:01:04.086 VBS_BUS_VDT[302] Warn (mod_vdt.c:1664 VBS_VDT_ReceiveHandler) Invalid Group Received
00:01:04.125 BLM_SETTINGS[374] Warn (settings_service_funs.cpp:8589 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:01:04.125 BLM_SETTINGS[374] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/SafetyConvenience/AutoWiper <!> Value is not in range
00:01:04.131 BLM_SETTINGS[374] Warn (settings_service_funs.cpp:8631 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:01:04.131 BLM_SETTINGS[374] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/Headlights/HBC_AutoSensitivity <!> Value is not in range
00:01:04.139 BLM_SETTINGS[374] Warn (settings_service_funs.cpp:8589 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:01:04.139 BLM_SETTINGS[374] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/Headlights/DRL <!> Value is not in range
00:01:04.147 BLM_SETTINGS[374] Warn (settings_service_funs.cpp:8631 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:01:04.147 BLM_SETTINGS[374] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/SafetyConvenience/AutoDoorLockMT <!> Value is not in range
00:01:04.152 BLM_SETTINGS[374] Warn (settings_service_funs.cpp:8631 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:01:04.152 BLM_SETTINGS[374] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/Headlights/HBC_ComingHomeLightsTimer <!> Value is not in range
00:01:04.158 BLM_SETTINGS[374] Warn (settings_service_funs.cpp:8631 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:01:04.158 BLM_SETTINGS[374] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/Headlights/HBC_LeavingHomeLights <!> Value is not in range
00:01:04.166 BLM_SETTINGS[374] Warn (settings_service_funs.cpp:8631 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:01:04.166 BLM_SETTINGS[374] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/SafetyConvenience/DoorLockModeAT6 <!> Value is not in range
00:01:04.376 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:01:04.415 VBS_BUS_DIAG[302] Info (mod_diag.c:375 ReceiveHandler) Received GCC Config Management at MOD_DIAG: CMU TYPES  is: 2 driveChart_Log_Distance:0 destination_1 :0 destination_2:0 driveChart_Display:0 driveChart_DataTrans:0 myDoctor_Display:0 driverIdentification:0 stDis_IDM_Req:0 endDis_IDM_Req:0 stDis_Eco_Req:1 endDis_Eco_Req:1 custmzDisp_SW:2
00:01:04.415 VBS_BUS_DIAG[302] Info (mod_diag_manage_svc.c:2847 VBS_SendSignal_GCC_ConfigMgmtResp) Received GCC Config Management at MOD_DIAG:Destination is:2  CMU TYPES  is: 2 driveChart_Log_Distance:0 destination_1 :0 destination_2:0 driveChart_Display:0 driveChart_DataTrans:0 myDoctor_Display:0 driverIdentification:0 stDis_IDM_Req:0 endDis_IDM_Req:0 stDis_Eco_Req:1 endDis_Eco_Req:1 custmzDisp_SW:2
00:01:04.417 DIAG[521] Info (testdiag_vbs_interface.c:1073 TESTDIAG_VehicleInfoData_Response_cb) TESTDIAG:Received Vehicle Info data:-- Destination: 2, CMU Type: 2 driveChart_Log_Distance:0 destination_1:0 destination_2:0 driveChart_Display:0 driveChart_DataTrans:0 myDoctor_Display:0 ,driverIdentification:0 stDis_IDM_Req:0 endDis_IDM_Req:0 stDis_Eco_Req:1 endDis_Eco_Req:1 custmzDisp_SW:2
00:01:04.417 VBS_BUS_DRVIDIDM[302] Warn (mod_drvididm.c:335 VBS_MOD_DRVIDIDM_ReceiveHandler) Transmission of signal VBS_DRVIDIDM_Send_StDis_IDM_Req failed
00:01:04.417 VBS_BUS_DRVIDIDM[302] Warn (mod_drvididm.c:342 VBS_MOD_DRVIDIDM_ReceiveHandler) Transmission of signal VBS_DRVIDIDM_Send_EndDis_IDM_Req failed
00:01:04.716 DIAG[521] Info (testdiag_vbs_interface.c:4655 TESTDIAG_NAVI_VINNumber_Response_cb) got VIN from signal: JM1BM1T79G1319820
00:01:04.716 USBDTC[523] Info (usbdtcvbuspwrctrl.cpp:723 VINDataUpdate_cb) VIN data 'JM1BM1T79G1319820' length=17
00:01:04.716 BLM_SETTINGS[374] Info (settings_vbs_interface.cpp:3082 BLM_SETTINGS_Vehicle_VIN_Notification) Vehicle VIN notification received [JM1BM1T79G1319820][19]
00:01:04.718 BLM_SETTINGS[374] Info (settings_vbs_interface.cpp:3030 BLM_SETTINGS_Vehicle_VIN_Notification_cb) Vehicle VIN notification received [JM1BM1T79G1319820]
00:01:04.718 BLM_SETTINGS[374] Info (settings_vbs_interface.cpp:3037 BLM_SETTINGS_Vehicle_VIN_Notification_cb) Vehicle VIN notification received [JM1BM1T79G1319820]
00:01:04.879 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:01:04.896 CPP_TIME[302] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa5460 : dbus 0xa5ba8 : name com.jci.modvdt2cpptime
00:01:04.900 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:04.917 CPP_TIME[302] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa5460 : dbus 0xa5ba8 : name com.jci.modvdt2cpptime
00:01:04.917 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:04.937 BLM_SETTINGS[374] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
00:01:05.102 VBS_BUS_CAN[302] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:01:05.103 VBS_BUS_CAN[302] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:01:05.103 VBS_BUS_CAN[302] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:01:05.103 VBS_BUS_CAN[302] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:01:05.313 VBS_BUS_DIAG[302] Info (mod_diag.c:331 ReceiveHandler) Received GCC Config Management at MOD_DIAG: destination is: 2
00:01:05.313 VBS_BUS_DIAG[302] Info (mod_diag_manage_svc.c:2847 VBS_SendSignal_GCC_ConfigMgmtResp) Received GCC Config Management at MOD_DIAG:Destination is:2  CMU TYPES  is: 2 driveChart_Log_Distance:0 destination_1 :0 destination_2:0 driveChart_Display:0 driveChart_DataTrans:0 myDoctor_Display:0 driverIdentification:0 stDis_IDM_Req:0 endDis_IDM_Req:0 stDis_Eco_Req:1 endDis_Eco_Req:1 custmzDisp_SW:2
00:01:05.313 VBS_BUS_BCM[302] Info (mod_bcm_manage_svc.c:951 VBS_BCM_Send_CarSpeedThreshold) Speed Restrict successfully posted on HMI DBus for NA/Japan with restrict = 0
00:01:05.313 VBS_BUS_BCM[302] Info (mod_bcm_manage_svc.c:962 VBS_BCM_Send_CarSpeedThreshold) Speed Restrict successfully posted on Service DBus for NA/Japan with restrict = 0
00:01:05.315 DIAG[521] Info (testdiag_vbs_interface.c:1073 TESTDIAG_VehicleInfoData_Response_cb) TESTDIAG:Received Vehicle Info data:-- Destination: 2, CMU Type: 2 driveChart_Log_Distance:0 destination_1:0 destination_2:0 driveChart_Display:0 driveChart_DataTrans:0 myDoctor_Display:0 ,driverIdentification:0 stDis_IDM_Req:0 endDis_IDM_Req:0 stDis_Eco_Req:1 endDis_Eco_Req:1 custmzDisp_SW:2
00:01:05.381 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:01:05.884 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:01:05.929 CPP_TIME[302] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa5460 : dbus 0xa5ba8 : name com.jci.modvdt2cpptime
00:01:05.937 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:05.948 CPP_TIME[302] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa5460 : dbus 0xa5ba8 : name com.jci.modvdt2cpptime
00:01:05.948 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:06.072 VBS_BUS_VDT[302] Warn (mod_vdt.c:1608 VBS_VDT_ReceiveHandler) Invalid Group Received
00:01:06.075 VBS_BUS_VDT[302] Warn (mod_vdt.c:1608 VBS_VDT_ReceiveHandler) Invalid Group Received
00:01:06.076 VBS_BUS_VDT[302] Warn (mod_vdt.c:1608 VBS_VDT_ReceiveHandler) Invalid Group Received
00:01:06.386 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:01:06.889 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:01:06.958 CPP_TIME[302] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa5460 : dbus 0xa5ba8 : name com.jci.modvdt2cpptime
00:01:06.961 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:06.976 CPP_TIME[302] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa5460 : dbus 0xa5ba8 : name com.jci.modvdt2cpptime
00:01:06.976 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:07.000 BLM_TIME[499] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:01:07.003 BLM_TIME[499] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:01:07.096 VBS_BUS_CAN[302] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:01:07.096 VBS_BUS_CAN[302] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:01:07.096 VBS_BUS_CAN[302] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:01:07.096 VBS_BUS_CAN[302] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:01:07.391 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:01:07.395 GUI_FRAMEWORK[593] Warn (Websockets.js:160 ) Websockets retry limit reached. Now testing offline.
00:01:07.395 GUI_FRAMEWORK[593] Info (GuiFramework.js:272 ) * * * * * GUI is ready.  Sending Global.GetStartupSettings event to MMUI. * * * * *
00:01:07.396 GUI_FRAMEWORK[593] Error (Websockets.js:557 ) Failed to send MMUI message because websocket is closed: {"msgType":"event","eventId":"Global.GetStartupSettings","uiaId":"common","params":"{}","fromVui":false,"currentUiaId":"","currentContextId":""}
00:01:07.893 GUI_FRAMEWORK[593] Warn (Websockets.js:256 ) Websockets retry limit reached. Now in offline mode.
00:01:07.894 GUI_FRAMEWORK[593] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:01:07.894 GUI_FRAMEWORK[593] Warn (Websockets.js:236 ) MMUI websocket closed or could not be opened.
00:01:07.895 GUI_FRAMEWORK[593] Warn (Websockets.js:237 )    e.wasClean: false
00:01:07.895 GUI_FRAMEWORK[593] Warn (Websockets.js:238 )    e.reason:
00:01:07.895 GUI_FRAMEWORK[593] Warn (Websockets.js:239 )    e.code: 1005
00:01:07.896 GUI_FRAMEWORK[593] Error (GuiFramework.js:2607 ) * * * * FATAL ERROR - RESTARTING CMU : MMUI websocket crash
00:01:07.896 GUI_MANAGER[593] Critical (guiManager.c:255 vp_forceExit) CALLING TERMINATE !
00:01:07.908 OPERA_MAIN[593] Error (OperaDBUSService.cpp:174 OPERA_IHU_TerminateOpera_svc) GUI or OPERA PLUGIN requested terminate! - Watchdog disabled - ignore the call
00:01:07.985 CPP_TIME[302] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa5460 : dbus 0xa5ba8 : name com.jci.modvdt2cpptime
00:01:07.992 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:08.006 CPP_TIME[302] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa5460 : dbus 0xa5ba8 : name com.jci.modvdt2cpptime
00:01:08.006 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:08.073 VBS_BUS_CAN[302] Info (mod_can_public.c:5908 VBS_BUS_CAN_IgnitionStatus_5Sec_Status) Value of VWM_IGNITION_STATUS_5_PID --- 4
00:01:08.076 VBS_BUS_VDT[302] Info (mod_vdt.c:1980 VBS_VDT_ReceiveHandler) VDT_CAN_MISSING_MASK = 00 0c 47 80 0e 02 23
00:01:08.336 VBS_BUS_SETTINGS[302] Info (mod_settings.c:1343 VBS_SETTINGS_ReceiveHandler) Received HUD Tilt Level Notification set or timed out value = 1
00:01:08.336 VBS_BUS_SETTINGS[302] Info (mod_settings_manage_svc.c:9410 VBS_SETTINGS_HUDTiltLvlStatusNotification) Sending the HUDTiltLvlStatus signal on dbus with status = 1
00:01:09.019 CPP_TIME[302] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa5460 : dbus 0xa5ba8 : name com.jci.modvdt2cpptime
00:01:09.019 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:09.031 CPP_TIME[302] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa5460 : dbus 0xa5ba8 : name com.jci.modvdt2cpptime
00:01:09.031 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:09.101 VBS_BUS_CAN[302] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:01:09.101 VBS_BUS_CAN[302] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:01:09.101 VBS_BUS_CAN[302] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:01:09.101 VBS_BUS_CAN[302] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:01:10.000 BLM_TIME[499] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:01:10.000 BLM_TIME[499] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:01:10.054 CPP_TIME[302] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa5460 : dbus 0xa5ba8 : name com.jci.modvdt2cpptime
00:01:10.054 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:10.062 CPP_TIME[302] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa5460 : dbus 0xa5ba8 : name com.jci.modvdt2cpptime
00:01:10.062 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:11.082 CPP_TIME[302] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa5460 : dbus 0xa5ba8 : name com.jci.modvdt2cpptime
00:01:11.086 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:11.101 VBS_BUS_CAN[302] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:01:11.101 VBS_BUS_CAN[302] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:01:11.101 VBS_BUS_CAN[302] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:01:11.101 VBS_BUS_CAN[302] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:01:11.101 CPP_TIME[302] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa5460 : dbus 0xa5ba8 : name com.jci.modvdt2cpptime
00:01:11.101 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:12.123 CPP_TIME[302] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa5460 : dbus 0xa5ba8 : name com.jci.modvdt2cpptime
00:01:12.129 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:12.139 CPP_TIME[302] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa5460 : dbus 0xa5ba8 : name com.jci.modvdt2cpptime
00:01:12.139 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:13.000 BLM_TIME[499] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:01:13.002 BLM_TIME[499] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:01:13.125 VBS_BUS_CAN[302] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:01:13.125 VBS_BUS_CAN[302] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:01:13.125 VBS_BUS_CAN[302] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:01:13.125 VBS_BUS_CAN[302] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:01:13.152 CPP_TIME[302] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa5460 : dbus 0xa5ba8 : name com.jci.modvdt2cpptime
00:01:13.155 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:13.166 CPP_TIME[302] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa5460 : dbus 0xa5ba8 : name com.jci.modvdt2cpptime
00:01:13.166 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:14.183 CPP_TIME[302] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa5460 : dbus 0xa5ba8 : name com.jci.modvdt2cpptime
00:01:14.192 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:14.204 CPP_TIME[302] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa5460 : dbus 0xa5ba8 : name com.jci.modvdt2cpptime
00:01:14.204 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:15.123 VBS_BUS_CAN[302] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:01:15.123 VBS_BUS_CAN[302] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:01:15.123 VBS_BUS_CAN[302] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:01:15.123 VBS_BUS_CAN[302] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:01:15.219 CPP_TIME[302] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa5460 : dbus 0xa5ba8 : name com.jci.modvdt2cpptime
00:01:15.222 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:15.234 CPP_TIME[302] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa5460 : dbus 0xa5ba8 : name com.jci.modvdt2cpptime
00:01:15.234 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:16.000 BLM_TIME[499] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:01:16.002 BLM_TIME[499] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:01:16.245 CPP_TIME[302] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa5460 : dbus 0xa5ba8 : name com.jci.modvdt2cpptime
00:01:16.252 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:16.261 CPP_TIME[302] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa5460 : dbus 0xa5ba8 : name com.jci.modvdt2cpptime
00:01:16.261 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:17.123 VBS_BUS_CAN[302] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:01:17.123 VBS_BUS_CAN[302] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:01:17.123 VBS_BUS_CAN[302] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:01:17.123 VBS_BUS_CAN[302] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:01:17.278 CPP_TIME[302] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa5460 : dbus 0xa5ba8 : name com.jci.modvdt2cpptime
00:01:17.286 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:17.286 GUI_MANAGER[593] Critical (guiManager.c:391 OnHeartbeatMissed) GUI didn't send any heartbeat for 10 seconds. Closing Opera.
00:01:17.291 OPERA_MAIN[593] Error (OperaDBUSService.cpp:174 OPERA_IHU_TerminateOpera_svc) GUI or OPERA PLUGIN requested terminate! - Watchdog disabled - ignore the call
00:01:17.304 CPP_TIME[302] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa5460 : dbus 0xa5ba8 : name com.jci.modvdt2cpptime
00:01:17.304 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:18.316 CPP_TIME[302] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa5460 : dbus 0xa5ba8 : name com.jci.modvdt2cpptime
00:01:18.323 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:18.331 CPP_TIME[302] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa5460 : dbus 0xa5ba8 : name com.jci.modvdt2cpptime
00:01:18.331 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:19.000 BLM_TIME[499] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:01:19.002 BLM_TIME[499] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:01:19.123 VBS_BUS_CAN[302] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:01:19.123 VBS_BUS_CAN[302] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:01:19.123 VBS_BUS_CAN[302] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:01:19.123 VBS_BUS_CAN[302] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:01:19.345 CPP_TIME[302] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa5460 : dbus 0xa5ba8 : name com.jci.modvdt2cpptime
00:01:19.348 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:19.359 CPP_TIME[302] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa5460 : dbus 0xa5ba8 : name com.jci.modvdt2cpptime
00:01:19.359 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:20.371 CPP_TIME[302] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa5460 : dbus 0xa5ba8 : name com.jci.modvdt2cpptime
00:01:20.378 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:20.389 CPP_TIME[302] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa5460 : dbus 0xa5ba8 : name com.jci.modvdt2cpptime
00:01:20.389 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:21.124 VBS_BUS_CAN[302] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:01:21.124 VBS_BUS_CAN[302] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:01:21.124 VBS_BUS_CAN[302] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:01:21.124 VBS_BUS_CAN[302] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:01:21.402 CPP_TIME[302] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa5460 : dbus 0xa5ba8 : name com.jci.modvdt2cpptime
00:01:21.410 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:21.421 CPP_TIME[302] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa5460 : dbus 0xa5ba8 : name com.jci.modvdt2cpptime
00:01:21.421 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:22.000 BLM_TIME[499] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:01:22.002 BLM_TIME[499] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:01:22.432 CPP_TIME[302] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa5460 : dbus 0xa5ba8 : name com.jci.modvdt2cpptime
00:01:22.436 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:22.449 CPP_TIME[302] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa5460 : dbus 0xa5ba8 : name com.jci.modvdt2cpptime
00:01:22.449 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:23.124 VBS_BUS_CAN[302] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:01:23.124 VBS_BUS_CAN[302] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:01:23.124 VBS_BUS_CAN[302] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:01:23.124 VBS_BUS_CAN[302] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:01:23.461 CPP_TIME[302] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa5460 : dbus 0xa5ba8 : name com.jci.modvdt2cpptime
00:01:23.464 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:23.476 CPP_TIME[302] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa5460 : dbus 0xa5ba8 : name com.jci.modvdt2cpptime
00:01:23.476 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:24.487 CPP_TIME[302] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa5460 : dbus 0xa5ba8 : name com.jci.modvdt2cpptime
00:01:24.493 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:24.506 CPP_TIME[302] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa5460 : dbus 0xa5ba8 : name com.jci.modvdt2cpptime
00:01:24.506 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:25.000 BLM_TIME[499] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:01:25.003 BLM_TIME[499] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:01:25.124 VBS_BUS_CAN[302] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:01:25.124 VBS_BUS_CAN[302] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:01:25.124 VBS_BUS_CAN[302] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:01:25.124 VBS_BUS_CAN[302] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:01:25.517 CPP_TIME[302] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa5460 : dbus 0xa5ba8 : name com.jci.modvdt2cpptime
00:01:25.523 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:25.532 CPP_TIME[302] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa5460 : dbus 0xa5ba8 : name com.jci.modvdt2cpptime
00:01:25.532 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:26.549 CPP_TIME[302] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa5460 : dbus 0xa5ba8 : name com.jci.modvdt2cpptime
00:01:26.552 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:26.568 CPP_TIME[302] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa5460 : dbus 0xa5ba8 : name com.jci.modvdt2cpptime
00:01:26.568 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:27.127 VBS_BUS_CAN[302] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:01:27.127 VBS_BUS_CAN[302] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:01:27.127 VBS_BUS_CAN[302] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:01:27.127 VBS_BUS_CAN[302] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:01:27.396 GUI_FRAMEWORK[593] Error (GuiFramework.js:282 ) SYS_SETTINGS app didn't set all required values before timeout. CPP_GUIFWK is issuing initGui with necessary default values.
00:01:27.396 GUI_FRAMEWORK[593] Warn (GuiFramework.js:288 ) SYS_SETTINGS app didn't set region, using Region_NorthAmerica
00:01:27.397 GUI_FRAMEWORK[593] Warn (GuiFramework.js:298 ) SYS_SETTINGS app didn't set keybaord language, using en_US
00:01:27.397 GUI_FRAMEWORK[593] Warn (GuiFramework.js:303 ) SYS_SETTINGS app didn't set time format, using 12hrs
00:01:27.398 GUI_FRAMEWORK[593] Warn (GuiFramework.js:308 ) SYS_SETTINGS app didn't set temperature unit, using Fahrenheit
00:01:27.398 GUI_FRAMEWORK[593] Warn (GuiFramework.js:313 ) SYS_SETTINGS app didn't set ditance unit, using Miles
00:01:27.398 GUI_FRAMEWORK[593] Warn (GuiFramework.js:318 ) SYS_SETTINGS app didn't set VehicleType, using J36
00:01:27.398 GUI_FRAMEWORK[593] Info (GuiFramework.js:331 ) * * * * * GUI Settings are received  Sending Global.InitGui event to MMUI. * * * * *
00:01:27.399 GUI_FRAMEWORK[593] Error (Websockets.js:557 ) Failed to send MMUI message because websocket is closed: {"msgType":"event","eventId":"Global.InitGui","uiaId":"common","params":"{}","fromVui":false,"currentUiaId":"","currentContextId":""}
00:01:27.402 GUI_FRAMEWORK[593] Info (Websockets.js:269 ) Websockets.initGui now flushing queue with 0 non-startup messages.
00:01:27.582 CPP_TIME[302] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa5460 : dbus 0xa5ba8 : name com.jci.modvdt2cpptime
00:01:27.590 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:27.603 CPP_TIME[302] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa5460 : dbus 0xa5ba8 : name com.jci.modvdt2cpptime
00:01:27.603 CPP_TIME[432] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:28.001 BLM_TIME[499] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:01:28.002 BLM_TIME[499] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
```
<style>
.main-content pre > code {
  color:#0dff86;
}
.main-content.wrapper {
    max-width: 100%;
    height: 100%;
    max-height: 800px;
}
.main-content .highlight {
    max-width: 100%;
    height: 100%;
    max-height: 800px;
    overflow:auto;
}
</style>

<script>
var paragrapgh = $('code').get(0);
var errs = paragrapgh.innerText.split("] Error (").join("]<span style='color: red;'> Error </span>("); // here I am spliting words by Error
errs = errs.split("] Note (").join("]<span style='color: #4dffc7;'> Note </span>(");
errs = errs.split("] Debug (").join("]<span style='color: #a34dff;'> Debug </span>(");
errs = errs.split("] Warn (").join("]<span style='color: yellow;'> Warn </span>(");
errs = errs.split("] Critical (").join("]<span style='color: #ff6c00;'> Critical </span>(");
paragrapgh.innerHTML = errs;

/*
var words = paragrapgh.innerText.split(" "); // here I am spliting words by space i.e tokenizing it
var colors = ["red","green","blue","pink", "gold", "yellow", "blueviolet"];
var spans = [];
for(var x = 0; x < errs.length; x++){
    var span = errs[x] + "<span style='color: red;'>Error</span>" ;
    spans.push(span);
}
for(var x = 0; x < words.length; x++){
    var color = colors[Math.floor(Math.random()*colors.length)] // geting random color from array;
    var span = "<span style='background-color: " + color + ";'>" + words[x] + "</span>"

    spans.push(span);
}
*/

// setting colored spans as paragraph HTML
</script>
