import { Logo } from "@/components/Logo";
import { HeaderInfo } from "@/components/HeaderInfo";
import { MortgageForm } from "@/components/MortgageForm";
import { RepaymentForm } from "@/components/RepaymentForm";
import { RepaymentsBox } from "@/components/RepaymentsBox";
import { Table } from "@/components/Table";
import { Lato } from "next/font/google";

const appFont = Lato({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      id="app-container"
      data-testid={"mortgage-app"}
      className={appFont.className}
    >
      <div className="row">
        <div className="column">
          <Logo />
        </div>
        <div className="column">
          <HeaderInfo />
        </div>
      </div>
      <div className="row">
        <div className="column">
          <MortgageForm />
          <RepaymentForm />
          <RepaymentsBox />
        </div>
        <div className="column">
          <Table />
        </div>
      </div>
    </div>
  );
}
