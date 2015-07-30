---
title: "Empty TH"
posted: 2015-05-19
---

## Issue

TH element with no text in it

<table>
<tr>
<th></th>
<th>Header 2</th>
</tr>
<tr>
<td>Cell A1</td>
<td>Cell B1</td>
</tr>
</table>


```
<table>
<tr>
<th></th>
<th>Header 2</th>
</tr>
<tr>
<td>Cell A1</td>
<td>Cell B1</td>
</tr>
</table>
```


## Why is it a problem
People with moderately low vision will not be able to read the text

## How to fix it
Add text to TH or change to a TD

```
<table>
<tr>
<th>Header 1</th>
<th>Header 2</th>
</tr>
<tr>
<td>Cell A1</td>
<td>Cell B1</td>
</tr>
</table>
```

or

```
<table>
<tr>
<td></td>
<th>Header 2</th>
</tr>
<tr>
<td>Cell A1</td>
<td>Cell B1</td>
</tr>
</table>
```
