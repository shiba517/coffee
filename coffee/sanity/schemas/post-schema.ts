export default {
    name: 'post',
    type: 'document',
    title: 'Posts',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96
            }
        },
        {
            name: 'overview',
            type: 'string',
            title: 'Overview'
        },
        {
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [
                {
                    type: 'block'
                },
                {
                    type: 'image',
                    fields: [
                        {
                            name: 'alt',
                            type: 'text',
                            title: 'Alternative Text',
                        }
                    ]
                }
            ]
        }
    ]
}