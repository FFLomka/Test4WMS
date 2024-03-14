"use client"

import {Button} from "@/components/ui/button"
import {cn} from "@/lib/utils"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {useState} from "react"

export default function Page() {
	const [from, setFrom] = useState("auth")

	return (
		<div className={cn("flex justify-center h-screen mx-auto flex-col w-fit")}>
			<Card className='w-[350px]'>
				<CardHeader>
					<CardTitle>{{auth: "Авторизация", reg: "Регистрация"}[from]}</CardTitle>
					<CardDescription>{{auth: "Введите данные для входа", reg: "Тут можно зарегистрироваться"}[from]}</CardDescription>
				</CardHeader>
				<CardContent>
					<form>
						<div className='grid w-full items-center gap-4'>
							<div className='flex flex-col space-y-1.5'>
								<Label htmlFor='name'>Почта</Label>
								<Input id='name' placeholder='Name of your project' />
							</div>
							<div className='flex flex-col space-y-1.5'>
								<Label>Пароль</Label>
								<Input id='framework' placeholder='Name of your project' type='password' />
							</div>
						</div>
					</form>
				</CardContent>
				<CardFooter className='flex justify-between'>
					<Button
						variant='link'
						onClick={() => {
							setFrom({auth: "reg", reg: "auth"}[from])
						}}
					>
						{{auth: "Регистрация", reg: "Авторизация"}[from]}
					</Button>
					<Button>{{auth: "Войти", reg: "Зарегистрироваться"}[from]}</Button>
				</CardFooter>
			</Card>
		</div>
	)
}
