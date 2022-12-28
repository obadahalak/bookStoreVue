<template>
    <div class="container">
        <v-row>
            <v-col md="5">
                <p class="UserName">User Name</p>
            </v-col>
            <v-col md="7" style="margin-top: 60px;">
                <v-img width="150" :aspect-ratio="1" src="../images/user.png"></v-img>
            </v-col>  
        </v-row><br><br> 
        <p class="font-weight-bold">Bio</p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio labore ex porro repudiandae cupiditate voluptatem animi! Neque nihil consequuntur facere magni, aliquam possimus odio architecto est quasi? Optio, doloremque suscipit.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad voluptate unde amet illo dolorum earum explicabo, obcaecati tempora voluptatibus cupiditate eaque libero sit voluptas! Consequuntur aspernatur vel explicabo nam perspiciatis!
        </p>
        <p class="font-weight-bold">Address</p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat vero aliquam quos minus sed iusto laborum eveniet veniam nobis officiis fugiat asperiores quidem iste quia, tempora nisi repudiandae soluta. Dolore?
        </p>
        <v-row>
            <v-col md="8"><p class="font-weight-bold">My Interseted</p></v-col>
            <v-col md="3"><v-select label="Select" multiple hint="Pick your favorite states" persistent-hint></v-select></v-col>
        </v-row>
    </div>    
    
</template>
<style scoped>
.UserName{
    color:#f46217;
    font-family: segoe ui;
    font-size: 30px;
}
.font-weight-bold{
    margin: 5px 30px;
    font-family: segoe ui;
    font-size: 30px;
}
p{
    margin: 18px 55px;
}
</style>