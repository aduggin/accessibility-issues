---
title: "Accessibility Issues"
posted: 2015-05-14
---

A website to demonstrate and explain common accessibility issues
and to audit automated accessibility tools.

## Issues
<table>
<thead>
<tr>
<th scope="col">Accessibility Issue</th>
<th scope="col">Automatable</th>
<th scope="col">Tenon</th>
<th scope="col">Wave</th>
<th scope="col">aXe</th>
<th scope="col">Sniffer</th>
<th scope="col">Chrome</th>
<th scope="col">v.Nu</th>
<th scope="col">WCAG 2.0</th>
<th scope="col">Info</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="/accessibility-issues/image-no-alt.html">Image with no alt attribute</a></td>
<td>Automatable</td>
<td class="tool-result tool-result--tenon yes">Yes</td>
<td class="tool-result tool-result--wave yes">Yes</td>
<td class="tool-result tool-result--axe yes">Yes</td>
<td class="tool-result tool-result--codesniffer yes">Yes</td>
<td class="tool-result tool-result--chrome yes">Yes</td>
<td class="tool-result tool-result--vnu yes">Yes</td>
<td><a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html">1.1.1 Non-text Content</a></td>
<td></td>
</tr>
<tr>
<td><a href="/accessibility-issues/image-empty-alt.html">Content image with empty alt attribute</a></td>
<td>Manual</td>
<td class="tool-result tool-result--tenon manual">n/a</td>
<td class="tool-result tool-result--wave manual">n/a</td>
<td class="tool-result tool-result--axe manual">n/a</td>
<td class="tool-result tool-result--codesniffer manual">n/a</td>
<td class="tool-result tool-result--chrome manual">n/a</td>
<td class="tool-result tool-result--vnu manual">n/a</td>
<td><a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html">1.1.1 Non-text Content</a></td>
<td></td>
</tr>
<tr>
<td><a href="/accessibility-issues/image-bad-alt.html">Content image with useless text alternative</a></td>
<td>Manual</td>
<td class="tool-result tool-result--tenon manual">n/a</td>
<td class="tool-result tool-result--wave manual">n/a</td>
<td class="tool-result tool-result--axe manual">n/a</td>
<td class="tool-result tool-result--codesniffer manual">n/a</td>
<td class="tool-result tool-result--chrome manual">n/a</td>
<td class="tool-result tool-result--vnu manual">n/a</td>
<td><a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html">1.1.1 Non-text Content</a></td>
<td></td>
</tr>
<tr>
<td><a href="/accessibility-issues/h1-missing.html">Missing H1</a></td>
<td>Automatable</td>
<td class="tool-result tool-result--tenon no">No</td>
<td class="tool-result tool-result--wave alert">Yes (alert)</td>
<td class="tool-result tool-result--axe no">No</td>
<td class="tool-result tool-result--codesniffer yes">Yes</td>
<td class="tool-result tool-result--chrome no">No</td>
<td class="tool-result tool-result--vnu no">No</td>
<td><a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html">1.3.1 Info and Relationships</a></td>
<td><a href="http://www.w3.org/TR/WCAG20-TECHS/G141.html">G141</a></td>
</tr>
<tr>
<td><a href="/accessibility-issues/th-empty.html">Empty TH</a></td>
<td>Automatable</td>
<td class="tool-result tool-result--tenon yes">Yes</td>
<td class="tool-result tool-result--wave yes">Yes</td>
<td class="tool-result tool-result--axe yes">Yes</td>
<td class="tool-result tool-result--codesniffer no">No</td>
<td class="tool-result tool-result--chrome no">No</td>
<td class="tool-result tool-result--vnu no">no</td>
<td><a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html">1.3.1 Info and Relationships</a></td>
<td></td>
</tr>
<tr>
<td><a href="/accessibility-issues/color-contrast-insufficient.html">Insufficient color contrast</a></td>
<td>Automatable</td>
<td class="tool-result tool-result--tenon no">No</td>
<td class="tool-result tool-result--wave yes">Yes</td>
<td class="tool-result tool-result--axe yes">Yes</td>
<td class="tool-result tool-result--codesniffer no">No</td>
<td class="tool-result tool-result--chrome yes">Yes</td>
<td class="tool-result tool-result--vnu no">No</td>
<td><a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html">1.4.3 Contrast (Minimum)</a></td>
<td><a href="http://www.w3.org/TR/WCAG20-TECHS/G18.html">G18</a></td>
</tr>
<tr>
<td><a href="/accessibility-issues/title-missing.html">Missing page title</a></td>
<td>Automatable</td>
<td class="tool-result tool-result--tenon yes">Yes</td>
<td class="tool-result tool-result--wave yes">Yes</td>
<td class="tool-result tool-result--axe yes">Yes</td>
<td class="tool-result tool-result--codesniffer yes">Yes</td>
<td class="tool-result tool-result--chrome yes">Yes</td>
<td class="tool-result tool-result--vnu yes">Yes</td>
<td><a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-title.html">2.4.2 Page Titled</a></td>
<td><a href="http://www.w3.org/TR/WCAG20-TECHS/H25.html">H25</a></td>
</tr>
<tr>
<td><a href="/accessibility-issues/lang-missing.html">Missing &#39;lang&#39; attribute on the HTML element</a></td>
<td>Automatable</td>
<td class="tool-result tool-result--tenon yes">Yes</td>
<td class="tool-result tool-result--wave yes">Yes</td>
<td class="tool-result tool-result--axe yes">Yes</td>
<td class="tool-result tool-result--codesniffer yes">Yes</td>
<td class="tool-result tool-result--chrome yes">Yes</td>
<td class="tool-result tool-result--vnu no">No</td>
<td><a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/meaning-doc-lang-id.html">3.1.1 Language of Page</a></td>
<td><a href="http://www.w3.org/TR/WCAG20-TECHS/H57.html">H57</a></td>
</tr>
<tr>
<td><a href="/accessibility-issues/anchor-with-id-no-href-or-text.html">Anchor element with an ID but without an href or link text</a></td>
<td>Automatable</td>
<td class="tool-result tool-result--tenon no">No</td>
<td class="tool-result tool-result--wave no">No</td>
<td class="tool-result tool-result--axe no">No</td>
<td class="tool-result tool-result--codesniffer yes">Yes</td>
<td class="tool-result tool-result--chrome yes">Yes</td>
<td class="tool-result tool-result--vnu no">No</td>
<td><a href="http://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-rsv.html">4.1.2 Name, Role, Value</a></td>
<td><a href="http://www.w3.org/TR/WCAG20-TECHS/H91.html">H91</a></td>
</tr>
<tr>
<!-- <td><a href="/accessibility-issues/">insert</a></td> -->
<td>More to follow...</td>
<td></td>
<td class="tool-result tool-result--tenon insert">insert</td>
<td class="tool-result tool-result--wave insert">insert</td>
<td class="tool-result tool-result--axe insert">insert</td>
<td class="tool-result tool-result--codesniffer insert">insert</td>
<td class="tool-result tool-result--chrome insert">insert</td>
<td class="tool-result tool-result--vnu insert">insert</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>

## Tools
* [Tenon API](http://tenon.io/)
* [Wave API](http://wave.webaim.org/api/)
* [aXe](http://www.deque.com/products/axe/)
* [AccessSniff](https://github.com/yargalot/AccessSniff) - NodeJS library to run [HTML_CodeSniffer](http://squizlabs.github.io/HTML_CodeSniffer/), with Grunt and Gulp plugins
* [Google Chrome Accessibility Developer Tools](http://addyosmani.github.io/a11y/) (a11y)
* [The Nu Html Checker](https://validator.github.io/validator/) (v.Nu)


## Resources
* [Understanding WCAG 2.0](http://www.w3.org/TR/UNDERSTANDING-WCAG20/Overview.html)
* [Techniques for WCAG 2.0](http://www.w3.org/TR/WCAG20-TECHS/Overview.html)