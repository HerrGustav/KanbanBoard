<script>
    import CardContainer from "./CardContainer.svelte";

    let containers = [{ isFirstElement: true, title: "To Do" }];
    const updateContainers = (update) => containers = [...update];
</script>

<section class="stack">
    <div class="containers">
        {#each containers as c}
            <div class="wrap">
                <CardContainer title={c.title} isFirstElement={c.isFirstElement}/>
            </div>
        {/each}
    </div>
    <button on:click={(e) => updateContainers([...containers, {}])}>+</button>
</section>

<style>
     .stack, .containers {
        display: flex;
    }

    .wrap {
        margin-left: 15px;
    }

    button {
        margin-left: 15px;
        height: 50px;
        width: 50px;
        border: 0;
        border-radius: 50%;
        box-shadow: none;
        background-color: #ff3e00;
        color: #fff;
        font-weight: bold;
        transition: 0.3s all ease;
        cursor: pointer;
    }

      button:hover {
        box-shadow: 0px 0px 12px 3px #d8d8d8ee;
        opacity: 0.8;
        transform: scale(1.07);
    }
</style>