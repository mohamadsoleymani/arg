import { MantineReactTable, useMantineReactTable } from "mantine-react-table";
// import { MRT_Localization_FA } from 'mantine-react-table/locales/fa';
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
      color:'#0069ff',
      //showRowsPerPage:false
      
    },


    layoutMode: "grid",


    paginationDisplayMode: "pages",
    positionGlobalFilter: "left",
    enableStickyHeader: "true",
    mantineTableProps: {
      highlightOnHover: true,
      withColumnBorders: true,
      striped:true,
      className:'mt-2',
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
      <MantineReactTable
        table={table}
        enableStickyFooter
        // localization={MRT_Localization_FA}
      />
    </div>
  );
};

export default ArzeTable;
