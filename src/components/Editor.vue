<template>
  <div class="doedit-container" :dir="rtl ? 'rtl' : 'ltr'">
    <div class="toolbar">
      <i
        class="material-icons-outlined open-options"
        ref="toolbar_btn"
        @click="openToolbar"
      >add_circle_outline</i>
      <div class="options">
        <div class="option" v-if="options.video"></div>
      </div>
    </div>
    <div class="editor" @keydown="enter" contenteditable="true"></div>
  </div>
</template>

<script>
export default {
  name: "Editor",
  props: {
    options: {
      type: Object,
      default: () => {
        return {
          video: true,
          sound: true,
          picture: true,
          blockquote: true,
          splitter: true,
          headings: true,
          list: true,
          codeblock: true,
          bold: false,
          link: true,
          gallery: false,
        };
      },
      required: false,
    },
    rtl: {
      type: Boolean,
      default: false,
      required: false,
    },
    lang: {
      type: String,
      default: "en",
    },
  },
  mounted() {
    window.document.execCommand("defaultParagraphSeparator", false, "p");
    document.addEventListener("selectionchange", () => {
      console.log(document.getSelection());
    });
  },
  data() {
    return {};
  },
  methods: {
    enter(e) {
      if (e.keyCode === 13) {
        document.execCommand("removeFormat");
      }
    },
    boldSelected() {
      window.document.execCommand("bold");
    },
    openToolbar() {
      const btn = this.$refs.toolbar_btn;
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/popover";
</style>

<style lang='scss' scoped>
@import "../assets/scss/styles";
.editor::v-deep p {
  text-align: justify;
  unicode-bidi: inherit;
}
.doedit-container {
  text-align: justify;
  border: 1px solid #c8c8c8;
}
.editor {
  padding: 5px;
  border: 1px solid #fff;
  unicode-bidi: plaintext;
}
.toolbar {
  display: flex;
  border-bottom: 1px solid #c8c8c8;
  padding: 5px;
}
.open-options:hover {
  color: rgb(54, 54, 54);
  cursor: pointer;
}
</style>
