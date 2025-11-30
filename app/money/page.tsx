import { HistoryComponent } from "@/components/history/History";
import { BasicLivingCost, CashFlow, DebtsSection, SavingsSection } from "@/sections/Money"

export default function MoneyPage() {
  return (
    <div className="flex h-full flex-col py-2 bg-neutral-1000 gap-8">
      <CashFlow />
      <BasicLivingCost />
      <DebtsSection />
      <SavingsSection />
      <HistoryComponent everyItem={false} numberOfItems={5} title="History" />
    </div>
  );
}
