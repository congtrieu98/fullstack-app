import {
  AlignFeature,
  EXPERIMENTAL_TableFeature,
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
  UploadFeature,
} from '@payloadcms/richtext-lexical'
import { Block } from 'payload'

const GridBlock: Block = {
  slug: 'gridBlock',
  interfaceName: 'GridBlock',
  labels: {
    singular: 'Grid Block',
    plural: 'Grid Blocks',
  },
  fields: [
    {
      name: 'items',
      label: 'Bài viết',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'image',
          label: 'Hình ảnh',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'title',
          label: 'Tiêu đề',
          type: 'text',
          required: true,
        },
        {
          name: 'content',
          label: 'Nội dung',
          type: 'richText',
          editor: lexicalEditor({
            features: ({ rootFeatures }) => {
              return [
                ...rootFeatures,
                HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                FixedToolbarFeature(),
                InlineToolbarFeature(),
                UploadFeature(),
                EXPERIMENTAL_TableFeature(),
                AlignFeature(),
              ]
            },
          }),
          required: true,
        },
      ],
    },
  ],
}

export default GridBlock
