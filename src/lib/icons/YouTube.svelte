<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';
	interface Props extends SVGAttributes<SVGElement> {
		width?: number;
		height?: number;
		fill?: string;
	}

	let { width = 160, height = 110, fill = 'currentColor', ...restProps }: Props = $props();
</script>

<svg
	viewBox="0 0 160 110"
	{height}
	{width}
	{...restProps}
>
	<g>
		<path
			{fill}
			d="M154.3,17.5c-1.8-6.7-7.1-12-13.8-13.8c-12.1-3.3-60.8-3.3-60.8-3.3S31,0.5,18.9,3.8    c-6.7,1.8-12,7.1-13.8,13.8C1.9,29.7,1.9,55,1.9,55s0,25.3,3.3,37.5c1.8,6.7,7.1,12,13.8,13.8c12.1,3.3,60.8,3.3,60.8,3.3    s48.7,0,60.8-3.3c6.7-1.8,12-7.1,13.8-13.8c3.3-12.1,3.3-37.5,3.3-37.5S157.6,29.7,154.3,17.5z"
		/>
		<polygon
			fill="#FFFFFF"
			points="64.2,78.4 104.6,55 64.2,31.6   "
		/>
	</g>
</svg>
