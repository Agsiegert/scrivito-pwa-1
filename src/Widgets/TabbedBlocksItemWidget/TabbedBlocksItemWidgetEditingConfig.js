import * as Scrivito from 'scrivito';

Scrivito.provideEditingConfig('TabbedBlocksItemWidget', {
    title: 'Block',
    attributes: {

        title: {
            title: 'Title',
        },
        text: {
            title: 'Text',
        },
        image: {
            title: 'Image',
        },
        tags: {
            title: 'Tags',
        },
    },
    properties: [
        'title',
        'text',
        'image',
        'tags',
    ],

});