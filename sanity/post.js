import { defineType, defineField, defineArrayMember } from "sanity"

export const post = defineType({
    name: 'post',
    type: 'document',
    title: 'Post',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Post Title',
            validation: rule => [
                rule.required().min(10).error('A title of min. 10 characters is required'),
                rule.max(60).warning('Shorter titles are usually better')
            ]
        }),
        //slug
        defineField({
            name: 'slug',
            type: 'slug',
            title: 'Permalink or Slug',
            options: {
                source: 'title',
                maxLength: 90,
            },
            validation: rule => rule.required()
        }),

        // Short Description

        defineField({
            title: 'Short Description',
            name: 'exceprt',
            type: 'text',
            validation:rule=> rule.required().min(50).error('Short description of min. 50 characters is required')
        }),

        // Featured Image

        defineField({
            title:'Featured Image',
            name:'image',
            type:'image',
            fields: [
                {
                  name: 'caption',
                  type: 'string',
                  title: 'Caption',
                },
                {
                    name: 'title',
                    type: 'string',
                    title: 'Title',
                  },
                {
                  name: 'attribution',
                  type: 'string',
                  title: 'Alt Attribute',
                }
              ]

        }),

        // Content or Long Description

        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
              {
                type: 'block'
              },
              {
                type: 'image',
                fields: [
                  {
                    type: 'text',
                    name: 'alt',
                    title: 'Alternative text',
                    description: `Some of your visitors cannot see images, 
                      be they blind, color-blind, low-sighted; 
                      alternative text is of great help for those 
                      people that can rely on it to have a good idea of 
                      what\'s on your page.`,
                    options: {
                      isHighlighted: true
                    }
                  }
                ]
              }
            ]
          }),

        // category reference

        // defineField({
        //     name:'category',
        //     title:'Category',
        //     type:'reference',
        //     to:[{
        //         type:'category'
        //     }]
        // }),

        defineField({
          name:'categories',
          title:'Select Category',
          type:'array',
          of:[{
              type:'reference',
              to:[{type:'category'}]
          }]
      }),

        // SEO Reference

        defineField({
          name:'seotitle',
          type:'string',
          title:'SEO Title',
        }),
        defineField({
          name:'description',
          type:'string',
          title:'Meta Description',
        }),
        defineField({
          name:'keywords',
          type:'string',
          title:'Meta Keywords',
        })

    ]

})