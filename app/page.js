import {Button} from "@/components/ui/button"
import {cn} from "@/lib/utils"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"

export default function Page() {
	return (
		<div className={cn("flex justify-center h-screen mx-auto flex-col w-fit")}>
			<Card className='w-[350px]'>
				<CardHeader>
					<CardTitle>Авторизация</CardTitle>
					<CardDescription>Форма для входа.</CardDescription>
				</CardHeader>
				<CardContent>
					<form>
						<div className='grid w-full items-center gap-4'>
							<div className='flex flex-col space-y-1.5'>
								<Label htmlFor='name'>Логин</Label>
								<Input id='name' placeholder='Name of your project' />
							</div>
							<div className='flex flex-col space-y-1.5'>
								<Label htmlFor='framework'>Пароль</Label>
								<Input id='name' placeholder='Name of your project' type='password' />
							</div>
						</div>
					</form>
				</CardContent>
				<CardFooter className='flex justify-between'>
					<Button variant='link'>Регистрация</Button>
					<Button>Войти</Button>
				</CardFooter>
			</Card>
		</div>
	)
}
