<script lang="ts">
    import AppleEmoji from "../components/AppleEmoji.svelte";
    import Tag from "../components/Tag.svelte";
</script>

<section
    class="relative flex flex-col items-center justify-center w-full py-20 bg-[#111116] overflow-hidden"
>
    <Tag className="mx-auto mt-2.5">
        <AppleEmoji symbol="📊" size={18} className="!w-auto" />
        <span class="text-[14px] text-white font-medium leading-none">
            Strategie mého portfolia
        </span>
    </Tag>
</section>
