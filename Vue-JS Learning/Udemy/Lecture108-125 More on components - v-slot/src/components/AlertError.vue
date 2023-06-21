<template>
    <dialog open>   <!-- dialog is html default tag and open is mandotory to open dialog -->
        <slot></slot>
    </dialog>       <!-- create alert box -->
</template>

<style scoped>
    dialog {
        margin: 0;
        position: fixed;
        top: 20vh;
        left: 30%;
        width: 40%;
        box-shadow: 0 4px 8px rgba(0,0,0,0.3);
        border-color:red;
        background-color: white;
        color: red;
    }
</style>