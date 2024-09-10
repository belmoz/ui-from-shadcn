import { Meta, StoryObj } from "@storybook/react";

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from ".";
import { Button } from "../Button";
import { Label } from "../Label";
import { Input } from "../Input";

const meta: Meta<typeof Dialog> = {
	title: "Components/Dialog",
	component: Dialog,
	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Dialog>;

const renderDefaultDialog = () => {
	return (
		<>
			<DialogTrigger asChild>
				<Button variant='outline'>Edit Profile</Button>
			</DialogTrigger>
			<DialogContent className='sm:max-w-[425px]'>
				<DialogHeader>
					<DialogTitle>Edit profile</DialogTitle>
					<DialogDescription>
						Make changes to your profile here. Click save when you're done.
					</DialogDescription>
				</DialogHeader>
				<div className='grid gap-4 py-4'>
					<div className='grid grid-cols-4 items-center gap-4'>
						<Label htmlFor='name' className='text-right'>
							Name
						</Label>
						<Input id='name' value='Pedro Duarte' className='col-span-3' />
					</div>
					<div className='grid grid-cols-4 items-center gap-4'>
						<Label htmlFor='username' className='text-right'>
							Username
						</Label>
						<Input id='username' value='@peduarte' className='col-span-3' />
					</div>
				</div>
				<DialogFooter>
					<Button type='submit'>Save changes</Button>
				</DialogFooter>
			</DialogContent>
		</>
	);
};

export const Default: Story = {
	args: {
		modal: true,
		children: renderDefaultDialog(),
	},
};
export const NoModal: Story = {
	args: {
		modal: false,
		children: renderDefaultDialog(),
	},
};
export const DefaultOpen: Story = {
	args: {
		defaultOpen: true,
		children: renderDefaultDialog(),
	},
};
export const Open: Story = {
	args: {
		open: true,
		children: renderDefaultDialog(),
	},
};
