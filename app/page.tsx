import { MoneyCard } from "@/components/ui/card";
import { fixedExpensesMock } from "@/lib/mocks/moneyPageMock";
import {mockTransactions} from "@/lib/mocks/historyMock";

export default function Home() {
  return (
    <div className="flex gap-4 h-full flex-col py-2 bg-neutral-1000">
      <h1 className="text-4xl italic text-secondary-500">Hello there!</h1>
      <div className="flex flex-row flex-wrap gap-4">
        {
          fixedExpensesMock.slice(0,4).map((expense) => (
            <MoneyCard
              key={expense.id}
              headText={expense.title}
              mainText={`$${expense.amount}`}
              footerText={expense.recurrenceInterval}
              type={expense.transactionType === "EXPENSE" ? "negative" : "positive"}
            /> // TODO: it should show only 4 items and only pendings
          ))
        }
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl italic text-secondary-500">Recent Transactions</h2>
        <div className="flex flex-col gap-2">
          {
            mockTransactions.slice(0, 5).map((transaction) => (
              <MoneyCard
                key={transaction.id}
                headText={transaction.createdAt} // TODO: format date properly using a date library
                mainText={`$${transaction.amount}`}
                footerText={`${transaction.date.day}/${transaction.date.month}/${transaction.date.year}`}
                type={transaction.transactionType === "EXPENSE" ? "negative" : "positive"}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}
