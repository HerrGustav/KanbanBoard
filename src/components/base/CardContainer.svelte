<script>
    import { uuid } from "@/utils/index.js";
    import Card from "./Card.svelte";
    export let isFirstElement = false;

    export let title = "";
    let customTitle = "";
    const setCustomTitle = (value) => customTitle = value;

    const start = Card;
    let cards = isFirstElement ? [start] : [];
    const updateCards = (update) => cards = [...update];

    function handleDrop(e) {
        const id = event.dataTransfer.getData('text');
        const draggableElement = document.getElementById(id);
        const dropzone = event.target;
        dropzone.appendChild(draggableElement);

        event.dataTransfer.clearData();
    }
</script>

<div class="container">
    <h3 class="title">
        <input
            on:input={e => setCustomTitle(e.target.value)}
            on:dragover={(e) => e.preventDefault()}
            class="title-input"
            value={customTitle !== "" ? customTitle : (title ? title : "")}
            placeholder="title goes here..."/>
    </h3>
    <div class="cards" on:dragover={(e) => e.preventDefault()} on:drop="{e => handleDrop(e)}">
        {#each cards as c, i}
            <Card id={`card-component-${uuid()}-${i}`}/>
        {/each}
    </div>
    <button on:click={(e) => updateCards([...cards, Card])}>New Card...</button>
</div>

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

    .container {
        display: block;
        height: auto;
        width: 240px;
        background-color: #d4d4d4;
        border-radius: 8px;
        transition: 0.3s all ease;
        animation: pop-in 0.25s ease both;
    }

    .title {
        display: block;
        margin: 0 auto;
        padding: 15px;
    }

    input {
        display: block;
        height: 100%;
        width: 100%;
        outline: 0;
        border: 0;
        background: transparent;
    }

    input:focus, input:active, input::-webkit-textfield-decoration-container {
        outline: 0;
    }

    .cards {
        padding: 15px;
        min-height: 100px;
    }

    button {
        display: block;
        width: 100%;
        background: transparent;
        text-align: left;
        padding: 15px;
        outline: 0;
        box-shadow: none;
        background-color: #c3c2c2;
        border: 0;
        cursor: pointer;
        border-radius: 0px 0px 8px 8px;
        margin-top: 10px;
        transition: 0.3s all ease;
    }

    button:focus, button:active {
        outline: 0;
    }

    button:hover {
        opacity: 0.6;
    }
</style>