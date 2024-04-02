import { MantineReactTable, useMantineReactTable } from "mantine-react-table";
// import { MRT_Localization_FA } from 'mantine-react-table/locales/fa';
import { useSelector } from "react-redux";

const columns = [
  {
    accessorKey: "broker", //access nested data with dot notation
    header: "کارگزار",
  },
  {
    accessorKey: "productName", //normal accessorKey
    header: "نام کالا",
  },
  {
    accessorKey: "releaseDate",
    header: "تاریخ عرضه ",
    size:160
  },
  {
    accessorKey: "logo",
    header: "نماد",
  },
  {
    accessorKey: "packageType",
    header: "نوع بسته بندی",
    size:200
  },
  {
    accessorKey: "producer",
    header: "تولید کننده",
    size: 275
  },
  {
    accessorKey: "productVolume",
    header: "حجم قابل عرضه",
    size:200
  },
  {
    accessorKey: "price",
    header: "قیمت پایه",
    size: 150
  },
  {
    accessorKey: "unit",
    header: "واحد",
    // accessorFn: (row) => {
    //   return <span className="border border-r-2">{row.unit}</span>
    // }
  },
];

const ArzeTable = () => {
  const data = useSelector((state) => state.allData.data);

  const table = useMantineReactTable({
    columns,
    data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    // enableColumnResizing: true,


    columnFilterDisplayMode: "popover",
    initialState: {
      pagination: { pageSize: 20, pageIndex: 0 },
      showGlobalFilter: true,
      density: "xs",
    },

    mantineTableBodyCellProps: {
      sx: {
        padding: "20px",
        justifyContent: "flex-start",
        fontSize: "15px !important",
      },
    },

    mantineTableBodyProps: {
      sx: {
        fontFamily: "Yekan, sans-serif",
        color: "#2D3142",
      },
    },

    mantineTableHeadProps: {
      sx: {
        fontFamily: "Yekan, sans-serif",
        color: "#2D3142",
      },
    },


    columnResizeDirection: "rtl",
    enableColumnResizing: true,
    mantinePaginationProps: {
      rowsPerPageOptions: ["20", "50", "100"],
      className: "active-pagination-table",
      color: "#0069ff",
      //showRowsPerPage:false
    },

    layoutMode: "grid",

    paginationDisplayMode: "pages",
    positionGlobalFilter: "left",
    enableStickyHeader: "true",
    mantineTableProps: {
      highlightOnHover: true,
      withColumnBorders: true,
      striped: true,
      className: "mt-2",
    },

    mantinePaperProps: {
      style: { boxShadow: "none", border: "none", borderRadius: "0.5rem" },
    },

    mantineSearchTextInputProps: {
      placeholder: "جستجو کنید...",

      styles: { input: { fontFamily: "Yekan, sans-serif" , textAlign:'right' } },
    },
  });

  return (
    <div className="my-5">
      <MantineReactTable
        table={table}
        enableStickyFooter
        // localization={MRT_Localization_FA}
      />
    </div>
  );
};

export default ArzeTable;
