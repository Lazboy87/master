export default{
    template:` 
    <div class="mainContainer">
        <h1 class="hTag">Velg Behandling</h1>


        <div class="routerContainer">
        <router-link to="/dateaku" class="elLink">Akupunktur</router-link>
        </div>
        
        <div class="routerContainer">
        <router-link to="/dateoso" class="elLink">Osteopati</router-link>
        </div>
        
        <div class="routerContainer">
        <router-link to="/datefyso" class="elLink">Fysiologisk Testlab</router-link>
        </div>
        
        <div class="routerContainer">
        <router-link to="/datekost" class="elLink">Kostholdsveiledning</router-link>
            <div>
                <img>
            </div>
        </div>
    </div>
    `,
    
    
    };
    // <div class="test">
    //<router-link to="/dateaku">Akupunktur</router-link>
    //</div>
    //<router-link to="/dateoso">Osteopati</router-link>
    //<router-link to="/datefyso">Fysiologisk Testlab</router-link>
    //<router-link to="/datekost">Kostholdsveiledning</router-link>