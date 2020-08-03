---
title: Adding a section
---

Adding a section is easy. Before a section is added:

```yaml
guide:
  # main title in sidebar
  title: Guide
  root: /guide
  # links under title
  links:
    - text: Introduction
      slug: /
    - text: Installation
      slug: /installation
  
  # sections under links
  # each section has its own set of links
  sections:
    - title: Sections
      links:
        - text: Adding
          slug: /section-adding
          this-is: a super long line that is here for new reasons and when it is the thinkg that he ate and whu exactly he ate it at this time then how then how
```

It's pretty easy!

There are various other things we can do, like `blockquote`:

> This is my favorite blockquote, the best in town

It is lots of fun:
- because it is
- it really is it is is it?

Let's add some more content here because why not
1. This is number One
2. This is number Tow
3. This is number Three
  - This is a sub list
    - Let's do some more nesting just because we can