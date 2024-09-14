// React
import React from "react";

// Local
import "./LargeCard.css";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import Paper from "@mui/material/Paper";

export interface SaleRow {
  price: number;
  quantity: number;
  world?: string;
}

function LargeCard({ labels, rows }: { labels: string[]; rows: SaleRow[] }) {
  return (
    <div id={"large-card-container"}>
      <div id="large-card-label-container" className="flex">
        {labels.map((label) => (
          <div className="large-card-label" key={label}>
            {label}
          </div>
        ))}
      </div>
      <TableContainer id="large-card-data-table" component={Paper}>
        <Table style={{ tableLayout: "fixed" }}>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                sx={{
                  "&:nth-of-type(odd)": {
                    backgroundColor: "#E8E9F3",
                  },
                  "&:nth-of-type(even)": {
                    backgroundColor: "#CECECE",
                  },
                }}
                key={"home" + index}
              >
                <TableCell align="center">{row.price}</TableCell>
                <TableCell align="center">{row.quantity}</TableCell>
                {row.world ? (
                  <TableCell align="center">{row.world}</TableCell>
                ) : null}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default LargeCard;
