import type { Meta, StoryObj } from "@storybook/react";

import { Card, CardHeader, CardContent, CardDescription, CardFooter, CardTitle } from ".";
import { Label } from "../Label";
import { Input } from "../Input";
import { Button } from "../Button";

const meta: Meta<typeof Card> = {
	title: "Components/Card",
	component: Card,
	argTypes: {
		onClick: {
			action: "Submited",
		},
	},
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
	args: {
		children: (
			<>
				<CardHeader>
					<CardTitle>Create project</CardTitle>
					<CardDescription>Deploy your new project in one-click.</CardDescription>
				</CardHeader>
				<CardContent>
					<form>
						<div className='w-full flex flex-col gap-2'>
							<div>
								<Label htmlFor='name'>Name</Label>
								<Input id='name' placeholder='Name of your project' />
							</div>
							<div>
								<Label htmlFor='description'>Description</Label>
								<Input id='description' placeholder='Description of your project' />
							</div>
						</div>
					</form>
				</CardContent>
				<CardFooter className='flex justify-between'>
					<Button variant='outline'>Cancel</Button>
					<Button>Deploy</Button>
				</CardFooter>
			</>
		),
	},
};

export const WidthFixed: Story = {
	args: {
		className: "w-80",
		children: (
			<>
				<CardHeader>
					<CardTitle>Create project</CardTitle>
					<CardDescription>Deploy your new project in one-click.</CardDescription>
				</CardHeader>
				<CardContent>
					<form>
						<div className='w-full flex flex-col gap-2'>
							<div>
								<Label htmlFor='name'>Name</Label>
								<Input id='name' placeholder='Name of your project' />
							</div>
							<div>
								<Label htmlFor='description'>Description</Label>
								<Input id='description' placeholder='Description of your project' />
							</div>
						</div>
					</form>
				</CardContent>
				<CardFooter className='flex justify-between'>
					<Button variant='outline'>Cancel</Button>
					<Button>Deploy</Button>
				</CardFooter>
			</>
		),
	},
};
