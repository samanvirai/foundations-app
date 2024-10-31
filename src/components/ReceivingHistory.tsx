import styled from "styled-components";

type ReceivingHistoryProps = {
  transactions: Array<{
    date: string;
    stockSymbol: string;
    shares: number;
    pricePerShare: number;
    totalValue: number;
    recipient: string;
  }>;
};

const TableContainer = styled.div`
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
`;

const TableHeader = styled.thead`
  background-color: #8A95A5;
  color: white;
  text-align: left;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableHeaderCell = styled.th`
  padding: 1rem;
  font-weight: bold;
`;

const TableCell = styled.td`
  padding: 1rem;
  border-bottom: 1px solid #ddd;
`;

const ReceivingHistory = ({ transactions }: ReceivingHistoryProps) => {
  return (
    <TableContainer>
      <StyledTable>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Date</TableHeaderCell>
            <TableHeaderCell>Stock Symbol</TableHeaderCell>
            <TableHeaderCell>Shares</TableHeaderCell>
            <TableHeaderCell>Price per Share</TableHeaderCell>
            <TableHeaderCell>Total Value</TableHeaderCell>
            <TableHeaderCell>Recipient</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <tbody>
          {transactions.map((transaction, index) => (
            <TableRow key={index}>
              <TableCell>{transaction.date}</TableCell>
              <TableCell>{transaction.stockSymbol}</TableCell>
              <TableCell>{transaction.shares}</TableCell>
              <TableCell>${transaction.pricePerShare.toFixed(2)}</TableCell>
              <TableCell>${transaction.totalValue.toFixed(2)}</TableCell>
              <TableCell>{transaction.recipient}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
};

export default ReceivingHistory;
