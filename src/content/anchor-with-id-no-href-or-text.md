---
title: "Anchor element with an ID but without a href or link text"
posted: 2015-05-15
---

<a id="content"></a>

## Issue
Anchor element with an ID but without a href or link text

```
<a id="content"></a>
```

## Why is it a problem
note: I need to find out if this is an issue.  Does it cause odd behaviour for screen reader or key board users?

## How to fix it
Move its ID to a parent or nearby element

```
<div id="content">
```