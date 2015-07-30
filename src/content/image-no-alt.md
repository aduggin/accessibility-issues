---
title: "Missing H1"
posted: 2015-07-29
---

## Issue

Image with no alt attribute

<img src="https://www.google.com/images/errors/logo_sm_2_hr.png" />
```
<img src="logo_sm_2_hr.png" />
```

## Why is it a problem
Screen reader will read out the src of the image


## How to fix it
Use the alt attribute to specify a short text alternative

```
<img src="logo_sm_2_hr.png" alt="Google" />
```