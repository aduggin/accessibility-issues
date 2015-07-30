---
title: "Content image with useless text alternative"
posted: 2015-07-30
---

## Issue

Content image with useless text alternative

<img src="https://www.google.com/images/errors/logo_sm_2_hr.png" alt="alternative text" />
```
<img src="logo_sm_2_hr.png" alt="alternative text" />
```

## Why is it a problem
Provided alternative text does not communicate image correctly so user not aware of correct content


## How to fix it
Use the alt attribute to specify a short text alternative

```
<img src="logo_sm_2_hr.png" alt="Google" />
```