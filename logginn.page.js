

const logginnPage ={
    template: `
    
    <div>
    <link rel="stylesheet" href="logginn.css">
   
    <img id="pageimg" src="/logo.png">
    
    <h1 id="logginntxtH1">Studentklinikken</h1>
    <h2 id="logginntxtH2">Loginn:</h2>
    
   
    
        <form class="loginform" v-show="loginformShow">
        <input class="loginformfield" id="userloginn" type="text" name="brukernavn" placeholder="Brukernavn" required><br>
        <input class="loginformfield" id="passloginn" type="password" name="passord" placeholder="Passord" required><br>
        <input @click="clickloginn" class="loginformfield" id="subloginn" type="submit" value="Loginn">
        <br>
        <br>
        <br>
        <button @click="makenewuser" class="loginformfield" id="newuserbtn">Lag Ny Bruker</button>
        </form>

    <form class="newuserform" v-show="newuserformShow" >
    
        <input class="newuserfield" id="newuserfirstname" type="text" 
        name="firstname" placeholder="Navn" required><br>

        <input class="newuserfield" id="newuserlastname" type="text" 
        name="lastname" placeholder="Etternavn" required><br>

        <input class="newuserfield" id="newuserphone" type="text" 
        name="phone" placeholder="Mobilnummer" required><br>
        
        <input class="newuserfield" id="newusermail" type="text" 
        name="email" placeholder="Epost" required><br>

        <input class="newuserfield" id="newusername" type="text" 
        name="brukernavn" placeholder="Skriv ditt brukernavn" required><br>

        <input class="newuserfield" id="newpassloginn" type="text" 
        name="passord" placeholder="Skriv ditt Passord" required><br>

        <input class="newuserfield" id="register" type="submit" value="Registrer">
        
        <button @click="abortmakenewuser" class="newuserfield" id="abort">Avbryt</button>


    </form>

 </div>
    `,


data(){ 
    return  {
            loginformShow:true,
            newuserformShow:false,
            Users:[]
            }
    },
    methods: {
        clickloginn: function(text) {
            alert("Du har logget inn")},
        
            makenewuser: function() {
                this.loginformShow=false;
                this.newuserformShow=true;
               },   
               
               abortmakenewuser: function() {
                this.loginformShow=true;
                this.newuserformShow=false;
               },    


    },
    
};
    export default logginnPage;