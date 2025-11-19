import * as React from "react"

import { cn } from "@/lib/utils"
import { ArrowBottomRightIcon, ArrowTopRightIcon } from "@radix-ui/react-icons"

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  )
}

interface MoneyCardProps extends React.ComponentProps<typeof Card> {
  headText: string;
  mainText: string;
  footerText?: string;
  type: "positive" | "negative" | "neutral" | "info";
}
const MoneyCard: React.FC<MoneyCardProps> = ({
  headText,
  mainText,
  footerText,
  type,
  ...props
}) => {
  return (
    <Card className={`border-none flex flex-row justify-around items-center px-4 ${type == "positive" ? "bg-primary-500" : type === "negative" ? "bg-red-500" : "bg-neutral-500"} w-md ${props.className}`} {...props}>
      <CardContent className={`flex flex-col gap-2 justify-start items-start p-0`}>
          <span className="text-left text-lg font-medium text-neutral-400">
            {headText}
          </span>
          <h3 className="text-left text-3xl font-bold">
            {mainText}
          </h3>
          {
            footerText && <span className="text-left text-sm text-muted-foreground flex flex-row gap-0 justify-center items-center">
            {
              type == "positive" && <ArrowTopRightIcon className="text-primary-300" height={16} width={16} />
            }
            {
              type == "negative" && <ArrowBottomRightIcon className="text-red-500" height={16} width={16} />
            }
            {footerText}
          </span>
          }
      </CardContent>
      <CardFooter className={`bg-[#1b1609] rounded-md p-2`}>
        {
          type == "positive" && <ArrowTopRightIcon className="text-green-500" height={48} width={48} />
        }
        {
          type == "negative" && <ArrowBottomRightIcon className="text-red-500" height={48} width={48} />
        }
      </CardFooter>
    </Card>
  ) 
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
  MoneyCard,
}
