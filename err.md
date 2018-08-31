---
layout: default
permalink: /serial/err/
---

## Serial Output:

```
=~=~=~=~=~=~=~=~=~=~=~= PuTTY log 2018.08.30 13:27:27 =~=~=~=~=~=~=~=~=~=~=~=
dmesg
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
[    0.000000] Init and register the timer to the framework with an 603177000 ns offset.
[    0.000000] sched_clock: 32 bits at 3000kHz, resolution 333ns, wraps every 1431655ms
[    0.000000] arm_max_freq=2
[    0.000000] MXC_Early serial console at MMIO 0x21e8000 (options '115200')
[    0.000000] bootconsole [ttymxc1] enabled
[    0.000000] Console: colour dummy device 80x30
[    0.603589] Calibrating delay loop (skipped) preset value.. 1699.02 BogoMIPS (lpj=8495104)
[    0.603619] pid_max: default: 32768 minimum: 301
[    0.604006] Mount-cache hash table entries: 512
[    0.605011] CPU: Testing write buffer coherency: ok
[    0.605079] ftrace: allocating 13083 entries in 39 pages
[    0.712606] CPU1: Booted secondary processor
[    0.712701] Brought up 2 CPUs
[    0.712721] SMP: Total of 2 processors activated (3398.04 BogoMIPS).
[    0.713302] devtmpfs: initialized
[    0.740633] print_constraints: dummy:
[    0.741014] NET: Registered protocol family 16
[    0.743022] print_constraints: vddpu: 725 <--> 1300 mV at 1225 mV fast normal
[    0.743306] print_constraints: vddcore: 725 <--> 1300 mV at 1225 mV fast normal
[    0.743563] print_constraints: vddsoc: 725 <--> 1300 mV at 1225 mV fast normal
[    0.743860] print_constraints: vdd2p5: 2000 <--> 2775 mV at 2400 mV fast normal
[    0.744128] print_constraints: vdd1p1: 800 <--> 1400 mV at 1100 mV fast normal
[    0.744414] print_constraints: vdd3p0: 2625 <--> 3400 mV at 3000 mV fast normal
[    0.745632] SET_GPIO4_28 to 1
[    0.746082] cpu regulator init ldo=0
[    0.746658] am335xevm: shared transport platform init
[    0.753213] SET_GPIO4_28 to 0
[    0.753249] L310 cache controller enabled
[    0.753264] l2x0: 16 ways, CACHE_ID 0x410000c7, AUX_CTRL 0x02070000, Cache size: 1048576 B
[    0.757866] bio: create slab <bio-0> at 0
[    0.760242] mxs-dma mxs-dma-apbh: initialized
[    0.760855] SCSI subsystem initialized
[    0.761260] spi_imx imx6q-ecspi.0: probed
[    0.761619] spi_imx imx6q-ecspi.1: probed
[    0.761959] spi_imx imx6q-ecspi.3: probed
[    0.762370] usbcore: registered new interface driver usbfs
[    0.762455] usbcore: registered new interface driver hub
[    0.762582] usbcore: registered new device driver usb
[    0.762597] Freescale USB OTG Driver loaded, $Revision: 1.55 $
[    0.782125] imx-ipuv3 imx-ipuv3.0: IPU DMFC NORMAL mode: 1(0~1), 5B(4,5), 5F(6,7)
[    0.802108] imx-ipuv3 imx-ipuv3.1: IPU DMFC NORMAL mode: 1(0~1), 5B(4,5), 5F(6,7)
[    0.802463] Advanced Linux Sound Architecture Driver Version 1.0.24.
[    0.884277] Switching to clocksource mxc_timer1
[    0.907541] NET: Registered protocol family 2
[    0.907962] IP route cache hash table entries: 32768 (order: 5, 131072 bytes)
[    0.909470] TCP established hash table entries: 131072 (order: 8, 1048576 bytes)
[    0.911338] TCP bind hash table entries: 65536 (order: 7, 786432 bytes)
[    0.912432] TCP: Hash tables configured (established 131072 bind 65536)
[    0.912447] TCP reno registered
[    0.912466] UDP hash table entries: 512 (order: 2, 16384 bytes)
[    0.912506] UDP-Lite hash table entries: 512 (order: 2, 16384 bytes)
[    0.913079] NET: Registered protocol family 1
[    0.913432] Unpacking initramfs...
[    1.036369] Freeing initrd memory: 1528K
[    1.037110] Static Power Management for Freescale i.MX6
[    1.037123] wait mode is enabled for i.MX6
[    1.037246] cpaddr = c0880000 suspend_iram_base=c08e8000
[    1.037345] PM driver module loaded
[    1.037554] IMX usb wakeup probe
[    1.037749] the wakeup pdata is 0xbfe6ed40
[    1.038103] add wake up source irq 75
[    1.041496] cpu regulator init ldo=0
[    1.041571] i.MXC CPU frequency driver
[    1.061868] msgmni has been set to 1508
[    1.064985] io scheduler noop registered (default)
[    1.065376] mxc_sdc_fb mxc_sdc_fb.0: register mxc display driver ldb
[    1.094932] imx-sdma imx-sdma: loaded firmware 1.1
[    1.098507] imx-sdma imx-sdma: initialized
[    1.098854] Serial: IMX driver
[    1.098962] imx-uart imx-uart.0: Enable IRTS and CTSC
[    1.098986] imx-uart.0: ttymxc0 at MMIO 0x2020000 (irq = 58) is a IMX
[    1.099206] imx-uart imx-uart.1: Enable IRTS and CTSC
[    1.099230] imx-uart.1: ttymxc1 at MMIO 0x21e8000 (irq = 59) is a IMX
[    1.099271] console [ttymxc1] enabled, bootconsole disabled
[    1.099485] imx-uart imx-uart.2: Enable IRTS and CTSC
[    1.099506] imx-uart.2: ttymxc2 at MMIO 0x21ec000 (irq = 60) is a IMX
[    1.099724] imx-uart imx-uart.3: CTS Trigger Level: 24
[    1.099740] imx-uart imx-uart.3: RX Trigger Level: 16
[    1.099758] imx-uart.3: ttymxc3 at MMIO 0x21f0000 (irq = 61) is a IMX
[    1.099974] imx-uart imx-uart.4: Enable IRTS and CTSC
[    1.099996] imx-uart.4: ttymxc4 at MMIO 0x21f4000 (irq = 62) is a IMX
[    1.103615] m25p80 spi0.0: found mx25l6405d, expected s25fl064p
[    1.103635] m25p80 spi0.0: mx25l6405d (8192 Kbytes)
[    1.103651] Creating 9 MTD partitions on "m25p80":
[    1.103669] 0x000000000000-0x000000010000 : "bootstrap"
[    1.104633] 0x000000010000-0x000000020000 : "boot-select"
[    1.105504] 0x000000020000-0x000000040000 : "ibc1"
[    1.106419] 0x000000040000-0x000000060000 : "ibc2"
[    1.107328] 0x000000060000-0x000000070000 : "nv-config"
[    1.108244] 0x000000070000-0x0000000d0000 : "config"
[    1.109169] 0x0000000d0000-0x0000000e0000 : "jci-boot-diag"
[    1.110088] 0x0000000e0000-0x0000007e0000 : "fail-safe"
[    1.111034] 0x0000007e0000-0x000000800000 : "update"
[    1.112451] Fixed MDIO Bus: probed
[    1.112475] Initializing USB Mass Storage driver...
[    1.112571] usbcore: registered new interface driver usb-storage
[    1.112584] USB Mass Storage support registered.
[    1.112595] i2c /dev entries driver
[    1.113103] Linux video capture interface: v2.00
[    1.144496] mxc_v4l2_output mxc_v4l2_output.0: V4L2 device registered as video16
[    1.144658] mxc_v4l2_output mxc_v4l2_output.0: V4L2 device registered as video17
[    1.145582] VPU initialized
[    1.145658] vpu_mempool_init: Configuring buffers for 3 instances
[    1.228078] ALSA device list:
[    1.228089]   No soundcards found.
[    1.229659] TCP cubic registered
[    1.229674] NET: Registered protocol family 17
[    1.229710] Registering the dns_resolver key type
[    1.229794] VFP support v0.3: implementor 41 architecture 3 part 30 variant 9 rev 4
[    1.229937] Bus freq driver module loaded
[    1.229949] Bus freq driver Enabled
[    1.230009] mxc_dvfs_core_probe
[    1.230161] DVFS driver module loaded
[    1.230591] registered taskstats version 1
[    1.238514] [000.00:00:01.227368003], com.jci.cpp.common, 1, init, 1, out, Trace.c, COMMON_Trace_start 417, Registered the driver
[    1.238715] [000.00:00:01.227573003], com.jci.cpp.common, 1, init, 1, out, Trace.c, platformDeviceProbe 347, Probing!
[    1.238749] [000.00:00:01.227609336], com.jci.cpp.common, 1, init, 1, out, Trace.c, platformDeviceProbe 370, Registered the device
[    1.238783] [000.00:00:01.227643003], com.jci.cpp.common, 1, init, 1, out, Trace.c, COMMON_Trace_start 423, Registered the device
[    1.238808] [000.00:00:01.227668669], com.jci.cpp.common, 1, init, 1, out, common.c, moduleInit 206, Started: 0
[    1.238966] [000.00:00:01.227824336], com.jci.cpp.common, 1, init, 1, out, Log.c, COMMON_Log_start 4155, Registered the driver
[    1.239126] [000.00:00:01.227984669], com.jci.cpp.common, 1, init, 1, out, Log.c, platformDeviceProbe 3338, Probing!
[    1.240747] [000.00:00:01.229603336], com.jci.cpp.common, 1, init, 1, out, Log.c, platformDeviceProbe 3381, Registered the device
[    1.240904] [000.00:00:01.229760002], com.jci.cpp.common, 1, init, 1, out, Log.c, platformDeviceProbe 3396, Created the worker
[    1.240936] [000.00:00:01.229793669], com.jci.cpp.common, 1, init, 1, out, Log.c, platformDeviceProbe 3403, The process was awoken: True (1)
[    1.240961] [000.00:00:01.229823002], com.jci.cpp.common, 1, init, 1, out, Log.c, platformDeviceProbe 3439, Probed!
[    1.240997] [000.00:00:01.229857669], com.jci.cpp.common, 1, init, 1, out, Log.c, COMMON_Log_start 4162, Registered the device
[    1.241027] [000.00:00:01.229887669], com.jci.cpp.common, 1, init, 1, out, common.c, moduleInit 206, Started: 1
[    1.248441]
[    1.248445] Device Registered: lvds_cdrv
[    1.248460] Major number = 250, Minor number = 0
[    1.248700] input: LVDS TouchScreen as /devices/virtual/input/input0
[    1.249239] Running do_deferred_initcalls()
[    1.249419] IMX usb wakeup probe
[    1.249565] the wakeup pdata is 0xbfb82680
[    1.249958] squashfs: version 4.0 (2009/01/31) Phillip Lougher
[    1.249973] ehci_hcd: USB 2.0 'Enhanced' Host Controller (EHCI) Driver
[    1.250220] fsl-ehci fsl-ehci.0: Freescale On-Chip EHCI Host Controller
[    1.250260] fsl-ehci fsl-ehci.0: new USB bus registered, assigned bus number 1
[    1.268427] Number of times open() was called: 1
[    1.268442] MAJOR number = 250, MINOR number = 0
[    1.268453] Process id of the current process: 61
[    1.268463] ref=1
[    1.271235] fsl-ehci fsl-ehci.0: irq 75, io base 0x02184000
[    1.285507] [U] [        1.243691336] - xsg v4lcapture - starting up
[    1.285538] [U] [        1.274061669] - xsg v4lcapture - streaming on
[    1.291428] fsl-ehci fsl-ehci.0: USB 2.0 started, EHCI 1.00
[    1.291571] usb usb1: New USB device found, idVendor=1d6b, idProduct=0002
[    1.291588] usb usb1: New USB device strings: Mfr=3, Product=2, SerialNumber=1
[    1.291602] usb usb1: Product: Freescale On-Chip EHCI Host Controller
[    1.291615] usb usb1: Manufacturer: Linux 3.0.35 ehci_hcd
[    1.291626] usb usb1: SerialNumber: fsl-ehci.0
[    1.292407] hub 1-0:1.0: USB hub found
[    1.292442] hub 1-0:1.0: 1 port detected
[    1.292816] add wake up source irq 72
[    1.292890] fsl-ehci fsl-ehci.1: Freescale On-Chip EHCI Host Controller
[    1.292927] fsl-ehci fsl-ehci.1: new USB bus registered, assigned bus number 2
[    1.321198] fsl-ehci fsl-ehci.1: irq 72, io base 0x02184200
[    1.341178] fsl-ehci fsl-ehci.1: USB 2.0 started, EHCI 1.00
[    1.341333] usb usb2: New USB device found, idVendor=1d6b, idProduct=0002
[    1.341350] usb usb2: New USB device strings: Mfr=3, Product=2, SerialNumber=1
[    1.341365] usb usb2: Product: Freescale On-Chip EHCI Host Controller
[    1.341378] usb usb2: Manufacturer: Linux 3.0.35 ehci_hcd
[    1.341389] usb usb2: SerialNumber: fsl-ehci.1
[    1.341971] hub 2-0:1.0: USB hub found
[    1.342002] hub 2-0:1.0: 1 port detected
[    1.342401] Thermal calibration data is 0x5644c57d
[    1.342414] Thermal sensor with ratio = 177
[    1.361184] Anatop Thermal registered as thermal_zone0
[    1.361383] anatop_thermal_probe: default cooling device is cpufreq!
[    1.483334] caam caam.0: device ID = 0x0a16010000000000
[    1.483349] caam caam.0: job rings = 2, qi = 0
[    1.483739] caam caam.0: authenc-hmac-md5-cbc-aes-caam
[    1.483887] caam caam.0: authenc-hmac-sha1-cbc-aes-caam
[    1.484025] caam caam.0: authenc-hmac-sha224-cbc-aes-caam
[    1.484161] caam caam.0: authenc-hmac-sha256-cbc-aes-caam
[    1.484301] caam caam.0: authenc-hmac-md5-cbc-des3_ede-caam
[    1.484431] caam caam.0: authenc-hmac-sha1-cbc-des3_ede-caam
[    1.484562] caam caam.0: authenc-hmac-sha224-cbc-des3_ede-caam
[    1.484691] caam caam.0: authenc-hmac-sha256-cbc-des3_ede-caam
[    1.484822] caam caam.0: authenc-hmac-md5-cbc-des-caam
[    1.484958] caam caam.0: authenc-hmac-sha1-cbc-des-caam
[    1.485092] caam caam.0: authenc-hmac-sha224-cbc-des-caam
[    1.485224] caam caam.0: authenc-hmac-sha256-cbc-des-caam
[    1.485353] caam caam.0: cbc-aes-caam
[    1.485482] caam caam.0: cbc-3des-caam
[    1.485606] caam caam.0: cbc-des-caam
[    1.491013] platform caam_jr.0: registering rng-caam
[    1.493399] Datalight FlashFX Tera v2.1.1 Build 2128DF OS Services
[    1.493413] Linux kernel 2.6 Edition for arm -- Compiled Sep  6 2013 at 15:31:42
[    1.493425] Copyright (c) 1993-2012 Datalight, Inc.  All Rights Reserved Worldwide.
[    1.493438] All rights and obligations of GPL v2 apply.
[    1.494394] flashfx: module license 'Copyright (c) 1993-2012 Datalight, Inc.  All Rights Reserved Worldwide.' taints kernel.
[    1.494415] Disabling lock debugging due to kernel taint
[    1.503010] Datalight FlashFX Tera v2.1.1 Build 2128DF Block Device Driver
[    1.503025] Linux kernel 2.6 Edition for arm -- Compiled Sep  6 2013 at 15:31:39
[    1.503037] Copyright (c) 1993-2012 Datalight, Inc.  All Rights Reserved Worldwide.
[    1.503048] All rights and obligations of GPL v2 apply.
[    1.503263] Datalight FlashFX Tera v2.1.1 Build 2128DF
[    1.503270] Copyright (c) 1993-2012 Datalight, Inc.  All Rights Reserved Worldwide.
[    1.503277] Patents:  US#5860082, US#6260156.
[    1.503282] Linux kernel 2.6 Edition for arm -- Compiled Sep  6 2013 at 15:31:50
[    1.504963] ################################################
[    1.504979] ##                                            ##
[    1.504997] ##   FlashFX Tera SDK License ID: 1438932757  ##
[    1.505009] ##                                            ##
[    1.505020] ################################################
[    1.556100] Creating thread FTCMP00
[    1.557468]  ffx00: unknown partition table
[    2.422029] Creating thread FTCMP01
[    2.423535]  ffx01: p1 p2 p3 p4
[    2.426242] Datalight Reliance Nitro v2.7.1 Build 2175BA OS Services
[    2.426256] Linux Kernel Edition for arm -- Compiled Sep  6 2013 at 15:33:13
[    2.426269] Copyright (c) 2003-2013 Datalight, Inc.  All Rights Reserved Worldwide.
[    2.426280] All rights and obligations of GPL v2 apply.
[    2.449685] Datalight Reliance Nitro v2.7.1 Build 2175BA File System Driver
[    2.449701] Linux Kernel Edition for arm -- Compiled Sep  6 2013 at 15:32:11
[    2.449713] Copyright (c) 2003-2013 Datalight, Inc.  All Rights Reserved Worldwide.
[    2.449724] All rights and obligations of GPL v2 apply.
[    2.449750] Datalight Reliance Nitro v2.7.1 Build 2175BA
[    2.449765] Linux Kernel Edition for arm -- Compiled Sep  6 2013 at 15:32:19
[    2.449779] Copyright (c) 2003-2013 Datalight, Inc.  All Rights Reserved Worldwide.
[    2.449793] Patents:  US#7284101.
[    2.449797]
[    2.450050] Datalight Reliance Nitro v2.7.1 Build 2175BA driver initialization completed successfully
[    2.450289] WARNING: A volume is defined as using Block Device "/dev/ffx01p1", but
[    2.450307]          no definition was found in relconf.h.  Using the default settings.
[    2.450417] block device supports flush.
[    2.461215] ###########################################
[    2.461230] ##                                       ##
[    2.461247] ##   Reliance SDK License ID 7114895F    ##
[    2.461258] ##                                       ##
[    2.461269] ###########################################
[    2.531029] DclOsBlockDev:Ioctl() Old BlkSize=4096 Count=   122352 SecBlk=0 BlkShift=12
[    2.531048]                       New BlkSize=4096 Count=   122352 SecBlk=0 BlkShift=12
[    2.531071] Creating thread RelTransactionTimed
[    2.531252] VOL0 mounted in 90 milliseconds
[    3.016424] warning: process `init' used the deprecated sysctl system call with 2.5.
[    3.016573] warning: process `init' used the deprecated sysctl system call with 2.16.
[    3.182803] usbcore: registered new interface driver dsrc_acm
[    3.182820] dsrc_acm: v0.26:USB Abstract Control Model driver for USB modems and ISDN adapters
[    3.272034] WARNING: A volume is defined as using Block Device "/dev/ffx01p4", but
[    3.272053]          no definition was found in relconf.h.  Using the default settings.
[    3.321263] block device supports flush.
[    3.467689] sdhci: Secure Digital Host Controller Interface driver
[    3.467707] sdhci: Copyright(c) Pierre Ossman
[    3.504796] DclOsBlockDev:Ioctl() Old BlkSize=4096 Count=    78624 SecBlk=0 BlkShift=12
[    3.504815]                       New BlkSize=4096 Count=    78624 SecBlk=0 BlkShift=12
[    3.504836] Creating thread RelTransactionTimed
[    3.517869] VOL1 mounted in 190 milliseconds
[    3.579975] mmc0: no vmmc regulator found
[    3.582909] Powering on wl12xx
[    3.582961] mmc0: SDHCI controller on platform [sdhci-esdhc-imx.1] using DMA
[    3.584193] mmc1: no vmmc regulator found
[    3.593065] mmc1: SDHCI controller on platform [sdhci-esdhc-imx.2] using DMA
[    3.638112] mmc0: card claims to support voltages below the defined range. These will be ignored.
[    3.671815] mmc0: queuing unknown CIS tuple 0x91 (3 bytes)
[    3.678430] mmc0: new high speed SDIO card at address 0001
[    3.679175] Powering off wl12xx
[    4.195691] mmc1: Inserting CMD4 for drive strength of $02000000
[    4.244371] mmc1: new high speed DDR MMC card at address 0001
[    4.259747] mmcblk0: mmc1:0001 MMC04G 3.66 GiB
[    4.259994] mmcblk0boot0: mmc1:0001 MMC04G partition 1 1.00 MiB
[    4.260230] mmcblk0boot1: mmc1:0001 MMC04G partition 2 1.00 MiB
[    4.262490]  mmcblk0: p1 p2
[    4.264442] WARNING: A volume is defined as using Block Device "/dev/mmcblk0p2", but
[    4.264461]          no definition was found in relconf.h.  Using the default settings.
[    4.267926]  mmcblk0boot1: unknown partition table
[    4.269055] block device supports flush.
[    4.273448]  mmcblk0boot0: unknown partition table
[    4.303060] DclOsBlockDev:Ioctl() Old BlkSize= 512 Count=  1171952 SecBlk=0 BlkShift=9
[    4.303090]                       New BlkSize= 512 Count=  1171952 SecBlk=0 BlkShift=9
[    4.303121] Creating thread RelTransactionTimed
[    4.311284] VOL2 mounted in 50 milliseconds
[    5.263709] NET: Registered protocol family 10
>[    5.691323] udevd[129]: starting version 168
[    5.853661] [U] splashplayer started
[    5.853862] [U] splashplayer vpu_Init
[    5.918799] AIC310x Audio Codec 0.0.6
[    5.937227] asoc: aic310x <-> imx-ssi.0 mapping ok
[    5.976083] asoc: wl1285q-bt <-> imx-ssi.1 mapping ok
[    5.990194] [U] splashplayer vpu_Init done
[    6.054170] input: Virtual Keyboard as /devices/virtual/input/input1
[    6.055752] input: Virtual Mouse as /devices/virtual/input/input2
[    6.057799] cmu_io_ioctl: Pid : 109, gpio:42
[    6.062979] Level: Warn, File: GpioChip.c, Func: vimAttributeStore, Line: 1664, Message: Failed to find a pin named: Reverse
[    6.070539] misc usb_overcurrent: host1 over current SET
[    6.070602] misc usb_overcurrent: otg over current SET
[    6.096590] Level: Warn, File: GpioChip.c, Func: vimAttributeStore, Line: 1664, Message: Failed to find a pin named: Reverse
[    6.107277] Level: Warn, File: GpioChip.c, Func: vimAttributeStore, Line: 1664, Message: Failed to find a pin named: Reverse
[    6.111270] misc usb_overcurrent: host1 over current CLEARED
[    6.111293] misc usb_overcurrent: otg over current CLEARED
[    6.225844] [U] splashplayer init Wayland+EGL
[    6.392670] snvs_rtc snvs_rtc.0: rtc core: registered snvs_rtc as rtc0
[    6.531319] [U] splashplayer init Wayland+EGL done
[    6.535559] [U] splashplayer show first frame
[    6.539975] [U] splashplayer show first frame done
[    6.650231] /proc/kmsg created
[    6.650251] kmsg-filter loaded with loglevel=6
[    7.281181] rfkill: Bluetooth RF turn on
[    7.282889] mx6_bt_rfkill driver successful loaded!
[    9.320697] aic310x: Setting hardware rate to 48000
[    9.320711] aic310x: Setting hardware format to 2
[    9.756960] kmsg_filtered_open
[   10.510061] input: filtered-keyboard-0x0000000271C32E28 as /devices/virtual/input/input3
[   10.512418] input: filtered-mouse-0x0000000271E87F8B as /devices/virtual/input/input4
[   10.514767] input: filtered-touchscreen-0x00000002720C7693 as /devices/virtual/input/input5
[   11.704402] UYVY
[   11.740541] imx-ipuv3 imx-ipuv3.1: IPU Warning - IPU_INT_STAT_10 = 0x00000001
[   11.772756] UYVY
[   11.807278] imx-ipuv3 imx-ipuv3.1: IPU Warning - IPU_INT_STAT_10 = 0x00000001
[   11.876367] Attention: Writing register 0x0E, this register will be used internally.
[   11.877277] Attention: Writing register 0x0E, this register will be used internally.
[   11.877743] Attention: Writing register 0x4D, this register will be used internally.
[   11.878193] Attention: Writing register 0x50, this register will be used internally.
[   11.879086] Attention: Writing register 0xE1, this register will be used internally.
[   11.879530] Attention: Writing register 0xE2, this register will be used internally.
[   11.879970] Attention: Writing register 0x02, this register will be used internally.
[   11.880409] Attention: Writing register 0xE3, this register will be used internally.
[   11.880852] Attention: Writing register 0xE4, this register will be used internally.
[   14.941244] usb 2-1: new high speed USB device number 2 using fsl-ehci
[   15.091786] usb 2-1: New USB device found, idVendor=0424, idProduct=2640
[   15.091809] usb 2-1: New USB device strings: Mfr=0, Product=0, SerialNumber=0
[   15.092315] usb 2-1: Device is not authorized for usage
[   15.105402] hub 2-1:1.0: USB hub found
[   15.105969] hub 2-1:1.0: 3 ports detected
[   15.111969] usb 2-1: authorized to connect
[   26.312738] usb 2-1: USB disconnect, device number 2
[   27.801299] usb 2-1: new high speed USB device number 3 using fsl-ehci
[   27.951920] usb 2-1: New USB device found, idVendor=0424, idProduct=2640
[   27.951938] usb 2-1: New USB device strings: Mfr=0, Product=0, SerialNumber=0
[   27.952361] usb 2-1: Device is not authorized for usage
[   27.963229] hub 2-1:1.0: USB hub found
[   27.964309] hub 2-1:1.0: 3 ports detected
[   27.967782] usb 2-1: authorized to connect
[  112.013290] [sdhci_pre_dma_transfer] invalid cookie: data->host_cookie 177 host->next_data.cookie 178
[  112.318726] [sdhci_pre_dma_transfer] invalid cookie: data->host_cookie 259 host->next_data.cookie 260
[  112.330446] [sdhci_pre_dma_transfer] invalid cookie: data->host_cookie 267 host->next_data.cookie 268
[  112.375142] [sdhci_pre_dma_transfer] invalid cookie: data->host_cookie 330 host->next_data.cookie 331
[  112.395804] [sdhci_pre_dma_transfer] invalid cookie: data->host_cookie 342 host->next_data.cookie 343
[  112.586610] [sdhci_pre_dma_transfer] invalid cookie: data->host_cookie 450 host->next_data.cookie 451
[  114.974242] [sdhci_pre_dma_transfer] invalid cookie: data->host_cookie 649 host->next_data.cookie 650
[  131.611441] usb 2-1.2: new high speed USB device number 4 using fsl-ehci
[  131.722884] usb 2-1.2: New USB device found, idVendor=18d1, idProduct=4ee7
[  131.722905] usb 2-1.2: New USB device strings: Mfr=1, Product=2, SerialNumber=3
[  131.722919] usb 2-1.2: Product: Pixel 2
[  131.722929] usb 2-1.2: Manufacturer: Google
[  131.722940] usb 2-1.2: SerialNumber: FA7CK1A02396
[  131.723384] usb 2-1.2: Device is not authorized for usage
[  131.734075] usb 2-1.2: authorized to connect
[  131.887634] usb 2-1.2: USB disconnect, device number 4
[  132.201474] usb 2-1.2: new high speed USB device number 5 using fsl-ehci
[  132.312517] usb 2-1.2: New USB device found, idVendor=18d1, idProduct=2d01
[  132.312535] usb 2-1.2: New USB device strings: Mfr=1, Product=2, SerialNumber=3
[  132.312551] usb 2-1.2: Product: Pixel 2
[  132.312561] usb 2-1.2: Manufacturer: Google
[  132.312571] usb 2-1.2: SerialNumber: FA7CK1A02396
[  132.313017] usb 2-1.2: Device is not authorized for usage
[  132.325405] usb 2-1.2: authorized to connect
[  132.988817] [sdhci_pre_dma_transfer] invalid cookie: data->host_cookie 699 host->next_data.cookie 700
[  133.090806] [sdhci_pre_dma_transfer] invalid cookie: data->host_cookie 756 host->next_data.cookie 757
[  133.097168] [sdhci_pre_dma_transfer] invalid cookie: data->host_cookie 765 host->next_data.cookie 766
[  133.140698] [sdhci_pre_dma_transfer] invalid cookie: data->host_cookie 767 host->next_data.cookie 768
[  134.261245] input: mzd-uinput as /devices/virtual/input/input6
[  134.587254] [sdhci_pre_dma_transfer] invalid cookie: data->host_cookie 808 host->next_data.cookie 809
[  135.682179] imx-ipuv3 imx-ipuv3.1: ERR[0xbb6fce00-no:0xe830]ipu task_id:1 busy!
[  135.682199] imx-ipuv3 imx-ipuv3.1: ERR:[0xbb6fce00] no-0xe830 state: ipu busy
[  135.682240] imx-ipuv3 imx-ipuv3.1: ERR: [0xbb6fce00] no-0xe830,state 8: ipu busy
[  135.682256] imx-ipuv3 imx-ipuv3.1: ERR: no-0xe830,ipu_queue_task err:-125
[  141.811244] imx-ipuv3 imx-ipuv3.1: ERR[0xbb78c000-no:0xf9d0]ipu task_id:1 busy!
[  141.811264] imx-ipuv3 imx-ipuv3.1: ERR:[0xbb78c000] no-0xf9d0 state: ipu busy
[  141.811318] imx-ipuv3 imx-ipuv3.1: ERR: [0xbb78c000] no-0xf9d0,state 8: ipu busy
[  141.811334] imx-ipuv3 imx-ipuv3.1: ERR: no-0xf9d0,ipu_queue_task err:-125
[  141.811350] mxc_v4l2_output mxc_v4l2_output.0: display work fail ret = -125
[  141.841351] imx-ipuv3 imx-ipuv3.1: ERR[0xbb78c600-no:0xf9f0]ipu task_id:1 busy!
[  141.841381] imx-ipuv3 imx-ipuv3.1: ERR:[0xbb78c600] no-0xf9f0 state: ipu busy
[  141.841426] imx-ipuv3 imx-ipuv3.1: ERR: [0xbb78c600] no-0xf9f0,state 8: ipu busy
[  141.841445] imx-ipuv3 imx-ipuv3.1: ERR: no-0xf9f0,ipu_queue_task err:-125
[  141.841464] mxc_v4l2_output mxc_v4l2_output.0: display work fail ret = -125
/tmp/root # 00:02:37.000 BLM_TIME[492] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:02:37.002 BLM_TIME[492] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:02:37.885 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:02:37.888 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:37.896 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:02:37.899 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:38.527 VBS_BUS_CAN[308] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:02:38.527 VBS_BUS_CAN[308] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:02:38.527 VBS_BUS_CAN[308] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:02:38.527 VBS_BUS_CAN[308] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:02:38.912 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:02:38.915 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:38.929 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:02:38.929 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
netstat: fscanf
00:02:39.957 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:02:39.971 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:39.980 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:02:39.980 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:40.001 BLM_TIME[492] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:02:40.001 BLM_TIME[492] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:02:40.528 VBS_BUS_CAN[308] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:02:40.528 VBS_BUS_CAN[308] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:02:40.528 VBS_BUS_CAN[308] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:02:40.528 VBS_BUS_CAN[308] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:02:40.989 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:02:40.999 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:41.013 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:02:41.013 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:42.027 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:02:42.033 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:42.041 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:02:42.044 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:42.528 VBS_BUS_CAN[308] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:02:42.528 VBS_BUS_CAN[308] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:02:42.528 VBS_BUS_CAN[308] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:02:42.528 VBS_BUS_CAN[308] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:02:42.832 BLM_SETTINGS[372] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
00:02:43.001 BLM_TIME[492] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:02:43.003 BLM_TIME[492] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:02:43.057 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:02:43.062 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:43.074 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:02:43.074 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:44.086 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:02:44.093 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:44.102 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:02:44.102 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
netstat: fscanf
00:02:44.529 VBS_BUS_CAN[308] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:02:44.529 VBS_BUS_CAN[308] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:02:44.529 VBS_BUS_CAN[308] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:02:44.529 VBS_BUS_CAN[308] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:02:44.824 BLM_SETTINGS[372] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
00:02:45.118 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:02:45.128 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:45.138 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:02:45.138 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:46.000 BLM_TIME[492] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:02:46.002 BLM_TIME[492] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:02:46.149 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:02:46.157 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:46.166 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:02:46.166 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:46.529 VBS_BUS_CAN[308] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:02:46.529 VBS_BUS_CAN[308] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:02:46.529 VBS_BUS_CAN[308] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:02:46.529 VBS_BUS_CAN[308] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:02:46.826 BLM_SETTINGS[372] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
00:02:47.178 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:02:47.185 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:47.193 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:02:47.193 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:47.831 BLM_SETTINGS[372] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
00:02:48.204 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:02:48.210 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:48.218 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:02:48.222 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:48.529 VBS_BUS_CAN[308] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:02:48.529 VBS_BUS_CAN[308] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:02:48.529 VBS_BUS_CAN[308] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:02:48.529 VBS_BUS_CAN[308] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
s00:02:48.828 BLM_SETTINGS[372] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
00:02:49.000 BLM_TIME[492] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:02:49.001 BLM_TIME[492] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:02:49.230 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:02:49.236 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:49.247 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:02:49.247 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
mnetstat: fscanf

00:02:49.965 SM[8294] Info (sm.cpp:1086 main) SM alive!
00:02:49.969 SM[8294] Warn (sm_confparser.cpp:2546 SM_ReadConfigFile) SM loaded with default configuration file /jci/sm/sm.conf
00:02:49.997 SM[8294] Warn (sm_net.cpp:773 SM_NET_SocketServer) SM socket 4 can not be binded! Error: Address already in use
00:02:49.998 SM[8294] Error (sm_net.cpp:791 SM_NET_SocketServer) SM_NET_SocketServer server: failed to bind
00:02:50.276 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:02:50.283 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:50.296 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:02:50.296 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:50.531 VBS_BUS_CAN[308] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:02:50.531 VBS_BUS_CAN[308] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:02:50.531 VBS_BUS_CAN[308] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:02:50.531 VBS_BUS_CAN[308] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:02:50.832 BLM_SETTINGS[372] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
00:02:51.309 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:02:51.316 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:51.330 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:02:51.330 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:51.822 BLM_SETTINGS[372] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
00:02:52.000 BLM_TIME[492] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:02:52.002 BLM_TIME[492] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:02:52.343 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:02:52.347 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:52.359 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:02:52.359 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:52.531 VBS_BUS_CAN[308] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:02:52.531 VBS_BUS_CAN[308] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:02:52.531 VBS_BUS_CAN[308] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:02:52.531 VBS_BUS_CAN[308] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:02:52.996 SM[8294] Warn (SmServerInitializer.hpp:55 wait) Waiting server initialization timeouted (3000 ms)
00:02:52.998 SM[8294] Warn (sm_net.cpp:773 SM_NET_SocketServer) SM socket 4 can not be binded! Error: Address already in use
00:02:52.999 SM[8294] Error (sm_net.cpp:791 SM_NET_SocketServer) SM_NET_SocketServer server: failed to bind
00:02:53.370 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:02:53.377 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:53.386 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:02:53.386 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:53.818 BLM_SETTINGS[372] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
00:02:54.398 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:02:54.404 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:54.412 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:02:54.415 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:54.533 VBS_BUS_CAN[308] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:02:54.533 VBS_BUS_CAN[308] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:02:54.533 VBS_BUS_CAN[308] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:02:54.533 VBS_BUS_CAN[308] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
netstat: fscanf
00:02:55.000 BLM_TIME[492] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:02:55.002 BLM_TIME[492] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:02:55.432 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:02:55.435 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:55.447 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:02:55.447 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:55.997 SM[8294] Warn (SmServerInitializer.hpp:55 wait) Waiting server initialization timeouted (3000 ms)
00:02:55.999 SM[8294] Info (sm.cpp:3978 SM_SetProcessPriority) Service with pid (8294) launched with policy SCHED_OTHER nice value -5
00:02:55.999 SM[8294] Info (sm.cpp:1245 main) SM initialized!
00:02:56.005 SM[8294] Info (sm.cpp:1283 main) SM Starting!
00:02:56.026 SM[8294] Info (sm.cpp:1297 main) SM monitoring...
DSP configuration file found.
ALSA configuration file found. No config required.
00:02:56.086 SM[8294] Info (sm.cpp:811 sm_ActionsForStoppedService) Svc stage_1[8607] stopped!
00:02:56.118 SM[8294] Info (sm.cpp:811 sm_ActionsForStoppedService) Svc audio_config[8603] stopped!
00:02:56.118 SM[8294] Warn (sm.cpp:896 sm_ActionsForStoppedService) Unlinking file ptr->ready_flag /var/run/audio_config
00:02:56.139 SM[8294] Info (sm.cpp:811 sm_ActionsForStoppedService) Svc dsp_config[8604] stopped!
00:02:56.139 SM[8294] Warn (sm.cpp:896 sm_ActionsForStoppedService) Unlinking file ptr->ready_flag /var/run/dsp_config
00:02:56.217 SM[214] Error (sm_sockserver.cpp:1178 SM_SRVR_cmd_handshake_action) config_node->sock_element was not NULL in handshaking
00:02:56.217 SM[214] Error (sm_sockserver.cpp:1179 SM_SRVR_cmd_handshake_action) sock 13 name system_mazda_my14
00:02:56.239 SM[214] Error (sm_sockserver.cpp:1178 SM_SRVR_cmd_handshake_action) config_node->sock_element was not NULL in handshaking
00:02:56.239 SM[214] Error (sm_sockserver.cpp:1179 SM_SRVR_cmd_handshake_action) sock 5 name jciVideoctrl
00:02:56.270 SM[214] Error (sm_sockserver.cpp:1178 SM_SRVR_cmd_handshake_action) config_node->sock_element was not NULL in handshaking
00:02:56.270 SM[214] Error (sm_sockserver.cpp:1179 SM_SRVR_cmd_handshake_action) sock 14 name settings
00:02:56.283 SM[214] Error (sm_sockserver.cpp:1178 SM_SRVR_cmd_handshake_action) config_node->sock_element was not NULL in handshaking
00:02:56.283 SM[214] Error (sm_sockserver.cpp:1179 SM_SRVR_cmd_handshake_action) sock 8 name jciNativegui
00:02:56.312 SM[214] Warn (sm_sockserver.cpp:1528 SM_SRVR_cmd_starting_action) not a valid state change request svc settings state 3
00:02:56.315 com.jci.cpp.settings.local[8617] Info (Server.cpp:2344 createRecord) Loading the record corresponding to: "server://"
00:02:56.346 SM[214] Warn (sm_sockserver.cpp:1528 SM_SRVR_cmd_starting_action) not a valid state change request svc jciVideoctrl state 3
00:02:56.346 VIDEOCTRL[8606] Info (vctrl_sm_interface.c:93 ServiceInit) Initializing VIDEOCTRL Service
00:02:56.358 VIDEOCTRL[8606] Info (vctrl_gpio.c:150 DayNightSensor_th) Display Day/Night is not on AUTO. No action taken
00:02:56.360 VIDEOCTRL[8606] Info (vctrl_xml.c:506 VCTRL_XML_Open) XML file loaded successfully
00:02:56.360 VIDEOCTRL[8606] Info (vctrl_xml.c:92 vctrl_loadSettingsData) Number of devices = 3
00:02:56.360 VIDEOCTRL[8606] Info (vctrl_xml.c:135 vctrl_extractDeviceSettings) Device = buc -- device ID = 0, device input = 0
00:02:56.360 VIDEOCTRL[8606] Info (vctrl_xml.c:135 vctrl_extractDeviceSettings) Device = dvd -- device ID = 1, device input = 1
00:02:56.360 VIDEOCTRL[8606] Info (vctrl_xml.c:135 vctrl_extractDeviceSettings) Device = tv -- device ID = 2, device input = 1
00:02:56.360 VIDEOCTRL[8606] Info (vctrl_xml.c:48 VCTRL_XML_ReadSettingsXML) Successfully loaded and parsed video_settings.xml!
mkdir: can't create directory '/tmp/dbus': File exists
00:02:56.364 SM[214] Warn (sm_sockserver.cpp:1528 SM_SRVR_cmd_starting_action) not a valid state change request svc system_mazda_my14 state 3
00:02:56.391 SYSTEM[8608] Error (DbusConnection.hpp:226 connect) Status: STATUS_FAILED (as 104): Using D-Bus connection failed!
00:02:56.430 VIDEOCTRL[8606] Info (vctrl_v4lcapture.c:843 dbus_connect)  (843) CDBusClientBase::connect - address: unix:path=/tmp/dbus_hmi_socket
00:02:56.435 NATIVEGUI[8613] Info (natgui.c:609 ServiceInit) SM Initilizing Service Native GUI.
00:02:56.435 NATIVEGUI[8613] Info (natgui.c:771 NatG_Initialize) Success in initializing queue for NATGUI
00:02:56.435 SM[214] Warn (sm_sockserver.cpp:1528 SM_SRVR_cmd_starting_action) not a valid state change request svc jciNativegui state 3
00:02:56.441 NATIVEGUI[8613] Info (natgui_settings_mgr.c:110 NatG_Settings_Init) NVRAM_Block_getValue return the currentLanguage = 0
00:02:56.441 NATIVEGUI[8613] Info (natgui.c:780 NatG_Initialize) Success in initializing settings
00:02:56.441 NATIVEGUI[8613] Info (natgui.c:789 NatG_Initialize) Success in initializing wayland window wrapper
00:02:56.441 Std[] Error (: ) surface with id 'NATGUI_SURFACE' already exists
00:02:56.447 NATIVEGUI[8613] Info (natgui_surface_mgr.c:590 NatG_Redraw_Widget_Handler) NatG_Redraw_Widget_Handler
00:02:56.447 NATIVEGUI[8613] Info (natgui.c:1187 NatG_GetImageDetails) Image = IMG_BANNER (78), [/jci/nativegui/images/SafetyText_US_English.png : (0, 433)], Language = 0
00:02:56.455 VIDEOCTRL[8606] Error (vctrl_v4lcapture.c:887 dbus_connect) CDBusClientBase::connect - Not Primary Owner ret: 2
00:02:56.455 com.jci.cpp.settings[8617] Note (RegistryFactory.cpp:123 createRegistry) Startup time: 00:00:00.136231333
00:02:56.455 com.jci.cpp.net[8617] Info (ServerSocket.cpp:128 bind) Here
00:02:56.455 com.jci.cpp.net[8617] Info (ServerSocket.cpp:145 bind) Here
00:02:56.455 com.jci.cpp.net[8617] Info (ServerSocket.cpp:254 getSocketImpl) Here
00:02:56.455 com.jci.cpp.net[8617] Info (ServerSocket.cpp:261 getSocketImpl) Here
00:02:56.455 com.jci.cpp.net[8617] Info (ServerSocket.cpp:265 getSocketImpl) Here
00:02:56.455 com.jci.cpp.net[8617] Info (ServerSocket.cpp:280 getSocketImpl) Here
00:02:56.455 com.jci.cpp.net[8617] Info (DefaultSocketImpl.cpp:176 socketBind) Binding: 127.0.0.1:5000
00:02:56.455 com.jci.cpp.net[8617] Note (DefaultSocketImpl.cpp:189 socketBind) Bound to "127.0.0.1:5000" with return value -1 and error: Address already in use (98)
00:02:56.455 com.jci.cpp.settings[8617] Error (Service.cpp:372 initialize) Caught com::jci::cpp::io::IoException on line 242 in function socketBind of file com/jci/cpp/net/DefaultSocketImpl.cpp with message: The file does not exist # 0  0x2B05D1DC  com::jci::cpp::net::DefaultSocketImpl::socketBind(com::jci::cpp::common::O<com::jci::cpp::net::SocketAddress> const&) # 1  0x2AFD0DD8  com::jci::cpp::net::AbstractSocketImpl::bind(com::jci::cpp::common::O<com::jci::cpp::net::SocketAddress> const&) # 2  0x2AFED9D8  com::jci::cpp::net::ServerSocket::bind(com::jci::cpp::common::O<com::jci::cpp::net::SocketAddress> const&, unsigned short const&) # 3  0x2B529714   # 4  0x2B58D358   # 5  0x2B49D4BC   # 6  0x0002241C   # 7  0x000299FC   # 8  0x2AD494E4  __libc_start_main
00:02:56.468 SM[8617] Warn (sm_svclauncher.cpp:221 sm_svclauncher_ThreadHandler) Service init_cb function returned: -32 for svc settings.
00:02:56.472 NATIVEGUI[8613] Error (natgui_interface.c:112 NatG_Init_Hmi_DBus) Failed to connect to HMI DBUS
00:02:56.472 NATIVEGUI[8613] Error (natgui.c:795 NatG_Initialize) Failed to create HMI dbus connection for NATGUI
00:02:56.472 NATIVEGUI[8613] Error (natgui.c:619 ServiceInit) Failed in initilizing the Service Native GUI
00:02:56.472 SM[8613] Warn (sm_svclauncher.cpp:221 sm_svclauncher_ThreadHandler) Service init_cb function returned: 1 for svc jcinativegui.
00:02:56.472 NATIVEGUI[8613] Info (natgui.c:667 ServiceTerm) Terminating RADIO Service
00:02:56.472 NATIVEGUI[8613] Info (natgui.c:898 natg_Destroy_SM_Client) natg_Destroy_SM_Client.
00:02:56.479 SM[214] Info (sm_sockserver.cpp:1661 SM_SRVR_cmd_stop_action) Waiting for processs 271 to exit...
00:02:56.485 SM[214] Info (sm_sockserver.cpp:1661 SM_SRVR_cmd_stop_action) Waiting for processs 272 to exit...
00:02:56.496 SM[8294] Error (sm.cpp:1428 main) Process "jciNativegui" (8613) exited with status 0
00:02:56.496 SM[8294] Info (sm_eventbroker.cpp:589 sm_evt_ReportGenerator) Console report command /bin/cat /tmp/smevents.txt
00:02:56.496 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:02:56.496 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:56.496 NATGUICTRL[122] Info (ivi-shell-utils.c:195 ivi_surface_registered) Surface 8613-3 registered and it is not managed
00:02:56.496 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:02:56.496 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThreaPID,Component,Event,Timestamp
Not available,ServiceManager,SM_SERVER_CMD_START_NOTIFY_STAT,7.555
Not available,ServiceManager,SM_SERVER_CMD_INIT,7.555
Not available,ServiceManager,SM_SERVER_CMD_STARTING,7.555
Not available,audio_config,SM_SVC_CMD_START,7.907
259,audio_config,SM_SVC_CMD_STARTING,7.97
148,dbus_hmi,SM_SVC_CMD_STARTED,7.971
151,dbus_service,SM_SVC_CMD_STARTED,7.971
Not available,dsp_config,SM_SVC_CMD_START,7.971
260,dsp_config,SM_SVC_CMD_STARTING,8
263,jciVideoctrl,SM_SVC_CMD_START,8.057
61,lvds_service,SM_SVC_CMD_STARTED,8.057
122,nativeguictrl,SM_SVC_CMD_STARTED,8.058
Not available,stage_1,SM_SVC_CMD_START,8.058
264,stage_1,SM_SVC_CMD_STARTED,8.113
268,system_mazda_my14,SM_SVC_CMD_START,8.117
109,vim_app,SM_SVC_CMD_STARTED,8.117
259,audio_config,SM_SVC_CMD_STARTED,8.148
Not available,audio_start,SM_SVC_CMD_START,8.148
270,audio_start,SM_SVC_CMD_STARTING,8.2
260,dsp_config,SM_SVC_CMD_STARTED,8.2
271,jciNativegui,SM_SVC_CMD_START,8.201
272,settings,SM_SVC_CMD_START,8.202
271,jciNativegui,SM_SVC_HANDSHAKE_DONE,8.346
263,jciVideoctrl,SM_SVC_HANDSHAKE_DONE,8.347
268,system_mazda_my14,SM_SVC_HANDSHAKE_DONE,8.383
272,settings,SM_SVC_HANDSHAKE_DONE,8.387
272,settings,SM_SVC_CMD_STARTING,9.109
272,settings,SM_SVC_CMD_STARTED,9.673
307,devices,SM_SVC_CMD_START,9.678
308,jciVBS,SM_SVC_CMD_START,9.68
270,audio_start,SM_SVC_CMD_STARTED,9.682
263,jciVideoctrl,SM_SVC_CMD_STARTING,9.722
271,jciNativegui,SM_SVC_CMD_STARTING,9.744
307,devices,SM_SVC_HANDSHAKE_DONE,9.824
308,jciVBS,SM_SVC_HANDSHAKE_DONE,9.893
308,jciVBS,SM_SVC_CMD_STARTING,9.975
268,system_mazda_my14,SM_SVC_CMD_STARTING,10.126
271,jciNativegui,SM_SVC_CMD_STARTED,10.139
340,jciBUCPSA,SM_SVC_CMD_START,10.171
307,devices,SM_SVC_CMD_STARTING,10.242
268,system_mazda_my14,SM_SVC_CMD_STARTED,10.292
340,jciBUCPSA,SM_SVC_HANDSHAKE_DONE,10.298
263,jciVideoctrl,SM_SVC_CMD_STARTED,10.469
340,jciBUCPSA,SM_SVC_CMD_STARTING,10.51
307,devices,SM_SVC_CMD_STARTED,10.521
372,jciBLMSettings,SM_SVC_CMD_START,10.536
340,jciBUCPSA,SM_SVC_CMD_STARTED,10.562
372,jciBLMSettings,SM_SVC_HANDSHAKE_DONE,10.78
372,jciBLMSettings,SM_SVC_CMD_STARTING,11.142
372,jciBLMSettings,SM_SVC_CMD_STARTED,11.355
Not available,stage_2,SM_SVC_CMD_START,11.358
422,stage_2,SM_SVC_CMD_STARTED,11.379
434,jciAppsdk,SM_SVC_CMD_START,11.407
437,jciDbapi,SM_SVC_CMD_START,11.442
439,jciTime,SM_SVC_CMD_START,11.459
437,jciDbapi,SM_SVC_HANDSHAKE_DONE,11.786
434,jciAppsdk,SM_SVC_HANDSHAKE_DONE,11.79
439,jciTime,SM_SVC_HANDSHAKE_DONE,11.791
439,jciTime,SM_SVC_CMD_STARTING,12.011
439,jciTime,SM_SVC_CMD_STARTED,12.069
492,jciBLMTIME,SM_SVC_CMD_START,12.083
434,jciAppsdk,SM_SVC_CMD_STARTING,12.234
437,jciDbapi,SM_SVC_CMD_STARTING,12.243
437,jciDbapi,SM_SVC_CMD_STARTED,12.383
308,jciVBS,SM_SVC_CMD_STARTED,12.47
533,jciTestDiag,SM_SVC_CMD_START,12.523
535,jciusbdtc,SM_SVC_CMD_START,12.538
Not available,xsesvc2dbus_service,SM_SVC_CMD_START,12.538
492,jciBLMTIME,SM_SVC_HANDSHAKE_DONE,12.569
538,xsesvc2dbus_service,SM_SVC_CMD_STARTING,12.613
Not available,xsesvc2dbus_tau,SM_SVC_CMD_START,12.614
545,xsesvc2dbus_tau,SM_SVC_CMD_STARTING,12.635
538,xsesvc2dbus_service,SM_SVC_CMD_STARTED,12.738
Not available,audio_amplifier,SM_SVC_CMD_START,12.759
549,audio_amplifier,SM_SVC_CMD_STARTING,12.78
Not available,audio_control,SM_SVC_CMD_START,12.78
551,audio_control,SM_SVC_CMD_STARTING,12.793
545,xsesvc2dbus_tau,SM_SVC_CMD_STARTED,12.793
434,jciAppsdk,SM_SVC_CMD_STARTED,12.972
Not available,Opera,SM_SVC_CMD_START,12.979
567,Opera,SM_SVC_CMD_STARTED,13.049
492,jciBLMTIME,SM_SVC_CMD_STARTING,13.12
533,jciTestDiag,SM_SVC_HANDSHAKE_DONE,13.24
535,jciusbdtc,SM_SVC_HANDSHAKE_DONE,13.265
492,jciBLMTIME,SM_SVC_CMD_STARTED,13.404
613,jciTds,SM_SVC_CMD_START,13.428
535,jciusbdtc,SM_SVC_CMD_STARTING,13.525
535,jciusbdtc,SM_SVC_CMD_STARTED,13.625
613,jciTds,SM_SVC_HANDSHAKE_DONE,13.742
533,jciTestDiag,SM_SVC_CMD_STARTING,13.873
533,jciTestDiag,SM_SVC_CMD_STARTED,14.11
613,jciTds,SM_SVC_CMD_STARTING,14.137
551,audio_control,SM_SVC_CMD_STARTED,15.075
Not available,audio_manager,SM_SVC_CMD_START,15.076
770,audio_manager,SM_SVC_CMD_STARTING,15.104
549,audio_amplifier,SM_SVC_CMD_STARTED,15.482
770,audio_manager,SM_SVC_CMD_STARTED,15.998
836,jciauxin,SM_SVC_CMD_START,16.024
837,jciCD,SM_SVC_CMD_START,16.031
838,jciDAB,SM_SVC_CMD_START,16.04
839,jcixm,SM_SVC_CMD_START,16.043
837,jciCD,SM_SVC_HANDSHAKE_DONE,16.471
838,jciDAB,SM_SVC_HANDSHAKE_DONE,16.473
839,jcixm,SM_SVC_HANDSHAKE_DONE,16.478
836,jciauxin,SM_SVC_HANDSHAKE_DONE,16.479
837,jciCD,SM_SVC_CMD_STARTING,16.678
836,jciauxin,SM_SVC_CMD_STARTING,16.685
836,jciauxin,SM_SVC_CMD_STARTED,16.794
837,jciCD,SM_SVC_CMD_STARTED,16.834
838,jciDAB,SM_SVC_CMD_STARTING,16.899
839,jcixm,SM_SVC_CMD_STARTING,16.976
838,jciDAB,SM_SVC_CMD_STARTED,17.041
839,jcixm,SM_SVC_CMD_STARTED,17.175
268,system_mazda_my14,SM_SVC_HANDSHAKE_DONE,176.216
263,jciVideoctrl,SM_SVC_HANDSHAKE_DONE,176.238
272,settings,SM_SVC_HANDSHAKE_DONE,176.269
271,jciNativegui,SM_SVC_HANDSHAKE_DONE,176.282
271,jciNativegui,SM_SVC_HANDSHAKE_DONE,176.649
271,jciNativegui,SM_SVC_CMD_STARTING,176.704
d|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:56.496 SM[8294] Info (sm.cpp:811 sm_ActionsForStoppedService) Svc jciNativegui[8613] stopped!
00:02:56.496 VBS_BUS_CAN[308] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:02:56.496 VBS_BUS_CAN[308] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:02:56.496 VBS_BUS_CAN[308] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:02:56.496 VBS_BUS_CAN[308] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:02:56.496 VIDEOCTRL[8606] Info (vctrl_service_core.cpp:66 VCTRL_CORE_InitializeConstSettings) Setting Constant settings for device 0
00:02:56.496 VIDEOCTRL[8606] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:02:56.496 VIDEOCTRL[8606] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:02:56.496 VIDEOCTRL[8606] Error (vctrl_v4lcapture.c:300 VCTRL2V4LCAPTURE_setRegisterSubmap2) Failed to Open Submap 2
00:02:56.496 VIDEOCTRL[8606] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:02:56.496 VIDEOCTRL[8606] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:02:56.496 VIDEOCTRL[8606] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:02:56.496 VIDEOCTRL[8606] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:02:56.496 VIDEOCTRL[8606] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:02:56.496 VIDEOCTRL[8606] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:02:56.496 VIDEOCTRL[8606] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:02:56.496 VIDEOCTRL[8606] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:02:56.496 VIDEOCTRL[8606] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:02:56.496 VIDEOCTRL[8606] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:02:56.496 VIDEOCTRL[8606] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:02:56.496 VIDEOCTRL[8606] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:02:56.496 VIDEOCTRL[8606] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:02:56.496 VIDEOCTRL[8606] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:02:56.496 VIDEOCTRL[8606] Info (vctrl_service_core.cpp:110 VCTRL_CORE_GetDayNightMode) Value read from NVRAM day for node 'lvds_bright_mode'
00:02:56.496 VIDEOCTRL[8606] Info (vctrl_settings.c:237 BLM_VCTRL_OnChange_DayNight_Callback) DayNight Changed - value: DAY
00:02:56.496 VIDEOCTRL[8606] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setBrightness
00:02:56.496 VIDEOCTRL[8606] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setBrightness
00:02:56.496 VIDEOCTRL[8606] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:02:56.496 VIDEOCTRL[8606] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:02:56.496 VIDEOCTRL[8606] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setContrast
00:02:56.496 VIDEOCTRL[8606] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setContrast
00:02:56.496 VIDEOCTRL[8606] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:02:56.496 VIDEOCTRL[8606] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:02:56.496 VIDEOCTRL[8606] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setHue
00:02:56.496 VIDEOCTRL[8606] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setHue
00:02:56.496 VIDEOCTRL[8606] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:02:56.496 VIDEOCTRL[8606] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:02:56.496 VIDEOCTRL[8606] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:02:56.496 VIDEOCTRL[8606] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:02:56.496 VIDEOCTRL[8606] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:02:56.496 VIDEOCTRL[8606] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:02:56.496 VIDEOCTRL[8606] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:02:56.496 VIDEOCTRL[8606] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:02:56.496 VIDEOCTRL[8606] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:02:56.496 VIDEOCTRL[8606] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:02:56.496 VIDEOCTRL[8606] Info (vctrl_settings.c:95 VCTRL2BLM_SETTINGS_UpdateIsNight) LOADED NEW VIDEO SETTINGS
00:02:56.496 VIDEOCTRL[8606] Info (vctrl_service_core.cpp:89 VCTRL_CORE_UpdateAllOtherSettings) Updating settings for device dvd
00:02:56.496 VIDEOCTRL[8606] Info (vctrl_service_core.cpp:89 VCTRL_CORE_UpdateAllOtherSettings) Updating settings for device tv
00:02:56.496 VIDEOCTRL[8606] Info (vctrl_settings.c:102 VCTRL2BLM_SETTINGS_UpdateIsNight) Sent new video settings to MMUI
00:02:56.604 SM[8606] Warn (sm_svclauncher.cpp:221 sm_svclauncher_ThreadHandler) Service init_cb function returned: 1 for svc jciVideoctrl.
00:02:56.604 BLM_SETTINGS[8606] Info (settings_client_funs.cpp:880 BLM_SETTINGS_Client_ExtDisconnect) BLM_SETTINGS_Client_ExtDisconnect
00:02:56.604 BLM_SETTINGS[8606] Error (settings_client_funs.cpp:900 BLM_SETTINGS_Client_ExtDisconnect) client is NOT connected conn:(nil)
00:02:56.604 SM[214] Info (sm_sockserver.cpp:1661 SM_SRVR_cmd_stop_action) Waiting for processs 263 to exit...
00:02:56.636 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 556, Message: version: 55.00.753A, length 16
00:02:56.641 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 639, Message: LOCK FILE NAME /var/lock/LCK8606.core
00:02:56.650 SM[214] Error (sm_sockserver.cpp:1178 SM_SRVR_cmd_handshake_action) config_node->sock_element was not NULL in handshaking
00:02:56.650 SM[214] Error (sm_sockserver.cpp:1179 SM_SRVR_cmd_handshake_action) sock 8 name jciNativegui
00:02:56.704 NATIVEGUI[8674] Info (natgui.c:609 ServiceInit) SM Initilizing Service Native GUI.
00:02:56.704 NATIVEGUI[8674] Info (natgui.c:771 NatG_Initialize) Success in initializing queue for NATGUI
00:02:56.706 NATIVEGUI[8674] Info (natgui_settings_mgr.c:110 NatG_Settings_Init) NVRAM_Block_getValue return the currentLanguage = 0
00:02:56.706 NATIVEGUI[8674] Info (natgui.c:780 NatG_Initialize) Success in initializing settings
00:02:56.707 Std[] Error (: ) surface with id 'NATGUI_SURFACE' already exists
00:02:56.707 NATIVEGUI[8674] Info (natgui.c:789 NatG_Initialize) Success in initializing wayland window wrapper
00:02:56.711 NATIVEGUI[8674] Info (natgui_surface_mgr.c:590 NatG_Redraw_Widget_Handler) NatG_Redraw_Widget_Handler
00:02:56.711 NATIVEGUI[8674] Info (natgui.c:1187 NatG_GetImageDetails) Image = IMG_BANNER (78), [/jci/nativegui/images/SafetyText_US_English.png : (0, 433)], Language = 0
00:02:56.711 NATIVEGUI[8674] Error (natgui_interface.c:112 NatG_Init_Hmi_DBus) Failed to connect to HMI DBUS
00:02:56.711 NATIVEGUI[8674] Error (natgui.c:795 NatG_Initialize) Failed to create HMI dbus connection for NATGUI
00:02:56.711 NATIVEGUI[8674] Error (natgui.c:619 ServiceInit) Failed in initilizing the Service Native GUI
00:02:56.711 SM[8674] Warn (sm_svclauncher.cpp:221 sm_svclauncher_ThreadHandler) Service init_cb function returned: 1 for svc jcinativegui.
00:02:56.711 NATIVEGUI[8674] Info (natgui.c:667 ServiceTerm) Terminating RADIO Service
00:02:56.711 NATIVEGUI[8674] Info (natgui.c:898 natg_Destroy_SM_Client) natg_Destroy_SM_Client.
00:02:56.711 SM[214] Info (sm_sockserver.cpp:1661 SM_SRVR_cmd_stop_action) Waiting for processs 271 to exit...
00:02:56.804 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 766, Message: [1;31mProcess 8606 ("L_jciVideoctrl") abnormally exited due to signal SIGSEGV (11) with core file: /data_persist/log/dumps/core566-L_jciVideoctrl-SIGSEGV(11)-8606-176-55.00.753A.core.bz2[0m
00:02:56.828 BLM_SETTINGS[372] Info (settings_service_funs.cpp:474 CheckForOnChangedAction) checking for OnChange registrations for /2/com/jci/blm/settings/Vehicle/Voltage
00:02:56.938 SM[214] Warn (sm_net.cpp:962 SM_NET_SocketListener) Service Manager SocketListener recv failed! Error: Connection reset by peer
00:02:57.246 SM[8294] Error (sm_eventbroker.cpp:594 sm_evt_ReportGenerator) Shell has not been loaded so command /bin/cat /tmp/smevents.txt failed
00:02:57.246 SM[8294] Info (sm_eventbroker.cpp:556 sm_evt_ReportGenerator) Export command /bin/ps -a > /data/ps_info.out &
00:02:57.265 SM[8294] Error (sm_eventbroker.cpp:561 sm_evt_ReportGenerator) Shell has not been loaded so command /bin/ps -a > /data/ps_info.out & failed
00:02:57.265 SM[8294] Info (sm_eventbroker.cpp:556 sm_evt_ReportGenerator) Export command /usr/bin/top -b -n 1 > /data/top_info.out &
00:02:57.279 SM[8294] Error (sm_eventbroker.cpp:561 sm_evt_ReportGenerator) Shell has not been loaded so command /usr/bin/top -b -n 1 > /data/top_info.out & failed
00:02:57.279 SM[8294] Info (sm_eventbroker.cpp:556 sm_evt_ReportGenerator) Export command /usr/bin/thread_info  > /data/thread_info.out &
00:02:57.333 SM[8294] Error (sm_eventbroker.cpp:561 sm_evt_ReportGenerator) Shell has not been loaded so command /usr/bin/thread_info  > /data/thread_info.out & failed
00:02:57.333 SM[8294] Info (sm_eventbroker.cpp:589 sm_evt_ReportGenerator) Console report command /jci/scripts/wait_core_finished.sh
00:02:57.601 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:02:57.605 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:57.615 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:02:57.615 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:58.000 BLM_TIME[492] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:02:58.002 BLM_TIME[492] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:02:58.557 VBS_BUS_CAN[308] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:02:58.557 VBS_BUS_CAN[308] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:02:58.557 VBS_BUS_CAN[308] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:02:58.557 VBS_BUS_CAN[308] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:02:58.667 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:02:58.675 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:58.684 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:02:58.684 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:59.474 SM[214] Error (sm.cpp:475 sm_HandleSvcStoppedTimeout) Service jciNativegui was not stopped during timeout (3000 ms)!
00:02:59.476 SM[214] Info (sm.cpp:477 sm_HandleSvcStoppedTimeout) Killing pid 271 with signal 9 (SIGKILL)...
00:02:59.477 SM[214] Info (sm.cpp:484 sm_HandleSvcStoppedTimeout) Wait pid 271 to return explicitly to avoid zombie exit
00:02:59.482 Std[] Info (: ) Surface NATGUI_SURFACE unregistered
00:02:59.490 SM[214] Info (sm_sockserver.cpp:1664 SM_SRVR_cmd_stop_action) Process 271 exited!
00:02:59.490 SM[214] Info (sm_sockserver.cpp:1664 SM_SRVR_cmd_stop_action) Process 271 exited!
00:02:59.492 SM[214] Error (sm.cpp:475 sm_HandleSvcStoppedTimeout) Service settings was not stopped during timeout (3000 ms)!
00:02:59.494 SM[214] Info (sm.cpp:477 sm_HandleSvcStoppedTimeout) Killing pid 272 with signal 9 (SIGKILL)...
00:02:59.502 com.jci.cpp.settings.socket[372] Info (SocketRegistry.cpp:971 run) The socket closed
00:02:59.502 com.jci.cpp.settings.socket[307] Info (SocketRegistry.cpp:971 run) The socket closed
00:02:59.502 com.jci.cpp.settings.socket[372] Info (Channel.cpp:95 close) Closing descriptor: 23
00:02:59.502 com.jci.cpp.settings.socket[307] Info (Channel.cpp:95 close) Closing descriptor: 7
00:02:59.508 com.jci.cpp.settings.socket[308] Info (SocketRegistry.cpp:971 run) The socket closed
00:02:59.508 com.jci.cpp.settings.socket[308] Info (Channel.cpp:95 close) Closing descriptor: 31
00:02:59.508 SM[214] Info (sm.cpp:811 sm_ActionsForStoppedService) Svc jciNativegui[271] stopped!
00:02:59.538 com.jci.cpp.settings.socket[308] Info (SocketRegistry.cpp:971 run) The socket closed
00:02:59.538 com.jci.cpp.settings.socket[308] Info (Channel.cpp:95 close) Closing descriptor: 51
00:02:59.538 com.jci.cpp.settings.socket[308] Info (SocketRegistry.cpp:971 run) The socket closed
00:02:59.538 com.jci.cpp.settings.socket[308] Info (Channel.cpp:95 close) Closing descriptor: 60
00:02:59.538 com.jci.cpp.settings.socket[308] Info (SocketRegistry.cpp:971 run) The socket closed
00:02:59.538 com.jci.cpp.settings.socket[308] Info (Channel.cpp:95 close) Closing descriptor: 81
00:02:59.538 com.jci.cpp.settings.socket[308] Info (SocketRegistry.cpp:971 run) The socket closed
00:02:59.538 com.jci.cpp.settings.socket[308] Info (Channel.cpp:95 close) Closing descriptor: 85
00:02:59.538 com.jci.cpp.settings.socket[839] Info (SocketRegistry.cpp:971 run) The socket closed
00:02:59.538 com.jci.cpp.settings.socket[839] Info (Channel.cpp:95 close) Closing descriptor: 38
00:02:59.538 SM[214] Info (sm_sockserver.cpp:1664 SM_SRVR_cmd_stop_action) Process 272 exited!
00:02:59.542 SM[214] Info (sm.cpp:484 sm_HandleSvcStoppedTimeout) Wait pid 272 to return explicitly to avoid zombie exit
00:02:59.581 SM[214] Error (sm.cpp:475 sm_HandleSvcStoppedTimeout) Service jciVideoctrl was not stopped during timeout (3000 ms)!
00:02:59.582 SM[214] Info (sm.cpp:477 sm_HandleSvcStoppedTimeout) Killing pid 263 with signal 9 (SIGKILL)...
00:02:59.583 SM[214] Info (sm.cpp:484 sm_HandleSvcStoppedTimeout) Wait pid 263 to return explicitly to avoid zombie exit
00:02:59.588 SM[214] Info (sm.cpp:811 sm_ActionsForStoppedService) Svc settings[272] stopped!
00:02:59.588 SM[214] Critical (sm.cpp:2049 SM_StartNeededChildren) SM detected that the service "settings"[-1] exited.
00:02:59.588 SM[214] Info (sm_eventbroker.cpp:589 sm_evt_ReportGenerator) Console report command /bin/cat /tmp/smevents.txt
netstat: fscanf
00:02:59.610 SM[214] Error (sm.cpp:1438 main) Process "jciVideoctrl" (263) terminated due to signal 9
00:02:59.610 SM[214] Info (sm_sockserver.cpp:1664 SM_SRVR_cmd_stop_action) Process 263 exited!
00:02:59.674 Std[] Info (: ) PID,Component,Event,Timestamp
00:02:59.674 Std[] Info (: ) Not available,ServiceManager,SM_SERVER_CMD_START_NOTIFY_STAT,7.555
00:02:59.674 Std[] Info (: ) Not available,ServiceManager,SM_SERVER_CMD_INIT,7.555
00:02:59.674 Std[] Info (: ) Not available,ServiceManager,SM_SERVER_CMD_STARTING,7.555
00:02:59.674 Std[] Info (: ) Not available,audio_config,SM_SVC_CMD_START,7.907
00:02:59.674 Std[] Info (: ) 259,audio_config,SM_SVC_CMD_STARTING,7.97
00:02:59.674 Std[] Info (: ) 148,dbus_hmi,SM_SVC_CMD_STARTED,7.971
00:02:59.674 Std[] Info (: ) 151,dbus_service,SM_SVC_CMD_STARTED,7.971
00:02:59.674 Std[] Info (: ) Not available,dsp_config,SM_SVC_CMD_START,7.971
00:02:59.674 Std[] Info (: ) 260,dsp_config,SM_SVC_CMD_STARTING,8
00:02:59.675 Std[] Info (: ) 263,jciVideoctrl,SM_SVC_CMD_START,8.057
00:02:59.675 Std[] Info (: ) 61,lvds_service,SM_SVC_CMD_STARTED,8.057
00:02:59.675 Std[] Info (: ) 122,nativeguictrl,SM_SVC_CMD_STARTED,8.058
00:02:59.675 Std[] Info (: ) Not available,stage_1,SM_SVC_CMD_START,8.058
00:02:59.675 Std[] Info (: ) 264,stage_1,SM_SVC_CMD_STARTED,8.113
00:02:59.675 Std[] Info (: ) 268,system_mazda_my14,SM_SVC_CMD_START,8.117
00:02:59.675 Std[] Info (: ) 109,vim_app,SM_SVC_CMD_STARTED,8.117
00:02:59.675 Std[] Info (: ) 259,audio_config,SM_SVC_CMD_STARTED,8.148
00:02:59.675 Std[] Info (: ) Not available,audio_start,SM_SVC_CMD_START,8.148
00:02:59.675 Std[] Info (: ) 270,audio_start,SM_SVC_CMD_STARTING,8.2
00:02:59.676 Std[] Info (: ) 260,dsp_config,SM_SVC_CMD_STARTED,8.2
00:02:59.676 Std[] Info (: ) 271,jciNativegui,SM_SVC_CMD_START,8.201
00:02:59.676 Std[] Info (: ) 272,settings,SM_SVC_CMD_START,8.202
00:02:59.676 Std[] Info (: ) 271,jciNativegui,SM_SVC_HANDSHAKE_DONE,8.346
00:02:59.676 Std[] Info (: ) 263,jciVideoctrl,SM_SVC_HANDSHAKE_DONE,8.347
00:02:59.676 Std[] Info (: ) 268,system_mazda_my14,SM_SVC_HANDSHAKE_DONE,8.383
00:02:59.676 Std[] Info (: ) 272,settings,SM_SVC_HANDSHAKE_DONE,8.387
00:02:59.676 Std[] Info (: ) 272,settings,SM_SVC_CMD_STARTING,9.109
00:02:59.676 Std[] Info (: ) 272,settings,SM_SVC_CMD_STARTED,9.673
00:02:59.676 Std[] Info (: ) 307,devices,SM_SVC_CMD_START,9.678
00:02:59.680 Std[] Info (: ) 308,jciVBS,SM_SVC_CMD_START,9.68
00:02:59.680 Std[] Info (: ) 270,audio_start,SM_SVC_CMD_STARTED,9.682
00:02:59.680 Std[] Info (: ) 263,jciVideoctrl,SM_SVC_CMD_STARTING,9.722
00:02:59.680 Std[] Info (: ) 271,jciNativegui,SM_SVC_CMD_STARTING,9.744
00:02:59.680 Std[] Info (: ) 307,devices,SM_SVC_HANDSHAKE_DONE,9.824
00:02:59.680 Std[] Info (: ) 308,jciVBS,SM_SVC_HANDSHAKE_DONE,9.893
00:02:59.680 Std[] Info (: ) 308,jciVBS,SM_SVC_CMD_STARTING,9.975
00:02:59.680 Std[] Info (: ) 268,system_mazda_my14,SM_SVC_CMD_STARTING,10.126
00:02:59.680 Std[] Info (: ) 271,jciNativegui,SM_SVC_CMD_STARTED,10.139
00:02:59.680 Std[] Info (: ) 340,jciBUCPSA,SM_SVC_CMD_START,10.171
00:02:59.681 Std[] Info (: ) 307,devices,SM_SVC_CMD_STARTING,10.242
00:02:59.681 Std[] Info (: ) 268,system_mazda_my14,SM_SVC_CMD_STARTED,10.292
00:02:59.681 Std[] Info (: ) 340,jciBUCPSA,SM_SVC_HANDSHAKE_DONE,10.298
00:02:59.681 Std[] Info (: ) 263,jciVideoctrl,SM_SVC_CMD_STARTED,10.469
00:02:59.681 Std[] Info (: ) 340,jciBUCPSA,SM_SVC_CMD_STARTING,10.51
00:02:59.681 Std[] Info (: ) 307,devices,SM_SVC_CMD_STARTED,10.521
00:02:59.681 Std[] Info (: ) 372,jciBLMSettings,SM_SVC_CMD_START,10.536
00:02:59.681 Std[] Info (: ) 340,jciBUCPSA,SM_SVC_CMD_STARTED,10.562
00:02:59.681 Std[] Info (: ) 372,jciBLMSettings,SM_SVC_HANDSHAKE_DONE,10.78
00:02:59.681 Std[] Info (: ) 372,jciBLMSettings,SM_SVC_CMD_STARTING,11.142
00:02:59.683 Std[] Info (: ) 372,jciBLMSettings,SM_SVC_CMD_STARTED,11.355
00:02:59.683 Std[] Info (: ) Not available,stage_2,SM_SVC_CMD_START,11.358
00:02:59.683 Std[] Info (: ) 422,stage_2,SM_SVC_CMD_STARTED,11.379
00:02:59.683 Std[] Info (: ) 434,jciAppsdk,SM_SVC_CMD_START,11.407
00:02:59.683 Std[] Info (: ) 437,jciDbapi,SM_SVC_CMD_START,11.442
00:02:59.683 Std[] Info (: ) 439,jciTime,SM_SVC_CMD_START,11.459
00:02:59.683 Std[] Info (: ) 437,jciDbapi,SM_SVC_HANDSHAKE_DONE,11.786
00:02:59.683 Std[] Info (: ) 434,jciAppsdk,SM_SVC_HANDSHAKE_DONE,11.79
00:02:59.683 Std[] Info (: ) 439,jciTime,SM_SVC_HANDSHAKE_DONE,11.791
00:02:59.683 Std[] Info (: ) 439,jciTime,SM_SVC_CMD_STARTING,12.011
00:02:59.684 Std[] Info (: ) 439,jciTime,SM_SVC_CMD_STARTED,12.069
00:02:59.684 Std[] Info (: ) 492,jciBLMTIME,SM_SVC_CMD_START,12.083
00:02:59.684 Std[] Info (: ) 434,jciAppsdk,SM_SVC_CMD_STARTING,12.234
00:02:59.684 Std[] Info (: ) 437,jciDbapi,SM_SVC_CMD_STARTING,12.243
00:02:59.684 Std[] Info (: ) 437,jciDbapi,SM_SVC_CMD_STARTED,12.383
00:02:59.684 Std[] Info (: ) 308,jciVBS,SM_SVC_CMD_STARTED,12.47
00:02:59.684 Std[] Info (: ) 533,jciTestDiag,SM_SVC_CMD_START,12.523
00:02:59.684 Std[] Info (: ) 535,jciusbdtc,SM_SVC_CMD_START,12.538
00:02:59.684 Std[] Info (: ) Not available,xsesvc2dbus_service,SM_SVC_CMD_START,12.538
00:02:59.684 Std[] Info (: ) 492,jciBLMTIME,SM_SVC_HANDSHAKE_DONE,12.569
00:02:59.710 Std[] Info (: ) 538,xsesvc2dbus_service,SM_SVC_CMD_STARTING,12.613
00:02:59.710 Std[] Info (: ) Not available,xsesvc2dbus_tau,SM_SVC_CMD_START,12.614
00:02:59.710 Std[] Info (: ) 545,xsesvc2dbus_tau,SM_SVC_CMD_STARTING,12.635
00:02:59.710 Std[] Info (: ) 538,xsesvc2dbus_service,SM_SVC_CMD_STARTED,12.738
00:02:59.710 Std[] Info (: ) Not available,audio_amplifier,SM_SVC_CMD_START,12.759
00:02:59.710 Std[] Info (: ) 549,audio_amplifier,SM_SVC_CMD_STARTING,12.78
00:02:59.710 Std[] Info (: ) Not available,audio_control,SM_SVC_CMD_START,12.78
00:02:59.710 Std[] Info (: ) 551,audio_control,SM_SVC_CMD_STARTING,12.793
00:02:59.710 Std[] Info (: ) 545,xsesvc2dbus_tau,SM_SVC_CMD_STARTED,12.793
00:02:59.710 Std[] Info (: ) 434,jciAppsdk,SM_SVC_CMD_STARTED,12.972
00:02:59.710 SM[214] Error (sm.cpp:1389 main) GetConfigNodeByPid returned 107 error
00:02:59.710 SM[214] Error (sm.cpp:1451 main) Service that was stopped (pid 8846) not found in configuration!
00:02:59.710 SM[214] Info (sm_eventbroker.cpp:556 sm_evt_ReportGenerator) Export command /bin/ps -a > /data/ps_info.out &
00:02:59.710 SM[214] Error (sm.cpp:1389 main) GetConfigNodeByPid returned 107 error
00:02:59.710 SM[214] Error (sm.cpp:1451 main) Service that was stopped (pid 8861) not found in configuration!
00:02:59.710 SM[214] Info (sm_eventbroker.cpp:556 sm_evt_ReportGenerator) Export command /usr/bin/top -b -n 1 > /data/top_info.out &
00:02:59.740 Std[] Info (: ) Not available,Opera,SM_SVC_CMD_START,12.979
00:02:59.740 Std[] Info (: ) 567,Opera,SM_SVC_CMD_STARTED,13.049
00:02:59.740 Std[] Info (: ) 492,jciBLMTIME,SM_SVC_CMD_STARTING,13.12
00:02:59.740 Std[] Info (: ) 533,jciTestDiag,SM_SVC_HANDSHAKE_DONE,13.24
00:02:59.740 Std[] Info (: ) 535,jciusbdtc,SM_SVC_HANDSHAKE_DONE,13.265
00:02:59.740 Std[] Info (: ) 492,jciBLMTIME,SM_SVC_CMD_STARTED,13.404
00:02:59.740 Std[] Info (: ) 613,jciTds,SM_SVC_CMD_START,13.428
00:02:59.740 Std[] Info (: ) 535,jciusbdtc,SM_SVC_CMD_STARTING,13.525
00:02:59.740 Std[] Info (: ) 535,jciusbdtc,SM_SVC_CMD_STARTED,13.625
00:02:59.740 Std[] Info (: ) 613,jciTds,SM_SVC_HANDSHAKE_DONE,13.742
00:02:59.799 Std[] Info (: ) 533,jciTestDiag,SM_SVC_CMD_STARTING,13.873
00:02:59.799 Std[] Info (: ) 533,jciTestDiag,SM_SVC_CMD_STARTED,14.11
00:02:59.799 Std[] Info (: ) 613,jciTds,SM_SVC_CMD_STARTING,14.137
00:02:59.799 Std[] Info (: ) 551,audio_control,SM_SVC_CMD_STARTED,15.075
00:02:59.799 Std[] Info (: ) Not available,audio_manager,SM_SVC_CMD_START,15.076
00:02:59.799 Std[] Info (: ) 770,audio_manager,SM_SVC_CMD_STARTING,15.104
00:02:59.799 Std[] Info (: ) 549,audio_amplifier,SM_SVC_CMD_STARTED,15.482
00:02:59.799 Std[] Info (: ) 770,audio_manager,SM_SVC_CMD_STARTED,15.998
00:02:59.799 Std[] Info (: ) 836,jciauxin,SM_SVC_CMD_START,16.024
00:02:59.799 Std[] Info (: ) 837,jciCD,SM_SVC_CMD_START,16.031
00:02:59.799 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:02:59.799 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:59.799 VBS_BUS_VDT[308] Error (mod_vdt.c:2377 VBS_VDT_GetSettingsInfo) Failed to get data from CPP settings registry!!!
00:02:59.799 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:02:59.799 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:02:59.799 VBS_BUS_VDT[308] Error (mod_vdt.c:2377 VBS_VDT_GetSettingsInfo) Failed to get data from CPP settings registry!!!
00:02:59.799 SM[214] Error (sm.cpp:1389 main) GetConfigNodeByPid returned 107 error
00:02:59.799 SM[214] Error (sm.cpp:1451 main) Service that was stopped (pid 8865) not found in configuration!
00:02:59.799 SM[214] Info (sm_eventbroker.cpp:556 sm_evt_ReportGenerator) Export command /usr/bin/thread_info  > /data/thread_info.out &
00:02:59.799 SM[214] Error (sm.cpp:1389 main) GetConfigNodeByPid returned 107 error
00:02:59.799 SM[214] Error (sm.cpp:1451 main) Service that was stopped (pid 8871) not found in configuration!
00:02:59.799 SM[214] Info (sm_eventbroker.cpp:589 sm_evt_ReportGenerator) Console report command /jci/scripts/wait_core_finished.sh
00:02:59.877 Std[] Info (: ) 838,jciDAB,SM_SVC_CMD_START,16.04
00:02:59.877 Std[] Info (: ) 839,jcixm,SM_SVC_CMD_START,16.043
00:02:59.877 Std[] Info (: ) 837,jciCD,SM_SVC_HANDSHAKE_DONE,16.471
00:02:59.877 Std[] Info (: ) 838,jciDAB,SM_SVC_HANDSHAKE_DONE,16.473
00:02:59.877 Std[] Info (: ) 839,jcixm,SM_SVC_HANDSHAKE_DONE,16.478
00:02:59.877 Std[] Info (: ) 836,jciauxin,SM_SVC_HANDSHAKE_DONE,16.479
00:02:59.877 Std[] Info (: ) 837,jciCD,SM_SVC_CMD_STARTING,16.678
00:02:59.877 Std[] Info (: ) 836,jciauxin,SM_SVC_CMD_STARTING,16.685
00:02:59.877 Std[] Info (: ) 836,jciauxin,SM_SVC_CMD_STARTED,16.794
00:02:59.877 Std[] Info (: ) 837,jciCD,SM_SVC_CMD_STARTED,16.834
00:02:59.942 Std[] Info (: ) 838,jciDAB,SM_SVC_CMD_STARTING,16.899
00:02:59.942 Std[] Info (: ) 839,jcixm,SM_SVC_CMD_STARTING,16.976
00:02:59.942 Std[] Info (: ) 838,jciDAB,SM_SVC_CMD_STARTED,17.041
00:02:59.942 Std[] Info (: ) 839,jcixm,SM_SVC_CMD_STARTED,17.175
00:02:59.942 Std[] Info (: ) 268,system_mazda_my14,SM_SVC_HANDSHAKE_DONE,176.216
00:02:59.942 Std[] Info (: ) 263,jciVideoctrl,SM_SVC_HANDSHAKE_DONE,176.238
00:02:59.942 Std[] Info (: ) 272,settings,SM_SVC_HANDSHAKE_DONE,176.269
00:02:59.942 Std[] Info (: ) 271,jciNativegui,SM_SVC_HANDSHAKE_DONE,176.282
00:02:59.942 Std[] Info (: ) 271,jciNativegui,SM_SVC_HANDSHAKE_DONE,176.649
00:02:59.942 Std[] Info (: ) 271,jciNativegui,SM_SVC_CMD_STARTING,176.704
00:02:59.942 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 904, Message: [1;31mWrote: core566-L_jciVideoctrl-SIGSEGV(11)-8606-176-55.00.753A.core.bz2[0m
00:02:59.942 process-coredump[] Debug (: ) File: process-coredump.cpp, Function: main, Line: 1019, Message: Lock file closed
00:02:59.943 Std[] Info (: ) 8838,jciNativegui,SM_SVC_CMD_START,179.544
00:03:00.478 SM[214] Info (sm.cpp:494 sm_HandleSvcStoppedTimeout) Pid 271 seems to have exited
00:03:00.542 SM[214] Info (sm.cpp:494 sm_HandleSvcStoppedTimeout) Pid 272 seems to have exited
00:03:00.558 VBS_BUS_CAN[308] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:03:00.558 VBS_BUS_CAN[308] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:03:00.558 VBS_BUS_CAN[308] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:03:00.558 VBS_BUS_CAN[308] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:03:00.584 SM[214] Info (sm.cpp:494 sm_HandleSvcStoppedTimeout) Pid 263 seems to have exited
00:03:00.872 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:03:00.872 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:00.877 VBS_BUS_VDT[308] Error (mod_vdt.c:2377 VBS_VDT_GetSettingsInfo) Failed to get data from CPP settings registry!!!
00:03:00.880 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:03:00.880 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:00.885 VBS_BUS_VDT[308] Error (mod_vdt.c:2377 VBS_VDT_GetSettingsInfo) Failed to get data from CPP settings registry!!!
00:03:01.000 BLM_TIME[492] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:03:01.001 BLM_TIME[492] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:03:01.018 SM[8294] Warn (sm.cpp:605 sm_PrintWarning) Service jciVideoctrl was not connected during timeout (5003 ms)!
00:03:01.020 SM[8294] Warn (sm.cpp:605 sm_PrintWarning) Service system_mazda_my14 was not connected during timeout (5003 ms)!
00:03:01.058 SM[8294] Warn (sm.cpp:605 sm_PrintWarning) Service jciNativegui was not connected during timeout (5003 ms)!
00:03:01.066 SM[8294] Warn (sm.cpp:605 sm_PrintWarning) Service settings was not connected during timeout (5003 ms)!
00:03:01.802 BLM_SETTINGS[372] Error (settings_cpp_interface.cpp:799 GetRegistry_U8) interface to CPP_Settings error [27] while processing 2/com/jci/blm/settings/Vehicle/Voltage/_MIN_: U8:54
00:03:01.802 BLM_SETTINGS[372] Warn (settings_service_funs.cpp:8565 BLM_SETTINGS_IsValueNotInRange) <!> CPP_Settings returned an error
00:03:01.802 BLM_SETTINGS[372] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/Vehicle/Voltage <!> Value is not in range
00:03:01.890 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:03:01.898 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:01.900 VBS_BUS_VDT[308] Error (mod_vdt.c:2377 VBS_VDT_GetSettingsInfo) Failed to get data from CPP settings registry!!!
00:03:01.905 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:03:01.905 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:01.905 VBS_BUS_VDT[308] Error (mod_vdt.c:2377 VBS_VDT_GetSettingsInfo) Failed to get data from CPP settings registry!!!
00:03:02.558 VBS_BUS_CAN[308] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:03:02.558 VBS_BUS_CAN[308] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:03:02.558 VBS_BUS_CAN[308] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:03:02.558 VBS_BUS_CAN[308] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:03:02.649 SM[8294] Error (sm_eventbroker.cpp:594 sm_evt_ReportGenerator) Shell has not been loaded so command /jci/scripts/wait_core_finished.sh  failed
00:03:02.649 SM[8294] Info (sm_eventbroker.cpp:589 sm_evt_ReportGenerator) Console report command /jci/scripts/log-save.sh
archiving running logs...
00:03:02.818 BLM_SETTINGS[372] Error (settings_cpp_interface.cpp:799 GetRegistry_U8) interface to CPP_Settings error [27] while processing 2/com/jci/blm/settings/Vehicle/Voltage/_MIN_: U8:54
00:03:02.818 BLM_SETTINGS[372] Warn (settings_service_funs.cpp:8565 BLM_SETTINGS_IsValueNotInRange) <!> CPP_Settings returned an error
00:03:02.818 BLM_SETTINGS[372] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/Vehicle/Voltage <!> Value is not in range
00:03:02.935 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:03:02.941 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:02.943 VBS_BUS_VDT[308] Error (mod_vdt.c:2377 VBS_VDT_GetSettingsInfo) Failed to get data from CPP settings registry!!!
00:03:02.951 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:03:02.951 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:02.951 VBS_BUS_VDT[308] Error (mod_vdt.c:2377 VBS_VDT_GetSettingsInfo) Failed to get data from CPP settings registry!!!
00:03:03.115 SM[214] Error (sm.cpp:1389 main) GetConfigNodeByPid returned 107 error
00:03:03.115 SM[214] Error (sm.cpp:1451 main) Service that was stopped (pid 8874) not found in configuration!
00:03:03.115 SM[214] Info (sm_eventbroker.cpp:589 sm_evt_ReportGenerator) Console report command /jci/scripts/log-save.sh
00:03:03.292 Std[] Info (: ) archiving running logs...
00:03:04.001 BLM_TIME[492] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:03:04.003 BLM_TIME[492] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:03:04.055 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:03:04.062 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:04.068 VBS_BUS_VDT[308] Error (mod_vdt.c:2377 VBS_VDT_GetSettingsInfo) Failed to get data from CPP settings registry!!!
00:03:04.073 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:03:04.073 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:04.073 VBS_BUS_VDT[308] Error (mod_vdt.c:2377 VBS_VDT_GetSettingsInfo) Failed to get data from CPP settings registry!!!
00:03:04.518 SM[214] Warn (sm.cpp:605 sm_PrintWarning) Service jciNativegui was not connected during timeout (5003 ms)!
00:03:04.559 VBS_BUS_CAN[308] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:03:04.559 VBS_BUS_CAN[308] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:03:04.559 VBS_BUS_CAN[308] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:03:04.559 VBS_BUS_CAN[308] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:03:04.834 BLM_SETTINGS[372] Error (settings_cpp_interface.cpp:799 GetRegistry_U8) interface to CPP_Settings error [27] while processing 2/com/jci/blm/settings/Vehicle/Voltage/_MIN_: U8:54
00:03:04.834 BLM_SETTINGS[372] Warn (settings_service_funs.cpp:8565 BLM_SETTINGS_IsValueNotInRange) <!> CPP_Settings returned an error
00:03:04.834 BLM_SETTINGS[372] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/Vehicle/Voltage <!> Value is not in range
netstat: fscanf
00:03:05.203 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:03:05.206 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:05.209 VBS_BUS_VDT[308] Error (mod_vdt.c:2377 VBS_VDT_GetSettingsInfo) Failed to get data from CPP settings registry!!!
00:03:05.215 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:03:05.215 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:05.219 VBS_BUS_VDT[308] Error (mod_vdt.c:2377 VBS_VDT_GetSettingsInfo) Failed to get data from CPP settings registry!!!
saved: logs474_core566_182-55.00.753A.tar.bz2
00:03:05.509 SM[8294] Error (sm_eventbroker.cpp:594 sm_evt_ReportGenerator) Shell has not been loaded so command /jci/scripts/log-save.sh  failed
00:03:05.509 SM[8294] Info (sm_eventbroker.cpp:589 sm_evt_ReportGenerator) Console report command /bin/sync
00:03:05.704 SM[8294] Error (sm_eventbroker.cpp:594 sm_evt_ReportGenerator) Shell has not been loaded so command /bin/sync  failed
00:03:05.704 SM[8294] Error (sm.cpp:1438 main) Process "jciVideoctrl" (8606) terminated due to signal 11
00:03:05.704 SM[8294] Error (sm.cpp:1428 main) Process "settings" (8617) exited with status 0
00:03:05.704 SM[8294] Error (sm.cpp:1428 main) Process "jciNativegui" (8674) exited with status 0
00:03:05.744 SM[8294] Info (sm.cpp:811 sm_ActionsForStoppedService) Svc audio_start[8618] stopped!
00:03:05.744 SM[8294] Warn (sm.cpp:896 sm_ActionsForStoppedService) Unlinking file ptr->ready_flag /var/run/audio_start
00:03:05.744 SM[8294] Info (sm.cpp:811 sm_ActionsForStoppedService) Svc jciNativegui[8674] stopped!
00:03:05.744 SM[8294] Info (sm.cpp:811 sm_ActionsForStoppedService) Svc jciVideoctrl[8606] stopped!
00:03:05.744 SM[8294] Info (sm.cpp:811 sm_ActionsForStoppedService) Svc settings[8617] stopped!
00:03:05.759 SM[8294] Critical (sm.cpp:2049 SM_StartNeededChildren) SM detected that the service "settings"[-1] exited.
00:03:05.874 Std[] Error (: ) stat: can't stat '/tmp/running_logs.tar.bz2': No such file or directory
00:03:06.008 Std[] Error (: ) mv: can't rename '/tmp/running_logs.tar.bz2': No such file or directory
00:03:06.015 Std[] Info (: ) saved: logs474_core566_183-55.00.753A.tar.bz2
00:03:06.015 SM[214] Error (sm.cpp:1389 main) GetConfigNodeByPid returned 107 error
00:03:06.015 SM[214] Error (sm.cpp:1451 main) Service that was stopped (pid 9056) not found in configuration!
00:03:06.015 SM[214] Info (sm_eventbroker.cpp:589 sm_evt_ReportGenerator) Console report command /bin/sync
00:03:06.117 SM[214] Error (sm.cpp:1389 main) GetConfigNodeByPid returned 107 error
00:03:06.117 SM[214] Error (sm.cpp:1451 main) Service that was stopped (pid 9248) not found in configuration!
00:03:06.124 SM[214] Error (sm.cpp:475 sm_HandleSvcStoppedTimeout) Service jciNativegui was not stopped during timeout (3000 ms)!
00:03:06.124 SM[214] Info (sm.cpp:477 sm_HandleSvcStoppedTimeout) Killing pid 8838 with signal 9 (SIGKILL)...
00:03:06.124 SM[214] Info (sm.cpp:484 sm_HandleSvcStoppedTimeout) Wait pid 8838 to return explicitly to avoid zombie exit
00:03:06.124 SM[214] Info (sm.cpp:545 sm_HandleSvcStoppedTimeout) service jciNativegui destroyed monitored 1 pid 8838 retry_count 4 reset_board 0
00:03:06.124 SM[214] Info (sm.cpp:545 sm_HandleSvcStoppedTimeout) service settings destroyed monitored 0 pid -1 retry_count -1 reset_board 1
00:03:06.124 SM[214] Info (sm.cpp:545 sm_HandleSvcStoppedTimeout) service jciVideoctrl destroyed monitored 1 pid 263 retry_count 5 reset_board 0
00:03:06.124 BUCPSA[340] Info (bucpsa_main.c:433 bucpsa_smcl_sm_nativegui_Stopped_cb) NativeGUI stopped! Waiting for it to restart...
00:03:06.130 SM[214] Warn (sm_net.cpp:962 SM_NET_SocketListener) Service Manager SocketListener recv failed! Error: Connection reset by peer
00:03:06.271 VIDEOCTRL[9208] Info (vctrl_sm_interface.c:93 ServiceInit) Initializing VIDEOCTRL Service
00:03:06.280 VIDEOCTRL[9208] Info (vctrl_gpio.c:150 DayNightSensor_th) Display Day/Night is not on AUTO. No action taken
00:03:06.287 VIDEOCTRL[9208] Info (vctrl_xml.c:506 VCTRL_XML_Open) XML file loaded successfully
00:03:06.287 VIDEOCTRL[9208] Info (vctrl_xml.c:92 vctrl_loadSettingsData) Number of devices = 3
00:03:06.287 VIDEOCTRL[9208] Info (vctrl_xml.c:135 vctrl_extractDeviceSettings) Device = buc -- device ID = 0, device input = 0
00:03:06.287 VIDEOCTRL[9208] Info (vctrl_xml.c:135 vctrl_extractDeviceSettings) Device = dvd -- device ID = 1, device input = 1
00:03:06.287 VIDEOCTRL[9208] Info (vctrl_xml.c:135 vctrl_extractDeviceSettings) Device = tv -- device ID = 2, device input = 1
00:03:06.288 VIDEOCTRL[9208] Info (vctrl_xml.c:48 VCTRL_XML_ReadSettingsXML) Successfully loaded and parsed video_settings.xml!
00:03:06.321 NATIVEGUI[9207] Info (natgui.c:609 ServiceInit) SM Initilizing Service Native GUI.
00:03:06.321 NATIVEGUI[9207] Info (natgui.c:771 NatG_Initialize) Success in initializing queue for NATGUI
00:03:06.325 NATIVEGUI[9207] Info (natgui_settings_mgr.c:110 NatG_Settings_Init) NVRAM_Block_getValue return the currentLanguage = 0
00:03:06.325 NATIVEGUI[9207] Info (natgui.c:780 NatG_Initialize) Success in initializing settings
00:03:06.336 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:03:06.336 NATIVEGUI[9207] Info (natgui.c:789 NatG_Initialize) Success in initializing wayland window wrapper
00:03:06.336 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:06.336 Std[] Info (: ) Surface NATGUI_SURFACE registered
00:03:06.344 NATIVEGUI[9207] Info (natgui.c:798 NatG_Initialize) Success in initializing HMI Dbus Connection
00:03:06.344 NATIVEGUI[9207] Info (natgui.c:803 NatG_Initialize) Starting the SM client for BLM Setting language status
00:03:06.344 NATIVEGUI[9207] Info (natgui_surface_mgr.c:590 NatG_Redraw_Widget_Handler) NatG_Redraw_Widget_Handler
00:03:06.344 NATIVEGUI[9207] Info (natgui.c:1187 NatG_GetImageDetails) Image = IMG_BANNER (78), [/jci/nativegui/images/SafetyText_US_English.png : (0, 433)], Language = 0
00:03:06.354 VBS_BUS_VDT[308] Error (mod_vdt.c:2377 VBS_VDT_GetSettingsInfo) Failed to get data from CPP settings registry!!!
00:03:06.354 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:03:06.354 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:06.354 VBS_BUS_VDT[308] Error (mod_vdt.c:2377 VBS_VDT_GetSettingsInfo) Failed to get data from CPP settings registry!!!
00:03:06.373 NATIVEGUI[9207] Info (natgui.c:857 natg_Init_SM_Client) SM Client connection waiting for getting connected...
00:03:06.374 VIDEOCTRL[9208] Info (vctrl_v4lcapture.c:843 dbus_connect)  (843) CDBusClientBase::connect - address: unix:path=/tmp/dbus_hmi_socket
00:03:06.376 NATIVEGUI[9207] Info (natgui.c:1011 natg_smcl_connectCommand_cb) natg_smcl_connectCommand_cb
00:03:06.376 NATIVEGUI[9207] Info (natgui.c:860 natg_Init_SM_Client) SM Clinet connection semaphore relased.
00:03:06.376 NATIVEGUI[9207] Info (natgui.c:913 natG_smcl_SM_SubscribeSettings) Registering for SM Client subscription.
00:03:06.376 NATIVEGUI[9207] Info (natgui.c:810 NatG_Initialize) Success in subscribing to SM for BLM Settings
00:03:06.376 NATIVEGUI[9207] Info (natgui.c:982 natg_smcl_GetSMServiceList) natg_smcl_GetSMServiceList
00:03:06.377 NATIVEGUI[9207] Info (natgui.c:615 ServiceInit) Success in initilizing the Service Native GUI.
00:03:06.377 NATIVEGUI[9207] Info (natgui.c:633 ServiceRun) Running Native GUI
00:03:06.385 NATIVEGUI[9207] Info (natgui.c:1014 natg_smcl_connectCommand_cb) Received connect call back. posting smaphore (sem_post)
00:03:06.385 BUCPSA[340] Info (bucpsa_main.c:417 bucpsa_smcl_sm_nativegui_Started_cb) NATIVEGUI started running
00:03:06.385 BUCPSA[340] Info (bucpsa_main.c:421 bucpsa_smcl_sm_nativegui_Started_cb) Refreshing NativeGUI data
00:03:06.385 NATIVEGUI[9207] Info (natgui.c:1257 NatG_Process_Inputs) NatG_Process_Inputs::: NatG_Ip_SetDisplay (imageCount=1)
00:03:06.391 NATIVEGUI[9207] Info (natgui.c:1049 natg_smcl_getServices_cb) natg_smcl_getServices_cb with services_count=32
00:03:06.391 NATIVEGUI[9207] Info (natgui.c:1058 natg_smcl_getServices_cb) BLM settings is already running. Get the language info
00:03:06.391 NATIVEGUI[9207] Info (natgui_interface.c:408 NatG_If_BlmSettings_Connect) Using interface com.jci.settings.nativegui_9207_1
00:03:06.391 BLM_SETTINGS[9207] Info (settings_client_funs.cpp:759 BLM_SETTINGS_Client_ExtConnect) com.jci.settings.nativegui_9207_1
00:03:06.411 NATIVEGUI[9207] Info (natgui_surface_mgr.c:590 NatG_Redraw_Widget_Handler) NatG_Redraw_Widget_Handler
00:03:06.411 NATIVEGUI[9207] Info (natgui.c:1187 NatG_GetImageDetails) Image = IMG_BANNER (78), [/jci/nativegui/images/SafetyText_US_English.png : (0, 433)], Language = 0
00:03:06.416 VIDEOCTRL[9208] Info (vctrl_service_core.cpp:66 VCTRL_CORE_InitializeConstSettings) Setting Constant settings for device 0
00:03:06.418 BLM_SETTINGS[372] Info (settings_service_funs.cpp:1269 SETTINGS_Connect_svc) connecting client:com.jci.settings.nativegui_9207_1
00:03:06.423 BLM_SETTINGS[9207] Info (settings_client_funs.cpp:422 BLM_SEETINGS_Connect_cb) Client Name [com.jci.settings.nativegui_9207_1]
00:03:06.424 BLM_SETTINGS[9207] Info (settings_client_funs.cpp:1559 SETTINGS_Client_ExtGet_S16) client [com.jci.settings.nativegui_9207_1] com/jci/blm/settings/SystemSettings/LanguageDisplay
00:03:06.429 BLM_SETTINGS[372] Info (settings_service_funs.cpp:5921 SETTINGS_Get_Settings_S16_svc) key path : /2/com/jci/blm/settings/SystemSettings/LanguageDisplay
00:03:06.434 BLM_SETTINGS[372] Error (settings_cpp_interface.cpp:871 GetRegistry_S16) interface to CPP_Settings error [27] while processing 2/com/jci/blm/settings/SystemSettings/LanguageDisplay: S16:1590
00:03:06.437 BLM_SETTINGS[9207] Info (settings_client_funs.cpp:1458 SETTINGS_Client_Get_S16_cb) SETTINGS_Client_Get_S16_cb
00:03:06.437 BLM_SETTINGS[9207] Info (settings_client_funs.cpp:1487 SETTINGS_Client_Get_S16_cb) Client Name [com.jci.settings.nativegui_9207_1], returned value 1590 for setting ID 59
00:03:06.437 NATIVEGUI[9207] Info (natgui_interface.c:507 NatG_if_BlmSettingsCurLanguage_cb) NatG_if_BlmSettingsCurLanguage_cb. curLang=1590
00:03:06.437 NATIVEGUI[9207] Info (natgui_settings_mgr.c:192 NatG_Settings_Set_Language) Updating current language (1590) in NVRAM using NVRAM_Block_setValue
00:03:06.439 SM[214] Error (sm_sockserver.cpp:1178 SM_SRVR_cmd_handshake_action) config_node->sock_element was not NULL in handshaking
00:03:06.439 SM[214] Error (sm_sockserver.cpp:1179 SM_SRVR_cmd_handshake_action) sock 5 name jciVideoctrl
00:03:06.445 SM[214] Error (sm_sockserver.cpp:1178 SM_SRVR_cmd_handshake_action) config_node->sock_element was not NULL in handshaking
00:03:06.445 SM[214] Error (sm_sockserver.cpp:1179 SM_SRVR_cmd_handshake_action) sock 7 name jciNativegui
00:03:06.533 SM[214] Warn (sm_sockserver.cpp:1528 SM_SRVR_cmd_starting_action) not a valid state change request svc jciVideoctrl state 2
00:03:06.534 VIDEOCTRL[9259] Info (vctrl_sm_interface.c:93 ServiceInit) Initializing VIDEOCTRL Service
00:03:06.542 VIDEOCTRL[9259] Info (vctrl_gpio.c:150 DayNightSensor_th) Display Day/Night is not on AUTO. No action taken
00:03:06.544 VIDEOCTRL[9259] Info (vctrl_xml.c:506 VCTRL_XML_Open) XML file loaded successfully
00:03:06.544 VIDEOCTRL[9259] Info (vctrl_xml.c:92 vctrl_loadSettingsData) Number of devices = 3
00:03:06.544 VIDEOCTRL[9259] Info (vctrl_xml.c:135 vctrl_extractDeviceSettings) Device = buc -- device ID = 0, device input = 0
00:03:06.544 VIDEOCTRL[9259] Info (vctrl_xml.c:135 vctrl_extractDeviceSettings) Device = dvd -- device ID = 1, device input = 1
00:03:06.544 VIDEOCTRL[9259] Info (vctrl_xml.c:135 vctrl_extractDeviceSettings) Device = tv -- device ID = 2, device input = 1
00:03:06.547 VIDEOCTRL[9259] Info (vctrl_xml.c:48 VCTRL_XML_ReadSettingsXML) Successfully loaded and parsed video_settings.xml!
00:03:06.560 SM[214] Warn (sm_sockserver.cpp:1528 SM_SRVR_cmd_starting_action) not a valid state change request svc jciNativegui state 3
00:03:06.561 NATIVEGUI[9257] Info (natgui.c:609 ServiceInit) SM Initilizing Service Native GUI.
00:03:06.561 NATIVEGUI[9257] Info (natgui.c:771 NatG_Initialize) Success in initializing queue for NATGUI
00:03:06.563 NATIVEGUI[9257] Info (natgui_settings_mgr.c:110 NatG_Settings_Init) NVRAM_Block_getValue return the currentLanguage = 1590
00:03:06.563 NATIVEGUI[9257] Info (natgui.c:780 NatG_Initialize) Success in initializing settings
00:03:06.565 Std[] Error (: ) surface with id 'NATGUI_SURFACE' already exists
00:03:06.566 NATIVEGUI[9257] Info (natgui.c:789 NatG_Initialize) Success in initializing wayland window wrapper
00:03:06.571 NATIVEGUI[9257] Info (natgui_surface_mgr.c:590 NatG_Redraw_Widget_Handler) NatG_Redraw_Widget_Handler
00:03:06.571 NATIVEGUI[9257] Info (natgui.c:1187 NatG_GetImageDetails) Image = IMG_BANNER (78), [d���, : (-498040832, 167772330)], Language = 1590
00:03:06.574 NATIVEGUI[9257] Error (natgui_interface.c:112 NatG_Init_Hmi_DBus) Failed to connect to HMI DBUS
00:03:06.574 NATIVEGUI[9257] Error (natgui.c:795 NatG_Initialize) Failed to create HMI dbus connection for NATGUI
00:03:06.574 NATIVEGUI[9257] Error (natgui.c:619 ServiceInit) Failed in initilizing the Service Native GUI
00:03:06.574 SM[9257] Warn (sm_svclauncher.cpp:221 sm_svclauncher_ThreadHandler) Service init_cb function returned: 1 for svc jcinativegui.
00:03:06.579 NATIVEGUI[9257] Info (natgui.c:667 ServiceTerm) Terminating RADIO Service
00:03:06.579 NATIVEGUI[9257] Info (natgui.c:898 natg_Destroy_SM_Client) natg_Destroy_SM_Client.
00:03:06.579 VBS_BUS_CAN[308] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:03:06.579 VBS_BUS_CAN[308] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:03:06.579 VBS_BUS_CAN[308] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:03:06.579 VBS_BUS_CAN[308] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:03:06.579 SM[214] Info (sm_sockserver.cpp:1661 SM_SRVR_cmd_stop_action) Waiting for processs 9257 to exit...
00:03:06.588 SM[214] Info (sm_sockserver.cpp:1664 SM_SRVR_cmd_stop_action) Process 9257 exited!
00:03:06.588 BUCPSA[340] Info (bucpsa_main.c:433 bucpsa_smcl_sm_nativegui_Stopped_cb) NativeGUI stopped! Waiting for it to restart...
00:03:06.596 VIDEOCTRL[9259] Info (vctrl_v4lcapture.c:843 dbus_connect)  (843) CDBusClientBase::connect - address: unix:path=/tmp/dbus_hmi_socket
00:03:06.601 VIDEOCTRL[9259] Error (vctrl_v4lcapture.c:887 dbus_connect) CDBusClientBase::connect - Not Primary Owner ret: 2
00:03:06.607 VIDEOCTRL[9259] Info (vctrl_service_core.cpp:66 VCTRL_CORE_InitializeConstSettings) Setting Constant settings for device 0
00:03:06.607 VIDEOCTRL[9259] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:03:06.607 VIDEOCTRL[9259] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:03:06.607 VIDEOCTRL[9259] Error (vctrl_v4lcapture.c:300 VCTRL2V4LCAPTURE_setRegisterSubmap2) Failed to Open Submap 2
00:03:06.607 VIDEOCTRL[9259] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:03:06.607 VIDEOCTRL[9259] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:03:06.607 VIDEOCTRL[9259] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:03:06.607 VIDEOCTRL[9259] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:03:06.607 VIDEOCTRL[9259] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:03:06.607 VIDEOCTRL[9259] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:03:06.607 VIDEOCTRL[9259] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:03:06.607 VIDEOCTRL[9259] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:03:06.607 VIDEOCTRL[9259] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:03:06.607 SM[214] Info (sm.cpp:811 sm_ActionsForStoppedService) Svc jciNativegui[9257] stopped!
00:03:06.607 VIDEOCTRL[9259] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:03:06.607 VIDEOCTRL[9259] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:03:06.607 VIDEOCTRL[9259] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:03:06.607 VIDEOCTRL[9259] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:03:06.607 VIDEOCTRL[9259] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:03:06.607 VIDEOCTRL[9259] Info (vctrl_service_core.cpp:110 VCTRL_CORE_GetDayNightMode) Value read from NVRAM day for node 'lvds_bright_mode'
00:03:06.607 VIDEOCTRL[9259] Info (vctrl_settings.c:237 BLM_VCTRL_OnChange_DayNight_Callback) DayNight Changed - value: DAY
00:03:06.607 VIDEOCTRL[9259] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setBrightness
00:03:06.607 VIDEOCTRL[9259] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setBrightness
00:03:06.607 VIDEOCTRL[9259] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:03:06.607 VIDEOCTRL[9259] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:03:06.607 VIDEOCTRL[9259] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setContrast
00:03:06.607 VIDEOCTRL[9259] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setContrast
00:03:06.607 VIDEOCTRL[9259] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:03:06.607 VIDEOCTRL[9259] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:03:06.607 VIDEOCTRL[9259] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setHue
00:03:06.607 VIDEOCTRL[9259] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setHue
00:03:06.607 VIDEOCTRL[9259] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:03:06.607 VIDEOCTRL[9259] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:03:06.607 VIDEOCTRL[9259] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:03:06.607 VIDEOCTRL[9259] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:03:06.607 VIDEOCTRL[9259] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:03:06.607 VIDEOCTRL[9259] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:03:06.607 VIDEOCTRL[9259] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:03:06.607 VIDEOCTRL[9259] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:03:06.607 VIDEOCTRL[9259] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:03:06.607 VIDEOCTRL[9259] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:03:06.607 VIDEOCTRL[9259] Info (vctrl_settings.c:95 VCTRL2BLM_SETTINGS_UpdateIsNight) LOADED NEW VIDEO SETTINGS
00:03:06.607 VIDEOCTRL[9259] Info (vctrl_service_core.cpp:89 VCTRL_CORE_UpdateAllOtherSettings) Updating settings for device dvd
00:03:06.607 VIDEOCTRL[9259] Info (vctrl_service_core.cpp:89 VCTRL_CORE_UpdateAllOtherSettings) Updating settings for device tv
00:03:06.607 VIDEOCTRL[9259] Info (vctrl_settings.c:102 VCTRL2BLM_SETTINGS_UpdateIsNight) Sent new video settings to MMUI
00:03:06.649 SM[9259] Warn (sm_svclauncher.cpp:221 sm_svclauncher_ThreadHandler) Service init_cb function returned: 1 for svc jciVideoctrl.
00:03:06.649 BLM_SETTINGS[9259] Info (settings_client_funs.cpp:880 BLM_SETTINGS_Client_ExtDisconnect) BLM_SETTINGS_Client_ExtDisconnect
00:03:06.649 BLM_SETTINGS[9259] Error (settings_client_funs.cpp:900 BLM_SETTINGS_Client_ExtDisconnect) client is NOT connected conn:(nil)
00:03:06.652 SM[214] Info (sm_sockserver.cpp:1661 SM_SRVR_cmd_stop_action) Waiting for processs 9259 to exit...
00:03:06.705 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 556, Message: version: 55.00.753A, length 16
00:03:06.708 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 639, Message: LOCK FILE NAME /var/lock/LCK9259.core
00:03:06.745 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 766, Message: [1;31mProcess 9259 ("[SM]CliReqHandl") abnormally exited due to signal SIGSEGV (11) with core file: /data_persist/log/dumps/core567-[SM]CliReqHandl-SIGSEGV(11)-9259-186-55.00.753A.core.bz2[0m
00:03:06.783 NATIVEGUI[9311] Info (natgui.c:609 ServiceInit) SM Initilizing Service Native GUI.
00:03:06.783 NATIVEGUI[9311] Info (natgui.c:771 NatG_Initialize) Success in initializing queue for NATGUI
00:03:06.785 NATIVEGUI[9311] Info (natgui_settings_mgr.c:110 NatG_Settings_Init) NVRAM_Block_getValue return the currentLanguage = 1590
00:03:06.785 NATIVEGUI[9311] Info (natgui.c:780 NatG_Initialize) Success in initializing settings
00:03:06.786 Std[] Error (: ) surface with id 'NATGUI_SURFACE' already exists
00:03:06.786 NATIVEGUI[9311] Info (natgui.c:789 NatG_Initialize) Success in initializing wayland window wrapper
00:03:06.788 NATIVEGUI[9311] Info (natgui_surface_mgr.c:590 NatG_Redraw_Widget_Handler) NatG_Redraw_Widget_Handler
00:03:06.788 NATIVEGUI[9311] Info (natgui.c:1187 NatG_GetImageDetails) Image = IMG_BANNER (78), [0��-��� : (-476049392, -527491060)], Language = 1590
00:03:06.796 NATIVEGUI[9311] Error (natgui_interface.c:112 NatG_Init_Hmi_DBus) Failed to connect to HMI DBUS
00:03:06.796 NATIVEGUI[9311] Error (natgui.c:795 NatG_Initialize) Failed to create HMI dbus connection for NATGUI
00:03:06.796 NATIVEGUI[9311] Error (natgui.c:619 ServiceInit) Failed in initilizing the Service Native GUI
00:03:06.796 SM[9311] Warn (sm_svclauncher.cpp:221 sm_svclauncher_ThreadHandler) Service init_cb function returned: 1 for svc jcinativegui.
00:03:06.796 NATIVEGUI[9311] Info (natgui.c:667 ServiceTerm) Terminating RADIO Service
00:03:06.796 NATIVEGUI[9311] Info (natgui.c:898 natg_Destroy_SM_Client) natg_Destroy_SM_Client.
00:03:06.796 SM[214] Info (sm_sockserver.cpp:1661 SM_SRVR_cmd_stop_action) Waiting for processs 9311 to exit...
00:03:06.811 SM[214] Info (sm_sockserver.cpp:1664 SM_SRVR_cmd_stop_action) Process 9311 exited!
00:03:06.811 BUCPSA[340] Info (bucpsa_main.c:433 bucpsa_smcl_sm_nativegui_Stopped_cb) NativeGUI stopped! Waiting for it to restart...
00:03:06.814 NATGUICTRL[122] Info (ivi-shell-utils.c:195 ivi_surface_registered) Surface 9311-3 registered and it is not managed
00:03:06.825 BLM_SETTINGS[372] Error (settings_cpp_interface.cpp:799 GetRegistry_U8) interface to CPP_Settings error [27] while processing 2/com/jci/blm/settings/Vehicle/Voltage/_MIN_: U8:54
00:03:06.825 BLM_SETTINGS[372] Warn (settings_service_funs.cpp:8565 BLM_SETTINGS_IsValueNotInRange) <!> CPP_Settings returned an error
00:03:06.825 BLM_SETTINGS[372] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/Vehicle/Voltage <!> Value is not in range
00:03:06.829 SM[214] Info (sm.cpp:811 sm_ActionsForStoppedService) Svc jciNativegui[9311] stopped!
00:03:06.954 SM[214] Info (sm_sockserver.cpp:1664 SM_SRVR_cmd_stop_action) Process 9259 exited!
00:03:06.974 SM[214] Info (sm.cpp:811 sm_ActionsForStoppedService) Svc jciVideoctrl[9259] stopped!
00:03:07.000 BLM_TIME[492] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:03:07.003 BLM_TIME[492] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:03:07.013 NATIVEGUI[9336] Info (natgui.c:609 ServiceInit) SM Initilizing Service Native GUI.
00:03:07.013 NATIVEGUI[9336] Info (natgui.c:771 NatG_Initialize) Success in initializing queue for NATGUI
00:03:07.016 NATIVEGUI[9336] Info (natgui_settings_mgr.c:110 NatG_Settings_Init) NVRAM_Block_getValue return the currentLanguage = 1590
00:03:07.016 NATIVEGUI[9336] Info (natgui.c:780 NatG_Initialize) Success in initializing settings
00:03:07.019 Std[] Error (: ) surface with id 'NATGUI_SURFACE' already exists
00:03:07.019 NATIVEGUI[9336] Info (natgui.c:789 NatG_Initialize) Success in initializing wayland window wrapper
00:03:07.028 NATIVEGUI[9336] Info (natgui_surface_mgr.c:590 NatG_Redraw_Widget_Handler) NatG_Redraw_Widget_Handler
00:03:07.028 NATIVEGUI[9336] Info (natgui.c:1187 NatG_GetImageDetails) Image = IMG_BANNER (78), [raitsIcE7compareEPKcS2_j : (1751331121, 1952412257)], Language = 1590
00:03:07.034 NATIVEGUI[9336] Error (natgui_interface.c:112 NatG_Init_Hmi_DBus) Failed to connect to HMI DBUS
00:03:07.034 NATIVEGUI[9336] Error (natgui.c:795 NatG_Initialize) Failed to create HMI dbus connection for NATGUI
00:03:07.034 NATIVEGUI[9336] Error (natgui.c:619 ServiceInit) Failed in initilizing the Service Native GUI
00:03:07.034 SM[9336] Warn (sm_svclauncher.cpp:221 sm_svclauncher_ThreadHandler) Service init_cb function returned: 1 for svc jcinativegui.
00:03:07.034 NATIVEGUI[9336] Info (natgui.c:667 ServiceTerm) Terminating RADIO Service
00:03:07.034 NATIVEGUI[9336] Info (natgui.c:898 natg_Destroy_SM_Client) natg_Destroy_SM_Client.
00:03:07.034 SM[214] Info (sm_sockserver.cpp:1661 SM_SRVR_cmd_stop_action) Waiting for processs 9336 to exit...
00:03:07.049 SM[214] Info (sm_sockserver.cpp:1664 SM_SRVR_cmd_stop_action) Process 9336 exited!
00:03:07.050 BUCPSA[340] Info (bucpsa_main.c:433 bucpsa_smcl_sm_nativegui_Stopped_cb) NativeGUI stopped! Waiting for it to restart...
00:03:07.064 NATGUICTRL[122] Info (ivi-shell-utils.c:195 ivi_surface_registered) Surface 9336-3 registered and it is not managed
00:03:07.070 SM[214] Info (sm.cpp:811 sm_ActionsForStoppedService) Svc jciNativegui[9336] stopped!
00:03:07.120 SM[214] Info (sm.cpp:494 sm_HandleSvcStoppedTimeout) Pid 8838 seems to have exited
00:03:07.122 SM[214] Info (sm.cpp:545 sm_HandleSvcStoppedTimeout) service jciNativegui destroyed monitored 1 pid 9355 retry_count 0 reset_board 0
00:03:07.124 BUCPSA[340] Info (bucpsa_main.c:433 bucpsa_smcl_sm_nativegui_Stopped_cb) NativeGUI stopped! Waiting for it to restart...
00:03:07.286 VIDEOCTRL[9350] Info (vctrl_sm_interface.c:93 ServiceInit) Initializing VIDEOCTRL Service
00:03:07.303 VIDEOCTRL[9350] Info (vctrl_gpio.c:150 DayNightSensor_th) Display Day/Night is not on AUTO. No action taken
00:03:07.305 VIDEOCTRL[9350] Info (vctrl_xml.c:506 VCTRL_XML_Open) XML file loaded successfully
00:03:07.305 VIDEOCTRL[9350] Info (vctrl_xml.c:92 vctrl_loadSettingsData) Number of devices = 3
00:03:07.305 VIDEOCTRL[9350] Info (vctrl_xml.c:135 vctrl_extractDeviceSettings) Device = buc -- device ID = 0, device input = 0
00:03:07.305 VIDEOCTRL[9350] Info (vctrl_xml.c:135 vctrl_extractDeviceSettings) Device = dvd -- device ID = 1, device input = 1
00:03:07.305 VIDEOCTRL[9350] Info (vctrl_xml.c:135 vctrl_extractDeviceSettings) Device = tv -- device ID = 2, device input = 1
00:03:07.305 VIDEOCTRL[9350] Info (vctrl_xml.c:48 VCTRL_XML_ReadSettingsXML) Successfully loaded and parsed video_settings.xml!
00:03:07.373 VIDEOCTRL[9350] Info (vctrl_v4lcapture.c:843 dbus_connect)  (843) CDBusClientBase::connect - address: unix:path=/tmp/dbus_hmi_socket
00:03:07.379 VIDEOCTRL[9350] Error (vctrl_v4lcapture.c:887 dbus_connect) CDBusClientBase::connect - Not Primary Owner ret: 2
00:03:07.388 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:03:07.392 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:07.396 VBS_BUS_VDT[308] Error (mod_vdt.c:2377 VBS_VDT_GetSettingsInfo) Failed to get data from CPP settings registry!!!
00:03:07.405 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:03:07.405 VIDEOCTRL[9350] Info (vctrl_service_core.cpp:66 VCTRL_CORE_InitializeConstSettings) Setting Constant settings for device 0
00:03:07.405 VIDEOCTRL[9350] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:03:07.405 VIDEOCTRL[9350] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:03:07.405 VIDEOCTRL[9350] Error (vctrl_v4lcapture.c:300 VCTRL2V4LCAPTURE_setRegisterSubmap2) Failed to Open Submap 2
00:03:07.405 VIDEOCTRL[9350] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:03:07.405 VIDEOCTRL[9350] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:03:07.405 VIDEOCTRL[9350] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:03:07.405 VIDEOCTRL[9350] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:03:07.405 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:07.405 VIDEOCTRL[9350] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:03:07.405 VIDEOCTRL[9350] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:03:07.405 VIDEOCTRL[9350] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:03:07.405 VIDEOCTRL[9350] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:03:07.405 VIDEOCTRL[9350] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:03:07.405 VIDEOCTRL[9350] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:03:07.405 VIDEOCTRL[9350] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:03:07.405 VIDEOCTRL[9350] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:03:07.405 VIDEOCTRL[9350] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:03:07.405 VIDEOCTRL[9350] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:03:07.405 VIDEOCTRL[9350] Info (vctrl_service_core.cpp:110 VCTRL_CORE_GetDayNightMode) Value read from NVRAM day for node 'lvds_bright_mode'
00:03:07.405 VIDEOCTRL[9350] Info (vctrl_settings.c:237 BLM_VCTRL_OnChange_DayNight_Callback) DayNight Changed - value: DAY
00:03:07.405 VIDEOCTRL[9350] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setBrightness
00:03:07.405 VIDEOCTRL[9350] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setBrightness
00:03:07.405 VIDEOCTRL[9350] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:03:07.405 VIDEOCTRL[9350] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:03:07.405 VIDEOCTRL[9350] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setContrast
00:03:07.405 VIDEOCTRL[9350] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setContrast
00:03:07.405 VIDEOCTRL[9350] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:03:07.405 VIDEOCTRL[9350] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:03:07.405 VIDEOCTRL[9350] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setHue
00:03:07.405 VIDEOCTRL[9350] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setHue
00:03:07.405 VIDEOCTRL[9350] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:03:07.405 VIDEOCTRL[9350] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:03:07.405 VIDEOCTRL[9350] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:03:07.405 VIDEOCTRL[9350] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:03:07.405 VIDEOCTRL[9350] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:03:07.405 VIDEOCTRL[9350] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:03:07.405 VIDEOCTRL[9350] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:03:07.405 VIDEOCTRL[9350] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:03:07.405 VIDEOCTRL[9208] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Did not receive a reply. Possible causes include: the remote application did not send a reply, the message bus security policy blocked the reply, the reply timeout expired, or the network connection was broken. - methodName: setRegisterValue
00:03:07.405 VIDEOCTRL[9208] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:03:07.405 VIDEOCTRL[9208] Error (vctrl_v4lcapture.c:300 VCTRL2V4LCAPTURE_setRegisterSubmap2) Failed to Open Submap 2
00:03:07.405 VIDEOCTRL[9350] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:03:07.405 VIDEOCTRL[9350] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:03:07.405 VIDEOCTRL[9350] Info (vctrl_settings.c:95 VCTRL2BLM_SETTINGS_UpdateIsNight) LOADED NEW VIDEO SETTINGS
00:03:07.405 VBS_BUS_VDT[308] Error (mod_vdt.c:2377 VBS_VDT_GetSettingsInfo) Failed to get data from CPP settings registry!!!
00:03:07.405 SM[214] Error (sm_sockserver.cpp:1178 SM_SRVR_cmd_handshake_action) config_node->sock_element was not NULL in handshaking
00:03:07.405 VIDEOCTRL[9350] Info (vctrl_service_core.cpp:89 VCTRL_CORE_UpdateAllOtherSettings) Updating settings for device dvd
00:03:07.405 SM[214] Error (sm_sockserver.cpp:1179 SM_SRVR_cmd_handshake_action) sock 14 name jciNativegui
00:03:07.405 VIDEOCTRL[9350] Info (vctrl_service_core.cpp:89 VCTRL_CORE_UpdateAllOtherSettings) Updating settings for device tv
00:03:07.405 VIDEOCTRL[9350] Info (vctrl_settings.c:102 VCTRL2BLM_SETTINGS_UpdateIsNight) Sent new video settings to MMUI
00:03:07.405 NATIVEGUI[9355] Info (natgui.c:609 ServiceInit) SM Initilizing Service Native GUI.
00:03:07.405 NATIVEGUI[9355] Info (natgui.c:771 NatG_Initialize) Success in initializing queue for NATGUI
00:03:07.462 NATIVEGUI[9355] Info (natgui_settings_mgr.c:110 NatG_Settings_Init) NVRAM_Block_getValue return the currentLanguage = 1590
00:03:07.462 NATIVEGUI[9355] Info (natgui.c:780 NatG_Initialize) Success in initializing settings
00:03:07.462 NATIVEGUI[9355] Info (natgui.c:789 NatG_Initialize) Success in initializing wayland window wrapper
00:03:07.462 NATIVEGUI[9355] Info (natgui_surface_mgr.c:590 NatG_Redraw_Widget_Handler) NatG_Redraw_Widget_Handler
00:03:07.462 NATIVEGUI[9355] Info (natgui.c:1187 NatG_GetImageDetails) Image = IMG_BANNER (78), [d���, : (-498040832, 167772330)], Language = 1590
00:03:07.462 SM[9350] Warn (sm_svclauncher.cpp:221 sm_svclauncher_ThreadHandler) Service init_cb function returned: 1 for svc jciVideoctrl.
00:03:07.462 BLM_SETTINGS[9350] Info (settings_client_funs.cpp:880 BLM_SETTINGS_Client_ExtDisconnect) BLM_SETTINGS_Client_ExtDisconnect
00:03:07.462 BLM_SETTINGS[9350] Error (settings_client_funs.cpp:900 BLM_SETTINGS_Client_ExtDisconnect) client is NOT connected conn:(nil)
00:03:07.462 SM[214] Info (sm_sockserver.cpp:1661 SM_SRVR_cmd_stop_action) Waiting for processs 9350 to exit...
00:03:07.462 NATIVEGUI[9355] Error (natgui_interface.c:112 NatG_Init_Hmi_DBus) Failed to connect to HMI DBUS
00:03:07.462 NATIVEGUI[9355] Error (natgui.c:795 NatG_Initialize) Failed to create HMI dbus connection for NATGUI
00:03:07.462 NATIVEGUI[9355] Error (natgui.c:619 ServiceInit) Failed in initilizing the Service Native GUI
00:03:07.462 Std[] Error (: ) surface with id 'NATGUI_SURFACE' already exists
00:03:07.479 SM[9355] Warn (sm_svclauncher.cpp:221 sm_svclauncher_ThreadHandler) Service init_cb function returned: 1 for svc jcinativegui.
00:03:07.479 NATIVEGUI[9355] Info (natgui.c:667 ServiceTerm) Terminating RADIO Service
00:03:07.479 NATIVEGUI[9355] Info (natgui.c:898 natg_Destroy_SM_Client) natg_Destroy_SM_Client.
00:03:07.479 SM[214] Info (sm_sockserver.cpp:1661 SM_SRVR_cmd_stop_action) Waiting for processs 9360 to exit...
00:03:07.495 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 556, Message: version: 55.00.753A, length 16
00:03:07.503 NATGUICTRL[122] Info (ivi-shell-utils.c:195 ivi_surface_registered) Surface 9355-3 registered and it is not managed
00:03:07.525 NATIVEGUI[9360] Info (natgui.c:609 ServiceInit) SM Initilizing Service Native GUI.
00:03:07.525 NATIVEGUI[9360] Info (natgui.c:771 NatG_Initialize) Success in initializing queue for NATGUI
00:03:07.526 NATIVEGUI[9360] Info (natgui_settings_mgr.c:110 NatG_Settings_Init) NVRAM_Block_getValue return the currentLanguage = 1590
00:03:07.526 NATIVEGUI[9360] Info (natgui.c:780 NatG_Initialize) Success in initializing settings
00:03:07.564 NATIVEGUI[9360] Info (natgui.c:789 NatG_Initialize) Success in initializing wayland window wrapper
00:03:07.568 NATIVEGUI[9360] Error (natgui_interface.c:112 NatG_Init_Hmi_DBus) Failed to connect to HMI DBUS
00:03:07.568 NATIVEGUI[9360] Error (natgui.c:795 NatG_Initialize) Failed to create HMI dbus connection for NATGUI
00:03:07.568 NATIVEGUI[9360] Error (natgui.c:619 ServiceInit) Failed in initilizing the Service Native GUI
00:03:07.568 SM[9360] Warn (sm_svclauncher.cpp:221 sm_svclauncher_ThreadHandler) Service init_cb function returned: 1 for svc jcinativegui.
00:03:07.568 NATIVEGUI[9360] Info (natgui.c:667 ServiceTerm) Terminating RADIO Service
00:03:07.568 NATIVEGUI[9360] Info (natgui.c:898 natg_Destroy_SM_Client) natg_Destroy_SM_Client.
00:03:07.574 SM[214] Info (sm_sockserver.cpp:1661 SM_SRVR_cmd_stop_action) Waiting for processs 9360 to exit...
00:03:07.580 Std[] Error (: ) surface with id 'NATGUI_SURFACE' already exists
00:03:07.584 SM[214] Info (sm_sockserver.cpp:1664 SM_SRVR_cmd_stop_action) Process 9360 exited!
00:03:07.584 SM[214] Info (sm_sockserver.cpp:1664 SM_SRVR_cmd_stop_action) Process 9360 exited!
00:03:07.584 BUCPSA[340] Info (bucpsa_main.c:433 bucpsa_smcl_sm_nativegui_Stopped_cb) NativeGUI stopped! Waiting for it to restart...
00:03:07.603 SM[214] Info (sm.cpp:811 sm_ActionsForStoppedService) Svc jciNativegui[9360] stopped!
00:03:07.603 SM[214] Critical (sm.cpp:2049 SM_StartNeededChildren) SM detected that the service "jciNativegui"[-1] exited.
00:03:07.605 BUCPSA[340] Info (bucpsa_main.c:433 bucpsa_smcl_sm_nativegui_Stopped_cb) NativeGUI stopped! Waiting for it to restart...
00:03:08.420 VIDEOCTRL[9208] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Did not receive a reply. Possible causes include: the remote application did not send a reply, the message bus security policy blocked the reply, the reply timeout expired, or the network connection was broken. - methodName: setRegisterValue
00:03:08.420 VIDEOCTRL[9208] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:03:08.439 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:03:08.443 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:08.448 VBS_BUS_VDT[308] Error (mod_vdt.c:2377 VBS_VDT_GetSettingsInfo) Failed to get data from CPP settings registry!!!
00:03:08.459 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:03:08.459 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:08.461 VBS_BUS_VDT[308] Error (mod_vdt.c:2377 VBS_VDT_GetSettingsInfo) Failed to get data from CPP settings registry!!!
00:03:08.572 VBS_BUS_CAN[308] Info (mod_can_private.c:451 VBS_BUS_CAN_TAU_Status) Value of TAU destination Code = 1
00:03:08.572 VBS_BUS_CAN[308] Info (mod_can_private.c:473 VBS_BUS_CAN_TAU_Status) TAU Connect Standby Status [0 : Standby] [1 : Connected] [2 : Disconnected] = [1]
00:03:08.572 VBS_BUS_CAN[308] Info (mod_can_private.c:495 VBS_BUS_CAN_TAU_Status) Value of Aux Connect = 0
00:03:08.572 VBS_BUS_CAN[308] Info (mod_can_private.c:506 VBS_BUS_CAN_TAU_Status) Value of DAB Config Status = 0
00:03:08.802 BLM_SETTINGS[372] Error (settings_cpp_interface.cpp:799 GetRegistry_U8) interface to CPP_Settings error [27] while processing 2/com/jci/blm/settings/Vehicle/Voltage/_MIN_: U8:54
00:03:08.802 BLM_SETTINGS[372] Warn (settings_service_funs.cpp:8565 BLM_SETTINGS_IsValueNotInRange) <!> CPP_Settings returned an error
00:03:08.802 BLM_SETTINGS[372] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/Vehicle/Voltage <!> Value is not in range
00:03:09.421 VIDEOCTRL[9208] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Did not receive a reply. Possible causes include: the remote application did not send a reply, the message bus security policy blocked the reply, the reply timeout expired, or the network connection was broken. - methodName: setRegisterValue
00:03:09.421 VIDEOCTRL[9208] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:03:09.488 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:03:09.491 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:09.501 VBS_BUS_VDT[308] Error (mod_vdt.c:2377 VBS_VDT_GetSettingsInfo) Failed to get data from CPP settings registry!!!
00:03:09.501 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:03:09.501 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:09.510 VBS_BUS_VDT[308] Error (mod_vdt.c:2377 VBS_VDT_GetSettingsInfo) Failed to get data from CPP settings registry!!!
00:03:09.797 BLM_SETTINGS[372] Error (settings_cpp_interface.cpp:799 GetRegistry_U8) interface to CPP_Settings error [27] while processing 2/com/jci/blm/settings/Vehicle/Voltage/_MIN_: U8:54
00:03:09.797 BLM_SETTINGS[372] Warn (settings_service_funs.cpp:8565 BLM_SETTINGS_IsValueNotInRange) <!> CPP_Settings returned an error
00:03:09.797 BLM_SETTINGS[372] Warn (settings_vbs_interface.cpp:10112 BLM_SETTINGS_Set_VBS_Vehicle_NotificationSingle) 2/com/jci/blm/settings/Vehicle/Voltage <!> Value is not in range
netstat: fscanf
00:03:10.000 BLM_TIME[492] Info (blm_time_gps.cpp:279 blm_time_gpsSyncThread) Will now try to sync with GPS.
00:03:10.002 BLM_TIME[492] Info (blm_time_gps.cpp:430 blm_time_getLocation_cb) Got _cb from LDS/NNG - current timestamp is 0.
00:03:10.064 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 904, Message: [1;31mWrote: core567-[SM]CliReqHandl-SIGSEGV(11)-9259-186-55.00.753A.core.bz2[0m
00:03:10.064 process-coredump[] Debug (: ) File: process-coredump.cpp, Function: main, Line: 1019, Message: Lock file closed
00:03:10.065 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 639, Message: LOCK FILE NAME /var/lock/LCK9350.core
00:03:10.087 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 766, Message: [1;31mProcess 9350 ("[SM]CliReqHandl") abnormally exited due to signal SIGSEGV (11) with core file: /data_persist/log/dumps/core568-[SM]CliReqHandl-SIGSEGV(11)-9350-187-55.00.753A.core.bz2[0m
00:03:10.216 SM[214] Warn (sm_net.cpp:962 SM_NET_SocketListener) Service Manager SocketListener recv failed! Error: Connection reset by peer
00:03:10.219 SM[214] Info (sm_sockserver.cpp:1664 SM_SRVR_cmd_stop_action) Process 9350 exited!
00:03:10.240 SM[214] Info (sm.cpp:811 sm_ActionsForStoppedService) Svc jciVideoctrl[9350] stopped!
00:03:10.360 VIDEOCTRL[9536] Info (vctrl_sm_interface.c:93 ServiceInit) Initializing VIDEOCTRL Service
00:03:10.366 VIDEOCTRL[9536] Info (vctrl_gpio.c:150 DayNightSensor_th) Display Day/Night is not on AUTO. No action taken
00:03:10.366 VIDEOCTRL[9536] Info (vctrl_xml.c:506 VCTRL_XML_Open) XML file loaded successfully
00:03:10.366 VIDEOCTRL[9536] Info (vctrl_xml.c:92 vctrl_loadSettingsData) Number of devices = 3
00:03:10.366 VIDEOCTRL[9536] Info (vctrl_xml.c:135 vctrl_extractDeviceSettings) Device = buc -- device ID = 0, device input = 0
00:03:10.366 VIDEOCTRL[9536] Info (vctrl_xml.c:135 vctrl_extractDeviceSettings) Device = dvd -- device ID = 1, device input = 1
00:03:10.366 VIDEOCTRL[9536] Info (vctrl_xml.c:135 vctrl_extractDeviceSettings) Device = tv -- device ID = 2, device input = 1
00:03:10.366 VIDEOCTRL[9536] Info (vctrl_xml.c:48 VCTRL_XML_ReadSettingsXML) Successfully loaded and parsed video_settings.xml!
00:03:10.386 VIDEOCTRL[9536] Info (vctrl_v4lcapture.c:843 dbus_connect)  (843) CDBusClientBase::connect - address: unix:path=/tmp/dbus_hmi_socket
00:03:10.399 VIDEOCTRL[9536] Error (vctrl_v4lcapture.c:887 dbus_connect) CDBusClientBase::connect - Not Primary Owner ret: 2
00:03:10.405 VIDEOCTRL[9536] Info (vctrl_service_core.cpp:66 VCTRL_CORE_InitializeConstSettings) Setting Constant settings for device 0
00:03:10.405 VIDEOCTRL[9536] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:03:10.405 VIDEOCTRL[9536] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:03:10.405 VIDEOCTRL[9536] Error (vctrl_v4lcapture.c:300 VCTRL2V4LCAPTURE_setRegisterSubmap2) Failed to Open Submap 2
00:03:10.405 VIDEOCTRL[9536] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:03:10.405 VIDEOCTRL[9536] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:03:10.405 VIDEOCTRL[9536] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:03:10.405 VIDEOCTRL[9536] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:03:10.405 VIDEOCTRL[9536] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:03:10.405 VIDEOCTRL[9536] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:03:10.405 VIDEOCTRL[9536] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:03:10.405 VIDEOCTRL[9536] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:03:10.405 VIDEOCTRL[9536] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:03:10.405 VIDEOCTRL[9536] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:03:10.405 VIDEOCTRL[9536] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:03:10.405 VIDEOCTRL[9536] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:03:10.405 VIDEOCTRL[9536] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:03:10.405 VIDEOCTRL[9536] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:03:10.405 VIDEOCTRL[9536] Info (vctrl_service_core.cpp:110 VCTRL_CORE_GetDayNightMode) Value read from NVRAM day for node 'lvds_bright_mode'
00:03:10.405 VIDEOCTRL[9536] Info (vctrl_settings.c:237 BLM_VCTRL_OnChange_DayNight_Callback) DayNight Changed - value: DAY
00:03:10.405 VIDEOCTRL[9536] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setBrightness
00:03:10.405 VIDEOCTRL[9536] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setBrightness
00:03:10.405 VIDEOCTRL[9536] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:03:10.405 VIDEOCTRL[9536] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:03:10.405 VIDEOCTRL[9536] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setContrast
00:03:10.405 VIDEOCTRL[9536] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setContrast
00:03:10.405 VIDEOCTRL[9536] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:03:10.405 VIDEOCTRL[9536] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:03:10.405 VIDEOCTRL[9536] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setHue
00:03:10.405 VIDEOCTRL[9536] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setHue
00:03:10.405 VIDEOCTRL[9536] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:03:10.405 VIDEOCTRL[9536] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:03:10.405 VIDEOCTRL[9536] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:03:10.405 VIDEOCTRL[9536] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:03:10.405 VIDEOCTRL[9536] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:03:10.405 VIDEOCTRL[9536] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:03:10.405 VIDEOCTRL[9536] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: setRegisterValue
00:03:10.405 VIDEOCTRL[9536] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:03:10.405 VIDEOCTRL[9536] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Connection is closed - methodName: update
00:03:10.436 VIDEOCTRL[9536] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: update
00:03:10.436 VIDEOCTRL[9536] Info (vctrl_settings.c:95 VCTRL2BLM_SETTINGS_UpdateIsNight) LOADED NEW VIDEO SETTINGS
00:03:10.436 VIDEOCTRL[9536] Info (vctrl_service_core.cpp:89 VCTRL_CORE_UpdateAllOtherSettings) Updating settings for device dvd
00:03:10.436 VIDEOCTRL[9536] Info (vctrl_service_core.cpp:89 VCTRL_CORE_UpdateAllOtherSettings) Updating settings for device tv
00:03:10.436 VIDEOCTRL[9536] Info (vctrl_settings.c:102 VCTRL2BLM_SETTINGS_UpdateIsNight) Sent new video settings to MMUI
00:03:10.436 VIDEOCTRL[9208] Error (vctrl_v4lcapture.c:932 sendMessage) CDBusClientBase::sendMessage - Send error: Did not receive a reply. Possible causes include: the remote application did not send a reply, the message bus security policy blocked the reply, the reply timeout expired, or the network connection was broken. - methodName: setRegisterValue
00:03:10.436 VIDEOCTRL[9208] Error (vctrl_v4lcapture.c:937 sendMessage) CDBusClientBase::sendMessage - No message replied - methodName: setRegisterValue
00:03:10.442 SM[9536] Warn (sm_svclauncher.cpp:221 sm_svclauncher_ThreadHandler) Service init_cb function returned: 1 for svc jciVideoctrl.
00:03:10.442 BLM_SETTINGS[9536] Info (settings_client_funs.cpp:880 BLM_SETTINGS_Client_ExtDisconnect) BLM_SETTINGS_Client_ExtDisconnect
00:03:10.442 BLM_SETTINGS[9536] Error (settings_client_funs.cpp:900 BLM_SETTINGS_Client_ExtDisconnect) client is NOT connected conn:(nil)
00:03:10.442 SM[214] Info (sm_sockserver.cpp:1661 SM_SRVR_cmd_stop_action) Waiting for processs 9536 to exit...
00:03:10.442 VIDEOCTRL[9536] Info (vctrl_sm_interface.c:232 OnBLM_SETTINGSIsAvailable) BLM SETTINGS is available. Connecting...
00:03:10.442 BLM_SETTINGS[9536] Info (settings_client_funs.cpp:759 BLM_SETTINGS_Client_ExtConnect) com.jci.settings.videoctrl_9536_1
00:03:10.472 process-coredump[] Fatal (: ) File: process-coredump.cpp, Function: main, Line: 556, Message: version: 55.00.753A, length 16
00:03:10.542 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:03:10.545 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:10.552 VBS_BUS_VDT[308] Error (mod_vdt.c:2377 VBS_VDT_GetSettingsInfo) Failed to get data from CPP settings registry!!!
00:03:10.561 CPP_TIME[308] Info (time_dbus_client_funs.cpp:3137 TIME_Client_GetDatetime) request to cpp_time : conn 0x8bca0 : dbus 0x8c408 : name com.jci.modvdt2cpptime
00:03:10.561 CPP_TIME[439] Info (time__cpp_TimeEvent.cpp:1267 Dump) ServiceSendReadyEventsThread|TIME_GetDatetime_svc|(callB) 0 1970.01.01 00:00:00|0|0|0|0|disar|RUN|keep|4|0|0||occurrence:1970.01.01 00:00:00|deviation:0000.00.00 00:00:00|time:1970.01.01 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|0000.00.00 00:00:00|
00:03:10.561 VBS_BUS_VDT[308] Error (mod_vdt.c:2377 VBS_VDT_GetSettingsInfo) Failed to get data from CPP settings registry!!!
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
for(var i=0;i<1;i++){  
  paragrapgh = $('code').get(i);
  errs = paragrapgh.innerText.split("] Error (").join("]<span style='color: red;'> Error </span>("); // here I am spliting words by Error
  errs = errs.split("] Note (").join("]<span style='color: #4dffc7;'> Note </span>(");
  errs = errs.split("] Debug (").join("]<span style='color: #a34dff;'> Debug </span>(");
  errs = errs.split("] Warn (").join("]<span style='color: yellow;'> Warn </span>(");
  errs = errs.split("] Critical (").join("]<span style='color: #ff6c00;'> Critical </span>(");
  paragrapgh.innerHTML = errs;
}
</script>
