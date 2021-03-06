import * as Scrivito from 'scrivito';
import { registerTextExtract } from '../../utils/textExtractRegistry';

const ParagraphWidget = Scrivito.provideWidgetClass('ParagraphWidget', {
    attributes: {
        text: 'html',
        textSize: ['enum', { values: ['small', 'medium', 'large'] }],
        alignment: ['enum', { values: ['left', 'center', 'right'] }],
        border: ['enum', { values: ['yes', 'no'] }],
        shadow: ['enum', { values: ['small', 'large'] }],
        rounded: ['enum', { values: ['yes', 'no'] }],
        useGradient: ['enum', { values: ['yes', 'no'] }],
        backgroundColor: [
            'enum',
            {
                values: [
                    'white',
                    'greywhite',
                    'greylight',
                    'greymiddle',
                    'greydark',
                    'primary',
                    'secondary',
                    'accent',
                    'dark-color',
                    'light-color',
                    'transparent'



                ],
            },
        ],

    },
});

registerTextExtract('ParagraphWidget', [
    { attribute: 'text', type: 'html' },
]);
export default ParagraphWidget;