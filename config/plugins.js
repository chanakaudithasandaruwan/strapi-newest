// // plugins.js
// module.exports = () => {
//   return {
//     ckeditor: {
//       enabled: true,
//       //   config: {
//       //     plugin: {
//       //       // disable data-theme tag setting //
//       //       setAttribute: true,
//       //       // disable strapi theme, will use default ckeditor theme //
//       //       strapiTheme: true,
//       //       // styles applied to editor container (global scope) //
//       //       styles: `
//       //       .ck.ck-editor__main .ck-focused{
//       //         max-height: 700px;
//       //       }
//       //       :root{
//       //         --ck-color-focus-border:red;
//       //         --ck-color-text:red;
//       //       }
//       //       `,
//       //     },
//       //     editor: {
//       //       // editor default config

//       //       // https://ckeditor.com/docs/ckeditor5/latest/features/markdown.html
//       //       // if you need markdown support and output set: removePlugins: [''],
//       //       // default is
//       //       // removePlugins: ['Markdown'],

//       //       // https://ckeditor.com/docs/ckeditor5/latest/features/toolbar/toolbar.html
//       //       toolbar: {
//       //         items: [
//       //           // "pastefromoffice",
//       //           // "wordcount",
//       //           // "mediaembedtoolbar",
//       //           // "essentials",
//       //           // "dataschema",
//       //           // "datafilter",
//       //           // "autolink",
//       //           "sourceEditing",
//       //           "paragraph",
//       //           "heading1",
//       //           "heading2",
//       //           "heading3",
//       //           "heading4",
//       //           "heading5",
//       //           "heading6",
//       //           "|",
//       //           "bold",
//       //           "italic",
//       //           "fontColor",
//       //           "fontBackgroundColor",
//       //           "fontFamily",
//       //           "underline",
//       //           "fontSize",
//       //           "removeFormat",
//       //           "|",
//       //           "bulletedList",
//       //           "todoList",
//       //           "numberedList",
//       //           "|",
//       //           "alignment",
//       //           "outdent",
//       //           "indent",
//       //           "horizontalLine",
//       //           "|",
//       //           "StrapiMediaLib",
//       //           "insertTable",
//       //           "blockQuote",
//       //           "mediaEmbed",
//       //           "link",
//       //           "highlight",
//       //           "|",
//       //           "htmlEmbed",
//       //           "code",
//       //           "codeBlock",
//       //           "|",
//       //           "subscript",
//       //           "superscript",
//       //           "strikethrough",
//       //           "specialCharacters",
//       //           "|",
//       //           "heading",
//       //           "fullScreen",
//       //           "undo",
//       //           "redo",
//       //         ],
//       //       },
//       //       mediaEmbed: {
//       //         previewsInData: true,
//       //         extraProviders: [
//       //           "instagram",
//       //           "twitter",
//       //           "googleMaps",
//       //           "flickr",
//       //           "facebook",
//       //           "dailymotion",
//       //           "spotify",
//       //           "youtube",
//       //           "vimeo",
//       //         ],
//       //       },
//       //       link: {
//       //         // addTargetToExternalLinks: true,
//       //         linkShowAdvancedTab: false,
//       //         decorators: {
//       //           addTargetToExternalLinks: {
//       //             classes: "newLink",
//       //             mode: "manual",
//       //             label: "default",
//       //             defaultValue: true,
//       //             attributes: {
//       //               target: "_blank",
//       //               rel: "noopener",
//       //             },
//       //           },
//       //           openInNewTab: {
//       //             mode: "manual",
//       //             label: "noreferrer",
//       //             // defaultValue: true,
//       //             attributes: {
//       //               target: "_blank",
//       //               rel: "noopener noreferrer",
//       //             },
//       //           },
//       //           noFollowLinks: {
//       //             mode: "manual",
//       //             label: "nofollow, and noreferrer",
//       //             attributes: {
//       //               target: "_blank",
//       //               rel: "noopener noreferrer nofollow",
//       //             },
//       //           },
//       //           sponsonrded: {
//       //             mode: "manual",
//       //             label: "sponsored, nofollow, and noreferrer",
//       //             attributes: {
//       //               target: "_blank",
//       //               rel: "noopener noreferrer nofollow sponsored",
//       //             },
//       //           },
//       //         },
//       //       },

