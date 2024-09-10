import type { Meta, StoryObj } from "@storybook/react";

import { Button } from ".";
import { Loader2Icon, ThumbsUpIcon } from "lucide-react";

const meta: Meta<typeof Button> = {
	title: "Components/Button",
	component: Button,
	argTypes: {
		size: {
			control: {
				type: "select",
			},
			options: ["default", "sm", "lg", "icon"],
		},
		variant: {
			control: {
				type: "select",
			},
			options: ["default", "destructive", "ghost", "link", "secondary", "outline"],
		},
		onClick: {
			action: "Clicked",
		},
	},

	tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
	args: {
		size: "default",
		variant: "default",
		children: "Default button",
	},
};

export const Small: Story = {
	args: {
		...Default.args,
		size: "sm",
		children: "Small button",
	},
};
export const Large: Story = {
	args: {
		...Default.args,
		size: "lg",
		children: "Large button",
	},
};
export const Destructive: Story = {
	args: {
		...Default.args,
		variant: "destructive",
		children: "Destructive button",
	},
};
export const Disabled: Story = {
	args: {
		...Default.args,
		children: "Disabled button",
		disabled: true,
	},
};
export const Ghost: Story = {
	args: {
		size: "default",
		variant: "ghost",
		children: "Ghost button",
	},
};
export const Link: Story = {
	args: {
		...Default.args,
		variant: "link",
		children: "Link button",
	},
};
export const Outline: Story = {
	args: {
		...Default.args,
		variant: "outline",
		children: "Outline button",
	},
};
export const Secondary: Story = {
	args: {
		...Default.args,
		variant: "secondary",
		children: "Secondary button",
	},
};
export const Icon: Story = {
	args: {
		...Default.args,
		size: "icon",
		children: <ThumbsUpIcon size={16} />,
	},
};
export const TextWithIcon: Story = {
	args: {
		...Default.args,
		className: "gap-2",
		children: (
			<>
				Like me <ThumbsUpIcon size={16} />
			</>
		),
	},
};
