<script>
    import { createEventDispatcher } from 'svelte';
    import HiddenInput from "@/components/base/HiddenInput.svelte";
    export let id;

    const dispatch = createEventDispatcher();
    const onDrag = (e) => {
        e.dataTransfer.setData("text/plain", e.target.id);
    };
</script>

<section id="{id}" class="card" draggable="true" on:dragstart="{e => onDrag(e)}">
    <button class="close" on:click="{(e) =>  dispatch("remove", id)}">X</button>
    <div class="inner">
        <HiddenInput />
    </div>
</section>

<style>
    @keyframes pop-in {
        0% {
            transform: scale(0);
            opacity: 0;
        }

        60% {
            transform: scale(1);
            opacity: 1;
        }

        70% {
            transform: scale(1.05);
            opacity: 1;
        }

        80% {
            transform: scale(1);
            opacity: 1;
        }
    }

    .close {
        position: absolute;
        top: 0;
        right: 0;
        border: 0;
        height: 40px;
        width: 40px;
        background: transparent;
        border-radius: 0px 8px 0px 0px;
        transition: all 0.3s ease;
    }

    .close:hover {
        opacity: 1;
        background-color: #c3c2c2;
    }

    .close:active {
        opacity: 0.8;
    }

    .card {
        position: relative;
        display: block;
        margin: 0 auto;
        height: 200px;
        min-height: 200px;
        width: 200px;
        margin-top: 15px;
        background-color: #fff;
        box-shadow: 0px 0px 2px 1px #9e9a9aee;
        border-radius: 8px;
        padding: 5px;
        transition: 0.3s all ease;
        animation: pop-in 0.25s ease both;
    }

    .card:hover {
        box-shadow: 0px 0px 12px 3px #d8d8d8ee;
        transform: scale(1.02);
    }

    .inner {
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: center;
    }
</style>