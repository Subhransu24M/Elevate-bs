import { defineField,defineType } from "sanity"
export const category = defineType({
    name:'category',
    title:'Category',
    type:'document',
    fields:[
        defineField({
            name:'title',
            type:'string',
            title:'CategoryName',
            validation: rule => rule.required()
        }),
        //slug
        defineField({
            name:'slug',
            type:'slug',
            title:'slug',
            options: {
                source: 'title',
                maxLength: 90,
            },
            validation: rule => rule.required()
        })
    ]


})