---
title: "Content image with empty alt attribute"
posted: 2015-07-29
---

## Issue

Content image with empty alt attribute

<img src="https://www.google.com/images/errors/logo_sm_2_hr.png" />
```
<img src="logo_sm_2_hr.png" alt="" />
```

## Why is it a problem
Screen reader user will be unaware of content of image as no alternative text provided


## How to fix it
Use the alt attribute to specify a short text alternative

```
<img src="logo_sm_2_hr.png" alt="Google" />
```