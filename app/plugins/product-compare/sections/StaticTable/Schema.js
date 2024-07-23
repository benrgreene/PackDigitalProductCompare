// imports from default theme - need to add fallbacks if it doesn't exist
import { COLORS } from '~/settings/common.ts'

export const StaticTableSchema = {
  category: 'Text',
  label: 'Static Compare Table',
  key: 'static-table',
  fields: [
    {
      component: 'group',
      name: 'general',
      label: 'General Settings',
      fields: [
        {
          label: 'Heading',
          name: 'heading',
          component: 'text',
          defaultValue: 'Compare Products'
        },
        {
          label: 'Split Products By Type?',
          name: 'split_products',
          component: 'select',
          options: [
            { label: 'No', value: 'no' },
            { label: 'Yes', value: 'yes' }
          ],
          defaultValue: 'no'
        },
        {
          label: 'Compare Group Display',
          name: 'group_display',
          component: 'select',
          options: [
            { label: 'List', value: 'list' },
            { label: 'Tabs', value: 'tabs' }
          ],
          defaultValue: 'list'
        }
      ]
    },
    {
      component: 'group',
      name: 'colors',
      label: 'Color Settings',
      fields: [
        {
          label: 'Title Color',
          name: 'title_color',
          component: 'select',
          options: COLORS,
          defaultValue: 'var(--black)'
        },
        {
          label: 'Product Type Subtitle Color',
          name: 'subtitle_color',
          component: 'select',
          options: COLORS,
          defaultValue: 'var(--black)'
        },
        {
          label: 'Table Text Color',
          name: 'table_text_color',
          component: 'select',
          options: COLORS,
          defaultValue: 'var(--black)'
        },
        {
          label: 'Table Row Color',
          name: 'table_row_background',
          component: 'select',
          options: COLORS,
          defaultValue: 'var(--white)'
        },
        {
          label: 'Table Row Color (Alt)',
          name: 'table_row_background_alt',
          component: 'select',
          options: COLORS,
          defaultValue: 'var(--off-white)'
        },
        {
          label: 'Compare Table Scrollbar Color',
          name: 'scrollbar_color',
          component: 'select',
          options: COLORS,
          defaultValue: 'var(--primary)'
        }
      ]
    },
    {
      component: 'group-list',
      name: 'product_field',
      label: 'Product Field',
      itemProps: {
        label: "Product Field: {{item.field_display_title}}"
      },
      fields: [
        {
          label: 'Field Display Title',
          name: 'field_display_title',
          component: 'text'
        },
        {
          label: 'Field Display Type',
          name: 'field_display_type',
          component: 'select',
          options: [
            { label: 'Text', value: 'text' },
            { label: 'Boolean', value: 'boolean' },
            { label: 'Price', value: 'price' },
            { label: 'Add To Cart', value: 'atc' }
          ],
          defaultValue: 'text'
        },
        {
          label: 'Field Type',
          name: 'field_type',
          component: 'select',
          options: [
            { label: 'Property', value: 'property' },
            { label: 'Metafield', value: 'metafield' }
          ],
          defaultValue: 'property'
        },
        {
          label: 'Property Key',
          name: 'property_key',
          component: 'text'
        },
        {
          label: 'Product Type',
          name: 'product_type',
          component: 'text'
        }
      ]
    },
    {
      component: 'list',
      name: 'products_to_display',
      label: 'Product Field',
      field: {
        component: 'productSearch'
      }
    }
  ]
}