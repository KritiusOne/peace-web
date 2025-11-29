import { BasicLivingCost, CashFlow, DebtsSection, SavingsSection } from "@/sections/Money"

export default function MoneyPage() {
  return (
    <div className="flex h-full flex-col py-2 bg-neutral-1000 gap-8">
      <CashFlow />
      <BasicLivingCost />
      <DebtsSection />
      <SavingsSection />
      <div>
        <h2>History</h2>
      </div>
    </div>
  );
}
