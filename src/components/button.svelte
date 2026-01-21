<script lang="ts">
  export let type: "button" | "submit" | "reset" = "button";
  export let disabled: boolean = false;
  export let className: string = "";
  export let onClick: (() => void) | undefined = undefined;
</script>

<button
  type={type}
  class={`inline-block w-auto px-5 py-3 text-[18px] z-10 sm:px-7 sm:py-4 sm:text-[22px] lg:px-[25px] lg:py-[15px] lg:text-[25px] cursor-pointer rounded-full bg-[#2639E0] text-white font-bold shadow-md hover:shadow-[0_0_25px_#2639E080] hover:bg-[#2639E0] transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed active:scale-[1.02] select-none ${className}`}
  disabled={disabled}
  on:click={onClick}
  draggable="false"
  style="user-select: none;"
>
  <span class="select-none" style="user-select: none; -webkit-user-drag: none;"><slot /></span>
</button>
