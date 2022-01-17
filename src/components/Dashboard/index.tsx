import { Sumary } from "../Summary";
import { TransacitionsTable } from "../TransacitionsTable";
import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Sumary />
      <TransacitionsTable />
    </Container>
  );
}