---
title: What you need to know about Photography
description: >-
  Heading example Here is example of hedings. You can use this heading by
  following markdownify rules.
image: /images/blog-3.jpg
date: 2022-06-02T06:00:00Z
draft: false
---
Nemo vel ad consectetur namut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.

> This is a **change** in the demo.

* A list
* Another list item
  * A sublist item
  * Another sublist item
* A list continued

![A placeholder image](/images/blog-6.jpg)

Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!

<img src="/uploads/square-portrait.png" alt="Tom" height="1625" width="1625" />

## Creative Design

Nam ut rutrum ex, venenatis sollicitudin urna. Aliquam erat volutpat. Integer eu ipsum sem. Ut bibendum lacus vestibulum maximus suscipit. Quisque vitae nibh iaculis neque blandit euismod.

<table><thead><tr><th><p>Col 1</p></th><th><p>Col 2</p></th><th><p>Col 3</p></th></tr></thead><tbody><tr><td><p>Elephant</p></td><td><p>Giraffe</p></td><td><p>Lion</p></td></tr><tr><td><p>Aardvark</p></td><td><p>Anteater</p></td><td><p>Monke</p></td></tr><tr><td><p>Dog</p></td><td><p>Cat</p></td><td><p>Rabbit</p></td></tr></tbody></table>

> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!

Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo vel ad consectetur ut aperiam. Itaque eligendi natus aperiam? Excepturi repellendus consequatur quibusdam optio expedita praesentium est adipisci dolorem ut eius!

```javascript
const pagesSchema = z.object({
  title: z.string(),
  meta_title: z.string().optional(),
  description: z.string().optional(),
  image: z.string().optional(),
  layout: z.string().optional(),
  draft: z.boolean().optional(),
  info: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    contacts: z.array(z.string()).optional()
  }).optional(),
  faqs: z.array(z.object({
    title: z.string(),
    answer: z.string(),
  })).optional()
});
```