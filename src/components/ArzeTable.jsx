import { MantineReactTable, useMantineReactTable } from "mantine-react-table";
import { useSelector } from "react-redux";

const columns = [
  {
    accessorKey: "broker", //access nested data with dot notation
    header: "کارگزار",
  },
  {
    accessorKey: "releaseDate",
    header: "تاریخ عرضه ",
  },
  {
    accessorKey: "productName", //normal accessorKey
    header: "نام کالا",
  },
  {
    accessorKey: "logo",
    header: "نماد",
  },
  {
    accessorKey: "packageType",
    header: "نوع بسته بندی",
  },
  {
    accessorKey: "producer",
    header: "تولید کننده",
  },
  {
    accessorKey: "productVolume",
    header: "حجم کالای قابل عرضه",
  },
  {
    accessorKey: "price",
    header: "قیمت پایه",
  },
  {
    accessorKey: "unit",
    header: "واحد",
  },
];

const ArzeTable = () => {
  const data = useSelector((state) => state.allData.data);

  const table = useMantineReactTable({
    columns,
    data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)

    columnFilterDisplayMode: "popover",
    initialState: {
      pagination: { pageSize: 20, pageIndex: 0 },
      showGlobalFilter: true,
      density: "xs",
    },

    muiTableBodyCellProps: {
      sx: {
        padding: "20px",
        justifyContent: "flex-end",
      },
    },

    columnResizeDirection: "rtl",
    enableColumnResizing: true,
    mantinePaginationProps: {
      rowsPerPageOptions: ["20", "50", "100"],
      className: "active-pagination-table",
    },

    layoutMode: "grid",

    muiTableProps: {
      className: "mt-3",
    },

    paginationDisplayMode: "pages",
    positionGlobalFilter: "left",
    enableStickyHeader: "true",
    mantineTableProps: {
      highlightOnHover: true,
      withColumnBorders: true,
    },

    mantinePaperProps: {
      style: { boxShadow: "none", border: "none", borderRadius: "0.5rem" },
    },
    mantineSearchTextInputProps: {
      placeholder: "جستجو کنید",
    },
  });

  return (
    <div className="my-5">
      <MantineReactTable table={table} enableStickyFooter />
    </div>
  );
};

export default ArzeTable;
