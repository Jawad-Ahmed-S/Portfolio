import {defineField, defineType} from 'sanity'

export const LearningObj = defineType({
  name: 'Learning',
  title: 'learning',
  type: 'document',
  fields: [
    defineField({
      name: 'LearningObj',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})