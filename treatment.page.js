export default{
    template:` 
    <div class="mainContainer">

        <img class="mainLogo" src="Images/logo.png">
        <h1 class="hTag">{{title}}</h1>


        <div class="routerContainer">
        <router-link to="/dateaku" class="elLink">Akupunktur</router-link>
        <img v-on:click="seen = !seen" class="Images" id="img1" src="Images/questionmark-noBackground.png"/>
        </div>

            <div v-if="seen" v-on:click="seen = !seen" id="Popup1" class="testPopup">
            <p v-if="seen">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            </div>
        
        <div class="routerContainer">
        <router-link to="/dateoso" class="elLink">Osteopati</router-link>
        <img v-on:click="seen2 = !seen2" class="Images" id="img2" src="Images/questionmark-noBackground.png"/>
        </div>

            <div v-if="seen2" v-on:click="seen2 = !seen2" id="Popup2" class="testPopup">
            <p v-if="seen2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        
        <div class="routerContainer">
        <router-link to="/datefyso" class="elLink">Fysiologisk Testlab</router-link>
        <img v-on:click="seen3 = !seen3" class="Images" id="img3" src="Images/questionmark-noBackground.png"/>
        </div>

            <div v-if="seen3" v-on:click="seen3 = !seen3" id="Popup3" class="testPopup">
            <p v-if="seen3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        
        <div class="routerContainer">
        <router-link to="/datekost" class="elLink">Kostholdsveiledning</router-link>
        <img v-on:click="seen4 = !seen4" class="Images" src="Images/questionmark-noBackground.png"/>
        </div>
            <div v-if="seen4" v-on:click="seen4 = !seen4" id="Popup4" class="testPopup">
            <p v-if="seen4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
    </div>
    `,
    data(){
        return{
            title: "Velg Behandling",
            seen: false, 
            seen2: false,
            seen3: false,
            seen4: false

        }
    },
    methods:{
        info(){
            alert("Hello World");
        } 
    }
    };

    // <div class="test">
    //<router-link to="/dateaku">Akupunktur</router-link>
    //</div>
    //<router-link to="/dateoso">Osteopati</router-link>
    //<router-link to="/datefyso">Fysiologisk Testlab</router-link>
    //<router-link to="/datekost">Kostholdsveiledning</router-link>
    //<img class="Images" src="Images/questionmark-noBackground.png"/>