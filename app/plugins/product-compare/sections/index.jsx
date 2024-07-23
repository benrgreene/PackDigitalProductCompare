import { registerSection } from '@pack/react';

import { CompareTable } from './CompareTable/CompareTable.jsx'
import { StaticTable } from './StaticTable/StaticTable.jsx'

export function setupSections () {
  registerSection(CompareTable, { name: 'compare-table' })
  registerSection(StaticTable, { name: 'static-table' })
}