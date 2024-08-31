import { useMemo } from 'react';
import SummaryCard from '../cards/cardsListProduct';
import InventoryTable from '../table/productTable';

export default function MainContentListProduct() {
  const data = useMemo(
    () => [
      // Add your data here
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: 'Producto',
        accessor: 'product',
      },
      {
        Header: 'Categoría',
        accessor: 'category',
      },
      {
        Header: 'Descripción',
        accessor: 'description',
      },
      {
        Header: 'Cantidad',
        accessor: 'quantity',
      },
      {
        Header: 'Precio',
        accessor: 'price',
      },
    ],
    []
  );

  return (
    <div className="p-8">
      <div className="grid grid-cols-3 gap-4 mb-6">
        <SummaryCard
          title="Disponibles"
          count={200}
          icon="📦"
          bgColor="bg-gray-100"
        />
        <SummaryCard
          title="Disponibles"
          count={200}
          icon="✅"
          bgColor="bg-green-100"
        />
        <SummaryCard
          title="No disponibles"
          count={200}
          icon="❌"
          bgColor="bg-red-100"
        />
      </div>

      <h2 className="text-xl font-semibold mb-4">Inventario</h2>
      
      <div className="mb-4">
        Filas:
        <select className="border p-1 ml-2">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
      </div>

      <div className="relative">
        <input
          type="text"
          placeholder="Buscar producto..."
          className="absolute right-0 p-2 border rounded mb-4"
        />
      </div>

      <InventoryTable columns={columns} data={data} />
    </div>
  );
}
