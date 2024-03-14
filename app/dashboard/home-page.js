"use client"
import {cn} from "@/lib/utils"
import {Button} from "@/components/ui/button"
import {Calendar} from "@/components/ui/calendar"
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover"
import {useState} from "react"
import {Calendar as CalendarIcon} from "lucide-react"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {format} from "date-fns"

export default function Page({data: dataRaw}) {
	const [date, setDate] = useState()

	return (
		<div className={cn("flex flex-col divide-y divide-solid")}>
			<div className={cn("p-5 flex justify-between")}>
				<h1 className={cn("text-3xl font-semibold tracking-tight")}>Дашборд</h1>
				<div className={cn("flex")}>
					<Popover>
						<PopoverTrigger asChild>
							<Button variant={"outline"} className={cn("w-[280px] justify-start text-left font-normal", !date && "text-muted-foreground")}>
								<CalendarIcon className={cn("mr-2 h-4 w-4")} />
								{date ? format(date, "PPP") : <span>Pick a date</span>}
							</Button>
						</PopoverTrigger>
						<PopoverContent className={cn("w-auto p-0")}>
							<Calendar mode='single' selected={date} onSelect={setDate} initialFocus />
						</PopoverContent>
					</Popover>
				</div>
			</div>
			<div className={cn("p-5 flex justify-center gap-5")}>
				<Card className='w-[30%]'>
					<CardHeader>
						<CardTitle>Информационные</CardTitle>
					</CardHeader>
					<CardContent>
						<CardTitle className={cn("font-bold tracking-wide text-3xl")}>2526 шт</CardTitle>
						<CardDescription>Кол-во сообщений</CardDescription>
					</CardContent>
				</Card>
				<Card className='w-[30%]'>
					<CardHeader>
						<CardTitle>Предупреждающее</CardTitle>
					</CardHeader>
					<CardContent>
						<CardTitle className={cn("font-bold tracking-wide text-3xl")}>674 шт</CardTitle>
						<CardDescription>Кол-во сообщений</CardDescription>
					</CardContent>
				</Card>
				<Card className='w-[30%]'>
					<CardHeader>
						<CardTitle>Сообщения об ошибке</CardTitle>
					</CardHeader>
					<CardContent>
						<CardTitle className={cn("font-bold tracking-wide text-3xl")}>19685 шт</CardTitle>
						<CardDescription>Кол-во сообщений</CardDescription>
					</CardContent>
				</Card>
			</div>
		</div>
	)
}
