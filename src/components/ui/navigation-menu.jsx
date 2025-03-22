import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { ChevronDownIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function NavigationMenu({ className, children, viewport = true, ...props }) {
	// Add a ref to access the root element
	const rootRef = React.useRef(null);

	// Modify the centerViewport function to also handle closing animations
	const centerViewport = React.useCallback(() => {
		// Wait for DOM updates
		setTimeout(() => {
			if (!rootRef.current) return;

			// Find the active trigger and viewport
			const trigger = rootRef.current.querySelector('[data-state="open"]');
			const viewportWrapper = rootRef.current.querySelector(
				'[data-slot="navigation-menu-viewport"]'
			)?.parentElement;
			const viewport = viewportWrapper?.firstChild;

			if (!viewportWrapper || !viewport) return;

			// If there's an active trigger, center the viewport under it
			if (trigger) {
				const triggerRect = trigger.getBoundingClientRect();
				const rootRect = rootRef.current.getBoundingClientRect();

				// Calculate the center position of the trigger relative to the root
				const triggerCenter =
					triggerRect.left + triggerRect.width / 2 - rootRect.left;

				// Set the position directly on the wrapper element
				viewportWrapper.style.justifyContent = "flex-start";
				viewportWrapper.style.width = "100%";

				// Store the position in a data attribute so we can use it during closing
				viewport.dataset.centerPosition = `translateX(${triggerCenter}px) translateX(-50%)`;
				viewport.style.transform = viewport.dataset.centerPosition;
			}
			// Even if there's no active trigger, maintain the last position during closing
			else if (viewport.dataset.centerPosition) {
				viewport.style.transform = viewport.dataset.centerPosition;
			}
		}, 0);
	}, []);

	// Set up event listeners for value changes
	React.useEffect(() => {
		if (!rootRef.current) return;

		// Create a mutation observer to watch for state changes
		const observer = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				if (
					mutation.attributeName === "data-state" &&
					mutation.target.getAttribute("data-state") === "open"
				) {
					centerViewport();
				}
			});
		});

		// Observe all current and future trigger elements
		const observeAllTriggers = () => {
			const triggers = rootRef.current.querySelectorAll(
				'[data-slot="navigation-menu-trigger"]'
			);
			triggers.forEach((trigger) => {
				observer.observe(trigger, { attributes: true });
			});
		};

		// Initial observation
		observeAllTriggers();

		// Set up a mutation observer to watch for new triggers
		const rootObserver = new MutationObserver(() => {
			observeAllTriggers();
		});

		rootObserver.observe(rootRef.current, { childList: true, subtree: true });

		return () => {
			observer.disconnect();
			rootObserver.disconnect();
		};
	}, [centerViewport]);

	return (
		<NavigationMenuPrimitive.Root
			ref={rootRef}
			data-slot="navigation-menu"
			data-viewport={viewport}
			className={cn(
				"group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
				className
			)}
			onValueChange={centerViewport}
			{...props}
		>
			{children}
			{viewport && <NavigationMenuViewport />}
		</NavigationMenuPrimitive.Root>
	);
}

function NavigationMenuList({ className, ...props }) {
	return (
		<NavigationMenuPrimitive.List
			data-slot="navigation-menu-list"
			className={cn(
				"group flex flex-1 list-none items-center justify-center gap-1",
				className
			)}
			{...props}
		/>
	);
}

function NavigationMenuItem({ className, ...props }) {
	return (
		<NavigationMenuPrimitive.Item
			data-slot="navigation-menu-item"
			className={cn("relative", className)}
			{...props}
		/>
	);
}

const navigationMenuTriggerStyle = cva(
	"group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1"
);

function NavigationMenuTrigger({ className, children, ...props }) {
	return (
		<NavigationMenuPrimitive.Trigger
			data-slot="navigation-menu-trigger"
			className={cn(navigationMenuTriggerStyle(), "group", className)}
			{...props}
		>
			{children}
			<ChevronDownIcon
				className="relative size-5 transition duration-300 group-data-[state=open]:rotate-180"
				fill="currentColor"
				strokeWidth={0}
				aria-hidden="true"
			/>
		</NavigationMenuPrimitive.Trigger>
	);
}

function NavigationMenuContent({ className, ...props }) {
	return (
		<NavigationMenuPrimitive.Content
			data-slot="navigation-menu-content"
			className={cn(
				"data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
				"group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-300 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
				className
			)}
			style={{
				transition: "all 300ms ease-out",
			}}
			{...props}
		/>
	);
}

function NavigationMenuViewport({ className, ...props }) {
	return (
		<div
			className={cn(
				"absolute top-full right-0 isolate z-50 flex justify-center"
			)}
		>
			<NavigationMenuPrimitive.Viewport
				data-slot="navigation-menu-viewport"
				className={cn(
					"origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-80 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--radix-navigation-menu-viewport-width)]",
					className
				)}
				style={{
					transition: "all 300ms ease-out",
				}}
				{...props}
			/>
		</div>
	);
}

function NavigationMenuLink({ className, ...props }) {
	return (
		<NavigationMenuPrimitive.Link
			data-slot="navigation-menu-link"
			className={cn(
				"data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground p-2 flex flex-col gap-1 rounded-sm text-sm focus-visible:ring-4 focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
				"flex justify-center text-sm xl:text-base",
				className
			)}
			{...props}
		/>
	);
}

function NavigationMenuIndicator({ className, ...props }) {
	return (
		<NavigationMenuPrimitive.Indicator
			data-slot="navigation-menu-indicator"
			className={cn(
				"data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
				className
			)}
			{...props}
		>
			<div className="bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" />
		</NavigationMenuPrimitive.Indicator>
	);
}

export {
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuContent,
	NavigationMenuTrigger,
	NavigationMenuLink,
	NavigationMenuIndicator,
	NavigationMenuViewport,
	navigationMenuTriggerStyle,
};
