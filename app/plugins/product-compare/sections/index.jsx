import { registerSection } from '@pack/react';

import { CompareTable } from './CompareTable.jsx'

export function setupSections () {
  registerSection(CompareTable, { name: 'compare-table' })
}