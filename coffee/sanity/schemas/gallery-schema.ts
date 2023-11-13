export default {
    name: 'gallery',
    type: 'document',
    title: 'Gallery',
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
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                }
            ],
        }
    ]
}