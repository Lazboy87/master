
    
const startPage ={
   
    template: `
    
    <div id = "container">
    
    <link rel="stylesheet" href="startPage.css">
    <img id="logo" src="/logo.png">
    <div id=iddiv>
    <img id="idimg" src="Images/Id.png">
     Bruker
    </div>
    
    <h1 id="logginntxtH1">Studentklinikken</h1>
    <h2 id="logginntxtH2">Hvor ønsker du å gå:</h2>
   

    <button @click="linkmypage" class ="linkbutton">Min Side</button><br>
    <button @click="linkorder" class ="linkbutton">Bestilling</button>
    
   
    </div>
    `,
    
   
data(){ 
 

    return  {
           userarray: Users,

            }
    },
    methods: {
        linkmypage:function(){locationmypage:this.$router.replace({ path: "/myPage" })},
        linkorder:function(){locationorder:this.$router.replace({ path: "/treatment" })}
        
    }
    
};
    export default startPage;