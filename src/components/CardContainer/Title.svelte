<script>
    export let title = "";
    let customTitle = "";
    const setCustomTitle = (value) => customTitle = value;
</script>

<h3 class="title">
        <input
            on:input={e => setCustomTitle(e.target.value)}
            on:dragover={(e) => e.preventDefault()}
            class="title-input"
            value={customTitle !== "" ? customTitle : (title ? title : "")}
            placeholder="title goes here..."/>
</h3>

<style>
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

</style>