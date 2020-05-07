<script>
    import Card from "./Card.svelte";
    export let isFirstElement = false;

    export let title = "";
    let customTitle = "";
    const setCustomTitle = (value) => customTitle = value;

    const start = Card;
    let cards = isFirstElement ? [start] : [];
    const updateCards = (update) => cards = [...update];
</script>

<div class="container">
    <h3 class="title">
        <input
            on:input={e => setCustomTitle(e.target.value)}
            class="title-input"
            value={customTitle !== "" ? customTitle : title}
            placeholder="title goes here..."/>
    </h3>
    <div class="cards">
        {#each cards as c}
            <Card />
        {/each}
    </div>
    <button on:click={(e) => updateCards([...cards, Card])}>New Card...</button>
</div>

<style>
    .container {
        display: block;
        height: auto;
        width: 240px;
        background-color: #d4d4d4;
        border-radius: 8px;
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