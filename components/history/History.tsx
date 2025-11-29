import { mockTransactions } from "@/lib/mocks/historyMock"
import { MoneyCard } from "../ui/card"
import { CardType, TransactionType } from "@/types/UtilityTypes"

interface HistoryProps {
  title?: string;
  numberOfItems?: number;
  everyItem?: boolean;
}
export const HistoryComponent: React.FC<HistoryProps> = ({
  title = "History",
  numberOfItems = 5,
  everyItem = false
}) => {
  return (
    <div className="flex flex-col gap-4">
        <h2 className="text-2xl italic text-secondary-500">{title}</h2>
        <div className="flex flex-col gap-2">
          {
            !everyItem && mockTransactions.slice(0, numberOfItems).map((transaction) => (
              <MoneyCard
                key={transaction.id}
                headText={transaction.createdAt} // TODO: format date properly using a date library
                mainText={`$${transaction.amount}`}
                footerText={`${transaction.date.day}/${transaction.date.month}/${transaction.date.year}`}
                type={transaction.transactionType === TransactionType.INCOME ? CardType.INCOME : CardType.EXPENSE}
              />
            ))
          }
          {
            everyItem && mockTransactions.map((transaction) => (
              <MoneyCard
                key={transaction.id}
                headText={transaction.createdAt} // TODO: format date properly using a date library
                mainText={`$${transaction.amount}`}
                footerText={`${transaction.date.day}/${transaction.date.month}/${transaction.date.year}`}
                type={transaction.transactionType === TransactionType.INCOME ? CardType.INCOME : CardType.EXPENSE}
              />
            ))
          }
        </div>
      </div>
  )
}