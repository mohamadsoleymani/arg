/* eslint-disable no-undef */
import { MantineReactTable, useMantineReactTable } from "mantine-react-table";
import { useSelector } from "react-redux";
import { Minus, TrendDown, TrendUp } from "iconsax-react";

const columns = [
  {
    accessorKey: "broker", //access nested data with dot notation
    header: "کارگزار",
  },
  {
    accessorKey: "name", //access nested data with dot notation
    header: "نام کالا",
  },
  {
    accessorKey: "avregePrice", //access nested data with dot notation
    header: "قیمت میانگین",
  },
  {
    accessorKey: "arzePrice", //access nested data with dot notation
    header: "قیمت عرضه",
  },
  {
    accessorKey: "date", //access nested data with dot notation
    header: "تاریخ معامله",
  },
  {
    accessorFn: (row) => (
      // eslint-disable-next-line no-undef
      <span dir="ltr">{Number(row.avregePrice) - row.arzePrice}</span>
    ),
    header: "میزان رقابت",
  },
  {
    accessorFn: (row) => (
      <span dir="ltr">
        {((Number(row.avregePrice) * 100) / row.arzePrice - 100).toFixed(2)}
      </span>
    ),
    header: "درصد رقابت",
  },
  {
    accessorFn: (row) => {
      const comptitionPercentage = parseFloat(
        ((Number(row.avregePrice) * 100) / row.arzePrice - 100).toFixed(2)
      );
      if (comptitionPercentage === 0) {
        return <Minus />;
      } else if (comptitionPercentage > 0) {
        return <TrendUp size="32" color="#55a630" variant="Bulk" />;
      } else {
        return <TrendDown size="32" color="#da291c" variant="Bulk" />;
      }
    },
    header: "برآیند",
  },
];

const Table2 = () => {
  const dataChart = useSelector((state) => state.allDataChart.data);

  const table = useMantineReactTable({
    columns,
    data: dataChart, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)

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

export default Table2;
