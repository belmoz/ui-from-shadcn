import * as React from "react";

import { cn } from "@/lib/utils";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	validationStatus?: "invalid" | "valid";
	validatorMessage?: string;
}

const validationStates = {
	invalid: "text-destructive",
	valid: "text-chart-2",
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, validationStatus, validatorMessage, ...props }, ref) => {
		const [isPassword, setIsPassword] = React.useState(false);
		const [isVisiblePassword, setIsVisiblePassword] = React.useState(false);

		const inputId = React.useId();

		React.useEffect(() => {
			if (type === "password" && isPassword !== true) {
				setIsPassword(true);
			}
		}, []);

		const handleTogglePasswordVisibility = (e: React.MouseEvent<HTMLDivElement>) => {
			e.stopPropagation();
			setIsVisiblePassword((prev) => !prev);
		};

		return (
			<>
				<div className={`relative ${className}`}>
					<input
						id={inputId}
						type={isPassword ? (isVisiblePassword ? "text" : "password") : type}
						className={cn(
							"flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 pr-8"
						)}
						ref={ref}
						{...props}
					/>
					{isPassword && (
						<span
							className='absolute bottom-1/2 right-3 translate-y-1/2 cursor-pointer *:stroke-muted-foreground'
							onClick={handleTogglePasswordVisibility}
						>
							{isVisiblePassword ? <EyeIcon size={16} /> : <EyeOffIcon size={16} />}
						</span>
					)}
				</div>

				{!!validatorMessage && !!validationStatus && (
					<p className={`mt-1 ${validationStates[validationStatus]}`}>{validatorMessage}</p>
				)}
			</>
		);
	}
);
Input.displayName = "Input";

export { Input };
