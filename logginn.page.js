

const logginnPage ={
    template: `
    
    <div id = "container" >
    <link rel="stylesheet" href="logginn.css">
   
    <img id="logo" src="/logo.png">
    
    <h1 id="logginntxtH1">Studentklinikken</h1>
    <h2 id="logginntxtH2">Loginn:</h2>
    <router-link to="/contactinfo">Gå til Bestilling </router-link>
    
   
    
        <form  class="loginform" v-show="loginformShow" v-for="user in users" >
        <div >
        <input class="loginformfield" type="text" v-model="usernameinp" placeholder="Brukernavn" required><br>
        <input class="loginformfield" id="passloginn" type="password" v-model="passwordinp" placeholder="Passord" required><br>
       
        <input @click="loginn(user)" class="loginformfield" id="subloginn" type="submit" value="Loginn">
        <br>
        <br>
        <br>
        <button @click="makenewuser" class="loginformfield" id="newuserbtn">Lag Ny Bruker</button>
        </div>
        </form>

    <form class="newuserform" v-show="newuserformShow"  >
    
        <input class="newuserfield" id="newuserfirstname" type="text" 
        v-model="firstname" placeholder="Navn" required><br>

        <input class="newuserfield" id="newuserlastname" type="text" 
        v-model="lastname" placeholder="Etternavn" required><br>

        <input class="newuserfield" id="newuserphone" type="text" 
        v-model="phone" placeholder="Mobilnummer" required><br>
        
        <input class="newuserfield" id="newusermail" type="text" 
        v-model="email" placeholder="Epost" required><br>

        <input class="newuserfield" id="newusername" type="text" 
        v-model="Cusername" placeholder="Skriv ditt brukernavn" required><br>

        <input class="newuserfield" id="newpassloginn" type="text" 
        v-model="Cpassword" placeholder="Skriv ditt Passord" required><br>

        <input @click="clickregister" class="newuserfield" id="register" type="submit" value="Registrer">
        
        <button @click="abortmakenewuser" class="newuserfield" id="abort">Avbryt</button>


    </form>

 </div>
    `,


data(){ 
    return  {
            loginformShow:true,
            newuserformShow:false,
            
            usernameinp:"",
            passwordinp:"",
         

            users: [
                {firstname:"Lasse",
            lastname:"Hovden",
            phone:"9000000",
            email:"lasse@lasse.com",
            Cusername:"lasse",
            Cpassword:"lasse"}],
           
            firstname:"",
            lastname:"",
            phone:"",
            email:"",
            Cusername:"",
            Cpassword:""
            }
            
    },
    methods: {
                
            
                makenewuser: function() {
                    this.loginformShow=false;
                    this.newuserformShow=true;
                },   
               
               abortmakenewuser: function() {
                this.loginformShow=true;
                this.newuserformShow=false;
               },

               clickregister: function(){
                this.users.push(
                    {name:this.firstname,
                    lastname:this.lastname,
                    phone:this.phone,
                    email:this.email,
                    Cusername:this.Cusername,
                    Cpassword:this.Cpassword
                    });  
                    console.log(this.users);
                    this.loginformShow=true;
                this.newuserformShow=false;
                },
                loginn:function(user){
                    const usernamechk= user.Cusername;
                    const usernamed = this.usernameinp;
                    const passwordchk= user.Cpassword;
                    const passwordis=this.passwordinp;
                    if(usernamed==usernamechk&&passwordis==passwordchk){
                             this.$router.replace({ path: "/startpage" });
                             
                           
                         
                        }else{
                            alert("passord eller brukernavn er feil");
                        };
                        
                    },
                   
                       
                        
                       

            }
    

    };
    
    export default logginnPage;