//       //       // https://ckeditor.com/docs/ckeditor5/latest/features/font.html
//       //       fontSize: {
//       //         options: [9, 11, 13, "default", 17, 19, 21, 27, 35],
//       //         supportAllValues: false,
//       //       },
//       //       fontFamily: {
//       //         options: [
//       //           "default",
//       //           "Arial, Helvetica Neue, Helvetica, Source Sans Pro, sans-serif",
//       //           "Courier New, Courier, monospace",
//       //           "Georgia, serif",
//       //           "Lucida Sans Unicode, Lucida Grande, sans-serif",
//       //           "Tahoma, Geneva, sans-serif",
//       //           "Times New Roman, Times, serif",
//       //           "Trebuchet MS, Helvetica, sans-serif",
//       //           "Verdana, Geneva, sans-serif",
//       //           "Roboto, Roboto Black, Roboto Medium, Roboto Light, sans-serif",
//       //         ],
//       //         supportAllValues: true,
//       //       },
//       //       fontColor: {
//       //         columns: 5,
//       //         documentColors: 10,
//       //       },
//       //       fontBackgroundColor: {
//       //         columns: 5,
//       //         documentColors: 10,
//       //       },
//       //       // https://ckeditor.com/docs/ckeditor5/latest/features/ui-language.html
//       //       // default language: 'en',
//       //       // https://ckeditor.com/docs/ckeditor5/latest/features/images/images-overview.html
//       //       image: {
//       //         resizeUnit: "%",
//       //         styles: {
//       //           // A list of completely custom styling options.
//       //         },
//       //         resizeOptions: [
//       //           {
//       //             name: "resizeImage:original",
//       //             value: null,
//       //             icon: "original",
//       //           },
//       //           {
//       //             name: "resizeImage:25",
//       //             value: "25",
//       //             icon: "small",
//       //           },
//       //           {
//       //             name: "resizeImage:50",
//       //             value: "50",
//       //             icon: "medium",
//       //           },
//       //           {
//       //             name: "resizeImage:75",
//       //             value: "75",
//       //             icon: "large",
//       //           },
//       //         ],
//       //         toolbar: [
//       //           "toggleImageCaption",
//       //           "imageTextAlternative",
//       //           "imageStyle:inline",
//       //           "imageStyle:block",
//       //           "imageStyle:side",
//       //           "linkImage",
//       //           "resizeImage:25",
//       //           "resizeImage:50",
//       //           "resizeImage:75",
//       //           "resizeImage:original",
//       //         ],
//       //       },
//       //       // https://ckeditor.com/docs/ckeditor5/latest/features/table.html
//       //       table: {
//       //         contentToolbar: [
//       //           "tableColumn",
//       //           "tableRow",
//       //           "mergeTableCells",
//       //           "tableCellProperties",
//       //           "tableProperties",
//       //           "toggleTableCaption",
//       //         ],
//       //       },
//       //       // https://ckeditor.com/docs/ckeditor5/latest/features/headings.html
//       //       heading: {
//       //         options: [
//       //           {
//       //             model: "paragraph",
//       //             title: "Paragraph",
//       //             class: "ck-heading_paragraph",
//       //           },
//       //           {
//       //             model: "heading1",
//       //             view: "h1",
//       //             title: "Heading 1",
//       //             class: "ck-heading_heading1",
//       //           },
//       //           {
//       //             model: "heading2",
//       //             view: "h2",
//       //             title: "Heading 2",
//       //             class: "ck-heading_heading2",
//       //           },
//       //           {
//       //             model: "heading3",
//       //             view: "h3",
//       //             title: "Heading 3",
//       //             class: "ck-heading_heading3",
//       //           },
//       //           {
//       //             model: "heading4",
//       //             view: "h4",
//       //             title: "Heading 4",
//       //             class: "ck-heading_heading4",
//       //           },
//       //           {
//       //             model: "heading5",
//       //             view: "h5",
//       //             title: "Heading 5",
//       //             class: "ck-heading_heading5",
//       //           },
//       //           {
//       //             model: "heading6",
//       //             view: "h6",
//       //             title: "Heading 6",
//       //             class: "ck-heading_heading6",
//       //           },
//       //         ],
//       //       },
//       //       // https://ckeditor.com/docs/ckeditor5/latest/features/general-html-support.html
//       //       // Regular expressions (/.*/  /^(p|h[2-4])$/' etc) for htmlSupport does not allowed in this config
//       //       htmlSupport: {
//       //         allow: [
//       //           {
//       //             name: "img",
//       //             attributes: {
//       //               sizes: true,
//       //               loading: true,
//       //             },
//       //           },
//       //         ],
//       //       },
//       //     },
//       //   },
//     },
//   };
// };
