<template>
    <div>
        <div class="menu-container row">
            <div class="col-2 center">
                <a class="danger">Home</a>
            </div>
            <div class="col-2 center">
                <a class="danger">About</a>
            </div>
            <div class="col-2 center">
                <a class="danger">Login</a>
            </div>
            <div class="col-6 image-end">
                <div class="photo-container">
                    <img src="../assets/img/impmon_account_photo.png" alt="" height="100%" width="100%" class="circular-photo">
                </div>
            </div>
        </div>    
    </div>
</template>
<script>

</script>
<style>
.menu-container{
    background-color: rgb(255, 195, 116);
    margin: 1%;
    padding: 2%;
}
.center{
    vertical-align: middle;
    text-align: center;
}

.image-end{
    justify-content: flex-e nd;
}
.photo-container{
    max-width: 100px;
    max-height: 100px;
}

.circular-photo{
    border-radius: 50%;
}
</style>