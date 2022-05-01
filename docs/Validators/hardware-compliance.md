---
title: Hardware Compliance
---

## Information Regarding SGX Compliance and IDEP Network
This is intended to guide you in selecting SGX compliant hardware for the IDEP Network mainnet Antora.

## CPUs
Intel XEON

Verified compliant processors:

* CPU: `E-2276G`, `E-2278G`, `E-2286G`, `E-2288G`, `E-2176G`, `E-2178G`, `E-2186G`, `E-2188G`

Verified non-compliant processors:

* CPU: all 3rd generation `E-23xxG` processors are confirmed **not** working.

IMPORTANT NOTE: **CPU must support SGX via SPS**. CPUs that only support SGX via intelME will not work.

[List of Processors that Support Intel® Software Guard Extensions](https://www.intel.com/content/www/us/en/support/articles/000028173/processors.html)

### Supermicro Information
Supermicro builds several boards that are mainnet compliant. Here is a current working list, as of May 31, 2021.

1. Motherboard : `X11SCM-F`
* [X11SCM-F Motherboard link](https://www.supermicro.com/products/motherboard/X11/X11SCM-F.cfm)
* Barebone version `SYS-5019C-M` [SYS-5019C-M link](https://www.supermicro.com/en/products/system/1U/5019/SYS-5019C-M.cfm).

2. Motherboard : `X11SCM-F`
* [X11SCM-F Motherboard link](https://www.supermicro.com/products/motherboard/X11/X11SCM-F.cfm)
* Barebone version `SYS-5019C-MR` [SYS-5019C-MR link](https://www.supermicro.com/en/products/system/1U/5019/SYS-5019C-MR.cfm).

3. Motherboard : `X11SCW-F`
* [X11SCW-F Motherboard link](https://www.supermicro.com/products/motherboard/X11/X11SCW-F.cfm)
* Barebone version `SYS-5019C-WR` [SYS-5019C-WR link](https://www.supermicro.com/en/products/system/1U/5019/SYS-5019C-WR.cfm).

4. Motherboard `X11SCZ-F`

5. Motherboard `X11SSL-F`

#### Dell Information
1. Build Dell `R240`

#### HP Information
1. Build HP `DL20 G10`

Contributers
* FreshSCRT
* secretnodes
* chainofsecrets
* Mario