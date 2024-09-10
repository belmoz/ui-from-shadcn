import type { Meta, StoryObj } from "@storybook/react";

import { Input } from ".";
import { Label } from "@/components/Label";

type Props = React.ComponentProps<typeof Input> & { label?: string };

const meta: Meta<Props> = {
	title: "Components/Input",
	component: Input,
	tags: ["autodocs"],
};

export default meta;

// type Story = StoryObj<typeof Input>;
type Story = StoryObj<Props>;

export const Default: Story = {
	args: {
		type: "text",
		placeholder: "Type here...",
	},
};
export const Password: Story = {
	args: {
		type: "password",
		placeholder: "Enter password",
	},
};
export const Email: Story = {
	args: {
		type: "email",
		placeholder: "Enter email",
	},
};
export const File: Story = {
	args: {
		type: "file",
	},
};
export const Disabled: Story = {
	args: {
		...Default.args,
		disabled: true,
	},
};
export const Validated: Story = {
	args: {
		type: "email",
		value: "user@mail.com",
		validationStatus: "valid",
		validatorMessage: "Email is valid",
	},
};
export const WithValue: Story = {
	args: {
		...Default.args,
		value: "Some text here",
	},
};
export const WithLabel: Story = {
	render: ({ label, ...args }) => (
		<Label>
			{label}
			<Input {...args} />
		</Label>
	),
	args: {
		...Default.args,
		label: "Label",
	},
};
