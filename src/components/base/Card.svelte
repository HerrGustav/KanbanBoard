<script>
    const placeholder = "Here you can take a note...";
    let state = {
        value: "",
    };

    const updateState = (update) => { state = {...update}; };
</script>

<section class="card">
    <div class="inner">
        <input
            name="area"
            id="input"
            placeholder="{placeholder}"

            on:input={(e) => updateState({...state, value: e.target.value})}
        />
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

    .card {
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
    }

    .inner {
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: center;
    }

    input {
        display: block;
        height: 100%;
        width: 100%;
        outline: 0;
        border: 0;
    }

    input:focus, input:active, input::-webkit-textfield-decoration-container {
        outline: 0;
    }
</style>