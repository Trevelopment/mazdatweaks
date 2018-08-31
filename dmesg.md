---
layout: default
permalink: /serial/dmesg/
---

## Serial Output:
### dmesg

```
=~=~=~=~=~=~=~=~=~=~=~= PuTTY log 2018.08.30 14:24:47 =~=~=~=~=~=~=~=~=~=~=~=
[    0.000000] Linux version 3.0.35 (bsp@jci) (gcc version 4.5.2 20101026 (prerelease) (GCC) ) #1 SMP PREEMPT Sun Mar 15 10:12:10 IST 2015
[    0.000000] CPU: ARMv7 Processor [412fc09a] revision 10 (ARMv7), cr=10c53c7d
[    0.000000] CPU: VIPT nonaliasing data cache, VIPT aliasing instruction cache
[    0.000000] Machine: JCI i.MX 6Quad Core CMU Board
[    0.000000] Memory policy: ECC disabled, Data cache writealloc
[    0.000000] CPU identified as i.MX6Q, silicon rev 1.2
[    0.000000] On node 0 totalpages: 196608
[    0.000000] free_area_init_node: node 0, pgdat 804689a0, node_mem_map 8b800000
[    0.000000]   DMA zone: 368 pages used for memmap
[    0.000000]   DMA zone: 0 pages reserved
[    0.000000]   DMA zone: 46736 pages, LIFO batch:15
[    0.000000]   Normal zone: 1680 pages used for memmap
[    0.000000]   Normal zone: 147824 pages, LIFO batch:31
[    0.000000] PERCPU: Embedded 7 pages/cpu @8c008000 s4736 r8192 d15744 u32768
[    0.000000] pcpu-alloc: s4736 r8192 d15744 u32768 alloc=8*4096
[    0.000000] pcpu-alloc: [0] 0 [0] 1
[    0.000000] Built 1 zonelists in Zone order, mobility grouping on.  Total pages: 194560
[    0.000000] Kernel command line: console=ttymxc1,115200 lpj=8495104 ldb=sin0 loglevel=3 usbcore.authorized_default=0 panic=23 mxc_vpu_mempool.max_instances=3 ibc=1.68.8 ibs=1.68.8 BOOTSEL=1 ibcinfo=0x00928000
[    0.000000] PID hash table entries: 4096 (order: 2, 16384 bytes)
[    0.000000] Dentry cache hash table entries: 131072 (order: 7, 524288 bytes)
[    0.000000] Inode-cache hash table entries: 65536 (order: 6, 262144 bytes)
[    0.000000] Memory: 512MB 256MB = 768MB total
[    0.000000] Memory: 770704k/770704k available, 277872k reserved, 0K highmem
[    0.000000] Virtual kernel memory layout:
[    0.000000]     vector  : 0xffff0000 - 0xffff1000   (   4 kB)
[    0.000000]     fixmap  : 0xfff00000 - 0xfffe0000   ( 896 kB)
[    0.000000]     DMA     : 0xf4600000 - 0xffe00000   ( 184 MB)
[    0.000000]     vmalloc : 0xc0800000 - 0xf2000000   ( 792 MB)
[    0.000000]     lowmem  : 0x80000000 - 0xc0000000   (1024 MB)
[    0.000000]     modules : 0x7f000000 - 0x80000000   (  16 MB)
[    0.000000]       .init : 0x80008000 - 0x80040000   ( 224 kB)
[    0.000000]       .text : 0x80040000 - 0x80440000   (4096 kB)
[    0.000000]       .data : 0x80440000 - 0x8046a1a0   ( 169 kB)
[    0.000000]        .bss : 0x8046a1c4 - 0x80500080   ( 600 kB)
[    0.000000] SLUB: Genslabs=13, HWalign=32, Order=0-3, MinObjects=0, CPUs=2, Nodes=1
[    0.000000] Preemptible hierarchical RCU implementation.
[    0.000000] 	Verbose stalled-CPUs detection is disabled.
[    0.000000] NR_IRQS:496 nr_irqs:496 496
[    0.000000] MXC GPIO hardware
[    0.000000] Init and register the timer to the framework with an 603128000 ns offset.
[    0.000000] sched_clock: 32 bits at 3000kHz, resolution 333ns, wraps every 1431655ms
[    0.000000] arm_max_freq=2
[    0.000000] MXC_Early serial console at MMIO 0x21e8000 (options '115200')
[    0.000000] bootconsole [ttymxc1] enabled
[    0.000000] Console: colour dummy device 80x30
[    0.603544] Calibrating delay loop (skipped) preset value.. 1699.02 BogoMIPS (lpj=8495104)
[    0.603573] pid_max: default: 32768 minimum: 301
[    0.603962] Mount-cache hash table entries: 512
[    0.604964] CPU: Testing write buffer coherency: ok
[    0.605030] ftrace: allocating 13083 entries in 39 pages
[    0.712560] CPU1: Booted secondary processor
[    0.712657] Brought up 2 CPUs
[    0.712677] SMP: Total of 2 processors activated (3398.04 BogoMIPS).
[    0.713261] devtmpfs: initialized
[    0.740706] print_constraints: dummy:
[    0.741092] NET: Registered protocol family 16
[    0.743080] print_constraints: vddpu: 725 <--> 1300 mV at 1225 mV fast normal
[    0.743358] print_constraints: vddcore: 725 <--> 1300 mV at 1225 mV fast normal
[    0.743615] print_constraints: vddsoc: 725 <--> 1300 mV at 1225 mV fast normal
[    0.743910] print_constraints: vdd2p5: 2000 <--> 2775 mV at 2400 mV fast normal
[    0.744175] print_constraints: vdd1p1: 800 <--> 1400 mV at 1100 mV fast normal
[    0.744460] print_constraints: vdd3p0: 2625 <--> 3400 mV at 3000 mV fast normal
[    0.745666] SET_GPIO4_28 to 1
[    0.746111] cpu regulator init ldo=0
[    0.746685] am335xevm: shared transport platform init
[    0.753248] SET_GPIO4_28 to 0
[    0.753282] L310 cache controller enabled
[    0.753298] l2x0: 16 ways, CACHE_ID 0x410000c7, AUX_CTRL 0x02070000, Cache size: 1048576 B
[    0.757911] bio: create slab <bio-0> at 0
[    0.760289] mxs-dma mxs-dma-apbh: initialized
[    0.760900] SCSI subsystem initialized
[    0.761308] spi_imx imx6q-ecspi.0: probed
[    0.761671] spi_imx imx6q-ecspi.1: probed
[    0.762034] spi_imx imx6q-ecspi.3: probed
[    0.762416] usbcore: registered new interface driver usbfs
[    0.762500] usbcore: registered new interface driver hub
[    0.762628] usbcore: registered new device driver usb
[    0.762641] Freescale USB OTG Driver loaded, $Revision: 1.55 $
[    0.782087] imx-ipuv3 imx-ipuv3.0: IPU DMFC NORMAL mode: 1(0~1), 5B(4,5), 5F(6,7)
[    0.802064] imx-ipuv3 imx-ipuv3.1: IPU DMFC NORMAL mode: 1(0~1), 5B(4,5), 5F(6,7)
[    0.802421] Advanced Linux Sound Architecture Driver Version 1.0.24.
[    0.884230] Switching to clocksource mxc_timer1
[    0.907483] NET: Registered protocol family 2
[    0.907897] IP route cache hash table entries: 32768 (order: 5, 131072 bytes)
[    0.909398] TCP established hash table entries: 131072 (order: 8, 1048576 bytes)
[    0.911259] TCP bind hash table entries: 65536 (order: 7, 786432 bytes)
[    0.912351] TCP: Hash tables configured (established 131072 bind 65536)
[    0.912366] TCP reno registered
[    0.912384] UDP hash table entries: 512 (order: 2, 16384 bytes)
[    0.912424] UDP-Lite hash table entries: 512 (order: 2, 16384 bytes)
[    0.912995] NET: Registered protocol family 1
[    0.913348] Unpacking initramfs...
[    1.035893] Freeing initrd memory: 1528K
[    1.036629] Static Power Management for Freescale i.MX6
[    1.036642] wait mode is enabled for i.MX6
[    1.036762] cpaddr = c0880000 suspend_iram_base=c08e8000
[    1.036860] PM driver module loaded
[    1.037068] IMX usb wakeup probe
[    1.037262] the wakeup pdata is 0xbfe6ed40
[    1.037613] add wake up source irq 75
[    1.040969] cpu regulator init ldo=0
[    1.041044] i.MXC CPU frequency driver
[    1.061299] msgmni has been set to 1508
[    1.064400] io scheduler noop registered (default)
[    1.064791] mxc_sdc_fb mxc_sdc_fb.0: register mxc display driver ldb
[    1.094937] imx-sdma imx-sdma: loaded firmware 1.1
[    1.098529] imx-sdma imx-sdma: initialized
[    1.098877] Serial: IMX driver
[    1.098984] imx-uart imx-uart.0: Enable IRTS and CTSC
[    1.099008] imx-uart.0: ttymxc0 at MMIO 0x2020000 (irq = 58) is a IMX
[    1.099225] imx-uart imx-uart.1: Enable IRTS and CTSC
[    1.099248] imx-uart.1: ttymxc1 at MMIO 0x21e8000 (irq = 59) is a IMX
[    1.099289] console [ttymxc1] enabled, bootconsole disabled
[    1.099504] imx-uart imx-uart.2: Enable IRTS and CTSC
[    1.099525] imx-uart.2: ttymxc2 at MMIO 0x21ec000 (irq = 60) is a IMX
[    1.099740] imx-uart imx-uart.3: CTS Trigger Level: 24
[    1.099756] imx-uart imx-uart.3: RX Trigger Level: 16
[    1.099775] imx-uart.3: ttymxc3 at MMIO 0x21f0000 (irq = 61) is a IMX
[    1.099988] imx-uart imx-uart.4: Enable IRTS and CTSC
[    1.100009] imx-uart.4: ttymxc4 at MMIO 0x21f4000 (irq = 62) is a IMX
[    1.103636] m25p80 spi0.0: found mx25l6405d, expected s25fl064p
[    1.103656] m25p80 spi0.0: mx25l6405d (8192 Kbytes)
[    1.103672] Creating 9 MTD partitions on "m25p80":
[    1.103690] 0x000000000000-0x000000010000 : "bootstrap"
[    1.104647] 0x000000010000-0x000000020000 : "boot-select"
[    1.105519] 0x000000020000-0x000000040000 : "ibc1"
[    1.106434] 0x000000040000-0x000000060000 : "ibc2"
[    1.107350] 0x000000060000-0x000000070000 : "nv-config"
[    1.108273] 0x000000070000-0x0000000d0000 : "config"
[    1.109204] 0x0000000d0000-0x0000000e0000 : "jci-boot-diag"
[    1.110122] 0x0000000e0000-0x0000007e0000 : "fail-safe"
[    1.111061] 0x0000007e0000-0x000000800000 : "update"
[    1.112476] Fixed MDIO Bus: probed
[    1.112500] Initializing USB Mass Storage driver...
[    1.112592] usbcore: registered new interface driver usb-storage
[    1.112605] USB Mass Storage support registered.
[    1.112617] i2c /dev entries driver
[    1.113129] Linux video capture interface: v2.00
[    1.144741] mxc_v4l2_output mxc_v4l2_output.0: V4L2 device registered as video16
[    1.144903] mxc_v4l2_output mxc_v4l2_output.0: V4L2 device registered as video17
[    1.145836] VPU initialized
[    1.145915] vpu_mempool_init: Configuring buffers for 3 instances
[    1.228323] ALSA device list:
[    1.228335]   No soundcards found.
[    1.229909] TCP cubic registered
[    1.229925] NET: Registered protocol family 17
[    1.229963] Registering the dns_resolver key type
[    1.230019] VFP support v0.3: implementor 41 architecture 3 part 30 variant 9 rev 4
[    1.230157] Bus freq driver module loaded
[    1.230167] Bus freq driver Enabled
[    1.230226] mxc_dvfs_core_probe
[    1.230379] DVFS driver module loaded
[    1.230810] registered taskstats version 1
[    1.238723] [000.00:00:01.227573336], com.jci.cpp.common, 1, init, 1, out, Trace.c, COMMON_Trace_start 417, Registered the driver
[    1.238926] [000.00:00:01.227781669], com.jci.cpp.common, 1, init, 1, out, Trace.c, platformDeviceProbe 347, Probing!
[    1.238960] [000.00:00:01.227818003], com.jci.cpp.common, 1, init, 1, out, Trace.c, platformDeviceProbe 370, Registered the device
[    1.238996] [000.00:00:01.227853669], com.jci.cpp.common, 1, init, 1, out, Trace.c, COMMON_Trace_start 423, Registered the device
[    1.239022] [000.00:00:01.227880003], com.jci.cpp.common, 1, init, 1, out, common.c, moduleInit 206, Started: 0
[    1.239179] [000.00:00:01.228035336], com.jci.cpp.common, 1, init, 1, out, Log.c, COMMON_Log_start 4155, Registered the driver
[    1.239344] [000.00:00:01.228200669], com.jci.cpp.common, 1, init, 1, out, Log.c, platformDeviceProbe 3338, Probing!
[    1.240963] [000.00:00:01.229813336], com.jci.cpp.common, 1, init, 1, out, Log.c, platformDeviceProbe 3381, Registered the device
[    1.241122] [000.00:00:01.229976669], com.jci.cpp.common, 1, init, 1, out, Log.c, platformDeviceProbe 3396, Created the worker
[    1.241187] [000.00:00:01.230042003], com.jci.cpp.common, 1, init, 1, out, Log.c, platformDeviceProbe 3403, The process was awoken: True (1)
[    1.241213] [000.00:00:01.230071670], com.jci.cpp.common, 1, init, 1, out, Log.c, platformDeviceProbe 3439, Probed!
[    1.241250] [000.00:00:01.230108336], com.jci.cpp.common, 1, init, 1, out, Log.c, COMMON_Log_start 4162, Registered the device
[    1.241283] [000.00:00:01.230138336], com.jci.cpp.common, 1, init, 1, out, common.c, moduleInit 206, Started: 1
[    1.248704]
[    1.248709] Device Registered: lvds_cdrv
[    1.248722] Major number = 250, Minor number = 0
[    1.248959] input: LVDS TouchScreen as /devices/virtual/input/input0
[    1.249510] Running do_deferred_initcalls()
[    1.249687] IMX usb wakeup probe
[    1.249831] the wakeup pdata is 0xbfb82680
[    1.250231] squashfs: version 4.0 (2009/01/31) Phillip Lougher
[    1.250246] ehci_hcd: USB 2.0 'Enhanced' Host Controller (EHCI) Driver
[    1.250494] fsl-ehci fsl-ehci.0: Freescale On-Chip EHCI Host Controller
[    1.250532] fsl-ehci fsl-ehci.0: new USB bus registered, assigned bus number 1
[    1.268644] Number of times open() was called: 1
[    1.268660] MAJOR number = 250, MINOR number = 0
[    1.268670] Process id of the current process: 61
[    1.268683] ref=1
[    1.271287] fsl-ehci fsl-ehci.0: irq 75, io base 0x02184000
[    1.285790] [U] [        1.243967336] - xsg v4lcapture - starting up
[    1.285823] [U] [        1.274340336] - xsg v4lcapture - streaming on
[    1.291427] fsl-ehci fsl-ehci.0: USB 2.0 started, EHCI 1.00
[    1.291573] usb usb1: New USB device found, idVendor=1d6b, idProduct=0002
[    1.291590] usb usb1: New USB device strings: Mfr=3, Product=2, SerialNumber=1
[    1.291604] usb usb1: Product: Freescale On-Chip EHCI Host Controller
[    1.291616] usb usb1: Manufacturer: Linux 3.0.35 ehci_hcd
[    1.291628] usb usb1: SerialNumber: fsl-ehci.0
[    1.292429] hub 1-0:1.0: USB hub found
[    1.292462] hub 1-0:1.0: 1 port detected
[    1.292838] add wake up source irq 72
[    1.292918] fsl-ehci fsl-ehci.1: Freescale On-Chip EHCI Host Controller
[    1.292954] fsl-ehci fsl-ehci.1: new USB bus registered, assigned bus number 2
[    1.321199] fsl-ehci fsl-ehci.1: irq 72, io base 0x02184200
[    1.341183] fsl-ehci fsl-ehci.1: USB 2.0 started, EHCI 1.00
[    1.341339] usb usb2: New USB device found, idVendor=1d6b, idProduct=0002
[    1.341356] usb usb2: New USB device strings: Mfr=3, Product=2, SerialNumber=1
[    1.341371] usb usb2: Product: Freescale On-Chip EHCI Host Controller
[    1.341383] usb usb2: Manufacturer: Linux 3.0.35 ehci_hcd
[    1.341394] usb usb2: SerialNumber: fsl-ehci.1
[    1.341969] hub 2-0:1.0: USB hub found
[    1.341999] hub 2-0:1.0: 1 port detected
[    1.342393] Thermal calibration data is 0x5644c57d
[    1.342406] Thermal sensor with ratio = 177
[    1.361181] Anatop Thermal registered as thermal_zone0
[    1.361389] anatop_thermal_probe: default cooling device is cpufreq!
[    1.487212] caam caam.0: device ID = 0x0a16010000000000
[    1.487228] caam caam.0: job rings = 2, qi = 0
[    1.487612] caam caam.0: authenc-hmac-md5-cbc-aes-caam
[    1.487738] caam caam.0: authenc-hmac-sha1-cbc-aes-caam
[    1.487869] caam caam.0: authenc-hmac-sha224-cbc-aes-caam
[    1.488009] caam caam.0: authenc-hmac-sha256-cbc-aes-caam
[    1.488169] caam caam.0: authenc-hmac-md5-cbc-des3_ede-caam
[    1.488305] caam caam.0: authenc-hmac-sha1-cbc-des3_ede-caam
[    1.488435] caam caam.0: authenc-hmac-sha224-cbc-des3_ede-caam
[    1.488569] caam caam.0: authenc-hmac-sha256-cbc-des3_ede-caam
[    1.488707] caam caam.0: authenc-hmac-md5-cbc-des-caam
[    1.488842] caam caam.0: authenc-hmac-sha1-cbc-des-caam
[    1.488978] caam caam.0: authenc-hmac-sha224-cbc-des-caam
[    1.489109] caam caam.0: authenc-hmac-sha256-cbc-des-caam
[    1.489242] caam caam.0: cbc-aes-caam
[    1.489369] caam caam.0: cbc-3des-caam
[    1.489498] caam caam.0: cbc-des-caam
[    1.494901] platform caam_jr.0: registering rng-caam
[    1.497241] Datalight FlashFX Tera v2.1.1 Build 2128DF OS Services
[    1.497255] Linux kernel 2.6 Edition for arm -- Compiled Sep  6 2013 at 15:31:42
[    1.497267] Copyright (c) 1993-2012 Datalight, Inc.  All Rights Reserved Worldwide.
[    1.497279] All rights and obligations of GPL v2 apply.
[    1.498232] flashfx: module license 'Copyright (c) 1993-2012 Datalight, Inc.  All Rights Reserved Worldwide.' taints kernel.
[    1.498252] Disabling lock debugging due to kernel taint
[    1.507010] Datalight FlashFX Tera v2.1.1 Build 2128DF Block Device Driver
[    1.507026] Linux kernel 2.6 Edition for arm -- Compiled Sep  6 2013 at 15:31:39
[    1.507037] Copyright (c) 1993-2012 Datalight, Inc.  All Rights Reserved Worldwide.
[    1.507049] All rights and obligations of GPL v2 apply.
[    1.507266] Datalight FlashFX Tera v2.1.1 Build 2128DF
[    1.507272] Copyright (c) 1993-2012 Datalight, Inc.  All Rights Reserved Worldwide.
[    1.507280] Patents:  US#5860082, US#6260156.
[    1.507285] Linux kernel 2.6 Edition for arm -- Compiled Sep  6 2013 at 15:31:50
[    1.508920] ################################################
[    1.508934] ##                                            ##
[    1.508952] ##   FlashFX Tera SDK License ID: 1438932757  ##
[    1.508964] ##                                            ##
[    1.508976] ################################################
[    1.560095] Creating thread FTCMP00
[    1.561476]  ffx00: unknown partition table
[    2.426146] Creating thread FTCMP01
[    2.427536]  ffx01: p1 p2 p3 p4
[    2.430250] Datalight Reliance Nitro v2.7.1 Build 2175BA OS Services
[    2.430265] Linux Kernel Edition for arm -- Compiled Sep  6 2013 at 15:33:13
[    2.430277] Copyright (c) 2003-2013 Datalight, Inc.  All Rights Reserved Worldwide.
[    2.430289] All rights and obligations of GPL v2 apply.
[    2.453593] Datalight Reliance Nitro v2.7.1 Build 2175BA File System Driver
[    2.453611] Linux Kernel Edition for arm -- Compiled Sep  6 2013 at 15:32:11
[    2.453622] Copyright (c) 2003-2013 Datalight, Inc.  All Rights Reserved Worldwide.
[    2.453634] All rights and obligations of GPL v2 apply.
[    2.453659] Datalight Reliance Nitro v2.7.1 Build 2175BA
[    2.453672] Linux Kernel Edition for arm -- Compiled Sep  6 2013 at 15:32:19
[    2.453686] Copyright (c) 2003-2013 Datalight, Inc.  All Rights Reserved Worldwide.
[    2.453699] Patents:  US#7284101.
[    2.453704]
[    2.453951] Datalight Reliance Nitro v2.7.1 Build 2175BA driver initialization completed successfully
[    2.454185] WARNING: A volume is defined as using Block Device "/dev/ffx01p1", but
[    2.454203]          no definition was found in relconf.h.  Using the default settings.
[    2.454320] block device supports flush.
[    2.465247] ###########################################
[    2.465264] ##                                       ##
[    2.465278] ##   Reliance SDK License ID 7114895F    ##
[    2.465290] ##                                       ##
[    2.465301] ###########################################
[    2.534958] DclOsBlockDev:Ioctl() Old BlkSize=4096 Count=   122352 SecBlk=0 BlkShift=12
[    2.534979]                       New BlkSize=4096 Count=   122352 SecBlk=0 BlkShift=12
[    2.535000] Creating thread RelTransactionTimed
[    2.535161] VOL0 mounted in 80 milliseconds
[    3.024081] warning: process `init' used the deprecated sysctl system call with 2.5.
[    3.024232] warning: process `init' used the deprecated sysctl system call with 2.16.
[    3.188185] usbcore: registered new interface driver dsrc_acm
[    3.188200] dsrc_acm: v0.26:USB Abstract Control Model driver for USB modems and ISDN adapters
[    3.301753] WARNING: A volume is defined as using Block Device "/dev/ffx01p4", but
[    3.301773]          no definition was found in relconf.h.  Using the default settings.
[    3.305743] block device supports flush.
[    3.493917] DclOsBlockDev:Ioctl() Old BlkSize=4096 Count=    78624 SecBlk=0 BlkShift=12
[    3.493941]                       New BlkSize=4096 Count=    78624 SecBlk=0 BlkShift=12
[    3.493973] Creating thread RelTransactionTimed
[    3.495240] VOL1 mounted in 190 milliseconds
[    3.540591] sdhci: Secure Digital Host Controller Interface driver
[    3.540606] sdhci: Copyright(c) Pierre Ossman
[    3.583591] mmc0: no vmmc regulator found
[    3.586010] Powering on wl12xx
[    3.586123] mmc0: SDHCI controller on platform [sdhci-esdhc-imx.1] using DMA
[    3.587465] mmc1: no vmmc regulator found
[    3.596163] mmc1: SDHCI controller on platform [sdhci-esdhc-imx.2] using DMA
[    3.642410] mmc0: card claims to support voltages below the defined range. These will be ignored.
[    3.695052] mmc0: queuing unknown CIS tuple 0x91 (3 bytes)
[    3.697075] mmc0: new high speed SDIO card at address 0001
[    3.697390] Powering off wl12xx
[    4.355678] mmc1: Inserting CMD4 for drive strength of $02000000
[    4.395166] mmc1: new high speed DDR MMC card at address 0001
[    4.396397] mmcblk0: mmc1:0001 MMC04G 3.66 GiB
[    4.398193] mmcblk0boot0: mmc1:0001 MMC04G partition 1 1.00 MiB
[    4.398425] mmcblk0boot1: mmc1:0001 MMC04G partition 2 1.00 MiB
[    4.400603]  mmcblk0: p1 p2
[    4.401459] WARNING: A volume is defined as using Block Device "/dev/mmcblk0p2", but
[    4.401477]          no definition was found in relconf.h.  Using the default settings.
[    4.401701] block device supports flush.
[    4.403366]  mmcblk0boot1: unknown partition table
[    4.405699]  mmcblk0boot0: unknown partition table
[    4.432524] DclOsBlockDev:Ioctl() Old BlkSize= 512 Count=  1171952 SecBlk=0 BlkShift=9
[    4.432557]                       New BlkSize= 512 Count=  1171952 SecBlk=0 BlkShift=9
[    4.432580] Creating thread RelTransactionTimed
[    4.437841] VOL2 mounted in 30 milliseconds
[    5.205765] NET: Registered protocol family 10
[    5.628021] udevd[128]: starting version 168
[    5.806556] [U] splashplayer started
[    5.806773] [U] splashplayer vpu_Init
[    5.858325] AIC310x Audio Codec 0.0.6
[    5.872987] asoc: aic310x <-> imx-ssi.0 mapping ok
[    5.900681] asoc: wl1285q-bt <-> imx-ssi.1 mapping ok
[    5.916933] [U] splashplayer vpu_Init done
[    6.206945] [U] splashplayer init Wayland+EGL
[    6.209237] input: Virtual Keyboard as /devices/virtual/input/input1
[    6.210987] input: Virtual Mouse as /devices/virtual/input/input2
[    6.212933] cmu_io_ioctl: Pid : 109, gpio:42
[    6.232032] misc usb_overcurrent: host1 over current SET
[    6.232070] misc usb_overcurrent: otg over current SET
[    6.233139] Level: Warn, File: GpioChip.c, Func: vimAttributeStore, Line: 1664, Message: Failed to find a pin named: Reverse
[    6.255032] Level: Warn, File: GpioChip.c, Func: vimAttributeStore, Line: 1664, Message: Failed to find a pin named: Reverse
[    6.271868] Level: Warn, File: GpioChip.c, Func: vimAttributeStore, Line: 1664, Message: Failed to find a pin named: Reverse
[    6.281185] misc usb_overcurrent: host1 over current CLEARED
[    6.281215] misc usb_overcurrent: otg over current CLEARED
[    6.360426] snvs_rtc snvs_rtc.0: rtc core: registered snvs_rtc as rtc0
[    6.451368] [U] splashplayer init Wayland+EGL done
[    6.455596] [U] splashplayer show first frame
[    6.460208] [U] splashplayer show first frame done
[    6.599308] /proc/kmsg created
[    6.599327] kmsg-filter loaded with loglevel=6
[    7.312147] mx6_bt_rfkill driver successful loaded!
[    7.314040] rfkill: Bluetooth RF turn on
[    9.112318] aic310x: Setting hardware rate to 48000
[    9.112331] aic310x: Setting hardware format to 2
[    9.822401] kmsg_filtered_open
[   10.448545] input: filtered-keyboard-0x000000026E19E773 as /devices/virtual/input/input3
[   10.450463] input: filtered-mouse-0x000000026E378046 as /devices/virtual/input/input4
[   10.452580] input: filtered-touchscreen-0x000000026E57AFDB as /devices/virtual/input/input5
[   11.374342] UYVY
[   11.405602] imx-ipuv3 imx-ipuv3.1: IPU Warning - IPU_INT_STAT_10 = 0x00000001
[   11.437862] UYVY
[   11.472337] imx-ipuv3 imx-ipuv3.1: IPU Warning - IPU_INT_STAT_10 = 0x00000001
[   11.540586] Attention: Writing register 0x0E, this register will be used internally.
[   11.541497] Attention: Writing register 0x0E, this register will be used internally.
[   11.541951] Attention: Writing register 0x4D, this register will be used internally.
[   11.542397] Attention: Writing register 0x50, this register will be used internally.
[   11.543269] Attention: Writing register 0xE1, this register will be used internally.
[   11.543726] Attention: Writing register 0xE2, this register will be used internally.
[   11.544172] Attention: Writing register 0x02, this register will be used internally.
[   11.544622] Attention: Writing register 0xE3, this register will be used internally.
[   11.545092] Attention: Writing register 0xE4, this register will be used internally.
[   76.111221] usb 2-1: new high speed USB device number 2 using fsl-ehci
[   76.263114] usb 2-1: New USB device found, idVendor=0424, idProduct=2640
[   76.263133] usb 2-1: New USB device strings: Mfr=0, Product=0, SerialNumber=0
[   76.263563] usb 2-1: Device is not authorized for usage
[   76.273397] hub 2-1:1.0: USB hub found
[   76.273888] hub 2-1:1.0: 3 ports detected
[   76.276806] usb 2-1: authorized to connect
[   76.821457] usb 2-1.2: new high speed USB device number 3 using fsl-ehci
[   76.934536] usb 2-1.2: New USB device found, idVendor=18d1, idProduct=4ee7
[   76.934555] usb 2-1.2: New USB device strings: Mfr=1, Product=2, SerialNumber=3
[   76.934570] usb 2-1.2: Product: Pixel 2
[   76.934580] usb 2-1.2: Manufacturer: Google
[   76.934591] usb 2-1.2: SerialNumber: FA7CK1A02396
[   76.935049] usb 2-1.2: Device is not authorized for usage
[   76.945569] usb 2-1.2: authorized to connect
[  172.668100] [sdhci_pre_dma_transfer] invalid cookie: data->host_cookie 233 host->next_data.cookie 234
[  172.767102] [sdhci_pre_dma_transfer] invalid cookie: data->host_cookie 250 host->next_data.cookie 251
[  172.779419] [sdhci_pre_dma_transfer] invalid cookie: data->host_cookie 258 host->next_data.cookie 259
[  172.802881] [sdhci_pre_dma_transfer] invalid cookie: data->host_cookie 289 host->next_data.cookie 290
[  172.894854] [sdhci_pre_dma_transfer] invalid cookie: data->host_cookie 379 host->next_data.cookie 380
[  173.099011] [sdhci_pre_dma_transfer] invalid cookie: data->host_cookie 487 host->next_data.cookie 488
[  173.484065] [sdhci_pre_dma_transfer] invalid cookie: data->host_cookie 590 host->next_data.cookie 591
[  173.502824] [sdhci_pre_dma_transfer] invalid cookie: data->host_cookie 618 host->next_data.cookie 619
[  173.512811] [sdhci_pre_dma_transfer] invalid cookie: data->host_cookie 626 host->next_data.cookie 627
[  175.660403] usb 2-1.2: USB disconnect, device number 3
[  175.981459] usb 2-1.2: new high speed USB device number 4 using fsl-ehci
[  176.094778] usb 2-1.2: New USB device found, idVendor=18d1, idProduct=2d01
[  176.094797] usb 2-1.2: New USB device strings: Mfr=1, Product=2, SerialNumber=3
[  176.094811] usb 2-1.2: Product: Pixel 2
[  176.094821] usb 2-1.2: Manufacturer: Google
[  176.094832] usb 2-1.2: SerialNumber: FA7CK1A02396
[  176.095297] usb 2-1.2: Device is not authorized for usage
[  176.113815] usb 2-1.2: authorized to connect
[  176.353097] [sdhci_pre_dma_transfer] invalid cookie: data->host_cookie 740 host->next_data.cookie 741
[  176.402982] [sdhci_pre_dma_transfer] invalid cookie: data->host_cookie 758 host->next_data.cookie 759
[  177.345054] input: mzd-uinput as /devices/virtual/input/input6
[  178.451534] imx-ipuv3 imx-ipuv3.1: ERR[0xbb48bc00-no:0x138e0]ipu task_id:1 busy!
[  178.451561] imx-ipuv3 imx-ipuv3.1: ERR:[0xbb48bc00] no-0x138e0 state: ipu busy
[  178.451604] imx-ipuv3 imx-ipuv3.1: ERR: [0xbb48bc00] no-0x138e0,state 8: ipu busy
[  178.451622] imx-ipuv3 imx-ipuv3.1: ERR: no-0x138e0,ipu_queue_task err:-125
[  180.211219] imx-ipuv3 imx-ipuv3.1: ERR[0xbb73f400-no:0x13f80]ipu task_id:1 busy!
[  180.211240] imx-ipuv3 imx-ipuv3.1: ERR:[0xbb73f400] no-0x13f80 state: ipu busy
[  180.211281] imx-ipuv3 imx-ipuv3.1: ERR: [0xbb73f400] no-0x13f80,state 8: ipu busy
[  180.211298] imx-ipuv3 imx-ipuv3.1: ERR: no-0x13f80,ipu_queue_task err:-125
[  180.211313] mxc_v4l2_output mxc_v4l2_output.0: display work fail ret = -125
[  971.741185] VPU blocking: timeout.
[  972.241169] VPU blocking: timeout.
[  972.741224] VPU blocking: timeout.
[  973.241264] VPU blocking: timeout.
[  973.741228] VPU blocking: timeout.
[ 2171.692815] usb 2-1.2: USB disconnect, device number 4
[ 2456.954819] Level: Warn, File: GpioChip.c, Func: vimAttributeStore, Line: 1664, Message: Failed to find a pin named: Reverse
[ 2463.545280] Level: Warn, File: GpioChip.c, Func: vimAttributeStore, Line: 1664, Message: Failed to find a pin named: Reverse
[ 2467.245714] Level: Warn, File: GpioChip.c, Func: vimAttributeStore, Line: 1664, Message: Failed to find a pin named: Reverse
[ 2492.422490] Level: Warn, File: GpioChip.c, Func: vimAttributeStore, Line: 1664, Message: Failed to find a pin named: Reverse
```

### sm

```
00:43:21.380 SM[28227] Info (sm.cpp:1086 main) SM alive!
00:43:21.383 SM[28227] Warn (sm_confparser.cpp:2546 SM_ReadConfigFile) SM loaded with default configuration file /jci/sm/sm.conf
00:43:21.408 SM[28227] Warn (sm_net.cpp:773 SM_NET_SocketServer) SM socket 4 can not be binded! Error: Address already in use
00:43:21.409 SM[28227] Error (sm_net.cpp:791 SM_NET_SocketServer) SM_NET_SocketServer server: failed to bind
00:43:21.469 BLM_SETTINGS[375] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
00:43:21.550 VBS_BUS_CAN[319] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:43:21.550 VBS_BUS_CAN[319] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:43:21.550 VBS_BUS_CAN[319] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:43:21.550 VBS_BUS_CAN[319] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:43:21.552 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:21.552 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:21.552 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:21.552 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:21.552 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:21.552 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:22.000 BLM_TIME[469] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:43:22.002 BLM_TIME[469] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:43:22.022 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:22.022 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:22.036 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:22.036 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:23.046 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:23.053 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:23.061 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:23.063 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:23.167 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:23.550 VBS_BUS_CAN[319] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:43:23.550 VBS_BUS_CAN[319] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:43:23.550 VBS_BUS_CAN[319] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:43:23.550 VBS_BUS_CAN[319] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:43:23.552 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:23.552 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:23.552 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:23.552 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:23.552 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:23.552 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:24.070 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:24.077 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:24.088 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:24.088 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:24.407 SM[28227] Warn (SmServerInitializer.hpp:55 wait) Waiting server initialization timeouted (3000 ms)
00:43:24.409 SM[28227] Warn (sm_net.cpp:773 SM_NET_SocketServer) SM socket 4 can not be binded! Error: Address already in use
00:43:24.409 SM[28227] Error (sm_net.cpp:791 SM_NET_SocketServer) SM_NET_SocketServer server: failed to bind
00:43:24.451 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:24.475 BLM_SETTINGS[375] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
00:43:25.000 BLM_TIME[469] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:43:25.002 BLM_TIME[469] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:43:25.099 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:25.106 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:25.117 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:25.117 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:25.168 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:25.475 BLM_SETTINGS[375] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
00:43:25.552 VBS_BUS_CAN[319] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:43:25.552 VBS_BUS_CAN[319] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:43:25.552 VBS_BUS_CAN[319] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:43:25.552 VBS_BUS_CAN[319] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:43:25.556 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:25.556 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:25.556 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:25.556 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:25.556 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:25.556 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
netstat: fscanf
00:43:26.129 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:26.133 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:26.144 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:26.144 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:26.473 BLM_SETTINGS[375] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
00:43:27.153 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:27.160 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:27.160 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:27.170 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:27.170 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:27.408 SM[28227] Warn (SmServerInitializer.hpp:55 wait) Waiting server initialization timeouted (3000 ms)
00:43:27.413 SM[28227] Info (sm.cpp:3978 SM_SetProcessPriority) Service with pid (28227) launched with policy SCHED_OTHER nice value -5
00:43:27.413 SM[28227] Info (sm.cpp:1245 main) SM initialized!
00:43:27.419 SM[28227] Info (sm.cpp:1283 main) SM Starting!
00:43:27.432 SM[28227] Info (sm.cpp:1297 main) SM monitoring...
ALSA configuration file found. No config required.
DSP configuration file found.
00:43:27.506 BLM_SETTINGS[375] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
00:43:27.510 SM[28227] Info (sm.cpp:811 sm_ActionsForStoppedService) Svc stage_1[28543] stopped!
00:43:27.530 SM[28227] Info (sm.cpp:811 sm_ActionsForStoppedService) Svc audio_config[28539] stopped!
00:43:27.530 SM[28227] Warn (sm.cpp:896 sm_ActionsForStoppedService) Unlinking file ptr->ready_flag /var/run/audio_config
00:43:27.530 SM[28227] Info (sm.cpp:811 sm_ActionsForStoppedService) Svc dsp_config[28540] stopped!
00:43:27.530 SM[28227] Warn (sm.cpp:896 sm_ActionsForStoppedService) Unlinking file ptr->ready_flag /var/run/dsp_config
00:43:27.552 VBS_BUS_CAN[319] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:43:27.552 VBS_BUS_CAN[319] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:43:27.552 VBS_BUS_CAN[319] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:43:27.552 VBS_BUS_CAN[319] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:43:27.554 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:27.554 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:27.554 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:27.554 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:27.554 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:27.554 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:27.624 SM[208] Error (sm_sockserver.cpp:1178 SM_SRVR_cmd_handshake_action) config_node->sock_element was not NULL in handshaking
00:43:27.624 SM[208] Error (sm_sockserver.cpp:1179 SM_SRVR_cmd_handshake_action) sock 13 name system_mazda_my14
00:43:27.629 SM[208] Error (sm_sockserver.cpp:1178 SM_SRVR_cmd_handshake_action) config_node->sock_element was not NULL in handshaking
00:43:27.629 SM[208] Error (sm_sockserver.cpp:1179 SM_SRVR_cmd_handshake_action) sock 5 name jciVideoctrl
00:43:27.692 SM[208] Error (sm_sockserver.cpp:1178 SM_SRVR_cmd_handshake_action) config_node->sock_element was not NULL in handshaking
00:43:27.692 SM[208] Error (sm_sockserver.cpp:1179 SM_SRVR_cmd_handshake_action) sock 7 name jciNativegui
00:43:27.702 SM[208] Error (sm_sockserver.cpp:1178 SM_SRVR_cmd_handshake_action) config_node->sock_element was not NULL in handshaking
00:43:27.702 SM[208] Error (sm_sockserver.cpp:1179 SM_SRVR_cmd_handshake_action) sock 14 name settings
00:43:27.731 SM[208] Warn (sm_sockserver.cpp:1528 SM_SRVR_cmd_starting_action) not a valid state change request svc settings state 3
00:43:27.734 com.jci.cpp.settings.local[28556] Info (Server.cpp:2344 createRecord) Loading the record corresponding to: "server://"
00:43:27.741 SM[208] Warn (sm_sockserver.cpp:1528 SM_SRVR_cmd_starting_action) not a valid state change request svc jciVideoctrl state 3
00:43:27.741 VIDEOCTRL[28542] Info (vctrl_sm_interface.c:93 ServiceInit) Initializing VIDEOCTRL Service
00:43:27.747 VIDEOCTRL[28542] Info (vctrl_xml.c:506 VCTRL_XML_Open) XML file loaded successfully
00:43:27.747 VIDEOCTRL[28542] Info (vctrl_xml.c:92 vctrl_loadSettingsData) Number of devices = 3
00:43:27.747 VIDEOCTRL[28542] Info (vctrl_xml.c:135 vctrl_extractDeviceSettings) Device = buc -- device ID = 0, device input = 0
00:43:27.747 VIDEOCTRL[28542] Info (vctrl_xml.c:135 vctrl_extractDeviceSettings) Device = dvd -- device ID = 1, device input = 1
00:43:27.754 VIDEOCTRL[28542] Info (vctrl_gpio.c:150 DayNightSensor_th) Display Day/Night is not on AUTO. No action taken
00:43:27.755 VIDEOCTRL[28542] Info (vctrl_xml.c:135 vctrl_extractDeviceSettings) Device = tv -- device ID = 2, device input = 1
00:43:27.755 VIDEOCTRL[28542] Info (vctrl_xml.c:48 VCTRL_XML_ReadSettingsXML) Successfully loaded and parsed video_settings.xml!
00:43:27.761 SM[208] Warn (sm_sockserver.cpp:1528 SM_SRVR_cmd_starting_action) not a valid state change request svc system_mazda_my14 state 3
00:43:27.780 SYSTEM[28544] Error (DbusConnection.hpp:226 connect) Status: STATUS_FAILED (as 104): Using D-Bus connection failed!
mkdir: can't create directory '/tmp/dbus': File exists
00:43:27.819 VIDEOCTRL[28542] Info (vctrl_v4lcapture.c:843 dbus_connect)  (843) CDBusClientBase::connect - address: unix:path=/tmp/dbus_hmi_socket
00:43:27.827 VIDEOCTRL[28542] Error (vctrl_v4lcapture.c:887 dbus_connect) CDBusClientBase::connect - Not Primary Owner ret: 2
00:43:27.833 SM[208] Warn (sm_sockserver.cpp:1528 SM_SRVR_cmd_starting_action) not a valid state change request svc jciNativegui state 3
00:43:27.836 VIDEOCTRL[28542] Info (vctrl_service_core.cpp:66 VCTRL_CORE_InitializeConstSettings) Setting Constant settings for device 0
00:43:27.836 VIDEOCTRL[28542] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:27.836 VIDEOCTRL[28542] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:27.836 VIDEOCTRL[28542] Error (vctrl_v4lcapture.c:300 VCTRL2V4LCAPTURE_setRegisterSubmap2) Failed to Open Submap 2
00:43:27.836 VIDEOCTRL[28542] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:27.836 VIDEOCTRL[28542] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:27.836 VIDEOCTRL[28542] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:27.836 VIDEOCTRL[28542] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:27.836 VIDEOCTRL[28542] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:27.836 VIDEOCTRL[28542] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:27.836 VIDEOCTRL[28542] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:27.836 VIDEOCTRL[28542] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:27.836 VIDEOCTRL[28542] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:27.836 VIDEOCTRL[28542] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:27.836 VIDEOCTRL[28542] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:27.836 VIDEOCTRL[28542] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:27.836 VIDEOCTRL[28542] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:43:27.836 VIDEOCTRL[28542] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:43:27.836 VIDEOCTRL[28542] Info (vctrl_service_core.cpp:110 VCTRL_CORE_GetDayNightMode) Value read from NVRAM day for node 'lvds_bright_mode'
00:43:27.836 VIDEOCTRL[28542] Info (vctrl_settings.c:237 BLM_VCTRL_OnChange_DayNight_Callback) DayNight Changed - value: DAY
00:43:27.836 VIDEOCTRL[28542] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setBrightness
00:43:27.836 VIDEOCTRL[28542] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setBrightness
00:43:27.836 VIDEOCTRL[28542] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:43:27.836 VIDEOCTRL[28542] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:43:27.836 VIDEOCTRPID,Component,Event,Timestamp
Not available,ServiceManager,SM_SERVER_CMD_START_NOTIFY_STAT,7.568
Not available,ServiceManager,SM_SERVER_CMD_INIT,7.568
Not available,ServiceManager,SM_SERVER_CMD_STARTING,7.568
Not available,audio_config,SM_SVC_CMD_START,7.873
254,audio_config,SM_SVC_CMD_STARTING,7.93
148,dbus_hmi,SM_SVC_CMD_STARTED,7.93
152,dbus_service,SM_SVC_CMD_STARTED,7.931
Not available,dsp_config,SM_SVC_CMD_START,7.931
255,dsp_config,SM_SVC_CMD_STARTING,7.996
258,jciVideoctrl,SM_SVC_CMD_START,8.053
61,lvds_service,SM_SVC_CMD_STARTED,8.053
122,nativeguictrl,SM_SVC_CMD_STARTED,8.054
Not available,stage_1,SM_SVC_CMD_START,8.054
260,stage_1,SM_SVC_CMD_STARTED,8.075
263,system_mazda_my14,SM_SVC_CMD_START,8.081
109,vim_app,SM_SVC_CMD_STARTED,8.081
254,audio_config,SM_SVC_CMD_STARTED,8.109
Not available,audio_start,SM_SVC_CMD_START,8.109
265,audio_start,SM_SVC_CMD_STARTING,8.175
255,dsp_config,SM_SVC_CMD_STARTED,8.176
267,jciNativegui,SM_SVC_CMD_START,8.178
268,settings,SM_SVC_CMD_START,8.188
258,jciVideoctrl,SM_SVC_HANDSHAKE_DONE,8.306
267,jciNativegui,SM_SVC_HANDSHAKE_DONE,8.308
263,system_mazda_my14,SM_SVC_HANDSHAKE_DONE,8.355
268,settings,SM_SVC_HANDSHAKE_DONE,8.485
268,settings,SM_SVC_CMD_STARTING,9.259
265,audio_start,SM_SVC_CMD_STARTED,9.44
258,jciVideoctrl,SM_SVC_CMD_STARTING,9.54
267,jciNativegui,SM_SVC_CMD_STARTING,9.552
267,jciNativegui,SM_SVC_CMD_STARTED,9.628
310,jciBUCPSA,SM_SVC_CMD_START,9.647
268,settings,SM_SVC_CMD_STARTED,9.732
310,jciBUCPSA,SM_SVC_HANDSHAKE_DONE,9.748
318,devices,SM_SVC_CMD_START,9.75
319,jciVBS,SM_SVC_CMD_START,9.752
318,devices,SM_SVC_HANDSHAKE_DONE,9.875
263,system_mazda_my14,SM_SVC_CMD_STARTING,9.9
310,jciBUCPSA,SM_SVC_CMD_STARTING,9.944
258,jciVideoctrl,SM_SVC_CMD_STARTED,9.972
319,jciVBS,SM_SVC_HANDSHAKE_DONE,10.005
319,jciVBS,SM_SVC_CMD_STARTING,10.111
318,devices,SM_SVC_CMD_STARTING,10.188
310,jciBUCPSA,SM_SVC_CMD_STARTED,10.222
263,system_mazda_my14,SM_SVC_CMD_STARTED,10.236
318,devices,SM_SVC_CMD_STARTED,10.455
375,jciBLMSettings,SM_SVC_CMD_START,10.47
375,jciBLMSettings,SM_SVC_HANDSHAKE_DONE,10.689
375,jciBLMSettings,SM_SVC_CMD_STARTING,11.061
375,jciBLMSettings,SM_SVC_CMD_STARTED,11.267
Not available,stage_2,SM_SVC_CMD_START,11.271
415,stage_2,SM_SVC_CMD_STARTED,11.294
423,jciAppsdk,SM_SVC_CMD_START,11.31
425,jciDbapi,SM_SVC_CMD_START,11.316
427,jciTime,SM_SVC_CMD_START,11.335
425,jciDbapi,SM_SVC_HANDSHAKE_DONE,11.735
427,jciTime,SM_SVC_HANDSHAKE_DONE,11.737
423,jciAppsdk,SM_SVC_HANDSHAKE_DONE,11.739
427,jciTime,SM_SVC_CMD_STARTING,11.955
427,jciTime,SM_SVC_CMD_STARTED,12.037
469,jciBLMTIME,SM_SVC_CMD_START,12.062
425,jciDbapi,SM_SVC_CMD_STARTING,12.197
423,jciAppsdk,SM_SVC_CMD_STARTING,12.207
425,jciDbapi,SM_SVC_CMD_STARTED,12.345
469,jciBLMTIME,SM_SVC_HANDSHAKE_DONE,12.44
319,jciVBS,SM_SVC_CMD_STARTED,12.486
532,jciTestDiag,SM_SVC_CMD_START,12.534
534,jciusbdtc,SM_SVC_CMD_START,12.542
Not available,xsesvc2dbus_service,SM_SVC_CMD_START,12.543
535,xsesvc2dbus_service,SM_SVC_CMD_STARTING,12.602
Not available,xsesvc2dbus_tau,SM_SVC_CMD_START,12.602
537,xsesvc2dbus_tau,SM_SVC_CMD_STARTING,12.639
535,xsesvc2dbus_service,SM_SVC_CMD_STARTED,12.702
Not available,audio_amplifier,SM_SVC_CMD_START,12.722
544,audio_amplifier,SM_SVC_CMD_STARTING,12.736
Not available,audio_control,SM_SVC_CMD_START,12.737
546,audio_control,SM_SVC_CMD_STARTING,12.762
537,xsesvc2dbus_tau,SM_SVC_CMD_STARTED,12.762
423,jciAppsdk,SM_SVC_CMD_STARTED,12.94
Not available,Opera,SM_SVC_CMD_START,12.948
562,Opera,SM_SVC_CMD_STARTED,13.01
469,jciBLMTIME,SM_SVC_CMD_STARTING,13.049
534,jciusbdtc,SM_SVC_HANDSHAKE_DONE,13.215
532,jciTestDiag,SM_SVC_HANDSHAKE_DONE,13.234
469,jciBLMTIME,SM_SVC_CMD_STARTED,13.363
605,jciTds,SM_SVC_CMD_START,13.379
534,jciusbdtc,SM_SVC_CMD_STARTING,13.486
534,jciusbdtc,SM_SVC_CMD_STARTED,13.619
605,jciTds,SM_SVC_HANDSHAKE_DONE,13.731
532,jciTestDiag,SM_SVC_CMD_STARTING,13.838
532,jciTestDiag,SM_SVC_CMD_STARTED,14.072
605,jciTds,SM_SVC_CMD_STARTING,14.119
546,audio_control,SM_SVC_CMD_STARTED,14.509
Not available,audio_manager,SM_SVC_CMD_START,14.51
704,audio_manager,SM_SVC_CMD_STARTING,14.544
544,audio_amplifier,SM_SVC_CMD_STARTED,14.916
704,audio_manager,SM_SVC_CMD_STARTED,15.374
812,jciauxin,SM_SVC_CMD_START,15.392
813,jciCD,SM_SVC_CMD_START,15.402
814,jciDAB,SM_SVC_CMD_START,15.411
815,jcixm,SM_SVC_CMD_START,15.414
812,jciauxin,SM_SVC_HANDSHAKE_DONE,15.712
814,jciDAB,SM_SVC_HANDSHAKE_DONE,15.716
813,jciCD,SM_SVC_HANDSHAKE_DONE,15.72
815,jcixm,SM_SVC_HANDSHAKE_DONE,15.726
812,jciauxin,SM_SVC_CMD_STARTING,15.861
812,jciauxin,SM_SVC_CMD_STARTED,15.952
813,jciCD,SM_SVC_CMD_STARTING,16.028
814,jciDAB,SM_SVC_CMD_STARTING,16.111
813,jciCD,SM_SVC_CMD_STARTED,16.128
815,jcixm,SM_SVC_CMD_STARTING,16.189
814,jciDAB,SM_SVC_CMD_STARTED,16.287
815,jcixm,SM_SVC_CMD_STARTED,16.404
263,system_mazda_my14,SM_SVC_HANDSHAKE_DONE,2607.62
258,jciVideoctrl,SM_SVC_HANDSHAKE_DONE,2607.63
267,jciNativegui,SM_SVC_HANDSHAKE_DONE,2607.69
268,settings,SM_SVC_HANDSHAKE_DONE,2607.7
L[28542] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setContrast
00:43:27.836 VIDEOCTRL[28542] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setContrast
00:43:27.836 VIDEOCTRL[28542] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:43:27.836 VIDEOCTRL[28542] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:43:27.836 VIDEOCTRL[28542] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setHue
00:43:27.836 VIDEOCTRL[28542] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setHue
00:43:27.836 VIDEOCTRL[28542] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:43:27.836 VIDEOCTRL[28542] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:43:27.836 VIDEOCTRL[28542] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:27.836 VIDEOCTRL[28542] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:27.836 VIDEOCTRL[28542] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:43:27.836 VIDEOCTRL[28542] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:43:27.836 VIDEOCTRL[28542] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:27.836 VIDEOCTRL[28542] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:27.836 VIDEOCTRL[28542] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:43:27.836 VIDEOCTRL[28542] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:43:27.836 VIDEOCTRL[28542] Info (vctrl_settings.c:95 VCTRL2BLM_SETTINGS_UpdateIsNight) LOADED NEW VIDEO SETTINGS
00:43:27.836 VIDEOCTRL[28542] Info (vctrl_service_core.cpp:89 VCTRL_CORE_UpdateAllOtherSettings) Updating settings for device dvd
00:43:27.836 NATIVEGUI[28552] Info (natgui.c:609 ServiceInit) SM Initilizing Service Native GUI.
00:43:27.836 NATIVEGUI[28552] Info (natgui.c:771 NatG_Initialize) Success in initializing queue for NATGUI
00:43:27.836 NATIVEGUI[28552] Info (natgui_settings_mgr.c:110 NatG_Settings_Init) NVRAM_Block_getValue return the currentLanguage = 0
00:43:27.836 NATIVEGUI[28552] Info (natgui.c:780 NatG_Initialize) Success in initializing settings
00:43:27.836 VIDEOCTRL[28542] Info (vctrl_service_core.cpp:89 VCTRL_CORE_UpdateAllOtherSettings) Updating settings for device tv
00:43:27.836 VIDEOCTRL[28542] Info (vctrl_settings.c:102 VCTRL2BLM_SETTINGS_UpdateIsNight) Sent new video settings to MMUI
00:43:27.896 Std[] Error (: ) surface with id 'NATGUI_SURFACE' already exists
00:43:27.896 NATIVEGUI[28552] Info (natgui.c:789 NatG_Initialize) Success in initializing wayland window wrapper
00:43:27.896 NATIVEGUI[28552] Info (natgui_surface_mgr.c:590 NatG_Redraw_Widget_Handler) NatG_Redraw_Widget_Handler
00:43:27.896 NATIVEGUI[28552] Info (natgui.c:1187 NatG_GetImageDetails) Image = IMG_BANNER (78), [/jci/nativegui/images/SafetyText_US_English.png : (0, 433)], Language = 0
00:43:27.896 NATIVEGUI[28552] Error (natgui_interface.c:112 NatG_Init_Hmi_DBus) Failed to connect to HMI DBUS
00:43:27.896 NATIVEGUI[28552] Error (natgui.c:795 NatG_Initialize) Failed to create HMI dbus connection for NATGUI
00:43:27.896 NATIVEGUI[28552] Error (natgui.c:619 ServiceInit) Failed in initilizing the Service Native GUI
00:43:27.896 SM[28552] Warn (sm_svclauncher.cpp:221 sm_svclauncher_ThreadHandler) Service init_cb function returned: 1 for svc jcinativegui.
00:43:27.896 NATIVEGUI[28552] Info (natgui.c:667 ServiceTerm) Terminating RADIO Service
00:43:27.896 NATIVEGUI[28552] Info (natgui.c:898 natg_Destroy_SM_Client) natg_Destroy_SM_Client.
00:43:27.896 SM[208] Info (sm_sockserver.cpp:1661 SM_SRVR_cmd_stop_action) Waiting for processs 267 to exit...
00:43:27.896 SM[28542] Warn (sm_svclauncher.cpp:221 sm_svclauncher_ThreadHandler) Service init_cb function returned: 1 for svc jciVideoctrl.
00:43:27.896 BLM_SETTINGS[28542] Info (settings_client_funs.cpp:880 BLM_SETTINGS_Client_ExtDisconnect) BLM_SETTINGS_Client_ExtDisconnect
00:43:27.896 BLM_SETTINGS[28542] Error (settings_client_funs.cpp:900 BLM_SETTINGS_Client_ExtDisconnect) client is NOT connected conn:(nil)
00:43:27.896 VIDEOCTRL[28542] Info (vctrl_sm_interface.c:232 OnBLM_SETTINGSIsAvailable) BLM SETTINGS is available. Connecting...
00:43:27.896 SM[208] Info (sm_sockserver.cpp:1661 SM_SRVR_cmd_stop_action) Waiting for processs 258 to exit...
00:43:27.896 BLM_SETTINGS[28542] Info (settings_client_funs.cpp:759 BLM_SETTINGS_Client_ExtConnect) com.jci.settings.videoctrl_28542_1
00:43:27.896 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 556, Message: version: 55.00.753A, length 16
00:43:27.896 com.jci.cpp.settings[28556] Note (RegistryFactory.cpp:123 createRegistry) Startup time: 00:00:00.178004000
00:43:27.896 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 639, Message: LOCK FILE NAME /var/lock/LCK28552.core
00:43:27.923 com.jci.cpp.net[28556] Info (ServerSocket.cpp:128 bind) Here
00:43:27.923 com.jci.cpp.net[28556] Info (ServerSocket.cpp:145 bind) Here
00:43:27.923 com.jci.cpp.net[28556] Info (ServerSocket.cpp:254 getSocketImpl) Here
00:43:27.923 com.jci.cpp.net[28556] Info (ServerSocket.cpp:261 getSocketImpl) Here
00:43:27.923 com.jci.cpp.net[28556] Info (ServerSocket.cpp:265 getSocketImpl) Here
00:43:27.923 com.jci.cpp.net[28556] Info (ServerSocket.cpp:280 getSocketImpl) Here
00:43:27.923 com.jci.cpp.net[28556] Info (DefaultSocketImpl.cpp:176 socketBind) Binding: 127.0.0.1:5000
00:43:27.923 com.jci.cpp.net[28556] Note (DefaultSocketImpl.cpp:189 socketBind) Bound to "127.0.0.1:5000" with return value -1 and error: Address already in use (98)
00:43:27.933 com.jci.cpp.settings[28556] Error (Service.cpp:372 initialize) Caught com::jci::cpp::io::IoException on line 242 in function socketBind of file com/jci/cpp/net/DefaultSocketImpl.cpp with message: The file does not exist # 0  0x2B0781DC  com::jci::cpp::net::DefaultSocketImpl::socketBind(com::jci::cpp::common::O<com::jci::cpp::net::SocketAddress> const&) # 1  0x2AFEBDD8  com::jci::cpp::net::AbstractSocketImpl::bind(com::jci::cpp::common::O<com::jci::cpp::net::SocketAddress> const&) # 2  0x2B0089D8  com::jci::cpp::net::ServerSocket::bind(com::jci::cpp::common::O<com::jci::cpp::net::SocketAddress> const&, unsigned short const&) # 3  0x2B523714   # 4  0x2B587358   # 5  0x2B2D64BC   # 6  0x0002241C   # 7  0x000299FC   # 8  0x2AD644E4  __libc_start_main
00:43:27.935 SM[28556] Warn (sm_svclauncher.cpp:221 sm_svclauncher_ThreadHandler) Service init_cb function returned: -32 for svc settings.
00:43:27.939 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 556, Message: version: 55.00.753A, length 16
00:43:27.939 SM[208] Info (sm_sockserver.cpp:1661 SM_SRVR_cmd_stop_action) Waiting for processs 268 to exit...
00:43:27.944 SM[28227] Info (sm.cpp:811 sm_ActionsForStoppedService) Svc audio_start[28550] stopped!
00:43:27.944 SM[28227] Warn (sm.cpp:896 sm_ActionsForStoppedService) Unlinking file ptr->ready_flag /var/run/audio_start
00:43:27.948 SM[28227] Error (sm.cpp:1428 main) Process "settings" (28556) exited with status 0
00:43:27.948 SM[28227] Info (sm_eventbroker.cpp:589 sm_evt_ReportGenerator) Console report command /bin/cat /tmp/smevents.txt
00:43:27.957 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 766, Message: [1;31mProcess 28552 ("L_jciNativegui") abnormally exited due to signal SIGSEGV (11) with core file: /data_persist/log/dumps/core575-L_jciNativegui-SIGSEGV(11)-28552-2607-55.00.753A.core.bz2[0m
00:43:27.986 SM[28227] Info (sm.cpp:811 sm_ActionsForStoppedService) Svc settings[28556] stopped!
00:43:27.986 SM[28227] Critical (sm.cpp:2049 SM_StartNeededChildren) SM detected that the service "settings"[-1] exited.
00:43:28.001 BLM_TIME[469] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:43:28.001 BLM_TIME[469] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:43:28.271 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:28.274 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:28.284 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:28.290 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:28.470 BLM_SETTINGS[375] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
00:43:28.645 SM[28227] Error (sm_eventbroker.cpp:594 sm_evt_ReportGenerator) Shell has not been loaded so command /bin/cat /tmp/smevents.txt failed
00:43:28.645 SM[28227] Info (sm_eventbroker.cpp:556 sm_evt_ReportGenerator) Export command /bin/ps -a > /data/ps_info.out &
00:43:28.661 SM[28227] Error (sm_eventbroker.cpp:561 sm_evt_ReportGenerator) Shell has not been loaded so command /bin/ps -a > /data/ps_info.out & failed
00:43:28.661 SM[28227] Info (sm_eventbroker.cpp:556 sm_evt_ReportGenerator) Export command /usr/bin/top -b -n 1 > /data/top_info.out &
00:43:28.686 SM[28227] Error (sm_eventbroker.cpp:561 sm_evt_ReportGenerator) Shell has not been loaded so command /usr/bin/top -b -n 1 > /data/top_info.out & failed
00:43:28.686 SM[28227] Info (sm_eventbroker.cpp:556 sm_evt_ReportGenerator) Export command /usr/bin/thread_info  > /data/thread_info.out &
00:43:28.729 SM[28227] Error (sm_eventbroker.cpp:561 sm_evt_ReportGenerator) Shell has not been loaded so command /usr/bin/thread_info  > /data/thread_info.out & failed
00:43:28.729 SM[28227] Info (sm_eventbroker.cpp:589 sm_evt_ReportGenerator) Console report command /jci/scripts/wait_core_finished.sh
00:43:29.152 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:29.376 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:29.384 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:29.403 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:29.403 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:29.571 VBS_BUS_CAN[319] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:43:29.571 VBS_BUS_CAN[319] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:43:29.571 VBS_BUS_CAN[319] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:43:29.571 VBS_BUS_CAN[319] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:43:29.574 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:29.574 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:29.574 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:29.574 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:29.574 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:29.574 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:30.436 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:30.442 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:30.464 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:30.464 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:30.867 SM[208] Error (sm.cpp:475 sm_HandleSvcStoppedTimeout) Service jciNativegui was not stopped during timeout (3000 ms)!
00:43:30.870 SM[208] Info (sm.cpp:477 sm_HandleSvcStoppedTimeout) Killing pid 267 with signal 9 (SIGKILL)...
00:43:30.871 SM[208] Info (sm.cpp:484 sm_HandleSvcStoppedTimeout) Wait pid 267 to return explicitly to avoid zombie exit
00:43:30.873 SM[208] Error (sm.cpp:475 sm_HandleSvcStoppedTimeout) Service jciVideoctrl was not stopped during timeout (3000 ms)!
00:43:30.875 SM[208] Info (sm.cpp:477 sm_HandleSvcStoppedTimeout) Killing pid 258 with signal 9 (SIGKILL)...
00:43:30.875 SM[208] Info (sm.cpp:484 sm_HandleSvcStoppedTimeout) Wait pid 258 to return explicitly to avoid zombie exit
00:43:30.886 Std[] Info (: ) Surface NATGUI_SURFACE unregistered
00:43:30.926 SM[208] Error (sm.cpp:1438 main) Process "jciVideoctrl" (258) terminated due to signal 9
00:43:30.926 SM[208] Info (sm_eventbroker.cpp:589 sm_evt_ReportGenerator) Console report command /bin/cat /tmp/smevents.txt
00:43:30.926 SM[208] Info (sm_sockserver.cpp:1664 SM_SRVR_cmd_stop_action) Process 258 exited!
00:43:30.936 SM[208] Info (sm_sockserver.cpp:1664 SM_SRVR_cmd_stop_action) Process 267 exited!
00:43:30.948 SM[208] Info (sm.cpp:811 sm_ActionsForStoppedService) Svc jciNativegui[267] stopped!
00:43:30.948 SM[208] Info (sm.cpp:811 sm_ActionsForStoppedService) Svc jciVideoctrl[258] stopped!
00:43:31.001 BLM_TIME[469] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:43:31.001 BLM_TIME[469] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:43:31.014 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:31.023 Std[] Info (: ) PID,Component,Event,Timestamp
00:43:31.023 Std[] Info (: ) Not available,ServiceManager,SM_SERVER_CMD_START_NOTIFY_STAT,7.568
00:43:31.023 Std[] Info (: ) Not available,ServiceManager,SM_SERVER_CMD_INIT,7.568
00:43:31.023 Std[] Info (: ) Not available,ServiceManager,SM_SERVER_CMD_STARTING,7.568
00:43:31.023 Std[] Info (: ) Not available,audio_config,SM_SVC_CMD_START,7.873
00:43:31.023 Std[] Info (: ) 254,audio_config,SM_SVC_CMD_STARTING,7.93
00:43:31.023 Std[] Info (: ) 148,dbus_hmi,SM_SVC_CMD_STARTED,7.93
00:43:31.023 Std[] Info (: ) 152,dbus_service,SM_SVC_CMD_STARTED,7.931
00:43:31.023 Std[] Info (: ) Not available,dsp_config,SM_SVC_CMD_START,7.931
00:43:31.023 Std[] Info (: ) 255,dsp_config,SM_SVC_CMD_STARTING,7.996
00:43:31.025 Std[] Info (: ) 258,jciVideoctrl,SM_SVC_CMD_START,8.053
00:43:31.025 Std[] Info (: ) 61,lvds_service,SM_SVC_CMD_STARTED,8.053
00:43:31.025 Std[] Info (: ) 122,nativeguictrl,SM_SVC_CMD_STARTED,8.054
00:43:31.025 Std[] Info (: ) Not available,stage_1,SM_SVC_CMD_START,8.054
00:43:31.025 Std[] Info (: ) 260,stage_1,SM_SVC_CMD_STARTED,8.075
00:43:31.025 Std[] Info (: ) 263,system_mazda_my14,SM_SVC_CMD_START,8.081
00:43:31.025 Std[] Info (: ) 109,vim_app,SM_SVC_CMD_STARTED,8.081
00:43:31.025 Std[] Info (: ) 254,audio_config,SM_SVC_CMD_STARTED,8.109
00:43:31.025 Std[] Info (: ) Not available,audio_start,SM_SVC_CMD_START,8.109
00:43:31.025 Std[] Info (: ) 265,audio_start,SM_SVC_CMD_STARTING,8.175
00:43:31.026 Std[] Info (: ) 255,dsp_config,SM_SVC_CMD_STARTED,8.176
00:43:31.026 Std[] Info (: ) 267,jciNativegui,SM_SVC_CMD_START,8.178
00:43:31.026 Std[] Info (: ) 268,settings,SM_SVC_CMD_START,8.188
00:43:31.026 Std[] Info (: ) 258,jciVideoctrl,SM_SVC_HANDSHAKE_DONE,8.306
00:43:31.026 Std[] Info (: ) 267,jciNativegui,SM_SVC_HANDSHAKE_DONE,8.308
00:43:31.026 Std[] Info (: ) 263,system_mazda_my14,SM_SVC_HANDSHAKE_DONE,8.355
00:43:31.026 Std[] Info (: ) 268,settings,SM_SVC_HANDSHAKE_DONE,8.485
00:43:31.026 Std[] Info (: ) 268,settings,SM_SVC_CMD_STARTING,9.259
00:43:31.026 Std[] Info (: ) 265,audio_start,SM_SVC_CMD_STARTED,9.44
00:43:31.026 Std[] Info (: ) 258,jciVideoctrl,SM_SVC_CMD_STARTING,9.54
00:43:31.034 Std[] Info (: ) 267,jciNativegui,SM_SVC_CMD_STARTING,9.552
00:43:31.034 Std[] Info (: ) 267,jciNativegui,SM_SVC_CMD_STARTED,9.628
00:43:31.034 Std[] Info (: ) 310,jciBUCPSA,SM_SVC_CMD_START,9.647
00:43:31.034 Std[] Info (: ) 268,settings,SM_SVC_CMD_STARTED,9.732
00:43:31.034 Std[] Info (: ) 310,jciBUCPSA,SM_SVC_HANDSHAKE_DONE,9.748
00:43:31.034 Std[] Info (: ) 318,devices,SM_SVC_CMD_START,9.75
00:43:31.034 Std[] Info (: ) 319,jciVBS,SM_SVC_CMD_START,9.752
00:43:31.034 Std[] Info (: ) 318,devices,SM_SVC_HANDSHAKE_DONE,9.875
00:43:31.034 Std[] Info (: ) 263,system_mazda_my14,SM_SVC_CMD_STARTING,9.9
00:43:31.034 Std[] Info (: ) 310,jciBUCPSA,SM_SVC_CMD_STARTING,9.944
00:43:31.034 SM[208] Error (sm_eventbroker.cpp:594 sm_evt_ReportGenerator) Shell has not been loaded so command /bin/cat /tmp/smevents.txt failed
00:43:31.034 SM[208] Info (sm_eventbroker.cpp:556 sm_evt_ReportGenerator) Export command /bin/ps -a > /data/ps_info.out &
00:43:31.045 Std[] Info (: ) 258,jciVideoctrl,SM_SVC_CMD_STARTED,9.972
00:43:31.045 Std[] Info (: ) 319,jciVBS,SM_SVC_HANDSHAKE_DONE,10.005
00:43:31.045 Std[] Info (: ) 319,jciVBS,SM_SVC_CMD_STARTING,10.111
00:43:31.045 Std[] Info (: ) 318,devices,SM_SVC_CMD_STARTING,10.188
00:43:31.045 Std[] Info (: ) 310,jciBUCPSA,SM_SVC_CMD_STARTED,10.222
00:43:31.045 Std[] Info (: ) 263,system_mazda_my14,SM_SVC_CMD_STARTED,10.236
00:43:31.045 Std[] Info (: ) 318,devices,SM_SVC_CMD_STARTED,10.455
00:43:31.045 Std[] Info (: ) 375,jciBLMSettings,SM_SVC_CMD_START,10.47
00:43:31.045 Std[] Info (: ) 375,jciBLMSettings,SM_SVC_HANDSHAKE_DONE,10.689
00:43:31.045 Std[] Info (: ) 375,jciBLMSettings,SM_SVC_CMD_STARTING,11.061
00:43:31.074 Std[] Info (: ) 375,jciBLMSettings,SM_SVC_CMD_STARTED,11.267
00:43:31.074 Std[] Info (: ) Not available,stage_2,SM_SVC_CMD_START,11.271
00:43:31.074 Std[] Info (: ) 415,stage_2,SM_SVC_CMD_STARTED,11.294
00:43:31.074 Std[] Info (: ) 423,jciAppsdk,SM_SVC_CMD_START,11.31
00:43:31.074 Std[] Info (: ) 425,jciDbapi,SM_SVC_CMD_START,11.316
00:43:31.074 Std[] Info (: ) 427,jciTime,SM_SVC_CMD_START,11.335
00:43:31.074 Std[] Info (: ) 425,jciDbapi,SM_SVC_HANDSHAKE_DONE,11.735
00:43:31.074 Std[] Info (: ) 427,jciTime,SM_SVC_HANDSHAKE_DONE,11.737
00:43:31.074 Std[] Info (: ) 423,jciAppsdk,SM_SVC_HANDSHAKE_DONE,11.739
00:43:31.074 Std[] Info (: ) 427,jciTime,SM_SVC_CMD_STARTING,11.955
00:43:31.074 SM[208] Info (sm_eventbroker.cpp:556 sm_evt_ReportGenerator) Export command /usr/bin/top -b -n 1 > /data/top_info.out &
00:43:31.090 Std[] Info (: ) 427,jciTime,SM_SVC_CMD_STARTED,12.037
00:43:31.090 Std[] Info (: ) 469,jciBLMTIME,SM_SVC_CMD_START,12.062
00:43:31.090 Std[] Info (: ) 425,jciDbapi,SM_SVC_CMD_STARTING,12.197
00:43:31.090 Std[] Info (: ) 423,jciAppsdk,SM_SVC_CMD_STARTING,12.207
00:43:31.090 Std[] Info (: ) 425,jciDbapi,SM_SVC_CMD_STARTED,12.345
00:43:31.090 Std[] Info (: ) 469,jciBLMTIME,SM_SVC_HANDSHAKE_DONE,12.44
00:43:31.090 Std[] Info (: ) 319,jciVBS,SM_SVC_CMD_STARTED,12.486
00:43:31.090 Std[] Info (: ) 532,jciTestDiag,SM_SVC_CMD_START,12.534
00:43:31.090 Std[] Info (: ) 534,jciusbdtc,SM_SVC_CMD_START,12.542
00:43:31.090 Std[] Info (: ) Not available,xsesvc2dbus_service,SM_SVC_CMD_START,12.543
00:43:31.137 Std[] Info (: ) 535,xsesvc2dbus_service,SM_SVC_CMD_STARTING,12.602
00:43:31.137 Std[] Info (: ) Not available,xsesvc2dbus_tau,SM_SVC_CMD_START,12.602
00:43:31.137 Std[] Info (: ) 537,xsesvc2dbus_tau,SM_SVC_CMD_STARTING,12.639
00:43:31.137 Std[] Info (: ) 535,xsesvc2dbus_service,SM_SVC_CMD_STARTED,12.702
00:43:31.137 Std[] Info (: ) Not available,audio_amplifier,SM_SVC_CMD_START,12.722
00:43:31.137 Std[] Info (: ) 544,audio_amplifier,SM_SVC_CMD_STARTING,12.736
00:43:31.137 Std[] Info (: ) Not available,audio_control,SM_SVC_CMD_START,12.737
00:43:31.137 Std[] Info (: ) 546,audio_control,SM_SVC_CMD_STARTING,12.762
00:43:31.137 Std[] Info (: ) 537,xsesvc2dbus_tau,SM_SVC_CMD_STARTED,12.762
00:43:31.137 Std[] Info (: ) 423,jciAppsdk,SM_SVC_CMD_STARTED,12.94
00:43:31.137 SM[208] Info (sm_eventbroker.cpp:556 sm_evt_ReportGenerator) Export command /usr/bin/thread_netstat: fscanf
info  > /data/thread_info.out &
00:43:31.137 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:31.180 Std[] Info (: ) Not available,Opera,SM_SVC_CMD_START,12.948
00:43:31.180 Std[] Info (: ) 562,Opera,SM_SVC_CMD_STARTED,13.01
00:43:31.180 Std[] Info (: ) 469,jciBLMTIME,SM_SVC_CMD_STARTING,13.049
00:43:31.180 Std[] Info (: ) 534,jciusbdtc,SM_SVC_HANDSHAKE_DONE,13.215
00:43:31.180 Std[] Info (: ) 532,jciTestDiag,SM_SVC_HANDSHAKE_DONE,13.234
00:43:31.180 Std[] Info (: ) 469,jciBLMTIME,SM_SVC_CMD_STARTED,13.363
00:43:31.180 Std[] Info (: ) 605,jciTds,SM_SVC_CMD_START,13.379
00:43:31.180 Std[] Info (: ) 534,jciusbdtc,SM_SVC_CMD_STARTING,13.486
00:43:31.180 Std[] Info (: ) 534,jciusbdtc,SM_SVC_CMD_STARTED,13.619
00:43:31.180 Std[] Info (: ) 605,jciTds,SM_SVC_HANDSHAKE_DONE,13.731
00:43:31.180 SM[208] Info (sm_eventbroker.cpp:589 sm_evt_ReportGenerator) Console report command /jci/scripts/wait_core_finished.sh
00:43:31.310 Std[] Info (: ) 532,jciTestDiag,SM_SVC_CMD_STARTING,13.838
00:43:31.310 Std[] Info (: ) 532,jciTestDiag,SM_SVC_CMD_STARTED,14.072
00:43:31.310 Std[] Info (: ) 605,jciTds,SM_SVC_CMD_STARTING,14.119
00:43:31.310 Std[] Info (: ) 546,audio_control,SM_SVC_CMD_STARTED,14.509
00:43:31.310 Std[] Info (: ) Not available,audio_manager,SM_SVC_CMD_START,14.51
00:43:31.310 Std[] Info (: ) 704,audio_manager,SM_SVC_CMD_STARTING,14.544
00:43:31.310 Std[] Info (: ) 544,audio_amplifier,SM_SVC_CMD_STARTED,14.916
00:43:31.310 Std[] Info (: ) 704,audio_manager,SM_SVC_CMD_STARTED,15.374
00:43:31.310 Std[] Info (: ) 812,jciauxin,SM_SVC_CMD_START,15.392
00:43:31.310 Std[] Info (: ) 813,jciCD,SM_SVC_CMD_START,15.402
00:43:31.311 Std[] Info (: ) 814,jciDAB,SM_SVC_CMD_START,15.411
00:43:31.311 Std[] Info (: ) 815,jcixm,SM_SVC_CMD_START,15.414
00:43:31.311 Std[] Info (: ) 812,jciauxin,SM_SVC_HANDSHAKE_DONE,15.712
00:43:31.311 Std[] Info (: ) 814,jciDAB,SM_SVC_HANDSHAKE_DONE,15.716
00:43:31.311 Std[] Info (: ) 813,jciCD,SM_SVC_HANDSHAKE_DONE,15.72
00:43:31.311 Std[] Info (: ) 815,jcixm,SM_SVC_HANDSHAKE_DONE,15.726
00:43:31.311 Std[] Info (: ) 812,jciauxin,SM_SVC_CMD_STARTING,15.861
00:43:31.311 Std[] Info (: ) 812,jciauxin,SM_SVC_CMD_STARTED,15.952
00:43:31.311 Std[] Info (: ) 813,jciCD,SM_SVC_CMD_STARTING,16.028
00:43:31.311 Std[] Info (: ) 814,jciDAB,SM_SVC_CMD_STARTING,16.111
00:43:31.351 Std[] Info (: ) 813,jciCD,SM_SVC_CMD_STARTED,16.128
00:43:31.351 Std[] Info (: ) 815,jcixm,SM_SVC_CMD_STARTING,16.189
00:43:31.351 Std[] Info (: ) 814,jciDAB,SM_SVC_CMD_STARTED,16.287
00:43:31.351 Std[] Info (: ) 815,jcixm,SM_SVC_CMD_STARTED,16.404
00:43:31.351 Std[] Info (: ) 263,system_mazda_my14,SM_SVC_HANDSHAKE_DONE,2607.62
00:43:31.351 Std[] Info (: ) 258,jciVideoctrl,SM_SVC_HANDSHAKE_DONE,2607.63
00:43:31.351 Std[] Info (: ) 267,jciNativegui,SM_SVC_HANDSHAKE_DONE,2607.69
00:43:31.351 Std[] Info (: ) 268,settings,SM_SVC_HANDSHAKE_DONE,2607.7
00:43:31.351 Std[] Info (: ) 28778,jciNativegui,SM_SVC_CMD_START,2610.97
00:43:31.351 Std[] Info (: ) 28779,jciVideoctrl,SM_SVC_CMD_START,2610.98
00:43:31.566 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:31.569 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:31.576 VBS_BUS_CAN[319] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:43:31.576 VBS_BUS_CAN[319] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:43:31.576 VBS_BUS_CAN[319] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:43:31.576 VBS_BUS_CAN[319] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:43:31.576 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:31.576 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:31.576 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:31.576 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:31.576 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:31.576 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:31.604 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:31.604 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:31.614 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 904, Message: [1;31mWrote: core575-L_jciNativegui-SIGSEGV(11)-28552-2607-55.00.753A.core.bz2[0m
00:43:31.618 process-coredump[] Debug (: ) File: process-coredump.cpp, Function: main, Line: 1019, Message: Lock file closed
00:43:31.618 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 639, Message: LOCK FILE NAME /var/lock/LCK28542.core
00:43:31.640 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 766, Message: [1;31mProcess 28542 ("[SM]CliReqHandl") abnormally exited due to signal SIGSEGV (11) with core file: /data_persist/log/dumps/core576-[SM]CliReqHandl-SIGSEGV(11)-28542-2607-55.00.753A.core.bz2[0m
00:43:31.769 SM[208] Warn (sm_net.cpp:962 SM_NET_SocketListener) Service Manager SocketListener recv failed! Error: Connection reset by peer
00:43:31.873 SM[208] Info (sm.cpp:494 sm_HandleSvcStoppedTimeout) Pid 267 seems to have exited
00:43:31.876 SM[208] Info (sm.cpp:494 sm_HandleSvcStoppedTimeout) Pid 258 seems to have exited
00:43:32.432 SM[28227] Warn (sm.cpp:605 sm_PrintWarning) Service jciVideoctrl was not connected during timeout (5003 ms)!
00:43:32.434 SM[28227] Warn (sm.cpp:605 sm_PrintWarning) Service system_mazda_my14 was not connected during timeout (5003 ms)!
00:43:32.479 SM[28227] Warn (sm.cpp:605 sm_PrintWarning) Service jciNativegui was not connected during timeout (5003 ms)!
00:43:32.486 SM[28227] Warn (sm.cpp:605 sm_PrintWarning) Service settings was not connected during timeout (5003 ms)!
00:43:32.633 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:32.642 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:32.650 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:32.650 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:33.139 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:33.496 BLM_SETTINGS[375] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
00:43:33.612 VBS_BUS_CAN[319] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:43:33.612 VBS_BUS_CAN[319] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:43:33.612 VBS_BUS_CAN[319] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:43:33.612 VBS_BUS_CAN[319] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:43:33.615 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:33.615 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:33.615 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:33.615 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:33.615 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:33.615 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:33.648 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:33.682 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:33.682 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:33.682 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:33.682 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:34.000 BLM_TIME[469] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:43:34.002 BLM_TIME[469] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:43:34.401 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 904, Message: [1;31mWrote: core576-[SM]CliReqHandl-SIGSEGV(11)-28542-2607-55.00.753A.core.bz2[0m
00:43:34.401 process-coredump[] Debug (: ) File: process-coredump.cpp, Function: main, Line: 1019, Message: Lock file closed
00:43:34.463 BLM_SETTINGS[375] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
00:43:34.720 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:34.727 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:34.738 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:34.738 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:35.121 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:35.613 VBS_BUS_CAN[319] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:43:35.613 VBS_BUS_CAN[319] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:43:35.613 VBS_BUS_CAN[319] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:43:35.613 VBS_BUS_CAN[319] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:43:35.615 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:35.615 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:35.615 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:35.615 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:35.615 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:35.615 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:35.763 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:35.770 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:35.779 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:35.779 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:35.950 SM[208] Warn (sm.cpp:605 sm_PrintWarning) Service jciNativegui was not connected during timeout (5003 ms)!
00:43:35.974 SM[208] Warn (sm.cpp:605 sm_PrintWarning) Service jciVideoctrl was not connected during timeout (5003 ms)!
netstat: fscanf
00:43:36.581 SM[208] Info (sm_eventbroker.cpp:589 sm_evt_ReportGenerator) Console report command /jci/scripts/log-save.sh
00:43:36.628 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:36.665 Std[] Info (: ) archiving running logs...
00:43:36.822 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:36.826 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:36.838 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:36.838 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:37.000 BLM_TIME[469] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:43:37.002 BLM_TIME[469] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:43:37.121 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:37.174 SM[28227] Error (sm_eventbroker.cpp:594 sm_evt_ReportGenerator) Shell has not been loaded so command /jci/scripts/wait_core_finished.sh  failed
00:43:37.174 SM[28227] Info (sm_eventbroker.cpp:589 sm_evt_ReportGenerator) Console report command /jci/scripts/log-save.sh
archiving running logs...
00:43:37.613 VBS_BUS_CAN[319] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:43:37.613 VBS_BUS_CAN[319] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:43:37.613 VBS_BUS_CAN[319] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:43:37.613 VBS_BUS_CAN[319] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:43:37.615 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:37.615 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:37.615 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:37.615 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:37.615 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:37.615 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:37.973 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:37.976 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:37.992 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:37.992 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:39.101 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:39.108 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:39.114 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:39.121 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:39.121 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:39.514 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:39.534 BLM_SETTINGS[375] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
00:43:39.635 VBS_BUS_CAN[319] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:43:39.635 VBS_BUS_CAN[319] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:43:39.635 VBS_BUS_CAN[319] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:43:39.635 VBS_BUS_CAN[319] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:43:39.637 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:39.637 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:39.637 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:39.637 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:39.637 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:39.637 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:40.000 BLM_TIME[469] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:43:40.003 BLM_TIME[469] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:43:40.251 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:40.258 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:40.273 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:40.273 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:40.536 BLM_SETTINGS[375] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
00:43:41.109 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:41.383 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:41.393 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:41.404 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:41.404 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
netstat: fscanf
00:43:41.648 VBS_BUS_CAN[319] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:43:41.650 VBS_BUS_CAN[319] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:43:41.650 VBS_BUS_CAN[319] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:43:41.650 VBS_BUS_CAN[319] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:43:41.650 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:41.650 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:41.650 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:41.650 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:41.650 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:41.650 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:42.519 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:42.525 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:42.549 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:42.549 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:43.001 BLM_TIME[469] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:43:43.002 BLM_TIME[469] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:43:43.098 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:43.457 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:43.649 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:43.653 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:43.666 VBS_BUS_CAN[319] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:43:43.666 VBS_BUS_CAN[319] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:43:43.666 VBS_BUS_CAN[319] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:43:43.666 VBS_BUS_CAN[319] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:43:43.666 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:43.666 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:43.666 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:43.666 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:43.666 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:43.666 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:43.691 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:43.691 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:44.810 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:44.814 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:44.827 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:44.827 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:45.093 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:45.213 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:45.686 VBS_BUS_CAN[319] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:43:45.686 VBS_BUS_CAN[319] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:43:45.686 VBS_BUS_CAN[319] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:43:45.686 VBS_BUS_CAN[319] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:43:45.689 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:45.689 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:45.689 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:45.689 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:45.689 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:45.689 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:45.933 SM[208] Error (RwLock.hpp:284 lockWrite) Error: Connection timed out, with Message: Locking rwlock for write failed!Backtrace:  /jci/sm/sm() [0xcb7c] /jci/sm/sm() [0x20f7c] /jci/sm/sm() [0x2112c] /jci/sm/sm() [0x5596c] /jci/sm/sm() [0x4d4b8] /jci/sm/sm() [0x91840]
00:43:45.933 SM[208] Warn (sm_sockserver.cpp:1050 sm_sock_DisconnectedSocketAction) System call failed! Error: Connection timed out
00:43:45.933 SM[208] Warn (sm_net.cpp:1174 SM_NET_SocketListener) socket might have been closed
00:43:45.951 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:45.958 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:45.970 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:45.970 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:45.970 SM[208] Error (RwLock.hpp:284 lockWrite) Error: Connection timed out, with Message: Locking rwlock for write failed!Backtrace:  /jci/sm/sm() [0xcb7c] /jci/sm/sm() [0x20f7c] /jci/sm/sm() [0x2112c] /jci/sm/sm() [0x13bd4] /jci/sm/sm() [0x89c00]
00:43:45.970 SM[208] Warn (sm.cpp:572 sm_HandleSvcStoppedTimeout) System call failed! Error: Connection timed out
00:43:46.002 BLM_TIME[469] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:43:46.002 BLM_TIME[469] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:43:46.178 SM[208] Error (sm_net.cpp:1605 SM_NET_LockAddRemoveConnection) Locking AddRemoveConnection mutex returned 110
00:43:46.178 SM[208] Error (sm_net.cpp:1609 SM_NET_LockAddRemoveConnection) ETIMEDOUT
00:43:46.178 SM[208] Error (sm_net.cpp:860 SM_NET_SocketServer) Locking connection list not successful 104
00:43:46.269 VIDEOCTRL[28779] Info (vctrl_sm_interface.c:93 ServiceInit) Initializing VIDEOCTRL Service
00:43:46.278 VIDEOCTRL[28779] Info (vctrl_xml.c:506 VCTRL_XML_Open) XML file loaded successfully
00:43:46.278 VIDEOCTRL[28779] Info (vctrl_xml.c:92 vctrl_loadSettingsData) Number of devices = 3
00:43:46.278 VIDEOCTRL[28779] Info (vctrl_xml.c:135 vctrl_extractDeviceSettings) Device = buc -- device ID = 0, device input = 0
00:43:46.278 VIDEOCTRL[28779] Info (vctrl_xml.c:135 vctrl_extractDeviceSettings) Device = dvd -- device ID = 1, device input = 1
00:43:46.278 VIDEOCTRL[28779] Info (vctrl_xml.c:135 vctrl_extractDeviceSettings) Device = tv -- device ID = 2, device input = 1
00:43:46.278 VIDEOCTRL[28779] Info (vctrl_xml.c:48 VCTRL_XML_ReadSettingsXML) Successfully loaded and parsed video_settings.xml!
00:43:46.280 VIDEOCTRL[28779] Info (vctrl_gpio.c:150 DayNightSensor_th) Display Day/Night is not on AUTO. No action taken
00:43:46.299 NATIVEGUI[28778] Info (natgui.c:609 ServiceInit) SM Initilizing Service Native GUI.
00:43:46.299 NATIVEGUI[28778] Info (natgui.c:771 NatG_Initialize) Success in initializing queue for NATGUI
00:43:46.301 NATIVEGUI[28778] Info (natgui_settings_mgr.c:110 NatG_Settings_Init) NVRAM_Block_getValue return the currentLanguage = 0
00:43:46.301 NATIVEGUI[28778] Info (natgui.c:780 NatG_Initialize) Success in initializing settings
00:43:46.308 NATIVEGUI[28778] Info (natgui.c:789 NatG_Initialize) Success in initializing wayland window wrapper
00:43:46.314 Std[] Info (: ) Surface NATGUI_SURFACE registered
00:43:46.314 NATIVEGUI[28778] Info (natgui_surface_mgr.c:590 NatG_Redraw_Widget_Handler) NatG_Redraw_Widget_Handler
00:43:46.314 NATIVEGUI[28778] Info (natgui.c:1187 NatG_GetImageDetails) Image = IMG_BANNER (78), [/jci/nativegui/images/SafetyText_US_English.png : (0, 433)], Language = 0
00:43:46.320 NATIVEGUI[28778] Info (natgui.c:798 NatG_Initialize) Success in initializing HMI Dbus Connection
00:43:46.320 NATIVEGUI[28778] Info (natgui.c:803 NatG_Initialize) Starting the SM client for BLM Setting language status
00:43:46.325 VIDEOCTRL[28779] Info (vctrl_v4lcapture.c:843 dbus_connect)  (843) CDBusClientBase::connect - address: unix:path=/tmp/dbus_hmi_socket
00:43:46.331 NATIVEGUI[28778] Info (natgui.c:857 natg_Init_SM_Client) SM Client connection waiting for getting connected...
00:43:46.360 NATIVEGUI[28778] Info (natgui.c:1011 natg_smcl_connectCommand_cb) natg_smcl_connectCommand_cb
00:43:46.360 NATIVEGUI[28778] Info (natgui.c:1014 natg_smcl_connectCommand_cb) Received connect call back. posting smaphore (sem_post)
00:43:46.360 NATIVEGUI[28778] Info (natgui.c:860 natg_Init_SM_Client) SM Clinet connection semaphore relased.
00:43:46.360 NATIVEGUI[28778] Info (natgui.c:913 natG_smcl_SM_SubscribeSettings) Registering for SM Client subscription.
00:43:46.360 NATIVEGUI[28778] Info (natgui.c:810 NatG_Initialize) Success in subscribing to SM for BLM Settings
00:43:46.360 NATIVEGUI[28778] Info (natgui.c:982 natg_smcl_GetSMServiceList) natg_smcl_GetSMServiceList
00:43:46.360 NATIVEGUI[28778] Info (natgui.c:615 ServiceInit) Success in initilizing the Service Native GUI.
00:43:46.360 NATIVEGUI[28778] Info (natgui.c:633 ServiceRun) Running Native GUI
00:43:46.365 BUCPSA[310] Info (bucpsa_main.c:417 bucpsa_smcl_sm_nativegui_Started_cb) NATIVEGUI started running
00:43:46.373 NATIVEGUI[28778] Info (natgui.c:1049 natg_smcl_getServices_cb) natg_smcl_getServices_cb with services_count=32
00:43:46.373 NATIVEGUI[28778] Info (natgui.c:1058 natg_smcl_getServices_cb) BLM settings is already running. Get the language info
00:43:46.373 NATIVEGUI[28778] Info (natgui_interface.c:408 NatG_If_BlmSettings_Connect) Using interface com.jci.settings.nativegui_28778_1
00:43:46.373 BLM_SETTINGS[28778] Info (settings_client_funs.cpp:759 BLM_SETTINGS_Client_ExtConnect) com.jci.settings.nativegui_28778_1
00:43:46.373 VIDEOCTRL[28779] Info (vctrl_service_core.cpp:66 VCTRL_CORE_InitializeConstSettings) Setting Constant settings for device 0
00:43:46.434 BLM_SETTINGS[375] Info (settings_service_funs.cpp:1269 SETTINGS_Connect_svc) connecting client:com.jci.settings.nativegui_28778_1
00:43:46.446 BLM_SETTINGS[28778] Info (settings_client_funs.cpp:422 BLM_SEETINGS_Connect_cb) Client Name [com.jci.settings.nativegui_28778_1]
00:43:46.446 BLM_SETTINGS[28778] Info (settings_client_funs.cpp:1559 SETTINGS_Client_ExtGet_S16) client [com.jci.settings.nativegui_28778_1] com/jci/blm/settings/SystemSettings/LanguageDisplay
00:43:46.459 BLM_SETTINGS[375] Info (settings_service_funs.cpp:5921 SETTINGS_Get_Settings_S16_svc) key path : /2/com/jci/blm/settings/SystemSettings/LanguageDisplay
00:43:46.490 BLM_SETTINGS[28778] Info (settings_client_funs.cpp:1458 SETTINGS_Client_Get_S16_cb) SETTINGS_Client_Get_S16_cb
00:43:46.490 BLM_SETTINGS[28778] Info (settings_client_funs.cpp:1487 SETTINGS_Client_Get_S16_cb) Client Name [com.jci.settings.nativegui_28778_1], returned value 0 for setting ID 59
00:43:46.490 NATIVEGUI[28778] Info (natgui_interface.c:507 NatG_if_BlmSettingsCurLanguage_cb) NatG_if_BlmSettingsCurLanguage_cb. curLang=0
00:43:46.490 NATIVEGUI[28778] Info (natgui_settings_mgr.c:192 NatG_Settings_Set_Language) Updating current language (0) in NVRAM using NVRAM_Block_setValue
00:43:46.551 Std[] Info (: ) saved: logs475_core576_2616-55.00.753A.tar.bz2
00:43:46.576 SM[208] Info (sm_eventbroker.cpp:589 sm_evt_ReportGenerator) Console report command /bin/sync
00:43:46.778 SM[208] Info (sm.cpp:545 sm_HandleSvcStoppedTimeout) service jciNativegui destroyed monitored 1 pid 28778 retry_count 4 reset_board 0
00:43:46.780 SM[208] Info (sm.cpp:545 sm_HandleSvcStoppedTimeout) service jciVideoctrl destroyed monitored 1 pid 28779 retry_count 4 reset_board 0
00:43:46.780 BUCPSA[310] Info (bucpsa_main.c:433 bucpsa_smcl_sm_nativegui_Stopped_cb) NativeGUI stopped! Waiting for it to restart...
netstat: fscanf
00:43:46.917 NATIVEGUI[29601] Info (natgui.c:609 ServiceInit) SM Initilizing Service Native GUI.
00:43:46.917 NATIVEGUI[29601] Info (natgui.c:771 NatG_Initialize) Success in initializing queue for NATGUI
00:43:46.920 NATIVEGUI[29601] Info (natgui_settings_mgr.c:110 NatG_Settings_Init) NVRAM_Block_getValue return the currentLanguage = 0
00:43:46.920 NATIVEGUI[29601] Info (natgui.c:780 NatG_Initialize) Success in initializing settings
00:43:46.921 Std[] Error (: ) surface with id 'NATGUI_SURFACE' already exists
00:43:46.922 NATIVEGUI[29601] Info (natgui.c:789 NatG_Initialize) Success in initializing wayland window wrapper
00:43:46.922 NATIVEGUI[29601] Info (natgui_surface_mgr.c:590 NatG_Redraw_Widget_Handler) NatG_Redraw_Widget_Handler
00:43:46.922 NATIVEGUI[29601] Info (natgui.c:1187 NatG_GetImageDetails) Image = IMG_BANNER (78), [/jci/nativegui/images/SafetyText_US_English.png : (0, 433)], Language = 0
00:43:46.933 NATIVEGUI[29601] Error (natgui_interface.c:112 NatG_Init_Hmi_DBus) Failed to connect to HMI DBUS
00:43:46.933 NATIVEGUI[29601] Error (natgui.c:795 NatG_Initialize) Failed to create HMI dbus connection for NATGUI
00:43:46.933 NATIVEGUI[29601] Error (natgui.c:619 ServiceInit) Failed in initilizing the Service Native GUI
00:43:46.933 SM[29601] Warn (sm_svclauncher.cpp:221 sm_svclauncher_ThreadHandler) Service init_cb function returned: 1 for svc jcinativegui.
00:43:46.933 NATIVEGUI[29601] Info (natgui.c:667 ServiceTerm) Terminating RADIO Service
00:43:46.933 NATIVEGUI[29601] Info (natgui.c:898 natg_Destroy_SM_Client) natg_Destroy_SM_Client.
00:43:46.933 SM[208] Info (sm_sockserver.cpp:1661 SM_SRVR_cmd_stop_action) Waiting for processs 29601 to exit...
00:43:46.939 SM[208] Info (sm_sockserver.cpp:1664 SM_SRVR_cmd_stop_action) Process 29601 exited!
00:43:46.939 BUCPSA[310] Info (bucpsa_main.c:433 bucpsa_smcl_sm_nativegui_Stopped_cb) NativeGUI stopped! Waiting for it to restart...
00:43:46.959 SM[208] Info (sm.cpp:811 sm_ActionsForStoppedService) Svc jciNativegui[29601] stopped!
00:43:47.083 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:47.103 NATIVEGUI[29620] Info (natgui.c:609 ServiceInit) SM Initilizing Service Native GUI.
00:43:47.103 NATIVEGUI[29620] Info (natgui.c:771 NatG_Initialize) Success in initializing queue for NATGUI
00:43:47.105 NATIVEGUI[29620] Info (natgui_settings_mgr.c:110 NatG_Settings_Init) NVRAM_Block_getValue return the currentLanguage = 0
00:43:47.105 NATIVEGUI[29620] Info (natgui.c:780 NatG_Initialize) Success in initializing settings
00:43:47.142 NATIVEGUI[29620] Info (natgui.c:789 NatG_Initialize) Success in initializing wayland window wrapper
00:43:47.144 NATIVEGUI[29620] Info (natgui_surface_mgr.c:590 NatG_Redraw_Widget_Handler) NatG_Redraw_Widget_Handler
00:43:47.144 NATIVEGUI[29620] Info (natgui.c:1187 NatG_GetImageDetails) Image = IMG_BANNER (78), [/jci/nativegui/images/SafetyText_US_English.png : (0, 433)], Language = 0
00:43:47.147 NATIVEGUI[29620] Error (natgui_interface.c:112 NatG_Init_Hmi_DBus) Failed to connect to HMI DBUS
00:43:47.148 NATIVEGUI[29620] Error (natgui.c:795 NatG_Initialize) Failed to create HMI dbus connection for NATGUI
00:43:47.148 NATIVEGUI[29620] Error (natgui.c:619 ServiceInit) Failed in initilizing the Service Native GUI
00:43:47.148 SM[29620] Warn (sm_svclauncher.cpp:221 sm_svclauncher_ThreadHandler) Service init_cb function returned: 1 for svc jcinativegui.
00:43:47.148 NATIVEGUI[29620] Info (natgui.c:667 ServiceTerm) Terminating RADIO Service
00:43:47.148 NATIVEGUI[29620] Info (natgui.c:898 natg_Destroy_SM_Client) natg_Destroy_SM_Client.
00:43:47.154 SM[208] Info (sm_sockserver.cpp:1661 SM_SRVR_cmd_stop_action) Waiting for processs 29620 to exit...
00:43:47.158 Std[] Error (: ) surface with id 'NATGUI_SURFACE' already exists
00:43:47.164 SM[208] Info (sm_sockserver.cpp:1664 SM_SRVR_cmd_stop_action) Process 29620 exited!
00:43:47.164 BUCPSA[310] Info (bucpsa_main.c:433 bucpsa_smcl_sm_nativegui_Stopped_cb) NativeGUI stopped! Waiting for it to restart...
00:43:47.164 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:47.188 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:47.188 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:47.188 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:47.188 SM[208] Info (sm.cpp:811 sm_ActionsForStoppedService) Svc jciNativegui[29620] stopped!
stat: can't stat '/tmp/running_logs.tar.bz2': No such file or directory
00:43:47.333 NATIVEGUI[29638] Info (natgui.c:609 ServiceInit) SM Initilizing Service Native GUI.
00:43:47.333 NATIVEGUI[29638] Info (natgui.c:771 NatG_Initialize) Success in initializing queue for NATGUI
00:43:47.334 NATIVEGUI[29638] Info (natgui_settings_mgr.c:110 NatG_Settings_Init) NVRAM_Block_getValue return the currentLanguage = 0
00:43:47.334 NATIVEGUI[29638] Info (natgui.c:780 NatG_Initialize) Success in initializing settings
00:43:47.373 VIDEOCTRL[28779] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Did not receive a reply. Possible causes include: the remote application did not send a reply, the message bus security policy blocked the reply, the reply timeout expired, or the network connection was broken. - methodName: setRegisterValue
00:43:47.373 VIDEOCTRL[28779] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:47.373 VIDEOCTRL[28779] Error (vctrl_v4lcapture.c:300 VCTRL2V4LCAPTURE_setRegisterSubmap2) Failed to Open Submap 2
00:43:47.377 NATIVEGUI[29638] Info (natgui.c:789 NatG_Initialize) Success in initializing wayland window wrapper
00:43:47.377 NATIVEGUI[29638] Info (natgui_surface_mgr.c:590 NatG_Redraw_Widget_Handler) NatG_Redraw_Widget_Handler
00:43:47.377 NATIVEGUI[29638] Info (natgui.c:1187 NatG_GetImageDetails) Image = IMG_BANNER (78), [/jci/nativegui/images/SafetyText_US_English.png : (0, 433)], Language = 0
00:43:47.382 NATIVEGUI[29638] Error (natgui_interface.c:112 NatG_Init_Hmi_DBus) Failed to connect to HMI DBUS
00:43:47.382 NATIVEGUI[29638] Error (natgui.c:795 NatG_Initialize) Failed to create HMI dbus connection for NATGUI
00:43:47.382 NATIVEGUI[29638] Error (natgui.c:619 ServiceInit) Failed in initilizing the Service Native GUI
00:43:47.382 SM[29638] Warn (sm_svclauncher.cpp:221 sm_svclauncher_ThreadHandler) Service init_cb function returned: 1 for svc jcinativegui.
00:43:47.382 NATIVEGUI[29638] Info (natgui.c:667 ServiceTerm) Terminating RADIO Service
00:43:47.382 NATIVEGUI[29638] Info (natgui.c:898 natg_Destroy_SM_Client) natg_Destroy_SM_Client.
00:43:47.391 SM[208] Info (sm_sockserver.cpp:1661 SM_SRVR_cmd_stop_action) Waiting for processs 29638 to exit...
mv: can't rename '/tmp/running_logs.tar.bz2': No such file or directory
saved: logs475_core576_2617-55.00.753A.tar.bz2
00:43:47.400 Std[] Error (: ) surface with id 'NATGUI_SURFACE' already exists
00:43:47.401 SM[208] Info (sm_sockserver.cpp:1664 SM_SRVR_cmd_stop_action) Process 29638 exited!
00:43:47.401 BUCPSA[310] Info (bucpsa_main.c:433 bucpsa_smcl_sm_nativegui_Stopped_cb) NativeGUI stopped! Waiting for it to restart...
00:43:47.418 SM[208] Info (sm.cpp:811 sm_ActionsForStoppedService) Svc jciNativegui[29638] stopped!
00:43:47.418 SM[28227] Error (sm_eventbroker.cpp:594 sm_evt_ReportGenerator) Shell has not been loaded so command /jci/scripts/log-save.sh  failed
00:43:47.418 SM[28227] Info (sm_eventbroker.cpp:589 sm_evt_ReportGenerator) Console report command /bin/sync
00:43:47.519 SM[28227] Error (sm_eventbroker.cpp:594 sm_evt_ReportGenerator) Shell has not been loaded so command /bin/sync  failed
00:43:47.519 SM[28227] Error (sm.cpp:1438 main) Process "jciVideoctrl" (28542) terminated due to signal 11
00:43:47.519 SM[28227] Error (sm.cpp:1438 main) Process "jciNativegui" (28552) terminated due to signal 11
00:43:47.545 SM[28227] Info (sm.cpp:811 sm_ActionsForStoppedService) Svc jciNativegui[28552] stopped!
00:43:47.545 SM[28227] Info (sm.cpp:811 sm_ActionsForStoppedService) Svc jciVideoctrl[28542] stopped!
00:43:47.545 NATIVEGUI[29668] Info (natgui.c:609 ServiceInit) SM Initilizing Service Native GUI.
00:43:47.545 NATIVEGUI[29668] Info (natgui.c:771 NatG_Initialize) Success in initializing queue for NATGUI
00:43:47.547 NATIVEGUI[29668] Info (natgui_settings_mgr.c:110 NatG_Settings_Init) NVRAM_Block_getValue return the currentLanguage = 0
00:43:47.547 NATIVEGUI[29668] Info (natgui.c:780 NatG_Initialize) Success in initializing settings
00:43:47.592 NATIVEGUI[29668] Info (natgui.c:789 NatG_Initialize) Success in initializing wayland window wrapper
00:43:47.597 NATIVEGUI[29668] Error (natgui_interface.c:112 NatG_Init_Hmi_DBus) Failed to connect to HMI DBUS
00:43:47.597 NATIVEGUI[29668] Error (natgui.c:795 NatG_Initialize) Failed to create HMI dbus connection for NATGUI
00:43:47.597 NATIVEGUI[29668] Error (natgui.c:619 ServiceInit) Failed in initilizing the Service Native GUI
00:43:47.597 SM[29668] Warn (sm_svclauncher.cpp:221 sm_svclauncher_ThreadHandler) Service init_cb function returned: 1 for svc jcinativegui.
00:43:47.597 NATIVEGUI[29668] Info (natgui.c:667 ServiceTerm) Terminating RADIO Service
00:43:47.597 NATIVEGUI[29668] Info (natgui.c:898 natg_Destroy_SM_Client) natg_Destroy_SM_Client.
00:43:47.597 SM[208] Info (sm_sockserver.cpp:1661 SM_SRVR_cmd_stop_action) Waiting for processs 29668 to exit...
00:43:47.607 Std[] Error (: ) surface with id 'NATGUI_SURFACE' already exists
00:43:47.613 SM[208] Info (sm_sockserver.cpp:1664 SM_SRVR_cmd_stop_action) Process 29668 exited!
00:43:47.613 BUCPSA[310] Info (bucpsa_main.c:433 bucpsa_smcl_sm_nativegui_Stopped_cb) NativeGUI stopped! Waiting for it to restart...
00:43:47.653 SM[208] Info (sm.cpp:811 sm_ActionsForStoppedService) Svc jciNativegui[29668] stopped!
00:43:47.700 VBS_BUS_CAN[319] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:43:47.700 VBS_BUS_CAN[319] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:43:47.700 VBS_BUS_CAN[319] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:43:47.700 VBS_BUS_CAN[319] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:43:47.702 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:47.702 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:47.702 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:47.702 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:47.702 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:47.702 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:47.722 SM[208] Error (sm_sockserver.cpp:1178 SM_SRVR_cmd_handshake_action) config_node->sock_element was not NULL in handshaking
00:43:47.722 SM[208] Error (sm_sockserver.cpp:1179 SM_SRVR_cmd_handshake_action) sock 5 name jciVideoctrl
00:43:47.833 SM[208] Warn (sm_sockserver.cpp:1528 SM_SRVR_cmd_starting_action) not a valid state change request svc jciVideoctrl state 1
00:43:47.833 VIDEOCTRL[29688] Info (vctrl_sm_interface.c:93 ServiceInit) Initializing VIDEOCTRL Service
00:43:47.844 VIDEOCTRL[29688] Info (vctrl_gpio.c:150 DayNightSensor_th) Display Day/Night is not on AUTO. No action taken
00:43:47.845 VIDEOCTRL[29688] Info (vctrl_xml.c:506 VCTRL_XML_Open) XML file loaded successfully
00:43:47.845 VIDEOCTRL[29688] Info (vctrl_xml.c:92 vctrl_loadSettingsData) Number of devices = 3
00:43:47.845 VIDEOCTRL[29688] Info (vctrl_xml.c:135 vctrl_extractDeviceSettings) Device = buc -- device ID = 0, device input = 0
00:43:47.845 VIDEOCTRL[29688] Info (vctrl_xml.c:135 vctrl_extractDeviceSettings) Device = dvd -- device ID = 1, device input = 1
00:43:47.845 VIDEOCTRL[29688] Info (vctrl_xml.c:135 vctrl_extractDeviceSettings) Device = tv -- device ID = 2, device input = 1
00:43:47.845 VIDEOCTRL[29688] Info (vctrl_xml.c:48 VCTRL_XML_ReadSettingsXML) Successfully loaded and parsed video_settings.xml!
00:43:47.856 NATIVEGUI[29687] Info (natgui.c:609 ServiceInit) SM Initilizing Service Native GUI.
00:43:47.856 NATIVEGUI[29687] Info (natgui.c:771 NatG_Initialize) Success in initializing queue for NATGUI
00:43:47.862 NATIVEGUI[29687] Info (natgui_settings_mgr.c:110 NatG_Settings_Init) NVRAM_Block_getValue return the currentLanguage = 0
00:43:47.862 NATIVEGUI[29687] Info (natgui.c:780 NatG_Initialize) Success in initializing settings
00:43:47.866 SM[208] Error (sm_sockserver.cpp:1178 SM_SRVR_cmd_handshake_action) config_node->sock_element was not NULL in handshaking
00:43:47.866 SM[208] Error (sm_sockserver.cpp:1179 SM_SRVR_cmd_handshake_action) sock 7 name jciNativegui
00:43:47.899 VIDEOCTRL[29688] Info (vctrl_v4lcapture.c:843 dbus_connect)  (843) CDBusClientBase::connect - address: unix:path=/tmp/dbus_hmi_socket
00:43:47.906 VIDEOCTRL[29688] Error (vctrl_v4lcapture.c:887 dbus_connect) CDBusClientBase::connect - Not Primary Owner ret: 2
00:43:47.908 NATIVEGUI[29687] Info (natgui.c:789 NatG_Initialize) Success in initializing wayland window wrapper
00:43:47.914 VIDEOCTRL[29688] Info (vctrl_service_core.cpp:66 VCTRL_CORE_InitializeConstSettings) Setting Constant settings for device 0
00:43:47.914 VIDEOCTRL[29688] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:47.914 VIDEOCTRL[29688] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:47.914 VIDEOCTRL[29688] Error (vctrl_v4lcapture.c:300 VCTRL2V4LCAPTURE_setRegisterSubmap2) Failed to Open Submap 2
00:43:47.914 VIDEOCTRL[29688] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:47.914 VIDEOCTRL[29688] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:47.914 VIDEOCTRL[29688] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:47.914 VIDEOCTRL[29688] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:47.914 VIDEOCTRL[29688] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:47.914 VIDEOCTRL[29688] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:47.914 VIDEOCTRL[29688] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:47.914 VIDEOCTRL[29688] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:47.914 VIDEOCTRL[29688] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:47.914 VIDEOCTRL[29688] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:47.914 VIDEOCTRL[29688] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:47.914 VIDEOCTRL[29688] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:47.914 VIDEOCTRL[29688] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:43:47.914 VIDEOCTRL[29688] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:43:47.914 VIDEOCTRL[29688] Info (vctrl_service_core.cpp:110 VCTRL_CORE_GetDayNightMode) Value read from NVRAM day for node 'lvds_bright_mode'
00:43:47.914 VIDEOCTRL[29688] Info (vctrl_settings.c:237 BLM_VCTRL_OnChange_DayNight_Callback) DayNight Changed - value: DAY
00:43:47.914 VIDEOCTRL[29688] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setBrightness
00:43:47.914 VIDEOCTRL[29688] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setBrightness
00:43:47.914 VIDEOCTRL[29688] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:43:47.914 VIDEOCTRL[29688] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:43:47.914 VIDEOCTRL[29688] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setContrast
00:43:47.914 VIDEOCTRL[29688] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setContrast
00:43:47.914 VIDEOCTRL[29688] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:43:47.914 VIDEOCTRL[29688] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:43:47.914 VIDEOCTRL[29688] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setHue
00:43:47.914 VIDEOCTRL[29688] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setHue
00:43:47.914 VIDEOCTRL[29688] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:43:47.914 VIDEOCTRL[29688] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:43:47.914 VIDEOCTRL[29688] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:47.914 VIDEOCTRL[29688] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:47.914 VIDEOCTRL[29688] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:43:47.914 NATIVEGUI[29687] Error (natgui_interface.c:112 NatG_Init_Hmi_DBus) Failed to connect to HMI DBUS
00:43:47.914 NATIVEGUI[29687] Error (natgui.c:795 NatG_Initialize) Failed to create HMI dbus connection for NATGUI
00:43:47.914 NATIVEGUI[29687] Error (natgui.c:619 ServiceInit) Failed in initilizing the Service Native GUI
00:43:47.914 SM[29687] Warn (sm_svclauncher.cpp:221 sm_svclauncher_ThreadHandler) Service init_cb function returned: 1 for svc jcinativegui.
00:43:47.914 NATIVEGUI[29687] Info (natgui.c:667 ServiceTerm) Terminating RADIO Service
00:43:47.914 NATIVEGUI[29687] Info (natgui.c:898 natg_Destroy_SM_Client) natg_Destroy_SM_Client.
00:43:47.914 VIDEOCTRL[29688] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:43:47.914 SM[208] Info (sm_sockserver.cpp:1661 SM_SRVR_cmd_stop_action) Waiting for processs 29694 to exit...
00:43:47.914 VIDEOCTRL[29688] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:47.914 SM[28227] Error (sm.cpp:1428 main) Process "jciNativegui" (29687) exited with status 0
00:43:47.914 VIDEOCTRL[29688] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:47.914 VIDEOCTRL[29688] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:43:47.914 VIDEOCTRL[29688] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:43:47.914 VIDEOCTRL[29688] Info (vctrl_settings.c:95 VCTRL2BLM_SETTINGS_UpdateIsNight) LOADED NEW VIDEO SETTINGS
00:43:47.914 VIDEOCTRL[29688] Info (vctrl_service_core.cpp:89 VCTRL_CORE_UpdateAllOtherSettings) Updating settings for device dvd
00:43:47.914 VIDEOCTRL[29688] Info (vctrl_service_core.cpp:89 VCTRL_CORE_UpdateAllOtherSettings) Updating settings for device tv
00:43:47.914 VIDEOCTRL[29688] Info (vctrl_settings.c:102 VCTRL2BLM_SETTINGS_UpdateIsNight) Sent new video settings to MMUI
00:43:47.941 Std[] Error (: ) surface with id 'NATGUI_SURFACE' already exists
00:43:47.966 SM[29688] Warn (sm_svclauncher.cpp:221 sm_svclauncher_ThreadHandler) Service init_cb function returned: 1 for svc jciVideoctrl.
00:43:47.966 BLM_SETTINGS[29688] Info (settings_client_funs.cpp:880 BLM_SETTINGS_Client_ExtDisconnect) BLM_SETTINGS_Client_ExtDisconnect
00:43:47.966 BLM_SETTINGS[29688] Error (settings_client_funs.cpp:900 BLM_SETTINGS_Client_ExtDisconnect) client is NOT connected conn:(nil)
00:43:47.966 SM[28227] Info (sm.cpp:811 sm_ActionsForStoppedService) Svc jciNativegui[29687] stopped!
00:43:47.979 NATIVEGUI[29694] Info (natgui.c:609 ServiceInit) SM Initilizing Service Native GUI.
00:43:47.979 NATIVEGUI[29694] Info (natgui.c:771 NatG_Initialize) Success in initializing queue for NATGUI
00:43:47.982 NATIVEGUI[29694] Info (natgui_settings_mgr.c:110 NatG_Settings_Init) NVRAM_Block_getValue return the currentLanguage = 0
00:43:47.982 NATIVEGUI[29694] Info (natgui.c:780 NatG_Initialize) Success in initializing settings
00:43:47.984 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 556, Message: version: 55.00.753A, length 16
00:43:47.986 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 639, Message: LOCK FILE NAME /var/lock/LCK29688.core
00:43:48.025 NATIVEGUI[29694] Info (natgui.c:789 NatG_Initialize) Success in initializing wayland window wrapper
00:43:48.031 NATIVEGUI[29694] Error (natgui_interface.c:112 NatG_Init_Hmi_DBus) Failed to connect to HMI DBUS
00:43:48.031 NATIVEGUI[29694] Error (natgui.c:795 NatG_Initialize) Failed to create HMI dbus connection for NATGUI
00:43:48.031 NATIVEGUI[29694] Error (natgui.c:619 ServiceInit) Failed in initilizing the Service Native GUI
00:43:48.031 SM[29694] Warn (sm_svclauncher.cpp:221 sm_svclauncher_ThreadHandler) Service init_cb function returned: 1 for svc jcinativegui.
00:43:48.031 NATIVEGUI[29694] Info (natgui.c:667 ServiceTerm) Terminating RADIO Service
00:43:48.031 NATIVEGUI[29694] Info (natgui.c:898 natg_Destroy_SM_Client) natg_Destroy_SM_Client.
00:43:48.034 SM[208] Info (sm_sockserver.cpp:1661 SM_SRVR_cmd_stop_action) Waiting for processs 29694 to exit...
00:43:48.040 Std[] Error (: ) surface with id 'NATGUI_SURFACE' already exists
00:43:48.044 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 766, Message: [1;31mProcess 29688 ("[SM]CliReqHandl") abnormally exited due to signal SIGSEGV (11) with core file: /data_persist/log/dumps/core577-[SM]CliReqHandl-SIGSEGV(11)-29688-2627-55.00.753A.core.bz2[0m
00:43:48.047 SM[208] Info (sm_sockserver.cpp:1664 SM_SRVR_cmd_stop_action) Process 29694 exited!
00:43:48.047 SM[208] Info (sm_sockserver.cpp:1664 SM_SRVR_cmd_stop_action) Process 29694 exited!
00:43:48.047 BUCPSA[310] Info (bucpsa_main.c:433 bucpsa_smcl_sm_nativegui_Stopped_cb) NativeGUI stopped! Waiting for it to restart...
00:43:48.066 SM[208] Info (sm.cpp:811 sm_ActionsForStoppedService) Svc jciNativegui[29694] stopped!
00:43:48.066 SM[208] Critical (sm.cpp:2049 SM_StartNeededChildren) SM detected that the service "jciNativegui"[-1] exited.
00:43:48.068 BUCPSA[310] Info (bucpsa_main.c:433 bucpsa_smcl_sm_nativegui_Stopped_cb) NativeGUI stopped! Waiting for it to restart...
00:43:48.212 SM[208] Warn (sm_net.cpp:962 SM_NET_SocketListener) Service Manager SocketListener recv failed! Error: Connection reset by peer
00:43:48.212 SM[28227] Error (sm.cpp:1438 main) Process "jciVideoctrl" (29688) terminated due to signal 11
00:43:48.224 VIDEOCTRL[29736] Info (vctrl_sm_interface.c:93 ServiceInit) Initializing VIDEOCTRL Service
00:43:48.233 VIDEOCTRL[29736] Info (vctrl_gpio.c:150 DayNightSensor_th) Display Day/Night is not on AUTO. No action taken
00:43:48.233 VIDEOCTRL[29736] Info (vctrl_xml.c:506 VCTRL_XML_Open) XML file loaded successfully
00:43:48.233 VIDEOCTRL[29736] Info (vctrl_xml.c:92 vctrl_loadSettingsData) Number of devices = 3
00:43:48.233 VIDEOCTRL[29736] Info (vctrl_xml.c:135 vctrl_extractDeviceSettings) Device = buc -- device ID = 0, device input = 0
00:43:48.233 VIDEOCTRL[29736] Info (vctrl_xml.c:135 vctrl_extractDeviceSettings) Device = dvd -- device ID = 1, device input = 1
00:43:48.238 VIDEOCTRL[29736] Info (vctrl_xml.c:135 vctrl_extractDeviceSettings) Device = tv -- device ID = 2, device input = 1
00:43:48.238 VIDEOCTRL[29736] Info (vctrl_xml.c:48 VCTRL_XML_ReadSettingsXML) Successfully loaded and parsed video_settings.xml!
00:43:48.241 SM[28227] Info (sm.cpp:811 sm_ActionsForStoppedService) Svc jciVideoctrl[29688] stopped!
00:43:48.248 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:48.253 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:48.268 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:48.268 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:48.268 NATIVEGUI[29735] Info (natgui.c:609 ServiceInit) SM Initilizing Service Native GUI.
00:43:48.268 SM[208] Warn (sm_sockserver.cpp:1528 SM_SRVR_cmd_starting_action) not a valid state change request svc jciNativegui state 1
00:43:48.268 NATIVEGUI[29735] Info (natgui.c:771 NatG_Initialize) Success in initializing queue for NATGUI
00:43:48.271 NATIVEGUI[29735] Info (natgui_settings_mgr.c:110 NatG_Settings_Init) NVRAM_Block_getValue return the currentLanguage = 0
00:43:48.271 NATIVEGUI[29735] Info (natgui.c:780 NatG_Initialize) Success in initializing settings
00:43:48.274 Std[] Error (: ) surface with id 'NATGUI_SURFACE' already exists
00:43:48.275 NATIVEGUI[29735] Info (natgui.c:789 NatG_Initialize) Success in initializing wayland window wrapper
00:43:48.287 NATIVEGUI[29735] Error (natgui_interface.c:112 NatG_Init_Hmi_DBus) Failed to connect to HMI DBUS
00:43:48.287 NATIVEGUI[29735] Error (natgui.c:795 NatG_Initialize) Failed to create HMI dbus connection for NATGUI
00:43:48.287 NATIVEGUI[29735] Error (natgui.c:619 ServiceInit) Failed in initilizing the Service Native GUI
00:43:48.287 SM[29735] Warn (sm_svclauncher.cpp:221 sm_svclauncher_ThreadHandler) Service init_cb function returned: 1 for svc jcinativegui.
00:43:48.287 NATIVEGUI[29735] Info (natgui.c:667 ServiceTerm) Terminating RADIO Service
00:43:48.287 NATIVEGUI[29735] Info (natgui.c:898 natg_Destroy_SM_Client) natg_Destroy_SM_Client.
00:43:48.315 VIDEOCTRL[29736] Info (vctrl_v4lcapture.c:843 dbus_connect)  (843) CDBusClientBase::connect - address: unix:path=/tmp/dbus_hmi_socket
00:43:48.315 VIDEOCTRL[29736] Error (vctrl_v4lcapture.c:887 dbus_connect) CDBusClientBase::connect - Not Primary Owner ret: 2
00:43:48.328 VIDEOCTRL[29736] Info (vctrl_service_core.cpp:66 VCTRL_CORE_InitializeConstSettings) Setting Constant settings for device 0
00:43:48.328 VIDEOCTRL[29736] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:48.328 VIDEOCTRL[29736] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:48.328 VIDEOCTRL[29736] Error (vctrl_v4lcapture.c:300 VCTRL2V4LCAPTURE_setRegisterSubmap2) Failed to Open Submap 2
00:43:48.328 VIDEOCTRL[29736] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:48.328 VIDEOCTRL[29736] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:48.328 VIDEOCTRL[29736] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:48.328 VIDEOCTRL[29736] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:48.328 VIDEOCTRL[29736] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:48.328 VIDEOCTRL[29736] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:48.328 VIDEOCTRL[29736] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:48.328 VIDEOCTRL[29736] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:48.328 VIDEOCTRL[29736] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:48.328 VIDEOCTRL[29736] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:48.328 VIDEOCTRL[29736] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:48.328 VIDEOCTRL[29736] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:48.328 VIDEOCTRL[29736] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:43:48.328 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 556, Message: version: 55.00.753A, length 16
00:43:48.328 VIDEOCTRL[29736] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:43:48.328 VIDEOCTRL[29736] Info (vctrl_service_core.cpp:110 VCTRL_CORE_GetDayNightMode) Value read from NVRAM day for node 'lvds_bright_mode'
00:43:48.328 VIDEOCTRL[29736] Info (vctrl_settings.c:237 BLM_VCTRL_OnChange_DayNight_Callback) DayNight Changed - value: DAY
00:43:48.328 VIDEOCTRL[29736] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setBrightness
00:43:48.328 VIDEOCTRL[29736] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setBrightness
00:43:48.328 VIDEOCTRL[29736] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:43:48.328 VIDEOCTRL[29736] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:43:48.328 VIDEOCTRL[29736] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setContrast
00:43:48.328 VIDEOCTRL[29736] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setContrast
00:43:48.328 VIDEOCTRL[29736] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:43:48.328 VIDEOCTRL[29736] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:43:48.328 VIDEOCTRL[29736] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setHue
00:43:48.328 VIDEOCTRL[29736] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setHue
00:43:48.328 VIDEOCTRL[29736] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:43:48.328 VIDEOCTRL[29736] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:43:48.328 VIDEOCTRL[29736] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:48.328 VIDEOCTRL[29736] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:48.328 VIDEOCTRL[29736] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:43:48.328 VIDEOCTRL[29736] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:43:48.328 VIDEOCTRL[29736] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:48.328 VIDEOCTRL[29736] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:48.328 VIDEOCTRL[29736] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:43:48.328 VIDEOCTRL[29736] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:43:48.328 VIDEOCTRL[29736] Info (vctrl_settings.c:95 VCTRL2BLM_SETTINGS_UpdateIsNight) LOADED NEW VIDEO SETTINGS
00:43:48.328 VIDEOCTRL[29736] Info (vctrl_service_core.cpp:89 VCTRL_CORE_UpdateAllOtherSettings) Updating settings for device dvd
00:43:48.328 VIDEOCTRL[29736] Info (vctrl_service_core.cpp:89 VCTRL_CORE_UpdateAllOtherSettings) Updating settings for device tv
00:43:48.328 VIDEOCTRL[29736] Info (vctrl_settings.c:102 VCTRL2BLM_SETTINGS_UpdateIsNight) Sent new video settings to MMUI
00:43:48.328 SM[29736] Warn (sm_svclauncher.cpp:221 sm_svclauncher_ThreadHandler) Service init_cb function returned: 1 for svc jciVideoctrl.
00:43:48.328 BLM_SETTINGS[29736] Info (settings_client_funs.cpp:880 BLM_SETTINGS_Client_ExtDisconnect) BLM_SETTINGS_Client_ExtDisconnect
00:43:48.328 BLM_SETTINGS[29736] Error (settings_client_funs.cpp:900 BLM_SETTINGS_Client_ExtDisconnect) client is NOT connected conn:(nil)
00:43:48.328 SM[208] Info (sm_sockserver.cpp:1661 SM_SRVR_cmd_stop_action) Waiting for processs 29736 to exit...
00:43:48.328 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:48.386 VIDEOCTRL[28779] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Did not receive a reply. Possible causes include: the remote application did not send a reply, the message bus security policy blocked the reply, the reply timeout expired, or the network connection was broken. - methodName: setRegisterValue
00:43:48.386 VIDEOCTRL[28779] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:48.391 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 556, Message: version: 55.00.753A, length 16
00:43:48.415 SM[208] Error (sm_sockserver.cpp:1178 SM_SRVR_cmd_handshake_action) config_node->sock_element was not NULL in handshaking
00:43:48.415 SM[208] Error (sm_sockserver.cpp:1179 SM_SRVR_cmd_handshake_action) sock 40 name jciVideoctrl
00:43:48.452 VIDEOCTRL[29763] Info (vctrl_sm_interface.c:93 ServiceInit) Initializing VIDEOCTRL Service
00:43:48.458 VIDEOCTRL[29763] Info (vctrl_xml.c:506 VCTRL_XML_Open) XML file loaded successfully
00:43:48.458 VIDEOCTRL[29763] Info (vctrl_xml.c:92 vctrl_loadSettingsData) Number of devices = 3
00:43:48.458 VIDEOCTRL[29763] Info (vctrl_xml.c:135 vctrl_extractDeviceSettings) Device = buc -- device ID = 0, device input = 0
00:43:48.458 VIDEOCTRL[29763] Info (vctrl_xml.c:135 vctrl_extractDeviceSettings) Device = dvd -- device ID = 1, device input = 1
00:43:48.458 VIDEOCTRL[29763] Info (vctrl_xml.c:135 vctrl_extractDeviceSettings) Device = tv -- device ID = 2, device input = 1
00:43:48.458 VIDEOCTRL[29763] Info (vctrl_xml.c:48 VCTRL_XML_ReadSettingsXML) Successfully loaded and parsed video_settings.xml!
00:43:48.461 VIDEOCTRL[29763] Info (vctrl_gpio.c:150 DayNightSensor_th) Display Day/Night is not on AUTO. No action taken
00:43:48.481 VIDEOCTRL[29763] Info (vctrl_v4lcapture.c:843 dbus_connect)  (843) CDBusClientBase::connect - address: unix:path=/tmp/dbus_hmi_socket
00:43:48.489 VIDEOCTRL[29763] Error (vctrl_v4lcapture.c:887 dbus_connect) CDBusClientBase::connect - Not Primary Owner ret: 2
00:43:48.495 VIDEOCTRL[29763] Info (vctrl_service_core.cpp:66 VCTRL_CORE_InitializeConstSettings) Setting Constant settings for device 0
00:43:48.495 VIDEOCTRL[29763] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:48.495 VIDEOCTRL[29763] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:48.495 VIDEOCTRL[29763] Error (vctrl_v4lcapture.c:300 VCTRL2V4LCAPTURE_setRegisterSubmap2) Failed to Open Submap 2
00:43:48.495 VIDEOCTRL[29763] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:48.495 VIDEOCTRL[29763] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:48.495 VIDEOCTRL[29763] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:48.495 VIDEOCTRL[29763] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:48.495 VIDEOCTRL[29763] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:48.495 VIDEOCTRL[29763] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:48.495 VIDEOCTRL[29763] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:48.495 VIDEOCTRL[29763] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:48.495 VIDEOCTRL[29763] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:48.495 VIDEOCTRL[29763] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:48.495 VIDEOCTRL[29763] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:48.495 VIDEOCTRL[29763] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:48.495 VIDEOCTRL[29763] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:43:48.495 VIDEOCTRL[29763] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:43:48.495 VIDEOCTRL[29763] Info (vctrl_service_core.cpp:110 VCTRL_CORE_GetDayNightMode) Value read from NVRAM day for node 'lvds_bright_mode'
00:43:48.495 VIDEOCTRL[29763] Info (vctrl_settings.c:237 BLM_VCTRL_OnChange_DayNight_Callback) DayNight Changed - value: DAY
00:43:48.495 VIDEOCTRL[29763] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setBrightness
00:43:48.495 VIDEOCTRL[29763] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setBrightness
00:43:48.495 VIDEOCTRL[29763] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:43:48.495 VIDEOCTRL[29763] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:43:48.495 VIDEOCTRL[29763] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setContrast
00:43:48.495 VIDEOCTRL[29763] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setContrast
00:43:48.495 VIDEOCTRL[29763] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:43:48.495 VIDEOCTRL[29763] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:43:48.495 VIDEOCTRL[29763] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setHue
00:43:48.495 VIDEOCTRL[29763] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setHue
00:43:48.495 VIDEOCTRL[29763] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:43:48.495 VIDEOCTRL[29763] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:43:48.495 VIDEOCTRL[29763] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:48.495 VIDEOCTRL[29763] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:48.495 VIDEOCTRL[29763] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:43:48.495 VIDEOCTRL[29763] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:43:48.495 VIDEOCTRL[29763] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:48.495 VIDEOCTRL[29763] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:48.495 VIDEOCTRL[29763] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:43:48.495 VIDEOCTRL[29763] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:43:48.495 VIDEOCTRL[29763] Info (vctrl_settings.c:95 VCTRL2BLM_SETTINGS_UpdateIsNight) LOADED NEW VIDEO SETTINGS
00:43:48.495 VIDEOCTRL[29763] Info (vctrl_service_core.cpp:89 VCTRL_CORE_UpdateAllOtherSettings) Updating settings for device dvd
00:43:48.495 VIDEOCTRL[29763] Info (vctrl_service_core.cpp:89 VCTRL_CORE_UpdateAllOtherSettings) Updating settings for device tv
00:43:48.495 VIDEOCTRL[29763] Info (vctrl_settings.c:102 VCTRL2BLM_SETTINGS_UpdateIsNight) Sent new video settings to MMUI
00:43:48.534 SM[29763] Warn (sm_svclauncher.cpp:221 sm_svclauncher_ThreadHandler) Service init_cb function returned: 1 for svc jciVideoctrl.
00:43:48.534 BLM_SETTINGS[29763] Info (settings_client_funs.cpp:880 BLM_SETTINGS_Client_ExtDisconnect) BLM_SETTINGS_Client_ExtDisconnect
00:43:48.534 BLM_SETTINGS[29763] Error (settings_client_funs.cpp:900 BLM_SETTINGS_Client_ExtDisconnect) client is NOT connected conn:(nil)
00:43:48.534 SM[208] Info (sm_sockserver.cpp:1661 SM_SRVR_cmd_stop_action) Waiting for processs 29736 to exit...
00:43:48.552 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 556, Message: version: 55.00.753A, length 16
00:43:49.000 BLM_TIME[469] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:43:49.002 BLM_TIME[469] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:43:49.074 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:49.356 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:49.356 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:49.376 VIDEOCTRL[28779] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Did not receive a reply. Possible causes include: the remote application did not send a reply, the message bus security policy blocked the reply, the reply timeout expired, or the network connection was broken. - methodName: setRegisterValue
00:43:49.376 VIDEOCTRL[28779] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:49.381 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:49.384 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:49.701 VBS_BUS_CAN[319] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:43:49.701 VBS_BUS_CAN[319] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:43:49.701 VBS_BUS_CAN[319] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:43:49.701 VBS_BUS_CAN[319] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:43:49.703 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:49.703 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:49.703 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:49.703 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:49.703 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:49.703 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:50.032 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|no pResponse|(event) 2690 1970.01.01 00:44:50|-1|0|0|0|ARMED|RUN|keep|2|2|0|com.jci.BLM_TIME_TO_CPP_TIME|occurrence:1970.01.02 02:37:00|deviation:0000.00.00 00:00:00|time:32767.127.127 127:127:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|com.jci.BLM_TIME_TO_CPP_TIME
00:43:50.032 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|no pResponse|(event) 2690 1970.01.01 00:44:50|-1|0|0|0|ARMED|RUN|keep|2|2|0|com.jci.tds2cpptime|occurrence:1970.01.02 02:37:00|deviation:0000.00.00 00:00:00|time:32767.127.127 127:127:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|com.jci.tds2cpptime
00:43:50.035 BLM_TIME[469] Info (time_client.cpp:807 blm_time_EventNotification_cb) Time from CPP_TIME: 02:37
00:43:50.035 BLM_TIME[469] Info (blm_time_logic.cpp:347 blm_time_lgc_LogicThread) blm_time_event (1) (mae 1970.01.02 02:37:00) (ts 1970.01.02 02:37:00) (tz 33621938:9474) (gps_sync 33621938) (td 1970.01.02 02:37:00 0 0 0 0 0)
00:43:50.035 BLM_TIME[469] Info (dbusTIME_service.c:194 BLM_TIME_HDBUS_ClockChanged) broadcasting 1-min signal 02:37
00:43:50.370 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:50.377 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:50.377 VIDEOCTRL[28779] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Did not receive a reply. Possible causes include: the remote application did not send a reply, the message bus security policy blocked the reply, the reply timeout expired, or the network connection was broken. - methodName: setRegisterValue
00:43:50.377 VIDEOCTRL[28779] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:50.403 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:50.403 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:51.073 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:51.086 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:51.161 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 904, Message: [1;31mWrote: core577-[SM]CliReqHandl-SIGSEGV(11)-29688-2627-55.00.753A.core.bz2[0m
00:43:51.163 process-coredump[] Debug (: ) File: process-coredump.cpp, Function: main, Line: 1019, Message: Lock file closed
00:43:51.164 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 639, Message: LOCK FILE NAME /var/lock/LCK29735.core
00:43:51.190 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 766, Message: [1;31mProcess 29735 ("L_jciNativegui") abnormally exited due to signal SIGSEGV (11) with core file: /data_persist/log/dumps/core578-L_jciNativegui-SIGSEGV(11)-29735-2628-55.00.753A.core.bz2[0m
00:43:51.357 SM[208] Error (sm.cpp:475 sm_HandleSvcStoppedTimeout) Service jciVideoctrl was not stopped during timeout (3000 ms)!
00:43:51.358 SM[208] Info (sm.cpp:477 sm_HandleSvcStoppedTimeout) Killing pid 29736 with signal 9 (SIGKILL)...
00:43:51.359 SM[208] Info (sm.cpp:484 sm_HandleSvcStoppedTimeout) Wait pid 29736 to return explicitly to avoid zombie exit
00:43:51.361 SM[208] Warn (sm_net.cpp:962 SM_NET_SocketListener) Service Manager SocketListener recv failed! Error: Connection reset by peer
00:43:51.363 SM[208] Info (sm_sockserver.cpp:1664 SM_SRVR_cmd_stop_action) Process 29736 exited!
00:43:51.363 SM[208] Info (sm_sockserver.cpp:1664 SM_SRVR_cmd_stop_action) Process 29736 exited!
00:43:51.378 VIDEOCTRL[28779] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Did not receive a reply. Possible causes include: the remote application did not send a reply, the message bus security policy blocked the reply, the reply timeout expired, or the network connection was broken. - methodName: setRegisterValue
00:43:51.378 VIDEOCTRL[28779] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:51.383 SM[208] Info (sm.cpp:811 sm_ActionsForStoppedService) Svc jciVideoctrl[29736] stopped!
00:43:51.393 SM[28227] Error (sm.cpp:1438 main) Process "jciNativegui" (29735) terminated due to signal 11
00:43:51.426 SM[28227] Info (sm.cpp:811 sm_ActionsForStoppedService) Svc jciNativegui[29735] stopped!
00:43:51.431 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:51.435 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:51.448 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:51.448 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:51.539 SM[208] Error (sm.cpp:475 sm_HandleSvcStoppedTimeout) Service jciVideoctrl was not stopped during timeout (3000 ms)!
00:43:51.541 SM[208] Info (sm.cpp:477 sm_HandleSvcStoppedTimeout) Killing pid 29932 with signal 9 (SIGKILL)...
00:43:51.542 SM[208] Info (sm.cpp:484 sm_HandleSvcStoppedTimeout) Wait pid 29932 to return explicitly to avoid zombie exit
00:43:51.566 SM[208] Info (sm.cpp:811 sm_ActionsForStoppedService) Svc jciVideoctrl[29932] stopped!
00:43:51.687 SM[208] Warn (sm_sockserver.cpp:1528 SM_SRVR_cmd_starting_action) not a valid state change request svc jciNativegui state 1
00:43:51.687 NATIVEGUI[29933] Info (natgui.c:609 ServiceInit) SM Initilizing Service Native GUI.
00:43:51.687 NATIVEGUI[29933] Info (natgui.c:771 NatG_Initialize) Success in initializing queue for NATGUI
00:43:51.688 NATIVEGUI[29933] Info (natgui_settings_mgr.c:110 NatG_Settings_Init) NVRAM_Block_getValue return the currentLanguage = 0
00:43:51.688 NATIVEGUI[29933] Info (natgui.c:780 NatG_Initialize) Success in initializing settings
00:43:51.707 NATIVEGUI[29933] Info (natgui.c:789 NatG_Initialize) Success in initializing wayland window wrapper
00:43:51.709 Std[] Error (: ) surface with id 'NATGUI_SURFACE' already exists
00:43:51.713 NATIVEGUI[29933] Info (natgui_surface_mgr.c:590 NatG_Redraw_Widget_Handler) NatG_Redraw_Widget_Handler
00:43:51.713 NATIVEGUI[29933] Info (natgui.c:1187 NatG_GetImageDetails) Image = IMG_BANNER (78), [/jci/nativegui/images/SafetyText_US_English.png : (0, 433)], Language = 0
00:43:51.716 VBS_BUS_CAN[319] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:43:51.716 VBS_BUS_CAN[319] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:43:51.716 VBS_BUS_CAN[319] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:43:51.716 VBS_BUS_CAN[319] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:43:51.716 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:51.716 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:51.716 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:51.716 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:51.716 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:51.716 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:51.716 NATIVEGUI[29933] Error (natgui_interface.c:112 NatG_Init_Hmi_DBus) Failed to connect to HMI DBUS
00:43:51.716 NATIVEGUI[29933] Error (natgui.c:795 NatG_Initialize) Failed to create HMI dbus connection for NATGUI
00:43:51.716 NATIVEGUI[29933] Error (natgui.c:619 ServiceInit) Failed in initilizing the Service Native GUI
00:43:51.716 SM[29933] Warn (sm_svclauncher.cpp:221 sm_svclauncher_ThreadHandler) Service init_cb function returned: 1 for svc jcinativegui.
00:43:51.716 NATIVEGUI[29933] Info (natgui.c:667 ServiceTerm) Terminating RADIO Service
00:43:51.716 NATIVEGUI[29933] Info (natgui.c:898 natg_Destroy_SM_Client) natg_Destroy_SM_Client.
netstat: fscanf
00:43:51.733 SM[28227] Error (sm.cpp:1428 main) Process "jciNativegui" (29933) exited with status 0
00:43:51.751 VIDEOCTRL[29948] Info (vctrl_sm_interface.c:93 ServiceInit) Initializing VIDEOCTRL Service
00:43:51.757 VIDEOCTRL[29948] Info (vctrl_xml.c:506 VCTRL_XML_Open) XML file loaded successfully
00:43:51.757 VIDEOCTRL[29948] Info (vctrl_xml.c:92 vctrl_loadSettingsData) Number of devices = 3
00:43:51.757 VIDEOCTRL[29948] Info (vctrl_xml.c:135 vctrl_extractDeviceSettings) Device = buc -- device ID = 0, device input = 0
00:43:51.757 VIDEOCTRL[29948] Info (vctrl_xml.c:135 vctrl_extractDeviceSettings) Device = dvd -- device ID = 1, device input = 1
00:43:51.757 VIDEOCTRL[29948] Info (vctrl_xml.c:135 vctrl_extractDeviceSettings) Device = tv -- device ID = 2, device input = 1
00:43:51.757 VIDEOCTRL[29948] Info (vctrl_xml.c:48 VCTRL_XML_ReadSettingsXML) Successfully loaded and parsed video_settings.xml!
00:43:51.759 VIDEOCTRL[29948] Info (vctrl_gpio.c:150 DayNightSensor_th) Display Day/Night is not on AUTO. No action taken
00:43:51.766 SM[28227] Info (sm.cpp:811 sm_ActionsForStoppedService) Svc jciNativegui[29933] stopped!
00:43:51.783 VIDEOCTRL[29948] Info (vctrl_v4lcapture.c:843 dbus_connect)  (843) CDBusClientBase::connect - address: unix:path=/tmp/dbus_hmi_socket
00:43:51.791 VIDEOCTRL[29948] Error (vctrl_v4lcapture.c:887 dbus_connect) CDBusClientBase::connect - Not Primary Owner ret: 2
00:43:51.801 VIDEOCTRL[29948] Info (vctrl_service_core.cpp:66 VCTRL_CORE_InitializeConstSettings) Setting Constant settings for device 0
00:43:51.801 VIDEOCTRL[29948] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:51.801 VIDEOCTRL[29948] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:51.801 VIDEOCTRL[29948] Error (vctrl_v4lcapture.c:300 VCTRL2V4LCAPTURE_setRegisterSubmap2) Failed to Open Submap 2
00:43:51.801 VIDEOCTRL[29948] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:51.801 VIDEOCTRL[29948] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:51.801 VIDEOCTRL[29948] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:51.801 VIDEOCTRL[29948] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:51.801 VIDEOCTRL[29948] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:51.801 VIDEOCTRL[29948] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:51.801 VIDEOCTRL[29948] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:51.801 VIDEOCTRL[29948] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:51.801 VIDEOCTRL[29948] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:51.801 VIDEOCTRL[29948] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:51.801 VIDEOCTRL[29948] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:51.801 VIDEOCTRL[29948] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:51.801 VIDEOCTRL[29948] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:43:51.801 VIDEOCTRL[29948] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:43:51.801 VIDEOCTRL[29948] Info (vctrl_service_core.cpp:110 VCTRL_CORE_GetDayNightMode) Value read from NVRAM day for node 'lvds_bright_mode'
00:43:51.801 VIDEOCTRL[29948] Info (vctrl_settings.c:237 BLM_VCTRL_OnChange_DayNight_Callback) DayNight Changed - value: DAY
00:43:51.801 VIDEOCTRL[29948] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setBrightness
00:43:51.801 VIDEOCTRL[29948] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setBrightness
00:43:51.801 VIDEOCTRL[29948] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:43:51.801 VIDEOCTRL[29948] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:43:51.801 VIDEOCTRL[29948] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setContrast
00:43:51.801 VIDEOCTRL[29948] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setContrast
00:43:51.801 VIDEOCTRL[29948] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:43:51.801 VIDEOCTRL[29948] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:43:51.801 VIDEOCTRL[29948] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setHue
00:43:51.801 VIDEOCTRL[29948] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setHue
00:43:51.801 VIDEOCTRL[29948] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:43:51.801 VIDEOCTRL[29948] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:43:51.801 VIDEOCTRL[29948] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:51.801 VIDEOCTRL[29948] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:51.801 VIDEOCTRL[29948] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:43:51.801 VIDEOCTRL[29948] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:43:51.801 VIDEOCTRL[29948] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:51.801 VIDEOCTRL[29948] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:51.801 VIDEOCTRL[29948] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:43:51.801 VIDEOCTRL[29948] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:43:51.801 VIDEOCTRL[29948] Info (vctrl_settings.c:95 VCTRL2BLM_SETTINGS_UpdateIsNight) LOADED NEW VIDEO SETTINGS
00:43:51.801 VIDEOCTRL[29948] Info (vctrl_service_core.cpp:89 VCTRL_CORE_UpdateAllOtherSettings) Updating settings for device dvd
00:43:51.801 VIDEOCTRL[29948] Info (vctrl_service_core.cpp:89 VCTRL_CORE_UpdateAllOtherSettings) Updating settings for device tv
00:43:51.801 VIDEOCTRL[29948] Info (vctrl_settings.c:102 VCTRL2BLM_SETTINGS_UpdateIsNight) Sent new video settings to MMUI
00:43:51.857 SM[29948] Warn (sm_svclauncher.cpp:221 sm_svclauncher_ThreadHandler) Service init_cb function returned: 1 for svc jciVideoctrl.
00:43:51.857 BLM_SETTINGS[29948] Info (settings_client_funs.cpp:880 BLM_SETTINGS_Client_ExtDisconnect) BLM_SETTINGS_Client_ExtDisconnect
00:43:51.857 BLM_SETTINGS[29948] Error (settings_client_funs.cpp:900 BLM_SETTINGS_Client_ExtDisconnect) client is NOT connected conn:(nil)
00:43:51.857 SM[208] Info (sm_sockserver.cpp:1661 SM_SRVR_cmd_stop_action) Waiting for processs 29948 to exit...
00:43:51.857 SM[208] Info (sm_sockserver.cpp:1664 SM_SRVR_cmd_stop_action) Process 29948 exited!
00:43:51.857 SM[208] Error (sm_net.cpp:1255 SM_NET_SendMessageOnSocket) Error: Broken pipe, with Message: Sending on socket 34 failed!Backtrace:  /jci/sm/sm() [0xcb7c] /jci/sm/sm() [0x20f7c] /jci/sm/sm() [0x8fbe8] /jci/sm/sm() [0x97b20] /jci/sm/sm() [0x3bc14] /jci/sm/sm() [0x4a6f8] /jci/sm/sm() [0x3e518] /jci/sm/sm() [0x95f5c] /jci/sm/sm() [0x964a8] /jci/sm/sm() [0x90bdc]
00:43:51.857 SM[208] Error (sm_sockserver.cpp:692 sm_sock_SendMessage) Status: status (as 104): Sending message failed!
00:43:51.857 SM[208] Error (sm_sockserver.cpp:3953 SM_SRVR_cmd_client_subscribe_for_events_action) Status: status (as 104): Sending message to socket failed! Requester: CLIENT_jciVideoctrl!
00:43:51.857 SM[208] Error (sm_net.cpp:1255 SM_NET_SendMessageOnSocket) Error: Broken pipe, with Message: Sending on socket 34 failed!Backtrace:  /jci/sm/sm() [0xcb7c] /jci/sm/sm() [0x20f7c] /jci/sm/sm() [0x8fbe8] /jci/sm/sm() [0x97b20] /jci/sm/sm() [0x3bc14] /jci/sm/sm() [0x46a4c] /jci/sm/sm() [0x3e518] /jci/sm/sm() [0x95f5c] /jci/sm/sm() [0x964a8] /jci/sm/sm() [0x90bdc]
00:43:51.857 SM[208] Error (sm_sockserver.cpp:692 sm_sock_SendMessage) Status: status (as 104): Sending message failed!
00:43:51.857 SM[208] Error (sm_sockserver.cpp:3572 SM_SRVR_cmd_client_get_services_action) Status: status (as 104): Sending message to socket failed! Requester: CLIENT_jciVideoctrl
00:43:51.857 SM[208] Error (sm_net.cpp:1255 SM_NET_SendMessageOnSocket) Error: Broken pipe, with Message: Sending on socket 34 failed!Backtrace:  /jci/sm/sm() [0xcb7c] /jci/sm/sm() [0x20f7c] /jci/sm/sm() [0x8fbe8] /jci/sm/sm() [0x97b20] /jci/sm/sm() [0x3bc14] /jci/sm/sm() [0x4a6f8] /jci/sm/sm() [0x3e518] /jci/sm/sm() [0x95f5c] /jci/sm/sm() [0x964a8] /jci/sm/sm() [0x90bdc]
00:43:51.857 SM[208] Error (sm_sockserver.cpp:692 sm_sock_SendMessage) Status: status (as 104): Sending message failed!
00:43:51.857 SM[208] Error (sm_sockserver.cpp:3953 SM_SRVR_cmd_client_subscribe_for_events_action) Status: status (as 104): Sending message to socket failed! Requester: CLIENT_jciVideoctrl!
00:43:51.857 SM[208] Error (sm_net.cpp:1255 SM_NET_SendMessageOnSocket) Error: Broken pipe, with Message: Sending on socket 34 failed!Backtrace:  /jci/sm/sm() [0xcb7c] /jci/sm/sm() [0x20f7c] /jci/sm/sm() [0x8fbe8] /jci/sm/sm() [0x97b20] /jci/sm/sm() [0x3bc14] /jci/sm/sm() [0x46a4c] /jci/sm/sm() [0x3e518] /jci/sm/sm() [0x95f5c] /jci/sm/sm() [0x964a8] /jci/sm/sm() [0x90bdc]
00:43:51.857 SM[208] Error (sm_sockserver.cpp:692 sm_sock_SendMessage) Status: status (as 104): Sending message failed!
00:43:51.857 SM[208] Error (sm_sockserver.cpp:3572 SM_SRVR_cmd_client_get_services_action) Status: status (as 104): Sending message to socket failed! Requester: CLIENT_jciVideoctrl
00:43:51.867 SM[208] Info (sm.cpp:811 sm_ActionsForStoppedService) Svc jciVideoctrl[29948] stopped!
00:43:51.975 SM[208] Warn (sm_sockserver.cpp:1528 SM_SRVR_cmd_starting_action) not a valid state change request svc jciNativegui state 1
00:43:51.976 NATIVEGUI[29970] Info (natgui.c:609 ServiceInit) SM Initilizing Service Native GUI.
00:43:51.976 NATIVEGUI[29970] Info (natgui.c:771 NatG_Initialize) Success in initializing queue for NATGUI
00:43:51.979 NATIVEGUI[29970] Info (natgui_settings_mgr.c:110 NatG_Settings_Init) NVRAM_Block_getValue return the currentLanguage = 0
00:43:51.979 NATIVEGUI[29970] Info (natgui.c:780 NatG_Initialize) Success in initializing settings
00:43:51.980 Std[] Error (: ) surface with id 'NATGUI_SURFACE' already exists
00:43:51.981 NATIVEGUI[29970] Info (natgui.c:789 NatG_Initialize) Success in initializing wayland window wrapper
00:43:51.987 NATIVEGUI[29970] Error (natgui_interface.c:112 NatG_Init_Hmi_DBus) Failed to connect to HMI DBUS
00:43:51.987 NATIVEGUI[29970] Error (natgui.c:795 NatG_Initialize) Failed to create HMI dbus connection for NATGUI
00:43:51.987 NATIVEGUI[29970] Error (natgui.c:619 ServiceInit) Failed in initilizing the Service Native GUI
00:43:51.987 SM[29970] Warn (sm_svclauncher.cpp:221 sm_svclauncher_ThreadHandler) Service init_cb function returned: 1 for svc jcinativegui.
00:43:51.988 NATIVEGUI[29970] Info (natgui.c:667 ServiceTerm) Terminating RADIO Service
00:43:51.988 NATIVEGUI[29970] Info (natgui.c:898 natg_Destroy_SM_Client) natg_Destroy_SM_Client.
00:43:51.995 NATIVEGUI[29970] Info (natgui_surface_mgr.c:590 NatG_Redraw_Widget_Handler) NatG_Redraw_Widget_Handler
00:43:51.995 NATIVEGUI[29970] Info (natgui.c:1187 NatG_GetImageDetails) Image = IMG_BANNER (78), [/jci/nativegui/images/SafetyText_US_English.png : (0, 433)], Language = 0
00:43:52.002 BLM_TIME[469] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:43:52.002 BLM_TIME[469] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:43:52.025 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 556, Message: version: 55.00.753A, length 16
00:43:52.067 VIDEOCTRL[29981] Info (vctrl_sm_interface.c:93 ServiceInit) Initializing VIDEOCTRL Service
00:43:52.071 VIDEOCTRL[29981] Info (vctrl_xml.c:506 VCTRL_XML_Open) XML file loaded successfully
00:43:52.071 VIDEOCTRL[29981] Info (vctrl_xml.c:92 vctrl_loadSettingsData) Number of devices = 3
00:43:52.071 VIDEOCTRL[29981] Info (vctrl_xml.c:135 vctrl_extractDeviceSettings) Device = buc -- device ID = 0, device input = 0
00:43:52.071 VIDEOCTRL[29981] Info (vctrl_xml.c:135 vctrl_extractDeviceSettings) Device = dvd -- device ID = 1, device input = 1
00:43:52.071 VIDEOCTRL[29981] Info (vctrl_xml.c:135 vctrl_extractDeviceSettings) Device = tv -- device ID = 2, device input = 1
00:43:52.071 VIDEOCTRL[29981] Info (vctrl_xml.c:48 VCTRL_XML_ReadSettingsXML) Successfully loaded and parsed video_settings.xml!
00:43:52.074 VIDEOCTRL[29981] Info (vctrl_gpio.c:150 DayNightSensor_th) Display Day/Night is not on AUTO. No action taken
00:43:52.096 VIDEOCTRL[29981] Info (vctrl_v4lcapture.c:843 dbus_connect)  (843) CDBusClientBase::connect - address: unix:path=/tmp/dbus_hmi_socket
00:43:52.104 VIDEOCTRL[29981] Error (vctrl_v4lcapture.c:887 dbus_connect) CDBusClientBase::connect - Not Primary Owner ret: 2
00:43:52.112 VIDEOCTRL[29981] Info (vctrl_service_core.cpp:66 VCTRL_CORE_InitializeConstSettings) Setting Constant settings for device 0
00:43:52.112 VIDEOCTRL[29981] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:52.112 VIDEOCTRL[29981] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:52.112 VIDEOCTRL[29981] Error (vctrl_v4lcapture.c:300 VCTRL2V4LCAPTURE_setRegisterSubmap2) Failed to Open Submap 2
00:43:52.112 VIDEOCTRL[29981] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:52.112 VIDEOCTRL[29981] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:52.112 VIDEOCTRL[29981] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:52.112 VIDEOCTRL[29981] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:52.112 VIDEOCTRL[29981] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:52.112 VIDEOCTRL[29981] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:52.112 VIDEOCTRL[29981] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:52.112 VIDEOCTRL[29981] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:52.112 VIDEOCTRL[29981] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:52.112 VIDEOCTRL[29981] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:52.112 VIDEOCTRL[29981] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:52.112 VIDEOCTRL[29981] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:52.112 VIDEOCTRL[29981] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:43:52.112 VIDEOCTRL[29981] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:43:52.112 VIDEOCTRL[29981] Info (vctrl_service_core.cpp:110 VCTRL_CORE_GetDayNightMode) Value read from NVRAM day for node 'lvds_bright_mode'
00:43:52.112 VIDEOCTRL[29981] Info (vctrl_settings.c:237 BLM_VCTRL_OnChange_DayNight_Callback) DayNight Changed - value: DAY
00:43:52.112 VIDEOCTRL[29981] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setBrightness
00:43:52.112 VIDEOCTRL[29981] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setBrightness
00:43:52.112 VIDEOCTRL[29981] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:43:52.112 VIDEOCTRL[29981] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:43:52.112 VIDEOCTRL[29981] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setContrast
00:43:52.112 VIDEOCTRL[29981] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setContrast
00:43:52.112 VIDEOCTRL[29981] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:43:52.112 VIDEOCTRL[29981] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:43:52.112 VIDEOCTRL[29981] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setHue
00:43:52.112 VIDEOCTRL[29981] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setHue
00:43:52.112 VIDEOCTRL[29981] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:43:52.112 VIDEOCTRL[29981] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:43:52.112 VIDEOCTRL[29981] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:52.112 VIDEOCTRL[29981] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:52.112 VIDEOCTRL[29981] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:43:52.112 VIDEOCTRL[29981] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:43:52.112 VIDEOCTRL[29981] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:52.112 VIDEOCTRL[29981] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:52.112 VIDEOCTRL[29981] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:43:52.112 VIDEOCTRL[29981] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:43:52.112 VIDEOCTRL[29981] Info (vctrl_settings.c:95 VCTRL2BLM_SETTINGS_UpdateIsNight) LOADED NEW VIDEO SETTINGS
00:43:52.112 VIDEOCTRL[29981] Info (vctrl_service_core.cpp:89 VCTRL_CORE_UpdateAllOtherSettings) Updating settings for device dvd
00:43:52.112 VIDEOCTRL[29981] Info (vctrl_service_core.cpp:89 VCTRL_CORE_UpdateAllOtherSettings) Updating settings for device tv
00:43:52.112 VIDEOCTRL[29981] Info (vctrl_settings.c:102 VCTRL2BLM_SETTINGS_UpdateIsNight) Sent new video settings to MMUI
00:43:52.142 SM[29981] Warn (sm_svclauncher.cpp:221 sm_svclauncher_ThreadHandler) Service init_cb function returned: 1 for svc jciVideoctrl.
00:43:52.142 BLM_SETTINGS[29981] Info (settings_client_funs.cpp:880 BLM_SETTINGS_Client_ExtDisconnect) BLM_SETTINGS_Client_ExtDisconnect
00:43:52.142 BLM_SETTINGS[29981] Error (settings_client_funs.cpp:900 BLM_SETTINGS_Client_ExtDisconnect) client is NOT connected conn:(nil)
00:43:52.142 SM[208] Info (sm_sockserver.cpp:1661 SM_SRVR_cmd_stop_action) Waiting for processs 29981 to exit...
00:43:52.178 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 556, Message: version: 55.00.753A, length 16
00:43:52.360 SM[208] Info (sm.cpp:494 sm_HandleSvcStoppedTimeout) Pid 29736 seems to have exited
00:43:52.360 SM[208] Info (sm.cpp:545 sm_HandleSvcStoppedTimeout) service jciVideoctrl destroyed monitored 1 pid 29981 retry_count 0 reset_board 0
00:43:52.379 VIDEOCTRL[28779] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Did not receive a reply. Possible causes include: the remote application did not send a reply, the message bus security policy blocked the reply, the reply timeout expired, or the network connection was broken. - methodName: setRegisterValue
00:43:52.379 VIDEOCTRL[28779] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:52.521 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:52.525 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:52.540 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:52.540 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:52.544 SM[208] Info (sm.cpp:494 sm_HandleSvcStoppedTimeout) Pid 29932 seems to have exited
00:43:52.544 SM[208] Info (sm.cpp:545 sm_HandleSvcStoppedTimeout) service jciVideoctrl destroyed monitored 1 pid -1 retry_count 0 reset_board 0
00:43:52.550 SM[28227] Warn (sm.cpp:605 sm_PrintWarning) Service jciNativegui was not connected during timeout (5003 ms)!
00:43:52.552 SM[28227] Warn (sm.cpp:605 sm_PrintWarning) Service jciVideoctrl was not connected during timeout (5003 ms)!
00:43:53.059 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:53.380 VIDEOCTRL[28779] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Did not receive a reply. Possible causes include: the remote application did not send a reply, the message bus security policy blocked the reply, the reply timeout expired, or the network connection was broken. - methodName: setRegisterValue
00:43:53.380 VIDEOCTRL[28779] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:53.576 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:53.581 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:53.603 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:53.603 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:53.695 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:53.708 VBS_BUS_CAN[319] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:43:53.708 VBS_BUS_CAN[319] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:43:53.708 VBS_BUS_CAN[319] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:43:53.708 VBS_BUS_CAN[319] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:43:53.710 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:53.710 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:53.710 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:53.710 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:53.710 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:53.710 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:54.381 VIDEOCTRL[28779] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Did not receive a reply. Possible causes include: the remote application did not send a reply, the message bus security policy blocked the reply, the reply timeout expired, or the network connection was broken. - methodName: update
00:43:54.381 VIDEOCTRL[28779] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:43:54.382 VIDEOCTRL[28779] Info (vctrl_service_core.cpp:110 VCTRL_CORE_GetDayNightMode) Value read from NVRAM day for node 'lvds_bright_mode'
00:43:54.382 VIDEOCTRL[28779] Info (vctrl_settings.c:237 BLM_VCTRL_OnChange_DayNight_Callback) DayNight Changed - value: DAY
00:43:54.635 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:54.641 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:54.655 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:54.655 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:54.728 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 904, Message: [1;31mWrote: core578-L_jciNativegui-SIGSEGV(11)-29735-2628-55.00.753A.core.bz2[0m
00:43:54.729 process-coredump[] Debug (: ) File: process-coredump.cpp, Function: main, Line: 1019, Message: Lock file closed
00:43:54.729 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 639, Message: LOCK FILE NAME /var/lock/LCK29736.core
00:43:54.754 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 766, Message: [1;31mProcess 29736 ("[SM]CliReqHandl") abnormally exited due to signal SIGSEGV (11) with core file: /data_persist/log/dumps/core579-[SM]CliReqHandl-SIGSEGV(11)-29736-2628-55.00.753A.core.bz2[0m
00:43:54.829 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 904, Message: [1;31mWrote: core579-[SM]CliReqHandl-SIGSEGV(11)-29736-2628-55.00.753A.core.bz2[0m
00:43:54.829 process-coredump[] Debug (: ) File: process-coredump.cpp, Function: main, Line: 1019, Message: Lock file closed
00:43:54.835 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 639, Message: LOCK FILE NAME /var/lock/LCK29763.core
00:43:54.868 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 766, Message: [1;31mProcess 29763 ("[SM]CliReqHandl") abnormally exited due to signal SIGSEGV (11) with core file: /data_persist/log/dumps/core580-[SM]CliReqHandl-SIGSEGV(11)-29763-2628-55.00.753A.core.bz2[0m
00:43:54.999 SM[208] Warn (sm_net.cpp:962 SM_NET_SocketListener) Service Manager SocketListener recv failed! Error: Connection reset by peer
00:43:54.999 SM[28227] Error (sm.cpp:1438 main) Process "jciVideoctrl" (29763) terminated due to signal 11
00:43:55.003 BLM_TIME[469] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:43:55.003 BLM_TIME[469] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:43:55.027 SM[28227] Info (sm.cpp:811 sm_ActionsForStoppedService) Svc jciVideoctrl[29763] stopped!
00:43:55.053 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:55.103 SM[208] Error (sm_sockserver.cpp:1178 SM_SRVR_cmd_handshake_action) config_node->sock_element was not NULL in handshaking
00:43:55.103 SM[208] Error (sm_sockserver.cpp:1179 SM_SRVR_cmd_handshake_action) sock 8 name jciVideoctrl
00:43:55.138 SM[208] Warn (sm_sockserver.cpp:1528 SM_SRVR_cmd_starting_action) not a valid state change request svc jciVideoctrl state 1
00:43:55.138 VIDEOCTRL[30154] Info (vctrl_sm_interface.c:93 ServiceInit) Initializing VIDEOCTRL Service
00:43:55.142 VIDEOCTRL[30154] Info (vctrl_xml.c:506 VCTRL_XML_Open) XML file loaded successfully
00:43:55.142 VIDEOCTRL[30154] Info (vctrl_xml.c:92 vctrl_loadSettingsData) Number of devices = 3
00:43:55.142 VIDEOCTRL[30154] Info (vctrl_xml.c:135 vctrl_extractDeviceSettings) Device = buc -- device ID = 0, device input = 0
00:43:55.142 VIDEOCTRL[30154] Info (vctrl_xml.c:135 vctrl_extractDeviceSettings) Device = dvd -- device ID = 1, device input = 1
00:43:55.142 VIDEOCTRL[30154] Info (vctrl_xml.c:135 vctrl_extractDeviceSettings) Device = tv -- device ID = 2, device input = 1
00:43:55.142 VIDEOCTRL[30154] Info (vctrl_xml.c:48 VCTRL_XML_ReadSettingsXML) Successfully loaded and parsed video_settings.xml!
00:43:55.145 VIDEOCTRL[30154] Info (vctrl_gpio.c:150 DayNightSensor_th) Display Day/Night is not on AUTO. No action taken
00:43:55.171 VIDEOCTRL[30154] Info (vctrl_v4lcapture.c:843 dbus_connect)  (843) CDBusClientBase::connect - address: unix:path=/tmp/dbus_hmi_socket
00:43:55.177 VIDEOCTRL[30154] Error (vctrl_v4lcapture.c:887 dbus_connect) CDBusClientBase::connect - Not Primary Owner ret: 2
00:43:55.184 VIDEOCTRL[30154] Info (vctrl_service_core.cpp:66 VCTRL_CORE_InitializeConstSettings) Setting Constant settings for device 0
00:43:55.184 VIDEOCTRL[30154] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:55.184 VIDEOCTRL[30154] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:55.184 VIDEOCTRL[30154] Error (vctrl_v4lcapture.c:300 VCTRL2V4LCAPTURE_setRegisterSubmap2) Failed to Open Submap 2
00:43:55.184 VIDEOCTRL[30154] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:55.184 VIDEOCTRL[30154] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:55.184 VIDEOCTRL[30154] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:55.184 VIDEOCTRL[30154] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:55.184 VIDEOCTRL[30154] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:55.184 VIDEOCTRL[30154] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:55.184 VIDEOCTRL[30154] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:55.184 VIDEOCTRL[30154] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:55.184 VIDEOCTRL[30154] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:55.184 VIDEOCTRL[30154] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:55.184 VIDEOCTRL[30154] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:55.184 VIDEOCTRL[30154] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:55.184 VIDEOCTRL[30154] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:43:55.184 VIDEOCTRL[30154] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:43:55.184 VIDEOCTRL[30154] Info (vctrl_service_core.cpp:110 VCTRL_CORE_GetDayNightMode) Value read from NVRAM day for node 'lvds_bright_mode'
00:43:55.184 VIDEOCTRL[30154] Info (vctrl_settings.c:237 BLM_VCTRL_OnChange_DayNight_Callback) DayNight Changed - value: DAY
00:43:55.184 VIDEOCTRL[30154] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setBrightness
00:43:55.184 VIDEOCTRL[30154] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setBrightness
00:43:55.184 VIDEOCTRL[30154] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:43:55.184 VIDEOCTRL[30154] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:43:55.184 VIDEOCTRL[30154] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setContrast
00:43:55.184 VIDEOCTRL[30154] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setContrast
00:43:55.184 VIDEOCTRL[30154] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:43:55.184 VIDEOCTRL[30154] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:43:55.184 VIDEOCTRL[30154] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setHue
00:43:55.184 VIDEOCTRL[30154] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setHue
00:43:55.184 VIDEOCTRL[30154] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:43:55.184 VIDEOCTRL[30154] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:43:55.184 VIDEOCTRL[30154] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:55.184 VIDEOCTRL[30154] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:55.184 VIDEOCTRL[30154] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:43:55.184 VIDEOCTRL[30154] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:43:55.184 VIDEOCTRL[30154] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:55.184 VIDEOCTRL[30154] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:55.184 VIDEOCTRL[30154] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:43:55.184 VIDEOCTRL[30154] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:43:55.184 VIDEOCTRL[30154] Info (vctrl_settings.c:95 VCTRL2BLM_SETTINGS_UpdateIsNight) LOADED NEW VIDEO SETTINGS
00:43:55.184 VIDEOCTRL[30154] Info (vctrl_service_core.cpp:89 VCTRL_CORE_UpdateAllOtherSettings) Updating settings for device dvd
00:43:55.184 VIDEOCTRL[30154] Info (vctrl_service_core.cpp:89 VCTRL_CORE_UpdateAllOtherSettings) Updating settings for device tv
00:43:55.184 VIDEOCTRL[30154] Info (vctrl_settings.c:102 VCTRL2BLM_SETTINGS_UpdateIsNight) Sent new video settings to MMUI
00:43:55.223 SM[30154] Warn (sm_svclauncher.cpp:221 sm_svclauncher_ThreadHandler) Service init_cb function returned: 1 for svc jciVideoctrl.
00:43:55.223 BLM_SETTINGS[30154] Info (settings_client_funs.cpp:880 BLM_SETTINGS_Client_ExtDisconnect) BLM_SETTINGS_Client_ExtDisconnect
00:43:55.223 BLM_SETTINGS[30154] Error (settings_client_funs.cpp:900 BLM_SETTINGS_Client_ExtDisconnect) client is NOT connected conn:(nil)
00:43:55.235 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 556, Message: version: 55.00.753A, length 16
00:43:55.340 VIDEOCTRL[30177] Info (vctrl_sm_interface.c:93 ServiceInit) Initializing VIDEOCTRL Service
00:43:55.345 VIDEOCTRL[30177] Info (vctrl_xml.c:506 VCTRL_XML_Open) XML file loaded successfully
00:43:55.345 VIDEOCTRL[30177] Info (vctrl_xml.c:92 vctrl_loadSettingsData) Number of devices = 3
00:43:55.345 VIDEOCTRL[30177] Info (vctrl_xml.c:135 vctrl_extractDeviceSettings) Device = buc -- device ID = 0, device input = 0
00:43:55.345 VIDEOCTRL[30177] Info (vctrl_xml.c:135 vctrl_extractDeviceSettings) Device = dvd -- device ID = 1, device input = 1
00:43:55.345 VIDEOCTRL[30177] Info (vctrl_xml.c:135 vctrl_extractDeviceSettings) Device = tv -- device ID = 2, device input = 1
00:43:55.345 VIDEOCTRL[30177] Info (vctrl_xml.c:48 VCTRL_XML_ReadSettingsXML) Successfully loaded and parsed video_settings.xml!
00:43:55.346 VIDEOCTRL[30177] Info (vctrl_gpio.c:150 DayNightSensor_th) Display Day/Night is not on AUTO. No action taken
00:43:55.369 VIDEOCTRL[30177] Info (vctrl_v4lcapture.c:843 dbus_connect)  (843) CDBusClientBase::connect - address: unix:path=/tmp/dbus_hmi_socket
00:43:55.377 VIDEOCTRL[30177] Error (vctrl_v4lcapture.c:887 dbus_connect) CDBusClientBase::connect - Not Primary Owner ret: 2
00:43:55.384 VIDEOCTRL[30177] Info (vctrl_service_core.cpp:66 VCTRL_CORE_InitializeConstSettings) Setting Constant settings for device 0
00:43:55.384 VIDEOCTRL[30177] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:55.384 VIDEOCTRL[30177] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:55.384 VIDEOCTRL[30177] Error (vctrl_v4lcapture.c:300 VCTRL2V4LCAPTURE_setRegisterSubmap2) Failed to Open Submap 2
00:43:55.384 VIDEOCTRL[30177] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:55.384 VIDEOCTRL[30177] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:55.384 VIDEOCTRL[30177] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:55.384 VIDEOCTRL[30177] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:55.384 VIDEOCTRL[30177] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:55.384 VIDEOCTRL[30177] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:55.384 VIDEOCTRL[30177] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:55.384 VIDEOCTRL[30177] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:55.384 VIDEOCTRL[30177] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:55.384 VIDEOCTRL[30177] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:55.384 VIDEOCTRL[30177] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:55.384 VIDEOCTRL[30177] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:55.384 VIDEOCTRL[30177] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:43:55.384 VIDEOCTRL[30177] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:43:55.384 VIDEOCTRL[30177] Info (vctrl_service_core.cpp:110 VCTRL_CORE_GetDayNightMode) Value read from NVRAM day for node 'lvds_bright_mode'
00:43:55.384 VIDEOCTRL[30177] Info (vctrl_settings.c:237 BLM_VCTRL_OnChange_DayNight_Callback) DayNight Changed - value: DAY
00:43:55.384 VIDEOCTRL[30177] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setBrightness
00:43:55.384 VIDEOCTRL[30177] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setBrightness
00:43:55.384 VIDEOCTRL[30177] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:43:55.384 VIDEOCTRL[30177] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:43:55.384 VIDEOCTRL[30177] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setContrast
00:43:55.384 VIDEOCTRL[30177] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setContrast
00:43:55.384 VIDEOCTRL[30177] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:43:55.384 VIDEOCTRL[30177] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:43:55.384 VIDEOCTRL[30177] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setHue
00:43:55.384 VIDEOCTRL[30177] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setHue
00:43:55.384 VIDEOCTRL[30177] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:43:55.384 VIDEOCTRL[28779] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Did not receive a reply. Possible causes include: the remote application did not send a reply, the message bus security policy blocked the reply, the reply timeout expired, or the network connection was broken. - methodName: setBrightness
00:43:55.384 VIDEOCTRL[28779] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setBrightness
00:43:55.384 VIDEOCTRL[30177] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:43:55.384 VIDEOCTRL[30177] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:55.384 VIDEOCTRL[30177] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:55.384 VIDEOCTRL[30177] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:43:55.384 VIDEOCTRL[30177] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:43:55.384 VIDEOCTRL[30177] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:43:55.384 VIDEOCTRL[30177] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:43:55.384 VIDEOCTRL[30177] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:43:55.384 VIDEOCTRL[30177] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:43:55.384 VIDEOCTRL[30177] Info (vctrl_settings.c:95 VCTRL2BLM_SETTINGS_UpdateIsNight) LOADED NEW VIDEO SETTINGS
00:43:55.384 VIDEOCTRL[30177] Info (vctrl_service_core.cpp:89 VCTRL_CORE_UpdateAllOtherSettings) Updating settings for device dvd
00:43:55.384 VIDEOCTRL[30177] Info (vctrl_service_core.cpp:89 VCTRL_CORE_UpdateAllOtherSettings) Updating settings for device tv
00:43:55.384 VIDEOCTRL[30177] Info (vctrl_settings.c:102 VCTRL2BLM_SETTINGS_UpdateIsNight) Sent new video settings to MMUI
00:43:55.421 SM[30177] Warn (sm_svclauncher.cpp:221 sm_svclauncher_ThreadHandler) Service init_cb function returned: 1 for svc jciVideoctrl.
00:43:55.421 BLM_SETTINGS[30177] Info (settings_client_funs.cpp:880 BLM_SETTINGS_Client_ExtDisconnect) BLM_SETTINGS_Client_ExtDisconnect
00:43:55.421 BLM_SETTINGS[30177] Error (settings_client_funs.cpp:900 BLM_SETTINGS_Client_ExtDisconnect) client is NOT connected conn:(nil)
00:43:55.421 VIDEOCTRL[30177] Info (vctrl_sm_interface.c:232 OnBLM_SETTINGSIsAvailable) BLM SETTINGS is available. Connecting...
00:43:55.421 BLM_SETTINGS[30177] Info (settings_client_funs.cpp:759 BLM_SETTINGS_Client_ExtConnect) com.jci.settings.videoctrl_30177_1
00:43:55.421 SM[208] Info (sm_sockserver.cpp:1661 SM_SRVR_cmd_stop_action) Waiting for processs 30177 to exit...
00:43:55.450 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 556, Message: version: 55.00.753A, length 16
00:43:55.685 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:55.688 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:55.708 VBS_BUS_CAN[319] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:43:55.708 VBS_BUS_CAN[319] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:43:55.708 VBS_BUS_CAN[319] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:43:55.708 VBS_BUS_CAN[319] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:43:55.716 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:55.716 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:55.716 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:55.716 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:55.716 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:55.716 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:55.716 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:55.716 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:56.389 VIDEOCTRL[28779] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Did not receive a reply. Possible causes include: the remote application did not send a reply, the message bus security policy blocked the reply, the reply timeout expired, or the network connection was broken. - methodName: update
00:43:56.389 VIDEOCTRL[28779] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:43:56.721 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:56.726 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:56.749 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:56.759 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:56.862 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:57.045 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
netstat: fscanf
00:43:57.391 VIDEOCTRL[28779] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Did not receive a reply. Possible causes include: the remote application did not send a reply, the message bus security policy blocked the reply, the reply timeout expired, or the network connection was broken. - methodName: setContrast
00:43:57.391 VIDEOCTRL[28779] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setContrast
00:43:57.711 VBS_BUS_CAN[319] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:43:57.711 VBS_BUS_CAN[319] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:43:57.711 VBS_BUS_CAN[319] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:43:57.711 VBS_BUS_CAN[319] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:43:57.713 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:57.713 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:57.713 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:57.713 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:57.713 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:57.713 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:57.759 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:57.759 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:57.783 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:57.790 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:58.000 BLM_TIME[469] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:43:58.002 BLM_TIME[469] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:43:58.393 VIDEOCTRL[28779] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Did not receive a reply. Possible causes include: the remote application did not send a reply, the message bus security policy blocked the reply, the reply timeout expired, or the network connection was broken. - methodName: update
00:43:58.393 VIDEOCTRL[28779] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:43:58.425 SM[208] Error (sm.cpp:475 sm_HandleSvcStoppedTimeout) Service jciVideoctrl was not stopped during timeout (3000 ms)!
00:43:58.426 SM[208] Info (sm.cpp:477 sm_HandleSvcStoppedTimeout) Killing pid 30177 with signal 9 (SIGKILL)...
00:43:58.427 SM[208] Info (sm.cpp:484 sm_HandleSvcStoppedTimeout) Wait pid 30177 to return explicitly to avoid zombie exit
00:43:58.433 SM[208] Warn (sm_net.cpp:962 SM_NET_SocketListener) Service Manager SocketListener recv failed! Error: Connection reset by peer
00:43:58.433 SM[208] Info (sm_sockserver.cpp:1664 SM_SRVR_cmd_stop_action) Process 30177 exited!
00:43:58.452 SM[208] Info (sm.cpp:811 sm_ActionsForStoppedService) Svc jciVideoctrl[30177] stopped!
00:43:58.452 SM[208] Critical (sm.cpp:2049 SM_StartNeededChildren) SM detected that the service "jciVideoctrl"[-1] exited.
00:43:58.770 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:58.774 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:58.808 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:58.814 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:59.038 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:59.394 VIDEOCTRL[28779] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Did not receive a reply. Possible causes include: the remote application did not send a reply, the message bus security policy blocked the reply, the reply timeout expired, or the network connection was broken. - methodName: setHue
00:43:59.394 VIDEOCTRL[28779] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setHue
00:43:59.429 SM[208] Info (sm.cpp:494 sm_HandleSvcStoppedTimeout) Pid 30177 seems to have exited
00:43:59.429 SM[208] Info (sm.cpp:545 sm_HandleSvcStoppedTimeout) service jciVideoctrl destroyed monitored 0 pid -1 retry_count -1 reset_board 0
00:43:59.711 VBS_BUS_CAN[319] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:43:59.711 VBS_BUS_CAN[319] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:43:59.711 VBS_BUS_CAN[319] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:43:59.711 VBS_BUS_CAN[319] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:43:59.714 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:59.714 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:59.714 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:59.714 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:59.714 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:59.714 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:43:59.786 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:59.786 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:43:59.823 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:43:59.828 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:00.030 SM[28227] Warn (sm.cpp:605 sm_PrintWarning) Service jciVideoctrl was not connected during timeout (5003 ms)!
00:44:00.395 VIDEOCTRL[28779] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Did not receive a reply. Possible causes include: the remote application did not send a reply, the message bus security policy blocked the reply, the reply timeout expired, or the network connection was broken. - methodName: update
00:44:00.395 VIDEOCTRL[28779] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:44:00.801 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:00.804 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:00.838 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:00.838 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:01.000 BLM_TIME[469] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:44:01.001 BLM_TIME[469] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:44:01.028 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:01.071 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:01.292 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 904, Message: [1;31mWrote: core580-[SM]CliReqHandl-SIGSEGV(11)-29763-2628-55.00.753A.core.bz2[0m
00:44:01.292 process-coredump[] Debug (: ) File: process-coredump.cpp, Function: main, Line: 1019, Message: Lock file closed
00:44:01.293 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 639, Message: LOCK FILE NAME /var/lock/LCK29970.core
00:44:01.319 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 766, Message: [1;31mProcess 29970 ("L_jciNativegui") abnormally exited due to signal SIGSEGV (11) with core file: /data_persist/log/dumps/core581-L_jciNativegui-SIGSEGV(11)-29970-2632-55.00.753A.core.bz2[0m
00:44:01.397 VIDEOCTRL[28779] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Did not receive a reply. Possible causes include: the remote application did not send a reply, the message bus security policy blocked the reply, the reply timeout expired, or the network connection was broken. - methodName: setRegisterValue
00:44:01.397 VIDEOCTRL[28779] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:44:01.521 SM[28227] Error (sm.cpp:1438 main) Process "jciNativegui" (29970) terminated due to signal 11
00:44:01.549 SM[28227] Info (sm.cpp:811 sm_ActionsForStoppedService) Svc jciNativegui[29970] stopped!
00:44:01.676 NATIVEGUI[30493] Info (natgui.c:609 ServiceInit) SM Initilizing Service Native GUI.
00:44:01.676 NATIVEGUI[30493] Info (natgui.c:771 NatG_Initialize) Success in initializing queue for NATGUI
00:44:01.678 NATIVEGUI[30493] Info (natgui_settings_mgr.c:110 NatG_Settings_Init) NVRAM_Block_getValue return the currentLanguage = 0
00:44:01.678 NATIVEGUI[30493] Info (natgui.c:780 NatG_Initialize) Success in initializing settings
00:44:01.678 SM[208] Warn (sm_sockserver.cpp:1528 SM_SRVR_cmd_starting_action) not a valid state change request svc jciNativegui state 1
00:44:01.678 Std[] Error (: ) surface with id 'NATGUI_SURFACE' already exists
00:44:01.687 NATIVEGUI[30493] Info (natgui.c:789 NatG_Initialize) Success in initializing wayland window wrapper
00:44:01.687 NATIVEGUI[30493] Info (natgui_surface_mgr.c:590 NatG_Redraw_Widget_Handler) NatG_Redraw_Widget_Handler
00:44:01.687 NATIVEGUI[30493] Info (natgui.c:1187 NatG_GetImageDetails) Image = IMG_BANNER (78), [/jci/nativegui/images/SafetyText_US_English.png : (0, 433)], Language = 0
00:44:01.687 NATIVEGUI[30493] Error (natgui_interface.c:112 NatG_Init_Hmi_DBus) Failed to connect to HMI DBUS
00:44:01.687 NATIVEGUI[30493] Error (natgui.c:795 NatG_Initialize) Failed to create HMI dbus connection for NATGUI
00:44:01.687 NATIVEGUI[30493] Error (natgui.c:619 ServiceInit) Failed in initilizing the Service Native GUI
00:44:01.687 SM[30493] Warn (sm_svclauncher.cpp:221 sm_svclauncher_ThreadHandler) Service init_cb function returned: 1 for svc jcinativegui.
00:44:01.687 NATIVEGUI[30493] Info (natgui.c:667 ServiceTerm) Terminating RADIO Service
00:44:01.687 NATIVEGUI[30493] Info (natgui.c:898 natg_Destroy_SM_Client) natg_Destroy_SM_Client.
00:44:01.698 SM[28227] Error (sm.cpp:1428 main) Process "jciNativegui" (30493) exited with status 0
00:44:01.711 VBS_BUS_CAN[319] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:44:01.711 VBS_BUS_CAN[319] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:44:01.711 VBS_BUS_CAN[319] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:44:01.711 VBS_BUS_CAN[319] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:44:01.711 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:01.711 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:01.711 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:01.711 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:01.711 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:01.711 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:01.716 SM[28227] Info (sm.cpp:811 sm_ActionsForStoppedService) Svc jciNativegui[30493] stopped!
00:44:01.821 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:01.826 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:01.856 SM[208] Warn (sm_sockserver.cpp:1528 SM_SRVR_cmd_starting_action) not a valid state change request svc jciNativegui state 1
00:44:01.857 NATIVEGUI[30508] Info (natgui.c:609 ServiceInit) SM Initilizing Service Native GUI.
00:44:01.857 NATIVEGUI[30508] Info (natgui.c:771 NatG_Initialize) Success in initializing queue for NATGUI
00:44:01.858 NATIVEGUI[30508] Info (natgui_settings_mgr.c:110 NatG_Settings_Init) NVRAM_Block_getValue return the currentLanguage = 0
00:44:01.858 NATIVEGUI[30508] Info (natgui.c:780 NatG_Initialize) Success in initializing settings
00:44:01.872 Std[] Error (: ) surface with id 'NATGUI_SURFACE' already exists
00:44:01.873 NATIVEGUI[30508] Info (natgui.c:789 NatG_Initialize) Success in initializing wayland window wrapper
00:44:01.874 NATIVEGUI[30508] Info (natgui_surface_mgr.c:590 NatG_Redraw_Widget_Handler) NatG_Redraw_Widget_Handler
00:44:01.874 NATIVEGUI[30508] Info (natgui.c:1187 NatG_GetImageDetails) Image = IMG_BANNER (78), [/jci/nativegui/images/SafetyText_US_English.png : (0, 433)], Language = 0
00:44:01.889 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:01.889 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:01.889 NATIVEGUI[30508] Error (natgui_interface.c:112 NatG_Init_Hmi_DBus) Failed to connect to HMI DBUS
00:44:01.889 NATIVEGUI[30508] Error (natgui.c:795 NatG_Initialize) Failed to create HMI dbus connection for NATGUI
00:44:01.889 NATIVEGUI[30508] Error (natgui.c:619 ServiceInit) Failed in initilizing the Service Native GUI
00:44:01.889 SM[30508] Warn (sm_svclauncher.cpp:221 sm_svclauncher_ThreadHandler) Service init_cb function returned: 1 for svc jcinativegui.
00:44:01.889 NATIVEGUI[30508] Info (natgui.c:667 ServiceTerm) Terminating RADIO Service
00:44:01.889 NATIVEGUI[30508] Info (natgui.c:898 natg_Destroy_SM_Client) natg_Destroy_SM_Client.
00:44:01.912 SM[28227] Error (sm.cpp:1428 main) Process "jciNativegui" (30508) exited with status 0
00:44:01.912 NATGUICTRL[122] Info (ivi-shell-utils.c:195 ivi_surface_registered) Surface 30508-3 registered and it is not managed
00:44:01.927 SM[28227] Info (sm.cpp:811 sm_ActionsForStoppedService) Svc jciNativegui[30508] stopped!
00:44:01.927 SM[28227] Critical (sm.cpp:2049 SM_StartNeededChildren) SM detected that the service "jciNativegui"[-1] exited.
netstat: fscanf
00:44:02.336 VDM[319] Info (vdm_eem_calc.c:2242 VDM_UpdateBarCVD_Drv1AvlFuelE_60_T) curr_dist 1998 old_dist 1998 diff 0
00:44:02.336 VDM[319] Info (vdm_eem_calc.c:2243 VDM_UpdateBarCVD_Drv1AvlFuelE_60_T) curr_fuel_amt 15789 old_fuel_amt 15709 diff 80
00:44:02.336 VDM[319] Info (vdm_eem_calc.c:2313 VDM_UpdateBarCVD_Drv1AvlFuelE_60_T) Value added to 60 graph is 0, count = 42
00:44:02.336 VBS_BUS_EEM[319] Info (mod_eem_timers.c:466 VBS_EEM_Time_Out) VDM_UpdateBarCVD_Drv1AvlFuelE_60_T SUCCESS
00:44:02.336 VDM[319] Info (vdm_eem_calc.c:2964 VDM_UpdateTotRangeBstByIS) TotRangeBstByIS_prev 0
00:44:02.336 VDM[319] Info (vdm_eem_calc.c:2977 VDM_UpdateTotRangeBstByIS)  Drv1IstpTm_curr 0 Drv1IstpTm_prev 0 fuelRate 27500
00:44:02.336 VBS_BUS_EEM[319] Info (mod_eem_timers.c:533 VBS_EEM_Time_Out) Sending 1 min expiry to BLM
00:44:02.398 VIDEOCTRL[28779] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Did not receive a reply. Possible causes include: the remote application did not send a reply, the message bus security policy blocked the reply, the reply timeout expired, or the network connection was broken. - methodName: update
00:44:02.398 VIDEOCTRL[28779] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:44:02.842 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:02.846 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:02.920 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:02.927 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:03.030 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:03.399 VIDEOCTRL[28779] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Did not receive a reply. Possible causes include: the remote application did not send a reply, the message bus security policy blocked the reply, the reply timeout expired, or the network connection was broken. - methodName: setRegisterValue
00:44:03.399 VIDEOCTRL[28779] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:44:03.695 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:03.712 VBS_BUS_CAN[319] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:44:03.712 VBS_BUS_CAN[319] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:44:03.712 VBS_BUS_CAN[319] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:44:03.712 VBS_BUS_CAN[319] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:44:03.714 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:03.714 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:03.714 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:03.714 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:03.714 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:03.714 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:03.859 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:03.864 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:03.948 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:03.959 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:04.000 BLM_TIME[469] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:44:04.003 BLM_TIME[469] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:44:04.400 VIDEOCTRL[28779] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Did not receive a reply. Possible causes include: the remote application did not send a reply, the message bus security policy blocked the reply, the reply timeout expired, or the network connection was broken. - methodName: update
00:44:04.400 VIDEOCTRL[28779] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:44:04.400 VIDEOCTRL[28779] Info (vctrl_settings.c:95 VCTRL2BLM_SETTINGS_UpdateIsNight) LOADED NEW VIDEO SETTINGS
00:44:04.400 VIDEOCTRL[28779] Info (vctrl_service_core.cpp:89 VCTRL_CORE_UpdateAllOtherSettings) Updating settings for device dvd
00:44:04.400 VIDEOCTRL[28779] Info (vctrl_service_core.cpp:89 VCTRL_CORE_UpdateAllOtherSettings) Updating settings for device tv
00:44:04.400 VIDEOCTRL[28779] Info (vctrl_settings.c:102 VCTRL2BLM_SETTINGS_UpdateIsNight) Sent new video settings to MMUI
00:44:04.406 SM[208] Warn (sm_sockserver.cpp:1451 SM_SRVR_cmd_start_action) not a valid state change request svc jciVideoctrl state 1
00:44:04.408 VIDEOCTRL[28779] Info (vctrl_sm_interface.c:232 OnBLM_SETTINGSIsAvailable) BLM SETTINGS is available. Connecting...
00:44:04.408 BLM_SETTINGS[28779] Info (settings_client_funs.cpp:759 BLM_SETTINGS_Client_ExtConnect) com.jci.settings.videoctrl_28779_1
00:44:04.417 BLM_SETTINGS[375] Info (settings_service_funs.cpp:1269 SETTINGS_Connect_svc) connecting client:com.jci.settings.videoctrl_28779_1
00:44:04.420 BLM_SETTINGS[28779] Info (settings_client_funs.cpp:422 BLM_SEETINGS_Connect_cb) Client Name [com.jci.settings.videoctrl_28779_1]
00:44:04.420 VIDEOCTRL[28779] Info (vctrl_settings.c:120 BLM_VCTRL_Connect_Callback) Registering for DisplayDayNight signal
00:44:04.420 BLM_SETTINGS[28779] Info (settings_client_funs.cpp:3034 SETTINGS_Client_ExtOnChange_S16) client [com.jci.settings.videoctrl_28779_1] com/jci/blm/settings/Display/DisplayDayNight
00:44:04.425 BLM_SETTINGS[375] Info (settings_service_funs.cpp:6677 SETTINGS_OnChange_Settings_S16_svc) client:com.jci.settings.videoctrl_28779_1 key path : /2/com/jci/blm/settings/Display/DisplayDayNight
00:44:04.425 BLM_SETTINGS[28779] Info (settings_client_funs.cpp:1559 SETTINGS_Client_ExtGet_S16) client [com.jci.settings.videoctrl_28779_1] com/jci/blm/settings/Display/DisplayDayNight
00:44:04.428 BLM_SETTINGS[28779] Info (settings_client_funs.cpp:2907 SETTINGS_Client_OnChange_S16_cb) SETTINGS_Client_OnChange_S16_cb
00:44:04.428 BLM_SETTINGS[28779] Info (settings_client_funs.cpp:2937 SETTINGS_Client_OnChange_S16_cb) Client Name [com.jci.settings.videoctrl_28779_1]
00:44:04.428 BLM_SETTINGS[375] Info (settings_service_funs.cpp:5921 SETTINGS_Get_Settings_S16_svc) key path : /2/com/jci/blm/settings/Display/DisplayDayNight
00:44:04.428 BLM_SETTINGS[28779] Info (settings_client_funs.cpp:1458 SETTINGS_Client_Get_S16_cb) SETTINGS_Client_Get_S16_cb
00:44:04.428 BLM_SETTINGS[28779] Info (settings_client_funs.cpp:1487 SETTINGS_Client_Get_S16_cb) Client Name [com.jci.settings.videoctrl_28779_1], returned value 2 for setting ID 0
00:44:04.428 VIDEOCTRL[28779] Info (vctrl_settings.c:237 BLM_VCTRL_OnChange_DayNight_Callback) DayNight Changed - value: DAY
00:44:04.582 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 904, Message: [1;31mWrote: core581-L_jciNativegui-SIGSEGV(11)-29970-2632-55.00.753A.core.bz2[0m
00:44:04.582 process-coredump[] Debug (: ) File: process-coredump.cpp, Function: main, Line: 1019, Message: Lock file closed
00:44:04.582 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 639, Message: LOCK FILE NAME /var/lock/LCK29981.core
00:44:04.613 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 766, Message: [1;31mProcess 29981 ("[SM]CliReqHandl") abnormally exited due to signal SIGSEGV (11) with core file: /data_persist/log/dumps/core582-[SM]CliReqHandl-SIGSEGV(11)-29981-2632-55.00.753A.core.bz2[0m
00:44:04.747 SM[208] Warn (sm_net.cpp:962 SM_NET_SocketListener) Service Manager SocketListener recv failed! Error: Connection reset by peer
00:44:04.747 SM[208] Error (sm.cpp:1389 main) GetConfigNodeByPid returned 107 error
00:44:04.747 SM[208] Error (sm.cpp:1451 main) Service that was stopped (pid 29981) not found in configuration!
00:44:04.747 SM[208] Info (sm_sockserver.cpp:1664 SM_SRVR_cmd_stop_action) Process 29981 exited!
00:44:04.907 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:04.911 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:04.990 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:04.997 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:05.009 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:05.711 VBS_BUS_CAN[319] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:44:05.711 VBS_BUS_CAN[319] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:44:05.711 VBS_BUS_CAN[319] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:44:05.711 VBS_BUS_CAN[319] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:44:05.714 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:05.714 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:05.714 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:05.714 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:05.714 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:05.714 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:05.787 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:05.929 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:05.932 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:06.017 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:06.028 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:06.552 SM[28227] Warn (sm.cpp:605 sm_PrintWarning) Service jciNativegui was not connected during timeout (5003 ms)!
00:44:06.962 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:06.965 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:07.000 BLM_TIME[469] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:44:07.002 BLM_TIME[469] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:44:07.016 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:07.049 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:07.059 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
netstat: fscanf
00:44:07.712 VBS_BUS_CAN[319] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:44:07.712 VBS_BUS_CAN[319] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:44:07.712 VBS_BUS_CAN[319] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:44:07.712 VBS_BUS_CAN[319] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:44:07.714 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:07.714 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:07.714 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:07.714 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:07.714 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:07.714 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:07.986 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:07.991 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:08.081 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:08.087 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:08.599 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 904, Message: [1;31mWrote: core582-[SM]CliReqHandl-SIGSEGV(11)-29981-2632-55.00.753A.core.bz2[0m
00:44:08.604 process-coredump[] Debug (: ) File: process-coredump.cpp, Function: main, Line: 1019, Message: Lock file closed
00:44:08.604 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 639, Message: LOCK FILE NAME /var/lock/LCK30154.core
00:44:08.630 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 766, Message: [1;31mProcess 30154 ("[SM]CliReqHandl") abnormally exited due to signal SIGSEGV (11) with core file: /data_persist/log/dumps/core583-[SM]CliReqHandl-SIGSEGV(11)-30154-2635-55.00.753A.core.bz2[0m
00:44:08.760 SM[208] Warn (sm_net.cpp:962 SM_NET_SocketListener) Service Manager SocketListener recv failed! Error: Connection reset by peer
00:44:08.760 SM[28227] Error (sm.cpp:1438 main) Process "jciVideoctrl" (30154) terminated due to signal 11
00:44:08.794 SM[28227] Info (sm.cpp:811 sm_ActionsForStoppedService) Svc jciVideoctrl[30154] stopped!
00:44:08.905 SM[208] Warn (sm_sockserver.cpp:1528 SM_SRVR_cmd_starting_action) not a valid state change request svc jciVideoctrl state 1
00:44:08.905 VIDEOCTRL[30859] Info (vctrl_sm_interface.c:93 ServiceInit) Initializing VIDEOCTRL Service
00:44:08.909 VIDEOCTRL[30859] Info (vctrl_xml.c:506 VCTRL_XML_Open) XML file loaded successfully
00:44:08.909 VIDEOCTRL[30859] Info (vctrl_xml.c:92 vctrl_loadSettingsData) Number of devices = 3
00:44:08.909 VIDEOCTRL[30859] Info (vctrl_xml.c:135 vctrl_extractDeviceSettings) Device = buc -- device ID = 0, device input = 0
00:44:08.909 VIDEOCTRL[30859] Info (vctrl_xml.c:135 vctrl_extractDeviceSettings) Device = dvd -- device ID = 1, device input = 1
00:44:08.909 VIDEOCTRL[30859] Info (vctrl_xml.c:135 vctrl_extractDeviceSettings) Device = tv -- device ID = 2, device input = 1
00:44:08.909 VIDEOCTRL[30859] Info (vctrl_xml.c:48 VCTRL_XML_ReadSettingsXML) Successfully loaded and parsed video_settings.xml!
00:44:08.912 VIDEOCTRL[30859] Info (vctrl_gpio.c:150 DayNightSensor_th) Display Day/Night is not on AUTO. No action taken
00:44:08.934 VIDEOCTRL[30859] Info (vctrl_v4lcapture.c:843 dbus_connect)  (843) CDBusClientBase::connect - address: unix:path=/tmp/dbus_hmi_socket
00:44:08.940 VIDEOCTRL[30859] Error (vctrl_v4lcapture.c:887 dbus_connect) CDBusClientBase::connect - Not Primary Owner ret: 2
00:44:08.948 VIDEOCTRL[30859] Info (vctrl_service_core.cpp:66 VCTRL_CORE_InitializeConstSettings) Setting Constant settings for device 0
00:44:08.948 VIDEOCTRL[30859] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:44:08.948 VIDEOCTRL[30859] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:44:08.948 VIDEOCTRL[30859] Error (vctrl_v4lcapture.c:300 VCTRL2V4LCAPTURE_setRegisterSubmap2) Failed to Open Submap 2
00:44:08.948 VIDEOCTRL[30859] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:44:08.948 VIDEOCTRL[30859] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:44:08.948 VIDEOCTRL[30859] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:44:08.948 VIDEOCTRL[30859] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:44:08.948 VIDEOCTRL[30859] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:44:08.948 VIDEOCTRL[30859] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:44:08.948 VIDEOCTRL[30859] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:44:08.948 VIDEOCTRL[30859] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:44:08.948 VIDEOCTRL[30859] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:44:08.948 VIDEOCTRL[30859] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:44:08.948 VIDEOCTRL[30859] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:44:08.948 VIDEOCTRL[30859] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:44:08.948 VIDEOCTRL[30859] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:44:08.948 VIDEOCTRL[30859] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:44:08.948 VIDEOCTRL[30859] Info (vctrl_service_core.cpp:110 VCTRL_CORE_GetDayNightMode) Value read from NVRAM day for node 'lvds_bright_mode'
00:44:08.948 VIDEOCTRL[30859] Info (vctrl_settings.c:237 BLM_VCTRL_OnChange_DayNight_Callback) DayNight Changed - value: DAY
00:44:08.948 VIDEOCTRL[30859] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setBrightness
00:44:08.948 VIDEOCTRL[30859] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setBrightness
00:44:08.948 VIDEOCTRL[30859] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:44:08.948 VIDEOCTRL[30859] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:44:08.948 VIDEOCTRL[30859] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setContrast
00:44:08.948 VIDEOCTRL[30859] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setContrast
00:44:08.948 VIDEOCTRL[30859] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:44:08.948 VIDEOCTRL[30859] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:44:08.948 VIDEOCTRL[30859] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setHue
00:44:08.948 VIDEOCTRL[30859] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setHue
00:44:08.948 VIDEOCTRL[30859] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:44:08.948 VIDEOCTRL[30859] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:44:08.948 VIDEOCTRL[30859] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:44:08.948 VIDEOCTRL[30859] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:44:08.948 VIDEOCTRL[30859] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:44:08.948 VIDEOCTRL[30859] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:44:08.948 VIDEOCTRL[30859] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:44:08.948 VIDEOCTRL[30859] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:44:08.948 VIDEOCTRL[30859] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:44:08.948 VIDEOCTRL[30859] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:44:08.948 VIDEOCTRL[30859] Info (vctrl_settings.c:95 VCTRL2BLM_SETTINGS_UpdateIsNight) LOADED NEW VIDEO SETTINGS
00:44:08.948 VIDEOCTRL[30859] Info (vctrl_service_core.cpp:89 VCTRL_CORE_UpdateAllOtherSettings) Updating settings for device dvd
00:44:08.948 VIDEOCTRL[30859] Info (vctrl_service_core.cpp:89 VCTRL_CORE_UpdateAllOtherSettings) Updating settings for device tv
00:44:08.948 VIDEOCTRL[30859] Info (vctrl_settings.c:102 VCTRL2BLM_SETTINGS_UpdateIsNight) Sent new video settings to MMUI
00:44:08.985 SM[30859] Warn (sm_svclauncher.cpp:221 sm_svclauncher_ThreadHandler) Service init_cb function returned: 1 for svc jciVideoctrl.
00:44:08.985 BLM_SETTINGS[30859] Info (settings_client_funs.cpp:880 BLM_SETTINGS_Client_ExtDisconnect) BLM_SETTINGS_Client_ExtDisconnect
00:44:08.985 BLM_SETTINGS[30859] Error (settings_client_funs.cpp:900 BLM_SETTINGS_Client_ExtDisconnect) client is NOT connected conn:(nil)
00:44:08.993 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:09.007 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 556, Message: version: 55.00.753A, length 16
00:44:09.022 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:09.026 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:09.136 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:09.142 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:09.474 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:09.712 VBS_BUS_CAN[319] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:44:09.712 VBS_BUS_CAN[319] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:44:09.712 VBS_BUS_CAN[319] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:44:09.712 VBS_BUS_CAN[319] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:44:09.713 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:09.713 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:09.713 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:09.713 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:09.713 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:09.713 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:10.000 BLM_TIME[469] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:44:10.002 BLM_TIME[469] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:44:10.060 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:10.063 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:10.182 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:10.191 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:10.986 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:11.121 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:11.126 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:11.237 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:11.243 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:11.465 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 904, Message: [1;31mWrote: core583-[SM]CliReqHandl-SIGSEGV(11)-30154-2635-55.00.753A.core.bz2[0m
00:44:11.465 process-coredump[] Debug (: ) File: process-coredump.cpp, Function: main, Line: 1019, Message: Lock file closed
00:44:11.470 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 639, Message: LOCK FILE NAME /var/lock/LCK30177.core
00:44:11.505 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 766, Message: [1;31mProcess 30177 ("[SM]CliReqHandl") abnormally exited due to signal SIGSEGV (11) with core file: /data_persist/log/dumps/core584-[SM]CliReqHandl-SIGSEGV(11)-30177-2635-55.00.753A.core.bz2[0m
00:44:11.569 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 904, Message: [1;31mWrote: core584-[SM]CliReqHandl-SIGSEGV(11)-30177-2635-55.00.753A.core.bz2[0m
00:44:11.570 process-coredump[] Debug (: ) File: process-coredump.cpp, Function: main, Line: 1019, Message: Lock file closed
00:44:11.570 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 639, Message: LOCK FILE NAME /var/lock/LCK30859.core
00:44:11.576 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:11.610 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 766, Message: [1;31mProcess 30859 ("L_jciVideoctrl") abnormally exited due to signal SIGSEGV (11) with core file: /data_persist/log/dumps/core585-L_jciVideoctrl-SIGSEGV(11)-30859-2648-55.00.753A.core.bz2[0m
00:44:11.712 VBS_BUS_CAN[319] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:44:11.712 VBS_BUS_CAN[319] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:44:11.712 VBS_BUS_CAN[319] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:44:11.712 VBS_BUS_CAN[319] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:44:11.714 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:11.714 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:11.714 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:11.714 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:11.714 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:11.714 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:11.736 SM[208] Warn (sm_net.cpp:962 SM_NET_SocketListener) Service Manager SocketListener recv failed! Error: Connection reset by peer
00:44:11.736 SM[28227] Error (sm.cpp:1438 main) Process "jciVideoctrl" (30859) terminated due to signal 11
00:44:11.773 SM[28227] Info (sm.cpp:811 sm_ActionsForStoppedService) Svc jciVideoctrl[30859] stopped!
00:44:11.889 SM[208] Warn (sm_sockserver.cpp:1528 SM_SRVR_cmd_starting_action) not a valid state change request svc jciVideoctrl state 1
00:44:11.889 VIDEOCTRL[31015] Info (vctrl_sm_interface.c:93 ServiceInit) Initializing VIDEOCTRL Service
00:44:11.895 VIDEOCTRL[31015] Info (vctrl_xml.c:506 VCTRL_XML_Open) XML file loaded successfully
00:44:11.895 VIDEOCTRL[31015] Info (vctrl_xml.c:92 vctrl_loadSettingsData) Number of devices = 3
00:44:11.895 VIDEOCTRL[31015] Info (vctrl_xml.c:135 vctrl_extractDeviceSettings) Device = buc -- device ID = 0, device input = 0
00:44:11.895 VIDEOCTRL[31015] Info (vctrl_xml.c:135 vctrl_extractDeviceSettings) Device = dvd -- device ID = 1, device input = 1
00:44:11.895 VIDEOCTRL[31015] Info (vctrl_xml.c:135 vctrl_extractDeviceSettings) Device = tv -- device ID = 2, device input = 1
00:44:11.895 VIDEOCTRL[31015] Info (vctrl_xml.c:48 VCTRL_XML_ReadSettingsXML) Successfully loaded and parsed video_settings.xml!
00:44:11.901 VIDEOCTRL[31015] Info (vctrl_gpio.c:150 DayNightSensor_th) Display Day/Night is not on AUTO. No action taken
00:44:11.920 VIDEOCTRL[31015] Info (vctrl_v4lcapture.c:843 dbus_connect)  (843) CDBusClientBase::connect - address: unix:path=/tmp/dbus_hmi_socket
00:44:11.928 VIDEOCTRL[31015] Error (vctrl_v4lcapture.c:887 dbus_connect) CDBusClientBase::connect - Not Primary Owner ret: 2
00:44:11.933 VIDEOCTRL[31015] Info (vctrl_service_core.cpp:66 VCTRL_CORE_InitializeConstSettings) Setting Constant settings for device 0
00:44:11.933 VIDEOCTRL[31015] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:44:11.933 VIDEOCTRL[31015] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:44:11.933 VIDEOCTRL[31015] Error (vctrl_v4lcapture.c:300 VCTRL2V4LCAPTURE_setRegisterSubmap2) Failed to Open Submap 2
00:44:11.933 VIDEOCTRL[31015] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:44:11.933 VIDEOCTRL[31015] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:44:11.933 VIDEOCTRL[31015] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:44:11.933 VIDEOCTRL[31015] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:44:11.933 VIDEOCTRL[31015] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:44:11.933 VIDEOCTRL[31015] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:44:11.933 VIDEOCTRL[31015] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:44:11.933 VIDEOCTRL[31015] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:44:11.933 VIDEOCTRL[31015] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:44:11.933 VIDEOCTRL[31015] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:44:11.933 VIDEOCTRL[31015] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:44:11.933 VIDEOCTRL[31015] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:44:11.933 VIDEOCTRL[31015] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:44:11.933 VIDEOCTRL[31015] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:44:11.933 VIDEOCTRL[31015] Info (vctrl_service_core.cpp:110 VCTRL_CORE_GetDayNightMode) Value read from NVRAM day for node 'lvds_bright_mode'
00:44:11.933 VIDEOCTRL[31015] Info (vctrl_settings.c:237 BLM_VCTRL_OnChange_DayNight_Callback) DayNight Changed - value: DAY
00:44:11.936 VIDEOCTRL[31015] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setBrightness
00:44:11.936 VIDEOCTRL[31015] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setBrightness
00:44:11.936 VIDEOCTRL[31015] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:44:11.936 VIDEOCTRL[31015] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replnetstat: fscanf
ied - methodName: update
00:44:11.936 VIDEOCTRL[31015] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setContrast
00:44:11.936 VIDEOCTRL[31015] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setContrast
00:44:11.936 VIDEOCTRL[31015] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:44:11.936 VIDEOCTRL[31015] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:44:11.936 VIDEOCTRL[31015] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setHue
00:44:11.936 VIDEOCTRL[31015] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setHue
00:44:11.936 VIDEOCTRL[31015] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:44:11.936 VIDEOCTRL[31015] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:44:11.936 VIDEOCTRL[31015] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:44:11.936 VIDEOCTRL[31015] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:44:11.936 VIDEOCTRL[31015] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:44:11.936 VIDEOCTRL[31015] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:44:11.936 VIDEOCTRL[31015] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:44:11.936 VIDEOCTRL[31015] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:44:11.936 VIDEOCTRL[31015] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:44:11.936 VIDEOCTRL[31015] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:44:11.936 VIDEOCTRL[31015] Info (vctrl_settings.c:95 VCTRL2BLM_SETTINGS_UpdateIsNight) LOADED NEW VIDEO SETTINGS
00:44:11.936 VIDEOCTRL[31015] Info (vctrl_service_core.cpp:89 VCTRL_CORE_UpdateAllOtherSettings) Updating settings for device dvd
00:44:11.936 VIDEOCTRL[31015] Info (vctrl_service_core.cpp:89 VCTRL_CORE_UpdateAllOtherSettings) Updating settings for device tv
00:44:11.936 VIDEOCTRL[31015] Info (vctrl_settings.c:102 VCTRL2BLM_SETTINGS_UpdateIsNight) Sent new video settings to MMUI
00:44:11.972 SM[31015] Warn (sm_svclauncher.cpp:221 sm_svclauncher_ThreadHandler) Service init_cb function returned: 1 for svc jciVideoctrl.
00:44:11.972 BLM_SETTINGS[31015] Info (settings_client_funs.cpp:880 BLM_SETTINGS_Client_ExtDisconnect) BLM_SETTINGS_Client_ExtDisconnect
00:44:11.972 BLM_SETTINGS[31015] Error (settings_client_funs.cpp:900 BLM_SETTINGS_Client_ExtDisconnect) client is NOT connected conn:(nil)
00:44:11.972 VIDEOCTRL[31015] Info (vctrl_sm_interface.c:232 OnBLM_SETTINGSIsAvailable) BLM SETTINGS is available. Connecting...
00:44:11.972 BLM_SETTINGS[31015] Info (settings_client_funs.cpp:759 BLM_SETTINGS_Client_ExtConnect) com.jci.settings.videoctrl_31015_1
00:44:11.995 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 556, Message: version: 55.00.753A, length 16
00:44:12.182 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:12.186 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:12.280 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:12.283 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:12.985 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:13.001 BLM_TIME[469] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:44:13.001 BLM_TIME[469] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:44:13.231 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:13.236 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:13.349 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:13.357 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:13.713 VBS_BUS_CAN[319] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:44:13.713 VBS_BUS_CAN[319] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:44:13.713 VBS_BUS_CAN[319] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:44:13.713 VBS_BUS_CAN[319] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:44:13.715 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:13.715 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:13.715 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:13.715 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:13.715 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:13.715 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:13.798 SM[28227] Warn (sm.cpp:605 sm_PrintWarning) Service jciVideoctrl was not connected during timeout (5003 ms)!
00:44:14.281 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:14.286 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:14.401 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:14.407 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:14.717 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:14.975 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:15.124 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 904, Message: [1;31mWrote: core585-L_jciVideoctrl-SIGSEGV(11)-30859-2648-55.00.753A.core.bz2[0m
00:44:15.126 process-coredump[] Debug (: ) File: process-coredump.cpp, Function: main, Line: 1019, Message: Lock file closed
00:44:15.126 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 639, Message: LOCK FILE NAME /var/lock/LCK31015.core
00:44:15.152 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 766, Message: [1;31mProcess 31015 ("[SM]CliReqHandl") abnormally exited due to signal SIGSEGV (11) with core file: /data_persist/log/dumps/core586-[SM]CliReqHandl-SIGSEGV(11)-31015-2651-55.00.753A.core.bz2[0m
00:44:15.285 SM[28227] Error (sm.cpp:1438 main) Process "jciVideoctrl" (31015) terminated due to signal 11
00:44:15.290 SM[208] Warn (sm_net.cpp:962 SM_NET_SocketListener) Service Manager SocketListener recv failed! Error: Connection reset by peer
00:44:15.306 SM[28227] Info (sm.cpp:811 sm_ActionsForStoppedService) Svc jciVideoctrl[31015] stopped!
00:44:15.324 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:15.329 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:15.439 SM[208] Warn (sm_sockserver.cpp:1528 SM_SRVR_cmd_starting_action) not a valid state change request svc jciVideoctrl state 1
00:44:15.439 VIDEOCTRL[31194] Info (vctrl_sm_interface.c:93 ServiceInit) Initializing VIDEOCTRL Service
00:44:15.447 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:15.447 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:15.447 VIDEOCTRL[31194] Info (vctrl_xml.c:506 VCTRL_XML_Open) XML file loaded successfully
00:44:15.447 VIDEOCTRL[31194] Info (vctrl_xml.c:92 vctrl_loadSettingsData) Number of devices = 3
00:44:15.447 VIDEOCTRL[31194] Info (vctrl_xml.c:135 vctrl_extractDeviceSettings) Device = buc -- device ID = 0, device input = 0
00:44:15.447 VIDEOCTRL[31194] Info (vctrl_xml.c:135 vctrl_extractDeviceSettings) Device = dvd -- device ID = 1, device input = 1
00:44:15.447 VIDEOCTRL[31194] Info (vctrl_gpio.c:150 DayNightSensor_th) Display Day/Night is not on AUTO. No action taken
00:44:15.447 VIDEOCTRL[31194] Info (vctrl_xml.c:135 vctrl_extractDeviceSettings) Device = tv -- device ID = 2, device input = 1
00:44:15.447 VIDEOCTRL[31194] Info (vctrl_xml.c:48 VCTRL_XML_ReadSettingsXML) Successfully loaded and parsed video_settings.xml!
00:44:15.469 VIDEOCTRL[31194] Info (vctrl_v4lcapture.c:843 dbus_connect)  (843) CDBusClientBase::connect - address: unix:path=/tmp/dbus_hmi_socket
00:44:15.477 VIDEOCTRL[31194] Error (vctrl_v4lcapture.c:887 dbus_connect) CDBusClientBase::connect - Not Primary Owner ret: 2
00:44:15.486 VIDEOCTRL[31194] Info (vctrl_service_core.cpp:66 VCTRL_CORE_InitializeConstSettings) Setting Constant settings for device 0
00:44:15.486 VIDEOCTRL[31194] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:44:15.486 VIDEOCTRL[31194] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:44:15.486 VIDEOCTRL[31194] Error (vctrl_v4lcapture.c:300 VCTRL2V4LCAPTURE_setRegisterSubmap2) Failed to Open Submap 2
00:44:15.486 VIDEOCTRL[31194] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:44:15.486 VIDEOCTRL[31194] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:44:15.486 VIDEOCTRL[31194] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:44:15.486 VIDEOCTRL[31194] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:44:15.486 VIDEOCTRL[31194] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:44:15.486 VIDEOCTRL[31194] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:44:15.486 VIDEOCTRL[31194] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:44:15.486 VIDEOCTRL[31194] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:44:15.486 VIDEOCTRL[31194] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:44:15.486 VIDEOCTRL[31194] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:44:15.486 VIDEOCTRL[31194] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:44:15.486 VIDEOCTRL[31194] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:44:15.486 VIDEOCTRL[31194] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:44:15.486 VIDEOCTRL[31194] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:44:15.486 VIDEOCTRL[31194] Info (vctrl_service_core.cpp:110 VCTRL_CORE_GetDayNightMode) Value read from NVRAM day for node 'lvds_bright_mode'
00:44:15.486 VIDEOCTRL[31194] Info (vctrl_settings.c:237 BLM_VCTRL_OnChange_DayNight_Callback) DayNight Changed - value: DAY
00:44:15.486 VIDEOCTRL[31194] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setBrightness
00:44:15.486 VIDEOCTRL[31194] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setBrightness
00:44:15.486 VIDEOCTRL[31194] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:44:15.486 VIDEOCTRL[31194] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:44:15.486 VIDEOCTRL[31194] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setContrast
00:44:15.486 VIDEOCTRL[31194] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setContrast
00:44:15.486 VIDEOCTRL[31194] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:44:15.486 VIDEOCTRL[31194] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:44:15.486 VIDEOCTRL[31194] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setHue
00:44:15.486 VIDEOCTRL[31194] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setHue
00:44:15.486 VIDEOCTRL[31194] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:44:15.486 VIDEOCTRL[31194] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:44:15.486 VIDEOCTRL[31194] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:44:15.486 VIDEOCTRL[31194] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:44:15.486 VIDEOCTRL[31194] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:44:15.486 VIDEOCTRL[31194] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:44:15.486 VIDEOCTRL[31194] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:44:15.486 VIDEOCTRL[31194] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:44:15.486 VIDEOCTRL[31194] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:44:15.486 VIDEOCTRL[31194] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:44:15.486 VIDEOCTRL[31194] Info (vctrl_settings.c:95 VCTRL2BLM_SETTINGS_UpdateIsNight) LOADED NEW VIDEO SETTINGS
00:44:15.486 VIDEOCTRL[31194] Info (vctrl_service_core.cpp:89 VCTRL_CORE_UpdateAllOtherSettings) Updating settings for device dvd
00:44:15.486 VIDEOCTRL[31194] Info (vctrl_service_core.cpp:89 VCTRL_CORE_UpdateAllOtherSettings) Updating settings for device tv
00:44:15.486 VIDEOCTRL[31194] Info (vctrl_settings.c:102 VCTRL2BLM_SETTINGS_UpdateIsNight) Sent new video settings to MMUI
00:44:15.531 SM[31194] Warn (sm_svclauncher.cpp:221 sm_svclauncher_ThreadHandler) Service init_cb function returned: 1 for svc jciVideoctrl.
00:44:15.531 BLM_SETTINGS[31194] Info (settings_client_funs.cpp:880 BLM_SETTINGS_Client_ExtDisconnect) BLM_SETTINGS_Client_ExtDisconnect
00:44:15.531 BLM_SETTINGS[31194] Error (settings_client_funs.cpp:900 BLM_SETTINGS_Client_ExtDisconnect) client is NOT connected conn:(nil)
00:44:15.531 BLM_SETTINGS[375] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
00:44:15.547 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 556, Message: version: 55.00.753A, length 16
00:44:15.713 VBS_BUS_CAN[319] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:44:15.713 VBS_BUS_CAN[319] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:44:15.713 VBS_BUS_CAN[319] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:44:15.713 VBS_BUS_CAN[319] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:44:15.715 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:15.715 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:15.715 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:15.715 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:15.715 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:15.715 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:16.000 BLM_TIME[469] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:44:16.002 BLM_TIME[469] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:44:16.370 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:16.370 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:16.492 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:16.496 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:16.964 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
netstat: fscanf
00:44:17.423 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:17.432 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:17.468 BLM_SETTINGS[375] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
00:44:17.522 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:17.522 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:17.715 VBS_BUS_CAN[319] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:44:17.715 VBS_BUS_CAN[319] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:44:17.715 VBS_BUS_CAN[319] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:44:17.715 VBS_BUS_CAN[319] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:44:17.719 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:17.719 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:17.719 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:17.719 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:17.719 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:17.719 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:17.883 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:18.204 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 904, Message: [1;31mWrote: core586-[SM]CliReqHandl-SIGSEGV(11)-31015-2651-55.00.753A.core.bz2[0m
00:44:18.205 process-coredump[] Debug (: ) File: process-coredump.cpp, Function: main, Line: 1019, Message: Lock file closed
00:44:18.205 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 639, Message: LOCK FILE NAME /var/lock/LCK31194.core
00:44:18.234 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 766, Message: [1;31mProcess 31194 ("L_jciVideoctrl") abnormally exited due to signal SIGSEGV (11) with core file: /data_persist/log/dumps/core587-L_jciVideoctrl-SIGSEGV(11)-31194-2655-55.00.753A.core.bz2[0m
00:44:18.363 SM[208] Warn (sm_net.cpp:962 SM_NET_SocketListener) Service Manager SocketListener recv failed! Error: Connection reset by peer
00:44:18.363 SM[28227] Error (sm.cpp:1438 main) Process "jciVideoctrl" (31194) terminated due to signal 11
00:44:18.385 SM[28227] Info (sm.cpp:811 sm_ActionsForStoppedService) Svc jciVideoctrl[31194] stopped!
00:44:18.385 SM[28227] Critical (sm.cpp:2049 SM_StartNeededChildren) SM detected that the service "jciVideoctrl"[-1] exited.
00:44:18.453 BLM_SETTINGS[375] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
00:44:18.477 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:18.482 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:18.559 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:18.566 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:18.957 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:19.000 BLM_TIME[469] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:44:19.002 BLM_TIME[469] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:44:19.442 BLM_SETTINGS[375] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
00:44:19.501 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:19.504 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:19.578 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:19.584 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:19.715 VBS_BUS_CAN[319] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:44:19.715 VBS_BUS_CAN[319] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:44:19.715 VBS_BUS_CAN[319] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:44:19.715 VBS_BUS_CAN[319] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:44:19.717 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:19.717 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:19.717 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:19.717 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:19.717 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:19.717 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:20.309 SM[28227] Warn (sm.cpp:605 sm_PrintWarning) Service jciVideoctrl was not connected during timeout (5003 ms)!
00:44:20.504 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:20.517 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:20.524 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:20.639 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:20.645 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:20.950 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:21.175 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 904, Message: [1;31mWrote: core587-L_jciVideoctrl-SIGSEGV(11)-31194-2655-55.00.753A.core.bz2[0m
00:44:21.175 process-coredump[] Debug (: ) File: process-coredump.cpp, Function: main, Line: 1019, Message: Lock file closed
00:44:21.565 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:21.568 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:21.677 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:21.682 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:21.715 VBS_BUS_CAN[319] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:44:21.715 VBS_BUS_CAN[319] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:44:21.715 VBS_BUS_CAN[319] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:44:21.715 VBS_BUS_CAN[319] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:44:21.717 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:21.717 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:21.717 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:21.717 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:21.717 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:21.717 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:22.000 BLM_TIME[469] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:44:22.004 BLM_TIME[469] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
netstat: fscanf
00:44:22.594 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:22.598 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:22.706 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:22.711 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:22.945 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:23.623 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:23.626 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:23.716 VBS_BUS_CAN[319] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:44:23.716 VBS_BUS_CAN[319] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:44:23.716 VBS_BUS_CAN[319] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:44:23.716 VBS_BUS_CAN[319] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:44:23.718 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:23.718 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:23.718 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:23.718 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:23.718 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:23.718 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:23.729 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:23.729 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:24.641 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:24.645 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:24.697 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:24.735 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:24.738 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:24.932 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:25.000 BLM_TIME[469] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:44:25.002 BLM_TIME[469] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:44:25.658 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:25.661 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:25.716 VBS_BUS_CAN[319] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:44:25.716 VBS_BUS_CAN[319] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:44:25.716 VBS_BUS_CAN[319] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:44:25.716 VBS_BUS_CAN[319] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:44:25.718 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:25.718 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:25.718 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:25.718 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:25.718 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:25.718 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:25.761 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:25.761 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:26.671 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:26.676 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:26.765 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:26.771 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:26.933 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
netstat: fscanf
00:44:27.597 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:27.693 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:27.695 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:27.716 VBS_BUS_CAN[319] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:44:27.716 VBS_BUS_CAN[319] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:44:27.716 VBS_BUS_CAN[319] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:44:27.716 VBS_BUS_CAN[319] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:44:27.718 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:27.718 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:27.718 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:27.718 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:27.718 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:27.718 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:27.787 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:27.792 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:28.000 BLM_TIME[469] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:44:28.003 BLM_TIME[469] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:44:28.708 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:28.711 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:28.806 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:28.811 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:28.921 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:29.716 VBS_BUS_CAN[319] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:44:29.716 VBS_BUS_CAN[319] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:44:29.716 VBS_BUS_CAN[319] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:44:29.716 VBS_BUS_CAN[319] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:44:29.718 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:29.718 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:29.718 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:29.718 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:29.718 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:29.718 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:29.729 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:29.729 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:29.834 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:29.839 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:30.748 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:30.752 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:30.861 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:30.866 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:30.917 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:31.000 BLM_TIME[469] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:44:31.002 BLM_TIME[469] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:44:31.017 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:31.717 VBS_BUS_CAN[319] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:44:31.717 VBS_BUS_CAN[319] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:44:31.717 VBS_BUS_CAN[319] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:44:31.717 VBS_BUS_CAN[319] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:44:31.719 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:31.719 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:31.719 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:31.719 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:31.719 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:31.719 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:31.777 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:31.779 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:31.895 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:31.895 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
netstat: fscanf
00:44:32.811 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:32.814 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:32.910 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:32.934 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:32.934 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:33.639 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:33.717 VBS_BUS_CAN[319] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:44:33.717 VBS_BUS_CAN[319] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:44:33.717 VBS_BUS_CAN[319] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:44:33.717 VBS_BUS_CAN[319] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:44:33.717 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:33.717 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:33.717 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:33.717 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:33.717 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:33.717 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:33.845 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:33.845 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:33.961 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:33.966 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:34.001 BLM_TIME[469] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:44:34.001 BLM_TIME[469] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:44:34.864 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:34.867 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:34.897 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:34.982 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:34.986 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:35.718 VBS_BUS_CAN[319] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:44:35.718 VBS_BUS_CAN[319] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:44:35.718 VBS_BUS_CAN[319] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:44:35.718 VBS_BUS_CAN[319] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:44:35.720 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:35.720 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:35.720 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:35.720 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:35.720 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:35.720 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:35.903 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:35.906 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:36.015 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:36.022 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:36.263 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:36.896 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:36.934 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:36.937 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:37.000 BLM_TIME[469] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:44:37.002 BLM_TIME[469] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:44:37.033 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:37.038 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
netstat: fscanf
00:44:37.718 VBS_BUS_CAN[319] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:44:37.718 VBS_BUS_CAN[319] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:44:37.718 VBS_BUS_CAN[319] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:44:37.718 VBS_BUS_CAN[319] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:44:37.720 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:37.720 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:37.720 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:37.720 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:37.720 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:37.720 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:37.948 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:37.951 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:38.047 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:38.053 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:38.887 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:38.963 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:38.969 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:39.077 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:39.083 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:39.431 BLM_SETTINGS[375] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
00:44:39.718 VBS_BUS_CAN[319] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:44:39.718 VBS_BUS_CAN[319] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:44:39.718 VBS_BUS_CAN[319] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:44:39.718 VBS_BUS_CAN[319] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:44:39.721 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:39.721 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:39.721 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:39.721 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:39.721 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:39.721 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:39.995 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:40.000 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:40.000 BLM_TIME[469] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:44:40.002 BLM_TIME[469] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:44:40.111 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:40.117 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
ls00:44:40.384 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:40.877 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
 00:44:41.028 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:41.031 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:41.139 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:41.145 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
/00:44:41.438 BLM_SETTINGS[375] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
00:44:41.719 VBS_BUS_CAN[319] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:44:41.719 VBS_BUS_CAN[319] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:44:41.719 VBS_BUS_CAN[319] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:44:41.719 VBS_BUS_CAN[319] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:44:41.721 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:41.721 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:41.721 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:41.721 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:41.721 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:41.721 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!

00:44:42.054 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:42.057 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:42.166 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:42.171 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:42.431 BLM_SETTINGS[375] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
netstat: fscanf
00:44:42.575 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:42.865 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:43.000 BLM_TIME[469] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:44:43.002 BLM_TIME[469] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:44:43.081 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:43.083 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:43.196 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:43.204 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:43.720 VBS_BUS_CAN[319] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:44:43.720 VBS_BUS_CAN[319] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:44:43.720 VBS_BUS_CAN[319] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:44:43.720 VBS_BUS_CAN[319] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:44:43.722 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:43.722 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:43.722 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:43.722 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:43.722 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:43.722 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:44.114 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:44.116 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:44.228 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:44.233 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:44.865 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
r00:44:45.141 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:45.145 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:45.254 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:45.260 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
e00:44:45.720 VBS_BUS_CAN[319] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:44:45.720 VBS_BUS_CAN[319] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:44:45.720 VBS_BUS_CAN[319] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:44:45.720 VBS_BUS_CAN[319] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
b00:44:45.723 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:45.723 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:45.723 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:45.723 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:45.723 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:45.723 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:46.000 BLM_TIME[469] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:44:46.003 BLM_TIME[469] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
oo00:44:46.170 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:46.173 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
t00:44:46.280 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:46.284 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:46.853 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:47.202 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:47.206 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|

00:44:47.313 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:47.319 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:47.439 BLM_SETTINGS[375] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
netstat: fscanf
00:44:47.720 VBS_BUS_CAN[319] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:44:47.720 VBS_BUS_CAN[319] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:44:47.720 VBS_BUS_CAN[319] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:44:47.720 VBS_BUS_CAN[319] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:44:47.723 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:47.723 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:47.723 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:47.723 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:47.723 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:47.723 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:48.235 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:48.238 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:48.262 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:48.334 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:48.339 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:48.438 BLM_SETTINGS[375] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
00:44:48.845 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:49.000 BLM_TIME[469] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:44:49.002 BLM_TIME[469] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:44:49.248 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:49.252 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:49.347 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:49.353 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:49.429 BLM_SETTINGS[375] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
00:44:49.721 VBS_BUS_CAN[319] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:44:49.721 VBS_BUS_CAN[319] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:44:49.721 VBS_BUS_CAN[319] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:44:49.721 VBS_BUS_CAN[319] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:44:49.724 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:49.724 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:49.724 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:49.724 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:49.724 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:49.724 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:50.031 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|no pResponse|(event) 2750 1970.01.01 00:45:50|-1|0|0|0|ARMED|RUN|keep|2|2|0|com.jci.BLM_TIME_TO_CPP_TIME|occurrence:1970.01.02 02:38:00|deviation:0000.00.00 00:00:00|time:32767.127.127 127:127:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|com.jci.BLM_TIME_TO_CPP_TIME
00:44:50.031 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|no pResponse|(event) 2750 1970.01.01 00:45:50|-1|0|0|0|ARMED|RUN|keep|2|2|0|com.jci.tds2cpptime|occurrence:1970.01.02 02:38:00|deviation:0000.00.00 00:00:00|time:32767.127.127 127:127:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|com.jci.tds2cpptime
00:44:50.035 BLM_TIME[469] Info (time_client.cpp:807 blm_time_EventNotification_cb) Time from CPP_TIME: 02:38
00:44:50.035 BLM_TIME[469] Info (blm_time_logic.cpp:347 blm_time_lgc_LogicThread) blm_time_event (1) (mae 1970.01.02 02:38:00) (ts 1970.01.02 02:38:00) (tz 33621938:9730) (gps_sync 33621938) (td 1970.01.02 02:38:00 0 0 0 0 0)
00:44:50.035 BLM_TIME[469] Info (dbusTIME_service.c:194 BLM_TIME_HDBUS_ClockChanged) broadcasting 1-min signal 02:38
00:44:50.265 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:50.268 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:50.364 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:50.369 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:50.631 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:50.837 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:51.279 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:51.283 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:51.378 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:51.384 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:51.722 VBS_BUS_CAN[319] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:44:51.722 VBS_BUS_CAN[319] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:44:51.722 VBS_BUS_CAN[319] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:44:51.722 VBS_BUS_CAN[319] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:44:51.725 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:51.725 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:51.725 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:51.725 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:51.725 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:51.725 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
[1]+  Stopped                    sm
/tmp/root #
00:44:52.000 BLM_TIME[469] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:44:52.002 BLM_TIME[469] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:44:52.296 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:52.299 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:52.409 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:52.414 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
netstat: fscanf
00:44:52.830 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:53.334 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:53.337 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:53.427 BLM_SETTINGS[375] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
00:44:53.437 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:53.437 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:53.723 VBS_BUS_CAN[319] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:44:53.723 VBS_BUS_CAN[319] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:44:53.723 VBS_BUS_CAN[319] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:44:53.723 VBS_BUS_CAN[319] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:44:53.725 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:53.725 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:53.725 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:53.725 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:53.725 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:53.725 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
re00:44:54.350 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:54.354 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:54.395 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
00:44:54.432 BLM_SETTINGS[375] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
00:44:54.451 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:54.451 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
b00:44:54.819 VBS[319] Warn (vbs_module_list.cpp:364 vbs_module_AddDataToModuleRxQueue) The Function Radio Module data queue is full!
oo00:44:55.000 BLM_TIME[469] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:44:55.002 BLM_TIME[469] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
t00:44:55.368 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:55.371 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:44:55.430 BLM_SETTINGS[375] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
00:44:55.465 CPP_TIME[319] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x6b9d0 : dbus 0x70068 : name com.jci.modvdt2cpptime
00:44:55.465 CPP_TIME[427] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|

shutdown request for reboot, from pid:959
/tmp/root # cat: can't open '/proc/959/cmdline': No such file or directory
sending SIGKILL
unmounting file systems
```

### reboot
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
00:00:01.000 lvds_service: VSync Found after 0 tries.
00:00:01.000 lvds_service: Tuning values: 0, 0, 1, 1.

FGSN: 28440171096819506
cmu login: root
00:00:09.479 kernel[] Note (: ) [    0.000000] Linux version 3.0.35 (bsp@jci) (gcc version 4.5.2 20101026 (prerelease) (GCC) ) #1 SMP PREEMPT Sun Mar 15 10:12:10 IST 2015
00:00:09.479 kernel[] Info (: ) [    0.000000] CPU identified as i.MX6Q, silicon rev 1.2
00:00:09.479 kernel[] Info (: ) [    0.000000] PERCPU: Embedded 7 pages/cpu @8c008000 s4736 r8192 d15744 u32768
00:00:09.479 kernel[] Note (: ) [    0.000000] Kernel command line: console=ttymxc1,115200 lpj=8495104 ldb=sin0 loglevel=3 usbcore.authorized_default=0 panic=23 mxc_vpu_mempool.max_instances=3 ibc=1.68.8 ibs=1.68.8 BOOTSEL=1 ibcinfo=0x00928000
00:00:09.479 kernel[] Info (: ) [    0.000000] PID hash table entries: 4096 (order: 2, 16384 bytes)
00:00:09.479 kernel[] Info (: ) [    0.000000] Dentry cache hash table entries: 131072 (order: 7, 524288 bytes)
00:00:09.479 kernel[] Info (: ) [    0.000000] Inode-cache hash table entries: 65536 (order: 6, 262144 bytes)
00:00:09.479 kernel[] Info (: ) [    0.000000] Memory: 512MB 256MB = 768MB total
00:00:09.479 kernel[] Note (: ) [    0.000000] Memory: 770704k/770704k available, 277872k reserved, 0K highmem
00:00:09.479 kernel[] Note (: ) [    0.000000] Virtual kernel memory layout:
00:00:09.479 Std[] Info (: ) Creating universally unique ID...
00:00:09.479 Std[] Info (: ) HMI Starting D-Bus daemon
00:00:09.479 Std[] Info (: ) Starting Service D-Bus daemon
00:00:09.479 Std[] Info (: ) JCI_SERVICE_BUS=unix:path=/tmp/dbus_service_socket
00:00:09.479 Std[] Info (: ) JCI_HMI_BUS=unix:path=/tmp/dbus_hmi_socket
00:00:09.479 Std[] Info (: ) V4L_ADDRESS=unix:path=/tmp/dbus_hmi_socket
00:00:09.479 Std[] Info (: ) Surface LOOPLOGO_SURFACE registered
00:00:09.479 Std[] Info (: ) NATIVEGUICTRL: Video Signal changed to 2
00:00:09.479 Std[] Info (: ) NATIVEGUICTRL: Reverse changed to 1
00:00:09.479 Std[] Info (: ) NATIVEGUICTRL: Hiding camera
00:00:09.479 com.jci.cpp.net[268] Info (ServerSocket.cpp:128 bind) Here
00:00:09.479 com.jci.cpp.net[268] Info (ServerSocket.cpp:145 bind) Here
00:00:09.479 com.jci.cpp.net[268] Info (ServerSocket.cpp:254 getSocketImpl) Here
00:00:09.479 com.jci.cpp.net[268] Info (ServerSocket.cpp:261 getSocketImpl) Here
00:00:09.479 com.jci.cpp.net[268] Info (ServerSocket.cpp:265 getSocketImpl) Here
00:00:09.479 com.jci.cpp.net[268] Info (ServerSocket.cpp:280 getSocketImpl) Here
00:00:09.479 com.jci.cpp.net[268] Info (DefaultSocketImpl.cpp:176 socketBind) Binding: 127.0.0.1:5000
00:00:09.479 com.jci.cpp.net[268] Info (ServerSocket.cpp:149 bind) Here
00:00:09.479 com.jci.cpp.net[268] Info (ServerSocket.cpp:254 getSocketImpl) Here
00:00:09.479 com.jci.cpp.net[268] Info (ServerSocket.cpp:261 getSocketImpl) Here
00:00:09.479 com.jci.cpp.net[268] Info (ServerSocket.cpp:280 getSocketImpl) Here
00:00:09.479 com.jci.cpp.net[268] Info (ServerSocket.cpp:254 getSocketImpl) Here
00:00:09.479 BUCPSA[307] Info (bucpsa_main.c:61 ServiceInit) Initializing BUCPSA Service
00:00:09.479 BUCPSA[307] Info (bucpsa_settings.c:153 Bucpsa_Settings_NVRAM_Init_S32) NVRAM key bucpsa_hi_cam_installed = 0
00:00:09.479 com.jci.cpp.net[268] Info (ServerSocket.cpp:261 getSocketImpl) Here
00:00:09.479 com.jci.cpp.net[268] Info (ServerSocket.cpp:280 getSocketImpl) Here
00:00:09.479 VIDEOCTRL[258] Info (vctrl_settings.c:95 VCTRL2BLM_SETTINGS_UpdateIsNight) LOADED NEW VIDEO SETTINGS
00:00:09.479 com.jci.cpp.net[268] Info (ServerSocket.cpp:254 getSocketImpl) Here
00:00:09.479 VIDEOCTRL[258] Info (vctrl_service_core.cpp:89 VCTRL_CORE_UpdateAllOtherSettings) Updating settings for device dvd
00:00:09.479 com.jci.cpp.net[268] Info (ServerSocket.cpp:261 getSocketImpl) Here
00:00:09.479 VIDEOCTRL[258] Info (vctrl_service_core.cpp:89 VCTRL_CORE_UpdateAllOtherSettings) Updating settings for device tv
00:00:09.479 com.jci.cpp.net[268] Info (ServerSocket.cpp:280 getSocketImpl) Here
00:00:09.479 com.jci.cpp.net[268] Info (AbstractSocketImpl.cpp:304 setBlocking) Setting the non-blocking flag
00:00:09.479 VIDEOCTRL[258] Info (vctrl_settings.c:102 VCTRL2BLM_SETTINGS_UpdateIsNight) Sent new video settings to MMUI
00:00:09.479 BUCPSA[307] Info (bucpsa_settings.c:153 Bucpsa_Settings_NVRAM_Init_S32) NVRAM key bucpsa_psm_variation = -1
00:00:09.479 BUCPSA[307] Info (bucpsa_settings.c:153 Bucpsa_Settings_NVRAM_Init_S32) NVRAM key veh_parking_sensor = 1
00:00:09.479 BUCPSA[307] Info (bucpsa_settings.c:153 Bucpsa_Settings_NVRAM_Init_S32) NVRAM key bucpsa_rcta_installed = 0
00:00:09.479 BUCPSA[307] Info (bucpsa_interface.c:392 BUCPSA_SendPsmInstalledStatus) Sending PSM installed status (0) in dbus
00:00:09.479 BUCPSA[307] Info (bucpsa_steng.c:295 bucpsa_Default_EventHandler) Entering Default_State state
00:00:09.479 BUCPSA[307] Info (bucpsa_steng.c:1169 bucpsa_updateImages) RCTA is disabled for this vehicle type.
00:00:09.479 NATIVEGUI[267] Info (natgui.c:1257 NatG_Process_Inputs) NatG_Process_Inputs::: NatG_Ip_SetDisplay (imageCount=1)
00:00:09.479 NATIVEGUI[267] Info (natgui_surface_mgr.c:590 NatG_Redraw_Widget_Handler) NatG_Redraw_Widget_Handler
00:00:09.479 NATIVEGUI[267] Info (natgui.c:1187 NatG_GetImageDetails) Image = IMG_BANNER (78), [/jci/nativegui/images/SafetyText_US_English.png : (0, 433)], Language = 0
00:00:09.390 syslog-ng[290] Note (: ) syslog-ng starting up; version='3.3.5'
00:00:09.479 syslog-ng[290] Warn (: ) WARNING: you are using the pipe driver, underlying file is not a FIFO, it should be used by file(); filename='/dev/console'
00:00:09.636 kernel[] Note (: ) [    0.000000]     vector  : 0xffff0000 - 0xffff1000   (   4 kB)
00:00:09.636 kernel[] Note (: ) [    0.000000]     fixmap  : 0xfff00000 - 0xfffe0000   ( 896 kB)
00:00:09.636 kernel[] Note (: ) [    0.000000]     DMA     : 0xf4600000 - 0xffe00000   ( 184 MB)
00:00:09.636 kernel[] Note (: ) [    0.000000]     vmalloc : 0xc0800000 - 0xf2000000   ( 792 MB)
00:00:09.636 kernel[] Note (: ) [    0.000000]     lowmem  : 0x80000000 - 0xc0000000   (1024 MB)
00:00:09.636 kernel[] Note (: ) [    0.000000]     modules : 0x7f000000 - 0x80000000   (  16 MB)
00:00:09.636 kernel[] Note (: ) [    0.000000]       .init : 0x80008000 - 0x80040000   ( 224 kB)
00:00:09.636 kernel[] Note (: ) [    0.000000]       .text : 0x80040000 - 0x80440000   (4096 kB)
00:00:09.636 kernel[] Note (: ) [    0.000000]       .data : 0x80440000 - 0x8046a1a0   ( 169 kB)
00:00:09.636 kernel[] Note (: ) [    0.000000]        .bss : 0x8046a1c4 - 0x80500080   ( 600 kB)
00:00:09.636 Std[] Info (: ) TDE_TRIG_NORMAL_BOOT
00:00:09.636 Std[] Info (: ) Starting SM with /jci/sm/sm.conf .
00:00:09.636 Std[] Info (: ) jci
00:00:09.636 Std[] Info (: ) NATIVEGUICTRL: Successfully connected to DBus!
00:00:09.636 Std[] Info (: ) NNG configuration file found, no changed required.
00:00:09.636 Std[] Info (: ) =============== MAZ_CMU-150_55.00.753A  Flavor cmu150_NA ===============
00:00:09.636 Std[] Info (: ) Setting HDCP mode to 'enable'
00:00:09.636 Std[] Info (: ) Every 2s: /data_persist/dev/bin/00-start-adb/ssh-over-adb.sh1970-01-01 00:00:06
00:00:09.636 Std[] Info (: ) ALSA configuration file found. No config required.
00:00:09.636 Std[] Info (: ) DSP configuration file found.
00:00:09.636 BUCPSA[307] Info (bucpsa_steng.c:214 BUCPSA_StengPostMessage) Posting event 'BUCPSA_REVERSE_EVT' into state 'Default_State'
00:00:09.636 BUCPSA[307] Info (bucpsa_steng.c:214 BUCPSA_StengPostMessage) Posting event 'BUCPSA_ACC_EVT' into state 'Default_State'
00:00:09.636 BUCPSA[307] Info (bucpsa_steng.c:309 bucpsa_Default_EventHandler) Received gearStatus = 1
00:00:09.636 BUCPSA[307] Info (bucpsa_steng.c:364 bucpsa_Default_EventHandler) Received ACC Status = 2
00:00:09.679 kernel[] Info (: ) [    0.000000] SLUB: Genslabs=13, HWalign=32, Order=0-3, MinObjects=0, CPUs=2, Nodes=1
00:00:09.679 kernel[] Info (: ) [    0.000000] Preemptible hierarchical RCU implementation.
00:00:09.679 kernel[] Info (: ) [    0.000000] 	Verbose stalled-CPUs detection is disabled.
00:00:09.679 kernel[] Info (: ) [    0.000000] NR_IRQS:496 nr_irqs:496 496
0
Password: 0:00:09.679 kernel[] Info (: ) [    0.000000] MXC GPIO hardware
00:00:09.679 kernel[] Info (: ) [    0.000000] Init and register the timer to the framework with an 602675000 ns offset.
00:00:09.679 kernel[] Info (: ) [    0.000000] sched_clock: 32 bits at 3000kHz, resolution 333ns, wraps every 1431655ms
00:00:09.679 kernel[] Info (: ) [    0.000000] arm_max_freq=2
00:00:09.679 kernel[] Info (: ) [    0.000000] MXC_Early serial console at MMIO 0x21e8000 (options '115200')
00:00:09.679 kernel[] Info (: ) [    0.000000] bootconsole [ttymxc1] enabled
00:00:09.679 Std[] Info (: ) Surface NATGUI_SURFACE registered
00:00:09.679 Std[] Info (: ) Log started.
00:00:09.679 BUCPSA[307] Info (bucpsa_main.c:203 bucpsa_initSM_Client) SM Clinet connection semaphore relased.
00:00:09.679 BUCPSA[307] Info (bucpsa_steng.c:214 BUCPSA_StengPostMessage) Posting event 'BUCPSA_VIDEO_EVT' into state 'Default_State'
00:00:09.679 BUCPSA[307] Warn (bucpsa_interface.c:992 bucpsa_BCM_Information_cb) Error in receiving BCM Information for RCTA.
00:00:09.679 BUCPSA[307] Info (bucpsa_steng.c:350 bucpsa_Default_EventHandler) Received videoSignalStatus = 0
00:00:09.679 VIDEOCTRL[258] Info (vctrl_service_core.cpp:333 VIDEOCTRL_SetDeviceInstalled_svc) Device 0 is set to not installed
00:00:09.679 VIDEOCTRL[258] Info (vctrl_v4lcapture.c:586 VCTRL2V4LCAPTURE_SetCameraInstalled) Starting Low Grade Camera detection...
00:00:09.679 VIDEOCTRL[258] Info (vctrl_campwr.c:107 VCTRL_CAMPWR_WaitForCamPwr) Camera power is ON! Didn't need to wait
00:00:09.679 SYSTEM[261] Info (state_machine.cpp:771 system_smm_StateEnter) top
00:00:09.679 SYSTEM[261] Info (state_machine.cpp:771 system_smm_StateEnter) SYSTEM_InitState
00:00:09.707 kernel[] Info (: ) [    0.000000] Console: colour dummy device 80x30
00:00:09.707 kernel[] Info (: ) [    0.603092] Calibrating delay loop (skipped) preset value.. 1699.02 BogoMIPS (lpj=8495104)
00:00:09.707 kernel[] Info (: ) [    0.603120] pid_max: default: 32768 minimum: 301
00:00:09.707 kernel[] Info (: ) [    0.603507] Mount-cache hash table entries: 512
00:00:09.707 kernel[] Info (: ) [    0.604503] CPU: Testing write buffer coherency: ok
00:00:09.707 kernel[] Info (: ) [    0.604570] ftrace: allocating 13083 entries in 39 pages
00:00:09.707 kernel[] Info (: ) [    0.712191] Brought up 2 CPUs
00:00:09.707 kernel[] Info (: ) [    0.712212] SMP: Total of 2 processors activated (3398.04 BogoMIPS).
00:00:09.707 kernel[] Info (: ) [    0.712795] devtmpfs: initialized
00:00:09.707 kernel[] Info (: ) [    0.740179] print_constraints: dummy:
00:00:09.707 SYSTEM[261] Info (state_machine.cpp:744 system_smm_LogVbsEventInfo) Ignition on with ACC OFF!
00:00:09.707 SYSTEM[261] Info (smclient_module.cpp:853 SYSTEM_SMCM_SetShutdownAcknowledgeTimeout) SYSTEM_SMCM_SetShutdownAcknowledgeTimeout(0) has set 500 milliseconds
00:00:09.707 SYSTEM[261] Info (hardware_signal_io.cpp:1229 system_hsrm_StartPollingTemperature) Starting temperature polling with 5000 ms interval...
00:00:09.742 kernel[] Info (: ) [    0.740563] NET: Registered protocol family 16
00:00:09.742 kernel[] Info (: ) [    0.742566] print_constraints: vddpu: 725 <--> 1300 mV at 1225 mV fast normal
00:00:09.742 kernel[] Info (: ) [    0.742850] print_constraints: vddcore: 725 <--> 1300 mV at 1225 mV fast normal
00:00:09.742 kernel[] Info (: ) [    0.743108] print_constraints: vddsoc: 725 <--> 1300 mV at 1225 mV fast normal
00:00:09.742 kernel[] Info (: ) [    0.743405] print_constraints: vdd2p5: 2000 <--> 2775 mV at 2400 mV fast normal
00:00:09.742 kernel[] Info (: ) [    0.743672] print_constraints: vdd1p1: 800 <--> 1400 mV at 1100 mV fast normal
00:00:09.742 kernel[] Info (: ) [    0.743956] print_constraints: vdd3p0: 2625 <--> 3400 mV at 3000 mV fast normal
00:00:09.742 kernel[] Info (: ) [    0.745174] SET_GPIO4_28 to 1
00:00:09.742 kernel[] Info (: ) [    0.745619] cpu regulator init ldo=0
00:00:09.742 kernel[] Info (: ) [    0.746193] am335xevm: shared transport platform init
00:00:09.745 kernel[] Info (: ) [    0.752744] SET_GPIO4_28 to 0
00:00:09.745 kernel[] Info (: ) [    0.752779] L310 cache controller enabled
00:00:09.745 kernel[] Info (: ) [    0.752796] l2x0: 16 ways, CACHE_ID 0x410000c7, AUX_CTRL 0x02070000, Cache size: 1048576 B
00:00:09.745 kernel[] Info (: ) [    0.757411] bio: create slab <bio-0> at 0
00:00:09.745 kernel[] Info (: ) [    0.759786] mxs-dma mxs-dma-apbh: initialized
00:00:09.745 kernel[] Note (: ) [    0.760402] SCSI subsystem initialized
00:00:09.745 kernel[] Info (: ) [    0.760819] spi_imx imx6q-ecspi.0: probed
00:00:09.745 kernel[] Info (: ) [    0.761183] spi_imx imx6q-ecspi.1: probed
00:00:09.745 kernel[] Info (: ) [    0.761541] spi_imx imx6q-ecspi.3: probed
00:00:09.745 kernel[] Info (: ) [    0.761922] usbcore: registered new interface driver usbfs
00:00:09.745 SYSTEM[261] Info (state_machine.cpp:1114 system_smm_PrepareTransition) Preparing for SYSTEM_NormalState!
00:00:09.745 SYSTEM[261] Info (state_machine.cpp:876 system_smm_ExpectTauConnected) Waiting for TAU connected...
00:00:09.745 SYSTEM[261] Info (state_machine.cpp:822 system_smm_ExpectDisplayNormal) Waiting for display normal...
00:00:09.745 SYSTEM[261] Info (state_machine.cpp:872 system_smm_ExpectTauConnected) Still waiting for TAU connected...
00:00:09.745 SYSTEM[261] Info (state_machine.cpp:818 system_smm_ExpectDisplayNormal) Still waiting for display normal...
00:00:09.745 SYSTEM[261] Info (DisplayStateManager.cpp:496 handleInitDisplayStateRequest) Getting display status...
00:00:09.745 LVDS[61] Info (lvds_dbus.c:1757 LVDS_SystemACCMonitoring_svc) System ACC Monitoring has started, safe to stop monitoring ACC internally
00:00:09.745 LVDS[61] Info (lvds_dbus.c:1912 LVDS_GetDisplayStatus_svc) Get display status request.
00:00:09.745 LVDS[61] Info (lvds_dbus.c:1915 LVDS_GetDisplayStatus_svc) Display status request added to queue.
00:00:09.745 LVDS[61] Error (lvds_dbus.c:545 LVDS_Signal_DisplayStatus) Display Status Resp = PASSED with value 0
00:00:09.745 SYSTEM[261] Info (VideoProxy.cpp:613 display_status_confirmed_cb) Display state NORMAL detected!
00:00:09.745 SYSTEM[261] Info (DisplayStateManager.cpp:293 onDisplayStatus) Display state is NORMAL!
00:00:09.745 SYSTEM[261] Info (state_machine.cpp:615 system_smm_LogDisplayEventInfo) Display normal mode!
00:00:09.745 SYSTEM[261] Info (state_machine.cpp:872 system_smm_ExpectTauConnected) Still waiting for TAU connected...
00:00:09.745 SYSTEM[261] Info (state_machine.cpp:615 system_smm_LogDisplayEventInfo) Display normal mode!
00:00:09.745 SYSTEM[261] Info (state_machine.cpp:872 system_smm_ExpectTauConnected) Still waiting for TAU connected...
00:00:09.786 kernel[] Info (: ) [    0.762007] usbcore: registered new interface driver hub
00:00:09.786 kernel[] Info (: ) [    0.762139] usbcore: registered new device driver usb
00:00:09.786 kernel[] Info (: ) [    0.762151] Freescale USB OTG Driver loaded, $Revision: 1.55 $
00:00:09.786 kernel[] Info (: ) [    0.781617] imx-ipuv3 imx-ipuv3.0: IPU DMFC NORMAL mode: 1(0~1), 5B(4,5), 5F(6,7)
00:00:09.786 kernel[] Info (: ) [    0.801600] imx-ipuv3 imx-ipuv3.1: IPU DMFC NORMAL mode: 1(0~1), 5B(4,5), 5F(6,7)
00:00:09.786 kernel[] Info (: ) [    0.801957] Advanced Linux Sound Architecture Driver Version 1.0.24.
00:00:09.786 kernel[] Info (: ) [    0.883766] Switching to clocksource mxc_timer1
00:00:09.786 kernel[] Info (: ) [    0.907075] NET: Registered protocol family 2
00:00:09.786 kernel[] Info (: ) [    0.907497] IP route cache hash table entries: 32768 (order: 5, 131072 bytes)
00:00:09.786 kernel[] Info (: ) [    0.908997] TCP established hash table entries: 131072 (order: 8, 1048576 bytes)
00:00:09.793 kernel[] Info (: ) [    0.910822] TCP bind hash table entries: 65536 (order: 7, 786432 bytes)
00:00:09.793 kernel[] Info (: ) [    0.911916] TCP: Hash tables configured (established 131072 bind 65536)
00:00:09.793 kernel[] Info (: ) [    0.911933] TCP reno registered
00:00:09.793 kernel[] Info (: ) [    0.911953] UDP hash table entries: 512 (order: 2, 16384 bytes)
00:00:09.793 kernel[] Info (: ) [    0.911991] UDP-Lite hash table entries: 512 (order: 2, 16384 bytes)
00:00:09.793 kernel[] Info (: ) [    0.912553] NET: Registered protocol family 1
00:00:09.793 kernel[] Info (: ) [    0.912904] Unpacking initramfs...
00:00:09.793 kernel[] Info (: ) [    1.034856] Freeing initrd memory: 1528K
00:00:09.793 kernel[] Info (: ) [    1.035596] Static Power Management for Freescale i.MX6
00:00:09.793 kernel[] Info (: ) [    1.035609] wait mode is enabled for i.MX6
00:00:09.815 kernel[] Info (: ) [    1.035727] cpaddr = c0880000 suspend_iram_base=c08e8000
00:00:09.815 kernel[] Info (: ) [    1.035823] PM driver module loaded
00:00:09.815 kernel[] Info (: ) [    1.036027] IMX usb wakeup probe
00:00:09.815 kernel[] Info (: ) [    1.036574] add wake up source irq 75
00:00:09.815 kernel[] Info (: ) [    1.039928] cpu regulator init ldo=0
00:00:09.815 kernel[] Info (: ) [    1.040005] i.MXC CPU frequency driver
00:00:09.815 kernel[] Info (: ) [    1.060082] msgmni has been set to 1508
00:00:09.815 kernel[] Info (: ) [    1.063241] io scheduler noop registered (default)
00:00:09.815 kernel[] Info (: ) [    1.063630] mxc_sdc_fb mxc_sdc_fb.0: register mxc display driver ldb
00:00:09.815 kernel[] Info (: ) [    1.094928] imx-sdma imx-sdma: loaded firmware 1.1
00:00:09.820 kernel[] Info (: ) [    1.098506] imx-sdma imx-sdma: initialized
00:00:09.820 kernel[] Info (: ) [    1.098850] Serial: IMX driver
00:00:09.820 kernel[] Note (: ) [    1.098956] imx-uart imx-uart.0: Enable IRTS and CTSC
00:00:09.820 kernel[] Info (: ) [    1.098981] imx-uart.0: ttymxc0 at MMIO 0x2020000 (irq = 58) is a IMX
00:00:09.820 kernel[] Note (: ) [    1.099198] imx-uart imx-uart.1: Enable IRTS and CTSC
00:00:09.820 kernel[] Info (: ) [    1.099223] imx-uart.1: ttymxc1 at MMIO 0x21e8000 (irq = 59) is a IMX
00:00:09.820 kernel[] Info (: ) [    1.099265] console [ttymxc1] enabled, bootconsole disabled
00:00:09.820 kernel[] Note (: ) [    1.099477] imx-uart imx-uart.2: Enable IRTS and CTSC
00:00:09.820 kernel[] Info (: ) [    1.099499] imx-uart.2: ttymxc2 at MMIO 0x21ec000 (irq = 60) is a IMX
00:00:09.820 kernel[] Note (: ) [    1.099718] imx-uart imx-uart.3: CTS Trigger Level: 24
00:00:09.835 kernel[] Note (: ) [    1.099735] imx-uart imx-uart.3: RX Trigger Level: 16
00:00:09.835 kernel[] Info (: ) [    1.099753] imx-uart.3: ttymxc3 at MMIO 0x21f0000 (irq = 61) is a IMX
00:00:09.835 kernel[] Note (: ) [    1.099966] imx-uart imx-uart.4: Enable IRTS and CTSC
00:00:09.835 kernel[] Info (: ) [    1.099987] imx-uart.4: ttymxc4 at MMIO 0x21f4000 (irq = 62) is a IMX
00:00:09.835 kernel[] Warn (: ) [    1.103618] m25p80 spi0.0: found mx25l6405d, expected s25fl064p
00:00:09.835 kernel[] Info (: ) [    1.103638] m25p80 spi0.0: mx25l6405d (8192 Kbytes)
00:00:09.835 kernel[] Note (: ) [    1.103653] Creating 9 MTD partitions on "m25p80":
00:00:09.835 kernel[] Note (: ) [    1.103671] 0x000000000000-0x000000010000 : "bootstrap"
00:00:09.835 kernel[] Note (: ) [    1.104629] 0x000000010000-0x000000020000 : "boot-select"
00:00:09.835 kernel[] Note (: ) [    1.105507] 0x000000020000-0x000000040000 : "ibc1"
00:00:09.852 kernel[] Note (: ) [    1.106424] 0x000000040000-0x000000060000 : "ibc2"
00:00:09.852 kernel[] Note (: ) [    1.107332] 0x000000060000-0x000000070000 : "nv-config"
00:00:09.852 kernel[] Note (: ) [    1.108242] 0x000000070000-0x0000000d0000 : "config"
00:00:09.852 kernel[] Note (: ) [    1.109166] 0x0000000d0000-0x0000000e0000 : "jci-boot-diag"
00:00:09.852 kernel[] Note (: ) [    1.110082] 0x0000000e0000-0x0000007e0000 : "fail-safe"
00:00:09.852 kernel[] Note (: ) [    1.111019] 0x0000007e0000-0x000000800000 : "update"
00:00:09.852 kernel[] Info (: ) [    1.112452] Fixed MDIO Bus: probed
00:00:09.852 kernel[] Info (: ) [    1.112476] Initializing USB Mass Storage driver...
00:00:09.852 kernel[] Info (: ) [    1.112573] usbcore: registered new interface driver usb-storage
00:00:09.852 kernel[] Info (: ) [    1.112587] USB Mass Storage support registered.
00:00:09.857 kernel[] Info (: ) [    1.112598] i2c /dev entries driver
00:00:09.857 kernel[] Info (: ) [    1.113105] Linux video capture interface: v2.00
00:00:09.857 kernel[] Info (: ) [    1.144620] mxc_v4l2_output mxc_v4l2_output.0: V4L2 device registered as video16
00:00:09.857 kernel[] Info (: ) [    1.144779] mxc_v4l2_output mxc_v4l2_output.0: V4L2 device registered as video17
00:00:09.857 kernel[] Info (: ) [    1.145694] VPU initialized
00:00:09.857 kernel[] Info (: ) [    1.145769] vpu_mempool_init: Configuring buffers for 3 instances
00:00:09.857 kernel[] Info (: ) [    1.228199] ALSA device list:
00:00:09.857 kernel[] Info (: ) [    1.228212]   No soundcards found.
00:00:09.857 kernel[] Info (: ) [    1.229782] TCP cubic registered
00:00:09.857 kernel[] Info (: ) [    1.229798] NET: Registered protocol family 17
00:00:09.862 kernel[] Note (: ) [    1.229833] Registering the dns_resolver key type
00:00:09.862 kernel[] Info (: ) [    1.229919] VFP support v0.3: implementor 41 architecture 3 part 30 variant 9 rev 4
00:00:09.862 kernel[] Info (: ) [    1.230062] Bus freq driver module loaded
00:00:09.862 kernel[] Info (: ) [    1.230074] Bus freq driver Enabled
00:00:09.862 kernel[] Info (: ) [    1.230135] mxc_dvfs_core_probe
00:00:09.862 kernel[] Info (: ) [    1.230286] DVFS driver module loaded
00:00:09.862 kernel[] Info (: ) [    1.230709] registered taskstats version 1
00:00:09.862 kernel[] Note (: ) 6>[    1.248596]
00:00:09.862 kernel[] Info (: ) [    1.248600] Device Registered: lvds_cdrv
00:00:09.862 kernel[] Info (: ) [    1.248613] Major number = 250, Minor number = 0
00:00:09.867 kernel[] Info (: ) [    1.248854] input: LVDS TouchScreen as /devices/virtual/input/input0
00:00:09.867 kernel[] Info (: ) [    1.249399] Running do_deferred_initcalls()
00:00:09.867 kernel[] Info (: ) [    1.249581] IMX usb wakeup probe
00:00:09.867 kernel[] Info (: ) [    1.250121] squashfs: version 4.0 (2009/01/31) Phillip Lougher
00:00:09.867 kernel[] Info (: ) [    1.250137] ehci_hcd: USB 2.0 'Enhanced' Host Controller (EHCI) Driver
00:00:09.867 kernel[] Info (: ) [    1.250385] fsl-ehci fsl-ehci.0: Freescale On-Chip EHCI Host Controller
00:00:09.867 kernel[] Info (: ) [    1.250424] fsl-ehci fsl-ehci.0: new USB bus registered, assigned bus number 1
00:00:09.867 kernel[] Info (: ) [    1.262178] Number of times open() was called: 1
00:00:09.867 kernel[] Info (: ) [    1.262192] MAJOR number = 250, MINOR number = 0
00:00:09.867 kernel[] Info (: ) [    1.262202] Process id of the current process: 61
00:00:09.871 kernel[] Info (: ) [    1.262214] ref=1
00:00:09.871 kernel[] Info (: ) [    1.271232] fsl-ehci fsl-ehci.0: irq 75, io base 0x02184000
00:00:09.871 kernel[] Info (: ) [    1.284474] [U] [        1.243883669] - xsg v4lcapture - starting up
00:00:09.871 kernel[] Info (: ) [    1.284504] [U] [        1.273032669] - xsg v4lcapture - streaming on
00:00:09.871 kernel[] Info (: ) [    1.291177] fsl-ehci fsl-ehci.0: USB 2.0 started, EHCI 1.00
00:00:09.871 kernel[] Info (: ) [    1.291460] usb usb1: New USB device found, idVendor=1d6b, idProduct=0002
00:00:09.871 kernel[] Info (: ) [    1.291477] usb usb1: New USB device strings: Mfr=3, Product=2, SerialNumber=1
00:00:09.871 kernel[] Info (: ) [    1.291492] usb usb1: Product: Freescale On-Chip EHCI Host Controller
00:00:09.871 kernel[] Info (: ) [    1.291504] usb usb1: Manufacturer: Linux 3.0.35 ehci_hcd
00:00:09.871 kernel[] Info (: ) [    1.291515] usb usb1: SerialNumber: fsl-ehci.0
00:00:09.893 kernel[] Info (: ) [    1.292213] hub 1-0:1.0: USB hub found
00:00:09.893 kernel[] Info (: ) [    1.292248] hub 1-0:1.0: 1 port detected
00:00:09.893 kernel[] Info (: ) [    1.292647] add wake up source irq 72
00:00:09.893 kernel[] Info (: ) [    1.292718] fsl-ehci fsl-ehci.1: Freescale On-Chip EHCI Host Controller
00:00:09.893 kernel[] Info (: ) [    1.292754] fsl-ehci fsl-ehci.1: new USB bus registered, assigned bus number 2
00:00:09.893 kernel[] Info (: ) [    1.321190] fsl-ehci fsl-ehci.1: irq 72, io base 0x02184200
00:00:09.893 kernel[] Info (: ) [    1.341197] fsl-ehci fsl-ehci.1: USB 2.0 started, EHCI 1.00
00:00:09.893 kernel[] Info (: ) [    1.341367] usb usb2: New USB device found, idVendor=1d6b, idProduct=0002
00:00:09.893 kernel[] Info (: ) [    1.341385] usb usb2: New USB device strings: Mfr=3, Product=2, SerialNumber=1
00:00:09.893 kernel[] Info (: ) [    1.341405] usb usb2: Product: Freescale On-Chip EHCI Host Controller
00:00:09.896 kernel[] Info (: ) [    1.341418] usb usb2: Manufacturer: Linux 3.0.35 ehci_hcd
00:00:09.896 kernel[] Info (: ) [    1.341434] usb usb2: SerialNumber: fsl-ehci.1
00:00:09.896 kernel[] Info (: ) [    1.342123] hub 2-0:1.0: USB hub found
00:00:09.896 kernel[] Info (: ) [    1.342163] hub 2-0:1.0: 1 port detected
00:00:09.896 kernel[] Info (: ) [    1.342634] Thermal calibration data is 0x5644c57d
00:00:09.896 kernel[] Info (: ) [    1.342654] Thermal sensor with ratio = 177
00:00:09.896 kernel[] Info (: ) [    1.361207] Anatop Thermal registered as thermal_zone0
00:00:09.896 kernel[] Info (: ) [    1.361441] anatop_thermal_probe: default cooling device is cpufreq!
00:00:09.896 kernel[] Info (: ) [    1.485323] caam caam.0: device ID = 0x0a16010000000000
00:00:09.896 kernel[] Info (: ) [    1.485339] caam caam.0: job rings = 2, qi = 0
00:00:09.901 kernel[] Info (: ) [    1.485839] caam caam.0: authenc-hmac-md5-cbc-aes-caam
00:00:09.901 kernel[] Info (: ) [    1.486002] caam caam.0: authenc-hmac-sha1-cbc-aes-caam
00:00:09.901 kernel[] Info (: ) [    1.486185] caam caam.0: authenc-hmac-sha224-cbc-aes-caam
00:00:09.901 kernel[] Info (: ) [    1.486319] caam caam.0: authenc-hmac-sha256-cbc-aes-caam
00:00:09.901 kernel[] Info (: ) [    1.486461] caam caam.0: authenc-hmac-md5-cbc-des3_ede-caam
00:00:09.901 kernel[] Info (: ) [    1.486595] caam caam.0: authenc-hmac-sha1-cbc-des3_ede-caam
00:00:09.901 kernel[] Info (: ) [    1.486725] caam caam.0: authenc-hmac-sha224-cbc-des3_ede-caam
00:00:09.901 kernel[] Info (: ) [    1.486857] caam caam.0: authenc-hmac-sha256-cbc-des3_ede-caam
00:00:09.901 kernel[] Info (: ) [    1.486990] caam caam.0: authenc-hmac-md5-cbc-des-caam
00:00:09.901 kernel[] Info (: ) [    1.487130] caam caam.0: authenc-hmac-sha1-cbc-des-caam
00:00:09.904 kernel[] Info (: ) [    1.487266] caam caam.0: authenc-hmac-sha224-cbc-des-caam
00:00:09.904 kernel[] Info (: ) [    1.487396] caam caam.0: authenc-hmac-sha256-cbc-des-caam
00:00:09.904 kernel[] Info (: ) [    1.487524] caam caam.0: cbc-aes-caam
00:00:09.904 kernel[] Info (: ) [    1.487653] caam caam.0: cbc-3des-caam
00:00:09.904 kernel[] Info (: ) [    1.487780] caam caam.0: cbc-des-caam
00:00:09.904 kernel[] Info (: ) [    1.493328] platform caam_jr.0: registering rng-caam
00:00:09.904 kernel[] Info (: ) [    1.495663] Datalight FlashFX Tera v2.1.1 Build 2128DF OS Services
00:00:09.904 kernel[] Info (: ) [    1.495678] Linux kernel 2.6 Edition for arm -- Compiled Sep  6 2013 at 15:31:42
00:00:09.904 kernel[] Info (: ) [    1.495690] Copyright (c) 1993-2012 Datalight, Inc.  All Rights Reserved Worldwide.
00:00:09.904 kernel[] Info (: ) [    1.495701] All rights and obligations of GPL v2 apply.
00:00:09.908 kernel[] Warn (: ) [    1.496631] flashfx: module license 'Copyright (c) 1993-2012 Datalight, Inc.  All Rights Reserved Worldwide.' taints kernel.
00:00:09.908 kernel[] Warn (: ) [    1.496653] Disabling lock debugging due to kernel taint
00:00:09.908 kernel[] Info (: ) [    1.505962] Datalight FlashFX Tera v2.1.1 Build 2128DF Block Device Driver
00:00:09.908 kernel[] Info (: ) [    1.505978] Linux kernel 2.6 Edition for arm -- Compiled Sep  6 2013 at 15:31:39
00:00:09.908 kernel[] Info (: ) [    1.505990] Copyright (c) 1993-2012 Datalight, Inc.  All Rights Reserved Worldwide.
00:00:09.908 kernel[] Info (: ) [    1.506001] All rights and obligations of GPL v2 apply.
00:00:09.908 kernel[] Info (: ) [    1.506220] Datalight FlashFX Tera v2.1.1 Build 2128DF
00:00:09.908 kernel[] Info (: ) [    1.506227] Copyright (c) 1993-2012 Datalight, Inc.  All Rights Reserved Worldwide.
00:00:09.908 kernel[] Info (: ) [    1.506234] Patents:  US#5860082, US#6260156.
00:00:09.908 kernel[] Info (: ) [    1.506239] Linux kernel 2.6 Edition for arm -- Compiled Sep  6 2013 at 15:31:50
00:00:09.908 com.jci.cpp.settings.socket[335] Info (SocketRegistry.cpp:1101 openSpecific) Connected to proxy: tcpip://
00:00:09.920 kernel[] Info (: ) [    1.507860] ################################################
00:00:09.920 kernel[] Info (: ) [    1.507875] ##                                            ##
00:00:09.920 kernel[] Info (: ) [    1.507892] ##   FlashFX Tera SDK License ID: 1438932757  ##
00:00:09.920 kernel[] Info (: ) [    1.507904] ##                                            ##
00:00:09.920 kernel[] Info (: ) [    1.507915] ################################################
00:00:09.920 kernel[] Info (: ) [    1.563414]  ffx00: unknown partition table
00:00:09.920 kernel[] Info (: ) [    1.603336]  ffx01: p1 p2 p3 p4
00:00:09.920 kernel[] Info (: ) [    1.606930] Datalight Reliance Nitro v2.7.1 Build 2175BA OS Services
00:00:09.920 kernel[] Info (: ) [    1.606944] Linux Kernel Edition for arm -- Compiled Sep  6 2013 at 15:33:13
00:00:09.920 kernel[] Info (: ) [    1.606955] Copyright (c) 2003-2013 Datalight, Inc.  All Rights Reserved Worldwide.
00:00:09.920 com.jci.cpp.settings[335] Note (RegistryFactory.cpp:123 createRegistry) Startup time: 00:00:00.009023000
00:00:09.935 kernel[] Info (: ) [    1.606967] All rights and obligations of GPL v2 apply.
00:00:09.935 kernel[] Info (: ) [    1.631535] Datalight Reliance Nitro v2.7.1 Build 2175BA File System Driver
00:00:09.935 kernel[] Info (: ) [    1.631552] Linux Kernel Edition for arm -- Compiled Sep  6 2013 at 15:32:11
00:00:09.935 kernel[] Info (: ) [    1.631564] Copyright (c) 2003-2013 Datalight, Inc.  All Rights Reserved Worldwide.
00:00:09.935 kernel[] Info (: ) [    1.631575] All rights and obligations of GPL v2 apply.
00:00:09.935 kernel[] Info (: ) [    1.631602] Datalight Reliance Nitro v2.7.1 Build 2175BA
00:00:09.935 kernel[] Info (: ) [    1.631616] Linux Kernel Edition for arm -- Compiled Sep  6 2013 at 15:32:19
00:00:09.935 kernel[] Info (: ) [    1.631629] Copyright (c) 2003-2013 Datalight, Inc.  All Rights Reserved Worldwide.
00:00:09.935 kernel[] Info (: ) [    1.631643] Patents:  US#7284101.
00:00:09.935 kernel[] Info (: ) [    1.631648]
00:00:09.938 kernel[] Info (: ) [    1.631899] Datalight Reliance Nitro v2.7.1 Build 2175BA driver initialization completed successfully
00:00:09.938 kernel[] Info (: ) [    1.632133] WARNING: A volume is defined as using Block Device "/dev/ffx01p1", but
00:00:09.938 kernel[] Info (: ) [    1.632151]          no definition was found in relconf.h.  Using the default settings.
00:00:09.938 kernel[] Info (: ) [    1.632259] block device supports flush.
00:00:09.938 kernel[] Info (: ) [    1.643257] ###########################################
00:00:09.938 kernel[] Info (: ) [    1.643275] ##                                       ##
00:00:09.938 kernel[] Info (: ) [    1.643289] ##   Reliance SDK License ID 7114895F    ##
00:00:09.938 kernel[] Info (: ) [    1.643301] ##
                    ##
00:00:09.938 kernel[] Info (: ) [    1.643312] ###########################################
00:00:09.938 kernel[] Info (: ) [    1.671217] usb 2-1: new high speed USB device number 2 using fsl-ehci
00:00:09.954 kernel[] Info (: ) [    1.718671] DclOsBlockDev:Ioctl() Old BlkSize=4096 Count=   122352 SecBlk=0 BlkShift=12
00:00:09.954 kernel[] Info (: ) [    1.718690]                       New BlkSize=4096 Count=   122352 SecBlk=0 BlkShift=12
00:00:09.954 kernel[] Info (: ) [    1.718874] VOL0 mounted in 80 milliseconds
00:00:09.954 kernel[] Info (: ) [    1.821745] usb 2-1: New USB device found, idVendor=0424, idProduct=2640
00:00:09.954 kernel[] Info (: ) [    1.821765] usb 2-1: New USB device strings: Mfr=0, Product=0, SerialNumber=0
00:00:09.954 kernel[] Error (: ) [    1.822186] usb 2-1: Device is not authorized for usage
00:00:09.954 kernel[] Info (: ) [    2.235091] warning: process `init' used the deprecated sysctl system call with 2.5.
00:00:09.954 kernel[] Info (: ) [    2.235238] warning: process `init' used the deprecated sysctl system call with 2.16.
00:00:09.954 kernel[] Info (: ) [    2.409298] usbcore: registered new interface driver dsrc_acm
00:00:09.954 kernel[] Info (: ) [    2.409313] dsrc_acm: v0.26:USB Abstract Control Model driver for USB modems and ISDN adapters
00:00:09.965 kernel[] Info (: ) [    2.518587] WARNING: A volume is defined as using Block Device "/dev/ffx01p4", but
00:00:09.965 kernel[] Info (: ) [    2.518607]          no definition was found in relconf.h.  Using the default settings.
00:00:09.965 kernel[] Info (: ) [    2.520567] block device supports flush.
00:00:09.965 kernel[] Info (: ) [    2.673345] sdhci: Secure Digital Host Controller Interface driver
00:00:09.965 kernel[] Info (: ) [    2.673361] sdhci: Copyright(c) Pierre Ossman
00:00:09.965 kernel[] Info (: ) [    2.676449] DclOsBlockDev:Ioctl() Old BlkSize=4096 Count=    78624 SecBlk=0 BlkShift=12
00:00:09.965 kernel[] Info (: ) [    2.676468]                       New BlkSize=4096 Count=    78624 SecBlk=0 BlkShift=12
00:00:09.965 kernel[] Info (: ) [    2.683043] VOL1 mounted in 170 milliseconds
00:00:09.965 kernel[] Info (: ) [    2.717344] mmc0: no vmmc regulator found
00:00:09.965 kernel[] Info (: ) [    2.719938] Powering on wl12xx
00:00:09.976 kernel[] Info (: ) [    2.720080] mmc0: SDHCI controller on platform [sdhci-esdhc-imx.1] using DMA
00:00:09.976 kernel[] Info (: ) [    2.721502] mmc1: no vmmc regulator found
00:00:09.976 kernel[] Info (: ) [    2.729198] mmc1: SDHCI controller on platform [sdhci-esdhc-imx.2] using DMA
00:00:09.976 kernel[] Warn (: ) [    2.768249] mmc0: card claims to support voltages below the defined range. These will be ignored.
00:00:09.976 kernel[] Warn (: ) [    2.802076] mmc0: queuing unknown CIS tuple 0x91 (3 bytes)
00:00:09.976 kernel[] Info (: ) [    2.807803] mmc0: new high speed SDIO card at address 0001
00:00:09.976 kernel[] Info (: ) [    2.808632] Powering off wl12xx
00:00:09.976 kernel[] Note (: ) [    2.925684] mmc1: Inserting CMD4 for drive strength of $02000000
00:00:09.976 kernel[] Info (: ) [    2.964073] mmc1: new high speed DDR MMC card at address 0001
00:00:09.976 kernel[] Info (: ) [    2.965815] mmcblk0: mmc1:0001 MMC04G 3.66 GiB
00:00:09.977 kernel[] Info (: ) [    2.977015] mmcblk0boot0: mmc1:0001 MMC04G partition 1 1.00 MiB
00:00:09.977 kernel[] Info (: ) [    2.977226] mmcblk0boot1: mmc1:0001 MMC04G partition 2 1.00 MiB
00:00:09.977 kernel[] Info (: ) [    2.979372]  mmcblk0: p1 p2
00:00:09.977 kernel[] Info (: ) [    2.980211] WARNING: A volume is defined as using Block Device "/dev/mmcblk0p2", but
00:00:09.977 kernel[] Info (: ) [    2.980229]          no definition was found in relconf.h.  Using the default settings.
00:00:09.977 kernel[] Info (: ) [    2.980443] block device supports flush.
00:00:09.977 kernel[] Info (: ) [    2.982498]  mmcblk0boot1: unknown partition table
00:00:09.977 kernel[] Info (: ) [    2.985346]  mmcblk0boot0: unknown partition table
00:00:09.977 kernel[] Info (: ) [    3.025454] DclOsBlockDev:Ioctl() Old BlkSize= 512 Count=  1171952 SecBlk=0 BlkShift=9
00:00:09.977 kernel[] Info (: ) [    3.025487]                       New BlkSize= 512 Count=  1171952 SecBlk=0 BlkShift=9
00:00:09.987 kernel[] Info (: ) [    3.033894] VOL2 mounted in 60 milliseconds
00:00:09.987 kernel[] Info (: ) [    4.419888] NET: Registered protocol family 10
00:00:09.987 kernel[] Info (: ) [    5.118102] asoc: aic310x <-> imx-ssi.0 mapping ok
00:00:09.987 kernel[] Info (: ) [    5.172861] [U] splashplayer vpu_Init done
00:00:09.987 kernel[] Info (: ) [    5.212733] asoc: wl1285q-bt <-> imx-ssi.1 mapping ok
00:00:09.987 kernel[] Info (: ) [    5.427917] [U] splashplayer init Wayland+EGL
00:00:09.987 kernel[] Info (: ) [    5.644527] snvs_rtc snvs_rtc.0: rtc core: registered snvs_rtc as rtc0
00:00:09.987 kernel[] Info (: ) [    5.650105] input: Virtual Keyboard as /devices/virtual/input/input1
00:00:09.987 kernel[] Info (: ) [    5.659280] input: Virtual Mouse as /devices/virtual/input/input2
00:00:09.987 kernel[] Info (: ) [    5.670361] cmu_io_ioctl: Pid : 110, gpio:42
00:00:09.989 kernel[] Info (: ) [    5.724497] hub 2-1:1.0: USB hub found
00:00:09.989 kernel[] Info (: ) [    5.724877] hub 2-1:1.0: 3 ports detected
00:00:09.989 kernel[] Info (: ) [    5.727154] usb 2-1: authorized to connect
00:00:09.989 kernel[] Info (: ) [    5.830254] [U] splashplayer init Wayland+EGL done
00:00:09.989 kernel[] Info (: ) [    5.834516] [U] splashplayer show first frame
00:00:09.989 kernel[] Info (: ) [    5.838940] [U] splashplayer show first frame done
00:00:09.989 kernel[] Info (: ) [    5.963730] /proc/kmsg created
00:00:09.989 kernel[] Info (: ) [    5.963749] kmsg-filter loaded with loglevel=6
00:00:09.989 kernel[] Info (: ) [    6.754786] rfkill: Bluetooth RF turn on
00:00:09.989 kernel[] Info (: ) [    6.758700] mx6_bt_rfkill driver successful loaded!
00:00:09.997 kernel[] Info (: ) [    8.638917] aic310x: Setting hardware rate to 48000
00:00:09.997 kernel[] Info (: ) [    8.638933] aic310x: Setting hardware format to 2
00:00:10.024 VBS[340] Info (vbs_conf.c:1661 VBS_CONF_ProcessConfiguration) XML Configuration loaded successfully.
00:00:10.083 com.jci.cpp.devices[335] Note (Service.cpp:405 Service) Composite: false
00:00:10.090 kernel[] Info (: ) [   10.094904] input: filtered-keyboard-0x000000025905CFB6 as /devices/virtual/input/input3
00:00:10.090 kernel[] Info (: ) [   10.096965] input: filtered-mouse-0x0000000259257FB0 as /devices/virtual/input/input4
00:00:10.090 kernel[] Info (: ) [   10.098980] input: filtered-touchscreen-0x00000002594472DE as /devices/virtual/input/input5
00:00:10.266 LVDS[61] Info (lvds_main.c:805 lvds_ACC_thread) Exit ACC Thread
00:00:10.323 Std[] Info (: ) * daemon not running. starting it now on port 5037 *
00:00:10.323 Std[] Info (: ) * daemon started successfully *
00:00:10.327 Std[] Info (: ) wait adb device
00:00:10.729 VIDEOCTRL[258] Info (CDevice.cpp:144 enable) Video Capturing is enabled
00:00:10.810 kernel[] Info (: ) [   10.814480] UYVY
00:00:10.840 kernel[] Warn (: ) [   10.850800] imx-ipuv3 imx-ipuv3.1: IPU Warning - IPU_INT_STAT_10 = 0x00000001
00:00:10.880 kernel[] Info (: ) [   10.883035] UYVY
00:00:10.899 BLM_SETTINGS[375] Info (settings_svc.cpp:173 ServiceInit) enter
00:00:10.908 com.jci.cpp.settings.socket[375] Info (SocketRegistry.cpp:1101 openSpecific) Connected to proxy: tcpip://
00:00:10.910 kernel[] Warn (: ) [   10.917534] imx-ipuv3 imx-ipuv3.1: IPU Warning - IPU_INT_STAT_10 = 0x00000001
00:00:10.935 com.jci.cpp.settings[375] Note (RegistryFactory.cpp:123 createRegistry) Startup time: 00:00:00.028484001
00:00:10.936 BLM_SETTINGS[375] Info (settings_service_funs.cpp:652 SETTINGS_Additional_CPP_Interface_Open) blm_settings_started
00:00:10.937 BLM_SETTINGS[375] Info (settings_service_funs.cpp:653 SETTINGS_Additional_CPP_Interface_Open) BLMjci
/tmp/root # _SETTINGS_01.07.001
00:00:10.980 kernel[] Info (: ) [   10.985791] Attention: Writing register 0x0E, this register will be used internally.
00:00:10.980 kernel[] Info (: ) [   10.986705] Attention: Writing register 0x0E, this register will be used internally.
00:00:10.980 kernel[] Info (: ) [   10.987158] Attention: Writing register 0x4D, this register will be used internally.
00:00:10.980 kernel[] Info (: ) [   10.987600] Attention: Writing register 0x50, this register will be used internally.
00:00:10.980 kernel[] Info (: ) [   10.988489] Attention: Writing register 0xE1, this register will be used internally.
00:00:10.980 kernel[] Info (: ) [   10.988931] Attention: Writing register 0xE2, this register will be used internally.
00:00:10.980 kernel[] Info (: ) [   10.989369] Attention: Writing register 0x02, this register will be used internally.
00:00:10.980 kernel[] Info (: ) [   10.989808] Attention: Writing register 0xE3, this register will be used internally.
00:00:10.980 kernel[] Info (: ) [   10.990243] Attention: Writing register 0xE4, this register will be used internally.
00:00:11.011 BLM_SETTINGS[375] Error (settings_vbs_interface.cpp:14425 BLM_SETTINGS_Get_VBS_VehicleGroup_VehIdNumber_cb) VIN data from VBS is NULL
00:00:11.019 VBS[340] Info (vbs_loader.c:393 VBS_LOAD_LoadModules) All modules loaded!
00:00:11.024 BLM_SETTINGS[375] Info (settings_cpp_devices_interface.cpp:57 Open_CPP_Devices_Interface) Opening the device display from CPP_DEVICES 0x6463c, mutex 0x2b63cb14
00:00:11.038 VBS_BUS_CAN[340] Error (mod_can.c:2567 VBS_BUS_CAN_VIM_Data_Received_Cb) rx_handler is NULL
00:00:11.052 VBS_BUS_VDT[340] Info (mod_vdt.c:310 VBS_VDT_Initialize) Function VDT Module Initialization SUCCESS!
00:00:11.097 BLM_SETTINGS[375] Info (settings_blm_system_interface.cpp:84 Open_BLM_System_Interface) opening BLM_SYSTEM 1
00:00:11.106 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "PAD_LVLCnt_FR" ignored.
00:00:11.107 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "PAD_LVLCnt_FL" ignored.
00:00:11.107 BLM_SETTINGS[375] Info (settings_blm_system_interface.cpp:69 Open_BLM_System_Interface_cb) open BLM_SYSTEM callback 100
00:00:11.108 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "PAD_LVLCnt_RR" ignored.
00:00:11.109 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "PAD_LVLCnt_RL" ignored.
00:00:11.109 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_BrakeStatic" ignored.
00:00:11.111 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_BattStatic1" ignored.
00:00:11.112 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_BattStatic2" ignored.
00:00:11.112 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_BattStatic3" ignored.
00:00:11.113 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_BattStatic4" ignored.
00:00:11.116 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_BattStatic5" ignored.
00:00:11.117 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_BattStatic6" ignored.
00:00:11.118 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_BattStatic7" ignored.
00:00:11.119 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic1" ignored.
00:00:11.125 BLM_SETTINGS[375] Info (settings_lvds_interface.cpp:270 BLM_SETTINGS_Set_LVDS_S16_DisplayBrightness) Setting brightness to CPP_LVDS
00:00:11.125 BLM_SETTINGS[375] Info (settings_cpp_devices_interface.cpp:146 SetContrast_U8) Setting contrast from CPP_DEVICES
00:00:11.125 LVDS[61] Info (lvds_dbus.c:772 LVDS_SetBrightness_svc) Brightness Request Level = 5000
00:00:11.128 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic2" ignored.
00:00:11.134 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic3" ignored.
00:00:11.135 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic4" ignored.
00:00:11.135 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic5" ignored.
00:00:11.135 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic6" ignored.
00:00:11.135 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic7" ignored.
00:00:11.135 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic8" ignored.
00:00:11.135 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic9" ignored.
00:00:11.135 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic10" ignored.
00:00:11.142 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic11" ignored.
00:00:11.142 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic12" ignored.
00:00:11.142 VDM[340] Info (vdm_smdb.c:83 VDM_SMDB_Open) VDM SMDB opened successfully!
00:00:11.142 VDM[340] Info (vdm_vdt_current_calc.c:534 VDM_VDT_Current_SMDB_Open) VDM SMDB opened successfully!
00:00:11.142 VDM[340] Info (vdm_main.c:290 VDM_VDT_Current_Initialize) VDM Current (CVD) Opened!
00:00:11.142 LVDS[61] Info (lvds_dbus.c:488 LVDS_Signal_brightNessLevelResp) Brightness Level Resp = 5000
00:00:11.152 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "CrntVehMillege" ignored.
00:00:11.153 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "Crnt_YMDHM_ByGPS" ignored.
00:00:11.156 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "Drv1DrvTm" ignored.
00:00:11.157 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "CumulativeVehicleRunningDistance" ignored.
00:00:11.160 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "Drv1IstopTm" ignored.
00:00:11.161 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotalCumulativeDrivingTime" ignored.
00:00:11.162 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotalCumulativeIdleStopTime" ignored.
00:00:11.162 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotalCumulativeMotorRunningTime" ignored.
00:00:11.163 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "Drv1IdlDrvTm" ignored.
00:00:11.164 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotalCumulativeStoppingTime" ignored.
00:00:11.165 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "CumulativeAvarageFuelConsumption" ignored.
00:00:11.165 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "BestAvarageFuelConsumption" ignored.
00:00:11.165 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "Drv1MotActvTm" ignored.
00:00:11.165 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "Drv1AmntFuelCurr" ignored.
00:00:11.165 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "FulePulsePrev" ignored.
00:00:11.165 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "CumulativeFuelConsumption" ignored.
00:00:11.165 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "CumulativeMotorRunningDistance" ignored.
00:00:11.165 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DriveChart_Menu" ignored.
00:00:11.165 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "IDMJudgementResult" ignored.
00:00:11.165 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "AC_CompressureControl" ignored.
00:00:11.165 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "Shift_Clutch_Info" ignored.
00:00:11.169 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "WiperControl" ignored.
00:00:11.169 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "HeadlightControl" ignored.
00:00:11.169 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "Heater_Control" ignored.
00:00:11.169 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DriverInformation" ignored.
00:00:11.169 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "HEV_EnergyFlow" ignored.
00:00:11.169 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DriveChart_DetailAnalysis" ignored.
00:00:11.169 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DrvHisClr_Req" ignored.
00:00:11.169 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "PCM_Warning_status2" ignored.
00:00:11.169 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_Oil_deterioriate_Level" ignored.
00:00:11.169 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_BlowTm" ignored.
00:00:11.169 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_BlowTm2" ignored.
00:00:11.175 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_BlowTm3" ignored.
00:00:11.175 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "ACPrs_His" ignored.
00:00:11.175 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "ACCumulativeTime_for_PrsRpm" ignored.
00:00:11.175 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "PAD_LVLCnt" ignored.
00:00:11.175 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "SSU_CustermizeData" ignored.
00:00:11.175 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "FSC_CustermizeData" ignored.
00:00:11.175 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "FSC_CustermizeData2" ignored.
00:00:11.175 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "RBCM_CustermizeData" ignored.
00:00:11.175 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "PCS_CustermizeData" ignored.
00:00:11.175 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "HEC_CustermizeData" ignored.
00:00:11.175 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "PSM_CustermizeData" ignored.
00:00:11.175 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "BSM_CustermizeData" ignored.
00:00:11.175 VDM[340] Info (vdm_smdb.c:83 VDM_SMDB_Open) VDM SMDB opened successfully!
00:00:11.175 VDM[340] Info (vdm_vdt_pid_calc.c:302 VDM_VDT_Parameter_SMDB_Open) VDM PID SMDB opened successfully!
00:00:11.192 VDM[340] Info (vdm_main.c:399 VDM_VDT_Parameter_Initialize) VDM Parameter (PID) Opened!
00:00:11.200 BLM_SETTINGS[375] Info (settings_service_funs.cpp:873 SETTINGS_Additional_CPP_Interface_Open) Initial keyboard language string is "US English;ABC US English;CA French;ABC CA French;NA Spanish;ABC NA Spanish"(max:3 current:1)
00:00:11.200 BLM_SETTINGS[375] Info (settings_service_funs.cpp:882 SETTINGS_Additional_CPP_Interface_Open) ABC keyboard  support OK
00:00:11.200 BLM_SETTINGS[375] Info (settings_svc.cpp:192 ServiceInit) exit
00:00:11.200 NATIVEGUI[267] Info (natgui.c:1070 natG_smcl_sm_settingStarted_cb) natG_smcl_sm_settingStarted_cb notify_attr->evt_type=2
00:00:11.200 NATIVEGUI[267] Info (natgui.c:1073 natG_smcl_sm_settingStarted_cb) BLM settings started running. Get the language info
00:00:11.200 NATIVEGUI[267] Info (natgui_interface.c:408 NatG_If_BlmSettings_Connect) Using interface com.jci.settings.nativegui_267_1
00:00:11.202 VIDEOCTRL[258] Info (vctrl_sm_interface.c:232 OnBLM_SETTINGSIsAvailable) BLM SETTINGS is available. Connecting...
00:00:11.206 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "CrntVehMillege" ignored.
00:00:11.207 BLM_SETTINGS[375] Info (settings_blocking_queue.cpp:65 ServiceProcessBlockingQueue) thread id for ProcessBlockingQueue is 419
00:00:11.209 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotDrvTm" ignored.
00:00:11.210 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotDrv0Tm" ignored.
00:00:11.210 BLM_SETTINGS[267] Info (settings_client_funs.cpp:759 BLM_SETTINGS_Client_ExtConnect) com.jci.settings.nativegui_267_1
00:00:11.212 BLM_SETTINGS[258] Info (settings_client_funs.cpp:759 BLM_SETTINGS_Client_ExtConnect) com.jci.settings.videoctrl_258_1
00:00:11.212 BLM_SETTINGS[307] Info (settings_client_funs.cpp:759 BLM_SETTINGS_Client_ExtConnect) com.jci.settings.backupcam_307_1
00:00:11.232 BLM_SETTINGS[375] Info (settings_service_funs.cpp:1269 SETTINGS_Connect_svc) connecting client:com.jci.settings.videoctrl_258_1
00:00:11.233 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotDrv1Tm" ignored.
00:00:11.233 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotDrv2Tm" ignored.
00:00:11.233 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotDrv3Tm" ignored.
00:00:11.233 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotDrv4Tm" ignored.
00:00:11.233 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotDrv5Tm" ignored.
00:00:11.233 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotIstpTm" ignored.
00:00:11.233 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotIstp0Tm" ignored.
00:00:11.239 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotIstp1Tm" ignored.
00:00:11.239 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotIstp2Tm" ignored.
00:00:11.239 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotIstp3Tm" ignored.
00:00:11.239 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotIstp4Tm" ignored.
00:00:11.239 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotIstp5Tm" ignored.
00:00:11.239 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotMotActvTm" ignored.
00:00:11.239 BLM_SETTINGS[375] Info (settings_service_funs.cpp:1269 SETTINGS_Connect_svc) connecting client:com.jci.settings.backupcam_307_1
00:00:11.249 BLM_SETTINGS[375] Info (settings_service_funs.cpp:1269 SETTINGS_Connect_svc) connecting client:com.jci.settings.nativegui_267_1
00:00:11.249 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotMotActv0Tm" ignored.
00:00:11.249 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotMotActv1Tm" ignored.
00:00:11.249 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotMotActv2Tm" ignored.
00:00:11.249 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotMotActv3Tm" ignored.
00:00:11.249 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotMotActv4Tm" ignored.
00:00:11.249 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotMotActv5Tm" ignored.
00:00:11.249 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotIdlDrvTm" ignored.
00:00:11.249 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotIdlDrv0Tm" ignored.
00:00:11.249 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotIdlDrv1Tm" ignored.
00:00:11.249 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotIdlDrv2Tm" ignored.
00:00:11.249 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotIdlDrv3Tm" ignored.
00:00:11.249 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotIdlDrv4Tm" ignored.
00:00:11.249 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TotIdlDrv5Tm" ignored.
00:00:11.249 BLM_SETTINGS[307] Info (settings_client_funs.cpp:422 BLM_SEETINGS_Connect_cb) Client Name [com.jci.settings.backupcam_307_1]
00:00:11.249 BLM_SETTINGS[258] Info (settings_client_funs.cpp:422 BLM_SEETINGS_Connect_cb) Client Name [com.jci.settings.videoctrl_258_1]
00:00:11.249 VIDEOCTRL[258] Info (vctrl_settings.c:120 BLM_VCTRL_Connect_Callback) Registering for DisplayDayNight signal
00:00:11.249 BLM_SETTINGS[258] Info (settings_client_funs.cpp:3034 SETTINGS_Client_ExtOnChange_S16) client [com.jci.settings.videoctrl_258_1] com/jci/blm/settings/Display/DisplayDayNight
00:00:11.249 BLM_SETTINGS[258] Info (settings_client_funs.cpp:1559 SETTINGS_Client_ExtGet_S16) client [com.jci.settings.videoctrl_258_1] com/jci/blm/settings/Display/DisplayDayNight
00:00:11.249 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "EngineOilFile" ignored.
00:00:11.249 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "PTDriveFile" ignored.
00:00:11.249 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "CustomizeDataFile" ignored.
00:00:11.249 BLM_SETTINGS[267] Info (settings_client_funs.cpp:422 BLM_SEETINGS_Connect_cb) Client Name [com.jci.settings.nativegui_267_1]
00:00:11.249 BLM_SETTINGS[267] Info (settings_client_funs.cpp:1559 SETTINGS_Client_ExtGet_S16) client [com.jci.settings.nativegui_267_1] com/jci/blm/settings/SystemSettings/LanguageDisplay
00:00:11.297 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "HVD_Ind_Lamp_100_Records" ignored.
00:00:11.297 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_BattStatic1" ignored.
00:00:11.297 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_BattStatic2" ignored.
00:00:11.297 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_BattStatic3" ignored.
00:00:11.297 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_BattStatic4" ignored.
00:00:11.297 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_BattStatic5" ignored.
00:00:11.297 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_BattStatic6" ignored.
00:00:11.297 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_BattStatic7" ignored.
00:00:11.297 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic1" ignored.
00:00:11.297 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic2" ignored.
00:00:11.297 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic3" ignored.
00:00:11.297 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic4" ignored.
00:00:11.297 BLM_SETTINGS[375] Info (settings_service_funs.cpp:6677 SETTINGS_OnChange_Settings_S16_svc) client:com.jci.settings.videoctrl_258_1 key path : /2/com/jci/blm/settings/Display/DisplayDayNight
00:00:11.297 VIDEOCTRL[258] Info (vctrl_v4lcapture.c:1052 endCallGetStatus) Video Status = 31
00:00:11.297 VIDEOCTRL[258] Info (vctrl_service_core.cpp:621 VCTRL_SERVICE_signal_VideoStatusChanged) Sending VideoSignalChanged with status = 2, device = 0
00:00:11.297 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic5" ignored.
00:00:11.297 BLM_SETTINGS[375] Info (settings_service_funs.cpp:5921 SETTINGS_Get_Settings_S16_svc) key path : /2/com/jci/blm/settings/Display/DisplayDayNight
00:00:11.297 VIDEOCTRL[258] Info (vctrl_vbs.c:153 VCTRL2CPP_VBS_DTChandler) Clear fault  DTC id = 15
00:00:11.297 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic6" ignored.
00:00:11.297 BLM_SETTINGS[258] Info (settings_client_funs.cpp:2907 SETTINGS_Client_OnChange_S16_cb) SETTINGS_Client_OnChange_S16_cb
00:00:11.297 NATGUICTRL[124] Info (nativeguictrl_dbus_service_interface.c:138 ngc_videoSignal_cb) Video Signal callback with value 2
00:00:11.297 BLM_SETTINGS[375] Info (settings_service_funs.cpp:5921 SETTINGS_Get_Settings_S16_svc) key path : /2/com/jci/blm/settings/SystemSettings/LanguageDisplay
00:00:11.297 BLM_SETTINGS[258] Info (settings_client_funs.cpp:2937 SETTINGS_Client_OnChange_S16_cb) Client Name [com.jci.settings.videoctrl_258_1]
00:00:11.297 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic7" ignored.
00:00:11.297 BLM_SETTINGS[307] Info (settings_client_funs.cpp:3034 SETTINGS_Client_ExtOnChange_S16) client [com.jci.settings.backupcam_307_1] com/jci/blm/settings/Vehicle/ParkingSensor
00:00:11.297 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic8" ignored.
00:00:11.297 BLM_SETTINGS[258] Info (settings_client_funs.cpp:1458 SETTINGS_Client_Get_S16_cb) SETTINGS_Client_Get_S16_cb
00:00:11.297 BUCPSA[307] Info (bucpsa_steng.c:214 BUCPSA_StengPostMessage) Posting event 'BUCPSA_VIDEO_EVT' into state 'Default_State'
00:00:11.297 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic9" ignored.
00:00:11.297 BLM_SETTINGS[375] Info (settings_service_funs.cpp:6677 SETTINGS_OnChange_Settings_S16_svc) client:com.jci.settings.backupcam_307_1 key path : /2/com/jci/blm/settings/Vehicle/ParkingSensor
00:00:11.297 BLM_SETTINGS[258] Info (settings_client_funs.cpp:1487 SETTINGS_Client_Get_S16_cb) Client Name [com.jci.settings.videoctrl_258_1], returned value 2 for setting ID 0
00:00:11.297 BUCPSA[307] Info (bucpsa_steng.c:350 bucpsa_Default_EventHandler) Received videoSignalStatus = 2
00:00:11.297 SM[209] Info (sm.cpp:811 sm_ActionsForStoppedService) Svc stage_2[420] stopped!
00:00:11.297 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic10" ignored.
00:00:11.297 VIDEOCTRL[258] Info (vctrl_settings.c:237 BLM_VCTRL_OnChange_DayNight_Callback) DayNight Changed - value: DAY
00:00:11.297 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic11" ignored.
00:00:11.297 BLM_SETTINGS[307] Info (settings_client_funs.cpp:1559 SETTINGS_Client_ExtGet_S16) client [com.jci.settings.backupcam_307_1] com/jci/blm/settings/Vehicle/ParkingSensor
00:00:11.297 BLM_SETTINGS[267] Info (settings_client_funs.cpp:1458 SETTINGS_Client_Get_S16_cb) SETTINGS_Client_Get_S16_cb
00:00:11.297 BLM_SETTINGS[267] Info (settings_client_funs.cpp:1487 SETTINGS_Client_Get_S16_cb) Client Name [com.jci.settings.nativegui_267_1], returned value 0 for setting ID 59
00:00:11.297 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_PTStatic12" ignored.
00:00:11.297 NATIVEGUI[267] Info (natgui_interface.c:507 NatG_if_BlmSettingsCurLanguage_cb) NatG_if_BlmSettingsCurLanguage_cb. curLang=0
00:00:11.297 BLM_SETTINGS[307] Info (settings_client_funs.cpp:2907 SETTINGS_Client_OnChange_S16_cb) SETTINGS_Client_OnChange_S16_cb
00:00:11.297 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "PAD_LVLCnt_FR" ignored.
00:00:11.297 NATIVEGUI[267] Info (natgui_settings_mgr.c:192 NatG_Settings_Set_Language) Updating current language (0) in NVRAM using NVRAM_Block_setValue
00:00:11.297 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "PAD_LVLCnt_FL" ignored.
00:00:11.297 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "PAD_LVLCnt_RR" ignored.
00:00:11.297 VIDEOCTRL[258] Info (vctrl_v4lcapture.c:809 vctrl2v4lcapture_registerToV4L) Registering to v4lcapture for video status
00:00:11.297 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "PAD_LVLCnt_RL" ignored.
00:00:11.297 BLM_SETTINGS[307] Info (settings_client_funs.cpp:2937 SETTINGS_Client_OnChange_S16_cb) Client Name [com.jci.settings.backupcam_307_1]
00:00:11.297 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DR_BrakeStatic" ignored.
00:00:11.297 BLM_SETTINGS[307] Info (settings_client_funs.cpp:3034 SETTINGS_Client_ExtOnChange_S16) client [com.jci.settings.backupcam_307_1] com/jci/blm/settings/Vehicle/VehicleModelType
00:00:11.297 BLM_SETTINGS[375] Info (settings_service_funs.cpp:5921 SETTINGS_Get_Settings_S16_svc) key path : /2/com/jci/blm/settings/Vehicle/ParkingSensor
00:00:11.297 BLM_SETTINGS[307] Info (settings_client_funs.cpp:1559 SETTINGS_Client_ExtGet_S16) client [com.jci.settings.backupcam_307_1] com/jci/blm/settings/Vehicle/VehicleModelType
00:00:11.297 BLM_SETTINGS[375] Info (settings_service_funs.cpp:6677 SETTINGS_OnChange_Settings_S16_svc) client:com.jci.settings.backupcam_307_1 key path : /2/com/jci/blm/settings/Vehicle/VehicleModelType
00:00:11.400 NATGUICTRL[124] Info (nativeguictrl_dbus_service_interface.c:157 ngc_videoSignal_cb) Setting camera installed = TRUE from VideoCtrl
00:00:11.400 BLM_SETTINGS[307] Info (settings_client_funs.cpp:1458 SETTINGS_Client_Get_S16_cb) SETTINGS_Client_Get_S16_cb
00:00:11.400 BLM_SETTINGS[307] Info (settings_client_funs.cpp:1487 SETTINGS_Client_Get_S16_cb) Client Name [com.jci.settings.backupcam_307_1], returned value 1 for setting ID 144
00:00:11.400 BUCPSA[307] Info (bucpsa_steng.c:214 BUCPSA_StengPostMessage) Posting event 'BUCPSA_PSA_REFRESH_EVT' into state 'Default_State'
00:00:11.400 BLM_SETTINGS[375] Info (settings_service_funs.cpp:5921 SETTINGS_Get_Settings_S16_svc) key path : /2/com/jci/blm/settings/Vehicle/VehicleModelType
00:00:11.400 BUCPSA[307] Info (bucpsa_steng.c:381 bucpsa_Default_EventHandler) PSM System Status = Off (0)
00:00:11.400 BLM_SETTINGS[307] Info (settings_client_funs.cpp:2907 SETTINGS_Client_OnChange_S16_cb) SETTINGS_Client_OnChange_S16_cb
00:00:11.400 BLM_SETTINGS[307] Info (settings_client_funs.cpp:2937 SETTINGS_Client_OnChange_S16_cb) Client Name [com.jci.settings.backupcam_307_1]
00:00:11.507 VDM[340] Info (vdm_smdb.c:83 VDM_SMDB_Open) VDM SMDB opened successfully!
00:00:11.507 VDM[340] Info (vdm_vdt_history_calc.c:210 VDM_VDT_History_SMDB_Open) VDM History SMDB opened successfully!
00:00:11.507 VDM[340] Info (vdm_main.c:344 VDM_VDT_History_Initialize) VDM History (HVD) Opened!
00:00:11.509 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DID8E" ignored.
00:00:11.512 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DID8F" ignored.
00:00:11.512 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DID90" ignored.
00:00:11.512 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DID91" ignored.
00:00:11.512 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DIDB3" ignored.
00:00:11.512 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DIDB5" ignored.
00:00:11.512 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "DIDB6" ignored.
00:00:11.512 SMDB[340] Info (smdb_shmem.c:813 shmem_loadData) Loaded default data for DB vdm_vdt_odr_data.
00:00:11.512 VDM[340] Info (vdm_smdb.c:83 VDM_SMDB_Open) VDM SMDB opened successfully!
00:00:11.514 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "cvd_ig_on_timer" ignored.
00:00:11.515 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "cvd_out_car_temperature" ignored.
00:00:11.516 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "cvd_ymdhm_by_gps" ignored.
00:00:11.516 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "cvd_initialDiagRecord" ignored.
00:00:11.518 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "cvd_warninglamprecord" ignored.
00:00:11.518 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "cvd_initial_trigger" ignored.
00:00:11.518 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "cvd_vdt_initialze_status" ignored.
00:00:11.518 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "cvd_groupbdata" ignored.
00:00:11.522 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "cvd_indicatorlamprecord" ignored.
00:00:11.522 SMDB[340] Info (smdb_shmem.c:813 shmem_loadData) Loaded default data for DB vdm_vdt_warninglamp_data.
00:00:11.522 VDM[340] Info (vdm_smdb.c:83 VDM_SMDB_Open) VDM SMDB opened successfully!
00:00:11.534 BLM_SETTINGS[375] Info (settings_vbs_interface.cpp:11697 UpdateSymLinkForDSPConfiguration) Set DSP symlink to /jci/dsp/dsp_J36A-NoBose.xml, index in table 7
00:00:11.534 BLM_SETTINGS[375] Info (settings_symlink.hpp:228 _int_Set) symlink file /data/dsp.xml and its conatins "/jci/dsp/dsp_J36A-NoBose.xml" are OK
00:00:11.534 BLM_SETTINGS[307] Info (settings_client_funs.cpp:1458 SETTINGS_Client_Get_S16_cb) SETTINGS_Client_Get_S16_cb
00:00:11.534 BLM_SETTINGS[307] Info (settings_client_funs.cpp:1487 SETTINGS_Client_Get_S16_cb) Client Name [com.jci.settings.backupcam_307_1], returned value 1 for setting ID 140
00:00:11.534 BUCPSA[307] Info (bucpsa_interface.c:649 bucpsa_VehicleModelType_cb) Vehicle Model Type = J36 (1)
00:00:11.534 BUCPSA[307] Info (bucpsa_steng.c:214 BUCPSA_StengPostMessage) Posting event 'BUCPSA_PSA_REFRESH_EVT' into state 'Default_State'
00:00:11.534 BUCPSA[307] Info (bucpsa_steng.c:214 BUCPSA_StengPostMessage) Posting event 'BUCPSA_RCTA_REFRESH_EVT' into state 'Default_State'
00:00:11.534 BUCPSA[307] Info (bucpsa_steng.c:381 bucpsa_Default_EventHandler) PSM System Status = Off (0)
00:00:11.554 VDM[340] Info (vdm_vdt_pid_calc.c:912 VDM_VDT_WarningLamp_SMDB_Open) VDM SMDB opened successfully!
00:00:11.554 VDM[340] Info (vdm_main.c:672 VDM_VDT_WarningLamp_Initialize) VDM WarningLamp Opened = 0!
00:00:11.554 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "WrngLampAct" ignored.
00:00:11.554 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "hvd_total_distance" ignored.
00:00:11.554 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "hvd_record_number" ignored.
00:00:11.554 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "hvd_total_records" ignored.
00:00:11.564 VDM[340] Info (vdm_smdb.c:83 VDM_SMDB_Open) VDM SMDB opened successfully!
00:00:11.564 VDM[340] Info (vdm_vdt_pid_calc.c:790 VDM_VDT_WarningLampHistory_SMDB_Open) VDM History SMDB opened successfully!
00:00:11.564 VDM[340] Info (vdm_main.c:617 VDM_VDT_WarningLampHistory_Initialize) VDM WarningLampHistory Opened!
00:00:11.568 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "YMDHM_ByGPS" ignored.
00:00:11.568 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "Vehicle_Identification_Number" ignored.
00:00:11.572 VDM[340] Info (vdm_smdb.c:83 VDM_SMDB_Open) VDM SMDB opened successfully!
00:00:11.572 VDM[340] Info (vdm_vdt_settings.c:121 VDM_VDT_SETTINGS_SMDB_Open) VDM UI_MD SMDB opened successfully!
00:00:11.590 com.jci.cpp.settings.socket[340] Info (SocketRegistry.cpp:1101 openSpecific) Connected to proxy: tcpip://
00:00:11.630 com.jci.cpp.settings[340] Note (RegistryFactory.cpp:123 createRegistry) Startup time: 00:00:00.059206000
00:00:11.636 VBS_BUS_VDT[340] Info (mod_vdt.c:2160 VBS_VDT_InitSettings) Value of gs_fuel_type_CPPSettingsvalue = 1
00:00:11.637 VBS_BUS_VDT[340] Error (mod_vdt.c:391 VBS_VDT_SM_Connect) SM Connect Called
00:00:11.671 VBS_BUS_VDT[340] Info (mod_vdt_sm_client_subscribe.c:137 VBS_SM_CLIENT_Subscribe) enter
00:00:11.673 VBS_BUS_VDT[340] Info (mod_vdt_sm_client_subscribe.c:233 VBS_SM_CLIENT_Subscribe) SM_GetServices Success.
00:00:11.673 VBS_BUS_VDT[340] Info (mod_vdt_ind_lamp.c:1431 VBS_VDT_InitializeValues_IndicatorLamp) VBS_VDT_InitializeValues_IndicatorLamp
00:00:11.681 VBS_BUS_VDT[340] Info (mod_vdt_sm_client_subscribe.c:439 VBS_sm_client_get_services_cb) services_info[0].service_name: jciTime
00:00:11.682 VBS_BUS_VDT[340] Info (mod_vdt_sm_client_subscribe.c:443 VBS_sm_client_get_services_cb) Found jciTime in services_info.
00:00:11.682 VBS_BUS_VDT[340] Info (mod_vdt_sm_client_subscribe.c:459 VBS_sm_client_get_services_cb) jciTime is stopped. Calling disconnect function pointer from userData.
00:00:11.683 VBS_BUS_VDT[340] Error (mod_vdt.c:386 VBS_VDT_CPP_Time_Disconnect_cb) CPP TIME IS NOT CONNECTED
00:00:11.708 VBS_BUS_DIAG[340] Info (mod_diag_manage_svc.c:3344 initializeSemaphore) Semaphore Initialistaion is success
00:00:11.709 VBS_BUS_DIAG[340] Info (mod_diag_manage_svc.c:311 moddiag_createThread) Periodic thread created successfully
00:00:11.731 VBS_BUS_DIAG[340] Info (mod_diag_manage_svc.c:329 moddiag_PeriodicThread_Handler) Bus Diag Thread
00:00:11.753 com.jci.cpp.settings.socket[340] Info (SocketRegistry.cpp:1101 openSpecific) Connected to proxy: tcpip://
00:00:11.774 com.jci.cpp.settings[340] Note (RegistryFactory.cpp:123 createRegistry) Startup time: 00:00:00.021650667
00:00:11.775 VBS_BUS_NAVI[340] Info (mod_navigation.c:148 VBS_NAVI_ReadFuelTypeFromRegistry) VBS NAVI Handle to Settings Registry: 0x8b530, Open Stat: 0
00:00:11.780 VBS_BUS_NAVI[340] Info (mod_navigation.c:155 VBS_NAVI_ReadFuelTypeFromRegistry) VBS NAVI Handle to Settings Registry:successful :: gs_fuel_type = 1
00:00:11.789 VBS_BUS_EEM[340] Info (mod_eem.c:391 VBS_MOD_EEM_Initialize) Function EEM Module Initialization SUCCESS!
00:00:11.835 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "Drv1AvlFuelE_T_line" ignored.
00:00:11.835 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "Drv1AvlFuelE_T_bar" ignored.
00:00:11.835 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "Drv1AvlEnergy_T_bar" ignored.
00:00:11.835 VDM[340] Info (vdm_smdb.c:83 VDM_SMDB_Open) VDM SMDB opened successfully!
00:00:11.835 VDM[340] Info (vdm_eem_calc.c:200 VDM_EEM_SMDB_Open) VDM SMDB opened successfully!
00:00:11.835 VDM[340] Info (vdm_main.c:71 VDM_EEM_Initialize) VDM Opened!
00:00:11.889 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "CumAvgFuelEff" ignored.
00:00:11.947 VDM[340] Info (vdm_smdb.c:83 VDM_SMDB_Open) VDM SMDB opened successfully!
00:00:11.947 VDM[340] Info (vdm_eem_calc.c:331 VDM_EEM_History_SMDB_Open) VDM History SMDB opened successfully!
00:00:11.947 VDM[340] Info (vdm_eem_calc.c:349 VDM_EEM_History_SMDB_Open)  l_totsvd_fuel_prev_str 0
00:00:11.947 VDM[340] Info (vdm_main.c:126 VDM_EEM_History_Initialize) VDM History Opened!
00:00:11.950 com.jci.cpp.settings.socket[340] Info (SocketRegistry.cpp:1101 openSpecific) Connected to proxy: tcpip://
00:00:11.956 com.jci.cpp.settings[340] Note (RegistryFactory.cpp:123 createRegistry) Startup time: 00:00:00.009036334
00:00:11.979 VBS_BUS_EEM[340] Info (mod_eem.c:456 VBS_MOD_EEM_RegisterSendHandler) Setting Tx Handler
00:00:11.979 VBS_BUS_EEM[340] Info (mod_eem.c:461 VBS_MOD_EEM_RegisterSendHandler) Tx Handler is NOT NULL
00:00:12.000 VBS_BUS_DRVIDIDM[340] Info (mod_drvididm.c:174 VBS_MOD_DRVIDIDM_Initialize) Function DRVIDIDM Module Initialization initiated!
00:00:12.010 VBS_BUS_DRVIDIDM[340] Info (mod_drvididm.c:183 VBS_MOD_DRVIDIDM_Initialize) Function DRVIDIDM Module Initialization SUCCESS!
00:00:12.020 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "BriskAssessPoint" ignored.
00:00:12.020 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "SmoothAssessPoint" ignored.
00:00:12.020 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "CluchAssessPoint" ignored.
00:00:12.020 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "ScoreTransGrph" ignored.
00:00:12.020 VDM[340] Info (vdm_smdb.c:83 VDM_SMDB_Open) VDM SMDB opened successfully!
00:00:12.020 VDM[340] Info (vdm_main.c:837 VDM_IDM_Initialize) VDM Opened!
00:00:12.020 VBS_BUS_DRVIDIDM[340] Info (mod_drvididm.c:190 VBS_MOD_DRVIDIDM_Initialize) VDM initialized successfully
00:00:12.020 VDM[340] Info (vdm_eem_calc.c:1457 VDM_UpdateCVD_SvdFuelRate) new fuleRate = 27500
00:00:12.037 CPP_TIME[433] Info (time_dbus_sm.cpp:220 ServiceInit)    current monotonic time : 1970.01.01 00:00:12
00:00:12.038 CPP_TIME[433] Info (time_dbus_sm.cpp:220 ServiceInit)  current system real-time : 1970.01.01 00:00:12
00:00:12.068 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "HVD_BriskUpper" ignored.
00:00:12.068 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "HVD_BriskLower" ignored.
00:00:12.068 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "HVD_SmoothUpper" ignored.
00:00:12.068 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "HVD_SmoothLower" ignored.
00:00:12.068 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "HVD_CluchUpper" ignored.
00:00:12.068 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "HVD_CluchLower" ignored.
00:00:12.068 SMDB[340] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "HVD_InitialScore" ignored.
00:00:12.091 CPP_TIME[433] Info (time_dbus_service_funs.cpp:370 InitServiceSpecificsOpen) [ok] - CPP_TIME started
00:00:12.091 VBS_BUS_VDT[340] Info (mod_vdt_sm_client_subscribe.c:509 VBS_sm_client_event_handler_cb) SM_EVENT_SERVICE_STARTED CB RCVD for jciTime. Calling function from userData.
00:00:12.091 VDM[340] Info (vdm_smdb.c:83 VDM_SMDB_Open) VDM SMDB opened successfully!
00:00:12.091 VDM[340] Info (vdm_idm_calc.c:344 VDM_IDM_History_SMDB_Open) VDM History SMDB opened successfully!
00:00:12.091 VBS_BUS_DRVIDIDM[340] Info (mod_drvididm.c:201 VBS_MOD_DRVIDIDM_Initialize) VDM for HVD initialized successfully
00:00:12.091 VBS_BUS_DRVIDIDM[340] Info (mod_drvididm.c:254 VBS_MOD_DRVIDIDM_RegisterSendHandler) Setting Tx Handler
00:00:12.091 VBS_BUS_DRVIDIDM[340] Info (mod_drvididm.c:259 VBS_MOD_DRVIDIDM_RegisterSendHandler) Tx Handler is NOT NULL
00:00:12.102 CPP_TIME[340] Info (time_dbus_client_funs.cpp:2304 TIME_Client_Connect) will send connect request: conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:12.105 VBS_BUS_VDT[340] Info (mod_vdt.c:620 VBS_VDT_CPPTimeConnect) VDT Connected to CPP TIME
00:00:12.118 CPP_TIME[433] Info (time_dbus_service_funs.cpp:96 HeartBeatIncrementTimerHandler) enter
00:00:12.122 CPP_TIME[433] Info (time__cpp_Timer.cpp:244 TimerProcessingFunctionHandler) enter
00:00:12.124 VBS_BUS_VWM[340] Info (mod_vwm.c:176 Initialize) Function vwm Module Initialization!
00:00:12.132 CPP_TIME[340] Warn (time__gen_DataMutex.hpp:785 DataLock) mx locked, WILL wait until unlocked for 0xa72b8
00:00:12.133 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_Connect_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:12.137 CPP_TIME[340] Warn (time_stack_backtrace.cpp:83 __int_ShowStackBackTraceByLevel) __int_ShowStackBackTraceByLevel(TIME_debug_level_e)
00:00:12.140 CPP_TIME[340] Warn (time_stack_backtrace.cpp:83 __int_ShowStackBackTraceByLevel) com::jci::time::DataMutex::DataLock()
00:00:12.142 CPP_TIME[340] Warn (time_stack_backtrace.cpp:83 __int_ShowStackBackTraceByLevel) /jci/lib/libjcitime_client.so(+0x3b6f8)
00:00:12.156 com.jci.cpp.settings.socket[340] Info (SocketRegistry.cpp:1101 openSpecific) Connected to proxy: tcpip://
00:00:12.204 com.jci.cpp.settings[340] Note (RegistryFactory.cpp:123 createRegistry) Startup time: 00:00:00.049887333
00:00:12.208 VBS_BUS_VWM[340] Info (mod_vwm.c:926 VBS_VWM_InitSettings) Value of gs_fuel_type_CPPSettingsvalue = 1
00:00:12.228 com.jci.cpp.settings.socket[340] Info (SocketRegistry.cpp:1101 openSpecific) Connected to proxy: tcpip://
00:00:12.254 Std[] Error (: )  Compiled with SSL support, not using it
00:00:12.259 com.jci.cpp.settings[340] Note (RegistryFactory.cpp:123 createRegistry) Startup time: 00:00:00.031965667
00:00:12.277 VBS_BUS_CAN[340] Info (mod_can.c:2529 VBS_BUS_CAN_VIM_Data_Received_Cb) Sending VIM ready notification
00:00:12.277 VBS_BUS_AM[340] Info (mod_am_manage_svc.c:1993 VBS_AM_GetVolumeStatusVolMgr) Received Request : GetVolumeStatusVolMgr
00:00:12.277 VBS_BUS_BCM[340] Info (mod_bcm_manage_svc.c:594 VBS_BCM_GetPublicCANStatus_Request) On boot up, Sending Public CAN status request to Powermon
00:00:12.277 VBS_BUS_CAN[340] Info (mod_can.c:3301 VBS_BUS_CAN_GetAccCurrentStatus_cb) ACC = ON
00:00:12.277 VBS_BUS_CDVDTV[340] Info (mod_cd.c:1110 VBS_CD_ReceiveHandler) !!! Got ACC ON !!!. Start Timer
00:00:12.277 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5219 VBS_CD_Start_Timer) Timer gs_tmrRetryCnt = 10
00:00:12.277 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5437 VBS_CD_Send_DVD_Config_status_Req) Posting DVD Config Status Request to VIP
00:00:12.277 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5370 VBS_CD_Send_CD_ReadyReq) Posting CDVDTV Ready Status Request to VIP
00:00:12.277 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5773 VBS_CD_Send_DTV_StatusReq) Posting DTV Status Request to VIP
00:00:12.277 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5841 VBS_CD_Send_DTV_RoutineTestReq) Posting DTV RoutineTest Status Request to VIP
00:00:12.277 VBS_BUS_AM[340] Info (mod_am.c:862 VBS_AM_ReceiveHandler) Response: TAU Source Change response [SourceOn = 1, SourceOff = 1]
00:00:12.277 VBS_BUS_CAN[340] Info (mod_can_public.c:2246 VBS_BUS_CAN_Engine_Throttle_Response) Value of Speed Restriction = 0
00:00:12.277 VBS_BUS_CAN[340] Info (mod_can_public.c:2323 VBS_BUS_CAN_Engine_Throttle_Response) Value of Status Flag(>=1 km/hr)= 0
00:00:12.277 VBS_BUS_BCM[340] Info (mod_bcm_manage_svc.c:1019 VBS_BCM_Send_FuelCutOff) Received Fuel CutOff with value = 6
00:00:12.277 VBS_BUS_BCM[340] Info (mod_bcm.c:666 VBS_BCM_getSpeedRestconfigNVRAM) Speed Restriction: Enabled
00:00:12.277 VBS_BUS_BCM[340] Info (mod_bcm.c:513 VBS_BCM_ReceiveHandler) The value received for speed restriction at VBS BCM Plugin = 0 for destination = 0
00:00:12.277 VBS_BUS_BCM[340] Info (mod_bcm_manage_svc.c:1517 VBS_BCM_Send_NoSpeedRestrict_TouchDisplay) Speed Restrict successfully posted on HMI DBus for Touch screen with restrict = 0
00:00:12.277 VBS_BUS_BCM[340] Info (mod_bcm_manage_svc.c:1529 VBS_BCM_Send_NoSpeedRestrict_TouchDisplay) Speed Restrict successfully posted on Service DBus for Touch screen with restrict = 0
00:00:12.303 VBS_BUS_AM[340] Info (mod_am.c:1218 VBS_AM_ReceiveHandler) Value Received for BTHF = 400, RingTone = 480, Navi = 480
00:00:12.303 VBS_BUS_BCM[340] Info (mod_bcm_manage_svc.c:1152 VBS_BCM_Send_PublicCanStatus) Sending Public CAN Status on Service DBus with value = 1
00:00:12.303 SYSTEM[261] Info (state_machine.cpp:729 system_smm_LogVbsEventInfo) CAN is active!
00:00:12.303 SYSTEM[261] Info (state_machine.cpp:1959 system_smm_TopStateHandler) VBS service started!
00:00:12.303 SYSTEM[261] Info (state_machine.cpp:1440 system_smm_TryInitializeAudio) Still waiting for audio manager start!
00:00:12.303 SYSTEM[261] Info (state_machine.cpp:744 system_smm_LogVbsEventInfo) Ignition on with ACC ON!
00:00:12.303 VBS_BUS_BCM[340] Info (mod_bcm_manage_svc.c:528 VBS_BCM_GetPublicCanStatus_svc) Get Public CAN Status returned with value = 1
00:00:12.303 SYSTEM[261] Info (state_machine.cpp:729 system_smm_LogVbsEventInfo) CAN is active!
00:00:12.312 VIDEOCTRL[258] Info (vctrl_vbs.c:212 VCTRL2CPP_VBS_ChangeDTC) Clear Fault
00:00:12.312 VBS_BUS_DIAG[340] Info (mod_diag_manage_svc.c:966 VBS_DIAG_ClearFaults_Request_svc) Number of Faults passed to ClearFaultsRequest  : 1
00:00:12.312 VBS_BUS_DIAG[340] Info (mod_diag_manage_svc.c:979 VBS_DIAG_ClearFaults_Request_svc) Fault 1 is 15  - REAR_CAMERA_PWR_SOURCE
00:00:12.334 VBS_BUS_DIAG[340] Info (mod_diag_manage_svc.c:2172 VBS_SendSignal_ClearDTCResp) Current page : 0, Total page : 0  and Response Length is 4
00:00:12.334 VBS_BUS_DIAG[340] Info (mod_diag_manage_svc.c:2282 VBS_SendSignal_ClearDTCResp) Fault ID is 15 - REAR_CAMERA_PWR_SOURCE and fault status is 1
00:00:12.334 VBS_BUS_CAN[340] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:00:12.334 VBS_BUS_CAN[340] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:00:12.334 VBS_BUS_CAN[340] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:00:12.334 VBS_BUS_CAN[340] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:00:12.334 VBS_BUS_RADIO[340] Info (mod_radio_manage_svc.c:11554 vbs_radio_Start_TAU_Status_Timer) TAU Status Timer is already running
00:00:12.334 VBS_BUS_RADIO[340] Info (mod_radio_manage_svc.c:8323 VBS_RADIO_UpdateTAUConnectStandbyStat) Value of TAU connect Standy status is 1
00:00:12.334 VBS_BUS_RADIO[340] Info (mod_radio_manage_svc.c:8376 VBS_RADIO_UpdateTAUConnectStandbyStat) g_tauConnectedFileExists=0, Sending actual received TAU status to BLM.
00:00:12.334 SYSTEM[261] Info (state_machine.cpp:704 system_smm_LogVbsRadioEventInfo) Tau is connected!
00:00:12.334 SYSTEM[261] Info (state_machine.cpp:2015 system_smm_TopStateHandler) Still waiting for audio manager to get running...
00:00:12.334 VBS_BUS_RADIO[340] Info (mod_radio_manage_svc.c:11601 vbs_radio_Stop_TAU_Status_Timer) TAU request timer stopped
00:00:12.334 RADIO_DB[340] Info (radiodb_interface.c:375 RADIO_DB_Open)    File exists in flash
00:00:12.334 RADIO_DB[340] Info (radiodb_core.c:674 db_copy_file) Copy: src: /data/radio/radio_database, dest: /tmp
00:00:12.376 Std[] Error (: )  Compiled with SSL support, not using it
00:00:12.475 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5293 VBS_CD_Start_Timer) Timer Started : [CDTimerRetryCnt in decrement order = 10]
00:00:12.475 VBS_BUS_SETTINGS[340] Info (mod_settings_manage_svc.c:10562 VBS_SETTINGS_reqForHUDTiltLvlReqVal) Sending request for HUD Tilt Lvl Req value
00:00:12.475 VDM[340] Warn (vdm_vdt_current_calc.c:8909 VDM_UpdateCVD_CstmzStat_KylssWal_OnOff) Invalid value for CVD.CstmzStat_KylssWal_OnOff!
00:00:12.475 BUCPSA[307] Info (bucpsa_psm_handler.c:84 BUCPSA_InjectSensorData) PSM Update: Status=OFF, SystemError=FALSE, Sensors=[0,0,0,0,0,0], Variation=0, DisplayRequest=OFF
00:00:12.475 BUCPSA[307] Info (bucpsa_steng.c:214 BUCPSA_StengPostMessage) Posting event 'BUCPSA_PSA_EVT' into state 'Default_State'
00:00:12.475 BUCPSA[307] Info (bucpsa_steng.c:381 bucpsa_Default_EventHandler) PSM System Status = Off (0)
00:00:12.475 BLM_SETTINGS[375] Info (settings_vbs_interface.cpp:2824 BLM_SETTINGS_CMU_Status_Notification_cb) CMU Control Status notification received type - 0 value - 4
00:00:12.475 BLM_SETTINGS[375] Info (settings_vbs_interface.cpp:2829 BLM_SETTINGS_CMU_Status_Notification_cb) CMU Control Status notification received type - 1 value - 2
00:00:12.475 BLM_SETTINGS[375] Info (settings_vbs_interface.cpp:2834 BLM_SETTINGS_CMU_Status_Notification_cb) CMU Control Status notification received type - 3 value - 2
00:00:12.475 VBS_BUS_DRVIDIDM[340] Info (mod_drvididm_timers.c:65 VBS_DRVIDIDM_Initialize_Timer) checked for gs_firstboot_tmr false condition
00:00:12.475 VBS_BUS_BCM[340] Info (mod_bcm_manage_svc.c:1443 VBS_BCM_Send_IgnitionControl_Status) Sending Ignition Control Status on Service and HMI DBus with value = 5
00:00:12.475 VDM[340] Info (vdm_eem_calc.c:3865 VDM_UpdateTotal_Distance) Total_Distance value saved as <967092>!
00:00:12.475 VDM[340] Info (vdm_eem_calc.c:3152 VDM_ClearEEMData)  CLEARING DATA....
00:00:12.475 VBS_BUS_VDT[340] Info (mod_vdt.c:2110 vbs_vdt_StartDataLogging) Filtered signals updation complete. Starting normal operation
00:00:12.475 BUCPSA[307] Info (bucpsa_psm_handler.c:84 BUCPSA_InjectSensorData) PSM Update: Status=OFF, SystemError=FALSE, Sensors=[0,0,0,0,0,0], Variation=0, DisplayRequest=OFF
00:00:12.475 BUCPSA[307] Info (bucpsa_steng.c:214 BUCPSA_StengPostMessage) Posting event 'BUCPSA_PSA_EVT' into state 'Default_State'
00:00:12.475 BUCPSA[307] Info (bucpsa_steng.c:381 bucpsa_Default_EventHandler) PSM System Status = Off (0)
00:00:12.475 VBS_BUS_CAN[340] Info (mod_can_public.c:2246 VBS_BUS_CAN_Engine_Throttle_Response) Value of Speed Restriction = 0
00:00:12.475 VBS_BUS_CAN[340] Info (mod_can_public.c:2323 VBS_BUS_CAN_Engine_Throttle_Response) Value of Status Flag(>=1 km/hr)= 0
00:00:12.475 VBS_BUS_BCM[340] Info (mod_bcm.c:666 VBS_BCM_getSpeedRestconfigNVRAM) Speed Restriction: Enabled
00:00:12.475 VBS_BUS_BCM[340] Info (mod_bcm.c:513 VBS_BCM_ReceiveHandler) The value received for speed restriction at VBS BCM Plugin = 0 for destination = 0
00:00:12.475 VBS_BUS_BCM[340] Info (mod_bcm_manage_svc.c:1517 VBS_BCM_Send_NoSpeedRestrict_TouchDisplay) Speed Restrict successfully posted on HMI DBus for Touch screen with restrict = 0
00:00:12.475 VBS_BUS_BCM[340] Info (mod_bcm_manage_svc.c:1529 VBS_BCM_Send_NoSpeedRestrict_TouchDisplay) Speed Restrict successfully posted on Service DBus for Touch screen with restrict = 0
00:00:12.586 VBS_BUS_DRVIDIDM[340] Info (mod_drvididm_timers.c:77 VBS_DRVIDIDM_Initialize_Timer) Timer started Successfully
00:00:12.586 VDM[340] Info (vdm_idm_calc.c:4688 VDM_Update_All_CVD_Data2zero) Entered VDM_Update_All_CVD_Data2zero************
00:00:12.586 VDM[340] Info (vdm_idm_calc.c:5631 VDM_Update_CurrSCR_CVDs_as_ZERO) Entered VDM_Update_CurrSCR_CVDs_as_ZERO************
00:00:12.586 VBS_BUS_VDT[340] Info (mod_vdt_ind_lamp_timer.c:223 VBS_VDT_Initialize_100MS_Timer) VBS_VDT_Initialize_100MS_Timer
00:00:12.654 VBS_BUS_SETTINGS[340] Info (mod_settings_manage_svc.c:10504 VBS_SETTINGS_SendHUDTiltLvlReqVal) Successfully posted on service DBus for TiltLvlReqVal = 14
00:00:12.655 BUCPSA[307] Info (bucpsa_settings.c:290 BUCPSA_Settings_Set_RctaStatus) Updating RCTA Status = 0 in NVRAM
00:00:12.657 BUCPSA[307] Info (bucpsa_steng.c:214 BUCPSA_StengPostMessage) Posting event 'BUCPSA_RCTA_REFRESH_EVT' into state 'Default_State'
00:00:12.657 BUCPSA[307] Info (bucpsa_steng.c:421 bucpsa_Default_EventHandler) Received RCTA Equipped = False
00:00:12.664 Std[] Error (: )  Listening on port 2766
00:00:12.665 Std[] Error (: )  Listening on port 2800
00:00:12.669 VBS_BUS_SETTINGS[340] Info (mod_settings.c:1327 VBS_SETTINGS_ReceiveHandler) Received HUD Intens CNT Response with Value = 2
00:00:12.669 VBS_BUS_SETTINGS[340] Info (mod_settings.c:1335 VBS_SETTINGS_ReceiveHandler) Received HUD Auto Int Con On/Off Response with Value = 0
00:00:12.669 VBS_BUS_SETTINGS[340] Info (mod_settings.c:1351 VBS_SETTINGS_ReceiveHandler) Received HUD ManInt Cnt Level Response at MOD_SETTINGS = 20 = 0
00:00:12.686 VBS_BUS_SETTINGS[340] Info (mod_settings_manage_svc.c:7771 VBS_SETTINGS_HECIllumination_Status) Posting Parking Brake Signal with value = 1 on Service DBus
00:00:12.691 VBS_BUS_SETTINGS[340] Info (mod_settings_manage_svc.c:7797 VBS_SETTINGS_HECIllumination_Status) Posting Dimmer Cancel Signal with value = 1 on Service DBus
00:00:12.691 VBS_BUS_SETTINGS[340] Info (mod_settings_manage_svc.c:7823 VBS_SETTINGS_HECIllumination_Status) Posting Panel Brightness Level Signal with value = 100 on Service DBus
00:00:12.709 DBAPI[431] Info (dbapi_plugins.c:777 addPluginForProcessing) pluginsForProcessing size insufficient. Increasing from 0 to 5.
00:00:12.717 VBS_BUS_SETTINGS[340] Info (mod_settings_manage_svc.c:7856 VBS_SETTINGS_HECIllumination_Status) Posting Low Speed CMB /SCBS Signal with value = 1 on Service DBus
00:00:12.736 DBAPI[431] Info (dbapi_plugins.c:794 addPluginForProcessing) Reallocation successful. pluginsForProcessingStart = 0; pluginsForProcessingSize = 5.
00:00:12.747 DBAPI[431] Info (dbapi_plugins.c:1129 pluginManager) Plugin manager thread started.
00:00:12.749 DBAPIs[431] Info (dbapi_plugins.c:1225 pluginManager) connect to Service manager
00:00:12.750 DBAPI[431] Info (dbapi_plugins.c:1250 pluginManager) Connecting to SM.
00:00:12.772 login[192] Info (: ) root login on 'console'
00:00:12.795 BLM_SETTINGS[375] Info (settings_vbs_interface.cpp:14763 BLM_SETTINGS_PrioritizeAndSetDestination) Valid destination 2 found in table.
00:00:12.795 BLM_SETTINGS[375] Info (settings_vbs_interface.cpp:14773 BLM_SETTINGS_PrioritizeAndSetDestination) No change of destination is needed, it will remain 2
00:00:12.795 BLM_SETTINGS[375] Info (settings_vbs_interface.cpp:2262 BLM_SETTINGS_RBCM_Status_Notification_cb) RBCM Status notification received type - 0 value - 1
00:00:12.795 BLM_SETTINGS[375] Info (settings_vbs_interface.cpp:2292 BLM_SETTINGS_RBCM_Status_Notification_cb) RBCM Status notification received type - 1 value - 1
00:00:12.795 BLM_SETTINGS[375] Info (settings_vbs_interface.cpp:2297 BLM_SETTINGS_RBCM_Status_Notification_cb) RBCM Status notification received type - 2 value - 3
00:00:12.795 BLM_SETTINGS[375] Info (settings_vbs_interface.cpp:2302 BLM_SETTINGS_RBCM_Status_Notification_cb) RBCM Status notification received type - 3 value - 2
00:00:12.795 BLM_SETTINGS[375] Info (settings_vbs_interface.cpp:2307 BLM_SETTINGS_RBCM_Status_Notification_cb) RBCM Status notification received type - 4 value - 2
00:00:12.795 BLM_SETTINGS[375] Info (settings_vbs_interface.cpp:2312 BLM_SETTINGS_RBCM_Status_Notification_cb) RBCM Status notification received type - 5 value - 0
00:00:12.795 BLM_SETTINGS[375] Info (settings_vbs_interface.cpp:2322 BLM_SETTINGS_RBCM_Status_Notification_cb) RBCM Status notification received type - 6 value - 0
00:00:12.795 BLM_SETTINGS[375] Info (settings_vbs_interface.cpp:2317 BLM_SETTINGS_RBCM_Status_Notification_cb) RBCM Status notification received type - 7 value - 0
00:00:12.795 BLM_SETTINGS[375] Info (settings_vbs_interface.cpp:2277 BLM_SETTINGS_RBCM_Status_Notification_cb) RBCM Status notification received type - 8 value - 0
00:00:12.795 BLM_SETTINGS[375] Info (settings_vbs_interface.cpp:2328 BLM_SETTINGS_RBCM_Status_Notification_cb) RBCM Status notification received type - 10 value - 0
00:00:12.795 BLM_SETTINGS[375] Info (settings_vbs_interface.cpp:2333 BLM_SETTINGS_RBCM_Status_Notification_cb) RBCM Status notification received type - 11 value - 0
00:00:12.795 BLM_SETTINGS[375] Info (settings_vbs_interface.cpp:2338 BLM_SETTINGS_RBCM_Status_Notification_cb) RBCM Status notification received type - 12 value - 0
00:00:12.795 BLM_SETTINGS[375] Info (settings_vbs_interface.cpp:2391 BLM_SETTINGS_HEC_Status_Notification_cb) HEC Status notification received type - 1 value - 2
00:00:12.795 BLM_SETTINGS[375] Info (settings_vbs_interface.cpp:2396 BLM_SETTINGS_HEC_Status_Notification_cb) HEC Status notification received type - 2 value - 1
00:00:12.795 BLM_SETTINGS[375] Info (settings_vbs_interface.cpp:2401 BLM_SETTINGS_HEC_Status_Notification_cb) HEC Status notification received type - 3 value - 1
00:00:12.795 BLM_SETTINGS[375] Info (settings_vbs_interface.cpp:2406 BLM_SETTINGS_HEC_Status_Notification_cb) HEC Status notification received type - 4 value - 2
00:00:12.795 BLM_SETTINGS[375] Info (settings_vbs_interface.cpp:2411 BLM_SETTINGS_HEC_Status_Notification_cb) HEC Status notification received type - 5 value - 3
00:00:12.795 BLM_SETTINGS[375] Info (settings_vbs_interface.cpp:2416 BLM_SETTINGS_HEC_Status_Notification_cb) HEC Status notification received type - 6 value - 3
00:00:12.795 BLM_SETTINGS[375] Info (settings_vbs_interface.cpp:2421 BLM_SETTINGS_HEC_Status_Notification_cb) HEC Status notification received type - 7 value - 3
00:00:12.795 BLM_SETTINGS[375] Info (settings_vbs_interface.cpp:2426 BLM_SETTINGS_HEC_Status_Notification_cb) HEC Status notification received type - 8 value - 3
00:00:12.795 BLM_SETTINGS[375] Info (settings_vbsta_interface.cpp:2431 BLM_SETTINGS_HEC_Status_Notification_cb) HEC Status notification received type - 13 value - 0
00:00:12.795 BLM_SETTINGS[375] Info (settings_vbs_interface.cpp:2751 BLM_SETTINGS_PSM_Status_Notification_cb) PSM Status notification received type - 2 value - 0
00:00:12.849 BLM_SETTINGS[375] Info (settings_vbs_interface.cpp:2553 BLM_SETTINGS_SSU_Status_Notification_cb) SSU Status notification received type - 0 value - 0
00:00:12.849 BLM_SETTINGS[375] Info (settings_vbs_interface.cpp:2558 BLM_SETTINGS_SSU_Status_Notification_cb) SSU Status notification received type - 1 value - 3
00:00:12.849 BLM_SETTINGS[375] Info (settings_vbs_interface.cpp:2563 BLM_SETTINGS_SSU_Status_Notification_cb) SSU Status notification received type - 2 value - 1
00:00:12.849 BLM_SETTINGS[375] Info (settings_vbs_interface.cpp:2568 BLM_SETTINGS_SSU_Status_Notification_cb) SSU Status notification received type - 3 value - 0
00:00:12.849 BLM_SETTINGS[375] Info (settings_vbs_interface.cpp:2901 BLM_SETTINGS_HECIllumination_Status_Notification_cb) HEC Illumination Status notification received type - 12 value - 1
00:00:12.849 VBS_BUS_SETTINGS[340] Info (mod_settings_manage_svc.c:2469 VBS_SETTINGS_SetCMUControlReq_svc) Posting CMU Control Request for SCBS with Type = 13 and Value = 1
00:00:12.849 BLM_SETTINGS[375] Warn (settings_vbs_interface.cpp:10344 BLM_SETTINGS_Set_VBS_Vehicle_cb) UserData is 0
00:00:12.849 DBAPI[431] Info (dbapi_plugins.c:1277 pluginManager) subscribe to sm to receive dependency service started event
00:00:12.849 DBAPI[431] Info (dbapi_plugins.c:1327 pluginManager) Subscribing to SM for events.
00:00:12.849 DBAPI[431] Info (dbapi_plugins.c:1357 pluginManager) check if dependency are already running
00:00:12.849 DBAPI[431] Info (dbapi_plugins.c:1396 pluginManager) Asking SM for currently running dependencies.
00:00:12.849 DBAPI[431] Info (dbapi_plugins.c:1425 pluginManager) start processing plugins
00:00:12.849 DBAPI[431] Info (dbapi_plugins.c:919 getNextPluginForProcessing) Returning element with index 0
00:00:12.849 DBAPI[431] Info (dbapi_plugins.c:1443 pluginManager) subscribed for wdm
00:00:12.849 DBAPI[431] Info (dbapi_plugins.c:1451 pluginManager) initialize plugin
00:00:12.849 DBAPI[431] Warn (dbapi_plugins.c:1555 pluginManager) pb is not initialized.
00:00:12.849 DBAPI[431] Info (dbapi_plugins.c:1425 pluginManager) start processing plugins
00:00:12.849 DBAPI[431] Info (dbapi_plugins.c:919 getNextPluginForProcessing) Returning element with index 1
00:00:12.849 DBAPI[431] Info (dbapi_plugins.c:1443 pluginManager) subscribed for wdm
00:00:12.849 DBAPI[431] Info (dbapi_plugins.c:1451 pluginManager) initialize plugin
00:00:12.849 DBAPI[431] Info (dbapi_plugins.c:1484 pluginManager) if no dependency initialize plugin actually here
00:00:12.849 DBAPI[431] Info (dbapi_plugins.c:594 loadAndInitPlugin) Loading plugin radio.
00:00:12.849 DBAPI[431] Info (dbapi_plugins.c:636 loadAndInitPlugin) callig dlopen
00:00:12.966 DBAPI[431] Info (dbapi_plugins.c:653 loadAndInitPlugin) calling dlsym
00:00:12.966 DBAPI[431] Info (dbapi_plugins.c:679 loadAndInitPlugin)  calling real plugin method
00:00:12.966 DBAPI[431] Info (dbapi_plugins.c:699 loadAndInitPlugin) Plugin radio (/jci/dbapi/plugins/libdbapiradio.so) loaded and initialized.
00:00:12.966 DBAPI[431] Info (dbapi_plugins.c:1500 pluginManager) got initialized so its running
00:00:12.966 DBAPI[431] Info (dbapi_plugins.c:1506 pluginManager) tickle wdm
00:00:12.966 DBAPI[431] Info (dbapi_plugins.c:1425 pluginManager) start processing plugins
00:00:13.005 RADIO_DB[340] Error (radiodb_interface.c:1423 RADIO_DB_FM_UpdateMetadata) radio handle is null
00:00:13.005 VBS_BUS_RADIO[340] Error (mod_radio_manage_svc.c:12022 vbs_radio_clearTextData) Sending the Text_Notification response signal on dbus resulted an error.
00:00:13.005 RADIO_DB[340] Error (radiodb_interface.c:1572 RADIO_DB_FM_ClearMetadata) radio handle null
00:00:13.005 VBS_BUS_RADIO[340] Error (mod_radio_manage_svc.c:4191 VBS_RADIO_SendSignal_RadioControl) Failed to Clear FM Metadata Error Status 1
00:00:13.005 RADIO_DB[340] Error (radiodb_interface.c:1972 RADIO_DB_AM_ClearMetadata) radio handle null
00:00:13.005 VBS_BUS_RADIO[340] Error (mod_radio_manage_svc.c:4198 VBS_RADIO_SendSignal_RadioControl) Failed to Clear AM Metadata Error Status 1
00:00:13.005 VBS_BUS_RADIO[340] Info (mod_radio_manage_svc.c:5353 VBS_RADIO_SendSignal_RDS_Message) VBS_NewDataReceived_Status = 1, VBS_RDS_Message = 1
00:00:13.005 RADIO_DB[340] Error (radiodb_interface.c:1423 RADIO_DB_FM_UpdateMetadata) radio handle is null
00:00:13.005 VBS_BUS_AM[340] Info (mod_am.c:897 VBS_AM_ReceiveHandler) Response: EventMute_Off UnMute Status [Mute Type = 2]
00:00:13.005 VBS_BUS_AM[340] Info (mod_am.c:936 VBS_AM_ReceiveHandler) Response: SoftMute_On UnMute Status [Mute Type = 1]
00:00:13.005 VBS_BUS_AM[340] Info (mod_am.c:976 VBS_AM_ReceiveHandler) Response: SysMute_Off UnMute Status [Mute Type = 3]
00:00:13.005 VBS_BUS_AM[340] Info (mod_am.c:655 VBS_AM_ReceiveHandler) Received: VOLUME ID Step Value = 6
00:00:13.005 DBAPI[431] Info (dbapi_plugins.c:914 getNextPluginForProcessing) Plugin queue is empty.
00:00:13.005 VBS_BUS_SETTINGS[340] Info (mod_settings_manage_svc.c:7958 VBS_SETTINGS_BoseConnectionStatus) Posting Bose Connect Status signal on dbus with Bose Status = 0
00:00:13.005 VBS_BUS_AM[340] Info (mod_am.c:672 VBS_AM_ReceiveHandler) Response: VOLUME ID Volume Status [VolumeValue = 96]
00:00:13.005 VBS_BUS_AM[340] Info (mod_am.c:1004 VBS_AM_ReceiveHandler) Response: AUTOPILOT Audio Profile Status [Profile Value = 0]
00:00:13.005 VBS_BUS_AM[340] Info (mod_am.c:1026 VBS_AM_ReceiveHandler) Response: CENTERPOINT Audio Profile Status [Profile Value = 0]
00:00:13.005 VBS_BUS_AM[340] Info (mod_am.c:1042 VBS_AM_ReceiveHandler) Value received for AMP TYPES - 0
00:00:13.005 VBS_BUS_AM[340] Info (mod_am.c:691 VBS_AM_ReceiveHandler) Received: BASS Step Value = -3
00:00:13.005 RADIO_DB[340] Info (radiodb_interface.c:380 RADIO_DB_Open) Database from flash is loaded to RAM
00:00:13.005 VBS_BUS_NAVI[340] Info (mod_navi_manage_svc.c:286 VBS_NAVI_SendSignal_FuelType) Sending the Fuel Type response signal on dbus with value = 1
00:00:13.005 VBS_BUS_EEM[340] Error (mod_eem.c:2043 VBS_EEM_Write_Fuel_Type) Fuel Type already updated in this Cycle untill Factory reset
00:00:13.005 VBS_BUS_VWM[340] Error (mod_vwm.c:982 VBS_VWM_Write_Fuel_Type) Fuel Type already updated in this Cycle until Factory reset
00:00:13.005 VBS_BUS_VDT[340] Error (mod_vdt.c:2211 VBS_VDT_Write_Fuel_Type) Fuel Type already updated in this Cycle until Factory reset
00:00:13.005 VBS_BUS_RADIO[340] Info (mod_radio_manage_svc.c:9103 VBS_RADIO_SendHDSISRequest) Posted for Request for SIS metadata type
00:00:13.005 VBS_BUS_RADIO[340] Info (mod_radio_manage_svc.c:5353 VBS_RADIO_SendSignal_RDS_Message) VBS_NewDataReceived_Status = 0, VBS_RDS_Message = 1
00:00:13.005 VBS_BUS_AM[340] Info (mod_am.c:709 VBS_AM_ReceiveHandler) Response: BASS Audio Profile Status [Profile Value = -255]
00:00:13.005 VBS_BUS_AM[340] Info (mod_am.c:728 VBS_AM_ReceiveHandler) Received: TREBLE Step Value = 2
00:00:13.005 VBS_BUS_AM[340] Info (mod_am.c:745 VBS_AM_ReceiveHandler) Response: TREBLE Audio Profile Status [Profile Value = 170]
00:00:13.005 VBS_BUS_AM[340] Info (mod_am.c:763 VBS_AM_ReceiveHandler) Received: BALANCE Step Value = 0
00:00:13.005 VBS_BUS_AM[340] Info (mod_am.c:779 VBS_AM_ReceiveHandler) Response: BALANCE Audio Profile Status [Profile Value = 0]
00:00:13.005 VBS_BUS_AM[340] Info (mod_am.c:797 VBS_AM_ReceiveHandler) Received: FADER Step Value = 0
00:00:13.005 VBS_BUS_AM[340] Info (mod_am.c:813 VBS_AM_ReceigveHandler) Response: FADER Audio Profile Status [Profile Value = 0]
00:00:13.005 VBS_BUS_AM[340] Info (mod_am.c:830 VBS_AM_ReceiveHandler) Received: ASL Step Value = 4
00:00:13.005 VBS_BUS_AM[340] Info (mod_am.c:837 VBS_AM_ReceiveHandler) Response: ASL Audio Profile Status [Profile Value = 584]
00:00:13.005 VBS_BUS_AM[340] Info (mod_am.c:1105 VBS_AM_ReceiveHandler) Response: Source Select[SourceIndex = FM, InterruptIndex = NONE
00:00:13.005 RADIO_DB[340] Error (radiodb_interface.c:3633 radio_DB_GetAllTables) Error executing the query "SELECT name FROM sqlite_master WHERE type='table'": file is encrypted or is not a database !
00:00:13.005 VBS_BUS_RADIO[340] Info (mod_radio_manage_svc.c:11842 vbs_radio_hdMetadataRetry) Timer started
00:00:13.005 VBS_BUS_DIAG[340] Info (mod_diag.c:375 ReceiveHandler) Received GCC Config Management at MOD_DIAG: CMU TYPES  is: 2 driveChart_Log_Distance:0 destination_1 :0 destination_2:0 driveChart_Display:0 driveChart_DataTrans:0 myDoctor_Display:0 driverIdentification:0 stDis_IDM_Req:0 endDis_IDM_Req:0 stDis_Eco_Req:1 endDis_Eco_Req:1 custmzDisp_SW:2
00:00:13.005 VBS_BUS_DIAG[340] Info (mod_diag_manage_svc.c:2847 VBS_SendSignal_GCC_ConfigMgmtResp) Received GCC Config Management at MOD_DIAG:Destination is:0  CMU TYPES  is: 2 driveChart_Log_Distance:0 destination_1 :0 destination_2:0 driveChart_Display:0 driveChart_DataTrans:0 myDoctor_Display:0 driverIdentification:0 stDis_IDM_Req:0 endDis_IDM_Req:0 stDis_Eco_Req:1 endDis_Eco_Req:1 custmzDisp_SW:2
00:00:13.005 BUCPSA[307] Info (bucpsa_interface.c:913 bucpsa_ProcessGCCNotification) Received HiCamera = 0
00:00:13.005 VBS_BUS_SETTINGS[340] Info (mod_settings_manage_svc.c:6520 VBS_SETTINGS_GCC_ConfigMgtm_BlockBF11) Sending GCC Config Management with DSP_mic = 0
00:00:13.005 VBS_BUS_DRVIDIDM[340] Warn (mod_drvididm.c:335 VBS_MOD_DRVIDIDM_ReceiveHandler) Transmission of signal VBS_DRVIDIDM_Send_StDis_IDM_Req failed
00:00:13.005 VBS_BUS_DRVIDIDM[340] Warn (mod_drvididm.c:342 VBS_MOD_DRVIDIDM_ReceiveHandler) Transmission of signal VBS_DRVIDIDM_Send_EndDis_IDM_Req failed
00:00:13.005 VBS_BUS_DRVIDIDM[340] Info (mod_drvididm_manage_svc.c:356 VBS_DRVIDIDM_Send_DriverIdentification)   ***** DriverID BLM is not yet started....!!!!
00:00:13.005 VBS_BUS_DRVIDIDM[340] Warn (mod_drvididm.c:351 VBS_MOD_DRVIDIDM_ReceiveHandler) Transmission of signal VBS_DRVIDIDM_Send_DriverIdentification failed
00:00:13.362 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5219 VBS_CD_Start_Timer) Timer gs_tmrRetryCnt = 9
00:00:13.362 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5437 VBS_CD_Send_DVD_Config_status_Req) Posting DVD Config Status Request to VIP
00:00:13.364 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5370 VBS_CD_Send_CD_ReadyReq) Posting CDVDTV Ready Status Request to VIP
00:00:13.364 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5841 VBS_CD_Send_DTV_RoutineTestReq) Posting DTV RoutineTest Status Request to VIP
00:00:13.364 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5773 VBS_CD_Send_DTV_StatusReq) Posting DTV Status Request to VIP
00:00:13.369 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5293 VBS_CD_Start_Timer) Timer Started : [CDTimerRetryCnt in decrement order = 9]
00:00:13.408 BLM_SETTINGS[375] Warn (settings_service_funs.cpp:8589 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:00:13.408 BLM_SETTINGS[375] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/SafetyConvenience/AutoWiper <!> Value is not in range
00:00:13.441 BLM_SETTINGS[375] Info (settings_vbs_interface.cpp:3082 BLM_SETTINGS_Vehicle_VIN_Notification) Vehicle VIN notification received [JM1BM1T79G1319820][19]
00:00:13.455 BLM_SETTINGS[375] Warn (settings_service_funs.cpp:8631 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
0e0:00:13.455 BLM_SETTINGS[375] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/Headlights/HBC_AutoSensitivity <!> Value is not in range
00:00:13.476 CPP_APPSDK[429] Info (appsdk_net.c:380 APPSDK_SendDataToGUI) APPSDK NET: Sending 410 bytes to GUI: "{"msgType":"JSPlugInLoadList","pluginList":[{"plugInName":"msg","serviceId":1,"JSLibName":"libjcipluginmsg.js"},{"plugInName":"fav","serviceId":2,"JSLibName":"libjcipluginfav.js"},{"plugInName":"usbm","serviceId":3,"JSLibName":"libjcipluginusbm.js"},{"plugInName":"navifav","serviceId":4,"JSLibName":"libjcipluginnavifav.js"},{"plugInName":"cd","serviceId":5,"JSLibName":"libjcipluginncd.js"}],"plugInCount":5}"
00:00:13.511 BLM_SETTINGS[375] Warn (settings_service_funs.cpp:8589 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:00:13.511 BLM_SETTINGS[375] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/Headlights/DRL <!> Value is not in range
00:00:13.535 VBS_BUS_SETTINGS[340] Info (mod_settings_manage_svc.c:5836 VBS_SETTINGS_GCC_ConfigMgtm_BlockC103) Received GCC Config Management with Vehicle Type = 54
00:00:13.535 VBS_BUS_SETTINGS[340] Info (mod_settings_manage_svc.c:5870 VBS_SETTINGS_GCC_ConfigMgtm_BlockC103) Received GCC Config Management with Brand = 7
00:00:13.559 BLM_SETTINGS[375] Warn (settings_service_funs.cpp:8631 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:00:13.559 BLM_SETTINGS[375] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/SafetyConvenience/AutoDoorLockMT <!> Value is not in range
00:00:13.604 BLM_SETTINGS[375] Warn (settings_service_funs.cpp:8631 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:00:13.604 BLM_SETTINGS[375] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/Headlights/HBC_ComingHomeLightsTimer <!> Value is not in range
00:00:13.649 BLM_SETTINGS[375] Warn (settings_service_funs.cpp:8631 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:00:13.649 BLM_SETTINGS[375] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/Headlights/HBC_LeavingHomeLights <!> Value is not in range
00:00:13.685 BLM_SETTINGS[375] Warn (settings_service_funs.cpp:8631 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:00:13.685 BLM_SETTINGS[375] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/SafetyConvenience/DoorLockModeAT6 <!> Value is not in range
00:00:13.777 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:13.795 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:13.815 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:13.815 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:13.871 USBDTC[528] Info (usbdtc_main.cpp:96 ServiceInit) Args:[pwr]; USE_USBVBUSPOWER_RECOVERY=[1]
00:00:13.872 CPP_TIME[499] Info (time_dbus_client_funs.cpp:2304 TIME_Client_Connect) will send connect request: conn 0x4af38 : dbus 0x4dc20 : name com.jci.BLM_TIME_TO_CPP_TIME
00:00:13.875 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_Connect_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:13.886 CPP_TIME[499] Info (time_dbus_client_funs.cpp:3443 TIME_Client_RegisterForDatetimeChangeEvent) request to cpp_time : conn 0x4af38 : dbus 0x4dc20 : name com.jci.BLM_TIME_TO_CPP_TIME
00:00:13.892 CPP_TIME[433] Info (time_dbus_service_funs.cpp:2914 TIME_RegisterForDatetimeChangeEvent_svc) registering for event : 32767.127.127 127:127:00 client : com.jci.BLM_TIME_TO_CPP_TIME
00:00:13.892 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_RegisterForDatetimeChangeEvent_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:13.892 CPP_TIME[433] Warn (time_common.cpp:772 TIME_convertStructuredTimeToTime) mktime - bad parameter :32767.127.127 127:127:00
00:00:13.892 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) time_RegisterForDatetimeChangeEvent_resp_cb|(event) 60 1970.01.01 00:01:00|-1|0|0|0|ARMED|RUN|keep|2|2|0|com.jci.BLM_TIME_TO_CPP_TIME|occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:32767.127.127 127:127:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|com.jci.BLM_TIME_TO_CPP_TIME
00:00:13.892 CPP_TIME[433] Warn (time_dbus_service_funs.cpp:1439 time_RegisterForDatetimeChangeEvent_resp_cb) already existing and will be deleted|(event) 60 1970.01.01 00:01:00|-1|0|0|0|ARMED|RUN|keep|2|2|0|com.jci.BLM_TIME_TO_CPP_TIME|occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:32767.127.127 127:127:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|com.jci.BLM_TIME_TO_CPP_TIME
00:00:13.892 CPP_TIME[433] Info (time_dbus_service_funs.cpp:1446 time_RegisterForDatetimeChangeEvent_resp_cb) adding event
00:00:13.903 BLM_SETTINGS[499] Info (settings_client_funs.cpp:759 BLM_SETTINGS_Client_ExtConnect) com.jci.BLM_TIME_TO_BLM_SETTINGS
00:00:13.908 CPP_TIME[499] Warn (time__gen_DataMutex.hpp:785 DataLock) mx locked, WILL wait until unlocked for 0x47058
00:00:13.912 CPP_TIME[499] Warn (time_stack_backtrace.cpp:83 __int_ShowStackBackTraceByLevel) __int_ShowStackBackTraceByLevel(TIME_debug_level_e)
00:00:13.931 CPP_TIME[499] Warn (time_stack_backtrace.cpp:83 __int_ShowStackBackTraceByLevel) com::jci::time::DataMutex::DataLock()
00:00:13.938 CPP_TIME[499] Warn (time_stack_backtrace.cpp:83 __int_ShowStackBackTraceByLevel) /jci/lib/libjcitime_client.so(+0x3b6f8)
00:00:13.949 BLM_SETTINGS[375] Info (settings_service_funs.cpp:1269 SETTINGS_Connect_svc) connecting client:com.jci.BLM_TIME_TO_BLM_SETTINGS
00:00:13.955 BLM_SETTINGS[528] Info (settings_client_funs.cpp:712 BLM_SETTINGS_Client_Connect) com.jci.settings_client_usbdtc
00:00:13.970 BLM_SETTINGS[499] Info (settings_client_funs.cpp:422 BLM_SEETINGS_Connect_cb) Client Name [com.jci.BLM_TIME_TO_BLM_SETTINGS]
00:00:13.972 BLM_SETTINGS[499] Info (settings_client_funs.cpp:2760 SETTINGS_Client_ExtOnChange_U8) client [com.jci.BLM_TIME_TO_BLM_SETTINGS] com/jci/blm/settings/Time/TimeZone
00:00:13.977 BLM_SETTINGS[375] Info (settings_service_funs.cpp:6617 SETTINGS_OnChange_Settings_U8_svc) client:com.jci.BLM_TIME_TO_BLM_SETTINGS key path : /2/com/jci/blm/settings/Time/TimeZone
00:00:13.984 BLM_SETTINGS[375] Info (settings_service_funs.cpp:1269 SETTINGS_Connect_svc) connecting client:com.jci.settings_client_usbdtc
00:00:14.008 BLM_SETTINGS[528] Info (settings_client_funs.cpp:422 BLM_SEETINGS_Connect_cb) Client Name [com.jci.settings_client_usbdtc]
00:00:14.011 BLM_SETTINGS[528] Warn (settings_client_funs.cpp:479 BLM_SEETINGS_Connect_cb) Connection call-back pointer is null -  no call-back!
00:00:14.038 VBS_BUS_DIAG[340] Info (mod_diag.c:331 ReceiveHandler) Received GCC Config Management at MOD_DIAG: destination is: 2
00:00:14.038 VBS_BUS_DIAG[340] Info (mod_diag_manage_svc.c:2847 VBS_SendSignal_GCC_ConfigMgmtResp) Received GCC Config Management at MOD_DIAG:Destination is:2  CMU TYPES  is: 2 driveChart_Log_Distance:0 destination_1 :0 destination_2:0 driveChart_Display:0 driveChart_DataTrans:0 myDoctor_Display:0 driverIdentification:0 stDis_IDM_Req:0 endDis_IDM_Req:0 stDis_Eco_Req:1 endDis_Eco_Req:1 custmzDisp_SW:2
00:00:14.038 VBS_BUS_BCM[340] Info (mod_bcm_manage_svc.c:951 VBS_BCM_Send_CarSpeedThreshold) Speed Restrict successfully posted on HMI DBus for NA/Japan with restrict = 0
00:00:14.038 VBS_BUS_BCM[340] Info (mod_bcm_manage_svc.c:962 VBS_BCM_Send_CarSpeedThreshold) Speed Restrict successfully posted on Service DBus for NA/Japan with restrict = 0
00:00:14.074 BLM_SETTINGS[528] Info (settings_client_funs.cpp:1530 SETTINGS_Client_Get_S16) com/jci/maz/cmu/Region
00:00:14.074 BLM_SETTINGS[528] Info (settings_client_funs.cpp:1559 SETTINGS_Client_ExtGet_S16) client [com.jci.settings_client_usbdtc] com/jci/maz/cmu/Region
00:00:14.077 BLM_SETTINGS[375] Info (settings_service_funs.cpp:5921 SETTINGS_Get_Settings_S16_svc) key path : /1/com/jci/maz/cmu/Region
00:00:14.305 BLM_SETTINGS[375] Warn (settings_service_funs.cpp:8631 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:00:14.305 BLM_SETTINGS[375] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/Headlights/AFS <!> Value is not in range
00:00:14.313 BLM_SETTINGS[375] Warn (settings_service_funs.cpp:8631 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:00:14.313 BLM_SETTINGS[375] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/ForwardDetection/DriverAlert <!> Value is not in range
00:00:14.345 BLM_SETTINGS[375] Warn (settings_service_funs.cpp:8589 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:00:14.345 BLM_SETTINGS[375] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/Keyless/WalkawayLock <!> Value is not in range
00:00:14.349 DIAG[522] Info (testdiag_main.c:171 GetServiceInterfaces) GetServiceInterfaces
00:00:14.360 DIAG[522] Info (testdiag_statemachine.c:637 TESTDIAG_initializeStateMachine) Starting the state machine
00:00:14.364 VBS_BUS_SETTINGS[340] Info (mod_settings_manage_svc.c:9351 VBS_SETTINGS_Send_StatusReady) Status Ready Signals : [1][1][1][1][1][1][1][1][1][1][1][1][1][1][1][1][0][0][0][1][0][0][1][1][1][0][0][0][0][0][1][1][1][1][1][1][1][1][1][1][1][1][1][1][1][1][1][1][1][1][1][1][1][0][0][0][1][1][1][1][1][1]
00:00:14.364 BLM_SETTINGS[375] Info (settings_vbs_interface.cpp:4178 BLM_SETTINGS_ReadyFlag_Notification) Ready flag notification received
00:00:14.366 DIAG[522] Info (testdiag_statemachine.c:718 TESTDIAG_startStateMachine) Testdiag Application thread created with thread id = 302232
00:00:14.367 DIAG[522] Info (testdiag_statemachine.c:936 testdiag_TopState_EventHandler) BLM_TESTDIAG entering TOP state
00:00:14.368 DIAG[522] Info (testdiag_statemachine.c:942 testdiag_TopState_EventHandler) Entered Top State
00:00:14.370 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5219 VBS_CD_Start_Timer) Timer gs_tmrRetryCnt = 8
00:00:14.370 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5437 VBS_CD_Send_DVD_Config_status_Req) Posting DVD Config Status Request to VIP
00:00:14.370 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5370 VBS_CD_Send_CD_ReadyReq) Posting CDVDTV Ready Status Request to VIP
00:00:14.370 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5841 VBS_CD_Send_DTV_RoutineTestReq) Posting DTV RoutineTest Status Request to VIP
00:00:14.370 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5773 VBS_CD_Send_DTV_StatusReq) Posting DTV Status Request to VIP
00:00:14.381 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5293 VBS_CD_Start_Timer) Timer Started : [CDTimerRetryCnt in decrement order = 8]
00:00:14.382 com.jci.cpp.settings.socket[522] Info (SocketRegistry.cpp:1101 openSpecific) Connected to proxy: tcpip://
00:00:14.403 com.jci.cpp.settings[522] Note (RegistryFactory.cpp:123 createRegistry) Startup time: 00:00:00.028827334
00:00:14.408 DIAG[522] Info (testdiag_statemachine.c:18638 TESTDIAG_Get_RegionInfo) The region received from registry setting is 2
00:00:14.409 com.jci.cpp.settings.socket[522] Info (Channel.cpp:95 close) Closing descriptor: 24
00:00:14.412 com.jci.cpp.settings.socket[268] Info (SocketProxy.cpp:2405 run) End of file reached
00:00:14.412 com.jci.cpp.settings.socket[268] Info (Channel.cpp:95 close) Closing descriptor: 18
00:00:14.413 BLM_SETTINGS[522] Info (settings_client_funs.cpp:759 BLM_SETTINGS_Client_ExtConnect) com.jci.settings.testdiag
00:00:14.417 com.jci.cpp.settings.socket[522] Info (SocketRegistry.cpp:971 run) The socket closed
00:00:14.418 com.jci.cpp.settings.socket[522] Note (SocketRegistry.cpp:1030 ~SocketRegistry) Destroyed: "tcpip://"
00:00:14.464 DIAG[522] Info (testdiag_statemachine.c:18846 TESTDIAG_getVehicleType) BLM_SETTINGS_Client_ExtConnect Successful
00:00:14.465 DIAG[522] Info (testdiag_statemachine.c:1340 testdiag_NotReadyState_EventHandler) TestDiag entering Not Ready state
00:00:14.466 DIAG[522] Info (testdiag_statemachine.c:1345 testdiag_NotReadyState_EventHandler) Entered TestDiag_NotReady_State
00:00:14.466 DIAG[522] Info (testdiag_main.c:245 ServiceInit) Successfully started TESTDIAG statemachine
00:00:14.516 DIAG[522] Info (testdiag_blmsystem_interface.c:292 TESTDIAG_System_ACC_Change_handler_cb) ACC Status is 0
00:00:14.518 DIAG[522] Info (testdiag_statemachine.c:1352 testdiag_NotReadyState_EventHandler) Received ACCON event
00:00:14.519 DIAG[522] Info (testdiag_statemachine.c:789 TESTDIAG_postMessageToStateMachine) Posting TESTDIAG_ACC_ON_EVT (17) event to state machine in state: NotReady
00:00:14.519 Std[] Info (: ) Surface JCI_OPERA_PRIMARY registered
00:00:14.574 BLM_SETTINGS[375] Warn (settings_service_funs.cpp:8631 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:00:14.574 BLM_SETTINGS[375] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/Keyless/BuzzerAnswerVolume <!> Value is not in range
00:00:14.606 DIAG[522] Info (testdiag_statemachine.c:1367 testdiag_NotReadyState_EventHandler) Received Initialized event
00:00:14.606 DIAG[522] Info (testdiag_vbs_interface.c:4479 TESTDIAG_getVehicleInfoData) Sen request to BUS_DIAG for getting vehicle info data after TESTDIAG loads
00:00:14.606 DIAG[522] Info (testdiag_statemachine.c:1382 testdiag_NotReadyState_EventHandler) TESTDIAG_NotReady_State exit
00:00:14.606 DIAG[522] Info (testdiag_statemachine.c:1453 testdiag_ReadyState_EventHandler) TestDiag entering Ready state
00:00:14.606 DIAG[522] Info (testdiag_statemachine.c:1549 testdiag_DefaultState_EventHandler) TestDiag entering Default state
00:00:14.606 DIAG[522] Info (testdiag_statemachine.c:1554 testdiag_DefaultState_EventHandler) Entered TestDiag_Default_State
00:00:14.606 DIAG[522] Info (testdiag_vbs_interface.c:4177 TESTDIAG_get4ARegionInfo) VBS_RADIO_Get4ARegionInfo returned Success
00:00:14.606 DIAG[522] Info (testdiag_lvds_interface.c:145 TESTDIAG_GetTFTSWVersion) Sent TFT Sw _version Request
00:00:14.606 DIAG[522] Info (testdiag_lvds_interface.c:185 TESTDIAG_GetTPSWVersion) Sent Touch Panel Sw version Request
00:00:14.611 LVDS[61] Info (lvds_dbus.c:920 LVDS_GetSoftwareDispVersion_svc) Get Disp Version Request
00:00:14.611 LVDS[61] Info (lvds_dbus.c:845 LVDS_GetSoftwareTPVersion_svc) Get TP Version Request
00:00:14.611 DIAG[522] Warn (testdiag_lvds_interface.c:264 lvds_GetTFTVersioncallback) CPP LVDS API Get TFT Sw Version returned NULL
00:00:14.611 DIAG[522] Warn (testdiag_lvds_interface.c:299 lvds_GetTPVersioncallback) CPP LVDS API Get TP Sw Version returned NULL
00:00:14.613 VBS_BUS_DIAG[340] Info (mod_diag_manage_svc.c:1724 VBS_DIAG_BLM_Ready_Vehicle_Info_Data_Request_svc) BLM Ready, Vehicle Info data requested
00:00:14.614 VBS_BUS_RADIO[340] Info (mod_radio_manage_svc.c:11497 VBS_RADIO_Get4ARegionInfo_svc) Get 4A Region Info returned with value = 0
00:00:14.616 DIAG[522] Info (testdiag_vbs_interface.c:1073 TESTDIAG_VehicleInfoData_Response_cb) TESTDIAG:Received Vehicle Info data:-- Destination: 2, CMU Type: 2 driveChart_Log_Distance:0 destination_1:0 destination_2:0 driveChart_Display:0 driveChart_DataTrans:0 myDoctor_Display:0 ,driverIdentification:0 stDis_IDM_Req:0 endDis_IDM_Req:0 stDis_Eco_Req:1 endDis_Eco_Req:1 custmzDisp_SW:2
00:00:14.616 DIAG[522] Info (testdiag_vbs_interface.c:4309 testdiag_vbs_radio_get4ARegionInfo_cb)  4A Region is 0
00:00:14.616 DIAG[522] Info (testdiag_statemachine.c:789 TESTDIAG_postMessageToStateMachine) Posting TESTDIAG_4AREGION_RESPONSE_EVT (77) event to state machine in state: Default
00:00:14.617 DIAG[522] Info (testdiag_statemachine.c:789 TESTDIAG_postMessageToStateMachine) Posting TESTDIAG_INITIALIZED_EVT (19) event to state machine in state: Default
00:00:14.626 DIAG[522] Info (testdiag_vbs_interface.c:1553 TESTDIAG_GGDSDataResponse) Sending GGDS Data Response to mod_diag , data ID is 15 and data is MAZ_CMU-150_55.00.753
00:00:14.626 DIAG[522] Info (testdiag_statemachine.c:17146 testdiag_sendBootUpData) Cmu Sw version is MAZ_CMU-150_55.00.753
00:00:14.626 DIAG[522] Info (testdiag_statemachine.c:14683 TESTDIAG_GetCMUSerialNumber) File Read Successfully - 284401710968195
00:00:14.626 DIAG[522] Info (testdiag_vbs_interface.c:1553 TESTDIAG_GGDSDataResponse) Sending GGDS Data Response to mod_diag , data ID is 20 and data is 284401710968195
00:00:14.626 DIAG[522] Info (testdiag_statemachine.c:17150 testdiag_sendBootUpData) Cmu Serial Number is 284401710968195
00:00:14.626 DIAG[522] Info (testdiag_statemachine.c:14757 TESTDIAG_GetCMUPartNumber) Read from file: /config-mfg/mfg-version.ini!
00:00:14.626 DIAG[522] Info (testdiag_statemachine.c:14806 TESTDIAG_GetCMUPartNumber) CMU part number is : BHP1-669C0-M
00:00:14.626 DIAG[522] Info (testdiag_vbs_interface.c:1553 TESTDIAG_GGDSDataResponse) Sending GGDS Data Response to mod_diag , data ID is 21 and data is BHP1-669C0-M
00:00:14.626 DIAG[522] Info (testdiag_statemachine.c:17154 testdiag_sendBootUpData) Cmu Part Number is BHP1-669C0-M
00:00:14.626 DIAG[522] Info (testdiag_vbs_interface.c:1329 testdiag_ReadDataRequest) Sent the Data request to mod diag with data ID = 24
00:00:14.626 AUDIO_MGR[522] Info (audio_am_if.c:43 myDbusSend) Request:: methodName: enableStatus, arguments: {}
00:00:14.626 DIAG[522] Info (testdiag_lvds_interface.c:380 testdiag_lvds_displayVersion_cb) TESTDIAG:Display version size is 11 and data is BHP1_A_0009
00:00:14.626 DIAG[522] Info (testdiag_statemachine.c:789 TESTDIAG_postMessageToStateMachine) Posting TESTDIAG_LVDS_TFTSWVERSION_RESPONSE_EVT (21) event to state machine in state: Default
00:00:14.626 LVDS[61] Info (lvds_dbus.c:509 LVDS_Signal_displayVersionResp) Display Version Resp ID = 3, Version = BHP1_A_0009
00:00:14.662 VBS_BUS_DIAG[340] Info (mod_diag_manage_svc.c:1300 VBS_DIAG_Data_Request_svc) Data ID received is 24
00:00:14.662 AUDIO_MGR[522] Error (audio_am_client_bind.c:302 AUDIO_AMSERVICE_Request) AUDIO_AMSERVICE_Request: The name com.xsembedded.service.AudioManagement was not provided by any .service files
00:00:14.662 AUDIO_MGR[522] Info (audio_am_if.c:46 myDbusSend) Response:: methodName: enableStatus, arguments: {}, result: The name com.xsembedded.service.AudioManagement was not provided by any .service files
00:00:14.662 DIAG[522] Info (testdiag_statemachine.c:789 TESTDIAG_postMessageToStateMachine) Posting TESTDIAG_AUDIO_OFF_EVT (7) event to state machine in state: Default
00:00:14.662 DIAG[522] Info (testdiag_bca_interface.c:209 TESTDIAG_BCA_ReadBTSettings_cb) BLM TESTDIAG_BCA_ReadBTSettings_cb called with  value 0
00:00:14.662 DIAG[522] Info (testdiag_statemachine.c:1263 testdiag_TopState_EventHandler) Received TESTDIAG_4AREGION_RESPONSE_EVT with 4A subregion as 0
00:00:14.662 DIAG[522] Info (testdiag_statemachine.c:1235 testdiag_TopState_EventHandler) Data Response received: BHP1_A_0009
00:00:14.662 DIAG[522] Info (testdiag_vbs_interface.c:1553 TESTDIAG_GGDSDataResponse) Sending GGDS Data Response to mod_diag , data ID is 4 and data is BHP1_A_0009
00:00:14.662 VBS_BUS_DIAG[340] Info (mod_diag_manage_svc.c:3173 VBS_SendSignal_SessionNotification) MOD_DIAG: VBS_SendSignal_SessionNotification
00:00:14.662 VBS_BUS_DIAG[340] Info (mod_diag_manage_svc.c:3175 VBS_SendSignal_SessionNotification) MOD_DIAG:Received session ID is: 2
00:00:14.662 VBS_BUS_DIAG[340] Info (mod_diag_manage_svc.c:3177 VBS_SendSignal_SessionNotification) MOD_DIAG:Message sent to service dbus with value 0
00:00:14.662 LVDS[61] Info (lvds_dbus.c:467 LVDS_Signal_TPVersionResp) TP Version Resp ID = 2, Version = 1.0008
00:00:14.662 DIAG[522] Info (testdiag_lvds_interface.c:441 testdiag_lvds_TPVersion_cb) TESTDIAG:TP version size is 6 and data is 1.0008
00:00:14.662 BLM_SETTINGS[375] Warn (settings_service_funs.cpp:8631 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:00:14.662 DIAG[522] Info (testdiag_statemachine.c:789 TESTDIAG_postMessageToStateMachine) Posting TESTDIAG_LVDS_TPSWVERSION_RESPONSE_EVT (22) event to state machine in state: Default
00:00:14.662 BLM_SETTINGS[375] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/SafetyConvenience/AutoDoorLockChimeVolume <!> Value is not in range
00:00:14.662 DIAG[522] Info (testdiag_statemachine.c:1228 testdiag_TopState_EventHandler) Data Response received: 1.0008
00:00:14.662 DIAG[522] Info (testdiag_vbs_interface.c:1553 TESTDIAG_GGDSDataResponse) Sending GGDS Data Response to mod_diag , data ID is 5 and data is 1.0008
00:00:14.662 DIAG[522] Info (testdiag_vbs_interface.c:3612 TESTDIAG_Session_Notification_cb) Received Session Notification
00:00:14.662 DIAG[522] Info (testdiag_statemachine.c:789 TESTDIAG_postMessageToStateMachine) Posting TESTDIAG_DEFAULT_SESSION_EVT (59) event to state machine in state: Default
00:00:14.662 DIAG[522] Info (testdiag_main.c:344 ServiceRun) Running TESTDIAG Service
00:00:14.662 DIAG[522] Info (testdiag_statemachine.c:789 TESTDIAG_postMessageToStateMachine) Posting TESTDIAG_SM_CLIENT_CONNECTION_SUCCESS_EVT (68) event to state machine in state: Default
00:00:14.662 DIAG[522] Info (testdiag_main.c:1435 testdiag_subscribe_services_sm_cb) SM_SubscribeForEvents cb called
00:00:14.662 DIAG[522] Info (testdiag_statemachine.c:789 TESTDIAG_postMessageToStateMachine) Posting TESTDIAG_SM_SUBSCRIPTION_SUCCESS_EVT (70) event to state machine in state: Default
00:00:14.765 BLM_SETTINGS[375] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
00:00:14.812 BLM_SETTINGS[375] Info (settings_vbs_interface.cpp:11697 UpdateSymLinkForDSPConfiguration) Set DSP symlink to /jciw/dsp/dsp_J36A-NoBose.xml, index in table 7
00:00:14.812 BLM_SETTINGS[375] Info (settings_symlink.hpp:228 _int_Set) symlink file /data/dsp.xml and its conatins "/jci/dsp/dsp_J36A-NoBose.xml" are OK
00:00:14.829 BLM_SETTINGS[375] Info (settings_vbs_interface.cpp:3030 BLM_SETTINGS_Vehicle_VIN_Notification_cb) Vehicle VIN notification received [JM1BM1T79G1319820]
00:00:14.829 BLM_SETTINGS[375] Info (settings_vbs_interface.cpp:3037 BLM_SETTINGS_Vehicle_VIN_Notification_cb) Vehicle VIN notification received [JM1BM1T79G1319820]
00:00:14.848 BLM_SETTINGS[375] Info (settings_symlink.hpp:228 _int_Set) symlink file /data/asound.conf and its conatins "/etc/asound.conf.LHD" are OK
00:00:14.853 BLM_SETTINGS[499] Info (settings_client_funs.cpp:2638 SETTINGS_Client_OnChange_U8_cb) SETTINGS_Client_OnChange_U8_cb
00:00:14.853 BLM_SETTINGS[499] Info (settings_client_funs.cpp:2668 SETTINGS_Client_OnChange_U8_cb) Client Name [com.jci.BLM_TIME_TO_BLM_SETTINGS]
00:00:14.853 BLM_SETTINGS[499] Info (settings_client_funs.cpp:3034 SETTINGS_Client_ExtOnChange_S16) client [com.jci.BLM_TIME_TO_BLM_SETTINGS] com/jci/blm/settings/Time/TimeDST
00:00:14.858 BLM_SETTINGS[375] Info (settings_service_funs.cpp:1269 SETTINGS_Connect_svc) connecting client:com.jci.settings.testdiag
00:00:14.858 BLM_SETTINGS[375] Info (settings_service_funs.cpp:6677 SETTINGS_OnChange_Settings_S16_svc) client:com.jci.BLM_TIME_TO_BLM_SETTINGS key path : /2/com/jci/blm/settings/Time/TimeDST
00:00:14.874 BLM_SETTINGS[522] Info (settings_client_funs.cpp:422 BLM_SEETINGS_Connect_cb) Client Name [com.jci.settings.testdiag]
00:00:14.874 DIAG[522] Info (testdiag_statemachine.c:18872 TESTDIAG_Settings_Connect_Request) TESTDIAG_Settings_Connect_Request Successful
00:00:14.874 BLM_SETTINGS[522] Info (settings_client_funs.cpp:1559 SETTINGS_Client_ExtGet_S16) client [com.jci.settings.testdiag] com/jci/blm/settings/Vehicle/VehicleModelType
00:00:14.924 xse>AP>[] Debug (: ) : Received TAU status:1
00:00:14.933 xse>AP>[] Info (: ) : Could not get the initial enable status from Audio Manager: org.freedesktop.DBus.Error.ServiceUnknown : The name com.xsembedded.service.AudioManagement was not provided by any .service files
00:00:14.987 BLM_SETTINGS[375] Info (settings_vbs_interface.cpp:14763 BLM_SETTINGS_PrioritizeAndSetDestination) Valid destination 2 found in table.
00:00:14.987 BLM_SETTINGS[375] Info (settings_vbs_interface.cpp:14773 BLM_SETTINGS_PrioritizeAndSetDestination) No change of destination is needed, it will remain 2
00:00:14.994 VBS_BUS_SETTINGS[340] Info (mod_settings_manage_svc.c:10040 VBS_SETTINGS_GetSSUCustomizeStatus2_svc) Sending Customized status for Auto re-lock timer setting with Value = 3, Type = 1
00:00:14.994 VBS_BUS_SETTINGS[340] Info (mod_settings_manage_svc.c:10040 VBS_SETTINGS_GetSSUCustomizeStatus2_svc) Sending Customized status for Auto re-lock timer setting with Value = 3, Type = 1
00:00:14.994 VBS_BUS_SETTINGS[340] Info (mod_settings_manage_svc.c:10052 VBS_SETTINGS_GetSSUCustomizeStatus2_svc) Sending Customized status for Buzzer Answer Back Volume with Value = 0, Type = 3
00:00:14.994 VBS_BUS_SETTINGS[340] Info (mod_settings_manage_svc.c:10052 VBS_SETTINGS_GetSSUCustomizeStatus2_svc) Sending Customized status for Buzzer Answer Back Volume with Value = 0, Type = 3
00:00:14.994 VBS_BUS_SETTINGS[340] Info (mod_settings_manage_svc.c:10046 VBS_SETTINGS_GetSSUCustomizeStatus2_svc) Sending Customized status for Un-Lock Mode with Value = 1, Type = 2
00:00:14.994 VBS_BUS_SETTINGS[340] Info (mod_settings_manage_svc.c:10034 VBS_SETTINGS_GetSSUCustomizeStatus2_svc) Sending Customized status for Walk away lock function On/Off with Value = 0, Type = 0
00:00:14.994 VBS_BUS_SETTINGS[340] Info (mod_settings_manage_svc.c:9925 VBS_SETTINGS_GetRBCMCustomizeStatus2_svc) Sending Customized status for Auo Door Lock Mode MT with Value = 0, Typei = 8
00:00:14.994 VBS_BUS_SETTINGS[340] Info (mod_settings_manage_svc.c:9877 VBS_SETTINGS_GetRBCMCustomizeStatus2_svc) Sending Customized status for Auto Door Lock Mode with Value = 1, Type = 0
00:00:14.994 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:15.016 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:15.016 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:15.016 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:15.100 xse>AP>[] Critical (: ) :  ----------------------------------------------
00:00:15.103 xse>AP>[] Critical (: ) : Verification Results:
00:00:15.104 xse>AP>[] Critical (: ) : ERRORS:                                     0
00:00:15.106 xse>AP>[] Critical (: ) : Definitions Assumed User Defined Variables: 0
00:00:15.108 xse>AP>[] Critical (: ) : ----------------------------------------------
00:00:15.111 xse>AP>[] Critical (: ) : INFO: Control logic syntax validation complete (0/0)
00:00:15.123 VBS_BUS_AM[340] Info (mod_am_manage_svc.c:1673 VBS_AM_GetAudioProfileStatus_svc) Received Request : GetAudioProfileStatus [profileType = 5]
00:00:15.145 VBS_BUS_SETTINGS[340] Info (mod_settings_manage_svc.c:9895 VBS_SETTINGS_GetRBCMCustomizeStatus2_svc) Sending Customized status for Headlight Off Timer with Value = 2, Type = 3
00:00:15.150 VBS_BUS_SETTINGS[340] Info (mod_settings_manage_svc.c:9907 VBS_SETTINGS_GetRBCMCustomizeStatus2_svc) Sending Customized status for Auto Wiper On/Off with Value = 0, Type = 5
00:00:15.150 VBS_BUS_SETTINGS[340] Info (mod_settings_manage_svc.c:9913 VBS_SETTINGS_GetRBCMCustomizeStatus2_svc) Sending Customized status for Auto Light Sensitivity 1 with Value = 0, Type = 6
00:00:15.155 VBS_BUS_SETTINGS[340] Info (mod_settings_manage_svc.c:9883 VBS_SETTINGS_GetRBCMCustomizeStatus2_svc) Sending Customized status for Int Light Timout - Door Close with Value = 1, Type = 1
00:00:15.155 VBS_BUS_SETTINGS[340] Info (mod_settings_manage_svc.c:9889 VBS_SETTINGS_GetRBCMCustomizeStatus2_svc) Sending Customized status for Int Light Timout - Door Open with Value = 3, Type = 2
00:00:15.155 VBS_BUS_SETTINGS[340] Info (mod_settings_manage_svc.c:9919 VBS_SETTINGS_GetRBCMCustomizeStatus2_svc) Sending Customized status for DRL On/Off with Value = 0, Type = 7
00:00:15.155 VBS_BUS_SETTINGS[340] Info (mod_settings_manage_svc.c:10280 VBS_SETTINGS_GetHECCustomizeStatus2_svc) Sending Customized status for BSM Buzzer Volume with Value = 3, Type = 8
00:00:15.167 VBS_BUS_AM[340] Info (mod_am_manage_svc.c:1270 VBS_AM_GetVolumeStatus_svc) Received Request : GetVolumeStatus [volSrcGrp = AUX]
00:00:15.179 VBS_BUS_AM[340] Info (mod_am_manage_svc.c:1673 VBS_AM_GetAudioProfileStatus_svc) Received Request : GetAudioProfileStatus [profileType = 1]
00:00:15.192 VBS_BUS_AM[340] Info (mod_am_manage_svc.c:1673 VBS_AM_GetAudioProfileStatus_svc) Received Request : GetAudioProfileStatus [profileType = 0]
00:00:15.199 VBS_BUS_AM[340] Info (mod_am_manage_svc.c:1673 VBS_AM_GetAudioProfileStatus_svc) Received Request : GetAudioProfileStatus [profileType = 6]
00:00:15.217 VBS_BUS_AM[340] Info (mod_am_manage_svc.c:1270 VBS_AM_GetVolumeStatusfi_svc) Received Request : GetVolumeStatus [volSrcGrp = NAVI]
00:00:15.221 VBS_BUS_AM[340] Info (mod_am_manage_svc.c:1270 VBS_AM_GetVolumeStatus_svc) Received Request : GetVolumeStatus [volSrcGrp = TA]
00:00:15.228 VBS_BUS_AM[340] Info (mod_am_manage_svc.c:1270 VBS_AM_GetVolumeStatus_svc) Received Request : GetVolumeStatus [volSrcGrp = VOLUME]
00:00:15.235 VBS_BUS_AM[340] Info (mod_am_manage_svc.c:1673 VBS_AM_GetAudioProfileStatus_svc) Received Request : GetAudioProfileStatus [profileType = 3]
00:00:15.248 VBS_BUS_AM[340] Info (mod_am_manage_svc.c:1270 VBS_AM_GetVolumeStatus_svc) Received Request : GetVolumeStatus [volSrcGrp = DVD]
00:00:15.265 VBS_BUS_AM[340] Info (mod_am_manage_svc.c:1270 VBS_AM_GetVolumeStatus_svc) Received Request : GetVolumeStatus [volSrcGrp = BTHF]
00:00:15.270 VBS_BUS_AM[340] Info (mod_am_manage_svc.c:1673 VBS_AM_GetAudioProfileStatus_svc) Received Request : GetAudioProfileStatus [profileType = 4]
00:00:15.282 VBS_BUS_AM[340] Info (mod_am_manage_svc.c:1270 VBS_AM_GetVolumeStatus_svc) Received Request : GetVolumeStatus [volSrcGrp = TV]
00:00:15.287 VBS_BUS_AM[340] Info (mod_am_manage_svc.c:1673 VBS_AM_GetAudioProfileStatus_svc) Received Request : GetAudioProfileStatus [profileType = 2]
00:00:15.303 VBS_BUS_SETTINGS[340] Info (mod_settings_manage_svc.c:10274 VBS_SETTINGS_GetHECCustomizeStatus2_svc) Sending Customized status for LDW Volume with Value = 3, Type = 7
00:00:15.303 VBS_BUS_SETTINGS[340] Info (mod_settings_manage_svc.c:10274 VBS_SETTINGS_GetHECCustomizeStatus2_svc) Sending Customized status for LDW Volume with Value = 3, Type = 7
00:00:15.303 VBS_BUS_SETTINGS[340] Info (mod_settings_manage_svc.c:10250 VBS_SETTINGS_GetHECCustomizeStatus2_svc) Sending Customized status for LDW Buzzer Setting with Value = 1, Type = 3
00:00:15.303 VBS_BUS_SETTINGS[340] Info (mod_settings_manage_svc.c:10244 VBS_SETTINGS_GetHECCustomizeStatus2_svc) Sending Customized status for Headlight On Warning with Value = 1, Type = 2
00:00:15.303 VBS_BUS_SETTINGS[340] Info (mod_settings_manage_svc.c:10268 VBS_SETTINGS_GetHECCustomizeStatus2_svc) Sending Customized status for RVM Buzzer Volume with Value = 3, Type = 6
00:00:15.312 VBS_BUS_AM[340] Info (mod_am_manage_svc.c:1270 VBS_AM_GetVolumeStatus_svc) Received Request : GetVolumeStatus [volSrcGrp = RINGTONE]
00:00:15.340 xse>AP>[] Error (: ) : Ready...
00:00:15.380 VBS_BUS_SETTINGS[340] Info (mod_settings_manage_svc.c:10262 VBS_SETTINGS_GetHECCustomizeStatus2_svc) Sending Customized status for BSM Warning Area with Value = 3, Type = 5
00:00:15.380 VBS_BUS_SETTINGS[340] Info (mod_settings_manage_svc.c:10238 VBS_SETTINGS_GetHECCustomizeStatus2_svc) Sending Customized status for Seatbelt Reminder Volume with Value = 2, Type = 1
00:00:15.380 VBS_BUS_SETTINGS[340] Info (mod_settings_manage_svc.c:9901 VBS_SETTINGS_GetRBCMCustomizeStatus2_svc) Sending Customized status forSmart Turn On/Off with Value = 2, Type = 4
00:00:15.380 VBS_BUS_SETTINGS[340] Info (mod_settings_manage_svc.c:10256 VBS_SETTINGS_GetHECCustomizeStatus2_svc) Sending Customized status for BSM Warning Indicator Intensity with Value = 2, Type = 4
00:00:15.380 VBS_BUS_SETTINGS[340] Info (mod_settings_manage_svc.c:10262 VBS_SETTINGS_GetHECCustomizeStatus2_svc) Sending Customized status for BSM Warning Area with Value = 3, Type = 5
00:00:15.383 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5219 VBS_CD_Start_Timer) Timer gs_tmrRetryCnt = 7
00:00:15.383 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5437 VBS_CD_Send_DVD_Config_status_Req) Posting DVD Config Status Request to VIP
00:00:15.383 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5370 VBS_CD_Send_CD_ReadyReq) Posting CDVDTV Ready Status Request to VIP
00:00:15.383 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5841 VBS_CD_Send_DTV_RoutineTestReq) Posting DTV RoutineTest Status Request to VIP
00:00:15.383 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5773 VBS_CD_Send_DTV_StatusReq) Posting DTV Status Request to VIP
00:00:15.391 VBS_BUS_SETTINGS[340] Info (mod_settings_manage_svc.c:4272 VBS_SETTINGS_GetGCCConfigMgmtID1_svc) Get GCC Config Management for Steering wheel location returned Value = 1, Type = 4
00:00:15.391 VBS_BUS_SETTINGS[340] Info (mod_settings_manage_svc.c:4296 VBS_SETTINGS_GetGCCConfigMgmtID1_svc) Get GCC Config Management for Mecu Voltage Type returned Value = 54, Type = 8
00:00:15.395 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5293 VBS_CD_Start_Timer) Timer Started : [CDTimerRetryCnt in decrement order = 7]
00:00:15.438 BLM_SETTINGS[375] Info (settings_symlink.hpp:228 _int_Set) symlink file /data/asound.conf and its conatins "/etc/asound.conf.LHD" are OK
00:00:15.445 VBS_BUS_SETTINGS[340] Info (mod_settings_manage_svc.c:4026 VBS_SETTINGS_GetCMUControlReq_svc) Get CMU Control for Display Character returned Value = 4, Type = 0
00:00:15.445 VBS_BUS_SETTINGS[340] Info (mod_settings_manage_svc.c:4044 VBS_SETTINGS_GetCMUControlReq_svc) Get CMU Control for Temperature Unit returned Value = 2, Type = 3
00:00:15.445 VBS_BUS_SETTINGS[340] Info (mod_settings_manage_svc.c:4032 VBS_SETTINGS_GetCMUControlReq_svc) Get CMU Control for  Distance Unit returned Value = 2, Type = 1
00:00:15.445 VBS_BUS_SETTINGS[340] Info (mod_settings_manage_svc.c:3101 VBS_SETTINGS_GetHECIlluminationStatus_svc) Get HEC Illumination Status for Low Speed CMB On Off returned Value = 1, Type = 12
00:00:15.445 VBS_BUS_SETTINGS[340] Info (mod_settings_manage_svc.c:524 VBS_SETTINGS_GetBoseDetectStatus_svc) The return value of the Bose Detect Status = 0
00:00:15.445 VBS_BUS_SETTINGS[340] Info (mod_settings_manage_svc.c:4158 VBS_SETTINGS_GetCMUControlReq_svc) Get CMU Control for HEC CTRL DESTINATION_CANADA returned Value = 0, Type = 23
00:00:15.445 VBS_BUS_SETTINGS[340] Info (mod_settings_manage_svc.c:4248 VBS_SETTINGS_GetGCCConfigMgmtID1_svc) Get GCC Config Management for destination returned Value = 2, Type = 0
00:00:15.445 VBS_BUS_SETTINGS[340] Info (mod_settings_manage_svc.c:4302 VBS_SETTINGS_GetGCCConfigMgmtID1_svc) Get GCC Config Management for destination_1 returned Value = 0, Type = 9
00:00:15.445 VBS_BUS_SETTINGS[340] Info (mod_settings_manage_svc.c:4308 VBS_SETTINGS_GetGCCConfigMgmtID1_svc) Get GCC Config Management for destination_2 returned Value = 0, Type = 10
00:00:15.445 VBS_BUS_SETTINGS[340] Info (mod_settings_manage_svc.c:4158 VBS_SETTINGS_GetCMUControlReq_svc) Get CMU Control for HEC CTRL DESTINATION_CANADA returned Value = 0, Type = 23
00:00:15.461 VBS_BUS_SETTINGS[340] Info (mod_settings_manage_svc.c:10630 VBS_SETTINGS_GetVehicleType_svc) Returning Vehicle type with value = 54
00:00:15.461 VBS_BUS_SETTINGS[340] Info (mod_settings_manage_svc.c:4314 VBS_SETTINGS_GetGCCConfigMgmtID1_svc) Get GCC Config Management for vehiclePic returned Value = 0, Type = 12
00:00:15.461 VBS_BUS_SETTINGS[340] Info (mod_settings_manage_svc.c:4326 VBS_SETTINGS_GetGCCConfigMgmtID1_svc) Get GCC Config Management for Brand returned Value = 7, Type = 14
00:00:15.461 VBS_BUS_SETTINGS[340] Info (mod_settings_manage_svc.c:10310 VBS_SETTINGS_GetHECCustomizeStatus2_svc) Sending Customized status for Idm_Max with Value = 0, Type = 13
00:00:15.461 VBS_BUS_SETTINGS[340] Info (mod_settings_manage_svc.c:9938 VBS_SETTINGS_GetRBCMCustomizeStatus2_svc) Sending Customized status for CHL_T with Value = 0, Type = 10
00:00:15.461 VBS_BUS_SETTINGS[340] Info (mod_settings_manage_svc.c:9944 VBS_SETTINGS_GetRBCMCustomizeStatus2_svc) Sending Customized status for LHL_ONOFF with Value = 0, Type = 11
00:00:15.461 VBS_BUS_SETTINGS[340] Info (mod_settings_manage_svc.c:9950 VBS_SETTINGS_GetRBCMCustomizeStatus2_svc) Sending Customized status for Auto Door Lock Mode with Value = 0, Type = 12
00:00:15.461 VBS_BUS_SETTINGS[34.0] Info (mod_settings_manage_svc.c:9699 VBS_SETTINGS_GetPSMCustomizeStatus2_svc) Sending Customized status for Drive Alt ON/OFF Status with Value = 0, Type = 2
00:00:15.476 VBS_BUS_SETTINGS[340] Info (mod_settings_manage_svc.c:4332 VBS_SETTINGS_GetGCCConfigMgmtID1_svc) Get GCC Config Management for DSP_MIC returned Value = 0, Type = 15
00:00:15.564 BLM_SETTINGS[375] Info (settings_vbs_interface.cpp:11697 UpdateSymLinkForDSPConfiguration) Set DSP symlink to /jci/dsp/dsp_J36A-NoBose.xml, index in table 7
00:00:15.564 BLM_SETTINGS[375] Info (settings_symlink.hpp:228 _int_Set) symlink file /data/dsp.xml and its conatins "/jci/dsp/dsp_J36A-NoBose.xml" are OK
00:00:15.671 BLM_SETTINGS[375] Info (settings_vbs_interface.cpp:11697 UpdateSymLinkForDSPConfiguration) Set DSP symlink to /jci/dsp/dsp_J36A-NoBose.xml, index in table 7
00:00:15.671 BLM_SETTINGS[375] Info (settings_symlink.hpp:228 _int_Set) symlink file /data/dsp.xml and its conatins "/jci/dsp/dsp_J36A-NoBose.xml" are OK
00:00:15.771 BLM_SETTINGS[375] Info (settings_vbs_interface.cpp:11697 UpdateSymLinkForDSPConfiguration) Set DSP symlink to /jci/dsp/dsp_J36A-NoBose.xml, index in table 7
00:00:15.771 BLM_SETTINGS[375] Info (settings_symlink.hpp:228 _int_Set) symlink file /data/dsp.xml and its conatins "/jci/dsp/dsp_J36A-NoBose.xml" are OK
00:00:15.878 BLM_SETTINGS[375] Info (settings_vbs_interface.cpp:11697 UpdateSymLinkForDSPConfiguration) Set DSP symlink to /jci/dsp/dsp_J36A-NoBose.xml, index in table 7
00:00:15.878 BLM_SETTINGS[375] Info (settings_symlink.hpp:228 _int_Set) symlink file /data/dsp.xml and its conatins "/jci/dsp/dsp_J36A-NoBose.xml" are OK
00:00:15.898 BLM_SETTINGS[375] Info (settings_service_funs.cpp:5921 SETTINGS_Get_Settings_S16_svc) key path : /2/com/jci/blm/settings/Vehicle/VehicleModelType
00:00:15.898 BLM_SETTINGS[528] Info (settings_client_funs.cpp:1458 SETTINGS_Client_Get_S16_cb) SETTINGS_Client_Get_S16_cb
00:00:15.898 BLM_SETTINGS[528] Info (settings_client_funs.cpp:1487 SETTINGS_Client_Get_S16_cb) Client Name [com.jci.settings_client_usbdtc], returned value 2 for setting ID 74
00:00:15.905 USBDTC[528] Info (usbdtcvbuspwrctrl.cpp:698 GetVINData_cb) VIN data 'JM1BM1T79G1319820' length=17
00:00:15.908 USBDTC[528] Info (usbdtcudev.cpp:184 CFaultUDEVMonitor) Monitored device is present in the system!'/sys/devices/platform/fsl-ehci.1/usb2/2-1' devnum: 2
00:00:15.922 USBDTC[528] Info (usbdtcgpio.cpp:172 UpdateMonitorStatus) 'ACC Status':Act/Pin/Assert <0><1><0>
00:00:15.936 USBDTC[528] Info (usbdtcgpio.cpp:172 UpdateMonitorStatus) 'HOST Port OC':Act/Pin/Assert <1><0><0>
00:00:15.937 USBDTC[528] Info (usbdtcapp.cpp:364 StatusChange) Status changed DTC ID = 13, isAsserted = 0
00:00:15.940 VBS_BUS_DIAG[340] Info (mod_diag_manage_svc.c:966 VBS_DIAG_ClearFaults_Request_svc) Number of Faults passed to ClearFaultsRequest  : 1
00:00:15.940 VBS_BUS_DIAG[340] Info (mod_diag_manage_svc.c:979 VBS_DIAG_ClearFaults_Request_svc) Fault 1 is 13  - USB_PRT_HUB2_CURNT_RANGE_ISSUE
00:00:15.942 USBDTC[528] Info (usbdtcreporter.cpp:226 ReporterRoutine) VBS ClearFault successful! FaultID = 13
00:00:15.944 VBS_BUS_DIAG[340] Info (mod_diag_manage_svc.c:2172 VBS_SendSignal_ClearDTCResp) Current page : 0, Total page : 0  and Response Length is 4
00:00:15.944 VBS_BUS_DIAG[340] Info (mod_diag_manage_svc.c:2282 VBS_SendSignal_ClearDTCResp) Fault ID is 13 - USB_PRT_HUB2_CURNT_RANGE_ISSUE and fault status is 1
00:00:15.959 xse>AP>[] Debug (: ) : Received TAU status:1
00:00:15.974 USBDTC[528] Info (usbdtcudev.cpp:405 UpdateMonitorStatus) Monitored device is present in the system! /sys/devices/platform/fsl-ehci.1/usb2/2-1 devnum: 2
00:00:15.977 BLM_SETTINGS[375] Warn (settings_service_funs.cpp:8631 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:00:15.977 BLM_SETTINGS[375] Warn (settings_vbs_interface.cpp:10112 BLM_SETsTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/SafetyConvenience/AutoDoorLockChimeVolume <!> Value is not in range
00:00:16.002 BLM_SETTINGS[375] Warn (settings_service_funs.cpp:8631 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:00:16.002 BLM_SETTINGS[375] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/Keyless/BuzzerAnswerVolume <!> Value is not in range
00:00:16.020 BLM_SETTINGS[375] Warn (settings_service_funs.cpp:8589 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:00:16.020 BLM_SETTINGS[375] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/Keyless/WalkawayLock <!> Value is not in range
00:00:16.044 BLM_SETTINGS[375] Warn (settings_service_funs.cpp:8631 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:00:16.044 BLM_SETTINGS[375] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/SafetyConvenience/AutoDoorLockMT <!> Value is not in range
00:00:16.065 BLM_SETTINGS[375] Warn (settings_service_funs.cpp:8589 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:00:16.065 BLM_SETTINGS[375] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/SafetyConvenience/AutoWiper <!> Value is not in range
00:00:16.076 xse>AM>[] Critical (: ) :  ----------------------------------------------
00:00:16.078 xse>AM>[] Critical (: ) : Verification Results:
00:00:16.080 xse>AM>[] Critical (: ) : ERRORS:                                     0
00:00:16.081 xse>AM>[] Critical (: ) : Definitions Assumed User Defined Variables: 0
00:00:16.082 xse>AM>[] Critical (: ) : ----------------------------------------------
00:00:16.083 xse>AM>[] Critical (: ) : INFO: Control logic syntax validation complete (0/0)
00:00:16.084 xse>AM>[] Error (: ) : Ready...
00:00:16.104 SYSTEM[261] Info (state_machine.cpp:1971 system_smm_TopStateHandler) Audio manager service started!
00:00:16.104 SYSTEM[261] Info (state_machine.cpp:1446 system_smm_TryInitializeAudio) All preconditions are met, trying to initialize audio!
00:00:16.104 SYSTEM[261] Info (state_machine.cpp:704 system_smm_LogVbsRadioEventInfo) Tau is connected!
00:00:16.104 SYSTEM[261] Info (state_machine.cpp:2037 system_smm_TopStateHandler) Setting audio on!
00:00:16.104 AUDIO_MGR[261] Info (audio_am_if.c:43 myDbusSend) Request:: methodName: enableStatus, arguments: {}
00:00:16.104 xse>AP>[] Debug (: ) : Received TAU status:1
00:00:16.107 xse>AM>[] Debug (: ) : Received TAU status:1
00:00:16.112 BLM_SETTINGS[375] Warn (settings_service_funs.cpp:8631 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:00:16.112 BLM_SETTINGS[375] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/Headlights/HBC_AutoSensitivity <!> Value is not in range
00:00:16.145 AUDIO_MGR[261] Info (audio_am_if.c:46 myDbusSend) Response:: methodName: enableStatus, arguments: {}, result: {"enable":false}
00:00:16.145 AUDIO_MGR[261] Info (audio_am_if.c:43 myDbusSend) Request:: methodName: enable, arguments: {"enable":true}
00:00:16.153 xse>AM>[] Debug (: ) : Received TAU status:1
00:00:16.164 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:16.164 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|h
00:00:16.181 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:16.181 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:16.197 BLM_SETTINGS[375] Warn (settings_service_funs.cpp:8589 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:00:16.197 BLM_SETTINGS[375] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/Headlights/DRL <!> Value is not in range
00:00:16.231 AUDIO_MGR[261] Info (audio_am_if.c:46 myDbusSend) Response:: methodName: enable, arguments: {"enable":true}, result: {}
00:00:16.242 VBS_BUS_AM[340] Info (mod_am_manage_svc.c:1732 VBS_AM_GetMuteStatus_svc) Received Request : GetMuteStatus [muteType = 2]
00:00:16.261 xse>AM>[] Debug (: ) : syncVbsMuteState: "false"
00:00:16.304 xse>AP>[] Debug (: ) : audioManagerEnableEventHandler:AudioEnabled: true and onSource: NONE
00:00:16.317 SYSTEM[261] Info (state_machine.cpp:671 system_smm_LogAudioEventInfo) Audio is on!
00:00:16.319 DIAG[522] Info (testdiag_am_interface.c:240 testdiag_cbSignalNotify) Audio Turned ON
00:00:16.319 DIAG[522] Info (testdiag_statemachine.c:789 TESTDIAG_postMessageToStateMachine) Posting TESTDIAG_AUDIO_ON_EVT (6) event to state machine in state: Default
00:00:16.319 DIAG[522] Info (testdiag_statemachine.c:952 testdiag_TopState_EventHandler) Received Audio ON event
00:00:16.319 SYSTEM[261] Info (state_machine.cpp:934 system_smm_ExpectBootupFinished) Still waiting for bootup to finish...
00:00:16.395 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5219 VBS_CD_Start_Timer) Timer gs_tmrRetryCnt = 6
00:00:16.395 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5437 VBS_CD_Send_DVD_Config_status_Req) Posting DVD Config Status Request to VIP
00:00:16.395 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5370 VBS_CD_Send_CD_ReadyReq) Posting CDVDTV Ready Status Request to VIP
00:00:16.395 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5841 VBS_CD_Send_DTV_RoutineTestReq) Posting DTV RoutineTest Status Request to VIP
00:00:16.395 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5773 VBS_CD_Send_DTV_StatusReq) Posting DTV Status Request to VIP
00:00:16.412 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5293 VBS_CD_Start_Timer) Timer Started : [CDTimerRetryCnt in decrement order = 6]
00:00:16.579 BLM_SETTINGS[375] Info (settings_vbs_interface.cpp:14763 BLM_SETTINGS_PrioritizeAndSetDestination) Valid destination 2 found in table.
00:00:16.579 BLM_SETTINGS[375] Info (settings_vbs_interface.cpp:14773 BLM_SETTINGS_PrioritizeAndSetDestination) No change of destination is needed, it will remain 2
00:00:16.611 VBS_BUS_CAN[340] Info (mod_can_public.c:5908 VBS_BUS_CAN_IgnitionStatus_5Sec_Status) Value of VWM_IGNITION_STATUS_5_PID --- 5
00:00:16.698 BLM_SETTINGS[375] Info (settings_vbs_interface.cpp:14763 BLM_SETTINGS_PrioritizeAndSetDestination) Valid destination 2 found in table.
00:00:16.698 BLM_SETTINGS[375] Info (settings_vbs_interface.cpp:14773 BLM_SETTINGS_PrioritizeAndSetDestination) No change of destination is needed, it will remain 2
00:00:16.803 BLM_SETTINGS[375] Info (settings_vbs_interface.cpp:14763 BLM_SETTINGS_PrioritizeAndSetDestination) Valid destination 2 found in table.
00:00:16.803 BLM_SETTINGS[375] Info (settings_vbs_interface.cpp:14773 BLM_SETTINGS_PrioritizeAndSetDestination) No change of destination is needed, it will remain 2
00:00:16.845 BLM_SETTINGS[375] Info (settings_vbs_interface.cpp:11697 UpdateSymLinkForDSPConfiguration) Set DSP symlink to /jci/dsp/dsp_J36A-NoBose.xml, index in table 7
00:00:16.845 BLM_SETTINGS[375] Info (settings_symlink.hpp:228 _int_Set) symlink file /data/dsp.xml and its conatins "/jci/dsp/dsp_J36A-NoBose.xml" are OK
00:00:16.899 BLM_SETTINGS[375] Info (settings_vbs_interface.cpp:11697 UpdateSymLinkForDSPConfiguration) Set DSP symlink to /jci/dsp/dsp_J36A-NoBose.xml, index in table 7
00:00:16.899 BLM_SETTINGS[375] Info (settings_symlink.hpp:228 _int_Set) symlink file /data/dsp.xml and its conatins "/jci/dsp/dsp_J36A-NoBose.xml" are OK
00:00:16.956 AUXIN[934] Info (auxin_main.c:84 GetServiceInterfaces) FUNCTION:GetServiceInterfaces
00:00:16.964 AUXIN[934] Info (auxin_main.c:96 ServiceInit) Initalizing AUXIN Service
00:00:17.003 AUXIN[934] Info (auxin_am_interface.c:478 AUXIN_AM_InitAudioManager) AUX_InitAudioManager.
00:00:17.015 AUXIN[934] Info (auxin_am_interface.c:415 auxin_initAMClient) Initializing AM clinet
00:00:17.016 AUXIN[934] Info (auxin_am_interface.c:550 AUXIN_AM_Register_Signal) AUXIN_AM_CLIENT: Successfully initialized audio management library.
00:00:17.040 AUDIO_MGR[934] Info (audio_am_if.c:46 myDbusSend) Response:: methodName: openSession, arguments: {"busName":"com.jci.auxin","objectPath":"/com/jci/auxin"}, result: {"sessionId":1}
00:00:17.041 AUXIN[934] Info (auxin_am_interface.c:557 AUXIN_AM_Register_Signal) AUXIN_AM_CLIENT:  Open session successful with AUXIN Session id  =1
00:00:17.055 AUDIO_MGR[934] Info (audio_am_if.c:46 myDbusSend) Response:: methodName: registerAudioStream, arguments: {"sessionId":1,"streamName":"AUX","streamModeName":"AUX","streamType":"Media","focusType":"permanent"}, result: {}
00:00:17.056 AUXIN[934] Info (auxin_am_interface.c:569 AUXIN_AM_Register_Signal) Register AUX stream success
00:00:17.056 AUXIN[934] Info (auxin_steng.c:144 AUXIN_InitializeStateMachine)  Initialising state machine
00:00:17.057 AUXIN[934] Info (auxin_steng.c:369 auxin_TopState_EventHandler) AUX_TOP_STATE: Received Event 2
00:00:17.058 AUXIN[934] Info (auxin_steng.c:374 auxin_TopState_EventHandler) Aux entering TOP state
00:00:17.059 AUXIN[934] Info (auxin_steng.c:369 auxin_TopState_EventHandler) AUX_TOP_STATE: Received Event 1
00:00:17.059 AUXIN[934] Info (auxin_steng.c:451 auxin_Disconnectedstate_EventHandler) AUX_DISCONNECTED_STATE: Received Event 2
00:00:17.064 AUXIN[934] Info (auxin_steng.c:457 auxin_Disconnectedstate_EventHandler) Aux entering DISCONNECTED state
00:00:17.066 AUXIN[934] Info (auxin_steng.c:451 auxin_Disconnectedstate_EventHandler) AUX_DISCONNECTED_STATE: Received Event 1
00:00:17.067 AUXIN[934] Info (auxin_hmi_interface.c:320 AUXIN_Send_AuxinStatus) Posting AUXIN status to HMI D_BUs Status from VBS : 0
00:00:17.069 AUXIN[934] Info (auxin_vbs_interface.c:226 AUXIN_VBS_DeviceStatus_Request) <======= Sending AUXIN Device Status Request to VBS =====>
00:00:17.075 VBS_BUS_RADIO[340] Info (mod_radio_manage_svc.c:3418 VBS_RADIO_AUX_GetConnStatus_svc) Get AUX Connection Status returned with value = 0
00:00:17.081 AUXIN[934] Info (auxin_main.c:130 ServiceRun) Running AUXIN Service
00:00:17.087 AUXIN[934] Info (auxin_steng.c:451 auxin_Disconnectedstate_EventHandler) AUX_DISCONNECTED_STATE: Received Event 6
00:00:17.089 AUXIN[934] Info (auxin_hmi_interface.c:320 AUXIN_Send_AuxinStatus) Posting AUXIN status to HMI D_BUs Status from VBS : 0
00:00:17.094 AUXIN[934] Info (auxin_steng.c:304 AUXIN_postMessageToStateMachine) Mutex Unlocked Successfully
00:00:17.095 AUXIN[934] Info (auxin_vbs_interface.c:310 VBS_AUXIN_Status_Response_cb) Successfully posted AUXIN connection status to state machine ::0
00:00:17.095 AUXIN[934] Info (auxin_vbs_interface.c:178 auxin_vbs_callback) Auxin request callback is invoked with value 100
00:00:17.111 BLM_SETTINGS[375] Info (settings_vbs_interface.cpp:11697 UpdateSymLinkForDSPConfiguration) Set DSP symlink to /jc
/tmp/root # i/dsp/dsp_J36A-NoBose.xml, index in table 7
00:00:17.111 BLM_SETTINGS[375] Info (settings_symlink.hpp:228 _int_Set) symlink file /data/dsp.xml and its conatins "/jci/dsp/dsp_J36A-NoBose.xml" are OK
00:00:17.136 BLM_SETTINGS[375] Warn (settings_service_funs.cpp:8631 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:00:17.136 BLM_SETTINGS[375] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/Headlights/AFS <!> Value is not in range
00:00:17.167 BLM_SETTINGS[375] Warn (settings_service_funs.cpp:8631 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:00:17.167 BLM_SETTINGS[375] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/Headlights/HBC_ComingHomeLightsTimer <!> Value is not in range
00:00:17.199 BLM_SETTINGS[375] Warn (settings_service_funs.cpp:8631 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:00:17.199 BLM_SETTINGS[375] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/Headlights/HBC_LeavingHomeLights <!> Value is not in range
00:00:17.203 BLM_CD[936] Info (cd_init.cpp:133 ServiceInit) Entered ServiceInit() for BLM CD Application from thread id = <716915712>, version BLM_CD-MAZ140.10.09.000
00:00:17.204 BLM_CD[936] Info (cd_statemachine.cpp:211 CD_InitStateMachine) Successfully initialization of Event Queue for the CD state machine
00:00:17.243 BLM_SETTINGS[375] Warn (settings_service_funs.cpp:8631 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:00:17.243 BLM_SETTINGS[375] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/SafetyConvenience/DoorLockModeAT6 <!> Value is not in range
00:00:17.278 AUDIO_MGR[936] Info (audio_am_if.c:46 myDbusSend) Response:: methodName: openSession, arguments: {"busName":"com.jci.CD","objectPath":"/com/jci/CD"}, result: {"sessionId":2}
00:00:17.283 BLM_SETTINGS[375] Warn (settings_service_funs.cpp:8631 BLM_SETTINGS_IsValueNotInRange) <!> Value is not in range : [0]
00:00:17.283 BLM_SETTINGS[375] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/ForwardDetection/DriverAlert <!> Value is not in range
00:00:17.297 AUDIO_MGR[936] Info (audio_am_if.c:46 myDbusSend) Response:: methodName: registerAudioStream, arguments: {"sessionId":2,"streamName":"CD","streamModeName":"CD","streamType":"Media","focusType":"permanent"}, result: {}
00:00:17.299 BLM_CD[936] Info (cd_settings.cpp:44 CD_Settings_connect) Connecting to BLM_SETTINGS.
00:00:17.306 BLM_SETTINGS[936] Info (settings_client_funs.cpp:759 BLM_SETTINGS_Client_ExtConnect) com.jci.settings.BLM_CD
00:00:17.317 DAB[937] Info (dab_main.c:103 ServiceInit) Initalizing DAB Service
00:00:17.346 BLM_SETTINGS[936] Info (settings_client_funs.cpp:1559 SETTINGS_Client_ExtGet_S16) client [com.jci.settings.BLM_CD] com/jci/maz/cmu/Region
00:00:17.357 BLM_CD[936] Info (cd_init.cpp:154 ServiceInit) (STATUS_SUCCESS == CD_StartZones()) && (STATUS_SUCCESS == CreateConnectionPoll())
00:00:17.366 BLM_CD[936] Info (cd_init.cpp:171 ServiceRun) Running CD Service, from thread id = <716915712>.
00:00:17.372 BLM_SETTINGS[375] Info (settings_vbs_interface.cpp:11697 UpdateSymLinkForDSPConfiguration) Set DSP symlink to /jci/dsp/dsp_J36A-NoBose.xml, index in table 7
00:00:17.372 BLM_SETTINGS[375] Info (settings_symlink.hpp:228 _int_Set) symlink file /data/dsp.xml and its conatins "/jci/dsp/dsp_J36A-NoBose.xml" are OK
00:00:17.372 BLM_SETTINGS[375] Info (settings_service_funs.cpp:1269 SETTINGS_Connect_svc) connecting client:com.jci.settings.BLM_CD
00:00:17.372 BLM_SETTINGS[375] Info (settings_service_funs.cpp:5921 SETTINGS_Get_Settings_S16_svc) key path : /1/com/jci/maz/cmu/Region
00:00:17.381 BLM_SETTINGS[499] Info (settings_client_funs.cpp:2907 SETTINGS_Client_OnChange_S16_cb) SETTINGS_Client_OnChange_S16_cb
00:00:17.381 BLM_SETTINGS[499] Info (settings_client_funs.cpp:2937 SETTINGS_Client_OnChange_S16_cb) Client Name [com.jci.BLM_TIME_TO_BLM_SETTINGS]
00:00:17.381 BLM_SETTINGS[499] Info (settings_client_funs.cpp:2760 SETTINGS_Client_ExtOnChange_U8) client [com.jci.BLM_TIME_TO_BLM_SETTINGS] com/jci/blm/settings/Time/GPS_Sync
00:00:17.381 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:17.381 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:17.405 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:17.405 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:17.413 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5219 VBS_CD_Start_Timer) Timer gs_tmrRetryCnt = 5
00:00:17.413 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5437 VBS_CD_Send_DVD_Config_status_Req) Posting DVD Config Status Request to VIP
00:00:17.413 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5370 VBS_CD_Send_CD_ReadyReq) Posting CDVDTV Ready Status Request to VIP
00:00:17.413 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5841 VBS_CD_Send_DTV_RoutineTestReq) Posting DTV RoutineTest Status Request to VIP
00:00:17.413 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5773 VBS_CD_Send_DTV_StatusReq) Posting DTV Status Request to VIP
00:00:17.429 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5293 VBS_CD_Start_Timer) Timer Started : [CDTimerRetryCnt in decrement order = 5]
00:00:17.434 BLM_CD[936] Info (cd_statemachine.cpp:1314 cd_TopState_EventHandler) CD STATE START to StartUp for CD State Machine
00:00:17.434 BLM_SETTINGS[936] Info (settings_client_funs.cpp:422 BLM_SEETINGS_Connect_cb) Client Name [com.jci.settings.BLM_CD]
00:00:17.436 BLM_CD[936] Info (cd_vbs_interface.cpp:1740 VBS_CD_GetConfigStatusRequest) Calling VBS method VBS_CD_GetDVDConfigStatus.
00:00:17.438 BLM_CD[936] Info (cd_vbs_interface.cpp:1678 VBS_CD_GetReadyStatusRequest) Calling VBS method VBS_CD_DVD_GetStatus.
00:00:17.441 BLM_CD[936] Info (cd_vbs_interface.cpp:1696 CD_VBS_GetConfigStatus_cb) Received configuration status from VBS: DEVICE_NOT_CONNECTED
00:00:17.441 BLM_CD[936] Info (cd_vbs_interface.cpp:1511 VBS_CD_DVD_GetReadyStatusCallback) CD Ready Status is 0
00:00:17.441 BLM_CD[936] Info (cd_vbs_interface.cpp:1521 VBS_CD_DVD_GetReadyStatusCallback) Updating CD Ready status value to CD_NOT_READY.
00:00:17.447 BLM_CD[936] Info (cd_statemachine.cpp:1414 cd_StartUpState_EventHandler) Handling Event CD_ENTRY_EVENT.
00:00:17.447 AUDIO_MGR[936] Info (audio_am_if.c:43 myDbusSend) Request:: methodName: abandonAudioFocus, arguments: {"sessionId":2}
00:00:17.447 xse>AM>[] Debug (: ) : OUT: abandonAudioFocus(session=2): Unexpected, NOP
00:00:17.454 AUDIO_MGR[936] Info (audio_am_if.c:46 myDbusSend) Response:: methodName: abandonAudioFocus, arguments: {"sessionId":2}, result: {}
00:00:17.454 BLM_CD[936] Info (cd_fscache.cpp:33 Clear) Clear queue
00:00:17.463 BLM_CD[936] Info (cd_statemachine.cpp:1414 cd_StartUpState_EventHandler) Handling Event CD_START_EVENT.
00:00:17.463 BLM_CD[936] Info (cd_statemachine.cpp:1414 cd_StartUpState_EventHandler) Handling Event CD_CONFIG_STATUS_CALLBACK_EVENT.
00:00:17.463 BLM_CD[936] Info (cd_hmi_interface.cpp:852 CD_SendConfigStatus) Sending Configuration Status = CD_NotAvailable, to HMI.
00:00:17.463 BLM_CD[936] Info (cd_statemachine.cpp:1414 cd_StartUpState_EventHandler) Handling Event CD_READY_CALLBACK_EVENT.
00:00:17.479 AUDIO_MGR[937] Info (audio_am_if.c:46 myDbusSend) Response:: methodName: openSession, arguments: {"busName":"com.jci.dab","objectPath":"/com/jci/dab"}, result: {"sessionId":3}
00:00:17.484 AUDIO_MGR[937] Info (audio_am_if.c:46 myDbusSend) Response:: methodName: registerAudioStream, arguments: {"sessionId":3,"streamName":"DAB","streamModeName":"DAB","streamType":"Media","focusType":"permanent"}, result: {}
00:00:17.484 BLM_SETTINGS[937] Info (settings_client_funs.cpp:759 BLM_SETTINGS_Client_ExtConnect) com.jci.settings.dabblm
00:00:17.537 BLM_SETTINGS[937] Info (settings_client_funs.cpp:1559 SETTINGS_Client_ExtGet_S16) client [com.jci.settings.dabblm] com/jci/maz/cmu/Region
00:00:17.539 DAB[937] Info (dab_steng.c:3131 dab_UserRequestTimerInit) DAB user request timer Initialized
00:00:17.540 DAB[937] Info (dab_steng.c:396 dab_TopState_EventHandler) DAB_TOP_STATE: Received Event 2
00:00:17.542 DAB[937] Info (dab_steng.c:401 dab_TopState_EventHandler) DAB entering TOP state
00:00:17.542 DAB[937] Info (dab_steng.c:396 dab_TopState_EventHandler) DAB_TOP_STATE: Received Event 1
00:00:17.543 DAB[937] Info (dab_steng.c:689 dab_IdleState_EventHandler) DAB_IDLE_STATE: Received Event 2
00:00:17.544 DAB[937] Info (dab_steng.c:693 dab_IdleState_EventHandler) DAB entering IDLE state
00:00:17.545 DAB[937] Info (dab_steng.c:689 dab_IdleState_EventHandler) DAB_IDLE_STATE: Received Event 1
00:00:17.563 xse>AM>[] Debug (: ) : Received TAU status:1
00:00:17.563 xse>AP>[] Debug (: ) : Received TAU status:1
00:00:17.571 DAB[937] Info (dab_main.c:218 ServiceRun) Running DAB Service
00:00:17.577 DAB[937] Info (dab_vbs_interface.c:2472 dab_vbs_BandSelectSetting_Status_cb) Received bandSelectSetting from VBS:: 0
00:00:17.577 DAB[937] Info (dab_steng.c:330 DAB_PostMessageToStateMachine) Posting event 30 to state machine
00:00:17.577 DAB[937] Info (dab_steng.c:689 dab_IdleState_EventHandler) DAB_IDLE_STATE: Received Event 30
00:00:17.581 AUDIO_MGR[939] Info (audio_am_if.c:46 myDbusSend) Response:: methodName: openSession, arguments: {"busName":"com.jci.xm","objectPath":"/com/jci/xm"}, result: {"sessionId":4}
00:00:17.587 DAB[937] Info (dab_vbs_interface.c:2305 dab_vbs_LinkSetting_Status_cb) DAB FMLinkSetting received form VBS:: 0
00:00:17.587 DAB[937] Info (dab_steng.c:330 DAB_PostMessageToStateMachine) Posting event 33 to state machine
00:00:17.587 DAB[937] Info (dab_steng.c:689 dab_IdleState_EventHandler) DAB_IDLE_STATE: Received Event 33
00:00:17.587 DAB[937] Info (dab_steng.c:396 dab_TopState_EventHandler) DAB_TOP_STATE: Received Event 33
00:00:17.587 DAB[937] Info (dab_steng.c:2038 dab_dab_LinkSettingStatus) dab_dab_LinkSettingStatus received = 0
00:00:17.587 AUDIO_MGR[939] Info (audio_am_if.c:46 myDbusSend) Response:: methodName: registerAudioStream, arguments: {"sessionId":4,"streamName":"XM","streamModeName":"XM","streamType":"Media","focusType":"permanent"}, result: {}
00:00:17.587 XM_RADIO[939] Info (xm_am_interface.c:566 XM_AM_Register_Signal) Register AM stream success
00:00:17.587 DAB[937] Info (dab_vbs_interface.c:2222 dab_vbs_FMLinkSetting_Status_cb) DAB FMLinkSetting received form VBS:: 0
00:00:17.587 DAB[937] Info (dab_steng.c:330 DAB_PostMessageToStateMachine) Posting event 34 to state machine
00:00:17.587 DAB[937] Info (dab_steng.c:689 dab_IdleState_EventHandler) DAB_IDLE_STATE: Received Event 34
00:00:17.587 DAB[937] Info (dab_steng.c:396 dab_TopState_EventHandler) DAB_TOP_STATE: Received Event 34
00:00:17.587 DAB[937] Info (dab_steng.c:2103 dab_fm_LinkSettingStatus) dab_fm_LinkSettingStatus received = 0
00:00:17.587 com.jci.cpp.settings.socket[939] Info (SocketRegistry.cpp:1101 openSpecific) Connected to proxy: tcpip://
00:00:17.587 DAB[937] Info (dab_vbs_interface.c:2041 dab_vbs_Mode_Status_cb) DAB mode status received form VBS
00:00:17.587 DAB[937] Info (dab_steng.c:330 DAB_PostMessageToStateMachine) Posting event 36 to state machine
00:00:17.587 DAB[937] Info (dab_steng.c:689 dab_IdleState_EventHandler) DAB_IDLE_STATE: Received Event 36
00:00:17.587 DAB[937] Info (dab_steng.c:1756 dab_DabStatus)   Received error state=0 received Mode = 0
00:00:17.613 BLM_SETTINGS[375] Info (settings_vbs_interface.cpp:11697 UpdateSymLinkForDSPConfiguration) Set DSP symlink to /jci/dsp/dsp_J36A-NoBose.xml, index in table 7
00:00:17.613 BLM_SETTINGS[375] Info (settings_symlink.hpp:228 _int_Set) symlink file /data/dsp.xml and its conatins "/jci/dsp/dsp_J36A-NoBose.xml" are OK
00:00:17.613 BLM_SETTINGS[375] Info (settings_service_funs.cpp:6617 SETTINGS_OnChange_Settings_U8_svc) client:com.jci.BLM_TIME_TO_BLM_SETTINGS key path : /2/com/jci/blm/settings/Time/GPS_Sync
00:00:17.613 BLM_SETTINGS[522] Info (settings_client_funs.cpp:1458 SETTINGS_Client_Get_S16_cb) SETTINGS_Client_Get_S16_cb
00:00:17.613 BLM_SETTINGS[522] Info (settings_client_funs.cpp:1487 SETTINGS_Client_Get_S16_cb) Client Name [com.jci.settings.testdiag], returned value 1 for setting ID 140
00:00:17.613 DIAG[522] Info (testdiag_statemachine.c:18924 TESTDIAG_Settings_GetVehicleType_cb) Vehicle Type is 1
00:00:17.613 DAB[937] Info (dab_steng.c:1785 dab_DabStatus) Success: posting DAB_HMI_SendSignal_DAB_Mode_Status status signal with mode = 0
00:00:17.613 DAB[937] Info (dab_steng.c:330 DAB_PostMessageToStateMachine) Posting event 32 to state machine
00:00:17.613 DAB[937] Info (dab_steng.c:689 dab_IdleState_EventHandler) DAB_IDLE_STATE: Received Event 32
00:00:17.613 DAB[937] Info (dab_vbs_interface.c:2926 dab_vbs_ConnectionStatus_cb) TAU Status received from VBS with value::1
00:00:17.613 DAB[937] Info (dab_steng.c:330 DAB_PostMessageToStateMachine) Posting event 38 to state machine
00:00:17.613 DAB[937] Info (dab_steng.c:689 dab_IdleState_EventHandler) DAB_IDLE_STATE: Received Event 38
00:00:17.634 DAB[937] Info (dab_steng.c:396 dab_TopState_EventHandler) DAB_TOP_STATE: Received Event 38
00:00:17.634 DAB[937] Info (dab_vbs_interface.c:2926 dab_vbs_ConnectionStatus_cb) TAU Status received from VBS with value::100
00:00:17.634 DAB[937] Warn (dab_vbs_interface.c:2942 dab_vbs_ConnectionStatus_cb) Invalid TAU status received from VBS
00:00:17.634 DAB[937] Warn (dab_vbs_interface.c:2960 dab_vbs_ConnectionStatus_cb) TAU connection status not posted to state machine
00:00:17.634 DAB[937] Info (dab_vbs_interface.c:3127 dab_vbs_ConfigStatus_cb) DAB config Status received from VBS
00:00:17.634 DAB[937] Info (dab_vbs_interface.c:3133 dab_vbs_ConfigStatus_cb) DAB config Status received from VBS with value::0,and DAB TAU destination code is ::1
00:00:17.634 DAB[937] Info (dab_steng.c:330 DAB_PostMessageToStateMachine) Posting event 43 to state machine
00:00:17.634 DAB[937] Info (dab_steng.c:689 dab_IdleState_EventHandler) DAB_IDLE_STATE: Received Event 43
00:00:17.634 DAB[937] Info (dab_steng.c:396 dab_TopState_EventHandler) DAB_TOP_STATE: Received Event 43
00:00:17.634 DAB[937] Info (dab_steng.c:544 dab_TopState_EventHandler) Current region: 0
00:00:17.634 DAB[937] Info (dab_steng.c:562 dab_TopState_EventHandler) Posting Install_Status signal:1
00:00:17.634 DAB[937] Info (dab_vbs_interface.c:2668 dab_vbs_SignalStrength_Status_cb) DAB SignalStrength received form VBS:: 0
00:00:17.634 BLM_SETTINGS[936] Info (settings_client_funs.cpp:1458 SETTINGS_Client_Get_S16_cb) SETTINGS_Client_Get_S16_cb
00:00:17.634 BLM_SETTINGS[375] Info (settings_service_funs.cpp:1269 SETTINGS_Connect_svc) connecting client:com.jci.settings.dabblm
00:00:17.634 BLM_SETTINGS[499] Info (settings_client_funs.cpp:2638 SETTINGS_Client_OnChange_U8_cb) SETTINGS_Client_OnChange_U8_cb
00:00:17.634 DAB[937] Info (dab_steng.c:330 DAB_PostMessageToStateMachine) Posting event 37 to state machine
00:00:17.634 BLM_SETTINGS[936] Info (settings_client_funs.cpp:1487 SETTINGS_Client_Get_S16_cb) Client Name [com.jci.settings.BLM_CD], returned value 2 for setting ID 74
00:00:17.634 BLM_SETTINGS[375] Info (settings_service_funs.cpp:5921 SETTINGS_Get_Settings_S16_svc) key path : /1/com/jci/maz/cmu/Region
00:00:17.634 BLM_SETTINGS[499] Info (settings_client_funs.cpp:2668 SETTINGS_Client_OnChange_U8_cb) Client Name [com.jci.BLM_TIME_TO_BLM_SETTINGS]
00:00:17.634 DAB[937] Info (dab_steng.c:689 dab_IdleState_EventHandler) DAB_IDLE_STATE: Received Event 37
00:00:17.634 BLM_CD[936] Info (cd_settings.cpp:107 SETTINGS_GetRegion_cb) Received region = CD_Region_NorthAmerica from BLM_SETTINGS.
00:00:17.634 BLM_SETTINGS[499] Info (settings_client_funs.cpp:1400 SETTINGS_Client_ExtGet_U8) client [com.jci.BLM_TIME_TO_BLM_SETTINGS] com/jci/blm/settings/Time/TimeZone
00:00:17.634 DAB[937] Info (dab_steng.c:396 dab_TopState_EventHandler) DAB_TOP_STATE: Received Event 37
00:00:17.634 BLM_SETTINGS[375] Info (settings_service_funs.cpp:5856 SETTINGS_Get_Settings_U8_svc) key path : /2/com/jci/blm/settings/Time/TimeZone
00:00:17.634 DAB[937] Info (dab_vbs_interface.c:2388 dab_vbs_List_Status_cb) Received listUpdateReq from VBS:: 0
00:00:17.634 DAB[937] Info (dab_steng.c:330 DAB_PostMessageToStateMachine) Posting event 35 to state machine
00:00:17.634 DAB[937] Info (dab_steng.c:689 dab_IdleState_EventHandler) DAB_IDLE_STATE: Received Event 35
00:00:17.634 DAB[937] Info (dab_steng.c:396 dab_TopState_EventHandler) DAB_TOP_STATE: Received Event 35
00:00:17.634 DAB[937] Info (dab_steng.c:510 dab_TopState_EventHandler) DAB_LIST_STATUS value of **************************dab_state_msg.eventData.listStatus is 1 and dab_list_status is 1
00:00:17.634 DAB[937] Info (dab_steng.c:3508 dab_sendListUpdateStatus) dab_sendListUpdateStatus called
00:00:17.672 BLM_SETTINGS[937] Info (settings_client_funs.cpp:422 BLM_SEETINGS_Connect_cb) Client Name [com.jci.settings.dabblm]
00:00:17.672 BLM_SETTINGS[937] Info (settings_client_funs.cpp:1458 SETTINGS_Client_Get_S16_cb) SETTINGS_Client_Get_S16_cb
00:00:17.672 BLM_SETTINGS[937] Info (settings_client_funs.cpp:1487 SETTINGS_Client_Get_S16_cb) Client Name [com.jci.settings.dabblm], returned value 2 for setting ID 74
00:00:17.672 com.jci.cpp.settings[939] Note (RegistryFactory.cpp:123 createRegistry) Startup time: 00:00:00.068967667
00:00:17.672 XM_RADIO[939] Info (xm_settings.c:109 XM_InitSettings)  XM_InitSettings %b XM Handle to Settings Registry: 0x4a8a0
00:00:17.672 XM_RADIO[939] Info (xm_settings.c:160 XM_ReadSettings) <=================Parental Lock Status: 0 =================>
00:00:17.672 XM_RADIO[939] Info (xm_settings.c:178 XM_ReadSettings) Parental Lock Pin 		f f f f
00:00:17.672 XM_RADIO[939] Info (xm_settings.c:196 XM_ReadSettings) Default Parental Lock Pin 		0 9 1 5
00:00:17.672 XM_RADIO[939] Info (xm_settings.c:226 xm_ReadChannelLockRegistry) Channel Lock Status Registry No. 1: 00
00:00:17.696 XM_RADIO[939] Info (xm_settings.c:226 xm_ReadChannelLockRegistry) Channel Lock Status Registry No. 2: 00
00:00:17.696 BLM_SETTINGS[499] Info (settings_client_funs.cpp:1298 SETTINGS_Client_Get_U8_cb) SETTINGS_Client_Get_U8_cb
00:00:17.696 BLM_SETTINGS[499] Info (settings_client_funs.cpp:1328 SETTINGS_Client_Get_U8_cb) Client Name [com.jci.BLM_TIME_TO_BLM_SETTINGS], returned value 5 for setting ID 151
00:00:17.696 BLM_SETTINGS[499] Info (settings_client_funs.cpp:1400 SETTINGS_Client_ExtGet_U8) client [com.jci.BLM_TIME_TO_BLM_SETTINGS] com/jci/blm/settings/Time/GPS_Sync
00:00:17.696 BLM_SETTINGS[375] Info (settings_service_funs.cpp:5856 SETTINGS_Get_Settings_U8_svc) key path : /2/com/jci/blm/settings/Time/GPS_Sync
00:00:17.696 XM_RADIO[939] Info (xm_settings.c:226 xm_ReadChannelLockRegistry) Channel Lock Status Registry No. 3: 00
00:00:17.696 AUXIN[934] Info (auxin_vbs_interface.c:324 VBS_AUXIN_TauStatus_cb) TAU Status received from VBS with value::1
00:00:17.715 XM_RADIO[939] Info (xm_settings.c:226 xm_ReadChannelLockRegistry) Channel Lock Status Registry No. 4: 00
00:00:17.715 BLM_SETTINGS[499] Info (settings_client_funs.cpp:1298 SETTINGS_Client_Get_U8_cb) SETTINGS_Client_Get_U8_cb
00:00:17.715 BLM_SETTINGS[499] Info (settings_client_funs.cpp:1328 SETTINGS_Client_Get_U8_cb) Client Name [com.jci.BLM_TIME_TO_BLM_SETTINGS], returned value 1 for setting ID 150
00:00:17.715 BLM_SETTINGS[499] Info (settings_client_funs.cpp:1559 SETTINGS_Client_ExtGet_S16) client [com.jci.BLM_TIME_TO_BLM_SETTINGS] com/jci/blm/settings/Time/TimeDST
00:00:17.715 BLM_SETTINGS[375] Info (settings_service_funs.cpp:5921 SETTINGS_Get_Settings_S16_svc) key path : /2/com/jci/blm/settings/Time/TimeDST
00:00:17.715 XM_RADIO[939] Info (xm_settings.c:139 xm_read_EnableXMFeatureRegistry) <=================Enable XM Status: 1 =================>
00:00:17.719 XM_RADIO[939] Info (xm_steng.c:402 xm_TopState_EventHandler) XM_TOP_STATE: Received Event 2
00:00:17.719 XM_RADIO[939] Info (xm_steng.c:402 xm_TopState_EventHandler) XM_TOP_STATE: Received Event 1
00:00:17.719 XM_RADIO[939] Info (xm_steng.c:481 xm_DisconnectedState_EventHandler) XM_DISCONNECTED_STATE: Received Event 2
00:00:17.719 XM_RADIO[939] Info (xm_steng.c:481 xm_DisconnectedState_EventHandler) XM_DISCONNECTED_STATE: Received Event 1
00:00:17.719 XM_RADIO[939] Info (xm_hmi_interface.c:1723 XM_HMI_UpdateModeStatus) Posting XM Mode Status to HMI D-Bus: 1
00:00:17.719 XM_RADIO[939] Info (xm_steng.c:481 xm_DisconnectedState_EventHandler) XM_DISCONNECTED_STATE: Received Event 3
00:00:17.719 XM_RADIO[939] Info (xm_steng.c:402 xm_TopState_EventHandler) XM_TOP_STATE: Received Event 3
00:00:17.719 XM_RADIO[939] Info (xm_steng.c:402 xm_TopState_EventHandler) XM_TOP_STATE: Received Event 2
00:00:17.719 XM_RADIO[939] Info (xm_steng.c:568 xm_ConnectedState_EventHandler) XM_CONNECTED_STATE: Received Event 2
00:00:17.719 XM_RADIO[939] Info (xm_steng.c:1077 xm_IdleState_EventHandler) XM_IDLE_STATE: Received Event 2
00:00:17.719 XM_RADIO[939] Info (xm_steng.c:1077 xm_IdleState_EventHandler) XM_IDLE_STATE: Received Event 1
00:00:17.719 XM_RADIO[939] Info (xm_hmi_interface.c:1276 XM_HMI_UpdateTuner_Status) Posting XM Tuner status to HMI D-Bus   Channel Index = 1 Ch = 0 SID = 0 Status = 0 Error = 0 Category = 0 Lock = 0 Name =
00:00:17.719 BLM_SETTINGS[939] Info (settings_client_funs.cpp:759 BLM_SETTINGS_Client_ExtConnect) com.jci.settings.xmblm
00:00:17.719 BLM_SETTINGS[499] Info (settings_client_funs.cpp:1458 SETTINGS_Client_Get_S16_cb) SETTINGS_Client_Get_S16_cb
00:00:17.719 BLM_SETTINGS[499] Info (settings_client_funs.cpp:1487 SETTINGS_Client_Get_S16_cb) Client Name [com.jci.BLM_TIME_TO_BLM_SETTINGS], returned value 60 for setting ID 154
00:00:17.719 BLM_SETTINGS[499] Info (settings_client_funs.cpp:3301 SETTINGS_Client_ExtOnChange_U32) client [com.jci.BLM_TIME_TO_BLM_SETTINGS] com/jci/blm/settings/Time/TimeStamp
00:00:17.719 BLM_SETTINGS[375] Info (settings_service_funs.cpp:6737 SETTINGS_OnChange_Settings_U32_svc) client:com.jci.BLM_TIME_TO_BLM_SETTINGS key path : /2/com/jci/blm/settings/Time/TimeStamp
00:00:17.719 BLM_SETTINGS[499] Info (settings_client_funs.cpp:3179 SETTINGS_Client_OnChange_U32_cb) SETTINGS_Client_OnChange_U32_cb
00:00:17.719 BLM_SETTINGS[499] Info (settings_client_funs.cpp:3209 SETTINGS_Client_OnChange_U32_cb) Client Name [com.jci.BLM_TIME_TO_BLM_SETTINGS]
00:00:17.719 BLM_SETTINGS[499] Info (settings_client_funs.cpp:1721 SETTINGS_Client_ExtGet_U32) client [com.jci.BLM_TIME_TO_BLM_SETTINGS] com/jci/blm/settings/Time/TimeStamp
00:00:17.719 BLM_SETTINGS[375] Info (settings_service_funs.cpp:6023 SETTINGS_Get_Settings_U32_svc) key path : /2/com/jci/blm/settings/Time/TimeStamp
00:00:17.758 BLM_SETTINGS[499] Info (settings_client_funs.cpp:1619 SETTINGS_Client_Get_U32_cb) SETTINGS_Client_Get_U32_cb
00:00:17.758 BLM_SETTINGS[499] Info (settings_client_funs.cpp:1649 SETTINGS_Client_Get_U32_cb) Client Name [com.jci.BLM_TIME_TO_BLM_SETTINGS], returned value 86400 for setting ID 153
00:00:17.758 BLM_TIME[499] Info (clock_settings.c:1272 blm_time_set_get_timestamp_cb) New Timestamp is : 86400 1970-01-02 00:00:00
00:00:17.758 BLM_TIME[499] Info (blm_time_logic.cpp:1649 blm_time_RtcToTime) Realtime is 1970-01-02 09:38:28
00:00:17.758 BLM_TIME[499] Info (time_client.cpp:1348 BLM_TIME2CPP_TIME_SetCompositeTime) Set CPP_TIME clock to 1970-01-02 09:38:28  TZ h:-8 m:0  DST h:1 m:0
00:00:17.758 CPP_TIME[499] Info (time_dbus_client_funs.cpp:4129 TIME_Client_SetDatetimeComponents) time is sync'd by client com.jci.BLM_TIME_TO_CPP_TIME (1970.01.02 09:38:28 0000.00.00 -8:00:00 0000.00.00 01:00:00 0000.00.00 00:00:00)
00:00:17.758 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_SetDatetimeComponents_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:17.758 CPP_TIME[433] Error (time_common.cpp:2518 TIME_IsValid_New_UTC) UTC new:1970.01.02 09:38:28 current:1970.01.01 00:00:17 difference is 121091s (17 - 121108)
00:00:17.758 CPP_TIME[433] Warn (time_common.cpp:2573 TIME_IsValid_New_TZ) TZ changed from 0000.00.00 00:00:00 to 0000.00.00 -8:00:00 (0 to -28800)
00:00:17.758 CPP_TIME[433] Warn (time_common.cpp:2622 TIME_IsValid_New_DST) DST changed from 0000.00.00 00:00:00 to 0000.00.00 01:00:00 (0 to 3600)
00:00:17.758 CPP_TIME[433] Info (time_dbus_service_funs.cpp:2272 time_SetDatetimeComponents_resp_cb) OK status = 100
00:00:17.758 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) time_SetDatetimeComponents_resp_cb|(none)  95908 1970.01.02 02:38:28|121108|-28800|3600|0|ARMED|RUN|keep|0|1|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.02 09:38:28|0000.00.00 -8:00:00|0000.00.00 01:00:00|0000.00.00 00:00:00|
00:00:17.758 CPP_TIME[433] Info (time__cpp_Timer.cpp:707 Dump) TicksReal : 17 | TicksRealOffset : 95891 | TicksReal + TicksRealOffset = 95908 1970.01.02 02:38:28
00:00:17.758 CPP_TIME[433] Info (time__cpp_TimeEvents.cpp:535 Dump) -------------------------------------------------------
00:00:17.758 CPP_TIME[433] Info (time__cpp_TimeEvents.cpp:535 Dump) Total events : 2
00:00:17.758 CPP_TIME[433] Info (time__cpp_TimeEvents.cpp:535 Dump) -------------------------------------------------------
00:00:17.758 BLM_SETTINGS[375] Info (settings_service_funs.cpp:1269 SETTINGS_Connect_svc) connecting client:com.jci.settings.xmblm
00:00:17.758 BLM_SETTINGS[939] Info (settings_client_funs.cpp:1559 SETTINGS_Client_ExtGet_S16) client [com.jci.settings.xmblm] com/jci/maz/cmu/Region
00:00:17.758 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) void com::jci::time::cppTimeEvents::Dump()|(event) 49 1970.01.01 00:00:49|-1|0|0|0|ARMED|RUN|keep|2|2|0|com.jci.tds2cpptime|occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:32767.127.127 127:127:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|com.jci.tds2cpptime
00:00:17.758 BLM_SETTINGS[375]netstat: fscanf
 Info (settings_service_funs.cpp:5921 SETTINGS_Get_Settings_S16_svc) key path : /1/com/jci/maz/cmu/Region
00:00:17.758 VBS_BUS_SETTINGS[340] Info (mod_settings_manage_svc.c:4302 VBS_SETTINGS_GetGCCConfigMgmtID1_svc) Get GCC Config Management for destination_1 returned Value = 0, Type = 9
00:00:17.758 DIAG[522] Info (testdiag_vbs_interface.c:1774 TESTDIAG_XMDiag_Response_cb) Received Operation Mode = 0
00:00:17.758 XM_RADIO[939] Info (xm_main.c:146 ServiceRun) Running XM Service
00:00:17.758 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) void com::jci::time::cppTimeEvents::Dump()|(event) 49 1970.01.01 00:00:49|-1|0|0|0|ARMED|RUN|keep|2|2|0|com.jci.BLM_TIME_TO_CPP_TIME|occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:32767.127.127 127:127:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|com.jci.BLM_TIME_TO_CPP_TIME
00:00:17.758 DIAG[522] Info (testdiag_statemachine.c:789 TESTDIAG_postMessageToStateMachine) Posting TESTDIAG_XM_DIAGMODE_RESPONSE_EVT (42) event to state machine in state: Default
00:00:17.758 XM_RADIO[939] Info (xm_vbs_interface.c:806 xm_VBS_TunerStatusHandler) Tuner status received from VBS with Radio Status::0 Operation Mode::0 Error Status:: 0 Reciving Chanel:: 0 Category::0 SID::0
00:00:17.758 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|no pResponse|(sync)  0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|3|9|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:17.758 CPP_TIME[499] Info (time_dbus_client_funs.cpp:3233 TIME_Client_GetDatetimeComposite) request to cpp_time : conn 0x4af38 : dbus 0x4dc20 : name com.jci.BLM_TIME_TO_CPP_TIME
00:00:17.758 XM_RADIO[939] Info (xm_steng.c:1077 xm_IdleState_EventHandler) XM_IDLE_STATE: Received Event 16
00:00:17.758 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetimeComposite_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:17.758 XM_RADIO[939] Info (xm_steng.c:1077 xm_IdleState_EventHandler) XM_IDLE_STATE: Received Event 18
00:00:17.758 BLM_TIME[499] Info (dbusTIME_service.c:194 BLM_TIME_HDBUS_ClockChanged) broadcasting 1-min signal 02:38
00:00:17.758 XM_RADIO[939] Info (xm_vbs_interface.c:242 xm_VBS_ResponseHandler) XM VBS request callback is invoked with value 100
00:00:17.758 BLM_TIME[499] Info (service_manager.cpp:127 ServiceInit) [ok] - BLM_TIME is running
00:00:17.758 XM_RADIO[939] Info (xm_vbs_interface.c:699 xm_VBS_DestinationHandler) Recieved Destination value form MOD_SETTINGS = 0
00:00:17.758 XM_RADIO[939] Info (xm_steng.c:1077 xm_IdleState_EventHandler) XM_IDLE_STATE: Received Event 24
00:00:17.758 XM_RADIO[939] Info (xm_steng.c:568 xm_ConnectedState_EventHandler) XM_CONNECTED_STATE: Received Event 24
00:00:17.758 XM_RADIO[939] Info (xm_steng.c:697 xm_ConnectedState_EventHandler) Destination1 value 0
00:00:17.758 XM_RADIO[939] Info (xm_hmi_interface.c:1782 XM_HMI_UpdateInstallStatus) Posting XM Install Status to HMI D-Bus: 1
00:00:17.758 BLM_SETTINGS[939] Info (settings_client_funs.cpp:422 BLM_SEETINGS_Connect_cb) Client Name [com.jci.settings.xmblm]
00:00:17.758 BLM_SETTINGS[939] Info (settings_client_funs.cpp:1458 SETTINGS_Client_Get_S16_cb) SETTINGS_Client_Get_S16_cb
00:00:17.758 BLM_SETTINGS[939] Info (settings_client_funs.cpp:1487 SETTINGS_Client_Get_S16_cb) Client Name [com.jci.settings.xmblm], returned value 2 for setting ID 74
00:00:17.758 XM_RADIO[939] Info (xm_settings.c:564 xm_settings_Client_GetRegion_cb) <=======XM region: 2=========>
00:00:17.758 XM_RADIO[939] Info (xm_steng.c:1077 xm_IdleState_EventHandler) XM_IDLE_STATE: Received Event 15
00:00:17.758 BLM_TIME[499] Info (blm_time_logic.cpp:299 blm_time_lgc_LogicThread) Enter logic thread
00:00:17.758 XM_RADIO[939] Info (xm_steng.c:568 xm_ConnectedState_EventHandler) XM_CONNECTED_STATE: Received Event 15
00:00:17.758 XM_RADIO[939] Info (xm_hmi_interface.c:1782 XM_HMI_UpdateInstallStatus) Posting XM Install Status to HMI D-Bus: 0
00:00:17.868 BLM_TIME[499] Info (blm_time_gps.cpp:216 blm_time_gpsSyncThread) Now will request NNG GetTime.
00:00:17.868 BLM_TIME[499] Warn (blm_time_gps.cpp:230 blm_time_gpsSyncThread) Unable to get time from NNG (The name com.NNG.Api was not provided by any .service files)
00:00:17.868 BLM_TIME[499] Info (blm_time_gps.cpp:251 blm_time_gpsSyncThread) Starting GPS sync loop
00:00:17.868 BLM_TIME[499] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:00:17.868 BLM_TIME[499] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:00:18.062 CPUGAUGE[201] Error (jci_cpu_gauge.cpp:397 runCpuMonitor) CPU utilization is 98%
00:00:18.097 TDS[1134] Info (tds.c:129 ServiceInit) SM Initializing TDS.
00:00:18.098 TDS[1134] Info (tds_smdb.c:84 TDS_SMDB_Initialize) TDS_SMDB_Initialize
00:00:18.104 SMDB[1134] Warn (smdb_shmem.c:1108 shmem_loadDefaultData) Non-empty value for binary data "TrafficMapId" ignored.
00:00:18.108 TDS[1134] Info (tds_smdb.c:94 TDS_SMDB_Initialize) Success in initializing the SMDB Handle
00:00:18.108 TDS[1134] Info (tds.c:245 tds_initialize) Success in initializing the TDS SMDB.
00:00:18.120 TDS[1134] Info (tds.c:255 tds_initialize) Success in initializing the TDS ServiceDbus.
00:00:18.137 CPP_TIME[1134] Info (time_dbus_client_funs.cpp:2304 TIME_Client_Connect) will send connect request: conn 0x49e80 : dbus 0x4a430 : name com.jci.tds2cpptime
00:00:18.141 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_Connect_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:18.143 TDS[1134] Info (tds_interface.c:210 TDS_If_DbusConnectionPoll_Init) TDS_If_DbusConnectionPoll_Init: creating connection poll
00:00:18.144 TDS[1134] Info (tds_lot.cpp:271 TDS_LOT_DestroyObjectMaps) LOT Object Map is empty, nothing to destroy
00:00:18.145 TDS[1134] Info (tds_lot.cpp:281 TDS_LOT_DestroyObjectMaps) STM Object Map is empty, nothing to destroy
00:00:18.148 CPP_TIME[1134] Warn (time__gen_DataMutex.hpp:785 DataLock) mx locked, WILL wait until unlocked for 0x469d8
00:00:18.152 CPP_TIME[1134] Warn (time_stack_backtrace.cpp:83 __int_ShowStackBackTraceByLevel) __int_ShowStackBackTraceByLevel(TIME_debug_level_e)
00:00:18.153 CPP_TIME[1134] Warn (time_stack_backtrace.cpp:83 __int_ShowStackBackTraceByLevel) com::jci::time::DataMutex::DataLock()
00:00:18.154 CPP_TIME[1134] Warn (time_stack_backtrace.cpp:83 __int_ShowStackBackTraceByLevel) /jci/lib/libjcitime_client.so(+0x3b6f8)
00:00:18.155 TDS[1134] Info (tds_interface.c:1066 tds_jvmm_startConnection) Waiting for clients....
00:00:18.188 TDS[1134] Info (tds_xml.c:441 TDS_XML_Open) XML file loaded successfully
00:00:18.190 TDS[1134] Info (tds_lot.cpp:2048 tds_lot_insertArtExpObject) Successfully added ArtExp LOT object (key = 6143485262) to ArtExp map!
00:00:18.198 TDS[1134] Info (tds_interface.c:1172 tds_time_connect_cb) Client is connected
00:00:18.198 CPP_TIME[1134] Info (time_dbus_client_funs.cpp:3443 TIME_Client_RegisterForDatetimeChangeEvent) request to cpp_time : conn 0x49e80 : dbus 0x4a430 : name com.jci.tds2cpptime
00:00:18.198 CPP_TIME[433] Info (time_dbus_service_funs.cpp:2914 TIME_RegisterForDatetimeChangeEvent_svc) registering for event : 32767.127.127 127:127:00 client : com.jci.tds2cpptime
00:00:18.198 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_RegisterForDatetimeChangeEvent_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:18.198 CPP_TIME[433] Warn (time_common.cpp:772 TIME_convertStructuredTimeToTime) mktime - bad parameter :32767.127.127 127:127:00
00:00:18.198 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) time_RegisterForDatetimeChangeEvent_resp_cb|(event) 49 1970.01.01 00:00:49|-1|0|0|0|ARMED|RUN|keep|2|2|0|com.jci.tds2cpptime|occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:32767.127.127 127:127:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|com.jci.tds2cpptime
00:00:18.198 CPP_TIME[433] Warn (time_dbus_service_funs.cpp:1439 time_RegisterForDatetimeChangeEvent_resp_cb) already existing and will be deleted|(event) 49 1970.01.01 00:00:49|-1|0|0|0|ARMED|RUN|keep|2|2|0|com.jci.tds2cpptime|occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:32767.127.127 127:127:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|com.jci.tds2cpptime
00:00:18.198 CPP_TIME[433] Info (time_dbus_service_funs.cpp:1446 time_RegisterForDatetimeChangeEvent_resp_cb) adding event
00:00:18.202 TDS[1134] Info (tds_interface.c:1329 tds_time_registerForDatetimeChangeEvent) Successfully registered for 1 minute events from CPP Time
00:00:18.204 TDS[1134] Info (tds_lot.cpp:2048 tds_lot_insertArtExpObject) Successfully added ArtExp LOT object (key = 6384003502) to ArtExp map!
00:00:18.204 TDS[1134] Info (tds_lot.cpp:2048 tds_lot_insertArtExpObject) Successfully added ArtExp LOT object (key = 6770141614) to ArtExp map!
00:00:18.204 TDS[1134] Info (tds_lot.cpp:2048 tds_lot_insertArtExpObject) Successfully added ArtExp LOT object (key = 12280211886) to ArtExp map!
00:00:18.204 TDS[1134] Info (tds_lot.cpp:2074 tds_lot_insertSTMObject) Successfully added STM LOT object (key = 441633614702) to STM map!
00:00:18.204 TDS[1134] Info (tds_lot.cpp:2074 tds_lot_insertSTMObject) Successfully added STM LOT object (key = 3572664773486) to STM map!
00:00:18.212 TDS[1134] Info (tds_lot.cpp:2074 tds_lot_insertSTMObject) Successfully added STM LOT object (key = 3576959740782) to STM map!
00:00:18.212 TDS[1134] Info (tds_lot.cpp:2074 tds_lot_insertSTMObject) Successfully added STM LOT object (key = 3581254708078) to STM map!
00:00:18.212 TDS[1134] Info (tds_lot.cpp:2074 tds_lot_insertSTMObject) Successfully added STM LOT object (key = 3585549675374) to STM map!
00:00:18.212 TDS[1134] Info (tds_lot.cpp:2074 tds_lot_insertSTMObject) Successfully added STM LOT object (key = 3589844642670) to STM map!
00:00:18.218 TDS[1134] Info (tds_lot.cpp:2074 tds_lot_insertSTMObject) Successfully added STM LOT object (key = 3594139609966) to STM map!
00:00:18.218 TDS[1134] Info (tds_lot.cpp:2074 tds_lot_insertSTMObject) Successfully added STM LOT object (key = 3598434577262) to STM map!
00:00:18.218 TDS[1134] Info (tds_lot.cpp:2074 tds_lot_insertSTMObject) Successfully added STM LOT object (key = 3602729544558) to STM map!
00:00:18.218 TDS[1134] Info (tds_lot.cpp:2074 tds_lot_insertSTMObject) Successfully added STM LOT object (key = 3607024511854) to STM map!
00:00:18.218 TDS[1134] Info (tds_lot.cpp:302 TDS_LOT_InitializeObjectMaps) LOT Object Maps initialization were successful!
00:00:18.427 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5219 VBS_CD_Start_Timer) Timer gs_tmrRetryCnt = 4
00:00:18.427 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5437 VBS_CD_Send_DVD_Config_status_Req) Posting DVD Config Status Request to VIP
00:00:18.427 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5370 VBS_CD_Send_CD_ReadyReq) Posting CDVDTV Ready Status Request to VIP
00:00:18.427 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5841 VBS_CD_Send_DTV_RoutineTestReq) Posting DTV RoutineTest Status Request to VIP
00:00:18.427 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5773 VBS_CD_Send_DTV_StatusReq) Posting DTV Status Request to VIP
00:00:18.429 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5293 VBS_CD_Start_Timer) Timer Started : [CDTimerRetryCnt in decrement order = 4]
00:00:18.539 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:18.542 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:18.553 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:18.553 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:18.874 GUI_FRAMEWORK[627] Info (Websockets.js:290 ) APPSDK websocket open
00:00:18.914 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:18.916 GUI_FRAMEWORK[627] Info (Websockets.js:359 ) DBAPI websocket open
00:00:19.151 VBS_BUS_RADIO[340] Info (mod_radio_manage_svc.c:11842 vbs_radio_hdMetadataRetry) Timer started
00:00:19.430 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5219 VBS_CD_Start_Timer) Timer gs_tmrRetryCnt = 3
00:00:19.430 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5437 VBS_CD_Send_DVD_Config_status_Req) Posting DVD Config Status Request to VIP
00:00:19.430 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5370 VBS_CD_Send_CD_ReadyReq) Posting CDVDTV Ready Status Request to VIP
00:00:19.433 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5841 VBS_CD_Send_DTV_RoutineTestReq) Posting DTV RoutineTest Status Request to VIP
00:00:19.433 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5773 VBS_CD_Send_DTV_StatusReq) Posting DTV Status Request to VIP
00:00:19.435 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5293 VBS_CD_Start_Timer) Timer Started : [CDTimerRetryCnt in decrement order = 3]
00:00:19.574 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:19.584 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:19.594 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:19.602 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:19.651 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:20.000 BLM_TIME[499] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:00:20.001 BLM_TIME[499] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:00:20.154 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:20.435 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5219 VBS_CD_Start_Timer) Timer gs_tmrRetryCnt = 2
00:00:20.435 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5437 VBS_CD_Send_DVD_Config_status_Req) Posting DVD Config Status Request to VIP
00:00:20.435 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5370 VBS_CD_Send_CD_ReadyReq) Posting CDVDTV Ready Status Request to VIP
00:00:20.435 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5841 VBS_CD_Send_DTV_RoutineTestReq) Posting DTV RoutineTest Status Request to VIP
00:00:20.435 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5773 VBS_CD_Send_DTV_StatusReq) Posting DTV Status Request to VIP
00:00:20.438 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5293 VBS_CD_Start_Timer) Timer Started : [CDTimerRetryCnt in decrement order = 2]
00:00:20.615 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:20.619 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:20.641 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:20.641 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:20.659 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:20.661 BLM_SETTINGS[375] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
00:00:20.934 USBDTC[528] Info (usbdtcgpio.cpp:202 TimerCbk) 'ACC Status':Pin val stable
00:00:20.936 USBDTC[528] Info (usbdtcudev.cpp:405 UpdateMonitorStatus) Monitored device is present in the system! /sys/devices/platform/fsl-ehci.1/usb2/2-1 devnum: 2
00:00:21.162 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:21.438 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5219 VBS_CD_Start_Timer) Timer gs_tmrRetryCnt = 1
00:00:21.438 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5437 VBS_CD_Send_DVD_Config_status_Req) Posting DVD Config Status Request to VIP
00:00:21.438 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5370 VBS_CD_Send_CD_ReadyReq) Posting CDVDTV Ready Status Request to VIP
00:00:21.438 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5841 VBS_CD_Send_DTV_RoutineTestReq) Posting DTV RoutineTest Status Request to VIP
00:00:21.438 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5773 VBS_CD_Send_DTV_StatusReq) Posting DTV Status Request to VIP
00:00:21.440 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5293 VBS_CD_Start_Timer) Timer Started : [CDTimerRetryCnt in decrement order = 1]
00:00:21.646 BLM_SETTINGS[375] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
00:00:21.655 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:21.655 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:21.666 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:21.666 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:21.666 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:22.168 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:22.440 VBS_BUS_CDVDTV[340] Info (mod_cd_manage_svc.c:5219 VBS_CD_Start_Timer) Timer gs_tmrRetryCnt = 0
00:00:22.642 BLM_SETTINGS[375] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
00:00:22.670 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:22.685 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:22.685 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:22.701 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:22.701 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:23.000 BLM_TIME[499] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:00:23.001 BLM_TIME[499] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:00:23.173 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:23.649 BLM_SETTINGS[375] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
00:00:23.675 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:23.719 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:23.732 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:23.743 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:23.743 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:24.161 CPUGAUGE[201] Error (jci_cpu_gauge.cpp:445 runCpuMonitor) CPU utilization is reduced to 56%
00:00:24.178 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:24.644 BLM_SETTINGS[375] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
00:00:24.681 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:24.767 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:24.775 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:24.783 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:24.783 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:25.152 VBS_BUS_RADIO[340] Info (mod_radio_manage_svc.c:11842 vbs_radio_hdMetadataRetry) Timer started
00:00:25.183 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:25.686 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:25.803 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:25.812 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:25.824 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:25.824 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:26.000 BLM_TIME[499] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:00:26.001 BLM_TIME[499] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:00:26.189 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:26.694 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:26.856 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:26.861 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:26.876 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:26.876 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:27.196 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:27.698 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:27.892 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:27.896 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:27.909 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:27.909 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:28.201 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:28.704 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:28.929 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:28.937 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:28.947 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:28.951 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:29.001 BLM_TIME[499] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:00:29.001 BLM_TIME[499] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:00:29.206 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:29.709 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:29.965 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:29.970 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:29.982 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:29.982 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:30.212 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:30.714 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:30.999 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:31.002 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:31.014 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:31.014 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:31.153 VBS_BUS_RADIO[340] Info (mod_radio_manage_svc.c:11842 vbs_radio_hdMetadataRetry) Timer started
00:00:31.217 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
netstat: fscanf
00:00:31.720 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:32.000 BLM_TIME[499] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:00:32.002 BLM_TIME[499] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:00:32.027 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:32.036 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:32.047 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:32.047 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:32.222 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:32.280 kernel[] Info (: ) [   32.281467] usb 2-1.2: new high speed USB device number 3 using fsl-ehci
00:00:32.390 kernel[] Info (: ) [   32.394106] usb 2-1.2: New USB device found, idVendor=18d1, idProduct=4ee7
00:00:32.390 kernel[] Info (: ) [   32.394125] usb 2-1.2: New USB device strings: Mfr=1, Product=2, SerialNumber=3
00:00:32.390 kernel[] Info (: ) [   32.394139] usb 2-1.2: Product: Pixel 2
00:00:32.390 kernel[] Info (: ) [   32.394149] usb 2-1.2: Manufacturer: Google
00:00:32.390 kernel[] Info (: ) [   32.394160] usb 2-1.2: SerialNumber: FA7CK1A02396
00:00:32.390 kernel[] Error (: ) [   32.394603] usb 2-1.2: Device is not authorized for usage
00:00:32.390 kernel[] Info (: ) [   32.400800] usb 2-1.2: authorized to connect
00:00:32.550 kernel[] Info (: ) [   32.555725] usb 2-1.2: USB disconnect, device number 3
00:00:32.641 BLM_SETTINGS[375] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
00:00:32.726 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:32.870 kernel[] Info (: ) [   32.871530] usb 2-1.2: new high speed USB device number 4 using fsl-ehci
00:00:32.980 kernel[] Info (: ) [   32.982736] usb 2-1.2: New USB device found, idVendor=18d1, idProduct=2d01
00:00:32.980 kernel[] Info (: ) [   32.982764] usb 2-1.2: New USB device strings: Mfr=1, Product=2, SerialNumber=3
00:00:32.980 kernel[] Info (: ) [   32.982778] usb 2-1.2: Product: Pixel 2
00:00:32.980 kernel[] Info (: ) [   32.982794] usb 2-1.2: Manufacturer: Google
00:00:32.980 kernel[] Info (: ) [   32.982805] usb 2-1.2: SerialNumber: FA7CK1A02396
00:00:32.980 kernel[] Error (: ) [   32.983346] usb 2-1.2: Device is not authorized for usage
00:00:32.990 kernel[] Info (: ) [   32.993476] usb 2-1.2: authorized to connect
00:00:33.058 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:33.067 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:33.079 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:33.079 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:33.230 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:33.673 BLM_SETTINGS[375] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
00:00:33.734 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:34.119 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:34.126 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:34.141 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:34.141 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:34.236 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:34.377 Std[] Info (: ) adb device presents, reverse porting ssh on port 2222
00:00:34.739 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:35.000 kernel[] Info (: ) [   35.009250] input: mzd-uinput as /devices/virtual/input/input6
00:00:35.000 BLM_TIME[499] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:00:35.004 BLM_TIME[499] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:00:35.067 NATGUICTRL[124] Info (nativeguictrl_state_machine.c:230 OnIdle) Entering Idle state
00:00:35.067 BUCPSA[124] Info (listener_reverse_gear.c:347 LISTENER_GetReverseStatus) Reverse Gear Status = 1
00:00:35.067 NATGUICTRL[124] Info (nativeguictrl_state_machine.c:171 NGC_injectReverseEvent) Injecting event NGC_REVERSE_CHANGED with value 1
00:00:35.072 NATGUICTRL[124] Info (nativeguictrl_state_machine.c:146 NGC_injectPsmEvent) Injecting event NGC_REVERSE_CHANGED (Parking Sensor Full View) with value 1
00:00:35.074 NATGUICTRL[124] Info (nativeguictrl_state_machine.c:194 NGC_injectSurfaceRequestEvent) Injecting event NGC_SURFACES_REQUEST with value 1
00:00:35.074 NATGUICTRL[124] Info (nativeguictrl_state_machine.c:579 ngc_ConsumeSurfacesReq) Showing TV_TOUCH_SURFACE surface
00:00:35.074 NATGUICTRL[124] Info (ivi-shell-utils.c:653 IVI_UTILS_HideAllUnmarked) Hiding surface JCI_OPERA_PRIMARY
00:00:35.074 NATGUICTRL[124] Info (ivi-shell-utils.c:653 IVI_UTILS_HideAllUnmarked) Hiding surface NATGUI_SURFACE
00:00:35.074 NATGUICTRL[124] Info (ivi-shell-utils.c:653 IVI_UTILS_HideAllUnmarked) Hiding surface LOOPLOGO_SURFACE
00:00:35.174 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:35.178 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:35.189 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:35.189 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:35.241 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:35.743 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:36.203 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:36.206 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:36.218 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:36.218 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:36.246 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
netstat: fscanf
00:00:36.370 kernel[] Error (: ) [   36.371949] imx-ipuv3 imx-ipuv3.1: ERR[0xbb785600-no:0x2fc0]ipu task_id:1 busy!
00:00:36.370 kernel[] Error (: ) [   36.371971] imx-ipuv3 imx-ipuv3.1: ERR:[0xbb785600] no-0x2fc0 state: ipu busy
00:00:36.370 kernel[] Error (: ) [   36.372013] imx-ipuv3 imx-ipuv3.1: ERR: [0xbb785600] no-0x2fc0,state 8: ipu busy
00:00:36.370 kernel[] Error (: ) [   36.372031] imx-ipuv3 imx-ipuv3.1: ERR: no-0x2fc0,ipu_queue_task err:-125
00:00:36.748 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:37.155 VBS_BUS_RADIO[340] Info (mod_radio_manage_svc.c:11842 vbs_radio_hdMetadataRetry) Timer started
00:00:37.248 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:37.255 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:37.255 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:37.269 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:37.269 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:37.753 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:38.000 BLM_TIME[499] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:00:38.002 BLM_TIME[499] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:00:38.256 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:38.293 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:38.293 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:38.305 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:38.305 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:38.643 BLM_SETTINGS[375] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
00:00:38.759 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:39.263 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:39.321 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:39.321 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:39.335 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:39.335 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:39.642 BLM_SETTINGS[375] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
00:00:39.765 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:40.268 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:40.348 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:40.348 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:40.364 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:40.364 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:40.639 BLM_SETTINGS[375] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
00:00:40.771 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:41.000 BLM_TIME[499] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:00:41.002 BLM_TIME[499] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:00:41.273 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:41.377 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:41.380 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:41.393 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:41.393 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
netstat: fscanf
00:00:41.776 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:42.278 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:42.425 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:42.434 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:42.447 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:42.447 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:42.781 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:43.156 VBS_BUS_RADIO[340] Info (mod_radio_manage_svc.c:11842 vbs_radio_hdMetadataRetry) Timer started
00:00:43.283 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:43.460 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:43.464 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:43.475 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:43.475 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:43.649 BLM_SETTINGS[375] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
00:00:43.786 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:44.000 BLM_TIME[499] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:00:44.001 BLM_TIME[499] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:00:44.288 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:44.486 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:44.492 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:44.503 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:44.503 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:44.638 BLM_SETTINGS[375] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
00:00:44.792 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:45.296 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:45.517 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:45.525 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:45.537 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:45.537 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:45.631 BLM_SETTINGS[375] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
00:00:45.798 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:46.301 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
netstat: fscanf
00:00:46.550 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:46.550 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:46.560 kernel[] Error (: ) [   46.561548] imx-ipuv3 imx-ipuv3.1: ERR[0xbb785c00-no:0x4770]ipu task_id:1 busy!
00:00:46.560 kernel[] Error (: ) [   46.561568] imx-ipuv3 imx-ipuv3.1: ERR:[0xbb785c00] no-0x4770 state: ipu busy
00:00:46.560 kernel[] Error (: ) [   46.561614] imx-ipuv3 imx-ipuv3.1: ERR: [0xbb785c00] no-0x4770,state 8: ipu busy
00:00:46.560 kernel[] Error (: ) [   46.561633] imx-ipuv3 imx-ipuv3.1: ERR: no-0x4770,ipu_queue_task err:-125
00:00:46.573 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:46.573 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:46.637 BLM_SETTINGS[375] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
00:00:46.803 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:47.000 BLM_TIME[499] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:00:47.002 BLM_TIME[499] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:00:47.306 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:47.586 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:47.590 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:47.601 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:47.601 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:47.635 BLM_SETTINGS[375] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
00:00:47.808 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:48.311 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:48.614 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:48.621 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:48.633 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:48.633 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:48.814 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:49.079 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|no pResponse|(event) 109 1970.01.01 00:01:49|-1|0|0|0|ARMED|RUN|keep|2|2|0|com.jci.BLM_TIME_TO_CPP_TIME|occurrence:1970.01.02 02:39:00|deviation:0000.00.00 00:00:00|time:32767.127.127 127:127:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|com.jci.BLM_TIME_TO_CPP_TIME
00:00:49.083 BLM_TIME[499] Info (time_client.cpp:807 blm_time_EventNotification_cb) Time from CPP_TIME: 02:39
00:00:49.083 BLM_TIME[499] Info (blm_time_logic.cpp:347 blm_time_lgc_LogicThread) blm_time_event (1) (mae 1970.01.02 02:39:00) (ts 1970.01.02 02:39:00) (tz 33621938:9986) (gps_sync 33621938) (td 1970.01.02 02:39:00 0 0 0 0 0)
00:00:49.083 BLM_TIME[499] Info (dbusTIME_service.c:194 BLM_TIME_HDBUS_ClockChanged) broadcasting 1-min signal 02:39
00:00:49.083 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|no pResponse|(event) 109 1970.01.01 00:01:49|-1|0|0|0|ARMED|RUN|keep|2|2|0|com.jci.tds2cpptime|occurrence:1970.01.02 02:39:00|deviation:0000.00.00 00:00:00|time:32767.127.127 127:127:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|com.jci.tds2cpptime
00:00:49.158 VBS_BUS_RADIO[340] Info (mod_radio_manage_svc.c:11842 vbs_radio_hdMetadataRetry) Timer started
00:00:49.250 kernel[] Error (: ) [   49.257532] imx-ipuv3 imx-ipuv3.1: ERR[0xbb72fa00-no:0x4ce0]ipu task_id:1 busy!
00:00:49.250 kernel[] Error (: ) [   49.257552] imx-ipuv3 imx-ipuv3.1: ERR:[0xbb72fa00] no-0x4ce0 state: ipu busy
00:00:49.250 kernel[] Error (: ) [   49.257595] imx-ipuv3 imx-ipuv3.1: ERR: [0xbb72fa00] no-0x4ce0,state 8: ipu busy
00:00:49.250 kernel[] Error (: ) [   49.257611] imx-ipuv3 imx-ipuv3.1: ERR: no-0x4ce0,ipu_queue_task err:-125
00:00:49.250 kernel[] Error (: ) [   49.257626] mxc_v4l2_output mxc_v4l2_output.0: display work fail ret = -125
00:00:49.316 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:49.645 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:49.650 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:49.660 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:49.660 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:49.818 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:50.000 BLM_TIME[499] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:00:50.002 BLM_TIME[499] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:00:50.321 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:50.672 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:50.675 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:50.689 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:50.689 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:50.824 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:51.328 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
netstat: fscanf
00:00:51.716 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:51.720 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:51.739 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:51.739 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:51.831 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:52.334 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:52.749 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:52.756 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:52.767 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:52.767 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:52.836 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:53.000 BLM_TIME[499] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:00:53.002 BLM_TIME[499] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:00:53.338 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:53.631 BLM_SETTINGS[375] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
00:00:53.783 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:53.786 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:53.796 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:53.796 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:53.841 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:54.343 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:54.633 BLM_SETTINGS[375] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
00:00:54.808 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:54.814 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:54.825 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:54.825 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:54.845 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:55.160 VBS_BUS_RADIO[340] Info (mod_radio_manage_svc.c:11842 vbs_radio_hdMetadataRetry) Timer started
00:00:55.348 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:55.837 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:55.844 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:55.853 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:55.853 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:55.853 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:56.000 BLM_TIME[499] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:00:56.002 BLM_TIME[499] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:00:56.354 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
netstat: fscanf
00:00:56.857 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:56.877 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:56.877 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:56.888 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:56.888 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:57.361 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:57.626 BLM_SETTINGS[375] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
00:00:57.864 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:57.906 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:57.906 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:57.916 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:57.916 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:58.366 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:58.634 BLM_SETTINGS[375] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
00:00:58.869 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:58.938 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:58.938 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:58.948 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:58.948 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:59.001 BLM_TIME[499] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:00:59.001 BLM_TIME[499] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:00:59.371 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:59.631 BLM_SETTINGS[375] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
00:00:59.648 VIM[110] Info (vim_keyapp.c:324 keyapp_MsgHandler) Incoming button: Encoder2 CW : 1
00:00:59.668 VIM[110] Info (vim_keyapp.c:324 keyapp_MsgHandler) Incoming button: Encoder2 CW : 1
00:00:59.873 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:00:59.961 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:59.961 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:00:59.972 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:00:59.974 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:00.345 VIM[110] Info (vim_keyapp.c:324 keyapp_MsgHandler) Incoming button: Encoder2 CW : 1
00:01:00.376 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:01:00.878 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:01:00.987 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:01:00.989 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:01.002 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:01:01.005 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:01.162 VBS_BUS_RADIO[340] Info (mod_radio_manage_svc.c:11842 vbs_radio_hdMetadataRetry) Timer started
00:01:01.381 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
netstat: fscanf
00:01:01.883 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:01:02.000 BLM_TIME[499] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:01:02.002 BLM_TIME[499] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:01:02.029 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:01:02.034 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:02.048 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:01:02.048 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:02.385 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:01:02.888 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:01:03.058 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:01:03.058 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:03.076 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:01:03.076 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:03.392 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:01:03.897 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:01:04.092 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:01:04.101 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:04.109 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:01:04.109 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:04.399 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:01:04.901 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:01:05.000 BLM_TIME[499] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:01:05.001 BLM_TIME[499] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:01:05.122 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:01:05.128 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:05.141 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:01:05.141 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:05.404 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:01:05.906 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:01:06.154 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:01:06.164 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:06.172 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:01:06.172 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:06.409 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
netstat: fscanf
00:01:06.911 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:01:07.163 VBS_BUS_RADIO[340] Info (mod_radio_manage_svc.c:11842 vbs_radio_hdMetadataRetry) Timer started
00:01:07.184 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:01:07.189 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:07.204 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:01:07.204 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:07.413 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:01:07.845 VIM[110] Info (vim_keyapp.c:324 keyapp_MsgHandler) Incoming button: SW3 Button7 Pressed : 1
00:01:07.916 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:01:08.000 BLM_TIME[499] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:01:08.002 BLM_TIME[499] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:01:08.041 VIM[110] Info (vim_keyapp.c:324 keyapp_MsgHandler) Incoming button: SW3 Button7 Pressed : 0
00:01:08.212 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:01:08.219 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:08.234 CPP_TIME[340] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0xa6ec8 : dbus 0xa5d60 : name com.jci.modvdt2cpptime
00:01:08.234 CPP_TIME[433] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:01:08.291 xse>AM>[] Debug (: ) : mid: ChangeAudioFocus(add, id:5, requestAudioFocus): MapAllowState: RS.allowStatus: "Allow"
00:01:08.296 xse>AM>[] Debug (: ) : Sending: SetMute({"signature":"yy","params":[2,0]})
00:01:08.300 VBS_BUS_AM[340] Info (mod_am_manage_svc.c:659 VBS_AM_SetMute_svc) Received Request : SetMute [muteType = 2, rampTime = 0]
00:01:08.302 xse>AM>[] Debug (: ) : Reply: SetMute({"results":[100]})
00:01:08.334 VBS_BUS_AM[340] Info (mod_am.c:885 VBS_AM_ReceiveHandler) Response: EventMute_On Mute Status [Mute Type = 2]
00:01:08.334 DIAG[522] Info (testdiag_vbs_interface.c:3383 testdiag_MuteStatus_cb) Mute Response Status Received, muteType = 2
00:01:08.334 DIAG[522] Info (testdiag_vbs_interface.c:3388 testdiag_MuteStatus_cb) Unmute Type is 2
00:01:08.334 DIAG[522] Info (testdiag_statemachine.c:789 TESTDIAG_postMessageToStateMachine) Posting TESTDIAG_AUDIO_MUTE_EVENT (64) event to state machine in state: Default
00:01:08.334 xse>AP>[] Debug (: ) : Signal: MuteStatus({"params":[2]})
00:01:08.343 xse>AM>[] Debug (: ) : Signal: MuteStatus({"params":[2]})
00:01:08.347 xse>AM>[] Debug (: ) : Sending: SourceSelect({"signature":"ssssss","params":["CMUMEDIA","NONE","NONE","NONE","NONE","NONE"]})
00:01:08.347 VBS_BUS_AM[340] Info (mod_am_manage_svc.c:843 VBS_AM_SourceSelect_svc) Received Request : SourceSelect [Source1 = CMUMEDIA, SourceOff = NONE]
00:01:08.349 xse>AM>[] Debug (: ) : Reply: SourceSelect({"results":[100]})
00:01:08.418 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:01:08.418 VBS_BUS_AM[340] Info (mod_am.c:1105 VBS_AM_ReceiveHandler) Response: Source Select[SourceIndex = CMUMEDIA, InterruptIndex = NONE
00:01:08.418 DIAG[522] Info (testdiag_vbs_interface.c:2999 TESTDIAG_Am_SourceChange_Response_cb) source On is CMUMEDIA
00:01:08.418 DIAG[522] Info (testdiag_statemachine.c:789 TESTDIAG_postMessageToStateMachine) Posting TESTDIAG_SOURCE_CHANGE_RESPONSE_EVT (5) event to state machine in state: Default
00:01:08.418 DIAG[522] Info (testdiag_statemachine.c:1062 testdiag_TopState_EventHandler) Received Source Change Response : sourceOn : CMUMEDIA and source off NONE
00:01:08.418 xse>AM>[] Debug (: ) : Signal: SourceSelectResponse({"params":["CMUMEDIA","NONE","NONE","NONE"]})
00:01:08.439 xse>AP>[] Debug (: ) : Signal: SourceSelectResponse({"params":["CMUMEDIA","NONE","NONE","NONE"]})
00:01:08.439 DAB[937] Info (dab_am_interface.c:139 cbSignalNotify) DAB_AM_CLIENT:  audioFocusChangeEvent: newFocus:0
00:01:08.439 DIAG[522] Warn (testdiag_am_interface.c:282 testdiag_cbSignalNotify) Parameter signalName is NULL
00:01:08.474 XM_RADIO[939] Info (xm_am_interface.c:140 cbSignalNotify) XM_AM_CLIENT:  audioFocusChangeEvent: streamName:MLENT                          XM_AM_CLIENT:  audioFocusChangeEvent: streamType:Media                          XM_AM_CLIENT:  audioFocusChangeEvent: newFocus:0
00:01:08.539 AUXIN[934] Info (auxin_am_interface.c:139 cbSignalNotify) AUXIN_AM_CLIENT:  audioFocusChangeEvent: streamName:MLENT
00:01:08.539 AUXIN[934] Info (auxin_am_interface.c:140 cbSignalNotify) AUXIN_AM_CLIENT:  audioFocusChangeEvent: streamType:Media
00:01:08.539 AUXIN[934] Info (auxin_am_interface.c:141 cbSignalNotify) AUXIN_AM_CLIENT:  audioFocusChangeEvent: newFocus:0
00:01:08.893 GUI_FRAMEWORK[627] Warn (Websockets.js:160 ) Websockets retry limit reached. Now testing offline.
00:01:08.894 GUI_FRAMEWORK[627] Info (GuiFramework.js:272 ) * * * * * GUI is ready.  Sending Global.GetStartupSettings event to MMUI. * * * * *
00:01:08.894 GUI_FRAMEWORK[627] Error (Websockets.js:557 ) Failed to send MMUI message because websocket is closed: {"msgType":"event","eventId":"Global.GetStartupSettings","uiaId":"common","params":"{}","fromVui":false,"currentUiaId":"","currentContextId":""}
00:01:08.921 GUI_FRAMEWORK[627] Info (Websockets.js:228 ) Waiting for MMUI websocket to be ready ...
00:01:08.921 GUI_FRAMEWORK[627] Warn (Websockets.js:236 ) MMUI websocket closed or could not be opened.
00:01:08.921 GUI_FRAMEWORK[627] Warn (Websockets.js:237 )    e.wasClean: false
00:01:08.922 GUI_FRAMEWORK[627] Warn (Websockets.js:238 )    e.reason:
00:01:08.922 GUI_FRAMEWORK[627] Warn (Websockets.js:239 )    e.code: 1005
00:01:08.922 GUI_FRAMEWORK[627] Error (GuiFramework.js:2607 ) * * * * FATAL ERROR - RESTARTING CMU : MMUI websocket crash
00:01:08.930 GUI_MANAGER[627] Critical (guiManager.c:255 vp_forceExit) CALLING TERMINATE !
00:01:08.936 OPERA_MAIN[627] Error (OperaDBUSService.cpp:174 OPERA_IHU_TerminateOpera_svc) GUI or OPERA PLUGIN requested terminate! - Watchdog disabled - ignore the call
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
var paragrapgh,errs;
for(var i=0;i<3;i++){  
  paragrapgh = $('code').get(i);
  errs = paragrapgh.innerText.split("] Error (").join("]<span style='color: red;'> Error </span>("); // here I am spliting words by Error
  errs = errs.split("] Note (").join("]<span style='color: #4dffc7;'> Note </span>(");
  errs = errs.split("] Debug (").join("]<span style='color: #a34dff;'> Debug </span>(");
  errs = errs.split("] Warn (").join("]<span style='color: yellow;'> Warn </span>(");
  errs = errs.split("] Critical (").join("]<span style='color: #ff6c00;'> Critical </span>(");
  paragrapgh.innerHTML = errs;
}
</script>
