<script>
    const placeholder = "Here you can take a note...";
    let inputValue = ""
</script>

 <input
            name="area"
            id="input"
            placeholder="{placeholder}"

            on:input={(e) => inputValue = e.target.value}
   />

<style>
    input {
        display: block;
        height: 100%;
        width: 100%;
        outline: 0;
        border: 0;
        text-overflow: clip;

        word-break: break-word;
        /* text-align: justify; */

        /* text-align-last: center; */
    }


    input:focus, input:active, input::-webkit-textfield-decoration-container {
        outline: 0;
    }
</style>