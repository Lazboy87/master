

const startPage ={
    template: `
    
    <div id = "container">
    
    <link rel="stylesheet" href="startPage.css">
    <img id="logo" src="/logo.png">
    
    <h1 id="logginntxtH1">Studentklinikken</h1>
    <h2 id="logginntxtH2">Hvor ønsker du å gå:</h2>
   

    <button @click="linkmypage" class ="linkbutton">Min Side</button><br>
    <button @click="linkorder" class ="linkbutton">Bestilling</button>
    
   
    </div>
    `,


data(){ 
    return  {
        
            }
    },
    methods: {
        linkmypage:function(){locationmypage:this.$router.replace({ path: "/mypage" })},
        linkorder:function(){locationorder:this.$router.replace({ path: "/treatment" })}

    }
    
};
    export default startPage;