/* eslint-disable no-undef */
import { MantineReactTable, useMantineReactTable } from "mantine-react-table";
import { MRT_Localization_FA } from 'mantine-react-table/locales/fa';
import { useSelector } from "react-redux";
import { Minus, TrendDown, TrendUp } from "iconsax-react";
import moment from 'jalali-moment';
import {MantineProvider, useMantineTheme} from '@mantine/core';


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
    accessorKey: "date", //access nested data with dot notation
    header: "تاریخ معامله",
    accessorFn: (row) => moment(row.date).calendar(),
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

const MoamelatTable = () => {
  const dataChart = useSelector((state) => state.allDataChart.data);
  const globalTheme = useMantineTheme()

  const table = useMantineReactTable({
    localization:MRT_Localization_FA,
    columns,
    data: dataChart, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    // defaultColumn: { minSize: 40, maxSize: 1000, size: 180 }, 

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
        fontSize: "17px !important",
      },
    },

    // columnResizeDirection: "rtl",
    enableColumnResizing: true,
    mantinePaginationProps: {
      rowsPerPageOptions: ["20", "50", "100"],
      className: "active-pagination-table",
      size:'sm',
      dir:'ltr'
    },

    layoutMode: "grid",

    mantineTableBodyProps: {
      sx: {
        color: "#231f20",
      },
      className:'font-Yekan font-Poppins'
    },

    mantineTableHeadProps: {
      sx: {
        fontFamily: "Yekan",
        color: "#231f20",
      },
    },

    mantineTableHeadCellProps: {
      sx: {
        fontFamily: "Yekan",
        fontSize: "18px !important",
      },
    },

    paginationDisplayMode: "pages",
    positionGlobalFilter: "left",
    enableStickyHeader: "true",
    mantineTableProps: {
      highlightOnHover: true,
      withColumnBorders: true,
      // withBorder:true,
      striped: true,
      className: "mt-5",
    },

    mantinePaperProps: {
      style: { boxShadow: "none", border: "none", borderRadius: "0.5rem" },
    },
    mantineSearchTextInputProps: {
      placeholder: "جستجو کنید...",
      styles: {
        input: { fontFamily: "Yekan", textAlign: "right" },
      },
    },
  });

  return (
      <MantineProvider
          theme={{...globalTheme, primaryColor: 'red', primaryShade: 7}}>
        <div className="my-5">
          <MantineReactTable
              table={table}
              enableStickyFooter
              // localization={MRT_Localization_FA}
          />
        </div>
      </MantineProvider>
  );
};

export default MoamelatTable;
