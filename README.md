# Do Edit #


> 🚧
> **Project is under development and it's not ready to use.**

___Rich Text Editor for VueJs___

``````````
npm install do-edit
``````````

# Basic Example #

**setup**

`````js
import DoEdit from "./DoEdit";

Vue.use(DoEdit);
`````
**use it**

`````html
<template>
  <div id="app">
    <do-edit />
  </div>
</template>

<script>
export default {
  name: "Example"
};
</script>
`````

# Props #

Property  | Type | Default
-------- | ------|---------
 Options | Object | [options](#options "Goto options")
rtl | boolean | false
lang | Object | [translation](#translation "Goto translation")

# Options 

Property  | Type | Default
-------- | ------|---------
 video | boolean | ``true``
sound | boolean | ``true``
picture | boolean | ``true``
blockquote | boolean | ``true``
splitter | boolean | ``true``
heading | Array | ``['h1','h2','h3']``
list | boolean | ``true``
codeblock | boolean | ``true``
bold | boolean | ``false``
link | boolean | ``false``
gallery | boolean | ``false``
paragraph | Array | ['text_align','direction']

# Translation
