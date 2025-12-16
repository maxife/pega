import React from 'react';
import { Table } from '@pega/cosmos-react-core';

type RowItem = {
  pyID: string;
  pyLabel: string;
  pxCreateOpName: string;
};

const items: RowItem[] = [
  { pyID: 'WO-12345', pyLabel: 'Onboarding client', pxCreateOpName: 'Halim.Yahia' },
  { pyID: 'WO-12346', pyLabel: 'Validation KYC',     pxCreateOpName: 'J.Dupont'     },
  { pyID: 'WO-12347', pyLabel: 'Ouverture dossier',  pxCreateOpName: 'A.Martin'     }
];

export default function MyCoHyaLibraryAllWorkLanding() {
  return (
    <Table
      aria-label="Work objects"
      // Selon ta version, ces props peuvent s'appeler columns/rows ou columns/items
      columns={[
        { key: 'pyID',          label: 'ID',        sortable: true },
        { key: 'pyLabel',       label: 'Label',     sortable: true },
        { key: 'pxCreateOpName',label: 'Créé par',  sortable: true }
      ] as any}
      items={items}
      // Optionnels selon version :
      // defaultSort={{ column: 'pyID', direction: 'asc' }}
      // onSortChange={(sort) => ...}
      // density="compact" stickyHeader selectionMode="none"
      // cellRenderer={(colKey, row) => custom JSX si besoin}
    />
  );
}
