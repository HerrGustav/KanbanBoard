<script>
    import { uuid } from "@/utils/index.js";
    import Title from "./Title.svelte";
    import Card from "../Card.svelte";

    export let title = "";
    export let isFirstElement = false;

    let cards = isFirstElement ? [`card-component-${uuid()}`] : [];
    const updateCards = (update) => cards = [...update];

    let dropIsActive = false;
    const handleDrop = (e) => {
        const id = event.dataTransfer.getData('text');
        const draggableElement = document.getElementById(id);
        const dropzone = event.target;
        dropzone.appendChild(draggableElement);

        event.dataTransfer.clearData();
        dropIsActive = false;
    }

    const handleOnDragOver = (e) => {
         e.preventDefault();
        dropIsActive = true;
    };

    const handleOnDragLeave = (e) => {
         e.preventDefault();
         dropIsActive = false;
    };

    const handleRemove = (e) => {
        const id = e.detail;
        const current = [...cards];
        const index = current.indexOf(id);

        if(index > -1) {
            current.splice(index, 1);
            updateCards(current);
        }
    };
</script>

<div class="container">
    <Title title={title} />
    <div class="cards" class:drop-active="{dropIsActive}"  drop-active="false" on:dragleave={(e) => handleOnDragLeave(e)} on:dragover={(e) => handleOnDragOver(e)} on:drop="{e => handleDrop(e)}">
        {#each cards as cardID, i (cardID)}
            <Card id={cardID} on:remove={handleRemove}/>
        {/each}
    </div>
    <button on:click={(e) => updateCards([...cards, `card-component-${uuid()}`])}>New Card...</button>
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

    .cards {
        padding: 15px;
        min-height: 50px;
        transition: 0.3s all ease;
    }

     .drop-active {
        display: block;
        margin: 0 auto;
        background-color: #a0a0a0;
        box-shadow:  0px 0px 19px 3px #6f6f6f;
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