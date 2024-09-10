import { Meta, StoryObj } from "@storybook/react";

import { ThemeProvider, useTheme } from ".";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../Card";
import { Label } from "../Label";
import { Input } from "../Input";
import { Button } from "../Button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../Select";
import { LightbulbIcon, LightbulbOffIcon } from "lucide-react";

const meta: Meta<typeof ThemeProvider> = {
	title: "Components/ThemeProvider",
	component: ThemeProvider,
	tags: ["autodocs"],
	render: (args) => (
		<ThemeProvider defaultTheme={args.defaultTheme} storageKey='ui-from-shadcn'>
			{args.children}
		</ThemeProvider>
	),
};

export default meta;

type Story = StoryObj<typeof ThemeProvider>;

const cardComponent = () => (
	<Card>
		<CardHeader>
			<CardTitle>Create project</CardTitle>
			<CardDescription>Deploy your new project in one-click.</CardDescription>
		</CardHeader>
		<CardContent>
			<form>
				<div className='w-full flex flex-col gap-3'>
					<div>
						<Label htmlFor='name'>Name</Label>
						<Input id='name' placeholder='Name of your project' />
					</div>
					<div>
						<Label htmlFor='description'>Description</Label>
						<Input id='description' placeholder='Description of your project' />
					</div>
					<div>
						<Label>Fruit</Label>
						<Select>
							<SelectTrigger className=''>
								<SelectValue placeholder='Select a fruit' />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectLabel>Fruits</SelectLabel>
									<SelectItem value='apple'>Apple</SelectItem>
									<SelectItem value='banana'>Banana</SelectItem>
									<SelectItem value='blueberry'>Blueberry</SelectItem>
									<SelectItem value='grapes'>Grapes</SelectItem>
									<SelectItem value='pineapple'>Pineapple</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
				</div>
			</form>
		</CardContent>
		<CardFooter className='flex justify-between'>
			<Button variant='outline'>Cancel</Button>
			<Button>Deploy</Button>
		</CardFooter>
	</Card>
);

export const Default: Story = {
	args: {
		defaultTheme: "system",
		children: cardComponent(),
	},
};
export const Light: Story = {
	args: {
		defaultTheme: "light",
		children: cardComponent(),
	},
};
export const Dark: Story = {
	args: {
		defaultTheme: "dark",
		children: cardComponent(),
	},
};
