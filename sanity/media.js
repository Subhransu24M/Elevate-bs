import { defineType,defineField } from "sanity";

export const media = defineType({
    name: 'media',
    type:"document",
    title: 'Media',

    fields:[
        defineField({
            name: 'pdfFile',
            type: 'file',
            title:'File Name', 
            options: {
              accept: 'application/pdf'
            }
          })
    ]

})